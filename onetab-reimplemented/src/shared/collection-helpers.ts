export type Comparator<T> = (left: T, right: T) => number;

export interface OneTabCollectionHelpers {
  combineComparators<T>(...comparators: Array<Comparator<T>>): Comparator<T>;
  compareAscendingBy<T>(readValue: (item: T) => number): Comparator<T>;
  compareDescendingBy<T>(readValue: (item: T) => number): Comparator<T>;
  compareLocaleBy<T>(readValue: (item: T) => string): Comparator<T>;
  compareLocaleNumericBy<T>(readValue: (item: T) => string): Comparator<T>;
  groupBy<T, K>(items: T[], readKey: (item: T) => K): Map<K, T[]>;
  KeyedObjectMap: new (
    key: string,
    items?: unknown[],
  ) => {
    add(item: any): void;
    addAll(items: unknown[]): void;
    readonly list: unknown[];
    readonly keys: string[];
  };
  mapBy<T, K>(items: T[], readKey: (item: T) => K): Map<K, T>;
  mergeDefined<T>(
    left: T | undefined,
    right: T | undefined,
    merge: (left: T, right: T) => T,
  ): T | undefined;
  mergeOwnProperty(
    source: Record<string, unknown>,
    target: Record<string, unknown>,
    key: string,
    merge: (left: unknown, right: unknown) => unknown,
  ): void;
  nthIndexOf<T>(items: T[], item: T, occurrence: number): number;
  range(length: number): number[];
}

export class KeyedObjectMap {
  key: string;
  map: Record<string, unknown>;

  constructor(key: string, items: unknown[] = []) {
    this.key = key;
    this.map = {};
    this.addAll(items);
  }

  add(item: any) {
    if (!item[this.key]) {
      throw new Error(`Object does not have the necessary '${this.key}' key`);
    }
    (this.map as any)(item[this.key]) || (this.map[item[this.key]] = item);
  }

  addAll(items: unknown[]) {
    items.forEach((item) => this.add(item));
  }

  get list() {
    return Object.values(this.map);
  }

  get keys() {
    return Object.keys(this.map);
  }
}

export function createOneTabCollectionHelpers(): OneTabCollectionHelpers {
  function combineComparators<T>(...comparators: Array<Comparator<T>>) {
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
      readValue(left).localeCompare(readValue(right), void 0, {
        Cu: "base",
      } as any);
  }

  function compareLocaleNumericBy<T>(readValue: (item: T) => string) {
    return (left: T, right: T) =>
      readValue(left).localeCompare(readValue(right), void 0, {
        ju: "true",
        Cu: "base",
      } as any);
  }

  function mergeOwnProperty(
    source: Record<string, unknown>,
    target: Record<string, unknown>,
    key: string,
    merge: (left: unknown, right: unknown) => unknown,
  ) {
    Object.hasOwn(source, key) &&
      (Object.hasOwn(target, key)
        ? (target[key] = merge(source[key], target[key]))
        : (target[key] = source[key]));
  }

  function mergeDefined<T>(
    left: T | undefined,
    right: T | undefined,
    merge: (left: T, right: T) => T,
  ) {
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
