// Shared Chrome storage adapters extracted from the original bundles.
(function () {
  class OneTabLocalStorageAdapter {
    async remove(key) {
      await chrome.storage.local.remove(key);
    }

    async put(key, value) {
      await chrome.storage.local.set({ [key]: value });
    }

    async Wo(values) {
      await chrome.storage.local.set(values);
    }

    async get(key) {
      return (await chrome.storage.local.get([key]))[key];
    }

    async getAll(keys) {
      return await chrome.storage.local.get(keys);
    }

    async clearAll() {
      await chrome.storage.local.clear();
    }
  }

  class OneTabSessionStorageAdapter {
    async put(key, value) {
      await chrome.storage.session.set({ [key]: value });
    }

    async get(key) {
      return (await chrome.storage.session.get([key]))[key];
    }

    async Lp(key) {
      const value = (await chrome.storage.session.get([key]))[key];
      await this.remove(key);
      return value;
    }

    async getAll() {
      return await chrome.storage.session.get(null);
    }

    async remove(key) {
      return await chrome.storage.session.remove(key);
    }

    async clearAll() {
      await chrome.storage.session.clear();
    }
  }

  globalThis.createOneTabLocalStorageAdapter = function () {
    return new OneTabLocalStorageAdapter();
  };

  globalThis.createOneTabSessionStorageAdapter = function () {
    return new OneTabSessionStorageAdapter();
  };
})();
