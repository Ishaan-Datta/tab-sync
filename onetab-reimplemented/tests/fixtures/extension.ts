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

type ExtensionLabel = "original" | "candidate";

export interface ExtensionHarness {
  context: BrowserContext;
  errors: string[];
  extensionDir: string;
  extensionId: string;
  label: ExtensionLabel;
  profileDir: string;
  rootDir: string;
  serviceWorker: Worker;
  openPage(pathname: string): Promise<Page>;
  pageTextSnapshot(pathname: string): Promise<unknown>;
  runtimeSnapshot(): Promise<unknown>;
}

interface ExtensionPair {
  original: ExtensionHarness;
  candidate: ExtensionHarness;
}

const fixtureDir = dirname(fileURLToPath(import.meta.url));
const candidateRoot = resolve(fixtureDir, "../..");
const repoRoot = resolve(candidateRoot, "..");
const defaultOriginalRoot = resolve(repoRoot, "onetab-chrome-src");

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
        extensionRoot("ONETAB_CANDIDATE_EXTENSION_PATH", candidateRoot),
      );

      await use({ original, candidate });
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
  context.pages().forEach((page) => collectPageErrors(label, page, errors));
  context.on("page", (page) => collectPageErrors(label, page, errors));

  const serviceWorker = await waitForExtensionServiceWorker(context);
  const extensionId = new URL(serviceWorker.url()).host;
  await waitForRuntimeState(serviceWorker);
  await closeInitialPages(context);
  const harnessPage = await openHarnessTab(context);
  await waitForHarnessTabState(serviceWorker);
  await closeNonHarnessPages(context, harnessPage);
  await harnessPage.bringToFront();
  await waitForHarnessTabState(serviceWorker);

  return {
    context,
    errors,
    extensionDir,
    extensionId,
    label,
    profileDir: userDataDir,
    rootDir,
    serviceWorker,
    async openPage(pathname: string) {
      const page = await context.newPage();
      await page.goto(extensionUrl(extensionId, pathname));
      await page.waitForLoadState("domcontentloaded");
      return page;
    },
    async pageTextSnapshot(pathname: string) {
      const page = await this.openPage(pathname);
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
  };
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
  page.on("pageerror", (error) =>
    errors.push(`${label} ${page.url()} pageerror: ${error.message}`),
  );
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`${label} ${page.url()} console: ${message.text()}`);
    }
  });
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
  await context.route("https://example.com/onetab-harness", async (route) => {
    await route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><title>OneTab Harness</title><h1>OneTab Harness</h1>",
    });
  });

  const page = await context.newPage();
  await page.goto("https://example.com/onetab-harness", {
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

async function waitForHarnessTabState(serviceWorker: Worker) {
  const deadline = Date.now() + 15_000;

  while (Date.now() < deadline) {
    const snapshot = await serviceWorker.evaluate(readRuntimeSnapshot);
    const title =
      snapshot.storage.session.contextMenuState?.excludeWebSiteContextMenu?.t;
    if (typeof title === "string" && title.includes("example.com")) return;
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
  async function getAllStorage(area: chrome.storage.StorageArea | undefined) {
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

function normalizeSnapshot(
  value: unknown,
  extensionId: string,
  key = "",
): unknown {
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
