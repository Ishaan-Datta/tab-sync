// @ts-nocheck
globalThis.createOneTabPermissionPageCommon = function createOneTabPermissionPageCommon(deps) {
  deps ||= {};
  with (deps) {
const nn = !1,
  rn = !1,
  on = !1,
  an = !1,
  un = !1,
  cn = !1,
  sn = !0,
  ln = "chrome://",
  fn = "chrome://newtab/";
async function dn() {
  (await Fe(), await ae(), Xt());
}
async function Fe() {
  try {
    (await chrome.tabs.getCurrent()) &&
      (await chrome.tabs.update((await chrome.tabs.getCurrent()).id, {
        autoDiscardable: !1,
      }));
  } catch (e) {
    console.log(e);
  }
}
function mn(e) {
  return C({ style: { fontSize: "1px", height: e + "px", width: "1px" } }).i;
}
let ie = !1;
async function Ne(e, t = {}) {
  if (!ie) {
    const r = async () => {
      if (
        (
          await chrome.runtime.sendMessage({
            args: [],
            type: "corePing",
            yf: !0,
          })
        )?.result?.pong !== String(currentVersion)
      )
        throw new Error("core version mismatch");
    };
    try {
      await r();
    } catch (o) {
      if (o.message === "core version mismatch") throw o;
      (console.log(o),
        console.log("core not ready. retrying..."),
        await W(1e3));
      try {
        await r();
      } catch (i) {
        (console.log(i),
          console.log("core not ready. retrying..."),
          await W(5e3));
        try {
          await r();
        } catch (a) {
          throw (console.log(a), new Error("Cannot connect to core"));
        }
      }
    }
    ie = !0;
  }
  ((t.type = e), (t.yf = !0));
  let n = await chrome.runtime.sendMessage(t);
  if (n === null) throw new Error("null message response from core");
  if (n?.gf) throw new Error(n.gf);
  return n.result;
}
const pn = new Proxy(
  {},
  {
    get(e, t) {
      return t;
    },
  },
);
let k = [];
function hn(e) {
  k.push(e);
}
function wn(e) {
  let t = k.indexOf(e);
  t >= 0 && k.splice(t, 1);
}
chrome.runtime.onMessage.addListener((e, t, n) => {
  e.type === "stateChange" && k.forEach((r) => r(e.$w));
});
const p = xe(
  new Proxy(
    {},
    {
      get(e, t, n) {
        return (...r) => ((r = ne(r, void 0, Ft)), Ne(t, { args: r }));
      },
    },
  ),
  "core",
);
async function ae() {
  return new Promise((e, t) => {
    document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", (n) => {
          document.readyState === "complete" && e();
        });
  });
}
function gn(e) {
  if (!e || e.toLowerCase().startsWith("file://")) return "";
  if (e.indexOf("://docs.google.com/spreadsheets/d/") !== -1)
    return "docs.google.com-spreadsheets";
  if (e.indexOf("://docs.google.com/document/d/") !== -1)
    return "docs.google.com-document";
  if (e.indexOf("://docs.google.com/presentation/d/") !== -1)
    return "docs.google.com-presentation";
  if (e.indexOf("://docs.google.com/forms/d/") !== -1)
    return "docs.google.com-forms";
  let t = Ze(e);
  return (t.endsWith(".wikipedia.org") && (t = "wikipedia.org"), t);
}
function yn(e) {
  return ke(e) || $e(e);
}
function ke(e) {
  return e.ctrlKey || e.metaKey;
}
function $e(e) {
  return e.shiftKey;
}
function bn(e) {
  return e.altKey;
}
function Tn(e) {
  let t = document.createElement("span"),
    n = e.indexOf("OneTab"),
    r = n + "OneTab".length;
  return (
    n === 0
      ? (t.appendChild(ue()),
        t.appendChild(document.createTextNode(e.substring(r))))
      : (t.appendChild(document.createTextNode(e.substring(0, n))),
        t.appendChild(ue()),
        r !== e.length &&
          t.appendChild(document.createTextNode(e.substring(r)))),
    t
  );
}
function ue() {
  let e = document.createElement("span"),
    t = document.createElement("span");
  return (
    (t.style.fontStyle = "italic"),
    t.appendChild(document.createTextNode("One")),
    e.appendChild(t),
    e.appendChild(document.createTextNode("Tab")),
    e
  );
}
async function An(e) {
  return new Promise((t, n) => {
    let r = {
        alpha:
          "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      },
      o = new Image();
    ((o.onload = () => {
      let i = o.width > 0 && o.height > 0;
      t(i);
    }),
      (o.onerror = () => {
        t(!1);
      }),
      (o.src = "data:image/webp;base64," + r[e]));
  });
}
async function Sn(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => {
      t(je(r));
    }),
      (r.onerror = (o) => {
        n(o);
      }),
      (r.src = e));
  });
}
let $ = document.createElement("canvas");
(($.width = 32), ($.height = 32));
let ce = $.getContext("2d"),
  se = "data:image/png;base64,",
  Ge = se.length;
