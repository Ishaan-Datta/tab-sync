import { expect, test } from "@playwright/test";
import { parse } from "@babel/parser";
import { access, readFile } from "node:fs/promises";
import { Script } from "node:vm";
import { createOneTabCommonBundleHelpers } from "../src/shared/common-bundle-helpers";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "tinyglobby";
import { createOneTabCollectionHelpers } from "../src/shared/collection-helpers";
import { getOneTabDefaultSettings } from "../src/shared/default-settings";
import { createOneTabDomTransitionHelpers } from "../src/shared/dom-transition-helpers";
import { createOneTabImportHelpers } from "../src/shared/import-helpers";
import { runOneTabLocalisationBundle } from "../src/shared/localisation";
import { createOneTabModelPredicates } from "../src/shared/model-predicates";
import { createOneTabPageCommon } from "../src/shared/page-common";
import { createOneTabRuntimeHelpers } from "../src/shared/runtime-helpers";
import { createOneTabSearchHelpers } from "../src/shared/search-helpers";
import { createOneTabSmartMove } from "../src/shared/smart-move";
import {
  createOneTabLocalStorageAdapter,
  createOneTabSessionStorageAdapter,
} from "../src/shared/storage-adapters";
import { createOneTabTextHelpers } from "../src/shared/text-helpers";
import { createOneTabUrlHelpers } from "../src/shared/url-helpers";
import { createOneTabUrlQueryCleanup } from "../src/shared/url-query-cleanup";

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

