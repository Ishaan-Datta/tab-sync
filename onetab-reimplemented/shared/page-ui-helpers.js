globalThis.createOneTabPageUiHelpers = function createOneTabPageUiHelpers(deps) {
  function createSpinner({ style = {}, uh = 7 }) {
    const { div, range } = deps;
    let spinner = div({
      className: "spinner",
      style: { opacity: "1", ...style },
      children: Object.fromEntries(
        range(uh).map((index) => [index, document.createElement("div")]),
      ),
    }).i;
    return (spinner.animate([{ opacity: "0" }, { opacity: "1" }], 100), spinner);
  }

  async function renderLocationPath({
    h,
    itemId,
    fontSize,
    Qo,
    jl = !0,
    prefix,
  }) {
    const { core, element, getLocationText, intersperse, isRtl, translate } = deps;
    (prefix || (prefix = translate("locationColon")), await h.ke());
    let path = await h.Hn(itemId, Qo);
    return element("span", {
      style: { fontSize: fontSize ?? "12px" },
      children: {
        ...(jl && { Gw: element("span", { textContent: `${prefix}  ` }) }),
        ...intersperse(
          path.map((location, index) => ({
            [`loc${index}`]: element("span", {
              dir: "auto",
              style: { cursor: "pointer" },
              textContent: getLocationText({ groupId: location.id, h, l: location }),
              onclick: async () => {
                await core.ec({
                  itemId: location.id,
                  Zi: index === 0 ? location.id : path[index - 1].id,
                });
              },
            }),
          })),
          () => element("span", { textContent: `  ${isRtl() ? "➝" : "⭠"}  ` }),
        ),
      },
    });
  }

  async function renderGroupPaths({ groups, h, he, oe }) {
    const {
      createColorIndicator,
      createLightDarkPicture,
      div,
      isFolder,
      isRoot,
      isRtl,
      isTabGroup,
      maybeArray,
      SelectableItem,
      translate,
    } = deps;
    return (await Promise.all(groups.map(async (group) => [...(await h.Hn(group.id)), group]))).map((path) =>
      div({
        className: "groupPath",
        children: path.map((location, index) =>
          div({
            style: {
              display: "inline-block",
              textIndent: 0,
              whiteSpace: "nowrap",
            },
            p: div({
              style: { display: "flex", alignItems: "flex-start" },
              children: [
                div({
                  style: {
                    display: "inline-block",
                    position: "relative",
                    top: "4px",
                    visibility: index === 0 ? "hidden" : "visible",
                  },
                  textContent:
                    index === 0
                      ? `${isRtl() ? "➝" : "⭠"}`
                      : `  ${isRtl() ? "➝" : "⭠"}  `,
                }),
                ...maybeArray(
                  isFolder(location),
                  div({
                    className: "tree-item-text",
                    p: createLightDarkPicture(
                      {
                        width: "13px",
                        height: "13px",
                        style: {
                          display: "inline-block",
                          marginInlineStart: `${index === 0 ? 0 : 16}px`,
                          marginInlineEnd: "4px",
                          position: "relative",
                          top: "6px",
                        },
                      },
                      (light) => `images/folder${light ? "" : "-dark"}.png`,
                    ),
                  }),
                ),
                ...maybeArray(
                  isTabGroup(location),
                  div({
                    style: { display: "inline-block", paddingTop: "4px" },
                    p: createColorIndicator({
                      color: location.color,
                      dimension: "11px",
                      $: {
                        position: "relative",
                        top: "1px",
                        marginInlineStart: `${index === 0 ? 0 : 7}px`,
                        marginInlineEnd: "4px",
                      },
                    }),
                  }),
                ),
                new SelectableItem({
                  padding: "2px",
                  marginInline: "0px -4px",
                  marginBlock: "0px 0px",
                  label:
                    location.label ||
                    (isRoot(location) ? translate("all") : translate("untitled")),
                  oe,
                  qd: () => he(location),
                }),
              ],
            }),
          }),
        ),
      }),
    );
  }

  async function writeClipboard({ kf, Tf }) {
    return navigator.clipboard.write([
      new ClipboardItem({
        ...(kf && { "text/plain": kf() }),
        ...(Tf && { "text/html": Tf() }),
      }),
    ]);
  }

  async function checkCoreReadyOrShowRestart(container) {
    const { core, div, element, translate } = deps;
    try {
      return (await core.corePing(), !0);
    } catch {
      let restart = div({
        style: { padding: "40px" },
        children: {
          Dw: element("div", {
            children: {
              a: element("span", { textContent: translate("oneTabRestartRequired") + " " }),
              b: element("a", {
                style: { cursor: "pointer", textDecoration: "underline" },
                onclick: () => chrome.runtime.reload(),
                textContent: translate("clickHereToContinue"),
              }),
            },
          }),
          Pw: element("div", {
            p: element("div", {
              style: { paddingTop: "20px" },
              textContent: translate("mayNeedToRestartBrowser"),
            }).i,
          }),
        },
      });
      return (container.replaceChildren(restart.i), !1);
    }
  }

  async function reconcileViews({
    Hi = !1,
    Me,
    views,
    ia,
    pn,
    sa,
    ea,
    Lw,
    Ew,
    bc,
    pf = 10,
  }) {
    const { delay } = deps;
    let interrupted = !1,
      createdCount = 0;
    for (let index = 0; index < ea.length; index++) {
      let item = ea[index],
        existingIndex = views.findIndex(
          (view, viewIndex) => viewIndex >= index && ia(view) === item.id,
        ),
        view = views[existingIndex],
        node = view && pn(view);
      if (!Hi && node && !view?.tu)
        (existingIndex > index && (views.splice(existingIndex, 1), views.splice(index, 0, view)),
          Me.children.item(index) !== node && Me.insertBefore(node, Me.children.item(index)),
          node.classList.remove("fadeOutTransition", "fadedOut"));
      else {
        if ((createdCount++, Lw?.())) {
          interrupted = !0;
          break;
        }
        let replacedView = existingIndex >= index ? views[existingIndex] : void 0;
        if ((createdCount % pf === 0 && (await delay(0)), (view = await sa(item.id, item.index)), view)) {
          let viewNode = pn(view);
          if (!viewNode) (view.De?.({ pi: !0 }), (view = replacedView));
          else {
            let insertIndex = index;
            if (replacedView) {
              let oldIndex = views.indexOf(replacedView);
              oldIndex >= 0 &&
                (replacedView.De?.({ pi: !0 }),
                views.splice(oldIndex, 1),
                oldIndex < insertIndex && insertIndex--);
            }
            (Me.insertBefore(viewNode, Me.children.item(insertIndex)),
              views.splice(insertIndex, 0, view));
          }
        } else replacedView && (view = replacedView);
      }
      view && ((view.index = item.index), bc?.(view));
    }
    if ((Lw?.() && (interrupted = !0), interrupted)) {
      Ew();
      return;
    }
    for (; views.length > ea.length; ) {
      let view = views[views.length - 1];
      if (!view) {
        views.splice(views.length - 1, 1);
        continue;
      }
      let node = view && pn(view),
        detached = !node || node.parentElement !== Me;
      (view.De({ pi: detached }), views.splice(views.length - 1, 1));
    }
    let nodes = new Set(views.map((view) => pn(view)).filter(Boolean));
    [...Me.children].forEach((node) => {
      nodes.has(node) || node.remove();
    });
  }

  async function loadImages(urls) {
    return Object.fromEntries(
      await Promise.all(
        urls.map(
          (url) =>
            new Promise((resolve) => {
              let image = new Image();
              ((image.onload = () => resolve([url, image])), (image.src = url));
            }),
        ),
      ),
    );
  }

  function returnToOneTabButton() {
    const { core, createLightDarkPicture, div, isRtl, translate } = deps;
    return div({
      style: {
        flex: "0 1 auto",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginInlineStart: "auto",
        gap: "8px",
      },
      onclick: async () => {
        (await core.dl({}), window.close());
      },
      children: [
        createLightDarkPicture(
          {
            dimension: "10px",
            style: { transform: `rotate(${isRtl() ? 90 : 270}deg)` },
          },
          (light) => `images/down-arrow${light ? "" : "-dark"}.png`,
        ),
        div({ textContent: translate("returnToOneTab") }),
      ],
    });
  }

  function isFullyInViewport(element, container) {
    const { top, bottom, height } = element.getBoundingClientRect(),
      containerRect = container.getBoundingClientRect();
    return top <= containerRect.top
      ? containerRect.top - top <= height
      : bottom - containerRect.bottom <= height;
  }

  async function createExpandedItemCache(groupId) {
    const { isFolder, ItemCache } = deps;
    let cache = new ItemCache(),
      item = await cache.ht(groupId);
    return (isFolder(item) || (await cache.Te({ groupId })), cache);
  }

  function isEscapeKey(event) {
    return !event.isComposing && (event.key === "Escape" || event.key === "Esc");
  }

  function addEventListenerAttachment(target, type, listener, options = !1) {
    const { EventAttachment } = deps;
    return new EventAttachment({
      listener,
      Ka: () => target.addEventListener(type, listener, options),
      Bs: () => target.removeEventListener(type, listener, options),
    });
  }

  function pointerOver(target, listener) {
    return addEventListenerAttachment(target, "pointerover", listener);
  }

  function pointerMove(target, listener) {
    return addEventListenerAttachment(target, "pointermove", listener);
  }

  function pointerLeave(target, listener) {
    return addEventListenerAttachment(target, "pointerleave", listener);
  }

  return {
    addEventListenerAttachment,
    checkCoreReadyOrShowRestart,
    createExpandedItemCache,
    createSpinner,
    isEscapeKey,
    isFullyInViewport,
    loadImages,
    pointerLeave,
    pointerMove,
    pointerOver,
    reconcileViews,
    renderGroupPaths,
    renderLocationPath,
    returnToOneTabButton,
    writeClipboard,
  };
};
