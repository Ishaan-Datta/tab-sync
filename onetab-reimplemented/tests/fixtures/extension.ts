import {
  chromium,
  expect,
  test as base,
  type BrowserContext,
  type Page,
  type Worker,
} from "@playwright/test";
import { cp, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

declare const chrome: any;

type ExtensionLabel = "original" | "candidate";

export interface BrowserStateSeed {
  tabs?: BrowserTabSeed[];
  windows?: BrowserWindowSeed[];
}

export interface BrowserTabSeed {
  active?: boolean;
  pinned?: boolean;
  title?: string;
  url: string;
}

export interface BrowserWindowSeed {
  tabs: BrowserTabSeed[];
}

export interface StoredOneTabSeed {
  groups?: StoredOneTabGroupSeed[];
}

export interface StoredOneTabGroupSeed {
  groupType?: "folder" | "tabGroup" | "window";
  id?: string;
  label?: string;
  tabs: StoredOneTabTabSeed[];
}

export interface StoredOneTabTabSeed {
  id?: string;
  notes?: string;
  title: string;
  url: string;
}

export interface OpenPageOptions {
  colorScheme?: "dark" | "light" | "no-preference";
  viewport?: { height: number; width: number };
}

export interface RenderSnapshotOptions extends OpenPageOptions {
  actions?: PageInteraction[];
  includeScreenshot?: boolean;
  selectors?: string[];
  settleMs?: number;
  styleProps?: string[];
  waitForSelector?: string;
  waitForSelectorState?: "attached" | "detached" | "hidden" | "visible";
}

export type PageInteraction =
  | {
      name?: string;
      selector: string;
      type: "click" | "dblclick" | "focus" | "hover";
    }
  | { name?: string; selector: string; type: "contextclick" }
  | { name?: string; selector: string; type: "fill"; value: string }
  | { key: string; name?: string; selector: string; type: "press" }
  | { key: string; name?: string; type: "keyboard" }
  | { ms: number; name?: string; type: "wait" }
  | {
      name?: string;
      selector: string;
      state?: "attached" | "detached" | "hidden" | "visible";
      type: "waitForSelector";
    };

export interface ExtensionHarness {
  context: BrowserContext;
  errors: string[];
  extensionDir: string;
  extensionId: string;
  label: ExtensionLabel;
  profileDir: string;
  rootDir: string;
  serviceWorker: Worker;
  createBrowserState(state: BrowserStateSeed): Promise<void>;
  dataSnapshot(): Promise<unknown>;
  openPage(pathname: string, options?: OpenPageOptions): Promise<Page>;
  pageRenderSnapshot(
    pathname: string,
    options?: RenderSnapshotOptions,
  ): Promise<unknown>;
  pageTextSnapshot(pathname: string): Promise<unknown>;
  runtimeSnapshot(): Promise<unknown>;
  seedStoredOneTabData(seed: StoredOneTabSeed): Promise<void>;
  storeCurrentWindowTabs(): Promise<void>;
}

interface ExtensionPair {
  original: ExtensionHarness;
  candidate: ExtensionHarness;
  assertNoCandidateOnlyErrors(): void;
  compareData(): Promise<void>;
  compareRender(
    pathname: string,
    options?: RenderSnapshotOptions,
  ): Promise<void>;
  compareRuntime(): Promise<void>;
  runBoth<T>(
    callback: (extension: ExtensionHarness) => Promise<T>,
  ): Promise<[T, T]>;
}

const defaultRenderSelectors = [
  "body",
  "#contentAreaDiv",
  ".button",
  ".menuItem",
  ".dropdown",
  "input",
  "textarea",
  "[role]",
  "[aria-expanded]",
];

const defaultStyleProps = [
  "backgroundColor",
  "borderColor",
  "color",
  "display",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "opacity",
  "position",
  "textAlign",
  "visibility",
];

const fixtureDir = dirname(fileURLToPath(import.meta.url));
const candidateRoot = resolve(fixtureDir, "../..");
const repoRoot = resolve(candidateRoot, "..");
const defaultOriginalRoot = resolve(repoRoot, "onetab-chrome-src");
const defaultCandidateRoot = resolve(candidateRoot, ".output/chrome-mv3");
const harnessUrl = "https://example.com/onetab-harness";

const chromiumExecutablePath =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ??
  process.env.PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH;

export const test = base.extend<{ extensions: ExtensionPair }>({
  extensions: async ({}, use, testInfo) => {
    let original: ExtensionHarness | undefined;
    let candidate: ExtensionHarness | undefined;

    try {
      original = await launchExtension(
        "original",
        extensionRoot("ONETAB_ORIGINAL_EXTENSION_PATH", defaultOriginalRoot),
      );
      candidate = await launchExtension(
        "candidate",
        extensionRoot("ONETAB_CANDIDATE_EXTENSION_PATH", defaultCandidateRoot),
      );

      await use(createExtensionPair(original, candidate));
    } finally {
      await Promise.allSettled([
        original?.context.close(),
        candidate?.context.close(),
      ]);
      await Promise.allSettled([
        cleanupProfile(original),
        cleanupProfile(candidate),
      ]);

      if (original?.errors.length || candidate?.errors.length) {
        await testInfo.attach("extension-errors.json", {
          body: JSON.stringify(
            {
              original: original?.errors ?? [],
              candidate: candidate?.errors ?? [],
            },
            null,
            2,
          ),
          contentType: "application/json",
        });
      }
    }
  },
});

export { expect };

function extensionRoot(envName: string, fallback: string): string {
  return resolve(process.env[envName] ?? fallback);
}

async function launchExtension(
  label: ExtensionLabel,
  rootDir: string,
): Promise<ExtensionHarness> {
  const userDataDir = await mkdtemp(resolve(tmpdir(), `onetab-${label}-`));
  const extensionDir = await copyExtensionToTempDir(label, rootDir);

  const context = await chromium.launchPersistentContext(userDataDir, {
    executablePath: chromiumExecutablePath,
    headless: !isHeadedRun(),
    args: [
      `--disable-extensions-except=${extensionDir}`,
      `--load-extension=${extensionDir}`,
      "--no-first-run",
      "--no-default-browser-check",
    ],
  });

  const errors: string[] = [];
  await context.route("https://t2.gstatic.com/faviconV2**", async (route) => {
    await route.fulfill({ status: 204 });
  });
  context.pages().forEach((page) => collectPageErrors(label, page, errors));
  context.on("page", (page) => collectPageErrors(label, page, errors));

  const serviceWorker = await waitForExtensionServiceWorker(context);
  collectWorkerErrors(label, serviceWorker, errors);
  const extensionId = new URL(serviceWorker.url()).host;
  await waitForRuntimeState(serviceWorker);
  await closeInitialPages(context);
  const harnessPage = await openHarnessTab(context);
  await waitForHarnessTabState(serviceWorker);
  await closeNonHarnessPages(context, harnessPage);
  await closeNonHarnessTabs(serviceWorker);
  await focusHarnessTab(serviceWorker);
  await harnessPage.bringToFront();
  await waitForHarnessTabState(serviceWorker, { requireSingleTab: true });

  const openExtensionPage = async (
    pathname: string,
    options: OpenPageOptions = {},
  ) => {
    const page = await context.newPage();
    if (options.viewport) await page.setViewportSize(options.viewport);
    if (options.colorScheme) {
      await page.emulateMedia({ colorScheme: options.colorScheme });
    }
    await page.goto(extensionUrl(extensionId, pathname));
    await page.waitForLoadState("domcontentloaded");
    return page;
  };

  return {
    context,
    errors,
    extensionDir,
    extensionId,
    label,
    profileDir: userDataDir,
    rootDir,
    serviceWorker,
    async createBrowserState(state: BrowserStateSeed) {
      await createBrowserState(context, serviceWorker, state);
    },
    async dataSnapshot() {
      return normalizeSnapshot(
        await serviceWorker.evaluate(readDataSnapshot),
        extensionId,
      );
    },
    openPage: openExtensionPage,
    async pageRenderSnapshot(
      pathname: string,
      options: RenderSnapshotOptions = {},
    ) {
      const page = await openExtensionPage(pathname, options);
      try {
        if (options.waitForSelector) {
          await page
            .locator(options.waitForSelector)
            .first()
            .waitFor({ state: options.waitForSelectorState ?? "visible" });
        }

        await page.waitForTimeout(options.settleMs ?? 250);
        await performPageInteractions(page, options.actions ?? []);
        await page.waitForTimeout(options.settleMs ?? 250);

        const renderSnapshot = await page.evaluate(readRenderSnapshot, {
          selectors: options.selectors ?? defaultRenderSelectors,
          styleProps: options.styleProps ?? defaultStyleProps,
        });
        const screenshot = options.includeScreenshot
          ? (await page.screenshot({ fullPage: true })).toString("base64")
          : undefined;

        return normalizeSnapshot(
          {
            pathname,
            ...renderSnapshot,
            ...(screenshot ? { screenshot } : {}),
          },
          extensionId,
        );
      } finally {
        await page.close().catch(() => {});
      }
    },
    async pageTextSnapshot(pathname: string) {
      const page = await openExtensionPage(pathname);
      try {
        await page.waitForTimeout(250);
        return normalizeSnapshot(
          {
            pathname,
            title: await page.title(),
            text: await page
              .locator("body")
              .innerText()
              .catch(() => ""),
          },
          extensionId,
        );
      } finally {
        await page.close().catch(() => {});
      }
    },
    async runtimeSnapshot() {
      return normalizeSnapshot(
        await serviceWorker.evaluate(readRuntimeSnapshot),
        extensionId,
      );
    },
    async seedStoredOneTabData(seed: StoredOneTabSeed) {
      await serviceWorker.evaluate(seedStoredOneTabData, seed);
    },
    async storeCurrentWindowTabs() {
      await pinHarnessTab(serviceWorker);
      const page = await openExtensionPage("popup.html", {
        viewport: { height: 700, width: 900 },
      });
      try {
        await page.getByText("Open OneTab after storing tabs").click();
        const storeButton = page
          .locator(".button")
          .filter({ hasText: /Close tabs? and store in/i })
          .first();
        await storeButton.waitFor({ state: "visible" });
        await storeButton.click();
        await page.waitForTimeout(750).catch(() => {});
      } finally {
        await page.close().catch(() => {});
      }
    },
  };
}

function createExtensionPair(
  original: ExtensionHarness,
  candidate: ExtensionHarness,
): ExtensionPair {
  return {
    original,
    candidate,
    assertNoCandidateOnlyErrors() {
      expect(candidateOnlyErrors(original.errors, candidate.errors)).toEqual(
        [],
      );
    },
    async runBoth<T>(callback: (extension: ExtensionHarness) => Promise<T>) {
      return (await Promise.all([callback(original), callback(candidate)])) as [
        T,
        T,
      ];
    },
    async compareRuntime() {
      await Promise.all([
        settleHarnessRuntime(original.serviceWorker),
        settleHarnessRuntime(candidate.serviceWorker),
      ]);
      await expectSnapshotsToConverge(() =>
        Promise.all([original.runtimeSnapshot(), candidate.runtimeSnapshot()]),
      );
    },
    async compareData() {
      await expectSnapshotsToConverge(() =>
        Promise.all([original.dataSnapshot(), candidate.dataSnapshot()]),
      );
    },
    async compareRender(pathname: string, options: RenderSnapshotOptions = {}) {
      const [originalSnapshot, candidateSnapshot] = await Promise.all([
        original.pageRenderSnapshot(pathname, options),
        candidate.pageRenderSnapshot(pathname, options),
      ]);
      expect(candidateSnapshot).toEqual(originalSnapshot);
    },
  };
}

async function performPageInteractions(page: Page, actions: PageInteraction[]) {
  for (const action of actions) {
    switch (action.type) {
      case "click":
        await page.locator(action.selector).first().click();
        break;
      case "dblclick":
        await page.locator(action.selector).first().dblclick();
        break;
      case "contextclick":
        await page.locator(action.selector).first().click({ button: "right" });
        break;
      case "fill":
        await page.locator(action.selector).first().fill(action.value);
        break;
      case "focus":
        await page.locator(action.selector).first().focus();
        break;
      case "hover":
        await page.locator(action.selector).first().hover();
        break;
      case "keyboard":
        await page.keyboard.press(action.key);
        break;
      case "press":
        await page.locator(action.selector).first().press(action.key);
        break;
      case "wait":
        await page.waitForTimeout(action.ms);
        break;
      case "waitForSelector":
        await page
          .locator(action.selector)
          .first()
          .waitFor({ state: action.state ?? "visible" });
        break;
    }
  }
}

async function expectSnapshotsToConverge<T>(
  readSnapshots: () => Promise<[T, T]>,
) {
  const deadline = Date.now() + 5_000;
  let lastSnapshots = await readSnapshots();

  while (Date.now() < deadline) {
    try {
      expect(lastSnapshots[1] as unknown).toEqual(lastSnapshots[0] as unknown);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
      lastSnapshots = await readSnapshots();
    }
  }

  expect(lastSnapshots[1] as unknown).toEqual(lastSnapshots[0] as unknown);
}

async function createBrowserState(
  context: BrowserContext,
  serviceWorker: Worker,
  state: BrowserStateSeed,
) {
  const windows = state.windows ?? [{ tabs: state.tabs ?? [] }];

  for (const windowSeed of windows) {
    const pages: Page[] = [];
    for (const tabSeed of windowSeed.tabs) {
      if (tabSeed.title && /^https?:\/\//.test(tabSeed.url)) {
        await context.route(
          tabSeed.url,
          async (route) => {
            await route.fulfill({
              contentType: "text/html",
              body: `<!doctype html><title>${escapeHtml(tabSeed.title ?? "OneTab Test Page")}</title><h1>${escapeHtml(tabSeed.title ?? "OneTab Test Page")}</h1>`,
            });
          },
          { times: 1 },
        );
      }

      const page = await context.newPage();
      await page.goto(tabSeed.url, { waitUntil: "domcontentloaded" });
      pages.push(page);
    }

    const activeTabIndex = windowSeed.tabs.findIndex((tab) => tab.active);
    const activePage =
      pages[activeTabIndex === -1 ? pages.length - 1 : activeTabIndex];
    await activePage?.bringToFront();
  }

  await serviceWorker.evaluate(
    async (seed) => {
      const tabs = await chrome.tabs.query({});
      const unmatchedTabs = [...tabs];

      for (const tabSeed of seed.windows.flatMap(
        (windowSeed) => windowSeed.tabs,
      )) {
        if (tabSeed.pinned === undefined) continue;

        const matchIndex = unmatchedTabs.findIndex(
          (tab) =>
            tab.url === tabSeed.url &&
            (!tabSeed.title || tab.title === tabSeed.title),
        );
        const match =
          matchIndex === -1
            ? undefined
            : unmatchedTabs.splice(matchIndex, 1)[0];
        if (match?.id !== undefined) {
          await chrome.tabs.update(match.id, { pinned: tabSeed.pinned });
        }
      }
    },
    { windows },
  );
}

async function seedStoredOneTabData(seed: StoredOneTabSeed) {
  const now = 1_704_067_200_000;

  function requestResult<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  function transactionDone(transaction: IDBTransaction): Promise<void> {
    return new Promise((resolve, reject) => {
      transaction.onabort = () => reject(transaction.error);
      transaction.onerror = () => reject(transaction.error);
      transaction.oncomplete = () => resolve();
    });
  }

  const database = await requestResult(indexedDB.open("onetab", 2));
  try {
    const transaction = database.transaction("item", "readwrite");
    const store = transaction.objectStore("item");
    await requestResult(store.clear());

    const groups = seed.groups ?? [];
    const rootChildIds = groups.map(
      (group, groupIndex) => group.id ?? `test-group-${groupIndex + 1}`,
    );
    const systemItems = [
      {
        childIds: rootChildIds,
        createDate: now,
        groupType: "folder",
        id: "root",
        modifyDate: now,
        parentIds: [],
        pinnedCount: 0,
        type: "group",
      },
      {
        childIds: [],
        createDate: now,
        groupType: "quickList",
        id: "quickList",
        modifyDate: now,
        parentIds: [],
        pinnedCount: 0,
        type: "group",
      },
      {
        childIds: [],
        createDate: now,
        groupType: "folder",
        id: "trash",
        modifyDate: now,
        parentIds: [],
        pinnedCount: 0,
        type: "group",
      },
    ];

    for (const item of systemItems) store.put(item);

    groups.forEach((group, groupIndex) => {
      const groupId = group.id ?? `test-group-${groupIndex + 1}`;
      const childIds = group.tabs.map(
        (tab, tabIndex) => tab.id ?? `${groupId}-tab-${tabIndex + 1}`,
      );

      store.put({
        childIds,
        createDate: now + groupIndex + 1,
        groupType: group.groupType ?? "window",
        id: groupId,
        label: group.label,
        modifyDate: now + groupIndex + 1,
        parentIds: ["root"],
        pinnedCount: 0,
        type: "group",
      });

      group.tabs.forEach((tab, tabIndex) => {
        store.put({
          createDate: now + groupIndex * 100 + tabIndex + 10,
          id: childIds[tabIndex],
          modifyDate: now + groupIndex * 100 + tabIndex + 10,
          notes: tab.notes ? { text: tab.notes } : undefined,
          parentIds: [groupId],
          title: tab.title,
          type: "tab",
          url: tab.url,
        });
      });
    });

    await transactionDone(transaction);
  } finally {
    database.close();
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function cleanupProfile(extension: ExtensionHarness | undefined) {
  if (!extension) return;
  await Promise.all([
    rm(extension.profileDir, { force: true, recursive: true }),
    rm(dirname(extension.extensionDir), { force: true, recursive: true }),
  ]);
}

async function copyExtensionToTempDir(label: ExtensionLabel, rootDir: string) {
  const tempParent = await mkdtemp(
    resolve(tmpdir(), `onetab-${label}-extension-`),
  );
  const extensionDir = resolve(tempParent, "extension");

  await cp(rootDir, extensionDir, {
    recursive: true,
    filter: (source) => shouldCopyExtensionFile(rootDir, source),
  });

  return extensionDir;
}

function shouldCopyExtensionFile(rootDir: string, source: string) {
  const pathFromRoot = relative(rootDir, source);
  if (!pathFromRoot) return true;

  const [firstSegment] = pathFromRoot.split("/");
  return ![".output", ".wxt", "node_modules", "test-results", "tests"].includes(
    firstSegment,
  );
}

function collectPageErrors(
  label: ExtensionLabel,
  page: Page,
  errors: string[],
) {
  page
    .addInitScript(() => {
      window.addEventListener("unhandledrejection", (event) => {
        console.error(
          `unhandledrejection: ${event.reason?.stack ?? event.reason}`,
        );
      });
    })
    .catch(() => {});
  page.on("pageerror", (error) =>
    errors.push(`${label} ${page.url()} pageerror: ${error.message}`),
  );
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`${label} ${page.url()} console: ${message.text()}`);
    }
  });
}

