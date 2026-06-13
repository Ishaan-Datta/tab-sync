// Reconstructed from ext-onetab-concatenated-sources-background.js
// Purpose: readable extraction of the OneTab single-instance behavior path.
//
// Mapping to minified methods:
// - dl({ my, _p })  -> openOrFocusSingleOneTabTab(...)
// - GI(tabId)       -> dedupeAndRemoveSpecificOneTabTab(...)
// - hy()            -> findAnyOneTabTab(...)
// - Ea()            -> getStoredOneTabTabId(...)
// - ft(id)          -> setStoredOneTabTabId(...)
// - bn()            -> registerOneTabTabLifecycleHooks(...)
// - gn() "display-onetab" command path -> registerDisplayOneTabCommand(...)

const ONE_TAB_URL = chrome.runtime.getURL("onetab.html");

function isOneTabUrl(url) {
  if (!url) {
    return false;
  }

  // The minified code uses de(url). This is the practical equivalent for OneTab pages.
  return String(url).startsWith(ONE_TAB_URL);
}

async function getAllTabs() {
  return chrome.tabs.query({});
}

async function getLastFocusedWindow() {
  try {
    return await chrome.windows.getLastFocused({ populate: false });
  } catch {
    return undefined;
  }
}

async function focusTab(tab) {
  const lastFocused = await getLastFocusedWindow();
  if (lastFocused && lastFocused.id !== tab.windowId) {
    await chrome.windows.update(tab.windowId, { focused: true });
  }

  const [activeInWindow] = await chrome.tabs.query({ active: true, windowId: tab.windowId });
  if (!activeInWindow || activeInWindow.id !== tab.id) {
    await chrome.tabs.update(tab.id, { active: true });
  }
}

async function removeTab(tabId) {
  try {
    await chrome.tabs.remove(tabId);
  } catch {
    // Keep behavior tolerant like the original background code.
  }
}

async function createOneTabTab({ windowId, active = true, pinned = true, index = 0 }) {
  const createProps = {
    url: ONE_TAB_URL,
    active,
    pinned,
    index,
    ...(windowId !== undefined ? { windowId } : {}),
  };

  return chrome.tabs.create(createProps);
}

// Equivalent to hy(): (await chrome.tabs.query({ url: _e + "*" }))?.[0]
async function findAnyOneTabTab() {
  const matches = await chrome.tabs.query({ url: `${ONE_TAB_URL}*` });
  return matches?.[0];
}

// Equivalent to Ea()
async function getStoredOneTabTabId(storage) {
  return storage.get("oneTabTabId");
}

// Equivalent to ft(id)
async function setStoredOneTabTabId(storage, tabId) {
  if (tabId === undefined) {
    await storage.remove("oneTabTabId");
  } else {
    await storage.put("oneTabTabId", tabId);
  }
}

// Equivalent to $a(pinned)
async function storeOneTabPinnedSetting(core, isPinned) {
  await core.bt("oneTabTabPinned", `${!!isPinned}`);
}

// Equivalent to GI(e)
// - Given one OneTab tab ID, close other OneTab tabs, keep/focus one canonical tab, then close e.
async function dedupeAndRemoveSpecificOneTabTab({ tabIdToRemove, storage, lock }) {
  await lock.acquire();

  try {
    const tabToRemove = await chrome.tabs.get(tabIdToRemove).catch(() => undefined);
    if (!tabToRemove) {
      return false;
    }

    const allTabs = await getAllTabs();
    const otherOneTabTabs = allTabs.filter(
      (tab) => isOneTabUrl(tab.url) && tab.id !== tabIdToRemove
    );

    await Promise.all(otherOneTabTabs.slice(1).map((tab) => removeTab(tab.id)));

    if (otherOneTabTabs.length) {
      const canonicalTab = otherOneTabTabs[0];
      await focusTab(canonicalTab);
      await setStoredOneTabTabId(storage, canonicalTab.id);
      await removeTab(tabIdToRemove);
      return true;
    }

    await setStoredOneTabTabId(storage, undefined);
    return false;
  } catch {
    return false;
  } finally {
    lock.release();
  }
}

