// @ts-nocheck
// Shared page-level helpers extracted from repeated OneTab page bundles.
(function () {
  function createOneTabPageCommon({
    websiteUrl,
    translate,
    tabCount,
    isRoot,
    isTrash,
    isFolder,
    isMicrosoftEdge,
  }) {
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
      sharedPageUrlPattern = /^https:\/\/(?:[A-Za-z0-9-]+\.)*one-tab\.com\/page\/.*$/;

    function splitOversized({ Ep: maxLength = 1e3, Fp: entries, jp: readChunks, Bp: buildEntry }) {
      return entries.flatMap((entry) => {
        if (readChunks(entry).length <= maxLength) return [entry];
        const result = [];
        let length = readChunks(entry).length;
        for (let index = 0; index < length; index += maxLength)
          result.push(
            buildEntry({
              Cp: index,
              entry,
              Hp: readChunks(entry).slice(index, index + maxLength),
            }),
          );
        return result;
      });
    }

    function isJson(value) {
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

    function matchesOrUnset(value, expected) {
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

    const pluralRulesByLocale = {};

    function pluralize(messagePrefix, count) {
      let locale = localeId(),
        rules = pluralRulesByLocale[locale];
      rules || ((rules = new Intl.PluralRules(locale)), (pluralRulesByLocale[locale] = rules));
      const plural = rules.select(count);
      let message = chrome.i18n.getMessage(`${messagePrefix}_${plural}`);
      message || (message = chrome.i18n.getMessage(`${messagePrefix}_other`));
      let renderedCount = count;
      return (
        typeof count == "number" && (renderedCount = Number(count).toLocaleString()),
        message ? message.replace("{COUNT}", renderedCount) : ""
      );
    }

    async function groupPathLabel({ h: cache, itemId, Qo }) {
      return (await cache.Hn(itemId, Qo))
        .slice(1)
        .map((item) => groupDisplayLabel({ groupId: item.id, h: cache, l: item }))
        .join(`  ${isLtr() ? "➝" : "⭠"}  `);
    }

    function groupLabelParts({ groupId, h: cache, l: item }) {
      groupId ??= item?.id;
      let resolved = item || cache.v(groupId);
      return [groupLabel({ h: cache, l: resolved }), groupFallbackLabel({ h: cache, l: resolved })];
    }

    function groupDisplayLabel({ groupId, h: cache, l: item }) {
      groupId ??= item?.id;
      let resolved = item || cache.v(groupId);
      return groupLabel({ h: cache, l: resolved }) || groupFallbackLabel({ h: cache, l: resolved });
    }

    function groupFallbackLabel({ groupId, h: cache, l: item }) {
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

    function groupLabel({ groupId, h: cache, l: item }) {
      groupId ??= item?.id;
      let resolved = item || cache.v(groupId);
      return isRoot(resolved) ? translate("all") : isTrash(resolved) ? translate("trash") : resolved.label;
    }

    let debounceState = {};

    function debounceByType({ type, zu: delayMs, Xa: callback, Wu: fireNow }) {
      fireNow
        ? (delete debounceState[type], callback())
        : debounceState[type] ||
          ((debounceState[type] = !0),
          setTimeout(() => debounceByType({ type, zu: delayMs, Xa: callback, Wu: !0 }), delayMs));
    }

    function shouldApplyChrome145Workaround() {
      return isChrome145();
    }

    function isChrome145() {
      if (isMicrosoftEdge()) return !1;
      const brands = navigator.userAgentData?.brands;
      if (brands) {
        const chromium = brands.find((brand) => /Chrom(e|ium)/i.test(brand.brand));
        return chromium ? Number(chromium.version) === 145 : !1;
      }
      const match = navigator.userAgent.match(/Chrom(e|ium)\/(\d+)/i);
      return match ? Number(match[2]) === 145 : !1;
    }

    async function uncollapseChrome145TabGroup(groupId) {
      if (!shouldApplyChrome145Workaround()) return;
      const tabs = await chrome.tabs.query({ groupId });
      if (!tabs.length) return;
      tabs.sort((left, right) => left.index - right.index);
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
          activeTab?.id && (await chrome.tabs.update(activeTab.id, { active: !0 })),
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

  globalThis.createOneTabPageCommon = createOneTabPageCommon;
})();
