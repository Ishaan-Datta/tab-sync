export interface OneTabPageCommonDependencies {
  websiteUrl: string;
  translate(key: string): string;
  tabCount(count: number): string;
  isRoot(item: any): boolean;
  isTrash(item: any): boolean;
  isFolder(item: any): boolean;
  isMicrosoftEdge(): boolean | undefined;
}

export interface OneTabSplitOversizedOptions<T, R> {
  Ep?: number;
  Fp: T[];
  jp(entry: T): unknown[];
  Bp(options: { Cp: number; entry: T; Hp: unknown[] }): R;
}

export interface OneTabPageCommonHelpers {
  applyDocumentDirection(): void;
  debounceByType(options: {
    type: string;
    zu: number;
    Xa(): void;
    Wu?: boolean;
  }): void;
  getDirection(): "ltr" | "rtl";
  groupDisplayLabel(options: { groupId?: string; h: any; l?: any }): string;
  groupFallbackLabel(options: { groupId?: string; h: any; l?: any }): string;
  groupLabel(options: { groupId?: string; h: any; l?: any }): string;
  groupLabelParts(options: { groupId?: string; h: any; l?: any }): string[];
  groupPathLabel(options: { h: any; itemId: string; Qo: any }): Promise<string>;
  helpUrl(): string;
  isChrome145(): boolean;
  isJson(value: string): boolean;
  isLtr(): boolean;
  localeId(): string;
  localizedPathPrefix(): string;
  matchesOrUnset(value: any, expected: any): boolean;
  pluralize(messagePrefix: string, count: number): string;
  shareFieldNames: string[];
  sharedPageUrlPattern: RegExp;
  shouldApplyChrome145Workaround(): boolean;
  splitOversized<T, R>(
    options: OneTabSplitOversizedOptions<T, R>,
  ): Array<T | R>;
  taskFieldNames: string[];
  uncollapseChrome145TabGroup(groupId: number): Promise<void>;
}

