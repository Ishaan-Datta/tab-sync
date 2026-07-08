// @ts-nocheck
globalThis.runOneTabPopupBundle = function runOneTabPopupBundle() {
// Copyright 2026 OneTab Ltd.  All rights reserved.
const {
  version: Un,
  false1: ja,
  false2: Ba,
  false3: Ca,
  false4: Ha,
  false5: qa,
  false6: Ua,
  true1: za,
  chromeUrl: Wa,
  chromeNewTabUrl: Na,
  websiteUrl: Ge,
  false7: Ra,
  false8: Za,
  true2: Qa,
  false9: Ja,
  oneTabPageUrl: hs,
  extensionRootUrl: De,
  tabGroupsEnabled: pi,
  hasTabGroupsPermission: Ka,
  requestTabGroupsPermission: zn,
  requestPermission: ds,
  isOneTabPageUrl: Qe,
  isExtensionUrl: Xa,
  stripHttpProtocol: Wn,
  domainWithoutWww: fs,
  extractDomain: ge,
  protocolPrefix: Ya,
  commonDomainSuffixes: ps,
  registeredDomain: Nn,
  addNoCacheRandom: Rn,
  noCacheRandom: Zn,
  postJson: _a,
  fetchJson: Qn,
  randomAlphabet: mi,
  randomId: Jn,
  randomHex: Va,
  newId: Xt,
  textEncoder: Kn,
  textDecoder: tl,
  digestBytes: Xn,
  digestText: Yn,
  stableIdFromText: Pe,
  trimWhitespace: wi,
  isLineBreak: _n,
  nonStandardLineBreaks: Vn,
  normalizeLineBreaks: to,
  removeControlCharacters: ms,
  removeControlCharactersExceptTabs: ws,
  normalizedOrDefault: xi,
  normalizeText: ce,
  endsWith: eo,
  compareVersionParts: xs,
  versionLessThan: io,
  versionGreaterThan: so,
  versionBetween: el,
  defaultSettings: il,
  moveElementToIndex: no,
  insertBeforeElement: oo,
  div: c,
  createElement: U,
  internalProps: ro,
  createNode: Je,
  readerUrlPrefix: bs,
  normalizeUrl: bt,
  placeholderUrlFor: ao,
  isFileAccessBlocked: lo,
  parseDigits: sl,
  last: nl,
  backoffSteps: ys,
  backoffDurations: co,
  waitForCondition: ol,
  translate: p,
  runWhenDomReady: uo,
  horizontalDivider: ee,
  relativeTimeFormatter: ho,
  relativeTimeUnits: gs,
  relativeTime: ks,
  relativePastTime: Ts,
  relativeFutureTime: fo,
  deepEqual: Ke,
  sortObjectDeep: Is,
  clearArray: vs,
  uniqueBy: Vt,
  arrayInsert: po,
  sameSet: mo,
  sameJson: rl,
  pushUnique: ke,
  includes: ie,
  includesAny: me,
  removeAll: bi,
  removeWhere: al,
  toggleValue: ll,
  removeFirstWhere: cl,
  maybeArray: G,
  removeOccurrence: ul,
  mapIdsToItems: hl,
  filterToSet: dl,
  filterNested: yi,
  not: Le,
  partition: we,
  partitionMany: fl,
  asyncPartition: pl,
  activateTab: As,
  activateTabAndWindow: ml,
  randomItem: wl,
  randomColor: xl,
  excludedUrlPrefixes: wo,
  isExcludedUrl: $s,
  saveUncommittedChanges: xe,
  clearUncommittedChanges: xo,
  getUncommittedChanges: gi,
  clearAllUncommittedChanges: bl,
  pruneUncommittedChanges: bo,
  localStorageAdapter: go,
  getLocalStorageAdapter: yl,
  placeholderParts: vl,
  makeProxyHandler: Ol,
  identity: $i,
  intersperseLocal: Pl,
  childTypeCode: Ll,
  editTypeCode: El,
  tabTypeCode: Fl,
  sessionStorageAdapter: Go,
  getSessionStorageAdapter: Si,
  runtimeMarker: Do,
  renderLabelSegments: Ms,
  tabCount: Di,
  bookmarkCount: jo,
  replaceLabelSegments: Pi,
  htmlEscapeText: Lt,
  htmlEscapeAttribute: Ls,
  identityPair: Ve,
  EventAttachment: Es,
  itemOccurrenceRef: Bt,
  AsyncMapCache: zo,
  hasNotesText: Ul,
  nonNegative: ti,
  isTabExcluded: Li,
  isPlaceholderUrl: Wo,
  shouldSkipTab: No,
  allSame: zl,
  escapeXml: Wl,
  isChromium120OrNewer: Ro,
  colorNames: Fs,
  defaultColor: Ie,
  true3: Nl,
  leadingNonAlphanumeric: Rl,
  measureElement: Zl,
  modelPredicates: { isUndefined: gl, isDefined: ko, hasId: kl, doesNotHaveId: To, sameIdAs: Tl, getId: Nt, isTab: _, isRoot: ht, isTrash: jt, isFolder: B, isArchived: ue, isTask: Xe, isUserFolder: Il, isQuickList: ki, isFolderOrWindowGroup: Ti, isGroup: at, isTabGroup: dt, isWindowGroup: yt, isBrowserGroup: he, isNotQuickList: pt, isSharedAndNotExpired: Io },
  collectionHelpers: { combineComparators: se, compareAscendingBy: Ii, compareDescendingBy: ne, compareLocaleBy: Ss, compareLocaleNumericBy: Al, mergeOwnProperty: $l, mergeDefined: Sl, mapBy: vo, groupBy: Ml, range: Ao, nthIndexOf: Gl, KeyedObjectMap: Dl },
  searchHelpers: { splitSearchText: $o, splitSearchTextWithTerm: So, createSearchTermRegExp: Os },
  runtimeHelpers: { delay: de, replaceValueDeep: Oi, isOpera: Po, isBrave: jl, isMicrosoftEdge: Lo, unsleepTab: Bl, mergeObjectsWithSeparators: Mi, intersperse: Cl, callIfOwnProperty: Gi, callIfDefined: Eo, joinUniqueTrimmed: Hl },
  domTransitionHelpers: { fadeOut: Fo, fadeIn: ql },
  applyRuntimeHelpers: { applyValue: Ee, applyIfTruthy: qt },
  urlHelpers: { trimTrailingDotOrComma: Bo, substringAfter: Co, stripProtocol: oe, equalIgnoringProtocol: _e, safeNormalizeText: be, canonicalizeTextAsUrl: Gs, areUrlLikeEqual: Ds, isYouTubeUrl: Ho, shouldUseCandidateUrl: qo, safeNonJavascriptUrl: Te },
  textHelpers: { normalizeImportedText: Uo },
  importHelpers: { parseImportedTabGroups: Ps }
} = globalThis.createOneTabBundlePrelude({
  getCoreProxy: () => v,
  isNewOrBlankTabPageUrl: url => dr(url),
  pluralize: (key, count) => gt(key, count),
  trimToLengthWithEllipsis: (...args) => Tn(...args),
});
const {
  taskFieldNames: Fe,
  shareFieldNames: js,
  sharedPageUrlPattern: Ql,
  splitOversized: Jl,
  isJson: Zo,
  localeId: Ei,
  helpUrl: Qo,
  localizedPathPrefix: Jo,
  matchesOrUnset: Bs,
  getDirection: Ko,
  isLtr: st,
  applyDocumentDirection: qs,
  pluralize: gt,
  groupPathLabel: Kl,
  groupLabelParts: Xo,
  groupDisplayLabel: je,
  groupFallbackLabel: Fi,
  groupLabel: ji,
  debounceByType: Yo,
  shouldApplyChrome145Workaround: _o,
  isChrome145: Vo,
  uncollapseChrome145TabGroup: Xl,
} = globalThis.createOneTabPageCommon({
  websiteUrl: Ge,
  translate: p,
  tabCount: Di,
  isRoot: ht,
  isTrash: jt,
  isFolder: B,
  isMicrosoftEdge: Lo,
});
const { cleanUrlForSearch: tr } = globalThis.createOneTabUrlQueryCleanup();
function er() {
  return crypto.getRandomValues(new Uint8Array(256 / 8));
}
function Yl() {
  return ir(er());
}
function ir(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function _l(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
async function Vl({ key: t, data: e }) {
  return new Uint8Array(await crypto.subtle.sign({ name: "HMAC" }, t, e));
}
const { ItemCache: $t } = globalThis.createOneTabItemCache(
  {
    get kt() { return $t; },
    get rt() { return kt; },
    get ge() { return Be; },
    get Ir() { return mr; },
    get prettyPrintUrl() { return Hi; },
    get vr() { return wr; },
    get Or() { return xr; },
    get He() { return Le; },
    get Ct() { return ue; },
    get at() { return pt; },
    get Vt() { return Nt; },
    get Mr() { return br; },
    get G() { return B; },
    get _() { return at; },
    get _t() { return ne; },
    get j() { return _; },
    get V() { return ht; },
    get w() { return p; },
    get as() { return Os; },
    get $r() { return tr; },
    get we() { return se; },
    get Gr() { return gr; },
    get Zn() { return ko; },
    get je() { return Xe; },
    get O() { return G; },
  }
);
function sr(t) {
  if (!t.startsWith("xn--")) return t.toLowerCase();
  const e = 36,
    i = 1,
    s = 26,
    n = 38,
    o = 700,
    a = 72,
    r = 128,
    l = "-",
    h = (k) =>
      k - 48 < 10 ? k - 22 : k - 65 < 26 ? k - 65 : k - 97 < 26 ? k - 97 : e,
    d = (k, u, T) => {
      ((k = T ? Math.floor(k / o) : k >> 1), (k += Math.floor(k / u)));
      let I = 0;
      for (; k > ((e - i) * s) >> 1; )
        ((k = Math.floor(k / (e - i))), (I += e));
      return I + Math.floor(((e - i + 1) * k) / (k + n));
    },
    f = t.slice(4).toLowerCase(),
    b = f.lastIndexOf(l),
    y = b === -1 ? [] : f.slice(0, b).split("");
  let m = r,
    x = 0,
    g = a,
    w = b + 1;
  for (; w < f.length; ) {
    let k = x,
      u = 1,
      T = e;
    for (; ; T += e) {
      const $ = h(f.charCodeAt(w++));
      x += $ * u;
      const S = T <= g ? i : T >= g + s ? s : T - g;
      if ($ < S) break;
      u *= e - S;
    }
    const I = y.length + 1;
    ((g = d(x - k, I, k === 0)),
      (m += Math.floor(x / I)),
      (x %= I),
      y.splice(x, 0, String.fromCodePoint(m)),
      x++);
  }
  return y.join("");
}
const nr = (() => {
    const t = Object.create(null);
    return (e) => t[e] || (t[e] = sr(e));
  })(),
  or = new Set([47, 63, 35, 37]);
function Ci(t) {
  return t.replace(/(%[0-9A-Fa-f]{2})+/g, (e) => {
    if (
      e
        .match(/%[0-9A-Fa-f]{2}/g)
        .map((s) => parseInt(s.slice(1), 16))
        .some((s) => s < 32 || s === 127 || s === 32 || or.has(s))
    )
      return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  });
}
const rr = /^[\w\-._~:/?#\[\]@!$&'()*+,;=%]+$/;
function Hi(t) {
  if (rr.test(t) && !t.includes("%") && !t.includes("xn--")) return t;
  let e;
  try {
    e = new URL(t);
  } catch {
    return t;
  }
  const i = e.hostname.split(".").map(nr).join("."),
    n = /\/\/[^\/?#]*\//.test(t) ? Ci(e.pathname) : "",
    o = Ci(e.search),
    a = Ci(e.hash);
  let r = e.protocol + "//";
  return (
    e.username &&
      (r += e.username + (e.password ? ":" + e.password : "") + "@"),
    (r += i),
    e.port && (r += ":" + e.port),
    r + n + o + a
  );
}
const Yt = globalThis.createOneTabIconAtlas();
async function zs() {
  let e = (await chrome.tabs.query({ active: !0, currentWindow: !0 })).find(
    (i) => i.active,
  );
  if (e) return e;
  throw new Error("No active tab in current window found");
}
async function Ws(t) {
  if (t !== void 0) {
    let e = await chrome.tabs.query({ windowId: t });
    return { tabs: e, activeTab: e.find((i) => i.active) };
  } else return await ar();
}
async function ar() {
  let t = await ei(!1);
  if (!t) return;
  let e = await chrome.tabs.query({ windowId: t.id });
  return { tabs: e, activeTab: e.find((i) => i.active), lastFocusedWindow: t };
}
async function tc(t) {
  let e = await chrome.tabs.query({ windowId: t });
  return { tabs: e, activeTab: e.find((i) => i.active) };
}
async function ec() {
  return await chrome.tabs.query({});
}
async function ic(t) {
  let e = await ei(!1),
    i = await chrome.tabs.query({});
  i = i.filter((n) => !(t && e && n.windowId === e.id));
  let s = new Map();
  return (
    i.forEach((n) => {
      (s.has(n.windowId) || s.set(n.windowId, []), s.get(n.windowId).push(n));
    }),
    Array.from(s.values())
  );
}
async function sc(t) {
  await chrome.tabs.reload(t.id, {});
}
async function nc(t) {
  return await lr(t.id);
}
async function lr(t) {
  return new Promise((e, i) => {
    chrome.tabs.remove(t, () => {
      (chrome.runtime.lastError &&
        console.log(chrome.runtime.lastError.message),
        e());
    });
  });
}
async function oc(t) {
  let e = await chrome.tabs.query({}),
    i = new Set(e.map(Nt)),
    s = t.filter((n) => i.has(n));
  try {
    await chrome.tabs.remove(s);
  } catch (n) {
    console.log(n);
  }
}
async function rc(t) {
  await chrome.windows.remove(t);
}
async function ac(t) {
  (await ei(!1)).id !== t.windowId &&
    (await chrome.windows.update(t.windowId, { focused: !0 }));
  const [i] = await chrome.tabs.query({ active: !0, windowId: t.windowId });
  i.id !== t.id && (await chrome.tabs.update(t.id, { active: !0 }));
}
async function cr(t) {
  return ((t = { ...t }), await chrome.tabs.create(t));
}
async function lc(t) {
  await chrome.windows.create(t);
}
async function cc(t, e) {
  await chrome.tabs.move(t, { index: e });
}
async function uc(t = !1) {
  return chrome.windows.getAll({ populate: !!t });
}
async function ei(t = !1) {
  if (chrome.windows)
    try {
      return await chrome.windows.getLastFocused({ populate: t });
    } catch (e) {
      console.log(`windows.getLastFocused error: ${e}`);
      return;
    }
}
async function ur(t, e, i, s = {}) {
  ((s.url = t), (s.pinned = !!e), (s.active = !!i));
  let n = await ei(!1);
  return (n && (s.windowId = n.id), await cr(s));
}
function hc() {
  chrome.commands.onCommand.addListener((t, e) => {
    (async () => {
      if (
        (t === "display-onetab" &&
          (await core.eh(e), await core.dl({ _p: e?.windowId })),
        t === "send-current-tab-to-onetab")
      ) {
        let { tabs: i, activeTab: s } = await Ws(e?.windowId);
        await sendSingleTabToOneTab({ fl: s });
      }
      if (t === "send-all-tabs-in-current-window-to-onetab") {
        let { tabs: i, activeTab: s } = await Ws(e?.windowId);
        await sendTabsFromWindowToOneTab({
          tabs: i,
          Vp: !0,
          tm: !0,
          im: e,
          sm: !0,
        });
      }
    })();
  });
}
let ii;
async function Ns() {
  if (ii) return ii.value;
  {
    let t = await Si().get("oneTabTabId");
    return ((ii = { value: t }), t);
  }
}
async function Rs(t) {
  ((ii = { value: t }),
    t === void 0
      ? await Si().remove("oneTabTabId")
      : await Si().put("oneTabTabId", t));
}
async function Zs(t) {
  await core.bt("oneTabTabPinned", `${!!t}`);
}
let ve;
function hr(t) {
  return ve?.tabId === t && +new Date() - ve.date < 500;
}
function dc() {
  (chrome.tabs.onRemoved.addListener(
    async (t, { windowId: e, isWindowClosing: i }) => {
      t === (await Ns()) &&
        (hr(t) && (await Zs(!0)), (ve = void 0), await Rs(void 0));
    },
  ),
    chrome.tabs.onUpdated.addListener(async (t, e, i) => {
      try {
        let s = [i.url, i.pendingUrl].some((o) => Qe(o));
        (t === (await Ns()) &&
          !s &&
          i.pinned &&
          (await Rs(void 0), await chrome.tabs.update(t, { pinned: !1 })),
          s &&
            Object.hasOwn(e, "pinned") &&
            (e.pinned === !1
              ? (ve = { tabId: t, date: +new Date() })
              : ve?.tabId === t && (ve = void 0),
            await Zs(e.pinned)));
      } catch (s) {
        console.log(s);
      }
    }));
}
function fc(t) {
  return chrome.runtime.getURL(t);
}
async function pc() {
  chrome.runtime.reload();
}
function dr(t) {
  if (!t) return !1;
  const e = t.toLowerCase();
  return e === "about:blank" || e === "about:newtab" || e === "about:home"
    ? !0
    : /^chrome:\/\/new(tab|-tab-page)\/?$/.test(e) ||
        /^edge:\/\/newtab\/?$/.test(e) ||
        /^brave:\/\/newtab\/?$/.test(e) ||
        /^vivaldi:\/\/(newtab|startpage)\/?$/.test(e) ||
        /^opera:\/\/(newtab|startpage)\/?$/.test(e);
}
async function fr(t) {
  try {
    return await chrome.tabs.get(t);
  } catch {
    return;
  }
}
async function pr(t) {
  return (await chrome.tabs.query({})).filter((e) => e.url === t);
}
async function mc(t) {
  let e = await pr(t);
  if (e.length === 0) throw new Error("No tab found with URL: " + t);
  if (e.length > 1) throw new Error("More than one tab found with URL: " + t);
  return e[0];
}
async function wc(t, e) {
  let i = t.groupId;
  if (chrome.tabGroups && t.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE) {
    let s = await core.getSettings(["pinnedTabs", "excludedDomains"]);
    e
      .filter(
        (o) =>
          !No({
            tab: o,
            Uu: s.pinnedTabs === "allow",
            excludedDomains: s.excludedDomains,
          }),
      )
      .filter((o) => o.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE).length ||
      (i = e
        .sort(se(Ii((o) => o.index)))
        .find(
          (o) => o.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE,
        )?.groupId);
  }
  return i !== void 0 ? e.filter((s) => s.groupId === i) : [];
}
const { S: Z, bl: xc, ge: Be, rt: kt, Ir: mr, vr: wr, Or: xr, Mr: br, Lr: yr, gl: bc, Gr: gr } = globalThis.createOneTabItemStore({
  hi: $i,
  jn: Vt,
  Yt: be,
  cr: qo,
  At: bt,
  Ne: Ve,
  Bt: Xt,
  dr: zo,
  at: pt,
  bt: jt,
  Kn: vo,
  Vt: Nt,
  _: at,
  G: B,
});
const { il: yc, Di: Ht, le: qi, ur: Qs, cr: kr, fi: Ut, he: Ui, cs: Js, $t: Jt, el: Tr, ue: zi, ce: Wi, xs: _s, fr: Ir, dr: vr, ws: Vs, ms: tn, Kt: Ae } = globalThis.createOneTabBaseControls({ h: (...a) => c(...a), G: (...a) => U(...a), vi: (...a) => Je(...a), W: (...a) => et(...a), z: (...a) => nt(...a), St: (...a) => te(...a), Ei: (...a) => ae(...a), mi: (...a) => ze(...a), bi: (...a) => We(...a), O: (...a) => G(...a), Si: (...a) => Ee(...a), J: () => st(), Cs: (...a) => Mn(...a), Ni: (...a) => ui(...a), Yt: (...a) => _t(...a), Qt: (...a) => ke(...a), Ji: (...a) => wi(...a), He: (...a) => ws(...a), Be: (...a) => ms(...a), se: (...a) => Pi(...a), dn: (...a) => _n(...a), spinner: (...a) => Qi(...a), getFt: () => le, getDnd: () => E, getP: () => Q, getVt: () => { try { return Kt; } catch { return; } }, getFe: () => Ni, getLt: () => Mt, getTooltip: () => It, getQs: () => An });
const { bs: en, Gi: si, kt: Et, Pt: re, ys: sn, Xt: $e, W: et, yr: nn } = globalThis.createOneTabViewControls({
  get $r() { return Fr; },
  get $t() { return Jt; },
  get A() { return v; },
  get Ae() { return ss; },
  get B() { return _; },
  get Bi() { return ye; },
  get Bn() { return Io; },
  get Dt() { return ie; },
  get Ei() { return ae; },
  get Es() { return yn; },
  get Fn() { return To; },
  get Fr() { return Zr; },
  get Ft() { return le; },
  get G() { return U; },
  get Ii() { return Ke; },
  get ItemCache() { return $t; },
  get J() { return st; },
  get Ki() { return ki; },
  get Kt() { return Ae; },
  get L() { return B; },
  get Ls() { return ai; },
  get Mr() { return Hr; },
  get Mt() { return gt; },
  get Ni() { return ui; },
  get Nt() { return he; },
  get O() { return G; },
  get Oe() { return as; },
  get On() { return mo; },
  get P() { return Q; },
  get Pe() { return Qe; },
  get Ps() { return Ki; },
  get Qe() { return gi; },
  get Qn() { return Eo; },
  get Qt() { return ke; },
  get St() { return te; },
  get Ts() { return an; },
  get We() { return Ts; },
  get X() { return mt; },
  get Yt() { return _t; },
  get Zn() { return Fo; },
  get Zt() { return xe; },
  get _() { return ht; },
  get as() { return Bs; },
  get bi() { return We; },
  get bt() { return Ct; },
  get ci() { return je; },
  get cs() { return Js; },
  get displayAutoActionOnOpenOptionModal() { return displayAutoActionOnOpenOptionModal; },
  get dnd() { return E; },
  get dt() { return at; },
  get ee() { return Di; },
  get et() { return Tt; },
  get fi() { return Ut; },
  get ft() { return Pt; },
  get ge() { return ts; },
  get getActiveTabInCurrentWindow() { return zs; },
  get getItemById() { return kt; },
  get getTabById() { return fr; },
  get gr() { return Gr; },
  get gt() { return qt; },
  get h() { return c; },
  get he() { return Ui; },
  get hi() { return Ie; },
  get ie() { return Gi; },
  get ji() { return li; },
  get lt() { return Mt; },
  get mi() { return ze; },
  get ms() { return tn; },
  get mt() { return yt; },
  get navigateToItem() { return navigateToItem; },
  get nt() { return It; },
  get oi() { return ee; },
  get oneTabPage() { return oneTabPage; },
  get os() { return js; },
  get ot() { return dt; },
  get qt() { return de; },
  get re() { return Fi; },
  get showSharingModal() { return showSharingModal; },
  get ss() { return Es; },
  get st() { return At; },
  get to() { return ha; },
  get ue() { return zi; },
  get ui() { return Fe; },
  get ut() { return pt; },
  get vn() { return fo; },
  get we() { return Ji; },
  get ws() { return Vs; },
  get wt() { return jt; },
  get x() { return p; },
  get xi() { return Se; },
  get xs() { return _s; },
  get xt() { return Bt; },
  get ye() { return Vi; },
  get z() { return nt; },
  get ze() { return vs; },
});
let Ue, le;
const { gr: Gr, nl: kc, kr: Dr, rl: Pr, Tr: Lr, lt: Mt, Ar: Er, ol: Tc, $r: Fr, fe: Ni, vr: jr, Ir: Br, Or: Cr, Mr: Hr, Sr: qr, al: Ur } = createOneTabUiControls({ h: (...a) => c(...a), G: (...a) => U(...a), W: (...a) => et(...a), Xt: $e, O: (...a) => G(...a), ws: Vs, co: (...a) => Ia(...a), xe: (...a) => Qi(...a), z: (...a) => nt(...a), ti: (...a) => Oe(...a), Kr: (...a) => la(...a), x: (...a) => p(...a), Gs: (...a) => xn(...a), J: () => st(), Yr: (...a) => ua(...a), Bs: (...a) => gn(...a), Ve: (...a) => Ms(...a), Qt: (...a) => ke(...a), Zi: (...a) => bi(...a), ze: (...a) => vs(...a), oi: (...a) => ee(...a), St: (...a) => te(...a), getSettings: () => v, getModal: () => Ct, getTheme: () => Ue, getTooltip: () => It });
const {
  X: mt,
  st: At,
  gs: on,
  de: Ri,
  Lr: zr,
  di: Ce,
  Dr: Wr,
  Gr: Nr,
  ll: Ic,
  Se: cs,
  ft: Pt,
  Rt: fe,
} = globalThis.createOneTabTreeRenderer({
  get $t() { return Jt; },
  get A() { return v; },
  get Ae() { return ss; },
  get B() { return _; },
  get Ct() { return me; },
  get Dt() { return ie; },
  get Ei() { return ae; },
  get En() { return ue; },
  get Fe() { return fs; },
  get Ft() { return le; },
  get G() { return U; },
  get Hs() { return 300; },
  get Ht() { return Xt; },
  get Ii() { return Ke; },
  get ItemCache() { return $t; },
  get J() { return st; },
  get Kt() { return Ae; },
  get L() { return B; },
  get Mt() { return gt; },
  get Ni() { return ui; },
  get Nt() { return he; },
  get O() { return G; },
  get Oe() { return as; },
  get Oi() { return se; },
  get P() { return Q; },
  get Pr() { return (...a) => Rr(...a); },
  get Ps() { return (...a) => Ki(...a); },
  get Qe() { return gi; },
  get Qi() { return xi; },
  get Si() { return Ee; },
  get Tn() { return ao; },
  get W() { return et; },
  get We() { return Ts; },
  get Zr() { return ra; },
  get Zt() { return xe; },
  get _e() { return Xe; },
  get _s() { return En; },
  get ai() { return ne; },
  get be() { return _i; },
  get bi() { return We; },
  get bs() { return en; },
  get bt() { return Ct; },
  get cr() { return kr; },
  get dnd() { return E; },
  get dt() { return at; },
  get ee() { return Di; },
  get fe() { return Ni; },
  get ge() { return ts; },
  get getItemById() { return kt; },
  get gn() { return oo; },
  get gt() { return qt; },
  get h() { return c; },
  get he() { return Ui; },
  get hi() { return Ie; },
  get js() { return (...a) => Tn(...a); },
  get jt() { return ce; },
  get ks() { return (...a) => rn(...a); },
  get lt() { return Mt; },
  get mi() { return ze; },
  get ms() { return tn; },
  get nn() { return Wn; },
  get ns() { return ti; },
  get oneTabPage() { return oneTabPage; },
  get or() { return Xo; },
  get ot() { return dt; },
  get prettyPrintUrl() { return Hi; },
  get se() { return Pi; },
  get te() { return Mi; },
  get ue() { return zi; },
  get ui() { return Fe; },
  get ut() { return pt; },
  get we() { return Ji; },
  get wt() { return jt; },
  get x() { return p; },
  get xt() { return Bt; },
  get ye() { return Vi; },
  get yn() { return no; },
  get yt() { return bt; },
  get z() { return nt; },
  get zi() { return Pe; },
  get zt() { return pe; },
});
const {
  pi: He,
  Pr: Rr,
  ks: rn,
  Fr: Zr,
  Ts: an,
  Pi: ni,
  pe: Zi,
  As: ln,
  $s: cn,
  hl: vc,
  Er: Qr,
  ul: Ac,
  vs: un,
  Br: Jr,
  cl: $c,
  Fi: oi,
  Hr: hn,
  jr: Kr,
  A: v,
  Vt: qe,
  Nr: Xr,
  xi: Se,
  Yt: _t,
  Ei: ae,
  Bi: ye,
  fl: Sc,
  Is: dn,
  qr: Yr,
  Rr: _r,
  Hi: ri,
  Os: fn,
  Ms: pn,
  Ur: Vr,
  Ss: mn,
  Ls: ai,
  Ds: wn,
  Wr: ta,
  xe: Qi,
  we: Ji,
  Gs: xn,
  Cr: ea,
  dl: ia,
  Ps: Ki,
  pl: Oc,
  zr: sa,
  Jr: na,
  xl: Mc,
  me: Xi,
  Qr: oa,
  Fs: bn,
  wl: Gc,
  ml: Dc,
  Zr: ra,
  Es: yn,
  ti: Oe,
  z: nt,
  mi: ze,
  _r: aa,
  bi: We,
  ji: li,
  Bs: gn,
  Kr: la,
  Hs: kn,
  js: Tn,
  bl: Pc,
  yl: ca,
  Xr: Yi,
  Vr: In,
  gl: ci,
  be: _i,
  kl: Lc,
  Yr: ua,
  to: ha,
  Tl: Ec,
  Al: Fc,
  et: Tt,
} = globalThis.createOneTabTreeActions({
  get $i() { return ge; },
  get Ai() { return Ge; },
  get B() { return _; },
  get Cn() { return Do; },
  get Di() { return Ht; },
  get Fe() { return fs; },
  get G() { return U; },
  get Hn() { return Ao; },
  get Ht() { return Xt; },
  get ItemCache() { return $t; },
  get J() { return st; },
  get L() { return B; },
  get Ns() { return vn; },
  get O() { return G; },
  get Se() { return cs; },
  get Si() { return Ee; },
  get Sn() { return Le; },
  get Sr() { return qr; },
  get W() { return et; },
  get Xe() { return $i; },
  get Yi() { return Oi; },
  get Ze() { return Nt; },
  get _() { return ht; },
  get _i() { return we; },
  get _n() { return jo; },
  get ci() { return je; },
  get cs() { return Js; },
  get dt() { return at; },
  get en() { return Un; },
  get getItemById() { return kt; },
  get getItems() { return Be; },
  get h() { return c; },
  get hi() { return Ie; },
  get lt() { return Mt; },
  get mt() { return yt; },
  get navigateToItem() { return navigateToItem; },
  get oneTabPage() { return oneTabPage; },
  get ot() { return dt; },
  get qt() { return de; },
  get rr() { return qs; },
  get ss() { return Es; },
  get te() { return Mi; },
  get ut() { return pt; },
  get x() { return p; },
  get xt() { return Bt; },
  get yt() { return bt; },
  get zi() { return Pe; },
  get zt() { return pe; },
  setThemeState({ wi: i, Ft: t }) { Ue = i; le = t; },
});
let Q = {};
const { vt: Kt, ye: Vi, Ni: ui, ge: ts, Ns: vn, qi: hi, io: da, qs: An, $l: jc, eo: fa, Rs: $n, vl: Bc, ke: es, so: pa, no: ma, Il: Cc, Te: is, ro: wa, Us: Sn, Ae: ss, at: Ot, Ws: On, Cs: Mn, Ol: Hc, Ml: qc, zs: Gn, Js: Dn, $e: ns, Sl: xa, oo: ba, Qs: Pn, ve: os, Ie: rs, Zs: Ln, _s: En, Oe: as } = globalThis.createOneTabTreeInteractions({get _(){return ht},get _e(){return Xe},get _t(){return Te},get A(){return v},get Ai(){return Ge},get ao(){return ya},get B(){return _},get Bi(){return ye},get ce(){return Wi},get Cr(){return ea},get Ct(){return me},get displayAutoActionOnOpenOptionModal(){return displayAutoActionOnOpenOptionModal},get dnd(){return E},get dt(){return at},get Dt(){return ie},get er(){return Zo},get es(){return Ls},get et(){return Tt},get fi(){return Ut},get ft(){return Pt},get G(){return U},get getItemById(){return kt},get getItems(){return Be},get Gi(){return si},get go(){return Da},get gt(){return qt},get Gt(){return oe},get h(){return c},get he(){return Ui},get hi(){return Ie},get ho(){return ka},get Ht(){return Xt},get iconGrid(){return Yt},get is(){return Ps},get ItemCache(){return $t},get J(){return st},get ji(){return li},get Ki(){return ki},get Ks(){return Fn},get kt(){return Et},get L(){return B},get Ls(){return ai},get lt(){return Mt},get mt(){return yt},get Mt(){return gt},get navigateToItem(){return navigateToItem},get Nr(){return Xr},get ns(){return ti},get Nt(){return he},get O(){return G},get oi(){return ee},get oneTabPage(){return oneTabPage},get ot(){return dt},get P(){return Q},set P(value){Q = value},get pi(){return He},get pt(){return Lt},get Pt(){return re},get qr(){return Yr},get qt(){return de},get rn(){return Nn},get Rr(){return _r},get rs(){return Fs},get Rt(){return fe},get showSharingModal(){return showSharingModal},get Ss(){return mn},get te(){return Mi},get ti(){return Oe},get ut(){return pt},get Vt(){return qe},get W(){return et},get x(){return p},get X(){return mt},get xi(){return Se},get xs(){return _s},get xt(){return Bt},get ys(){return sn},get Yt(){return _t},get zt(){return pe}});
let It, Re;
const { Ks: Fn, ao: ya, lo: ga, Ll: jn, yi: Ne, Dl: Uc, zt: pe, Gl: zc, Xs: Bn, ho: ka, uo: Ta, bt: Ct, co: Ia, fo: va, po: Aa, xo: $a, Me: ls, wo: Sa, Vs: Cn, mo: Oa, bo: Ma, yo: Ga, go: Da, Ys: Hn, tn: qn, St: te, ko: Pa } = globalThis.createOneTabImportExportControls({get _(){return ht},get _r(){return aa},get $s(){return cn},get A(){return v},get ai(){return ne},get As(){return ln},get at(){return Ot},get B(){return _},get bi(){return We},get ci(){return je},get Cs(){return Mn},get Di(){return Ht},get dt(){return at},get es(){return Ls},get G(){return U},get Ge(){return ds},get gi(){return Re},set gi(value){Re=value},get h(){return c},get He(){return ws},get In(){return po},get ir(){return Ro},get Ir(){return Br},get is(){return Ps},get ItemCache(){return $t},get J(){return st},get jt(){return ce},get Ke(){return Ii},get L(){return B},get lt(){return Mt},get mi(){return ze},get Mt(){return gt},get nt(){return It},set nt(value){It=value},get O(){return G},get oe(){return ji},get Oi(){return se},get pt(){return Lt},get ti(){return Oe},get vr(){return jr},get Vt(){return qe},get W(){return et},get Ws(){return On},get x(){return p},get yr(){return nn},get yt(){return bt},get z(){return nt}});
const E = new Tr();
uo(async () => {
  (La(), await sa(), qs(), await new di().init());
});
function La() {
  let t = Math.floor(
    (window.visualViewport && window.visualViewport.width) ||
      window.innerWidth ||
      document.documentElement.clientWidth,
  );
  const e = parseInt(getComputedStyle(document.documentElement).minWidth, 10);
  t < e && (document.documentElement.style.minWidth = `${t}px`);
}
class di {
  async init() {
    if (await v.yx()) {
      (document.getElementById("loadingSpinner").remove(),
        (document.body.style.minWidth = "400px"));
      let e = document.getElementById("contentAreaDiv");
      document.documentElement.style.minWidth = "0";
      let i = c({
        style: { padding: "30px 40px", maxWidth: "700px", lineHeight: "1.8em" },
        children: {
          gx: c({
            style: {},
            children: {
              Yf: new Pr({
                style: {
                  maxWidth: "100%",
                  marginBottom: "20px",
                  marginInlineStart: "0",
                },
                To: "browserAction",
                heading: p("optionBrowserActionHeading"),
                options: [
                  {
                    settingValue: "sendTabsInWindow",
                    title: p("optionBrowserActionSendTabsInWindowTitle"),
                    xi: p("optionBrowserActionSendTabsInWindowDesc2"),
                  },
                  {
                    settingValue: "openPopup",
                    title: p("optionBrowserActionOpenPopupTitle"),
                    xi: p("optionBrowserActionOpenPopupDesc2"),
                  },
                ],
              }),
            },
          }),
          _f: new Ht({
            label: p("saveChoice"),
            V: !0,
            tabIndex: void 0,
            fontSize: "14px",
            $: {
              flex: "0 0 auto",
              marginInlineStart: "-5px",
              marginTop: "0px",
            },
            onclick: async () => {
              (await v.Ve("pre2.4BrowserActionOptionChosen", !0),
                (await v.ks("browserAction")) === "openPopup"
                  ? (await v.kx(), document.location.reload())
                  : (await v.Tx(), window.close()));
            },
          }),
          Ix: c({
            style: { marginTop: "20px", fontSize: "12px" },
            innerHTML: p("changeThisSettingAtAnyTimeInfoHtml"),
          }),
        },
      });
      (await i.u.Yf.Lt(), e.appendChild(i.i));
      return;
    }
    if (
      pi &&
      !(await chrome.permissions.contains({ permissions: ["tabGroups"] }))
    ) {
      (document.getElementById("loadingSpinner").remove(),
        (document.body.style.minWidth = "400px"));
      let e = document.getElementById("contentAreaDiv");
      ((document.documentElement.style.minWidth = "0"),
        e.appendChild(
          c({
            style: {
              padding: "30px 40px",
              maxWidth: "400px",
              lineHeight: "1.8em",
            },
            children: {
              vf: et(
                {
                  width: 310 / 2 + "px",
                  height: 86 / 2 + "px",
                  style: { cursor: "pointer", marginBottom: "10px" },
                  St: async () =>
                    await chrome.tabs.create({ url: Ge, active: !0 }),
                },
                (i) =>
                  `images/top-left-logo-sml-${i ? "light" : "dark"}${st() ? "" : "-rtl"}.png`,
              ),
              vx: c({ textContent: p("oneTabDesignedToProtectPrivacy") }),
              Ax: c({
                style: { marginTop: "20px" },
                textContent: p("clickButtonToAllowTabAccess"),
              }),
              _f: new Ht({
                label: p("continue"),
                V: !0,
                tabIndex: void 0,
                fontSize: "14px",
                $: {
                  flex: "0 0 auto",
                  marginInlineStart: "-5px",
                  marginTop: "18px",
                },
                onclick: async () => {
                  (await zn()) && document.location.reload();
                },
              }),
              $x: c({
                style: { marginTop: "20px", fontSize: "12px" },
                textContent: p("thenClickToolbarIcon"),
              }),
            },
          }).i,
        ));
      return;
    }
    if ((await xa(), !(await ia(document.getElementById("contentAreaDiv"))))) {
      document.getElementById("loadingSpinner").remove();
      return;
    }
    try {
      await v.corePing();
    } catch {
      let i = document.getElementById("contentAreaDiv");
      ((i.style.padding = "40px"),
        i.appendChild(document.createTextNode(p("oneTabRestartRequired"))),
        document.getElementById("loadingSpinner").remove());
      return;
    }
    ((this.li = (await v.Sx()) || (await lo())),
      await this.st(),
      document.getElementById("loadingSpinner").remove(),
      hn((e) => {
        this.Ti?.Ge(e);
      }));
  }
  static Su = {
    quickList: { label: p("quickList") },
    tab: { label: p("thisTab") },
    tabGroup: { label: p("thisTabGroup") },
    window: { label: p("thisWindow") },
  };
  async st() {
    this.Ti?.destroy?.();
    let e = await v.getSettings([
        "lastManualPopupSectionSelection",
        "urlDisplay",
      ]),
      i = document.getElementById("contentAreaDiv"),
      s = ($) =>
        chrome.tabGroups && $.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE,
      n = await chrome.tabs.query({ currentWindow: !0 }),
      o = await chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT),
      a = o.id,
      r = n.filter(($) => !Li($)),
      l = n.find(($) => $.active),
      h = l?.url === hs,
      [d, f] = we(r, ($) => $.pinned),
      b = l.groupId,
      y = l.id,
      m = chrome.tabGroups
        ? await chrome.tabGroups.query({
            windowId: chrome.windows.WINDOW_ID_CURRENT,
          })
        : [],
      x = s(l),
      g = m.find(($) => $.id === l.groupId),
      w = r.filter(($) => $.groupId === l.groupId),
      [k, u] = we(r, s),
      T,
      I;
    {
      let $ = [];
      (x && k.length && $.push("tabGroup"),
        r.length && $.push("window"),
        Li(l) || $.push("tab"),
        (await kt("quickList")).childIds.length && $.push("quickList"));
      let S = e.lastManualPopupSectionSelection;
      ((T = Object.keys(di.Su).filter((j) => [...$].find((K) => K === j))),
        (I = T.find((j) => j === S)),
        I || (I = $[0]));
    }
    ((this.o = c({
      style: {},
      children: {
        header: c({
          style: {
            marginTop: "14px",
            marginInlineStart: "38px",
            marginInlineEnd: "38px",
          },
          children: {
            Ox: c({
              style: { display: "flex", alignItems: "center" },
              children: {
                left: c({
                  style: {
                    marginInlineStart: "5px",
                    marginTop: "2px",
                    flex: "0 0 auto",
                    display: "flex",
                  },
                  children: {
                    Mx: Qs({
                      Be: !0,
                      xl: "div",
                      className: "",
                      label: p("openONETABLogo"),
                      onclick: async ($) => {
                        (await v.eh(), await v.dl({}));
                      },
                      tabIndex: void 0,
                      style: { opacity: h ? 0.2 : 1, fontSize: "12px" },
                    }).o,
                    Gx: c({
                      style: {
                        flex: "1 0 auto",
                        cursor: "pointer",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: "30px",
                      },
                      children: {
                        Dx: c({
                          style: {
                            display: "inline-block",
                            marginInlineEnd: "4px",
                            cursor: "pointer",
                          },
                          textContent: p("help"),
                        }),
                      },
                      onclick: async ($) => {
                        (await v.bt("v2HelpShown", "true"),
                          await ur(Qo(), !1, !0));
                      },
                    }),
                  },
                }),
                mid: c({ style: { flex: "1 1 auto" } }),
                right: c({
                  style: { marginInlineStart: "16px" },
                  p: new nn({
                    Pc: [I],
                    Od: !0,
                    Dc: T.map(($) => ({ label: di.Su[$].label, name: $ })),
                    onChange: async ([$]) => {
                      (await v.bt("lastManualPopupSectionSelection", $),
                        await this.st());
                    },
                  }),
                }),
              },
            }),
            Zt: ee({ marginTop: "4px", marginBottom: "12px" }),
          },
        }),
        body: c({
          style: { marginInlineStart: "28px", marginInlineEnd: "28px" },
        }),
      },
    })),
      ["tab", "tabGroup", "window"].includes(I)
        ? ((this.Ti = new Ze()),
          await this.Ti.Lt({
            Ln: I,
            Px: this,
            parentElement: this.o.body.i,
            currentTab: l,
            di: b,
            Vf: a,
            Ba: n,
            tp: d,
            ep: k,
            sp: u,
            np: r,
            op: w,
            rp: m,
            ap: o,
            lp: g,
          }))
        : I === "quickList" &&
          ((this.Ti = new Fa({ li: this.li, settings: e })),
          await this.Ti.Lt({ parentElement: this.o.body.i }),
          this.o.body.i.appendChild(this.Ti.o.i)),
      I || ((this.Ti = new Ea({})), this.o.body.i.appendChild(this.Ti.o.i)),
      i.replaceChildren(this.o.i));
  }
}
class Ea {
  constructor() {
    this.o = c({
      style: {},
      children: {
        body: c({
          style: {
            marginTop: "16px",
            marginBottom: "24px",
            textAlign: "center",
            fontSize: "12px",
            "text-wrap": "balance",
          },
          textContent: p("noOpenTabsToStore"),
        }),
      },
    });
  }
}
class Fa {
  constructor({ li: e, settings: i }) {
    ((this.li = e),
      (this.settings = i),
      (this.o = c({
        style: {},
        children: {
          body: c({ style: { marginTop: "16px", marginBottom: "24px" } }),
        },
      })));
  }
  async Lt({ parentElement: e }) {
    ((this.views = []), e.replaceChildren(this.o.i), await this.sync());
  }
  async sync() {
    if (this.j) return;
    let { h: e, Vu: i } = await new $t().Te({ groupId: "quickList" }),
      s = e.v("quickList");
    const n = ({ e: o, qi: a, dn: r, tabIndex: l }) => (
      (async () => {
        let h = await zs(),
          f = Qe(h?.url) ? "currentWindow" : "replaceCurrentTab";
        (ye(o) && (o.preventDefault(), o.stopPropagation()),
          await ai({
            Nr: (await chrome.windows.getCurrent()).id,
            id: a.l.id,
            bu: r?.l.id,
            tabIndex: l,
            ...(r && {
              yu: ti(
                r.k.filter((b) => b.l.id === a.l.id).findIndex((b) => b === a),
              ),
            }),
            Yl: ye(o),
            Rr: !Se(o),
            zr: f,
            Wr: !1,
            Lx: !1,
            tc: !(_t(o) || ae(o)),
            _l: ae(o),
            Vl: _t(o),
          }));
      })(),
      !1
    );
    await Ki({
      Hi: !1,
      ea: s.childIds.map((o, a) => ({ id: o, index: a })),
      Me: this.o.body.i,
      views: this.views,
      ia: (o) => o.l.id,
      pn: (o) => o.o?.i,
      sa: async (o, a) => {
        let r = await e.ht(o),
          l;
        return (
          at(r)
            ? ((l = new Et({
                Mt: this.settings.urlDisplay,
                Vt: !B(r),
                H: !0,
                vt: !0,
                tn: !1,
                ao: !1,
                Ft: !1,
                Nl: !0,
                Nt: n,
              })),
              await l.st({ groupId: o, me: !0, h: e }))
            : _(r) &&
              ((l = new mt({
                hn: !0,
                H: !0,
                Nt: n,
                xo: this.li,
                ys: !1,
                Mt: this.settings.urlDisplay,
                vt: !0,
              })),
              await l.st({
                ta: r,
                pinned: !1,
                xe: void 0,
                wt: void 0,
                kn: !0,
              })),
          l
        );
      },
    });
  }
  destroy() {
    this.j = !0;
  }
  async Ge(e) {
    this.j ||
      ((Ee(e.storeMoveCopyAffectedParentIds, (i) => i?.includes("quickList")) ||
        (e.type === "store" && e.targetParentId === "quickList") ||
        (e.type === "move" && e.targetParentId === "quickList") ||
        (e.type === "copy" && e.targetParentId === "quickList") ||
        (e.type === "sort" && e.parentId === "quickList") ||
        e.type === "removeFromQuickList") &&
        (await this.sync()),
      this.views.forEach((i) => i.Ge(e)));
  }
}
class Ze {
  constructor() {
    ((this.o = c({
      style: { marginBottom: "28px" },
      children: {
        cp: U("section", {}),
        Es: U("section", {
          children: {
            up: c({
              style: {
                marginTop: "20px",
                marginBottom: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              children: {
                hp: c({}),
                Ca: c({
                  className: "linkAction",
                  style: {
                    marginTop: "10px",
                    display: "inline-block",
                    fontSize: "12px",
                  },
                  textContent: "",
                  onclick: (e) => {
                    ((this._.i.style.display = "block"),
                      (this.o.Es.u.Ca.i.style.display = "none"),
                      this.dp && (this._.u.fp.o.i.style.display = "none"),
                      (this._.ct.Co.Ha.i.style.visibility = "hidden"));
                  },
                }),
              },
            }),
            body: c({}),
          },
        }),
      },
    })),
      document.addEventListener("keydown", (e) => {
        !Ct.Is &&
          !e.isComposing &&
          e.key === "/" &&
          (e.preventDefault(),
          e.stopPropagation(),
          this.pp() && setTimeout(() => this.Ou?.(), 1));
      }));
  }
  pp() {
    return this._.i.style.display !== "none";
  }
  async Lt(e) {
    ((this.Ho = e),
      this.Ho.parentElement.replaceChildren(this.o.i),
      (this.h = new $t()),
      await this.h.ke(),
      (this.Se = new Set()));
    let s = (await chrome.tabs.query({ currentWindow: !0 }))
      .filter((n) => n.highlighted)
      .map((n) => n.id);
    (s.length > 1 && (this.Se = new Set(s)), await this.Qi(!0));
  }
  async Qi(e) {
    let {
      Ln: i,
      currentTab: s,
      di: n,
      Vf: o,
      Ba: a,
      tp: r,
      ep: l,
      sp: h,
      np: d,
      op: f,
      rp: b,
      ap: y,
      lp: m,
    } = this.Ho;
    (It?.destroy(),
      delete this.Ou,
      this.En && (this.Se = new Set(this.En.nt.map((A) => A.At))));
    let x = `popupCreateNewGroupInside-${i}`,
      g = await v.getSettings([
        "popupOpenOneTabAfterStoringTabs",
        "popupIncludeAlreadyStoredTabs",
        "popupIncludePinnedTabs",
        "popupIncludeGroupedTabs",
        "popupIncludeExcludedDomains",
        "urlDisplay",
        x,
        "popupDontClosePinnedTabs",
        "popupDontCloseGroupedTabs",
        "popupDontCloseTabsFromExcludedDomains",
        "popupMergeCloseTabsAfter",
      ]),
      k = {
        tab: [s],
        tabGroup: a.filter((A) => A.groupId === s.groupId),
        window: a,
      }[i]?.filter((A) => !Li(A));
    this.qa = [];
    let u = new Date().getTime(),
      I = this.h.v("root"),
      $ = i === "tabGroup" ? "tabGroup" : "window";
    {
      let A = `uncommitted:${i}-${{ tab: s.id, tabGroup: n, window: o }[i]}`,
        z = await gi(A);
      if (z.parentIds) {
        let tt = z.parentIds?.find(pt),
          it = tt && (await kt(tt));
        it && !this.h.re.has(tt)
          ? (I = it)
          : (delete z.parentIds, await xe(A, z));
      }
      z.groupType && ($ = z.groupType);
    }
    yt(I) && ($ = "tabGroup");
    let S = await v.Xo(
        await Promise.all(
          k.map(async (A) => {
            let z = bt(A.url || A.pendingUrl);
            return { id: await Pe(z), kt: z, title: A.title };
          }),
        ),
      ),
      j = new Map();
    S.forEach((A) => {
      j.has(A.url) || j.set(A.url, A);
    });
    let K = (A) => j.get(bt(A.url || A.pendingUrl)),
      F = new Set(
        S.filter(
          (A) =>
            A.parentIds.filter((z) => !this.h.re.has(z) && z !== "quickList")
              .length === 0,
        ).map((A) => A.url),
      ),
      [P, q] = we(k, (A) => F.has(bt(A.url || A.pendingUrl)));
    this.Fn = k;
    let D = q.length && P.length;
    this.dp = D;
    let W = i === "window" && r.length;
    this.mp = W;
    let L = i === "window" && l.length;
    this.wp = L;
    let C = await v.Ua(),
      ot = [...new Set(k.map((A) => ge(bt(A.url || A.pendingUrl))))]
        .filter((A) => C.includes(A))
        .sort(se(Ss((A) => A))),
      lt = ot.length,
      X = yt(I) && !(i === "window" && !h.length),
      ct =
        !(i === "window" && yt(I) && g.popupIncludeGroupedTabs === "true") &&
        g[x] === "true";
    i === "window" &&
      Ti(I) &&
      g.popupIncludeGroupedTabs === "true" &&
      ($ = "window");
    let Ft = g.popupIncludeGroupedTabs === "true" && !dt(I);
    this.Mu = dt(I) || (yt(I) && !ct);
    let Gt = !this.Mu,
      St = B(I),
      ft;
    if (i === "window")
      chrome.tabGroups
        ? ((ft = d.reduce(
            (A, z, tt, it) => (
              z.groupId !== it[tt - 1]?.groupId && A.push([]),
              A[A.length - 1].push(z),
              A
            ),
            [],
          )),
          (ft = ft.reduce(
            (A, z) => (
              z[0].groupId === chrome.tabGroups.TAB_GROUP_ID_NONE
                ? A.push(...z)
                : A.push(z),
              A
            ),
            [],
          )))
        : (ft = [...d]);
    else if (i === "tabGroup") ft = f;
    else if (i === "tab") ft = [s];
    else throw new Error(`unhandled section: ${i}`);
    let ut = new Map();
    ft.flat().forEach((A) => {
      let z = bt(A.url || A.pendingUrl);
      ut.has(z) || ut.set(z, A.id);
    });
    const rt = (A) => ut.get(A);
    let wt = ft;
    (i === "window" &&
      (L && !Ft && (wt = wt.filter((A) => !Array.isArray(A))),
      W &&
        g.popupIncludePinnedTabs === "false" &&
        (wt = wt.filter((A) => !A.pinned))),
      D &&
        g.popupIncludeAlreadyStoredTabs === "false" &&
        (wt = yi(wt, (A) => F.has(bt(A.url || A.pendingUrl)))),
      lt &&
        g.popupIncludeExcludedDomains === "false" &&
        (wt = yi(wt, (A) => !C.includes(ge(bt(A.url || A.pendingUrl))))),
      (this.Gu = wt));
    let O = new Set(wt.flat().map((A) => A.id)),
      N = new Set(ft.flat().map((A) => A.id)),
      R = P.filter((A) => N.has(A.id)),
      Y = P.filter((A) => O.has(A.id));
    this.xp = Y;
    let vt = !R.length && !this.Ji;
    this.Du = vt;
    let Rt = !vt;
    ((this._ = U("section", {
      style: { display: Rt ? "block" : "none" },
      children: {
        ct: c({
          style: {
            display: "flex",
            alignItems: "center",
            marginInlineStart: "12px",
          },
          children: {
            Co: c({
              style: { flex: "1 1 auto", margin: "0 24px" },
              children: {
                Ha: c({}),
                bp: c({
                  style: {
                    marginTop: "1px",
                    color: "var(--warning-text-color)",
                    display: "none",
                  },
                  children: {
                    text: U("span", {
                      style: { fontSize: "12px", marginTop: "-1px" },
                      textContent: p("toSaveChangesClickButton"),
                    }),
                    Ex: U("span", {
                      style: { fontSize: "16px" },
                      textContent: st() ? " →" : " ←",
                    }),
                  },
                }),
              },
            }),
            right: c({
              style: { marginInlineEnd: "8px", position: "relative" },
              children: {
                jn: new Ht({
                  label: "...",
                  V: !0,
                  tabIndex: 0,
                  Be: !0,
                  vi: !0,
                  $: { flex: "0 0 auto" },
                  Ai: () => {
                    ((this._.ct.right.jn.o.i.style.visibility = "hidden"),
                      (this._.ct.right.gt.i.style.display = "flex"),
                      document.addEventListener("click", (A) => {
                        ((this._.ct.right.jn.o.i.style.visibility = "visible"),
                          (this._.ct.right.gt.i.style.display = "none"));
                      }));
                  },
                  onclick: async () => await this.qo({ za: !0, Ni: !0 }),
                }),
                gt: c({
                  className: "dropdown-selection",
                  style: {
                    display: "none",
                    position: "absolute",
                    padding: "12px 14px",
                    right: "8px",
                    top: "-13px",
                    backgroundColor: "var(--col-bg-color)",
                    zIndex: 10,
                    textAlign: "end",
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                    gap: "5px",
                    flexDirection: "column",
                  },
                  onclick: (A) => A.stopPropagation(),
                  children: {
                    jn: new Ht({
                      label: "...",
                      V: !0,
                      tabIndex: 0,
                      Be: !0,
                      onclick: async () => await this.qo({ za: !0, Ni: !0 }),
                    }),
                    yp: new Ht({
                      label: "...",
                      V: !0,
                      tabIndex: 0,
                      Yi: !0,
                      Be: !0,
                      onclick: async () => await this.qo({ Ni: !0 }),
                    }),
                    Pu: new Ht({
                      label: "...",
                      V: !0,
                      tabIndex: 0,
                      Yi: !0,
                      Be: !1,
                      onclick: async () => await M(),
                    }),
                  },
                }),
              },
            }),
          },
        }),
        Fx: c({
          style: {
            marginInlineStart: "36px",
            marginInlineEnd: "16px",
            display: "flex",
            flexWrap: "wrap-reverse",
            gap: "0 20px",
          },
          children: {
            jx: c({
              style: { flex: "1 1 auto", display: "flex", flexWrap: "wrap" },
              children: {
                ...(W && {
                  Bx: new Ut({
                    value: g.popupIncludePinnedTabs === "true",
                    fontSize: "12px",
                    label: p("includePinnedTabs"),
                    onChange: async (A) => {
                      (await v.bt(
                        "popupIncludePinnedTabs",
                        A ? "true" : "false",
                      ),
                        (this.Ji = !0),
                        await this.Qi());
                    },
                    ae: `${24 / 2}px`,
                    $: {
                      flex: "0 1 auto",
                      marginInlineEnd: "28px",
                      marginTop: "8px",
                    },
                  }),
                }),
                ...(L && {
                  gp: new Ut({
                    value: Ft,
                    fontSize: "12px",
                    label: p("includeGroupedTabs"),
                    onChange: async (A) => {
                      (A &&
                        i === "window" &&
                        Ti(H.getParent()) &&
                        l.length &&
                        (B(I) && H.hc().et(!1), yt(I) && H.kd().et(!1)),
                        await v.bt(
                          "popupIncludeGroupedTabs",
                          A ? "true" : "false",
                        ),
                        A && (await H.Hh()),
                        (this.Ji = !0),
                        await this.Qi());
                    },
                    hh: async (A, z) =>
                      A && i === "window" && (await H.qh())
                        ? (await pe(p("cannotCreateTabGroupInTabGroup")), !0)
                        : !1,
                    ae: `${24 / 2}px`,
                    $: {
                      flex: "0 1 auto",
                      marginInlineEnd: "28px",
                      marginTop: "8px",
                    },
                  }),
                }),
                ...(D && {
                  fp: new Ut({
                    value: g.popupIncludeAlreadyStoredTabs === "true",
                    fontSize: "12px",
                    label: p("includeTabsAlreadyStored"),
                    onChange: async (A) => {
                      (await v.bt(
                        "popupIncludeAlreadyStoredTabs",
                        A ? "true" : "false",
                      ),
                        (this.Ji = !0),
                        await this.Qi());
                    },
                    ae: `${24 / 2}px`,
                    $: {
                      flex: "0 1 auto",
                      marginInlineEnd: "28px",
                      marginTop: "8px",
                    },
                  }),
                }),
                ...(lt && {
                  kp: new Ut({
                    value: g.popupIncludeExcludedDomains === "true",
                    fontSize: "12px",
                    label: p("includeTabsFromDomains").replace(
                      "EXAMPLE.COM",
                      ot.join(", "),
                    ),
                    onChange: async (A) => {
                      (await v.bt(
                        "popupIncludeExcludedDomains",
                        A ? "true" : "false",
                      ),
                        (this.Ji = !0),
                        await this.Qi());
                    },
                    ae: `${24 / 2}px`,
                    $: {
                      flex: "0 1 auto",
                      marginInlineEnd: "28px",
                      marginTop: "8px",
                    },
                    D: Ze.Lu,
                  }),
                }),
              },
            }),
            Cx: c({
              style: {
                flex: "1 0 auto",
                marginInlineEnd: "8px",
                textAlign: "end",
                display: "flex",
                flexDirection: "row-reverse",
              },
              children: {
                Eu: new Ut({
                  value: g.popupOpenOneTabAfterStoringTabs === "true",
                  fontSize: "12px",
                  label: p("openOneTabAfter"),
                  onChange: async (A) => {
                    await v.bt(
                      "popupOpenOneTabAfterStoringTabs",
                      A ? "true" : "false",
                    );
                  },
                  ae: `${24 / 2}px`,
                  $: { flex: "0 0 auto", marginTop: "8px" },
                }),
              },
            }),
          },
        }),
        body: c({}),
        Tp: c({
          style: {
            fontSize: "12px",
            marginInlineEnd: "18px",
            visibility: "hidden",
            textAlign: "end",
            color: "var(--text-color-weak)",
          },
          textContent: p("rightClickTickTip"),
        }),
        Zt: ee({
          Fu: !0,
          marginTop: "20px",
          marginBottom: "28px",
          marginInlineStart: "-15px",
          marginInlineEnd: "-15px",
        }),
      },
    })),
      this.o.cp.i.replaceChildren(this._.i));
    let M = async () => {
      let A = H.po();
      (await v.Wa(A, !1), window.close());
    };
    ((this.En = new Ur("stagingGroupView")),
      this.En.lc(({ count: A, nt: z }) => {
        (this.Na(A),
          (this._.u.Tp.i.style.visibility = A ? "visible" : "hidden"));
      }));
    let H = new Et({
      ps: !1,
      qe: !1,
      Mt: g.urlDisplay,
      ws: Gt,
      Xs: X,
      Ys: ct,
      xs: St,
      H: !0,
      J: !0,
      tn: !0,
      Ft: !1,
      Wl: i === "tab",
      X: `uncommitted:${i}-${{ tab: s.id, tabGroup: n, window: o }[i]}`,
      ...(["window", "tabGroup"].includes(i) && { A: this.En }),
      Nt: ({ e: A, qi: z, dn: tt }) => ((async () => await As(z.At))(), !1),
      It: ({ de: A, pe: z, X: tt, Ui: it }) => {
        ((this._.ct.Co.bp.i.style.display = A ? "block" : "none"),
          it && z && H.Dr(tt, it));
      },
      Mr: async (A) => {
        A && i === "window" && Ti(I) && l.length && this._.gp.et(!1);
      },
      Or: async (A, z) => {
        (this._.i.style.display !== "none" && (this.Ji = !0), await this.Qi());
      },
      Ks: async (A) => {
        (await v.bt(x, A ? "true" : "false"),
          A &&
            i === "window" &&
            (await v.bt("popupIncludeGroupedTabs", "false")),
          (this.Ji = !0),
          await this.Qi());
      },
    });
    ((this.ne = H), this.qa.push(H));
    let V = [];
    {
      let A = Xt(),
        z = 0,
        tt = [],
        it = new Map((b ?? []).map((Dt) => [Dt.id, Dt]));
      wt.forEach((Dt) => {
        if (Array.isArray(Dt)) {
          let Zt = it.get(Dt[0].groupId),
            Wt = Xt();
          Dt.forEach((Qt) => {
            let fi = K(Qt);
            fi.parentIds = Vt([...fi.parentIds, Wt]);
          });
          let Me = {
            [$t.qn]: !0,
            id: Wt,
            type: "group",
            groupType: "tabGroup",
            createDate: u,
            modifyDate: u,
            parentIds: [A],
            childIds: Dt.map((Qt) => K(Qt).id),
            label: Zt.title,
            color: Zt.color,
            collapsed: Zt.collapsed,
            pinnedCount: Dt.filter((Qt) => Qt.pinned).length,
          };
          (V.push(Me), tt.push(Wt));
        } else {
          let Zt = Dt,
            Wt = K(Zt);
          ((Wt.parentIds = Vt([...Wt.parentIds, A])),
            tt.push(Wt.id),
            Zt.pinned && z++);
        }
      });
      let zt = {
        [$t.qn]: !0,
        id: A,
        ...(y.incognito && { openType: "newIncognitoWindow" }),
        type: "group",
        groupType: $,
        createDate: u,
        modifyDate: u,
        parentIds: [I.id],
        childIds: tt,
        ...(i === "tabGroup" && {
          label: m.title,
          color: m.color,
          collapsed: m.collapsed,
        }),
        ...($ === "tabGroup" && i !== "tabGroup" && { color: Ie }),
        pinnedCount: z,
      };
      (this.h.Wo([zt, ...V, ...S]),
        await H.st({
          me: !0,
          groupId: zt.id,
          h: this.h,
          ci: wt.map((Dt) =>
            Array.isArray(Dt) ? Dt.map((Zt) => Zt.id) : Dt.id,
          ),
          Se: this.Se,
          settings: g,
        }),
        (this.Ou = () => H.Nh()),
        this._.body.i.appendChild(H.o.i));
    }
    (e && this.Ip({ vp: S, Ap: V, Ln: i, Ba: a, settings: g, $p: rt, Sp: q }),
      this.Op(),
      this.Na(this.En.nt.length));
  }
  async qo({ za: e = !1, Ni: i = !1, Mp: s } = {}) {
    let n = await v.getSettings([
        "popupIncludePinnedTabs",
        "popupIncludeGroupedTabs",
        "popupIncludeExcludedDomains",
      ]),
      o = await v.Ua(),
      a = !!s,
      r = this.Mu || a,
      l = this.ne.l.parentIds.find(pt),
      h = s ?? l,
      d = await kt(h);
    if (r) {
      if (B(d)) throw new Error("folder cannot be the target of a merge");
      if (dt(d) && this.ne.Vr().length)
        throw new Error(
          "cannot merge a window with tab group children into a tab group",
        );
    } else {
      if (_(this.ne.l)) throw new Error("tab not allowed");
      if (dt(d)) throw new Error("groups cannot be created inside a tab group");
      if (yt(d) && !dt(this.ne.l))
        throw new Error("only tab groups can be created inside a window group");
    }
    let f = this.ne.po(),
      b,
      y = new Map();
    if (
      (this.Fn.forEach((F) => {
        y.has(F.id) || y.set(F.id, F);
      }),
      a)
    ) {
      if (this.ne.uc()) b = this.ne.po().map((F) => y.get(F));
      else {
        let F = this.Fn;
        (n.popupIncludePinnedTabs !== "true" &&
          (F = F.filter((P) => !P.pinned)),
          n.popupIncludeGroupedTabs !== "true" &&
            (F = F.filter(
              (P) => P.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE,
            )),
          n.popupIncludeExcludedDomains !== "true" &&
            (F = F.filter((P) => !o.includes(ci(P)))),
          (b = F));
      }
      f = b.map(Nt);
    }
    let m = [];
    if (r && !a) {
      let { items: F } = await v.Hx({ groupId: d.id });
      m = F.filter(_).map((P) => P.id);
    }
    let {
        fd: x,
        pd: g,
        md: w,
        wd: k,
        xd: u,
        bd: T,
      } = await this.ne.ld({ ...(r && { ud: h }), hd: m }),
      I = [...w];
    a ||
      (await v.In({
        Lo: x,
        vn: g,
        O: h,
        An: r ? w : [this.ne.l.id],
        Gp: r ? k : 0,
      }));
    let $ = new Map();
    if (a && yt(d)) {
      await this.h.Te({ groupId: h });
      let F = d.childIds.map((L) => this.h.v(L)).filter(dt),
        P = new Map();
      T.forEach((L) => {
        P.has(L.di) || P.set(L.di, L);
      });
      let q = new Set(),
        D = new Set(),
        W = Vt(b.map((L) => L.groupId)).filter(
          (L) => L !== chrome.tabGroups.TAB_GROUP_ID_NONE,
        );
      for (let L of W) {
        let C = await chrome.tabGroups.get(L),
          lt = P.get(L)?.Qt,
          X = F.filter((Gt) => !D.has(Gt.id)),
          J = [];
        C.title && (J = X.filter((Gt) => Gt.label === C.title));
        let ct,
          Ft = await ca(L);
        if (J.length === 1) ct = J[0];
        else {
          let Gt = new Set(Ft.map((ft) => ft.tabItemId)),
            St = 0;
          X.forEach((ft) => {
            let ut = new Set(),
              rt = 0;
            (ft.childIds.forEach((wt) => {
              ut.has(wt) || (ut.add(wt), Gt.has(wt) && rt++);
            }),
              rt > St && ((St = rt), (ct = ft)));
          });
        }
        if (
          (lt && $.set(L, lt.id),
          ct && $.set(L, ct.id),
          ct && (D.add(ct.id), lt))
        ) {
          (q.add(lt.id),
            (I = I.map((rt) => (rt === lt.id ? ct.id : rt))),
            (x = x.filter((rt) => !q.has(rt.id))),
            g.forEach(
              (rt) =>
                (rt.parentIds = rt.parentIds.filter((wt) => wt !== lt.id)),
            ));
          let Gt = new Set(lt.childIds),
            St = new Set(ct.childIds),
            ut = Ft.filter(({ Eo: rt }) => Gt.has(rt) || St.has(rt)).map(
              (rt) => rt.Eo,
            );
          await jn(ct.childIds, ut, async (rt, wt) => {
            let O = g.filter((Y) => Gt.has(Y.id)),
              N = new Set(rt),
              R = O.filter((Y) => N.has(Y.id)).map((Y) => structuredClone(Y));
            (R.forEach((Y) => (Y.parentIds = [ct.id])),
              await v.In({ Lo: [], vn: R, O: ct.id, An: rt, N: wt, Gp: 0 }));
          });
        }
      }
    }
    if (a) {
      let F = await Yi(await chrome.tabs.query({ currentWindow: !0 })),
        P = new Set(),
        q = x.length,
        D = new Set(I),
        W = new Set(d.childIds),
        L = new Set(x.map((J) => J.id)),
        C = new Map();
      g.forEach((J) => {
        C.has(J.id) || C.set(J.id, J);
      });
      let ot = F.reduce(
          (J, { fl: ct, Eo: Ft, kt: Gt, At: St, di: ft }) => (
            ft !== chrome.tabGroups.TAB_GROUP_ID_NONE && q
              ? P.has(ft) || (P.add(ft), J.push($.get(ft)))
              : J.push(Ft),
            J
          ),
          [],
        ).filter((J) => D.has(J) || W.has(J) || L.has(J)),
        lt = new Set();
      await jn(d.childIds, ot, async (J, ct) => {
        let Ft = new Set(J);
        if (J.some((ut) => W.has(ut)))
          throw new Error(
            "Aborted attempt to store duplicate id in targetParent during diffMerge",
          );
        let Gt = g.filter((ut) => Ft.has(ut.id));
        Gt.forEach((ut) => lt.add(ut.id));
        let St = x.filter((ut) => Ft.has(ut.id)),
          ft = Vt([...Gt.map(Nt), ...St.flatMap((ut) => ut.childIds)]);
        await v.In({
          Lo: St,
          vn: ft.map((ut) => C.get(ut)),
          O: h,
          An: J,
          N: ct,
        });
      });
      let X = Vt(w.slice(0, k).filter((J) => lt.has(J)));
      for (let J of X) await v.Ir({ itemId: J, parentId: h, zt: 0, value: !0 });
    }
    let S = this.ne.Ql(),
      j = g.map(({ id: F }) => `uncommitted:tab-${F}`);
    if ((await xo([...j, ...S]), this._.u.Eu.$i())) {
      let F = this.ne.l.id,
        P = this.ne.l.parentIds.find(pt);
      (r && ((F = h), (P = d.parentIds.find(pt))),
        await v.ec({ itemId: P, Zi: F, qx: e ? f : [] }));
    } else e && (await v.Wa(f));
    i && window.close();
  }
  async Ip({ vp: e, Ap: i, Ln: s, Ba: n, settings: o, $p: a, Sp: r }) {
    let l = await Promise.all(
        this.Fn.map(async (T) => {
          let I = bt(T.url || T.pendingUrl);
          return await Pe(I);
        }),
      ),
      h = await v.Ua(),
      d = (T) => h.includes(ci(T)),
      f = [...new Set(r.map(ci))]
        .filter((T) => h.includes(T))
        .sort(se(Ss((T) => T))),
      b = r.filter((T) => !d(T)),
      [y, m] = we(b, (T) => T.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE),
      x = new Map();
    e.forEach((T) => {
      x.has(T.url) || x.set(T.url, T);
    });
    let g = (T) => x.get(In(T)),
      w = (T) => {
        let I = T.map(g),
          S = Vt(I.map((j) => j.parentIds).flat())
            .filter((j) => !["quickList", "trash"].includes(j))
            .map((j) => this.h.v(j))
            .filter((j) => j)
            .filter((j) => !j[$t.qn]);
        return ((S = S.filter((j) => !this.h.re.has(j.id))), S);
      },
      k = new Set(b.map(g).map(Nt)),
      u;
    {
      let T = w(b),
        I,
        $ = new Set(y.map(g).map(Nt)),
        S = new Set(m.map(g).map(Nt)),
        j = (F) => {
          let P = this.h.v(F);
          return !P || _(P);
        },
        K = (F) => {
          let P = this.h.v(F);
          return P && at(P);
        };
      if (s === "window") {
        let F = new Map();
        (w(y)
          .filter((D) => !m.length || yt(D))
          .forEach((D) => {
            F.has(D.id) ||
              F.set(D.id, {
                Uo: D,
                Ra: [],
                zo: D.childIds.filter(j),
                Bn: Vt(D.childIds).filter((W) => $.has(W)).length,
              });
          }),
          w(m)
            .filter(dt)
            .forEach((D) => {
              let W = this.h.v(D.parentIds.find(pt));
              if (yt(W)) {
                F.has(W.id) ||
                  F.set(W.id, {
                    Uo: W,
                    Ra: [],
                    zo: W.childIds.filter(j),
                    Bn: 0,
                  });
                let L = F.get(W.id);
                (L.Ra.push(D), L.zo.push(...D.childIds));
              }
            }),
          F.values().forEach((D) => {
            let { Ux: W, Ra: L } = D;
            D.Bn += Vt(L.flatMap((C) => C.childIds)).filter((C) =>
              S.has(C),
            ).length;
          }),
          (I = [...F.values()]));
      }
      if (s === "tabGroup" || s === "tab") {
        let F = T;
        (s === "tabGroup" &&
          (F = T.filter((P) => dt(P) || !P.childIds.some(K))),
          (I = F.map((P) => ({
            Uo: P,
            Bn: Vt(P.childIds).filter((q) => k.has(q)).length,
            zo: P.childIds.filter(j),
          }))));
      }
      u = I.sort(
        se(
          ne((F) => F.Bn),
          ne(({ Uo: F }) =>
            Math.max(F.accessDate ?? 0, F.modifyDate ?? 0, F.createDate ?? 0),
          ),
        ),
      ).slice(0, 30);
    }
    if (
      (this.h.Wo([...i, ...e]),
      (this.Za = await Promise.all(
        u.map(async ({ Uo: I, Bn: $, zo: S }) => {
          await this.h.Te({ groupId: I.id });
          let j = S.filter((C) => k.has(C)),
            K = new Set(j),
            F = e.every((C) => S.includes(C.id)),
            P = l.filter((C) => K.has(C)),
            q;
          F
            ? (q =
                P.length === 1
                  ? p("tabAlreadyStoredHere")
                  : gt("allOpenTabsAlreadyStoredHere", P.length))
            : (q = gt("openTabsAlreadyStoredHere", P.length));
          const D = async () => {
            let C = (await v.ks("popupMergeCloseTabsAfter")) === "true";
            await this.qo({ za: C, Ni: !0, Mp: I.id });
          };
          s === "tab" && (q = p("yourTabAlreadyStoredHere"));
          let W = c({
              className: "subsection",
              style: { marginTop: "18px" },
              children: {
                ct: c({
                  style: {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "-3px",
                    marginInlineStart: "12px",
                  },
                  children: {
                    left: c({
                      style: {
                        flex: "1 1 auto",
                        margin: "0 24px",
                        fontSize: "13px",
                      },
                      textContent: q,
                    }),
                    right: c({
                      style: {
                        marginInlineEnd: "8px",
                        position: "relative",
                        display: "flex",
                      },
                      children: {
                        ...(!F && {
                          Fs: c({
                            style: { flex: "0 0 auto", position: "relative" },
                            children: {
                              Cn: new Ht({
                                dt: !1,
                                vi: !0,
                                Ai: () => {
                                  ((W.ct.right.Fs.Cn.o.i.style.visibility =
                                    "hidden"),
                                    (W.ct.right.Fs.gt.i.style.display = "flex"),
                                    document.addEventListener("click", (C) => {
                                      ((W.ct.right.Fs.Cn.o.i.style.visibility =
                                        "visible"),
                                        (W.ct.right.Fs.gt.i.style.display =
                                          "none"));
                                    }));
                                },
                                _i: {
                                  marginInlineStart: "5px",
                                  marginInlineEnd: "-3px",
                                },
                                label: "...",
                                V: !0,
                                tabIndex: void 0,
                                fontSize: "12px",
                                $: {
                                  flex: "0 0 auto",
                                  marginInlineEnd: "10px",
                                },
                                onclick: async () => await D(),
                              }),
                              gt: c({
                                className: "dropdown-selection",
                                style: {
                                  display: "none",
                                  position: "absolute",
                                  padding: "12px 14px",
                                  right: "17px",
                                  top: "-11px",
                                  backgroundColor: "var(--col-bg-color)",
                                  zIndex: 10,
                                  textAlign: "start",
                                  justifyContent: "space-evenly",
                                  alignItems: "flex-start",
                                  gap: "5px",
                                  flexDirection: "column",
                                },
                                onclick: (C) => C.stopPropagation(),
                                children: {
                                  Cn: new Ht({
                                    label: "...",
                                    V: !0,
                                    tabIndex: void 0,
                                    fontSize: "12px",
                                    $: { flex: "0 0 auto" },
                                    onclick: async () => await D(),
                                  }),
                                  zx: new Ut({
                                    value:
                                      o.popupMergeCloseTabsAfter === "true",
                                    fontSize: "12px",
                                    label: p("closeTabsAfterMerge"),
                                    onChange: async (C) => {
                                      await v.bt(
                                        "popupMergeCloseTabsAfter",
                                        C ? "true" : "false",
                                      );
                                    },
                                    ae: `${24 / 2}px`,
                                    $: {
                                      flex: "0 1 auto",
                                      marginInlineStart: "5px",
                                      marginTop: "0",
                                    },
                                  }),
                                  info: c({
                                    style: {
                                      fontSize: "12px",
                                      marginInlineStart: "12px",
                                    },
                                    textContent: p(
                                      "alreadyExistingOpenTabsWillBeClosedAfterMerge",
                                    ),
                                  }),
                                  ...((this.mp || this.wp) && {
                                    Wx: c({
                                      style: {
                                        fontSize: "12px",
                                        marginTop: "12px",
                                        marginInlineStart: "12px",
                                      },
                                      textContent: p(
                                        "checkboxesDeterminePinnedAndGroupedTabMergeInclusion",
                                      ),
                                    }),
                                  }),
                                },
                              }),
                            },
                          }),
                        }),
                        Pu: new Ht({
                          label: gt("closeTheseDuplicates", P.length),
                          V: !0,
                          tabIndex: void 0,
                          Hs: !0,
                          fontSize: "12px",
                          $: { flex: "0 0 auto" },
                          onclick: async () => {
                            let C = this.h.ul([...j]),
                              ot = new Set(C.map((X) => X.url)),
                              lt = n.filter((X) =>
                                [X.url, X.pendingUrl].some((J) =>
                                  ot.has(bt(J)),
                                ),
                              );
                            (await v.Wa(
                              lt.map((X) => X.id),
                              !1,
                            ),
                              this._.i.style.display !== "none" &&
                                (this.Ji = !0),
                              window.close());
                          },
                        }),
                      },
                    }),
                  },
                }),
                body: c({ style: { marginBottom: "12px" } }),
                Zt: ee({
                  Qa: !0,
                  marginTop: "24px",
                  marginBottom: "12px",
                  marginInlineStart: "10px",
                  marginInlineEnd: "10px",
                }),
              },
            }),
            L = new Et({
              Mt: o.urlDisplay,
              Vt: !0,
              H: !0,
              tn: !1,
              qe: !1,
              ps: !0,
              ao: !0,
              Ft: !1,
              Nt: ({ e: C, qi: ot, dn: lt, tabIndex: X }) => (
                (async () => {
                  let J = a(ot.l.url);
                  J !== void 0 && !(_t(C) && ae(C))
                    ? await As(J)
                    : (ye(C) && (C.preventDefault(), C.stopPropagation()),
                      await ai({
                        Nr: (await chrome.windows.getCurrent()).id,
                        id: ot.l.id,
                        bu: lt?.l.id,
                        yu: ti(
                          lt.k
                            .filter((ct) => ct.l.id === ot.l.id)
                            .findIndex((ct) => ct === ot),
                        ),
                        tabIndex: X,
                        Rr: !1,
                        zr: "currentWindow",
                        Wr: !1,
                        tc: !(_t(C) || ae(C)),
                        _l: ae(C),
                        Vl: _t(C),
                      }));
                })(),
                !1
              ),
            });
          return (
            this.qa.push(L),
            W.body.i.appendChild(L.o.i),
            await L.st({
              groupId: I.id,
              jt: new Set(j),
              h: this.h,
              settings: o,
            }),
            (W.Dp = L),
            W
          );
        }),
      )),
      !r.length && !this.Za.length && (this.o.Es.i.style.display = "none"),
      r.length)
    ) {
      let I = r.some((D) => D.pinned),
        $ =
          s === "window" &&
          r.some((D) => D.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE),
        S = r.some(d),
        j = I || $ || S;
      const K = async () => {
          let D = await v.getSettings([
              "popupDontClosePinnedTabs",
              "popupDontCloseGroupedTabs",
              "popupDontCloseTabsFromExcludedDomains",
            ]),
            W = [...r];
          return (
            D.popupDontClosePinnedTabs === "true" &&
              (W = W.filter((L) => !L.pinned)),
            D.popupDontCloseGroupedTabs === "true" &&
              (W = W.filter(
                (L) => L.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE,
              )),
            D.popupDontCloseTabsFromExcludedDomains === "true" &&
              (W = W.filter(Le(d))),
            W
          );
        },
        F = async () => {
          let D = await K(),
            W = gt("closeTabsAlreadyStoredInOneTab", D.length);
          if ((q.gt.Ii.Xt(W), D.length)) (q.Ii.Xt(W), q.Ii.wl(!1));
          else {
            let L = [];
            (I &&
              o.popupDontClosePinnedTabs === "true" &&
              L.push(p("pinnedTabs")),
              $ &&
                o.popupDontCloseGroupedTabs === "true" &&
                L.push(p("tabsInTabGroups")),
              S &&
                o.popupDontCloseTabsFromExcludedDomains === "true" &&
                L.push(p("tabsFromExcludedDomains")));
            let C = `${p("noDupsExistExceptForColon")} ${L.join(", ")}`;
            (q.Ii.wl(!0), q.Ii.Xt(C));
          }
        },
        P = async (D) => {
          let W = await K();
          (await v.Wa(
            W.map((L) => L.id),
            !1,
          ),
            window.close());
        };
      let q = c({
        className: "subsection",
        style: { position: "relative", textAlign: "end" },
        children: {
          Ii: new Ht({
            label: "...",
            vi: j,
            _i: { marginInlineStart: "5px", marginInlineEnd: "-3px" },
            V: !0,
            tabIndex: void 0,
            fontSize: "12px",
            $: { flex: "0 0 auto", marginInlineEnd: "8px" },
            onclick: P,
            Ai: () => {
              ((q.Ii.o.i.style.visibility = "hidden"),
                (q.gt.i.style.display = "flex"),
                document.addEventListener("click", (D) => {
                  ((q.Ii.o.i.style.visibility = "visible"),
                    (q.gt.i.style.display = "none"));
                }));
            },
          }),
          gt: c({
            className: "dropdown-selection",
            style: {
              display: "none",
              position: "absolute",
              padding: "12px 14px",
              right: "17px",
              top: "-11px",
              backgroundColor: "var(--col-bg-color)",
              zIndex: 10,
              textAlign: "start",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              gap: "5px",
              flexDirection: "column",
            },
            onclick: (D) => D.stopPropagation(),
            children: {
              Ii: new Ht({
                label: "...",
                V: !0,
                tabIndex: void 0,
                fontSize: "12px",
                $: { flex: "0 0 auto" },
                onclick: P,
              }),
              ...(I && {
                Nx: new Ut({
                  value: o.popupDontClosePinnedTabs === "true",
                  fontSize: "12px",
                  label: p("dontClosePinnedTabs"),
                  onChange: async (D) => {
                    (await v.bt(
                      "popupDontClosePinnedTabs",
                      D ? "true" : "false",
                    ),
                      await F());
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    flex: "0 1 auto",
                    marginInlineStart: "12px",
                    marginTop: "3px",
                  },
                }),
              }),
              ...($ && {
                Rx: new Ut({
                  value: o.popupDontCloseGroupedTabs === "true",
                  fontSize: "12px",
                  label: p("dontCloseGroupedTabs"),
                  onChange: async (D) => {
                    (await v.bt(
                      "popupDontCloseGroupedTabs",
                      D ? "true" : "false",
                    ),
                      await F());
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    flex: "0 1 auto",
                    marginInlineStart: "12px",
                    marginTop: "0px",
                  },
                }),
              }),
              ...(S && {
                kp: new Ut({
                  value: o.popupDontCloseTabsFromExcludedDomains === "true",
                  fontSize: "12px",
                  label: p("dontCloseTabsFromDomains").replace(
                    "EXAMPLE.COM",
                    f.join(", "),
                  ),
                  onChange: async (D) => {
                    (await v.bt(
                      "popupDontCloseTabsFromExcludedDomains",
                      D ? "true" : "false",
                    ),
                      await F());
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    flex: "0 1 auto",
                    marginInlineStart: "12px",
                    marginTop: "0px",
                  },
                  D: Ze.Lu,
                }),
              }),
            },
          }),
          Zt: ee({
            Qa: !0,
            marginTop: "12px",
            marginBottom: "24px",
            marginInlineStart: "10px",
            marginInlineEnd: "10px",
          }),
        },
      });
      (this.o.Es.up.hp.i.replaceChildren(q.i),
        await F(),
        this.o.Es.body.i.replaceChildren(...this.Za.map((D) => D.i)));
    }
    this.Na();
  }
  Op() {
    let { Ln: e } = this.Ho;
    ((this.o.Es.u.Ca.i.style.display = this.Du ? "inline-block" : "none"),
      this.Du &&
        (this.o.Es.u.Ca.i.textContent = gt(
          "storeTabsInAdditionalLocation",
          e === "tab" ? 1 : this.Gu.flat().length,
        )));
  }
  async Na(e) {
    let { Ln: i } = this.Ho;
    e !== void 0 && (this.Pp = e);
    let s = this.Pp,
      n = this.xp.length,
      o = this.Gu.flat().length,
      a = s || o,
      r;
    (i === "tab"
      ? n === 0
        ? (r = "")
        : (r = p("thisTabNotStored"))
      : n === 0
        ? (r = "")
        : (r = gt("openTabsNotStoredInOneTab", n)),
      (this._.ct.Co.Ha.i.textContent = r),
      (this._.ct.Co.Ha.i.style.display = n ? "block" : "none"));
    {
      let l;
      (i === "tab"
        ? (l = p("closeTabsAndStore_one"))
        : s === 0
          ? (l = gt("closeTabsAndStore", o))
          : (l = gt("closeSelectedTabs", s)),
        this._.ct.right.jn.Xt(l),
        this._.ct.right.gt.jn.Xt(l));
    }
    {
      let l;
      (s === 0
        ? (l = gt("storeTabsInONETAB", o))
        : (l = gt("storeSelectedTabsInONETAB", s)),
        this._.ct.right.gt.yp.Xt(l));
    }
    {
      let l;
      (s === 0 ? (l = gt("closeTabs", o)) : (l = gt("closeSelectedTabs", s)),
        this._.ct.right.gt.Pu.Xt(l));
    }
    {
      let l = !!s,
        h = await v.getSettings([
          "popupIncludePinnedTabs",
          "popupIncludeGroupedTabs",
          "popupIncludeExcludedDomains",
        ]),
        d = await v.Ua(),
        f = (await Yi(this.Fn)).map((b) => b.Eo);
      this.Za?.forEach((b) => {
        let y = new Set(b.Dp.yd().map((k) => k.l.id)),
          m = !f.every((k) => y.has(k)),
          x;
        if (l) x = s;
        else {
          let k = this.Fn;
          (h.popupIncludePinnedTabs !== "true" &&
            (k = k.filter((u) => !u.pinned)),
            h.popupIncludeGroupedTabs !== "true" &&
              (k = k.filter(
                (u) => u.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE,
              )),
            h.popupIncludeExcludedDomains !== "true" &&
              (k = k.filter((u) => !d.includes(ci(u)))),
            (x = k.length));
        }
        let g = b.ct.right.Fs?.Cn,
          w = b.ct.right.Fs?.gt.Cn;
        if (g && (g.Wt(m), s !== void 0)) {
          let k;
          (s === 0
            ? (k = gt("mergeOpenTabsHere", x))
            : (k = gt("mergeSelectedTabsHere", s)),
            [g, w].forEach((u) => u.Xt(k)));
        }
      });
    }
    ((this._.ct.i.style.display = a ? "flex" : "none"), this._.u.Eu.Wt(!!a));
  }
  Ge(e) {
    this.qa.forEach((i) => i.Ge(e));
  }
}
Ze.Lu = async () =>
  c({
    style: {
      fontSize: "12px",
      fontWeight: "400",
      padding: "8px 12px",
      minWidth: "36px",
      maxWidth: "250px",
      textAlign: "start",
    },
    children: [
      c({ textContent: p("toAddOrRemoveExclusions") }),
      U("ol", {
        children: [
          U("li", { textContent: p("openTabFromWebsite") }),
          U("li", { textContent: p("rightClickAndOpenOneTabMenu") }),
          U("li", { textContent: p("tickOrUntickToExclude") }),
        ],
      }),
      ...G(
        (await v.ks("displayContextMenu")) !== "true",
        c({
          style: { marginTop: "6px" },
          textContent: p("rightClickMenuDisabledNote"),
        }),
      ),
    ],
  });

};