function je(e) {
  (ce.clearRect(0, 0, 32, 32), ce.drawImage(e, 0, 0, 32, 32));
  let t = $.toDataURL("image/png");
  return t.startsWith(se) ? t.substring(Ge) : t;
}
async function Cn(e) {
  let { Sw: t, Ow: n } = await p.Mw(e);
  return t ? (await Be(), []) : n;
}
function le() {
  return A("chromeIncognitoInstructions");
}
async function Be() {
  let e = A("incogitoPermissionRequired") + " " + le(),
    t = A("privateBrowsingPermissionRequired") + " " + le();
  await showModalAlert(e);
}
const {
  createSpinner: In,
  renderLocationPath: xn,
  renderGroupPaths: On,
  writeClipboard: En,
  checkCoreReadyOrShowRestart: Ln,
  reconcileViews: Pn,
  loadImages: vn,
  returnToOneTabButton: Rn,
  isFullyInViewport: Fn,
  createExpandedItemCache: Nn,
  isEscapeKey: kn,
  addEventListenerAttachment: _,
  pointerOver: $n,
  pointerMove: Gn,
  pointerLeave: jn,
} = globalThis.createOneTabPageUiHelpers({
  get core() { return p; },
  get createColorIndicator() { return createColorIndicator; },
  get createLightDarkPicture() { return createLightDarkPicture; },
  get delay() { return W; },
  get div() { return C; },
  get element() { return T; },
  get EventAttachment() { return _t; },
  get getLocationText() { return Ue; },
  get intersperse() { return $t; },
  get isFolder() { return O; },
  get isRoot() { return K; },
  get isRtl() { return F; },
  get isTabGroup() { return U; },
  get ItemCache() { return ItemCache; },
  get maybeArray() { return Q; },
  get range() { return Lt; },
  get SelectableItem() { return SelectableItem; },
  get translate() { return A; },
});
let G;
async function Mn() {
  ((G = await p.ks("theme")), V());
}
function We() {
  return !window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}
async function Un(e) {
  (await p.bt("theme", e), (G = e), V());
}
let fe;
function V() {
  ((fe = { auto: We(), light: !0, dark: !1 }[G]),
    He(),
    [...document.querySelectorAll(".lightDarkInnerImg")].forEach((e) => {
      e.src = e.dataset[fe ? "lightSrc" : "darkSrc"];
    }),
    de.forEach((e) => e()));
}
function He() {
  let [e, t] = {
    auto: ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    light: ["all", "not(all)"],
    dark: ["not(all)", "all"],
  }[G];
  [...document.styleSheets]
    .flatMap((n) => [...n.cssRules])
    .filter(
      (n) =>
        n instanceof CSSMediaRule &&
        [...n.cssRules].some((r) => r.selectorText === ":root"),
    )
    .forEach((n, r) => (n.media = r % 2 === 0 ? e : t));
}
let de = [];
function Dn(e) {
  de.push(e);
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    V();
  });
const Bn = globalThis.createOneTabSmartMove({
  get core() { return p; },
  get createNewEmptyWindowGroup() { return createNewEmptyWindowGroup; },
  get defaultTabGroupColor() { return Qt; },
  get getId() { return Ce; },
  get getItemById() { return getItemById; },
  get getItems() { return getItems; },
  get isFolder() { return O; },
  get isGroup() { return It; },
  get isNotQuickList() { return xt; },
  get isTab() { return L; },
  get isTabGroup() { return U; },
  get isWindowGroup() { return P; },
  get itemType() { return _e; },
  get ItemCache() { return ItemCache; },
  get moveItemRef() { return R; },
  get not() { return bt; },
  get partition() { return Z; },
});
function Wn({
  i: e,
  zc: t,
  duration: n,
  Uc: r,
  Fw: o = (i) => (i ? "ease-in" : "ease-out"),
}) {
  let i = [
    Object.fromEntries(t.map(({ name: a, before: u }) => [a, u])),
    Object.fromEntries(t.map(({ name: a, after: u }) => [a, u])),
  ];
  (r || i.reverse(),
    e.animate(i, { duration: n, jw: 1, Bw: o(r) }),
    t.forEach((a) => (e.style[a.name] = r ? a.after : a.before)));
}
function Hn(e) {
  let t = e.parentElement;
  for (; t; ) {
    const n = window.getComputedStyle(t);
    if (n.overflow === "auto" || n.overflowY === "auto") return t;
    t = t.parentElement;
  }
  return document.body;
}
const qn = 300;
function qe(e, t) {
  return e?.length > t ? `${e.substring(0, t)}…` : e;
}
function zn(e) {
  const t = new Date(e + "T00:00:00Z");
  return (t.setUTCDate(t.getUTCDate() + 1), t.toISOString().split("T")[0]);
}
async function Vn(e) {
  let t = await chrome.tabs.query({ groupId: e });
  return await ze(t);
}
async function ze(e) {
  return await Promise.all(
    e.map(async (t) => {
      let n = x(t.url || t.pendingUrl);
      return { fl: t, Eo: await ot(n), kt: n, At: t.id, di: t.groupId };
    }),
  );
}
function Ve(e) {
  return x(e.url || e.pendingUrl);
}
function _n(e) {
  return j(Ve(e));
}
function _e(e) {
  let t = "undef";
  return (
    e.type === "tab"
      ? (t = "tab")
      : e.type === "group" &&
        (e.groupType === "folder" ? (t = "folder") : (t = "group")),
    t
  );
}
async function Jn() {
  try {
    let e = await chrome.permissions.request({ origins: [`${oneTabUrl}/*`] });
    return (e && (await p.Cw()), e);
  } catch (e) {
    return (
      console.log(
        "chrome.permissions.request for one-tab.com host failed with error:",
      ),
      console.log(e),
      !1
    );
  }
}
function Qn(e) {
  if (!e || e.nodeType !== 1) return !1;
  if (e.isContentEditable) return !0;
  const t = e.tagName;
  if (t === "TEXTAREA") return !0;
  if (t === "INPUT") {
    const r = (e.getAttribute("type") || "text").toLowerCase();
    return !/^(button|checkbox|color|file|hidden|image|radio|range|reset|submit)$/.test(
      r,
    );
  }
  const n = e.getAttribute("role");
  return n === "textbox" || n === "searchbox" || n === "combobox";
}
function Zn(e) {
  return `${oneTabUrl}/page/${e}`;
}
const Je = chrome.runtime.getURL("onetab.html"),
  v = chrome.runtime.getURL(""),
  me = !0;