export function createOneTabPageCommon({
  websiteUrl,
  translate,
  tabCount,
  isRoot,
  isTrash,
  isFolder,
  isMicrosoftEdge,
}: OneTabPageCommonDependencies): OneTabPageCommonHelpers {
  const taskFieldNames = [
      "task",
      "done",
      "notifyDate",
      "notify",
      "dueDate",
      "doneDate",
      "recurrenceHistory",
      "recurrence",
    ],
    shareFieldNames = [
      "shared",
      "shareExpiryDate",
      "shareIncludeNotes",
      "shareIncludeRatings",
    ],
    sharedPageUrlPattern =
      /^https:\/\/(?:[A-Za-z0-9-]+\.)*one-tab\.com\/page\/.*$/;

  function splitOversized<T, R>({
    Ep: maxLength = 1e3,
    Fp: entries,
    jp: readChunks,
    Bp: buildEntry,
  }: OneTabSplitOversizedOptions<T, R>): Array<T | R> {
    return entries.flatMap((entry) => {
      if (readChunks(entry).length <= maxLength) return [entry];
      const result: R[] = [];
      let length = readChunks(entry).length;
      for (let index = 0; index < length; index += maxLength)
        result.push(
          buildEntry({
            Cp: index,
            entry,
            Hp: readChunks(entry).slice(index, index + maxLength),
          }),
        );
      return result as Array<T | R>;
    });
  }

  function isJson(value: string) {
    try {
      return (JSON.parse(value), !0);
    } catch {
      return !1;
    }
  }

  function localeId() {
    return chrome.i18n.getMessage("localeId").replace("_", "-");
  }

  function helpUrl() {
    return `${websiteUrl}/${localizedPathPrefix()}help`;
  }

  function localizedPathPrefix() {
    let locale = localeId();
    return locale === "en" ? "" : `${locale}/`;
  }

  function matchesOrUnset(value: any, expected: any) {
    return value === expected || !value;
  }

  let forceRtl = !1;
  forceRtl && globalThis.document && (document.documentElement.dir = "rtl");

  function getDirection() {
    return forceRtl || ["ar", "he", "fa", "ps", "ur"].indexOf(localeId()) >= 0
      ? "rtl"
      : "ltr";
  }

  let direction = getDirection();

  function isLtr() {
    return direction !== "rtl";
  }

  function applyDocumentDirection() {
    document.getElementsByTagName("html")[0].dir = direction;
  }

  const pluralRulesByLocale: Record<string, Intl.PluralRules> = {};

  function pluralize(messagePrefix: string, count: number) {
    let locale = localeId(),
      rules = pluralRulesByLocale[locale];
    rules ||
      ((rules = new Intl.PluralRules(locale)),
      (pluralRulesByLocale[locale] = rules));
    const plural = rules.select(count);
    let message = chrome.i18n.getMessage(`${messagePrefix}_${plural}`);
    message || (message = chrome.i18n.getMessage(`${messagePrefix}_other`));
    let renderedCount: any = count;
    return (
      typeof count == "number" &&
        (renderedCount = Number(count).toLocaleString()),
      message ? message.replace("{COUNT}", renderedCount) : ""
    );
  }

  async function groupPathLabel({ h: cache, itemId, Qo }: any) {
    return (await cache.Hn(itemId, Qo))
      .slice(1)
      .map((item: any) =>
        groupDisplayLabel({ groupId: item.id, h: cache, l: item }),
      )
      .join(`  ${isLtr() ? "➝" : "⭠"}  `);
  }

  function groupLabelParts({ groupId, h: cache, l: item }: any) {
    groupId ??= item?.id;
    let resolved = item || cache.v(groupId);
    return [
      groupLabel({ h: cache, l: resolved }),
      groupFallbackLabel({ h: cache, l: resolved }),
    ];
  }

  function groupDisplayLabel({ groupId, h: cache, l: item }: any) {
    groupId ??= item?.id;
    let resolved = item || cache.v(groupId);
    return (
      groupLabel({ h: cache, l: resolved }) ||
      groupFallbackLabel({ h: cache, l: resolved })
    );
  }

  function groupFallbackLabel({ groupId, h: cache, l: item }: any) {
    groupId ??= item?.id;
    let resolved = item || cache.v(groupId);
    if (isRoot(resolved)) return translate("all");
    if (isTrash(resolved)) return translate("trash");
    if (isFolder(resolved)) return translate("untitled");
    {
      let count = cache.Xi(resolved.id);
      return tabCount(count);
    }
  }

  function groupLabel({ groupId, h: cache, l: item }: any) {
    groupId ??= item?.id;
    let resolved = item || cache.v(groupId);
    return isRoot(resolved)
      ? translate("all")
      : isTrash(resolved)
        ? translate("trash")
        : resolved.label;
  }

  let debounceState: Record<string, boolean> = {};

  function debounceByType({
    type,
    zu: delayMs,
    Xa: callback,
    Wu: fireNow,
  }: any) {
    fireNow
      ? (delete debounceState[type], callback())
      : debounceState[type] ||
        ((debounceState[type] = !0),
        setTimeout(
          () => debounceByType({ type, zu: delayMs, Xa: callback, Wu: !0 }),
          delayMs,
        ));
  }

  function shouldApplyChrome145Workaround() {
    return isChrome145();
  }

  function isChrome145() {
    if (isMicrosoftEdge()) return !1;
    const brands = (navigator as any).userAgentData?.brands;
    if (brands) {
      const chromium = brands.find((brand: any) =>
        /Chrom(e|ium)/i.test(brand.brand),
      );
      return chromium ? Number(chromium.version) === 145 : !1;
    }
    const match = navigator.userAgent.match(/Chrom(e|ium)\/(\d+)/i);
    return match ? Number(match[2]) === 145 : !1;
  }

  async function uncollapseChrome145TabGroup(groupId: number) {
    if (!shouldApplyChrome145Workaround()) return;
    const tabs = await chrome.tabs.query({ groupId });
    if (!tabs.length) return;
    tabs.sort((left: any, right: any) => left.index - right.index);
    const windowId = tabs[0].windowId,
      index = tabs[0].index;
    let activeTab = (await chrome.tabs.query({ windowId, active: !0 }))[0],
      temporaryTab;
    try {
      (await chrome.tabGroups.update(groupId, { collapsed: !0 }),
        (temporaryTab = await chrome.tabs.create({
          windowId,
          url: "about:blank",
          active: !0,
          index,
        })),
        await chrome.tabs.group({ groupId, tabIds: temporaryTab.id }),
        activeTab?.id &&
          (await chrome.tabs.update(activeTab.id, { active: !0 })),
        await chrome.tabGroups.update(groupId, { collapsed: !1 }));
    } catch (error) {
      console.error(error);
    } finally {
      if (temporaryTab?.id)
        try {
          await chrome.tabs.remove(temporaryTab.id);
        } catch {}
    }
  }

  return {
    applyDocumentDirection,
    debounceByType,
    getDirection,
    groupDisplayLabel,
    groupFallbackLabel,
    groupLabel,
    groupLabelParts,
    groupPathLabel,
    helpUrl,
    isChrome145,
    isJson,
    isLtr,
    localeId,
    localizedPathPrefix,
    matchesOrUnset,
    pluralize,
    shareFieldNames,
    sharedPageUrlPattern,
    shouldApplyChrome145Workaround,
    splitOversized,
    taskFieldNames,
    uncollapseChrome145TabGroup,
  };
}
