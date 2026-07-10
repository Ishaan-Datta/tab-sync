import {
  createOneTabLocalStorageAdapter,
  type OneTabLocalStorageAdapter,
} from "./storage-adapters";

export interface OneTabCommonBundleHelperDependencies {
  extensionRootUrl: string;
  getCoreProxy(): {
    _e(key: string): Promise<Record<string, any> | undefined>;
    Ve(key: string, value: unknown): Promise<void>;
    Bu(key: string): Promise<void>;
  };
  isNewOrBlankTabPageUrl(url: string): boolean;
  isPlaceholderUrl(url: string): boolean;
}

export interface OneTabCommonBundleHelpers {
  activateTab(tabId: number): Promise<void>;
  activateTabAndWindow(tabId: number): Promise<void>;
  asyncPartition<T>(
    items: T[],
    predicate: (item: T, index: number) => Promise<boolean>,
  ): Promise<[T[], T[]]>;
  clearAllUncommittedChanges(): Promise<void>;
  clearUncommittedChanges(keys: string[]): Promise<void>;
  excludedUrlPrefixes: string[];
  filterNested<T>(
    items: Array<T | T[]>,
    predicate: (item: T) => boolean,
  ): any[];
  filterToSet<T>(items: T[], allowed: T[]): T[];
  getLocalStorageAdapter(): OneTabLocalStorageAdapter;
  getUncommittedChanges(key: string): Promise<Record<string, any>>;
  isExcludedUrl(url: string): boolean;
  localStorageAdapter: OneTabLocalStorageAdapter;
  not<T>(predicate: (value: T) => boolean): (value: T) => boolean;
  partition<T>(
    items: T[],
    predicate: (item: T, index: number) => boolean,
  ): [T[], T[]];
  partitionMany<T>(items: T[], predicates: Array<(item: T) => boolean>): T[][];
  pruneUncommittedChanges(scheduleNext?: boolean): Promise<void>;
  randomColor(): string;
  randomItem<T>(items: T[]): T;
  saveUncommittedChanges(
    key: string,
    changes: Record<string, any>,
  ): Promise<Record<string, any>>;
}

export function createOneTabCommonBundleHelpers({
  extensionRootUrl,
  getCoreProxy,
  isNewOrBlankTabPageUrl,
  isPlaceholderUrl,
}: OneTabCommonBundleHelperDependencies): OneTabCommonBundleHelpers {
  function filterToSet<T>(items: T[], allowed: T[]) {
    let allowedSet = new Set(allowed);
    return items.filter((item) => allowedSet.has(item));
  }

  function filterNested<T>(
    items: Array<T | T[]>,
    predicate: (item: T) => boolean,
  ): any[] {
    let result = items.map((item) =>
      Array.isArray(item) ? filterNested(item, predicate) : item,
    );
    return (
      (result = result.filter(
        (item) => !Array.isArray(item) || item.length > 0,
      )),
      result.filter((item) => Array.isArray(item) || predicate(item as T))
    );
  }

  const not =
    <T>(predicate: (value: T) => boolean) =>
    (value: T) =>
      !predicate(value);

  function partition<T>(
    items: T[],
    predicate: (item: T, index: number) => boolean,
  ): [T[], T[]] {
    return items.reduce(
      ([left, right], item, index) => (
        (predicate(item, index) ? left : right).push(item),
        [left, right]
      ),
      [[], []] as [T[], T[]],
    );
  }

  function partitionMany<T>(
    items: T[],
    predicates: Array<(item: T) => boolean>,
  ) {
    let buckets: T[][] = predicates.map(() => []),
      unmatched: T[] = [];
    return (
      items.forEach((item) => {
        for (let index = 0; index < predicates.length; index++)
          if (predicates[index]!(item)) {
            buckets[index].push(item);
            return;
          }
        unmatched.push(item);
      }),
      [...buckets, unmatched]
    );
  }

  async function asyncPartition<T>(
    items: T[],
    predicate: (item: T, index: number) => Promise<boolean>,
  ): Promise<[T[], T[]]> {
    let values = await Promise.all(
      items.map((item, index) => predicate(item, index)),
    );
    return items.reduce(
      ([left, right], item, index) => (
        (values[index] ? left : right).push(item),
        [left, right]
      ),
      [[], []] as [T[], T[]],
    );
  }

  async function activateTab(tabId: number) {
    await chrome.tabs.update(tabId, { active: !0 });
  }

  async function activateTabAndWindow(tabId: number) {
    let tab = await (chrome.tabs.query({ id: tabId }) as any)[0];
    if (!tab) throw new Error("No tab with specified id found");
    (await chrome.tabs.update(tabId, { active: !0 }),
      chrome.windows &&
        (await chrome.windows.update(tab.windowId, { focused: !0 })));
  }

  function randomItem<T>(items: T[]) {
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

  function isExcludedUrl(url: string) {
    if (!url || url === "") return !0;
    for (let prefix of excludedUrlPrefixes)
      if (url.startsWith(prefix) && !isPlaceholderUrl(url)) return !0;
    return !!isNewOrBlankTabPageUrl(url);
  }

  async function saveUncommittedChanges(
    key: string,
    changes: Record<string, any>,
  ) {
    let store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {},
      entry = store[key] ?? {};
    return (
      (entry.modifyDate = new Date().getTime()),
      (entry.uncommittedChanges = {
        ...(entry.uncommittedChanges ?? {}),
        ...changes,
      }),
      (entry.uncommittedChanges = Object.fromEntries(
        Object.entries(entry.uncommittedChanges).filter(
          ([, value]) => value !== void 0,
        ),
      )),
      (store[key] = entry),
      await getCoreProxy().Ve("uncommittedChangesStore", store),
      entry.uncommittedChanges
    );
  }

  async function clearUncommittedChanges(keys: string[]) {
    let store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {},
      changed = !1;
    (keys.forEach((key) => {
      store[key]
        ? (delete store[key], (changed = !0))
        : console.log(`uncommittedChangesKey ${key} not found`);
    }),
      changed && (await getCoreProxy().Ve("uncommittedChangesStore", store)));
  }

  async function getUncommittedChanges(key: string) {
    return (
      ((await getCoreProxy()._e("uncommittedChangesStore")) ?? {})?.[key]
        ?.uncommittedChanges ?? {}
    );
  }

  async function clearAllUncommittedChanges() {
    await getCoreProxy().Bu("uncommittedChangesStore");
  }

  async function pruneUncommittedChanges(scheduleNext?: boolean) {
    let cutoff = new Date().getTime() - 12096e5,
      store = (await getCoreProxy()._e("uncommittedChangesStore")) ?? {};
    ((store = Object.fromEntries(
      Object.entries(store).filter(
        ([, entry]: any) => entry.modifyDate > cutoff,
      ),
    )),
      await getCoreProxy().Ve("uncommittedChangesStore", store),
      scheduleNext &&
        setTimeout(() => pruneUncommittedChanges(), 1e3 * 3600 * 24 * 7));
  }

  const localStorageAdapter = createOneTabLocalStorageAdapter();

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
}
