// Shared OneTab item/group predicates extracted from the original bundles.
(function () {
  function createOneTabModelPredicates() {
    function isUndefined(value: unknown) {
      return value === undefined;
    }

    function isDefined(value: unknown) {
      return value !== undefined;
    }

    function hasId(id: string) {
      return (item: any) => id === item.id;
    }

    function doesNotHaveId(id: string) {
      return (item: any) => id !== item.id;
    }

    function sameIdAs(item: any) {
      return (other: any) => item.id === other.id;
    }

    function getId(item: any) {
      return item.id;
    }

    function isTab(item: any) {
      return item.type === "tab";
    }

    function isRoot(item: any) {
      return item.id === "root";
    }

    function isTrash(item: any) {
      return item.id === "trash";
    }

    function isFolder(item: any) {
      return item.groupType === "folder";
    }

    function isArchived(item: any) {
      return item.archived;
    }

    function isTask(item: any) {
      return item.task;
    }

    function isUserFolder(item: any) {
      return isFolder(item) && !isTrash(item);
    }

    function isQuickList(item: any) {
      return item.groupType === "quickList";
    }

    function isFolderOrWindowGroup(item: any) {
      return isFolder(item) || isWindowGroup(item);
    }

    function isGroup(item: any) {
      return item.type === "group";
    }

    function isTabGroup(item: any) {
      return item.groupType === "tabGroup";
    }

    function isWindowGroup(item: any) {
      return item.groupType === "window";
    }

    function isBrowserGroup(item: any) {
      return isTabGroup(item) || isWindowGroup(item);
    }

    function isNotQuickList(groupType: string) {
      return groupType !== "quickList";
    }

    function isSharedAndNotExpired(item: any) {
      return item.shared && item.shareExpiryDate > +new Date();
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
