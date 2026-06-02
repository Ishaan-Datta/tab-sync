import browser from "webextension-polyfill";

export default defineBackground(() => {
  browser.tabs.create({
    url: browser.runtime.getURL("/app.html"),
  });
});
