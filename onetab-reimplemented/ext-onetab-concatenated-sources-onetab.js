// Copyright 2026 OneTab Ltd.  All rights reserved.
const {
  version: mr,
  false1: $l,
  false2: Ml,
  false3: Sl,
  false4: Dl,
  false5: Fl,
  false6: Ll,
  true1: Pl,
  chromeUrl: jl,
  chromeNewTabUrl: Gl,
  websiteUrl: we,
  false7: El,
  false8: Bl,
  true2: Hl,
  false9: Nl,
  oneTabPageUrl: xr,
  extensionRootUrl: je,
  tabGroupsEnabled: As,
  hasTabGroupsPermission: zl,
  requestTabGroupsPermission: Ul,
  requestPermission: Is,
  isOneTabPageUrl: Oi,
  isExtensionUrl: Wl,
  stripHttpProtocol: wr,
  domainWithoutWww: $i,
  extractDomain: ei,
  protocolPrefix: ql,
  commonDomainSuffixes: Os,
  registeredDomain: yr,
  addNoCacheRandom: br,
  noCacheRandom: gr,
  postJson: kr,
  fetchJson: Tr,
  randomAlphabet: Mi,
  randomId: vr,
  randomHex: Rl,
  newId: Zt,
  textEncoder: Ar,
  textDecoder: Cl,
  digestBytes: Ir,
  digestText: Or,
  stableIdFromText: Si,
  trimWhitespace: Di,
  isLineBreak: $r,
  nonStandardLineBreaks: Mr,
  normalizeLineBreaks: Sr,
  removeControlCharacters: $s,
  removeControlCharactersExceptTabs: Ms,
  normalizedOrDefault: Fi,
  normalizeText: oe,
  endsWith: Dr,
  compareVersionParts: Ss,
  versionLessThan: Ds,
  versionGreaterThan: Fr,
  versionBetween: Zl,
  defaultSettings: Jl,
  moveElementToIndex: Lr,
  insertBeforeElement: Pr,
  div: c,
  createElement: L,
  internalProps: jr,
  createNode: Ge,
  readerUrlPrefix: Fs,
  normalizeUrl: St,
  placeholderUrlFor: Gr,
  isFileAccessBlocked: Ls,
  parseDigits: Ps,
  last: Ql,
  backoffSteps: js,
  backoffDurations: Er,
  waitForCondition: Gs,
  translate: f,
  runWhenDomReady: Br,
  horizontalDivider: Ft,
  relativeTimeFormatter: Hr,
  relativeTimeUnits: Es,
  relativeTime: Bs,
  relativePastTime: Hs,
  relativeFutureTime: Ns,
  deepEqual: ii,
  sortObjectDeep: zs,
  clearArray: Us,
  uniqueBy: Nr,
  arrayInsert: zr,
  sameSet: Ur,
  sameJson: Kl,
  pushUnique: ye,
  includes: _t,
  includesAny: de,
  removeAll: Li,
  removeWhere: Vl,
  toggleValue: Xl,
  removeFirstWhere: _l,
  maybeArray: I,
  removeOccurrence: Yl,
  mapIdsToItems: th,
  filterToSet: eh,
  filterNested: Wr,
  not: si,
  partition: be,
  partitionMany: Pi,
  asyncPartition: ih,
  activateTab: sh,
  activateTabAndWindow: nh,
  randomItem: rh,
  randomColor: oh,
  excludedUrlPrefixes: qr,
  isExcludedUrl: Ws,
  saveUncommittedChanges: ge,
  clearUncommittedChanges: ah,
  getUncommittedChanges: qs,
  clearAllUncommittedChanges: lh,
  pruneUncommittedChanges: Rs,
  localStorageAdapter: Cr,
  getLocalStorageAdapter: hh,
  placeholderParts: ph,
  makeProxyHandler: yh,
  identity: Hi,
  intersperseLocal: Th,
  childTypeCode: vh,
  editTypeCode: Ah,
  tabTypeCode: Ih,
  sessionStorageAdapter: eo,
  getSessionStorageAdapter: Te,
  runtimeMarker: io,
  renderLabelSegments: Js,
  tabCount: Wi,
  bookmarkCount: ao,
  replaceLabelSegments: qi,
  htmlEscapeText: Ot,
  htmlEscapeAttribute: Xs,
  identityPair: li,
  EventAttachment: _s,
  itemOccurrenceRef: wt,
  AsyncMapCache: po,
  hasNotesText: Fh,
  nonNegative: Ri,
  isTabExcluded: Lh,
  isPlaceholderUrl: mo,
  shouldSkipTab: xo,
  allSame: Ph,
  escapeXml: jh,
  isChromium120OrNewer: wo,
  colorNames: Ys,
  defaultColor: Ee,
  true3: Gh,
  leadingNonAlphanumeric: yo,
  measureElement: bo,
  modelPredicates: { isUndefined: ch, isDefined: Zr, hasId: Jr, doesNotHaveId: Qr, sameIdAs: uh, getId: Nt, isTab: B, isRoot: it, isTrash: It, isFolder: F, isArchived: ae, isTask: ni, isUserFolder: dh, isQuickList: ji, isFolderOrWindowGroup: fh, isGroup: Y, isTabGroup: kt, isWindowGroup: Dt, isBrowserGroup: Yt, isNotQuickList: rt, isSharedAndNotExpired: ri },
  collectionHelpers: { combineComparators: ke, compareAscendingBy: Gi, compareDescendingBy: te, compareLocaleBy: mh, compareLocaleNumericBy: Cs, mergeOwnProperty: xh, mergeDefined: wh, mapBy: Kr, groupBy: bh, range: Vr, nthIndexOf: gh, KeyedObjectMap: kh },
  searchHelpers: { splitSearchText: Xr, splitSearchTextWithTerm: _r, createSearchTermRegExp: Zs },
  runtimeHelpers: { delay: le, replaceValueDeep: Ni, isOpera: so, isBrave: Oh, isMicrosoftEdge: no, unsleepTab: $h, mergeObjectsWithSeparators: zi, intersperse: Mh, callIfOwnProperty: Ui, callIfDefined: ro, joinUniqueTrimmed: Sh },
  domTransitionHelpers: { fadeOut: oo, fadeIn: Dh },
  applyRuntimeHelpers: { applyValue: fe, applyIfTruthy: Lt },
  urlHelpers: { trimTrailingDotOrComma: lo, substringAfter: ho, stripProtocol: ee, equalIgnoringProtocol: ai, safeNormalizeText: pe, canonicalizeTextAsUrl: Qs, areUrlLikeEqual: Ks, isYouTubeUrl: co, shouldUseCandidateUrl: uo, safeNonJavascriptUrl: ve },
  textHelpers: { normalizeImportedText: fo },
  importHelpers: { parseImportedTabGroups: Vs }
} = globalThis.createOneTabBundlePrelude({
  getCoreProxy: () => T,
  isNewOrBlankTabPageUrl: url => Wo(url),
  pluralize: (key, count) => C(key, count),
  trimToLengthWithEllipsis: (...args) => Nn(...args),
});
const {
  taskFieldNames: Be,
  shareFieldNames: tn,
  sharedPageUrlPattern: Eh,
  splitOversized: Bh,
  isJson: go,
  localeId: hi,
  helpUrl: en,
  localizedPathPrefix: ko,
  matchesOrUnset: sn,
  getDirection: To,
  isLtr: U,
  applyDocumentDirection: vo,
  pluralize: C,
  groupPathLabel: Hh,
  groupLabelParts: Ao,
  groupDisplayLabel: He,
  groupFallbackLabel: Ci,
  groupLabel: Zi,
  debounceByType: Io,
  shouldApplyChrome145Workaround: Oo,
  isChrome145: $o,
  uncollapseChrome145TabGroup: Nh,
} = globalThis.createOneTabPageCommon({
  websiteUrl: we,
  translate: f,
  tabCount: Wi,
  isRoot: it,
  isTrash: It,
  isFolder: F,
  isMicrosoftEdge: no,
});
const { cleanUrlForSearch: Mo } = globalThis.createOneTabUrlQueryCleanup();
function So() {
  return crypto.getRandomValues(new Uint8Array(256 / 8));
}
function Do() {
  return Fo(So());
}
function Fo(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function zh(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
async function Uh({ key: t, data: e }) {
  return new Uint8Array(await crypto.subtle.sign({ name: "HMAC" }, t, e));
}
class ht {
  constructor(e = []) {
    ((this.$t = new Map()), e.forEach((i) => this.$t.set(i.id, i)));
  }
  static qn = Symbol("uncommitted");
  async ht(e) {
    let i = this.$t.get(e);
    if (!i) {
      if (((i = await ot(e)), !i)) return;
      this.put(i);
    }
    return i;
  }
  async getItems(e) {
    let i = e.filter((n) => !this.$t.has(n));
    return (
      (await Ut(i)).forEach((n) => this.put(n)),
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
        (await Co()).forEach((e) => this.put(e)),
        this.Ya(),
        this._a(),
        (this.Jo = new Map()),
        this.$t.forEach((e) => {
          B(e) && this.Jo.set(e.id, Ki(e.url));
        })),
      this
    );
  }
  async ke() {
    return (
      this.Ru ||
        ((this.Ru = !0),
        (this.Va = !0),
        (await Zo()).forEach((i) => this.put(i)),
        this.Ya(),
        this._a()),
      this
    );
  }
  async tl() {
    if ((await this.ke(), !this.Zu)) {
      this.Zu = !0;
      let e = await Jo();
      (e.forEach((s) => this.put(s)),
        (this.Un = new Set(
          e.filter(si(ae)).flatMap((s) =>
            s.parentIds
              .filter(rt)
              .map((o) => this.v(o))
              .filter(si(ae))
              .map(Nt),
          ),
        )));
      let i = new Set(this.Un);
      for (; i.size; ) {
        let s = new Set();
        (i.forEach((n) => {
          this.v(n)
            .parentIds.filter(rt)
            .map((a) => this.v(a))
            .filter(si(ae))
            .map(Nt)
            .forEach((a) => {
              this.Un.has(a) || (this.Un.add(a), s.add(a));
            });
        }),
          (i = s));
      }
    }
    return this;
  }
  async Wp() {
    return (
      this.Va || ((this.Va = !0), (await Qo()).forEach((i) => this.put(i))),
      this
    );
  }
  _a() {
    this.Qu = new Set();
    let i = [...this.$t.values()].filter(ae).filter(Y).map(Nt);
    for (; i.length; ) {
      let s = i.pop();
      (this.Qu.add(s), this.v(s)?.childIds?.forEach((r) => i.push(r)));
    }
    for (this.el = new Set(), i = ["root"]; i.length; ) {
      let s = i.pop();
      (this.el.add(s),
        this.v(s)?.childIds?.forEach((r) => {
          let o = this.v(r);
          !o || B(o) ? this.el.add(r) : ae(o) || i.push(r);
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
      return i && F(i);
    });
  }
  async il({ count: e, B: i, Rp: s, sl: n, Ju: r }) {
    await this.ke();
    let o = [...this.$t.values()]
      .filter((a) => !a.archived)
      .filter((a) => (i ? F(a) : !0))
      .filter((a) => (s ? !F(a) : !0))
      .filter((a) => Y(a) && a.label)
      .filter((a) => !this.re.has(a.id))
      .filter((a) => !a[ht.qn])
      .sort(te((a) => a.modifyDate));
    if ((!o.length && !r && o.push(this.v("root")), n)) {
      let a = new Set(),
        l = [...o];
      o = [];
      for (let h of l) a.has(h.label) || (o.push(h), a.add(h.label));
    }
    return o.slice(0, e);
  }
  Ku({ ti: e, maxResults: i, B: s }) {
    return (
      (e = e.map((n) => n.toLocaleLowerCase())),
      [...this.$t.values()]
        .filter((n) => !(s && !F(n)))
        .filter((n) => {
          if (!Y(n) || this.re.has(n.id)) return !1;
          let r = (it(n) ? f("all") : n.label)?.toLocaleLowerCase();
          return r && e.every((o) => r.includes(o));
        })
        .sort(te((n) => n.modifyDate))
        .slice(0, i)
    );
  }
  Zp({
    ti: e = [],
    Qp: i = [],
    filter: s,
    Xu: n,
    maxResults: r,
    Jp: o,
    ei: a,
    ii: l,
  }) {
    let h = i.length || s;
    a || (e = e.map((p) => p.toLocaleLowerCase()));
    let u = new Set(n ? this.nl(n) : []),
      d = (p, x) => (l ? Zs(p, !0, a).test(x) : x.includes(p)),
      w = f("all");
    return [...this.$t.values()]
      .filter((p) => {
        if (
          p.parentIds.filter((x) => !this.re.has(x) && x !== "quickList")
            .length === 0
        )
          return !1;
        if (n && !p.parentIds.some((x) => u.has(x))) return !1;
        if (this.re.has(p.id)) return !1;
        if (["quickList", "trash"].some((x) => x === p.id)) return !1;
        if (s && !s(p)) return !1;
        if (h && !e.length) return !0;
        if (it(p)) return o && e.every((x) => d(x, w));
        if (B(p)) {
          let x = [p.title, this.Jo.get(p.id) ?? p.url, p.notes?.text].filter(
            (y) => y,
          );
          return (
            a || (x = x.map((y) => y.toLocaleLowerCase())),
            e.every((y) => x.some((k) => d(y, k)))
              ? ((x = [
                  p.title,
                  Mo(this.Jo.get(p.id) ?? p.url),
                  p.notes?.text,
                ].filter((y) => y)),
                a || (x = x.map((y) => y.toLocaleLowerCase())),
                e.every((y) => x.some((k) => d(y, k))))
              : !1
          );
        } else if (Y(p)) {
          let x = [p.label, p.notes?.text].filter((g) => g);
          return (
            a || (x = x.map((g) => g.toLocaleLowerCase())),
            e.every((g) => x.some((y) => d(g, y)))
          );
        } else return !1;
      })
      .sort(ke(...i))
      .slice(0, r);
  }
  Yu(e) {
    return this.Un.has(e.id);
  }
  async Te({ groupId: e, ol: i, rl: s }) {
    let n = await this.ht(e),
      { _u: r, items: o, al: a } = await Vo({ groupId: n.id, ol: i, rl: s });
    return (
      o.forEach((l) => this.put(l)),
      { h: this, group: n, Vu: r, al: a, items: o }
    );
  }
  nl(e) {
    let i = this.v(e);
    return [
      e,
      ...i.childIds
        .map((s) => {
          let n = this.v(s);
          return n && Y(n) ? n.id : void 0;
        })
        .filter(Zr)
        .flatMap((s) => this.nl(s)),
    ];
  }
  Xi(e) {
    let i = 0,
      n = [this.v(e)];
    for (; n.length; )
      (n.pop().childIds ?? []).forEach((o) => {
        let a = this.v(o);
        a && Y(a) ? n.push(a) : i++;
      });
    return i;
  }
  ll(e) {
    let i = 0,
      s = 0,
      n = 0,
      r = this.v(e),
      o = (h) => {
        (i++, h.done ? n++ : s++);
      },
      a = new Set(),
      l = [r];
    for (; l.length; ) {
      let h = l.pop();
      ae(h) ||
        (ni(h) && o(h),
        (h.childIds ?? []).forEach((u) => {
          let d = this.v(u);
          d &&
            !ae(d) &&
            (Y(d) ? l.push(d) : ni(d) && (a.has(d.id) || (a.add(d.id), o(d))));
        }));
    }
    return { Kp: i, cl: s, Xp: n };
  }
  Yp(e) {
    let s = [this.v(e)],
      n = [];
    for (; s.length; )
      (s.pop().childIds ?? []).forEach((o) => {
        let a = this.v(o);
        (a || console.log("getTabItemIdsForGroupIdViaCache cache miss"),
          a && Y(a) ? s.push(a) : n.push(o));
      });
    return n;
  }
  async Hn(e, i) {
    let s = ["quickList"],
      n = await this.ht(e),
      r = n.parentIds.find((o) => !s.includes(o));
    if (r) {
      let o = await this.ht(r);
      return [...(await this.Hn(r)), o, ...I(i, n)];
    } else return [];
  }
  async th(e) {
    let i = e.filter((s) => !this.$t.has(s));
    return (
      i.length && (await Ut(i)).forEach((s) => this.put(s)),
      e.map((s) => this.$t.get(s))
    );
  }
  ul(e) {
    return e.map((i) => this.$t.get(i));
  }
}
function Lo(t) {
  if (!t.startsWith("xn--")) return t.toLowerCase();
  const e = 36,
    i = 1,
    s = 26,
    n = 38,
    r = 700,
    o = 72,
    a = 128,
    l = "-",
    h = (k) =>
      k - 48 < 10 ? k - 22 : k - 65 < 26 ? k - 65 : k - 97 < 26 ? k - 97 : e,
    u = (k, m, v) => {
      ((k = v ? Math.floor(k / r) : k >> 1), (k += Math.floor(k / m)));
      let A = 0;
      for (; k > ((e - i) * s) >> 1; )
        ((k = Math.floor(k / (e - i))), (A += e));
      return A + Math.floor(((e - i + 1) * k) / (k + n));
    },
    d = t.slice(4).toLowerCase(),
    w = d.lastIndexOf(l),
    b = w === -1 ? [] : d.slice(0, w).split("");
  let p = a,
    x = 0,
    g = o,
    y = w + 1;
  for (; y < d.length; ) {
    let k = x,
      m = 1,
      v = e;
    for (; ; v += e) {
      const D = h(d.charCodeAt(y++));
      x += D * m;
      const M = v <= g ? i : v >= g + s ? s : v - g;
      if (D < M) break;
      m *= e - M;
    }
    const A = b.length + 1;
    ((g = u(x - k, A, k === 0)),
      (p += Math.floor(x / A)),
      (x %= A),
      b.splice(x, 0, String.fromCodePoint(p)),
      x++);
  }
  return b.join("");
}
const Po = (() => {
    const t = Object.create(null);
    return (e) => t[e] || (t[e] = Lo(e));
  })(),
  jo = new Set([47, 63, 35, 37]);
function Qi(t) {
  return t.replace(/(%[0-9A-Fa-f]{2})+/g, (e) => {
    if (
      e
        .match(/%[0-9A-Fa-f]{2}/g)
        .map((s) => parseInt(s.slice(1), 16))
        .some((s) => s < 32 || s === 127 || s === 32 || jo.has(s))
    )
      return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  });
}
const Go = /^[\w\-._~:/?#\[\]@!$&'()*+,;=%]+$/;
function Ki(t) {
  if (Go.test(t) && !t.includes("%") && !t.includes("xn--")) return t;
  let e;
  try {
    e = new URL(t);
  } catch {
    return t;
  }
  const i = e.hostname.split(".").map(Po).join("."),
    n = /\/\/[^\/?#]*\//.test(t) ? Qi(e.pathname) : "",
    r = Qi(e.search),
    o = Qi(e.hash);
  let a = e.protocol + "//";
  return (
    e.username &&
      (a += e.username + (e.password ? ":" + e.password : "") + "@"),
    (a += i),
    e.port && (a += ":" + e.port),
    a + n + r + o
  );
}
let zt = {};
((zt.hl = 32),
  (zt.imageWidth = 1024),
  (zt.imageHeight = 1024),
  (zt.Ko = new Map()));
{
  let t = zt.Ko;
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
async function Eo() {
  let e = (await chrome.tabs.query({ active: !0, currentWindow: !0 })).find(
    (i) => i.active,
  );
  if (e) return e;
  throw new Error("No active tab in current window found");
}
async function an(t) {
  if (t !== void 0) {
    let e = await chrome.tabs.query({ windowId: t });
    return { tabs: e, activeTab: e.find((i) => i.active) };
  } else return await Bo();
}
async function Bo() {
  let t = await ci(!1);
  if (!t) return;
  let e = await chrome.tabs.query({ windowId: t.id });
  return { tabs: e, activeTab: e.find((i) => i.active), lastFocusedWindow: t };
}
async function Wh(t) {
  let e = await chrome.tabs.query({ windowId: t });
  return { tabs: e, activeTab: e.find((i) => i.active) };
}
async function qh() {
  return await chrome.tabs.query({});
}
async function Rh(t) {
  let e = await ci(!1),
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
async function Ch(t) {
  await chrome.tabs.reload(t.id, {});
}
async function Zh(t) {
  return await Ho(t.id);
}
async function Ho(t) {
  return new Promise((e, i) => {
    chrome.tabs.remove(t, () => {
      (chrome.runtime.lastError &&
        console.log(chrome.runtime.lastError.message),
        e());
    });
  });
}
async function Jh(t) {
  let e = await chrome.tabs.query({}),
    i = new Set(e.map(Nt)),
    s = t.filter((n) => i.has(n));
  try {
    await chrome.tabs.remove(s);
  } catch (n) {
    console.log(n);
  }
}
async function Qh(t) {
  await chrome.windows.remove(t);
}
async function Kh(t) {
  (await ci(!1)).id !== t.windowId &&
    (await chrome.windows.update(t.windowId, { focused: !0 }));
  const [i] = await chrome.tabs.query({ active: !0, windowId: t.windowId });
  i.id !== t.id && (await chrome.tabs.update(t.id, { active: !0 }));
}
async function No(t) {
  return ((t = { ...t }), await chrome.tabs.create(t));
}
async function Vh(t) {
  await chrome.windows.create(t);
}
async function Xh(t, e) {
  await chrome.tabs.move(t, { index: e });
}
async function _h(t = !1) {
  return chrome.windows.getAll({ populate: !!t });
}
async function ci(t = !1) {
  if (chrome.windows)
    try {
      return await chrome.windows.getLastFocused({ populate: t });
    } catch (e) {
      console.log(`windows.getLastFocused error: ${e}`);
      return;
    }
}
async function zo(t, e, i, s = {}) {
  ((s.url = t), (s.pinned = !!e), (s.active = !!i));
  let n = await ci(!1);
  return (n && (s.windowId = n.id), await No(s));
}
function Yh() {
  chrome.commands.onCommand.addListener((t, e) => {
    (async () => {
      if (
        (t === "display-onetab" &&
          (await core.eh(e), await core.dl({ _p: e?.windowId })),
        t === "send-current-tab-to-onetab")
      ) {
        let { tabs: i, activeTab: s } = await an(e?.windowId);
        await sendSingleTabToOneTab({ fl: s });
      }
      if (t === "send-all-tabs-in-current-window-to-onetab") {
        let { tabs: i, activeTab: s } = await an(e?.windowId);
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
let ui;
async function ln() {
  if (ui) return ui.value;
  {
    let t = await Te().get("oneTabTabId");
    return ((ui = { value: t }), t);
  }
}
async function hn(t) {
  ((ui = { value: t }),
    t === void 0
      ? await Te().remove("oneTabTabId")
      : await Te().put("oneTabTabId", t));
}
async function cn(t) {
  await core.bt("oneTabTabPinned", `${!!t}`);
}
let Ae;
function Uo(t) {
  return Ae?.tabId === t && +new Date() - Ae.date < 500;
}
function tc() {
  (chrome.tabs.onRemoved.addListener(
    async (t, { windowId: e, isWindowClosing: i }) => {
      t === (await ln()) &&
        (Uo(t) && (await cn(!0)), (Ae = void 0), await hn(void 0));
    },
  ),
    chrome.tabs.onUpdated.addListener(async (t, e, i) => {
      try {
        let s = [i.url, i.pendingUrl].some((r) => Oi(r));
        (t === (await ln()) &&
          !s &&
          i.pinned &&
          (await hn(void 0), await chrome.tabs.update(t, { pinned: !1 })),
          s &&
            Object.hasOwn(e, "pinned") &&
            (e.pinned === !1
              ? (Ae = { tabId: t, date: +new Date() })
              : Ae?.tabId === t && (Ae = void 0),
            await cn(e.pinned)));
      } catch (s) {
        console.log(s);
      }
    }));
}
function ec(t) {
  return chrome.runtime.getURL(t);
}
async function ic() {
  chrome.runtime.reload();
}
function Wo(t) {
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
async function qo(t) {
  try {
    return await chrome.tabs.get(t);
  } catch {
    return;
  }
}
async function Ro(t) {
  return (await chrome.tabs.query({})).filter((e) => e.url === t);
}
async function sc(t) {
  let e = await Ro(t);
  if (e.length === 0) throw new Error("No tab found with URL: " + t);
  if (e.length > 1) throw new Error("More than one tab found with URL: " + t);
  return e[0];
}
async function nc(t, e) {
  let i = t.groupId;
  if (chrome.tabGroups && t.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE) {
    let s = await core.getSettings(["pinnedTabs", "excludedDomains"]);
    e
      .filter(
        (r) =>
          !xo({
            tab: r,
            Uu: s.pinnedTabs === "allow",
            excludedDomains: s.excludedDomains,
          }),
      )
      .filter((r) => r.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE).length ||
      (i = e
        .sort(ke(Gi((r) => r.index)))
        .find(
          (r) => r.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE,
        )?.groupId);
  }
  return i !== void 0 ? e.filter((s) => s.groupId === i) : [];
}
class P {
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
    return new Promise((n, r) => {
      ((e.onsuccess = (o) => {
        let a = o.target.result;
        a && i(a.key, a.value, s) ? a.continue() : n(s);
      }),
        (e.onerror = (o) => r(o.target.error)));
    });
  }
  static async query({ si: e, zn: i }, s) {
    return await P.je([e], "readonly", async (n, [r]) => {
      let o = i ? r.index(i) : r;
      return await P.Ie(s(o));
    });
  }
  static async ih(e, i) {
    let s = (await P.sh()).transaction(e, i);
    return [s, e.map((n) => Hi(s.objectStore(n), "db"))];
  }
  static async je(e, i, s) {
    let [n, r] = await P.ih(e, i),
      o,
      a = new Promise((u) => {
        ((n.oncomplete = () => u()),
          (n.onabort = (d) => {
            ((o =
              n.error ??
              d?.target?.error ??
              new Error("IndexedDB transaction aborted")),
              u());
          }));
      }),
      l,
      h;
    try {
      l = await s(n, r);
    } catch (u) {
      ((h = u), console.log(u));
      try {
        n.abort();
      } catch {}
    }
    if ((await a, h)) throw h;
    if (o) throw o;
    return l;
  }
  static async om(e, i, s) {
    await P.je([e], "readwrite", async (n, [r]) => {
      if (!(await P.get(s[i], r))) await P.put(s, r);
      else throw new Error("Object already exists in ObjectStore");
    });
  }
  static async Xo(e, i) {
    i = Nr(i, (n) => n.kt);
    let s = new Date().getTime();
    return await Promise.all(
      i.map(async ({ id: n, kt: r, title: o, nh: a, oh: l }) => {
        let h = await P.get(n, e),
          u = h ?? {
            id: n,
            type: "tab",
            title: pe(o),
            url: r,
            createDate: a ?? s,
            modifyDate: a ?? s,
            parentIds: [],
            ...(!h && { uncommitted: !0 }),
          },
          d = pe(o);
        return (
          uo(u.title, u.url, d) && (u.title = d),
          l && (u.parentIds = l),
          u
        );
      }),
    );
  }
  static async _e(e) {
    return (await P.query({ si: "attr" }, (i) => i.get(e)))?.value;
  }
  static async Ve(e, i) {
    await P.je(
      ["attr"],
      "readwrite",
      async (s, [n]) => await P.put({ id: e, value: i }, n),
    );
  }
  static async rm(e, i) {
    return (await P.query({ si: "attr" }, (n) => n.get(e)))
      ? !1
      : (await P.Ve(e, i), !0);
  }
  static async Bu(e) {
    await P.je(["attr"], "readwrite", async (i, [s]) => await P.delete(e, s));
  }
  static async am(e, i) {
    let s;
    return (
      await P.je(
        ["attr"],
        "readwrite",
        async (n, [r]) =>
          await P.modify(r, e, (o) => (s = o.value = i(o?.value))),
      ),
      s
    );
  }
  static async modify(e, i, s) {
    let n = await P.get(i, e);
    return (n || (n = { id: i }), s(n), await P.put(n, e));
  }
  static async lm(e, i) {
    return await Promise.all(e.map((s) => P.get(s, i)));
  }
  static async um(e, i) {
    await Promise.all(e.map((s) => P.put(s, i)));
  }
  static async get(e, i) {
    return await P.Ie(i.get(e));
  }
  static async getAll(e, i) {
    return await P.Ie(i.getAll(e));
  }
  static async put(e, i) {
    return await P.Ie(i.put(e));
  }
  static async delete(e, i) {
    return await P.Ie(i.delete(e));
  }
  static async hm(e, i) {
    return await Promise.all(e.map((s) => P.delete(s, i)));
  }
  static async count(e, i) {
    return await P.Ie(e.count(i));
  }
  static async getAllKeys(e) {
    return await P.Ie(e.getAllKeys());
  }
  static async dm(e) {
    return await P.je(
      ["item"],
      "readonly",
      async (i, [s]) => await P.get(e, s),
    );
  }
  static async fm(e) {
    return await P.je(
      ["item"],
      "readonly",
      async (i, [s]) => await P.get(St(e), s.index("url")),
    );
  }
  static async sh() {
    return (await P.rh()).pl;
  }
  static async pm(e) {
    let i = await P.Ie(e.index("type").getAll("group")),
      s = new Map(i.map((o) => [o.id, o])),
      n = new Set(),
      r = ["trash"];
    for (; r.length; ) {
      let o = r.pop();
      (n.add(o), s.get(o)?.childIds?.forEach((l) => r.push(l)));
    }
    for (r = ["root"]; r.length; ) {
      let o = r.pop();
      (n.delete(o), s.get(o)?.childIds?.forEach((l) => r.push(l)));
    }
    return n;
  }
  static async rh() {
    if (P.ml) return P.ml;
    {
      let e = indexedDB.open("onetab", 2);
      e.onupgradeneeded = async (s) => {
        let n = s.target.result,
          r = s.target.transaction;
        if (s.oldVersion < 2) {
          n.objectStoreNames.contains("onetab") &&
            n.deleteObjectStore("onetab");
          let o = n.createObjectStore("item", { keyPath: "id" });
          (o.createIndex(...li("type"), { unique: !1 }),
            o.createIndex(...li("groupType"), { unique: !1 }),
            o.createIndex(...li("task"), { unique: !1 }),
            o.createIndex(...li("parentIds"), { unique: !1, multiEntry: !0 }));
          let a = +new Date();
          for (let u of ["root", "quickList", "trash"]) {
            let d = u === "quickList" ? "quickList" : "folder";
            await P.put(
              {
                id: u,
                type: "group",
                groupType: d,
                parentIds: [],
                childIds: [],
                pinnedCount: 0,
                createDate: a,
                modifyDate: a,
              },
              o,
            );
          }
          let l = n.createObjectStore("attr", { keyPath: "id" });
          (l.put({ id: "installDate", value: a }),
            l.put({ id: "v2InstallDate", value: a }),
            l.put({ id: "installId", value: Zt() }));
          let h = n.createObjectStore("shareUpdate", {
            keyPath: "id",
            autoIncrement: !0,
          });
        }
        s.oldVersion < 3;
      };
      let i = await P.Ie(e);
      return (P.ml = new P(i));
    }
  }
}
class rc extends po {
  constructor(e) {
    super(async (i) => await P.get(i, e));
  }
  async wm(e, i) {
    let s = [e];
    for (; s.length; ) {
      let n = await this.get(s.pop());
      (await i(n), n?.childIds?.forEach((r) => s.push(r)));
    }
  }
  async xm(e, i) {
    let s = await this.get(e);
    return await Promise.all(
      s?.childIds?.map(async (n) => await i(await this.get(n))),
    );
  }
}
async function Ut(t) {
  return t.length
    ? await P.je(
        ["item"],
        "readonly",
        async (e, [i]) => await Promise.all(t.map((s) => P.get(s, i))),
      )
    : [];
}
async function ot(t) {
  if (t) return await P.query({ si: "item" }, (e) => e.get(t));
}
async function Co() {
  return await P.query({ si: "item" }, (t) => t.getAll());
}
async function Zo() {
  return await P.query({ si: "item", zn: "type" }, (t) => t.getAll("group"));
}
async function Jo() {
  return await P.query({ si: "item", zn: "task" }, (t) => t.getAll(1));
}
async function Qo() {
  return await P.query({ si: "item", zn: "groupType" }, (t) =>
    t.getAll("folder"),
  );
}
async function Ko(t) {
  return await P.query({ si: "item", zn: "parentIds" }, (e) => e.getAll(t));
}
async function Vi(t) {
  let e = new Set();
  for (; t && !e.has(t); ) {
    e.add(t);
    let i = await ot(t);
    if (!i) return !1;
    let s = i.parentIds?.find(rt);
    if (s) t = s;
    else return It(i);
  }
  return !1;
}
async function Vo({ groupId: t, ol: e = 0, rl: i, bm: s = !1 }) {
  let n = await ot(t),
    r = new Map();
  r.set(n.id, n);
  let o = Kr(await Ko(t), Nt),
    a = n.childIds.map((p) => o.get(p)),
    l = a.filter(Y),
    h = new Set(a.filter(F).map(Nt)),
    u = Math.max(0, i ? l.length - i - e : 0),
    d = new Set([...l.slice(0, e), ...(i ? l.slice(i) : [])].map((p) => p.id)),
    w = a.filter((p) => !d.has(p.id) && !(s && h.has(p.id)));
  w.forEach((p) => r.set(p.id, p));
  let b = w.filter(Y).map((p) => p.id);
  return (
    await P.je(["item"], "readonly", async (p, [x]) => {
      let g = x.index("parentIds");
      for (; b.length; ) {
        let y = b.shift(),
          k = await P.Ie(g.getAll(y));
        (k.forEach((m) => r.set(m.id, m)),
          k.forEach((m) => {
            Y(m) && b.push(m.id);
          }));
      }
    }),
    { items: [...r.values()], _u: w, al: u }
  );
}
const { il: oc, Di: mt, le: Xi, ur: Xo, cr: _o, fi: Jt, he: _i, cs: un, $t: Gt, el: Yo, ue: di, ce: Yi, xs: mn, fr: ta, dr: ea, ws: Ne, ms: xn, Kt: Ie } = globalThis.createOneTabBaseControls({ h: (...a) => c(...a), G: (...a) => L(...a), vi: (...a) => Ge(...a), W: (...a) => z(...a), z: (...a) => tt(...a), St: (...a) => Wt(...a), Ei: (...a) => $e(...a), mi: (...a) => Ze(...a), bi: (...a) => Je(...a), O: (...a) => I(...a), Si: (...a) => fe(...a), J: () => U(), Cs: (...a) => ps(...a), Ni: (...a) => wi(...a), Yt: (...a) => Kt(...a), Qt: (...a) => ye(...a), Ji: (...a) => Di(...a), He: (...a) => Ms(...a), Be: (...a) => $s(...a), se: (...a) => qi(...a), dn: (...a) => $r(...a), spinner: (...a) => ns(...a), getFt: () => se, getDnd: () => S, getP: () => G, getVt: () => { try { return Ht; } catch { return; } }, getFe: () => ts, getLt: () => X, getTooltip: () => bt, getQs: () => Un });
const { bs: wn, pr: yn, Gi: me, kt: $t, Pt: ie, wr: bn, ys: gn, Xt: Oe, W: z, yr: Qt } = globalThis.createOneTabViewControls({
  get $r() { return da; },
  get $t() { return Gt; },
  get A() { return T; },
  get Ae() { return gi; },
  get B() { return B; },
  get Bi() { return Bt; },
  get Bn() { return ri; },
  get Dt() { return _t; },
  get Ei() { return $e; },
  get Es() { return Bn; },
  get Fn() { return Qr; },
  get Fr() { return ka; },
  get Ft() { return se; },
  get G() { return L; },
  get Ii() { return ii; },
  get ItemCache() { return ht; },
  get J() { return U; },
  get Ki() { return ji; },
  get Kt() { return Ie; },
  get L() { return F; },
  get Ls() { return qe; },
  get Mr() { return ma; },
  get Mt() { return C; },
  get Ni() { return wi; },
  get Nt() { return Yt; },
  get O() { return I; },
  get Oe() { return ys; },
  get On() { return Ur; },
  get P() { return G; },
  get Pe() { return Oi; },
  get Ps() { return os; },
  get Qe() { return qs; },
  get Qn() { return ro; },
  get Qt() { return ye; },
  get St() { return Wt; },
  get Ts() { return In; },
  get We() { return Hs; },
  get X() { return at; },
  get Yt() { return Kt; },
  get Zn() { return oo; },
  get Zt() { return ge; },
  get _() { return it; },
  get as() { return sn; },
  get bi() { return Je; },
  get bt() { return gt; },
  get ci() { return He; },
  get cs() { return un; },
  get displayAutoActionOnOpenOptionModal() { return ks; },
  get dnd() { return S; },
  get dt() { return Y; },
  get ee() { return Wi; },
  get et() { return lt; },
  get fi() { return Jt; },
  get ft() { return xt; },
  get ge() { return yi; },
  get getActiveTabInCurrentWindow() { return Eo; },
  get getItemById() { return ot; },
  get getTabById() { return qo; },
  get gr() { return ra; },
  get gt() { return Lt; },
  get h() { return c; },
  get he() { return _i; },
  get hi() { return Ee; },
  get ie() { return Ui; },
  get ji() { return ce; },
  get lt() { return X; },
  get mi() { return Ze; },
  get ms() { return xn; },
  get mt() { return Dt; },
  get navigateToItem() { return Vt; },
  get nt() { return bt; },
  get oi() { return Ft; },
  get oneTabPage() { return st; },
  get os() { return tn; },
  get ot() { return kt; },
  get qt() { return le; },
  get re() { return Ci; },
  get showSharingModal() { return dr; },
  get ss() { return _s; },
  get st() { return yt; },
  get to() { return zn; },
  get ue() { return di; },
  get ui() { return Be; },
  get ut() { return rt; },
  get vn() { return Ns; },
  get we() { return xi; },
  get ws() { return Ne; },
  get wt() { return It; },
  get x() { return f; },
  get xi() { return Et; },
  get xs() { return mn; },
  get xt() { return wt; },
  get ye() { return hs; },
  get z() { return tt; },
  get ze() { return Us; },
});
let Ce, se;
const { gr: ra, nl: oa, kr: aa, rl: la, Tr: ha, lt: X, Ar: ca, ol: ua, $r: da, fe: ts, vr: fa, Ir: pa, Or: kn, Mr: ma, Sr: xa, al: es } = createOneTabUiControls({ h: (...a) => c(...a), G: (...a) => L(...a), W: (...a) => z(...a), Xt: Oe, O: (...a) => I(...a), ws: Ne, co: (...a) => Ya(...a), xe: (...a) => ns(...a), z: (...a) => tt(...a), ti: (...a) => Me(...a), Kr: (...a) => Ba(...a), x: (...a) => f(...a), Gs: (...a) => Gn(...a), J: () => U(), Yr: (...a) => Wa(...a), Bs: (...a) => Qe(...a), Ve: (...a) => Js(...a), Qt: (...a) => ye(...a), Zi: (...a) => Li(...a), ze: (...a) => Us(...a), oi: (...a) => Ft(...a), St: (...a) => Wt(...a), getSettings: () => T, getModal: () => gt, getTheme: () => Ce, getTooltip: () => bt });
const {
  X: at,
  st: yt,
  gs: Tn,
  de: is,
  Lr: vn,
  di: ze,
  Dr: wa,
  Gr: ya,
  ll: ba,
  Se: _e,
  ft: xt,
  Rt: he,
} = globalThis.createOneTabTreeRenderer({
  get $t() { return Gt; },
  get A() { return T; },
  get Ae() { return gi; },
  get B() { return B; },
  get Ct() { return de; },
  get Dt() { return _t; },
  get Ei() { return $e; },
  get En() { return ae; },
  get Fe() { return $i; },
  get Ft() { return se; },
  get G() { return L; },
  get Hs() { return 300; },
  get Ht() { return Zt; },
  get Ii() { return ii; },
  get ItemCache() { return ht; },
  get J() { return U; },
  get Kt() { return Ie; },
  get L() { return F; },
  get Mt() { return C; },
  get Ni() { return wi; },
  get Nt() { return Yt; },
  get O() { return I; },
  get Oe() { return ys; },
  get Oi() { return ke; },
  get P() { return G; },
  get Pr() { return (...a) => ga(...a); },
  get Ps() { return (...a) => os(...a); },
  get Qe() { return qs; },
  get Qi() { return Fi; },
  get Si() { return fe; },
  get Tn() { return Gr; },
  get W() { return z; },
  get We() { return Hs; },
  get Zr() { return Ga; },
  get Zt() { return ge; },
  get _e() { return ni; },
  get _s() { return Vn; },
  get ai() { return te; },
  get be() { return ls; },
  get bi() { return Je; },
  get bs() { return wn; },
  get bt() { return gt; },
  get cr() { return _o; },
  get dnd() { return S; },
  get dt() { return Y; },
  get ee() { return Wi; },
  get fe() { return ts; },
  get ge() { return yi; },
  get getItemById() { return ot; },
  get gn() { return Pr; },
  get gt() { return Lt; },
  get h() { return c; },
  get he() { return _i; },
  get hi() { return Ee; },
  get js() { return (...a) => Nn(...a); },
  get jt() { return oe; },
  get ks() { return (...a) => An(...a); },
  get lt() { return X; },
  get mi() { return Ze; },
  get ms() { return xn; },
  get nn() { return wr; },
  get ns() { return Ri; },
  get oneTabPage() { return st; },
  get or() { return Ao; },
  get ot() { return kt; },
  get prettyPrintUrl() { return Ki; },
  get se() { return qi; },
  get te() { return zi; },
  get ue() { return di; },
  get ui() { return Be; },
  get ut() { return rt; },
  get we() { return xi; },
  get wt() { return It; },
  get x() { return f; },
  get xt() { return wt; },
  get ye() { return hs; },
  get yn() { return Lr; },
  get yt() { return St; },
  get z() { return tt; },
  get zi() { return Si; },
  get zt() { return Pt; },
});
const {
  pi: Ue,
  Pr: ga,
  ks: An,
  Fr: ka,
  Ts: In,
  Pi: fi,
  pe: ss,
  As: On,
  $s: $n,
  hl: Ta,
  Er: va,
  ul: lc,
  vs: Mn,
  Br: Aa,
  cl: hc,
  Fi: pi,
  Hr: Sn,
  jr: Ia,
  A: T,
  Vt: We,
  Nr: Oa,
  xi: Et,
  Yt: Kt,
  Ei: $e,
  Bi: Bt,
  fl: cc,
  Is: Dn,
  qr: $a,
  Rr: Ma,
  Hi: mi,
  Os: Fn,
  Ms: Ln,
  Ur: Sa,
  Ss: Pn,
  Ls: qe,
  Ds: jn,
  Wr: Re,
  xe: ns,
  we: xi,
  Gs: Gn,
  Cr: rs,
  dl: Da,
  Ps: os,
  pl: uc,
  zr: Fa,
  Jr: La,
  xl: Pa,
  me: as,
  Qr: ja,
  Fs: En,
  wl: dc,
  ml: fc,
  Zr: Ga,
  Es: Bn,
  ti: Me,
  z: tt,
  mi: Ze,
  _r: Ea,
  bi: Je,
  ji: ce,
  Bs: Qe,
  Kr: Ba,
  Hs: Hn,
  js: Nn,
  bl: Ha,
  yl: pc,
  Xr: Na,
  Vr: za,
  gl: mc,
  be: ls,
  kl: Ua,
  Yr: Wa,
  to: zn,
  Tl: xc,
  Al: wc,
  et: lt,
} = globalThis.createOneTabTreeActions({
  get $i() { return ei; },
  get Ai() { return we; },
  get B() { return B; },
  get Cn() { return io; },
  get Di() { return mt; },
  get Fe() { return $i; },
  get G() { return L; },
  get Hn() { return Vr; },
  get Ht() { return Zt; },
  get ItemCache() { return ht; },
  get J() { return U; },
  get L() { return F; },
  get Ns() { return cs; },
  get O() { return I; },
  get Se() { return _e; },
  get Si() { return fe; },
  get Sn() { return si; },
  get Sr() { return xa; },
  get W() { return z; },
  get Xe() { return Hi; },
  get Yi() { return Ni; },
  get Ze() { return Nt; },
  get _() { return it; },
  get _i() { return be; },
  get _n() { return ao; },
  get ci() { return He; },
  get cs() { return un; },
  get dt() { return Y; },
  get en() { return mr; },
  get getItemById() { return ot; },
  get getItems() { return Ut; },
  get h() { return c; },
  get hi() { return Ee; },
  get lt() { return X; },
  get mt() { return Dt; },
  get navigateToItem() { return Vt; },
  get oneTabPage() { return st; },
  get ot() { return kt; },
  get qt() { return le; },
  get rr() { return vo; },
  get ss() { return _s; },
  get te() { return zi; },
  get ut() { return rt; },
  get x() { return f; },
  get xt() { return wt; },
  get yt() { return St; },
  get zi() { return Si; },
  get zt() { return Pt; },
  setThemeState({ wi: i, Ft: t }) { Ce = i; se = t; },
});
let G = {};
const { vt: Ht, ye: hs, Ni: wi, ge: yi, Ns: cs, qi: bi, io: qa, qs: Un, $l: Ra, eo: us, Rs: Wn, vl: Ca, ke: ds, so: Za, no: Ja, Il: Qa, Te: fs, ro: Ka, Us: qn, Ae: gi, at: Tt, Ws: Rn, Cs: ps, Ol: yc, Ml: bc, zs: Cn, Js: Zn, $e: ms, Sl: Va, oo: Jn, Qs: Qn, ve: xs, Ie: ws, Zs: Kn, _s: Vn, Oe: ys } = globalThis.createOneTabTreeInteractions({get _(){return it},get _e(){return ni},get _t(){return ve},get A(){return T},get Ai(){return we},get ao(){return _n},get B(){return B},get Bi(){return Bt},get ce(){return Yi},get Cr(){return rs},get Ct(){return de},get displayAutoActionOnOpenOptionModal(){return ks},get dnd(){return S},get dt(){return Y},get Dt(){return _t},get er(){return go},get es(){return Xs},get et(){return lt},get fi(){return Jt},get ft(){return xt},get G(){return L},get getItemById(){return ot},get getItems(){return Ut},get Gi(){return me},get go(){return al},get gt(){return Lt},get Gt(){return ee},get h(){return c},get he(){return _i},get hi(){return Ee},get ho(){return er},get Ht(){return Zt},get iconGrid(){return zt},get is(){return Vs},get ItemCache(){return ht},get J(){return U},get ji(){return ce},get Ki(){return ji},get Ks(){return Xn},get kt(){return $t},get L(){return F},get Ls(){return qe},get lt(){return X},get mt(){return Dt},get Mt(){return C},get navigateToItem(){return Vt},get Nr(){return Oa},get ns(){return Ri},get Nt(){return Yt},get O(){return I},get oi(){return Ft},get oneTabPage(){return st},get ot(){return kt},get P(){return G},set P(value){G = value},get pi(){return Ue},get pt(){return Ot},get Pt(){return ie},get qr(){return $a},get qt(){return le},get rn(){return yr},get Rr(){return Ma},get rs(){return Ys},get Rt(){return he},get showSharingModal(){return dr},get Ss(){return Pn},get te(){return zi},get ti(){return Me},get ut(){return rt},get Vt(){return We},get W(){return z},get x(){return f},get X(){return at},get xi(){return Et},get xs(){return mn},get xt(){return wt},get ys(){return gn},get Yt(){return Kt},get zt(){return Pt}});
let bt, Ve;
const { Ks: Xn, ao: _n, lo: Xa, Ll: gc, yi: Ke, Dl: Yn, zt: Pt, Gl: kc, Xs: tr, ho: er, uo: _a, bt: gt, co: Ya, fo: tl, po: el, xo: il, Me: bs, wo: sl, Vs: ir, mo: nl, bo: rl, yo: ol, go: al, Ys: sr, tn: nr, St: Wt, ko: ll } = globalThis.createOneTabImportExportControls({get _(){return it},get _r(){return Ea},get $s(){return $n},get A(){return T},get ai(){return te},get As(){return On},get at(){return Tt},get B(){return B},get bi(){return Je},get ci(){return He},get Cs(){return ps},get Di(){return mt},get dt(){return Y},get es(){return Xs},get G(){return L},get Ge(){return Is},get gi(){return Ve},set gi(value){Ve=value},get h(){return c},get He(){return Ms},get In(){return zr},get ir(){return wo},get Ir(){return pa},get is(){return Vs},get ItemCache(){return ht},get J(){return U},get jt(){return oe},get Ke(){return Gi},get L(){return F},get lt(){return X},get mi(){return Ze},get Mt(){return C},get nt(){return bt},set nt(value){bt=value},get O(){return I},get oe(){return Zi},get Oi(){return ke},get pt(){return Ot},get ti(){return Me},get vr(){return fa},get Vt(){return We},get W(){return z},get Ws(){return Rn},get x(){return f},get yr(){return Qt},get yt(){return St},get z(){return tt}});
const Se = (t) => t.type === "tab",
  gs = (t) => t.type === "group" && ["window", "tabGroup"].includes(t.we),
  ki = (t) => t.type === "group" && t.we === "folder";
class rr {
  S1() {
    ((this.o.u.actions.eu.i.style.display =
      this.mode === "tabs" ? "flex" : "none"),
      (this.o.u.actions.bb.i.style.display =
        this.mode === "folders" ? "none" : "flex"),
      (this.o.u.actions.gb.i.style.display =
        this.mode !== "folders" ? "block" : "none"));
  }
  D1() {
    let [e, i, s] = Pi(this.S0, [Se, gs, ki]),
      [n] = [
        [e, "tabs"],
        [i, "groups"],
        [s, "folders"],
      ].find(([r, o]) => o === this.mode);
    this.w0 = n;
  }
  kb() {
    let [e, i, s] = Pi(this.S0, [Se, gs, ki]),
      [n, r] = [
        [e, "tabs"],
        [i, "groups"],
        [s, "folders"],
      ].find(([o]) => o.length);
    this.mode = r;
  }
  Tb(e) {
    ((this.mode = e), this.D1(), this.S1());
  }
  constructor({ S0: e, F1: i, nc: s, A: n }) {
    ((this.S0 = e), this.kb(), this.D1());
    let [r, o, a] = Pi(this.S0, [Se, gs, ki]);
    ((this.o = L("div", {
      style: {
        fontSize: "12px",
        fontWeight: 400,
        marginInline: "8px 8px",
        marginBlock: "8px 8px",
        lineHeight: "1.5em",
      },
      children: {
        body: c({
          style: { paddingTop: "4px" },
          children: {
            header: c({
              style: {
                fontSize: "12px",
                fontWeight: "600",
                marginInlineStart: "20px",
                marginBottom: "12px",
              },
              textContent: f("bulkActions"),
            }),
            hg: new Qt({
              fontSize: "12px",
              $: { marginInline: "15px", marginBottom: "7px" },
              Dc: [
                ...I(r.length, {
                  label: C("tabCount", r.length),
                  name: "tabs",
                }),
                ...I(o.length, {
                  label: C("groupCount", o.length),
                  name: "groups",
                }),
                ...I(a.length, {
                  label: C("folderCount", a.length),
                  name: "folders",
                }),
              ],
              Pc: [this.mode],
              onChange: async ([l]) => this.Tb(l),
            }),
            Zt: Ft({
              marginTop: "10px",
              marginBottom: "7px",
              marginInlineStart: "-8px",
              marginInlineEnd: "-8px",
            }),
            actions: c({
              style: { marginTop: "7px", marginBottom: "6px" },
              children: {
                ...(n && {
                  vc: X.bi({
                    icon: {
                      I: "clear",
                      left: "2px",
                      top: "1px",
                      dimension: "14px",
                    },
                    label: f("deselectAll"),
                    name,
                    action: async ({ e: l, o: h }) => {
                      (i(), n.reset());
                    },
                  }),
                  L1: Ft({
                    marginTop: "7px",
                    marginBottom: "7px",
                    marginInlineStart: "-8px",
                    marginInlineEnd: "-8px",
                  }),
                }),
                gb: c({
                  style: {},
                  children: {
                    ...Object.fromEntries(
                      _n.map(({ name: l, label: h }) => [
                        l,
                        X.bi({
                          icon: { I: "open", ee: !U() },
                          label: h,
                          name: l,
                          action: async ({ e: u, o: d }) => {
                            (i(),
                              Bt(u) &&
                                (u.preventDefault(), u.stopPropagation()));
                            let w = l;
                            if (
                              w.toLowerCase().includes("incognito") &&
                              !(await chrome.extension.isAllowedIncognitoAccess())
                            )
                              await Re();
                            else {
                              let b = 500;
                              if (this.mode === "tabs") {
                                let p = !0;
                                if (r.length > 50) {
                                  let x;
                                  (r.length > b && (x = C("openTabLimit", b)),
                                    (p = await Yn({
                                      message: C(
                                        "openTabsConfirm",
                                        Math.min(r.length, b),
                                      ),
                                      xi: x,
                                    })));
                                }
                                if (p) {
                                  let x = r.slice(0, b);
                                  if (
                                    w.toLowerCase().includes("incognito") &&
                                    !(await chrome.extension.isAllowedIncognitoAccess())
                                  )
                                    await Re();
                                  else {
                                    let g = (await chrome.windows.getCurrent())
                                        .id,
                                      y;
                                    for (let k = 0; k < x.length; k++)
                                      (k === 1 &&
                                        w.startsWith("new") &&
                                        ((g = (await chrome.tabs.get(y[0]))
                                          .windowId),
                                        w === "newWindow" &&
                                          (w = "currentWindow"),
                                        w === "newIncognitoWindow" &&
                                          (w = "currentWindow")),
                                        (y = (
                                          await T.Mw({
                                            id: x[k].itemId,
                                            zr: w,
                                            Yh: k === 0 && !Et(u),
                                            Yl: Bt(u),
                                            Rr: !Et(u),
                                            Nr: g,
                                          })
                                        ).Ow));
                                  }
                                }
                              } else {
                                let p = 500,
                                  x = 0,
                                  g = [],
                                  y = !0,
                                  k = !1;
                                for (let m = 0; m < o.length; m++) {
                                  let v = o[m],
                                    { items: A } = await T.Hx({
                                      groupId: v.itemId,
                                    });
                                  if (
                                    ((x += A.length),
                                    g.push(v),
                                    x > p && m < o.length - 1)
                                  ) {
                                    k = !0;
                                    break;
                                  }
                                }
                                if (x > 50) {
                                  let m;
                                  (k &&
                                    (m = C("openGroupsLimitNotice", g.length)),
                                    (y = await Yn({
                                      message: C("openTabsConfirm", x),
                                      xi: m,
                                    })));
                                }
                                if (y)
                                  if (
                                    w.toLowerCase().includes("incognito") &&
                                    !(await chrome.extension.isAllowedIncognitoAccess())
                                  )
                                    await Re();
                                  else if (
                                    (Bt(u) &&
                                      (u.preventDefault(), u.stopPropagation()),
                                    w.toLowerCase().includes("incognito") &&
                                      !(await chrome.extension.isAllowedIncognitoAccess()))
                                  )
                                    await Re();
                                  else
                                    for (let m = 0; m < g.length; m++) {
                                      let v = g[m];
                                      await qe({
                                        id: v.itemId,
                                        zr: w,
                                        Wr: !1,
                                        Nr: (await chrome.windows.getCurrent())
                                          .id,
                                        Yl: Bt(u),
                                        Rr: !Et(u),
                                        Yh: m === 0 && !Et(u),
                                      });
                                    }
                              }
                            }
                          },
                        }),
                      ]),
                    ),
                    vb: Ft({
                      marginTop: "7px",
                      marginBottom: "7px",
                      marginInlineStart: "-8px",
                      marginInlineEnd: "-8px",
                    }),
                  },
                }),
                P1: X.bi({
                  icon: { I: "cross-action", dimension: "10px", left: "-1px" },
                  label: f("moveToTrash"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = this.w0.map((d) => wt(d));
                    (await ce({ rt: u, O: "trash" }),
                      n?.reset(),
                      await er({ Ef: this.mode === "groups" }));
                  },
                  ni: !0,
                }),
                move: X.bi({
                  icon: { I: "move", ee: !U() },
                  label: f("move"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = this.w0.map((d) => wt(d));
                    await me({
                      title: f("chooseLocationToMoveTo"),
                      He: this.w0.some(ki),
                      io: async (d) => {
                        (await ce({ rt: u, O: d.id }), n?.reset());
                      },
                    });
                  },
                }),
                eu: X.bi({
                  icon: { I: "copy", ee: !U() },
                  label: f("copy"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    (await me({
                      title: f("chooseLocationToCopyTo"),
                      io: async (u) => {
                        let d = u.id;
                        (F(u) && (d = await cs({ O: u.id })),
                          await T.eu({
                            iu: this.w0.filter(Se).map((w) => w.itemId),
                            O: d,
                          }));
                      },
                    }),
                      i());
                  },
                }),
                bb: X.bi({
                  icon: { I: "copy-to-clipboard", left: "-2px" },
                  label: f("copyToClipboard"),
                  D: f("copyToClipboardMenuItemHelp"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    if (this.w0.some(Se)) {
                      let u = async () => {
                        let d = await Ut(
                            this.w0.filter(Se).map((p) => p.itemId),
                          ),
                          { Xe: w, Ee: b } = Ca({ links: d, ge: s });
                        return {
                          Mf: new Blob([w], { type: "text/plain" }),
                          ...(b && {
                            Gf: new Blob([us + b], { type: "text/html" }),
                          }),
                        };
                      };
                      await rs({
                        kf: async () => (await u()).Mf,
                        ...(s === "richText" && {
                          Tf: async () => (await u()).Gf,
                        }),
                      });
                    } else {
                      let u = async () => {
                          let w = new Set(this.w0.map((x) => x.itemId)),
                            b = new ht(),
                            p = [];
                          for (let x of [...w]) {
                            let g = await b.Hn(x, !0),
                              y = g.slice(0, -1),
                              k = g.at(-1);
                            y.some((m) => w.has(m.id)) || p.push(k);
                          }
                          return p;
                        },
                        d = async () => {
                          let { Xe: w, Ee: b } = await Qa({
                            zw: (await u()).filter(Y).map(Nt),
                            ge: s,
                          });
                          return {
                            Mf: new Blob([w], { type: "text/plain" }),
                            ...(b && {
                              Gf: new Blob([us + b], { type: "text/html" }),
                            }),
                          };
                        };
                      await rs({
                        kf: async () => (await d()).Mf,
                        ...(s === "richText" && {
                          Tf: async () => (await d()).Gf,
                        }),
                      });
                    }
                    i();
                  },
                }),
                archive: X.bi({
                  icon: {
                    I: "archive",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsArchivedMenuItemHelp"),
                  label: f("markAsArchived"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = await Ut(this.w0.map((d) => d.itemId));
                    await Promise.all(
                      u
                        .filter((d) => !d.archived)
                        .map(async (d) => await T.Fi(d.id, { archived: 1 })),
                    );
                  },
                }),
                cg: X.bi({
                  icon: {
                    I: "un-archive",
                    dimension: "18px",
                    left: "-2px",
                    top: "-1px",
                  },
                  label: f("unmarkAsArchived"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = await Ut(this.w0.map((d) => d.itemId));
                    await Promise.all(
                      u
                        .filter((d) => d.archived)
                        .map(async (d) => await T.Fi(d.id, { archived: 0 })),
                    );
                  },
                }),
                ug: X.bi({
                  icon: {
                    I: "task-unticked",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsPendingTaskMenuItemHelp"),
                  label: f("markAsPendingTask"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = await Ut(this.w0.map((d) => d.itemId));
                    await Promise.all(
                      u.map(
                        async (d) => await T.Fi(d.id, { task: 1, done: 0 }),
                      ),
                    );
                  },
                }),
                dg: X.bi({
                  icon: {
                    I: "task-ticked",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsDoneTaskMenuItemHelp"),
                  label: f("markAsDoneTask"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = await Ut(this.w0.map((d) => d.itemId));
                    await Promise.all(
                      u.map(
                        async (d) => await T.Fi(d.id, { task: 1, done: 1 }),
                      ),
                    );
                  },
                }),
                fg: X.bi({
                  icon: {
                    I: "un-task",
                    left: "-1px",
                    top: "-2px",
                    dimension: "18px",
                  },
                  label: f("unMarkAsTask"),
                  name,
                  action: async ({ e: l, o: h }) => {
                    i();
                    let u = await Ut(this.w0.map((d) => d.itemId));
                    await Promise.all(
                      u.map(
                        async (d) => await T.Fi(d.id, { task: 0, done: 0 }),
                      ),
                    );
                  },
                }),
              },
            }),
            ...(n && {
              pg: c({
                style: { marginTop: "7px", marginBottom: "6px" },
                children: {
                  mg: Ft({
                    marginTop: "7px",
                    marginBottom: "7px",
                    marginInlineStart: "-8px",
                    marginInlineEnd: "-8px",
                  }),
                  Tp: c({
                    style: {
                      fontSize: "12px",
                      maxWidth: "235px",
                      paddingInline: "15px 15px",
                      paddingBlock: "4px 0px",
                    },
                    textContent: f("rightClickSelectionOptionsTip"),
                  }),
                },
              }),
            }),
          },
        }),
      },
    })),
      this.S1());
  }
}
class qt {
  constructor({ Sf: e, li: i }) {
    ((this.Sf = e),
      (this.li = i),
      (this.views = []),
      (this.q0 = []),
      (this.A = new es("centerCol")),
      this.A.lc(({ count: s, A: n }) => e.p0?.u.b0.t1({ count: s, A: n })));
  }
  static async j1(e, i) {
    i ??= new ht();
    let s = await i.ht(e),
      n = new Set();
    if ((B(s) && (await i.ke(), (n = i.re)), !F(s)))
      for (;;) {
        let r = await i.ht(s.parentIds.find((o) => rt(o) && !n.has(o)));
        if (F(r)) break;
        s = r;
      }
    return { G1: s, h: i };
  }
  static L0 = 250;
  static E1 = 250;
  async e1({ P0: e = !0, itemId: i, Zi: s, C: n, source: r, h: o }) {
    (st.p0.u.b0.Ct.clear(), await this.Sf.an.Km({ params: {} }), this.Sf.i1());
    let a = {
      source: r,
      itemId: i,
      Zi: s,
      P0: e,
      C: n,
      ol: 0,
      rl: qt.L0,
      m0: qt.L0,
    };
    o ??= new ht();
    let l = await o.ht(i);
    a.As = F(l);
    let h;
    if (
      (F(l)
        ? ((a.La = i), (h = l))
        : ((a.La = l.parentIds.find(rt)), (h = await o.ht(a.La))),
      s && F(l))
    ) {
      let u = h.childIds.indexOf(s);
      if (u === -1) {
        let w = (await o.ht(s)).parentIds.find(rt);
        u = h.childIds.indexOf(w);
      }
      ((a.ol = ((u / qt.L0) | 0) * qt.L0), (a.rl = a.ol + qt.L0));
    }
    await this.Km({ params: a, h: o });
  }
  async Ab() {
    JSON.stringify(this.D0) !== JSON.stringify(this.uo) &&
      (await this.Km({ params: {} }),
      this.D0 && Object.entries(this.D0).length
        ? ((this.uo = this.D0),
          delete this.D0,
          await { navCol: st.g0, quickAccessCol: st.ww }[this.uo.source].s1({
            itemId: this.uo.itemId,
            n1: !1,
          }),
          await this.Km({ params: this.uo }))
        : await Vt({ itemId: "root" }));
  }
  async Ib() {
    await this.Km({ params: this.uo, Hi: !0 });
  }
  Ob() {
    !this.D0 && !this.uo?.Tw && (this.D0 = this.uo);
  }
  async x0({ h: e, M0: i, R0: s, j0: n, C0: r }) {
    (this.uo?.Tw || (await this.Km({ params: {} })), vi.ef(void 0));
    let o = {
      M0: i,
      R0: s,
      j0: n,
      Tw: !0,
      ol: 0,
      rl: qt.E1,
      m0: qt.E1,
      P0: !0,
    };
    await this.Km({ params: o, h: e, $b: r });
  }
  async Km({ params: e, h: i, Hi: s, $b: n }) {
    ((this.uo = e),
      (i ??= new ht()),
      e.Tw ||
        (e.As
          ? await i.Te({ groupId: e.La, ol: e.ol, rl: e.rl })
          : e.itemId && (await i.Te({ groupId: e.itemId }))),
      Object.entries(e).length && (await this.$d(i)),
      (this.G0 = e.itemId && (await i.Hn(e.itemId, !0)).map((h) => h.id)));
    let {
      al: r,
      Z0: o,
      aborted: a,
    } = await this.sync({ params: e, h: i, Mb: !0 });
    if (a) return;
    if (e.ol > Math.max(0, o - 1)) {
      ((e.ol = Math.max(0, Math.ceil(o / e.m0) - 1) * e.m0),
        (e.rl = e.ol + e.m0),
        await this.Km({ params: e, h: i, Hi: s }));
      return;
    }
    ((e.Z0 = o),
      (this.o.u.body.k0.i.style.display = e.ol ? "block" : "none"),
      [this.o.u.body.k0.location, this.o.u.body.y0.location].forEach((h) => {
        h.i.textContent = `${Number(e.ol + 1).toLocaleString()}–${Number(Math.min(e.rl, o)).toLocaleString()} / ${Number(o).toLocaleString()}`;
      }),
      [this.o.u.body.k0.E0, this.o.u.body.y0.E0].forEach((h) => {
        h.Xt(C("showPreviousCount", e.m0));
      }));
    let l = !!r;
    if (
      ([this.o.u.body.k0.T0, this.o.u.body.y0.T0].forEach((h) => {
        h.Xt(C("showNextCount", Math.min(e.m0, r)));
      }),
      [this.o.u.body.k0.T0].forEach((h) => {
        h.Wt(!!this.o.u.body.items.i.childElementCount);
      }),
      [this.o.u.body.y0.J0].forEach((h) => {
        h.Wt(e.ol > 0);
      }),
      [this.o.u.body.k0.T0, this.o.u.body.y0.T0].forEach((h) => {
        h.Xt(C("showNextCount", Math.min(e.m0, r)));
      }),
      [this.o.u.body.y0.T0].forEach((h) => {
        h.Wt(l);
      }),
      [this.o.u.body.k0.o1].forEach((h) => {
        h.Wt(!!r);
      }),
      await this.sync({ params: e, h: i, Hi: s }),
      [this.o.u.body.k0.J0, this.o.u.body.y0.J0].forEach((h) => {
        h.Wt(e.ol > 0);
      }),
      (this.o.u.body.y0.i.style.display = e.ol || r ? "block" : "none"),
      [this.o.u.body.k0.E0, this.o.u.body.y0.E0].forEach((h) => {
        h.Wt(e.ol);
      }),
      [this.o.u.body.y0.T0].forEach((h) => {
        h.Xt(C("showNextCount", Math.min(e.m0, r)));
      }),
      [this.o.u.body.k0.T0, this.o.u.body.y0.T0].forEach((h) => {
        (h.Wt(l), h.Xt(C("showNextCount", Math.min(e.m0, r))));
      }),
      [this.o.u.body.y0.o1].forEach((h) => {
        h.Wt(!!r);
      }),
      e.Zi)
    ) {
      let h = document.querySelector(`[data-id='${e.Zi}']`);
      if (h) {
        if (
          ([...h.parentElement.children].indexOf(h) === 0
            ? (this.o.i.scrollTop = 0)
            : h.scrollIntoView(),
          h.classList.contains("tab"))
        ) {
          let u = h.querySelector("a.tabLinkText");
          u &&
            ((u.onanimationend = (d) =>
              u.classList.remove("pulseHighlightText")),
            u.classList.add("pulseHighlightText"));
        } else if (h.classList.contains("tabGroup")) {
          let u = h.querySelector(".tabGroupBody");
          if (u) {
            let d = u,
              w = !1;
            for (; d; )
              ((d = d.parentElement),
                d?.classList.contains("tabGroupBody") && (w = !0));
            w &&
              ((u.onanimationend = (b) => u.classList.remove("pulseBorder")),
              u.classList.add("pulseBorder"));
          }
        }
      }
    } else n || (this.o.i.scrollTop = 0);
  }
  async start() {
    let e = { ...(this.uo ?? {}) };
    ((e.ol = 0),
      (e.rl = e.ol + e.m0),
      (this.o.i.scrollTop = 0),
      await this.Km({ params: e }));
  }
  async B1() {
    let e = { ...(this.uo ?? {}) };
    ((e.ol = Math.max(0, e.ol - e.m0)),
      (e.rl = e.ol + e.m0),
      (this.o.i.scrollTop = 0),
      await this.Km({ params: e }));
  }
  async next() {
    let e = { ...(this.uo ?? {}) };
    ((e.ol += e.m0),
      (e.rl = e.ol + e.m0),
      (this.o.i.scrollTop = 0),
      await this.Km({ params: e }));
  }
  async end() {
    let e = { ...(this.uo ?? {}) },
      i;
    (e.M0 ? (i = e.M0.length) : (i = e.Z0),
      (e.ol = i - (i % e.m0)),
      (e.rl = e.ol + e.m0),
      (this.o.i.scrollTop = 0),
      await this.Km({ params: e }));
  }
  async $d(e) {
    e ??= new ht();
    let i =
      !this.uo.Tw &&
      this.uo.itemId &&
      !["root", "trash"].includes(this.uo.itemId);
    if (
      ((this.o.u.a1.i.style.display = i ? "block" : "none"),
      this.o.u.a1.i.replaceChildren(),
      i)
    ) {
      let s = (await xi({ h: e, itemId: this.uo.itemId, fontSize: "12px" })).i;
      (this.o.u.a1.i.appendChild(s),
        (this.G0 =
          this.uo.itemId && (await e.Hn(this.uo.itemId, !0)).map((n) => n.id)));
    }
  }
  H1() {
    if (!this.o?.u?.l1?.i) return;
    let e = !st.g0.v0 && !st.ww.v0;
    ((this.o.u.l1.i.style.maxWidth = e ? "900px" : ""),
      (this.o.u.l1.i.style.marginInline = e ? "auto" : ""));
  }
  N1() {
    ((this.o.i.style.paddingInlineStart = `${st.g0.v0 ? 10 : 40}px`),
      (this.o.i.style.paddingInlineEnd = `${st.ww.v0 ? 10 : 40}px`),
      this.H1());
  }
  async st() {
    ((this.o = c({
      style: {
        overflow: "auto",
        flex: "1 1 0",
        paddingTop: "4px",
        paddingBottom: "30px",
        minWidth: "420px",
        backgroundColor: "var(--col-bg-color)",
      },
      children: {
        l1: c({
          style: { width: "100%" },
          children: {
            Sb: c({ style: { display: "none", paddingTop: "20px" } }),
            a1: c({
              style: { paddingInlineStart: "22px", paddingTop: "10px" },
            }),
            Db: c({
              style: { paddingTop: "4px" },
              children: {
                Q0: new $t({ Rl: !0, Vt: !1, Ft: !1, qe: !1, ps: !1, Tt: !0 }),
              },
            }),
            body: c({
              children: {
                Fb: c({
                  style: {
                    display: "none",
                    textAlign: "center",
                    fontSize: "14px",
                    marginTop: "50px",
                    lineHeight: "1.8em",
                    paddingInlineStart: "30px",
                    "text-wrap": "balance",
                  },
                  children: {
                    a: c({ textContent: f("clickOneTabIconToStoreTabsHere") }),
                    b: c({
                      style: {
                        marginTop: "10px",
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      textContent: f("gettingStarted"),
                      onclick: async (e) => {
                        (await T.bt("v2HelpShown", "true"),
                          await zo(en(), !1, !0));
                      },
                    }),
                  },
                }),
                z1: c({
                  init: (e) => {
                    (this.m ??= []).push(
                      ...S.hr({
                        Ae: e,
                        i: e.i,
                        dr: (i) => {
                          if (this.uo.Tw || !this.uo.As || !this.uo.La)
                            return !1;
                          let s = S.F ? (S.ft?.types ?? []) : ["tab"];
                          return !(
                            (S.F && !s.length) ||
                            !gi({
                              Er: s,
                              Fr: "folder",
                              jr: this.uo.La,
                              Br: this.uo.C,
                              Cr: "groupView",
                            }) ||
                            di(i)
                          );
                        },
                        pr: () => {
                          (lt.remove(),
                            e.i.appendChild(xt),
                            Object.assign(xt.style, {
                              top: "-12px",
                              bottom: "-12px",
                              left: "13px",
                              right: "13px",
                              width: "",
                              borderWidth: "3px",
                            }));
                        },
                        mr: () => {
                          (lt.remove(), xt.remove());
                        },
                        wr: async (i) => {
                          (lt.remove(),
                            xt.remove(),
                            !(this.uo.Tw || !this.uo.As || !this.uo.La) &&
                              (await yi({
                                e: i,
                                Hr: () => {},
                                qr: () => this.uo.La,
                                Ur: () => "folder",
                              })));
                        },
                      }),
                    );
                  },
                  style: {
                    display: "none",
                    position: "relative",
                    marginTop: "30px",
                    fontSize: "12px",
                    textAlign: "center",
                  },
                  children: {
                    xx: c({ textContent: f("thisFolderIsEmpty") }),
                    xg: c({
                      init: (e) => {
                        ((e.i.onpointerenter = (i) => (e.U1.style.opacity = 1)),
                          (e.i.onpointerleave = (i) =>
                            (e.U1.style.opacity = 0.6)),
                          (e.i.onclick = async (i) =>
                            await T.Sa({
                              id: Zt(),
                              parentId: this.uo.itemId,
                              we: "window",
                            })));
                      },
                      style: {
                        display: "flex",
                        cursor: "pointer",
                        gap: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                      },
                      children: {
                        U1: z(
                          {
                            width: "16px",
                            height: "16px",
                            style: { marginInlineStart: "13px", opacity: 0.6 },
                          },
                          (e) => `images/add-group${e ? "" : "-dark"}.png`,
                        ),
                        xx: c({ textContent: f("createANewGroupHere") }),
                      },
                    }),
                  },
                }),
                k0: c({
                  style: {
                    display: "none",
                    marginTop: "14px",
                    textAlign: "center",
                  },
                  children: {
                    J0: new mt({
                      fontSize: "12px",
                      label: U() ? "⏮" : "⏭",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.start(),
                    }),
                    E0: new mt({
                      fontSize: "12px",
                      label: "",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.B1(),
                    }),
                    location: c({
                      style: {
                        display: "inline-block",
                        fontSize: "12px",
                        margin: "0 10px",
                      },
                    }),
                    T0: new mt({
                      fontSize: "12px",
                      label: "",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.next(),
                    }),
                    o1: new mt({
                      fontSize: "12px",
                      label: U() ? "⏭" : "⏮",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.end(),
                    }),
                  },
                }),
                items: c({
                  id: "centerColItems",
                  tabIndex: -1,
                  style: { paddingBottom: "12px" },
                  init: (e) => {
                    let i = bn({
                      Me: e,
                      we: "folder",
                      k: this.views,
                      ed: () => this.uo.La,
                      sd: () =>
                        !this.uo.Tw &&
                        this.uo.As &&
                        !!this.uo.La &&
                        this.o.u.z1.i.style.display === "none",
                      nd: () => this.uo.C,
                      Oc: !0,
                    });
                    (this.m ??= []).push(...i);
                  },
                }),
                y0: c({
                  style: {
                    display: "none",
                    marginTop: "14px",
                    textAlign: "center",
                  },
                  children: {
                    J0: new mt({
                      fontSize: "12px",
                      label: U() ? "⏮" : "⏭",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.start(),
                    }),
                    E0: new mt({
                      fontSize: "12px",
                      label: "",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.B1(),
                    }),
                    location: c({
                      style: {
                        display: "inline-block",
                        fontSize: "12px",
                        margin: "0 10px",
                      },
                    }),
                    T0: new mt({
                      fontSize: "12px",
                      label: "",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.next(),
                    }),
                    o1: new mt({
                      fontSize: "12px",
                      label: U() ? "⏭" : "⏮",
                      V: !0,
                      tabIndex: void 0,
                      onclick: async () => await this.end(),
                    }),
                  },
                }),
              },
            }),
          },
        }),
      },
    })),
      this.N1());
  }
  async Ge(e) {
    let i = this.G0?.at(-1);
    if (i && e.type === "move") {
      let r = e.itemsMeta.map((o) => o.itemId);
      if (this.G0.some((o) => r.includes(o))) {
        let o = this.G0[0] === "trash",
          a = e.targetParentId !== "delete" && (await Vi(i)),
          l = e.targetParentId === "delete";
        if (o ^ a || l) {
          let h = async (b) => o === (await Vi(b)),
            u = [...this.G0],
            d,
            w;
          for (; (d = u.pop()); )
            if ((await ot(d)) && (await h(d))) {
              w = d;
              break;
            }
          await Vt({ itemId: w });
        } else await this.$d();
      }
    }
    if (
      e.type === "move" &&
      e.targetParentId !== "delete" &&
      e.itemsMeta?.some((r) => r.itemId === this.uo.itemId) &&
      this.uo.itemId !== this.uo.La
    ) {
      let o = (await ot(this.uo.itemId)).parentIds.find(rt);
      if (o !== this.uo.La) {
        let a = { ...this.uo, La: o };
        await this.Km({ params: a });
      }
    }
    let s = this.views?.some((r) =>
      e.itemsMeta?.some((o) => o.itemId === r.l.id),
    );
    if (
      (e.type === "move" && e.targetParentId === this.uo.La) ||
      (e.type === "move" && s) ||
      (e.type === "store" && e.targetParentId === this.uo.La) ||
      (e.type === "pin" && e.parentId === this.uo.La) ||
      (e.type === "sort" && e.parentId === this.uo.La)
    )
      if (s && this.uo.Tw) await st.p0.u.b0.F0({ Lb: !0, C0: !0 });
      else {
        let { aborted: r } = await this.sync({ params: this.uo });
        if (r) return;
      }
    let n = new ht();
    (this.views?.forEach((r) => r.Ge(e, n)), this.o.u.Q0?.Ge(e, n));
  }
  async sync({ params: e, h: i, Mb: s, Hi: n }) {
    let r = +new Date();
    if (
      this.B0 &&
      ((this.W1 = !0), !(await new Promise((a) => this.q0.push((l) => a(l)))))
    )
      return { aborted: !0 };
    this.B0 = !0;
    try {
      ((i ??= new ht()), await i.ke());
      let o, a, l;
      (e.Tw
        ? ((o = e.M0.map((p) => ({ id: p, index: void 0 }))), (l = e.M0.length))
        : e.La
          ? ((a = await i.ht(e.La)),
            e.itemId !== e.La
              ? ((l = 1),
                (o = a.childIds
                  .map((p, x) => ({ id: p, index: x }))
                  .filter(({ id: p, index: x }) => p === e.itemId)))
              : (await i.Wp(),
                (l = a.childIds.length),
                (o = a.childIds.map((p, x) => ({ id: p, index: x })))))
          : (o = []),
        (o = o.filter(
          ({ id: p, index: x }, g) =>
            g >= e.ol && (e.rl === void 0 || g < e.rl),
        )));
      let h = l - o.length - e.ol;
      if (s) return ((this.B0 = !1), { al: h, Z0: l });
      {
        let p = !1,
          x = !1;
        if (a) {
          let g = !a.childIds.length;
          ((p = !e.C && it(a) && g), (x = !e.Tw && !e.C && !it(a) && g));
        }
        ((this.o.u.Fb.i.style.display = p ? "block" : "none"),
          (this.o.u.z1.i.style.display = x ? "block" : "none"));
      }
      let u = await T.getSettings(["urlDisplay"]),
        d = e.As;
      ((this.o.u.Db.i.style.display = d ? "block" : "none"),
        (this.o.u.Sb.i.style.display = d ? "none" : "block"));
      let w = !1;
      if (e.As && !["root", "trash"].includes(e.La)) {
        let p = await i.ht(e.La),
          x = await i.ht(p.parentIds.find(rt));
        w = x.childIds.indexOf(p.id) < (x.pinnedCount ?? 0);
      }
      e.As &&
        (await this.o.u.Q0.st({
          me: !e.C,
          C: e.C,
          pinned: w,
          groupId: e.itemId,
          h: i,
        }));
      let b = !1;
      return (
        await os({
          Hi: n,
          pf: e.Tw ? 1 : 10,
          ea: o,
          Me: this.o.u.body.items.i,
          views: this.views,
          ia: (p) => p.l.id,
          pn: (p) => p.o?.i,
          sa: async (p, x) => {
            let g = await i.ht(p),
              y = this.createView({ params: e, item: g, settings: u });
            return (
              await this.Pb({
                params: e,
                item: g,
                view: y,
                h: i,
                j0: e.j0,
                index: x,
              }),
              y
            );
          },
          bc: (p) => {
            if ((e.As && p.un?.(p.index < (a.pinnedCount ?? 0)), e.Tw)) {
              p instanceof $t && p.Wh({ jt: e.R0 });
              let x = this.Sf.p0.u.b0.u0.includes("caseSensitive"),
                g = this.Sf.p0.u.b0.u0.includes("matchWholeWords");
              p.us(e.j0, x, g);
            }
          },
          Lw: () => (this.W1 ? ((this.W1 = !1), !0) : !1),
          Ew: () => {
            for (b = !0, this.B0 = !1; this.q0.length; )
              this.q0.shift()(!this.q0.length);
          },
        }),
        b
          ? { aborted: b }
          : ((this.B0 = !1), this.H1(), { al: h, Z0: l, aborted: b })
      );
    } catch (o) {
      return (console.log(o), (this.B0 = !1), { aborted: !0 });
    }
  }
  createView({ params: e, item: i, settings: s }) {
    let n;
    return (
      B(i)
        ? (n = new at({
            Nt: ({ e: r, qi: o }) => (
              Bt(r) && (r.preventDefault(), r.stopPropagation()),
              (async () =>
                await qe({
                  Nr: (await chrome.windows.getCurrent()).id,
                  id: o.l.id,
                  Rr: !e.C && !Et(r),
                  _l: $e(r),
                  Vl: Kt(r),
                  Wr: !1,
                  Yh: !Kt(r),
                  Yl: Bt(r),
                }))(),
              !1
            ),
            gn: !e.C,
            hn: !e.C,
            ...(!e.C && { A: this.A }),
            Mt: e.Tw ? "full" : s.urlDisplay,
            H: !1,
            ...(e.P0 &&
              !e.C && {
                fn: async (r) => {
                  await ce({ rt: [wt({ itemId: i.id })], O: "trash" });
                },
              }),
            Ft: !0,
            xo: this.li,
            ys: !1,
            C: e.C,
            We: async (r, o) => {
              let a = [wt({ itemId: i.id, Fe: "trash", zt: 0 })];
              await me({
                title: f("chooseLocationToRestoreTo"),
                He: F(i),
                io: async (l) => {
                  await ce({ rt: a, O: l.id });
                },
              });
            },
            Ne: async () => {
              let r = [wt({ itemId: i.id, Fe: "trash" })];
              await T._h({ rt: r });
            },
          }))
        : Y(i) &&
          (n = new $t({
            bs: e.Tw,
            ao: e.Tw,
            ...(!e.C && { A: this.A }),
            Mt: e.Tw ? "full" : s.urlDisplay,
            C: e.C,
            Rl: !0,
            Vt: !F(i),
            Ft: !0,
            li: this.li,
            qe: e.P0 && !e.C,
            ps: e.P0 && !e.C,
            Nt: ({ e: r, qi: o, dn: a, tabIndex: l }) => (
              Bt(r) && (r.preventDefault(), r.stopPropagation()),
              (async () => {
                if (!Et(r) && !(await T._e("autoActionOnOpenOptionChosen")))
                  try {
                    await ks();
                  } catch {
                    return;
                  }
                await qe({
                  Nr: (await chrome.windows.getCurrent()).id,
                  id: o.l.id,
                  bu: a.l.id,
                  tabIndex: l,
                  yu: Ri(
                    a.k
                      .filter((h) => h.l.id === o.l.id)
                      .findIndex((h) => h === o),
                  ),
                  Vl: Kt(r),
                  _l: $e(r),
                  Wr: !1,
                  Yl: Bt(r),
                  Rr: !e.C && !a.ut && !Et(r),
                  Yh: !Kt(r),
                });
              })(),
              !1
            ),
          })),
      n
    );
  }
  async Pb({ params: e, item: i, view: s, h: n, index: r }) {
    if (B(i))
      await s.st({ ta: i, h: n, pinned: !1, xe: void 0, wt: void 0, kn: !0 });
    else if (Y(i)) {
      let o = !1;
      if (e.As) {
        let a = await n.ht(e.La);
        o = r < (a.pinnedCount ?? 0);
      } else {
        let a = i.parentIds.find(rt),
          l = await n.ht(a);
        o = r < (l.pinnedCount ?? 0);
      }
      await s.st({
        groupId: i.id,
        h: n,
        jt: e.R0,
        pinned: o,
        C: e.C,
        me: !e.C,
      });
    }
  }
  jb() {
    this.views.forEach((e) => e.us([]));
  }
}
class or {
  constructor({ H0: e, h1: i, settings: s }) {
    ((this.h1 = i),
      (this.H0 = e),
      (this.q1 = async (a) => await T.bt(`${i}Width`, a)),
      (this.c1 = async (a) => await T.bt(`${i}Expanded`, a + "")),
      (this.v0 = s[`${i}Expanded`] === "true"),
      (this.O0 = parseInt(s[`${i}Width`])));
    let n = hl({
      Gb: !e,
      bgColor: "var(--col-bg-color)",
      borderColor: "transparent",
    });
    ((this.o = c({
      style: {
        position: "relative",
        display: "flex",
        height: "100%",
        backgroundColor: "var(--col-bg-color)",
      },
      children: {
        ...(!e && { K0: n }),
        R1: c({
          className: "column",
          style: {
            overflow: "auto",
            height: "100%",
            marginTop: "0px",
            marginBottom: "0px",
            zIndex: 1,
            flex: "1 1 auto",
          },
          children: { body: c({ style: {} }) },
        }),
        ...(e && { K0: n }),
        C1: ar({
          borderColor: "var(--stronger-border-color)",
          Z1: e,
          J1: !0,
          display: this.v0,
        }),
        Q1: ar({
          borderColor: "var(--stronger-border-color)",
          Z1: e,
          J1: !1,
          display: !this.v0,
        }),
      },
    })),
      (this.i = this.o.i),
      this.N0(this.v0),
      this.z0(this.O0),
      (this.o.C1.i.onclick = async (a) => {
        (this.N0(!1), await this.c1(!1));
      }),
      (this.o.Q1.i.onclick = async (a) => {
        (this.N0(!0),
          await this.c1(!0),
          this.O0 < 280 &&
            ((this.O0 = 280), this.z0(this.O0), await this.q1(this.O0)));
      }));
    const r = 1,
      o = 24;
    ((this.o.K0.i.onpointerdown = (a) => {
      let l = parseInt(this.i.offsetWidth);
      ps({
        event: a,
        element: this.o.K0.i,
        Il: void 0,
        wh: ({ ts: h, es: u, qs: d, Us: w }) => {},
        Al: ({
          ts: h,
          es: u,
          dx: d,
          dy: w,
          qs: b,
          Us: p,
          pageX: x,
          pageY: g,
        }) => {
          if (
            (this.F || ((Math.abs(d) > r || Math.abs(w) > r) && (this.F = !0)),
            this.F)
          ) {
            let y = Math.max(0, l + d * (this.H0 ^ !U() ? 1 : -1));
            this.z0(y);
          }
        },
        xh: ({ ts: h, es: u, Ww: d, Nw: w, qs: b, Us: p }) => {
          let x = parseInt(this.i.offsetWidth);
          x < o
            ? (this.N0(!1), this.c1(!1))
            : (this.N0(!0), this.z0(x), this.q1(x));
        },
      });
    }),
      this.z0(this.O0));
  }
  K1() {
    return this.o.R1.body.i;
  }
  z0(e) {
    ((this.O0 = e), (this.o.i.style.width = `${this.v0 ? this.O0 : 0}px`));
  }
  N0(e) {
    ((this.v0 = e),
      st.an?.N1(),
      this.H0 &&
        ((this.o.i.style.marginInlineEnd = this.v0 ? "-12px" : 0),
        (this.o.K0.i.style.display = e ? "block" : "none")),
      (this.o.C1.i.style.display = e ? "inline-block" : "none"),
      (this.o.Q1.i.style.display = e ? "none" : "inline-block"),
      (this.o.i.style.width = `${e ? this.O0 : 0}px`));
  }
}
function hl({ Gb: t, bgColor: e }) {
  return c({
    style: {
      flex: "0 0 12px",
      position: "relative",
      userSelect: "none",
      fontSize: 0,
      height: "100%",
      cursor: "col-resize",
      backgroundColor: e,
      top: 0,
      [t ? "left" : "right"]: 0,
    },
  });
}
function ar({ borderColor: t, Z1: e, J1: i, display: s }) {
  return c({
    className: i ? "isCollapse" : "NOTisCollapse",
    style: {
      zIndex: 3,
      backgroundColor: "var(--col-bg-color)",
      display: s ? "inline-block" : "none",
      borderBottom: `1px solid ${t}`,
      borderRadius: "30px",
      width: "24px",
      height: "24px",
      position: "absolute",
      top: 0,
      textAlign: "center",
      cursor: "pointer",
      [e && !i ? "borderInlineEnd" : "borderInlineStart"]: `1px solid ${t}`,
      [U() ? "right" : "left"]: `${e ? (i ? 6 : -24) : 0}px`,
    },
    p: z(
      {
        width: 10 / 2 + "px",
        height: 12 / 2 + "px",
        style: {
          display: "inline-block",
          ...(e ^ i ^ !U() && { transform: "scaleX(-1)" }),
        },
      },
      (n) => `images/side-panel-left-arrow-${n ? "light" : "dark"}.png`,
    ),
  });
}
class cl {
  constructor({ onChange: e }) {
    ((this.onChange = e),
      (this.c0 = {}),
      (this.u1 = new Qt({
        Pc: [],
        fontSize: "12px",
        Vm: !0,
        $: { paddingInlineStart: "10px", color: "var(--text-color-weak)" },
        Dc: [
          { label: f("tasks"), name: "task" },
          { label: f("tabs"), name: "tab" },
          { label: f("starred"), name: "starred" },
          {
            label: f("moreEllipsis"),
            name: "more",
            St: async (i) => {
              i.stopPropagation();
              let s = i.currentTarget;
              this.V0 = new X({
                Z: document,
                fs: !0,
                ca: s,
                borderRadius: "10px",
                la: c({
                  style: { maxWidth: "350px", padding: "12px 16px" },
                  children: {
                    header: c({
                      style: {
                        color: "var(--text-color-weak)",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginInlineStart: "4px",
                        marginBottom: "12px",
                      },
                      textContent: f("moreSearchFilters"),
                    }),
                    Eb: Ft({
                      marginTop: "12px",
                      marginBottom: "11px",
                      marginInlineStart: "-12px",
                      marginInlineEnd: "-12px",
                    }),
                    V1: new Qt({
                      Vm: !0,
                      Pc: this.c0.V1 ?? [],
                      fontSize: "12px",
                      $: {
                        marginInlineStart: "-4px",
                        color: "var(--text-color-weak)",
                      },
                      Dc: [
                        { label: f("groups"), name: "group" },
                        { label: f("folders"), name: "folder" },
                      ],
                      onChange: async (n) => {
                        this.$0(() => (this.c0.V1 = n));
                      },
                    }),
                    X1: new Qt({
                      Vm: !0,
                      Pc: this.c0.X1 ?? [],
                      fontSize: "12px",
                      $: {
                        marginTop: "4px",
                        marginInlineStart: "-4px",
                        color: "var(--text-color-weak)",
                      },
                      Dc: [
                        { label: f("hasNotes"), name: "hasNotes" },
                        { label: f("shared"), name: "shared" },
                      ],
                      onChange: async (n) => {
                        this.$0(() => (this.c0.X1 = n));
                      },
                    }),
                    _1: new Qt({
                      Vm: !1,
                      tw: !0,
                      Pc: this.c0._1 ?? [],
                      fontSize: "12px",
                      $: {
                        marginTop: "4px",
                        marginInlineStart: "-4px",
                        color: "var(--text-color-weak)",
                      },
                      Dc: [
                        { label: f("tasksPending"), name: "taskNotDone" },
                        { label: f("tasksDone"), name: "taskDone" },
                      ],
                      onChange: async (n) => {
                        this.$0(() => (this.c0._1 = n));
                      },
                    }),
                    U0: new Qt({
                      Vm: !1,
                      tw: !0,
                      Pc: this.c0.U0 ?? [],
                      fontSize: "12px",
                      $: {
                        marginTop: "4px",
                        marginInlineStart: "-4px",
                        color: "var(--text-color-weak)",
                      },
                      Dc: [
                        { label: f("archived"), name: "archived" },
                        { label: f("nonArchived"), name: "nonArchived" },
                      ],
                      onChange: async (n) => {
                        this.$0(() => (this.c0.U0 = n));
                      },
                    }),
                    L1: Ft({
                      marginTop: "12px",
                      marginBottom: "11px",
                      marginInlineStart: "-12px",
                      marginInlineEnd: "-12px",
                    }),
                    ei: new Jt({
                      value: this.c0.ei?.length,
                      fontSize: "12px",
                      label: f("caseSensitive"),
                      $: {
                        marginInlineStart: "4px",
                        marginTop: "10px",
                        flex: "0 1 auto",
                      },
                      onChange: (n) => {
                        this.$0(
                          () => (this.c0.ei = n ? ["caseSensitive"] : []),
                        );
                      },
                    }),
                    ii: new Jt({
                      value: this.c0.ii?.length,
                      fontSize: "12px",
                      label: f("matchWholeWordsOnly"),
                      $: {
                        marginInlineStart: "4px",
                        marginTop: "6px",
                        flex: "0 1 auto",
                      },
                      onChange: (n) => {
                        this.$0(
                          () => (this.c0.ii = n ? ["matchWholeWords"] : []),
                        );
                      },
                    }),
                    vb: Ft({
                      marginTop: "12px",
                      marginBottom: "11px",
                      marginInlineStart: "-12px",
                      marginInlineEnd: "-12px",
                    }),
                    wg: c({
                      style: {
                        display: "grid",
                        gridTemplateColumns: "max-content max-content",
                        gridTemplateRows: "auto auto",
                        gridRowGap: "2px",
                        alignItems: "center",
                        fontSize: "12px",
                        marginInlineStart: "6px",
                        marginTop: "12px",
                        marginBottom: "2px",
                        color: "var(--text-color-weak)",
                      },
                      children: {
                        yg: c({
                          style: {
                            marginInlineEnd: "10px",
                            justifySelf: "end",
                          },
                          textContent: f("createdOnOrAfterColon"),
                        }),
                        Y1: fe(this.c0.Y1?.[0]?.isoDate, (n) =>
                          L("input", {
                            type: "date",
                            style: {
                              color: n
                                ? "var(--text-color)"
                                : "var(--text-color-weak)",
                              fontSize: "12px",
                            },
                            value: n,
                            init: (r) => {
                              r.i.onchange = (o) => {
                                this.$0(() => {
                                  ((r.i.style.color = r.i.value
                                    ? "var(--text-color)"
                                    : "var(--text-color-weak)"),
                                    (this.c0.Y1 = o.currentTarget.value
                                      ? [
                                          {
                                            name: "createdOnOrAfter",
                                            isoDate: o.currentTarget.value,
                                          },
                                        ]
                                      : []));
                                });
                              };
                            },
                          }),
                        ),
                        bg: c({
                          style: {
                            justifySelf: "end",
                            marginInlineEnd: "10px",
                          },
                          textContent: f("createdOnOrBeforeColon"),
                        }),
                        ib: fe(this.c0.ib?.[0]?.isoDate, (n) =>
                          L("input", {
                            type: "date",
                            style: {
                              color: n
                                ? "var(--text-color)"
                                : "var(--text-color-weak)",
                              fontSize: "12px",
                            },
                            value: n,
                            init: (r) => {
                              r.i.onchange = (o) => {
                                this.$0(() => {
                                  ((r.i.style.color = r.i.value
                                    ? "var(--text-color)"
                                    : "var(--text-color-weak)"),
                                    (this.c0.ib = o.currentTarget.value
                                      ? [
                                          {
                                            name: "createdOnOrBefore",
                                            isoDate: o.currentTarget.value,
                                          },
                                        ]
                                      : []));
                                });
                              };
                            },
                          }),
                        ),
                      },
                    }),
                  },
                }),
              });
            },
          },
        ],
        onChange: async (i) => {
          this.$0(() => (this.c0.gg = i.filter((s) => s !== "more")));
        },
      })),
      (this.o = this.u1.o));
  }
  $0(e) {
    let i = structuredClone(this.c0);
    e();
    const s = (o) => [].concat(...Object.values(i)).includes(o),
      n = (o) => this.Lc().includes(o),
      r = (o) => n(o) && !s(o);
    (["task", "taskNotDone", "taskDone"].some((o) => r(o)) &&
      (["nonArchived", "archived"].some((o) => this.c0.U0?.includes(o)) ||
        ((this.c0.U0 = ["nonArchived"]),
        this.V0 && !this.V0.j && this.V0.o.u.U0.ew("nonArchived", !0))),
      this.u1.ew(
        "more",
        this.Lc().filter((o) => !["task", "tab", "starred"].includes(o)).length,
      ),
      this.onChange(this.Lc()));
  }
  Lc() {
    return [].concat(...Object.values(this.c0));
  }
  clear() {
    (this.u1.clear(), (this.c0 = {}));
  }
}
class ul {
  constructor() {
    this.o = c({
      init: (e) => {
        (Wt(e.i, { Yt: f("chooseLightDarkTheme") }),
          (e.i.onclick = async (i) => {
            i.stopPropagation();
            let s = await T.ks("theme"),
              n = new X({
                Z: document,
                ca: e.i,
                borderRadius: "10px",
                la: c({
                  style: { padding: "12px 16px" },
                  children: {
                    kg: new ua({
                      onChange: async (r) => {
                        (await Pa(r), n.destroy());
                      },
                      lw: s,
                      options: [
                        { label: f("lightTheme"), value: "light" },
                        { label: f("darkTheme"), value: "dark" },
                        { label: f("autoTheme"), value: "auto" },
                      ],
                    }),
                  },
                }),
              });
          }));
      },
      className: "lightDarkIndicator",
      style: {
        display: "inline-block",
        marginInline: "5px",
        position: "relative",
        top: "1px",
        cursor: "pointer",
        fontSize: 0,
      },
      children: {
        icon: z(
          { width: "22px", height: "22px", display: "inline-block" },
          (e) => `images/${e ? "light" : "dark"}-mode-indicator.png`,
        ),
      },
    });
  }
}
class dl {
  constructor({ Sf: e, Eh: i }) {
    ((this.Sf = e),
      (this.u0 = []),
      (this.A0 = void 0),
      (this.Xu = void 0),
      (this.o = c({
        style: { flex: "1 1 auto" },
        children: {
          Ct: new kn({
            Cc: !0,
            xn: async ({ value: s, qc: n, Ct: r }) => {
              ((this.ti = s
                .trim()
                .split(" ")
                .filter((o) => o.length)),
                await this.F0());
            },
            pa: async () => {
              this.Sf.i1();
            },
            ma: async () => {
              (this.Sf.an.Ob(), await this.X0({ d0: !0, x0: !1 }));
            },
            wa: async (s) => {
              ((this.ti = []),
                this.A?.reset(),
                await this.X0({ d0: !1, x0: !1 }),
                s && (await this.Sf.an.Ab()),
                this.Sf.an.jb());
            },
            cw: () => !0,
          }),
          I0: c({
            dataset: { display_type: "grid" },
            style: {
              minWidth: "320px",
              display: "none",
              fontSize: "12px",
              marginTop: "13px",
              marginInlineStart: "18px",
              marginInlineEnd: "12px",
              gridTemplateColumns:
                "max-content max-content auto max-content max-content max-content",
              gridTemplateRows: "none none none",
              gridRowGap: "2px",
              gridColumnGap: "0px",
              alignItems: "start",
            },
            children: {
              Nf: c({
                style: {
                  gridRow: 1,
                  gridColumn: 1,
                  color: "var(--text-color-weak)",
                  fontWeight: "600",
                  justifySelf: "end",
                  minHeight: "1.8em",
                },
                textContent: f("Folder"),
              }),
              d1: c({
                style: {
                  padding: "0px",
                  gridRow: 1,
                  gridColumn: 2,
                  gridRowStart: "span 1",
                  borderRight: "1px solid var(--border-color)",
                  alignSelf: "stretch",
                  marginInlineStart: "20px",
                  marginInlineEnd: "20px",
                  position: "relative",
                  top: "-5px",
                  marginBottom: "-4px",
                },
              }),
              Bb: c({
                style: {
                  gridRow: 1,
                  gridColumn: 3,
                  position: "relative",
                  top: "-4px",
                },
                children: {
                  f1: new yn({
                    vr: f("restrictSearchToFolderColon"),
                    Li: "mainSearch",
                    jm: !0,
                    style: {},
                    Pl: { fontSize: "12px", marginTop: "1px" },
                    Eh: i,
                    Js: async (s) => {
                      ((this.Xu = s.id), await this.F0());
                    },
                    He: !0,
                    xt: !0,
                    Z: document,
                    maxHeight: "500px",
                    Ce: { x: -80, y: 0 },
                  }),
                },
              }),
              Hb: c({
                style: {
                  gridRow: 1,
                  gridColumn: 4,
                  color: "var(--text-color-weak)",
                  fontWeight: "600",
                  justifySelf: "end",
                  marginInlineStart: "40px",
                  minHeight: "1.8em",
                },
                textContent: f("filter"),
              }),
              Nb: c({
                style: {
                  padding: "0px",
                  gridRow: 1,
                  gridColumn: 5,
                  gridRowStart: "span 2",
                  borderRight: "1px solid var(--border-color)",
                  alignSelf: "stretch",
                  marginInlineStart: "20px",
                  marginInlineEnd: "6px",
                  position: "relative",
                  top: "-3px",
                },
              }),
              sb: c({
                style: {
                  gridRow: 1,
                  gridColumn: 6,
                  position: "relative",
                  top: "-4px",
                },
                children: {
                  nb: new cl({
                    onChange: async (s) => {
                      ((this.u0 = s), await this.F0());
                    },
                  }),
                },
              }),
              _0: c({
                style: {
                  gridRow: 2,
                  gridColumn: 1,
                  color: "var(--text-color-weak)",
                  fontWeight: "600",
                  justifySelf: "end",
                  opacity: 0,
                  minHeight: "1.8em",
                },
                textContent: f("results"),
              }),
              m1: c({
                style: {
                  opacity: 0,
                  marginInlineStart: "5px",
                  gridRow: 2,
                  gridColumn: 3,
                  position: "relative",
                  top: "-1px",
                },
                children: {
                  w1: new Ne({
                    maxHeight: "600px",
                    Em: {
                      paddingInline: "1px 0px",
                      paddingBlock: "0px 0px",
                      height: "17px",
                    },
                    $: {
                      paddingInline: "0px 1px",
                      paddingBlock: "0px 0px",
                      height: "17px",
                      color: "var(--text-color-weak)",
                      fontSize: "12px",
                    },
                    Th: { fontSize: "12px" },
                    ce: c({}),
                    Ih: { marginInlineStart: "4px", marginInlineEnd: "5px" },
                    Qn: 250,
                    zs: 500,
                    Lm: !0,
                    kh: async () =>
                      new rr({
                        nc: await T.ks("copyToClipboardFormat"),
                        S0: this.b1.map((n) => ({
                          type: n.type,
                          ...(n.type === "group" && { we: n.groupType }),
                          itemId: n.id,
                        })),
                        F1: () => this.o.u.w1.Jn(!1),
                      }).o,
                  }),
                },
              }),
              zb: c({
                style: {
                  color: "var(--text-color-weak)",
                  fontWeight: "600",
                  justifySelf: "end",
                  gridRow: 2,
                  gridColumn: 4,
                },
                textContent: f("sort"),
              }),
              Ub: c({
                style: {
                  gridRow: 2,
                  gridColumn: 6,
                  position: "relative",
                  top: "-4px",
                },
                children: {
                  Wb: new Qt({
                    Pc: [],
                    fontSize: "12px",
                    $: {
                      paddingInlineStart: "10px",
                      color: "var(--text-color-weak)",
                    },
                    Dc: [
                      { label: f("recent"), name: "recent" },
                      { label: f("aDashZ"), name: "az" },
                      { label: f("website"), name: "domain" },
                    ],
                    onChange: async ([s]) => {
                      ((this.A0 = s), await this.F0());
                    },
                  }),
                },
              }),
              g1: c({
                style: {
                  display: "none",
                  gridRow: 3,
                  gridColumn: 1,
                  color: "var(--text-color-weak)",
                  fontWeight: "600",
                  justifySelf: "end",
                  minHeight: "1.8em",
                },
                textContent: f("selection"),
              }),
              rb: c({
                style: {
                  display: "none",
                  padding: "0px",
                  gridRow: 3,
                  gridColumn: 2,
                  borderRight: "1px solid var(--border-color)",
                  alignSelf: "stretch",
                  marginInlineStart: "20px",
                  marginInlineEnd: "20px",
                  position: "relative",
                  top: "-4px",
                  marginBottom: "-2px",
                },
              }),
              T1: c({
                style: {
                  marginInlineStart: "5px",
                  display: "none",
                  gridRow: 3,
                  gridColumn: 3,
                  position: "relative",
                  top: "-1px",
                },
                children: {
                  ob: new Ne({
                    maxHeight: "600px",
                    Em: {
                      paddingInline: "0px 1px",
                      paddingBlock: "0px 0px",
                      height: "17px",
                    },
                    $: {
                      paddingInline: "0px 1px",
                      paddingBlock: "0px 0px",
                      height: "17px",
                      color: "var(--text-color-weak)",
                      fontSize: "12px",
                    },
                    Th: { fontSize: "12px" },
                    ce: c({}),
                    Ih: { marginInlineStart: "5px" },
                    Qn: 250,
                    zs: 500,
                    Lm: !0,
                    kh: async () =>
                      new rr({
                        nc: await T.ks("copyToClipboardFormat"),
                        S0: (() => {
                          let [n, r] = be(this.A.nt, (h) => B(h.l)),
                            [o, a] = be(n, (h) => h.xe),
                            l = new Set(a.map((h) => h.l.id));
                          return (
                            (o = o.filter((h) => !l.has(h.l.id))),
                            [
                              ...o.map((h) => ({ ...vn(h), type: h.l.type })),
                              ...a.map((h) => ({
                                itemId: h.l.id,
                                type: h.l.type,
                              })),
                              ...r.map((h) => ({
                                itemId: h.l.id,
                                type: h.l.type,
                                we: h.l.groupType,
                              })),
                            ]
                          );
                        })(),
                        F1: () => this.o.u.ob.Jn(!1),
                        A: this.A,
                      }).o,
                  }),
                },
              }),
            },
          }),
        },
      })),
      (this.Ct = this.o.u.Ct),
      (this.I0 = this.o.u.I0));
  }
  v1(e) {
    let i, s;
    (e === void 0
      ? ((s = !1), (i = ""))
      : ((s = !0), e ? (i = C("matchCount", e)) : (i = f("noMatches"))),
      this.o.u.w1.Pm(e),
      (this.o.u.w1.o.u.label.i.textContent = i),
      this.X0({ x0: s }));
  }
  async X0({ d0: e, x0: i, f0: s }) {
    (i && (e = !0), e === !1 && (i = !1));
    let n = this.d0,
      r = this.x0,
      o = this.f0;
    (e !== void 0 && (this.d0 = e),
      i !== void 0 && (this.x0 = i),
      s !== void 0 && (this.f0 = s));
    let a = !(this.f0 && !this.d0);
    (this.Ct.Wt(a), (this.o.u.I0.i.style.marginTop = `${a ? 13 : 7}px`));
    let l = this.d0 || this.f0;
    ((this.I0.i.style.display = l ? "grid" : "none"),
      l || this.o.u.sb?.nb?.V0?.destroy());
    const h = (d = !0, w, b = 300) =>
        w.forEach((p) => {
          let x = p.dataset.display_type ?? "block";
          ((p.style.display = d ? x : "none"),
            d && (p.style.opacity = 0),
            Qe({
              i: p,
              duration: b,
              Uc: d,
              Fw: (g) => (g ? "ease-out" : "ease-in"),
              zc: [{ name: "opacity", before: 0, after: 1 }],
            }));
        }),
      u = (d = !0, w, b = 80) =>
        w.forEach((p) =>
          Qe({
            i: p,
            duration: b,
            Uc: d,
            zc: [{ name: "opacity", before: 0, after: 1 }],
          }),
        );
    ((this.o.u.d1.i.style.display = !this.d0 && this.f0 ? "none" : "block"),
      (this.o.u.rb.i.style.display = this.f0 && !this.d0 ? "block" : "none"),
      (this.o.u._0.i.style.opacity = this.x0 ? 1 : 0));
    {
      let d = 1;
      (this.d0 && this.x0 && (d = 2),
        this.d0 && this.f0 && (d = 3),
        (this.o.u.d1.i.style.gridRowStart = `span ${d}`));
    }
    {
      [...this.o.I0.i.children].forEach((b) => (b.style.display = "none"));
      let d,
        w = [];
      (this.d0 &&
        (w.push(
          this.o.u.Nf,
          this.o.u.d1,
          this.o.u.Bb,
          this.o.u.Hb,
          this.o.u.Nb,
          this.o.u.sb,
        ),
        w.push(this.o.u.zb, this.o.u.Ub),
        w.push(this.o.u._0)),
        this.x0 && w.push(this.o.u.m1),
        this.f0 && w.push(this.o.u.g1, this.o.u.T1),
        !this.d0 && this.f0 && w.push(this.o.u.rb),
        this.d0 && !this.f0
          ? (d = "auto auto 0")
          : this.d0 && this.f0
            ? (d = "auto auto auto")
            : !this.d0 && this.f0 && (d = "0 0 auto"),
        (this.o.I0.i.style.gridTemplateRows = d),
        w.forEach((b) => (b.i.style.display = "block")));
    }
    (!n && this.d0
      ? h(!0, [this.I0.i])
      : !r && this.x0
        ? u(!0, [this.o.u._0.i, this.o.u.m1.i])
        : !n && this.f0
          ? o || (h(!0, [this.o.u.g1.i, this.o.u.T1.i]), h(!0, [this.I0.i]))
          : this.x0 && this.f0
            ? h(!0, [this.o.u.g1.i, this.o.u.T1.i])
            : o && !this.f0
              ? this.d0 || h(!1, [this.I0.i])
              : !this.d0 && !this.f0
                ? h(!1, [this.I0.i])
                : (!this.d0 && this.f0) ||
                  (!this.x0 && r && u(!1, [this.o.u._0.i, this.o.u.m1.i])),
      !this.d0 &&
        n &&
        (await this.o.u.f1.Ns(await ot("root")),
        this.v1(void 0),
        (this.b1 = []),
        (this.u0 = []),
        (this.A0 = void 0),
        (this.Xu = void 0),
        delete this.d0,
        delete this.x0,
        delete this.f0,
        this.o.u.nb.clear(),
        this.o.u.Wb.clear()));
  }
  t1({ count: e, A: i }) {
    if (e === 0) {
      if (i !== this.A) return;
    } else this.A = i;
    let s, n;
    (e === 0
      ? ((n = !1), (s = ""))
      : ((n = !0), (s = C("selectedItemCount", e))),
      (this.o.u.ob.o.u.label.i.textContent = s),
      this.X0({ f0: n }));
  }
  qb() {
    delete this.h;
  }
  async F0({ Lb: e, C0: i } = {}) {
    e && delete this.h;
    let s =
      (this.ti ?? []).join("").length >= 2 ||
      this.u0.length ||
      this.A0 ||
      this.Xu;
    if (
      (s || this.ti?.length
        ? this.h ||
          (async () => {
            let r = new ht();
            (await r.zp(), (this.h = r), await this.Rb?.());
          })()
        : delete this.h,
      !s)
    )
      (this.v1(void 0), (this.b1 = []), await this.Sf.an.x0({ M0: [] }));
    else if (!this.h) this.Rb = async () => await this.F0({ C0: i });
    else {
      let r = te((g) =>
          Math.max(g.accessDate ?? 0, g.modifyDate ?? 0, g.createDate ?? 0),
        ),
        o = te((g) => g.createDate ?? 0),
        a = [];
      (this.A0 === "recent" && a.push(r),
        this.A0 === "created" && a.push(o),
        this.A0 === "az" &&
          a.push(
            Cs((g) => (g.label || g.title || "").toLowerCase().replace(yo, "")),
            r,
          ),
        this.A0 === "domain" &&
          a.push(
            Cs((g) => $i(g.url)),
            r,
          ),
        a.length || a.push(r));
      let l, h, u;
      if (this.u0.length || ["az", "domain"].includes(this.A0)) {
        let g = this.A0 === "az",
          y = this.u0.includes("tab") || this.A0 === "domain",
          k = this.u0.includes("group"),
          m = this.u0.includes("folder"),
          v = this.u0.includes("shared"),
          A = this.u0.includes("task"),
          D = this.u0.includes("taskNotDone"),
          M = this.u0.includes("taskDone"),
          N = this.u0.includes("hasNotes"),
          Z = this.u0.includes("starred"),
          dt = this.u0.includes("archived"),
          R = this.u0.includes("nonArchived");
        ((h = this.u0.includes("caseSensitive")),
          (u = this.u0.includes("matchWholeWords")));
        let J = this.u0.find((q) => q.name === "createdOnOrAfter"),
          V = this.u0.find((q) => q.name === "createdOnOrBefore"),
          vt = J && +new Date(J.isoDate),
          W = V && +new Date(Ha(V.isoDate)),
          et;
        ((k || m || y) &&
          ((et = []), k && et.push(Yt), m && et.push(F), y && et.push(B)),
          (l = (q) =>
            !(
              (vt && !(q.createDate >= vt)) ||
              (W && !(q.createDate < W)) ||
              (et && !et.some((jt) => jt(q))) ||
              (v && !ri(q)) ||
              (A && !q.task) ||
              (D && !(q.task && !q.done)) ||
              (M && !(q.task && q.done)) ||
              (Z && (q.rating ?? 0) === 0) ||
              (N && !q.notes?.text) ||
              (g && !(q.label || q.title)) ||
              (dt && !(q.archived || this.h.Qu.has(q.id))) ||
              (R && (q.archived || !this.h.el.has(q.id)))
            )));
      }
      let d = this.h.Zp({
        ei: h,
        ii: u,
        Xu: this.Xu,
        Qp: a,
        filter: l,
        ti: this.ti,
        Jp: !1,
      });
      this.b1 = d;
      let [w, b] = be(d, B),
        p = new Set(
          [...new Set(w.flatMap((g) => g.parentIds))].filter(
            (g) => !this.h.re.has(g) && g !== "quickList",
          ),
        ),
        x = new Set([...b.map(Nt), ...p]);
      (this.v1(d.length),
        await this.Sf.an.x0({
          h: this.h,
          M0: d.map(Nt),
          R0: new Set(),
          j0: this.ti,
          C0: i,
        }));
    }
  }
}
class fl extends or {
  constructor({ settings: e, Sf: i }) {
    (super({ settings: e, H0: !0, h1: "navCol" }),
      (this.Sf = i),
      (this.Y0 = new es("navCol")),
      this.Y0.lc(({ count: s, A: n }) => i.p0?.u.b0.t1({ count: s, A: n })));
  }
  ab(e) {
    let i = "everything";
    return (
      e.foldersOnly && (i = "foldersOnly"),
      e.namedOnly && (i = "namedOnly"),
      i
    );
  }
  async st() {
    let e = await T.getSettings(["navColTreeFilter"]),
      i = e.navColTreeFilter,
      s = this.ab(i);
    (this.W0 && this.W0.i.remove(),
      this.lb?.forEach((l) => l.De()),
      (this.W0 = c({
        style: {
          fontSize: "13px",
          fontWeight: 400,
          paddingInline: "0px 16px",
          paddingBlock: "10px 13px",
          minWidth: "160px",
        },
        children: {
          Tg: c({
            style: { marginInlineStart: "10px" },
            children: {
              gt: new Ne({
                Hm: {},
                qm: document.body,
                ce: c({
                  style: { marginInlineStart: "6px", fontSize: "11px" },
                  textContent: {
                    everything: f("showEverything"),
                    namedOnly: f("showNamedItemsOnly"),
                    foldersOnly: f("showFoldersOnly"),
                  }[s],
                }).i,
                Zn: async () => {
                  let l = await T.getSettings(["navColTreeFilter"]),
                    h = this.ab(l.navColTreeFilter),
                    u,
                    d = c({
                      style: { padding: "16px 16px" },
                      children: {
                        header: c({
                          style: {
                            fontSize: "14px",
                            marginInlineStart: "6px",
                            marginBottom: "16px",
                            fontWeight: 600,
                          },
                          textContent: f("navigationFilter"),
                        }),
                        Dw: c({
                          children: {
                            vg: new Qt({
                              fontSize: "12px",
                              $: {},
                              Dc: [
                                { label: f("everything"), name: "everything" },
                                { label: f("namedOnly"), name: "namedOnly" },
                                {
                                  label: f("foldersOnly"),
                                  name: "foldersOnly",
                                },
                              ],
                              Pc: [h],
                              onChange: async ([p]) => {
                                s = p;
                              },
                            }),
                          },
                        }),
                        Pw: c({
                          style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginInlineEnd: "10px",
                          },
                          children: {
                            Cb: new Jt({
                              value: i.hideArchived,
                              fontSize: "12px",
                              label: f("hideArchivedItems"),
                              $: { marginTop: "12px", flex: "0 1 auto" },
                            }),
                          },
                        }),
                        buttons: c({
                          style: {
                            marginTop: "12px",
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "6px",
                          },
                          children: {
                            Zb: new mt({
                              fontSize: "12px",
                              label: f("cancel"),
                              V: !1,
                              tabIndex: void 0,
                              onclick: async () => {
                                u.destroy();
                              },
                            }),
                            Ag: new mt({
                              fontSize: "13px",
                              Cs: { margin: 0, padding: "4px 12px" },
                              label: f("ok"),
                              V: !0,
                              tabIndex: void 0,
                              onclick: async () => {
                                u.destroy();
                                let p = {};
                                ((p.foldersOnly = s === "foldersOnly"),
                                  (p.namedOnly = s === "namedOnly"),
                                  (p.hideArchived = d.u.Cb.$i()),
                                  await T.bt("navColTreeFilter", p),
                                  await this.st());
                              },
                            }),
                          },
                        }),
                      },
                    }),
                    { w, tt: b } = bo(d.i);
                  ((u = new gt({
                    fs: !0,
                    Ul: !0,
                    $r: !1,
                    minWidth: `${w}px`,
                    minHeight: `${b}px`,
                    Sr: `${w}px`,
                    zl: `${b}px`,
                    buttons: [],
                  })),
                    u.Lt({ content: d }));
                },
              }),
            },
          }),
          Jb: c({ style: { marginTop: "8px" } }),
          Eb: Ft({ marginInlineStart: "12px" }),
          P1: c({ style: { marginTop: "12px" } }),
          L1: Ft({ marginInlineStart: "12px" }),
          Ig: c({ style: { height: "2px" } }),
        },
      })),
      this.K1().appendChild(this.W0.i));
    let n = await new ht().ke(),
      r = n.v("root"),
      o = n.v("trash");
    const a = async ({ q: l, hb: h, A: u, filter: d = {} }) => {
      let w = new _e({
        Mn: this.o.i,
        A: u,
        itemId: h.id,
        q: l,
        B: !!d.foldersOnly,
        Ot: !!d.namedOnly,
        On: !!d.hideArchived,
        $s: async (b, p) => {
          if (b) {
            let { h: x, G1: g } = await qt.j1(p);
            await this.Sf.an.e1({
              h: x,
              C: It(h),
              source: "navCol",
              ...(g.id === p ? { itemId: p } : { itemId: g.id, Zi: p }),
            });
          }
        },
        ru: async () => {
          await this.Sf.an.start();
        },
        yi: vi,
        Z: document,
        Go: !["root", "trash", "quickList"].includes(h.id),
        Do: !0,
        Mo: void 0,
      });
      return (await w.st({ h: n }), w);
    };
    ((this.A1 = await a({
      q: "navCol-root",
      hb: r,
      A: this.Y0,
      filter: e.navColTreeFilter,
    })),
      (this.I1 = await a({ q: "navCol-trash", hb: o })),
      (this.lb = [this.A1, this.I1]),
      this.W0.Jb.i.appendChild(this.A1.i),
      this.W0.P1.i.appendChild(this.I1.i));
  }
  async s1({ itemId: e, n1: i = !0 }) {
    (vi.fw(), await this.A1.df(e, i), await this.I1.df(e, i));
  }
  Ge(e) {
    this.lb.forEach((i) => i.Ge(e, i));
  }
}
class pl extends or {
  constructor({ settings: e, Sf: i }) {
    (super({ settings: e, H0: !1, h1: "quickAccessCol" }),
      (this.Sf = i),
      (this.A = new es("quickAccessCol")),
      this.A.lc(({ count: s, A: n }) => i.p0?.u.b0.t1({ count: s, A: n })));
  }
  async st() {
    this.A?.reset();
    let e = await T.getSettings(["quickAccessColSection"]),
      i = e.quickAccessColSection;
    this.Ti = i;
    let s = new ht(),
      n,
      r = i !== "quickList",
      o,
      a = !1;
    (i === "quickList" &&
      (await s.Te({ groupId: "quickList" }),
      (n = f("dragTabsHereForQuickList")),
      (o = "quickList")),
      i === "tasks" &&
        (await s.tl(), (n = f("tasksWillAppearHere")), (o = "root"), (a = !0)),
      (this.L = new _e({
        q: `quickAccessCol-${i}`,
        itemId: o,
        ...(this.A && { A: this.A }),
        $s: async (l, h) => {
          if (l) {
            let { h: u, G1: d } = await qt.j1(h);
            await this.Sf.an.e1({
              h: u,
              C: !1,
              source: "quickAccessCol",
              ...(d.id === h ? { itemId: h } : { itemId: d.id, Zi: h }),
            });
          }
        },
        yi: vi,
        Z: document,
        Po: !0,
        ga: n,
        ou: r,
        On: a,
        Ss: !0,
        Ht: i === "tasks",
      })),
      await this.L.st({ h: s }),
      (this.cb = c({
        style: {
          paddingInline: "0px 16px",
          paddingBlock: "13px 13px",
          minWidth: "160px",
        },
        children: {
          nx: new Qt({
            fontSize: "12px",
            $: {},
            Dc: [
              { label: f("quickList"), name: "quickList" },
              { label: f("tasks"), name: "tasks" },
            ],
            Pc: [e.quickAccessColSection],
            onChange: async ([l]) => {
              (await T.bt("quickAccessColSection", l), await this.st());
            },
          }),
          Og: c({ style: { marginTop: "8px" } }),
          ...(i === "tasks" && {
            Qb: c({
              style: {
                display: "none",
                justifyContent: "space-between",
                alignItems: "flex-start",
                fontSize: "12px",
                marginInlineStart: "12px",
                marginBottom: "8px",
              },
              children: {
                summary: c({ textContent: "..." }),
                Kp: c({ textContent: "..." }),
              },
            }),
          }),
          content: c({ style: {}, p: this.L.o.i }),
        },
      })),
      await this.xw(s),
      this.K1().replaceChildren(this.cb.i));
  }
  async xw(e) {
    if (this.Ti === "tasks") {
      await e.tl();
      let { Kp: i, cl: s, Xp: n } = e.ll("root"),
        r = this.cb.u.Qb;
      ((r.i.style.display = i ? "flex" : "none"),
        (r.summary.i.textContent = [
          C("pendingTaskCount", s),
          C("doneTaskCount", n),
          C("taskTotalCount", i),
        ].join(", ")),
        (r.Kp.i.textContent = s ? `${Number(s).toLocaleString()}` : ""));
    }
  }
  async Ge(e) {
    await this.L.Ge(e, this.L);
  }
  async s1({ itemId: e, n1: i = !0 }) {
    await this.L.df(e, i);
  }
}
async function ks() {
  let t,
    e,
    i = new gt({
      fs: !0,
      Ul: !0,
      $r: !1,
      minWidth: "400px",
      Sr: "400px",
      buttons: [],
      Bo: () => e(),
    }),
    s = c({
      style: {
        padding: "30px 40px 30px 40px",
        maxWidth: "400px",
        lineHeight: "1.8em",
      },
      children: {
        sx: c({
          style: {
            position: "absolute",
            insetInlineEnd: "25px",
            top: "21px",
            padding: "6px",
            cursor: "pointer",
          },
          p: z(
            { dimension: "12px" },
            (n) => `images/cross${n ? "" : "-dark"}.png`,
          ),
          onclick: (n) => i.destroy(),
        }),
        gx: c({
          style: {},
          children: {
            Kb: new la({
              style: {
                maxWidth: "100%",
                marginBottom: "0px",
                marginInlineStart: "0",
              },
              To: "autoActionOnOpen",
              heading: f("modalOptionAutoActionOnOpenHeading"),
              options: [
                {
                  settingValue: "trash",
                  title: f("optionAutoActionOnOpenTrashTitle"),
                  xi: f("modalOptionAutoActionOnOpenTrashDesc"),
                },
                {
                  settingValue: "open",
                  title: f("optionAutoActionOnOpenOpenTitle"),
                  xi: f("modalOptionAutoActionOnOpenOpenDesc"),
                },
              ],
            }),
          },
        }),
        _f: new mt({
          label: f("saveChoice"),
          V: !0,
          tabIndex: void 0,
          fontSize: "14px",
          $: { flex: "0 0 auto", marginInlineStart: "-5px", marginTop: "10px" },
          onclick: async () => {
            (await T.Ve("autoActionOnOpenOptionChosen", !0),
              T.kx(),
              t(),
              i.destroy());
          },
        }),
        Ix: c({
          style: { marginTop: "20px", marginBottom: "-10px", fontSize: "12px" },
          innerHTML: f("changeThisSettingAtAnyTimeInfoHtml"),
        }),
      },
    });
  return (
    await s.u.Kb.Lt(),
    i.Lt({ content: s }),
    new Promise((n, r) => {
      ((t = n), (e = r));
    })
  );
}
async function ml() {
  let t,
    e,
    i = new gt({
      fs: !0,
      Ul: !0,
      $r: !1,
      minWidth: "400px",
      Sr: "400px",
      buttons: [],
      Bo: () => e(),
    }),
    s = c({
      style: { padding: "20px 30px", maxWidth: "400px", lineHeight: "1.5em" },
      children: {
        body: c({
          style: { fontSize: "13px" },
          children: {
            heading: c({
              style: {
                fontWeight: "600",
                fontSize: "14px",
                paddingBottom: "14px",
              },
              textContent: f("modalUpdateToV2Heading"),
            }),
            ct: c({
              style: { paddingBottom: "12px" },
              textContent: f("modalUpdateToV2UseOneTabLikeBefore"),
            }),
            Fx: c({
              style: { paddingBottom: "6px" },
              innerHTML: f("modalUpdateToV2QuickTourHtml"),
            }),
          },
        }),
        _f: new mt({
          label: f("gotIt"),
          V: !0,
          tabIndex: void 0,
          fontSize: "13px",
          $: { flex: "0 0 auto", marginInlineStart: "-5px", marginTop: "10px" },
          onclick: async () => {
            (await T.Ve("v1ToV2UpdateModalDismissed", !0), t(), i.destroy());
          },
        }),
      },
    });
  return (
    i.Lt({ content: s }),
    new Promise((n, r) => {
      ((t = n), (e = r));
    })
  );
}
async function xl() {
  if (!window.localStorage.state || window.localStorage.stateMigrateDate)
    return;
  let t = !1;
  (await self.navigator.locks.request("v1Migration", async () => {
    async function e(r, o) {
      let a = {};
      ((a[r] = o), await chrome.storage.local.set(a));
    }
    async function i(r) {
      return (await chrome.storage.local.get(r))[r];
    }
    let s = async (r) => {
      let o = await i(r);
      return window.localStorage[r] && !o
        ? (await e(r, window.localStorage[r]),
          window.localStorage.removeItem(r),
          !0)
        : !1;
    };
    ((t = (await s("extensionKey")) || t), (t = (await s("settings")) || t));
    let n = await i("installDate");
    if (
      (window.localStorage.installDate &&
        ((!n || parseInt(n) > parseInt(window.localStorage.installDate)) &&
          ((t = !0),
          await e("installDate", parseInt(window.localStorage.installDate))),
        window.localStorage.removeItem("installDate")),
      window.localStorage.state)
    ) {
      let r = JSON.parse((await i("state")) || "{}");
      r.tabGroups || (r.tabGroups = []);
      let o = r.tabGroups,
        a = window.localStorage.state,
        h = JSON.parse(a).tabGroups;
      if (h) {
        for (let u of h) o.push(u);
        (await e("state", JSON.stringify(r)),
          window.localStorage.removeItem("state"),
          (window.localStorage.oldState = a),
          (window.localStorage.stateMigrateDate = new Date().getTime()),
          window.localStorage.removeItem("topSites"),
          (t = !0));
      }
    }
  }),
    t && (await T.Xy()));
}
Br(wl);
const S = new Yo();
async function wl() {
  if (!(await Da(document.getElementById("contentAreaDiv")))) {
    document.getElementById("loadingSpinner").remove();
    return;
  }
  Ra();
  async function t() {
    return await chrome.tabs.getCurrent();
  }
  if (!(await T.FI((await t()).id))) {
    (await Fa(), await Va(), await xl(), await Rs(!0), await Ta());
    try {
      await vl();
    } catch (i) {
      throw i;
    }
    (Tl(),
      kl(),
      await ur(),
      Il(),
      !(await T._e("v1ToV2UpdateModalDismissed")) &&
        !(await T._e("wasV2UserBefore2.5")) &&
        Ds(await T._e("origInstallVersion"), "2") &&
        (await ml()));
    try {
      await yl();
    } catch (i) {
      console.log(`maybePromptForStateMigratedToIDBRemigration failed: ${i}`);
    }
  }
}
async function yl() {
  let t = await T.cI(),
    e = await T.jI(t);
  if (!e?.showModal) return;
  let i = e.wI;
  if (!Number.isFinite(i))
    throw new Error(
      `Invalid remigrationModalInfo.totalTabsAcrossStateBackups: ${i}`,
    );
  await bl({ Vb: i, Xb: t });
}
async function bl({ Vb: t, Xb: e }) {
  return await new Promise((i) => {
    let s = { action: "notNow" },
      n = !1,
      r = new gt({
        fs: !1,
        Ul: !1,
        $r: !1,
        minWidth: "430px",
        Sr: "430px",
        buttons: [],
        Bo: () => i(s),
      }),
      o = new mt({
        label: f("modalRemigrationDontAskAgain"),
        fontSize: "13px",
        tabIndex: 2,
        onclick: async () => {
          n || (await T.VI(), (s = { action: "dontAskAgain" }), r.destroy());
        },
      }),
      a = new mt({
        label: f("modalRemigrationNotNow"),
        fontSize: "13px",
        tabIndex: 1,
        onclick: async () => {
          n || ((s = { action: "notNow" }), r.destroy());
        },
      }),
      l = new mt({
        label: f("modalRemigrationYes"),
        fontSize: "13px",
        V: !0,
        tabIndex: 0,
        onclick: async () => {
          if (!n) {
            n = !0;
            try {
              ((s = { action: "yes", $g: await T.mI({ ...e }) }), r.destroy());
            } catch (u) {
              ((n = !1), await Pt(String(u?.message ?? u)));
            }
          }
        },
      }),
      h = c({
        style: { padding: "22px 30px", maxWidth: "430px", lineHeight: "1.5em" },
        children: {
          body: c({
            style: { fontSize: "14px" },
            textContent: C("modalRemigrationTabsFoundPrompt", t),
          }),
          controls: c({
            style: {
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "8px",
            },
            children: { Mg: o, Sg: a, Dg: l },
          }),
          Qx: c({
            style: { marginTop: "24px", fontSize: "12px", lineHeight: "1.4em" },
            innerHTML: f("modalRemigrationFooterHtml"),
          }),
        },
      });
    (r.Lt({ content: h }), setTimeout(() => l.o.p.focus(), 1));
  });
}
let lr = !1,
  hr = 0;
function gl() {
  st?.an?.o?.i && (st.an.o.i.scrollTop = 0);
  let t = st?.an?.uo;
  !t || t.Tw || !t.As || st.an.o.u.Q0?.o?.u?.Ei?.o?.u?.Oi?.le(!0);
}
function kl() {
  window.addEventListener("beforeprint", () => {
    let t = +new Date();
    t - hr < 1500 ||
      ((hr = t),
      !gt.Is &&
        (gl(), Pt(f("printUseSaveTabsAsHtmlFileAlertHtml"), { Iu: !0 })));
  });
}
function cr(t) {
  let e = Array.from(document.getElementsByClassName("tabGroup")).filter(
    (i) => {
      let s = Array.from(i.getElementsByClassName("tabLink")).map(
        (n) => n.href,
      );
      return s.length > 0 && s[0] === t;
    },
  );
  if (e.length === 0) throw new Error("No matching tab group");
  if (e.length > 1) throw new Error("More than one matching tab group");
  return e;
}
function Tl() {
  let t = {
    ping: async (e, i, s) => {
      (await Gs(
        1e4,
        "waiting for contentAreaDiv to appear",
        () => !!document.getElementById("contentAreaDiv"),
      ),
        s({ pong: !0 }));
    },
    getVisibility: async (e, i, s) => {
      s({ visibility: document.visibilityState });
    },
    redisplayCenterCol: async (e, i, s) => {
      (await st.an.Ib(), s());
    },
    copyToClipboardFormatChange: async (e, i, s) => {
      ((st.nc = await T.ks("copyToClipboardFormat")), s());
    },
    testExtFavIconLoad: async (e, i, s) => {
      let n = document.createElement("img");
      ((n.style.borderStyle = "none"),
        (n.style.width = "16px"),
        (n.style.height = "16px"),
        (n.onload = () => {
          s({ success: !0 });
        }),
        (n.onerror = () => {
          s({ success: !1 });
        }),
        (n.src = Jn("example.com")));
    },
    getVisibleStructure: async (e, i, s) => {
      (await Gs(
        1e4,
        "waiting for tab groups to appear in onetab",
        () => !!document.getElementById("tabGroupsDiv"),
      ),
        s({
          Rf: Ps(document.getElementById("headerText").textContent),
          tabGroups: Array.from(
            document.getElementsByClassName("tabGroup"),
          ).map((n) => ({
            Fg: Ps(n.getElementsByClassName("tabCount")[0].textContent),
            Lg: n.getElementsByClassName("tabGroupLabelText")[0].textContent,
            Pg: n.getElementsByClassName("starImg")[0].style.display !== "none",
            locked:
              n.getElementsByClassName("lockImg")[0].style.display !== "none",
            tabs: Array.from(n.getElementsByClassName("tabLink")).map(
              (r) => r.href,
            ),
          })),
        }));
    },
    clickTab: async (e, i, s) => {
      let n = Array.from(document.getElementsByClassName("tabLink")).find(
        (r) => r.href === e.url,
      );
      if (!n) throw new Error("tab with specified url not found");
      (n.onclick(new MouseEvent("click", e.ub)), s());
    },
    clickTabGroupButton: async (e, i, s) => {
      let r = cr(e._b)[0].getElementsByClassName(e.jg)[0];
      lr = !0;
      let o = e.Yb ? e.Yb : "click";
      (r.dispatchEvent(new MouseEvent(o, e.ub ? e.ub : {})), (lr = !1), s());
    },
    getTabGroupElementDisplayed: async (e, i, s) => {
      let r = cr(e._b)[0].getElementsByClassName(e.Gg)[0];
      s({ dt: r.style.display !== "none" });
    },
    navigateToItem: async ({ itemId: e, Zi: i }, s, n) => {
      (Vt({ itemId: e, Zi: i }), n());
    },
    triggerSearch: async ({ query: e }, i, s) => {
      (await st.Hd({ query: e }), s());
    },
  };
  chrome.runtime.onMessage.addListener((e, i, s) => {
    let n = t[e.type];
    if (n)
      return (
        (async () => {
          try {
            await n(e, i, s);
          } catch (r) {
            s({ error: String(r), Eg: String(r.stack) });
          }
        })(),
        !0
      );
  });
}
let st;
async function vl() {
  ((st = new Al()), (window.Sf = st), await st.tg());
}
function Xe({ label: t, St: e }) {
  return c({
    className: "headerControl",
    style: {
      display: "inline-block",
      fontSize: "11px",
      whiteSpace: "nowrap",
      cursor: "pointer",
      color: "var(--text-color)",
      padding: "2px 6px",
      borderRadius: "8px",
    },
    textContent: t,
    onclick: (i) => e(i),
  });
}
function Ti() {
  return c({
    style: {
      display: "inline-block",
      fontSize: "12px",
      whiteSpace: "nowrap",
      marginInline: "3px",
      color: "#eee",
    },
    textContent: "|",
    onclick,
  });
}
let vi = new ba();
class Al {
  constructor() {}
  async tg() {
    ((this.li = (await T.Sx()) || (await Ls())),
      (this.O1 = []),
      (this.fb = (e) => {
        this.O1.push(e);
      }),
      Sn((e) => {
        this.fb(e);
      }),
      (this.li = (await T.Sx()) || (await Ls())),
      await this.eg(),
      await this.ig(),
      this.i1(),
      (st.nc = await T.ks("copyToClipboardFormat")),
      (document.body.onkeydown = (e) => {
        e.key === "Backspace" && this.an.o.u.Q0?.o.u.Xh?.onclick(e);
      }));
  }
  i1() {
    this.an?.o?.u?.body?.items?.i?.focus({ preventScroll: !0 });
  }
  Uw(e) {
    return {
      centerCol: this.an.A,
      navCol: this.g0.Y0,
      quickAccessCol: this.ww.A,
    }[e];
  }
  async eg() {
    let e = await T.getSettings([
      ...["navCol", "quickAccessCol"].flatMap((s) =>
        ["Width", "Expanded"].map((n) => `${s}${n}`),
      ),
    ]);
    ((this.g0 = new fl({ settings: e, Sf: this })),
      (this.ww = new pl({ settings: e, Sf: this })),
      (this.an = new qt({ Sf: this, li: this.li })));
    let i = [this.g0.Y0, this.an.A, this.ww.A];
    (i.forEach((s) =>
      s.lc(({ count: n }) => {
        n && i.filter((r) => r !== s).forEach((r) => r.reset());
      }),
    ),
      await this.an.st(),
      await this.g0.st(),
      await this.ww.st(),
      [this.ww.o.R1.i].forEach((s) =>
        s.addEventListener("wheel", (n) => {
          let r = this.an.o.i;
          ((s.scrollHeight - s.scrollTop === s.clientHeight && n.deltaY > 0) ||
            (s.scrollTop === 0 && n.deltaY < 0)) &&
            (r.scrollTop = r.scrollTop + n.deltaY);
        }),
      ));
  }
  async ig() {
    ((this.p0 = Ge(document.getElementById("contentAreaDiv"), void 0, {
      style: { padding: "0", margin: "0" },
      children: {
        header: c({
          style: {
            position: "fixed",
            top: 0,
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            backgroundColor: "var(--header-bg-color)",
            zIndex: 100,
          },
          children: {
            Rw: c({
              style: {
                display: "inline-block",
                marginBlock: "9px 10px",
                marginInline: "34px 0px",
                height: 86 / 2 + "px",
                minWidth: 310 / 2 + "px",
                width: 310 / 2 + "px",
              },
              children: {
                vf: z(
                  {
                    width: 310 / 2 + "px",
                    height: 86 / 2 + "px",
                    style: { cursor: "pointer", top: "1px" },
                    St: async () =>
                      await chrome.tabs.create({ url: we, active: !0 }),
                  },
                  (s) =>
                    `images/top-left-logo-sml-${s ? "light" : "dark"}${U() ? "" : "-rtl"}.png`,
                ),
              },
            }),
            Bg: c({
              style: {
                marginInline: "36px 16px",
                marginBlock: "13px 5px",
                flex: "1 0 350px",
              },
              children: { b0: new dl({ Sf: this, Eh: await ot("root") }) },
            }),
            pb: c({
              style: {
                marginTop: "8px",
                marginInlineStart: "30px",
                marginInlineEnd: "25px",
                display: "inline-block",
              },
              children: {
                Ox: c({
                  style: {
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  children: {
                    mb: Xe({
                      label: f("privacyFirst"),
                      St: (s) => {
                        (s.stopPropagation(),
                          new X({
                            init: (n) =>
                              (n.o.u.sx.i.onclick = (r) => n.destroy()),
                            ca: this.p0.header.pb.Ox.mb.i,
                            borderRadius: "10px",
                            la: c({
                              style: {},
                              children: {
                                body: c({
                                  style: {
                                    fontSize: "12px",
                                    maxWidth: "360px",
                                    padding: "28px 36px",
                                  },
                                  p: c({
                                    className: "info-dialog",
                                    children: {
                                      header: c({
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          fontSize: "16px",
                                          fontWeight: 600,
                                        },
                                        children: {
                                          sg: z(
                                            {
                                              style: {
                                                flex: "0 0 auto",
                                                marginInlineEnd: "10px",
                                                position: "relative",
                                                top: "-1px",
                                              },
                                              dimension: "16px",
                                            },
                                            (n) =>
                                              `images/lock${n ? "" : "-dark"}.png`,
                                          ),
                                          title: c({
                                            style: { flex: "1 0 auto" },
                                            textContent: f("privacyFirst"),
                                          }),
                                          sx: c({
                                            style: {
                                              flex: "0 0 auto",
                                              padding: "6px",
                                              cursor: "pointer",
                                            },
                                            p: z(
                                              { dimension: "12px" },
                                              (n) =>
                                                `images/cross${n ? "" : "-dark"}.png`,
                                            ),
                                          }),
                                        },
                                      }),
                                      ...Object.fromEntries(
                                        f("privacyFirstMessage")
                                          .split(
                                            `
`,
                                          )
                                          .map((n, r) => [
                                            `_${r}`,
                                            c({
                                              style: { fontSize: "13px" },
                                              textContent: n,
                                            }),
                                          ]),
                                      ),
                                    },
                                  }),
                                }),
                              },
                            }),
                          }));
                      },
                    }),
                    Hg: Ti(),
                    Ng: Xe({
                      label: f("backupAndSync"),
                      St: (s) => {
                        (s.stopPropagation(),
                          new X({
                            init: (n) =>
                              (n.o.u.sx.i.onclick = (r) => n.destroy()),
                            ca: this.p0.header.pb.Ox.mb.i,
                            borderRadius: "10px",
                            la: c({
                              style: {},
                              children: {
                                body: c({
                                  style: {
                                    fontSize: "12px",
                                    maxWidth: "360px",
                                    padding: "28px 36px",
                                  },
                                  p: c({
                                    className: "info-dialog",
                                    children: {
                                      header: c({
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          fontSize: "16px",
                                          fontWeight: 600,
                                        },
                                        children: {
                                          sg: z(
                                            {
                                              style: {
                                                flex: "0 0 auto",
                                                marginInlineEnd: "10px",
                                                position: "relative",
                                                top: "-1px",
                                              },
                                              dimension: "16px",
                                            },
                                            (n) =>
                                              `images/sync${n ? "" : "-dark"}.png`,
                                          ),
                                          title: c({
                                            style: { flex: "1 0 auto" },
                                            textContent: f(
                                              "encryptedSyncAndBackup",
                                            ),
                                          }),
                                          sx: c({
                                            style: {
                                              flex: "0 0 auto",
                                              padding: "6px",
                                              cursor: "pointer",
                                            },
                                            p: z(
                                              { dimension: "12px" },
                                              (n) =>
                                                `images/cross${n ? "" : "-dark"}.png`,
                                            ),
                                          }),
                                        },
                                      }),
                                      ...Object.fromEntries(
                                        f(
                                          "encryptedSyncAndBackupComingSoonMessage",
                                        )
                                          .split(
                                            `
`,
                                          )
                                          .map((n, r) => [
                                            `_${r}`,
                                            c({
                                              style: { fontSize: "13px" },
                                              textContent: n,
                                            }),
                                          ]),
                                      ),
                                    },
                                  }),
                                }),
                              },
                            }),
                          }));
                      },
                    }),
                    ng: Ti(),
                    zg: new ul(),
                  },
                }),
                ct: c({
                  style: { whiteSpace: "nowrap", marginTop: "1px" },
                  children: {
                    Gx: Xe({
                      label: f("help"),
                      St: async (s) => {
                        (await T.bt("v2HelpShown", "true"),
                          await chrome.tabs.create({ url: en(), active: !0 }));
                      },
                    }),
                    ng: Ti(),
                    Ug: Xe({
                      label: f("importAndExport"),
                      St: (s) => T.Zx("import-export.html"),
                    }),
                    Wg: Ti(),
                    qg: Xe({
                      label: f("options"),
                      St: (s) => T.Zx("options.html"),
                    }),
                  },
                }),
              },
            }),
          },
        }),
        body: c({
          style: {
            marginTop: "63px",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            backgroundColor: "var(--col-bg-color)",
          },
          children: { g0: this.g0, an: this.an, ww: this.ww },
        }),
      },
    })),
      (this.M1 = this.p0.header.i.offsetHeight),
      new ResizeObserver((n) => {
        for (const r of n) {
          const o = r.borderBoxSize[0].blockSize;
          this.M1 !== o &&
            (Qe({
              i: this.p0.body.i,
              duration: 150,
              Uc: !0,
              zc: [
                { name: "marginTop", before: `${this.M1}px`, after: `${o}px` },
              ],
            }),
            (this.M1 = o));
        }
      }).observe(this.p0.header.i));
    let e = (s) => {
      (this.an.Ge(s), this.g0.Ge(s), this.ww.Ge(s), this.p0.u.b0.qb());
    };
    for (; this.O1.length > 0; ) {
      let s = this.O1.shift();
      e(s);
    }
    ((this.fb = e), document.getElementById("loadingSpinner").remove());
    let { query: i } = (await Te().Lp("triggerSearch")) ?? {};
    if (i) await st.Hd({ query: i });
    else {
      let { itemId: s, Zi: n } = (await Te().Lp("navigateToItem")) ?? {
        itemId: "root",
      };
      await Vt({ itemId: s, Zi: n });
    }
  }
  async Hd({ query: e, Xu: i }) {
    if (!i) {
      let s = await ot("root");
      fe(this.p0.u.b0, (n) => {
        n.Xu && n.Xu !== "root" && (delete n.Xu, n.o.u.f1.Ns(s, !1));
      });
    }
    if ((await this.p0.u.b0.Ct.Hd({ query: e }), i)) {
      let s = await ot(i);
      await this.p0.u.b0.o.u.f1.Ns(s, !0);
    }
  }
}
async function ur() {
  (await Te().put("aliveIndicator", +new Date()), setTimeout(ur, 1e4));
}
async function Vt({ itemId: t, Zi: e }) {
  (await st.g0.s1({ itemId: t, n1: !1 }),
    await st.an.e1({ itemId: t, Zi: e, C: await Vi(t), source: "navCol" }));
}
function Il() {
  (window.addEventListener("online", async () => {
    await T.RI();
  }),
    navigator.onLine && T.RI());
  function t() {
    setTimeout(async () => {
      (await T.RI(), t());
    }, 1e3 * 3600);
  }
  t();
}
const Ts = 1e3;
async function dr(t) {
  let e = await ot(t),
    s = (await T.Vy(e.id)).some(F),
    n = await T.ks("shareExpiryPeriod"),
    { items: r } = await T.Hx({ groupId: t, bm: !0 }),
    o = r.map((d) => d.modifyDate).reduce((d, w) => (w > d ? w : d), -1 / 0),
    a = e.shared && o > e.shareContentDate,
    l = r.filter(B).length > Ts,
    h = new gt({ fs: !0, Ul: !0, $r: !1, buttons: [] }),
    u = c({
      style: { paddingInline: "22px 16px", paddingBlock: "16px" },
      children: {
        header: c({
          style: {
            fontSize: "14px",
            marginBottom: "16px",
            fontWeight: 600,
            minWidth: "240px",
          },
          textContent: e.shared ? f("sharedPageOptions") : f("shareAsAWebPage"),
        }),
        rg: c({
          style: { display: e.shared ? "flex" : "none", fontSize: "12px" },
          children: {
            label: c({
              style: { marginInlineEnd: "4px" },
              textContent: f("expiresColon"),
            }),
            value: c({ textContent: Ns(new Date(e.shareExpiryDate)) }),
            Rg: L("a", {
              style: {
                cursor: "pointer",
                fontSize: "12px",
                textDecoration: "underline",
                marginInlineStart: "12px",
              },
              textContent: "modify",
              onclick: (d) => {
                (d.preventDefault(),
                  (u.u.rg.i.style.display = "none"),
                  (u.u.xb.i.style.display = "flex"));
              },
            }),
          },
        }),
        xb: c({
          style: { display: e.shared ? "none" : "flex" },
          children: {
            og: new oa({
              iw: n,
              eo: [
                { name: "1d", label: C("dayCount", 1) },
                { name: "3d", label: C("dayCount", 3) },
                { name: "7d", label: C("dayCount", 7) },
                { name: "30d", label: C("dayCount", 30) },
                { name: "90d", label: C("dayCount", 90) },
                { name: "1y", label: C("yearCount", 1) },
                { name: "2y", label: C("yearCount", 2) },
                { name: "5y", label: C("yearCount", 5) },
              ],
              Z: h.o.p.i,
              label: f("expiresColon"),
              D: f("sharedPageWillAutomaticallyExpire"),
            }),
          },
        }),
        Pw: c({
          style: { display: "block" },
          children: {
            ag: new Jt({
              value: e.shareIncludeNotes ?? (await T.ks("shareIncludeNotes")),
              fontSize: "12px",
              label: f("includeNotes"),
              D: f("chooseToIncludeNotes"),
              $: { marginTop: "12px", flex: "0 1 auto" },
            }),
            lg: new Jt({
              value:
                e.shareIncludeRatings ?? (await T.ks("shareIncludeRatings")),
              fontSize: "12px",
              label: f("includeStarRatings"),
              D: f("chooseToIncludeRatings"),
              $: { marginTop: "4px", flex: "0 1 auto" },
            }),
          },
        }),
        ...(s && {
          Cg: c({
            style: {
              display: "block",
              fontSize: "12px",
              marginTop: "12px",
              maxWidth: "300px",
            },
            textContent: f("subFoldersNotShared"),
          }),
        }),
        ...(l && {
          Zg: c({
            style: {
              display: "block",
              fontSize: "12px",
              marginTop: "12px",
              maxWidth: "300px",
            },
            textContent: C("sharedPageTabLimit", Ts),
          }),
        }),
        ...(a && {
          Jg: c({
            style: {
              display: "block",
              fontSize: "12px",
              marginTop: "12px",
              maxWidth: "300px",
            },
            textContent: f("changesMadeSinceSharedPageCreation"),
          }),
        }),
        buttons: c({
          style: {
            marginTop: "12px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "6px",
          },
          children: {
            Zb: new mt({
              fontSize: "12px",
              label: f("cancel"),
              V: !1,
              tabIndex: void 0,
              onclick: async () => h.destroy(),
            }),
            ...(ri(e) && {
              Qg: new mt({
                fontSize: "12px",
                label: f("unshare"),
                V: !1,
                tabIndex: void 0,
                onclick: async () => {
                  let d = await T.vy(e.id);
                  (h.destroy(),
                    d.success ||
                      (await Pt(
                        f("cannotConnectToServerDeletionRequestQueued"),
                      )));
                },
              }),
            }),
            Kg: new mt({
              fontSize: "13px",
              Cs: { margin: 0, padding: "4px 12px" },
              label: e.shared ? f("update") : f("share"),
              V: !0,
              tabIndex: void 0,
              onclick: async () => {
                if (!(await Ua())) {
                  await Pt(f("permissionRequiredPleaseTryAgain"));
                  return;
                }
                let w = ri(e),
                  b = u.u.og.Gd,
                  p = fr(b),
                  x = w && u.u.xb.i.style.display !== "none";
                x && (await T.bt("shareExpiryPeriod", b));
                let g = u.u.ag.value,
                  y = w && g != e.shareIncludeNotes;
                await T.bt("shareIncludeNotes", g);
                let k = u.u.lg.value,
                  m = w && k != e.shareIncludeRatings;
                if ((await T.bt("shareIncludeRatings", k), w)) {
                  let v = y || m || a || x;
                  ((x || y || m) &&
                    (await T.Fi(e.id, {
                      ...(y && { shareIncludeNotes: g }),
                      ...(m && { shareIncludeRatings: k }),
                      ...(x && { shareExpiryPeriod: b, shareExpiryDate: p }),
                      ...(v && { shareContentDate: +new Date() }),
                    })),
                    (
                      await T.oI(
                        {
                          shareId: e.shareId,
                          key: e.shareKey,
                          action: "update",
                          ...(x && { expiryDate: p }),
                          ...(v && {
                            content: await pr({ itemId: t, Ps: g, wb: k }),
                          }),
                        },
                        !1,
                      )
                    ).success || (await Pt(f("serverUnreachable"))));
                } else {
                  let v = await T._e("installId"),
                    A = await T._e("accountId"),
                    D = fr(b);
                  try {
                    let M = Do();
                    await T.Fi(t, {
                      shareIncludeNotes: g,
                      shareIncludeRatings: k,
                      shareKey: M,
                      shareExpiryDate: D,
                    });
                    let N = await pr({ itemId: t, Ps: g, wb: k }),
                      Z = await kr(we + "/api/createPage", {
                        language: hi(),
                        installId: v,
                        ...(A && { accountId: A }),
                        expiryDate: D,
                        key: M,
                        version: 3,
                        content: N,
                      });
                    (await T.Fi(t, {
                      shared: 1,
                      shareId: Z.id,
                      shareContentDate: +new Date(),
                    }),
                      await chrome.tabs.create({ url: zn(Z.id), active: !0 }));
                  } catch (M) {
                    (console.log(M), await Pt(f("serverUnreachable")));
                  }
                }
                h.destroy();
              },
            }),
          },
        }),
      },
    });
  h.Lt({ content: u });
}
function fr(t) {
  let e = +new Date();
  const [i, s] = t.match(/\d+|\D+/g);
  return ((e += +i * { d: 1, w: 7, m: 30, y: 365 }[s] * 1e3 * 3600 * 24), e);
}
async function pr({ itemId: t, Ps: e, wb: i }) {
  let { items: s } = await T.Hx({ groupId: t, bm: !0 }),
    n = new Set([
      "id",
      "type",
      "groupType",
      "childIds",
      "label",
      "title",
      "url",
    ]);
  (e && n.add("notes"), i && n.add("rating"));
  let r = (u) =>
    Object.fromEntries(Object.entries(u).filter(([d, w]) => n.has(d)));
  s = s.map(r);
  let o = new Map(s.map((u) => [u.id, u])),
    a = s.find(Jr(t)),
    l = new Map();
  const h = (u, d) => {
    if (!l.has(u.id)) {
      let b = { ...u };
      (Y(u) && (b.childIds = []), l.set(u.id, b));
    }
    let w = l.get(u.id);
    if (Y(w))
      for (let b of u.childIds) {
        let p = o.get(b);
        p && d.yb && (B(p) && d.yb--, w.childIds.push(b), h(p, d));
      }
  };
  return (h(a, { yb: Ts }), { itemId: t, items: [...l.values()] });
}
