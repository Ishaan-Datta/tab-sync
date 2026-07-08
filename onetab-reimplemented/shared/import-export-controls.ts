// @ts-nocheck
globalThis.createOneTabImportExportControls = function createOneTabImportExportControls(deps) {
  with (deps) {
async function Ks({ mode: i = "text", O: t, Gs: e, gu: s, Bf: n }) {
  let r = i === "readingList" && (await chrome.readingList.query({}));
  r &&
    r.sort(
      Oi(
        Ke((u) => u.hasBeenRead),
        ai((u) => u.creationTime),
      ),
    );
  let o = i === "bookmarks" && (await chrome.bookmarks.getTree()),
    a = new vr({ style: { flex: "1 1 10px", margin: "0 20px" } });
  n?.();
  let l = new bt({
    $r: !0,
    minWidth: "490px",
    minHeight: "360px",
    Sr: "490px",
    zl: "390px",
    buttons:
      i === "text"
        ? [
            new yi({
              id: "cancel",
              label: x("Cancel"),
              V: !1,
              Pn: !0,
              tabIndex: 2,
            }),
            new yi({
              id: "import",
              label: x("Import"),
              V: !0,
              tabIndex: 1,
              onclick: async (u) => {
                let c = a.i.contentWindow.document.body.innerHTML,
                  d = await is(c),
                  m = await A.Ma({ Ga: d, Gs: e, O: t });
                m && (await s({ itemId: t, ...(t !== m && { Zi: m }) }));
              },
            }),
          ]
        : [],
  });
  (l.Lt({
    content: h({
      style: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        overflow: "auto",
      },
      children: {
        sx: h({
          init: (u) => (u.i.onclick = (c) => l.destroy()),
          style: {
            position: "absolute",
            top: "14px",
            [J() ? "right" : "left"]: "17px",
            cursor: "pointer",
          },
          p: W(
            { dimension: "12px" },
            (u) => `images/cross${u ? "" : "-dark"}.png`,
          ),
        }),
        nx: new yr({
          fontSize: "12px",
          $: { paddingTop: "12px", paddingInlineStart: "16px" },
          Dc: [
            { label: x("importText"), name: "text" },
            { label: x("importBookmarks"), name: "bookmarks" },
            ...O(await ir(), {
              label: x("importReadingList"),
              name: "readingList",
            }),
          ],
          Pc: [i],
          onChange: async ([u]) => {
            if (u !== i) {
              if (u === "bookmarks" && !(await Ge("bookmarks")))
                return (alert(x("bookmarksPermissionNecesssary")), !1);
              if (u === "readingList" && !(await Ge("readingList")))
                return (alert(x("readingListPermissionNecesssary")), !1);
              await Ks({ mode: u, O: t, Gs: e, gu: s, Bf: () => l.destroy() });
            }
          },
        }),
        ...(i === "text" && {
          content: Ir({
            style: { paddingInline: "20px 20px", paddingBlock: "18px 10px" },
          }),
          ox: a,
        }),
        ...(i === "bookmarks" && {
          content: h({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "8px",
              overflow: "auto",
            },
            children: {
              lx: h({
                children: o.map((u) => As(u, !0, e, t, () => l.destroy())),
              }),
            },
          }),
        }),
        ...(i === "readingList" && {
          content: h({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "16px",
              marginBottom: "26px",
              overflow: "auto",
            },
            children: {
              header: h({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                },
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
                    (u) => `images/folder${u ? "" : "-dark"}.png`,
                  ),
                  title: h({
                    style: { flex: "0 1 auto", fontWeight: 600 },
                    textContent: x("readingList"),
                  }),
                  bf: h({
                    style: { flex: "0 0 auto" },
                    p: new Di({
                      V: !0,
                      label: x("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (u) => {
                        (await A.Ma({
                          Ga: [
                            r.map(({ title: c, url: d }) => ({
                              kt: yt(d),
                              title: c,
                            })),
                          ],
                          Gs: e,
                          O: t,
                        }),
                          l.destroy());
                      },
                    }),
                  }),
                },
              }),
              ...(r?.length && {
                entries: h({
                  style: { marginInlineStart: "-6px" },
                  children: r.map((u) => $s(u)),
                }),
              }),
              ...(!r?.length && {
                ux: h({
                  style: { marginInlineStart: "25px", fontSize: "13px" },
                  textContent: x("noReadingListEntries"),
                }),
              }),
            },
          }),
        }),
      },
    }),
  }),
    a.jd());
}
const ao = [
  { name: "newWindow", label: x("openInNewWindow") },
  { name: "currentWindow", label: x("openInThisWindow") },
  { name: "newIncognitoWindow", label: x("openInIncognitoWindow") },
];
(async () => (
  await Vt(),
  [...document.querySelectorAll("[data-m]")].forEach(
    (i) => (i.textContent = x(i.dataset.m)),
  )
))();
function lo(i, t) {
  const e = i.slice(),
    s = new Set(i);
  let n = -1;
  for (const r of t) {
    if (s.has(r)) {
      n = e.lastIndexOf(r);
      continue;
    }
    const o = n === -1 ? 0 : n + 1;
    (e.splice(o, 0, r), s.add(r), (n = o));
  }
  return e;
}
async function Ll(i, t, e) {
  const s = lo(i, t),
    n = i.slice();
  let r = 0,
    o = 0;
  for (; o < s.length; ) {
    if (r < n.length && n[r] === s[o]) {
      (r++, o++);
      continue;
    }
    const a = r,
      l = [];
    for (; o < s.length && (r >= n.length || n[r] !== s[o]); )
      (l.push(s[o]), o++);
    (await e(l, a), In(n, a, l), (r = a + l.length));
  }
  return n;
}
class yi {
  constructor({ id: t, label: e, V: s, Pn: n, onclick: r, tabIndex: o }) {
    ((this.id = t),
      (this.V = s),
      (this.Pn = n),
      (this.Tu = O(r)),
      (this.o = h({
        className: "button-outer" + (s ? " button-default-outer" : ""),
        p: G("button", {
          className: "button",
          textContent: e,
          onclick: (a) => (a.stopPropagation(), this.click(a)),
          tabIndex: o,
        }),
      })));
  }
  Cf(t) {
    this.Tu.push(t);
  }
  focus() {
    this.o.p.i.focus();
  }
  click(t) {
    this.Tu.forEach((e) => e(t));
  }
}
async function Dl({ message: i, xi: t }) {
  return new Promise((e) => {
    new bt({
      buttons: [
        new yi({
          id: "cancel",
          label: x("Cancel"),
          V: !1,
          Pn: !0,
          tabIndex: 2,
          onclick: (n) => e(!1),
        }),
        new yi({
          id: "ok",
          label: x("OK"),
          V: !0,
          tabIndex: 1,
          onclick: (n) => e(!0),
        }),
      ],
    }).Lt({ message: i, xi: t });
  });
}
async function zt(i, { Iu: t = !1 } = {}) {
  return new Promise((e) => {
    new bt({
      buttons: [
        new yi({
          id: "ok",
          label: x("OK"),
          V: !0,
          Pn: !0,
          tabIndex: 0,
          onclick: (n) => e(),
        }),
      ],
    }).Lt({ message: i, Iu: t });
  });
}
async function Gl(i) {
  return new Promise((t) => {
    new bt({ buttons: [] }).Lt({ message: i });
  });
}
const Xs = "moveToTrashGroupCrossHintShown";
async function ho({ Ef: i }) {
  if (i)
    try {
      if (await A._e(Xs)) return;
      (await A.Ve(Xs, !0), await uo());
    } catch (t) {
      console.log(`maybeShowMoveToTrashGroupCrossHintModal failed: ${t}`);
    }
}
async function uo() {
  return await new Promise((i) => {
    let t = new bt({
        fs: !0,
        Ul: !1,
        $r: !1,
        minWidth: "460px",
        Sr: "460px",
        buttons: [],
        Bo: () => i(),
      }),
      e = W(
        {
          dimension: `${26 / 2}px`,
          style: {
            width: "19px",
            height: "19px",
            marginInlineStart: "2px",
            marginInlineEnd: "8px",
            visibility: "visible",
            filter: "grayscale(0%)",
            borderRadius: "6px",
            backgroundColor: "var(--red-flag-hover-bg-color)",
            flex: "0 0 auto",
          },
        },
        (r) => `images/cross2${r ? "" : "-dark"}.png`,
      ),
      s = h({
        style: {
          display: "flex",
          alignItems: "center",
          border: "1px solid var(--stronger-border-color)",
          borderRadius: "8px",
          padding: "8px 10px",
          backgroundColor: "var(--header-bg-color)",
          transition: "background-color 120ms ease",
        },
        children: {
          hx: e,
          title: h({
            className: "tabGroupLabelText oneLineWithEllipsis",
            style: { flex: "1 1 auto" },
            textContent: x("modalMoveToTrashHintExampleGroupTitle"),
          }),
        },
      }),
      n = h({
        style: {
          padding: "24px 30px 22px 30px",
          maxWidth: "460px",
          lineHeight: "1.6em",
        },
        children: {
          heading: h({
            style: {
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "12px",
              marginInlineStart: "10px",
            },
            textContent: x("modalMoveToTrashHintHeading"),
          }),
          mx: s,
          wx: h({
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            },
            p: new Di({
              label: x("gotIt"),
              V: !0,
              tabIndex: void 0,
              fontSize: "13px",
              onclick: async () => t.destroy(),
            }),
          }),
        },
      });
    t.Lt({ content: n });
  });
}
class bt {
  static zIndex = 1e4;
  constructor({
    buttons: t,
    $r: e,
    minWidth: s,
    minHeight: n,
    Sr: r,
    zl: o,
    fs: a,
    Ul: l,
    Bo: u,
  }) {
    ((this.Bo = u), (bt.Is = !0), (this.m = []), (this.buttons = t));
    let c = Object.fromEntries(t.map((m) => [m.id, m]));
    if (
      ((this.o = h({
        onclick: (m) => {
          (m.stopPropagation(),
            l && !(new Date() - Ws < 50) && !at && this.destroy());
        },
        style: {
          zIndex: bt.zIndex,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "var(--dim-overlay-color)",
        },
        p: h({
          role: "alertdialog",
          ariaModal: "true",
          style: {
            border: "var(--tab-group-border)",
            borderRadius: "10px",
            backgroundColor: "var(--border-color)",
            boxShadow: "var(--popup-box-shadow)",
            position: "relative",
          },
          init: ({ i: m }) => {
            this.m.push(
              z(m, "click", (y) => {
                y.stopPropagation();
              }),
            );
          },
          children: {
            ja: h({
              style: {
                display: "flex",
                flexDirection: "column",
                ...(s && { minWidth: s }),
                ...(n && { minHeight: n }),
                ...(r && { width: r }),
                ...(o && { height: o }),
                borderRadius: "8px",
                backgroundColor: "var(--bg-color)",
              },
              children: {
                content: h({}),
                ...(t.length && {
                  buttons: h({
                    style: {
                      display: "flex",
                      gap: "8px",
                      flex: "0 0 auto",
                      marginTop: "20px",
                      marginBottom: "20px",
                      marginInlineStart: "auto",
                      marginInlineEnd: "20px",
                      textAlign: "end",
                      whiteSpace: "nowrap",
                    },
                    children: c,
                  }),
                }),
                ...(e && {
                  Hf: h({
                    style: {
                      position: "absolute",
                      right: "4px",
                      bottom: "0px",
                    },
                    p: W(
                      {
                        width: "12px",
                        height: "12px",
                        style: { cursor: "nwse-resize" },
                      },
                      (m) =>
                        `images/bottom-right-resize${m ? "" : "-dark"}.png`,
                    ),
                  }),
                }),
              },
            }),
          },
        }),
      })),
      e)
    ) {
      let m = this.o.p.ja.i;
      (this.m.push(
        z(this.o.p.ja.Hf.i, "pointerdown", (y) =>
          Cs({
            event: y,
            Il: {
              vu: m,
              qf: m.offsetWidth,
              Uf: m.offsetHeight,
              Qn: parseInt(m.style.minWidth),
              zf: parseInt(m.style.minHeight),
            },
            Al: ({ ts: w, es: b, dx: g, dy: p }) => {
              ((b.vu.style.width = `${Math.min(window.innerWidth - 80, Math.max(b.Qn, b.qf + g * 2))}px`),
                (b.vu.style.height = `${Math.min(window.innerHeight - 70, Math.max(b.zf, b.Uf + p * 2))}px`));
            },
          }),
        ),
      ),
        this.m.push(
          z(window, "resize", (y) => {
            ((m.style.width = `${Math.min(window.innerWidth - 80, Math.max(parseInt(m.style.minWidth), m.clientWidth))}px`),
              (m.style.height = `${Math.min(window.innerHeight - 70, Math.max(parseInt(m.style.minHeight), m.clientHeight))}px`));
          }),
        ));
    }
    let d = t.find((m) => m.Pn);
    (d &&
      this.m.push(
        z(document, "keydown", (m) => {
          ti(m) && d.click();
        }),
      ),
      a &&
        this.m.push(
          z(document, "keydown", (m) => {
            ti(m) && (m.preventDefault(), this.destroy());
          }),
        ),
      Object.values(c).forEach((m) =>
        m.Cf((y) => {
          this.destroy();
        }),
      ));
  }
  Lt({ content: t, message: e, xi: s, Iu: n }) {
    ((this.content = t), (this.message = e));
    let r = e
      ? h({
          style: {
            paddingInline: "30px 30px",
            paddingBlock: this.buttons.length ? "30px 20px" : "30px 30px",
            minWidth: "160px",
            maxWidth: "300px",
            overflowWrap: "anywhere",
            "text-wrap": "balance",
            lineHeight: "1.8em",
          },
          children: {
            xx: h({ ...(n ? { innerHTML: e } : { textContent: e }) }),
            ...(s && {
              xi: h({
                style: { marginTop: "24px", fontSize: "12px" },
                textContent: s,
              }),
            }),
          },
        })
      : t;
    (this.o.p.ja.content.i.replaceWith(r.i),
      document.body.appendChild(this.o.i),
      setTimeout(() => this.buttons.find((o) => o.V)?.focus(), 1));
  }
  destroy() {
    ((bt.Is = !1),
      this.m?.forEach((t) => t.remove()),
      this.content?.destroy?.(),
      this.o.i.remove(),
      this.Bo?.(),
      (this.Bo = null));
  }
}
function co({ eo: i, Ec: t }) {
  return G("div", {
    style: {
      fontSize: "12px",
      fontWeight: 400,
      marginInline: "8px 8px",
      marginBlock: "8px 8px",
      lineHeight: "1.5em",
    },
    children: {
      body: h({
        style: {},
        children: i.map(({ name: e, label: s }) =>
          lt.bi({ name: e, label: s, action: () => t(e) }),
        ),
      }),
    },
  });
}
function fo({ content: i, filename: t, mimeType: e = "text/plain" }) {
  const s = document.createElement("a"),
    n = new Blob([i], { type: e }),
    r = URL.createObjectURL(n);
  ((s.href = r),
    (s.download = t),
    s.click(),
    setTimeout(() => URL.revokeObjectURL(r), 2e3));
}
function po(i) {
  return (
    (i = jt(He(i))),
    (i = i.replace(/[\\/:*?"<>|]/g, " ")),
    (i = i.replace(/[\s]+/g, " ").trim()),
    (i = i.replace(/[. ]+$/g, "")),
    i || (i = "folder"),
    i.substring(0, 70)
  );
}
function xo(i) {
  if (!i) return "";
  let t = new Date(i);
  return `${t.toLocaleDateString(void 0, { cc: "short" })}, ${t.toLocaleTimeString()}`;
}
function Me({ h: i, Qt: t }) {
  let e = 0;
  for (let s of t.childIds ?? []) {
    let n = i.v(s);
    n && (B(n) ? e++ : dt(n) && (e += Me({ h: i, Qt: n })));
  }
  return e;
}
function wo({ h: i, Wf: t, entries: e = [] }) {
  for (let s of t.childIds ?? []) {
    let n = i.v(s);
    n && dt(n) && !L(n) && e.push({ Qt: n });
  }
  return e;
}
function Vs({ Qt: i, h: t, level: e = 0, Ps: s }) {
  let n = "",
    r = 20,
    o = e ? e * r : 0,
    a = (e + 1) * r,
    l = 0;
  for (let u of i.childIds ?? []) {
    let c = t.v(u);
    if (c) {
      if (B(c)) {
        let d = es(c.url || ""),
          m = pt(c.title || c.url || ""),
          y =
            s && c.notes?.text
              ? `<div class="tabNotes">${pt(c.notes.text)}</div>`
              : "";
        ((n += `<div class="tab" style="padding-inline-start: ${o}px;"><a class="tabLink" href="${d}">${m}</a>${y}</div>`),
          l++);
      } else if (dt(c)) {
        let d = ci({ h: t, l: c });
        ((n += `<div class="innerGroupBlock" style="margin-top: ${l ? 8 : 2}px;">
        <div class="innerGroupTitleText" style="padding-inline-start: ${a}px;">${pt(d)}</div>`),
          s &&
            c.notes?.text &&
            (n += `<div class="innerGroupNotes" style="padding-inline-start: ${a}px;">${pt(c.notes.text)}</div>`),
          (n += Vs({ Qt: c, h: t, level: e + 1, Ps: s })),
          (n += "</div>"),
          l++);
      }
    }
  }
  return n;
}
function mo({ Qt: i, h: t, Ps: e }) {
  let s = Me({ h: t, Qt: i }),
    n = oe({ h: t, l: i }),
    r = Mt("tabCount", s),
    o = i.createDate ? `${x("createdPreceedingDate")} ${xo(i.createDate)}` : "",
    a = Vs({ Qt: i, h: t, Ps: e });
  return `<div class="tabGroup">
      <div class="tabGroupHeader">
        <div class="tabGroupHeaderRow">
          <div class="tabGroupTitleText">${pt(n || r)}</div>
          ${n ? `<div class="tabCountInline">${pt(r)}</div>` : ""}
        </div>
        ${o ? `<div class="createdDate">${pt(o)}</div>` : ""}
      </div>
      <div class="tabList">${a}</div>
    </div>`;
}
function bo({ Nf: i, Rf: t, Zf: e, h: s, Qf: n, Ps: r }) {
  let o = e.map((c) => mo({ Qt: c.Qt, h: s, Ps: r })).join(""),
    a = e.length
      ? ""
      : `<div id="emptyState">${pt(x("noTabsInOneTabYet"))}</div>`,
    l = x("oneTabExportPageTitle"),
    u = n ? `${i} - ${l}` : l;
  return `<!DOCTYPE html>
<html dir="${J() ? "ltr" : "rtl"}">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>${pt(u)}</title>
  <style>
    :root {
      --text-color: #222;
      --text-color-weak: #666;
      --link: #1a0dab;
    }
    body {
      margin: 0;
      font-family: "Open Sans", "Segoe UI", Arial, sans-serif;
      color: var(--text-color);
      background: #fff;
      line-height: 1.45;
    }
    #contentAreaDiv {
      max-width: 980px;
      margin: 0 auto;
      padding: 22px 28px 44px;
    }
    #folderTitle {
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 8px;
    }
    #headerText {
      font-size: 16px;
      color: var(--text-color-weak);
      font-weight: 300;
      margin-bottom: 8px;
      padding-bottom: 14px;
    }
    .tabGroup {
      margin-top: 16px;
      background: #fff;
    }
    .tabGroupHeader {
      padding: 14px 0 10px;
    }
    .tabGroupHeaderRow {
      display: flex;
      align-items: baseline;
      gap: 42px;
      flex-wrap: wrap;
    }
    .tabGroupTitleText {
      font-size: 24px;
      font-weight: 300;
      word-break: break-word;
      margin-bottom: 0;
    }
    .tabCountInline {
      display: inline-block;
      color: var(--text-color-weak);
      font-size: 24px;
      font-weight: 300;
    }
    .createdDate {
      display: block;
      color: var(--text-color-weak);
      font-size: 11px;
      margin-top: 2px;
    }
    .tabList {
      padding: 4px 0 8px;
    }
    .tab {
      padding: 2px 16px 2px 18px;
      font-size: 13px;
      word-break: break-word;
    }
    .innerGroupTitleText {
      padding: 4px 16px 1px 18px;
      font-size: 16px;
      font-weight: 300;
      color: var(--text-color);
      word-break: break-word;
    }
    .innerGroupBlock {
      margin-bottom: 10px;
    }
    .innerGroupBlock:last-child {
      margin-bottom: 0;
    }
    .innerGroupNotes {
      padding: 0 16px 2px 18px;
      font-size: 11px;
      color: var(--text-color-weak);
      white-space: pre-wrap;
      word-break: break-word;
    }
    .tabLink {
      text-decoration: none;
      color: var(--link);
    }
    .tabLink:hover {
      text-decoration: underline;
    }
    .tabNotes {
      font-size: 11px;
      color: var(--text-color-weak);
      margin-top: 2px;
      white-space: pre-wrap;
    }
    #emptyState {
      margin-top: 30px;
      color: var(--text-color-weak);
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div id="contentAreaDiv">
    ${n ? `<div id="folderTitle">${pt(i)}</div>` : ""}
    <div id="headerText">${pt(Mt("tabTotalCount", t))}</div>
    <div id="tabGroupsDiv">${o}${a}</div>
  </div>
</body>
</html>`;
}
async function yo({ La: i, h: t }) {
  ((t ??= new ItemCache()), await t.Te({ groupId: i }));
  let e = t.v(i);
  if (!e || !L(e))
    throw new Error("getFolderSavedPageExport requires a folder item");
  let s = ci({ h: t, l: e }),
    n = !1,
    r = wo({ h: t, Wf: e }),
    o = r.map(({ Qt: l }) => Me({ h: t, Qt: l })).reduce((l, u) => l + u, 0),
    a = !_(e);
  return {
    filename: `${po(s)}.html`,
    Ee: bo({ Nf: s, Rf: o, Zf: r, h: t, Qf: a, Ps: n }),
  };
}
async function go({ La: i }) {
  let { filename: t, Ee: e } = await yo({ La: i });
  fo({ content: e, filename: t, mimeType: "text/html" });
}
async function Ys(i) {
  return h({
    style: {
      fontSize: "12px",
      fontWeight: "400",
      padding: "8px 12px",
      minWidth: "36px",
      maxWidth: "250px",
      textAlign: "center",
    },
    textContent: i,
  }).i;
}
async function tn(i) {
  if (typeof i == "string") return Ys(i);
  if (typeof i == "function") {
    let t = await i();
    return t
      ? typeof t == "string"
        ? Ys(t)
        : t instanceof Element
          ? t
          : t.i
      : void 0;
  } else return;
}
function St(i, { Yt: t, Ls: e, bx: s }) {
  let n = i instanceof HTMLElement ? i : (i?.o?.i ?? i.i),
    r,
    o = [];
  return (
    o.push(
      mi(n, () => {
        (gi !== void 0 && clearTimeout(gi),
          (gi = setTimeout(async () => {
            if ((nt?.destroy(), !n?.isConnected || s?.())) return;
            let a = await tn(t);
            if (!a) return;
            let l = n.getBoundingClientRect(),
              u = document.body.getBoundingClientRect();
            r = l.left < (u.right - u.left) / 2 + u.left;
            let c = h({
              style: { width: "250px", position: "absolute", left: "-1000px" },
              p: a,
            }).i;
            document.body.appendChild(c);
            let d = c.offsetHeight + 20 > l.top;
            (c.remove(),
              (nt = new ko({ parent: i, Yt: t, Jf: a, Kf: d, Xf: r, Ls: e })));
            let m = Math.round(l.width / 2);
            if (e) {
              let y = e();
              m !== void 0 && (m = y);
            }
            ((nt.Au = m),
              (nt.o.i.style.left = `${l.x + m + (r ? 0 : -250) + window.scrollX}px`),
              (nt.o.i.style.top = `${l.y + (d ? l.height : 0) + window.scrollY}px`),
              document.body.appendChild(nt.o.i));
          }, 250)));
      }),
    ),
    e &&
      o.push(
        _r(n, async () => {
          if (!nt?.Ls) return;
          let a = nt.Ls();
          if (a !== nt.Au && a !== void 0) {
            let l = await tn(nt.Yt);
            (nt.o.$u.p.replaceWith(l), (nt.o.$u.p = l));
            let u = n.getBoundingClientRect();
            ((nt.o.i.style.left = `${u.x + a + (r ? 0 : -250) + window.scrollX}px`),
              (nt.Au = a));
          }
        }),
      ),
    o.push(
      bi(n, () => {
        (gi !== void 0 && clearTimeout(gi), nt?.destroy());
      }),
    ),
    o
  );
}
class ko {
  constructor({ Jf: t, Kf: e, Xf: s, Ls: n }) {
    ((this.Ls = n),
      (this.o = h({
        className: "tooltip-content",
        style: {
          fontSize: 0,
          position: "absolute",
          width: "250px",
          height: "0",
          zIndex: 2e4,
        },
        children: {
          $u: h({
            style: {
              fontSize: 0,
              position: "absolute",
              ...(s ? { left: "-25px" } : { right: "-25px" }),
              ...(e ? { top: "12px" } : { bottom: "12px" }),
            },
            className: `tooltip ${e ? "p-top" : "p-bottom"} ${s ? "left" : "right"}`,
            p: t,
          }),
        },
      })));
  }
  destroy() {
    ((this.Ls = null),
      this.o?.i?.remove(),
      this.o && (this.o.i = null),
      (this.o = null));
  }
}
  return { Ks, ao, lo, Ll, yi, Dl, zt, Gl, Xs, ho, uo, bt, co, fo, po, xo, Me, wo, Vs, mo, bo, yo, go, Ys, tn, St, ko };
  }
};
