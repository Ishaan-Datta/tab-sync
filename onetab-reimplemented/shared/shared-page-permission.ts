(globalThis as any).runOneTabSharedPagePermissionBundle = function runOneTabSharedPagePermissionBundle() {
const {
  requestOneTabPermission: Ze,
  runWhenDomReady: yt,
  sharedPageUrlPattern: Yt,
} = (globalThis as any).createOneTabPermissionPageCommon({
  currentVersion: "2.14",
  oneTabUrl: "https://www.one-tab.com",
  proxyLoggingEnabled: false,
  requestTabGroupsPermissionIfNecessaryDisabled: false,
});
yt(() => {
  document.getElementById("approveButton")!.onclick = async () => {
    if (await Ze()) {
      let [n] = await chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }),
        r = (await chrome.tabs.query({})).filter((o: any) => Yt.test(o.url));
      if (r.length) {
        let o = r[0].id,
          i = await chrome.tabs.get(o);
        (await chrome.windows.update(i.windowId, { focused: !0 }),
          await chrome.tabs.update(o, { active: !0 }),
          r
            .filter((a: any) => !a.discarded)
            .forEach((a: any) => chrome.tabs.reload(a.id, {})));
      }
      await chrome.tabs.remove(n.id);
    }
  };
});
};