async function Kn() {
  return me
    ? (await chrome.permissions.getAll()).permissions.includes("tabGroups") &&
        chrome.tabGroups
    : !1;
}
async function Xn() {
  if (!me || requestTabGroupsPermissionIfNecessaryDisabled) return !1;
  try {
    return await chrome.permissions.request({ permissions: ["tabGroups"] });
  } catch (e) {
    return (
      console.log(
        'chrome.permissions.request for "tabGroups" permission failed with error:',
      ),
      console.log(e),
      !1
    );
  }
}
async function Yn(e) {
  try {
    return await chrome.permissions.request({ permissions: [e] });
  } catch (t) {
    return (
      console.log(
        `chrome.permissions.request for "${e}" permission failed with error:`,
      ),
      console.log(t),
      !1
    );
  }
}
function Qe(e) {
  return e && e.indexOf(Je) === 0;
}
function er(e) {
  return e && e.indexOf(v) === 0;
}
function tr(e) {
  let t = e.toLowerCase();
  return t.startsWith("http://")
    ? e.substring("http://".length)
    : t.startsWith("https://")
      ? e.substring("https://".length)
      : t;
}
function Ze(e) {
  if (e.toLowerCase().startsWith("file://")) return e;
  let t = j(e);
  return t.toLowerCase().startsWith("www.") ? t.substring("www.".length) : t;
}
function j(e) {
  return e
    ? (e.indexOf("//") === 0 && (e = "http:" + e),
      e.indexOf("://") === -1 && (e = "http://" + e),
      (e = e.substring(e.indexOf("://") + "://".length)),
      e.indexOf("/") !== -1 && (e = e.substring(0, e.indexOf("/"))),
      e.indexOf(":") !== -1 && (e = e.substring(0, e.indexOf(":"))),
      e.indexOf("?") !== -1 && (e = e.substring(0, e.indexOf("?"))),
      e.indexOf("#") !== -1 && (e = e.substring(0, e.indexOf("#"))),
      e.toLowerCase())
    : "undefined";
}
function nr(e) {
  return e.indexOf("://") === -1
    ? "https://"
    : ((e = e.substring(0, e.indexOf("://") + "://".length)), e.toLowerCase());
}
const pe = [
  "com",
  "co.uk",
  "org.uk",
  "net",
  "org",
  "de",
  "ru",
  "info",
  "xyz",
  "nl",
];
function rr(e) {
  let t = j(e);
  try {
    for (let n in pe) {
      let r = "." + pe[n];
      if (st(t, r)) {
        for (t = t.substring(0, t.length - r.length); t.indexOf(".") !== -1; )
          t = t.substring(t.indexOf(".") + 1);
        t = t + r;
        break;
      }
    }
    return (t.indexOf("www.") === 0 && (t = t.substring("www.".length)), t);
  } catch {
    return t;
  }
}
function Ke(e) {
  e.noCacheRandom = Xe();
}
function Xe() {
  return new Date().getTime() + Math.round(Math.random() * 1e4) + "";
}
async function or(e, t) {
  Ke(t);
  let n = JSON.stringify(t);
  return await (await Ye(e, n)).json();
}
async function Ye(e, t) {
  let n = {};
  (t ? ((n.method = "POST"), (n.body = t)) : (n.method = "GET"),
    (n.headers = new Headers()),
    n.headers.append("Content-Type", "text/json"));
  let r = await fetch(e, n);
  if (r.status === 200) return r;
  throw new Error("http response code" + r.status);
}
const J = [
  ..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_",
];
function et(e = 22) {
  return Array.from(crypto.getRandomValues(new Uint8Array(e)).values())
    .map((t) => J[t & 63])
    .join("");
}
function ir(e = 32) {
  return Array.from(crypto.getRandomValues(new Uint8Array(e)).values())
    .map((t) => J[t & 15])
    .join("");
}
function ar() {
  return et();
}
const tt = new TextEncoder(),
  ur = new TextDecoder();