function collectWorkerErrors(
  label: ExtensionLabel,
  worker: Worker,
  errors: string[],
) {
  worker.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`${label} ${worker.url()} serviceworker: ${message.text()}`);
    }
  });
}

function candidateOnlyErrors(
  originalErrors: string[],
  candidateErrors: string[],
) {
  const original = new Set(normalizeErrors(originalErrors));
  return normalizeErrors(candidateErrors).filter(
    (error) => !original.has(error) && !isTransientExternalResourceError(error),
  );
}

function normalizeErrors(errors: string[]) {
  return errors
    .map((error) => error.replace(/^(candidate|original) /, ""))
    .sort();
}

function isTransientExternalResourceError(error: string) {
  return /^https:\/\/www\.one-tab\.com\/help console: Failed to load resource: net::ERR_NETWORK_CHANGED$/.test(
    error,
  );
}

function extensionUrl(extensionId: string, pathname: string) {
  const normalizedPathname = pathname.replace(/^\/+/, "");
  return `chrome-extension://${extensionId}/${normalizedPathname}`;
}

function isHeadedRun() {
  return (
    process.argv.includes("--headed") || process.env.PLAYWRIGHT_HEADED === "1"
  );
}

async function waitForExtensionServiceWorker(context: BrowserContext) {
  return (
    context.serviceWorkers()[0] ??
    (await context.waitForEvent("serviceworker", { timeout: 15_000 }))
  );
}

