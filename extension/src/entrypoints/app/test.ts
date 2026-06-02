type Id = string;

export type TabItem = {
  id: Id;
  type: "tab";
  title: string;
  url: string;
  note?: string;
};

export type GroupItem = {
  id: Id;
  type: "group";
  label: string;
  note?: string;
  collapsed?: boolean;
  tabs: TabItem[];
};

export type CenterColState = {
  groups: GroupItem[];
};

export type StorageAPI = {
  moveTab(args: { tabId: Id; fromGroupId: Id; toGroupId: Id; toIndex: number }): Promise<void>;
  reorderGroup(args: { groupId: Id; toIndex: number }): Promise<void>;
  createGroupWithTab(args: {
    tabId: Id;
    fromGroupId: Id;
    toGroupIndex: number;
  }): Promise<{ groupId: Id }>;
  setGroupCollapsed(args: { groupId: Id; collapsed: boolean }): Promise<void>;
  updateGroupLabel(args: { groupId: Id; label: string }): Promise<void>;
  updateGroupNote(args: { groupId: Id; note: string }): Promise<void>;
  updateTabNote(args: { groupId: Id; tabId: Id; note: string }): Promise<void>;
};

export type CenterColOptions = {
  mount: HTMLElement;
  state: CenterColState;
  storage: StorageAPI;
};

type DragPayload =
  | {
      kind: "tab";
      tabId: Id;
      fromGroupId: Id;
      sourceEl: HTMLElement;
      ghostEl?: HTMLElement;
    }
  | {
      kind: "group";
      groupId: Id;
      sourceEl: HTMLElement;
      ghostEl?: HTMLElement;
    };

type RowDropPosition = "before" | "after";

const DROP_MARKER_ID = "centercol-drop-marker";

export class OneTabCenterColMinimal {
  private mount: HTMLElement;
  private state: CenterColState;
  private storage: StorageAPI;
  private drag: DragPayload | null = null;
  private root!: HTMLElement;

  constructor(options: CenterColOptions) {
    this.mount = options.mount;
    this.state = options.state;
    this.storage = options.storage;
    this.injectStyles();
    this.render();
  }

  render(): void {
    this.mount.replaceChildren();
    this.root = el("div", { className: "center-col" });

    const list = el("div", { className: "group-list", dataset: { role: "group-list" } });
    this.attachListLevelDnD(list);

    this.state.groups.forEach((group, index) => {
      if (index === 0) {
        list.appendChild(this.renderGroupGap({ beforeGroupIndex: 0 }));
      }
      list.appendChild(this.renderGroup(group));
      list.appendChild(this.renderGroupGap({ beforeGroupIndex: index + 1 }));
    });

    this.root.appendChild(list);
    this.mount.appendChild(this.root);
  }

  private renderGroupGap({ beforeGroupIndex }: { beforeGroupIndex: number }): HTMLElement {
    const gap = el("div", {
      className: "group-gap-hitbox",
      dataset: { beforeGroupIndex: String(beforeGroupIndex) },
    });
    return gap;
  }

