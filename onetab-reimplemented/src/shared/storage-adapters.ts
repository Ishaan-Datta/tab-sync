export interface OneTabLocalStorageAdapterLike {
  remove(key: string): Promise<void>;
  put(key: string, value: unknown): Promise<void>;
  Wo(values: Record<string, unknown>): Promise<void>;
  get(key: string): Promise<unknown>;
  getAll(keys: string[] | null): Promise<Record<string, unknown>>;
  clearAll(): Promise<void>;
}

export interface OneTabSessionStorageAdapterLike {
  put(key: string, value: unknown): Promise<void>;
  get(key: string): Promise<unknown>;
  Lp(key: string): Promise<unknown>;
  getAll(): Promise<Record<string, unknown>>;
  remove(key: string): Promise<void>;
  clearAll(): Promise<void>;
}

export class OneTabLocalStorageAdapter implements OneTabLocalStorageAdapterLike {
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

  async getAll(keys: string[] | null) {
    return await chrome.storage.local.get(keys);
  }

  async clearAll() {
    await chrome.storage.local.clear();
  }
}

export class OneTabSessionStorageAdapter implements OneTabSessionStorageAdapterLike {
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
    await chrome.storage.session.remove(key);
  }

  async clearAll() {
    await chrome.storage.session.clear();
  }
}

export function createOneTabLocalStorageAdapter() {
  return new OneTabLocalStorageAdapter();
}

export function createOneTabSessionStorageAdapter() {
  return new OneTabSessionStorageAdapter();
}
