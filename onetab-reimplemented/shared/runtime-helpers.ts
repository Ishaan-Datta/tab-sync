// Shared runtime helpers extracted from the original bundles.
(function () {
  interface OneTabRuntimeHelpers {
    applyIfTruthy<T, R>(value: T, callback: (value: T) => R): R | undefined;
    applyValue<T, R>(value: T, callback: (value: T) => R): R;
    callIfDefined<T>(value: T | undefined, callback: (value: T) => void): void;
    callIfOwnProperty(
      source: Record<string, unknown>,
      key: string,
      callback: (value: unknown) => void,
    ): void;
    delay(ms: number): Promise<unknown>;
    intersperse<T, S>(items: T[], createSeparator: () => S): Array<T | S>;
    isBrave(): boolean | undefined;
    isMicrosoftEdge(): boolean | undefined;
    isOpera(): boolean | undefined;
    joinUniqueTrimmed(
      separator: string,
      ...values: string[]
    ): string | undefined;
    mergeObjectsWithSeparators(
      items: Array<Record<string, unknown> | undefined | null | false>,
      createSeparator: () => unknown,
    ): Record<string, unknown>;
    replaceValueDeep(
      value: unknown,
      searchValue: unknown,
      replacementValue: unknown,
    ): unknown;
    unsleepTab(tab: { id?: number; windowId: number }): Promise<void>;
  }

  function createOneTabRuntimeHelpers(): OneTabRuntimeHelpers {
    async function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function replaceValueDeep(
      value: any,
      searchValue: unknown,
      replacementValue: unknown,
    ): any {
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
      return (navigator as any).userAgentData?.brands.some(
        ({ brand, version }: any) => brand === "Opera",
      );
    }

    function isBrave() {
      return (navigator as any).userAgentData?.brands.some(
        ({ brand, version }: any) => brand === "Brave",
      );
    }

    function isMicrosoftEdge() {
      return (navigator as any).userAgentData?.brands.some(
        ({ brand }: any) => brand === "Microsoft Edge",
      );
    }

    async function unsleepTab(tab: any) {
      const [activeTab] = await chrome.tabs.query({
        windowId: tab.windowId,
        active: true,
      });
      activeTab
        ? activeTab.id !== tab.id &&
          (await chrome.tabs.update(tab.id as number, { active: true }),
          await chrome.tabs.update(activeTab.id as number, { active: true }))
        : console.log("unsleepTab: No active tab found");
    }

    function mergeObjectsWithSeparators(
      items: Array<Record<string, unknown> | undefined | null | false>,
      createSeparator: () => unknown,
    ) {
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

    function intersperse<T, S>(items: T[], createSeparator: () => S) {
      const result: Array<T | S> = [];
      for (let index = 0; index < items.length; index++) {
        result.push(items[index]);
        index < items.length - 1 && result.push(createSeparator());
      }
      return result;
    }

    function callIfOwnProperty(
      source: Record<string, unknown>,
      key: string,
      callback: (value: unknown) => void,
    ) {
      Object.hasOwn(source, key) && callback(source[key]);
    }

    function callIfDefined<T>(
      value: T | undefined,
      callback: (value: T) => void,
    ) {
      value !== void 0 && callback(value);
    }

    function applyValue<T, R>(value: T, callback: (value: T) => R) {
      return callback(value);
    }

    function applyIfTruthy<T, R>(value: T, callback: (value: T) => R) {
      if (value) return applyValue(value, callback);
    }

    function joinUniqueTrimmed(separator: string, ...values: string[]) {
      const result: string[] = [];
      const uniqueValues = new Set<string>();
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

  (globalThis as any).createOneTabRuntimeHelpers = createOneTabRuntimeHelpers;
})();
