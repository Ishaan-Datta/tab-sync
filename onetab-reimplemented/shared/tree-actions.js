globalThis.createOneTabTreeActions = function createOneTabTreeActions(deps) {
  with (deps) {
  async function pi({ parentId: i, we: t, N: e, Ri: s }) {
    let n = Ht();
    return (
      s && (s.L.$a = n),
      await A.Sa({ id: n, parentId: i, we: t, N: e }),
      n
    );
  }
  function Pr(i) {
    let t = i.some((n) => n?.G.l.id === "quickList"),
      e = i.some((n) => n.L.l.id === "trash"),
      s = i.some((n) => dt(n.l) && !n.l.label);
    return [
      ...new Set([
        ...i.map((n) => (dt(n.l) ? n.l.groupType : n.l.type)),
        ...O(e, "trash"),
        ...O(s, "untitled"),
        ...O(t, "isTreeItemInQuickListRoot"),
      ]),
    ];
  }
  function ks({ Vc: i, view: t, Ni: e }) {
    return [
      lt.bi({
        label: x("selectAll"),
        name: "all",
        icon: { I: "select-all", dimension: "14px", left: "0px", top: "1px" },
        action: () => {
          (i.yc(), e());
        },
      }),
      ...O(
        i.$c(t),
        lt.bi({
          label: x("selectThisAndAbove"),
          name: "thisAndAbove",
          icon: { I: "up-arrow", dimension: "10px", left: "1px" },
          action: () => {
            (i.gc(t), e());
          },
        }),
      ),
      ...O(
        i.Sc(t),
        lt.bi({
          label: x("selectThisAndBelow"),
          name: "thisAndBelow",
          icon: { I: "down-arrow", dimension: "10px", left: "1px" },
          action: () => {
            (i.kc(t), e());
          },
        }),
      ),
      ...O(
        i.ra() > 1,
        lt.bi({
          label: x("selectAllExceptThis"),
          name: "exceptThis",
          icon: { I: "except-this", dimension: "12px", top: "1px" },
          action: () => {
            (i.Tc(t), e());
          },
        }),
      ),
      ...O(
        i.ra() > 1,
        lt.bi({
          label: x("invertSelection"),
          name: "invert",
          icon: { I: "invert", dimension: "12px", top: "1px" },
          action: () => {
            (i.Ic(t), e());
          },
        }),
      ),
      ...O(
        i.Ac(),
        lt.bi({
          label: x("deselectAll"),
          name: "clear",
          icon: { I: "clear", dimension: "12px", top: "1px" },
          action: () => {
            (i.vc(t), e());
          },
        }),
      ),
    ];
  }
  class Fr {
    constructor({ Et: t, h: e, Ar: s, Z: n, B: r, Ot: o, yt: a, xt: l }) {
      ((this.q = "treeBrowser"),
        (this.Et = t),
        (this.h = e),
        (this.yt = a),
        (this.Ar = s),
        (this.Z = n),
        (this.B = r),
        (this.Ot = o),
        (this.xt = l),
        (this.o = h({})),
        (this.Oa = (u) => this.L?.Ge(u, this.L)),
        Hr(this.Oa));
    }
    async st() {
      (this.L?.De({}),
        (this.L = new Se({
          yt: this.yt,
          q: this.q,
          itemId: "root",
          $s: async (t, e) => this.Ar(t, e),
          Pt: !0,
          Z: this.Z,
          B: this.B,
          Ot: this.Ot,
          xt: this.xt,
        })),
        await this.L.st({ h: this.h }),
        this.o.i.replaceChildren(this.L.o.i));
    }
    Vs(t) {
      this.B = t;
    }
    Bh(t) {
      this.Ot = t;
    }
    destroy() {
      (jr(this.Oa), (this.Oa = null), this.L?.De({}));
    }
  }
  class Ts {
    constructor({
      label: t,
      wf: e,
      isOpen: s,
      Ch: n,
      body: r,
      fontSize: o = "13px",
      style: a = {},
    }) {
      ((this.isOpen = s),
        (this.o = h({
          style: { ...a },
          children: {
            header: h({
              style: {
                display: "flex",
                alignItems: "stretch",
                cursor: "pointer",
                fontSize: o,
              },
              onclick: (l) => {
                ((this.isOpen = !this.isOpen),
                  Si(this.o.header.Jt.p.style, (u) => {
                    ((u.transform = `rotate(${this.isOpen ? 90 : J() ? 0 : 180}deg)`),
                      (u.top = `${s ? 1 : 0}px`));
                  }),
                  (this.o.pu.i.style.display = this.isOpen ? "block" : "none"),
                  n?.(this.isOpen));
              },
              children: {
                Jt: h({
                  className: "tree-item-text",
                  style: {
                    userSelect: "none",
                    flex: "0 0 auto",
                    paddingInlineEnd: "6px",
                    display: "inline-block",
                  },
                  p: W(
                    {
                      width: 20 / 2 + "px",
                      height: 20 / 2 + "px",
                      style: {
                        display: "inline-block",
                        transform: `rotate(${s ? 90 : J() ? 0 : 180}deg)`,
                        top: `${s ? 1 : 0}px`,
                      },
                    },
                    (l) =>
                      `images/tree-twistie-closed-${l ? "light" : "dark"}.png`,
                  ),
                }),
                header: h({
                  style: {
                    paddingInlineStart: "2px",
                    userSelect: "none",
                    flex: "0 0 auto",
                  },
                  ...(e && { children: [e] }),
                  ...(!e && { textContent: t }),
                }),
              },
            }),
            pu: h({ style: { display: this.isOpen ? "block" : "none" }, p: r }),
          },
        })));
    }
    Hl() {
      return this.o.pu.p;
    }
  }
  const Pi = (i) => i.url && i.type !== "folder",
    pe = (i) => !i.url && i.type !== "bookmark";
  function As(i, t = !1, e, s, n) {
    let r = i.children.filter(Pi),
      o = i.children.some(pe);
    return h({
      style: { display: "flex", marginTop: "8px" },
      children: {
        bw: h({
          style: {
            flex: "0 0 auto",
            display: t ? "none" : "block",
            fontSize: "16px",
            width: "20px",
          },
        }),
        body: h({
          style: { flex: "1 1 auto" },
          children: {
            yw: h({
              style: { display: "flex", alignItems: "center" },
              children: {
                xf: W(
                  {
                    width: "16px",
                    height: "16px",
                    style: {
                      display: "inline-block",
                      marginInlineStart: "0px",
                      marginInlineEnd: "8px",
                      position: "relative",
                    },
                  },
                  (a) => `images/folder${a ? "" : "-dark"}.png`,
                ),
                title: h({
                  style: { flex: "0 1 auto", fontWeight: 600 },
                  textContent: t ? x("allBookmarks") : i.title,
                }),
                gw: h({
                  style: { flex: "0 0 auto" },
                  ...(o && {
                    p: new Di({
                      V: !0,
                      label: x("importFolderAndSubfolders"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (a) => {
                        let l = new Map(),
                          u = (w) => {
                            w.children.forEach((b) => {
                              if (Pi(b)) {
                                let g = yt(b.url);
                                l.has(g) || l.set(g, b);
                              } else u(b);
                            });
                          };
                        u(i);
                        let c = await A.Xo(
                          await Promise.all(
                            [...l.entries()].map(async ([w, b]) => ({
                              id: await zi(w),
                              kt: w,
                              title: b.title,
                              nh: b.dateAdded || void 0,
                            })),
                          ),
                        );
                        c.forEach((w) => (w.parentIds = []));
                        let d = [],
                          m = (w, b) => {
                            let g = w.children.some(pe),
                              p = w.children.some(Pi),
                              k = new Date().getTime(),
                              f;
                            g &&
                              ((f = {
                                id: Ht(),
                                label: w.title || x("importedBookmarks"),
                                type: "group",
                                groupType: "folder",
                                createDate: w.dateAdded ?? k,
                                modifyDate: w.dateGroupModified ?? k,
                                parentIds: [b.id],
                                childIds: [],
                                pinnedCount: 0,
                              }),
                              b.childIds.push(f.id),
                              d.push(f));
                            let T = 1e3,
                              $,
                              M = () => {
                                let S = {
                                  id: Ht(),
                                  label: f ? void 0 : w.title,
                                  type: "group",
                                  groupType: "window",
                                  createDate: w.dateAdded ?? k,
                                  modifyDate: w.dateGroupModified ?? k,
                                  parentIds: [f?.id ?? b.id],
                                  childIds: [],
                                  pinnedCount: 0,
                                };
                                return (
                                  d.push(S),
                                  (f ?? b).childIds.push(S.id),
                                  S
                                );
                              };
                            (p && ($ = M()),
                              w.children.forEach((S) => {
                                if (Pi(S)) {
                                  let H = yt(S.url),
                                    Q = c.find((ht) => ht.url === H);
                                  ($.childIds.length >= T && ($ = M()),
                                    $.childIds.push(Q.id),
                                    Q.parentIds.push($.id));
                                } else m(S, f);
                              }));
                          },
                          y = await getItemById(s);
                        for (; !L(y); ) {
                          let w = y.parentIds.find(ut);
                          if (!w)
                            throw new Error("non-quicklist parent id not found");
                          y = await getItemById(w);
                        }
                        (m(i, y),
                          await A.In({ Lo: d, vn: c, O: y.id, An: [d[0].id] }),
                          n());
                      },
                    }),
                  }),
                }),
              },
            }),
            ...(r.length && {
              kw: new Ts({
                wf: h({
                  style: {
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-3px",
                  },
                  children: {
                    label: h({ style: {}, textContent: _n(r.length) }),
                    bf: h({
                      style: { flex: "0 0 auto" },
                      p: new Di({
                        V: !0,
                        label: x("import"),
                        fontSize: "12px",
                        $: { marginInlineStart: "6px" },
                        Cs: { padding: "1px 5px" },
                        onclick: async (a) => {
                          let l = await A.Ma({
                            Ga: [
                              r.map(({ title: u, url: c }) => ({
                                kt: yt(c),
                                title: u,
                              })),
                            ],
                            Gs: e,
                            O: s,
                          });
                          (((l && s !== l && oneTabPage.an.uo.As) ||
                            oneTabPage.an.uo.Tw) &&
                            (await navigateToItem({ itemId: s, Zi: l })),
                            n());
                        },
                      }),
                    }),
                  },
                }),
                style: {
                  marginTop: "8px",
                  marginBottom: "10px",
                  marginInlineStart: "25px",
                },
                isOpen: !1,
                body: h({
                  style: { marginTop: "5px", marginBottom: "5px" },
                  children: r.map((a) => $s(a)),
                }),
              }),
            }),
            Me: h({
              style: { marginTop: "12px", marginBottom: "12px" },
              children: {
                ...i.children.filter(pe).map((a) => As(a, !1, e, s, n)),
                ...(!i.children.length && {
                  Iw: h({
                    style: { paddingInlineStart: "26px", fontSize: "12px" },
                    textContent: x("emptyInBrackets"),
                  }),
                }),
              },
            }),
          },
        }),
      },
    });
  }
  function $s(i) {
    let t = (e) => {
      if (!xi(e))
        return ((async () => await chrome.tabs.create({ url: i.url }))(), !1);
    };
    return h({
      className: [...O(i.hasBeenRead, "archived")].join(" "),
      style: {
        marginInlineStart: "30px",
        marginBottom: "8px",
        cursor: "pointer",
      },
      children: {
        Aw: h({
          children: {
            title: G("a", {
              className: "tabLinkText tabLinkTextStripesPossible",
              href: i.url,
              onclick: t,
              textContent: i.title,
            }),
          },
        }),
        url: G("span", {
          onclick: t,
          className: "tabUrlText tabLinkTextStripesPossible",
          textContent: i.url,
        }),
      },
    });
  }
  async function hl() {
    (await Er(), await Vt(), rr());
  }
  async function Er() {
    try {
      (await chrome.tabs.getCurrent()) &&
        (await chrome.tabs.update((await chrome.tabs.getCurrent()).id, {
          autoDiscardable: !1,
        }));
    } catch (i) {
      console.log(i);
    }
  }
  function ul(i) {
    return h({ style: { fontSize: "1px", height: i + "px", width: "1px" } }).i;
  }
  let vs = !1;
  async function Br(i, t = {}) {
    if (!vs) {
      const s = async () => {
        if (
          (
            await chrome.runtime.sendMessage({
              args: [],
              type: "corePing",
              yf: !0,
            })
          )?.result?.pong !== String(en)
        )
          throw new Error("core version mismatch");
      };
      try {
        await s();
      } catch (n) {
        if (n.message === "core version mismatch") throw n;
        (console.log(n),
          console.log("core not ready. retrying..."),
          await qt(1e3));
        try {
          await s();
        } catch (r) {
          (console.log(r),
            console.log("core not ready. retrying..."),
            await qt(5e3));
          try {
            await s();
          } catch (o) {
            throw (console.log(o), new Error("Cannot connect to core"));
          }
        }
      }
      vs = !0;
    }
    ((t.type = i), (t.yf = !0));
    let e = await chrome.runtime.sendMessage(t);
    if (e === null) throw new Error("null message response from core");
    if (e?.gf) throw new Error(e.gf);
    return e.result;
  }
  const cl = new Proxy(
    {},
    {
      get(i, t) {
        return t;
      },
    },
  );
  let Fi = [];
  function Hr(i) {
    Fi.push(i);
  }
  function jr(i) {
    let t = Fi.indexOf(i);
    t >= 0 && Fi.splice(t, 1);
  }
  chrome.runtime.onMessage.addListener((i, t, e) => {
    i.type === "stateChange" && Fi.forEach((s) => s(i.$w));
  });
  const A = Xe(
    new Proxy(
      {},
      {
        get(i, t, e) {
          return (...s) => ((s = Yi(s, void 0, Cn)), Br(t, { args: s }));
        },
      },
    ),
    "core",
  );
  async function Vt() {
    return new Promise((i, t) => {
      document.readyState === "complete"
        ? i()
        : document.addEventListener("readystatechange", (e) => {
            document.readyState === "complete" && i();
          });
    });
  }
  function Nr(i) {
    if (!i || i.toLowerCase().startsWith("file://")) return "";
    if (i.indexOf("://docs.google.com/spreadsheets/d/") !== -1)
      return "docs.google.com-spreadsheets";
    if (i.indexOf("://docs.google.com/document/d/") !== -1)
      return "docs.google.com-document";
    if (i.indexOf("://docs.google.com/presentation/d/") !== -1)
      return "docs.google.com-presentation";
    if (i.indexOf("://docs.google.com/forms/d/") !== -1)
      return "docs.google.com-forms";
    let t = Fe(i);
    return (t.endsWith(".wikipedia.org") && (t = "wikipedia.org"), t);
  }
  function xi(i) {
    return Yt(i) || Ei(i);
  }
  function Yt(i) {
    return i.ctrlKey || i.metaKey;
  }
  function Ei(i) {
    return i.shiftKey;
  }
  function Bi(i) {
    return i.altKey;
  }
  function fl(i) {
    let t = document.createElement("span"),
      e = i.indexOf("OneTab"),
      s = e + "OneTab".length;
    return (
      e === 0
        ? (t.appendChild(Is()),
          t.appendChild(document.createTextNode(i.substring(s))))
        : (t.appendChild(document.createTextNode(i.substring(0, e))),
          t.appendChild(Is()),
          s !== i.length &&
            t.appendChild(document.createTextNode(i.substring(s)))),
      t
    );
  }
  function Is() {
    let i = document.createElement("span"),
      t = document.createElement("span");
    return (
      (t.style.fontStyle = "italic"),
      t.appendChild(document.createTextNode("One")),
      i.appendChild(t),
      i.appendChild(document.createTextNode("Tab")),
      i
    );
  }
  async function qr(i) {
    return new Promise((t, e) => {
      let s = {
          alpha:
            "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        },
        n = new Image();
      ((n.onload = () => {
        let r = n.width > 0 && n.height > 0;
        t(r);
      }),
        (n.onerror = () => {
          t(!1);
        }),
        (n.src = "data:image/webp;base64," + s[i]));
    });
  }
  async function Rr(i) {
    return new Promise((t, e) => {
      let s = new Image();
      ((s.onload = () => {
        t(Ss(s));
      }),
        (s.onerror = (n) => {
          e(n);
        }),
        (s.src = i));
    });
  }
  let Hi = document.createElement("canvas");
  ((Hi.width = 32), (Hi.height = 32));
  let Os = Hi.getContext("2d"),
    Ms = "data:image/png;base64,",
    Ur = Ms.length;
  function Ss(i) {
    (Os.clearRect(0, 0, 32, 32), Os.drawImage(i, 0, 0, 32, 32));
    let t = Hi.toDataURL("image/png");
    return t.startsWith(Ms) ? t.substring(Ur) : t;
  }
  async function Ls(i) {
    let { Sw: t, Ow: e } = await A.Mw(i);
    return t ? (await Wr(), []) : e;
  }
  function Ds() {
    return x("chromeIncognitoInstructions");
  }
  async function Wr() {
    let i = x("incogitoPermissionRequired") + " " + Ds(),
      t = x("privateBrowsingPermissionRequired") + " " + Ds();
    await zt(i);
  }
  const {
    createSpinner: xe,
    renderLocationPath: we,
    renderGroupPaths: Gs,
    writeClipboard: Cr,
    checkCoreReadyOrShowRestart: dl,
    reconcileViews: Ps,
    loadImages: pl,
    returnToOneTabButton: ml,
    isFullyInViewport: Zr,
    createExpandedItemCache: Es,
    isEscapeKey: ti,
    addEventListenerAttachment: z,
    pointerOver: mi,
    pointerMove: _r,
    pointerLeave: bi,
  } = globalThis.createOneTabPageUiHelpers({
    get core() { return A; },
    get createColorIndicator() { return cs; },
    get createLightDarkPicture() { return W; },
    get delay() { return qt; },
    get div() { return h; },
    get element() { return G; },
    get EventAttachment() { return ss; },
    get getLocationText() { return ci; },
    get intersperse() { return te; },
    get isFolder() { return L; },
    get isRoot() { return _; },
    get isRtl() { return J; },
    get isTabGroup() { return ot; },
    get ItemCache() { return ItemCache; },
    get maybeArray() { return O; },
    get range() { return Hn; },
    get SelectableItem() { return Sr; },
    get translate() { return x; },
  });
  let wi;
  async function zr() {
    ((wi = await A.ks("theme")), me());
  }
  function Jr() {
    return !window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  }
  async function xl(i) {
    (await A.bt("theme", i), (wi = i), me());
  }
  let Ft;
  function me() {
    ((Ft = { auto: Jr(), light: !0, dark: !1 }[wi]),
      Qr(),
      [...document.querySelectorAll(".lightDarkInnerImg")].forEach((i) => {
        i.src = i.dataset[Ft ? "lightSrc" : "darkSrc"];
      }),
      Fs.forEach((i) => i()),
      deps.setThemeState?.({ wi, Ft }));
  }
  function Qr() {
    let [i, t] = {
      auto: ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
      light: ["all", "not(all)"],
      dark: ["not(all)", "all"],
    }[wi];
    [...document.styleSheets]
      .flatMap((e) => [...e.cssRules])
      .filter(
        (e) =>
          e instanceof CSSMediaRule &&
          [...e.cssRules].some((s) => s.selectorText === ":root"),
      )
      .forEach((e, s) => (e.media = s % 2 === 0 ? i : t));
  }
  let Fs = [];
  function wl(i) {
    Fs.push(i);
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (i) => {
      me();
    });
  const ji = globalThis.createOneTabSmartMove({
    get core() { return A; },
    get createNewEmptyWindowGroup() { return Ns; },
    get defaultTabGroupColor() { return hi; },
    get getId() { return Ze; },
    get getItemById() { return getItemById; },
    get getItems() { return getItems; },
    get isFolder() { return L; },
    get isGroup() { return dt; },
    get isNotQuickList() { return ut; },
    get isTab() { return B; },
    get isTabGroup() { return ot; },
    get isWindowGroup() { return mt; },
    get itemType() { return be; },
    get ItemCache() { return ItemCache; },
    get moveItemRef() { return xt; },
    get not() { return Sn; },
    get partition() { return _i; },
  });
  function Bs({
    i,
    zc: t,
    duration: e,
    Uc: s,
    Fw: n = (r) => (r ? "ease-in" : "ease-out"),
  }) {
    let r = [
      Object.fromEntries(t.map(({ name: o, before: a }) => [o, a])),
      Object.fromEntries(t.map(({ name: o, after: a }) => [o, a])),
    ];
    (s || r.reverse(),
      i.animate(r, { duration: e, jw: 1, Bw: n(s) }),
      t.forEach((o) => (i.style[o.name] = s ? o.after : o.before)));
  }
  function Kr(i) {
    let t = i.parentElement;
    for (; t; ) {
      const e = window.getComputedStyle(t);
      if (e.overflow === "auto" || e.overflowY === "auto") return t;
      t = t.parentElement;
    }
    return document.body;
  }
  const Hs = 300;
  function js(i, t) {
    return i?.length > t ? `${i.substring(0, t)}…` : i;
  }
  function bl(i) {
    const t = new Date(i + "T00:00:00Z");
    return (t.setUTCDate(t.getUTCDate() + 1), t.toISOString().split("T")[0]);
  }
  async function yl(i) {
    let t = await chrome.tabs.query({ groupId: i });
    return await Xr(t);
  }
  async function Xr(i) {
    return await Promise.all(
      i.map(async (t) => {
        let e = yt(t.url || t.pendingUrl);
        return { fl: t, Eo: await zi(e), kt: e, At: t.id, di: t.groupId };
      }),
    );
  }
  function Vr(i) {
    return yt(i.url || i.pendingUrl);
  }
  function gl(i) {
    return $i(Vr(i));
  }
  function be(i) {
    let t = "undef";
    return (
      i.type === "tab"
        ? (t = "tab")
        : i.type === "group" &&
          (i.groupType === "folder" ? (t = "folder") : (t = "group")),
      t
    );
  }
  async function kl() {
    try {
      let i = await chrome.permissions.request({ origins: [`${Ai}/*`] });
      return (i && (await A.Cw()), i);
    } catch (i) {
      return (
        console.log(
          "chrome.permissions.request for one-tab.com host failed with error:",
        ),
        console.log(i),
        !1
      );
    }
  }
  function Yr(i) {
    if (!i || i.nodeType !== 1) return !1;
    if (i.isContentEditable) return !0;
    const t = i.tagName;
    if (t === "TEXTAREA") return !0;
    if (t === "INPUT") {
      const s = (i.getAttribute("type") || "text").toLowerCase();
      return !/^(button|checkbox|color|file|hidden|image|radio|range|reset|submit)$/.test(
        s,
      );
    }
    const e = i.getAttribute("role");
    return e === "textbox" || e === "searchbox" || e === "combobox";
  }
  function to(i) {
    return `${Ai}/page/${i}`;
  }
  const Tl = Symbol("dropHandled"),
    Al = Symbol("dragOverHandled"),
    et = h({
      id: "landingDiv",
      style: {
        background: "var(--drop-area-gradient)",
        border: "var(--drop-area-border)",
        marginInline: "14px",
      },
    }).i;
    return { pi, Pr, ks, Fr, Ts, Pi, pe, As, $s, hl, Er, ul, vs, Br, cl, Fi, Hr, jr, A, Vt, Nr, xi, Yt, Ei, Bi, fl, Is, qr, Rr, Hi, Os, Ms, Ur, Ss, Ls, Ds, Wr, xe, we, Gs, Cr, dl, Ps, pl, wi, zr, Jr, xl, Ft, me, Qr, Fs, wl, ml, Zr, Es, ti, z, mi, _r, bi, ji, Bs, Kr, Hs, js, bl, yl, Xr, Vr, gl, be, kl, Yr, to, Tl, Al, et };
  }
};
