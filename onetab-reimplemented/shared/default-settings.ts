// Shared OneTab settings defaults extracted from the original bundles.
(function () {
  const defaults = {
    startupLaunch: "displayOneTab",
    browserAction: "sendTabsInWindow",
    pinnedTabs: "ignore",
    duplicates: "allow",
    lastManualPopupSectionSelection: "tabGroup",
    popupIncludePinnedTabs: "false",
    popupIncludeGroupedTabs: "true",
    popupIncludeAlreadyStoredTabs: "true",
    popupOpenOneTabAfterStoringTabs: "true",
    popupDontClosePinnedTabs: "true",
    popupDontCloseGroupedTabs: "false",
    popupDontCloseTabsFromExcludedDomains: "true",
    popupMergeCloseTabsAfter: "true",
    navColWidth: "300",
    navColExpanded: "false",
    quickAccessColWidth: "220",
    quickAccessColExpanded: "false",
    quickAccessColSection: "quickList",
    oneTabTabPinned: "true",
    "popupCreateNewGroupInside-tab": "false",
    "popupCreateNewGroupInside-tabGroup": "true",
    "popupCreateNewGroupInside-window": "false",
    urlDisplay: "none",
    theme: "auto",
    defaultWindowGroupOpenType: "newWindow",
    autoActionOnOpen: "trash",
    switchToOpenedTab: "false",
    displayContextMenu: "true",
    discardNonActiveTabOnOpen: "false",
    navColTreeFilter: {
      namedOnly: true,
      foldersOnly: false,
      hideArchived: false,
    },
    copyToClipboardFormat: "richText",
    moveOneTabToCurrentWindowOnOpen: "false",
    shareExpiryPeriod: "30d",
    shareIncludeNotes: "true",
    shareIncludeRatings: "true",
    v2HelpShown: "false",
  };

  (globalThis as any).getOneTabDefaultSettings = function getOneTabDefaultSettings() {
    return {
      ...defaults,
      navColTreeFilter: { ...defaults.navColTreeFilter },
    };
  };
})();
