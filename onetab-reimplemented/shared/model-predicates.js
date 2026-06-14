// Shared OneTab item/group predicates extracted from the original bundles.
(function () {
  function createOneTabModelPredicates() {
    function isUndefined(value) {
      return value === undefined;
    }

    function isDefined(value) {
      return value !== undefined;
    }

    function hasId(id) {
      return (item) => id === item.id;
    }

    function doesNotHaveId(id) {
      return (item) => id !== item.id;
    }

    function sameIdAs(item) {
      return (other) => item.id === other.id;
    }

    function getId(item) {
      return item.id;
    }

    function isTab(item) {
      return item.type === "tab";
    }

    function isRoot(item) {
      return item.id === "root";
    }

    function isTrash(item) {
      return item.id === "trash";
    }

    function isFolder(item) {
      return item.groupType === "folder";
    }

    function isArchived(item) {
      return item.archived;
    }

    function isTask(item) {
      return item.task;
    }

    function isUserFolder(item) {
      return isFolder(item) && !isTrash(item);
    }

    function isQuickList(item) {
      return item.groupType === "quickList";
    }

    function isFolderOrWindowGroup(item) {
      return isFolder(item) || isWindowGroup(item);
    }

    function isGroup(item) {
      return item.type === "group";
    }

    function isTabGroup(item) {
      return item.groupType === "tabGroup";
    }

    function isWindowGroup(item) {
      return item.groupType === "window";
    }

    function isBrowserGroup(item) {
      return isTabGroup(item) || isWindowGroup(item);
    }

    function isNotQuickList(groupType) {
      return groupType !== "quickList";
    }

    function isSharedAndNotExpired(item) {
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

  globalThis.createOneTabModelPredicates = createOneTabModelPredicates;
})();