test("typed import helpers module preserves plain URL import behavior", async () => {
  const originalChrome = (globalThis as any).chrome;
  const originalDOMParser = (globalThis as any).DOMParser;
  (globalThis as any).chrome = { tabs: { query: async () => [] } };
  (globalThis as any).DOMParser = class {
    parseFromString(source: string) {
      return {
        querySelectorAll: () => [],
        documentElement: {
          childNodes: [{ nodeType: 3, textContent: source }],
        },
      };
    }
  };

  try {
    const helpers = createOneTabImportHelpers({
      combineComparators:
        (...comparators) =>
        (left, right) =>
          comparators.reduce(
            (result, comparator) => result || comparator(left, right),
            0,
          ),
      compareAscendingBy: (callback) => (left, right) =>
        Number(String(callback(left)) > String(callback(right))) -
        Number(String(callback(left)) < String(callback(right))),
      compareDescendingBy: (callback) => (left, right) =>
        Number(String(callback(left)) < String(callback(right))) -
        Number(String(callback(left)) > String(callback(right))),
      equalIgnoringProtocol: (left, right) =>
        left.replace(/^\w+:\/\//, "") ===
        (right ?? "").replace(/^\w+:\/\//, ""),
      normalizeImportedText: (value) => String(value).replace(/\r\n?/g, "\n"),
      normalizeText: (value) => String(value ?? "").trim(),
      safeNonJavascriptUrl: (value) =>
        value.toLowerCase().startsWith("javascript:") ? undefined : value,
      stripProtocol: (value) => (value ?? "").replace(/^\w+:\/\//, ""),
      trimTrailingDotOrComma: (value) => value.replace(/[.,]$/, ""),
    });

    await expect(
      helpers.parseImportedTabGroups(
        "https://example.com | Example\n\nhttps://example.org",
      ),
    ).resolves.toEqual([
      [{ kt: "https://example.com", title: "Example" }],
      [{ kt: "https://example.org", title: "example.org" }],
    ]);
  } finally {
    (globalThis as any).chrome = originalChrome;
    (globalThis as any).DOMParser = originalDOMParser;
  }
});

test("typed common bundle helpers module preserves collection and URL behavior", async () => {
  const store: Record<string, any> = {};
  const helpers = createOneTabCommonBundleHelpers({
    extensionRootUrl: "chrome-extension://abc/",
    getCoreProxy: () => ({
      _e: async (key) => store[key],
      Ve: async (key, value) => {
        store[key] = value;
      },
      Bu: async (key) => {
        delete store[key];
      },
    }),
    isNewOrBlankTabPageUrl: (url) => url === "chrome://newtab/",
    isPlaceholderUrl: (url) =>
      url === "chrome-extension://abc/placeholder.html",
  });

  expect(helpers.filterToSet(["a", "b", "c"], ["b", "c"])).toEqual(["b", "c"]);
  expect(
    helpers.filterNested([1, [2, 3], [4]], (value) => value % 2 === 1),
  ).toEqual([1, [3]]);
  expect(helpers.not((value: number) => value > 1)(1)).toBe(true);
  expect(helpers.partition([1, 2, 3], (value) => value % 2 === 1)).toEqual([
    [1, 3],
    [2],
  ]);
  expect(
    helpers.partitionMany(
      [1, 2, 3],
      [(value) => value === 1, (value) => value === 3],
    ),
  ).toEqual([[1], [3], [2]]);
  await expect(
    helpers.asyncPartition([1, 2, 3], async (value) => value > 1),
  ).resolves.toEqual([[2, 3], [1]]);
  expect(helpers.isExcludedUrl("javascript:alert(1)")).toBe(true);
  expect(helpers.isExcludedUrl("chrome-extension://abc/placeholder.html")).toBe(
    false,
  );
  await expect(
    helpers.saveUncommittedChanges("item", {
      label: "New",
      ignored: undefined,
    }),
  ).resolves.toEqual({ label: "New" });
  await expect(helpers.getUncommittedChanges("item")).resolves.toEqual({
    label: "New",
  });
});

test("typed page common module preserves localization and group labels", async () => {
  const originalChrome = (globalThis as any).chrome;
  (globalThis as any).chrome = {
    i18n: {
      getMessage: (key: string) =>
        ({
          localeId: "fr_FR",
          tabCount_one: "{COUNT} onglet",
          tabCount_other: "{COUNT} onglets",
        })[key] ?? "",
    },
  };

  try {
    const root = { id: "root", type: "group", label: "" };
    const folder = {
      id: "folder",
      type: "group",
      groupType: "folder",
      label: "",
    };
    const windowGroup = { id: "window", type: "group", label: "" };
    const cache = {
      v: (id: string) => ({ root, folder, window: windowGroup })[id],
      Xi: (id: string) => (id === "window" ? 3 : 0),
      Hn: async () => [root, folder, windowGroup],
    };
    const helpers = createOneTabPageCommon({
      websiteUrl: "https://www.one-tab.com",
      translate: (key) =>
        ({ all: "All", trash: "Trash", untitled: "Untitled" })[key] ?? key,
      tabCount: (count) => `${count} tabs`,
      isRoot: (item) => item?.id === "root",
      isTrash: (item) => item?.id === "trash",
      isFolder: (item) => item?.groupType === "folder",
      isMicrosoftEdge: () => false,
    });

    expect(helpers.localeId()).toBe("fr-FR");
    expect(helpers.localizedPathPrefix()).toBe("fr-FR/");
    expect(helpers.helpUrl()).toBe("https://www.one-tab.com/fr-FR/help");
    expect(helpers.pluralize("tabCount", 2)).toBe("2 onglets");
    expect(helpers.isJson('{"ok":true}')).toBe(true);
    expect(helpers.isJson("not json")).toBe(false);
    expect(helpers.groupDisplayLabel({ groupId: "folder", h: cache })).toBe(
      "Untitled",
    );
    expect(helpers.groupDisplayLabel({ groupId: "window", h: cache })).toBe(
      "3 tabs",
    );
    await expect(
      helpers.groupPathLabel({ h: cache, itemId: "window", Qo: null }),
    ).resolves.toBe("Untitled  ➝  3 tabs");
    expect(
      helpers.splitOversized({
        Ep: 2,
        Fp: [{ id: "a", chunks: [1, 2, 3] }],
        jp: (entry) => entry.chunks,
        Bp: ({ Cp: index, Hp: chunks }) => ({ index, chunks }),
      }),
    ).toEqual([
      { index: 0, chunks: [1, 2] },
      { index: 2, chunks: [3] },
    ]);
  } finally {
    (globalThis as any).chrome = originalChrome;
  }
});

test("typed smart move module preserves validation behavior", async () => {
  class EmptyCache {
    async ke() {}
    async getItems() {
      return [];
    }
  }
  const items = new Map([
    ["tab", { id: "tab", type: "tab" }],
    ["folder", { id: "folder", type: "group", groupType: "folder" }],
    ["window", { id: "window", type: "group", groupType: "window" }],
  ]);
  const createSmartMove = (selectedIds: string[], targetId: string) =>
    createOneTabSmartMove({
      core: { gs: async () => [], move: async () => {}, Oe: async () => {} },
      createNewEmptyWindowGroup: async () => "new-window",
      defaultTabGroupColor: "grey",
      getId: (item) => item.id,
      getItemById: async (id) => items.get(id),
      getItems: async () => selectedIds.map((id) => items.get(id)),
      isFolder: (item) => item?.groupType === "folder",
      isGroup: (item) => item?.type === "group",
      isNotQuickList: (value) => value !== "quickList",
      isTab: (item) => item?.type === "tab",
      isTabGroup: (item) => item?.groupType === "tabGroup",
      isWindowGroup: (item) => item?.groupType === "window",
      itemType: (item) => item.type,
      ItemCache: EmptyCache,
      moveItemRef: (options) => options,
      not: (predicate) => (value) => !predicate(value),
      partition: (values, predicate) => [
        values.filter((value) => predicate(value)),
        values.filter((value) => !predicate(value)),
      ],
    });

  await expect(
    createSmartMove(
      ["folder"],
      "window",
    )({ rt: [{ itemId: "folder" }], O: "window" }),
  ).rejects.toThrow("folder should not have been allowed");
  await expect(
    createSmartMove(
      ["tab", "window"],
      "folder",
    )({
      rt: [{ itemId: "tab" }, { itemId: "window" }],
      O: "folder",
    }),
  ).rejects.toThrow("Can't mix tabs with groups during smart move");
});

test("typed localisation runner invokes permission page common factory", () => {
  const calls: unknown[] = [];

  runOneTabLocalisationBundle((deps) => calls.push(deps));

  expect(calls).toEqual([undefined]);
});

test("typed URL query cleanup module preserves pruning behavior", () => {
  const { cleanUrlForSearch } = createOneTabUrlQueryCleanup();

  expect(
    cleanUrlForSearch(
      "https://www.google.com/search?q=one&utm_source=noisy&tbm=isch&ved=abc#top",
    ),
  ).toBe("https://www.google.com/search?q=one&tbm=isch#top");
  expect(
    cleanUrlForSearch(
      "https://example.com/page?title=Useful&gclid=abc&token=0123456789abcdef0123456789abcdef",
    ),
  ).toBe("https://example.com/page?title=Useful");
  expect(cleanUrlForSearch("https://sohu.com/news?spm=track&q=keep")).toBe(
    "https://sohu.com/news?q=keep",
  );
  expect(cleanUrlForSearch("data:text/html;base64,abc")).toBe("data:text/");
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