  private renderGroup(group: GroupItem): HTMLElement {
    const groupEl = el("section", {
      className: "tabGroup group-row",
      dataset: { groupId: group.id },
      draggable: true,
    });

    const groupBody = el("div", {
      className: "tabGroupBody group-body",
      tabIndex: 0 as unknown as boolean,
    });

    const header = el("div", { className: "group-header" });
    const twisty = el("button", {
      className: "twisty",
      textContent: group.collapsed ? "▸" : "▾",
      title: group.collapsed ? "Expand group" : "Collapse group",
    });
    twisty.addEventListener("click", async (event) => {
      event.stopPropagation();
      group.collapsed = !group.collapsed;
      await this.storage.setGroupCollapsed({ groupId: group.id, collapsed: !!group.collapsed });
      this.render();
    });

    const titleWrap = el("div", { className: "group-title-wrap" });
    const label = el("div", {
      className: "tabGroupLabelText group-label oneLineWithEllipsis",
      textContent: group.label || "Untitled group",
      title: group.label || "Untitled group",
    });
    label.addEventListener("dblclick", async () => {
      const next = prompt("Rename group", group.label) ?? group.label;
      if (next !== group.label) {
        group.label = next;
        await this.storage.updateGroupLabel({ groupId: group.id, label: next });
        this.render();
      }
    });

    const count = el("span", {
      className: "group-count tabCount",
      textContent: String(group.tabs.length),
      title: `${group.tabs.length} tabs`,
    });

    titleWrap.append(label, count);
    header.append(twisty, titleWrap);

    const note = el("div", {
      className: "group-note tree-item-text",
      textContent: group.note?.trim() || "",
    });
    note.style.display = group.note?.trim() ? "block" : "none";
    note.addEventListener("dblclick", async () => {
      const next = prompt("Edit group note", group.note ?? "") ?? group.note ?? "";
      if (next !== (group.note ?? "")) {
        group.note = next;
        await this.storage.updateGroupNote({ groupId: group.id, note: next });
        this.render();
      }
    });

    const children = el("div", {
      className: "treeChildrenContainer tabs-wrap",
      style: { display: group.collapsed ? "none" : "block" },
      dataset: { groupId: group.id },
    });

    group.tabs.forEach((tab, index) => {
      children.appendChild(this.renderTabInsertionHitbox(group, index));
      children.appendChild(this.renderTab(group, tab));
    });
    children.appendChild(this.renderTabInsertionHitbox(group, group.tabs.length));

    this.attachGroupDnD(groupEl, group);
    this.attachGroupChildrenDnD(children, group);

    groupBody.append(header, note, children);
    groupEl.appendChild(groupBody);
    return groupEl;
  }

  private renderTabInsertionHitbox(group: GroupItem, insertIndex: number): HTMLElement {
    return el("div", {
      className: "tab-insert-hitbox",
      dataset: { groupId: group.id, insertIndex: String(insertIndex) },
    });
  }

  private renderTab(group: GroupItem, tab: TabItem): HTMLElement {
    const outer = el("div", {
      className: "tab treeItem",
      dataset: { tabId: tab.id, groupId: group.id },
      draggable: true,
    });

    const inner = el("div", { className: "tabInner" });
    const fav = el("div", { className: "favIconDiv tabLinkText", textContent: "•" });

    const link = el("a", {
      className: "tabLink tabLinkText",
      href: tab.url,
      target: "_blank",
      rel: "noreferrer noopener",
      title: tab.url,
    });
    const title = el("span", {
      className: "tabLinkText tabLinkTextStripesPossible oneLineWithEllipsis",
      textContent: tab.title || "Untitled",
    });
    link.appendChild(title);

    const inlineMeta = el("div", { className: "tab-inline-meta oneLineWithEllipsis" });
    const url = el("a", {
      className: "tabUrlText oneLineWithEllipsis",
      href: tab.url,
      target: "_blank",
      rel: "noreferrer noopener",
      textContent: tab.url,
      title: tab.url,
    });
    inlineMeta.appendChild(url);

    if (tab.note?.trim()) {
      const note = el("span", {
        className: "tab-note-inline oneLineWithEllipsis",
        textContent: tab.note.trim(),
        title: tab.note.trim(),
      });
      inlineMeta.appendChild(el("span", { className: "tab-meta-sep", textContent: "•" }));
      inlineMeta.appendChild(note);
    }

    inlineMeta.addEventListener("dblclick", async () => {
      const next = prompt("Edit tab note", tab.note ?? "") ?? tab.note ?? "";
      if (next !== (tab.note ?? "")) {
        tab.note = next;
        await this.storage.updateTabNote({ groupId: group.id, tabId: tab.id, note: next });
        this.render();
      }
    });

    inner.append(fav, link, inlineMeta);
    outer.appendChild(inner);

    this.attachTabDnD(outer, group, tab);
    return outer;
  }

