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

for (const file of concatenatedFiles) {
  test(`${file} preserves syntax and runtime literals`, async () => {
    const [original, candidate] = await Promise.all([
      readFile(resolve(originalRoot, file), "utf8"),
      readFile(resolve(candidateRoot, file), "utf8"),
    ]);

    expect(() => new Script(candidate, { filename: file })).not.toThrow();
    expect(extractStringLiterals(candidate)).toEqual(
      extractStringLiterals(original),
    );
    expect(extractChromeApiTouches(candidate)).toEqual(
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
  return literals.sort();
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
