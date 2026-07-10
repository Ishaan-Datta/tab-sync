import { expect, test } from "@playwright/test";
import { parse } from "@babel/parser";
import { access, readFile } from "node:fs/promises";
import { Script } from "node:vm";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "tinyglobby";
import { createOneTabCollectionHelpers } from "../src/shared/collection-helpers";
import { getOneTabDefaultSettings } from "../src/shared/default-settings";
import { createOneTabDomTransitionHelpers } from "../src/shared/dom-transition-helpers";
import { createOneTabModelPredicates } from "../src/shared/model-predicates";
import { createOneTabRuntimeHelpers } from "../src/shared/runtime-helpers";
import { createOneTabSearchHelpers } from "../src/shared/search-helpers";
import {
  createOneTabLocalStorageAdapter,
  createOneTabSessionStorageAdapter,
} from "../src/shared/storage-adapters";
import { createOneTabTextHelpers } from "../src/shared/text-helpers";
import { createOneTabUrlHelpers } from "../src/shared/url-helpers";

const testDir = dirname(fileURLToPath(import.meta.url));
const candidateRoot = resolve(testDir, "..");
const originalRoot = resolve(candidateRoot, "..", "onetab-chrome-src");
const candidateArtifactRoot = resolve(
  process.env.ONETAB_CANDIDATE_EXTENSION_PATH ?? ".output/chrome-mv3",
);

const migrationMarkerBaselines = {
  tsNocheck: 4,
  tsIgnore: 370,
  withDeps: 8,
  globalBundleHooks: 129,
  concatenatedSourceReferences: 15,
};

const migrationSourceGlobs = [
  "*.html",
  "*.json",
  "*.ts",
  "ext-onetab-concatenated-sources-*.ts",
  "shared/**/*.ts",
  "src/**/*.ts",
];

const extensionPages = [
  "popup.html",
  "onetab.html",
  "options.html",
  "import-export.html",
  "placeholder.html",
  "shared-page-permission.html",
  "safari-permissions.html",
];

const concatenatedFiles = [
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-contentscript.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-one-tab.com-contentscript.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
];

const sharedDefaultSettingsConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedStorageAdapterConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedModelPredicateConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedCollectionHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedRuntimeHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedSearchHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedDomTransitionHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedTextHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedUrlHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedImportHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedBundlePreludeConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedCommonBundleHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedPageCommonConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedUrlQueryCleanupConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedUiControlsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedBaseControlsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedViewControlsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedTreeActionsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedSmartMoveConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedPageUiHelperConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedTreeInteractionsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedImportExportControlsConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedTreeRendererConsumers = new Set([
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-placeholder.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedLargeBundleFiles: Record<string, string> = {
  "ext-onetab-concatenated-sources-background.js": "shared/background.js",
  "ext-onetab-concatenated-sources-import.js": "shared/import.js",
  "ext-onetab-concatenated-sources-localisation.js": "shared/localisation.js",
  "ext-onetab-concatenated-sources-onetab.js": "shared/onetab.js",
  "ext-onetab-concatenated-sources-options.js": "shared/options.js",
  "ext-onetab-concatenated-sources-popup.js": "shared/popup.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js":
    "shared/shared-page-permission.js",
};

const sharedPermissionPageCommonConsumers = new Set([
  "ext-onetab-concatenated-sources-localisation.js",
  "ext-onetab-concatenated-sources-shared-page-permission.js",
]);

const sharedItemStoreConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedItemCacheConsumers = new Set([
  "ext-onetab-concatenated-sources-background.js",
  "ext-onetab-concatenated-sources-import.js",
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-options.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

const sharedIconAtlasConsumers = new Set([
  "ext-onetab-concatenated-sources-onetab.js",
  "ext-onetab-concatenated-sources-popup.js",
]);

test("typed default settings module returns isolated defaults", () => {
  const settings = getOneTabDefaultSettings();
  settings.navColTreeFilter.namedOnly = false;

  expect(getOneTabDefaultSettings().navColTreeFilter).toEqual({
    namedOnly: true,
    foldersOnly: false,
    hideArchived: false,
  });
});

test("typed storage adapter module preserves legacy method names", () => {
  const local = createOneTabLocalStorageAdapter();
  const session = createOneTabSessionStorageAdapter();

  expect(typeof local.remove).toBe("function");
  expect(typeof local.put).toBe("function");
  expect(typeof local.Wo).toBe("function");
  expect(typeof local.get).toBe("function");
  expect(typeof local.getAll).toBe("function");
  expect(typeof local.clearAll).toBe("function");
  expect(typeof session.put).toBe("function");
  expect(typeof session.get).toBe("function");
  expect(typeof session.Lp).toBe("function");
  expect(typeof session.getAll).toBe("function");
  expect(typeof session.remove).toBe("function");
  expect(typeof session.clearAll).toBe("function");
});

test("typed model predicates module preserves legacy predicate behavior", () => {
  const predicates = createOneTabModelPredicates();
  const tab = { id: "tab-1", type: "tab" };
  const folder = { id: "folder-1", type: "group", groupType: "folder" };
  const windowGroup = { id: "window-1", type: "group", groupType: "window" };

  expect(predicates.hasId("tab-1")(tab)).toBe(true);
  expect(predicates.doesNotHaveId("tab-2")(tab)).toBe(true);
  expect(predicates.sameIdAs(tab)({ id: "tab-1" })).toBe(true);
  expect(predicates.getId(tab)).toBe("tab-1");
  expect(predicates.isTab(tab)).toBe(true);
  expect(predicates.isGroup(folder)).toBe(true);
  expect(predicates.isFolder(folder)).toBe(true);
  expect(predicates.isFolderOrWindowGroup(windowGroup)).toBe(true);
  expect(predicates.isBrowserGroup(windowGroup)).toBe(true);
  expect(predicates.isNotQuickList("window")).toBe(true);
  expect(predicates.isUndefined(undefined)).toBe(true);
  expect(predicates.isDefined("value")).toBe(true);
});

test("typed collection helpers module preserves helper behavior", () => {
  const helpers = createOneTabCollectionHelpers();
  const items = [
    { group: "b", order: 2 },
    { group: "a", order: 3 },
    { group: "a", order: 1 },
  ];

  expect(
    [...items].sort(helpers.compareAscendingBy((item) => item.order)),
  ).toEqual([
    { group: "a", order: 1 },
    { group: "b", order: 2 },
    { group: "a", order: 3 },
  ]);
  expect(helpers.range(4)).toEqual([0, 1, 2, 3]);
  expect(helpers.nthIndexOf(["a", "b", "a"], "a", 1)).toBe(2);
  expect(helpers.mapBy(items, (item) => item.group).get("b")).toEqual({
    group: "b",
    order: 2,
  });
  expect(helpers.groupBy(items, (item) => item.group).get("a")).toEqual([
    { group: "a", order: 3 },
    { group: "a", order: 1 },
  ]);
  expect(helpers.mergeDefined(2, 3, (left, right) => left + right)).toBe(5);
});

test("typed runtime helpers module preserves helper behavior", () => {
  const helpers = createOneTabRuntimeHelpers();
  const ownPropertyValues: unknown[] = [];
  const definedValues: unknown[] = [];

  helpers.callIfOwnProperty({ value: 1 }, "value", (value) => {
    ownPropertyValues.push(value);
  });
  helpers.callIfDefined("defined", (value) => {
    definedValues.push(value);
  });

  expect(helpers.replaceValueDeep({ a: [1, 2] }, 2, "two")).toEqual({
    a: [1, "two"],
  });
  expect(
    helpers.mergeObjectsWithSeparators([{ a: 1 }, null, { b: 2 }], () => "|"),
  ).toEqual({
    a: 1,
    separator0: "|",
    b: 2,
  });
  expect(helpers.intersperse(["a", "b", "c"], () => "|")).toEqual([
    "a",
    "|",
    "b",
    "|",
    "c",
  ]);
  expect(helpers.applyValue(2, (value) => value + 1)).toBe(3);
  expect(helpers.applyIfTruthy("x", (value) => value.toUpperCase())).toBe("X");
  expect(helpers.joinUniqueTrimmed(",", " a ", "a", "", " b ")).toBe("a,a,b");
  expect(ownPropertyValues).toEqual([1]);
  expect(definedValues).toEqual(["defined"]);
});

test("typed search helpers module preserves segmentation behavior", () => {
  const helpers = createOneTabSearchHelpers();

  expect(
    helpers.splitSearchTextWithTerm("Alpha beta alpha", "alpha", false, false),
  ).toEqual([
    { s: "", tt: 0 },
    { s: "Alpha", tt: 1 },
    { s: " beta ", tt: 0 },
    { s: "alpha", tt: 1 },
    { s: "", tt: 0 },
  ]);
  expect(
    helpers.splitSearchText({
      text: "one two three",
      ti: ["three", "one"],
      ei: false,
      ii: false,
    }),
  ).toEqual([
    { s: "", tt: 0 },
    { s: "one", tt: 1 },
    { s: " two ", tt: 0 },
    { s: "three", tt: 1 },
    { s: "", tt: 0 },
  ]);
  expect(helpers.createSearchTermRegExp("a.b", false, false).test("A.B")).toBe(
    true,
  );
});

test("typed DOM transition helpers module preserves class behavior", async ({
  page,
}) => {
  await page.goto("about:blank");
  const result = await page.evaluate(async () => {
    const element = document.createElement("div");
    element.style.opacity = "0.5";
    document.body.append(element);

    const fadeOut = async (target: HTMLElement) =>
      new Promise<void>((resolve) => {
        target.addEventListener("transitionend", () => resolve());
        target.style.removeProperty("opacity");
        target.classList.add("fadeOutTransition");
        requestAnimationFrame(() => target.classList.add("fadedOut"));
      });
    const fadeIn = async (target: HTMLElement) =>
      new Promise<void>((resolve) => {
        target.addEventListener("transitionend", () => {
          target.classList.remove("fadedIn", "fadeInTransition");
          resolve();
        });
        target.style.removeProperty("opacity");
        target.classList.add("fadedOut");
        target.classList.add("fadeInTransition");
        requestAnimationFrame(() => target.classList.add("fadedIn"));
      });

    const fadeOutPromise = fadeOut(element);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const afterFadeOutFrame = {
      fadedOut: element.classList.contains("fadedOut"),
      fadeOutTransition: element.classList.contains("fadeOutTransition"),
      opacity: element.style.opacity,
    };
    element.dispatchEvent(new Event("transitionend"));
    await fadeOutPromise;

    const fadeInPromise = fadeIn(element);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const afterFadeInFrame = {
      fadedIn: element.classList.contains("fadedIn"),
      fadedOut: element.classList.contains("fadedOut"),
      fadeInTransition: element.classList.contains("fadeInTransition"),
    };
    element.dispatchEvent(new Event("transitionend"));
    await fadeInPromise;

    return {
      afterFadeOutFrame,
      afterFadeInFrame,
      afterFadeInEnd: {
        fadedIn: element.classList.contains("fadedIn"),
        fadedOut: element.classList.contains("fadedOut"),
        fadeInTransition: element.classList.contains("fadeInTransition"),
      },
    };
  });

  expect(typeof createOneTabDomTransitionHelpers().fadeIn).toBe("function");
  expect(typeof createOneTabDomTransitionHelpers().fadeOut).toBe("function");
  expect(result).toEqual({
    afterFadeOutFrame: {
      fadedOut: true,
      fadeOutTransition: true,
      opacity: "",
    },
    afterFadeInFrame: {
      fadedIn: true,
      fadedOut: true,
      fadeInTransition: true,
    },
    afterFadeInEnd: {
      fadedIn: false,
      fadedOut: true,
      fadeInTransition: false,
    },
  });
});

test("typed text helpers module preserves import normalization behavior", () => {
  const helpers = createOneTabTextHelpers();

  expect(helpers.normalizeImportedText(null)).toBe("");
  expect(
    helpers.normalizeImportedText(
      "Ａ\u00a0B\u200b\r\nline with tabs\t \rnext\t",
    ),
  ).toBe("A B\nline with tabs\nnext");
});

test("typed URL helpers module preserves comparison and safety behavior", () => {
  const helpers = createOneTabUrlHelpers({
    normalizeText: (value) => value.trim(),
    normalizeUrl: (value) => new URL(value).href,
  });

  expect(helpers.trimTrailingDotOrComma("example.com,")).toBe("example.com");
  expect(helpers.substringAfter("https://example.com", "://")).toBe(
    "example.com",
  );
  expect(helpers.stripProtocol("https://example.com/path")).toBe(
    "example.com/path",
  );
  expect(
    helpers.equalIgnoringProtocol("https://example.com", "http://example.com"),
  ).toBe(true);
  expect(helpers.safeNormalizeText(123)).toBe("");
  expect(helpers.canonicalizeTextAsUrl(" example.com/")).toBe("example.com");
  expect(helpers.areUrlLikeEqual("example.com", "https://example.com/")).toBe(
    true,
  );
  expect(helpers.isYouTubeUrl("https://m.youtube.com/watch?v=1")).toBe(true);
  expect(
    helpers.shouldUseCandidateUrl(
      "youtube",
      "https://youtu.be/abc",
      "https://example.com",
    ),
  ).toBe(true);
  expect(helpers.safeNonJavascriptUrl("https://example.com/a")).toBe(
    "https://example.com/a",
  );
  expect(helpers.safeNonJavascriptUrl("javascript:alert(1)")).toBeUndefined();
});

test("migration legacy marker counts do not regress", async () => {
  const sourceFiles = await glob(migrationSourceGlobs, {
    cwd: candidateRoot,
    expandDirectories: false,
  });

  const sources = await Promise.all(
    sourceFiles.map(async (file) =>
      readFile(resolve(candidateRoot, file), "utf8"),
    ),
  );
  const source = sources.join("\n");

  expect(countMatches(source, /@ts-nocheck/g)).toBeLessThanOrEqual(
    migrationMarkerBaselines.tsNocheck,
  );
  expect(countMatches(source, /@ts-ignore/g)).toBeLessThanOrEqual(
    migrationMarkerBaselines.tsIgnore,
  );
  expect(countMatches(source, /\bwith\s*\(\s*deps\s*\)/g)).toBeLessThanOrEqual(
    migrationMarkerBaselines.withDeps,
  );
  expect(
    countMatches(
      source,
      /(?:globalThis|\(globalThis as any\))\.(?:runOneTab[A-Za-z]+Bundle|createOneTab[A-Za-z]+)/g,
    ),
  ).toBeLessThanOrEqual(migrationMarkerBaselines.globalBundleHooks);
  expect(
    countMatches(source, /ext-onetab-concatenated-sources/g),
  ).toBeLessThanOrEqual(migrationMarkerBaselines.concatenatedSourceReferences);
});

for (const file of concatenatedFiles) {
  test(`${file} preserves syntax and runtime literals`, async () => {
    const sharedLargeBundleFile = sharedLargeBundleFiles[file];
    const sharedLargeBundle = sharedLargeBundleFile
      ? await readFile(
          resolve(candidateArtifactRoot, sharedLargeBundleFile),
          "utf8",
        )
      : "";
    const [
      original,
      candidate,
      sharedDefaultSettings,
      sharedStorageAdapters,
      sharedModelPredicates,
      sharedCollectionHelpers,
      sharedRuntimeHelpers,
      sharedSearchHelpers,
      sharedDomTransitionHelpers,
      sharedTextHelpers,
      sharedUrlHelpers,
      sharedImportHelpers,
      sharedCommonBundleHelpers,
      sharedSmartMove,
      sharedPageUiHelpers,
      sharedBundlePrelude,
      sharedPageCommon,
      sharedUrlQueryCleanup,
      sharedBaseControls,
      sharedViewControls,
      sharedUiControls,
      sharedTreeRenderer,
      sharedTreeActions,
      sharedTreeInteractions,
      sharedImportExportControls,
      sharedPermissionPageCommon,
      sharedItemStore,
      sharedItemCache,
      sharedIconAtlas,
    ] = await Promise.all([
      readFile(resolve(originalRoot, file), "utf8"),
      readFile(resolve(candidateArtifactRoot, file), "utf8"),
      readFile(
        resolve(candidateArtifactRoot, "shared/default-settings.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/storage-adapters.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/model-predicates.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/collection-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/runtime-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/search-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/dom-transition-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/text-helpers.js"),
        "utf8",
      ),
      readFile(resolve(candidateArtifactRoot, "shared/url-helpers.js"), "utf8"),
      readFile(
        resolve(candidateArtifactRoot, "shared/import-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/common-bundle-helpers.js"),
        "utf8",
      ),
      readFile(resolve(candidateArtifactRoot, "shared/smart-move.js"), "utf8"),
      readFile(
        resolve(candidateArtifactRoot, "shared/page-ui-helpers.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/bundle-prelude.js"),
        "utf8",
      ),
      readFile(resolve(candidateArtifactRoot, "shared/page-common.js"), "utf8"),
      readFile(
        resolve(candidateArtifactRoot, "shared/url-query-cleanup.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/base-controls.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/view-controls.js"),
        "utf8",
      ),
      readFile(resolve(candidateArtifactRoot, "shared/ui-controls.js"), "utf8"),
      readFile(
        resolve(candidateArtifactRoot, "shared/tree-renderer.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/tree-actions.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/tree-interactions.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/import-export-controls.js"),
        "utf8",
      ),
      readFile(
        resolve(candidateArtifactRoot, "shared/permission-page-common.js"),
        "utf8",
      ),
      readFile(resolve(candidateArtifactRoot, "shared/item-store.js"), "utf8"),
      readFile(resolve(candidateArtifactRoot, "shared/item-cache.js"), "utf8"),
      readFile(resolve(candidateArtifactRoot, "shared/icon-atlas.js"), "utf8"),
    ]);
    const candidateRuntimeSource = [
      candidate,
      ...(sharedLargeBundle ? [sharedLargeBundle] : []),
      ...(sharedPermissionPageCommonConsumers.has(file)
        ? [sharedPermissionPageCommon]
        : []),
      ...(sharedItemStoreConsumers.has(file) ? [sharedItemStore] : []),
      ...(sharedItemCacheConsumers.has(file) ? [sharedItemCache] : []),
      ...(sharedIconAtlasConsumers.has(file) ? [sharedIconAtlas] : []),
      ...(sharedDefaultSettingsConsumers.has(file)
        ? [sharedDefaultSettings]
        : []),
      ...(sharedStorageAdapterConsumers.has(file)
        ? [sharedStorageAdapters]
        : []),
      ...(sharedModelPredicateConsumers.has(file)
        ? [sharedModelPredicates]
        : []),
      ...(sharedCollectionHelperConsumers.has(file)
        ? [sharedCollectionHelpers]
        : []),
      ...(sharedRuntimeHelperConsumers.has(file) ? [sharedRuntimeHelpers] : []),
      ...(sharedSearchHelperConsumers.has(file) ? [sharedSearchHelpers] : []),
      ...(sharedDomTransitionHelperConsumers.has(file)
        ? [sharedDomTransitionHelpers]
        : []),
      ...(sharedTextHelperConsumers.has(file) ? [sharedTextHelpers] : []),
      ...(sharedUrlHelperConsumers.has(file) ? [sharedUrlHelpers] : []),
      ...(sharedImportHelperConsumers.has(file) ? [sharedImportHelpers] : []),
      ...(sharedCommonBundleHelperConsumers.has(file)
        ? [sharedCommonBundleHelpers]
        : []),
      ...(sharedSmartMoveConsumers.has(file) ? [sharedSmartMove] : []),
      ...(sharedPageUiHelperConsumers.has(file) ? [sharedPageUiHelpers] : []),
      ...(sharedBundlePreludeConsumers.has(file) ? [sharedBundlePrelude] : []),
      ...(sharedPageCommonConsumers.has(file) ? [sharedPageCommon] : []),
      ...(sharedUrlQueryCleanupConsumers.has(file)
        ? [sharedUrlQueryCleanup]
        : []),
      ...(sharedBaseControlsConsumers.has(file) ? [sharedBaseControls] : []),
      ...(sharedViewControlsConsumers.has(file) ? [sharedViewControls] : []),
      ...(sharedUiControlsConsumers.has(file) ? [sharedUiControls] : []),
      ...(sharedTreeRendererConsumers.has(file) ? [sharedTreeRenderer] : []),
      ...(sharedTreeActionsConsumers.has(file) ? [sharedTreeActions] : []),
      ...(sharedTreeInteractionsConsumers.has(file)
        ? [sharedTreeInteractions]
        : []),
      ...(sharedImportExportControlsConsumers.has(file)
        ? [sharedImportExportControls]
        : []),
    ].join("\n");

    expect(() => new Script(candidate, { filename: file })).not.toThrow();
    expect(extractStringLiterals(candidateRuntimeSource)).toEqual(
      extractStringLiterals(original),
    );
    expect(extractChromeApiTouches(candidateRuntimeSource)).toEqual(
      extractChromeApiTouches(original),
    );
  });
}

test("built candidate manifest preserves oracle fields with expected WXT worker path", async () => {
  const [sourceManifest, builtManifest] = await Promise.all([
    readJson(resolve(candidateRoot, "manifest.json")),
    readJson(resolve(candidateArtifactRoot, "manifest.json")),
  ]);

  expect({
    ...builtManifest,
    background: {
      service_worker: "ext-onetab-concatenated-sources-background.js",
    },
  }).toEqual(sourceManifest);
  expect(builtManifest.background).toEqual({ service_worker: "background.js" });
});

test("built candidate emits loadable extension pages and static assets", async () => {
  const manifest = await readJson(
    resolve(candidateArtifactRoot, "manifest.json"),
  );
  const expectedFiles = new Set([
    ...extensionPages,
    "background.js",
    manifest.action.default_popup,
    manifest.options_ui.page,
    ...concatenatedFiles,
  ]);

  for (const file of expectedFiles) await expectFileExists(file);

  for (const page of extensionPages) {
    const html = await readFile(resolve(candidateArtifactRoot, page), "utf8");
    const references = extractHtmlAssetReferences(html);
    for (const reference of references) await expectFileExists(reference);
  }

  const serviceWorker = await readFile(
    resolve(candidateArtifactRoot, manifest.background.service_worker),
    "utf8",
  );
  expect(serviceWorker).toContain(
    "ext-onetab-concatenated-sources-background.js",
  );
});

test("built candidate JavaScript assets parse as classic scripts", async () => {
  const scriptFiles = await glob(["*.js", "shared/**/*.js"], {
    cwd: candidateArtifactRoot,
    expandDirectories: false,
  });

  expect(scriptFiles.length).toBeGreaterThan(0);
  for (const file of scriptFiles.sort()) {
    const source = await readFile(resolve(candidateArtifactRoot, file), "utf8");
    expect(() => new Script(source, { filename: file })).not.toThrow();
  }
});

function extractChromeApiTouches(source: string) {
  return [...source.matchAll(/\bchrome(?:\.[A-Za-z_$][\w$]*)+/g)]
    .map(([match]) => match)
    .sort();
}

function extractStringLiterals(source: string) {
  const literals = collectAstValues(source, (node) => {
    if (node.type === "StringLiteral") return node.value as string;
    if (node.type === "TemplateElement") {
      return (node.value as { raw: string }).raw;
    }
    return undefined;
  });
  return literals
    .filter(
      (literal) =>
        literal !== "shared/default-settings.js" &&
        literal !== "shared/storage-adapters.js" &&
        literal !== "shared/model-predicates.js" &&
        literal !== "shared/collection-helpers.js" &&
        literal !== "shared/runtime-helpers.js" &&
        literal !== "shared/search-helpers.js" &&
        literal !== "shared/dom-transition-helpers.js" &&
        literal !== "shared/text-helpers.js" &&
        literal !== "shared/url-helpers.js" &&
        literal !== "shared/import-helpers.js" &&
        literal !== "shared/common-bundle-helpers.js" &&
        literal !== "shared/smart-move.js" &&
        literal !== "shared/page-ui-helpers.js" &&
        literal !== "shared/bundle-prelude.js" &&
        literal !== "shared/page-common.js" &&
        literal !== "shared/url-query-cleanup.js" &&
        literal !== "shared/base-controls.js" &&
        literal !== "shared/view-controls.js" &&
        literal !== "shared/ui-controls.js" &&
        literal !== "shared/tree-renderer.js" &&
        literal !== "shared/tree-actions.js" &&
        literal !== "shared/tree-interactions.js" &&
        literal !== "shared/import-export-controls.js" &&
        literal !== "shared/permission-page-common.js" &&
        literal !== "shared/item-store.js" &&
        literal !== "shared/item-cache.js" &&
        literal !== "shared/icon-atlas.js" &&
        literal !== "shared/import.js" &&
        literal !== "shared/localisation.js" &&
        literal !== "shared/options.js" &&
        literal !== "shared/shared-page-permission.js" &&
        literal !== "shared/background.js" &&
        literal !== "shared/onetab.js" &&
        literal !== "shared/popup.js",
    )
    .sort();
}

function countMatches(source: string, pattern: RegExp) {
  return [...source.matchAll(pattern)].length;
}

function collectAstValues(
  source: string,
  readValue: (node: AstNode) => string | undefined,
) {
  const ast = parse(source, {
    allowReturnOutsideFunction: true,
    errorRecovery: false,
    sourceType: "script",
  });
  const values: string[] = [];
  visitAst(ast as unknown as AstNode, (node) => {
    const value = readValue(node);
    if (value !== undefined) values.push(value);
  });
  return values;
}

async function expectFileExists(pathFromArtifactRoot: string) {
  await expect(
    access(resolve(candidateArtifactRoot, pathFromArtifactRoot)),
    pathFromArtifactRoot,
  ).resolves.toBeUndefined();
}

async function readJson(path: string) {
  return JSON.parse(await readFile(path, "utf8"));
}

function extractHtmlAssetReferences(html: string) {
  return [...html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)]
    .map(([, reference]) => reference)
    .filter((reference) => !/^(?:[a-z]+:|#)/i.test(reference))
    .map((reference) => reference.replace(/[?#].*$/, ""))
    .map((reference) => reference.replace(/^\/+/, ""))
    .filter(Boolean);
}

interface AstNode {
  type?: string;
  [key: string]: unknown;
}

function visitAst(value: unknown, visitor: (node: AstNode) => void) {
  if (!value || typeof value !== "object") return;

  if (Array.isArray(value)) {
    for (const item of value) visitAst(item, visitor);
    return;
  }

  const node = value as AstNode;
  if (typeof node.type === "string") visitor(node);

  for (const [key, child] of Object.entries(node)) {
    if (key === "loc" || key === "start" || key === "end") continue;
    visitAst(child, visitor);
  }
}
