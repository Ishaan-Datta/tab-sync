// @ts-nocheck
globalThis.createOneTabCommonBundleHelpers = function createOneTabCommonBundleHelpers({
  extensionRootUrl,
  getCoreProxy,
  isNewOrBlankTabPageUrl,
  isPlaceholderUrl,
}) {
  function filterToSet(items, allowed) {
    let allowedSet = new Set(allowed);
    return items.filter((item) => allowedSet.has(item));
  }

  function filterNested(items, predicate) {
    let result = items.map((item) =>
      Array.isArray(item) ? filterNested(item, predicate) : item,
    );
    return (
      (result = result.filter((item) => !Array.isArray(item) || item.length > 0)),
      result.filter((item) => Array.isArray(item) || predicate(item))
    );
  }

  const not = (predicate) => (value) => !predicate(value);

  function partition(items, predicate) {
    return items.reduce(
      ([left, right], item, index) =>
        ((predicate(item, index) ? left : right).push(item), [left, right]),
      [[], []],
    );
  }

  function partitionMany(items, predicates) {
    let buckets = predicates.map(() => []),
      unmatched = [];
    return (
      items.forEach((item) => {
        for (let index = 0; index < predicates.length; index++)
          if (predicates[index](item)) {
            buckets[index].push(item);
            return;
          }
        unmatched.push(item);
      }),
      [...buckets, unmatched]
    );
  }

  async function asyncPartition(items, predicate) {
    let values = await Promise.all(
      items.map((item, index) => predicate(item, index)),
    );
    return items.reduce(
      ([left, right], item, index) =>
        ((values[index] ? left : right).push(item), [left, right]),
      [[], []],
    );
  }

  async function activateTab(tabId) {
    await chrome.tabs.update(tabId, { active: !0 });
  }

  async function activateTabAndWindow(tabId) {
    let tab = await chrome.tabs.query({ id: tabId })[0];
    if (!tab) throw new Error("No tab with specified id found");
    (await chrome.tabs.update(tabId, { active: !0 }),
      chrome.windows && (await chrome.windows.update(tab.windowId, { focused: !0 })));
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function randomColor() {
    return "#" + Math.random().toString(16).slice(-6);
  }

  const excludedUrlPrefixes = [
    "javascript:",
    "about:",
    extensionRootUrl,
    "chrome-devtools:",
    ...["chrome://", "edge://", "data:"].filter((value) => !1),
    ...["edge://", "chrome://"]
      .map((prefix) =>
        [
          "newtab",
          "new-tab-page",
          "print",
          "network-error",
          "badcastcrash",
          "inducebrowsercrashforrealz",
          "crash",
          "crashdump",
          "kill",
          "hang",
          "shorthang",
          "gpuclean",
          "gpucrash",
          "gpuhang",
          "memory-exhaust",
          "memory-pressure-critical",
          "memory-pressure-moderate",
          "ppapiflashcrash",
          "ppapiflashhang",
          "quit",
          "restart",
        ].map((name) => `${prefix}${name}/`),
      )
      .flat(),
  ];

  function isExcludedUrl(url) {
    if (!url || url === "") return !0;
    for (let prefix of excludedUrlPrefixes)
      if (url.startsWith(prefix) && !isPlaceholderUrl(url)) return !0;
    return !!isNewOrBlankTabPageUrl(url);
  }

  async function saveUncommittedChanges(key, changes) {
    let store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {},
      entry = store[key] ?? {};
    return (
      (entry.modifyDate = new Date().getTime()),
      (entry.uncommittedChanges = { ...(entry.uncommittedChanges ?? {}), ...changes }),
      (entry.uncommittedChanges = Object.fromEntries(
        Object.entries(entry.uncommittedChanges).filter(([, value]) => value !== void 0),
      )),
      (store[key] = entry),
      await getCoreProxy().Ve("uncommittedChangesStore", store),
      entry.uncommittedChanges
    );
  }

  async function clearUncommittedChanges(keys) {
    let store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {},
      changed = !1;
    (keys.forEach((key) => {
      store[key]
        ? (delete store[key], (changed = !0))
        : console.log(`uncommittedChangesKey ${key} not found`);
    }),
      changed && (await getCoreProxy().Ve("uncommittedChangesStore", store)));
  }

  async function getUncommittedChanges(key) {
    return ((await getCoreProxy()._e("uncommittedChangesStore")) ?? {})?.[key]
      ?.uncommittedChanges ?? {};
  }

  async function clearAllUncommittedChanges() {
    await getCoreProxy().Bu("uncommittedChangesStore");
  }

  async function pruneUncommittedChanges(scheduleNext) {
    let cutoff = new Date().getTime() - 12096e5,
      store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {};
    ((store = Object.fromEntries(
      Object.entries(store).filter(([, entry]) => entry.modifyDate > cutoff),
    )),
      await getCoreProxy().Ve("uncommittedChangesStore", store),
      scheduleNext &&
        setTimeout(() => pruneUncommittedChanges(), 1e3 * 3600 * 24 * 7));
  }

  const localStorageAdapter = globalThis.createOneTabLocalStorageAdapter();

  function getLocalStorageAdapter() {
    return localStorageAdapter;
  }

  return {
    activateTab,
    activateTabAndWindow,
    asyncPartition,
    clearAllUncommittedChanges,
    clearUncommittedChanges,
    excludedUrlPrefixes,
    filterNested,
    filterToSet,
    getLocalStorageAdapter,
    getUncommittedChanges,
    isExcludedUrl,
    localStorageAdapter,
    not,
    partition,
    partitionMany,
    pruneUncommittedChanges,
    randomColor,
    randomItem,
    saveUncommittedChanges,
  };
};
