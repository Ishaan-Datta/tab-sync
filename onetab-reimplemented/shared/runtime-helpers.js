// Shared runtime helpers extracted from the original bundles.
(function () {
  function createOneTabRuntimeHelpers() {
    async function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function replaceValueDeep(value, searchValue, replacementValue) {
      return Array.isArray(value)
        ? value.map((item) =>
            replaceValueDeep(item, searchValue, replacementValue),
          )
        : typeof value == "object" && value !== null
          ? Object.fromEntries(
              Object.entries(value).map(([key, nestedValue]) => [
                key,
                replaceValueDeep(nestedValue, searchValue, replacementValue),
              ]),
            )
          : value === searchValue
            ? replacementValue
            : value;
    }

    function isOpera() {
      return navigator.userAgentData?.brands.some(
        ({ brand, version }) => brand === "Opera",
      );
    }

    function isBrave() {
      return navigator.userAgentData?.brands.some(
        ({ brand, version }) => brand === "Brave",
      );
    }

    function isMicrosoftEdge() {
      return navigator.userAgentData?.brands.some(
        ({ brand }) => brand === "Microsoft Edge",
      );
    }

    async function unsleepTab(tab) {
      const [activeTab] = await chrome.tabs.query({
        windowId: tab.windowId,
        active: true,
      });
      activeTab
        ? activeTab.id !== tab.id &&
          (await chrome.tabs.update(tab.id, { active: true }),
          await chrome.tabs.update(activeTab.id, { active: true }))
        : console.log("unsleepTab: No active tab found");
    }

    function mergeObjectsWithSeparators(items, createSeparator) {
      items = items.filter((item) => item);
      let result = {};
      for (let index = 0; index < items.length; index++) {
        result = {
          ...result,
          ...items[index],
          ...(index !== items.length - 1 && {
            [`separator${index}`]: createSeparator(),
          }),
        };
      }
      return result;
    }

    function intersperse(items, createSeparator) {
      const result = [];
      for (let index = 0; index < items.length; index++) {
        result.push(items[index]);
        index < items.length - 1 && result.push(createSeparator());
      }
      return result;
    }

    function callIfOwnProperty(source, key, callback) {
      Object.hasOwn(source, key) && callback(source[key]);
    }

    function callIfDefined(value, callback) {
      value !== void 0 && callback(value);
    }

    function applyValue(value, callback) {
      return callback(value);
    }

    function applyIfTruthy(value, callback) {
      if (value) return applyValue(value, callback);
    }

    function joinUniqueTrimmed(separator, ...values) {
      const result = [];
      const uniqueValues = new Set();
      return (
        values.forEach((value) => uniqueValues.add(value)),
        uniqueValues.forEach(
          (value) => value && value.trim() && result.push(value.trim()),
        ),
        result.join(separator) || void 0
      );
    }

    return {
      applyIfTruthy,
      applyValue,
      callIfDefined,
      callIfOwnProperty,
      delay,
      intersperse,
      isBrave,
      isMicrosoftEdge,
      isOpera,
      joinUniqueTrimmed,
      mergeObjectsWithSeparators,
      replaceValueDeep,
      unsleepTab,
    };
  }

  globalThis.createOneTabRuntimeHelpers = createOneTabRuntimeHelpers;
})();
