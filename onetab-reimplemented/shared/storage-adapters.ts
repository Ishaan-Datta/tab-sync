// Shared Chrome storage adapters extracted from the original bundles.
(function () {
  class OneTabLocalStorageAdapter {
    async remove(key: string) {
      await chrome.storage.local.remove(key);
    }

    async put(key: string, value: unknown) {
      await chrome.storage.local.set({ [key]: value });
    }

    async Wo(values: Record<string, unknown>) {
      await chrome.storage.local.set(values);
    }

    async get(key: string) {
      return (await chrome.storage.local.get([key]))[key];
    }

    async getAll(keys: string[]) {
      return await chrome.storage.local.get(keys);
    }

    async clearAll() {
      await chrome.storage.local.clear();
    }
  }

  class OneTabSessionStorageAdapter {
    async put(key: string, value: unknown) {
      await chrome.storage.session.set({ [key]: value });
    }

    async get(key: string) {
      return (await chrome.storage.session.get([key]))[key];
    }

    async Lp(key: string) {
      const value = (await chrome.storage.session.get([key]))[key];
      await this.remove(key);
      return value;
    }

    async getAll() {
      return await chrome.storage.session.get(null);
    }

    async remove(key: string) {
      return await chrome.storage.session.remove(key);
    }

    async clearAll() {
      await chrome.storage.session.clear();
    }
  }

  (globalThis as any).createOneTabLocalStorageAdapter = function () {
    return new OneTabLocalStorageAdapter();
  };

  (globalThis as any).createOneTabSessionStorageAdapter = function () {
    return new OneTabSessionStorageAdapter();
  };
})();