// Equivalent to bn()
function registerOneTabTabLifecycleHooks({ storage, core }) {
  let lastUnpinTimestamp = 0;

  chrome.tabs.onRemoved.addListener(async (removedTabId) => {
    const trackedOneTabId = await getStoredOneTabTabId(storage);
    if (removedTabId === trackedOneTabId) {
      // Mirror the original small grace-period behavior.
      if (Date.now() - lastUnpinTimestamp < 500) {
        await storeOneTabPinnedSetting(core, true);
      }

      await setStoredOneTabTabId(storage, undefined);
    }
  });

  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    try {
      const isOneTab = isOneTabUrl(tab?.url) || isOneTabUrl(tab?.pendingUrl);
      const trackedOneTabId = await getStoredOneTabTabId(storage);

      if (tabId === trackedOneTabId && !isOneTab && tab?.pinned) {
        await setStoredOneTabTabId(storage, undefined);
        await chrome.tabs.update(tabId, { pinned: false });
      }

      if (isOneTab && Object.prototype.hasOwnProperty.call(changeInfo, "pinned")) {
        if (changeInfo.pinned === false) {
          lastUnpinTimestamp = Date.now();
        }

        await storeOneTabPinnedSetting(core, changeInfo.pinned);
      }
    } catch {
      // Keep this resilient, matching minified behavior.
    }
  });
}

// Equivalent to dl({ my, _p })
// Core single-instance behavior:
// 1) locate an existing OneTab tab,
// 2) close duplicate OneTab tabs,
// 3) focus one canonical tab (or create one if none exist).
async function openOrFocusSingleOneTabTab({
  openInBackground = false, // maps from my
  preferredWindowId, // maps from _p
} = {}) {
  let targetWindowId = preferredWindowId;

  if (targetWindowId !== undefined) {
    const preferredWindow = await chrome.windows.get(targetWindowId).catch(() => undefined);
    if (preferredWindow?.incognito) {
      targetWindowId = undefined;
    }
  }

  const shouldActivate = !openInBackground;
  const allTabs = await getAllTabs();
  const lastFocusedWindow = await getLastFocusedWindow();

  const oneTabTabs = allTabs.filter((tab) =>
    isOneTabUrl(tab.url) || isOneTabUrl(tab.pendingUrl)
  );

  // The original sort prefers target window and active context; then takes first.
  const selected = oneTabTabs.find(() => true);

  if (selected) {
    // Close extra OneTab instances.
    const duplicates = oneTabTabs.filter((tab) => tab.id !== selected.id);
    await Promise.all(duplicates.map((tab) => removeTab(tab.id)));

    // Focus selected tab when opening in foreground.
    if (shouldActivate) {
      await focusTab(selected);
    }

    return selected;
  }

  // No existing OneTab tab: create one.
  const createOptions = {
    windowId: targetWindowId,
    active: shouldActivate,
    pinned: true,
    index: 0,
  };

  // If target window not provided, prefer last-focused non-incognito window when possible.
  if (createOptions.windowId === undefined && lastFocusedWindow?.incognito) {
    const allWindows = await chrome.windows.getAll({ populate: false });
    const nonIncognito = allWindows.find((w) => !w.incognito);
    if (nonIncognito) {
      createOptions.windowId = nonIncognito.id;
    }
  }

  const created = await createOneTabTab(createOptions);
  if (shouldActivate) {
    await focusTab(created);
  }

  return created;
}

// Equivalent to command path in gn() for "display-onetab".
function registerDisplayOneTabCommand({ moveOneTabToCurrentWindowOnOpen, openOneTab }) {
  chrome.commands.onCommand.addListener((command, tab) => {
    (async () => {
      if (command !== "display-onetab") {
        return;
      }

      // In minified code this first calls eh(eventTab) if setting is enabled,
      // then calls dl({ _p: eventTab?.windowId }).
      await moveOneTabToCurrentWindowOnOpen?.(tab);
      await openOneTab({ preferredWindowId: tab?.windowId });
    })();
  });
}

// Optional aggregate installer for convenience.
function installSingleInstanceOneTabBehavior({ storage, core, lock, moveOneTabToCurrentWindowOnOpen }) {
  registerOneTabTabLifecycleHooks({ storage, core });

  registerDisplayOneTabCommand({
    moveOneTabToCurrentWindowOnOpen,
    openOneTab: openOrFocusSingleOneTabTab,
  });

  return {
    findAnyOneTabTab,
    getStoredOneTabTabId: () => getStoredOneTabTabId(storage),
    setStoredOneTabTabId: (id) => setStoredOneTabTabId(storage, id),
    dedupeAndRemoveSpecificOneTabTab: (tabIdToRemove) =>
      dedupeAndRemoveSpecificOneTabTab({ tabIdToRemove, storage, lock }),
    openOrFocusSingleOneTabTab,
  };
}

export {
  ONE_TAB_URL,
  isOneTabUrl,
  findAnyOneTabTab,
  getStoredOneTabTabId,
  setStoredOneTabTabId,
  storeOneTabPinnedSetting,
  registerOneTabTabLifecycleHooks,
  dedupeAndRemoveSpecificOneTabTab,
  openOrFocusSingleOneTabTab,
  registerDisplayOneTabCommand,
  installSingleInstanceOneTabBehavior,
};
