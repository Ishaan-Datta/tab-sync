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
  await extensions.compareRuntime();
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

test("extension pages render matching default DOM state", async ({
  extensions,
}) => {
  for (const extensionPage of extensionPages) {
    await extensions.compareRender(extensionPage, {
      selectors: [
        "body",
        "#contentAreaDiv",
        ".button",
        ".menuItem",
        ".dropdown",
        "input",
        "textarea",
        "[role]",
      ],
      viewport: { height: 800, width: 900 },
    });
  }
});

test("interaction-triggered UI states render matching snapshots", async ({
  extensions,
}) => {
  await extensions.compareRender(
    "placeholder.html?url=https%3A%2F%2Fexample.com%2Foriginal",
    {
      actions: [
        {
          selector: "#urlInput",
          type: "fill",
          value: "https://example.com/edited-by-test",
        },
        { selector: "#copyButton", type: "focus" },
      ],
      selectors: ["body", "#filename", "#urlInput", "#copyButton", ".button"],
      viewport: { height: 520, width: 900 },
    },
  );

  await extensions.compareRender("shared-page-permission.html", {
    actions: [{ selector: "#approveButton", type: "hover" }],
    selectors: ["body", "#approveButton", ".button"],
    viewport: { height: 520, width: 700 },
  });

  await extensions.compareRender("import-export.html", {
    actions: [
      { selector: "textarea", state: "visible", type: "waitForSelector" },
      {
        selector: "textarea",
        type: "fill",
        value:
          "https://example.com/a | Example A\nhttps://example.com/b | Example B",
      },
      { selector: "textarea", type: "focus" },
    ],
    selectors: ["body", "#contentAreaDiv", "textarea", ".button", ".dropdown"],
    viewport: { height: 900, width: 900 },
  });

  await extensions.compareRender("options.html", {
    actions: [
      {
        selector: '#contentAreaDiv img[src*="option-button"]',
        state: "visible",
        type: "waitForSelector",
      },
      { selector: '#contentAreaDiv img[src*="option-button"]', type: "hover" },
    ],
    selectors: [
      "body",
      "#contentAreaDiv",
      '#contentAreaDiv img[src*="option-button"]',
      ".button",
    ],
    viewport: { height: 900, width: 900 },
  });
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