async function closeInitialPages(context: BrowserContext) {
  await Promise.all(
    context
      .pages()
      .filter((page) => page.url() === "about:blank")
      .map((page) => page.close().catch(() => {})),
  );
}

async function openHarnessTab(context: BrowserContext) {
  await context.route(harnessUrl, async (route) => {
    await route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><title>OneTab Harness</title><h1>OneTab Harness</h1>",
    });
  });

  const page = await context.newPage();
  await page.goto(harnessUrl, {
    waitUntil: "domcontentloaded",
  });
  await page.bringToFront();
  return page;
}

async function closeNonHarnessPages(
  context: BrowserContext,
  harnessPage: Page,
) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  await Promise.all(
    context
      .pages()
      .filter((page) => page !== harnessPage)
      .map((page) => page.close().catch(() => {})),
  );
}

async function closeNonHarnessTabs(serviceWorker: Worker) {
  await serviceWorker.evaluate(async (url) => {
    const tabs: any[] = await chrome.tabs.query({});
    await Promise.all(
      tabs
        .filter((tab) => tab.url !== url && tab.id !== undefined)
        .map((tab) => chrome.tabs.remove(tab.id).catch(() => {})),
    );
  }, harnessUrl);
}

async function focusHarnessTab(serviceWorker: Worker) {
  await serviceWorker.evaluate(async (url) => {
    const tabs: any[] = await chrome.tabs.query({});
    const tab = tabs.find((candidate) => candidate.url === url);
    if (tab?.id !== undefined)
      await chrome.tabs.update(tab.id, { active: true });
    if (tab?.windowId !== undefined && chrome.windows?.update) {
      await chrome.windows.update(tab.windowId, { focused: true });
    }
  }, harnessUrl);
}

