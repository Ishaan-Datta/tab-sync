import { expect, test } from "./fixtures/extension";

declare const chrome: any;

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

test("browser action stores current window tabs like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.createBrowserState({
      tabs: [
        {
          title: "Action Stored Alpha",
          url: "https://example.com/action-stored-alpha",
        },
        {
          active: true,
          title: "Action Stored Beta",
          url: "https://example.org/action-stored-beta?with=query",
        },
      ],
    }),
  );

  await extensions.runBoth((extension) => extension.storeCurrentWindowTabs());

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await page.locator('.tab:has-text("Action Stored Alpha")').waitFor({
        state: "visible",
      });
      await page.locator('.tab:has-text("Action Stored Beta")').waitFor({
        state: "visible",
      });

      return await page.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        tabTexts: Array.from(document.querySelectorAll<HTMLElement>(".tab"))
          .map((tab) => tab.innerText.replace(/\s+/g, " ").trim())
          .filter(Boolean),
      }));
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).toContain("Action Stored Alpha");
  expect(candidate.bodyText).toContain("Action Stored Beta");
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tabs restore into the browser like the original extension", async ({
  extensions,
}) => {
  const restoredUrl = "https://example.com/alpha-stored-tab";

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    await extension.context.route("**/*", async (route) => {
      if (!route.request().url().startsWith(restoredUrl)) {
        await route.continue();
        return;
      }

      if (route.request().resourceType() !== "document") {
        await route.fulfill({ status: 204 });
        return;
      }

      await route.fulfill({
        body: "<!doctype html><title>Alpha Restored Page</title><h1>Alpha Restored Page</h1>",
        contentType: "text/html",
      });
    });
    await extension.seedStoredOneTabData(storedRegressionSeed);
    await seedOneTabAttr(extension, "autoActionOnOpenOptionChosen", true);

    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      const storedTab = page
        .locator('.tab:has-text("Alpha Stored Tab")')
        .first();
      await storedTab.waitFor({ state: "visible" });
      await storedTab.locator(".tabLinkTextStripesPossible").first().click();

      await expect
        .poll(
          async () =>
            await extension.serviceWorker.evaluate(
              async (url) =>
                (await chrome.tabs.query({})).some((tab: any) =>
                  tab.url?.startsWith(url),
                ),
              restoredUrl,
            ),
          { timeout: 5_000 },
        )
        .toBe(true);
      await page.waitForTimeout(500);

      return {
        bodyText: documentText(await page.locator("body").innerText()),
        tabs: await extension.serviceWorker.evaluate(async () => {
          const extensionId = chrome.runtime.id;
          const tabs: Array<{
            active?: boolean;
            index: number;
            pinned?: boolean;
            title?: string;
            url?: string;
          }> = await chrome.tabs.query({});
          return tabs
            .map((tab) => ({
              active: tab.active,
              index: tab.index,
              pinned: tab.pinned,
              title: tab.title,
              url: tab.url?.replace(extensionId, "<extension-id>"),
            }))
            .sort((left, right) => left.index - right.index);
        }),
      };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).toContain("Beta Stored Tab");
  expect(candidate.tabs.some((tab) => tab.url?.startsWith(restoredUrl))).toBe(
    true,
  );
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups restore all tabs like the original extension", async ({
  extensions,
}) => {
  const restoredUrls = [
    "https://example.com/alpha-stored-tab",
    "https://example.org/beta-stored-tab?with=query",
  ];

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    await extension.context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (!new Set(["example.com", "example.org"]).has(url.hostname)) {
        await route.continue();
        return;
      }

      if (route.request().resourceType() !== "document") {
        await route.fulfill({ status: 204 });
        return;
      }

      await route.fulfill({
        body: `<!doctype html><title>${url.href}</title><h1>${url.href}</h1>`,
        contentType: "text/html",
      });
    });

    await extension.seedStoredOneTabData(storedRegressionSeed);
    await seedOneTabAttr(extension, "autoActionOnOpenOptionChosen", true);

    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await page.locator('.tab:has-text("Alpha Stored Tab")').waitFor({
        state: "visible",
      });
      await page
        .locator(".controlButton")
        .filter({ hasText: /^Restore all$/ })
        .first()
        .click();

      await expect
        .poll(
          async () =>
            await extension.serviceWorker.evaluate(
              async (urls) => {
                const tabs: Array<{ url?: string }> = await chrome.tabs.query(
                  {},
                );
                return urls.every((url) =>
                  tabs.some((tab) => tab.url?.startsWith(url)),
                );
              },
              restoredUrls,
            ),
          { timeout: 5_000 },
        )
        .toBe(true);
      await page.waitForTimeout(500);

      return {
        bodyText: documentText(await page.locator("body").innerText()),
        tabs: await extension.serviceWorker.evaluate(async () => {
          const extensionId = chrome.runtime.id;
          const tabs: Array<{
            active?: boolean;
            index: number;
            pinned?: boolean;
            title?: string;
            url?: string;
          }> = await chrome.tabs.query({});
          return tabs
            .map((tab) => ({
              active: tab.active,
              index: tab.index,
              pinned: tab.pinned,
              title: tab.title,
              url: tab.url?.replace(extensionId, "<extension-id>"),
            }))
            .sort((left, right) => left.index - right.index);
        }),
      };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  for (const restoredUrl of restoredUrls) {
    expect(
      candidate.tabs.some((tab) => tab.url?.startsWith(restoredUrl)),
    ).toBe(true);
  }
  expect(
    normalizeErrors(extensions.candidate.errors).filter(
      (error) => !isRestoredPageResourceError(error),
    ),
  ).toEqual(
    normalizeErrors(extensions.original.errors).filter(
      (error) => !isRestoredPageResourceError(error),
    ),
  );
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

  extensions.assertNoCandidateOnlyErrors();
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
  expect(
    exportedValues.some((value) => value.includes("Alpha Stored Tab")),
  ).toBe(true);
  expect(
    exportedValues.some((value) =>
      value.includes("https://example.com/alpha-stored-tab"),
    ),
  ).toBe(true);
  expect(
    exportedValues.some((value) => value.includes("Beta Stored Tab")),
  ).toBe(true);
  expect(
    exportedValues.some((value) =>
      value.includes("https://example.org/beta-stored-tab?with=query"),
    ),
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
  expect(
    candidate.textareas.some((textarea) => textarea.value === importText),
  ).toBe(true);
  extensions.assertNoCandidateOnlyErrors();
});

