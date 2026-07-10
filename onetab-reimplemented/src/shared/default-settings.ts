export interface OneTabDefaultSettings {
  startupLaunch: string;
  browserAction: string;
  pinnedTabs: string;
  duplicates: string;
  lastManualPopupSectionSelection: string;
  popupIncludePinnedTabs: string;
  popupIncludeGroupedTabs: string;
  popupIncludeAlreadyStoredTabs: string;
  popupOpenOneTabAfterStoringTabs: string;
  popupDontClosePinnedTabs: string;
  popupDontCloseGroupedTabs: string;
  popupDontCloseTabsFromExcludedDomains: string;
  popupMergeCloseTabsAfter: string;
  navColWidth: string;
  navColExpanded: string;
  quickAccessColWidth: string;
  quickAccessColExpanded: string;
  quickAccessColSection: string;
  oneTabTabPinned: string;
  "popupCreateNewGroupInside-tab": string;
  "popupCreateNewGroupInside-tabGroup": string;
  "popupCreateNewGroupInside-window": string;
  urlDisplay: string;
  theme: string;
  defaultWindowGroupOpenType: string;
  autoActionOnOpen: string;
  switchToOpenedTab: string;
  displayContextMenu: string;
  discardNonActiveTabOnOpen: string;
  navColTreeFilter: {
    namedOnly: boolean;
    foldersOnly: boolean;
    hideArchived: boolean;
  };
  copyToClipboardFormat: string;
  moveOneTabToCurrentWindowOnOpen: string;
  shareExpiryPeriod: string;
  shareIncludeNotes: string;
  shareIncludeRatings: string;
  v2HelpShown: string;
}

const defaultSettings: OneTabDefaultSettings = {
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

export function getOneTabDefaultSettings(): OneTabDefaultSettings {
  return {
    ...defaultSettings,
    navColTreeFilter: { ...defaultSettings.navColTreeFilter },
  };
}
