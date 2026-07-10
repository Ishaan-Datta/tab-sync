// Shared OneTab item/group predicates extracted from the original bundles.
(function () {
  interface OneTabItemLike {
    id?: string;
    type?: string;
    groupType?: string;
    archived?: unknown;
    task?: unknown;
    shared?: unknown;
    shareExpiryDate?: number;
  }

  interface OneTabModelPredicates {
    doesNotHaveId(id: string): (item: OneTabItemLike) => boolean;
    getId(item: OneTabItemLike): string | undefined;
    hasId(id: string): (item: OneTabItemLike) => boolean;
    isArchived(item: OneTabItemLike): unknown;
    isBrowserGroup(item: OneTabItemLike): boolean;
    isDefined<T>(value: T | undefined): value is T;
    isFolder(item: OneTabItemLike): boolean;
    isFolderOrWindowGroup(item: OneTabItemLike): boolean;
    isGroup(item: OneTabItemLike): boolean;
    isNotQuickList(groupType: string): boolean;
    isQuickList(item: OneTabItemLike): boolean;
    isRoot(item: OneTabItemLike): boolean;
    isSharedAndNotExpired(item: OneTabItemLike): unknown;
    isTab(item: OneTabItemLike): boolean;
    isTabGroup(item: OneTabItemLike): boolean;
    isTask(item: OneTabItemLike): unknown;
    isTrash(item: OneTabItemLike): boolean;
    isUndefined(value: unknown): value is undefined;
    isUserFolder(item: OneTabItemLike): boolean;
    isWindowGroup(item: OneTabItemLike): boolean;
    sameIdAs(item: OneTabItemLike): (other: OneTabItemLike) => boolean;
  }

  function createOneTabModelPredicates(): OneTabModelPredicates {
    function isUndefined(value: unknown): value is undefined {
      return value === undefined;
    }

    function isDefined<T>(value: T | undefined): value is T {
      return value !== undefined;
    }

    function hasId(id: string) {
      return (item: OneTabItemLike) => id === item.id;
    }

    function doesNotHaveId(id: string) {
      return (item: OneTabItemLike) => id !== item.id;
    }

    function sameIdAs(item: OneTabItemLike) {
      return (other: OneTabItemLike) => item.id === other.id;
    }

    function getId(item: OneTabItemLike) {
      return item.id;
    }

    function isTab(item: OneTabItemLike) {
      return item.type === "tab";
    }

    function isRoot(item: OneTabItemLike) {
      return item.id === "root";
    }

    function isTrash(item: OneTabItemLike) {
      return item.id === "trash";
    }

    function isFolder(item: OneTabItemLike) {
      return item.groupType === "folder";
    }

    function isArchived(item: OneTabItemLike) {
      return item.archived;
    }

    function isTask(item: OneTabItemLike) {
      return item.task;
    }

    function isUserFolder(item: OneTabItemLike) {
      return isFolder(item) && !isTrash(item);
    }

    function isQuickList(item: OneTabItemLike) {
      return item.groupType === "quickList";
    }

    function isFolderOrWindowGroup(item: OneTabItemLike) {
      return isFolder(item) || isWindowGroup(item);
    }

    function isGroup(item: OneTabItemLike) {
      return item.type === "group";
    }

    function isTabGroup(item: OneTabItemLike) {
      return item.groupType === "tabGroup";
    }

    function isWindowGroup(item: OneTabItemLike) {
      return item.groupType === "window";
    }

    function isBrowserGroup(item: OneTabItemLike) {
      return isTabGroup(item) || isWindowGroup(item);
    }

    function isNotQuickList(groupType: string) {
      return groupType !== "quickList";
    }

    function isSharedAndNotExpired(item: OneTabItemLike) {
      return item.shared && item.shareExpiryDate! > +new Date();
    }

    return {
      doesNotHaveId,
      getId,
      hasId,
      isArchived,
      isBrowserGroup,
      isDefined,
      isFolder,
      isFolderOrWindowGroup,
      isGroup,
      isNotQuickList,
      isQuickList,
      isRoot,
      isSharedAndNotExpired,
      isTab,
      isTabGroup,
      isTask,
      isTrash,
      isUndefined,
      isUserFolder,
      isWindowGroup,
      sameIdAs,
    };
  }

  (globalThis as any).createOneTabModelPredicates = createOneTabModelPredicates;
})();
