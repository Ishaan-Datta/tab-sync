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
  trimToLengthWithEllipsis: Nn,
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
class oc {
  constructor({
    parent: e,
    label: i,
    ym: s,
    Xa: n,
    isEnabled: r,
    Yo: o,
    className: a,
  }) {
    ((this.div = Ge(e, "div", {
      style: {
        paddingInlineEnd: s + "px",
        display: "inline-block",
        fontSize: "12px",
        cursor: "pointer",
        color: "var(--link-color)",
      },
      className: a,
      textContent: i,
      onclick: (l) => {
        this.isEnabled ? n(l, this.div) : this.Yo && this.Yo(l);
      },
    }).i),
      this.setEnabled(r),
      (this.Yo = o));
  }
  setEnabled(e) {
    ((this.isEnabled = e),
      this.isEnabled
        ? (this.div.style.color = "")
        : (this.div.style.color = "var(--text-color-weak)"));
  }
}
class mt {
  constructor({
    label: e,
    fontSize: i = "14px",
    dt: s = !0,
    V: n,
    onclick: r,
    tabIndex: o,
    $: a,
    Cs: l,
    Be: h,
    Yi: u = !1,
    vi: d,
    Hs: w,
    _i: b,
    Ai: p,
    Wn: x = !1,
  }) {
    ((this.label = e),
      (this.fontSize = i),
      (this.onclick = r),
      (this.tabIndex = o),
      (this.Be = h),
      (this.Yi = u),
      (this.vi = d),
      (this.Hs = w),
      (this.Ai = p),
      (this._i = b),
      (this.Cs = l),
      (this.Wn = x),
      (this.o = c({
        className: "button-outer" + (n ? " button-default-outer" : ""),
        style: { margin: 0, ...(a ?? {}) },
        p: c({}).i,
      })),
      this.Wt(s),
      this.Xt(this.label));
  }
  gm() {
    this.onclick();
  }
  wl(e) {
    ((this._o = e),
      e
        ? (this.o.i.classList.remove("button-outer", "button-default-outer"),
          (this.o.p.style.backgroundColor = "transparent"),
          (this.o.p.style.cursor = "default"),
          this.o.p.classList.remove("button", "button-hover-bg-change"))
        : (this.o.i.classList.add("button-outer", "button-default-outer"),
          (this.o.p.style.backgroundColor = ""),
          (this.o.p.style.cursor = "pointer"),
          this.o.p.classList.add("button", "button-hover-bg-change")));
  }
  Wt(e) {
    this.o.i.style.display = e ? "inline-block" : "none";
  }
  Xt(e) {
    this.label = e;
    let { o: i, m: s } = Xo({
      xl: "div",
      className: this._o ? "" : "button button-hover-bg-change",
      ah: () => this._o,
      label: this.label,
      fontSize: this.fontSize,
      onclick: this.onclick,
      tabIndex: this.tabIndex,
      Be: this.Be,
      Yi: this.Yi,
      vi: this.vi,
      Hs: this.Hs,
      Ai: this.Ai,
      _i: this._i,
      Wn: this.Wn,
      style: {
        ...this.Cs,
        ...(this._o && { backgroundColor: "transparent", cursor: "default" }),
      },
    });
    ((this.m ?? []).forEach((r) => r.remove()), (this.m = s));
    let n = i.i;
    (this.o.p.replaceWith(n), (this.o.p = n));
  }
  destroy() {
    ((this.m ?? []).forEach((e) => e.remove()),
      (this.m = null),
      (this.onclick = null));
  }
}
function Xi(t) {
  return c({
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      color: "var(--text-color)",
      fontWeight: 400,
      userSelect: "none",
    },
    textContent: t,
  });
}
function Xo({
  xl: t,
  className: e,
  label: i,
  fontSize: s,
  onclick: n,
  ah: r,
  tabIndex: o = -1,
  style: a = {},
  Be: l,
  Yi: h,
  vi: u,
  Hs: d,
  Ai: w,
  _i: b,
  Wn: p,
}) {
  let x = [],
    g = !1;
  return {
    o: L(t, {
      style: {
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...(l && { gap: "6px" }),
        cursor: "pointer",
        fontSize: s,
        lineHeight: "normal",
        ...(h || l ? {} : { padding: "6px 10px" }),
        ...a,
      },
      className: e,
      init: (k) => {
        let m = async (v) => {
          if (!r?.() && !g) {
            ((g = !0),
              (k.bl.style.display = "inline-block"),
              (k.i.style.cursor = "wait"));
            try {
              await n(v, k);
            } catch (A) {
              console.log(A);
            } finally {
              ((k.bl.style.display = "none"),
                (k.i.style.cursor = "pointer"),
                (g = !1));
            }
          }
        };
        (x.push(
          tt(k.i, "click", async (v) => {
            await m(v);
          }),
        ),
          x.push(
            tt(k.i, "keydown", async (v) => {
              v.key === "Enter" &&
                document.querySelector(":focus-visible") === k.i &&
                (v.stopPropagation(), await m(v));
            }),
          ));
      },
      tabIndex: o,
      children: {
        ...(l
          ? fe(i.split("ONETAB"), (k) => ({
              ...(k[0] !== "" && { a: Xi(k[0]) }),
              b: z(
                {
                  width: 176 / 2.2 + "px",
                  height: 56 / 2.2 + "px",
                  style: { display: "inline-block", marginBottom: "2px" },
                },
                (m) => `images/onetab-button-logo-${m ? "light" : "dark"}.png`,
              ),
              ...(k[1] !== "" && { c: Xi(k[1]) }),
            }))
          : {
              a: Xi(i),
              ...(h && { b: c({ style: { height: `${56 / 2 + 2}px` } }) }),
            }),
        ...(d && {
          km: c({
            style: {
              height: "10px",
              margin: "4px 0",
              border: "1px solid transparent",
            },
          }),
        }),
        ...(u && {
          Tm: c({
            init: (k) => {
              (x.push(
                tt(k.i, "click", async (m) => {
                  (m.stopPropagation(), w());
                }),
              ),
                x.push(
                  tt(k.i, "keydown", async (m) => {
                    m.key === "Enter" &&
                      document.querySelector(":focus-visible") === k.i &&
                      (m.stopPropagation(), w());
                  }),
                ));
            },
            tabIndex: o,
            className: "dropdown",
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px",
              marginInlineEnd: "-5px",
              ...b,
            },
            children: {
              lh: z(
                {
                  className: "dropdown-twistie",
                  width: 20 / 2 + "px",
                  height: 20 / 2 + "px",
                  style: {
                    margin: "4px",
                    display: "inline-block",
                    transform: "rotate(90deg)",
                    flex: "0 0 auto",
                    position: "relative",
                    paddingInlineEnd: "2px",
                  },
                },
                (k) => `images/tree-twistie-closed-${k ? "light" : "dark"}.png`,
              ),
            },
          }),
        }),
        bl: ns({
          style: {
            display: "none",
            position: "absolute",
            right: "10px",
            bottom: "-1px",
            ...(p && { right: "-6px", bottom: "-2px" }),
          },
          ...(p && { uh: 4 }),
        }),
      },
    }),
    m: x,
  };
}
class _o {
  constructor({
    borderStyle: e,
    value: i,
    Im: s,
    className: n,
    style: r,
    vm: o,
    Am: a,
    onChange: l,
  }) {
    ((this.value = i),
      (this.onChange = l),
      (this.o = c({
        className: "checkbox" + (n ? ` ${n}` : ""),
        init: (h) => {
          s && Wt(h, { Yt: s });
        },
        onclick: (h) => {
          o?.()
            ? a?.()
            : (this.et(!this.value), this.onChange?.(this.value, $e(h)));
        },
        style: {
          zIndex: 0,
          position: "relative",
          marginInlineEnd: "4px",
          width: "4px",
          height: "4px",
          border: e,
          borderRadius: "2px",
          flex: "0 0 auto",
          display: "inline-block",
          verticalAlign: "middle",
          ...r,
        },
      })),
      this.et(this.value));
  }
  Nn() {
    this.Vo ||
      ((this.Vo = z(
        {
          className: "checkboxTick",
          width: "16px",
          height: "16px",
          style: {
            zIndex: 2,
            cursor: "pointer",
            position: "absolute",
            left: "-5px",
            top: "-7px",
            width: "16px",
            height: "16px",
            display: "flex",
            alignItems: "center",
          },
        },
        (e) => `images/tick${e ? "" : "-dark"}.png`,
      )),
      this.o.i.appendChild(this.Vo));
  }
  et(e, i) {
    ((this.value = e),
      this.o.i.classList.remove(this.value ? "off" : "on"),
      this.o.i.classList.add(this.value ? "on" : "off"),
      i && this.onChange?.(this.value));
  }
  $i() {
    return this.value;
  }
}
class Jt {
  constructor({
    value: e = !1,
    dt: i = !0,
    label: s,
    tooltipText: n,
    fontSize: r,
    onChange: o,
    $: a = {},
    ae: l = `${28 / 2}px`,
    hh: h,
    D: u,
  }) {
    ((this.value = e),
      (this.label = s),
      (this.onChange = o),
      (this.o = c({
        className: "checkboxField",
        init: ({ i: d }) => {
          (n && (this.m ??= []).push(...Wt(d, { Yt: n })),
            (this.m ??= []).push(
              tt(d, "click", async (w) => {
                let b = !this.value;
                (!h || !(await h(b))) && this.et(!this.value);
              }),
            ),
            (this.m ??= []).push(
              Ze(d, (w) => {
                (this.Si("tick"),
                  (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
              }),
            ),
            (this.m ??= []).push(
              Je(d, (w) => {
                (this.Si(this.value ? "tick" : "tickbox"),
                  (this.o.u.icon.style.opacity = 1));
              }),
            ));
        },
        style: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          ...a,
        },
        children: {
          icon: z(
            {
              className: "checkboxFieldBox",
              dimension: l,
              style: { fontSize: r, minWidth: l },
            },
            (d) => `images/tick${d ? "" : "-dark"}.png`,
          ),
          label: c({
            className: "checkboxFieldLabel",
            style: {
              display: "inline-block",
              marginInlineStart: "1ex",
              fontSize: r,
              userSelect: "none",
              lineHeight: "1.6em",
            },
            textContent: s,
          }),
          ...(u && {
            yl: z(
              {
                width: "12px",
                height: "12px",
                style: {
                  display: "inline-block",
                  opacity: 0.8,
                  marginTop: "2px",
                  marginInlineStart: "4px",
                  cursor: "default",
                },
                init: (d) => {
                  (this.m ??= []).push(...Wt(d.i, { Yt: u }));
                },
              },
              (d) => `images/help-circle${d ? "" : "-dark"}.png`,
            ),
          }),
        },
      })),
      this.et(this.value, !0),
      this.Wt(i));
  }
  $i() {
    return this.value;
  }
  et(e, i) {
    let s = this.value;
    ((this.value = e),
      this.o.i.classList.remove(this.value ? "off" : "on"),
      this.o.i.classList.add(this.value ? "on" : "off"),
      s !== this.value && !i && this.onChange?.(this.value),
      this.Si(e ? "tick" : "tickbox"),
      (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
  }
  Si(e) {
    let i = (o) => `images/${e}${o ? "" : "-dark"}.png`,
      s = i(!0),
      n = i(!1),
      r = this.o.u.icon.firstElementChild;
    ((r.dataset.lightSrc = s),
      (r.dataset.darkSrc = n),
      (r.draggable = !1),
      (r.src = se ? s : n));
  }
  Wt(e) {
    this.o.i.style.display = e ? "flex" : "none";
  }
  tr() {
    return this.o.i.style.display !== "none";
  }
  destroy() {
    ((this.m ?? []).forEach((e) => e.remove()), (this.m = null));
  }
}
class _i {
  constructor({
    color: e,
    dh: i,
    isSelected: s,
    dimension: n = "11px",
    $: r,
    dt: o = !0,
    St: a,
  }) {
    ((this.color = e),
      (this.o = c({
        className: ["colorSwatch", ...I(i, "selectable"), ...I(s, "on")].join(
          " ",
        ),
        style: {
          display: o ? "inline-block" : "none",
          width: n,
          height: n,
          borderRadius: "4px",
          backgroundColor: `var(--tab-group-color-${e})`,
          position: "relative",
          top: "4px",
          ...r,
        },
        ...(a && { onclick: a }),
      })));
  }
  setColor(e) {
    ((this.color = e),
      (this.o.i.style.backgroundColor = `var(--tab-group-color-${e})`));
  }
  $m() {
    return this.color;
  }
  Wt(e) {
    this.o.i.style.display = e ? "inline-block" : "none";
  }
  fh(e) {
    e ? this.o.i.classList.add("on") : this.o.i.classList.remove("on");
  }
  destroy() {
    this.o.i.onclick = null;
  }
}
function un({ color: t, dimension: e, $: i = {}, St: s }) {
  return c({
    style: {
      backgroundColor: `var(--tab-group-color-${t})`,
      borderRadius: "4px",
      width: e,
      height: e,
      display: "inline-block",
      ...i,
      ...(s && { cursor: "pointer" }),
    },
    onclick: s,
  });
}
class Gt {
  constructor({
    label: e,
    onclick: i,
    icon: s,
    tooltipText: n,
    er: r,
    gl: o,
    ni: a,
  }) {
    ((this.onclick = i),
      (this.er = r),
      (this.o = c({
        className: ["controlButton", ...I(a, "red")].join(" "),
        style: {
          position: "relative",
          ...(!s && { paddingInlineStart: "10px" }),
          ...(o && { flex: "0 1 auto", whiteSpace: "normal" }),
        },
        onclick: (l) => {
          if ((l.stopPropagation(), l.preventDefault(), r)) this.o.u.Oi.le(!0);
          else return this.onclick(l);
        },
        children: {
          ...(r && { Oi: new ts({ oi: !1, Vi: this.er }) }),
          ...(s && {
            icon: X.kl({
              ...s,
              $: { paddingInlineStart: "9px", paddingInlineEnd: "8px", ...s.$ },
            }),
          }),
          label: c({
            style: {
              fontSize: "11px",
              color: a ? "var(--red-control)" : "var(--blue-control)",
              paddingTop: "4px",
              paddingBottom: "4px",
            },
            textContent: e,
          }),
        },
      })),
      n && (this.m ??= []).push(...Wt(this, { Yt: n })));
  }
  Xt(e) {
    this.o.label.i.textContent = e;
  }
  destroy() {
    (this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy(),
      (this.onclick = null),
      bt?.destroy(),
      (this.m ?? []).forEach((e) => e.remove()),
      (this.m = null));
  }
}
const dn = new WeakSet(),
  fn = new WeakSet(),
  pn = !1;
class Yo {
  constructor() {
    ((this.ft = null),
      (this.Tl = null),
      (this.ve = null),
      (this.F = !1),
      (this.P = {}));
  }
  ir({ sr: e, nr: i, rr: s, ar: n, Sm: r, lr: o, cr: a, ur: l }) {
    let h = [];
    return (
      pn && !e.style.touchAction && (e.style.touchAction = "none"),
      h.push(
        tt(e, "pointerdown", (u) => {
          (u.stopPropagation(),
            ea(u) &&
              ta(u) &&
              (u.shiftKey ||
                u.metaKey ||
                this.P.Rn ||
                (a && a()) ||
                ((this.P = {}),
                ps({
                  ph: { enabled: !0 },
                  mh: 3,
                  event: u,
                  element: e,
                  Il: null,
                  wh: ({ ts: d, es: w, qs: b, Us: p }) => {
                    ((this.F = !0), (this.ft = i));
                    let x = s.getBoundingClientRect();
                    ((this.Om = x.left),
                      (this.Mm = x.top),
                      (this.Gm = s.offsetWidth),
                      (this.Tl = s),
                      n(u) === !1 &&
                        ((this.F = !1),
                        (this.ft = null),
                        (this.Tl = null),
                        (this.P.vl = !0)));
                  },
                  Al: ({
                    ts: d,
                    es: w,
                    dx: b,
                    dy: p,
                    qs: x,
                    Us: g,
                    pageX: y,
                    pageY: k,
                  }) => {
                    !this.F ||
                      !this.ve ||
                      ((this.ve.style.left = `${x + b + (U() ? -20 : 20 - this.ve.offsetWidth)}px`),
                      (this.ve.style.top = `${g + -20 + p}px`));
                  },
                  xh: async () => {
                    if (this.P.vl) {
                      (delete this.P.vl, this.ve?.remove());
                      return;
                    }
                    this.F ? ((this.F = !1), this.ve?.remove(), o()) : r?.();
                  },
                }))));
        }),
      ),
      h
    );
  }
  hr({ Ae: e, i, dr: s, pr: n, mr: r, wr: o }) {
    let a = [],
      l = (u) => {
        let d = S.P.Mi === e;
        return (
          d && (delete S.P.Mi, delete S.P.ss),
          G.currentTarget === u && delete G.currentTarget,
          d
        );
      },
      h = (u) => (i.isConnected ? !1 : (l(u), !0));
    return (
      ["dragover", "pointermove"].forEach((u) =>
        a.push(
          tt(i, u, (d) => {
            if (h(d.currentTarget) || (d.type === "pointermove" && !S.F))
              return;
            if (S.F && S.P.$l) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (dn.has(d)) return;
            let w = S.P.Mi,
              b = S.P.ss;
            if (
              ((w || b) &&
                (w !== e || b !== d.currentTarget) &&
                typeof Ht == "function" &&
                Ht(),
              !s(d))
            ) {
              l(d.currentTarget) && r(d);
              return;
            }
            (dn.add(d),
              (S.P.Mi = e),
              (S.P.ss = d.currentTarget),
              d.type === "dragover" && d.preventDefault(),
              d.dataTransfer && (d.dataTransfer.dropEffect = "move"),
              n(d));
          }),
        ),
      ),
      ["dragleave", "pointerleave"].forEach((u) =>
        a.push(
          tt(i, u, (d) => {
            h(d.currentTarget) ||
              (d.type.startsWith("pointer") && !S.F) ||
              (d.stopPropagation(),
              !d.currentTarget.contains(d.relatedTarget) &&
                (l(d.currentTarget), r(d)));
          }),
        ),
      ),
      ["drop", "pointerup"].forEach((u) =>
        a.push(
          tt(i, u, async (d) => {
            if (
              h(d.currentTarget) ||
              (d.type.startsWith("pointer") && !S.F) ||
              (S.F && S.P.$l)
            )
              return;
            if (!s(d)) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (fn.has(d)) return;
            let w = S.P.Mi,
              b = S.P.ss;
            if (
              !(
                w &&
                w !== e &&
                b instanceof Element &&
                b.isConnected &&
                i.contains(b)
              ) &&
              !S.P.Rn
            ) {
              ((S.P.Mi = e),
                (S.P.ss = d.currentTarget),
                n(d),
                d.type === "drop" && (d.preventDefault(), d.stopPropagation()),
                fn.add(d),
                (S.P.Rn = !0));
              try {
                await o(d);
              } finally {
                (delete S.P.Rn,
                  G.br && (delete G.br, wi()),
                  l(d.currentTarget),
                  typeof Ht == "function" && Ht());
              }
            }
          }),
        ),
      ),
      a
    );
  }
  setDragImage(e) {
    let i = Un.find((s) => s.name === e);
    (this.ve?.remove(),
      (this.ve = Ge(document.body, "div", {
        style: {
          pointerEvents: "none",
          zIndex: "100000",
          position: "absolute",
          cursor: "move",
        },
        p: L("img", {
          src: `images/${e + (se ? "" : "-dark")}.png`,
          style: { width: `${i.w}px`, height: `${i.tt}px` },
        }),
      }).i));
  }
  bh({ title: e, Dm: i }) {
    (this.ve?.remove(),
      (this.ve = Ge(document.body, "div", {
        style: {
          pointerEvents: "none",
          zIndex: "100000",
          position: "absolute",
          cursor: "move",
          fontSize: "13px",
          color: "var(--link-color)",
          marginLeft: `${i}px`,
        },
        textContent: e,
      }).i));
  }
}
function di(t) {
  return !!(
    t.dataTransfer &&
    ((t.dataTransfer.dropEffect = "move"),
    !["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
      (e) => Yi(t.dataTransfer.types, e),
    ))
  );
}
function Yi(t, e) {
  return t
    ? typeof t.includes == "function"
      ? t.includes(e)
      : typeof t.contains == "function"
        ? t.contains(e)
        : typeof t.indexOf == "function"
          ? t.indexOf(e) !== -1
          : Array.from(t).includes(e)
    : !1;
}
function mn(t) {
  return t.ctrlKey || t.altKey;
}
function ta(t) {
  return t.isPrimary && t.button === 0;
}
function ea(t) {
  let e =
    typeof t.pointerType == "string" ? t.pointerType.toLowerCase() : "mouse";
  return pn || e !== "touch";
}
class Ne {
  yh(e) {
    (this.ce.i.replaceWith(e.i), (this.ce = e));
  }
  Pm(e) {
    this.o.body.i.style.visibility = e ? "visible" : "hidden";
  }
  constructor({
    label: e,
    ce: i,
    gh: s,
    Zn: n,
    kh: r,
    Lm: o = !1,
    Qn: a,
    zs: l,
    Ce: h = { x: 0, y: 0 },
    maxHeight: u = "300px",
    Th: d,
    $: w,
    Em: b,
    Ih: p,
    Z: x = document,
    onShown: g,
    D: y,
    oi: k,
  }) {
    ((this.ce = i),
      (this.Zn = n),
      (this.Ah = !1),
      (this.Qn = a),
      s &&
        ((this.ce = c({})),
        (async () => {
          let m = await s();
          (this.ce.i.replaceWith(m.i), (this.ce = m));
        })()),
      (this.o = c({
        style: {
          display: "flex",
          alignItems: "center",
          position: "relative",
          ...w,
        },
        children: {
          ...((e || d) && {
            label: c({
              style: {
                fontSize: "12px",
                whiteSpace: "pre",
                display: "inline-block",
                marginInlineEnd: "10px",
                ...d,
              },
              textContent: e,
            }),
          }),
          body: c({
            onclick: (m) => {
              (m.stopPropagation(), this.Ah && this.Jn(!1), this.Jn(!0));
            },
            className: "dropdown",
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: "2px 4px",
              ...(o && { height: "14px" }),
              ...b,
            },
            children: {
              ce: this.ce,
              lh: z(
                {
                  width: (o ? 16 : 20) / 2 + "px",
                  height: (o ? 16 : 20) / 2 + "px",
                  className: "dropdown-twistie",
                  style: {
                    marginInlineStart: "8px",
                    marginBottom: "0px",
                    display: "inline-block",
                    transform: "rotate(90deg)",
                    flex: "0 0 auto",
                    marginInlineEnd: "4px",
                    ...p,
                  },
                },
                (m) => `images/tree-twistie-closed-${m ? "light" : "dark"}.png`,
              ),
            },
          }),
          Oi: new ts({
            maxHeight: "600px",
            oi: k,
            onShown: g,
            zs: l,
            Ce: h,
            Z: x,
            Vi: r,
          }),
          ...(y && {
            yl: z(
              {
                width: "12px",
                height: "12px",
                style: {
                  display: "inline-block",
                  opacity: 0.8,
                  marginTop: "2px",
                  marginInlineStart: "4px",
                  cursor: "default",
                },
                init: (m) => {
                  (this.m ??= []).push(...Wt(m.i, { Yt: y }));
                },
              },
              (m) => `images/help-circle${m ? "" : "-dark"}.png`,
            ),
          }),
        },
      })),
      (this.i = this.o.i));
  }
  Jn(e) {
    this.Zn ? e && this.Zn() : this.o.u.Oi.le(e);
  }
  destroy() {
    (this.m?.forEach((e) => e.remove()),
      this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy());
  }
}
class xn {
  constructor({ children: e, Ws: i, ns: s, Kn: n, Xn: r }) {
    ((this.children = e),
      (this.Ws = i),
      (this.ns = s),
      (this.Kn = n),
      (this.Xn = r),
      this.children.forEach((o) => o.Ns(this)));
  }
  $h() {
    this._t ||
      ((this._t = !0),
      this.Ws?.(),
      this.children.forEach((e) => e.Rs(!1)),
      this.children.forEach((e) => e.yr()));
  }
  Sh() {
    this._t &&
      ((this._t = !1), this.children.forEach((e) => e.Yn()), this.ns?.());
  }
  Sl() {
    this.Kn?.() ? this.Xn?.() : this.children[0].Rs(!0);
  }
  destroy() {
    ((this.Ws = null),
      (this.ns = null),
      (this.ns = null),
      (this.Kn = null),
      (this.Xn = null),
      (this.children = null));
  }
}
let ac = !0;
class Ie {
  constructor({
    value: e,
    Zs: i,
    Gi: s,
    rs: n,
    ls: r,
    _n: o,
    Qs: a,
    style: l = {},
    cs: h = !1,
    Di: u = "edit",
    St: d,
    ue: w,
    gr: b,
    Pi: p,
  }) {
    ((this.value = Di(e)),
      (this._n = o),
      (this.Qs = a),
      (this.Zs = i),
      (this.cs = h),
      (this.Gi = s),
      (this.Di = u),
      (this.St = d),
      (this.gr = b),
      (this.Pi = p),
      (this.ls = r),
      (this._t = !1),
      w && this.Ns(w),
      (this.o = c({
        className: n,
        style: {
          position: "relative",
          zIndex: 0,
          padding: "2px",
          whiteSpace: "break-spaces",
          overflowWrap: "anywhere",
          boxSizing: "border-box",
          "unicode-bidi": "plaintext",
          ...l,
        },
        p: L("span", {
          className: ["editInPlaceLabelSpan", ...I(r)].join(" "),
        }),
      })),
      (this.i = this.o.i),
      this.Pi && this.o.i.classList.add("selectable-item"),
      this.et(this.value),
      this.gr ||
        (this.Ol(this.Di),
        (this.o.i.onclick = (x) =>
          this._t
            ? !0
            : {
                click: (g) => {
                  this.St?.(g);
                },
                edit: (g) => (this.Rs(!0), !1),
              }[this.Di](x))));
  }
  Oh(e) {
    [this.o.i, this.Vn?.i].forEach((i) => {
      i && e(i);
    });
  }
  Ol(e) {
    ((this.Di = e), this.kr());
  }
  kr() {
    ({
      edit: () => {
        this.o.i.style.cursor = this._t ? "text" : "pointer";
      },
      click: () => {
        this.o.i.style.cursor = "pointer";
      },
    })[this.Di]();
  }
  Mh() {
    return document.activeElement === this.W;
  }
  Ns(e) {
    ((this.group = e), ye(this.group.children, this));
  }
  Yn() {
    this._t &&
      (this.ls && this.o.p.i.classList.add(this.ls),
      this.group
        ? setTimeout(() => {
            this.group.children.some((e) => e !== this && e.Mh()) || this.Ml();
          }, 50)
        : this.Ml());
  }
  Ml() {
    ((this._t = !1),
      this.kr(),
      this.Pi && this.o.i.classList.add("selectable-item"),
      this.W.remove(),
      (this.W.onblur = null),
      (this.W.Gl = null),
      (this.o.p.i.style.color = ""),
      (this.o.i.style.userSelect = ""),
      this.et(this.value),
      this.Qs?.(this.value, this.value !== this.Gh),
      this.group?.Sh());
  }
  Rs(e) {
    if (this.group?.Kn?.()) {
      this.group.Xn?.();
      return;
    }
    this._t ||
      ((this._t = !0),
      this.kr(),
      this.ls && this.o.p.i.classList.remove(this.ls),
      this.Pi && this.o.i.classList.remove("selectable-item"),
      (this.W = L("textarea", {
        className: this.o.i.className,
        ondragstart: (i) => i.stopPropagation(),
        ondragend: (i) => i.stopPropagation(),
        ondrop: (i) => i.stopPropagation(),
        ondragenter: (i) => i.stopPropagation(),
        ondragleave: (i) => i.stopPropagation(),
        ondragover: (i) => i.stopPropagation(),
        onpointerdown: (i) => i.stopPropagation(),
        style: {
          minHeight: "1.4em",
          minWidth: "100px",
          zIndex: 1,
          left: "-1px",
          top: "-1px",
          position: "absolute",
          overflow: "hidden",
          margin: "0",
          padding: "2px",
          background: "transparent",
          outline: "none",
          resize: "none",
          borderRadius: "4px",
          whiteSpace: "break-spaces",
          overflowWrap: "anywhere",
          boxSizing: "border-box",
          "unicode-bidi": "plaintext",
        },
        placeholder: this.Gi ?? "",
      }).i),
      this.W.setAttribute("autocomplete", "off"),
      this.W.setAttribute("spellcheck", "false"),
      (this.W.onblur = (i) => (this.Yn(), !1)),
      (this.o.p.i.style.color = "transparent"),
      (this.o.i.style.userSelect = "none"),
      this.Vn ||
        ((this.Vn = c({
          className: this.o.i.className,
          style: {
            zIndex: 1,
            position: "absolute",
            top: this.Pi ? "1px" : 0,
            left: this.Pi ? "5px" : 0,
            overflowWrap: "anywhere",
            whiteSpace: "break-spaces",
          },
        })),
        this.o.i.appendChild(this.Vn.i)),
      this.yr(),
      this.Vn.i.replaceChildren(this.W),
      (this.W.value = this.value),
      (this.Gh = this.value),
      (this.W.Gl = (i) => {
        this.Dh = !0;
      }),
      (this.W.onkeydown = (i) => {
        (i.stopPropagation(),
          i.isComposing ||
            ((i.key === "Escape" || i.key === "Esc") &&
              (this.Yn(), i.preventDefault()),
            i.key === "Enter" &&
              (!this.cs || Kt(i)) &&
              (i.preventDefault(), this.Yn())),
          (this.Dh = !1));
      }),
      (this.W.onkeyup = (i) => {
        i.stopPropagation();
      }),
      (this.W.oninput = (i) => {
        (i?.stopPropagation(), (this.value = this.W.value));
        let s = this.value;
        return (
          (s.length === 0 || (s.length > 0 && $r(s.charAt(s.length - 1)))) &&
            (s = s + " "),
          (this.o.p.i.textContent = s),
          this.yr(),
          !1
        );
      }),
      this.W.oninput(void 0),
      e &&
        setTimeout(() => {
          this.W.focus();
        }, 100),
      this._n?.(),
      this.group?.$h());
  }
  yr() {
    let e = 0;
    ((this.W.style.width = `${this.o.i.offsetWidth + e}px`),
      (this.W.style.height = `${this.o.i.offsetHeight}px`),
      (this.W.scrollLeft = 0),
      (this.W.scrollTop = 0));
    for (let i = 0; i < 10 && this.W.offsetHeight < this.W.scrollHeight; i++)
      (e++, (this.W.style.width = `${this.o.i.offsetWidth + e}px`));
    ((this.o.i.scrollLeft = 0), (this.o.i.scrollTop = 0));
  }
  et(e) {
    ((this.value = Di(this.cs ? Ms(e) : $s(e))),
      this.value
        ? ((this.o.p.i.textContent = this.value), (this.o.i.style.color = ""))
        : ((this.o.p.i.textContent = this.Zs),
          (this.o.i.style.color = "var(--text-color-weak)")),
      (this.o.i.style.userSelect = ""));
  }
  Dl(e) {
    ((this.Zs = e), this.et(this.value));
  }
  us(e, i, s) {
    this.value &&
      qi({ label: this.value, Ro: this.o.p.i, oe: e, ei: i, ii: s });
  }
  destroy() {
    ((this.o.i.onclick = null),
      (this._n = null),
      (this.Qs = null),
      (this.St = null),
      this.W && (this.W.remove(), (this.W.onblur = null), (this.W.Gl = null)));
  }
}
class wn {
  constructor({ view: e, style: i }) {
    ((this.view = e),
      (this.o = c({ style: { display: "none", whiteSpace: "nowrap", ...i } })));
  }
  update() {
    let e = ({ Tr: i, Fm: s, onclick: n, D: r, Ph: o, Lh: a = 15 }) =>
      z(
        {
          className: "flag " + s + (o ? " no-hover" : ""),
          width: `${a}px`,
          height: `${a}px`,
          style: { marginBlock: "-2px -6px" },
          init: (l) => {
            ((l.i.onclick = n),
              r && (this.m ??= []).push(...Wt(l.i, { Yt: r })));
          },
        },
        (l) => `images/${i}${l ? "" : "-dark"}.png`,
      );
    if (
      (this.view.pinned &&
        !this.hs &&
        !this.view.Tt &&
        ((this.hs = e({
          Ph: this.view.H,
          Tr: "pin",
          ...(!this.view.H && {
            D: B(this.view.l) ? f("tabPinFlagHelp") : f("nonTabPinFlagHelp"),
          }),
          onclick: async (i) => {
            if (this.view.H) return;
            let s, n;
            (B(this.view.l)
              ? ((s = this.view.wt.l.id),
                (n = this.view.wt.k
                  .filter((r) => r.l.id === this.view.l.id)
                  .findIndex((r) => r === this.view)))
              : (s = this.view.l.parentIds.find(rt)),
              await T.Ir({
                itemId: this.view.l.id,
                parentId: s,
                zt: n,
                value: !1,
              }));
          },
        })),
        this.o.i.prepend(this.hs)),
      this.view.l.task &&
        !this.ri &&
        ((this.ri = e({
          Tr: this.view.l.done ? "task-ticked" : "task-unticked",
          D: this.view.l.done
            ? f("completedTaskFlagHelp")
            : f("pendingTaskFlagHelp"),
          onclick: async (i) =>
            ie.call(this.view, { task: 1, done: +!this.view.l.done }),
        })),
        this.ai ? this.ai.before(this.ri) : this.o.i.appendChild(this.ri)),
      this.view.l.task)
    ) {
      let i = (o) =>
          `images/${this.view.l.done ? "task-ticked" : "task-unticked"}${o ? "" : "-dark"}.png`,
        s = i(!0),
        n = i(!1),
        r = this.ri.firstElementChild;
      ((r.dataset.lightSrc = s),
        (r.dataset.darkSrc = n),
        (r.draggable = !1),
        (r.src = se ? s : n));
    }
    (this.view.l.rating &&
      !this.ai &&
      ((this.ai = e({
        Tr: "star2",
        Lh: 16,
        D: f("starFlagHelp"),
        onclick: async (i) => ie.call(this.view, { rating: 0 }),
      })),
      this.o.i.appendChild(this.ai)),
      this.view.pinned || (this.hs?.remove(), bt?.destroy(), delete this.hs),
      this.view.l.task || (this.ri?.remove(), bt?.destroy(), delete this.ri),
      this.view.l.rating || (this.ai?.remove(), bt?.destroy(), delete this.ai),
      (this.o.i.style.display = this.o.i.children.length ? "block" : "none"));
  }
  destroy() {
    ((this.view = null),
      bt?.destroy(),
      this.hs && (this.hs.onclick = null),
      this.ri && (this.ri.onclick = null),
      this.ai && (this.ai.onclick = null),
      (this.m ?? []).forEach((e) => e.remove()),
      (this.m = null));
  }
}
class yn {
  constructor({
    Li: e = "destination",
    Eh: i,
    label: s,
    jm: n,
    style: r,
    Bm: o,
    Pl: a,
    Js: l,
    Z: h,
    Ks: u,
    Xs: d = !1,
    Ys: w,
    maxHeight: b,
    Ce: p,
    yt: x,
    vr: g,
    Ll: y,
    Fh: k,
    He: m = !1,
    xt: v,
  }) {
    (s || (s = f("destinationColon")),
      (this.ds = i),
      (this.Pl = a),
      (this.Js = l),
      (this.vr = g),
      (this.He = m),
      (this.xt = v),
      (this.Li = e),
      (this.yt = x));
    let A = new ht();
    this.o = c({
      ...(r && { style: r }),
      children: {
        Cm: c({
          style: { display: "flex", alignItems: "center" },
          children: {
            ...(!n && {
              label: c({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginInlineEnd: "9px",
                },
                p: c({
                  textContent: s,
                  style: {
                    lineHeight: "1.6em",
                    fontSize: "12px",
                    fontWeight: 400,
                    ...o,
                  },
                }),
              }),
            }),
            gt: new Ne({
              Z: h,
              maxHeight: b,
              Ce: p,
              Hm: { left: "60px", top: "60px" },
              qm: document.body,
              gh: async () => this.El(await Bn(this.ds.id), this.ds),
              Zn: async () => {
                await this.Fl();
              },
            }),
            jh: new Jt({
              dt: d,
              value: w,
              fontSize: "12px",
              label: f("createGroupInsideDestination"),
              D: f("createGroupInsideDestinationHelp"),
              $: { marginInlineStart: "28px" },
              onChange: (D) => u(D),
            }),
          },
        }),
        ...(y?.length && {
          Ll: c({
            style: {
              display: "flex",
              fontSize: "12px",
              marginTop: "8px",
              marginBottom: "8px",
            },
            children: {
              label: c({ style: { whiteSpace: "nowrap" }, textContent: k }),
              eo: c({
                style: { display: "flex", flexWrap: "wrap" },
                children: Object.fromEntries(
                  y.map((D, M) => [
                    `_${M}`,
                    c({
                      style: {
                        marginInlineStart: "16px",
                        cursor: "pointer",
                        whiteSpace: D.label?.length > 50 ? "wrap" : "normal",
                      },
                      className: "recentGroup",
                      textContent: D.label,
                      onclick: async (N) => {
                        await this.Ns(D, !0);
                      },
                      init: (N) =>
                        Wt(N.i, {
                          Yt: async () => {
                            let Z = await xi({
                              h: A,
                              itemId: D.id,
                              fontSize: "12px",
                              Qo: !0,
                              jl: !1,
                            });
                            return c({ style: { padding: "5px 15px" }, p: Z });
                          },
                        }),
                    }),
                  ]),
                ),
              }),
            },
          }),
        }),
      },
    });
  }
  async Fl({ _s: e } = {}) {
    await me({
      title: this.vr,
      He: this.He,
      xt: this.xt,
      Li: this.Li,
      yt: this.yt,
      io: async (i) => {
        (this.o.u.gt.Jn(!1), await this.Ns(await ot(i.id), !0));
      },
      _s: e,
    });
  }
  async Ns(e, i) {
    ((this.ds = e),
      this.o.u.gt.yh(this.El(await Bn(this.ds.id), this.ds)),
      i && (await this.Js?.(this.ds)));
  }
  El(e, i) {
    return L("div", {
      style: {
        fontSize: "12px",
        fontWeight: 400,
        display: "flex",
        flex: "1 1 auto",
        ...this.Pl,
      },
      children: {
        ...(F(i) && {
          so: c({
            style: { display: "inline-block" },
            p: z(
              {
                width: "13px",
                height: "13px",
                style: {
                  display: "inline-block",
                  marginInlineStart: "3px",
                  marginInlineEnd: "1px",
                  position: "relative",
                  top: "2px",
                  cursor: "pointer",
                },
              },
              (s) => `images/folder${s ? "" : "-dark"}.png`,
            ),
          }),
        }),
        label: c({
          style: { display: "inline-block", marginInlineStart: "6px" },
          children: {
            ...(kt(i) && {
              Um: un({
                color: i.color,
                dimension: "11px",
                $: {
                  flex: "0 0 auto",
                  marginInlineEnd: "6px",
                  position: "relative",
                  top: "1px",
                },
              }),
            }),
            zm: L("span", { textContent: He({ h: e, l: i }) }),
          },
        }),
      },
    });
  }
}
class ia {
  constructor() {}
  async Lt({
    title: e,
    Li: i,
    yt: s,
    Js: n,
    Z: r,
    width: o = "670px",
    He: a,
    xt: l,
    _s: h = !1,
  }) {
    let u = await T.getSettings([
        `${i}GroupChooserShowFoldersOnly`,
        `${i}GroupChooserShowNamedOnly`,
        `${i}GroupChooserRecentsOpen`,
      ]),
      d = await new ht().ke(),
      w = await T.Wm();
    a && (s = !0);
    let b = new ka({
      Et: w,
      h: d,
      yt: s,
      Ar: async (p, x) => {
        p && (await n?.(await d.ht(x)));
      },
      Z: r,
      B: a || u[`${i}GroupChooserShowFoldersOnly`] === "true",
      Ot: sn(u[`${i}GroupChooserShowNamedOnly`], "true"),
      xt: l,
    });
    (await b.st(),
      (this.o = L("div", {
        destroy: () => b.destroy(),
        style: {
          fontSize: "12px",
          fontWeight: 400,
          whiteSpace: "normal",
          lineHeight: "1.8em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "12px",
          ...(o && { width: o }),
          padding: "10px",
        },
        children: {
          header: c({
            style: {
              paddingInline: "8px 11px",
              paddingBlock: "4px 0px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            },
            children: {
              title: c({
                style: { flex: "1 1 auto", fontWeight: 600 },
                textContent: e,
              }),
              Nm: c({
                style: {
                  marginInlineStart: "auto",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                },
                children: {
                  ...(!a && {
                    B: new Jt({
                      value: u[`${i}GroupChooserShowFoldersOnly`] === "true",
                      fontSize: "12px",
                      label: f("showFoldersOnly"),
                      $: { flex: "0 1 auto" },
                      onChange: async (p) => {
                        ((u[`${i}GroupChooserShowFoldersOnly`] = p
                          ? "true"
                          : "false"),
                          await T.bt(
                            `${i}GroupChooserShowFoldersOnly`,
                            p ? "true" : "false",
                          ),
                          this.o.search.oo.Vs(p),
                          await this.o.search.oo.Bl(),
                          this.o.Cl.Hl().ql.Vs(p),
                          await this.o.Cl.Hl().ql.st(),
                          this.o.all.ro.Vs(p),
                          await this.o.all.ro.st());
                      },
                    }),
                  }),
                  Ot: new Jt({
                    value: sn(u[`${i}GroupChooserShowNamedOnly`], "true"),
                    fontSize: "12px",
                    label: f("showNamedOnly"),
                    $: { flex: "0 1 auto" },
                    onChange: async (p) => {
                      ((u[`${i}GroupChooserShowNamedOnly`] = p
                        ? "true"
                        : "false"),
                        await T.bt(
                          `${i}GroupChooserShowNamedOnly`,
                          p ? "true" : "false",
                        ),
                        this.o.all.ro.Bh(p),
                        await this.o.all.ro.st());
                    },
                  }),
                },
              }),
            },
          }),
          search: c({
            style: {},
            children: {
              oo: new ma({
                h: d,
                Et: w,
                B: a || u[`${i}GroupChooserShowFoldersOnly`] === "true",
                he: async (p) => await n?.(p),
              }),
            },
          }),
          Cl: new In({
            label: f("recent"),
            isOpen: u[`${i}GroupChooserRecentsOpen`] === "true",
            Ch: async (p) => {
              await T.bt(`${i}GroupChooserRecentsOpen`, p ? "true" : "false");
            },
            style: { paddingInlineStart: "10px" },
            body: c({
              style: {
                paddingInlineStart: "10px",
                fontSize: "13px",
                paddingTop: "7px",
              },
              children: {
                ql: new da({
                  h: d,
                  Et: w,
                  he: async (p) => await n?.(p),
                  B: a || u[`${i}GroupChooserShowFoldersOnly`] === "true",
                }),
              },
            }),
          }),
          all: c({
            style: { paddingInline: "0px 16px", paddingBlock: "0px 0px" },
            children: { ro: b },
          }),
        },
      })),
      h && this.o.u.oo.focus());
  }
  destroy() {
    (this.o.u.oo?.destroy?.(), this.o.destroy());
  }
}
async function me({
  io: t,
  title: e,
  He: i,
  xt: s,
  Li: n = "destination",
  yt: r = !0,
  _s: o = !1,
}) {
  await le(1);
  let a = new ia(),
    l = new gt({
      fs: !0,
      Ul: !0,
      $r: !0,
      minWidth: "490px",
      minHeight: "360px",
      Sr: "490px",
      zl: "390px",
      buttons: [],
    });
  (await a.Lt({
    title: e,
    He: i,
    width: "",
    xt: s,
    Li: n,
    yt: r,
    Js: async (h) => {
      (await t(h), l.destroy());
    },
    Z: l.o.p.i,
    _s: o,
  }),
    l.Lt({
      content: c({
        style: {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          overflow: "auto",
        },
        children: { info: c({}), Rm: a.o.i },
        destroy: () => a.destroy(),
      }),
    }));
}
class $t {
  constructor({
    li: e,
    Vt: i = !1,
    te: s = !1,
    ao: n = !1,
    tn: r = !1,
    Nt: o,
    Ft: a,
    A: l,
    Wl: h,
    qe: u,
    ps: d,
    X: w,
    J: b = !1,
    It: p,
    Or: x,
    Nl: g,
    Rl: y,
    dt: k = !0,
    H: m,
    vt: v,
    Mr: A,
    Ks: D,
    ws: M = !0,
    Xs: N = !1,
    xs: Z,
    Ys: dt,
    Mt: R,
    Gr: J,
    Tt: V,
    Zl: vt,
    bs: W = !1,
  }) {
    ((this.Mt = R),
      (this.li = e),
      (this.Vt = i),
      (this.ao = n),
      (this.tn = r),
      (this.Nt = o),
      (this.qe = u),
      (this.ps = d),
      (this.Ft = a),
      (this.A = l),
      (this.Wl = h),
      (this.J = b),
      (this.X = w),
      (this.It = p),
      (this.Or = x),
      (this.Nl = g),
      (this.Rl = y),
      (this.dt = k),
      (this.H = m),
      (this.vt = v),
      (this.Mr = A),
      (this.Ks = D),
      (this.Gr = J),
      (this.ws = M),
      (this.Xs = N),
      (this.xs = Z),
      (this.Ys = dt),
      (this.te = s),
      (this.Tt = V),
      (this.Zl = vt),
      (this.bs = W),
      (this.k = []),
      (this.o = c({})));
  }
  async Hh() {
    if (!this.J) throw new Error();
    let e = { groupType: void 0, collapsed: void 0, color: void 0 },
      i = await ge(this.X, e);
  }
  Dr(e, i) {
    this.k && this.k.forEach((s) => s.Dr(e, i));
  }
  Ql() {
    return [this.X, ...this.k.flatMap((e) => (e instanceof $t ? e.Ql() : []))];
  }
  Jl() {
    return this.k.map((e) => e.Jl()).flat();
  }
  async getParent() {
    let e = this.l.parentIds.find(rt);
    return await ot(e);
  }
  async qh() {
    return kt(await this.getParent());
  }
  async Uh(e) {
    let i = this.l.parentIds.find(rt),
      s = await ot(i),
      n = this.l.parentIds.filter((o) => o === "quickList");
    if (
      (ye(n, e.id),
      JSON.stringify([...n].sort()) !==
        JSON.stringify([...this.l.parentIds].sort()))
    ) {
      if (
        ((this.o.u.destination.o.u.gt.ce.label.i.textContent = it(e)
          ? f("all")
          : e.label || f("untitled")),
        (this.l.parentIds = n),
        this.J)
      ) {
        let o = await ge(this.X, { parentIds: n });
        ((this.Rt = Object.entries(o).length > 0),
          this.It({ de: this.Rt || this.fe.size > 0, pe: !0 }));
      } else throw new Error("not implemented");
      this.Or?.(e, s);
    }
  }
  zh(e) {
    this.o.u.Kl.i.style.display = e ? "flex" : "none";
  }
  us(e, i, s) {
    (this.k.forEach((n) => n.us(e, i, s)),
      this.o.u.en.u.$e.us(e, i, s),
      this.o.u.sn.us(e, i, s));
  }
  async Wh({ jt: e }) {
    ((this.jt = e),
      this.k.forEach((i) => {
        i instanceof at
          ? i.Wt(e?.has(i.l.id) ?? !0)
          : i instanceof $t && i.Wh({ jt: e });
      }),
      await this.Xl());
  }
  async Nh() {
    await this.o.u.destination?.Fl({ _s: !0 });
  }
  async st({
    groupId: e,
    jt: i,
    h: s,
    ci: n,
    Se: r,
    pinned: o,
    C: a,
    me: l,
    ut: h,
  }) {
    ((this.m ?? []).forEach((m) => m.remove()),
      (this.m = []),
      (this.pinned = o),
      (this.C = a),
      (this.me = l),
      (this.ut = h),
      (this.jt = i));
    {
      let m = await s.ht(e);
      this.l = { ...m };
      let v = await s.ht(m.parentIds.find(rt));
      this.ys = v && F(v) && !this.H;
    }
    if (this.J) {
      this.nn = structuredClone(this.l);
      let m = await qs(this.X),
        v = Object.entries(m),
        A = !1;
      if (v.length) {
        for (let [D, M] of v) D !== "parentIds" && (this.l[D] = M);
        ((this.Rt = !0), this.It({ de: !0, pe: !1 }));
      }
    }
    let u,
      d = this.l.parentIds.find(rt);
    u = await s.ht(d);
    let w = !this.H && !this.C && u && !kt(u),
      b = await Promise.all(this.l.parentIds.map(async (m) => await s.ht(m))),
      p = b.find((m) => !ji(m)),
      x = F(p ?? {}),
      g = b.find(Dt),
      y = this.l.childIds;
    if (this.jt && this.J)
      throw new Error("childIdsSubset not allowed for uncommitted group views");
    let k = this.o.i;
    ((this.o = c({
      dataset: { id: this.l.id },
      className: [
        "tabGroup",
        ...I(this.l.archived, "archived"),
        ...I(this.l.task && !this.l.done, "task-pending"),
        ...I(this.l.task && this.l.done, "task-done"),
      ].join(" "),
      style: {
        display: this.dt ? "block" : "none",
        marginInline: this.te ? "" : "0px 0px",
        marginBlock: this.te ? "" : `${this.Tt ? 0 : 9}px 4px`,
      },
      children: {
        body: c({
          init: (m) => {
            (this.m ??= []).push(
              tt(m.i, "keydown", (v) => {
                let A;
                (this.o.u.Pr && (A = () => this.o.u.Pr.onclick(v)),
                  this.o.u.Lr && (A = () => this.o.u.Lr.onclick(v)),
                  v.key === "Enter" &&
                    A &&
                    document.querySelector(":focus-visible") === m.i &&
                    (v.stopPropagation(), A()));
              }),
            );
          },
          tabIndex: this.Tt ? -1 : 0,
          className: [
            "tabGroupBody",
            ...I(this.Tt, "centerColFolderHeaderGroup"),
          ].join(" "),
          style: {
            ...(this.Tt && { borderRadius: "10px" }),
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingInlineStart: "0px",
            paddingInlineEnd: "0px",
            marginInline: "10px",
            marginBlock: this.te ? "0px 6px" : this.Tt ? "0 10px" : "10px",
            ...(!F(this.l) && { minHeight: "70px" }),
          },
          children: {
            ...(this.ao &&
              !this.bs && {
                Zm: c({
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    marginTop: "10px",
                    marginInlineStart: "14px",
                    marginInlineEnd: "20px",
                    marginBottom: "6px",
                  },
                  children: {
                    body: c({
                      style: {
                        marginInlineStart: "17px",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        rowGap: "9px",
                        flex: "1 1 auto",
                      },
                      children: { lo: c({}) },
                    }),
                  },
                }),
              }),
            ...(this.tn && {
              destination: new yn({
                vr: f("chooseALocation"),
                yt: this.H,
                Li: "destination",
                Ll: (await s.il({ count: 5, B: !1, sl: !0, Ju: !0 })).filter(
                  (m) => m.id !== u.id,
                ),
                Fh: f("recentDestinationsColon"),
                style: {
                  marginInlineStart: "26px",
                  marginInlineEnd: "8px",
                  marginBottom: "4px",
                  marginTop: "10px",
                },
                Eh: u,
                Js: async (m) => await this.Uh(m),
                Ks: (m) => this.Ks(m),
                Xs: this.Xs,
                Ys: this.Ys,
                Z: document,
                maxHeight: "",
              }),
            }),
            ...(this.H && {
              Rh: c({
                style: {
                  display: "none",
                  fontSize: "12px",
                  marginInlineStart: "26px",
                  marginTop: "30px",
                  textAlign: "center",
                },
                textContent: f("noTabsMeetCriteriaUseCheckboxes"),
              }),
            }),
            Kl: c({
              style: {
                display: this.ws ? "flex" : "none",
                alignItems: "flex-start",
                marginInlineStart: "8px",
                marginInlineEnd: `${this.te ? -6 : 6}px`,
              },
              children: {
                en: c({
                  ...(F(this.l) &&
                    !this.C && {
                      init: ({ i: m }) => {
                        (this.m ??= []).push(
                          ...S.hr({
                            Ae: this,
                            i: m,
                            dr: (v) => {
                              if (this.Tt) return !1;
                              let A = S.F ? (S.ft?.types ?? []) : ["tab"];
                              return !(
                                (S.F && !A.length) ||
                                !gi({
                                  Er: A,
                                  Fr: this.l.groupType,
                                  jr: this.l.id,
                                  Br: this.C,
                                  Cr: "groupView",
                                }) ||
                                di(v)
                              );
                            },
                            pr: () => {
                              (lt.remove(),
                                m.appendChild(xt),
                                Object.assign(xt.style, {
                                  top: "3px",
                                  bottom: "3px",
                                  left: "40px",
                                  right: "13px",
                                  width: "",
                                  borderWidth: "3px",
                                }));
                            },
                            mr: () => {
                              (lt.remove(), xt.remove());
                            },
                            wr: async (v) => {
                              (lt.remove(),
                                xt.remove(),
                                !(this.j || !this.l?.id || !F(this.l)) &&
                                  (await yi({
                                    e: v,
                                    Hr: () => {},
                                    qr: () => this.l.id,
                                    Ur: () => "folder",
                                  })));
                            },
                          }),
                        );
                      },
                    }),
                  style: {
                    position: "relative",
                    display: "flex",
                    flex: "1 1 auto",
                    margin: "3px",
                  },
                  children: {
                    K: z(
                      {
                        className: "groupCrossImg",
                        dimension: `${26 / 2}px`,
                        style: {
                          ...(this.Tt && { display: "none" }),
                          width: "19px",
                          height: "19px",
                          top: F(this.l) ? "6px" : "11px",
                        },
                        l: {
                          onclick: async (m) => {
                            await oo(this.o.i);
                            let v = [wt({ itemId: this.l.id })],
                              A = await T.gs(v);
                            (await T.move({ rt: v, O: "trash" }),
                              await T.Oe(A));
                          },
                        },
                      },
                      (m) => `images/cross2${m ? "" : "-dark"}.png`,
                    ),
                    ...(F(this.l) && {
                      so: c({
                        style: { display: "inline-block" },
                        p: z(
                          {
                            width: "19px",
                            height: "19px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: "6px",
                              marginInlineEnd: "4px",
                              position: "relative",
                              top: `${It(this.l) ? 7 : 8}px`,
                            },
                          },
                          (m) =>
                            `images/${It(this.l) ? "trash" : "folder"}${m ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    ...(Yt(this.l) && {
                      Zh: c({
                        style: {
                          display: this.l.locked ? "inline-block" : "none",
                        },
                        p: z(
                          {
                            width: "19px",
                            height: "19px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: "3px",
                              marginInlineEnd: "4px",
                              position: "relative",
                              top: "12px",
                            },
                            init: (m) => {
                              (this.m ??= []).push(
                                ...Wt(m.i, { Yt: f("lockedGroupUnlockHelp") }),
                              );
                            },
                          },
                          (m) => `images/lock${m ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    $e: new Ie({
                      ...(F(this.l) && It(this.l) && { gr: !0 }),
                      ...(F(this.l) && { Zs: Ci({ h: s, l: this.l }) }),
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        marginInlineEnd: "10px",
                        marginInlineStart: "5px",
                        marginTop: F(this.l) ? "0" : "5px",
                        flex: "1 1 auto",
                      },
                      value: this.l.label,
                      rs: "tabGroupLabelText",
                      Gi: f("title"),
                      ...(it(this.l) && {
                        Di: "click",
                        St: (m) => this.on.Sl(),
                      }),
                    }),
                  },
                }),
                Qm: c({
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    ...(this.Tt &&
                      !it(this.l) &&
                      !It(this.l) && { marginTop: "-13px" }),
                  },
                  children: {
                    ...(!it(this.l) &&
                      !It(this.l) && {
                        Jm: c({
                          style: {
                            display: "flex",
                            marginInlineEnd: "15px",
                            marginBlockStart: F(this.l) ? "3px" : "8px",
                          },
                          children: {
                            ...(!this.J && {
                              co: c({
                                style: {
                                  flex: "1 1 auto",
                                  textAlign: "end",
                                  fontSize: "11px",
                                  marginBottom: "1px",
                                  color: "var(--text-color-weak)",
                                  Qh: "balance",
                                },
                              }),
                            }),
                            ...(!this.C && {
                              flags: new wn({
                                view: this,
                                style: {
                                  flex: "0 0 auto",
                                  marginInlineStart: "12px",
                                  marginInlineEnd: "2px",
                                },
                              }),
                            }),
                          },
                        }),
                      }),
                    controls: c({
                      style: {
                        marginTop: `${it(this.l) || It(this.l) ? 10 : 0}px`,
                        marginInlineEnd: "7px",
                        textAlign: "end",
                        ...(this.J && { marginTop: "6px" }),
                      },
                      children: {
                        ...(this.Tt &&
                          !It(this.l) &&
                          it(this.l) && {
                            Jh: new Gt({
                              label: f("storeAllOpenWindowsHere"),
                              icon: { I: "close", dimension: "12px" },
                              onclick: async (m) => await T.Kh(),
                            }),
                          }),
                        ...(this.Tt &&
                          !it(this.l) &&
                          !It(this.l) && {
                            Xh: new Gt({
                              label: f("openParentFolder"),
                              icon: {
                                I: "nav-to-parent",
                                dimension: "12px",
                                ee: !U(),
                              },
                              onclick: async (m) => {
                                await Vt({ itemId: this.l.parentIds.find(rt) });
                              },
                            }),
                          }),
                        ...(this.Vt &&
                          !F(this.l) &&
                          !this.C && {
                            Pr: new Gt({
                              label: f("restoreAll"),
                              icon: { I: "open", dimension: "13px" },
                              onclick: async (m) => {
                                m.stopPropagation();
                                let v,
                                  A = !1;
                                if (this.H && !Et(m))
                                  if (this.vt) {
                                    let D = await Eo();
                                    ((v = Oi(D?.url)
                                      ? "currentWindow"
                                      : "replaceCurrentTab"),
                                      (A = !0));
                                  } else A = !0;
                                if (
                                  (Bt(m) &&
                                    (m.preventDefault(), m.stopPropagation()),
                                  !this.H &&
                                    !Et(m) &&
                                    !(await T._e(
                                      "autoActionOnOpenOptionChosen",
                                    )))
                                )
                                  try {
                                    await ks();
                                  } catch {
                                    return;
                                  }
                                await qe({
                                  id: this.l.id,
                                  ...(v && { zr: v }),
                                  Wr: !1,
                                  Nr: (await chrome.windows.getCurrent()).id,
                                  Yl: Bt(m),
                                  Rr: !this.C && !this.ut && !Et(m),
                                  _l: $e(m),
                                  Vl: Kt(m),
                                  tc: A && !Kt(m),
                                  Yh: !this.H && !Kt(m),
                                });
                              },
                            }),
                          }),
                        ...(F(this.l) &&
                          !this.Tt && {
                            Lr: new Gt({
                              label: f("openFolder"),
                              icon: {
                                I: "right-arrow",
                                dimension: "12px",
                                ee: !U(),
                              },
                              onclick: async () => {
                                this.H
                                  ? (await T.ec({ itemId: this.l.id }),
                                    window.close())
                                  : await Vt({ itemId: this.l.id });
                              },
                            }),
                          }),
                        ...(!It(this.l) &&
                          !this.C && {
                            Ei: new Gt({
                              label: f("moreEllipsis"),
                              icon: {
                                I: "vertical-ellipses",
                                dimension: "12px",
                              },
                              er: async (m) =>
                                L("div", {
                                  init: (v) =>
                                    (v.i.onpointerover = (A) =>
                                      A.stopPropagation()),
                                  style: {
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    paddingInline: "8px",
                                    paddingBlock: "8px 8px",
                                    lineHeight: "1.5em",
                                    maxWidth: "300px",
                                  },
                                  children: await ys({
                                    view: this,
                                    H: this.H,
                                    Vt: this.Vt,
                                    me: this.me,
                                    ic: w,
                                    vt: this.vt,
                                    onChange: async (v) => {
                                      if (this.J) {
                                        (Object.hasOwn(v, "isTabGroup") &&
                                          (this.Mr(v.isTabGroup),
                                          (this.l.groupType = v.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          delete v.isTabGroup,
                                          (v.groupType = this.l.groupType)),
                                          v.groupType &&
                                            v.groupType === this.nn.groupType &&
                                            (v.groupType = void 0),
                                          (v.collapsed ?? !1) ===
                                            (this.nn.collapsed ?? !1) &&
                                            (v.collapsed = void 0),
                                          Object.assign(this.l, v));
                                        let A = await ge(this.X, v);
                                        ((this.Rt =
                                          Object.entries(A).length > 0),
                                          this.It({
                                            de: this.Rt || this.fe.size > 0,
                                            pe: !0,
                                          }));
                                      } else
                                        (Object.hasOwn(v, "isTabGroup") &&
                                          ((v.groupType = v.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          v.groupType === "tabGroup" &&
                                            (v.pinnedCount = 0),
                                          delete v.isTabGroup),
                                          Object.keys(v).length > 0 &&
                                            (await T.Fi(this.l.id, v)));
                                    },
                                    Zr: () => X.rn?.(),
                                    sc: (v, A) =>
                                      m(
                                        c({
                                          init: (D) =>
                                            (D.i.onpointerover = (M) =>
                                              M.stopPropagation()),
                                          p: v,
                                        }),
                                        A,
                                      ),
                                    xs: this.xs ?? x,
                                    nc: await T.ks("copyToClipboardFormat"),
                                  }),
                                }),
                            }),
                          }),
                        ...(this.C &&
                          !It(this.l) && {
                            Qr: new Gt({
                              label: f("delete"),
                              ni: !0,
                              icon: { I: "cross-action", dimension: "10px" },
                              onclick: async () => {
                                let m = [wt({ itemId: this.l.id })];
                                await T._h({ rt: m });
                              },
                            }),
                            Jr: new Gt({
                              label: f("moveBack"),
                              icon: { I: "move", dimension: "14px" },
                              onclick: async (m, v) => gn(this.l),
                            }),
                          }),
                        ...(this.C &&
                          It(this.l) && {
                            Vh: new Gt({
                              label: f("deleteAllTrash"),
                              ni: !0,
                              icon: { I: "cross-action", dimension: "10px" },
                              onclick: async () => {
                                (await T.td(),
                                  await st.an.Km({ params: st.an.uo }));
                              },
                            }),
                          }),
                      },
                    }),
                  },
                }),
              },
            }),
            ...((this.Vt || this.me || w || this.bs || this.ws) &&
              !F(this.l) && {
                Zt: Ft({
                  marginTop: "0px",
                  marginBottom: "4px",
                  marginInlineStart: "24px",
                  marginInlineEnd: "14px",
                }),
              }),
            sn: new Ie({
              style: {
                marginTop: F(this.l) ? 0 : "4px",
                marginBottom: "8px",
                marginInlineStart: F(this.l)
                  ? this.Tt
                    ? "44px"
                    : "57px"
                  : "30px",
                marginInlineEnd: "13px",
                display: this.Zl
                  ? "none"
                  : this.l.notes?.text
                    ? "block"
                    : "none",
              },
              value: this.l.notes?.text,
              rs: "tabLinkText",
              Gi: f("notes"),
              cs: !0,
            }),
            hi: c({ style: { display: "none" } }),
            ...(!F(this.l) && {
              Me: c({
                className: "childContainer",
                style: {
                  paddingInlineStart: "1px",
                  paddingInlineEnd: "1px",
                  paddingTop: "4px",
                  paddingBottom: "12px",
                },
                init: (m) => {
                  let v = bn({
                    we: this.l.groupType,
                    Me: m,
                    k: this.k,
                    ed: () => this.l.id,
                    sd: () => this.Ft && !this.ut,
                    nd: () => this.C,
                  });
                  (this.m ??= []).push(...v);
                },
              }).i,
            }),
            ho: c({
              style: {
                display: "none",
                paddingTop: "3px",
                paddingInlineStart: "52px",
                paddingInlineEnd: "28px",
                paddingBottom: "12px",
                fontSize: "12px",
                color: "var(--text-color-weak)",
                cursor: "pointer",
              },
              init: (m) => {
                (this.m ??= []).push(tt(m.i, "click", (v) => this.Wt(!0, !0)));
              },
            }),
            ...(this.bs && {
              bs: c({
                style: {
                  display: "flex",
                  marginInlineStart: F(this.l) ? "59px" : "32px",
                  marginInlineEnd: "22px",
                  marginBottom: "7px",
                  gap: "24px",
                  color: "var(--text-color-weak)",
                },
                children: { lo: c({}) },
              }),
            }),
          },
        }),
      },
    })),
      (this.m ??= []).push(
        ...S.ir({
          nr: {},
          sr: this.o.i,
          rr: this.o.i,
          ur: this.o.i,
          ar: (m) => {
            ((S.ft.types = [
              this.l.groupType,
              ...I(this.ut, "locked"),
              ...I(this.C, "trash"),
              ...I(!this.l.label, "untitled"),
            ]),
              (S.ft.Ae = { itemsMeta: [wt({ itemId: this.l.id })] }),
              this.o.u.K && (this.o.u.K.style.visibility = "hidden"),
              hs({ e: m, Kr: "dragged-group", ji: [this.o.i] }));
          },
          lr: () => wi(),
          cr: () => !this.Ft,
        }),
      ),
      this.oc(this.l.locked || this.ut, !0),
      this.rc(),
      this.o.u.flags?.update(),
      this.ac(),
      this.o.u.en &&
        ((this.m ??= []).push(
          Ze(this.o.u.en.i, (m) => {
            !G.Xr &&
              !this.on?._t &&
              this.qe &&
              !this.ut &&
              (this.o.u.K.style.visibility = "visible");
          }),
        ),
        (this.m ??= []).push(
          Je(this.o.u.en.i, (m) => {
            this.qe && (this.o.u.K.style.visibility = "hidden");
          }),
        )),
      (this.$e = this.o.u.en.u.$e),
      (this.Y = this.o.u.sn),
      (this.on = new xn({
        children: [...I(!it(this.l), this.$e), this.Y],
        Ws: () => {
          (this.qe && (this.o.u.K.style.visibility = "hidden"),
            (this.o.u.sn.i.style.display = "block"),
            this.o.u.Zt && (this.o.u.Zt.i.style.visibility = "hidden"));
        },
        ns: async () => {
          (this.o.u.K &&
            setTimeout(() => (this.o.u.K.style.visibility = "hidden")),
            this.qe && (this.o.u.K.style.visibility = "visible"),
            this.o.u.Zt && (this.o.u.Zt.i.style.visibility = "visible"));
          let m = this.l.label,
            v = structuredClone(this.l.notes);
          ((this.l.label = this.$e.value),
            this.Y.value
              ? (this.l.notes || (this.l.notes = {}),
                (this.l.notes.text = this.Y.value))
              : this.l.notes && delete this.l.notes.text,
            (this.o.u.sn.i.style.display = this.l.notes?.text
              ? "block"
              : "none"));
          let A = {
            ...(m !== this.l.label && { label: this.l.label }),
            ...(!ii(v, this.l.notes) && { notes: this.l.notes }),
          };
          if (Object.entries(A).length > 0)
            if (this.J) {
              (A.label === "" && (A.label = void 0),
                ["", void 0].includes(A.notes?.text) && (A.notes = void 0));
              let D = await ge(this.X, A);
              ((this.Rt = Object.entries(D).length > 0),
                this.It({ de: this.Rt || this.fe.size > 0, pe: !0 }));
            } else await T.Fi(this.l.id, A);
        },
      })),
      this.ln(),
      (this.fe = new Set()),
      await s.th(y),
      Us(this.k),
      await this.sync({ h: s, ci: n, Se: r }),
      this.A &&
        this.J &&
        (this.m ??= []).push(
          new _s({
            listener: ({ count: m, nt: v }) => this.Yr(),
            Ka: (m) => this.A.lc(m),
            Bs: (m) => this.A.od(m),
          }),
        ),
      k?.parentNode && k.replaceWith(this.o.i),
      this.J || (await this.Xl()));
  }
  Wt(e, i) {
    (i && delete this.jt,
      (this.o.u.ho.i.style.display = e ? "none" : "block"),
      (this.dt = e),
      (this.o.i.style.display = e ? "block" : "none"),
      this.k.forEach((s) => s.Wt(e, i)));
  }
  ln() {
    if (!this.o.u.co) return;
    let e = new Date(this.l.createDate),
      i = (new Date().getTime() - e) / 1e3,
      s = e.toLocaleDateString(void 0, { cc: "short" }),
      n = e.toLocaleTimeString(void 0, { rd: "short" });
    this.o.u.co.i.textContent = `${s} ${n} - ${Hs(e)}`;
    let r = 10;
    (i > 60 && (r = 15),
      i > 300 && (r = 60),
      i > 3600 && (r = 900),
      i > 3600 * 24 * 7 && (r = 3600),
      this.Ue && clearTimeout(this.Ue),
      (this.Ue = setTimeout(() => this.ln(), r * 1e3)));
  }
  rc() {
    if (
      (this.o.u.hi && (this.o.u.hi.cn?.destroy(), this.o.u.hi._r?.destroy()),
      ri(this.l))
    ) {
      let e = c({
        style: {
          display: "flex",
          alignItems: "center",
          marginInline: `27px ${this.te ? 6 : 18}px`,
          marginBlockEnd: "10px",
        },
        children: {
          icon: new Oe(
            { dimension: "12px", style: { flex: "0 0 auto" } },
            (i) => `images/share${i ? "" : "-dark"}.png`,
          ),
          label: c({
            style: {
              marginInlineStart: "8px",
              marginInlineEnd: "8px",
              fontSize: "11px",
            },
            textContent:
              f("sharedExpiresColon") +
              " " +
              Ns(new Date(this.l.shareExpiryDate)),
          }),
          cn: new Gt({
            gl: !0,
            label: f("copySharedPageUrl"),
            onclick: async () => {
              let i = await T.ht(this.l.id),
                s = zn(i.shareId);
              (await navigator.clipboard.writeText(s),
                e.u.cn.Xt(f("copiedToClipboard")),
                setTimeout(() => e.u.cn.Xt(f("copySharedPageUrl")), 3e3));
            },
          }),
          _r: new Gt({
            gl: !0,
            label: f("modifySharing"),
            onclick: async () => await dr(this.l.id),
          }),
        },
      });
      (this.o.u.hi.i.replaceWith(e.i), (this.o.u.hi = e));
    } else this.o.u.hi.i.style.display = "none";
  }
  Yr() {
    if (F(this.l)) return;
    let e;
    this.A && this.A.count()
      ? this.l.groupType === "tabGroup"
        ? (e = this.k.filter(
            (n) => n instanceof at && this.A.nt.some((r) => r.At === n.At),
          ).length)
        : (e = this.A.nt.length)
      : (e = this.Xi());
    let i =
        e === 0 &&
        this.H &&
        !this.vt &&
        !this.te &&
        !this.k.map((n) => n instanceof $t).length,
      s = i ? "" : Wi(e);
    (this.$e.Dl(s),
      ro(this.o.u.Rh, (n) => {
        (this.o.u.destination &&
          (this.o.u.destination.o.i.style.display = i ? "none" : "block"),
          (n.i.style.display = i ? "block" : "none"));
      }),
      this.zh(!i && this.ws),
      this.o.u.Zt &&
        (this.o.u.Zt.i.style.display = !i && this.ws ? "flex" : "none"));
  }
  Xi() {
    return this.k
      .map((e) => (e instanceof at ? 1 : e.Xi()))
      .reduce((e, i) => e + i, 0);
  }
  async ad(e) {
    let i = this.k.filter((s) => s.l.id === e.l.id).findIndex((s) => s === e);
    (await T.move({
      rt: [wt({ itemId: e.l.id, Fe: this.l.id, zt: i })],
      O: "trash",
    }),
      await T.Oe([this.l.id]));
  }
  async ld({ ud: e, Xm: i = !1, hd: s = [] }) {
    if (!this.J) throw new Error("Already committed");
    let n = [],
      r = [],
      o,
      a,
      l = [],
      h = new Set(s),
      u = new Map(),
      d = new Map(),
      w = (m) => (d.has(m) || d.set(m, m.fo(s)), d.get(m)),
      b = w(this),
      p =
        !e && (b.length || this.k.some((m) => m instanceof $t && w(m).length)),
      x = 0,
      g = this.k.flatMap((m, v) => {
        if (m instanceof at) {
          let A = I(m.isSelected() && !h.has(m.l.id), m);
          return (Dt(this.l) && A && v < this.l.pinnedCount && x++, A);
        } else if (m instanceof $t) {
          let A = w(m);
          return i ? A : I(A.length, m);
        } else throw new Error("childView instance type unrecognized");
      });
    ((o = g.map((m) => m.l.id)),
      (a = g.map((m) => ({ itemId: m.l.id, At: m.At }))),
      p &&
        n.push({
          ...this.l,
          childIds: o,
          ...(Dt(this.l) && {
            pinnedCount: (await Promise.all(b.map((m) => m.At).map(qo))).filter(
              (m) => m?.pinned,
            ).length,
          }),
        }));
    let y = (m, v, A) => {
      let D = u.get(m.l.id);
      (D || ((D = { ...m.l }), r.push(D), u.set(D.id, D)),
        (D.parentIds = ye(D.parentIds.filter(Qr(v)), A)));
    };
    for (let m of this.k) {
      let v = m instanceof $t ? w(m) : void 0;
      if (m instanceof $t && v.length) {
        if (!i) {
          let A = {
            ...m.l,
            childIds: v.map((M) => M.l.id),
            ...(e && {
              parentIds: ye(
                m.l.parentIds.filter((M) => M === "quickList"),
                e,
              ),
            }),
          };
          n.push(A);
          let D = { Qt: A, dd: v.map((M) => ({ itemId: M.l.id, At: M.At })) };
          ((D.di = (await chrome.tabs.get(D.dd[0].At))?.groupId), l.push(D));
        }
        v.forEach((A) => {
          y(A, m.l.id, i ? (e ?? this.l.id) : m.l.id);
        });
      } else
        m instanceof at &&
          m.isSelected() &&
          !h.has(m.l.id) &&
          y(m, this.l.id, e ?? this.l.id);
    }
    let k = new Set(["quickList", ...n.map((m) => m.id), ...I(e)]);
    return (
      r.forEach((m) => (m.parentIds = m.parentIds.filter((v) => k.has(v)))),
      r.forEach((m) => delete m.pinned),
      { fd: n, pd: r, md: o, wd: x, xd: a, bd: l }
    );
  }
  yd(e = []) {
    return [...this.fo(e), ...this.Vr().flatMap((i) => i.fo(e))];
  }
  uc() {
    return (
      this.k.some((e) => e instanceof at && e.Gt()) ||
      this.Vr().some((e) => e.uc())
    );
  }
  fo(e = []) {
    let i = new Set(e);
    return this.k.filter(
      (s) => s instanceof at && s.isSelected() && !i.has(s.l.id),
    );
  }
  Vr() {
    return this.k.filter((e) => e instanceof $t);
  }
  gd() {
    return this.k.filter((e) => e instanceof at);
  }
  po(e = []) {
    return [
      ...this.fo(e).map((i) => i.At),
      ...this.k.filter((i) => i instanceof $t).flatMap((i) => i.po(e)),
    ];
  }
  hc() {
    return this.o.u.Kl.flags.hc();
  }
  kd() {
    return this.o.u.jh;
  }
  async Ge(e) {
    if (!this.j) {
      if (
        (Lt(e.targetParentGroupTypeUpdated, (i) => this.ze(i)),
        Lt(
          e.targetParentId === this.l.id && e.targetParentGroupTypeUpdated,
          (i) => this.ze(i),
        ),
        e.type === "update" && this.l.id === e.itemId)
      ) {
        if (
          (yt(e, "label", (i) => this.mo(i)),
          yt(e, "notes", (i) => this.wo(i)),
          yt(e, "rating", (i) => this.fi(i)),
          yt(e, "archived", (i) => this.Bi(i)),
          yt(e, "color", (i) => this.setColor(i)),
          yt(e, "collapsed", (i) => this.Td(i)),
          yt(e, "openType", (i) => this.Id(i)),
          yt(e, "groupType", (i) => this.ze(i)),
          yt(e, "locked", (i) => this.vd(i)),
          yt(e, "pinnedCount", (i) => (this.l.pinnedCount = i)),
          Be.some((i) => e.propChanges[i]))
        ) {
          let i = Object.fromEntries(
            Object.entries(e.propChanges)
              .filter(([s, n]) => Be.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          this.Ci(i);
        }
        if (tn.some((i) => e.propChanges[i])) {
          let i = Object.fromEntries(
            Object.entries(e.propChanges)
              .filter(([s, n]) => tn.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          (Object.assign(this.l, i), this.rc());
        }
      } else if (e.type === "store" && this.l.id === e.targetParentId) {
        let i = await ot(this.l.id);
        ((this.l.pinnedCount = i.pinnedCount), await this.sync());
      } else if (e.type === "move") {
        let i = e.itemsMeta.find(
          (s) => s.itemId === this.l.id && s.groupTypeUpdated,
        );
        if (i) {
          let s = i.groupTypeUpdated;
          this.ze(s);
        }
        _t(this.l.id, [
          ...e.itemsMeta.flatMap((s) => [s.sourceParentId, s.itemId]),
          e.targetParentId,
        ]) && (await this.sync());
      } else
        e.type === "copy" && e.targetParentId === this.l.id
          ? await this.sync()
          : (e.type === "sort" && e.parentId === this.l.id) ||
              this.l.parentIds.includes(e.parentId)
            ? await this.sync()
            : e.type === "pin" &&
              e.parentId === this.l.id &&
              (await this.sync());
      this.k?.forEach((i) => i.Ge(e));
    }
  }
  oc(e, i) {
    ((this.ut = e),
      Lt(
        this.o.u.Zh,
        (s) => (s.i.style.display = this.l.locked ? "inline-block" : "none"),
      ),
      i || (async () => await this.sync({ Hi: !0 }))());
  }
  vd(e) {
    ((this.l.locked = e), this.oc(e));
  }
  mo(e) {
    ((this.l.label = e), this.$e.et(e));
  }
  wo(e) {
    ((this.l.notes = e),
      (this.o.u.sn.i.style.display = this.l.notes?.text ? "block" : "none"),
      this.Y.et(this.l.notes?.text));
  }
  fi(e) {
    ((this.l.rating = e), this.o.u.flags?.update());
  }
  un(e) {
    ((this.pinned = e), this.o.u.flags?.update());
  }
  Bi(e) {
    ((this.l.archived = +e),
      this.o.i.classList[e ? "add" : "remove"]("archived"));
  }
  Ci(e) {
    (Object.assign(this.l, e),
      ["task-pending", "task-done"].forEach((i) =>
        this.o.i.classList.remove(i),
      ),
      this.l.task && !this.l.done && this.o.i.classList.add("task-pending"),
      this.l.task && this.l.done && this.o.i.classList.add("task-done"),
      this.o.u.flags?.update());
  }
  setColor(e) {
    ((this.l.color = e), this.dc());
  }
  Td(e) {
    this.l.collapsed = e;
  }
  Id(e) {
    this.l.openType = e;
  }
  ze(e) {
    if (((this.l.groupType = e), this.dc(), !this.J)) {
      let i = this.k.filter((s) => s instanceof at);
      (async () => {
        let s = new ht();
        await s.Te({ groupId: this.l.id });
        for (let n = 0; n < i.length; n++) {
          let r = i[n];
          await this.fc({ item: { ...r.l }, view: r, h: s, index: n });
        }
      })();
    }
    this.l.color || this.setColor(Ee);
  }
  mc() {
    let e = this.k.filter((s) => s instanceof at && !s.tr()).length,
      i = this.k
        .filter((s) => s instanceof $t)
        .map((s) => s.mc())
        .reduce((s, n) => s + n, 0);
    return e + i;
  }
  wc() {
    let e = this.k.filter((s) => s instanceof at && s.tr()).length,
      i = this.k
        .filter((s) => s instanceof $t)
        .map((s) => s.wc())
        .reduce((s, n) => s + n, 0);
    return e + i;
  }
  async Xl() {
    let e = this.mc(),
      i = this.wc();
    this.o.u.ho.i.style.display = e ? "block" : "none";
    let s;
    (i
      ? (s = C("seeOtherTabsInThisGroup", e))
      : (s = C("seeTabsInThisGroup", e)),
      (this.o.u.ho.i.textContent = s),
      (this.o.u.ho.i.style.paddingInlineStart = i ? "52px" : "32px"));
  }
  De({ pi: e }) {
    this.j ||
      ((this.j = !0),
      this.Ue && clearTimeout(this.Ue),
      this.o.u.flags?.destroy(),
      this.o.u.hi?.cn?.destroy(),
      this.o.u.hi?._r?.destroy(),
      this.o.u.xc?.destroy(),
      this.o.u.K && (this.o.u.K.onclick = null),
      this.o.u.destination?.destroy(),
      this.o.u.Jh?.destroy(),
      this.o.u.Xh?.destroy(),
      this.o.u.Lr?.destroy(),
      this.o.u.Ei?.destroy(),
      this.o.u.Qr?.destroy(),
      this.o.u.Vh?.destroy(),
      this.o.u.Jr?.destroy(),
      this.o.u.Pr?.destroy(),
      this.o.u.cn?.destroy(),
      this.o.u._r?.destroy(),
      (this.m ?? []).forEach((i) => i.remove()),
      (this.m = null),
      this.Ue !== void 0 && clearTimeout(this.Ue),
      (this.fe = null),
      e || this.o.i.remove(),
      this.Ts?.destroy(),
      this.$e?.destroy(),
      this.Y?.destroy(),
      (this.$e = null),
      (this.Y = null),
      this.k.forEach((i) => i.De({ pi: e })),
      (this.k = null),
      (this.on = null),
      (this.o.u = null),
      (this.o = null),
      this.on?.destroy());
  }
  Ad({ item: e, ci: i, index: s, di: n }) {
    let r = this.jt && this.jt.has(e.id),
      o;
    return (
      B(e)
        ? (o = new at({
            vt: this.vt,
            hn: !this.J,
            Mt: this.Mt,
            C: this.C,
            H: this.H,
            dt: this.jt && r,
            Ft: this.Ft,
            Nt: ({ e: a, qi: l }) =>
              this.Nt({
                e: a,
                qi: l,
                dn: this,
                tabIndex: this.k.filter((h) => h instanceof at).indexOf(l),
              }),
            ...(this.ps && { fn: async (a) => await this.ad(o) }),
            At: i?.[s],
            A: this.A,
            xo: this.li,
            It: ({ de: a, pe: l, X: h, Ui: u }) => {
              (a ? this.fe.add(e.id) : this.fe.delete(e.id),
                this.It({
                  de: this.Rt || this.fe.size > 0,
                  pe: l,
                  X: h,
                  Ui: u,
                }));
            },
            We: async (a, l) => {
              let h = this.k
                  .filter((d) => d.l.id === o.l.id)
                  .findIndex((d) => d === o),
                u = [wt({ itemId: o.l.id, Fe: this.l.id, zt: h })];
              await me({
                title: f("chooseLocationToRestoreTo"),
                He: F(o.l),
                io: async (d) => {
                  await ce({ rt: u, O: d.id });
                },
              });
            },
            Ne: async () => {
              let a = this.k
                  .filter((h) => h.l.id === o.l.id)
                  .findIndex((h) => h === o),
                l = [wt({ itemId: o.l.id, Fe: this.l.id, zt: a })];
              await T._h({ rt: l });
            },
          }))
        : Y(e) &&
          (o = new $t({
            Gr: () => this.Yr(),
            Mt: this.Mt,
            te: !0,
            H: this.H,
            vt: this.vt,
            dt: this.jt && (r || e.childIds.some((a) => this.jt.has(a))),
            Ft: this.Ft,
            Nt: ({ e: a, qi: l, dn: h }) =>
              this.Nt({
                e: a,
                qi: l,
                dn: h,
                tabIndex: o.k.filter((u) => u instanceof at).indexOf(l),
              }),
            Vt: this.Vt && !this.C,
            qe: this.qe && !this.C,
            ps: this.ps && !this.C,
            A: this.A,
            ...(this.J && {
              J: this.J,
              X: `uncommitted:tabGroup-${n}`,
              It: ({ de: a, pe: l, X: h, Ui: u }) => {
                (a ? this.fe.add(e.id) : this.fe.delete(e.id),
                  this.It({
                    de: this.Rt || this.fe.size > 0,
                    pe: l,
                    X: h,
                    Ui: u,
                  }));
              },
            }),
          })),
      o
    );
  }
  async fc({ item: e, view: i, h: s, index: n, ci: r, Se: o }) {
    B(e)
      ? (await i.st({
          ut: this.ut,
          ta: e,
          pinned: n < (this.l.pinnedCount ?? 0),
          xe: this.l.id,
          wt: this,
          ys: Dt(this.l) && this.Rl,
          h: s,
        }),
        i.A && o?.has(i.At) && i.lt(!0))
      : Y(e) &&
        (await i.st({
          ut: this.ut,
          C: this.C,
          me: this.me,
          groupId: e.id,
          pinned: n < (this.l.pinnedCount ?? 0),
          jt: this.jt,
          h: s,
          ci: r?.[n],
          Se: o,
        }));
  }
  async sync({ h: e, ci: i, Se: s, Hi: n } = {}) {
    if (!this.j) {
      if (((e ??= new ht()), !F(this.l))) {
        let r;
        i?.length && (r = (await chrome.tabs.get(i.flat()[0])).groupId);
        let o = await e.ht(this.l.id);
        ((this.l.parentIds = o.parentIds), (this.l.childIds = o.childIds));
        let a = o.pinnedCount ?? 0;
        ((this.l.pinnedCount = a),
          await os({
            Hi: n,
            ea: this.l.childIds.map((l, h) => ({ id: l, index: h })),
            Me: this.o.u.Me,
            views: this.k,
            bc: (l) => l.un?.(l.index < a),
            ia: (l) => l.l.id,
            pn: (l) => l.o?.i,
            sa: async (l, h) => {
              let u = await e.ht(l);
              if (!u) return;
              let d = this.Ad({ item: u, ci: i, index: h, di: r });
              return (
                await this.fc({
                  item: u,
                  view: d,
                  h: e,
                  index: h,
                  ci: i,
                  Se: s,
                }),
                d
              );
            },
          }),
          this.Yr());
      }
      (await this.$d(e), this.Gr?.());
    }
  }
  async $d(e) {
    if (!this.j && this.o?.u.lo) {
      let i = (
        await xi({
          h: e,
          itemId: this.l.id,
          ...(this.bs && { fontSize: "12px" }),
        })
      ).i;
      if (this.j) return;
      (this.o.u.lo.i.replaceWith(i), (this.o.u.lo.i = i));
    }
  }
  yc() {
    this.k.filter((e) => e instanceof at).forEach((e) => e.lt(!0));
  }
  gc(e) {
    let i = !1;
    this.k
      .filter((s) =>
        s instanceof at ? (s === e && (i = !0), !i || s === e) : !1,
      )
      .forEach((s) => s.lt(!0));
  }
  kc(e) {
    let i = !1;
    this.k.filter((s) => (s === e && (i = !0), i)).forEach((s) => s.lt(!0));
  }
  Tc(e) {
    (this.k
      .filter((i) => i instanceof at)
      .filter((i) => i !== e)
      .forEach((i) => i.lt(!0)),
      e.lt(!1));
  }
  Ic() {
    this.k.filter((e) => e instanceof at).forEach((e) => e.lt(!e.Gt()));
  }
  vc() {
    this.A.reset();
  }
  na(e, i) {
    let s = this.k.filter((n) => n instanceof at);
    if (s.includes(e)) {
      let n = !1,
        r = !1;
      s.forEach((o) => {
        let a = !1;
        (!n && (o === e || o === i) && ((n = !0), (a = !0)),
          n && !r && (o.oa || o.lt(!0)),
          !a && n && (o === e || o === i) && (r = !0));
      });
    } else return;
  }
  Ac() {
    return this.k.filter((e) => e instanceof at && e.Gt()).length;
  }
  ra() {
    return this.gd().length;
  }
  $c(e) {
    return this.k.filter((i) => i instanceof at)[0] !== e;
  }
  Sc(e) {
    return this.k.filter((i) => i instanceof at).at(-1) !== e;
  }
  ac() {
    this.Ts ||
      !kt(this.l) ||
      ((this.Ts = new _i({
        dt: !0,
        color: this.l.color,
        dimension: "10px",
        $: {
          flex: "0 0 auto",
          marginInlineStart: "7px",
          marginInlineEnd: "2px",
          position: "relative",
          top: "15px",
        },
      })),
      (this.m ??= []).push(
        ...Wt(this.Ts.o.i, { Yt: f("tabGroupIndicatorTooltipHelp") }),
      ),
      (this.bo = c({ children: { Ts: this.Ts } })),
      this.o.u.$e.o.i.before(this.bo.i));
  }
  dc() {
    kt(this.l)
      ? (this.ac(),
        (this.bo.i.style.display = "inline-block"),
        this.Ts.setColor(this.l.color))
      : this.bo && (this.bo.i.style.display = "none");
  }
}
async function ie(t) {
  if (
    (t.task && this.l.archived && (t.archived = 0),
    Ui(t, "archived", (e) => this.Bi(e)),
    Ui(t, "rating", (e) => this.fi?.(e)),
    Ui(t, "task", (e) => {
      this.Ci({ task: +e, done: t.done });
      let i = e,
        s = t.done;
      (i || ((t.pendingDate = void 0), (t.doneDate = void 0)),
        i && !s && ((t.pendingDate = +new Date()), (t.doneDate = void 0)),
        i && s && (t.doneDate = +new Date()));
    }),
    this.J)
  ) {
    (Object.assign(this.l, t),
      t.parentIds &&
        Ur(t.parentIds, this.nn.parentIds) &&
        (t.parentIds = void 0),
      t?.rating === 0 && (t.rating = void 0),
      t?.archived === 0 && (t.archived = void 0),
      t?.task === 0 && (t?.done === 0 && (t.done = void 0), (t.task = void 0)));
    let e = await ge(this.X, t);
    ((this.Rt = Object.entries(e).length > 0),
      this.It({
        de: this.Rt || this.fe?.size,
        pe: !0,
        X: this.X,
        Ui: this.yo,
      }));
  } else {
    if (Object.hasOwn(t, "pinned")) {
      let e, i;
      (B(this.l)
        ? ((i = this.xe),
          (e = this.wt.k
            .filter((s) => s instanceof at && this.l.id === s.l?.id)
            .findIndex((s) => s === this)))
        : (i = this.l.parentIds.find(rt)),
        await T.Ir({ itemId: this.l.id, parentId: i, zt: e, value: t.pinned }),
        delete t.pinned);
    }
    (Object.assign(this.l, t),
      Object.keys(t).length && (await T.Fi(this.l.id, t)));
  }
}
function bn({ Me: t, k: e, ed: i, sd: s, we: n, nd: r, Oc: o = !1 }) {
  let a = [];
  return (
    a.push(
      ...S.hr({
        Ae: t,
        i: t.i,
        dr: (l) => {
          if (!t?.i?.isConnected) return !1;
          let h = i();
          if (!h || !s()) return !1;
          let u = S.F ? (S.ft?.types ?? []) : ["tab"];
          return !(
            (S.F && !u.length) ||
            !gi({ Er: u, Fr: n, jr: h, Br: r(), Cr: "groupView" }) ||
            di(l)
          );
        },
        pr: (l) => {
          sa({ e: l, pn: (h) => h?.o?.i, k: e, Me: t, Oc: o });
        },
        mr: () => {
          lt.remove();
        },
        wr: async (l) => {
          if (!t?.i?.isConnected) return;
          let h = i();
          if (h && t.i.contains(lt))
            try {
              await yi({
                e: l,
                Hr: () => {
                  let u = [...t.i.children],
                    d = u.findIndex((k) => k === lt);
                  if (d < 0) {
                    let k = e.filter((m) => m?.o?.i?.parentElement === t.i);
                    return k.length ? k.at(-1)?.index + 1 : void 0;
                  }
                  let w = new Map();
                  e.forEach((k) => {
                    let m = k?.o?.i;
                    m && m.parentElement === t.i && !w.has(m) && w.set(m, k);
                  });
                  let b = u
                      .filter((k) => k !== lt)
                      .map((k) => w.get(k))
                      .filter(Boolean),
                    p = b[d]?.index;
                  (d === b.length && b.length && (p = b[d - 1]?.index + 1),
                    p === void 0 &&
                      d > b.length &&
                      b.length &&
                      (p = b.at(-1)?.index + 1));
                  let x = S.F ? (S.ft?.types ?? []) : [],
                    g = S.F ? (S.ft?.Ae?.itemsMeta ?? []) : [],
                    y =
                      h === "quickList" ||
                      (x.includes("tab") &&
                        (g.some((k) => k.sourceParentId === "quickList") ||
                          mn(l)));
                  if (
                    Number.isFinite(p) &&
                    S.F &&
                    !G.q &&
                    Array.isArray(G.ji) &&
                    !y
                  ) {
                    let k = G.ji.reduce((m, v) => {
                      let A = e.find((D) => D?.o?.i === v);
                      return m + (A?.index < p ? 1 : 0);
                    }, 0);
                    k && (p = Math.max(0, p - k));
                  } else if (
                    Number.isFinite(p) &&
                    S.F &&
                    G.q &&
                    !x.includes("tab") &&
                    !y
                  ) {
                    let k = new Set(g.map((m) => m.itemId));
                    if (k.size) {
                      let m = u.reduce((v, A, D) => {
                        if (D >= d || A === lt) return v;
                        let M = w.get(A);
                        return v + (k.has(M?.l?.id) ? 1 : 0);
                      }, 0);
                      m && (p = Math.max(0, p - m));
                    }
                  }
                  return (
                    p === void 0 &&
                      b.length &&
                      console.log("Warn: viewIndex not found"),
                    p
                  );
                },
                qr: () => h,
                Ur: () => n,
                Sd: () =>
                  !G.q && G.i && G.ji.length === 1 && lt.replaceWith(G.i),
              });
            } finally {
              lt.remove();
            }
        },
      }),
    ),
    a
  );
}
function sa({ e: t, pn: e, k: i, Me: s, Oc: n }) {
  if (!s?.i?.isConnected) {
    lt.remove();
    return;
  }
  let r = G.Mc ?? 20;
  t.currentTarget !== G.currentTarget &&
    ((G.currentTarget = t.currentTarget),
    n
      ? ((lt.style.border = ""),
        (lt.style.borderBottom = "var(--drop-area-border)"),
        (lt.style.borderRadius = ""),
        (lt.style.height = 0))
      : ((lt.style.borderBottom = ""),
        (lt.style.border = "var(--drop-area-border)"),
        (lt.style.borderRadius = "10px"),
        (lt.style.height = `${r - 6}px`)));
  let o = new Set(
      i.map((l) => e(l)).filter((l) => l && l.parentElement === s.i),
    ),
    a = null;
  for (let l of s.i.children) {
    if (l === lt || !o.has(l)) continue;
    let h = l.getBoundingClientRect(),
      u = h.y + h.height / 2;
    if (l.previousSibling === lt ? t.clientY < u : t.clientY < u - 1) {
      a = l;
      break;
    }
  }
  (a?.parentElement !== s.i && (a = null), s.i.insertBefore(lt, a));
}
async function gn(t) {
  let e = [wt({ itemId: t.id })];
  await me({
    title: f("chooseLocationToRestoreTo"),
    He: F(t),
    io: async (i) => {
      await ce({ rt: e, O: i.id });
    },
  });
}
class Oe {
  constructor(
    {
      className: e = "",
      dimension: i,
      width: s = i,
      height: n = i,
      style: r = {},
      l: o = {},
      Ym: a,
      St: l,
      init: h,
    },
    u,
  ) {
    ((this.Gc = u),
      (this.o = L("picture", {
        style: { width: s, height: n, ...r },
        className: `lightDarkPicture${e ? " " + e : ""}`,
        ...o,
        draggable: !1,
        children: { ko: na(u(!0), u(!1), s, n) },
        ...(a && {
          onpointerover: (d) => this.Re(!0),
          onpointerout: (d) => this.Re(!1),
        }),
        ...(l && { onclick: l }),
      })),
      h?.(this.o));
  }
  _m(e) {
    ((this.Gc = e),
      (this.o.ko.src = e(se)),
      (this.o.ko.dataset.lightSrc = e(!0)),
      (this.o.ko.dataset.darkSrc = e(!1)));
  }
  Re(e = !1) {
    this.o.ko.src = this.Gc(se, e);
  }
}
function z(...t) {
  return new Oe(...t).o.i;
}
function na(t, e, i, s) {
  const n = document.createElement("img");
  return (
    (n.className = "lightDarkInnerImg"),
    (n.dataset.lightSrc = t),
    (n.dataset.darkSrc = e),
    (n.draggable = !1),
    (n.src = se ? t : e),
    (n.style.maxWidth = i),
    (n.style.maxHeight = s),
    n
  );
}
class Qt {
  constructor({
    Dc: e,
    Pc: i,
    onChange: s,
    fontSize: n = "12px",
    $: r = {},
    Vm: o = !1,
    tw: a = !1,
    Od: l = !1,
  }) {
    ((this.Dt = Object.fromEntries(
      e.map((u) => [
        u.name,
        {
          mi: u,
          button: ra({
            fontSize: n,
            label: u.label,
            isSelected: i.includes(u.name),
            St: async (d) => {
              if (u.St) u.St(d);
              else {
                let w = this.Dt[u.name].button.i.classList.contains("on");
                if (o) {
                  this.Dt[u.name].button.i.classList.toggle("on");
                  let b = this.Lc();
                  (await s(b)) === !1 &&
                    this.Dt[u.name].button.i.classList.remove("on");
                } else if (w) {
                  if (a) {
                    let b = Object.values(this.Dt).find(
                      ({ mi: g, button: y }) => y.i.classList.contains("on"),
                    )?.button.i;
                    Object.values(this.Dt).forEach(({ button: g }) =>
                      g.i.classList.remove("on"),
                    );
                    let p = this.Lc();
                    (await s(p)) === !1 && b.classList.add("on");
                  }
                } else {
                  let b = Object.values(this.Dt).find(({ mi: x, button: g }) =>
                    g.i.classList.contains("on"),
                  )?.button.i;
                  (Object.values(this.Dt).forEach(({ button: x }) =>
                    x.i.classList.remove("on"),
                  ),
                    this.Dt[u.name].button.i.classList.add("on"),
                    (await s([u.name])) === !1 &&
                      (this.Dt[u.name].button.i.classList.remove("on"),
                      b.classList.add("on")));
                }
              }
            },
          }),
        },
      ]),
    )),
      l && (this.Dt = Object.fromEntries(Object.entries(this.Dt).reverse())));
    let h = Object.fromEntries(
      Object.values(this.Dt).map(({ mi: u, button: d }) => [
        u.name,
        c({
          children: {
            Md: c({
              style: { height: 0, fontSize: n },
              p: c({
                className: "multiple-choice-button",
                style: {
                  fontSize: n,
                  overflow: "hidden",
                  visibility: "hidden",
                  fontWeight: "var(--multiple-choice-button-bold-font-weight)",
                },
                textContent: u.label,
              }),
            }),
            button: d,
          },
        }),
      ]),
    );
    this.o = c({
      style: {
        display: "flex",
        rowGap: "2px",
        columnGap: "6px",
        flexDirection: l ? "row-reverse" : "row",
        alignItems: "flex-end",
        flexWrap: "wrap",
        userSelect: "none",
        ...(r ?? {}),
      },
      children: h,
    });
  }
  Lc() {
    return Object.values(this.Dt)
      .filter(({ mi: e, button: i }) => i.i.classList.contains("on"))
      .map(({ mi: e }) => e.name);
  }
  clear() {
    Object.values(this.Dt).forEach(({ mi: e, button: i }) =>
      i.i.classList.remove("on"),
    );
  }
  ew(e, i) {
    this.Dt[e].button.i.classList.toggle("on", i);
  }
}
const { gr: ra, nl: oa, kr: aa, rl: la, Tr: ha, lt: X, Ar: ca, ol: ua, $r: da, fe: ts, vr: fa, Ir: pa, Or: kn, Mr: ma, Sr: xa, al: es } = createOneTabUiControls({ h: (...a) => c(...a), G: (...a) => L(...a), W: (...a) => z(...a), Xt: Oe, O: (...a) => I(...a), ws: Ne, co: (...a) => Ya(...a), xe: (...a) => ns(...a), z: (...a) => tt(...a), ti: (...a) => Me(...a), Kr: (...a) => Ba(...a), x: (...a) => f(...a), Gs: (...a) => Gn(...a), J: () => U(), Yr: (...a) => Wa(...a), Bs: (...a) => Qe(...a), Ve: (...a) => Js(...a), Qt: (...a) => ye(...a), Zi: (...a) => Li(...a), ze: (...a) => Us(...a), oi: (...a) => Ft(...a), getSettings: () => T, getModal: () => gt, getTheme: () => Ce, getTooltip: () => bt });
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
  get Hs() { return Hn; },
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
  get Pr() { return ga; },
  get Ps() { return os; },
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
  get js() { return Nn; },
  get jt() { return oe; },
  get ks() { return An; },
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
async function Ue({ parentId: t, we: e, N: i, Ri: s }) {
  let n = Zt();
  return (
    s && (s.L.$a = n),
    await T.Sa({ id: n, parentId: t, we: e, N: i }),
    n
  );
}
function ga(t) {
  let e = t.some((n) => n?.G.l.id === "quickList"),
    i = t.some((n) => n.L.l.id === "trash"),
    s = t.some((n) => Y(n.l) && !n.l.label);
  return [
    ...new Set([
      ...t.map((n) => (Y(n.l) ? n.l.groupType : n.l.type)),
      ...I(i, "trash"),
      ...I(s, "untitled"),
      ...I(e, "isTreeItemInQuickListRoot"),
    ]),
  ];
}
function An({ Vc: t, view: e, Ni: i }) {
  return [
    X.bi({
      label: f("selectAll"),
      name: "all",
      icon: { I: "select-all", dimension: "14px", left: "0px", top: "1px" },
      action: () => {
        (t.yc(), i());
      },
    }),
    ...I(
      t.$c(e),
      X.bi({
        label: f("selectThisAndAbove"),
        name: "thisAndAbove",
        icon: { I: "up-arrow", dimension: "10px", left: "1px" },
        action: () => {
          (t.gc(e), i());
        },
      }),
    ),
    ...I(
      t.Sc(e),
      X.bi({
        label: f("selectThisAndBelow"),
        name: "thisAndBelow",
        icon: { I: "down-arrow", dimension: "10px", left: "1px" },
        action: () => {
          (t.kc(e), i());
        },
      }),
    ),
    ...I(
      t.ra() > 1,
      X.bi({
        label: f("selectAllExceptThis"),
        name: "exceptThis",
        icon: { I: "except-this", dimension: "12px", top: "1px" },
        action: () => {
          (t.Tc(e), i());
        },
      }),
    ),
    ...I(
      t.ra() > 1,
      X.bi({
        label: f("invertSelection"),
        name: "invert",
        icon: { I: "invert", dimension: "12px", top: "1px" },
        action: () => {
          (t.Ic(e), i());
        },
      }),
    ),
    ...I(
      t.Ac(),
      X.bi({
        label: f("deselectAll"),
        name: "clear",
        icon: { I: "clear", dimension: "12px", top: "1px" },
        action: () => {
          (t.vc(e), i());
        },
      }),
    ),
  ];
}
class ka {
  constructor({ Et: e, h: i, Ar: s, Z: n, B: r, Ot: o, yt: a, xt: l }) {
    ((this.q = "treeBrowser"),
      (this.Et = e),
      (this.h = i),
      (this.yt = a),
      (this.Ar = s),
      (this.Z = n),
      (this.B = r),
      (this.Ot = o),
      (this.xt = l),
      (this.o = c({})),
      (this.Oa = (h) => this.L?.Ge(h, this.L)),
      Sn(this.Oa));
  }
  async st() {
    (this.L?.De({}),
      (this.L = new _e({
        yt: this.yt,
        q: this.q,
        itemId: "root",
        $s: async (e, i) => this.Ar(e, i),
        Pt: !0,
        Z: this.Z,
        B: this.B,
        Ot: this.Ot,
        xt: this.xt,
      })),
      await this.L.st({ h: this.h }),
      this.o.i.replaceChildren(this.L.o.i));
  }
  Vs(e) {
    this.B = e;
  }
  Bh(e) {
    this.Ot = e;
  }
  destroy() {
    (Ia(this.Oa), (this.Oa = null), this.L?.De({}));
  }
}
class In {
  constructor({
    label: e,
    wf: i,
    isOpen: s,
    Ch: n,
    body: r,
    fontSize: o = "13px",
    style: a = {},
  }) {
    ((this.isOpen = s),
      (this.o = c({
        style: { ...a },
        children: {
          header: c({
            style: {
              display: "flex",
              alignItems: "stretch",
              cursor: "pointer",
              fontSize: o,
            },
            onclick: (l) => {
              ((this.isOpen = !this.isOpen),
                fe(this.o.header.Jt.p.style, (h) => {
                  ((h.transform = `rotate(${this.isOpen ? 90 : U() ? 0 : 180}deg)`),
                    (h.top = `${s ? 1 : 0}px`));
                }),
                (this.o.pu.i.style.display = this.isOpen ? "block" : "none"),
                n?.(this.isOpen));
            },
            children: {
              Jt: c({
                className: "tree-item-text",
                style: {
                  userSelect: "none",
                  flex: "0 0 auto",
                  paddingInlineEnd: "6px",
                  display: "inline-block",
                },
                p: z(
                  {
                    width: 20 / 2 + "px",
                    height: 20 / 2 + "px",
                    style: {
                      display: "inline-block",
                      transform: `rotate(${s ? 90 : U() ? 0 : 180}deg)`,
                      top: `${s ? 1 : 0}px`,
                    },
                  },
                  (l) =>
                    `images/tree-twistie-closed-${l ? "light" : "dark"}.png`,
                ),
              }),
              header: c({
                style: {
                  paddingInlineStart: "2px",
                  userSelect: "none",
                  flex: "0 0 auto",
                },
                ...(i && { children: [i] }),
                ...(!i && { textContent: e }),
              }),
            },
          }),
          pu: c({ style: { display: this.isOpen ? "block" : "none" }, p: r }),
        },
      })));
  }
  Hl() {
    return this.o.pu.p;
  }
}
const fi = (t) => t.url && t.type !== "folder",
  ss = (t) => !t.url && t.type !== "bookmark";
function On(t, e = !1, i, s, n) {
  let r = t.children.filter(fi),
    o = t.children.some(ss);
  return c({
    style: { display: "flex", marginTop: "8px" },
    children: {
      bw: c({
        style: {
          flex: "0 0 auto",
          display: e ? "none" : "block",
          fontSize: "16px",
          width: "20px",
        },
      }),
      body: c({
        style: { flex: "1 1 auto" },
        children: {
          yw: c({
            style: { display: "flex", alignItems: "center" },
            children: {
              xf: z(
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
              title: c({
                style: { flex: "0 1 auto", fontWeight: 600 },
                textContent: e ? f("allBookmarks") : t.title,
              }),
              gw: c({
                style: { flex: "0 0 auto" },
                ...(o && {
                  p: new mt({
                    V: !0,
                    label: f("importFolderAndSubfolders"),
                    fontSize: "12px",
                    $: { marginInlineStart: "6px" },
                    Cs: { padding: "1px 5px" },
                    onclick: async (a) => {
                      let l = new Map(),
                        h = (p) => {
                          p.children.forEach((x) => {
                            if (fi(x)) {
                              let g = St(x.url);
                              l.has(g) || l.set(g, x);
                            } else h(x);
                          });
                        };
                      h(t);
                      let u = await T.Xo(
                        await Promise.all(
                          [...l.entries()].map(async ([p, x]) => ({
                            id: await Si(p),
                            kt: p,
                            title: x.title,
                            nh: x.dateAdded || void 0,
                          })),
                        ),
                      );
                      u.forEach((p) => (p.parentIds = []));
                      let d = [],
                        w = (p, x) => {
                          let g = p.children.some(ss),
                            y = p.children.some(fi),
                            k = new Date().getTime(),
                            m;
                          g &&
                            ((m = {
                              id: Zt(),
                              label: p.title || f("importedBookmarks"),
                              type: "group",
                              groupType: "folder",
                              createDate: p.dateAdded ?? k,
                              modifyDate: p.dateGroupModified ?? k,
                              parentIds: [x.id],
                              childIds: [],
                              pinnedCount: 0,
                            }),
                            x.childIds.push(m.id),
                            d.push(m));
                          let v = 1e3,
                            A,
                            D = () => {
                              let M = {
                                id: Zt(),
                                label: m ? void 0 : p.title,
                                type: "group",
                                groupType: "window",
                                createDate: p.dateAdded ?? k,
                                modifyDate: p.dateGroupModified ?? k,
                                parentIds: [m?.id ?? x.id],
                                childIds: [],
                                pinnedCount: 0,
                              };
                              return (
                                d.push(M),
                                (m ?? x).childIds.push(M.id),
                                M
                              );
                            };
                          (y && (A = D()),
                            p.children.forEach((M) => {
                              if (fi(M)) {
                                let N = St(M.url),
                                  Z = u.find((dt) => dt.url === N);
                                (A.childIds.length >= v && (A = D()),
                                  A.childIds.push(Z.id),
                                  Z.parentIds.push(A.id));
                              } else w(M, m);
                            }));
                        },
                        b = await ot(s);
                      for (; !F(b); ) {
                        let p = b.parentIds.find(rt);
                        if (!p)
                          throw new Error("non-quicklist parent id not found");
                        b = await ot(p);
                      }
                      (w(t, b),
                        await T.In({ Lo: d, vn: u, O: b.id, An: [d[0].id] }),
                        n());
                    },
                  }),
                }),
              }),
            },
          }),
          ...(r.length && {
            kw: new In({
              wf: c({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-3px",
                },
                children: {
                  label: c({ style: {}, textContent: ao(r.length) }),
                  bf: c({
                    style: { flex: "0 0 auto" },
                    p: new mt({
                      V: !0,
                      label: f("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (a) => {
                        let l = await T.Ma({
                          Ga: [
                            r.map(({ title: h, url: u }) => ({
                              kt: St(u),
                              title: h,
                            })),
                          ],
                          Gs: i,
                          O: s,
                        });
                        (((l && s !== l && st.an.uo.As) || st.an.uo.Tw) &&
                          (await Vt({ itemId: s, Zi: l })),
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
              body: c({
                style: { marginTop: "5px", marginBottom: "5px" },
                children: r.map((a) => $n(a)),
              }),
            }),
          }),
          Me: c({
            style: { marginTop: "12px", marginBottom: "12px" },
            children: {
              ...t.children.filter(ss).map((a) => On(a, !1, i, s, n)),
              ...(!t.children.length && {
                Iw: c({
                  style: { paddingInlineStart: "26px", fontSize: "12px" },
                  textContent: f("emptyInBrackets"),
                }),
              }),
            },
          }),
        },
      }),
    },
  });
}
function $n(t) {
  let e = (i) => {
    if (!Et(i))
      return ((async () => await chrome.tabs.create({ url: t.url }))(), !1);
  };
  return c({
    className: [...I(t.hasBeenRead, "archived")].join(" "),
    style: {
      marginInlineStart: "30px",
      marginBottom: "8px",
      cursor: "pointer",
    },
    children: {
      Aw: c({
        children: {
          title: L("a", {
            className: "tabLinkText tabLinkTextStripesPossible",
            href: t.url,
            onclick: e,
            textContent: t.title,
          }),
        },
      }),
      url: L("span", {
        onclick: e,
        className: "tabUrlText tabLinkTextStripesPossible",
        textContent: t.url,
      }),
    },
  });
}
async function Ta() {
  (await va(), await We(), vo());
}
async function va() {
  try {
    (await chrome.tabs.getCurrent()) &&
      (await chrome.tabs.update((await chrome.tabs.getCurrent()).id, {
        autoDiscardable: !1,
      }));
  } catch (t) {
    console.log(t);
  }
}
function lc(t) {
  return c({ style: { fontSize: "1px", height: t + "px", width: "1px" } }).i;
}
let Mn = !1;
async function Aa(t, e = {}) {
  if (!Mn) {
    const s = async () => {
      if (
        (
          await chrome.runtime.sendMessage({
            args: [],
            type: "corePing",
            yf: !0,
          })
        )?.result?.pong !== String(mr)
      )
        throw new Error("core version mismatch");
    };
    try {
      await s();
    } catch (n) {
      if (n.message === "core version mismatch") throw n;
      (console.log(n),
        console.log("core not ready. retrying..."),
        await le(1e3));
      try {
        await s();
      } catch (r) {
        (console.log(r),
          console.log("core not ready. retrying..."),
          await le(5e3));
        try {
          await s();
        } catch (o) {
          throw (console.log(o), new Error("Cannot connect to core"));
        }
      }
    }
    Mn = !0;
  }
  ((e.type = t), (e.yf = !0));
  let i = await chrome.runtime.sendMessage(e);
  if (i === null) throw new Error("null message response from core");
  if (i?.gf) throw new Error(i.gf);
  return i.result;
}
const hc = new Proxy(
  {},
  {
    get(t, e) {
      return e;
    },
  },
);
let pi = [];
function Sn(t) {
  pi.push(t);
}
function Ia(t) {
  let e = pi.indexOf(t);
  e >= 0 && pi.splice(e, 1);
}
chrome.runtime.onMessage.addListener((t, e, i) => {
  t.type === "stateChange" && pi.forEach((s) => s(t.$w));
});
const T = Hi(
  new Proxy(
    {},
    {
      get(t, e, i) {
        return (...s) => ((s = Ni(s, void 0, io)), Aa(e, { args: s }));
      },
    },
  ),
  "core",
);
async function We() {
  return new Promise((t, e) => {
    document.readyState === "complete"
      ? t()
      : document.addEventListener("readystatechange", (i) => {
          document.readyState === "complete" && t();
        });
  });
}
function Oa(t) {
  if (!t || t.toLowerCase().startsWith("file://")) return "";
  if (t.indexOf("://docs.google.com/spreadsheets/d/") !== -1)
    return "docs.google.com-spreadsheets";
  if (t.indexOf("://docs.google.com/document/d/") !== -1)
    return "docs.google.com-document";
  if (t.indexOf("://docs.google.com/presentation/d/") !== -1)
    return "docs.google.com-presentation";
  if (t.indexOf("://docs.google.com/forms/d/") !== -1)
    return "docs.google.com-forms";
  let e = $i(t);
  return (e.endsWith(".wikipedia.org") && (e = "wikipedia.org"), e);
}
function Et(t) {
  return Kt(t) || $e(t);
}
function Kt(t) {
  return t.ctrlKey || t.metaKey;
}
function $e(t) {
  return t.shiftKey;
}
function Bt(t) {
  return t.altKey;
}
function cc(t) {
  let e = document.createElement("span"),
    i = t.indexOf("OneTab"),
    s = i + "OneTab".length;
  return (
    i === 0
      ? (e.appendChild(Dn()),
        e.appendChild(document.createTextNode(t.substring(s))))
      : (e.appendChild(document.createTextNode(t.substring(0, i))),
        e.appendChild(Dn()),
        s !== t.length &&
          e.appendChild(document.createTextNode(t.substring(s)))),
    e
  );
}
function Dn() {
  let t = document.createElement("span"),
    e = document.createElement("span");
  return (
    (e.style.fontStyle = "italic"),
    e.appendChild(document.createTextNode("One")),
    t.appendChild(e),
    t.appendChild(document.createTextNode("Tab")),
    t
  );
}
async function $a(t) {
  return new Promise((e, i) => {
    let s = {
        alpha:
          "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      },
      n = new Image();
    ((n.onload = () => {
      let r = n.width > 0 && n.height > 0;
      e(r);
    }),
      (n.onerror = () => {
        e(!1);
      }),
      (n.src = "data:image/webp;base64," + s[t]));
  });
}
async function Ma(t) {
  return new Promise((e, i) => {
    let s = new Image();
    ((s.onload = () => {
      e(Pn(s));
    }),
      (s.onerror = (n) => {
        i(n);
      }),
      (s.src = t));
  });
}
let mi = document.createElement("canvas");
((mi.width = 32), (mi.height = 32));
let Fn = mi.getContext("2d"),
  Ln = "data:image/png;base64,",
  Sa = Ln.length;
function Pn(t) {
  (Fn.clearRect(0, 0, 32, 32), Fn.drawImage(t, 0, 0, 32, 32));
  let e = mi.toDataURL("image/png");
  return e.startsWith(Ln) ? e.substring(Sa) : e;
}
async function qe(t) {
  let { Sw: e, Ow: i } = await T.Mw(t);
  return e ? (await Re(), []) : i;
}
function jn() {
  return f("chromeIncognitoInstructions");
}
async function Re() {
  let t = f("incogitoPermissionRequired") + " " + jn(),
    e = f("privateBrowsingPermissionRequired") + " " + jn();
  await Pt(t);
}
function ns({ style: t = {}, uh: e = 7 }) {
  let i = c({
    className: "spinner",
    style: { opacity: "1", ...t },
    children: Object.fromEntries(
      Vr(e).map((s) => [s, document.createElement("div")]),
    ),
  }).i;
  return (i.animate([{ opacity: "0" }, { opacity: "1" }], 100), i);
}
async function xi({
  h: t,
  itemId: e,
  fontSize: i,
  Qo: s,
  jl: n = !0,
  prefix: r,
}) {
  (r || (r = f("locationColon")), await t.ke());
  let o = await t.Hn(e, s);
  return L("span", {
    style: { fontSize: i ?? "12px" },
    children: {
      ...(n && { Gw: L("span", { textContent: `${r}  ` }) }),
      ...zi(
        o.map((a, l) => ({
          [`loc${l}`]: L("span", {
            dir: "auto",
            style: { cursor: "pointer" },
            textContent: He({ groupId: a.id, h: t, l: a }),
            onclick: async (h) => {
              await T.ec({ itemId: a.id, Zi: l === 0 ? a.id : o[l - 1].id });
            },
          }),
        })),
        () => L("span", { textContent: `  ${U() ? "➝" : "⭠"}  ` }),
      ),
    },
  });
}
async function Gn({ Et: t, groups: e, h: i, he: s, oe: n }) {
  return (
    await Promise.all(e.map(async (o) => [...(await i.Hn(o.id)), o]))
  ).map((o) =>
    c({
      className: "groupPath",
      children: o.map((a, l) =>
        c({
          style: {
            display: "inline-block",
            textIndent: 0,
            whiteSpace: "nowrap",
          },
          p: c({
            style: { display: "flex", alignItems: "flex-start" },
            children: [
              c({
                style: {
                  display: "inline-block",
                  position: "relative",
                  top: "4px",
                  visibility: l === 0 ? "hidden" : "visible",
                },
                textContent:
                  l === 0 ? `${U() ? "➝" : "⭠"}` : `  ${U() ? "➝" : "⭠"}  `,
              }),
              ...I(
                F(a),
                c({
                  className: "tree-item-text",
                  p: z(
                    {
                      width: "13px",
                      height: "13px",
                      style: {
                        display: "inline-block",
                        marginInlineStart: `${l === 0 ? 0 : 16}px`,
                        marginInlineEnd: "4px",
                        position: "relative",
                        top: "6px",
                      },
                    },
                    (h) => `images/folder${h ? "" : "-dark"}.png`,
                  ),
                }),
              ),
              ...I(
                kt(a),
                c({
                  style: { display: "inline-block", paddingTop: "4px" },
                  p: un({
                    color: a.color,
                    dimension: "11px",
                    $: {
                      position: "relative",
                      top: "1px",
                      marginInlineStart: `${l === 0 ? 0 : 7}px`,
                      marginInlineEnd: "4px",
                    },
                  }),
                }),
              ),
              new xa({
                padding: "2px",
                marginInline: "0px -4px",
                marginBlock: "0px 0px",
                label: a.label || (it(a) ? f("all") : f("untitled")),
                oe: n,
                qd: () => s(a),
              }),
            ],
          }),
        }),
      ),
    }),
  );
}
async function rs({ kf: t, Tf: e }) {
  return navigator.clipboard.write([
    new ClipboardItem({
      ...(t && { "text/plain": t() }),
      ...(e && { "text/html": e() }),
    }),
  ]);
}
async function Da(t) {
  try {
    return (await T.corePing(), !0);
  } catch {
    let i = c({
      style: { padding: "40px" },
      children: {
        Dw: L("div", {
          children: {
            a: L("span", { textContent: f("oneTabRestartRequired") + " " }),
            b: L("a", {
              style: { cursor: "pointer", textDecoration: "underline" },
              onclick: () => chrome.runtime.reload(),
              textContent: f("clickHereToContinue"),
            }),
          },
        }),
        Pw: L("div", {
          p: L("div", {
            style: { paddingTop: "20px" },
            textContent: f("mayNeedToRestartBrowser"),
          }).i,
        }),
      },
    });
    return (t.replaceChildren(i.i), !1);
  }
}
async function os({
  Hi: t = !1,
  Me: e,
  views: i,
  ia: s,
  pn: n,
  sa: r,
  ea: o,
  Lw: a,
  Ew: l,
  bc: h,
  pf: u = 10,
}) {
  let d = !1,
    w = 0;
  for (let p = 0; p < o.length; p++) {
    let x = o[p],
      g = i.findIndex((m, v) => v >= p && s(m) === x.id),
      y = i[g],
      k = y && n(y);
    if (!t && k && !y?.tu)
      (g > p && (i.splice(g, 1), i.splice(p, 0, y)),
        e.children.item(p) !== k && e.insertBefore(k, e.children.item(p)),
        k.classList.remove("fadeOutTransition", "fadedOut"));
    else {
      if ((w++, a?.())) {
        d = !0;
        break;
      }
      let m = g >= p ? i[g] : void 0;
      if ((w % u === 0 && (await le(0)), (y = await r(x.id, x.index)), y)) {
        let v = n(y);
        if (!v) (y.De?.({ pi: !0 }), (y = m));
        else {
          let A = p;
          if (m) {
            let D = i.indexOf(m);
            D >= 0 && (m.De?.({ pi: !0 }), i.splice(D, 1), D < A && A--);
          }
          (e.insertBefore(v, e.children.item(A)), i.splice(A, 0, y));
        }
      } else m && (y = m);
    }
    y && ((y.index = x.index), h?.(y));
  }
  if ((a?.() && (d = !0), d)) {
    l();
    return;
  }
  for (; i.length > o.length; ) {
    let p = i[i.length - 1];
    if (!p) {
      i.splice(i.length - 1, 1);
      continue;
    }
    let x = p && n(p),
      g = !x || x.parentElement !== e;
    (p.De({ pi: g }), i.splice(i.length - 1, 1));
  }
  let b = new Set(i.map((p) => n(p)).filter(Boolean));
  [...e.children].forEach((p) => {
    b.has(p) || p.remove();
  });
}
async function uc(t) {
  return Object.fromEntries(
    await Promise.all(
      t.map(
        (e) =>
          new Promise((i) => {
            let s = new Image();
            ((s.onload = () => i([e, s])), (s.src = e));
          }),
      ),
    ),
  );
}
let Ce;
async function Fa() {
  ((Ce = await T.ks("theme")), as());
}
function La() {
  return !window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}
async function Pa(t) {
  (await T.bt("theme", t), (Ce = t), as());
}
let se;
function as() {
  ((se = { auto: La(), light: !0, dark: !1 }[Ce]),
    ja(),
    [...document.querySelectorAll(".lightDarkInnerImg")].forEach((t) => {
      t.src = t.dataset[se ? "lightSrc" : "darkSrc"];
    }),
    En.forEach((t) => t()));
}
function ja() {
  let [t, e] = {
    auto: ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    light: ["all", "not(all)"],
    dark: ["not(all)", "all"],
  }[Ce];
  [...document.styleSheets]
    .flatMap((i) => [...i.cssRules])
    .filter(
      (i) =>
        i instanceof CSSMediaRule &&
        [...i.cssRules].some((s) => s.selectorText === ":root"),
    )
    .forEach((i, s) => (i.media = s % 2 === 0 ? t : e));
}
let En = [];
function dc(t) {
  En.push(t);
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (t) => {
    as();
  });
function fc() {
  return c({
    style: {
      flex: "0 1 auto",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      marginInlineStart: "auto",
      gap: "8px",
    },
    onclick: async (t) => {
      (await T.dl({}), window.close());
    },
    children: [
      z(
        {
          dimension: "10px",
          style: { transform: `rotate(${U() ? 90 : 270}deg)` },
        },
        (t) => `images/down-arrow${t ? "" : "-dark"}.png`,
      ),
      c({ textContent: f("returnToOneTab") }),
    ],
  });
}
function Ga(t, e) {
  const { top: i, bottom: s, height: n } = t.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return i <= r.top ? r.top - i <= n : s - r.bottom <= n;
}
async function Bn(t) {
  let e = new ht(),
    i = await e.ht(t);
  return (F(i) || (await e.Te({ groupId: t })), e);
}
function Me(t) {
  return !t.isComposing && (t.key === "Escape" || t.key === "Esc");
}
function tt(t, e, i, s = !1) {
  return new _s({
    listener: i,
    Ka: () => t.addEventListener(e, i, s),
    Bs: () => t.removeEventListener(e, i, s),
  });
}
function Ze(t, e) {
  return tt(t, "pointerover", e);
}
function Ea(t, e) {
  return tt(t, "pointermove", e);
}
function Je(t, e) {
  return tt(t, "pointerleave", e);
}
async function ce({ rt: t, O: e, N: i }) {
  let s = await Ut(t.map((o) => o.itemId)),
    n = await ot(e);
  if (s.some(F) && !F(n))
    throw new Error(
      "folder should not have been allowed to have been moved here",
    );
  if (s.some(B) && s.some(si(B)))
    throw new Error("Can't mix tabs with groups during smart move");
  let r = new Set(s.map(ls));
  if (r.size > 1)
    throw new Error(
      `Can't mix the following types during smart move: ${[...r].join()}`,
    );
  {
    let o = new ht();
    await o.ke();
    let [a, l] = be(t, (b) => b.sourceParentId),
      h = new Set(
        (await o.getItems([...new Set(l.map((b) => b.itemId))]))
          .filter(B)
          .map(Nt),
      );
    a = a.filter((b) => !h.has(b.itemId));
    let [u, d] = be(l, (b) => h.has(b.itemId)),
      w = [];
    for (let b of u) {
      let p = b.itemId,
        x = o.v(p),
        g = x.parentIds.map((k) => o.v(k)),
        y = [];
      if (
        (g.forEach((k) =>
          k.childIds
            .filter((m) => m === x.id)
            .forEach((m, v) => y.push(wt({ itemId: x.id, Fe: k.id, zt: v }))),
        ),
        e === "trash")
      )
        y.forEach((k) => a.push(k));
      else {
        let k = y[0];
        (a.push(k), y.slice(1).forEach((v) => w.push(v)));
      }
    }
    if (w.length) {
      let b = await T.gs(w);
      (await T.move({ rt: w, O: "delete" }), await T.Oe(b));
    }
    t = [...a, ...d];
  }
  if (e === "trash") {
    let o = await T.gs(t);
    (await T.move({ rt: t, O: e, N: i }), await T.Oe(o));
  } else if (s.some(B) && F(n)) {
    let o = await cs({ O: e, N: i }),
      a = await T.gs(t);
    (await T.move({ rt: t, O: o }), await T.Oe(a));
  } else if (s.some(Dt) && Dt(n)) {
    let o = 0;
    for (let a of t) {
      let l = a.itemId,
        h = await ot(l);
      if (Dt(h)) {
        let u = await Ut(h.childIds);
        if (!0) {
          let w = [];
          (u.forEach((b, p) => {
            B(b)
              ? w.push(
                  wt({
                    itemId: b.id,
                    zt: h.childIds.slice(0, p).filter((x) => x === b.id).length,
                    Fe: h.id,
                  }),
                )
              : w.push(wt({ itemId: b.id }));
          }),
            await T.move({ rt: w, O: e, N: i === void 0 ? void 0 : i + o }),
            (o += u.length),
            await T.Oe([a.itemId], !0));
        } else {
          let [w, b] = be(u, B);
          (b.length &&
            (await T.move({
              rt: b.map((p) => wt({ itemId: p.id })),
              O: e,
              N: i === void 0 ? void 0 : i + o,
            }),
            (o += b.length)),
            w.length
              ? (await T.Fi(h.id, { groupType: "tabGroup", color: Ee }),
                await T.move({
                  rt: [a],
                  O: e,
                  N: i === void 0 ? void 0 : i + (o - b.length),
                }),
                o++)
              : await T.Oe([a.itemId], !0));
        }
      } else if (kt(h)) {
        let u = await T.gs([a]);
        (await T.move({ rt: [a], O: e, N: i === void 0 ? void 0 : i + o++ }),
          await T.Oe(u));
      }
    }
  } else if ((s.some(kt) || s.some(Dt)) && kt(n)) {
    let o = new ht(),
      a = [],
      l = [];
    const h = (u, d, w) => {
      if (Y(u)) {
        let b = u;
        (o.ul(b.childIds).forEach((x, g) => h(x, u, g)), l.push(b));
      } else
        a.push(
          wt({
            itemId: u.id,
            zt: d.childIds.slice(0, w).filter((b) => b === u.id).length,
            Fe: d.id,
          }),
        );
    };
    for (let u of t) {
      let d = u.itemId;
      await o.Te({ groupId: d });
      let w = o.v(d),
        b = await o.ht(w.parentIds.find(rt));
      h(w, b);
    }
    (a.length && (await T.move({ rt: a, O: e, N: i })),
      await T.Oe(l.map(Nt), !0));
  } else {
    let o = await T.gs(t);
    (await T.move({ rt: t, O: e, N: i }), await T.Oe(o));
  }
}
function Qe({
  i: t,
  zc: e,
  duration: i,
  Uc: s,
  Fw: n = (r) => (r ? "ease-in" : "ease-out"),
}) {
  let r = [
    Object.fromEntries(e.map(({ name: o, before: a }) => [o, a])),
    Object.fromEntries(e.map(({ name: o, after: a }) => [o, a])),
  ];
  (s || r.reverse(),
    t.animate(r, { duration: i, jw: 1, Bw: n(s) }),
    e.forEach((o) => (t.style[o.name] = s ? o.after : o.before)));
}
function Ba(t) {
  let e = t.parentElement;
  for (; e; ) {
    const i = window.getComputedStyle(e);
    if (i.overflow === "auto" || i.overflowY === "auto") return e;
    e = e.parentElement;
  }
  return document.body;
}
const Hn = 300;
function Nn(t, e) {
  return t?.length > e ? `${t.substring(0, e)}…` : t;
}
function Ha(t) {
  const e = new Date(t + "T00:00:00Z");
  return (e.setUTCDate(e.getUTCDate() + 1), e.toISOString().split("T")[0]);
}
async function pc(t) {
  let e = await chrome.tabs.query({ groupId: t });
  return await Na(e);
}
async function Na(t) {
  return await Promise.all(
    t.map(async (e) => {
      let i = St(e.url || e.pendingUrl);
      return { fl: e, Eo: await Si(i), kt: i, At: e.id, di: e.groupId };
    }),
  );
}
function za(t) {
  return St(t.url || t.pendingUrl);
}
function mc(t) {
  return ei(za(t));
}
function ls(t) {
  let e = "undef";
  return (
    t.type === "tab"
      ? (e = "tab")
      : t.type === "group" &&
        (t.groupType === "folder" ? (e = "folder") : (e = "group")),
    e
  );
}
async function Ua() {
  try {
    let t = await chrome.permissions.request({ origins: [`${we}/*`] });
    return (t && (await T.Cw()), t);
  } catch (t) {
    return (
      console.log(
        "chrome.permissions.request for one-tab.com host failed with error:",
      ),
      console.log(t),
      !1
    );
  }
}
function Wa(t) {
  if (!t || t.nodeType !== 1) return !1;
  if (t.isContentEditable) return !0;
  const e = t.tagName;
  if (e === "TEXTAREA") return !0;
  if (e === "INPUT") {
    const s = (t.getAttribute("type") || "text").toLowerCase();
    return !/^(button|checkbox|color|file|hidden|image|radio|range|reset|submit)$/.test(
      s,
    );
  }
  const i = t.getAttribute("role");
  return i === "textbox" || i === "searchbox" || i === "combobox";
}
function zn(t) {
  return `${we}/page/${t}`;
}
const xc = Symbol("dropHandled"),
  wc = Symbol("dragOverHandled"),
  lt = c({
    id: "landingDiv",
    style: {
      background: "var(--drop-area-gradient)",
      border: "var(--drop-area-border)",
      marginInline: "14px",
    },
  }).i;
let G = {};
function Ht() {
  (lt.remove(),
    typeof xt < "u" && xt.remove(),
    typeof he < "u" && delete he.Le,
    typeof S < "u" && S.P && (delete S.P.Mi, delete S.P.ss));
}
document.addEventListener(
  "keydown",
  (t) => {
    Me(t) &&
      (Ht(),
      typeof S < "u" &&
        S.F &&
        S.P &&
        ((S.P.$l = !0), delete S.P.Mi, delete S.P.ss, delete S.P.Le),
      delete G.currentTarget);
  },
  !0,
);
function hs({ e: t, Kr: e, ji: i, q: s }) {
  (t.stopPropagation(),
    Ht(),
    delete G.br,
    delete G.mu,
    delete G.currentTarget,
    (G.Xr = !0),
    (G.i = i[0]),
    (G.ji = i),
    (G.Ds = []),
    (G.wu = !s),
    (G.q = s),
    e ? (S.setDragImage(e), (G.Mc = 20)) : (G.Mc = G.i.offsetHeight));
  let n = G.i.getBoundingClientRect();
  ((G.Hw = t.clientX - n.left),
    (G.qw = t.clientY - n.top),
    t.dataTransfer && (t.dataTransfer.effectAllowed = "all"),
    i.forEach((r) => {
      G.Ds.push({ i: r, parent: r.parentElement, nextSibling: r.nextSibling });
    }),
    G.wu && i.forEach((r) => r.remove()));
}
function wi() {
  if (S?.P?.Rn) {
    G.br = !0;
    return;
  }
  if (!Array.isArray(G.Ds)) {
    (Ht(), (G = {}));
    return;
  }
  if (G.wu && !G.mu) {
    let t = new Set();
    for (G.Ds.forEach(({ i: e }) => t.add(e)); G.Ds.length; ) {
      let e = G.Ds.findIndex(({ i: s, nextSibling: n }) => !t.has(n)),
        [i] = G.Ds.splice(e, 1);
      if ((t.delete(i.i), i.parent)) {
        let s =
          i.nextSibling?.parentElement === i.parent ? i.nextSibling : null;
        i.parent.insertBefore(i.i, s);
      }
    }
  }
  (Ht(), (G = {}));
}
async function yi({ e: t, Hr: e, Sd: i, qr: s, Ur: n }) {
  (t.preventDefault(), t.type === "drop" && t.stopPropagation());
  let r = S.F ? (S.ft?.types ?? []) : ["tab"],
    o = S.F ? S.ft?.Ae : void 0;
  if (S.F && (!o || !r.length)) {
    Ht();
    return;
  }
  let a = e();
  a !== void 0 && (!Number.isFinite(a) || a < 0) && (a = void 0);
  let l = s();
  if (!l) {
    Ht();
    return;
  }
  let h = n();
  if (o) {
    let u = await T.ht(l);
    if (!u) {
      Ht();
      return;
    }
    if (
      ((h = u.groupType ?? h),
      r?.includes("tab") &&
        r.some((x) => ["tabGroup", "window", "folder"].includes(x)))
    )
      throw new Error("Can't mix tabs with groups during drag");
    let d = o.selectionGroupId,
      w = () => {
        d && st?.Uw(d)?.reset();
      },
      b = o.itemsMeta;
    {
      const x = async (y) => {
        if (!y) return [];
        let k = await T.ht(y);
        return k ? [k.id, ...(await x(k.parentIds.find(rt)))] : [];
      };
      let g = await x(l);
      if (o.itemsMeta.some((y) => l === y.itemId)) {
        Pt(f("cannotMoveItemIntoItself"));
        return;
      }
      if (o.itemsMeta.some((y) => g.includes(y.itemId))) {
        Pt(f("cannotMoveItemAncestorHere"));
        return;
      }
    }
    if (
      (i?.(),
      l === "quickList" ||
        (r.includes("tab") &&
          (b.some((x) => x.sourceParentId === "quickList") || mn(t))))
    )
      if (r.includes("tab") && h === "folder") {
        let x = await cs({ O: l, N: a });
        await T.eu({ iu: b.map((g) => g.itemId), O: x });
      } else await T.eu({ iu: b.map((x) => x.itemId), N: a, O: l });
    else {
      let x = G.q === "quickAccessCol-quickList",
        g = !!G.q;
      (await ce({ rt: b, O: l, N: a }), (G.mu = !(x || g)));
    }
    w();
  } else if (t.dataTransfer)
    if (
      ["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
        (u) => bi(t.dataTransfer.types, u),
      )
    ) {
      let u;
      if (
        bi(t.dataTransfer.types, "text/x-moz-place") &&
        go(t.dataTransfer.getData("text/x-moz-place"))
      ) {
        let w = JSON.parse(t.dataTransfer.getData("text/x-moz-place")),
          b = w.uri,
          p = ve(b);
        u = [[{ title: w.title || ee(p), kt: p }]];
      } else if (
        ["text/html", "text/plain"].some((w) => bi(t.dataTransfer.types, w))
      ) {
        let w = ["text/html", "text/plain"].reduce(
          (b, p) =>
            b ??
            (bi(t.dataTransfer.types, p) ? t.dataTransfer.getData(p) : void 0),
          void 0,
        );
        u = await Vs(w);
      } else {
        let w = t.dataTransfer.getData("text/uri-list"),
          b = (await chrome.tabs.query({})).find((x) => x.url === w)?.title,
          p = ve(t.dataTransfer.getData("text/uri-list"));
        p && (u = [[{ title: b || ee(p), kt: p }]]);
      }
      if (!Array.isArray(u) || !u.length) return;
      let d = await T.ht(l);
      if (!d) {
        Ht();
        return;
      }
      ((h = d.groupType ?? h), await T.Ma({ Ga: u, Gs: h, O: l, N: a }));
    } else console.log(`Unrecognized dropped content: ${t.dataTransfer.types}`);
  else console.log("Unhandled onDrop - should be unreachable");
}
async function cs({ O: t, N: e }) {
  let i = new Date().getTime(),
    s = Zt(),
    n = {
      id: s,
      type: "group",
      groupType: "window",
      createDate: i,
      modifyDate: i,
      parentIds: [t],
      childIds: [],
      pinnedCount: 0,
    };
  return (
    await T.In({
      Lo: [n],
      vn: [],
      O: t,
      ...(e !== void 0 && { N: e }),
      An: [s],
    }),
    s
  );
}
function bi(t, e) {
  return typeof Yi == "function"
    ? Yi(t, e)
    : t
      ? typeof t.includes == "function"
        ? t.includes(e)
        : typeof t.contains == "function"
          ? t.contains(e)
          : typeof t.indexOf == "function"
            ? t.indexOf(e) !== -1
            : Array.from(t).includes(e)
      : !1;
}
let qa = {},
  Un = [
    { name: "dragged-group", w: 21, tt: 18, x: 21, y: 12 },
    { name: "dragged-tab", w: 21, tt: 5, x: 21, y: 2 },
    { name: "folder", w: 21, tt: 18, x: 21, y: 12 },
    { name: "multi-dragged-group", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-tab", w: 25, tt: 22, x: 25, y: 7 },
    { name: "multi-dragged-folder", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-item", w: 25, tt: 22, x: 25, y: 11 },
  ];
function Ra() {
  let t = 0;
  Un.forEach((e) => {
    let [i, s] = [`${e.name}.png`, `${e.name}-dark.png`].map((n) => {
      t -= Math.ceil(e.w * 1.2);
      let r = c({
        style: {
          width: `${e.w}px`,
          height: `${e.tt}px`,
          position: "absolute",
          left: `${t}px`,
        },
        p: L("img", {
          src: `images/${n}`,
          style: { width: `${e.w}px`, height: `${e.tt}px` },
        }),
      }).i;
      return (document.body.appendChild(r), r);
    });
    qa[e.name] = { light: i, dark: s, x: e.x, y: e.y };
  });
}
const us = '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">';
function Wn(t) {
  let e = `<a href="${Xs(t.url)}">${Ot(t.title)}</a>`;
  return (Lt(t.notes?.text, (i) => (e += `<br/>${i}`)), e);
}
function Ca({ links: t, ge: e }) {
  let i = t.map((r) => ds({ link: r, ge: e })),
    s = i.map((r) => r.Xe).filter((r) => r).join(`
`),
    n = i
      .map((r) => r.Ee)
      .filter((r) => r)
      .join("<br/>");
  return { Xe: s, Ee: n };
}
function ds({ link: t, ge: e }) {
  let i, s;
  return (
    ["urlAndTitle", "richText"].includes(e)
      ? (i = [t.url, ...I(t.title)].join(" | "))
      : e === "titleAndUrl"
        ? (i = [...I(t.title), t.url].join(" | "))
        : e === "url"
          ? (i = t.url)
          : console.log("Unknown linkExportFormat"),
    e === "richText" &&
      Lt(
        t.notes?.text,
        (n) =>
          (i += `
${n}`),
      ),
    e === "richText" && (s = Wn(t)),
    { Xe: i, Ee: s }
  );
}
function Za({ group: t, level: e = 0, ge: i }) {
  let s = "",
    n = !1;
  return (
    i === "richText" &&
      (Lt(
        t.l.label,
        (r) => (
          (s += `${r}
`),
          (n = !0)
        ),
      ),
      Lt(
        t.l.notes?.text,
        (r) => (
          (s += `${r}
`),
          (n = !0)
        ),
      )),
    n &&
      (s += `
`),
    (s += t.k.map((r) =>
      r.l.type === "tab"
        ? ds({ link: r.l, ge: i }).Xe
        : `
${Za({ group: r, level: e + 1, ge: i })}
`,
    ).join(`
`)),
    s
  );
}
function Ja({ group: t, level: e = 0 }) {
  let i = "",
    s = e ? 14 : 16,
    n = !1;
  return (
    Lt(t.l.label, (r) => ((i += qn(Ot(r), s) + "<br/>"), (n = !0))),
    Lt(t.l.notes?.text, (r) => ((i += Ot(r) + "<br/>"), (n = !0))),
    n && (i += "<br/>"),
    (i += t.k
      .map((r) =>
        r.l.type === "tab"
          ? Wn(r.l)
          : `<br/>${Ja({ group: r, level: e + 1 })}<br/>`,
      )
      .join("<br/>")),
    i
  );
}
async function Qa({ zw: t, ge: e, h: i }) {
  i ??= new ht();
  let s = await Promise.all(
      t.map((o) => fs({ groupId: o, ge: e, h: i, xu: !1, te: !1 })),
    ),
    n = s.map((o) => o.Xe).filter((o) => o).join(`

`),
    r = s
      .map((o) => o.Ee)
      .filter((o) => o)
      .join("<br/><br/>");
  return { Xe: n, Ee: r };
}
async function fs({ groupId: t, ge: e, h: i, xu: s, te: n }) {
  ((i ??= new ht()), s || (await i.Te({ groupId: t })));
  let r,
    o,
    a = i.v(t),
    l = a.childIds.map((h) => i.v(h));
  if (e === "richText") {
    let h = !1;
    (Lt(a.label, (u) => {
      if (
        ((h = !0),
        r || (r = ""),
        (r +=
          u +
          `
`),
        e === "richText")
      ) {
        o || (o = "");
        let d = n ? 14 : 16;
        (F(a) && (d = 18), (o += qn(Ot(u), d) + "<br/>"));
      }
    }),
      Lt(a.notes?.text, (u) => {
        ((h = !0),
          r || (r = ""),
          (r +=
            u +
            `
`),
          e === "richText" && (o || (o = ""), (o += Ot(u) + "<br/>")));
      }),
      F(a) &&
        h &&
        ((r += `
`),
        (o += "<br/>")));
  }
  for (let h of l)
    if (B(h)) {
      let { Xe: u, Ee: d } = ds({ link: h, ge: e });
      (u &&
        (r
          ? (r += `
`)
          : (r = ""),
        (r += u)),
        d && (o ? (o += "<br/>") : (o = ""), (o += d)));
    } else {
      let { Xe: u, Ee: d } = await fs({
        groupId: h.id,
        ge: e,
        h: i,
        xu: !0,
        te: Yt(a),
      });
      (u &&
        (r
          ? (r += `
`)
          : (r = ""),
        (r +=
          u +
          `
`)),
        d && (o ? (o += "<br/><br/>") : (o = ""), (o += d + "<br/>")));
    }
  return { Xe: r, Ee: o };
}
function Ka(t, e) {
  return `<span${e ? " " + e : ""}>${t}</span>`;
}
function qn(t, e) {
  return Ka(t, `style="font-size: ${e}pt;"`);
}
function gi({ Er: t, Fr: e, jr: i, Br: s, Cr: n }) {
  return !(
    (t.includes("folder") && _t(e, ["window", "tabGroup"])) ||
    (t.includes("trash") && i === "quickList") ||
    (t.includes("locked") && t.includes("tab") && i !== "quickList") ||
    (t.includes("locked") &&
      de(["window", "tabGroup"], t) &&
      _t(e, ["window", "tabGroup"])) ||
    (s &&
      !(
        n === "treeItem" &&
        i === "trash" &&
        !(t.includes("tab") && t.includes("isTreeItemInQuickListRoot"))
      ))
  );
}
let Tt = !1,
  Rn = 0;
const ps = (() => {
  let e,
    i,
    s,
    n,
    r,
    o,
    a,
    l = 0,
    h = 0,
    u,
    d,
    w,
    b,
    p,
    x,
    g,
    y,
    k,
    m = !1,
    v = null,
    A = !1,
    D = null,
    M = null,
    N = null,
    Z = null,
    dt = 0,
    R = 0,
    J = 0,
    V = null,
    vt = null,
    W = null;
  (document.addEventListener(
    "pointerdown",
    (O) => {
      Tt &&
        O.pointerId !== o &&
        (n?.({
          ts: e,
          es: i,
          dx: 0,
          dy: 0,
          qs: u,
          Us: d,
          pageX: O.pageX,
          pageY: O.pageY,
        }),
        ue(O));
    },
    !0,
  ),
    document.addEventListener(
      "keydown",
      (O) => {
        !Me(O) ||
          (!Tt && !A) ||
          (O.cancelable && O.preventDefault(),
          O.stopPropagation(),
          ue(O, { If: Tt }));
      },
      !0,
    ),
    document.addEventListener(
      "pointercancel",
      (O) => {
        (Tt || A) && O.pointerId === o && ue(O);
      },
      !0,
    ));
  function et({
    event: O,
    element: E,
    Il: Q,
    wh: K,
    Al: ut,
    xh: ct,
    mh: pt = 0,
    ph: Ct = null,
  }) {
    Tt ||
      A ||
      ((e = E),
      (i = Q),
      (s = K),
      (n = ut),
      (r = ct),
      (o = O.pointerId),
      (a = O.pointerType || "mouse"),
      (w = 0),
      (b = 0),
      (u = O.pageX),
      (d = O.pageY),
      (l = pt),
      (h = pt * pt),
      (D = ne(Ct)),
      (M = D?.enabled ? re(E) : null),
      (N = null),
      Fe(),
      document.addEventListener("pointermove", q, !1),
      document.addEventListener("pointerup", Mt, !1),
      O.preventDefault(),
      (A = !0));
  }
  function q(O) {
    O.isTrusted !== !1 &&
      ((!Tt && !A) ||
        O.pointerId !== o ||
        ((p = O.pageX),
        (x = O.pageY),
        (g = O.clientY),
        (y = O.clientX),
        (k = O.target),
        (m = !0),
        v === null && (v = requestAnimationFrame(jt)),
        Tt && O.cancelable && O.preventDefault()));
  }
  function jt() {
    ((v = null), m && ((m = !1), nt(p, x, g, y, k)));
  }
  function nt(O, E, Q, K, ut) {
    if (!Tt && !A) return;
    let ct, pt;
    ((ct = O - u), (pt = E - d));
    const Ct = ct * ct + pt * pt >= h;
    if (
      (!Tt &&
        A &&
        Ct &&
        ((Tt = !0),
        (A = !1),
        De(),
        document.body.classList.add("dnd-no-select"),
        e && ((vt = e.style.pointerEvents), (e.style.pointerEvents = "none")),
        s?.({ ts: e, es: i, qs: u, Us: d }),
        j(Q, K)),
      !Tt)
    )
      return;
    let Le = !1;
    ((w !== ct || b !== pt) && (Le = !0),
      (w = ct),
      (b = pt),
      (R = Q),
      (J = K),
      Le &&
        n?.({ ts: e, es: i, dx: ct, dy: pt, qs: u, Us: d, pageX: O, pageY: E }),
      Xt(ut, K, Q),
      j(Q, K));
  }
  function Mt(O) {
    O.isTrusted !== !1 &&
      ((O?.pointerId !== void 0 && o !== void 0 && O.pointerId !== o) ||
        (!Tt && !A) ||
        (ti(O), ue(O)));
  }
  function ue(O, { If: E = !1 } = {}) {
    if (!Tt && !A) return;
    const Q = Tt;
    (Q && m && (nt(p, x, g, y, k), (m = !1)),
      v !== null && (cancelAnimationFrame(v), (v = null)),
      $(),
      Q &&
        (E ? Ye() : W || document.body.classList.remove("dnd-no-select"),
        e && vt !== null && (e.style.pointerEvents = vt),
        (vt = null)),
      document.removeEventListener("pointermove", q, !1),
      document.removeEventListener("pointerup", Mt, !1),
      (Tt = !1),
      (A = !1),
      Q && (Rn = +new Date()),
      (o = void 0),
      (a = void 0),
      (k = null),
      Q && r?.({ ts: e, es: i, Ww: w, Nw: b, qs: u, Us: d }));
  }
  function De() {
    W &&
      (document.removeEventListener("pointerup", W, !0),
      document.removeEventListener("pointercancel", W, !0),
      document.removeEventListener("mouseup", W, !0),
      (W = null));
  }
  function Ye() {
    (document.body.classList.add("dnd-no-select"),
      !W &&
        ((W = () => {
          (De(), document.body.classList.remove("dnd-no-select"));
        }),
        document.addEventListener("pointerup", W, !0),
        document.addEventListener("pointercancel", W, !0),
        document.addEventListener("mouseup", W, !0)));
  }
  function Xt(O, E, Q) {
    if (!Tt) return;
    const K = a || "mouse";
    if (
      !(K !== "mouse" || (K === "mouse" && !1)) ||
      !Number.isFinite(E) ||
      !Number.isFinite(Q) ||
      E < 0 ||
      Q < 0 ||
      E > window.innerWidth ||
      Q > window.innerHeight ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const ct = document.elementsFromPoint(E, Q);
    if (!ct?.length) return;
    const pt = ct.find((Ct) => !At(Ct)) || ct[0];
    !pt ||
      !(pt instanceof Element) ||
      (O instanceof Element && O === pt) ||
      pt.dispatchEvent(
        new PointerEvent("pointermove", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: E,
          clientY: Q,
          button: -1,
          buttons: 1,
        }),
      );
  }
  function ti(O) {
    if (!Tt) return;
    const E = a || "mouse";
    if (
      !(E !== "mouse" || (E === "mouse" && !1)) ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const K = Number.isFinite(O?.clientX) ? O.clientX : J,
      ut = Number.isFinite(O?.clientY) ? O.clientY : R;
    if (
      !Number.isFinite(K) ||
      !Number.isFinite(ut) ||
      K < 0 ||
      ut < 0 ||
      K > window.innerWidth ||
      ut > window.innerHeight
    )
      return;
    const ct = document.elementsFromPoint(K, ut);
    if (!ct?.length) return;
    const pt = ct.find((Ct) => !At(Ct)) || ct[0];
    !pt ||
      !(pt instanceof Element) ||
      (O?.target instanceof Element && O.target === pt) ||
      pt.dispatchEvent(
        new PointerEvent("pointerup", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: K,
          clientY: ut,
          button: 0,
          buttons: 0,
        }),
      );
  }
  function ne(O) {
    if ((O === !0 && (O = { enabled: !0 }), !O || O.enabled !== !0))
      return null;
    const E = Number.isFinite(O.Da) ? O.Da : 48,
      Q = Number.isFinite(O.Fo) ? O.Fo : 80,
      K = Number.isFinite(O.Pa) ? O.Pa : 640,
      ut = O.jo || "quadratic",
      ct = O.target || "hover";
    return { enabled: !0, Da: E, Fo: Q, Pa: K, jo: ut, target: ct };
  }
  function re(O) {
    let E = O;
    for (; E && E !== document.body && E !== document.documentElement; ) {
      const Q = window.getComputedStyle(E),
        K = Q.overflowY,
        ut = Q.overflow;
      if (
        K === "auto" ||
        K === "scroll" ||
        K === "overlay" ||
        ut === "auto" ||
        ut === "scroll"
      )
        return E;
      E = E.parentElement;
    }
    return window;
  }
  function Fe() {
    ($(), (R = 0), (J = 0), (V = null));
  }
  function $() {
    (Z !== null && (cancelAnimationFrame(Z), (Z = null)), (dt = 0));
  }
  function j(O, E) {
    !Tt ||
      !D ||
      ((R = O),
      (J = E),
      (N = ft(E, O)),
      N &&
        Z === null &&
        ((dt = performance.now()), (Z = requestAnimationFrame(H))));
  }
  function H(O) {
    if (((Z = null), !Tt || !D)) return;
    const E = Math.max(0, (O - dt) / 1e3);
    if (((dt = O), (N = ft(J, R)), !N)) return;
    const Q = _(R);
    if (Q !== 0) {
      const K = Q * E;
      (N === window ? window.scrollBy(0, K) : (N.scrollTop += K),
        (Z = requestAnimationFrame(H)));
    }
  }
  function _(O) {
    const E = D;
    if (!E) return 0;
    let Q = 0,
      K = window.innerHeight,
      ut = window.scrollY,
      ct = document.documentElement.scrollHeight - window.innerHeight;
    if (N !== window) {
      const vs = N.getBoundingClientRect();
      ((Q = vs.top),
        (K = vs.bottom),
        (ut = N.scrollTop),
        (ct = N.scrollHeight - N.clientHeight));
    }
    const pt = Math.min(K, Math.max(Q, O)),
      Ct = Math.max(0, pt - Q),
      Le = Math.max(0, K - pt),
      Ai = Math.max(1, E.Da);
    let Pe = 0,
      Ii = 0;
    if (Ct < Ai) ((Pe = -1), (Ii = Ct));
    else if (Le < Ai) ((Pe = 1), (Ii = Le));
    else return 0;
    if ((Pe < 0 && ut <= 0) || (Pe > 0 && ut >= ct)) return 0;
    let xe = 1 - Math.min(1, Ii / Ai);
    return (
      E.jo === "quadratic"
        ? (xe = xe * xe)
        : typeof E.jo == "function" && (xe = E.jo(xe)),
      (E.Fo + (E.Pa - E.Fo) * xe) * Pe
    );
  }
  function ft(O, E) {
    if (D?.target === "origin")
      return M && M !== window && !M.isConnected ? null : M;
    if (O < 0 || E < 0 || O > window.innerWidth || E > window.innerHeight)
      return Rt() || M || window;
    const Q = document.elementsFromPoint(O, E);
    for (const K of Q) {
      if (At(K)) continue;
      const ut = re(K);
      if (ut) {
        const ct = Rt();
        return ut === window && ct ? ct : ((V = ut), ut);
      }
    }
    return Rt() || M || window;
  }
  function At(O) {
    return O ? !!(e && (O === e || e.contains(O))) : !1;
  }
  function Rt() {
    return (V && V !== window && !V.isConnected && (V = null), V);
  }
  return et;
})();
function yc(t, e) {
  return c({
    style: {
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      backgroundColor: "var(--header-bg-color)",
      zIndex: 100,
      height: "63px",
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
              style: { cursor: "pointer" },
              St: async () => await chrome.tabs.create({ url: we, active: !0 }),
            },
            (i) =>
              `images/top-left-logo-sml-${i ? "light" : "dark"}${U() ? "" : "-rtl"}.png`,
          ),
        },
      }),
      title: c({
        style: {
          fontSize: "22px",
          fontWeight: 300,
          marginInlineStart: "20px",
          borderInlineStart: "1px solid var(--border-color)",
          paddingInlineStart: "26px",
        },
        textContent: t,
      }),
      ...(e && { Zw: e }),
    },
  });
}
function bc(t, e, i) {
  let s = (r) => {
      ((t = !t),
        (n.u.Af.style.display = t ? "inline-block" : "none"),
        (n.u.$f.style.display = t ? "none" : "inline-block"),
        (n.u.content.i.style.display = t ? "block" : "none"));
    },
    n = c({
      style: { display: "flex", gap: "10px" },
      children: {
        Qw: c({
          onclick: s,
          style: { fontSize: "16px", cursor: "pointer" },
          children: {
            Af: z(
              {
                width: "14px",
                height: "14px",
                style: {
                  position: "relative",
                  top: "-1px",
                  display: t ? "inline-block" : "none",
                  verticalAlign: "middle",
                },
              },
              (r) => `images/twistie-open${r ? "" : "-dark"}.png`,
            ),
            $f: z(
              {
                width: "14px",
                height: "14px",
                style: {
                  position: "relative",
                  top: "-1px",
                  display: t ? "none" : "inline-block",
                  verticalAlign: "middle",
                  ...(!U() && { transform: "rotate(180deg)" }),
                },
              },
              (r) => `images/twistie-closed${r ? "" : "-dark"}.png`,
            ),
          },
        }),
        body: c({
          children: {
            label: c({
              style: { fontSize: "16px", cursor: "pointer" },
              textContent: e,
              onclick: s,
            }),
            content: c({
              style: { paddingTop: "10px", display: t ? "block" : "none" },
              p: i,
            }),
          },
        }),
      },
    });
  return n;
}
let Cn, Zn, ms;
async function Va() {
  ms = (await chrome.permissions.getAll()).permissions.includes("favicon");
  try {
    ms && (Cn = await Ma(Qn("http://example.com")));
  } catch (t) {
    console.log(t);
  }
  Zn = await $a("alpha");
}
function Jn(t) {
  return (
    "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" +
    t +
    "&size=32"
  );
}
function Qn(t) {
  const e = new URL(chrome.runtime.getURL("/_favicon/"));
  return (
    e.searchParams.set("pageUrl", t),
    e.searchParams.set("size", "32"),
    e.toString()
  );
}
let xs = 0,
  ws = 0;
async function Kn(t, e) {
  let i = +new Date();
  i - xs < 500
    ? ((xs = i), ws++, ws >= 8 ? await le(e) : await le(t))
    : ((xs = i), (ws = 0), await le(t));
}
function Vn(t, e = "move") {
  let i = Oa(t),
    s = document.createElement("div");
  if (
    ((s.style.flex = "0 0 auto"),
    (s.style.display = "inline-block"),
    (s.style.width = "16px"),
    (s.style.height = "16px"),
    (s.style.marginInlineStart = "5px"),
    (s.style.cursor = e),
    Zn && zt.Ko.has(i))
  ) {
    let n = zt.Ko.get(i),
      r = 16 * (n % zt.hl),
      o = 16 * Math.floor(n / zt.hl);
    ((s.style.backgroundSize =
      zt.imageWidth / 2 + "px " + zt.imageHeight / 2 + "px"),
      (s.style.backgroundRepeat = "none;"),
      (s.style.backgroundPositionX = -1 * r + "px"),
      (s.style.backgroundPositionY = -1 * o + "px"),
      (async () => (
        await We(),
        (s.style.backgroundImage = "url(images/iconGrid.webp)")
      ))());
  } else {
    let n = yr(t),
      r = Jn(n),
      o = "images/globe.png",
      a = document.createElement("img");
    ((a.style.borderStyle = "none"),
      (a.style.width = "16px"),
      (a.style.height = "16px"),
      (a.draggable = !1),
      (a.src = o),
      s.appendChild(a),
      !n ||
        !n.includes(".") ||
        n === "localhost" ||
        n.startsWith("192.168.") ||
        n.startsWith("172.16.") ||
        n.startsWith("10.") ||
        (ms
          ? ((a.onload = () => {
              a.src.endsWith(o) ||
                setTimeout(() => {
                  Cn === Pn(a) &&
                    ((a.onload = null),
                    (a.onerror = () => (a.src = o)),
                    (a.src = r));
                }, 10);
            }),
            (async () => (
              document.readyState !== "complete" && (await We()),
              (a.onerror = () => (a.src = o)),
              await Kn(10, 100),
              (a.src = Qn(t))
            ))())
          : (async () => (
              document.readyState !== "complete" && (await We()),
              (a.onerror = () => (a.src = o)),
              await Kn(10, 100),
              (a.src = r)
            ))()));
  }
  return s;
}
async function ys({
  view: t,
  Ri: e,
  ic: i,
  Vt: s,
  me: n,
  lf: r,
  cf: o,
  nc: a,
  Zr: l,
  onChange: h,
  xs: u,
  sc: d,
  vt: w,
  H: b,
}) {
  let p = e?.G && ji(e.G.l),
    x = e && ji(e.L.l),
    g = e?.q === "treeBrowser",
    y = (e ?? t).l,
    k = y.id,
    m = (e ?? t).index,
    v = t?.Tt,
    A = t?.te;
  t || (A = e?.G && Dt(e.G.l) && kt(e.l));
  let D = t?.k?.some(($) => $ instanceof $t);
  t || (D = e.S?.some(($) => kt($.l)));
  let M = e?.G && [F].some(($) => $(e.G.l)),
    N = e?.G && [Dt, F].some(($) => $(e.G.l)),
    Z = F(y) && (e || v),
    dt = (F(y) && (e || v)) || Dt(y),
    R = t?.J,
    J = e?.L.l.id === "trash",
    V = e?.l.id === "trash",
    vt = t?.wt?.J,
    W = (e?.G || t?.wt)?.l;
  !W && !B(y) && (W = await T.ht(y.parentIds.find(rt)));
  let et = W && W.childIds.indexOf(y.id) < (W.pinnedCount ?? 0),
    q = 0,
    jt = t && t instanceof at && !t.wt;
  (e?.G &&
    (B(y)
      ? (q = e.G.S.filter(($) => B($.l) && y.id === $.l?.id).findIndex(
          ($) => $ === e,
        ))
      : (q = void 0)),
    t?.wt &&
      (B(y)
        ? (q = t.wt.k
            .filter(($) => $ instanceof at && y.id === $.l?.id)
            .findIndex(($) => $ === t))
        : (q = void 0)),
    B(y) &&
      q &&
      W &&
      (et =
        (W.childIds.map(($, j) => [$, j]).filter(([$, j]) => $ === y.id)[
          q
        ]?.[1] ?? 0) < (W.pinnedCount ?? 0)));
  let nt = e?.q === "quickAccessCol-tasks",
    Mt = nt && ni(y),
    ue = t?.ut || y.locked || e?.G?.l.locked,
    De =
      !B(y) &&
      !(e && !N) &&
      !p &&
      !e?.B &&
      !e?.Ot &&
      !(t && !window.Sf?.an.uo.As) &&
      !v,
    Ye =
      !B(y) &&
      !A &&
      !(t && !window.Sf?.an.uo.As) &&
      !(e && !M) &&
      !it(y) &&
      !v &&
      !p;
  ((s = s && !g && !F(y) && !J), (i = i && !g && Yt(y) && !D && !J));
  let Xt = ({
      icon: $,
      label: j,
      name: H,
      action: _,
      D: ft,
      ee: At,
      Zt: Rt,
      ni: O,
    }) =>
      Rt
        ? Ft({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          })
        : X.bi({
            icon: $,
            label: j,
            name: H,
            D: ft,
            ee: At,
            ni: O,
            action: async ({ e: E, o: Q }) => {
              (await _({ Of: H, e: E, i: Q.i })) || l();
            },
          }),
    ti = ({ parentId: $, As: j }) => {
      let H = j ? "direct" : "recurse";
      return async ({ o: _, e: ft }) => (
        d(
          c({
            style: {
              fontSize: "12px",
              fontWeight: 400,
              margin: "8px",
              lineHeight: "1.5em",
            },
            children: {
              header: c({
                textContent: f("sortByColon"),
                style: {
                  marginInline: "10px 15px",
                  marginBlock: "12px 6px",
                  fontSize: "12px",
                  fontWeight: 600,
                },
              }),
              body: c({
                children: [
                  {
                    ki: [{ field: "title", order: "lexical" }],
                    label: f("title"),
                  },
                  ...I(!j, {
                    ki: [
                      { field: "rootDomain", order: "lexical" },
                      { field: "title", order: "lexical" },
                    ],
                    label: f("website"),
                  }),
                  {
                    ki: [
                      { field: "rating", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: f("starred"),
                  },
                  {
                    ki: [
                      { field: "modified", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: f("recentlyModified"),
                  },
                  {
                    ki: [
                      { field: "accessed", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: f("recentlyAccessed"),
                  },
                  {
                    ki: [
                      { field: "created", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: f("recentlyCreated"),
                  },
                  ...I(!j, {
                    ki: [{ field: "index", order: "desc" }],
                    label: f("reverse"),
                  }),
                ].map(({ ki: At, label: Rt }, O) =>
                  Xt({
                    name: `${O}`,
                    label: Rt,
                    icon: {
                      I: "sort",
                      ...(At[0].field === "index" && { Ed: !0 }),
                    },
                    action: async () =>
                      await T.sort({ ki: At, parentId: $, Jw: H }),
                  }),
                ),
              }),
            },
          }).i,
          ft,
        ),
        !0
      );
    },
    ne = {
      ...zi(
        [
          s && {
            ...Object.fromEntries(
              [
                ..._n.map(({ name: $, label: j }, H) => ({
                  name: $,
                  label: j,
                  ...(H === 0 && { icon: { I: "open", ee: !U() } }),
                  action: async ({ Of: _, e: ft }) => {
                    if (
                      (Bt(ft) && (ft.preventDefault(), ft.stopPropagation()),
                      !b &&
                        !x &&
                        !ue &&
                        !nt &&
                        !t?.C &&
                        !(await T._e("autoActionOnOpenOptionChosen")))
                    )
                      try {
                        await ks();
                      } catch {
                        return;
                      }
                    await qe({
                      id: k,
                      zr: _,
                      Kw: _ === "newWindow",
                      Wr: !0,
                      Nr: (await chrome.windows.getCurrent()).id,
                      Yl: Bt(ft),
                      Rr: !(ue || t?.C || Et(ft)),
                      Yh: !Kt(ft),
                      ...(B(y) &&
                        x &&
                        !p && {
                          bu: e.G.l.id,
                          tabIndex: e.G.S.findIndex((At) => At === e),
                          yu: Ri(
                            e.G.S.filter((At) => At.l.id === e.l.id).findIndex(
                              (At) => At === e,
                            ),
                          ),
                        }),
                    });
                  },
                })),
              ].map(($) => [$.name, Xt($)]),
            ),
          },
          n && {
            ...Object.fromEntries(
              [
                ...I(
                  (jt && w) ||
                    (!R && w && y.parentIds.includes("quickList")) ||
                    (e?.q === "quickAccessCol-quickList" && p),
                  {
                    name: "removeFromQuickList",
                    label: f("removeFromQuickList"),
                    icon: {
                      I: "remove-from-quicklist",
                      dimension: "14px",
                      top: "1px",
                    },
                    D: f("removeFromQuickListMenuItemHelp"),
                    action: async () => await T.Xw([k]),
                  },
                ),
                ...I(!R && !g && !w && Y(y) && !nt && !b, {
                  name: "shareAsWebPage",
                  label: f("shareAsAWebPage"),
                  icon: { I: "share-action", dimension: "12px", left: "0px" },
                  D: f("shareAsAWebPageMenuItemHelp"),
                  action: async () => dr(y.id),
                }),
                ...I(!R && !g && F(y) && !nt, {
                  name: "saveFolderTabsAsHtmlFile",
                  label: f("saveTabsAsHtmlFile"),
                  D: f("saveTabsAsHtmlFileMenuItemHelp"),
                  action: async () => await al({ La: y.id }),
                }),
                ...I(!R && !it(y) && F(y), {
                  name: "storeAllOpenWindowsHere",
                  label: f("storeAllOpenWindowsHere"),
                  Kt: { I: "close", dimension: "13px", left: "0px", ee: !U() },
                  D: f("storeAllOpenWindowsHereMenuItemHelp"),
                  action: async () => await T.Kh(y.id),
                }),
                ...I(!R && !g && Yt(y) && !nt, {
                  name: "copyToClipboard",
                  label: f("copyToClipboard"),
                  icon: { I: "copy-to-clipboard", left: "0px" },
                  D: f("copyToClipboardMenuItemHelp"),
                  action: async () => {
                    let $ = async () => {
                      let { Xe: j, Ee: H } = await fs({
                        groupId: t?.l.id ?? e.l.id,
                        ge: a,
                      });
                      return {
                        Mf: new Blob([j], { type: "text/plain" }),
                        ...(H && {
                          Gf: new Blob([us + H], { type: "text/html" }),
                        }),
                      };
                    };
                    await rs({
                      kf: async () => (await $()).Mf,
                      ...(a === "richText" && {
                        Tf: async () => (await $()).Gf,
                      }),
                    });
                  },
                }),
                ...I(!it(y) && !g && !B(y), { name: "horizDivider1", Zt: !0 }),
                ...I(!it(y), {
                  name: "rename",
                  label: f("renameOrAddNote"),
                  Kt: { I: "caret", dimension: "12px", left: "0px" },
                  action: async () => {
                    t
                      ? t instanceof at
                        ? (t._c(), t.Oo(), t.Je.Rs(!0))
                        : t.on.Sl()
                      : e?.du();
                  },
                }),
                ...I(Yt(y) && !nt && !g && !R, {
                  name: "lock",
                  label: y.locked ? f("unlock") : f("lock"),
                  icon: {
                    I: y.locked ? "unlock" : "lock-action",
                    dimension: "14px",
                    left: "0px",
                    top: "1px",
                  },
                  D: f("lockMenuItemHelp"),
                  action: async () => await T.Fi(y.id, { locked: !y.locked }),
                }),
                ...I(!it(y) && !y.rating && !g, {
                  name: "star",
                  label: f("star"),
                  icon: {
                    I: "star2-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("starMenuItemHelp"),
                  action: async () => ie.call(t ?? e, { rating: 5 }),
                }),
                ...I(!it(y) && y.rating && !g, {
                  name: "removeStar",
                  label: f("removeStar"),
                  icon: {
                    I: "un-star2",
                    left: "0px",
                    top: "0px",
                    dimension: "17px",
                  },
                  action: async () => ie.call(t ?? e, { rating: 0 }),
                }),
                ...I(!it(y) && y.task && !y.done && !g, {
                  name: "markAsDoneTask",
                  label: f("markAsDoneTask"),
                  icon: {
                    I: "task-ticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsDoneTaskMenuItemHelp"),
                  action: async () => ie.call(t ?? e, { task: 1, done: 1 }),
                }),
                ...I(!it(y) && y.task && !g, {
                  name: "unmarkAsTask",
                  label: f("unMarkAsTask"),
                  icon: {
                    I: "un-task",
                    left: "0px",
                    top: "-2px",
                    dimension: "18px",
                  },
                  action: async () => ie.call(t ?? e, { task: 0, done: 0 }),
                }),
                ...I(!it(y) && (!y.task || y.done) && !g, {
                  name: "markAsPendingTask",
                  label: f("markAsPendingTask"),
                  icon: {
                    I: "task-unticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsPendingTaskMenuItemHelp"),
                  action: async () => ie.call(t ?? e, { task: 1, done: 0 }),
                }),
                ...I(!it(y) && y.archived && !g, {
                  name: "un-archive",
                  label: f("unmarkAsArchived"),
                  Kt: {
                    I: "un-archive",
                    dimension: "18px",
                    left: "0px",
                    top: "-1px",
                  },
                  D: f("markAsArchivedMenuItemHelp"),
                  action: async () => ie.call(t ?? e, { archived: 0 }),
                }),
                ...I(!it(y) && !y.archived && !g, {
                  name: "archive",
                  label: f("markAsArchived"),
                  Kt: {
                    I: "archive",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: f("markAsArchivedMenuItemHelp"),
                  action: async () => ie.call(t ?? e, { archived: 1 }),
                }),
                ...I(
                  !vt &&
                    !t?.Tt &&
                    !R &&
                    !w &&
                    !(it(y) || x || (e && !M) || nt || g || jt),
                  {
                    name: "pin",
                    label: et
                      ? f("unpin")
                      : B(y)
                        ? f("openAsPinnedTab")
                        : f("pinToTopOfFolder"),
                    Kt: {
                      I: `${et ? "un-" : ""}pin-action`,
                      dimension: `${et ? 15 : 13}px`,
                      top: "1px",
                    },
                    ...(!et && {
                      D: B(y)
                        ? f("openAsPinnedTabMenuItemHelp")
                        : f("pinToTopOfFolderMenuItemHelp"),
                    }),
                    action: async () => {
                      let $;
                      (B(y) ? ($ = W.id) : ($ = y.parentIds.find(rt)),
                        await T.Ir({
                          itemId: y.id,
                          parentId: $,
                          zt: q,
                          value: !et,
                        }));
                    },
                  },
                ),
                ...I(!it(y) && !B(y), { name: "horizDivider2", Zt: !0 }),
                ...I(!R && !g && !w && Y(y) && !nt, {
                  name: "importLinks",
                  label: f("importLinksHere"),
                  Kt: { I: "import", dimension: "14px", left: "1px", ee: !U() },
                  D: f("importLinksHereMenuItemHelp"),
                  action: async () =>
                    await Xn({
                      O: k,
                      Gs: y.groupType,
                      gu: async ({ itemId: $, Zi: j }) => {
                        v && F(t.l) && (await Vt({ itemId: $, Zi: j }));
                      },
                    }),
                }),
                ...I(!R && !Ye && F(y) && !(t && !v) && !nt, {
                  name: "createFolderWithin",
                  label: f("createFolderWithin"),
                  D: f("createFolderWithinMenuItemHelp"),
                  icon: {
                    I: "add-folder",
                    dimension: "15px",
                    top: "1px",
                    left: "0px",
                  },
                  action: async () => {
                    let $ = await Ue({ we: "folder", parentId: y.id, Ri: e });
                    v && (await Vt({ itemId: y.id, Zi: $ }));
                  },
                }),
                ...I(!R && Ye && !nt, {
                  name: "createFolder",
                  label: f(
                    Z
                      ? "createFolderAboveWithinBelow"
                      : "createFolderAboveBelow",
                  ),
                  icon: { I: "add-folder", dimension: "16px", left: "0px" },
                  D: f("createFolderWithinMenuItemHelp"),
                  action: async ({ o: $, e: j }) => (
                    d(
                      c({
                        style: {
                          fontSize: "12px",
                          fontWeight: 400,
                          margin: "8px",
                          lineHeight: "1.5em",
                        },
                        children: Object.fromEntries(
                          [
                            {
                              name: "above",
                              label: f("createFolderAbove"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let H = k,
                                  _ = y.parentIds.find(rt),
                                  ft = await ot(_);
                                await Ue({
                                  we: "folder",
                                  parentId: _,
                                  Ri: e,
                                  N: ft.childIds.indexOf(H),
                                });
                              },
                            },
                            ...I(Z, {
                              name: "within",
                              label: f("createFolderWithin"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                await Ue({ we: "folder", parentId: k, Ri: e });
                              },
                            }),
                            {
                              name: "below",
                              label: f("createFolderBelow"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let H = k,
                                  _ = y.parentIds.find(rt),
                                  ft = await ot(_);
                                await Ue({
                                  we: "folder",
                                  parentId: _,
                                  Ri: e,
                                  N: ft.childIds.indexOf(H) + 1,
                                });
                              },
                            },
                          ].map((H) => [H.name, Xt(H)]),
                        ),
                      }).i,
                      j,
                    ),
                    !0
                  ),
                }),
                ...I(
                  !R &&
                    !nt &&
                    !(t && F(y) && !v) &&
                    !De &&
                    !e?.B &&
                    !e?.Ot &&
                    !w &&
                    (F(y) || Dt(y)),
                  {
                    name: "within",
                    label: f("createGroupWithin"),
                    icon: {
                      I: "add-group",
                      dimension: "14px",
                      top: "2px",
                      left: "0px",
                    },
                    D: f("createGroupMenuItemHelp"),
                    action: async () => {
                      if (e && o) await Pt(f("createNewGroupTip"));
                      else {
                        let $ = await Ue({
                          we: Dt(await ot(k)) ? "tabGroup" : "window",
                          parentId: k,
                          Ri: e,
                        });
                        v && (await Vt({ itemId: y.id, Zi: $ }));
                      }
                    },
                  },
                ),
                ...I(!R && De && !nt, {
                  name: "createGroup",
                  label: f(
                    dt
                      ? "createGroupAboveWithinBelow"
                      : "createGroupAboveBelow",
                  ),
                  icon: {
                    I: "add-group",
                    dimension: "14px",
                    top: "2px",
                    left: "0px",
                  },
                  D: f("createGroupMenuItemHelp"),
                  action: async ({ o: $, e: j }) => (
                    o
                      ? await Pt(f("createNewGroupTip"))
                      : d(
                          c({
                            style: {
                              fontSize: "12px",
                              fontWeight: 400,
                              margin: "8px",
                              lineHeight: "1.5em",
                            },
                            children: Object.fromEntries(
                              [
                                {
                                  name: "above",
                                  label: f("createGroupAbove"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let H = k,
                                      _ = y.parentIds.find(rt),
                                      ft = await ot(_);
                                    await T.Sa({
                                      id: Zt(),
                                      parentId: _,
                                      we: y.groupType,
                                      N: ft.childIds.indexOf(H),
                                    });
                                  },
                                },
                                ...I(dt, {
                                  name: "within",
                                  label: f("createGroupWithin"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () =>
                                    await T.Sa({
                                      id: Zt(),
                                      parentId: k,
                                      we: "tabGroup",
                                    }),
                                }),
                                {
                                  name: "below",
                                  label: f("createGroupBelow"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let H = k,
                                      _ = y.parentIds.find(rt),
                                      ft = await ot(_);
                                    await T.Sa({
                                      id: Zt(),
                                      parentId: _,
                                      we: y.groupType,
                                      N: ft.childIds.indexOf(H) + 1,
                                    });
                                  },
                                },
                              ].map((H) => [H.name, Xt(H)]),
                            ),
                          }).i,
                          j,
                        ),
                    !0
                  ),
                }),
                ...I(
                  !R &&
                    !w &&
                    F(y) &&
                    (["navCol-root", "quickAccessCol-quickList"].includes(
                      e?.q,
                    ) ||
                      t),
                  {
                    name: "searchHere",
                    label: f("searchHere"),
                    Kt: {
                      I: "search-action",
                      dimension: "12px",
                      top: "0px",
                      left: "0px",
                      ee: !U(),
                    },
                    action: async () => {
                      await st.Hd({ query: "", Xu: y.id });
                    },
                  },
                ),
                ...I(!R && A && !w && !g && !nt, {
                  name: "mergeIntoParent",
                  label: f("mergeIntoParent"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "1px" },
                  action: async () => {
                    let $ = await ot(k);
                    await T.Df({ Pf: $, Lf: $.parentIds.find(rt), N: m });
                  },
                }),
                ...I(!R && D && !g && !F(y) && !w && !nt, {
                  name: "mergeInnerGroups",
                  label: f("mergeWithInnerGroups"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "2px" },
                  action: async () => {
                    let $ = await Ut(y.childIds);
                    for (let j = $.length - 1; j >= 0; j--) {
                      let H = $[j];
                      Y(H) && (await T.Df({ Pf: H, Lf: y.id, N: j }));
                    }
                  },
                }),
                ...I(!R && !g && F(y) && !w && !nt, {
                  name: "sortDirect",
                  label: f("sortGroups"),
                  Kt: { I: "sort", dimension: "14px", ee: !U() },
                  action: ti({ parentId: k, As: !0 }),
                }),
                ...I(!R && t && Yt(y) && !nt && !w, {
                  name: "sortRecursive",
                  label: f("sort"),
                  Kt: { I: "sort", dimension: "14px", ee: !U() },
                  action: ti({ parentId: k, As: !1 }),
                }),
                ...I(!R && !w && !g && Y(y) && !nt, {
                  name: "removeDuplicates",
                  label: f("removeDuplicates"),
                  Kt: { I: "remove-duplicates", dimension: "14px", ee: !U() },
                  D: f("removeDuplicatesMenuItemHelp"),
                  action: async ({ e: $ }) => {
                    let { Yw: j, _w: H, Vw: _ } = await T.tx(k),
                      ft = !(j.length || H.length || _.length);
                    return (
                      d(
                        c({
                          style: {
                            fontSize: "12px",
                            fontWeight: 400,
                            margin: "8px",
                            lineHeight: "1.5em",
                          },
                          children: {
                            body: c({
                              children: [
                                ...[
                                  ...I(j.length, {
                                    mode: "hereRetainNewest",
                                    label: C(
                                      "removeDuplicateTabsHere",
                                      j.length,
                                    ),
                                    D: f("recentDuplicateRetainedHelp"),
                                    Ea: j,
                                  }),
                                  ...I(H.length, {
                                    mode: "hereIfElsewhere",
                                    label: C(
                                      "removeTabsHereAlsoElsewhere",
                                      H.length,
                                    ),
                                    Ea: H,
                                  }),
                                  ...I(_.length, {
                                    mode: "elsewhereIfHere",
                                    label: C(
                                      "removeTabsElsewhereAlsoHere",
                                      _.length,
                                    ),
                                    Ea: _,
                                  }),
                                ].map(({ mode: At, label: Rt, Ea: O, D: E }) =>
                                  Xt({
                                    name: At,
                                    label: Rt,
                                    D: E,
                                    Kt: {
                                      I: "remove-duplicates",
                                      dimension: "14px",
                                      top: "2px",
                                    },
                                    action: async () => {
                                      let Q = O.map((K) =>
                                        wt({
                                          itemId: K.id,
                                          Fe: K.parentId,
                                          zt: K.zt,
                                        }),
                                      );
                                      await T.move({ rt: Q, O: "trash" });
                                    },
                                  }),
                                ),
                                ...I(
                                  ft,
                                  c({
                                    style: {
                                      fontSize: "12px",
                                      padding: "10px",
                                      textAlign: "center",
                                    },
                                    textContent: f("noDupsFoundHere"),
                                    onclick: (At) => l(),
                                  }),
                                ),
                              ],
                            }),
                          },
                        }).i,
                        $,
                      ),
                      !0
                    );
                  },
                }),
                ...I(!R && !w && !B(y) && !g && !it(y) && !p, {
                  name: "move",
                  label: f("move"),
                  Kt: { I: "move", dimension: "15px", ee: !U(), left: "1px" },
                  action: async () => {
                    let $ = [wt({ itemId: k })];
                    await me({
                      title: f("chooseLocationToMoveTo"),
                      He: F(y),
                      io: async (j) => {
                        await ce({ rt: $, O: j.id });
                      },
                    });
                  },
                }),
                ...I(!R && !g && !it(y) && !(B(y) && p), {
                  name: "trash",
                  label: f("moveToTrash"),
                  icon: { I: "cross-action", dimension: "10px", left: "0px" },
                  ni: !0,
                  action: async () => {
                    let $;
                    B(y) && W && ($ = W.id);
                    let j = [wt({ itemId: k, Fe: $ })],
                      H = await T.gs(j);
                    (await T.move({ rt: j, O: "trash" }),
                      await T.Oe(H),
                      await er({ Ef: !!t && !e && !b && !v && Yt(y) }));
                  },
                }),
              ].map(($) => [$.name, Xt($)]),
            ),
          },
          i && {
            horizDivider3: Ft({
              marginTop: "5px",
              marginBottom: "4px",
              marginInlineStart: "-8px",
              marginInlineEnd: "-8px",
            }),
            ku: new Jt({
              dt: u,
              value: kt(y),
              fontSize: "12px",
              label: f("openAsTabGroup"),
              D: f("openAsTabGroupMenuItemHelp"),
              onChange: async ($) => {
                ne.Fa.i.style.display = $ ? "block" : "none";
                let j = { isTabGroup: $ };
                ($ && (y.color || (j.color = Ee)),
                  $ || ((j.color = void 0), (j.collapsed = void 0)),
                  Ys.forEach((H) =>
                    ne.Fa.Ff[H].p.fh(H === (j.color ?? y.color)),
                  ),
                  ne.Fa.jf.et(y.collapsed, !0),
                  h(j));
              },
              ae: `${24 / 2}px`,
              $: {
                marginTop: "8px",
                marginInlineStart: "12px",
                marginInlineEnd: "15px",
              },
            }),
            Fa: c({
              style: {
                marginTop: "3px",
                marginBottom: "0px",
                display: kt(y) ? "block" : "none",
              },
              children: {
                jf: new Jt({
                  value: !!y.collapsed,
                  fontSize: "12px",
                  label: f("openAsCollapsedTabGroup"),
                  D: f("openAsCollapsedTabGroupMenuItemHelp"),
                  onChange: async ($) => {
                    let j = { collapsed: $ };
                    (kt(y) || (ne.ku.et(!0, !1), y.color || (j.color = Ee)),
                      h(j));
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    marginTop: "0px",
                    marginInlineStart: "12px",
                    marginInlineEnd: "15px",
                  },
                }),
                ix: c({
                  style: {
                    textAlign: "start",
                    fontSize: "12px",
                    marginTop: "8px",
                    paddingBottom: "3px",
                    marginInlineStart: "15px",
                    marginInlineEnd: "15px",
                  },
                  textContent: f("tabGroupColorColon"),
                }),
                Ff: c({
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    paddingInline: "14px 14px",
                    paddingBlock: "0px 7px",
                  },
                  children: {
                    ...Object.fromEntries(
                      Ys.map(($) => [
                        $,
                        L("div", {
                          style: { display: "inline-block", cursor: "pointer" },
                          onclick: (j) => {
                            let H = y.color,
                              _ = {};
                            (kt(y) ||
                              ((_.isTabGroup = !0),
                              (_.color = $),
                              ne.ku.et(!0, !0)),
                              $ !== H && (_.color = $),
                              Object.keys(_).length > 0 && h(_),
                              l());
                          },
                          p: new _i({
                            color: $,
                            dh: !0,
                            isSelected: y.color === $,
                          }),
                        }),
                      ]),
                    ),
                  },
                }),
              },
            }),
          },
          r && {
            ...Object.fromEntries(
              [
                ...I(V, {
                  name: "deleteAllTrash",
                  label: f("deleteAllTrash"),
                  icon: { I: "cross-action", dimension: "10px" },
                  ni: !0,
                  action: async () => {
                    await T.td();
                  },
                }),
                ...I(!V, {
                  name: "moveBack",
                  label: f("moveBack"),
                  icon: { I: "move", dimension: "14px", top: "1px" },
                  action: async () => gn(y),
                }),
              ].map(($) => [$.name, Xt($)]),
            ),
          },
        ],
        () =>
          Ft({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          }),
      ),
    },
    re = Object.entries(ne),
    Fe = ($) => $.i?.classList.contains("horizDivider");
  return (
    (re = re.filter(
      ([$, j], H, _) => !((H === 0 || H === _.length - 1) && Fe(j)),
    )),
    (re = re.filter(([$, j], H, _) => !(Fe(j) && H > 0 && Fe(_[H - 1][1])))),
    Object.fromEntries(re)
  );
}
async function Xn({ mode: t = "text", O: e, Gs: i, gu: s, Bf: n }) {
  let r = t === "readingList" && (await chrome.readingList.query({}));
  r &&
    r.sort(
      ke(
        Gi((h) => h.hasBeenRead),
        te((h) => h.creationTime),
      ),
    );
  let o = t === "bookmarks" && (await chrome.bookmarks.getTree()),
    a = new fa({ style: { flex: "1 1 10px", margin: "0 20px" } });
  n?.();
  let l = new gt({
    $r: !0,
    minWidth: "490px",
    minHeight: "360px",
    Sr: "490px",
    zl: "390px",
    buttons:
      t === "text"
        ? [
            new Ke({
              id: "cancel",
              label: f("Cancel"),
              V: !1,
              Pn: !0,
              tabIndex: 2,
            }),
            new Ke({
              id: "import",
              label: f("Import"),
              V: !0,
              tabIndex: 1,
              onclick: async (h) => {
                let u = a.i.contentWindow.document.body.innerHTML,
                  d = await Vs(u),
                  w = await T.Ma({ Ga: d, Gs: i, O: e });
                w && (await s({ itemId: e, ...(e !== w && { Zi: w }) }));
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
          init: (h) => (h.i.onclick = (u) => l.destroy()),
          style: {
            position: "absolute",
            top: "14px",
            [U() ? "right" : "left"]: "17px",
            cursor: "pointer",
          },
          p: z(
            { dimension: "12px" },
            (h) => `images/cross${h ? "" : "-dark"}.png`,
          ),
        }),
        nx: new Qt({
          fontSize: "12px",
          $: { paddingTop: "12px", paddingInlineStart: "16px" },
          Dc: [
            { label: f("importText"), name: "text" },
            { label: f("importBookmarks"), name: "bookmarks" },
            ...I(await wo(), {
              label: f("importReadingList"),
              name: "readingList",
            }),
          ],
          Pc: [t],
          onChange: async ([h]) => {
            if (h !== t) {
              if (h === "bookmarks" && !(await Is("bookmarks")))
                return (alert(f("bookmarksPermissionNecesssary")), !1);
              if (h === "readingList" && !(await Is("readingList")))
                return (alert(f("readingListPermissionNecesssary")), !1);
              await Xn({ mode: h, O: e, Gs: i, gu: s, Bf: () => l.destroy() });
            }
          },
        }),
        ...(t === "text" && {
          content: pa({
            style: { paddingInline: "20px 20px", paddingBlock: "18px 10px" },
          }),
          ox: a,
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
                children: o.map((h) => On(h, !0, i, e, () => l.destroy())),
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
                  xf: z(
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
                    textContent: f("readingList"),
                  }),
                  bf: c({
                    style: { flex: "0 0 auto" },
                    p: new mt({
                      V: !0,
                      label: f("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (h) => {
                        (await T.Ma({
                          Ga: [
                            r.map(({ title: u, url: d }) => ({
                              kt: St(d),
                              title: u,
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
              ...(r?.length && {
                entries: c({
                  style: { marginInlineStart: "-6px" },
                  children: r.map((h) => $n(h)),
                }),
              }),
              ...(!r?.length && {
                ux: c({
                  style: { marginInlineStart: "25px", fontSize: "13px" },
                  textContent: f("noReadingListEntries"),
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
const _n = [
  { name: "newWindow", label: f("openInNewWindow") },
  { name: "currentWindow", label: f("openInThisWindow") },
  { name: "newIncognitoWindow", label: f("openInIncognitoWindow") },
];
(async () => (
  await We(),
  [...document.querySelectorAll("[data-m]")].forEach(
    (t) => (t.textContent = f(t.dataset.m)),
  )
))();
function Xa(t, e) {
  const i = t.slice(),
    s = new Set(t);
  let n = -1;
  for (const r of e) {
    if (s.has(r)) {
      n = i.lastIndexOf(r);
      continue;
    }
    const o = n === -1 ? 0 : n + 1;
    (i.splice(o, 0, r), s.add(r), (n = o));
  }
  return i;
}
async function gc(t, e, i) {
  const s = Xa(t, e),
    n = t.slice();
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
    (await i(l, a), zr(n, a, l), (r = a + l.length));
  }
  return n;
}
class Ke {
  constructor({ id: e, label: i, V: s, Pn: n, onclick: r, tabIndex: o }) {
    ((this.id = e),
      (this.V = s),
      (this.Pn = n),
      (this.Tu = I(r)),
      (this.o = c({
        className: "button-outer" + (s ? " button-default-outer" : ""),
        p: L("button", {
          className: "button",
          textContent: i,
          onclick: (a) => (a.stopPropagation(), this.click(a)),
          tabIndex: o,
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
async function Yn({ message: t, xi: e }) {
  return new Promise((i) => {
    new gt({
      buttons: [
        new Ke({
          id: "cancel",
          label: f("Cancel"),
          V: !1,
          Pn: !0,
          tabIndex: 2,
          onclick: (n) => i(!1),
        }),
        new Ke({
          id: "ok",
          label: f("OK"),
          V: !0,
          tabIndex: 1,
          onclick: (n) => i(!0),
        }),
      ],
    }).Lt({ message: t, xi: e });
  });
}
async function Pt(t, { Iu: e = !1 } = {}) {
  return new Promise((i) => {
    new gt({
      buttons: [
        new Ke({
          id: "ok",
          label: f("OK"),
          V: !0,
          Pn: !0,
          tabIndex: 0,
          onclick: (n) => i(),
        }),
      ],
    }).Lt({ message: t, Iu: e });
  });
}
async function kc(t) {
  return new Promise((e) => {
    new gt({ buttons: [] }).Lt({ message: t });
  });
}
const tr = "moveToTrashGroupCrossHintShown";
async function er({ Ef: t }) {
  if (t)
    try {
      if (await T._e(tr)) return;
      (await T.Ve(tr, !0), await _a());
    } catch (e) {
      console.log(`maybeShowMoveToTrashGroupCrossHintModal failed: ${e}`);
    }
}
async function _a() {
  return await new Promise((t) => {
    let e = new gt({
        fs: !0,
        Ul: !1,
        $r: !1,
        minWidth: "460px",
        Sr: "460px",
        buttons: [],
        Bo: () => t(),
      }),
      i = z(
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
            textContent: f("modalMoveToTrashHintExampleGroupTitle"),
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
            textContent: f("modalMoveToTrashHintHeading"),
          }),
          mx: s,
          wx: c({
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            },
            p: new mt({
              label: f("gotIt"),
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
class gt {
  static zIndex = 1e4;
  constructor({
    buttons: e,
    $r: i,
    minWidth: s,
    minHeight: n,
    Sr: r,
    zl: o,
    fs: a,
    Ul: l,
    Bo: h,
  }) {
    ((this.Bo = h), (gt.Is = !0), (this.m = []), (this.buttons = e));
    let u = Object.fromEntries(e.map((w) => [w.id, w]));
    if (
      ((this.o = c({
        onclick: (w) => {
          (w.stopPropagation(),
            l && !(new Date() - Rn < 50) && !Tt && this.destroy());
        },
        style: {
          zIndex: gt.zIndex,
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
          init: ({ i: w }) => {
            this.m.push(
              tt(w, "click", (b) => {
                b.stopPropagation();
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
                ...(r && { width: r }),
                ...(o && { height: o }),
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
                    children: u,
                  }),
                }),
                ...(i && {
                  Hf: c({
                    style: {
                      position: "absolute",
                      right: "4px",
                      bottom: "0px",
                    },
                    p: z(
                      {
                        width: "12px",
                        height: "12px",
                        style: { cursor: "nwse-resize" },
                      },
                      (w) =>
                        `images/bottom-right-resize${w ? "" : "-dark"}.png`,
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
      let w = this.o.p.ja.i;
      (this.m.push(
        tt(this.o.p.ja.Hf.i, "pointerdown", (b) =>
          ps({
            event: b,
            Il: {
              vu: w,
              qf: w.offsetWidth,
              Uf: w.offsetHeight,
              Qn: parseInt(w.style.minWidth),
              zf: parseInt(w.style.minHeight),
            },
            Al: ({ ts: p, es: x, dx: g, dy: y }) => {
              ((x.vu.style.width = `${Math.min(window.innerWidth - 80, Math.max(x.Qn, x.qf + g * 2))}px`),
                (x.vu.style.height = `${Math.min(window.innerHeight - 70, Math.max(x.zf, x.Uf + y * 2))}px`));
            },
          }),
        ),
      ),
        this.m.push(
          tt(window, "resize", (b) => {
            ((w.style.width = `${Math.min(window.innerWidth - 80, Math.max(parseInt(w.style.minWidth), w.clientWidth))}px`),
              (w.style.height = `${Math.min(window.innerHeight - 70, Math.max(parseInt(w.style.minHeight), w.clientHeight))}px`));
          }),
        ));
    }
    let d = e.find((w) => w.Pn);
    (d &&
      this.m.push(
        tt(document, "keydown", (w) => {
          Me(w) && d.click();
        }),
      ),
      a &&
        this.m.push(
          tt(document, "keydown", (w) => {
            Me(w) && (w.preventDefault(), this.destroy());
          }),
        ),
      Object.values(u).forEach((w) =>
        w.Cf((b) => {
          this.destroy();
        }),
      ));
  }
  Lt({ content: e, message: i, xi: s, Iu: n }) {
    ((this.content = e), (this.message = i));
    let r = i
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
    (this.o.p.ja.content.i.replaceWith(r.i),
      document.body.appendChild(this.o.i),
      setTimeout(() => this.buttons.find((o) => o.V)?.focus(), 1));
  }
  destroy() {
    ((gt.Is = !1),
      this.m?.forEach((e) => e.remove()),
      this.content?.destroy?.(),
      this.o.i.remove(),
      this.Bo?.(),
      (this.Bo = null));
  }
}
function Ya({ eo: t, Ec: e }) {
  return L("div", {
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
          X.bi({ name: i, label: s, action: () => e(i) }),
        ),
      }),
    },
  });
}
function tl({ content: t, filename: e, mimeType: i = "text/plain" }) {
  const s = document.createElement("a"),
    n = new Blob([t], { type: i }),
    r = URL.createObjectURL(n);
  ((s.href = r),
    (s.download = e),
    s.click(),
    setTimeout(() => URL.revokeObjectURL(r), 2e3));
}
function el(t) {
  return (
    (t = oe(Ms(t))),
    (t = t.replace(/[\\/:*?"<>|]/g, " ")),
    (t = t.replace(/[\s]+/g, " ").trim()),
    (t = t.replace(/[. ]+$/g, "")),
    t || (t = "folder"),
    t.substring(0, 70)
  );
}
function il(t) {
  if (!t) return "";
  let e = new Date(t);
  return `${e.toLocaleDateString(void 0, { cc: "short" })}, ${e.toLocaleTimeString()}`;
}
function bs({ h: t, Qt: e }) {
  let i = 0;
  for (let s of e.childIds ?? []) {
    let n = t.v(s);
    n && (B(n) ? i++ : Y(n) && (i += bs({ h: t, Qt: n })));
  }
  return i;
}
function sl({ h: t, Wf: e, entries: i = [] }) {
  for (let s of e.childIds ?? []) {
    let n = t.v(s);
    n && Y(n) && !F(n) && i.push({ Qt: n });
  }
  return i;
}
function ir({ Qt: t, h: e, level: i = 0, Ps: s }) {
  let n = "",
    r = 20,
    o = i ? i * r : 0,
    a = (i + 1) * r,
    l = 0;
  for (let h of t.childIds ?? []) {
    let u = e.v(h);
    if (u) {
      if (B(u)) {
        let d = Xs(u.url || ""),
          w = Ot(u.title || u.url || ""),
          b =
            s && u.notes?.text
              ? `<div class="tabNotes">${Ot(u.notes.text)}</div>`
              : "";
        ((n += `<div class="tab" style="padding-inline-start: ${o}px;"><a class="tabLink" href="${d}">${w}</a>${b}</div>`),
          l++);
      } else if (Y(u)) {
        let d = He({ h: e, l: u });
        ((n += `<div class="innerGroupBlock" style="margin-top: ${l ? 8 : 2}px;">
        <div class="innerGroupTitleText" style="padding-inline-start: ${a}px;">${Ot(d)}</div>`),
          s &&
            u.notes?.text &&
            (n += `<div class="innerGroupNotes" style="padding-inline-start: ${a}px;">${Ot(u.notes.text)}</div>`),
          (n += ir({ Qt: u, h: e, level: i + 1, Ps: s })),
          (n += "</div>"),
          l++);
      }
    }
  }
  return n;
}
function nl({ Qt: t, h: e, Ps: i }) {
  let s = bs({ h: e, Qt: t }),
    n = Zi({ h: e, l: t }),
    r = C("tabCount", s),
    o = t.createDate ? `${f("createdPreceedingDate")} ${il(t.createDate)}` : "",
    a = ir({ Qt: t, h: e, Ps: i });
  return `<div class="tabGroup">
      <div class="tabGroupHeader">
        <div class="tabGroupHeaderRow">
          <div class="tabGroupTitleText">${Ot(n || r)}</div>
          ${n ? `<div class="tabCountInline">${Ot(r)}</div>` : ""}
        </div>
        ${o ? `<div class="createdDate">${Ot(o)}</div>` : ""}
      </div>
      <div class="tabList">${a}</div>
    </div>`;
}
function rl({ Nf: t, Rf: e, Zf: i, h: s, Qf: n, Ps: r }) {
  let o = i.map((u) => nl({ Qt: u.Qt, h: s, Ps: r })).join(""),
    a = i.length
      ? ""
      : `<div id="emptyState">${Ot(f("noTabsInOneTabYet"))}</div>`,
    l = f("oneTabExportPageTitle"),
    h = n ? `${t} - ${l}` : l;
  return `<!DOCTYPE html>
<html dir="${U() ? "ltr" : "rtl"}">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>${Ot(h)}</title>
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
    ${n ? `<div id="folderTitle">${Ot(t)}</div>` : ""}
    <div id="headerText">${Ot(C("tabTotalCount", e))}</div>
    <div id="tabGroupsDiv">${o}${a}</div>
  </div>
</body>
</html>`;
}
async function ol({ La: t, h: e }) {
  ((e ??= new ht()), await e.Te({ groupId: t }));
  let i = e.v(t);
  if (!i || !F(i))
    throw new Error("getFolderSavedPageExport requires a folder item");
  let s = He({ h: e, l: i }),
    n = !1,
    r = sl({ h: e, Wf: i }),
    o = r.map(({ Qt: l }) => bs({ h: e, Qt: l })).reduce((l, h) => l + h, 0),
    a = !it(i);
  return {
    filename: `${el(s)}.html`,
    Ee: rl({ Nf: s, Rf: o, Zf: r, h: e, Qf: a, Ps: n }),
  };
}
async function al({ La: t }) {
  let { filename: e, Ee: i } = await ol({ La: t });
  tl({ content: i, filename: e, mimeType: "text/html" });
}
let bt, Ve;
async function sr(t) {
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
async function nr(t) {
  if (typeof t == "string") return sr(t);
  if (typeof t == "function") {
    let e = await t();
    return e
      ? typeof e == "string"
        ? sr(e)
        : e instanceof Element
          ? e
          : e.i
      : void 0;
  } else return;
}
function Wt(t, { Yt: e, Ls: i, bx: s }) {
  let n = t instanceof HTMLElement ? t : (t?.o?.i ?? t.i),
    r,
    o = [];
  return (
    o.push(
      Ze(n, () => {
        (Ve !== void 0 && clearTimeout(Ve),
          (Ve = setTimeout(async () => {
            if ((bt?.destroy(), !n?.isConnected || s?.())) return;
            let a = await nr(e);
            if (!a) return;
            let l = n.getBoundingClientRect(),
              h = document.body.getBoundingClientRect();
            r = l.left < (h.right - h.left) / 2 + h.left;
            let u = c({
              style: { width: "250px", position: "absolute", left: "-1000px" },
              p: a,
            }).i;
            document.body.appendChild(u);
            let d = u.offsetHeight + 20 > l.top;
            (u.remove(),
              (bt = new ll({ parent: t, Yt: e, Jf: a, Kf: d, Xf: r, Ls: i })));
            let w = Math.round(l.width / 2);
            if (i) {
              let b = i();
              w !== void 0 && (w = b);
            }
            ((bt.Au = w),
              (bt.o.i.style.left = `${l.x + w + (r ? 0 : -250) + window.scrollX}px`),
              (bt.o.i.style.top = `${l.y + (d ? l.height : 0) + window.scrollY}px`),
              document.body.appendChild(bt.o.i));
          }, 250)));
      }),
    ),
    i &&
      o.push(
        Ea(n, async () => {
          if (!bt?.Ls) return;
          let a = bt.Ls();
          if (a !== bt.Au && a !== void 0) {
            let l = await nr(bt.Yt);
            (bt.o.$u.p.replaceWith(l), (bt.o.$u.p = l));
            let h = n.getBoundingClientRect();
            ((bt.o.i.style.left = `${h.x + a + (r ? 0 : -250) + window.scrollX}px`),
              (bt.Au = a));
          }
        }),
      ),
    o.push(
      Je(n, () => {
        (Ve !== void 0 && clearTimeout(Ve), bt?.destroy());
      }),
    ),
    o
  );
}
class ll {
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
