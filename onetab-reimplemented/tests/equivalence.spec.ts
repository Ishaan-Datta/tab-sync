import { expect, test } from "./fixtures/extension";

const extensionPages = [
  "popup.html",
  "onetab.html",
  "options.html",
  "import-export.html",
  "placeholder.html?url=https%3A%2F%2Fexample.com%2Fone",
  "shared-page-permission.html",
  "safari-permissions.html",
];

test("runtime baseline state matches the original extension", async ({
  extensions,
}) => {
  const [original, candidate] = await Promise.all([
    extensions.original.runtimeSnapshot(),
    extensions.candidate.runtimeSnapshot(),
  ]);

  expect(candidate).toEqual(original);
});

test("extension pages render matching user-facing text", async ({
  extensions,
}) => {
  for (const extensionPage of extensionPages) {
    const [original, candidate] = await Promise.all([
      extensions.original.pageTextSnapshot(extensionPage),
      extensions.candidate.pageTextSnapshot(extensionPage),
    ]);

    expect(candidate).toEqual(original);
  }
});

test("extension pages do not emit unique runtime errors", async ({
  extensions,
}) => {
  for (const extensionPage of extensionPages) {
    await Promise.all([
      extensions.original.pageTextSnapshot(extensionPage),
      extensions.candidate.pageTextSnapshot(extensionPage),
    ]);
  }

  expect(normalizeErrors(extensions.candidate.errors)).toEqual(
    normalizeErrors(extensions.original.errors),
  );
});

function normalizeErrors(errors: string[]) {
  return errors
    .map((error) => error.replace(/^(candidate|original) /, ""))
    .sort();
}