async function nt(e) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", e));
}
async function rt(e) {
  return await nt(tt.encode(e));
}
async function ot(e) {
  let n = [...(await rt(e))]
      .map((o) => o.toString(2).padStart(8, 0))
      .join("")
      .slice(0, 132),
    r = "";
  for (let o = 0; o < 22; o++) r += J[parseInt(n.slice(o * 6, (o + 1) * 6), 2)];
  return r;
}
function it(e) {
  return e == null ? "" : e.replace(/^\s+/, "").replace(/\s+$/, "");
}
function cr(e) {
  return [
    `
`,
    "\v",
    "\f",
    "\r",
    "",
    "\u2028",
    "\u2029",
  ].some((t) => t === e);
}
const at = ["\v", "\f", "\r", "", "\u2028", "\u2029"];
function ut(e) {
  return e
    ? ((e = e.replaceAll(
        `\r
`,
        `
`,
      )),
      at.forEach(
        (t) =>
          (e = e.replaceAll(
            t,
            `
`,
          )),
      ),
      e)
    : "";
}
function ct(e) {
  return e ? e.replace(/[\x00-\x1F\x7F-\x9F\uFEFF]/g, "") : "";
}
function sr(e) {
  return e ? ut(e).replace(/[\x00-\x09\x0B-\x1F\x7F-\x9F\uFEFF]/g, "") : "";
}
function lr(e, t) {
  return (e && M(e)) || t;
}
function M(e) {
  return e ? it(ct(e)) : "";
}
function st(e, t) {
  return e ? e.indexOf(t, e.length - t.length) !== -1 : !1;
}
function he(e, t) {
  function n(a) {
    if (a == null) return null;
    let u = String(a).split(".");
    if (u.length === 0) return null;
    let c = [];
    for (let l = 0; l < u.length; l++) {
      let d = u[l];
      if (!/^\d+$/.test(d)) return null;
      c.push(Number(d));
    }
    return c;
  }
  let r = n(e),
    o = n(t);
  if (!r || !o) return NaN;
  let i = Math.max(r.length, o.length);
  for (let a = 0; a < i; a++) {
    let u = r[a] ?? 0,
      c = o[a] ?? 0;
    if (u < c) return -1;
    if (u > c) return 1;
  }
  return 0;
}
function lt(e, t) {
  return he(e, t) < 0;
}
function ft(e, t) {
  return he(e, t) > 0;
}
function fr(e, t, n) {
  return ft(e, t) && lt(e, n);
}
const dr = globalThis.getOneTabDefaultSettings();
function mr(e, t, n) {
  (e.parentNode && e.remove(),
    t.insertBefore(
      e,
      n === void 0 || n >= t.children.length || t.children.length === 0
        ? null
        : t.children[Math.max(0, n)],
    ));
}
function pr(e, t) {
  t.parentNode.insertBefore(e, t);
}
function C(e, t) {
  return T("div", e, t);
}
function T(e, t, n) {
  return mt(void 0, e, t, n);
}
const dt = ["style", "children", "child", "init", "destroy", "dataset"];
function mt(e, t, n, r) {
  let o = t === void 0 ? e : document.createElement(t),
    i = {},
    a = {};
  if (n) {
    (n.style && Object.assign(o.style, n.style),
      n.dataset && Object.assign(o.dataset, n.dataset));
    for (let c of Object.keys(n))
      (dt.includes(c) || (o[c] = n[c]),
        (c === "role" || c === "placeholder") && o.setAttribute(c, n[c]));
    if ((n.p && ((n.children ??= []).p = n.p), n.children)) {
      let c = Object.entries(n.children);
      for (const [l, d] of c)
        d instanceof HTMLElement
          ? o.appendChild(d)
          : (o.appendChild(d?.o?.i ?? d.i),
            d.u && (Object.assign(a, d.u), (a[l] = d)));
      for (const [l, d] of c) ((i[l] = d), (a[l] = d));
    }
  }
  t !== void 0 && e && e.appendChild(o);
  let u = { i: o, u: a };
  return (
    n.destroy && (u.destroy = n.destroy),
    Object.assign(u, i),
    r && Object.assign(u, r),
    n?.init && n.init(u),
    u
  );
}
const we = "about:reader?url=";
function x(e) {
  if (!e) return "";
  if (e.startsWith("data:text/html") && e.includes('<div id="placeholderUrl">'))
    return e.match(/<div id="placeholderUrl">(.+)<\/div>/)?.[1];
  if (e.indexOf(":") === -1) return x("https://" + e);
  if (e.indexOf(we) === 0) return decodeURIComponent(e.substring(we.length));
  if (e.startsWith(`${v}placeholder.html?`)) {
    const t = new URLSearchParams(e.substring(e.indexOf("?")));
    return x(t.get("url"));
  }
  try {
    let t = new URL(e),
      n = t.toString();
    return !t.hash && !t.search && t.pathname === "/" && n.endsWith("/")
      ? n.substring(0, n.length - 1)
      : t.toString();
  } catch {
    return e;
  }
}
function hr(e, t, n) {
  return t && ((e || "").toLowerCase().startsWith("file:") || Se(e))
    ? n
      ? `data:text/html, <html><body><div id="placeholderUrl">${Vt(e)}</div></body></html>`
      : `${v}placeholder.html?url=${encodeURIComponent(e)}`
    : e;
}
async function wr() {
  try {
    return !(await chrome.extension.isAllowedFileSchemeAccess());
  } catch (e) {
    return (console.log(e), !0);
  }
}
function gr(e) {
  return parseInt(e.match(/\d+/)[0]);
}
function yr(e) {
  if (!(!e || e.length === 0)) return e[e.length - 1];
}
const ge = [...new Array(30)].map((e, t) => parseInt(10 + Math.pow(1.6, t)));
function* pt(e) {
  let t = 0;
  for (; ge.slice(0, t).reduce((n, r) => n + r, 0) < e; ) yield ge[t++];
}
async function br(e, t, n) {
  let r = 0;
  for (let o of pt(e)) {
    if (await n(r)) return;
    (await W(o), (r += o));
  }
  throw new Error(`Timeout waiting for condition ${t}`);
}
function A(e) {
  let t = chrome.i18n.getMessage(e);
  return t || (console.log("No translation available for: " + e), e);
}
function Tr(e) {
  const t = () => {
    (document.removeEventListener("DOMContentLoaded", t),
      window.removeEventListener("load", t),
      e());
  };
  document.readyState !== "loading"
    ? setTimeout(e)
    : (document.addEventListener("DOMContentLoaded", t),
      window.addEventListener("load", t));
}
function Ar({
  id: e,
  display: t,
  marginTop: n = "16px",
  marginBottom: r = "16px",
  marginInlineStart: o = 0,
  marginInlineEnd: i = 0,
  color: a = "var(--border-color)",
  $: u,
  Fu: c,
  Qa: l,
} = {}) {
  return C({
    className: "horizDivider",
    ...(e && { id: e }),
    ...(c && { className: "hideIfInLastSection" }),
    ...(l && { className: "hideIfInLastSubsection" }),
    style: {
      ...(t && { display: t }),
      marginTop: n,
      marginBottom: r,
      marginInlineStart: o,
      marginInlineEnd: i,
      borderBottom: `1px solid ${a}`,
      ...u,
    },
  });
}
const ht = new Intl.RelativeTimeFormat(void 0, { ju: "auto" }),
  ye = [
    { Ye: 60, name: "seconds" },
    { Ye: 60, name: "minutes" },
    { Ye: 24, name: "hours" },
    { Ye: 7, name: "days" },
    { Ye: 4.34524, name: "weeks" },
    { Ye: 12, name: "months" },
    { Ye: Number.POSITIVE_INFINITY, name: "years" },
  ];