  private attachTabDnD(row: HTMLElement, group: GroupItem, tab: TabItem): void {
    row.addEventListener("dragstart", (event) => {
      this.drag = {
        kind: "tab",
        tabId: tab.id,
        fromGroupId: group.id,
        sourceEl: row,
      };
      row.classList.add("drag-source");
      document.body.classList.add("dnd-no-select");

      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData(
          "application/x-onetab-tab",
          JSON.stringify({
            tabId: tab.id,
            fromGroupId: group.id,
          }),
        );
      }

      this.drag.ghostEl = createDragGhost(`Tab: ${tab.title}`);
      if (event.dataTransfer && this.drag.ghostEl) {
        document.body.appendChild(this.drag.ghostEl);
        event.dataTransfer.setDragImage(this.drag.ghostEl, 18, 7);
      }
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("drag-source");
      document.body.classList.remove("dnd-no-select");
      this.cleanupDropUI();
      this.cleanupGhost();
      this.drag = null;
    });
  }

  private attachGroupDnD(groupEl: HTMLElement, group: GroupItem): void {
    groupEl.addEventListener("dragstart", (event) => {
      const startedFromTab = (event.target as HTMLElement | null)?.closest(".tab");
      if (startedFromTab) return;

      this.drag = {
        kind: "group",
        groupId: group.id,
        sourceEl: groupEl,
      };
      groupEl.classList.add("drag-source");
      document.body.classList.add("dnd-no-select");

      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData(
          "application/x-onetab-group",
          JSON.stringify({ groupId: group.id }),
        );
      }

      this.drag.ghostEl = createDragGhost(`Group: ${group.label}`);
      if (event.dataTransfer && this.drag.ghostEl) {
        document.body.appendChild(this.drag.ghostEl);
        event.dataTransfer.setDragImage(this.drag.ghostEl, 18, 12);
      }
    });

    groupEl.addEventListener("dragend", () => {
      groupEl.classList.remove("drag-source");
      document.body.classList.remove("dnd-no-select");
      this.cleanupDropUI();
      this.cleanupGhost();
      this.drag = null;
    });
  }

  private attachGroupChildrenDnD(children: HTMLElement, group: GroupItem): void {
    children.addEventListener("dragover", (event) => {
      if (!this.drag || this.drag.kind !== "tab") return;

      const hitbox = (event.target as HTMLElement | null)?.closest(
        ".tab-insert-hitbox",
      ) as HTMLElement | null;
      if (!hitbox) return;

      event.preventDefault();
      this.showTabPlaceholder(hitbox);
    });

    children.addEventListener("drop", async (event) => {
      if (!this.drag || this.drag.kind !== "tab") return;

      const hitbox = (event.target as HTMLElement | null)?.closest(
        ".tab-insert-hitbox",
      ) as HTMLElement | null;
      if (!hitbox) return;

      event.preventDefault();
      const toIndex = Number(hitbox.dataset.insertIndex ?? group.tabs.length);
      await this.moveTab(this.drag.tabId, this.drag.fromGroupId, group.id, toIndex);
      this.cleanupDropUI();
      this.drag = null;
      this.render();
    });

    children.addEventListener("dragleave", (event) => {
      const related = event.relatedTarget as Node | null;
      if (related && children.contains(related)) return;
      this.cleanupMarkerOnly();
    });
  }

  private attachListLevelDnD(list: HTMLElement): void {
    list.addEventListener("dragover", (event) => {
      if (!this.drag) return;

      if (this.drag.kind === "tab") {
        const gap = (event.target as HTMLElement | null)?.closest(
          ".group-gap-hitbox",
        ) as HTMLElement | null;
        if (!gap) return;
        event.preventDefault();
        this.showNewGroupPlaceholder(gap);
        return;
      }

      if (this.drag.kind === "group") {
        const groupEl = (event.target as HTMLElement | null)?.closest(
          ".group-row",
        ) as HTMLElement | null;
        if (!groupEl) return;
        if (groupEl.dataset.groupId === this.drag.groupId) return;
        event.preventDefault();
        const position = getBeforeAfterFromPointer(event, groupEl);
        this.showGroupReorderMarker(groupEl, position);
      }
    });

    list.addEventListener("drop", async (event) => {
      if (!this.drag) return;

      if (this.drag.kind === "tab") {
        const gap = (event.target as HTMLElement | null)?.closest(
          ".group-gap-hitbox",
        ) as HTMLElement | null;
        if (!gap) return;
        event.preventDefault();
        const toGroupIndex = Number(gap.dataset.beforeGroupIndex ?? this.state.groups.length);
        await this.createGroupWithTab(this.drag.tabId, this.drag.fromGroupId, toGroupIndex);
        this.cleanupDropUI();
        this.drag = null;
        this.render();
        return;
      }

      if (this.drag.kind === "group") {
        const groupEl = (event.target as HTMLElement | null)?.closest(
          ".group-row",
        ) as HTMLElement | null;
        if (!groupEl) return;
        if (groupEl.dataset.groupId === this.drag.groupId) return;
        event.preventDefault();
        const targetIndex = this.state.groups.findIndex((g) => g.id === groupEl.dataset.groupId);
        const position = getBeforeAfterFromPointer(event, groupEl);
        const toIndex = position === "after" ? targetIndex + 1 : targetIndex;
        await this.moveGroup(this.drag.groupId, toIndex);
        this.cleanupDropUI();
        this.drag = null;
        this.render();
      }
    });

    list.addEventListener("dragleave", (event) => {
      const related = event.relatedTarget as Node | null;
      if (related && list.contains(related)) return;
      this.cleanupDropUI();
    });
  }

  private async moveTab(
    tabId: Id,
    fromGroupId: Id,
    toGroupId: Id,
    rawToIndex: number,
  ): Promise<void> {
    const fromGroup = this.state.groups.find((g) => g.id === fromGroupId);
    const toGroup = this.state.groups.find((g) => g.id === toGroupId);
    if (!fromGroup || !toGroup) return;

    const fromIndex = fromGroup.tabs.findIndex((t) => t.id === tabId);
    if (fromIndex === -1) return;

    const [tab] = fromGroup.tabs.splice(fromIndex, 1);
    let toIndex = rawToIndex;
    if (fromGroupId === toGroupId && fromIndex < rawToIndex) {
      toIndex -= 1;
    }
    toIndex = clamp(toIndex, 0, toGroup.tabs.length);
    toGroup.tabs.splice(toIndex, 0, tab);

    await this.storage.moveTab({ tabId, fromGroupId, toGroupId, toIndex });
  }

  private async moveGroup(groupId: Id, rawToIndex: number): Promise<void> {
    const fromIndex = this.state.groups.findIndex((g) => g.id === groupId);
    if (fromIndex === -1) return;

    const [group] = this.state.groups.splice(fromIndex, 1);
    let toIndex = rawToIndex;
    if (fromIndex < rawToIndex) toIndex -= 1;
    toIndex = clamp(toIndex, 0, this.state.groups.length);
    this.state.groups.splice(toIndex, 0, group);

    await this.storage.reorderGroup({ groupId, toIndex });
  }

  private async createGroupWithTab(
    tabId: Id,
    fromGroupId: Id,
    rawToGroupIndex: number,
  ): Promise<void> {
    const fromGroup = this.state.groups.find((g) => g.id === fromGroupId);
    if (!fromGroup) return;

    const fromTabIndex = fromGroup.tabs.findIndex((t) => t.id === tabId);
    if (fromTabIndex === -1) return;

    const [tab] = fromGroup.tabs.splice(fromTabIndex, 1);
    const toGroupIndex = clamp(rawToGroupIndex, 0, this.state.groups.length);
    const backend = await this.storage.createGroupWithTab({ tabId, fromGroupId, toGroupIndex });

    const newGroup: GroupItem = {
      id: backend.groupId,
      type: "group",
      label: "Untitled group",
      collapsed: false,
      tabs: [tab],
    };

    this.state.groups.splice(toGroupIndex, 0, newGroup);
  }

  private showTabPlaceholder(hitbox: HTMLElement): void {
    this.cleanupMarkerOnly();
    const placeholder = this.buildTabPlaceholder();
    placeholder.id = DROP_MARKER_ID;
    hitbox.parentElement?.insertBefore(placeholder, hitbox.nextSibling);
  }

  private showNewGroupPlaceholder(gap: HTMLElement): void {
    this.cleanupMarkerOnly();
    const placeholder = el("div", { id: DROP_MARKER_ID, className: "group-create-placeholder" });
    placeholder.appendChild(el("div", { className: "group-create-placeholder-body" }));
    gap.parentElement?.insertBefore(placeholder, gap.nextSibling);
  }

  private showGroupReorderMarker(groupEl: HTMLElement, position: RowDropPosition): void {
    this.cleanupMarkerOnly();
    const marker = el("div", { id: DROP_MARKER_ID, className: "group-reorder-marker" });
    if (position === "before") {
      groupEl.parentElement?.insertBefore(marker, groupEl);
    } else {
      groupEl.parentElement?.insertBefore(marker, groupEl.nextSibling);
    }
  }

  private buildTabPlaceholder(): HTMLElement {
    const tab = el("div", { className: "tab tab-drop-placeholder" });
    const inner = el("div", { className: "tabInner" });
    const fav = el("div", { className: "favIconDiv tabLinkText drop-favicon", textContent: "•" });
    const title = el("div", { className: "tabLink tabLinkText drop-title" });
    const meta = el("div", { className: "tab-inline-meta drop-meta" });
    inner.append(fav, title, meta);
    tab.append(inner);
    return tab;
  }

  private cleanupMarkerOnly(): void {
    document.getElementById(DROP_MARKER_ID)?.remove();
  }

  private cleanupDropUI(): void {
    this.cleanupMarkerOnly();
  }

  private cleanupGhost(): void {
    this.drag?.ghostEl?.remove();
  }

  private injectStyles(): void {
    if (document.getElementById("onetab-minimal-v3-styles")) return;

    const style = document.createElement("style");
    style.id = "onetab-minimal-v3-styles";
    style.textContent = `
      :root {
        --link-color: #94BBF9;
        --text-color: #d2d5d9;
        --text-color-weak: #adadad;
        --bg-color: #2b2b2e;
        --col-bg-color: #222222;
        --header-bg-color: #303035;
        --border-color: #545454;
        --stronger-border-color: #656565;
        --focus-outline-color: #8AB4F8;
        --flag-hover-bg-color: #354d72;
        --red-flag-hover-bg-color: #5f3236;
        --drop-area-border-color: var(--link-color);
        --drop-area-border-style: dotted;
        --drop-area-border: 3px dotted var(--link-color);
        --drop-area-gradient: repeating-linear-gradient(-45deg, rgba(43, 43, 43, 1), rgba(43, 43, 43, 1) 10px, rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0) 20px);
        --tab-group-box-shadow: 0 -6px 8px -6px rgba(0, 0, 0, 0.05), 0 -3px 5px -2px rgba(0, 0, 0, 0.03), 0 15px 20px -5px rgba(0, 0, 0, 0.2), 0 25px 35px -10px rgba(0, 0, 0, 0.15), 0 0 12px 1px rgba(0, 0, 0, 0.05);
        --inner-tab-group-box-shadow: 0 -6px 8px -6px rgba(0, 0, 0, 0.025), 0 -3px 5px -2px rgba(0, 0, 0, 0.015), 0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 25px 35px -10px rgba(0, 0, 0, 0.075), 0 0 12px 1px rgba(0, 0, 0, 0.025);
        --tab-group-border: 1px solid rgba(0,0,0,.66);
      }

      body, .center-col {
        background-color: var(--col-bg-color);
        color: var(--text-color);
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
        font-weight: 400;
        font-size: 14px;
      }

      .center-col {
        padding: 10px 12px 18px;
        min-height: 100%;
      }

      .group-list {
        display: block;
      }

      .group-gap-hitbox {
        height: 14px;
        margin: 0 10px;
        position: relative;
      }

      .tabGroup {
        scroll-margin-top: 8px;
        margin: 0 10px;
      }

      .tabGroupBody:not(.centerColFolderHeaderGroup),
      .tab:not(.tabGroupBody *) {
        border-radius: 10px;
        background-color: var(--bg-color);
        box-shadow: var(--tab-group-box-shadow);
        border: var(--tab-group-border);
      }

      .tabGroupBody {
        padding: 10px 0 4px;
      }

      .group-row.drag-source,
      .tab.drag-source {
        opacity: 0.45;
      }

      .group-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 14px 6px;
        user-select: none;
      }

      .twisty {
        border: 0;
        background: transparent;
        color: var(--text-color-weak);
        cursor: pointer;
        padding: 0;
        width: 18px;
        font-size: 15px;
      }

      .group-title-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }

      .tabGroupLabelText {
        color: var(--text-color);
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5em;
        min-height: 1lh;
        text-decoration: none;
      }

      .group-count {
        color: var(--text-color-weak);
        font-size: 12px;
        padding-top: 3px;
      }

      .group-note {
        color: var(--text-color-weak);
        padding: 0 18px 6px 42px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .treeChildrenContainer:not(:empty) {
        padding-bottom: 2px;
      }

      .tabs-wrap {
        padding: 0 0 2px;
      }

      .tab-insert-hitbox {
        height: 8px;
        margin: 0 10px 0 12px;
      }

      .tab {
        margin-inline-start: -18px;
        padding-inline-start: 18px;
        padding-inline-end: 22px;
        margin-bottom: 0;
      }

      .tabInner {
        display: flex;
        align-items: flex-start;
        padding-inline-start: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        position: relative;
        margin-inline-start: 12px;
        min-height: 26px;
      }

      .favIconDiv {
        position: relative;
        top: 0;
        display: flex;
        align-items: center;
        line-height: inherit;
        font-size: inherit;
        height: 1.4em;
        flex: 0 0 auto;
        color: var(--text-color-weak);
      }

      .tabLink {
        flex: 1 1 auto;
        margin-inline-start: 10px;
        margin-inline-end: 12px;
        text-decoration: none;
        min-width: 0;
      }

      .tabLinkText {
        word-break: break-word;
        text-decoration: none;
        font-size: 13px;
        line-height: 1.5em;
        min-height: 1lh;
        color: var(--text-color);
      }

      .oneLineWithEllipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tab-inline-meta {
        flex: 0 1 46%;
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        margin-inline-end: 2px;
        padding-top: 1px;
      }

      .tabUrlText {
        word-break: break-all;
        text-decoration: none;
        font-size: 12px;
        line-height: 1.5em;
        min-height: 1lh;
        color: var(--text-color-weak);
        cursor: pointer;
        direction: ltr;
        unicode-bidi: isolate;
        min-width: 0;
      }

      .tab-note-inline,
      .tab-meta-sep {
        font-size: 12px;
        color: var(--text-color-weak);
        min-width: 0;
      }

      .tab:hover .tabInner {
        background-color: rgba(255,255,255,0.03);
        border-radius: 8px;
      }

      .tab-drop-placeholder {
        border: var(--drop-area-border);
        background: var(--drop-area-gradient);
        border-radius: 10px;
      }

      .drop-title,
      .drop-meta,
      .drop-favicon {
        opacity: 0.55;
      }

      .group-create-placeholder {
        margin: 0 10px;
      }

      .group-create-placeholder-body {
        min-height: 74px;
        border-radius: 10px;
        border: var(--drop-area-border);
        background: var(--drop-area-gradient);
      }

      .group-reorder-marker {
        height: 0;
        border-top: 3px solid var(--drop-area-border-color);
        margin: 4px 22px;
        border-radius: 999px;
      }

      .drag-ghost {
        position: fixed;
        top: -1000px;
        left: -1000px;
        pointer-events: none;
        background: rgba(255,255,255,0.15);
        color: var(--text-color);
        border: 1px solid var(--stronger-border-color);
        border-radius: 8px;
        padding: 5px 9px;
        font: 12px 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
      }

      .dnd-no-select,
      .dnd-no-select * {
        user-select: none;
        -webkit-user-select: none;
      }
    `;

    document.head.appendChild(style);
  }
}