test("imported text links become stored tabs like the original extension", async ({
  extensions,
}) => {
  const importHtml = [
    '<a href="https://example.net/imported-alpha">Imported Alpha</a>',
    '<a href="https://example.net/imported-beta?with=query">Imported Beta</a>',
  ].join("<br>");

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const importPage = await extension.openPage("import-export.html", {
      viewport: { height: 900, width: 900 },
    });

    try {
      await importPage.locator("iframe").first().waitFor({ state: "attached" });
      const importFrameElement = await importPage
        .locator("iframe")
        .first()
        .elementHandle();
      const importFrame = await importFrameElement?.contentFrame();
      if (!importFrame) throw new Error("Import editor frame not found");

      await importFrame.evaluate((html) => {
        document.body.innerHTML = html;
      }, importHtml);

      await importPage
        .locator(".button")
        .filter({ hasText: /^Import$/ })
        .first()
        .click();
      await importPage.waitForTimeout(500).catch(() => {});
    } finally {
      await importPage.close().catch(() => {});
    }

    const oneTabPage = await existingOrNewOneTabPage(extension, {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await oneTabPage.locator('.tab:has-text("Imported Alpha")').waitFor({
        state: "visible",
      });
      await oneTabPage.locator('.tab:has-text("Imported Beta")').waitFor({
        state: "visible",
      });

      return await oneTabPage.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        hrefs: Array.from(
          document.querySelectorAll<HTMLAnchorElement>(".tab a"),
        )
          .map((link) => link.href)
          .filter(Boolean),
        tabTexts: Array.from(document.querySelectorAll<HTMLElement>(".tab"))
          .map((tab) => tab.innerText.replace(/\s+/g, " ").trim())
          .filter(Boolean),
      }));
    } finally {
      await oneTabPage.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).toContain("Imported Alpha");
  expect(candidate.bodyText).toContain("Imported Beta");
  expect(candidate.hrefs).toContain("https://example.net/imported-alpha");
  expect(candidate.hrefs).toContain(
    "https://example.net/imported-beta?with=query",
  );
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tabs toggle archive status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseTabMenuItem(page, "Alpha Stored Tab", /^Mark as archived$/);
      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Stored Tab" }).first(),
      ).toHaveClass(/archived/);
      const archivedSnapshot = await tabStatusSnapshot(page, "Alpha Stored Tab");

      await chooseTabMenuItem(
        page,
        "Alpha Stored Tab",
        /^Unmark as archived$/,
      );
      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Stored Tab" }).first(),
      ).not.toHaveClass(/archived/);
      const unarchivedSnapshot = await tabStatusSnapshot(
        page,
        "Alpha Stored Tab",
      );

      return { archivedSnapshot, unarchivedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.archivedSnapshot.className).toContain("archived");
  expect(candidate.unarchivedSnapshot.className).not.toContain("archived");
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tabs toggle task status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseTabMenuItem(
        page,
        "Alpha Stored Tab",
        /^Mark as pending task$/,
      );
      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Stored Tab" }).first(),
      ).toHaveClass(/task-pending/);
      const pendingSnapshot = await tabStatusSnapshot(page, "Alpha Stored Tab");

      await chooseTabMenuItem(page, "Alpha Stored Tab", /^Mark as done task$/);
      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Stored Tab" }).first(),
      ).toHaveClass(/task-done/);
      const doneSnapshot = await tabStatusSnapshot(page, "Alpha Stored Tab");

      await chooseTabMenuItem(page, "Alpha Stored Tab", /^Unmark as task$/);
      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Stored Tab" }).first(),
      ).not.toHaveClass(/task-/);
      const unmarkedSnapshot = await tabStatusSnapshot(page, "Alpha Stored Tab");

      return { doneSnapshot, pendingSnapshot, unmarkedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.pendingSnapshot.className).toContain("task-pending");
  expect(candidate.doneSnapshot.className).toContain("task-done");
  expect(candidate.unmarkedSnapshot.className).not.toContain("task-");
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tabs rename and add notes like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await editTabTitleAndNotes(page, {
        notes: "Alpha note added by equivalence test",
        originalTitle: "Alpha Stored Tab",
        title: "Alpha Renamed Tab",
      });

      await expect(
        page.locator(".tab").filter({ hasText: "Alpha Renamed Tab" }).first(),
      ).toBeVisible();
      await expect(page.locator("body")).toContainText(
        "Alpha note added by equivalence test",
      );

      return await tabStatusSnapshot(page, "Alpha Renamed Tab");
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.stripedTexts).toContain("Alpha Renamed Tab");
  expect(candidate.stripedTexts).toContain(
    "Alpha note added by equivalence test",
  );
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups rename and add notes like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await editGroupTitleAndNotes(page, {
        notes: "Regression group note added by equivalence test",
        originalTitle: "Seeded Regression Window",
        title: "Renamed Regression Window",
      });

      await expect(page.locator("body")).toContainText(
        "Renamed Regression Window",
      );
      await expect(page.locator("body")).toContainText(
        "Regression group note added by equivalence test",
      );

      return await groupStatusSnapshot(page, "Renamed Regression Window");
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.labelText).toContain("Renamed Regression Window");
  expect(candidate.texts).toContain(
    "Regression group note added by equivalence test",
  );
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups toggle archive status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Mark as archived$/,
      );
      await waitForItemStatus(page, "test-window-1", { archived: 1 });
      const archivedSnapshot = await itemStatusSnapshot(page, "test-window-1");

      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Unmark as archived$/,
      );
      await waitForItemStatus(page, "test-window-1", { archived: 0 });
      const unarchivedSnapshot = await itemStatusSnapshot(page, "test-window-1");

      return { archivedSnapshot, unarchivedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.archivedSnapshot.archived).toBe(1);
  expect(candidate.unarchivedSnapshot.archived).toBe(0);
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups toggle task status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Mark as pending task$/,
      );
      await waitForItemStatus(page, "test-window-1", { done: 0, task: 1 });
      const pendingSnapshot = await itemStatusSnapshot(page, "test-window-1");

      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Mark as done task$/,
      );
      await waitForItemStatus(page, "test-window-1", { done: 1, task: 1 });
      const doneSnapshot = await itemStatusSnapshot(page, "test-window-1");

      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Unmark as task$/,
      );
      await waitForItemStatus(page, "test-window-1", { done: 0, task: 0 });
      const unmarkedSnapshot = await itemStatusSnapshot(page, "test-window-1");

      return { doneSnapshot, pendingSnapshot, unmarkedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.pendingSnapshot).toMatchObject({ done: 0, task: 1 });
  expect(candidate.doneSnapshot).toMatchObject({ done: 1, task: 1 });
  expect(candidate.unmarkedSnapshot).toMatchObject({ done: 0, task: 0 });
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups toggle lock status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseGroupMenuItem(page, "Seeded Regression Window", /^Lock$/);
      await waitForGroupLockIconCount(page, "Seeded Regression Window", 1);
      const lockedSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      await chooseGroupMenuItem(page, "Seeded Regression Window", /^Unlock$/);
      await waitForGroupLockIconCount(page, "Seeded Regression Window", 0);
      const unlockedSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      return { lockedSnapshot, unlockedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.lockedSnapshot.lockIconCount).toBe(1);
  expect(candidate.unlockedSnapshot.lockIconCount).toBe(0);
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups toggle pin status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Pin to top of folder$/,
      );
      await waitForGroupPinIconCount(page, "Seeded Regression Window", 1);
      const pinnedSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      await chooseGroupMenuItem(page, "Seeded Regression Window", /^Unpin$/);
      await waitForGroupPinIconCount(page, "Seeded Regression Window", 0);
      const unpinnedSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      return { pinnedSnapshot, unpinnedSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.pinnedSnapshot.pinIconCount).toBe(1);
  expect(candidate.unpinnedSnapshot.pinIconCount).toBe(0);
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups toggle star status like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await chooseGroupMenuItem(page, "Seeded Regression Window", /^Star$/);
      await waitForGroupStarIconCount(page, "Seeded Regression Window", 1);
      const starredSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      await chooseGroupMenuItem(
        page,
        "Seeded Regression Window",
        /^Remove star$/,
      );
      await waitForGroupStarIconCount(page, "Seeded Regression Window", 0);
      const unstarredSnapshot = await groupStatusSnapshot(
        page,
        "Seeded Regression Window",
      );

      return { starredSnapshot, unstarredSnapshot };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.starredSnapshot.starIconCount).toBe(1);
  expect(candidate.unstarredSnapshot.starIconCount).toBe(0);
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tabs move to trash like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await moveTabToTrash(page, "Alpha Stored Tab");

      await expect(
        page.locator('.tab:has-text("Alpha Stored Tab")'),
      ).toHaveCount(0);
      await expect(page.locator("body")).toContainText("Trash1");

      return await page.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        tabTexts: Array.from(document.querySelectorAll<HTMLElement>(".tab"))
          .map((tab) => tab.innerText.replace(/\s+/g, " ").trim())
          .filter(Boolean),
      }));
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).not.toContain("Alpha Stored Tab");
  expect(candidate.bodyText).toContain("Beta Stored Tab");
  expect(candidate.bodyText).toContain("Trash 1");
  extensions.assertNoCandidateOnlyErrors();
});

