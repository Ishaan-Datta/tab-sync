// Shared collection/comparison helpers extracted from the original bundles.
(function () {
  function createOneTabCollectionHelpers() {
    function combineComparators<T>(...comparators: Array<(left: T, right: T) => number>) {
      return (left: T, right: T) =>
        comparators.reduce(
          (result, comparator) => result || comparator(left, right),
          0,
        );
    }

    function compareAscendingBy<T>(readValue: (item: T) => number) {
      return (left: T, right: T) => readValue(left) - readValue(right);
    }

    function compareDescendingBy<T>(readValue: (item: T) => number) {
      return (left: T, right: T) => readValue(right) - readValue(left);
    }

    function compareLocaleBy<T>(readValue: (item: T) => string) {
      return (left: T, right: T) =>
        readValue(left).localeCompare(readValue(right), void 0, { Cu: "base" } as any);
    }

    function compareLocaleNumericBy<T>(readValue: (item: T) => string) {
      return (left: T, right: T) =>
        readValue(left).localeCompare(readValue(right), void 0, {
          ju: "true",
          Cu: "base",
        } as any);
    }

    function mergeOwnProperty(source: any, target: any, key: string, merge: (left: any, right: any) => any) {
      Object.hasOwn(source, key) &&
        (Object.hasOwn(target, key)
          ? (target[key] = merge(source[key], target[key]))
          : (target[key] = source[key]));
    }

    function mergeDefined(left: any, right: any, merge: (left: any, right: any) => any) {
      return left !== void 0 && right !== void 0
        ? merge(left, right)
        : (left ?? right);
    }

    function mapBy<T, K>(items: T[], readKey: (item: T) => K) {
      const map = new Map<K, T>();
      return (items.forEach((item) => map.set(readKey(item), item)), map);
    }

    function groupBy<T, K>(items: T[], readKey: (item: T) => K) {
      const map = new Map<K, T[]>();
      return (
        items.forEach((item) => {
          const key = readKey(item);
          (map.has(key) || map.set(key, []), map.get(key)!.push(item));
        }),
        map
      );
    }

    function range(length: number) {
      return Array(length)
        .fill(0)
        .map((_, index) => index);
    }

    function nthIndexOf<T>(items: T[], item: T, occurrence: number) {
      if (!items.includes(item)) throw new Error("No match in array");
      const matches = items
        .map((value, index) => [value, index] as const)
        .filter(([value]) => value === item);
      return matches.length > occurrence
        ? matches[occurrence]![1]
        : matches.pop()![1];
    }

    class KeyedObjectMap {
      key: string;
      map: Record<string, any>;

      constructor(key: string, items: any[] = []) {
        this.key = key;
        this.map = {};
        this.addAll(items);
      }

      add(item: any) {
        if (!item[this.key]) {
          throw new Error(
            `Object does not have the necessary '${this.key}' key`,
          );
        }
        (this.map as any)(item[this.key]) || (this.map[item[this.key]] = item);
      }

      addAll(items: any[]) {
        items.forEach((item) => this.add(item));
      }

      get list() {
        return Object.values(this.map);
      }

      get keys() {
        return Object.keys(this.map);
      }
    }

    return {
      combineComparators,
      compareAscendingBy,
      compareDescendingBy,
      compareLocaleBy,
      compareLocaleNumericBy,
      groupBy,
      KeyedObjectMap,
      mapBy,
      mergeDefined,
      mergeOwnProperty,
      nthIndexOf,
      range,
    };
  }

  (globalThis as any).createOneTabCollectionHelpers = createOneTabCollectionHelpers;
})();
