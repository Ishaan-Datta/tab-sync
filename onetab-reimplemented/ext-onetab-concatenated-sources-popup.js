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
class $t {
  constructor(e = []) {
    ((this.$t = new Map()), e.forEach((i) => this.$t.set(i.id, i)));
  }
  static qn = Symbol("uncommitted");
  async ht(e) {
    let i = this.$t.get(e);
    if (!i) {
      if (((i = await kt(e)), !i)) return;
      this.put(i);
    }
    return i;
  }
  async getItems(e) {
    let i = e.filter((n) => !this.$t.has(n));
    return (
      (await Be(i)).forEach((n) => this.put(n)),
      e.map((n) => this.$t.get(n))
    );
  }
  put(e) {
    this.$t.set(e.id, e);
  }
  Wo(e) {
    for (let i of e) this.put(i);
  }
  has(e) {
    return this.$t.has(e);
  }
  v(e) {
    return this.$t.get(e);
  }
  qp(e) {
    return this.v(e)?.type === "group";
  }
  Up(e) {
    return this.v(e)?.groupType === "folder";
  }
  async zp() {
    return (
      this.Nu ||
        ((this.Nu = !0),
        (await mr()).forEach((e) => this.put(e)),
        this.Ya(),
        this._a(),
        (this.Jo = new Map()),
        this.$t.forEach((e) => {
          _(e) && this.Jo.set(e.id, Hi(e.url));
        })),
      this
    );
  }
  async ke() {
    return (
      this.Ru ||
        ((this.Ru = !0),
        (this.Va = !0),
        (await wr()).forEach((i) => this.put(i)),
        this.Ya(),
        this._a()),
      this
    );
  }
  async tl() {
    if ((await this.ke(), !this.Zu)) {
      this.Zu = !0;
      let e = await xr();
      (e.forEach((s) => this.put(s)),
        (this.Un = new Set(
          e.filter(Le(ue)).flatMap((s) =>
            s.parentIds
              .filter(pt)
              .map((a) => this.v(a))
              .filter(Le(ue))
              .map(Nt),
          ),
        )));
      let i = new Set(this.Un);
      for (; i.size; ) {
        let s = new Set();
        (i.forEach((n) => {
          this.v(n)
            .parentIds.filter(pt)
            .map((r) => this.v(r))
            .filter(Le(ue))
            .map(Nt)
            .forEach((r) => {
              this.Un.has(r) || (this.Un.add(r), s.add(r));
            });
        }),
          (i = s));
      }
    }
    return this;
  }
  async Wp() {
    return (
      this.Va || ((this.Va = !0), (await br()).forEach((i) => this.put(i))),
      this
    );
  }
  _a() {
    this.Qu = new Set();
    let i = [...this.$t.values()].filter(ue).filter(at).map(Nt);
    for (; i.length; ) {
      let s = i.pop();
      (this.Qu.add(s), this.v(s)?.childIds?.forEach((o) => i.push(o)));
    }
    for (this.el = new Set(), i = ["root"]; i.length; ) {
      let s = i.pop();
      (this.el.add(s),
        this.v(s)?.childIds?.forEach((o) => {
          let a = this.v(o);
          !a || _(a) ? this.el.add(o) : ue(a) || i.push(o);
        }));
    }
  }
  Ya() {
    this.re = new Set();
    let e = ["trash"];
    for (; e.length; ) {
      let i = e.pop();
      (this.re.add(i), this.v(i)?.childIds?.forEach((n) => e.push(n)));
    }
    for (e = ["root"]; e.length; ) {
      let i = e.pop();
      (this.re.delete(i), this.v(i)?.childIds?.forEach((n) => e.push(n)));
    }
  }
  Np() {
    return this.v("root").childIds.some((e) => {
      let i = this.v(e);
      return i && B(i);
    });
  }
  async il({ count: e, B: i, Rp: s, sl: n, Ju: o }) {
    await this.ke();
    let a = [...this.$t.values()]
      .filter((r) => !r.archived)
      .filter((r) => (i ? B(r) : !0))
      .filter((r) => (s ? !B(r) : !0))
      .filter((r) => at(r) && r.label)
      .filter((r) => !this.re.has(r.id))
      .filter((r) => !r[$t.qn])
      .sort(ne((r) => r.modifyDate));
    if ((!a.length && !o && a.push(this.v("root")), n)) {
      let r = new Set(),
        l = [...a];
      a = [];
      for (let h of l) r.has(h.label) || (a.push(h), r.add(h.label));
    }
    return a.slice(0, e);
  }
  Ku({ ti: e, maxResults: i, B: s }) {
    return (
      (e = e.map((n) => n.toLocaleLowerCase())),
      [...this.$t.values()]
        .filter((n) => !(s && !B(n)))
        .filter((n) => {
          if (!at(n) || this.re.has(n.id)) return !1;
          let o = (ht(n) ? p("all") : n.label)?.toLocaleLowerCase();
          return o && e.every((a) => o.includes(a));
        })
        .sort(ne((n) => n.modifyDate))
        .slice(0, i)
    );
  }
  Zp({
    ti: e = [],
    Qp: i = [],
    filter: s,
    Xu: n,
    maxResults: o,
    Jp: a,
    ei: r,
    ii: l,
  }) {
    let h = i.length || s;
    r || (e = e.map((m) => m.toLocaleLowerCase()));
    let d = new Set(n ? this.nl(n) : []),
      f = (m, x) => (l ? Os(m, !0, r).test(x) : x.includes(m)),
      b = p("all");
    return [...this.$t.values()]
      .filter((m) => {
        if (
          m.parentIds.filter((x) => !this.re.has(x) && x !== "quickList")
            .length === 0
        )
          return !1;
        if (n && !m.parentIds.some((x) => d.has(x))) return !1;
        if (this.re.has(m.id)) return !1;
        if (["quickList", "trash"].some((x) => x === m.id)) return !1;
        if (s && !s(m)) return !1;
        if (h && !e.length) return !0;
        if (ht(m)) return a && e.every((x) => f(x, b));
        if (_(m)) {
          let x = [m.title, this.Jo.get(m.id) ?? m.url, m.notes?.text].filter(
            (w) => w,
          );
          return (
            r || (x = x.map((w) => w.toLocaleLowerCase())),
            e.every((w) => x.some((k) => f(w, k)))
              ? ((x = [
                  m.title,
                  tr(this.Jo.get(m.id) ?? m.url),
                  m.notes?.text,
                ].filter((w) => w)),
                r || (x = x.map((w) => w.toLocaleLowerCase())),
                e.every((w) => x.some((k) => f(w, k))))
              : !1
          );
        } else if (at(m)) {
          let x = [m.label, m.notes?.text].filter((g) => g);
          return (
            r || (x = x.map((g) => g.toLocaleLowerCase())),
            e.every((g) => x.some((w) => f(g, w)))
          );
        } else return !1;
      })
      .sort(se(...i))
      .slice(0, o);
  }
  Yu(e) {
    return this.Un.has(e.id);
  }
  async Te({ groupId: e, ol: i, rl: s }) {
    let n = await this.ht(e),
      { _u: o, items: a, al: r } = await gr({ groupId: n.id, ol: i, rl: s });
    return (
      a.forEach((l) => this.put(l)),
      { h: this, group: n, Vu: o, al: r, items: a }
    );
  }
  nl(e) {
    let i = this.v(e);
    return [
      e,
      ...i.childIds
        .map((s) => {
          let n = this.v(s);
          return n && at(n) ? n.id : void 0;
        })
        .filter(ko)
        .flatMap((s) => this.nl(s)),
    ];
  }
  Xi(e) {
    let i = 0,
      n = [this.v(e)];
    for (; n.length; )
      (n.pop().childIds ?? []).forEach((a) => {
        let r = this.v(a);
        r && at(r) ? n.push(r) : i++;
      });
    return i;
  }
  ll(e) {
    let i = 0,
      s = 0,
      n = 0,
      o = this.v(e),
      a = (h) => {
        (i++, h.done ? n++ : s++);
      },
      r = new Set(),
      l = [o];
    for (; l.length; ) {
      let h = l.pop();
      ue(h) ||
        (Xe(h) && a(h),
        (h.childIds ?? []).forEach((d) => {
          let f = this.v(d);
          f &&
            !ue(f) &&
            (at(f) ? l.push(f) : Xe(f) && (r.has(f.id) || (r.add(f.id), a(f))));
        }));
    }
    return { Kp: i, cl: s, Xp: n };
  }
  Yp(e) {
    let s = [this.v(e)],
      n = [];
    for (; s.length; )
      (s.pop().childIds ?? []).forEach((a) => {
        let r = this.v(a);
        (r || console.log("getTabItemIdsForGroupIdViaCache cache miss"),
          r && at(r) ? s.push(r) : n.push(a));
      });
    return n;
  }
  async Hn(e, i) {
    let s = ["quickList"],
      n = await this.ht(e),
      o = n.parentIds.find((a) => !s.includes(a));
    if (o) {
      let a = await this.ht(o);
      return [...(await this.Hn(o)), a, ...G(i, n)];
    } else return [];
  }
  async th(e) {
    let i = e.filter((s) => !this.$t.has(s));
    return (
      i.length && (await Be(i)).forEach((s) => this.put(s)),
      e.map((s) => this.$t.get(s))
    );
  }
  ul(e) {
    return e.map((i) => this.$t.get(i));
  }
}
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
let Yt = {};
((Yt.hl = 32),
  (Yt.imageWidth = 1024),
  (Yt.imageHeight = 1024),
  (Yt.Ko = new Map()));
{
  let t = Yt.Ko;
  (t.set("calendar.google.com", 0),
    t.set("docs.google.com-document", 1),
    t.set("docs.google.com-forms", 2),
    t.set("docs.google.com-presentation", 3),
    t.set("docs.google.com-spreadsheets", 4),
    t.set("drive.google.com", 5),
    t.set("mail.google.com", 6),
    t.set("meet.google.com", 7),
    t.set("google.com", 8),
    t.set("mail.ru", 9),
    t.set("microsoft.com", 10),
    t.set("facebook.com", 11),
    t.set("apple.com", 12),
    t.set("amazonaws.com", 13),
    t.set("youtube.com", 14),
    t.set("instagram.com", 15),
    t.set("twitter.com", 16),
    t.set("office.com", 17),
    t.set("linkedin.com", 18),
    t.set("amazon.com", 19),
    t.set("workers.dev", 20),
    t.set("wikipedia.org", 21),
    t.set("github.com", 22),
    t.set("fastly.net", 23),
    t.set("bing.com", 24),
    t.set("wordpress.org", 25),
    t.set("icloud.com", 26),
    t.set("netflix.com", 27),
    t.set("skype.com", 28),
    t.set("windows.net", 29),
    t.set("pinterest.com", 30),
    t.set("yahoo.com", 31),
    t.set("goo.gl", 32),
    t.set("roblox.com", 33),
    t.set("adobe.com", 34),
    t.set("msn.com", 35),
    t.set("tiktokv.com", 36),
    t.set("vimeo.com", 37),
    t.set("spotify.com", 38),
    t.set("tiktok.com", 39),
    t.set("bit.ly", 40),
    t.set("ntp.org", 41),
    t.set("wordpress.com", 42),
    t.set("zoom.us", 43),
    t.set("mozilla.org", 44),
    t.set("cloudflare.net", 45),
    t.set("qq.com", 46),
    t.set("gandi.net", 47),
    t.set("opera.com", 48),
    t.set("googledomains.com", 49),
    t.set("news.ycombinator.com", 50),
    t.set("zerohedge.com", 51),
    t.set("protopage.com", 52),
    t.set("news.bbc.co.uk", 53),
    t.set("snapchat.com", 54),
    t.set("yandex.net", 55),
    t.set("baidu.com", 56),
    t.set("blogspot.com", 57),
    t.set("samsung.com", 58),
    t.set("unity3d.com", 59),
    t.set("cloudflare-dns.com", 60),
    t.set("intuit.com", 61),
    t.set("vk.com", 62),
    t.set("nginx.org", 63),
    t.set("outlook.com", 64),
    t.set("sentry.io", 65),
    t.set("ui.com", 66),
    t.set("wa.me", 67),
    t.set("t.me", 68),
    t.set("nginx.com", 69),
    t.set("europa.eu", 70),
    t.set("dropbox.com", 71),
    t.set("gravatar.com", 72),
    t.set("telekom.de", 73),
    t.set("nist.gov", 74),
    t.set("criteo.com", 75),
    t.set("github.io", 76),
    t.set("lencr.org", 77),
    t.set("apache.org", 78),
    t.set("applovin.com", 79),
    t.set("tumblr.com", 80),
    t.set("xiaomi.com", 81),
    t.set("health.mil", 82),
    t.set("miit.gov.cn", 83),
    t.set("f5.com", 84),
    t.set("dns.google", 85),
    t.set("one.one", 86),
    t.set("nih.gov", 87),
    t.set("paypal.com", 88),
    t.set("archive.org", 89),
    t.set("nytimes.com", 90),
    t.set("myfritz.net", 91),
    t.set("rubiconproject.com", 92),
    t.set("forms.gle", 93),
    t.set("registrar-servers.com", 94),
    t.set("amazonvideo.com", 95),
    t.set("flickr.com", 96),
    t.set("casalemedia.com", 97),
    t.set("meraki.com", 98),
    t.set("adriver.ru", 99),
    t.set("cnn.com", 100),
    t.set("medium.com", 101),
    t.set("wildberries.ru", 102),
    t.set("doubleverify.com", 103),
    t.set("soundcloud.com", 104),
    t.set("shopify.com", 105),
    t.set("discord.gg", 106),
    t.set("theguardian.com", 107),
    t.set("w3.org", 108),
    t.set("taboola.com", 109),
    t.set("forbes.com", 110),
    t.set("t.co", 111),
    t.set("ozon.ru", 112),
    t.set("slack.com", 113),
    t.set("pubmatic.com", 114),
    t.set("twitch.tv", 115),
    t.set("bbc.com", 116),
    t.set("vungle.com", 117),
    t.set("bbc.co.uk", 118),
    t.set("chatgpt.com", 119),
    t.set("godaddy.com", 120),
    t.set("ebay.com", 121),
    t.set("miui.com", 122),
    t.set("comcast.net", 123),
    t.set("creativecommons.org", 124),
    t.set("webex.com", 125),
    t.set("weather.com", 126),
    t.set("b-cdn.net", 127),
    t.set("roku.com", 128),
    t.set("sciencedirect.com", 129),
    t.set("sourceforge.net", 130),
    t.set("ampproject.org", 131),
    t.set("cpanel.net", 132),
    t.set("netangels.ru", 133),
    t.set("android.com", 134),
    t.set("mit.edu", 135),
    t.set("imdb.com", 136),
    t.set("oracle.com", 137),
    t.set("researchgate.net", 138),
    t.set("salesforce.com", 139),
    t.set("wikimedia.org", 140),
    t.set("canva.com", 141),
    t.set("ivi.ru", 142),
    t.set("temu.com", 143),
    t.set("openai.com", 144),
    t.set("linktr.ee", 145),
    t.set("mts.ru", 146),
    t.set("doi.org", 147),
    t.set("hubspot.com", 148),
    t.set("wixsite.com", 149),
    t.set("who.int", 150),
    t.set("appsflyer.com", 151),
    t.set("mtgglobals.com", 152),
    t.set("inmobi.com", 153),
    t.set("hp.com", 154),
    t.set("openx.net", 155),
    t.set("cisco.com", 156),
    t.set("tinyurl.com", 157),
    t.set("launchdarkly.com", 158),
    t.set("opendns.com", 159),
    t.set("stripe.com", 160),
    t.set("arubanetworks.com", 161),
    t.set("issuu.com", 162),
    t.set("ubuntu.com", 163),
    t.set("grammarly.com", 164),
    t.set("launchpad.net", 165),
    t.set("weebly.com", 166),
    t.set("harvard.edu", 167),
    t.set("reuters.com", 168),
    t.set("appcenter.ms", 169),
    t.set("forter.com", 170),
    t.set("go.com", 171),
    t.set("www.gov.uk", 172),
    t.set("tradingview.com", 173),
    t.set("sharethrough.com", 174),
    t.set("php.net", 175),
    t.set("aol.com", 176),
    t.set("weibo.com", 177),
    t.set("reg.ru", 178),
    t.set("dailymail.co.uk", 179),
    t.set("booking.com", 180),
    t.set("drom.ru", 181),
    t.set("espn.com", 182),
    t.set("alibaba.com", 183),
    t.set("cdc.gov", 184),
    t.set("ibm.com", 185),
    t.set("washingtonpost.com", 186),
    t.set("branch.io", 187),
    t.set("pages.dev", 188),
    t.set("looker.com", 189),
    t.set("adsafeprotected.com", 190),
    t.set("ea.com", 191),
    t.set("dailymotion.com", 192),
    t.set("nature.com", 193),
    t.set("wsj.com", 194),
    t.set("businessinsider.com", 195),
    t.set("gosuslugi.ru", 196),
    t.set("etsy.com", 197),
    t.set("checkpoint.com", 198),
    t.set("cnbc.com", 199),
    t.set("1c.ru", 200),
    t.set("mikrotik.com", 201),
    t.set("naver.com", 202),
    t.set("clarity.ms", 203),
    t.set("debian.org", 204),
    t.set("bloomberg.com", 205),
    t.set("icloud-content.com", 206),
    t.set("huawei.com", 207),
    t.set("un.org", 208),
    t.set("gnu.org", 209),
    t.set("kaspersky-labs.com", 210),
    t.set("yahoo.co.jp", 211),
    t.set("deepintent.com", 212),
    t.set("zendesk.com", 213),
    t.set("moe.video", 214),
    t.set("ok.ru", 215),
    t.set("ys7.com", 216),
    t.set("nasa.gov", 217),
    t.set("duckdns.org", 218),
    t.set("stanford.edu", 219),
    t.set("consultant.ru", 220),
    t.set("pixabay.com", 221),
    t.set("verisign.com", 222),
    t.set("indeed.com", 223),
    t.set("slideshare.net", 224),
    t.set("wyzecam.com", 225),
    t.set("foxnews.com", 226),
    t.set("telegraph.co.uk", 227),
    t.set("independent.co.uk", 228),
    t.set("dnsmadeeasy.com", 229),
    t.set("cornell.edu", 230),
    t.set("unsplash.com", 231),
    t.set("mcafee.com", 232),
    t.set("bilibili.com", 233),
    t.set("xhamster.com", 234),
    t.set("crpt.ru", 235),
    t.set("rambler.ru", 236),
    t.set("nvidia.com", 237),
    t.set("rutube.ru", 238),
    t.set("taobao.com", 239),
    t.set("uber.com", 240),
    t.set("bugsnag.com", 241),
    t.set("tds.net", 242),
    t.set("npr.org", 243),
    t.set("quora.com", 244),
    t.set("hichina.com", 245),
    t.set("duckduckgo.com", 246),
    t.set("entrust.net", 247),
    t.set("avast.com", 248),
    t.set("globo.com", 249),
    t.set("eventbrite.com", 250),
    t.set("360yield.com", 251),
    t.set("sohu.com", 252),
    t.set("teamviewer.com", 253),
    t.set("duolingo.com", 254),
    t.set("steamcommunity.com", 255),
    t.set("goodreads.com", 256),
    t.set("eset.com", 257),
    t.set("ngenix.net", 258),
    t.set("mediatek.com", 259),
    t.set("statista.com", 260),
    t.set("plesk.com", 261),
    t.set("life360.com", 262),
    t.set("walmart.com", 263),
    t.set("calendly.com", 264),
    t.set("kwai.net", 265),
    t.set("giphy.com", 266),
    t.set("addtoany.com", 267),
    t.set("autodesk.com", 268),
    t.set("dell.com", 269),
    t.set("hugedomains.com", 270),
    t.set("behance.net", 271),
    t.set("speedtest.net", 272),
    t.set("erome.com", 273),
    t.set("gitlab.com", 274),
    t.set("cookiedatabase.org", 275),
    t.set("time.com", 276),
    t.set("wired.com", 277),
    t.set("usatoday.com", 278),
    t.set("installatiegereedschap.nl", 279),
    t.set("scribd.com", 280),
    t.set("aliexpress.com", 281),
    t.set("indiatimes.com", 282),
    t.set("mysql.com", 283),
    t.set("line.me", 284),
    t.set("shein.com", 285),
    t.set("visualstudio.com", 286),
    t.set("stackoverflow.com", 287),
    t.set("tp-link.com", 288),
    t.set("datadoghq.com", 289),
    t.set("att.com", 290),
    t.set("uol.com.br", 291),
    t.set("ietf.org", 292),
    t.set("ft.com", 293),
    t.set("timeweb.ru", 294),
    t.set("deviantart.com", 295),
    t.set("trendmicro.com", 296),
    t.set("googleplex.com", 297),
    t.set("target.com", 298),
    t.set("nypost.com", 299),
    t.set("tripadvisor.com", 300),
    t.set("intel.com", 301),
    t.set("fast.com", 302),
    t.set("patreon.com", 303),
    t.set("trustpilot.com", 304),
    t.set("cnet.com", 305),
    t.set("yandex.com", 306),
    t.set("hotjar.com", 307),
    t.set("imgur.com", 308),
    t.set("amplitude.com", 309),
    t.set("t-online.de", 310),
    t.set("docker.com", 311),
    t.set("buzzfeed.com", 312),
    t.set("rakuten.co.jp", 313),
    t.set("surveymonkey.com", 314),
    t.set("yelp.com", 315),
    t.set("ted.com", 316),
    t.set("cdnvideo.ru", 317),
    t.set("newsweek.com", 318),
    t.set("deepl.com", 319),
    t.set("okta.com", 320),
    t.set("sophos.com", 321),
    t.set("ca.gov", 322),
    t.set("squarespace.com", 323),
    t.set("marriott.com", 324),
    t.set("atlassian.com", 325),
    t.set("yieldmo.com", 326),
    t.set("ikea.com", 327),
    t.set("playstation.com", 328),
    t.set("braze.com", 329),
    t.set("hostgator.com", 330),
    t.set("qualtrics.com", 331),
    t.set("conviva.com", 332),
    t.set("britannica.com", 333),
    t.set("loc.gov", 334),
    t.set("accuweather.com", 335),
    t.set("163.com", 336),
    t.set("dynatrace.com", 337),
    t.set("paloaltonetworks.com", 338),
    t.set("tandfonline.com", 339),
    t.set("oraclecloud.com", 340),
    t.set("merriam-webster.com", 341),
    t.set("sina.com.cn", 342),
    t.set("shutterstock.com", 343),
    t.set("lijit.com", 344),
    t.set("cbsnews.com", 345),
    t.set("wattpad.com", 346),
    t.set("optimizely.com", 347),
    t.set("mailchimp.com", 348),
    t.set("livejournal.com", 349),
    t.set("nike.com", 350),
    t.set("uk.com", 351),
    t.set("bidmachine.io", 352),
    t.set("free.fr", 353),
    t.set("tapad.com", 354),
    t.set("fontawesome.com", 355),
    t.set("mobile.de", 356),
    t.set("stackadapt.com", 357),
    t.set("rackspace.com", 358),
    t.set("sentinelone.net", 359),
    t.set("warnerbros.com", 360),
    t.set("telekom.net", 361),
    t.set("dotomi.com", 362),
    t.set("chinamobile.com", 363),
    t.set("fandom.com", 364),
    t.set("klaviyo.com", 365),
    t.set("brave.com", 366),
    t.set("ieee.org", 367),
    t.set("techcrunch.com", 368),
    t.set("w3schools.com", 369),
    t.set("xboxlive.com", 370),
    t.set("elpais.com", 371),
    t.set("newrelic.com", 372),
    t.set("bsky.app", 373),
    t.set("pandora.com", 374),
    t.set("cox.net", 375),
    t.set("360safe.com", 376),
    t.set("jotform.com", 377),
    t.set("mlb.com", 378),
    t.set("intercom.io", 379),
    t.set("noaa.gov", 380),
    t.set("he.net", 381),
    t.set("box.com", 382),
    t.set("apnews.com", 383),
    t.set("disneyplus.com", 384),
    t.set("gdemoideti.ru", 385),
    t.set("vivoglobal.com", 386),
    t.set("avito.ru", 387),
    t.set("xvideos.com", 388),
    t.set("hihonorcloud.com", 389),
    t.set("gumgum.com", 390),
    t.set("anydesk.com", 391),
    t.set("onlyfans.com", 392),
    t.set("atlassian.net", 393),
    t.set("cambridge.org", 394),
    t.set("perfectdomain.com", 395),
    t.set("attn.tv", 396),
    t.set("sapo.pt", 397),
    t.set("airbnb.com", 398),
    t.set("rspamd.com", 399),
    t.set("redhat.com", 400),
    t.set("g.co", 401),
    t.set("myspace.com", 402),
    t.set("webmd.com", 403),
    t.set("bitrix24.ru", 404),
    t.set("viber.com", 405),
    t.set("substack.com", 406),
    t.set("theverge.com", 407),
    t.set("disqus.com", 408),
    t.set("wp.pl", 409),
    t.set("pccc.com", 410),
    t.set("homedepot.com", 411),
    t.set("latimes.com", 412),
    t.set("nbcnews.com", 413),
    t.set("lemonde.fr", 414),
    t.set("miwifi.com", 415),
    t.set("xiaohongshu.com", 416),
    t.set("people.com", 417),
    t.set("tencent.com", 418),
    t.set("heylink.me", 419),
    t.set("digitalocean.com", 420),
    t.set("unesco.org", 421),
    t.set("prnewswire.com", 422),
    t.set("investopedia.com", 423),
    t.set("fiverr.com", 424),
    t.set("zillow.com", 425),
    t.set("zemanta.com", 426),
    t.set("sagepub.com", 427),
    t.set("pendo.io", 428),
    t.set("bluehost.com", 429),
    t.set("stripchat.com", 430),
    t.set("washington.edu", 431),
    t.set("healthline.com", 432),
    t.set("monster.ie", 433),
    t.set("usda.gov", 434),
    t.set("nintendo.com", 435),
    t.set("hbr.org", 436),
    t.set("mayoclinic.org", 437),
    t.set("curseforge.com", 438),
    t.set("usps.com", 439),
    t.set("2gis.com", 440),
    t.set("blueapron.com", 441),
    t.set("nikkei.com", 442),
    t.set("zoho.com", 443),
    t.set("name.com", 444),
    t.set("rbc.ru", 445),
    t.set("apple.news", 446),
    t.set("bandcamp.com", 447),
    t.set("markmonitor.com", 448),
    t.set("fda.gov", 449),
    t.set("iso.org", 450),
    t.set("typeform.com", 451),
    t.set("kargo.com", 452),
    t.set("arxiv.org", 453),
    t.set("singular.net", 454),
    t.set("themeforest.net", 455),
    t.set("upwork.com", 456),
    t.set("adjust.com", 457),
    t.set("namestudio.com", 458),
    t.set("globalsign.com", 459),
    t.set("lenovo.com", 460),
    t.set("daum.net", 461),
    t.set("shopee.com.br", 462),
    t.set("supercell.com", 463),
    t.set("aniview.com", 464),
    t.set("tplinkcloud.com", 465),
    t.set("academia.edu", 466),
    t.set("ameblo.jp", 467),
    t.set("theatlantic.com", 468),
    t.set("princeton.edu", 469),
    t.set("sportradar.com", 470),
    t.set("news.com.au", 471),
    t.set("allegro.pl", 472),
    t.set("capcut.com", 473),
    t.set("cursor.sh", 474),
    t.set("pornhub.com", 475),
    t.set("nationalgeographic.com", 476),
    t.set("lefigaro.fr", 477),
    t.set("pbs.org", 478),
    t.set("mdpi.com", 479),
    t.set("su89-cdn.net", 480),
    t.set("flashtalking.com", 481),
    t.set("bankofamerica.com", 482),
    t.set("hindustantimes.com", 483),
    t.set("unpkg.com", 484),
    t.set("xerox.com", 485),
    t.set("genius.com", 486),
    t.set("synology.com", 487),
    t.set("onet.pl", 488),
    t.set("linode.com", 489),
    t.set("change.org", 490),
    t.set("bild.de", 491),
    t.set("whitehouse.gov", 492),
    t.set("huffingtonpost.com", 493),
    t.set("waze.com", 494),
    t.set("rapid7.com", 495),
    t.set("netgear.com", 496),
    t.set("freepik.com", 497),
    t.set("inkuai.com", 498),
    t.set("threads.net", 499),
    t.set("afternic.com", 500),
    t.set("seznam.cz", 501),
    t.set("irs.gov", 502),
    t.set("discogs.com", 503),
    t.set("biblegateway.com", 504),
    t.set("intentiq.com", 505),
    t.set("skyhigh.cloud", 506),
    t.set("youku.com", 507),
    t.set("mckinsey.com", 508),
    t.set("firefox.com", 509),
    t.set("segment.io", 510),
    t.set("epa.gov", 511),
    t.set("shopeemobile.com", 512),
    t.set("ip-api.com", 513),
    t.set("sendbird.com", 514),
    t.set("dribbble.com", 515),
    t.set("worldbank.org", 516),
    t.set("nest.com", 517),
    t.set("mongodb.com", 518),
    t.set("chess.com", 519),
    t.set("otto.de", 520),
    t.set("chartbeat.net", 521),
    t.set("dreamhost.com", 522),
    t.set("chaturbate.com", 523),
    t.set("hm.com", 524),
    t.set("adblockplus.org", 525),
    t.set("arcgis.com", 526),
    t.set("onesignal.com", 527),
    t.set("heytapmobi.com", 528),
    t.set("asus.com", 529),
    t.set("kickstarter.com", 530),
    t.set("bootstrapcdn.com", 531),
    t.set("openstreetmap.org", 532),
    t.set("state.gov", 533),
    t.set("character.ai", 534),
    t.set("seedtag.com", 535),
    t.set("pexels.com", 536),
    t.set("pikabu.ru", 537),
    t.set("mgid.com", 538),
    t.set("kick.com", 539),
    t.set("repubblica.it", 540),
    t.set("nexusmods.com", 541),
    t.set("redfin.com", 542),
    t.set("kwai-pro.com", 543),
    t.set("figma.com", 544),
    t.set("readthedocs.io", 545),
    t.set("mercadolivre.com.br", 546),
    t.set("agora.io", 547),
    t.set("ryanair.com", 548),
    t.set("python.org", 549),
    t.set("kueezrtb.com", 550),
    t.set("corriere.it", 551),
    t.set("cloudns.net", 552),
    t.set("mirtesen.ru", 553),
    t.set("xnxx.com", 554),
    t.set("pixiv.net", 555),
    t.set("focus.de", 556),
    t.set("eporner.com", 557),
    t.set("columbia.edu", 558),
    t.set("ancestry.com", 559),
    t.set("agoda.com", 560),
    t.set("clever.com", 561),
    t.set("binance.com", 562),
    t.set("elmundo.es", 563),
    t.set("delfi.lt", 564),
    t.set("caixa.gov.br", 565),
    t.set("deloitte.com", 566),
    t.set("sedo.com", 567),
    t.set("www.gov.br", 568),
    t.set("kohls.com", 569),
    t.set("ipify.org", 570),
    t.set("dyndns.org", 571),
    t.set("quizlet.com", 572),
    t.set("lwsdns.com", 573),
    t.set("weforum.org", 574),
    t.set("split.io", 575),
    t.set("jetbrains.com", 576),
    t.set("costco.com", 577),
    t.set("umich.edu", 578),
    t.set("va.gov", 579),
    t.set("xing.com", 580),
    t.set("freefiremobile.com", 581),
    t.set("tagesschau.de", 582),
    t.set("cbc.ca", 583),
    t.set("moneycontrol.com", 584),
    t.set("flipkart.com", 585),
    t.set("lavanguardia.com", 586),
    t.set("cloudinary.com", 587),
    t.set("surfshark.com", 588),
    t.set("leparisien.fr", 589),
    t.set("olx.com.br", 590),
    t.set("smadex.com", 591),
    t.set("docomo.ne.jp", 592),
    t.set("ecosia.org", 593),
    t.set("note.com", 594),
    t.set("moengage.com", 595),
    t.set("marca.com", 596),
    t.set("letterboxd.com", 597),
    t.set("frontiersin.org", 598),
    t.set("ezvizlife.com", 599),
    t.set("bol.com", 600),
    t.set("infobae.com", 601),
    t.set("interia.pl", 602),
    t.set("goal.com", 603),
    t.set("kaspi.kz", 604),
    t.set("wikihow.com", 605),
    t.set("sportybet.com", 606),
    t.set("theconversation.com", 607),
    t.set("no-ip.com", 608),
    t.set("playrix.com", 609),
    t.set("as.com", 610),
    t.set("hilton.com", 611),
    t.set("ilovepdf.com", 612),
    t.set("goo.ne.jp", 613),
    t.set("pusher.com", 614),
    t.set("terra.com.br", 615),
    t.set("ipinfo.io", 616),
    t.set("mapbox.com", 617),
    t.set("domainmarket.com", 618),
    t.set("bfmtv.com", 619),
    t.set("economist.com", 620),
    t.set("ouest-france.fr", 621),
    t.set("idnes.cz", 622),
    t.set("gsmarena.com", 623),
    t.set("fortune.com", 624),
    t.set("alipaydns.com", 625),
    t.set("psychologytoday.com", 626),
    t.set("businesswire.com", 627),
    t.set("poshvine.com", 628),
    t.set("bestbuy.com", 629),
    t.set("bitdefender.net", 630),
    t.set("usnews.com", 631),
    t.set("poki.com", 632),
    t.set("ultimate-guitar.com", 633),
    t.set("aparat.com", 634),
    t.set("betweendigital.com", 635),
    t.set("n-tv.de", 636),
    t.set("trello.com", 637),
    t.set("gofundme.com", 638),
    t.set("spankbang.com", 639),
    t.set("vivo.com", 640),
    t.set("kleinanzeigen.de", 641),
    t.set("jimdo.com", 642),
    t.set("coursera.org", 643),
    t.set("adsmoloco.com", 644),
    t.set("archiveofourown.org", 645),
    t.set("apkpure.com", 646),
    t.set("wps.com", 647),
    t.set("clarin.com", 648),
    t.set("20minutos.es", 649),
    t.set("faphouse.com", 650),
    t.set("tinkoff.ru", 651),
    t.set("lanacion.com.ar", 652),
    t.set("dafont.com", 653),
    t.set("youporn.com", 654),
    t.set("quizizz.com", 655),
    t.set("wise.com", 656),
    t.set("maricopa.gov", 657),
    t.set("hepsiburada.com", 658),
    t.set("badoo.com", 659),
    t.set("hltv.org", 660),
    t.set("edna.ru", 661),
    t.set("sahibinden.com", 662),
    t.set("india.com", 663),
    t.set("welt.de", 664),
    t.set("apa.org", 665),
    t.set("aftonbladet.se", 666),
    t.set("hotstar.com", 667),
    t.set("gismeteo.ru", 668),
    t.set("umeng.com", 669),
    t.set("kompas.com", 670),
    t.set("furaffinity.net", 671),
    t.set("staples.com", 672),
    t.set("ndtv.com", 673),
    t.set("psu.edu", 674),
    t.set("tradplusad.com", 675),
    t.set("service-now.com", 676),
    t.set("udn.com", 677),
    t.set("flashscore.com", 678),
    t.set("finn.no", 679),
    t.set("olx.pl", 680),
    t.set("vg.no", 681),
    t.set("kemono.su", 682),
    t.set("jstor.org", 683),
    t.set("utorrent.com", 684),
    t.set("cookpad.com", 685),
    t.set("ad.nl", 686),
    t.set("nhentai.net", 687),
    t.set("pornpics.com", 688),
    t.set("rule34.xxx", 689),
    t.set("jw.org", 690),
    t.set("dmm.co.jp", 691),
    t.set("lequipe.fr", 692),
    t.set("boyfriendtv.com", 693),
    t.set("notion.so", 694),
    t.set("tabelog.com", 695),
    t.set("yale.edu", 696),
    t.set("ox.ac.uk", 697),
    t.set("biomedcentral.com", 698),
    t.set("abc.net.au", 699),
    t.set("zdnet.com", 700),
    t.set("bet365.com", 701),
    t.set("ucla.edu", 702),
    t.set("vnexpress.net", 703),
    t.set("ovh.net", 704),
    t.set("fetlife.com", 705),
    t.set("nic.do", 706),
    t.set("janitorai.com", 707),
    t.set("avira.com", 708),
    t.set("makemytrip.com", 709),
    t.set("classlink.com", 710),
    t.set("remove.bg", 711),
    t.set("yukiworks.be", 712),
    t.set("lichess.org", 713),
    t.set("pluto.tv", 714),
    t.set("itmedia.co.jp", 715),
    t.set("magazineluiza.com.br", 716),
    t.set("espncricinfo.com", 717),
    t.set("rightmove.co.uk", 718),
    t.set("pravda.ru", 719),
    t.set("ynet.co.il", 720),
    t.set("marketwatch.com", 721),
    t.set("datto.com", 722),
    t.set("gazzetta.it", 723),
    t.set("kwimgs.com", 724),
    t.set("videy.co", 725),
    t.set("cricbuzz.com", 726),
    t.set("upenn.edu", 727),
    t.set("newyorker.com", 728),
    t.set("indiamart.com", 729),
    t.set("mundodeportivo.com", 730),
    t.set("plos.org", 731),
    t.set("acesso.gov.br", 732),
    t.set("orange.fr", 733),
    t.set("txnhh.com", 734),
    t.set("divar.ir", 735),
    t.set("deezer.com", 736),
    t.set("studocu.com", 737),
    t.set("cnnbrasil.com.br", 738),
    t.set("redtube.com", 739),
    t.set("fanfiction.net", 740),
    t.set("zhihu.com", 741),
    t.set("cloud.com", 742),
    t.set("umbrella.com", 743),
    t.set("livedoor.com", 744),
    t.set("trustarc.com", 745),
    t.set("tabor.ru", 746),
    t.set("marktplaats.nl", 747),
    t.set("beeline.ru", 748),
    t.set("championat.com", 749),
    t.set("tgju.org", 750),
    t.set("ssl.com", 751),
    t.set("merkur.de", 752),
    t.set("hostgator.com.br", 753),
    t.set("naukri.com", 754),
    t.set("fr.de", 755),
    t.set("indianexpress.com", 756),
    t.set("livescore.com", 757),
    t.set("bmj.com", 758),
    t.set("ladepeche.fr", 759),
    t.set("excite.co.jp", 760),
    t.set("donga.com", 761),
    t.set("tcylgslb.com", 762),
    t.set("dropcatch.com", 763),
    t.set("fedex.com", 764),
    t.set("hotpepper.jp", 765),
    t.set("actu.fr", 766),
    t.set("calculator.net", 767),
    t.set("donmai.us", 768),
    t.set("emag.ro", 769),
    t.set("dantri.com.vn", 770),
    t.set("noodlemagazine.com", 771),
    t.set("bilibili.tv", 772),
    t.set("cdiscount.com", 773),
    t.set("nic.io", 774),
    t.set("autotrader.co.uk", 775),
    t.set("tvn24.pl", 776),
    t.set("blooket.com", 777),
    t.set("sonobi.com", 778),
    t.set("tesla.com", 779),
    t.set("spamhaus.org", 780),
    t.set("zalando.de", 781),
    t.set("mydramalist.com", 782),
    t.set("cam4.com", 783),
    t.set("dcinside.com", 784),
    t.set("dlsite.com", 785),
    t.set("wordwall.net", 786),
    t.set("jusbrasil.com.br", 787),
    t.set("funpay.com", 788),
    t.set("thisvid.com", 789),
    t.set("youjizz.com", 790),
    t.set("rcdn-web.com", 791),
    t.set("aternos.org", 792),
    t.set("medallia.com", 793),
    t.set("weathernews.jp", 794),
    t.set("ilmessaggero.it", 795),
    t.set("cardgames.io", 796),
    t.set("wisc.edu", 797),
    t.set("subito.it", 798),
    t.set("futbin.com", 799),
    t.set("ixl.com", 800),
    t.set("gamer.com.tw", 801),
    t.set("varzesh3.com", 802),
    t.set("metropoles.com", 803),
    t.set("ntppool.org", 804),
    t.set("fdown.net", 805),
    t.set("e621.net", 806),
    t.set("uci.edu", 807),
    t.set("gizmodo.com", 808),
    t.set("aznude.com", 809),
    t.set("roskazna.ru", 810),
    t.set("turkiye.gov.tr", 811),
    t.set("tuoitre.vn", 812),
    t.set("imhentai.xxx", 813),
    t.set("novinky.cz", 814),
    t.set("oneindia.com", 815),
    t.set("zozo.jp", 816),
    t.set("jd.com", 817),
    t.set("hitomi.la", 818),
    t.set("motherless.com", 819),
    t.set("pornhat.com", 820),
    t.set("jamfcloud.com", 821),
    t.set("e-hentai.org", 822),
    t.set("haberler.com", 823),
    t.set("jagran.com", 824),
    t.set("24h.com.vn", 825),
    t.set("ixxx.com", 826),
    t.set("xxxbp.tv", 827),
    t.set("boardgamearena.com", 828),
    t.set("rule34video.com", 829),
    t.set("luxuretv.com", 830),
    t.set("dagbladet.no", 831),
    t.set("missav.ws", 832),
    t.set("starfall.com", 833),
    t.set("sxyprn.com", 834),
    t.set("mbga.jp", 835),
    t.set("mediaexpert.pl", 836),
    t.set("auone.jp", 837),
    t.set("jable.tv", 838),
    t.set("torob.com", 839),
    t.set("russianfood.com", 840),
    t.set("sexvid.xxx", 841),
    t.set("litnet.com", 842),
    t.set("coolmathgames.com", 843),
    t.set("fuq.com", 844),
    t.set("mangabuff.ru", 845),
    t.set("jut.su", 846),
    t.set("telefonica.de", 847),
    t.set("nikkansports.com", 848),
    t.set("tenki.jp", 849),
    t.set("nps.gov", 850),
    t.set("cronista.com", 851),
    t.set("gelbooru.com", 852),
    t.set("bookmyshow.com", 853),
    t.set("index.hr", 854),
    t.set("sozcu.com.tr", 855),
    t.set("imagefap.com", 856),
    t.set("hulu.com", 857),
    t.set("ilmeteo.it", 858),
    t.set("jalan.net", 859),
    t.set("shiksha.com", 860),
    t.set("youm7.com", 861),
    t.set("3bmeteo.com", 862),
    t.set("vice.com", 863),
    t.set("unmsapp.com", 864),
    t.set("iltalehti.fi", 865),
    t.set("syosetu.com", 866),
    t.set("protothema.gr", 867),
    t.set("oecd.org", 868),
    t.set("otomoto.pl", 869),
    t.set("carsensor.net", 870),
    t.set("game8.jp", 871),
    t.set("business.site", 872),
    t.set("dw.com", 873),
    t.set("blic.rs", 874),
    t.set("bato.to", 875),
    t.set("jutarnji.hr", 876),
    t.set("ficbook.net", 877),
    t.set("ssstik.io", 878),
    t.set("inven.co.kr", 879),
    t.set("hollywoodbets.net", 880),
    t.set("eltiempo.es", 881),
    t.set("hianimez.to", 882),
    t.set("tokyomotion.net", 883),
    t.set("ekstrabladet.dk", 884),
    t.set("snaptik.app", 885),
    t.set("togetter.com", 886),
    t.set("manoramaonline.com", 887),
    t.set("betway.co.za", 888),
    t.set("namasha.com", 889),
    t.set("constantcontact.com", 890),
    t.set("cmoa.jp", 891),
    t.set("gamewith.jp", 892),
    t.set("fapello.com", 893),
    t.set("typekit.com", 894),
    t.set("cityheaven.net", 895),
    t.set("smi2.net", 896),
    t.set("riotgames.com", 897),
    t.set("eenadu.net", 898),
    t.set("1mg.com", 899),
    t.set("liteapks.com", 900),
    t.set("mangabuddy.com", 901),
    t.set("happymod.com", 902),
    t.set("pussyspace.com", 903),
    t.set("toyhou.se", 904),
    t.set("tori.fi", 905),
    t.set("suumo.jp", 906),
    t.set("programme-tv.net", 907),
    t.set("netkeiba.com", 908),
    t.set("aniwatchtv.to", 909),
    t.set("fantia.jp", 910),
    t.set("khabaronline.ir", 911),
    t.set("navitime.co.jp", 912),
    t.set("vmware.com", 913),
    t.set("inxxx.com", 914),
    t.set("kompoz2.com", 915),
    t.set("rakuten-sec.co.jp", 916),
    t.set("sondakika.com", 917),
    t.set("chess-results.com", 918),
    t.set("prokerala.com", 919),
    t.set("bt.dk", 920),
    t.set("fastdl.app", 921),
    t.set("bingoplus.com", 922),
    t.set("69shuba.com", 923),
    t.set("hdtube.porn", 924),
    t.set("serviporno.com", 925),
    t.set("123av.com", 926),
    t.set("carwale.com", 927),
    t.set("3hentai.net", 928),
    t.set("livechatinc.com", 929),
    t.set("k8s.io", 930),
    t.set("librus.pl", 931),
    t.set("instructure.com", 932),
    t.set("njuskalo.hr", 933),
    t.set("fatalmodel.com", 934),
    t.set("supjav.com", 935),
    t.set("listcrawler.eu", 936),
    t.set("qorno.com", 937),
    t.set("hanime1.me", 938),
    t.set("livehindustan.com", 939),
    t.set("goodreturns.in", 940),
    t.set("fastcompany.com", 941),
    t.set("moviebox.ng", 942),
    t.set("fabswingers.com", 943),
    t.set("odoo.com", 944),
    t.set("oreilly.com", 945),
    t.set("novelbin.com", 946),
    t.set("wnacg.com", 947),
    t.set("megafon.ru", 948),
    t.set("canalrcn.com", 949),
    t.set("shahvani.com", 950),
    t.set("property24.com", 951),
    t.set("sexalarab.com", 952),
    t.set("desitales2.com", 953),
    t.set("aajtak.in", 954),
    t.set("sexlog.com", 955),
    t.set("dhl.com", 956),
    t.set("tktube.com", 957),
    t.set("ruliweb.com", 958),
    t.set("ppomppu.co.kr", 959),
    t.set("epfindia.gov.in", 960),
    t.set("beboo.ru", 961),
    t.set("taktube.net", 962),
    t.set("croxyproxy.com", 963),
    t.set("luticlip.com", 964),
    t.set("ninisite.com", 965),
    t.set("lecturas.com", 966),
    t.set("doujindesu.tv", 967),
    t.set("tvonenews.com", 968),
    t.set("joyclub.de", 969),
    t.set("onlinesbi.sbi", 970),
    t.set("forebet.com", 971),
    t.set("sinoptik.ua", 972),
    t.set("trilltrill.jp", 973),
    t.set("ertelecom.ru", 974),
    t.set("zahraa.mr", 975),
    t.set("medicalnewstoday.com", 976),
    t.set("an1.com", 977),
    t.set("pornocarioca.com", 978),
    t.set("skokka.com", 979),
    t.set("www.gob.mx", 980),
    t.set("xosodaiphat.com", 981),
    t.set("meetup.com", 982),
    t.set("goojara.to", 983),
    t.set("mechacomic.jp", 984),
    t.set("doubtnut.com", 985),
    t.set("chordtela.com", 986),
    t.set("tudogostoso.com.br", 987),
    t.set("piccoma.com", 988),
    t.set("nitrotype.com", 989),
    t.set("kakuyomu.jp", 990),
    t.set("agenciatributaria.gob.es", 991),
    t.set("imgsrc.ru", 992),
    t.set("ladies.de", 993),
    t.set("y2mate.nu", 994),
    t.set("hochi.news", 995),
    t.set("iana.org", 996),
    t.set("wikitree.co.kr", 997),
    t.set("typepad.com", 998),
    t.set("kidsa-z.com", 999),
    t.set("52shuku.vip", 1e3),
    t.set("screener.in", 1001),
    t.set("pussyboy.net", 1002),
    t.set("grapee.jp", 1003),
    t.set("arbada.com", 1004),
    t.set("conectate.com.do", 1005),
    t.set("syosetu.org", 1006),
    t.set("fanmtl.com", 1007),
    t.set("xoso.com.vn", 1008),
    t.set("mamastar.jp", 1009),
    t.set("meteofor.com.ua", 1010),
    t.set("escortbabylon.net", 1011),
    t.set("zearn.org", 1012),
    t.set("truyenqqgo.com", 1013),
    t.set("xpaja.net", 1014),
    t.set("shahrekhabar.com", 1015),
    t.set("bikewale.com", 1016),
    t.set("betika.com", 1017),
    t.set("vista.ir", 1018),
    t.set("fc2.com", 1019),
    t.set("tubidy.social", 1020),
    t.set("nosv.org", 1021),
    t.set("spaggiari.eu", 1022),
    t.set("zonatmo.com", 1023));
}
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
class Z {
  constructor(e) {
    ((this.pl = e),
      (this.pl.onerror = (i) => {
        console.log(i.target.error);
      }));
  }
  static async Ie(e) {
    return new Promise((i, s) => {
      ((e.onsuccess = (n) => i(n.target.result)),
        (e.onerror = (n) => s(n.target.error)));
    });
  }
  static async nm(e, i, s) {
    return new Promise((n, o) => {
      ((e.onsuccess = (a) => {
        let r = a.target.result;
        r && i(r.key, r.value, s) ? r.continue() : n(s);
      }),
        (e.onerror = (a) => o(a.target.error)));
    });
  }
  static async query({ si: e, zn: i }, s) {
    return await Z.je([e], "readonly", async (n, [o]) => {
      let a = i ? o.index(i) : o;
      return await Z.Ie(s(a));
    });
  }
  static async ih(e, i) {
    let s = (await Z.sh()).transaction(e, i);
    return [s, e.map((n) => $i(s.objectStore(n), "db"))];
  }
  static async je(e, i, s) {
    let [n, o] = await Z.ih(e, i),
      a,
      r = new Promise((d) => {
        ((n.oncomplete = () => d()),
          (n.onabort = (f) => {
            ((a =
              n.error ??
              f?.target?.error ??
              new Error("IndexedDB transaction aborted")),
              d());
          }));
      }),
      l,
      h;
    try {
      l = await s(n, o);
    } catch (d) {
      ((h = d), console.log(d));
      try {
        n.abort();
      } catch {}
    }
    if ((await r, h)) throw h;
    if (a) throw a;
    return l;
  }
  static async om(e, i, s) {
    await Z.je([e], "readwrite", async (n, [o]) => {
      if (!(await Z.get(s[i], o))) await Z.put(s, o);
      else throw new Error("Object already exists in ObjectStore");
    });
  }
  static async Xo(e, i) {
    i = Vt(i, (n) => n.kt);
    let s = new Date().getTime();
    return await Promise.all(
      i.map(async ({ id: n, kt: o, title: a, nh: r, oh: l }) => {
        let h = await Z.get(n, e),
          d = h ?? {
            id: n,
            type: "tab",
            title: be(a),
            url: o,
            createDate: r ?? s,
            modifyDate: r ?? s,
            parentIds: [],
            ...(!h && { uncommitted: !0 }),
          },
          f = be(a);
        return (
          qo(d.title, d.url, f) && (d.title = f),
          l && (d.parentIds = l),
          d
        );
      }),
    );
  }
  static async _e(e) {
    return (await Z.query({ si: "attr" }, (i) => i.get(e)))?.value;
  }
  static async Ve(e, i) {
    await Z.je(
      ["attr"],
      "readwrite",
      async (s, [n]) => await Z.put({ id: e, value: i }, n),
    );
  }
  static async rm(e, i) {
    return (await Z.query({ si: "attr" }, (n) => n.get(e)))
      ? !1
      : (await Z.Ve(e, i), !0);
  }
  static async Bu(e) {
    await Z.je(["attr"], "readwrite", async (i, [s]) => await Z.delete(e, s));
  }
  static async am(e, i) {
    let s;
    return (
      await Z.je(
        ["attr"],
        "readwrite",
        async (n, [o]) =>
          await Z.modify(o, e, (a) => (s = a.value = i(a?.value))),
      ),
      s
    );
  }
  static async modify(e, i, s) {
    let n = await Z.get(i, e);
    return (n || (n = { id: i }), s(n), await Z.put(n, e));
  }
  static async lm(e, i) {
    return await Promise.all(e.map((s) => Z.get(s, i)));
  }
  static async um(e, i) {
    await Promise.all(e.map((s) => Z.put(s, i)));
  }
  static async get(e, i) {
    return await Z.Ie(i.get(e));
  }
  static async getAll(e, i) {
    return await Z.Ie(i.getAll(e));
  }
  static async put(e, i) {
    return await Z.Ie(i.put(e));
  }
  static async delete(e, i) {
    return await Z.Ie(i.delete(e));
  }
  static async hm(e, i) {
    return await Promise.all(e.map((s) => Z.delete(s, i)));
  }
  static async count(e, i) {
    return await Z.Ie(e.count(i));
  }
  static async getAllKeys(e) {
    return await Z.Ie(e.getAllKeys());
  }
  static async dm(e) {
    return await Z.je(
      ["item"],
      "readonly",
      async (i, [s]) => await Z.get(e, s),
    );
  }
  static async fm(e) {
    return await Z.je(
      ["item"],
      "readonly",
      async (i, [s]) => await Z.get(bt(e), s.index("url")),
    );
  }
  static async sh() {
    return (await Z.rh()).pl;
  }
  static async pm(e) {
    let i = await Z.Ie(e.index("type").getAll("group")),
      s = new Map(i.map((a) => [a.id, a])),
      n = new Set(),
      o = ["trash"];
    for (; o.length; ) {
      let a = o.pop();
      (n.add(a), s.get(a)?.childIds?.forEach((l) => o.push(l)));
    }
    for (o = ["root"]; o.length; ) {
      let a = o.pop();
      (n.delete(a), s.get(a)?.childIds?.forEach((l) => o.push(l)));
    }
    return n;
  }
  static async rh() {
    if (Z.ml) return Z.ml;
    {
      let e = indexedDB.open("onetab", 2);
      e.onupgradeneeded = async (s) => {
        let n = s.target.result,
          o = s.target.transaction;
        if (s.oldVersion < 2) {
          n.objectStoreNames.contains("onetab") &&
            n.deleteObjectStore("onetab");
          let a = n.createObjectStore("item", { keyPath: "id" });
          (a.createIndex(...Ve("type"), { unique: !1 }),
            a.createIndex(...Ve("groupType"), { unique: !1 }),
            a.createIndex(...Ve("task"), { unique: !1 }),
            a.createIndex(...Ve("parentIds"), { unique: !1, multiEntry: !0 }));
          let r = +new Date();
          for (let d of ["root", "quickList", "trash"]) {
            let f = d === "quickList" ? "quickList" : "folder";
            await Z.put(
              {
                id: d,
                type: "group",
                groupType: f,
                parentIds: [],
                childIds: [],
                pinnedCount: 0,
                createDate: r,
                modifyDate: r,
              },
              a,
            );
          }
          let l = n.createObjectStore("attr", { keyPath: "id" });
          (l.put({ id: "installDate", value: r }),
            l.put({ id: "v2InstallDate", value: r }),
            l.put({ id: "installId", value: Xt() }));
          let h = n.createObjectStore("shareUpdate", {
            keyPath: "id",
            autoIncrement: !0,
          });
        }
        s.oldVersion < 3;
      };
      let i = await Z.Ie(e);
      return (Z.ml = new Z(i));
    }
  }
}
class xc extends zo {
  constructor(e) {
    super(async (i) => await Z.get(i, e));
  }
  async wm(e, i) {
    let s = [e];
    for (; s.length; ) {
      let n = await this.get(s.pop());
      (await i(n), n?.childIds?.forEach((o) => s.push(o)));
    }
  }
  async xm(e, i) {
    let s = await this.get(e);
    return await Promise.all(
      s?.childIds?.map(async (n) => await i(await this.get(n))),
    );
  }
}
async function Be(t) {
  return t.length
    ? await Z.je(
        ["item"],
        "readonly",
        async (e, [i]) => await Promise.all(t.map((s) => Z.get(s, i))),
      )
    : [];
}
async function kt(t) {
  if (t) return await Z.query({ si: "item" }, (e) => e.get(t));
}
async function mr() {
  return await Z.query({ si: "item" }, (t) => t.getAll());
}
async function wr() {
  return await Z.query({ si: "item", zn: "type" }, (t) => t.getAll("group"));
}
async function xr() {
  return await Z.query({ si: "item", zn: "task" }, (t) => t.getAll(1));
}
async function br() {
  return await Z.query({ si: "item", zn: "groupType" }, (t) =>
    t.getAll("folder"),
  );
}
async function yr(t) {
  return await Z.query({ si: "item", zn: "parentIds" }, (e) => e.getAll(t));
}
async function bc(t) {
  let e = new Set();
  for (; t && !e.has(t); ) {
    e.add(t);
    let i = await kt(t);
    if (!i) return !1;
    let s = i.parentIds?.find(pt);
    if (s) t = s;
    else return jt(i);
  }
  return !1;
}
async function gr({ groupId: t, ol: e = 0, rl: i, bm: s = !1 }) {
  let n = await kt(t),
    o = new Map();
  o.set(n.id, n);
  let a = vo(await yr(t), Nt),
    r = n.childIds.map((m) => a.get(m)),
    l = r.filter(at),
    h = new Set(r.filter(B).map(Nt)),
    d = Math.max(0, i ? l.length - i - e : 0),
    f = new Set([...l.slice(0, e), ...(i ? l.slice(i) : [])].map((m) => m.id)),
    b = r.filter((m) => !f.has(m.id) && !(s && h.has(m.id)));
  b.forEach((m) => o.set(m.id, m));
  let y = b.filter(at).map((m) => m.id);
  return (
    await Z.je(["item"], "readonly", async (m, [x]) => {
      let g = x.index("parentIds");
      for (; y.length; ) {
        let w = y.shift(),
          k = await Z.Ie(g.getAll(w));
        (k.forEach((u) => o.set(u.id, u)),
          k.forEach((u) => {
            at(u) && y.push(u.id);
          }));
      }
    }),
    { items: [...o.values()], _u: b, al: d }
  );
}
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
const { vt: Kt, ye: Vi, Ni: ui, ge: ts, Ns: vn, qi: hi, io: da, qs: An, $l: jc, eo: fa, Rs: $n, vl: Bc, ke: es, so: pa, no: ma, Il: Cc, Te: is, ro: wa, Us: Sn, Ae: ss, at: Ot, Ws: On, Cs: Mn, Ol: Hc, Ml: qc, zs: Gn, Js: Dn, $e: ns, Sl: xa, oo: ba, Qs: Pn, ve: os, Ie: rs, Zs: Ln, _s: En, Oe: as } = globalThis.createOneTabTreeInteractions({
  get _() { return ht; },
  get _e() { return Xe; },
  get _t() { return Te; },
  get A() { return v; },
  get Ai() { return Ge; },
  get ao() { return ya; },
  get B() { return _; },
  get Bi() { return ye; },
  get ce() { return Wi; },
  get Cr() { return ea; },
  get Ct() { return me; },
  get displayAutoActionOnOpenOptionModal() { return displayAutoActionOnOpenOptionModal; },
  get dnd() { return E; },
  get dt() { return at; },
  get Dt() { return ie; },
  get er() { return Zo; },
  get es() { return Ls; },
  get et() { return Tt; },
  get fi() { return Ut; },
  get ft() { return Pt; },
  get G() { return U; },
  get getItemById() { return kt; },
  get getItems() { return Be; },
  get Gi() { return si; },
  get go() { return Da; },
  get gt() { return qt; },
  get Gt() { return oe; },
  get h() { return c; },
  get he() { return Ui; },
  get hi() { return Ie; },
  get ho() { return ka; },
  get Ht() { return Xt; },
  get iconGrid() { return Yt; },
  get is() { return Ps; },
  get ItemCache() { return $t; },
  get J() { return st; },
  get ji() { return li; },
  get Ki() { return ki; },
  get Ks() { return Fn; },
  get kt() { return Et; },
  get L() { return B; },
  get Ls() { return ai; },
  get lt() { return Mt; },
  get mt() { return yt; },
  get Mt() { return gt; },
  get navigateToItem() { return navigateToItem; },
  get Nr() { return Xr; },
  get ns() { return ti; },
  get Nt() { return he; },
  get O() { return G; },
  get oi() { return ee; },
  get oneTabPage() { return oneTabPage; },
  get ot() { return dt; },
  get P() { return Q; },
  set P(value) { Q = value; },
  get pi() { return He; },
  get pt() { return Lt; },
  get Pt() { return re; },
  get qr() { return Yr; },
  get qt() { return de; },
  get rn() { return Nn; },
  get Rr() { return _r; },
  get rs() { return Fs; },
  get Rt() { return fe; },
  get showSharingModal() { return showSharingModal; },
  get Ss() { return mn; },
  get te() { return Mi; },
  get ti() { return Oe; },
  get ut() { return pt; },
  get Vt() { return qe; },
  get W() { return et; },
  get x() { return p; },
  get X() { return mt; },
  get xi() { return Se; },
  get xs() { return _s; },
  get xt() { return Bt; },
  get ys() { return sn; },
  get Yt() { return _t; },
  get zt() { return pe; }
});
async function Fn({ mode: t = "text", O: e, Gs: i, gu: s, Bf: n }) {
  let o = t === "readingList" && (await chrome.readingList.query({}));
  o &&
    o.sort(
      se(
        Ii((h) => h.hasBeenRead),
        ne((h) => h.creationTime),
      ),
    );
  let a = t === "bookmarks" && (await chrome.bookmarks.getTree()),
    r = new jr({ style: { flex: "1 1 10px", margin: "0 20px" } });
  n?.();
  let l = new Ct({
    $r: !0,
    minWidth: "490px",
    minHeight: "360px",
    Sr: "490px",
    zl: "390px",
    buttons:
      t === "text"
        ? [
            new Ne({
              id: "cancel",
              label: p("Cancel"),
              V: !1,
              Pn: !0,
              tabIndex: 2,
            }),
            new Ne({
              id: "import",
              label: p("Import"),
              V: !0,
              tabIndex: 1,
              onclick: async (h) => {
                let d = r.i.contentWindow.document.body.innerHTML,
                  f = await Ps(d),
                  b = await v.Ma({ Ga: f, Gs: i, O: e });
                b && (await s({ itemId: e, ...(e !== b && { Zi: b }) }));
              },
            }),
          ]
        : [],
  });
  (l.Lt({
    content: c({
      style: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        overflow: "auto",
      },
      children: {
        sx: c({
          init: (h) => (h.i.onclick = (d) => l.destroy()),
          style: {
            position: "absolute",
            top: "14px",
            [st() ? "right" : "left"]: "17px",
            cursor: "pointer",
          },
          p: et(
            { dimension: "12px" },
            (h) => `images/cross${h ? "" : "-dark"}.png`,
          ),
        }),
        nx: new nn({
          fontSize: "12px",
          $: { paddingTop: "12px", paddingInlineStart: "16px" },
          Dc: [
            { label: p("importText"), name: "text" },
            { label: p("importBookmarks"), name: "bookmarks" },
            ...G(await Ro(), {
              label: p("importReadingList"),
              name: "readingList",
            }),
          ],
          Pc: [t],
          onChange: async ([h]) => {
            if (h !== t) {
              if (h === "bookmarks" && !(await ds("bookmarks")))
                return (alert(p("bookmarksPermissionNecesssary")), !1);
              if (h === "readingList" && !(await ds("readingList")))
                return (alert(p("readingListPermissionNecesssary")), !1);
              await Fn({ mode: h, O: e, Gs: i, gu: s, Bf: () => l.destroy() });
            }
          },
        }),
        ...(t === "text" && {
          content: Br({
            style: { paddingInline: "20px 20px", paddingBlock: "18px 10px" },
          }),
          ox: r,
        }),
        ...(t === "bookmarks" && {
          content: c({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "8px",
              overflow: "auto",
            },
            children: {
              lx: c({
                children: a.map((h) => ln(h, !0, i, e, () => l.destroy())),
              }),
            },
          }),
        }),
        ...(t === "readingList" && {
          content: c({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "16px",
              marginBottom: "26px",
              overflow: "auto",
            },
            children: {
              header: c({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                },
                children: {
                  xf: et(
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
                    (h) => `images/folder${h ? "" : "-dark"}.png`,
                  ),
                  title: c({
                    style: { flex: "0 1 auto", fontWeight: 600 },
                    textContent: p("readingList"),
                  }),
                  bf: c({
                    style: { flex: "0 0 auto" },
                    p: new Ht({
                      V: !0,
                      label: p("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (h) => {
                        (await v.Ma({
                          Ga: [
                            o.map(({ title: d, url: f }) => ({
                              kt: bt(f),
                              title: d,
                            })),
                          ],
                          Gs: i,
                          O: e,
                        }),
                          l.destroy());
                      },
                    }),
                  }),
                },
              }),
              ...(o?.length && {
                entries: c({
                  style: { marginInlineStart: "-6px" },
                  children: o.map((h) => cn(h)),
                }),
              }),
              ...(!o?.length && {
                ux: c({
                  style: { marginInlineStart: "25px", fontSize: "13px" },
                  textContent: p("noReadingListEntries"),
                }),
              }),
            },
          }),
        }),
      },
    }),
  }),
    r.jd());
}
const ya = [
  { name: "newWindow", label: p("openInNewWindow") },
  { name: "currentWindow", label: p("openInThisWindow") },
  { name: "newIncognitoWindow", label: p("openInIncognitoWindow") },
];
(async () => (
  await qe(),
  [...document.querySelectorAll("[data-m]")].forEach(
    (t) => (t.textContent = p(t.dataset.m)),
  )
))();
function ga(t, e) {
  const i = t.slice(),
    s = new Set(t);
  let n = -1;
  for (const o of e) {
    if (s.has(o)) {
      n = i.lastIndexOf(o);
      continue;
    }
    const a = n === -1 ? 0 : n + 1;
    (i.splice(a, 0, o), s.add(o), (n = a));
  }
  return i;
}
async function jn(t, e, i) {
  const s = ga(t, e),
    n = t.slice();
  let o = 0,
    a = 0;
  for (; a < s.length; ) {
    if (o < n.length && n[o] === s[a]) {
      (o++, a++);
      continue;
    }
    const r = o,
      l = [];
    for (; a < s.length && (o >= n.length || n[o] !== s[a]); )
      (l.push(s[a]), a++);
    (await i(l, r), po(n, r, l), (o = r + l.length));
  }
  return n;
}
class Ne {
  constructor({ id: e, label: i, V: s, Pn: n, onclick: o, tabIndex: a }) {
    ((this.id = e),
      (this.V = s),
      (this.Pn = n),
      (this.Tu = G(o)),
      (this.o = c({
        className: "button-outer" + (s ? " button-default-outer" : ""),
        p: U("button", {
          className: "button",
          textContent: i,
          onclick: (r) => (r.stopPropagation(), this.click(r)),
          tabIndex: a,
        }),
      })));
  }
  Cf(e) {
    this.Tu.push(e);
  }
  focus() {
    this.o.p.i.focus();
  }
  click(e) {
    this.Tu.forEach((i) => i(e));
  }
}
async function Uc({ message: t, xi: e }) {
  return new Promise((i) => {
    new Ct({
      buttons: [
        new Ne({
          id: "cancel",
          label: p("Cancel"),
          V: !1,
          Pn: !0,
          tabIndex: 2,
          onclick: (n) => i(!1),
        }),
        new Ne({
          id: "ok",
          label: p("OK"),
          V: !0,
          tabIndex: 1,
          onclick: (n) => i(!0),
        }),
      ],
    }).Lt({ message: t, xi: e });
  });
}
async function pe(t, { Iu: e = !1 } = {}) {
  return new Promise((i) => {
    new Ct({
      buttons: [
        new Ne({
          id: "ok",
          label: p("OK"),
          V: !0,
          Pn: !0,
          tabIndex: 0,
          onclick: (n) => i(),
        }),
      ],
    }).Lt({ message: t, Iu: e });
  });
}
async function zc(t) {
  return new Promise((e) => {
    new Ct({ buttons: [] }).Lt({ message: t });
  });
}
const Bn = "moveToTrashGroupCrossHintShown";
async function ka({ Ef: t }) {
  if (t)
    try {
      if (await v._e(Bn)) return;
      (await v.Ve(Bn, !0), await Ta());
    } catch (e) {
      console.log(`maybeShowMoveToTrashGroupCrossHintModal failed: ${e}`);
    }
}
async function Ta() {
  return await new Promise((t) => {
    let e = new Ct({
        fs: !0,
        Ul: !1,
        $r: !1,
        minWidth: "460px",
        Sr: "460px",
        buttons: [],
        Bo: () => t(),
      }),
      i = et(
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
        (o) => `images/cross2${o ? "" : "-dark"}.png`,
      ),
      s = c({
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
          hx: i,
          title: c({
            className: "tabGroupLabelText oneLineWithEllipsis",
            style: { flex: "1 1 auto" },
            textContent: p("modalMoveToTrashHintExampleGroupTitle"),
          }),
        },
      }),
      n = c({
        style: {
          padding: "24px 30px 22px 30px",
          maxWidth: "460px",
          lineHeight: "1.6em",
        },
        children: {
          heading: c({
            style: {
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "12px",
              marginInlineStart: "10px",
            },
            textContent: p("modalMoveToTrashHintHeading"),
          }),
          mx: s,
          wx: c({
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            },
            p: new Ht({
              label: p("gotIt"),
              V: !0,
              tabIndex: void 0,
              fontSize: "13px",
              onclick: async () => e.destroy(),
            }),
          }),
        },
      });
    e.Lt({ content: n });
  });
}
class Ct {
  static zIndex = 1e4;
  constructor({
    buttons: e,
    $r: i,
    minWidth: s,
    minHeight: n,
    Sr: o,
    zl: a,
    fs: r,
    Ul: l,
    Bo: h,
  }) {
    ((this.Bo = h), (Ct.Is = !0), (this.m = []), (this.buttons = e));
    let d = Object.fromEntries(e.map((b) => [b.id, b]));
    if (
      ((this.o = c({
        onclick: (b) => {
          (b.stopPropagation(),
            l && !(new Date() - On < 50) && !Ot && this.destroy());
        },
        style: {
          zIndex: Ct.zIndex,
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
        p: c({
          role: "alertdialog",
          ariaModal: "true",
          style: {
            border: "var(--tab-group-border)",
            borderRadius: "10px",
            backgroundColor: "var(--border-color)",
            boxShadow: "var(--popup-box-shadow)",
            position: "relative",
          },
          init: ({ i: b }) => {
            this.m.push(
              nt(b, "click", (y) => {
                y.stopPropagation();
              }),
            );
          },
          children: {
            ja: c({
              style: {
                display: "flex",
                flexDirection: "column",
                ...(s && { minWidth: s }),
                ...(n && { minHeight: n }),
                ...(o && { width: o }),
                ...(a && { height: a }),
                borderRadius: "8px",
                backgroundColor: "var(--bg-color)",
              },
              children: {
                content: c({}),
                ...(e.length && {
                  buttons: c({
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
                    children: d,
                  }),
                }),
                ...(i && {
                  Hf: c({
                    style: {
                      position: "absolute",
                      right: "4px",
                      bottom: "0px",
                    },
                    p: et(
                      {
                        width: "12px",
                        height: "12px",
                        style: { cursor: "nwse-resize" },
                      },
                      (b) =>
                        `images/bottom-right-resize${b ? "" : "-dark"}.png`,
                    ),
                  }),
                }),
              },
            }),
          },
        }),
      })),
      i)
    ) {
      let b = this.o.p.ja.i;
      (this.m.push(
        nt(this.o.p.ja.Hf.i, "pointerdown", (y) =>
          Mn({
            event: y,
            Il: {
              vu: b,
              qf: b.offsetWidth,
              Uf: b.offsetHeight,
              Qn: parseInt(b.style.minWidth),
              zf: parseInt(b.style.minHeight),
            },
            Al: ({ ts: m, es: x, dx: g, dy: w }) => {
              ((x.vu.style.width = `${Math.min(window.innerWidth - 80, Math.max(x.Qn, x.qf + g * 2))}px`),
                (x.vu.style.height = `${Math.min(window.innerHeight - 70, Math.max(x.zf, x.Uf + w * 2))}px`));
            },
          }),
        ),
      ),
        this.m.push(
          nt(window, "resize", (y) => {
            ((b.style.width = `${Math.min(window.innerWidth - 80, Math.max(parseInt(b.style.minWidth), b.clientWidth))}px`),
              (b.style.height = `${Math.min(window.innerHeight - 70, Math.max(parseInt(b.style.minHeight), b.clientHeight))}px`));
          }),
        ));
    }
    let f = e.find((b) => b.Pn);
    (f &&
      this.m.push(
        nt(document, "keydown", (b) => {
          Oe(b) && f.click();
        }),
      ),
      r &&
        this.m.push(
          nt(document, "keydown", (b) => {
            Oe(b) && (b.preventDefault(), this.destroy());
          }),
        ),
      Object.values(d).forEach((b) =>
        b.Cf((y) => {
          this.destroy();
        }),
      ));
  }
  Lt({ content: e, message: i, xi: s, Iu: n }) {
    ((this.content = e), (this.message = i));
    let o = i
      ? c({
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
            xx: c({ ...(n ? { innerHTML: i } : { textContent: i }) }),
            ...(s && {
              xi: c({
                style: { marginTop: "24px", fontSize: "12px" },
                textContent: s,
              }),
            }),
          },
        })
      : e;
    (this.o.p.ja.content.i.replaceWith(o.i),
      document.body.appendChild(this.o.i),
      setTimeout(() => this.buttons.find((a) => a.V)?.focus(), 1));
  }
  destroy() {
    ((Ct.Is = !1),
      this.m?.forEach((e) => e.remove()),
      this.content?.destroy?.(),
      this.o.i.remove(),
      this.Bo?.(),
      (this.Bo = null));
  }
}
function Ia({ eo: t, Ec: e }) {
  return U("div", {
    style: {
      fontSize: "12px",
      fontWeight: 400,
      marginInline: "8px 8px",
      marginBlock: "8px 8px",
      lineHeight: "1.5em",
    },
    children: {
      body: c({
        style: {},
        children: t.map(({ name: i, label: s }) =>
          Mt.bi({ name: i, label: s, action: () => e(i) }),
        ),
      }),
    },
  });
}
function va({ content: t, filename: e, mimeType: i = "text/plain" }) {
  const s = document.createElement("a"),
    n = new Blob([t], { type: i }),
    o = URL.createObjectURL(n);
  ((s.href = o),
    (s.download = e),
    s.click(),
    setTimeout(() => URL.revokeObjectURL(o), 2e3));
}
function Aa(t) {
  return (
    (t = ce(ws(t))),
    (t = t.replace(/[\\/:*?"<>|]/g, " ")),
    (t = t.replace(/[\s]+/g, " ").trim()),
    (t = t.replace(/[. ]+$/g, "")),
    t || (t = "folder"),
    t.substring(0, 70)
  );
}
function $a(t) {
  if (!t) return "";
  let e = new Date(t);
  return `${e.toLocaleDateString(void 0, { cc: "short" })}, ${e.toLocaleTimeString()}`;
}
function ls({ h: t, Qt: e }) {
  let i = 0;
  for (let s of e.childIds ?? []) {
    let n = t.v(s);
    n && (_(n) ? i++ : at(n) && (i += ls({ h: t, Qt: n })));
  }
  return i;
}
function Sa({ h: t, Wf: e, entries: i = [] }) {
  for (let s of e.childIds ?? []) {
    let n = t.v(s);
    n && at(n) && !B(n) && i.push({ Qt: n });
  }
  return i;
}
function Cn({ Qt: t, h: e, level: i = 0, Ps: s }) {
  let n = "",
    o = 20,
    a = i ? i * o : 0,
    r = (i + 1) * o,
    l = 0;
  for (let h of t.childIds ?? []) {
    let d = e.v(h);
    if (d) {
      if (_(d)) {
        let f = Ls(d.url || ""),
          b = Lt(d.title || d.url || ""),
          y =
            s && d.notes?.text
              ? `<div class="tabNotes">${Lt(d.notes.text)}</div>`
              : "";
        ((n += `<div class="tab" style="padding-inline-start: ${a}px;"><a class="tabLink" href="${f}">${b}</a>${y}</div>`),
          l++);
      } else if (at(d)) {
        let f = je({ h: e, l: d });
        ((n += `<div class="innerGroupBlock" style="margin-top: ${l ? 8 : 2}px;">
        <div class="innerGroupTitleText" style="padding-inline-start: ${r}px;">${Lt(f)}</div>`),
          s &&
            d.notes?.text &&
            (n += `<div class="innerGroupNotes" style="padding-inline-start: ${r}px;">${Lt(d.notes.text)}</div>`),
          (n += Cn({ Qt: d, h: e, level: i + 1, Ps: s })),
          (n += "</div>"),
          l++);
      }
    }
  }
  return n;
}
function Oa({ Qt: t, h: e, Ps: i }) {
  let s = ls({ h: e, Qt: t }),
    n = ji({ h: e, l: t }),
    o = gt("tabCount", s),
    a = t.createDate ? `${p("createdPreceedingDate")} ${$a(t.createDate)}` : "",
    r = Cn({ Qt: t, h: e, Ps: i });
  return `<div class="tabGroup">
      <div class="tabGroupHeader">
        <div class="tabGroupHeaderRow">
          <div class="tabGroupTitleText">${Lt(n || o)}</div>
          ${n ? `<div class="tabCountInline">${Lt(o)}</div>` : ""}
        </div>
        ${a ? `<div class="createdDate">${Lt(a)}</div>` : ""}
      </div>
      <div class="tabList">${r}</div>
    </div>`;
}
function Ma({ Nf: t, Rf: e, Zf: i, h: s, Qf: n, Ps: o }) {
  let a = i.map((d) => Oa({ Qt: d.Qt, h: s, Ps: o })).join(""),
    r = i.length
      ? ""
      : `<div id="emptyState">${Lt(p("noTabsInOneTabYet"))}</div>`,
    l = p("oneTabExportPageTitle"),
    h = n ? `${t} - ${l}` : l;
  return `<!DOCTYPE html>
<html dir="${st() ? "ltr" : "rtl"}">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>${Lt(h)}</title>
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
    ${n ? `<div id="folderTitle">${Lt(t)}</div>` : ""}
    <div id="headerText">${Lt(gt("tabTotalCount", e))}</div>
    <div id="tabGroupsDiv">${a}${r}</div>
  </div>
</body>
</html>`;
}
async function Ga({ La: t, h: e }) {
  ((e ??= new $t()), await e.Te({ groupId: t }));
  let i = e.v(t);
  if (!i || !B(i))
    throw new Error("getFolderSavedPageExport requires a folder item");
  let s = je({ h: e, l: i }),
    n = !1,
    o = Sa({ h: e, Wf: i }),
    a = o.map(({ Qt: l }) => ls({ h: e, Qt: l })).reduce((l, h) => l + h, 0),
    r = !ht(i);
  return {
    filename: `${Aa(s)}.html`,
    Ee: Ma({ Nf: s, Rf: a, Zf: o, h: e, Qf: r, Ps: n }),
  };
}
async function Da({ La: t }) {
  let { filename: e, Ee: i } = await Ga({ La: t });
  va({ content: i, filename: e, mimeType: "text/html" });
}
let It, Re;
async function Hn(t) {
  return c({
    style: {
      fontSize: "12px",
      fontWeight: "400",
      padding: "8px 12px",
      minWidth: "36px",
      maxWidth: "250px",
      textAlign: "center",
    },
    textContent: t,
  }).i;
}
async function qn(t) {
  if (typeof t == "string") return Hn(t);
  if (typeof t == "function") {
    let e = await t();
    return e
      ? typeof e == "string"
        ? Hn(e)
        : e instanceof Element
          ? e
          : e.i
      : void 0;
  } else return;
}
function te(t, { Yt: e, Ls: i, bx: s }) {
  let n = t instanceof HTMLElement ? t : (t?.o?.i ?? t.i),
    o,
    a = [];
  return (
    a.push(
      ze(n, () => {
        (Re !== void 0 && clearTimeout(Re),
          (Re = setTimeout(async () => {
            if ((It?.destroy(), !n?.isConnected || s?.())) return;
            let r = await qn(e);
            if (!r) return;
            let l = n.getBoundingClientRect(),
              h = document.body.getBoundingClientRect();
            o = l.left < (h.right - h.left) / 2 + h.left;
            let d = c({
              style: { width: "250px", position: "absolute", left: "-1000px" },
              p: r,
            }).i;
            document.body.appendChild(d);
            let f = d.offsetHeight + 20 > l.top;
            (d.remove(),
              (It = new Pa({ parent: t, Yt: e, Jf: r, Kf: f, Xf: o, Ls: i })));
            let b = Math.round(l.width / 2);
            if (i) {
              let y = i();
              b !== void 0 && (b = y);
            }
            ((It.Au = b),
              (It.o.i.style.left = `${l.x + b + (o ? 0 : -250) + window.scrollX}px`),
              (It.o.i.style.top = `${l.y + (f ? l.height : 0) + window.scrollY}px`),
              document.body.appendChild(It.o.i));
          }, 250)));
      }),
    ),
    i &&
      a.push(
        aa(n, async () => {
          if (!It?.Ls) return;
          let r = It.Ls();
          if (r !== It.Au && r !== void 0) {
            let l = await qn(It.Yt);
            (It.o.$u.p.replaceWith(l), (It.o.$u.p = l));
            let h = n.getBoundingClientRect();
            ((It.o.i.style.left = `${h.x + r + (o ? 0 : -250) + window.scrollX}px`),
              (It.Au = r));
          }
        }),
      ),
    a.push(
      We(n, () => {
        (Re !== void 0 && clearTimeout(Re), It?.destroy());
      }),
    ),
    a
  );
}
class Pa {
  constructor({ Jf: e, Kf: i, Xf: s, Ls: n }) {
    ((this.Ls = n),
      (this.o = c({
        className: "tooltip-content",
        style: {
          fontSize: 0,
          position: "absolute",
          width: "250px",
          height: "0",
          zIndex: 2e4,
        },
        children: {
          $u: c({
            style: {
              fontSize: 0,
              position: "absolute",
              ...(s ? { left: "-25px" } : { right: "-25px" }),
              ...(i ? { top: "12px" } : { bottom: "12px" }),
            },
            className: `tooltip ${i ? "p-top" : "p-bottom"} ${s ? "left" : "right"}`,
            p: e,
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
