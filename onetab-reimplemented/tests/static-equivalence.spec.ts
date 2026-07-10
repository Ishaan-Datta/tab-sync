import { expect, test } from "@playwright/test";
import { parse } from "@babel/parser";
import { access, readFile } from "node:fs/promises";
import { Script } from "node:vm";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "tinyglobby";
import { getOneTabDefaultSettings } from "../src/shared/default-settings";

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
