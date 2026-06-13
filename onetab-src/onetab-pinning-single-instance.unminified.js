// Reconstructed from ext-onetab-concatenated-sources-background.js
// Focus: OneTab single-instance + pinning lifecycle behavior.
//
// Mapping to minified methods:
// - hy()            -> findAnyOneTabTab(...)
// - Ea()            -> getStoredOneTabTabId(...)
// - ft(id)          -> setStoredOneTabTabId(...)
// - $a(pinned)      -> storeOneTabPinnedSetting(...)
// - bn()            -> registerOneTabTabLifecycleHooks(...)
// - dl({ my, _p })  -> openOrFocusSingleOneTabTab(...)
// - gn() command    -> registerDisplayOneTabCommand(...)

const ONE_TAB_URL = chrome.runtime.getURL("onetab.html");

function isOneTabUrl(url) {
  if (!url) {
    return false;
  }
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

  const [activeInWindow] = await chrome.tabs.query({
    active: true,
    windowId: tab.windowId,
  });

  if (!activeInWindow || activeInWindow.id !== tab.id) {
    await chrome.tabs.update(tab.id, { active: true });
  }
}

async function removeTab(tabId) {
  try {
    await chrome.tabs.remove(tabId);
  } catch {
    // Ignore transient remove failures, matching original tolerance.
  }
}

async function createOneTabTab({ windowId, active = true, pinned = true, index = 0 }) {
  return chrome.tabs.create({
    url: ONE_TAB_URL,
    active,
    pinned,
    index,
    ...(windowId !== undefined ? { windowId } : {}),
  });
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

// Equivalent to bn()
function registerOneTabTabLifecycleHooks({ storage, core }) {
  let lastUnpinTimestamp = 0;

  chrome.tabs.onRemoved.addListener(async (removedTabId) => {
    const trackedOneTabId = await getStoredOneTabTabId(storage);

    if (removedTabId === trackedOneTabId) {
      // Preserve prior pinned state if removed right after unpin gesture.
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
      // Keep resilient like original minified code.
    }
  });
}

// Equivalent to dl({ my, _p })
async function openOrFocusSingleOneTabTab({
  openInBackground = false, // maps from my
  preferredWindowId, // maps from _p
} = {}) {
  let targetWindowId = preferredWindowId;

  if (targetWindowId !== undefined) {
    const preferredWindow = await chrome.windows
      .get(targetWindowId)
      .catch(() => undefined);

    if (preferredWindow?.incognito) {
      targetWindowId = undefined;
    }
  }

  const shouldActivate = !openInBackground;
  const allTabs = await getAllTabs();
  const lastFocusedWindow = await getLastFocusedWindow();

  const oneTabTabs = allTabs.filter(
    (tab) => isOneTabUrl(tab.url) || isOneTabUrl(tab.pendingUrl)
  );

  const selected = oneTabTabs.find(() => true);

  if (selected) {
    const duplicates = oneTabTabs.filter((tab) => tab.id !== selected.id);
    await Promise.all(duplicates.map((tab) => removeTab(tab.id)));

    if (shouldActivate) {
      await focusTab(selected);
    }

    return selected;
  }

  const createOptions = {
    windowId: targetWindowId,
    active: shouldActivate,
    pinned: true,
    index: 0,
  };

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

// Equivalent to command path in gn() for "display-onetab"
function registerDisplayOneTabCommand({ moveOneTabToCurrentWindowOnOpen, openOneTab }) {
  chrome.commands.onCommand.addListener((command, tab) => {
    (async () => {
      if (command !== "display-onetab") {
        return;
      }

      await moveOneTabToCurrentWindowOnOpen?.(tab);
      await openOneTab({ preferredWindowId: tab?.windowId });
    })();
  });
}

function installSingleInstanceOneTabBehavior({
  storage,
  core,
  moveOneTabToCurrentWindowOnOpen,
}) {
  registerOneTabTabLifecycleHooks({ storage, core });

  registerDisplayOneTabCommand({
    moveOneTabToCurrentWindowOnOpen,
    openOneTab: openOrFocusSingleOneTabTab,
  });

  return {
    findAnyOneTabTab,
    getStoredOneTabTabId: () => getStoredOneTabTabId(storage),
    setStoredOneTabTabId: (id) => setStoredOneTabTabId(storage, id),
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
  openOrFocusSingleOneTabTab,
  registerDisplayOneTabCommand,
  installSingleInstanceOneTabBehavior,
};