async function pinHarnessTab(serviceWorker: Worker) {
  await serviceWorker.evaluate(async (url) => {
    const tabs: any[] = await chrome.tabs.query({});
    const tab = tabs.find((candidate) => candidate.url === url);
    if (tab?.id !== undefined) {
      await chrome.tabs.update(tab.id, { pinned: true });
    }
  }, harnessUrl);
}

async function settleHarnessRuntime(serviceWorker: Worker) {
  await focusHarnessTab(serviceWorker);
  await waitForHarnessTabState(serviceWorker, { requireSingleTab: true });
}

async function waitForHarnessTabState(
  serviceWorker: Worker,
  { requireSingleTab = false }: { requireSingleTab?: boolean } = {},
) {
  const deadline = Date.now() + 15_000;

  while (Date.now() < deadline) {
    const snapshot = await serviceWorker.evaluate(async (url) => {
      const [{ contextMenuState }, tabs] = await Promise.all([
        chrome.storage.session.get("contextMenuState"),
        chrome.tabs.query({}),
      ]);
      const browserTabs = tabs as any[];
      return {
        contextMenuState,
        tabs: browserTabs.map((tab) => ({
          active: tab.active,
          index: tab.index,
          url: tab.url,
        })),
        url,
      };
    }, harnessUrl);

    const title = snapshot.contextMenuState?.excludeWebSiteContextMenu?.t;
    const hasHarnessTitle =
      typeof title === "string" && title.includes("example.com");

    if (!requireSingleTab && hasHarnessTitle) return;

    const activeTab = snapshot.tabs.find((tab) => tab.active);
    const hasSingleHarnessTab =
      snapshot.tabs.length === 1 && activeTab?.url === snapshot.url;
    const hasSettledSingleTabMenus =
      snapshot.contextMenuState?.sendAllTabsExceptThisMenu?.e === 0 &&
      snapshot.contextMenuState?.sendLeftTabsMenu?.e === 0 &&
      snapshot.contextMenuState?.sendRightTabsMenu?.e === 0;

    if (hasHarnessTitle && hasSingleHarnessTab && hasSettledSingleTabMenus) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

async function waitForRuntimeState(serviceWorker: Worker) {
  const deadline = Date.now() + 15_000;
  let lastSnapshot: Awaited<ReturnType<typeof readRuntimeSnapshot>> | undefined;

  while (Date.now() < deadline) {
    lastSnapshot = await serviceWorker.evaluate(readRuntimeSnapshot);
    const hasStorage = Boolean(
      lastSnapshot.storage.session.onInstalledOrOnStartupTriggered,
    );
    const hasIndexedDb = lastSnapshot.indexedDb.some(
      (database) => database.name === "onetab",
    );
    if (hasStorage && hasIndexedDb) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(
    `Timed out waiting for initialized OneTab runtime: ${JSON.stringify(lastSnapshot)}`,
  );
}

async function readRuntimeSnapshot() {
  async function getAllStorage(area: any) {
    if (!area) return {};
    return area.get(null);
  }

  async function requestResult<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async function dumpIndexedDb() {
    if (!indexedDB.databases) return [];

    const databases = await indexedDB.databases();
    return Promise.all(
      databases
        .filter((database) => database.name)
        .map(async ({ name }) => {
          const database = await requestResult(indexedDB.open(name!));
          try {
            const stores = await Promise.all(
              Array.from(database.objectStoreNames).map(async (storeName) => {
                const transaction = database.transaction(storeName, "readonly");
                const store = transaction.objectStore(storeName);
                const [keys, records] = await Promise.all([
                  requestResult(store.getAllKeys()),
                  requestResult(store.getAll()),
                ]);
                return { keys, records, storeName };
              }),
            );
            return { name, stores };
          } finally {
            database.close();
          }
        }),
    );
  }

  return {
    indexedDb: await dumpIndexedDb(),
    manifest: chrome.runtime.getManifest(),
    permissions: await chrome.permissions.getAll(),
    storage: {
      local: await getAllStorage(chrome.storage.local),
      session: await getAllStorage(chrome.storage.session),
    },
  };
}

async function readDataSnapshot() {
  async function getAllStorage(area: any) {
    if (!area) return {};
    return area.get(null);
  }

  async function requestResult<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async function dumpIndexedDb() {
    if (!indexedDB.databases) return [];

    const databases = await indexedDB.databases();
    return Promise.all(
      databases
        .filter((database) => database.name)
        .map(async ({ name }) => {
          const database = await requestResult(indexedDB.open(name!));
          try {
            const stores = await Promise.all(
              Array.from(database.objectStoreNames).map(async (storeName) => {
                const transaction = database.transaction(storeName, "readonly");
                const store = transaction.objectStore(storeName);
                const [keys, records] = await Promise.all([
                  requestResult(store.getAllKeys()),
                  requestResult(store.getAll()),
                ]);
                return { keys, records, storeName };
              }),
            );
            return { name, stores };
          } finally {
            database.close();
          }
        }),
    );
  }

  async function dumpBrowserState() {
    if (!chrome.windows?.getAll) return [];

    const groupIds = new Map<number, string>();
    const canonicalGroupId = (groupId: number | undefined) => {
      if (groupId === undefined) return undefined;
      if (!chrome.tabGroups || groupId === chrome.tabGroups.TAB_GROUP_ID_NONE) {
        return "none";
      }
      if (!groupIds.has(groupId))
        groupIds.set(groupId, `group-${groupIds.size + 1}`);
      return groupIds.get(groupId);
    };

    const windows: any[] = await chrome.windows.getAll({ populate: true });
    return windows.map((browserWindow, windowIndex) => ({
      focused: browserWindow.focused,
      incognito: browserWindow.incognito,
      state: browserWindow.state,
      tabs: ((browserWindow.tabs ?? []) as any[])
        .sort((left, right) => left.index - right.index)
        .map((tab) => ({
          active: tab.active,
          audible: tab.audible,
          discarded: tab.discarded,
          favIconUrl: tab.favIconUrl,
          groupId: canonicalGroupId(tab.groupId),
          highlighted: tab.highlighted,
          index: tab.index,
          muted: tab.mutedInfo?.muted,
          pinned: tab.pinned,
          status: tab.status,
          title: tab.title,
          url: tab.url,
        })),
      type: browserWindow.type,
      windowIndex,
    }));
  }

  return {
    browser: await dumpBrowserState(),
    indexedDb: await dumpIndexedDb(),
    manifest: chrome.runtime.getManifest(),
    permissions: await chrome.permissions.getAll(),
    storage: {
      local: await getAllStorage(chrome.storage.local),
      session: await getAllStorage(chrome.storage.session),
    },
  };
}

function readRenderSnapshot({
  selectors,
  styleProps,
}: {
  selectors: string[];
  styleProps: string[];
}) {
  const maxTreeNodes = 1_500;
  let treeNodeCount = 0;

  function compactText(value: string | null | undefined) {
    return (value ?? "").replace(/\s+/g, " ").trim().slice(0, 160);
  }

  function roundedRect(element: Element) {
    const rect = element.getBoundingClientRect();
    return {
      bottom: Math.round(rect.bottom),
      height: Math.round(rect.height),
      left: Math.round(rect.left),
      right: Math.round(rect.right),
      top: Math.round(rect.top),
      width: Math.round(rect.width),
    };
  }

  function selectedAttributes(element: Element) {
    const attributes: Record<string, string> = {};
    for (const name of [
      "aria-checked",
      "aria-expanded",
      "aria-label",
      "aria-selected",
      "class",
      "data-m",
      "href",
      "id",
      "placeholder",
      "role",
      "src",
      "style",
      "title",
      "type",
    ]) {
      const value = element.getAttribute(name);
      if (value !== null) attributes[name] = value;
    }

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement
    ) {
      attributes.value = element.value;
    }

    return attributes;
  }

  function elementDescriptor(element: Element) {
    const style = window.getComputedStyle(element);
    const rect = roundedRect(element);
    return {
      attributes: selectedAttributes(element),
      rect,
      tag: element.tagName.toLowerCase(),
      text: compactText(element.textContent),
      visible:
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) !== 0 &&
        rect.width > 0 &&
        rect.height > 0,
    };
  }

  function elementTree(element: Element | null): unknown {
    if (!element) return null;
    treeNodeCount++;
    if (treeNodeCount > maxTreeNodes) return "<truncated>";

    const directText = Array.from(element.childNodes)
      .filter((child) => child.nodeType === Node.TEXT_NODE)
      .map((child) => child.textContent ?? "")
      .join(" ");

    return {
      ...elementDescriptor(element),
      children: Array.from(element.children)
        .filter((child) => !isIgnoredRenderElement(child))
        .map((child) => elementTree(child)),
      directText: compactText(directText),
    };
  }

  function isIgnoredRenderElement(element: Element) {
    return ["script", "style", "template"].includes(
      element.tagName.toLowerCase(),
    );
  }

  function computedStyleSnapshot(element: Element) {
    const style = window.getComputedStyle(element);
    return Object.fromEntries(
      styleProps.map((property) => [
        property,
        style.getPropertyValue(property) ||
          (style as unknown as Record<string, string>)[property] ||
          "",
      ]),
    );
  }

  function selectorSnapshots(selector: string) {
    return Array.from(document.querySelectorAll(selector))
      .slice(0, 30)
      .map((element, index) => ({
        ...elementDescriptor(element),
        computedStyle: computedStyleSnapshot(element),
        index,
      }));
  }

  const activeElement = document.activeElement
    ? elementDescriptor(document.activeElement)
    : null;

  return {
    activeElement,
    body: elementTree(document.body),
    bodyText: document.body?.innerText ?? "",
    direction: document.dir || document.documentElement.dir || "",
    selected: Object.fromEntries(
      selectors.map((selector) => [selector, selectorSnapshots(selector)]),
    ),
    title: document.title,
    viewport: {
      deviceScaleFactor: window.devicePixelRatio,
      height: window.innerHeight,
      width: window.innerWidth,
    },
  };
}

function normalizeSnapshot(
  value: unknown,
  extensionId: string,
  key = "",
): unknown {
  if (key === "service_worker") return "<service-worker>";
  if (key && isVolatileKey(key)) return "<volatile>";

  if (Array.isArray(value)) {
    return value.map((item) => normalizeSnapshot(item, extensionId));
  }

  if (value && typeof value === "object") {
    const objectValue = value as { id?: unknown; value?: unknown };
    if (typeof objectValue.id === "string" && isVolatileKey(objectValue.id)) {
      return Object.fromEntries(
        Object.entries({ ...objectValue, value: "<volatile>" })
          .sort(([left], [right]) => left.localeCompare(right))
          .map(([entryKey, entryValue]) => [
            entryKey,
            normalizeSnapshot(entryValue, extensionId, entryKey),
          ]),
      );
    }

    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([entryKey, entryValue]) => [
          entryKey,
          normalizeSnapshot(entryValue, extensionId, entryKey),
        ]),
    );
  }

  if (typeof value === "string") {
    return value.replaceAll(extensionId, "<extension-id>");
  }

  return value;
}

function isVolatileKey(key: string) {
  const normalizedKey = key.toLowerCase();
  return (
    normalizedKey === "aliveindicator" ||
    normalizedKey === "firstloadtimestamp" ||
    normalizedKey === "installdate" ||
    normalizedKey === "installid" ||
    /(?:create|modify|pending|done|install)date$/.test(normalizedKey)
  );
}