test("stored groups move to trash like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await moveGroupToTrash(page, "Seeded Regression Window");
      await dismissMoveToTrashGroupHint(page);
      await waitForItemStatus(page, "test-window-1", { parentIds: ["trash"] });
      await expect(
        page.locator('.tabGroup:has-text("Seeded Regression Window")'),
      ).toHaveCount(0);

      const trashedSnapshot = await itemStatusSnapshot(page, "test-window-1");
      await openTrashView(page);
      await page
        .locator('.tabGroup:has-text("Seeded Regression Window")')
        .waitFor({ state: "visible" });
      const trashViewText = documentText(await page.locator("body").innerText());

      return { trashedSnapshot, trashViewText };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.trashedSnapshot.parentIds).toEqual(["trash"]);
  expect(candidate.trashViewText).toContain("Seeded Regression Window");
  extensions.assertNoCandidateOnlyErrors();
});

test("trashed groups delete all trash like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await moveGroupToTrash(page, "Seeded Regression Window");
      await dismissMoveToTrashGroupHint(page);
      await waitForItemStatus(page, "test-window-1", { parentIds: ["trash"] });
      await openTrashView(page);
      await page
        .locator('.tabGroup:has-text("Seeded Regression Window")')
        .waitFor({ state: "visible" });
      await page
        .locator(".controlButton")
        .filter({ hasText: /^Delete all trash$/ })
        .first()
        .click();

      await waitForItemMissing(page, "test-window-1");
      await waitForItemMissing(page, "test-tab-alpha");
      await waitForItemMissing(page, "test-tab-beta");

      return {
        bodyText: documentText(await page.locator("body").innerText()),
        group: await itemRecordSnapshot(page, "test-window-1"),
        tabAlpha: await itemRecordSnapshot(page, "test-tab-alpha"),
        tabBeta: await itemRecordSnapshot(page, "test-tab-beta"),
      };
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).not.toContain("Seeded Regression Window");
  expect(candidate.group).toBeNull();
  expect(candidate.tabAlpha).toBeNull();
  expect(candidate.tabBeta).toBeNull();
  extensions.assertNoCandidateOnlyErrors();
});