function getBeforeAfterFromPointer(event: DragEvent, target: HTMLElement): RowDropPosition {
  const rect = target.getBoundingClientRect();
  const ratio = (event.clientY - rect.top) / Math.max(rect.height, 1);
  return ratio < 0.5 ? "before" : "after";
}

function createDragGhost(label: string): HTMLElement {
  return el("div", { className: "drag-ghost", textContent: label });
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: {
    id?: string;
    className?: string;
    textContent?: string;
    title?: string;
    href?: string;
    target?: string;
    rel?: string;
    draggable?: boolean;
    dataset?: Record<string, string>;
    style?: Partial<CSSStyleDeclaration>;
    tabIndex?: boolean;
  } = {},
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (options.id) node.id = options.id;
  if (options.className) node.className = options.className;
  if (options.textContent !== undefined) node.textContent = options.textContent;
  if (options.title) node.title = options.title;
  if (options.href && node instanceof HTMLAnchorElement) node.href = options.href;
  if (options.target && node instanceof HTMLAnchorElement) node.target = options.target;
  if (options.rel && node instanceof HTMLAnchorElement) node.rel = options.rel;
  if (options.draggable !== undefined) node.draggable = options.draggable;
  if (options.dataset) Object.assign(node.dataset, options.dataset);
  if (options.style) Object.assign(node.style, options.style);
  return node;
}

