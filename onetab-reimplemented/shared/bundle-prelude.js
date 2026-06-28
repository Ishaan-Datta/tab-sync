// Large shared bundle prelude extracted from the repeated concatenated sources.
(function () {
  function createOneTabBundlePrelude({
    getCoreProxy = () => coreProxy,
    isNewOrBlankTabPageUrl = (url) => globalThis.isNewOrBlankTabPageUrl?.(url),
    pluralize,
    trimToLengthWithEllipsis = (value) => value,
  } = {}) {
    const version = "2.14",
      false1 = !1,
      false2 = !1,
      false3 = !1,
      false4 = !1,
      false5 = !1,
      false6 = !1,
      true1 = !0,
      chromeUrl = "chrome://",
      chromeNewTabUrl = "chrome://newtab/",
      websiteUrl = "https://www.one-tab.com",
      false7 = !1,
      false8 = !1,
      true2 = !0,
      false9 = !1,
      oneTabPageUrl = chrome.runtime.getURL("onetab.html"),
      extensionRootUrl = chrome.runtime.getURL(""),
      tabGroupsEnabled = !0;

    async function hasTabGroupsPermission() {
      return tabGroupsEnabled
        ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") &&
            chrome.tabGroups
        : !1;
    }

    async function requestTabGroupsPermission() {
      if (!tabGroupsEnabled) return !1;
      try {
        return await chrome.permissions.request({ permissions: ["tabGroups"] });
      } catch (error) {
        return (
          console.log(
            'chrome.permissions.request for "tabGroups" permission failed with error:',
          ),
          console.log(error),
          !1
        );
      }
    }

    async function requestPermission(permission) {
      try {
        return await chrome.permissions.request({ permissions: [permission] });
      } catch (error) {
        return (
          console.log(
            `chrome.permissions.request for "${permission}" permission failed with error:`,
          ),
          console.log(error),
          !1
        );
      }
    }

    function isOneTabPageUrl(url) {
      return url && url.indexOf(oneTabPageUrl) === 0;
    }

    function isExtensionUrl(url) {
      return url && url.indexOf(extensionRootUrl) === 0;
    }

    function stripHttpProtocol(url) {
      let lower = url.toLowerCase();
      return lower.startsWith("http://")
        ? url.substring("http://".length)
        : lower.startsWith("https://")
          ? url.substring("https://".length)
          : lower;
    }

    function domainWithoutWww(url) {
      if (url.toLowerCase().startsWith("file://")) return url;
      let domain = extractDomain(url);
      return domain.toLowerCase().startsWith("www.")
        ? domain.substring("www.".length)
        : domain;
    }

    function extractDomain(url) {
      return url
        ? (url.indexOf("//") === 0 && (url = "http:" + url),
          url.indexOf("://") === -1 && (url = "http://" + url),
          (url = url.substring(url.indexOf("://") + "://".length)),
          url.indexOf("/") !== -1 && (url = url.substring(0, url.indexOf("/"))),
          url.indexOf(":") !== -1 && (url = url.substring(0, url.indexOf(":"))),
          url.indexOf("?") !== -1 && (url = url.substring(0, url.indexOf("?"))),
          url.indexOf("#") !== -1 && (url = url.substring(0, url.indexOf("#"))),
          url.toLowerCase())
        : "undefined";
    }

    function protocolPrefix(url) {
      return url.indexOf("://") === -1
        ? "https://"
        : ((url = url.substring(0, url.indexOf("://") + "://".length)),
          url.toLowerCase());
    }

    const commonDomainSuffixes = [
      "com",
      "co.uk",
      "org.uk",
      "net",
      "org",
      "de",
      "ru",
      "info",
      "xyz",
      "nl",
    ];

    function registeredDomain(url) {
      let domain = extractDomain(url);
      try {
        for (let index in commonDomainSuffixes) {
          let suffix = "." + commonDomainSuffixes[index];
          if (endsWith(domain, suffix)) {
            for (
              domain = domain.substring(0, domain.length - suffix.length);
              domain.indexOf(".") !== -1;

            )
              domain = domain.substring(domain.indexOf(".") + 1);
            domain = domain + suffix;
            break;
          }
        }
        return (
          domain.indexOf("www.") === 0 && (domain = domain.substring("www.".length)),
          domain
        );
      } catch {
        return domain;
      }
    }

    function addNoCacheRandom(params) {
      params.noCacheRandom = noCacheRandom();
    }

    function noCacheRandom() {
      return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
    }

    async function postJson(url, params) {
      addNoCacheRandom(params);
      let body = JSON.stringify(params);
      return await (await fetchJson(url, body)).json();
    }

    async function fetchJson(url, body) {
      let init = {};
      (body ? ((init.method = "POST"), (init.body = body)) : (init.method = "GET"),
        (init.headers = new Headers()),
        init.headers.append("Content-Type", "text/json"));
      let response = await fetch(url, init);
      if (response.status === 200) return response;
      throw new Error("http response code" + response.status);
    }

    const randomAlphabet = [
      ..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_",
    ];

    function randomId(length = 22) {
      return Array.from(crypto.getRandomValues(new Uint8Array(length)).values())
        .map((value) => randomAlphabet[value & 63])
        .join("");
    }

    function randomHex(length = 32) {
      return Array.from(crypto.getRandomValues(new Uint8Array(length)).values())
        .map((value) => randomAlphabet[value & 15])
        .join("");
    }

    function newId() {
      return randomId();
    }

    const textEncoder = new TextEncoder(),
      textDecoder = new TextDecoder();

    async function digestBytes(value) {
      return new Uint8Array(await crypto.subtle.digest("SHA-256", value));
    }

    async function digestText(value) {
      return await digestBytes(textEncoder.encode(value));
    }

    async function stableIdFromText(value) {
      let bits = [...(await digestText(value))]
          .map((byte) => byte.toString(2).padStart(8, 0))
          .join("")
          .slice(0, 132),
        id = "";
      for (let index = 0; index < 22; index++)
        id += randomAlphabet[parseInt(bits.slice(index * 6, (index + 1) * 6), 2)];
      return id;
    }

    function trimWhitespace(value) {
      return value == null ? "" : value.replace(/^\s+/, "").replace(/\s+$/, "");
    }

    function isLineBreak(value) {
      return [
        `
`,
        "\v",
        "\f",
        "\r",
        "",
        "\u2028",
        "\u2029",
      ].some((item) => item === value);
    }

    const nonStandardLineBreaks = ["\v", "\f", "\r", "", "\u2028", "\u2029"];

    function normalizeLineBreaks(value) {
      return value
        ? ((value = value.replaceAll(
            `\r
`,
            `
`,
          )),
          nonStandardLineBreaks.forEach(
            (lineBreak) =>
              (value = value.replaceAll(
                lineBreak,
                `
`,
              )),
          ),
          value)
        : "";
    }

    function removeControlCharacters(value) {
      return value ? value.replace(/[\x00-\x1F\x7F-\x9F\uFEFF]/g, "") : "";
    }

    function removeControlCharactersExceptTabs(value) {
      return value
        ? normalizeLineBreaks(value).replace(/[\x00-\x09\x0B-\x1F\x7F-\x9F\uFEFF]/g, "")
        : "";
    }

    function normalizedOrDefault(value, fallback) {
      return (value && normalizeText(value)) || fallback;
    }

    function normalizeText(value) {
      return value ? trimWhitespace(removeControlCharacters(value)) : "";
    }

    function endsWith(value, suffix) {
      return value ? value.indexOf(suffix, value.length - suffix.length) !== -1 : !1;
    }

    function compareVersionParts(left, right) {
      function parse(value) {
        if (value == null) return null;
        let parts = String(value).split(".");
        if (parts.length === 0) return null;
        let parsed = [];
        for (let index = 0; index < parts.length; index++) {
          let part = parts[index];
          if (!/^\d+$/.test(part)) return null;
          parsed.push(Number(part));
        }
        return parsed;
      }
      let leftParts = parse(left),
        rightParts = parse(right);
      if (!leftParts || !rightParts) return NaN;
      let length = Math.max(leftParts.length, rightParts.length);
      for (let index = 0; index < length; index++) {
        let leftPart = leftParts[index] ?? 0,
          rightPart = rightParts[index] ?? 0;
        if (leftPart < rightPart) return -1;
        if (leftPart > rightPart) return 1;
      }
      return 0;
    }

    function versionLessThan(left, right) {
      return compareVersionParts(left, right) < 0;
    }

    function versionGreaterThan(left, right) {
      return compareVersionParts(left, right) > 0;
    }

    function versionBetween(value, lower, upper) {
      return versionGreaterThan(value, lower) && versionLessThan(value, upper);
    }

    const defaultSettings = globalThis.getOneTabDefaultSettings();

    function moveElementToIndex(element, parent, index) {
      (element.parentNode && element.remove(),
        parent.insertBefore(
          element,
          index === void 0 || index >= parent.children.length || parent.children.length === 0
            ? null
            : parent.children[Math.max(0, index)],
        ));
    }

    function insertBeforeElement(element, reference) {
      reference.parentNode.insertBefore(element, reference);
    }

    function div(props, extra) {
      return createElement("div", props, extra);
    }

    function createElement(tagName, props, extra) {
      return createNode(void 0, tagName, props, extra);
    }

    const internalProps = ["style", "children", "child", "init", "destroy", "dataset"];

    function createNode(parent, tagName, props, extra) {
      let node = tagName === void 0 ? parent : document.createElement(tagName),
        children = {},
        childMap = {};
      if (props) {
        (props.style && Object.assign(node.style, props.style),
          props.dataset && Object.assign(node.dataset, props.dataset));
        for (let key of Object.keys(props))
          (internalProps.includes(key) || (node[key] = props[key]),
            (key === "role" || key === "placeholder") && node.setAttribute(key, props[key]));
        if ((props.p && ((props.children ??= []).p = props.p), props.children)) {
          let entries = Object.entries(props.children);
          for (const [key, child] of entries)
            child instanceof HTMLElement
              ? node.appendChild(child)
              : (node.appendChild(child?.o?.i ?? child.i),
                child.u && (Object.assign(childMap, child.u), (childMap[key] = child)));
          for (const [key, child] of entries) ((children[key] = child), (childMap[key] = child));
        }
      }
      tagName !== void 0 && parent && parent.appendChild(node);
      let result = { i: node, u: childMap };
      return (
        props.destroy && (result.destroy = props.destroy),
        Object.assign(result, children),
        extra && Object.assign(result, extra),
        props?.init && props.init(result),
        result
      );
    }

    const readerUrlPrefix = "about:reader?url=";

    function normalizeUrl(url) {
      if (!url) return "";
      if (url.startsWith("data:text/html") && url.includes('<div id="placeholderUrl">'))
        return url.match(/<div id="placeholderUrl">(.+)<\/div>/)?.[1];
      if (url.indexOf(":") === -1) return normalizeUrl("https://" + url);
      if (url.indexOf(readerUrlPrefix) === 0)
        return decodeURIComponent(url.substring(readerUrlPrefix.length));
      if (url.startsWith(`${extensionRootUrl}placeholder.html?`)) {
        const params = new URLSearchParams(url.substring(url.indexOf("?")));
        return normalizeUrl(params.get("url"));
      }
      try {
        let parsed = new URL(url),
          serialized = parsed.toString();
        return !parsed.hash && !parsed.search && parsed.pathname === "/" && serialized.endsWith("/")
          ? serialized.substring(0, serialized.length - 1)
          : parsed.toString();
      } catch {
        return url;
      }
    }

    function placeholderUrlFor(url, needsPlaceholder, inlinePlaceholder) {
      return needsPlaceholder && ((url || "").toLowerCase().startsWith("file:") || isExcludedUrl(url))
        ? inlinePlaceholder
          ? `data:text/html, <html><body><div id="placeholderUrl">${htmlEscapeText(url)}</div></body></html>`
          : `${extensionRootUrl}placeholder.html?url=${encodeURIComponent(url)}`
        : url;
    }

    async function isFileAccessBlocked() {
      try {
        return !(await chrome.extension.isAllowedFileSchemeAccess());
      } catch (error) {
        return (console.log(error), !0);
      }
    }

    function parseDigits(value) {
      return parseInt(value.match(/\d+/)[0]);
    }

    function last(items) {
      if (!(!items || items.length === 0)) return items[items.length - 1];
    }

    const backoffSteps = [...new Array(30)].map((_, index) => parseInt(10 + Math.pow(1.6, index)));

    function* backoffDurations(total) {
      let index = 0;
      for (; backoffSteps.slice(0, index).reduce((sum, value) => sum + value, 0) < total; )
        yield backoffSteps[index++];
    }

    async function waitForCondition(timeout, description, check) {
      let elapsed = 0;
      for (let delayMs of backoffDurations(timeout)) {
        if (await check(elapsed)) return;
        (await delay(delayMs), (elapsed += delayMs));
      }
      throw new Error(`Timeout waiting for condition ${description}`);
    }

    function translate(messageName) {
      let translated = chrome.i18n.getMessage(messageName);
      return translated || (console.log("No translation available for: " + messageName), messageName);
    }

    function runWhenDomReady(callback) {
      const listener = () => {
        (document.removeEventListener("DOMContentLoaded", listener),
          window.removeEventListener("load", listener),
          callback());
      };
      document.readyState !== "loading"
        ? setTimeout(callback)
        : (document.addEventListener("DOMContentLoaded", listener),
          window.addEventListener("load", listener));
    }

    function horizontalDivider({
      id,
      display,
      marginTop = "16px",
      marginBottom = "16px",
      marginInlineStart = 0,
      marginInlineEnd = 0,
      color = "var(--border-color)",
      $,
      Fu,
      Qa,
    } = {}) {
      return div({
        className: "horizDivider",
        ...(id && { id }),
        ...(Fu && { className: "hideIfInLastSection" }),
        ...(Qa && { className: "hideIfInLastSubsection" }),
        style: {
          ...(display && { display }),
          marginTop,
          marginBottom,
          marginInlineStart,
          marginInlineEnd,
          borderBottom: `1px solid ${color}`,
          ...$,
        },
      });
    }

    const relativeTimeFormatter = new Intl.RelativeTimeFormat(void 0, { ju: "auto" }),
      relativeTimeUnits = [
        { Ye: 60, name: "seconds" },
        { Ye: 60, name: "minutes" },
        { Ye: 24, name: "hours" },
        { Ye: 7, name: "days" },
        { Ye: 4.34524, name: "weeks" },
        { Ye: 12, name: "months" },
        { Ye: Number.POSITIVE_INFINITY, name: "years" },
      ];

    function relativeTime(seconds) {
      let value = seconds;
      for (let index = 0; index < relativeTimeUnits.length; index++) {
        const unit = relativeTimeUnits[index];
        if (Math.abs(value) < unit.Ye) return relativeTimeFormatter.format(Math.round(value), unit.name);
        value /= unit.Ye;
      }
    }

    function relativePastTime(date) {
      const seconds = (date - new Date()) / 1e3;
      return seconds > -60 && seconds < 0 ? translate("justNow") : relativeTime(seconds);
    }

    function relativeFutureTime(date) {
      const seconds = (date - new Date()) / 1e3;
      return seconds < 60 && seconds > 0 ? translate("soon") : relativeTime(seconds);
    }

    function deepEqual(left, right) {
      if (typeof left != typeof right) return !1;
      if (Array.isArray(left)) {
        if (!Array.isArray(right) || left.length !== right.length) return !1;
        for (let index = 0; index < left.length; index++) if (!deepEqual(left[index], right[index])) return !1;
        return !0;
      } else if (typeof left == "object") {
        let leftKeys = [...Object.keys(left)].sort(),
          rightKeys = [...Object.keys(right)].sort();
        if (leftKeys.length !== rightKeys.length) return !1;
        for (let index = 0; index < leftKeys.length; index++) if (leftKeys[index] !== rightKeys[index]) return !1;
        for (let index = 0; index < leftKeys.length; index++) if (!deepEqual(left[leftKeys[index]], right[leftKeys[index]])) return !1;
        return !0;
      } else return left === right;
    }

    function sortObjectDeep(value) {
      if (Array.isArray(value)) return value.map((item) => sortObjectDeep(item));
      if (typeof value == "object") {
        let keys = [...Object.keys(value)].sort();
        return Object.fromEntries(keys.map((key) => [key, sortObjectDeep(value[key])]));
      } else return value;
    }

    function clearArray(items) {
      items.splice(0, items.length);
    }

    function uniqueBy(items, readKey) {
      if (!readKey) return [...new Set(items).values()];
      let seen = new Set(),
        result = [];
      for (let item of items) {
        let key = readKey(item);
        seen.has(key) || (seen.add(key), result.push(item));
      }
      return result;
    }

    function arrayInsert(items, start, values) {
      let index = +start;
      (Number.isNaN(index) && (index = 0),
        index !== 1 / 0 && index !== -1 / 0 && (index = index < 0 ? Math.ceil(index) : Math.floor(index)));
      let length = items.length,
        offset = index < 0 ? Math.max(length + index, 0) : Math.min(index, length);
      if (!values.length) return;
      let count = values.length;
      items.length = length + count;
      let hasOwnProperty = Object.prototype.hasOwnProperty;
      for (let itemIndex = length - 1; itemIndex >= offset; itemIndex--)
        hasOwnProperty.call(items, itemIndex) ? (items[itemIndex + count] = items[itemIndex]) : delete items[itemIndex + count];
      for (let itemIndex = 0; itemIndex < count; itemIndex++) items[offset + itemIndex] = values[itemIndex];
    }

    function sameSet(left, right) {
      return JSON.stringify([...left].sort()) === JSON.stringify([...right].sort());
    }

    function sameJson(left, right) {
      return JSON.stringify(left) === JSON.stringify(right);
    }

    function pushUnique(items, ...values) {
      let seen = new Set();
      for (let index = items.length - 1; index >= 0; index--)
        seen.has(items[index]) ? items.splice(index, 1) : seen.add(items[index]);
      for (let value of values) seen.has(value) || (seen.add(value), items.push(value));
      return items;
    }

    function includes(value, items) {
      return items.includes(value);
    }

    function includesAny(values, items) {
      return items.some((item) => values.includes(item));
    }

    function removeAll(items, value) {
      for (; items.includes(value); ) items.splice(items.indexOf(value), 1);
      return items;
    }

    function removeWhere(items, keep) {
      for (let index = items.length - 1; index >= 0; index--) keep(items[index]) || items.splice(index, 1);
      return items;
    }

    function toggleValue(items, value, enabled) {
      return (enabled ? pushUnique(items, value) : removeAll(items, value), items);
    }

    function removeFirstWhere(items, predicate) {
      let index = items.findIndex(predicate);
      if (index === -1) return;
      let [item] = items.splice(index, 1);
      return item;
    }

    function maybeArray(condition, value) {
      let resolved, ok;
      return (
        arguments.length === 1 ? ((resolved = condition), (ok = resolved !== void 0)) : ((ok = condition), (resolved = value)),
        ok ? [resolved] : []
      );
    }

    function removeOccurrence(items, value, occurrence) {
      let index = items.findIndex((item) => item === value && !occurrence--);
      return (index !== -1 && items.splice(index, 1), index);
    }

    function mapIdsToItems(ids, items, filter) {
      let byId = new Map();
      (items ?? []).forEach((item) => {
        item && !byId.has(item.id) && byId.set(item.id, item);
      });
      let result = (ids ?? []).map((id) => byId.get(id));
      return filter ? result.filter(filter) : result;
    }

    const {
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
    } = globalThis.createOneTabCommonBundleHelpers({
      extensionRootUrl,
      getCoreProxy,
      isNewOrBlankTabPageUrl,
      isPlaceholderUrl,
    });

    function placeholderParts(text, child) {
      let parts = text.split("PLACEHOLDER");
      return createElement("span", {
        children: {
          a: createElement("span", { textContent: parts[0] }),
          b: child,
          c: createElement("span", { textContent: parts[1] }),
        },
      });
    }

    let proxyLogTimeout;
    const proxyCounts = {},
      proxyStacks = {},
      makeProxyHandler = (namespace) => ({
        get(target, property) {
          if (property === "then") return target.then?.bind(target);
          let key = namespace ? `${namespace}:${property}` : property;
          if (
            ((proxyCounts[key] ??= 0),
            proxyCounts[key]++,
            new Error().stack
              .split(
                `
`,
              )
              .slice(1)
              .forEach((stackLine) => {
                ((proxyStacks[stackLine] ??= 0), proxyStacks[stackLine]++);
              }),
            proxyLogTimeout !== void 0 && (clearTimeout(proxyLogTimeout), (proxyLogTimeout = void 0)),
            (proxyLogTimeout = setTimeout(() => {
              (console.log(
                JSON.stringify(
                  Object.fromEntries(
                    Object.entries(proxyStacks)
                      .sort((left, right) => right[1] - left[1])
                      .slice(0, 30),
                  ),
                  null,
                  2,
                ),
              ),
                console.log(JSON.stringify(proxyCounts, null, 2)));
            }, 500)),
            property === "index")
          )
            return (value) => identity(target.index(value), property);
          let value = target[property];
          return typeof value == "function" ? value.bind(target) : value;
        },
      });

    function identity(value) {
      return value;
    }

    function intersperseLocal(items, makeSeparator) {
      return items.length < 2
        ? items
        : items.flatMap((item, index) => [item, ...maybeArray(index === items.length - 1 ? void 0 : makeSeparator())]);
    }

    const modelPredicates = globalThis.createOneTabModelPredicates();
    const collectionHelpers = globalThis.createOneTabCollectionHelpers();
    const searchHelpers = globalThis.createOneTabSearchHelpers();
    const childTypeCode = "c",
      editTypeCode = "e",
      tabTypeCode = "t";
    const sessionStorageAdapter = globalThis.createOneTabSessionStorageAdapter();

    function getSessionStorageAdapter() {
      return sessionStorageAdapter;
    }

    const runtimeMarker = "undefined-34LKmiHxP3Mu48u8qrDaHf";
    const runtimeHelpers = globalThis.createOneTabRuntimeHelpers();
    const domTransitionHelpers = globalThis.createOneTabDomTransitionHelpers();

    function renderLabelSegments({ label, oe, ei, ii, No = 300 }) {
      if (oe?.length) {
        let segments = searchHelpers.splitSearchText({ text: label, ti: oe, ei, ii }),
          totalLength = segments.reduce((sum, { s }) => sum + s.length, 0),
          extra = Math.max(0, totalLength - No),
          nonMatches = segments.filter(({ tt }) => !tt).length;
        for (
          let index = 0;
          index < nonMatches &&
          !(extra <= 0 || !segments.filter(({ s, tt }) => !tt && s.length > 5).length);
          index++
        ) {
          let sorted = [...segments]
              .filter(({ tt }) => !tt)
              .sort(collectionHelpers.combineComparators(collectionHelpers.compareDescendingBy(({ s }) => s.length))),
            shortest = sorted.filter(({ s }, itemIndex, values) => itemIndex === 0 || values[itemIndex - 1].s.length === s.length),
            next = sorted[shortest.length],
            removeCount = Math.ceil(extra / shortest.length),
            length = shortest[0].s.length;
          (next && (removeCount = Math.min(length - next.s.length, removeCount)),
            length - removeCount < 5 && (removeCount = Math.max(0, length - 5)),
            (extra -= removeCount * shortest.length),
            removeCount > 0 &&
              shortest.forEach((segment) => {
                segment.Ki ??= Math.floor(segment.s.length / 2);
                let left = Math.floor(removeCount / 2),
                  right = Math.ceil(removeCount / 2);
                ((segment.s = segment.s.substring(0, segment.Ki - left) + segment.s.substring(segment.Ki + right)),
                  (segment.Ki = segment.Ki - left),
                  (segment.Hu = !0));
              }));
        }
        return segments.flatMap((segment) =>
          segment.tt
            ? createElement("span", {
                style: { backgroundColor: "var(--text-highlight-bg-color)" },
                textContent: segment.s,
              }).i
            : segment.Hu
              ? [
                  createElement("span", { textContent: segment.s.substring(0, segment.Ki) }).i,
                  createElement("span", {
                    style: { color: "var(--text-color-extra-weak)" },
                    textContent: "…",
                  }).i,
                  createElement("span", { textContent: segment.s.substring(segment.Ki) }).i,
                ]
              : createElement("span", { textContent: segment.s }).i,
        );
      } else {
        let span = document.createElement("span");
        return ((span.textContent = trimToLengthWithEllipsis(label, No)), [span]);
      }
    }

    function tabCount(count) {
      return pluralize("tabCount", count);
    }

    function bookmarkCount(count) {
      return pluralize("bookmarkCount", count);
    }

    function replaceLabelSegments({ label, Ro, oe, ei, ii, No }) {
      Ro.replaceChildren(...renderLabelSegments({ label, oe, ei, ii, No }));
    }

    const applyRuntimeHelpers = globalThis.createOneTabRuntimeHelpers();
    const textHelpers = globalThis.createOneTabTextHelpers();
    const urlHelpers = globalThis.createOneTabUrlHelpers({
      normalizeText,
      normalizeUrl,
    });
    const importHelpers = globalThis.createOneTabImportHelpers({
      combineComparators: collectionHelpers.combineComparators,
      compareAscendingBy: collectionHelpers.compareAscendingBy,
      compareDescendingBy: collectionHelpers.compareDescendingBy,
      equalIgnoringProtocol: urlHelpers.equalIgnoringProtocol,
      normalizeImportedText: textHelpers.normalizeImportedText,
      normalizeText,
      safeNonJavascriptUrl: urlHelpers.safeNonJavascriptUrl,
      stripProtocol: urlHelpers.stripProtocol,
      trimTrailingDotOrComma: urlHelpers.trimTrailingDotOrComma,
    });

    function htmlEscapeText(value) {
      let element = document.createElement("p");
      return ((element.textContent = value), element.innerHTML);
    }

    function htmlEscapeAttribute(value) {
      return ((value = value.replaceAll('"', "&quot;")), (value = value.replaceAll("&", "&amp;")), value);
    }

    function identityPair(value) {
      return [value, value];
    }

    class EventAttachment {
      constructor({ listener, Ka, Bs }) {
        ((this.listener = listener), (this.Bs = Bs), Ka(listener));
      }
      remove() {
        if (!this.listener) {
          console.log("eventattachment remove called twice");
          return;
        }
        (this.Bs(this.listener), (this.Bs = null), (this.listener = null));
      }
    }

    function itemOccurrenceRef({ itemId, Fe, zt }) {
      return {
        itemId,
        ...(Fe && { sourceParentId: Fe }),
        ...(zt !== void 0 && { occurrence: zt }),
      };
    }

    class AsyncMapCache {
      constructor(load) {
        ((this.qu = load), (this.map = new Map()));
      }
      v(key) {
        return this.map.get(key);
      }
      async get(key) {
        if (this.map.has(key)) return this.map.get(key);
        {
          let value = await this.qu(key);
          return (this.map.set(key, value), value);
        }
      }
    }

    function hasNotesText(item) {
      return !!item.notes?.text;
    }

    function nonNegative(value) {
      return value === void 0 || value < 0 ? 0 : value;
    }

    function isTabExcluded(tab) {
      let url = tab.url ?? tab.pendingUrl;
      return isExcludedUrl(url);
    }

    function isPlaceholderUrl(url) {
      return url?.startsWith(`${extensionRootUrl}placeholder.html?`);
    }

    function shouldSkipTab({ tab, Uu, excludedDomains = [] }) {
      let url = normalizeUrl(tab.url ?? tab.pendingUrl);
      return isOneTabPageUrl(url) || (tab.pinned && !Uu) || excludedDomains.includes(extractDomain(url));
    }

    function allSame(items, readValue = (value) => value) {
      let first = readValue(items[0]);
      return items.every((item) => readValue(item) === first);
    }

    function escapeXml(value) {
      if (!value) return "";
      const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      };
      return value.replace(/[&<>"']/g, (match) => replacements[match]);
    }

    async function isChromium120OrNewer() {
      return runtimeHelpers.isOpera()
        ? !1
        : navigator.userAgentData?.brands.some(
            ({ brand, version }) => brand === "Chromium" && version >= 120,
          ) &&
            !navigator.userAgentData?.brands.some(
              ({ brand, version }) => brand === "Microsoft Edge",
            );
    }

    const colorNames = [
        "grey",
        "blue",
        "red",
        "yellow",
        "green",
        "pink",
        "purple",
        "cyan",
        "orange",
      ],
      defaultColor = "grey",
      true3 = !0,
      leadingNonAlphanumeric = /^[^\p{L}\p{Nd}]+/u;

    function measureElement(element) {
      let position = element.style.position,
        left = element.style.left;
      ((element.style.position = "absolute"),
        (element.style.left = "-1000px"),
        document.body.appendChild(element));
      let width = element.offsetWidth + 1,
        height = element.offsetHeight + 1;
      return (
        (element.style.position = position),
        (element.style.left = left),
        element.remove(),
        { w: width, tt: height }
      );
    }

    return {
      activateTab,
      activateTabAndWindow,
      addNoCacheRandom,
      allSame,
      arrayInsert,
      applyRuntimeHelpers,
      AsyncMapCache,
      asyncPartition,
      backoffSteps,
      backoffDurations,
      bookmarkCount,
      childTypeCode,
      chromeNewTabUrl,
      chromeUrl,
      clearAllUncommittedChanges,
      clearArray,
      clearUncommittedChanges,
      colorNames,
      collectionHelpers,
      commonDomainSuffixes,
      compareVersionParts,
      createElement,
      createNode,
      defaultColor,
      defaultSettings,
      deepEqual,
      digestBytes,
      digestText,
      div,
      domainWithoutWww,
      domTransitionHelpers,
      endsWith,
      editTypeCode,
      escapeXml,
      EventAttachment,
      excludedUrlPrefixes,
      extensionRootUrl,
      extractDomain,
      false1,
      false2,
      false3,
      false4,
      false5,
      false6,
      false7,
      false8,
      false9,
      fetchJson,
      filterNested,
      filterToSet,
      getLocalStorageAdapter,
      getSessionStorageAdapter,
      getUncommittedChanges,
      hasNotesText,
      hasTabGroupsPermission,
      horizontalDivider,
      htmlEscapeAttribute,
      htmlEscapeText,
      identity,
      identityPair,
      includes,
      includesAny,
      insertBeforeElement,
      internalProps,
      intersperseLocal,
      importHelpers,
      isChromium120OrNewer,
      isExcludedUrl,
      isExtensionUrl,
      isFileAccessBlocked,
      isLineBreak,
      isOneTabPageUrl,
      isPlaceholderUrl,
      isTabExcluded,
      itemOccurrenceRef,
      last,
      leadingNonAlphanumeric,
      localStorageAdapter,
      makeProxyHandler,
      mapIdsToItems,
      maybeArray,
      measureElement,
      modelPredicates,
      moveElementToIndex,
      newId,
      noCacheRandom,
      nonNegative,
      nonStandardLineBreaks,
      normalizeLineBreaks,
      normalizeText,
      normalizedOrDefault,
      normalizeUrl,
      not,
      oneTabPageUrl,
      partition,
      partitionMany,
      parseDigits,
      placeholderParts,
      placeholderUrlFor,
      postJson,
      protocolPrefix,
      pruneUncommittedChanges,
      pushUnique,
      randomColor,
      randomAlphabet,
      randomHex,
      randomId,
      randomItem,
      registeredDomain,
      relativeFutureTime,
      relativePastTime,
      relativeTime,
      relativeTimeFormatter,
      relativeTimeUnits,
      removeAll,
      removeControlCharacters,
      removeControlCharactersExceptTabs,
      removeFirstWhere,
      removeOccurrence,
      removeWhere,
      renderLabelSegments,
      replaceLabelSegments,
      requestPermission,
      requestTabGroupsPermission,
      readerUrlPrefix,
      runtimeHelpers,
      runtimeMarker,
      runWhenDomReady,
      sameJson,
      sameSet,
      saveUncommittedChanges,
      searchHelpers,
      sessionStorageAdapter,
      shouldSkipTab,
      sortObjectDeep,
      stableIdFromText,
      stripHttpProtocol,
      tabCount,
      tabGroupsEnabled,
      tabTypeCode,
      textDecoder,
      textEncoder,
      textHelpers,
      toggleValue,
      translate,
      trimWhitespace,
      true1,
      true2,
      true3,
      uniqueBy,
      urlHelpers,
      version,
      versionBetween,
      versionGreaterThan,
      versionLessThan,
      waitForCondition,
      websiteUrl,
    };
  }

  globalThis.createOneTabBundlePrelude = createOneTabBundlePrelude;
})();
