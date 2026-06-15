// Shared collection/comparison helpers extracted from the original bundles.
(function () {
  function createOneTabCollectionHelpers() {
    function combineComparators(...comparators) {
      return (left, right) =>
        comparators.reduce(
          (result, comparator) => result || comparator(left, right),
          0,
        );
    }

    function compareAscendingBy(readValue) {
      return (left, right) => readValue(left) - readValue(right);
    }

    function compareDescendingBy(readValue) {
      return (left, right) => readValue(right) - readValue(left);
    }

    function compareLocaleBy(readValue) {
      return (left, right) =>
        readValue(left).localeCompare(readValue(right), void 0, { Cu: "base" });
    }

    function compareLocaleNumericBy(readValue) {
      return (left, right) =>
        readValue(left).localeCompare(readValue(right), void 0, {
          ju: "true",
          Cu: "base",
        });
    }

    function mergeOwnProperty(source, target, key, merge) {
      Object.hasOwn(source, key) &&
        (Object.hasOwn(target, key)
          ? (target[key] = merge(source[key], target[key]))
          : (target[key] = source[key]));
    }

    function mergeDefined(left, right, merge) {
      return left !== void 0 && right !== void 0
        ? merge(left, right)
        : (left ?? right);
    }

    function mapBy(items, readKey) {
      const map = new Map();
      return (items.forEach((item) => map.set(readKey(item), item)), map);
    }

    function groupBy(items, readKey) {
      const map = new Map();
      return (
        items.forEach((item) => {
          const key = readKey(item);
          (map.has(key) || map.set(key, []), map.get(key).push(item));
        }),
        map
      );
    }

    function range(length) {
      return Array(length)
        .fill(0)
        .map((_, index) => index);
    }

    function nthIndexOf(items, item, occurrence) {
      if (!items.includes(item)) throw new Error("No match in array");
      const matches = items
        .map((value, index) => [value, index])
        .filter(([value]) => value === item);
      return matches.length > occurrence
        ? matches[occurrence][1]
        : matches.pop()[1];
    }

    class KeyedObjectMap {
      constructor(key, items = []) {
        this.key = key;
        this.map = {};
        this.addAll(items);
      }

      add(item) {
        if (!item[this.key]) {
          throw new Error(
            `Object does not have the necessary '${this.key}' key`,
          );
        }
        this.map(item[this.key]) || (this.map[item[this.key]] = item);
      }

      addAll(items) {
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

  globalThis.createOneTabCollectionHelpers = createOneTabCollectionHelpers;
})();