export const stubStorage: StorageAPI = {
  async moveTab(args) {
    console.log("moveTab", args);
  },
  async reorderGroup(args) {
    console.log("reorderGroup", args);
  },
  async createGroupWithTab(args) {
    console.log("createGroupWithTab", args);
    return { groupId: `g-${Math.random().toString(36).slice(2)}` };
  },
  async setGroupCollapsed(args) {
    console.log("setGroupCollapsed", args);
  },
  async updateGroupLabel(args) {
    console.log("updateGroupLabel", args);
  },
  async updateGroupNote(args) {
    console.log("updateGroupNote", args);
  },
  async updateTabNote(args) {
    console.log("updateTabNote", args);
  },
};

export const demoState: CenterColState = {
  groups: [
    {
      id: "g1",
      type: "group",
      label: "Reading",
      note: "Explicit group gaps and explicit tab insertion hitboxes.",
      collapsed: false,
      tabs: [
        {
          id: "t1",
          type: "tab",
          title: "Rust Book",
          url: "https://doc.rust-lang.org/book/",
          note: "ownership",
        },
        {
          id: "t2",
          type: "tab",
          title: "MDN Drag and Drop",
          url: "https://developer.mozilla.org/",
        },
      ],
    },
    {
      id: "g2",
      type: "group",
      label: "Work",
      collapsed: false,
      tabs: [
        {
          id: "t3",
          type: "tab",
          title: "Design doc",
          url: "https://example.com/design-doc",
        },
        {
          id: "t4",
          type: "tab",
          title: "Bug tracker",
          url: "https://example.com/bugs",
          note: "repro",
        },
      ],
    },
  ],
};

export function mountOneTabMinimal(container: HTMLElement): OneTabCenterColMinimal {
  return new OneTabCenterColMinimal({
    mount: container,
    state: structuredClone(demoState),
    storage: stubStorage,
  });
}

const app = document.getElementById("app");

if (!app) {
  throw new Error("Missing #app container");
}

mountOneTabMinimal(app);