test("trashed tabs delete all trash like the original extension", async ({
  extensions,
}) => {
  await extensions.runBoth((extension) =>
    extension.seedStoredOneTabData(storedRegressionSeed),
  );

  const [original, candidate] = await extensions.runBoth(async (extension) => {
    const page = await extension.openPage("onetab.html", {
      viewport: { height: 900, width: 1100 },
    });

    try {
      await moveTabToTrash(page, "Alpha Stored Tab");
      await openTrashView(page);
      await page.locator('.tab:has-text("Alpha Stored Tab")').waitFor({
        state: "visible",
      });
      await page
        .locator(".controlButton")
        .filter({ hasText: /^Delete all trash$/ })
        .first()
        .click();

      await expect(
        page.locator('.tab:has-text("Alpha Stored Tab")'),
      ).toHaveCount(0);

      return await page.evaluate(() => ({
        bodyText: document.body.innerText.replace(/\s+/g, " ").trim(),
        tabTexts: Array.from(document.querySelectorAll<HTMLElement>(".tab"))
          .map((tab) => tab.innerText.replace(/\s+/g, " ").trim())
          .filter(Boolean),
      }));
    } finally {
      await page.close().catch(() => {});
    }
  });

  expect(candidate).toEqual(original);
  expect(candidate.bodyText).not.toContain("Alpha Stored Tab");
  expect(candidate.bodyText).not.toContain("Trash 1");
  expect(candidate.bodyText).not.toContain("Trash1");
  extensions.assertNoCandidateOnlyErrors();
});