function be(e) {
  let t = e;
  for (let n = 0; n < ye.length; n++) {
    const r = ye[n];
    if (Math.abs(t) < r.Ye) return ht.format(Math.round(t), r.name);
    t /= r.Ye;
  }
}
function Sr(e) {
  const t = (e - new Date()) / 1e3;
  return t > -60 && t < 0 ? A("justNow") : be(t);
}
function Cr(e) {
  const t = (e - new Date()) / 1e3;
  return t < 60 && t > 0 ? A("soon") : be(t);
}
function Te(e, t) {
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Te(e[n], t[n])) return !1;
    return !0;
  } else if (typeof e == "object") {
    let n = [...Object.keys(e)].sort(),
      r = [...Object.keys(t)].sort();
    if (n.length !== r.length) return !1;
    for (let o = 0; o < n.length; o++) if (n[o] !== r[o]) return !1;
    for (let o = 0; o < n.length; o++) if (!Te(e[n[o]], t[n[o]])) return !1;
    return !0;
  } else return e === t;
}
function Ae(e) {
  if (Array.isArray(e)) return e.map((t) => Ae(t));
  if (typeof e == "object") {
    let t = [...Object.keys(e)].sort();
    return Object.fromEntries(t.map((n) => [n, Ae(e[n])]));
  } else return e;
}
function Ir(e) {
  e.splice(0, e.length);
}
function xr(e, t) {
  if (!t) return [...new Set(e).values()];
  let n = new Set(),
    r = [];
  for (let o of e) {
    let i = t(o);
    n.has(i) || (n.add(i), r.push(o));
  }
  return r;
}
function Or(e, t, n) {
  let r = +t;
  (Number.isNaN(r) && (r = 0),
    r !== 1 / 0 && r !== -1 / 0 && (r = r < 0 ? Math.ceil(r) : Math.floor(r)));
  let o = e.length,
    i = r < 0 ? Math.max(o + r, 0) : Math.min(r, o);
  if (!n.length) return;
  let a = n.length;
  e.length = o + a;
  let u = Object.prototype.hasOwnProperty;
  for (let c = o - 1; c >= i; c--)
    u.call(e, c) ? (e[c + a] = e[c]) : delete e[c + a];
  for (let c = 0; c < a; c++) e[i + c] = n[c];
}
function Er(e, t) {
  return JSON.stringify([...e].sort()) === JSON.stringify([...t].sort());
}
function Lr(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function wt(e, ...t) {
  let n = new Set();
  for (let r = e.length - 1; r >= 0; r--)
    n.has(e[r]) ? e.splice(r, 1) : n.add(e[r]);
  for (let r of t) n.has(r) || (n.add(r), e.push(r));
  return e;
}
function Pr(e, t) {
  return t.includes(e);
}
function vr(e, t) {
  return t.some((n) => e.includes(n));
}
function gt(e, t) {
  for (; e.includes(t); ) e.splice(e.indexOf(t), 1);
  return e;
}
function Mr(e, t) {
  for (let n = e.length - 1; n >= 0; n--) t(e[n]) || e.splice(n, 1);
  return e;
}
function Ur(e, t, n) {
  return (n ? wt(e, t) : gt(e, t), e);
}
function Dr(e, t) {
  let n = e.findIndex(t);
  if (n === -1) return;
  let [r] = e.splice(n, 1);
  return r;
}
function Q(e, t) {
  let n, r;
  return (
    arguments.length === 1 ? ((n = e), (r = n !== void 0)) : ((r = e), (n = t)),
    r ? [n] : []
  );
}
function Rr(e, t, n) {
  let r = e.findIndex((o) => o === t && !n--);
  return (r !== -1 && e.splice(r, 1), r);
}
function Fr(e, t, n) {
  let r = new Map();
  (t ?? []).forEach((i) => {
    i && !r.has(i.id) && r.set(i.id, i);
  });
  let o = (e ?? []).map((i) => r.get(i));
  return n ? o.filter(n) : o;
}
const {
  filterToSet: Nr,
  filterNested: yt,
  not: bt,
  partition: Z,
  partitionMany: kr,
  asyncPartition: $r,
  activateTab: Gr,
  activateTabAndWindow: jr,
  randomItem: Br,
  randomColor: Wr,
  isExcludedUrl: Se,
  saveUncommittedChanges: Hr,
  clearUncommittedChanges: qr,
  getUncommittedChanges: zr,
  clearAllUncommittedChanges: Vr,
  pruneUncommittedChanges: At,
  getLocalStorageAdapter: _r,
} = globalThis.createOneTabCommonBundleHelpers({
  extensionRootUrl: v,
  getCoreProxy: () => p,
  isNewOrBlankTabPageUrl: (e) => globalThis.isNewOrBlankTabPageUrl?.(e),
  isPlaceholderUrl: Jt,
});
const {
  isUndefined: Jr,
  isDefined: Qr,
  hasId: Zr,
  doesNotHaveId: Kr,
  sameIdAs: Xr,
  getId: Ce,
  isTab: L,
  isRoot: K,
  isTrash: X,
  isFolder: O,
  isArchived: Yr,
  isTask: eo,
  isUserFolder: to,
  isQuickList: no,
  isFolderOrWindowGroup: ro,
  isGroup: It,
  isTabGroup: U,
  isWindowGroup: P,
  isBrowserGroup: oo,
  isNotQuickList: xt,
  isSharedAndNotExpired: io,
} = globalThis.createOneTabModelPredicates();
function ao(e, t) {
  let n = e.split("PLACEHOLDER");
  return T("span", {
    children: {
      a: T("span", { textContent: n[0] }),
      b: t,
      c: T("span", { textContent: n[1] }),
    },
  });
}
const {
  combineComparators: Ie,
  compareAscendingBy: Ot,
  compareDescendingBy: Y,
  compareLocaleBy: uo,
  compareLocaleNumericBy: co,
  mergeOwnProperty: so,
  mergeDefined: lo,
  mapBy: fo,
  groupBy: mo,
  range: Lt,
  nthIndexOf: po,
  KeyedObjectMap: ho,
} = globalThis.createOneTabCollectionHelpers();
let B;
const ee = {},
  te = {},
  Et = (e) => ({
    get(t, n, r) {
      if (n === "then") return t.then?.bind(t);
      let o = e ? `${e}:${n}` : n;
      if (
        ((ee[o] ??= 0),
        ee[o]++,
        new Error().stack
          .split(
            `
`,
          )
          .slice(1)
          .forEach((a) => {
            ((te[a] ??= 0), te[a]++);
          }),
        B !== void 0 && (clearTimeout(B), (B = void 0)),
        (B = setTimeout(() => {
          (console.log(
            JSON.stringify(
              Object.fromEntries(
                Object.entries(te)
                  .sort((a, u) => u[1] - a[1])
                  .slice(0, 30),
              ),
              null,
              2,
            ),
          ),
            console.log(JSON.stringify(ee, null, 2)));
        }, 500)),
        n === "index")
      )
        return (a) => xe(t.index(a), n);
      let i = t[n];
      return typeof i == "function" ? i.bind(t) : i;
    },
  });
function xe(e, t) {
  return proxyLoggingEnabled ? new Proxy(e, Et(t)) : e;
}
function wo(e, t) {
  return e.length < 2
    ? e
    : e.flatMap((n, r) => [n, ...Q(r === e.length - 1 ? void 0 : t())]);
}
const {
  splitSearchText: Pt,
  splitSearchTextWithTerm: vt,
  createSearchTermRegExp: Ut,
} = globalThis.createOneTabSearchHelpers();
const go = "c",
  yo = "e",
  bo = "t";
const Rt = globalThis.createOneTabSessionStorageAdapter();
function To() {
  return Rt;
}
const Ft = "undefined-34LKmiHxP3Mu48u8qrDaHf";
const {
  delay: W,
  replaceValueDeep: ne,
  isOpera: Nt,
  isBrave: Ao,
  isMicrosoftEdge: kt,
  unsleepTab: So,
  mergeObjectsWithSeparators: $t,
  intersperse: Co,
  callIfOwnProperty: Io,
  callIfDefined: xo,
  joinUniqueTrimmed: Oo,
} = globalThis.createOneTabRuntimeHelpers();
const { fadeOut: Eo, fadeIn: Lo } = globalThis.createOneTabDomTransitionHelpers();
function Gt({ label: e, oe: t, ei: n, ii: r, No: o = 300 }) {
  if (t?.length) {
    let i = Pt({ text: e, ti: t, ei: n, ii: r }),
      a = i.reduce((l, { s: d }) => l + d.length, 0),
      u = Math.max(0, a - o),
      c = i.filter(({ tt: l }) => !l).length;
    for (
      let l = 0;
      l < c &&
      !(u <= 0 || !i.filter(({ s: f, tt: w }) => !w && f.length > 5).length);
      l++
    ) {
      let d = [...i]
          .filter(({ tt: f }) => !f)
          .sort(Ie(Y(({ s: f }) => f.length))),
        g = d.filter(
          ({ s: f }, w, h) => w === 0 || h[w - 1].s.length === f.length,
        ),
        y = d[g.length],
        m = Math.ceil(u / g.length),
        s = g[0].s.length;
      (y && (m = Math.min(s - y.s.length, m)),
        s - m < 5 && (m = Math.max(0, s - 5)),
        (u -= m * g.length),
        m > 0 &&
          g.forEach((f, w) => {
            f.Ki ??= Math.floor(f.s.length / 2);
            let h = Math.floor(m / 2),
              b = Math.ceil(m / 2);
            ((f.s = f.s.substring(0, f.Ki - h) + f.s.substring(f.Ki + b)),
              (f.Ki = f.Ki - h),
              (f.Hu = !0));
          }));
    }
    return i.flatMap((l) =>
      l.tt
        ? T("span", {
            style: { backgroundColor: "var(--text-highlight-bg-color)" },
            textContent: l.s,
          }).i
        : l.Hu
          ? [
              T("span", { textContent: l.s.substring(0, l.Ki) }).i,
              T("span", {
                style: { color: "var(--text-color-extra-weak)" },
                textContent: "…",
              }).i,
              T("span", { textContent: l.s.substring(l.Ki) }).i,
            ]
          : T("span", { textContent: l.s }).i,
    );
  } else {
    let i = document.createElement("span");
    return ((i.textContent = qe(e, o)), [i]);
  }
}
function jt(e) {
  return Me("tabCount", e);
}
function Po(e) {
  return Me("bookmarkCount", e);
}
function vo({ label: e, Ro: t, oe: n, ei: r, ii: o, No: i }) {
  t.replaceChildren(...Gt({ label: e, oe: n, ei: r, ii: o, No: i }));
}
const { applyValue: Bt, applyIfTruthy: Mo } = globalThis.createOneTabRuntimeHelpers();
const {
  trimTrailingDotOrComma: Wt,
  substringAfter: Ht,
  stripProtocol: E,
  equalIgnoringProtocol: H,
  safeNormalizeText: D,
  canonicalizeTextAsUrl: Oe,
  areUrlLikeEqual: Ee,
  isYouTubeUrl: qt,
  shouldUseCandidateUrl: Uo,
  safeNonJavascriptUrl: q,
} = globalThis.createOneTabUrlHelpers({ normalizeText: M, normalizeUrl: x });
const { normalizeImportedText: zt } = globalThis.createOneTabTextHelpers();
const { parseImportedTabGroups: Do } = globalThis.createOneTabImportHelpers({
  combineComparators: Ie,
  compareAscendingBy: Ot,
  compareDescendingBy: Y,
  equalIgnoringProtocol: H,
  normalizeImportedText: zt,
  normalizeText: M,
  safeNonJavascriptUrl: q,
  stripProtocol: E,
  trimTrailingDotOrComma: Wt,
});
function Vt(e) {
  let t = document.createElement("p");
  return ((t.textContent = e), t.innerHTML);
}
function Ro(e) {
  return (
    (e = e.replaceAll('"', "&quot;")),
    (e = e.replaceAll("&", "&amp;")),
    e
  );
}
function Fo(e) {
  return [e, e];
}
class _t {
  constructor({ listener: t, Ka: n, Bs: r }) {
    ((this.listener = t), (this.Bs = r), n(t));
  }
  remove() {
    if (!this.listener) {
      console.log("eventattachment remove called twice");
      return;
    }
    (this.Bs(this.listener), (this.Bs = null), (this.listener = null));
  }
}
function R({ itemId: e, Fe: t, zt: n }) {
  return {
    itemId: e,
    ...(t && { sourceParentId: t }),
    ...(n !== void 0 && { occurrence: n }),
  };
}
class No {
  constructor(t) {
    ((this.qu = t), (this.map = new Map()));
  }
  v(t) {
    return this.map.get(t);
  }
  async get(t) {
    if (this.map.has(t)) return this.map.get(t);
    {
      let n = await this.qu(t);
      return (this.map.set(t, n), n);
    }
  }
}
function ko(e) {
  return !!e.notes?.text;
}
function $o(e) {
  return e === void 0 || e < 0 ? 0 : e;
}
function Go(e) {
  let t = e.url ?? e.pendingUrl;
  return Se(t);
}
function Jt(e) {
  return e?.startsWith(`${v}placeholder.html?`);
}
function jo({ tab: e, Uu: t, excludedDomains: n = [] }) {
  let r = x(e.url ?? e.pendingUrl);
  return Qe(r) || (e.pinned && !t) || n.includes(j(r));
}
function Bo(e, t = (n) => n) {
  let n = t(e[0]);
  return e.every((r) => t(r) === n);
}
function Wo(e) {
  if (!e) return "";
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return e.replace(/[&<>"']/g, (n) => t[n]);
}
async function Ho() {
  return Nt()
    ? !1
    : navigator.userAgentData?.brands.some(
        ({ brand: e, version: t }) => e === "Chromium" && t >= 120,
      ) &&
        !navigator.userAgentData?.brands.some(
          ({ brand: e, version: t }) => e === "Microsoft Edge",
        );
}
const qo = [
    "grey",
    "blue",
    "red",
    "yellow",
    "green",
    "pink",
    "purple",
    "cyan",
    "orange",
  ],
  Qt = "grey",
  zo = !0,
  Vo = /^[^\p{L}\p{Nd}]+/u;
function _o(e) {
  let t = e.style.position,
    n = e.style.left;
  ((e.style.position = "absolute"),
    (e.style.left = "-1000px"),
    document.body.appendChild(e));
  let r = e.offsetWidth + 1,
    o = e.offsetHeight + 1;
  return (
    (e.style.position = t),
    (e.style.left = n),
    e.remove(),
    { w: r, tt: o }
  );
}
const Jo = [
    "task",
    "done",
    "notifyDate",
    "notify",
    "dueDate",
    "doneDate",
    "recurrenceHistory",
    "recurrence",
  ],
  Qo = [
    "shared",
    "shareExpiryDate",
    "shareIncludeNotes",
    "shareIncludeRatings",
  ],
  Zo = /^https:\/\/(?:[A-Za-z0-9-]+\.)*one-tab\.com\/page\/.*$/;
function Ko({ Ep: e = 1e3, Fp: t, jp: n, Bp: r }) {
  return t.flatMap((o) => {
    if (n(o).length <= e) return [o];
    const i = [];
    let a = n(o).length;
    for (let u = 0; u < a; u += e)
      i.push(r({ Cp: u, entry: o, Hp: n(o).slice(u, u + e) }));
    return i;
  });
}
function Xo(e) {
  try {
    return (JSON.parse(e), !0);
  } catch {
    return !1;
  }
}
function re() {
  return chrome.i18n.getMessage("localeId").replace("_", "-");
}
function Yo() {
  return `${oneTabUrl}/${Zt()}help`;
}
function Zt() {
  let e = re();
  return e === "en" ? "" : `${e}/`;
}
function ei(e, t) {
  return e === t || !e;
}
let Le = !1;
Le && globalThis.document && (document.documentElement.dir = "rtl");
function Kt() {
  return Le || ["ar", "he", "fa", "ps", "ur"].indexOf(re()) >= 0
    ? "rtl"
    : "ltr";
}
let Pe = Kt();
function F() {
  return Pe !== "rtl";
}
function Xt() {
  document.getElementsByTagName("html")[0].dir = Pe;
}
const ve = {};
function Me(e, t) {
  let n = re(),
    r = ve[n];
  r || ((r = new Intl.PluralRules(n)), (ve[n] = r));
  const o = r.select(t);
  let i = chrome.i18n.getMessage(`${e}_${o}`);
  i || (i = chrome.i18n.getMessage(`${e}_other`));
  let a = t;
  return (
    typeof t == "number" && (a = Number(t).toLocaleString()),
    i ? i.replace("{COUNT}", a) : ""
  );
}
async function ti({ h: e, itemId: t, Qo: n }) {
  return (await e.Hn(t, n))
    .slice(1)
    .map((o) => Ue({ groupId: o.id, h: e, l: o }))
    .join(`  ${F() ? "➝" : "⭠"}  `);
}
function ni({ groupId: e, h: t, l: n }) {
  e ??= n?.id;
  let r = n || t.v(e);
  return [Re({ h: t, l: r }), De({ h: t, l: r })];
}
function Ue({ groupId: e, h: t, l: n }) {
  e ??= n?.id;
  let r = n || t.v(e);
  return Re({ h: t, l: r }) || De({ h: t, l: r });
}
function De({ groupId: e, h: t, l: n }) {
  e ??= n?.id;
  let r = n || t.v(e);
  if (K(r)) return A("all");
  if (X(r)) return A("trash");
  if (O(r)) return A("untitled");
  {
    let o = t.Xi(r.id);
    return jt(o);
  }
}
function Re({ groupId: e, h: t, l: n }) {
  e ??= n?.id;
  let r = n || t.v(e);
  return K(r) ? A("all") : X(r) ? A("trash") : r.label;
}
let oe = {};
function Yt({ type: e, zu: t, Xa: n, Wu: r }) {
  r
    ? (delete oe[e], n())
    : oe[e] ||
      ((oe[e] = !0),
      setTimeout(() => Yt({ type: e, zu: t, Xa: n, Wu: !0 }), t));
}
function en() {
  return tn();
}
function tn() {
  if (kt()) return !1;
  const e = navigator.userAgentData?.brands;
  if (e) {
    const n = e.find((r) => /Chrom(e|ium)/i.test(r.brand));
    return n ? Number(n.version) === 145 : !1;
  }
  const t = navigator.userAgent.match(/Chrom(e|ium)\/(\d+)/i);
  return t ? Number(t[2]) === 145 : !1;
}
async function ri(e) {
  if (!en()) return;
  const t = await chrome.tabs.query({ groupId: e });
  if (!t.length) return;
  t.sort((a, u) => a.index - u.index);
  const n = t[0].windowId,
    r = t[0].index;
  let o = (await chrome.tabs.query({ windowId: n, active: !0 }))[0],
    i;
  try {
    (await chrome.tabGroups.update(e, { collapsed: !0 }),
      (i = await chrome.tabs.create({
        windowId: n,
        url: "about:blank",
        active: !0,
        index: r,
      })),
      await chrome.tabs.group({ groupId: e, tabIds: i.id }),
      o?.id && (await chrome.tabs.update(o.id, { active: !0 })),
      await chrome.tabGroups.update(e, { collapsed: !1 }));
  } catch (a) {
    console.error(a);
  } finally {
    if (i?.id)
      try {
        await chrome.tabs.remove(i.id);
      } catch {}
  }
}
(async () => (
  await ae(),
  [...document.querySelectorAll("[data-m]")].forEach(
    (e) => (e.textContent = A(e.dataset.m)),
  )
))();

    return {
      requestOneTabPermission: Jn,
      runWhenDomReady: Tr,
      sharedPageUrlPattern: Zo,
    };
  }
};
