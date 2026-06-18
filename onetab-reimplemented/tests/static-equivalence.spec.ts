import { expect, test } from "@playwright/test";
import { parse } from "@babel/parser";
import { readFile } from "node:fs/promises";
import { Script } from "node:vm";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const testDir = dirname(fileURLToPath(import.meta.url));
const candidateRoot = resolve(testDir, "..");
const originalRoot = resolve(candidateRoot, "..", "onetab-chrome-src");

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

for (const file of concatenatedFiles) {
  test(`${file} preserves syntax and runtime literals`, async () => {
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
      sharedBundlePrelude,
      sharedPageCommon,
      sharedUrlQueryCleanup,
      sharedUiControls,
    ] = await Promise.all([
      readFile(resolve(originalRoot, file), "utf8"),
      readFile(resolve(candidateRoot, file), "utf8"),
      readFile(resolve(candidateRoot, "shared/default-settings.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/storage-adapters.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/model-predicates.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/collection-helpers.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/runtime-helpers.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/search-helpers.js"), "utf8"),
      readFile(
        resolve(candidateRoot, "shared/dom-transition-helpers.js"),
        "utf8",
      ),
      readFile(resolve(candidateRoot, "shared/text-helpers.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/url-helpers.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/import-helpers.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/bundle-prelude.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/page-common.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/url-query-cleanup.js"), "utf8"),
      readFile(resolve(candidateRoot, "shared/ui-controls.js"), "utf8"),
    ]);
    const candidateRuntimeSource = [
      candidate,
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
      ...(sharedBundlePreludeConsumers.has(file) ? [sharedBundlePrelude] : []),
      ...(sharedPageCommonConsumers.has(file) ? [sharedPageCommon] : []),
      ...(sharedUrlQueryCleanupConsumers.has(file)
        ? [sharedUrlQueryCleanup]
        : []),
      ...(sharedUiControlsConsumers.has(file) ? [sharedUiControls] : []),
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

function extractChromeApiTouches(source: string) {
  return [...source.matchAll(/\bchrome(?:\.[A-Za-z_$][\w$]*)+/g)]
    .map(([match]) => match)
    .sort();
}

function extractStringLiterals(source: string) {
  const literals = collectAstValues(source, (node) => {
    if (node.type === "StringLiteral") return node.value;
    if (node.type === "TemplateElement") return node.value.raw;
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
        literal !== "shared/bundle-prelude.js" &&
        literal !== "shared/page-common.js" &&
        literal !== "shared/url-query-cleanup.js" &&
        literal !== "shared/ui-controls.js",
    )
    .sort();
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
  visitAst(ast as AstNode, (node) => {
    const value = readValue(node);
    if (value !== undefined) values.push(value);
  });
  return values;
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