test("stored tab context menus render matching popups", async ({
  extensions,
}) => {
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

      const secondTab = page
        .locator('.tab:has-text("Beta Stored Tab")')
        .first();
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
  extensions.assertNoCandidateOnlyErrors();
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

function documentText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function isRestoredPageResourceError(error: string) {
  return /^https:\/\/example\.(com|org)\/.* console: Failed to load resource:/.test(
    error,
  );
}

async function seedOneTabAttr(
  extension: { serviceWorker: import("@playwright/test").Worker },
  id: string,
  value: unknown,
) {
  await extension.serviceWorker.evaluate(
    async ({ id, value }) => {
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
        const transaction = database.transaction("attr", "readwrite");
        transaction.objectStore("attr").put({ id, value });
        await transactionDone(transaction);
      } finally {
        database.close();
      }
    },
    { id, value },
  );
}

async function existingOrNewOneTabPage(
  extension: {
    context: import("@playwright/test").BrowserContext;
    extensionId: string;
    openPage(
      pathname: string,
      options?: { viewport?: { height: number; width: number } },
    ): Promise<import("@playwright/test").Page>;
  },
  options: { viewport: { height: number; width: number } },
) {
  const oneTabUrl = `chrome-extension://${extension.extensionId}/onetab.html`;
  const deadline = Date.now() + 5_000;

  while (Date.now() < deadline) {
    const page = extension.context
      .pages()
      .find(
        (candidate) =>
          candidate.url().startsWith(oneTabUrl) && !candidate.isClosed(),
      );
    if (page) {
      await page.setViewportSize(options.viewport);
      await page.waitForLoadState("domcontentloaded").catch(() => {});
      return page;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return await extension.openPage("onetab.html", options);
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

async function moveTabToTrash(
  page: import("@playwright/test").Page,
  tabTitle: string,
) {
  await chooseTabMenuItem(page, tabTitle, /^Move to trash$/);
}

async function moveGroupToTrash(
  page: import("@playwright/test").Page,
  groupTitle: string,
) {
  await chooseGroupMenuItem(page, groupTitle, /^Move to trash$/);
}

async function dismissMoveToTrashGroupHint(
  page: import("@playwright/test").Page,
) {
  await page
    .getByText("Got it", { exact: true })
    .click({ timeout: 1_000 })
    .catch(() => {});
}

async function chooseTabMenuItem(
  page: import("@playwright/test").Page,
  tabTitle: string,
  menuItemText: RegExp,
) {
  const tab = page.locator(".tab").filter({ hasText: tabTitle }).first();
  await tab.waitFor({ state: "visible" });
  await tab.hover();
  await tab.locator(".tabMoreButton").click({ force: true });
  await page
    .locator(".menuItem:visible")
    .filter({ hasText: menuItemText })
    .first()
    .click();
}

async function chooseGroupMenuItem(
  page: import("@playwright/test").Page,
  groupTitle: string,
  menuItemText: RegExp,
) {
  const group = page
    .locator(".tabGroup")
    .filter({
      has: page.locator(".tabGroupLabelText").filter({ hasText: groupTitle }),
    })
    .first();
  await group.waitFor({ state: "visible" });
  await group.hover();
  const moreButton = await group.evaluate((element) => {
    const buttons = Array.from(
      element.querySelectorAll<HTMLElement>(".controlButton"),
    );
    const buttonTexts = buttons.map((button) =>
      button.innerText.replace(/\s+/g, " ").trim(),
    );
    const button = buttons.find((candidate) =>
      /^More/.test(candidate.innerText.replace(/\s+/g, " ").trim()),
    );

    button?.click();
    return { buttonTexts, clicked: !!button };
  });

  if (!moreButton.clicked) {
    throw new Error(
      `Group More button not found for ${groupTitle}: ${JSON.stringify(
        moreButton.buttonTexts,
      )}`,
    );
  }
  await page
    .locator(".menuItem:visible")
    .filter({ hasText: menuItemText })
    .first()
    .click();
}

async function waitForGroupLockIconCount(
  page: import("@playwright/test").Page,
  groupTitle: string,
  count: number,
) {
  await expect
    .poll(
      async () => (await groupStatusSnapshot(page, groupTitle)).lockIconCount,
      { timeout: 5_000 },
    )
    .toBe(count);
}

async function waitForGroupPinIconCount(
  page: import("@playwright/test").Page,
  groupTitle: string,
  count: number,
) {
  await expect
    .poll(
      async () => (await groupStatusSnapshot(page, groupTitle)).pinIconCount,
      { timeout: 5_000 },
    )
    .toBe(count);
}

async function waitForGroupStarIconCount(
  page: import("@playwright/test").Page,
  groupTitle: string,
  count: number,
) {
  await expect
    .poll(
      async () => (await groupStatusSnapshot(page, groupTitle)).starIconCount,
      { timeout: 5_000 },
    )
    .toBe(count);
}

async function tabStatusSnapshot(
  page: import("@playwright/test").Page,
  tabTitle: string,
) {
  return await page.evaluate((title) => {
    const tab = Array.from(document.querySelectorAll<HTMLElement>(".tab")).find(
      (element) => element.innerText.includes(title),
    );

    if (!tab) throw new Error(`Tab not found: ${title}`);
    const linkTexts = Array.from(
      tab.querySelectorAll<HTMLElement>(".tabLinkTextStripesPossible"),
    );
    return {
      className: tab.className,
      linkTextBackground: linkTexts[0]
        ? getComputedStyle(linkTexts[0]).backgroundImage
        : "",
      stripedTexts: linkTexts
        .map((element) => element.innerText.replace(/\s+/g, " ").trim())
        .filter(Boolean),
    };
  }, tabTitle);
}

async function groupStatusSnapshot(
  page: import("@playwright/test").Page,
  groupTitle: string,
) {
  return await page.evaluate((title) => {
    const group = Array.from(
      document.querySelectorAll<HTMLElement>(".tabGroup"),
    ).find((element) => element.innerText.includes(title));
    const label = group?.querySelector<HTMLElement>(".tabGroupLabelText");

    if (!group || !label) throw new Error(`Group not found: ${title}`);

    return {
      className: label.className,
      labelText: label.innerText.replace(/\s+/g, " ").trim(),
      lockIconCount: Array.from(group.querySelectorAll<HTMLImageElement>("img"))
        .filter((element) => /\/images\/lock(-dark)?\.png$/.test(element.src))
        .filter((element) => element.offsetParent !== null).length,
      pinIconCount: Array.from(group.querySelectorAll<HTMLImageElement>("img"))
        .filter((element) => /\/images\/pin(-dark)?\.png$/.test(element.src))
        .filter((element) => element.offsetParent !== null).length,
      starIconCount: Array.from(group.querySelectorAll<HTMLImageElement>("img"))
        .filter((element) => /\/images\/star2(-dark)?\.png$/.test(element.src))
        .filter((element) => element.offsetParent !== null).length,
      texts: [
        ...new Set(
          Array.from(
            group.querySelectorAll<HTMLElement>(
              ".tabGroupLabelText, .tabLinkText, .tabLinkTextStripesPossible",
            ),
          )
            .filter((element) => element.offsetParent !== null)
            .map((element) => element.innerText.replace(/\s+/g, " ").trim())
            .filter(Boolean),
        ),
      ].sort(),
    };
  }, groupTitle);
}

async function waitForItemStatus(
  page: import("@playwright/test").Page,
  itemId: string,
  expected: {
    archived?: number;
    childIds?: string[];
    done?: number;
    parentIds?: string[];
    task?: number;
  },
) {
  await expect
    .poll(async () => await itemStatusSnapshot(page, itemId), { timeout: 5_000 })
    .toMatchObject(expected);
}

async function waitForItemMissing(
  page: import("@playwright/test").Page,
  itemId: string,
) {
  await expect
    .poll(async () => await itemRecordSnapshot(page, itemId), { timeout: 5_000 })
    .toBeNull();
}

async function itemStatusSnapshot(
  page: import("@playwright/test").Page,
  itemId: string,
) {
  const item = await itemRecordSnapshot(page, itemId);
  if (!item) throw new Error(`OneTab item not found: ${itemId}`);

  return {
    archived: item.archived ?? 0,
    childIds: item.childIds ?? [],
    done: item.done ?? 0,
    id: item.id,
    parentIds: item.parentIds ?? [],
    task: item.task ?? 0,
    type: item.type,
  };
}

async function itemRecordSnapshot(
  page: import("@playwright/test").Page,
  itemId: string,
) {
  return await page.evaluate(async (id) => {
    function requestResult<T>(request: IDBRequest<T>): Promise<T> {
      return new Promise((resolve, reject) => {
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
      });
    }

    const database = await requestResult(indexedDB.open("onetab", 2));
    try {
      const transaction = database.transaction("item", "readonly");
      return (
        (await requestResult(transaction.objectStore("item").get(id))) ?? null
      );
    } finally {
      database.close();
    }
  }, itemId);
}

async function editTabTitleAndNotes(
  page: import("@playwright/test").Page,
  values: { notes: string; originalTitle: string; title: string },
) {
  await chooseTabMenuItem(page, values.originalTitle, /^Rename \/ Add note$/);

  await page.locator('textarea[placeholder="Title"]').first().waitFor({
    state: "visible",
  });
  await fillVisibleTextarea(page, {
    placeholder: "Title",
    submitWithEnter: true,
    value: values.title,
    valueToReplace: values.originalTitle,
  });
  await page.locator(".tab").filter({ hasText: values.title }).first().waitFor({
    state: "visible",
  });

  await chooseTabMenuItem(page, values.title, /^Rename \/ Add note$/);

  const notesInput = page.locator('textarea[placeholder="Notes"]').last();
  await notesInput.waitFor({ state: "visible" });
  await notesInput.fill(values.notes);
  await page.mouse.click(5, 5);
}

async function editGroupTitleAndNotes(
  page: import("@playwright/test").Page,
  values: { notes: string; originalTitle: string; title: string },
) {
  await page
    .locator(".tabGroupLabelText")
    .filter({ hasText: values.originalTitle })
    .first()
    .click();

  await page.locator('textarea[placeholder="Title"]').first().waitFor({
    state: "visible",
  });
  await fillVisibleTextarea(page, {
    placeholder: "Title",
    submitWithEnter: true,
    value: values.title,
    valueToReplace: values.originalTitle,
  });
  await expect(page.locator("body")).toContainText(values.title);

  await page
    .locator(".tabGroupLabelText")
    .filter({ hasText: values.title })
    .first()
    .click();
  await page.locator('textarea[placeholder="Notes"]').last().waitFor({
    state: "visible",
  });
  await fillVisibleTextarea(page, {
    placeholder: "Notes",
    value: values.notes,
  });
  await page.mouse.click(5, 5);
}

async function fillVisibleTextarea(
  page: import("@playwright/test").Page,
  options: {
    placeholder: string;
    submitWithEnter?: boolean;
    value: string;
    valueToReplace?: string;
  },
) {
  await page.evaluate(
    ({ placeholder, submitWithEnter, value, valueToReplace }) => {
      const textarea = Array.from(document.querySelectorAll("textarea")).find(
        (element) =>
          element.placeholder === placeholder &&
          element.offsetParent !== null &&
          (valueToReplace === undefined || element.value === valueToReplace),
      );

      if (!textarea) throw new Error(`Textarea not found: ${placeholder}`);
      textarea.focus();
      textarea.value = value;
      textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));
      if (submitWithEnter) {
        textarea.dispatchEvent(
          new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Enter",
          }),
        );
      }
    },
    options,
  );
}

async function openTrashView(page: import("@playwright/test").Page) {
  await page.evaluate(() => {
    const trashLabel = Array.from(
      document.querySelectorAll<HTMLElement>(".editInPlaceLabelSpan"),
    ).find((element) => element.textContent?.trim() === "Trash");

    if (!trashLabel) throw new Error("Trash navigation label not found");
    trashLabel.click();
  });
}
