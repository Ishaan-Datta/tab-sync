import { expect, test } from "./fixtures/extension";

const storedRegressionSeed = {
  groups: [
    {
      groupType: "window" as const,
      id: "test-window-1",
      label: "Seeded Regression Window",
      tabs: [
        {
          id: "test-tab-alpha",
          title: "Alpha Stored Tab",
          url: "https://example.com/alpha-stored-tab",
        },
        {
          id: "test-tab-beta",
          notes: "Beta note for export coverage",
          title: "Beta Stored Tab",
          url: "https://example.org/beta-stored-tab?with=query",
        },
      ],
    },
  ],
};

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

test("stored tab export text matches the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("import-export.html", {
      viewport: { height: 900, width: 900 },
    });

    try {
      await page.locator("textarea").first().waitFor({ state: "visible" });
      await page
        .waitForFunction(
          () =>
            Array.from(document.querySelectorAll("textarea")).some((textarea) =>
              textarea.value.includes("alpha-stored-tab"),
            ),
          undefined,
          { timeout: 5_000 },
        )
        .catch(() => {});

      return await page.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        textareas: Array.from(document.querySelectorAll("textarea")).map(
          (textarea, index) => ({
            index,
            value: textarea.value,
            visible: textarea.offsetParent !== null,
          }),
        ),
      }));
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  const exportedValues = candidate.textareas.map((textarea) => textarea.value);
  expect(exportedValues.some((value) => value.includes("Alpha Stored Tab"))).toBe(
    true,
  );
  expect(
    exportedValues.some((value) => value.includes("https://example.com/alpha-stored-tab")),
  ).toBe(true);
  expect(exportedValues.some((value) => value.includes("Beta Stored Tab"))).toBe(
    true,
  );
  expect(
    exportedValues.some((value) => value.includes("https://example.org/beta-stored-tab?with=query")),
  ).toBe(true);
});

test("import text section interaction matches the original extension", async ({
  extensions,
}) => {
  const importText =
    "https://example.net/import-one | Imported One\nhttps://example.net/import-two | Imported Two";

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("import-export.html", {
      viewport: { height: 900, width: 900 },
    });

    try {
      await page.locator("textarea").first().waitFor({ state: "visible" });
      await page.evaluate(() => {
        const instructionsToggle = Array.from(
          document.querySelectorAll<HTMLElement>("span"),
        ).find((element) =>
          /paste instructions/i.test(element.textContent ?? ""),
        );
        instructionsToggle?.click();
      });
      await page.locator("textarea").last().fill(importText);

      return await page.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        textareas: Array.from(document.querySelectorAll("textarea")).map(
          (textarea, index) => ({
            index,
            value: textarea.value,
            visible: textarea.offsetParent !== null,
          }),
        ),
      }));
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).toContain("https://www.example.com/one");
  expect(candidate.textareas.some((textarea) => textarea.value === importText)).toBe(
    true,
  );
});

test("stored tab context menus render matching popups", async ({ extensions }) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      const tab = page.locator('.tab:has-text("Alpha Stored Tab")').first();
      await tab.waitFor({ state: "visible" });
      await tab.hover();
      await tab.locator(".tabMoreButton").click();
      await page.waitForTimeout(750);
      const tabMenu = await menuSnapshot(page);
      await page.mouse.click(5, 5);
      await page.waitForTimeout(150);

      const secondTab = page.locator('.tab:has-text("Beta Stored Tab")').first();
      await secondTab.waitFor({ state: "visible" });
      await secondTab.hover();
      await secondTab.locator(".tabMoreButton").click();
      await page.waitForTimeout(750);
      const secondTabMenu = await menuSnapshot(page);

      return { secondTabMenu, tabMenu };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.tabMenu.menuText).toContain("Move to trash");
  expect(candidate.tabMenu.itemCount).toBeGreaterThan(3);
  expect(candidate.secondTabMenu.menuText).toContain("Move to trash");
  expect(candidate.secondTabMenu.itemCount).toBeGreaterThan(3);
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

async function menuSnapshot(page: import("@playwright/test").Page) {
  return await page.evaluate(() => {
    const menus = Array.from(
      document.querySelectorAll<HTMLElement>(".dropdown-selection, .popup"),
    ).filter((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        rect.width > 0 &&
        rect.height > 0
      );
    });
    const menuItems = menus.flatMap((menu) =>
      Array.from(menu.querySelectorAll<HTMLElement>(".menuItem")),
    );

    return {
      itemCount: menuItems.length,
      menuText: menus
        .map((menu) => menu.innerText.replace(/\s+/g, " ").trim())
        .filter(Boolean)
        .join(" | "),
    };
  });
}
