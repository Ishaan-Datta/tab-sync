// Copyright 2026 OneTab Ltd.  All rights reserved.
const {
  version: pn,
  false1: Jo,
  false2: Qo,
  false3: Ko,
  false4: Xo,
  false5: Vo,
  false6: _o,
  true1: Yo,
  chromeUrl: ta,
  chromeNewTabUrl: ea,
  websiteUrl: De,
  false7: ia,
  false8: sa,
  true2: na,
  false9: ra,
  oneTabPageUrl: xn,
  extensionRootUrl: de,
  tabGroupsEnabled: Wi,
  hasTabGroupsPermission: oa,
  requestTabGroupsPermission: aa,
  requestPermission: Ci,
  isOneTabPageUrl: zi,
  isExtensionUrl: la,
  stripHttpProtocol: wn,
  domainWithoutWww: Zi,
  extractDomain: Ee,
  protocolPrefix: ha,
  commonDomainSuffixes: Ji,
  registeredDomain: mn,
  addNoCacheRandom: yn,
  noCacheRandom: bn,
  postJson: ua,
  fetchJson: gn,
  randomAlphabet: ti,
  randomId: kn,
  randomHex: ca,
  newId: Bt,
  textEncoder: Tn,
  textDecoder: fa,
  digestBytes: An,
  digestText: $n,
  stableIdFromText: ei,
  trimWhitespace: ii,
  isLineBreak: In,
  nonStandardLineBreaks: vn,
  normalizeLineBreaks: On,
  removeControlCharacters: Qi,
  removeControlCharactersExceptTabs: Ki,
  normalizedOrDefault: si,
  normalizeText: Wt,
  endsWith: Mn,
  compareVersionParts: Xi,
  versionLessThan: Ln,
  versionGreaterThan: Gn,
  versionBetween: da,
  defaultSettings: pa,
  moveElementToIndex: Sn,
  insertBeforeElement: Pn,
  div: f,
  createElement: F,
  internalProps: Fn,
  createNode: pe,
  readerUrlPrefix: Vi,
  normalizeUrl: At,
  placeholderUrlFor: Dn,
  isFileAccessBlocked: xa,
  parseDigits: wa,
  last: ma,
  backoffSteps: _i,
  backoffDurations: En,
  waitForCondition: ya,
  translate: w,
  runWhenDomReady: ba,
  horizontalDivider: xe,
  relativeTimeFormatter: Bn,
  relativeTimeUnits: Yi,
  relativeTime: ts,
  relativePastTime: es,
  relativeFutureTime: Hn,
  deepEqual: Be,
  sortObjectDeep: is,
  clearArray: ss,
  uniqueBy: jn,
  arrayInsert: qn,
  sameSet: Un,
  sameJson: ga,
  pushUnique: ee,
  includes: Ht,
  includesAny: Xt,
  removeAll: ni,
  removeWhere: ka,
  toggleValue: Ta,
  removeFirstWhere: Aa,
  maybeArray: O,
  removeOccurrence: $a,
  mapIdsToItems: Ia,
  filterToSet: va,
  filterNested: Rn,
  not: He,
  partition: ri,
  partitionMany: Oa,
  asyncPartition: Ma,
  activateTab: La,
  activateTabAndWindow: Ga,
  randomItem: Sa,
  randomColor: Pa,
  excludedUrlPrefixes: Nn,
  isExcludedUrl: ns,
  saveUncommittedChanges: ie,
  clearUncommittedChanges: Fa,
  getUncommittedChanges: rs,
  clearAllUncommittedChanges: Da,
  pruneUncommittedChanges: Wn,
  localStorageAdapter: zn,
  getLocalStorageAdapter: Ea,
  placeholderParts: Ra,
  makeProxyHandler: Za,
  identity: hi,
  intersperseLocal: Xa,
  childTypeCode: Va,
  editTypeCode: _a,
  tabTypeCode: Ya,
  sessionStorageAdapter: er,
  getSessionStorageAdapter: tl,
  runtimeMarker: ir,
  renderLabelSegments: ls,
  tabCount: di,
  bookmarkCount: ar,
  replaceLabelSegments: pi,
  htmlEscapeText: mt,
  htmlEscapeAttribute: cs,
  identityPair: Ne,
  EventAttachment: fs,
  itemOccurrenceRef: gt,
  AsyncMapCache: dr,
  hasNotesText: ol,
  nonNegative: ds,
  isTabExcluded: al,
  isPlaceholderUrl: pr,
  shouldSkipTab: ll,
  allSame: hl,
  escapeXml: ul,
  isChromium120OrNewer: xr,
  colorNames: ps,
  defaultColor: me,
  true3: cl,
  leadingNonAlphanumeric: fl,
  measureElement: dl,
  modelPredicates: { isUndefined: ja, isDefined: Zn, hasId: Ua, doesNotHaveId: Jn, sameIdAs: qa, getId: Vt, isTab: j, isRoot: V, isTrash: yt, isFolder: G, isUserFolder: Na, isFolderOrWindowGroup: Ca, isGroup: _, isTabGroup: ct, isWindowGroup: $t, isBrowserGroup: zt, isSharedAndNotExpired: Qn },
  collectionHelpers: { compareDescendingBy: _t, mapBy: Kn, compareLocaleNumericBy: Wa, mergeOwnProperty: za, groupBy: Qa, range: Xn, nthIndexOf: Ka },
  searchHelpers: { splitSearchText: _n, splitSearchTextWithTerm: Yn },
  runtimeHelpers: { delay: Zt, replaceValueDeep: ui, isOpera: sr, isBrave: el, isMicrosoftEdge: nr, unsleepTab: il, mergeObjectsWithSeparators: ci, intersperse: sl, callIfOwnProperty: fi, callIfDefined: rr, joinUniqueTrimmed: nl },
  domTransitionHelpers: { fadeOut: or, fadeIn: rl },
  applyRuntimeHelpers: { applyValue: Ue, applyIfTruthy: vt },
  urlHelpers: { trimTrailingDotOrComma: lr, substringAfter: hr, stripProtocol: jt, equalIgnoringProtocol: Re, safeNormalizeText: Yt, canonicalizeTextAsUrl: hs, areUrlLikeEqual: us, isYouTubeUrl: ur, shouldUseCandidateUrl: cr, safeNonJavascriptUrl: se },
  textHelpers: { normalizeImportedText: fr },
  importHelpers: { parseImportedTabGroups: xi }
} = globalThis.createOneTabBundlePrelude({
  getCoreProxy: () => A,
  isNewOrBlankTabPageUrl: url => globalThis.isNewOrBlankTabPageUrl(url),
  pluralize: (key, count) => Ft(key, count),
  trimToLengthWithEllipsis: (...args) => Ks(...args),
});
const {
  taskFieldNames: ye,
  shareFieldNames: xs,
  sharedPageUrlPattern: pl,
  splitOversized: xl,
  isJson: wr,
  localeId: wi,
  helpUrl: wl,
  localizedPathPrefix: mr,
  matchesOrUnset: ws,
  getDirection: yr,
  isLtr: K,
  applyDocumentDirection: br,
  pluralize: Ft,
  groupPathLabel: ml,
  groupLabelParts: gr,
  groupDisplayLabel: be,
  groupFallbackLabel: mi,
  groupLabel: yi,
  debounceByType: kr,
  shouldApplyChrome145Workaround: Tr,
  isChrome145: Ar,
  uncollapseChrome145TabGroup: yl,
} = globalThis.createOneTabPageCommon({
  websiteUrl: De,
  translate: w,
  tabCount: di,
  isRoot: V,
  isTrash: yt,
  isFolder: G,
  isMicrosoftEdge: nr,
});
const { cleanUrlForSearch: $r } = globalThis.createOneTabUrlQueryCleanup();
class kt {
  constructor(t = []) {
    ((this.$t = new Map()), t.forEach((e) => this.$t.set(e.id, e)));
  }
  static qn = Symbol("uncommitted");
  async ht(t) {
    let e = this.$t.get(t);
    if (!e) {
      if (((e = await rt(t)), !e)) return;
      this.put(e);
    }
    return e;
  }
  async getItems(t) {
    let e = t.filter((n) => !this.$t.has(n));
    return (
      (await ge(e)).forEach((n) => this.put(n)),
      t.map((n) => this.$t.get(n))
    );
  }
  put(t) {
    this.$t.set(t.id, t);
  }
  Wo(t) {
    for (let e of t) this.put(e);
  }
  has(t) {
    return this.$t.has(t);
  }
  v(t) {
    return this.$t.get(t);
  }
  qp(t) {
    return this.v(t)?.type === "group";
  }
  Up(t) {
    return this.v(t)?.groupType === "folder";
  }
  async zp() {
    return (
      this.Nu ||
        ((this.Nu = !0),
        (await Ir()).forEach((t) => this.put(t)),
        this.Ya(),
        this._a(),
        (this.Jo = new Map()),
        this.$t.forEach((t) => {
          j(t) && this.Jo.set(t.id, prettyPrintUrl(t.url));
        })),
      this
    );
  }
  async ke() {
    return (
      this.Ru ||
        ((this.Ru = !0),
        (this.Va = !0),
        (await vr()).forEach((e) => this.put(e)),
        this.Ya(),
        this._a()),
      this
    );
  }
  async tl() {
    if ((await this.ke(), !this.Zu)) {
      this.Zu = !0;
      let t = await Or();
      (t.forEach((s) => this.put(s)),
        (this.Un = new Set(
          t.filter(He(Ct)).flatMap((s) =>
            s.parentIds
              .filter(at)
              .map((o) => this.v(o))
              .filter(He(Ct))
              .map(Vt),
          ),
        )));
      let e = new Set(this.Un);
      for (; e.size; ) {
        let s = new Set();
        (e.forEach((n) => {
          this.v(n)
            .parentIds.filter(at)
            .map((a) => this.v(a))
            .filter(He(Ct))
            .map(Vt)
            .forEach((a) => {
              this.Un.has(a) || (this.Un.add(a), s.add(a));
            });
        }),
          (e = s));
      }
    }
    return this;
  }
  async Wp() {
    return (
      this.Va || ((this.Va = !0), (await Mr()).forEach((e) => this.put(e))),
      this
    );
  }
  _a() {
    this.Qu = new Set();
    let e = [...this.$t.values()].filter(Ct).filter(_).map(Vt);
    for (; e.length; ) {
      let s = e.pop();
      (this.Qu.add(s), this.v(s)?.childIds?.forEach((r) => e.push(r)));
    }
    for (this.el = new Set(), e = ["root"]; e.length; ) {
      let s = e.pop();
      (this.el.add(s),
        this.v(s)?.childIds?.forEach((r) => {
          let o = this.v(r);
          !o || j(o) ? this.el.add(r) : Ct(o) || e.push(r);
        }));
    }
  }
  Ya() {
    this.re = new Set();
    let t = ["trash"];
    for (; t.length; ) {
      let e = t.pop();
      (this.re.add(e), this.v(e)?.childIds?.forEach((n) => t.push(n)));
    }
    for (t = ["root"]; t.length; ) {
      let e = t.pop();
      (this.re.delete(e), this.v(e)?.childIds?.forEach((n) => t.push(n)));
    }
  }
  Np() {
    return this.v("root").childIds.some((t) => {
      let e = this.v(t);
      return e && G(e);
    });
  }
  async il({ count: t, B: e, Rp: s, sl: n, Ju: r }) {
    await this.ke();
    let o = [...this.$t.values()]
      .filter((a) => !a.archived)
      .filter((a) => (e ? G(a) : !0))
      .filter((a) => (s ? !G(a) : !0))
      .filter((a) => _(a) && a.label)
      .filter((a) => !this.re.has(a.id))
      .filter((a) => !a[kt.qn])
      .sort(_t((a) => a.modifyDate));
    if ((!o.length && !r && o.push(this.v("root")), n)) {
      let a = new Set(),
        l = [...o];
      o = [];
      for (let u of l) a.has(u.label) || (o.push(u), a.add(u.label));
    }
    return o.slice(0, t);
  }
  Ku({ ti: t, maxResults: e, B: s }) {
    return (
      (t = t.map((n) => n.toLocaleLowerCase())),
      [...this.$t.values()]
        .filter((n) => !(s && !G(n)))
        .filter((n) => {
          if (!_(n) || this.re.has(n.id)) return !1;
          let r = (V(n) ? w("all") : n.label)?.toLocaleLowerCase();
          return r && t.every((o) => r.includes(o));
        })
        .sort(_t((n) => n.modifyDate))
        .slice(0, e)
    );
  }
  Zp({
    ti: t = [],
    Qp: e = [],
    filter: s,
    Xu: n,
    maxResults: r,
    Jp: o,
    ei: a,
    ii: l,
  }) {
    let u = e.length || s;
    a || (t = t.map((p) => p.toLocaleLowerCase()));
    let c = new Set(n ? this.nl(n) : []),
      d = (p, m) => (l ? as(p, !0, a).test(m) : m.includes(p)),
      y = w("all");
    return [...this.$t.values()]
      .filter((p) => {
        if (
          p.parentIds.filter((m) => !this.re.has(m) && m !== "quickList")
            .length === 0
        )
          return !1;
        if (n && !p.parentIds.some((m) => c.has(m))) return !1;
        if (this.re.has(p.id)) return !1;
        if (["quickList", "trash"].some((m) => m === p.id)) return !1;
        if (s && !s(p)) return !1;
        if (u && !t.length) return !0;
        if (V(p)) return o && t.every((m) => d(m, y));
        if (j(p)) {
          let m = [p.title, this.Jo.get(p.id) ?? p.url, p.notes?.text].filter(
            (x) => x,
          );
          return (
            a || (m = m.map((x) => x.toLocaleLowerCase())),
            t.every((x) => m.some((T) => d(x, T)))
              ? ((m = [
                  p.title,
                  $r(this.Jo.get(p.id) ?? p.url),
                  p.notes?.text,
                ].filter((x) => x)),
                a || (m = m.map((x) => x.toLocaleLowerCase())),
                t.every((x) => m.some((T) => d(x, T))))
              : !1
          );
        } else if (_(p)) {
          let m = [p.label, p.notes?.text].filter((g) => g);
          return (
            a || (m = m.map((g) => g.toLocaleLowerCase())),
            t.every((g) => m.some((x) => d(g, x)))
          );
        } else return !1;
      })
      .sort(we(...e))
      .slice(0, r);
  }
  Yu(t) {
    return this.Un.has(t.id);
  }
  async Te({ groupId: t, ol: e, rl: s }) {
    let n = await this.ht(t),
      { _u: r, items: o, al: a } = await Gr({ groupId: n.id, ol: e, rl: s });
    return (
      o.forEach((l) => this.put(l)),
      { h: this, group: n, Vu: r, al: a, items: o }
    );
  }
  nl(t) {
    let e = this.v(t);
    return [
      t,
      ...e.childIds
        .map((s) => {
          let n = this.v(s);
          return n && _(n) ? n.id : void 0;
        })
        .filter(Zn)
        .flatMap((s) => this.nl(s)),
    ];
  }
  Xi(t) {
    let e = 0,
      n = [this.v(t)];
    for (; n.length; )
      (n.pop().childIds ?? []).forEach((o) => {
        let a = this.v(o);
        a && _(a) ? n.push(a) : e++;
      });
    return e;
  }
  ll(t) {
    let e = 0,
      s = 0,
      n = 0,
      r = this.v(t),
      o = (u) => {
        (e++, u.done ? n++ : s++);
      },
      a = new Set(),
      l = [r];
    for (; l.length; ) {
      let u = l.pop();
      Ct(u) ||
        (je(u) && o(u),
        (u.childIds ?? []).forEach((c) => {
          let d = this.v(c);
          d &&
            !Ct(d) &&
            (_(d) ? l.push(d) : je(d) && (a.has(d.id) || (a.add(d.id), o(d))));
        }));
    }
    return { Kp: e, cl: s, Xp: n };
  }
  Yp(t) {
    let s = [this.v(t)],
      n = [];
    for (; s.length; )
      (s.pop().childIds ?? []).forEach((o) => {
        let a = this.v(o);
        (a || console.log("getTabItemIdsForGroupIdViaCache cache miss"),
          a && _(a) ? s.push(a) : n.push(o));
      });
    return n;
  }
  async Hn(t, e) {
    let s = ["quickList"],
      n = await this.ht(t),
      r = n.parentIds.find((o) => !s.includes(o));
    if (r) {
      let o = await this.ht(r);
      return [...(await this.Hn(r)), o, ...O(e, n)];
    } else return [];
  }
  async th(t) {
    let e = t.filter((s) => !this.$t.has(s));
    return (
      e.length && (await ge(e)).forEach((s) => this.put(s)),
      t.map((s) => this.$t.get(s))
    );
  }
  ul(t) {
    return t.map((e) => this.$t.get(e));
  }
}
class S {
  constructor(t) {
    ((this.pl = t),
      (this.pl.onerror = (e) => {
        console.log(e.target.error);
      }));
  }
  static async Ie(t) {
    return new Promise((e, s) => {
      ((t.onsuccess = (n) => e(n.target.result)),
        (t.onerror = (n) => s(n.target.error)));
    });
  }
  static async nm(t, e, s) {
    return new Promise((n, r) => {
      ((t.onsuccess = (o) => {
        let a = o.target.result;
        a && e(a.key, a.value, s) ? a.continue() : n(s);
      }),
        (t.onerror = (o) => r(o.target.error)));
    });
  }
  static async query({ si: t, zn: e }, s) {
    return await S.je([t], "readonly", async (n, [r]) => {
      let o = e ? r.index(e) : r;
      return await S.Ie(s(o));
    });
  }
  static async ih(t, e) {
    let s = (await S.sh()).transaction(t, e);
    return [s, t.map((n) => hi(s.objectStore(n), "db"))];
  }
  static async je(t, e, s) {
    let [n, r] = await S.ih(t, e),
      o,
      a = new Promise((c) => {
        ((n.oncomplete = () => c()),
          (n.onabort = (d) => {
            ((o =
              n.error ??
              d?.target?.error ??
              new Error("IndexedDB transaction aborted")),
              c());
          }));
      }),
      l,
      u;
    try {
      l = await s(n, r);
    } catch (c) {
      ((u = c), console.log(c));
      try {
        n.abort();
      } catch {}
    }
    if ((await a, u)) throw u;
    if (o) throw o;
    return l;
  }
  static async om(t, e, s) {
    await S.je([t], "readwrite", async (n, [r]) => {
      if (!(await S.get(s[e], r))) await S.put(s, r);
      else throw new Error("Object already exists in ObjectStore");
    });
  }
  static async Xo(t, e) {
    e = jn(e, (n) => n.kt);
    let s = new Date().getTime();
    return await Promise.all(
      e.map(async ({ id: n, kt: r, title: o, nh: a, oh: l }) => {
        let u = await S.get(n, t),
          c = u ?? {
            id: n,
            type: "tab",
            title: Yt(o),
            url: r,
            createDate: a ?? s,
            modifyDate: a ?? s,
            parentIds: [],
            ...(!u && { uncommitted: !0 }),
          },
          d = Yt(o);
        return (
          cr(c.title, c.url, d) && (c.title = d),
          l && (c.parentIds = l),
          c
        );
      }),
    );
  }
  static async _e(t) {
    return (await S.query({ si: "attr" }, (e) => e.get(t)))?.value;
  }
  static async Ve(t, e) {
    await S.je(
      ["attr"],
      "readwrite",
      async (s, [n]) => await S.put({ id: t, value: e }, n),
    );
  }
  static async rm(t, e) {
    return (await S.query({ si: "attr" }, (n) => n.get(t)))
      ? !1
      : (await S.Ve(t, e), !0);
  }
  static async Bu(t) {
    await S.je(["attr"], "readwrite", async (e, [s]) => await S.delete(t, s));
  }
  static async am(t, e) {
    let s;
    return (
      await S.je(
        ["attr"],
        "readwrite",
        async (n, [r]) =>
          await S.modify(r, t, (o) => (s = o.value = e(o?.value))),
      ),
      s
    );
  }
  static async modify(t, e, s) {
    let n = await S.get(e, t);
    return (n || (n = { id: e }), s(n), await S.put(n, t));
  }
  static async lm(t, e) {
    return await Promise.all(t.map((s) => S.get(s, e)));
  }
  static async um(t, e) {
    await Promise.all(t.map((s) => S.put(s, e)));
  }
  static async get(t, e) {
    return await S.Ie(e.get(t));
  }
  static async getAll(t, e) {
    return await S.Ie(e.getAll(t));
  }
  static async put(t, e) {
    return await S.Ie(e.put(t));
  }
  static async delete(t, e) {
    return await S.Ie(e.delete(t));
  }
  static async hm(t, e) {
    return await Promise.all(t.map((s) => S.delete(s, e)));
  }
  static async count(t, e) {
    return await S.Ie(t.count(e));
  }
  static async getAllKeys(t) {
    return await S.Ie(t.getAllKeys());
  }
  static async dm(t) {
    return await S.je(
      ["item"],
      "readonly",
      async (e, [s]) => await S.get(t, s),
    );
  }
  static async fm(t) {
    return await S.je(
      ["item"],
      "readonly",
      async (e, [s]) => await S.get(At(t), s.index("url")),
    );
  }
  static async sh() {
    return (await S.rh()).pl;
  }
  static async pm(t) {
    let e = await S.Ie(t.index("type").getAll("group")),
      s = new Map(e.map((o) => [o.id, o])),
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
    if (S.ml) return S.ml;
    {
      let t = indexedDB.open("onetab", 2);
      t.onupgradeneeded = async (s) => {
        let n = s.target.result,
          r = s.target.transaction;
        if (s.oldVersion < 2) {
          n.objectStoreNames.contains("onetab") &&
            n.deleteObjectStore("onetab");
          let o = n.createObjectStore("item", { keyPath: "id" });
          (o.createIndex(...Ne("type"), { unique: !1 }),
            o.createIndex(...Ne("groupType"), { unique: !1 }),
            o.createIndex(...Ne("task"), { unique: !1 }),
            o.createIndex(...Ne("parentIds"), { unique: !1, multiEntry: !0 }));
          let a = +new Date();
          for (let c of ["root", "quickList", "trash"]) {
            let d = c === "quickList" ? "quickList" : "folder";
            await S.put(
              {
                id: c,
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
            l.put({ id: "installId", value: Bt() }));
          let u = n.createObjectStore("shareUpdate", {
            keyPath: "id",
            autoIncrement: !0,
          });
        }
        s.oldVersion < 3;
      };
      let e = await S.Ie(t);
      return (S.ml = new S(e));
    }
  }
}
class bl extends dr {
  constructor(t) {
    super(async (e) => await S.get(e, t));
  }
  async wm(t, e) {
    let s = [t];
    for (; s.length; ) {
      let n = await this.get(s.pop());
      (await e(n), n?.childIds?.forEach((r) => s.push(r)));
    }
  }
  async xm(t, e) {
    let s = await this.get(t);
    return await Promise.all(
      s?.childIds?.map(async (n) => await e(await this.get(n))),
    );
  }
}
async function ge(i) {
  return i.length
    ? await S.je(
        ["item"],
        "readonly",
        async (t, [e]) => await Promise.all(i.map((s) => S.get(s, e))),
      )
    : [];
}
async function rt(i) {
  if (i) return await S.query({ si: "item" }, (t) => t.get(i));
}
async function Ir() {
  return await S.query({ si: "item" }, (i) => i.getAll());
}
async function vr() {
  return await S.query({ si: "item", zn: "type" }, (i) => i.getAll("group"));
}
async function Or() {
  return await S.query({ si: "item", zn: "task" }, (i) => i.getAll(1));
}
async function Mr() {
  return await S.query({ si: "item", zn: "groupType" }, (i) =>
    i.getAll("folder"),
  );
}
async function Lr(i) {
  return await S.query({ si: "item", zn: "parentIds" }, (t) => t.getAll(i));
}
async function gl(i) {
  let t = new Set();
  for (; i && !t.has(i); ) {
    t.add(i);
    let e = await rt(i);
    if (!e) return !1;
    let s = e.parentIds?.find(at);
    if (s) i = s;
    else return bt(e);
  }
  return !1;
}
async function Gr({ groupId: i, ol: t = 0, rl: e, bm: s = !1 }) {
  let n = await rt(i),
    r = new Map();
  r.set(n.id, n);
  let o = Kn(await Lr(i), Vt),
    a = n.childIds.map((p) => o.get(p)),
    l = a.filter(_),
    u = new Set(a.filter(G).map(Vt)),
    c = Math.max(0, e ? l.length - e - t : 0),
    d = new Set([...l.slice(0, t), ...(e ? l.slice(e) : [])].map((p) => p.id)),
    y = a.filter((p) => !d.has(p.id) && !(s && u.has(p.id)));
  y.forEach((p) => r.set(p.id, p));
  let b = y.filter(_).map((p) => p.id);
  return (
    await S.je(["item"], "readonly", async (p, [m]) => {
      let g = m.index("parentIds");
      for (; b.length; ) {
        let x = b.shift(),
          T = await S.Ie(g.getAll(x));
        (T.forEach((h) => r.set(h.id, h)),
          T.forEach((h) => {
            _(h) && b.push(h.id);
          }));
      }
    }),
    { items: [...r.values()], _u: y, al: c }
  );
}
const { il: kl, Di: ne, le: gi, ur: Sr, cr: Pr, fi: ke, he: ki, cs: gs, $t: Mt, el: Tl, ue: Ti, ce: Ai, xs: $s, fr: Fr, dr: Dr, ws: Is, ms: vs, Kt: re } = globalThis.createOneTabBaseControls({ h: (...a) => f(...a), G: (...a) => F(...a), vi: (...a) => pe(...a), W: (...a) => C(...a), z: (...a) => J(...a), St: (...a) => Dt(...a), Ei: (...a) => Ze(...a), mi: (...a) => Oe(...a), bi: (...a) => Me(...a), O: (...a) => O(...a), Si: (...a) => Ue(...a), J: () => K(), Cs: (...a) => en(...a), Ni: (...a) => Xe(...a), Yt: (...a) => ae(...a), Qt: (...a) => ee(...a), Ji: (...a) => ii(...a), He: (...a) => Ki(...a), Be: (...a) => Qi(...a), se: (...a) => pi(...a), dn: (...a) => In(...a), spinner: (...a) => Mi(...a), getFt: () => Ut, getDnd: () => dnd, getP: () => D, getVt: () => { try { return Lt; } catch { return; } }, getFe: () => Ii, getLt: () => dt, getTooltip: () => ut, getQs: () => Vs });
const { bs: Os, pr: $i, Gi: We, kt: Ot, Pt: qt, ys: Ms, Xt: oe, W: C, yr: qr } = globalThis.createOneTabViewControls({
  get $r() { return Cr; },
  get $t() { return Mt; },
  get A() { return A; },
  get Ae() { return Ei; },
  get B() { return j; },
  get Bi() { return Je; },
  get Bn() { return Qn; },
  get Dt() { return Ht; },
  get Ei() { return Ze; },
  get Es() { return Zs; },
  get Fn() { return Jn; },
  get Fr() { return _r; },
  get Ft() { return Ut; },
  get G() { return F; },
  get Ii() { return Be; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get Ki() { return oi; },
  get Kt() { return re; },
  get L() { return G; },
  get Ls() { return Rs; },
  get Mr() { return Zr; },
  get Mt() { return Ft; },
  get Ni() { return Xe; },
  get Nt() { return zt; },
  get O() { return O; },
  get Oe() { return qi; },
  get On() { return Un; },
  get P() { return D; },
  get Pe() { return zi; },
  get Ps() { return Cs; },
  get Qe() { return rs; },
  get Qn() { return rr; },
  get Qt() { return ee; },
  get St() { return Dt; },
  get Ts() { return Fs; },
  get We() { return es; },
  get X() { return Y; },
  get Yt() { return ae; },
  get Zn() { return or; },
  get Zt() { return ie; },
  get _() { return V; },
  get as() { return ws; },
  get bi() { return Me; },
  get bt() { return It; },
  get ci() { return be; },
  get cs() { return gs; },
  get displayAutoActionOnOpenOptionModal() { return displayAutoActionOnOpenOptionModal; },
  get dnd() { return dnd; },
  get dt() { return _; },
  get ee() { return di; },
  get et() { return ot; },
  get fi() { return ke; },
  get ft() { return xt; },
  get ge() { return Fi; },
  get getActiveTabInCurrentWindow() { return getActiveTabInCurrentWindow; },
  get getItemById() { return rt; },
  get getTabById() { return getTabById; },
  get gr() { return Ur; },
  get gt() { return vt; },
  get h() { return f; },
  get he() { return ki; },
  get hi() { return me; },
  get ie() { return fi; },
  get ji() { return Ke; },
  get lt() { return dt; },
  get mi() { return Oe; },
  get ms() { return vs; },
  get mt() { return $t; },
  get navigateToItem() { return navigateToItem; },
  get nt() { return ut; },
  get oi() { return xe; },
  get oneTabPage() { return oneTabPage; },
  get os() { return xs; },
  get ot() { return ct; },
  get qt() { return Zt; },
  get re() { return mi; },
  get showSharingModal() { return showSharingModal; },
  get ss() { return fs; },
  get st() { return ht; },
  get to() { return To; },
  get ue() { return Ti; },
  get ui() { return ye; },
  get ut() { return at; },
  get vn() { return Hn; },
  get we() { return Li; },
  get ws() { return Is; },
  get wt() { return bt; },
  get x() { return w; },
  get xi() { return Ie; },
  get xs() { return $s; },
  get xt() { return gt; },
  get ye() { return Pi; },
  get z() { return J; },
  get ze() { return ss; },
});
let ve, Ut;
const { gr: Ur, nl: $l, kr: Rr, rl: Il, Tr: Nr, lt: dt, Ar: Wr, ol: vl, $r: Cr, fe: Ii, vr: Ls, Ir: Gs, Or: zr, Mr: Zr, Sr: Jr, al: Ol } = createOneTabUiControls({ h: (...a) => f(...a), G: (...a) => F(...a), W: (...a) => C(...a), Xt: oe, O: (...a) => O(...a), ws: Is, co: (...a) => Do(...a), xe: (...a) => Mi(...a), z: (...a) => J(...a), ti: (...a) => le(...a), Kr: (...a) => yo(...a), x: (...a) => w(...a), Gs: (...a) => Ws(...a), J: () => K(), Yr: (...a) => ko(...a), Bs: (...a) => Js(...a), Ve: (...a) => ls(...a), Qt: (...a) => ee(...a), Zi: (...a) => ni(...a), ze: (...a) => ss(...a), oi: (...a) => xe(...a), St: (...a) => Dt(...a), getSettings: () => A, getModal: () => It, getTheme: () => ve, getTooltip: () => ut });
const {
  X: Y,
  st: ht,
  gs: Ss,
  de: vi,
  Lr: Qr,
  di: Te,
  Dr: Kr,
  Gr: Xr,
  ll: Ml,
  Se: Ri,
  ft: xt,
  Rt: Jt,
} = globalThis.createOneTabTreeRenderer({
  get $t() { return Mt; },
  get A() { return A; },
  get Ae() { return Ei; },
  get B() { return j; },
  get Ct() { return Xt; },
  get Dt() { return Ht; },
  get Ei() { return Ze; },
  get En() { return Ct; },
  get Fe() { return Zi; },
  get Ft() { return Ut; },
  get G() { return F; },
  get Hs() { return 300; },
  get Ht() { return Bt; },
  get Ii() { return Be; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get Kt() { return re; },
  get L() { return G; },
  get Mt() { return Ft; },
  get Ni() { return Xe; },
  get Nt() { return zt; },
  get O() { return O; },
  get Oe() { return qi; },
  get Oi() { return we; },
  get P() { return D; },
  get Pr() { return (...a) => Vr(...a); },
  get Ps() { return (...a) => Cs(...a); },
  get Qe() { return rs; },
  get Qi() { return si; },
  get Si() { return Ue; },
  get Tn() { return Dn; },
  get W() { return C; },
  get We() { return es; },
  get Zr() { return wo; },
  get Zt() { return ie; },
  get _e() { return je; },
  get _s() { return ln; },
  get ai() { return _t; },
  get be() { return Si; },
  get bi() { return Me; },
  get bs() { return Os; },
  get bt() { return It; },
  get cr() { return Pr; },
  get dnd() { return dnd; },
  get dt() { return _; },
  get ee() { return di; },
  get fe() { return Ii; },
  get ge() { return Fi; },
  get getItemById() { return rt; },
  get gn() { return Pn; },
  get gt() { return vt; },
  get h() { return f; },
  get he() { return ki; },
  get hi() { return me; },
  get js() { return (...a) => Ks(...a); },
  get jt() { return Wt; },
  get ks() { return (...a) => Ps(...a); },
  get lt() { return dt; },
  get mi() { return Oe; },
  get ms() { return vs; },
  get nn() { return wn; },
  get ns() { return ds; },
  get oneTabPage() { return oneTabPage; },
  get or() { return gr; },
  get ot() { return ct; },
  get prettyPrintUrl() { return prettyPrintUrl; },
  get se() { return pi; },
  get te() { return ci; },
  get ue() { return Ti; },
  get ui() { return ye; },
  get ut() { return at; },
  get we() { return Li; },
  get wt() { return bt; },
  get x() { return w; },
  get xt() { return gt; },
  get ye() { return Pi; },
  get yn() { return Sn; },
  get yt() { return At; },
  get z() { return J; },
  get zi() { return ei; },
  get zt() { return Qt; },
});
const {
  pi: Ae,
  Pr: Vr,
  ks: Ps,
  Fr: _r,
  Ts: Fs,
  Pi: Ce,
  pe: Oi,
  As: Ds,
  $s: Es,
  hl: Yr,
  Er: to,
  ul: eo,
  vs: Bs,
  Br: io,
  cl: Ll,
  Fi: ze,
  Hr: so,
  jr: no,
  A,
  Vt: $e,
  Nr: ro,
  xi: Ie,
  Yt: ae,
  Ei: Ze,
  Bi: Je,
  fl: Gl,
  Is: Hs,
  qr: oo,
  Rr: ao,
  Hi: Qe,
  Os: js,
  Ms: qs,
  Ur: lo,
  Ss: Us,
  Ls: Rs,
  Ds: Ns,
  Wr: ho,
  xe: Mi,
  we: Li,
  Gs: Ws,
  Cr: uo,
  dl: Sl,
  Ps: Cs,
  pl: Pl,
  zr: co,
  Jr: fo,
  xl: Fl,
  me: Gi,
  Qr: po,
  Fs: zs,
  wl: Dl,
  ml: xo,
  Zr: wo,
  Es: Zs,
  ti: le,
  z: J,
  mi: Oe,
  _r: mo,
  bi: Me,
  ji: Ke,
  Bs: Js,
  Kr: yo,
  Hs: Qs,
  js: Ks,
  bl: El,
  yl: Bl,
  Xr: bo,
  Vr: go,
  gl: Hl,
  be: Si,
  kl: jl,
  Yr: ko,
  to: To,
  Tl: ql,
  Al: Ul,
  et: ot,
} = globalThis.createOneTabTreeActions({
  get $i() { return Ee; },
  get Ai() { return De; },
  get B() { return j; },
  get Cn() { return ir; },
  get Di() { return ne; },
  get Fe() { return Zi; },
  get G() { return F; },
  get Hn() { return Xn; },
  get Ht() { return Bt; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get L() { return G; },
  get Ns() { return Xs; },
  get O() { return O; },
  get Se() { return Ri; },
  get Si() { return Ue; },
  get Sn() { return He; },
  get Sr() { return Jr; },
  get W() { return C; },
  get Xe() { return hi; },
  get Yi() { return ui; },
  get Ze() { return Vt; },
  get _() { return V; },
  get _i() { return ri; },
  get _n() { return ar; },
  get ci() { return be; },
  get cs() { return gs; },
  get dt() { return _; },
  get en() { return pn; },
  get getItemById() { return rt; },
  get getItems() { return ge; },
  get h() { return f; },
  get hi() { return me; },
  get lt() { return dt; },
  get mt() { return $t; },
  get navigateToItem() { return navigateToItem; },
  get oneTabPage() { return oneTabPage; },
  get ot() { return ct; },
  get qt() { return Zt; },
  get rr() { return br; },
  get ss() { return fs; },
  get te() { return ci; },
  get ut() { return at; },
  get x() { return w; },
  get xt() { return gt; },
  get yt() { return At; },
  get zi() { return ei; },
  get zt() { return Qt; },
  setThemeState({ wi: i, Ft: t }) { ve = i; Ut = t; },
});
let D = {};
function Lt() {
  (ot.remove(),
    typeof xt < "u" && xt.remove(),
    typeof Jt < "u" && delete Jt.Le,
    typeof dnd < "u" && dnd.P && (delete dnd.P.Mi, delete dnd.P.ss));
}
document.addEventListener(
  "keydown",
  (i) => {
    le(i) &&
      (Lt(),
      typeof dnd < "u" &&
        dnd.F &&
        dnd.P &&
        ((dnd.P.$l = !0), delete dnd.P.Mi, delete dnd.P.ss, delete dnd.P.Le),
      delete D.currentTarget);
  },
  !0,
);
function Pi({ e: i, Kr: t, ji: e, q: s }) {
  (i.stopPropagation(),
    Lt(),
    delete D.br,
    delete D.mu,
    delete D.currentTarget,
    (D.Xr = !0),
    (D.i = e[0]),
    (D.ji = e),
    (D.Ds = []),
    (D.wu = !s),
    (D.q = s),
    t ? (dnd.setDragImage(t), (D.Mc = 20)) : (D.Mc = D.i.offsetHeight));
  let n = D.i.getBoundingClientRect();
  ((D.Hw = i.clientX - n.left),
    (D.qw = i.clientY - n.top),
    i.dataTransfer && (i.dataTransfer.effectAllowed = "all"),
    e.forEach((r) => {
      D.Ds.push({ i: r, parent: r.parentElement, nextSibling: r.nextSibling });
    }),
    D.wu && e.forEach((r) => r.remove()));
}
function Xe() {
  if (dnd?.P?.Rn) {
    D.br = !0;
    return;
  }
  if (!Array.isArray(D.Ds)) {
    (Lt(), (D = {}));
    return;
  }
  if (D.wu && !D.mu) {
    let i = new Set();
    for (D.Ds.forEach(({ i: t }) => i.add(t)); D.Ds.length; ) {
      let t = D.Ds.findIndex(({ i: s, nextSibling: n }) => !i.has(n)),
        [e] = D.Ds.splice(t, 1);
      if ((i.delete(e.i), e.parent)) {
        let s =
          e.nextSibling?.parentElement === e.parent ? e.nextSibling : null;
        e.parent.insertBefore(e.i, s);
      }
    }
  }
  (Lt(), (D = {}));
}
async function Fi({ e: i, Hr: t, Sd: e, qr: s, Ur: n }) {
  (i.preventDefault(), i.type === "drop" && i.stopPropagation());
  let r = dnd.F ? (dnd.ft?.types ?? []) : ["tab"],
    o = dnd.F ? dnd.ft?.Ae : void 0;
  if (dnd.F && (!o || !r.length)) {
    Lt();
    return;
  }
  let a = t();
  a !== void 0 && (!Number.isFinite(a) || a < 0) && (a = void 0);
  let l = s();
  if (!l) {
    Lt();
    return;
  }
  let u = n();
  if (o) {
    let c = await A.ht(l);
    if (!c) {
      Lt();
      return;
    }
    if (
      ((u = c.groupType ?? u),
      r?.includes("tab") &&
        r.some((m) => ["tabGroup", "window", "folder"].includes(m)))
    )
      throw new Error("Can't mix tabs with groups during drag");
    let d = o.selectionGroupId,
      y = () => {
        d && oneTabPage?.Uw(d)?.reset();
      },
      b = o.itemsMeta;
    {
      const m = async (x) => {
        if (!x) return [];
        let T = await A.ht(x);
        return T ? [T.id, ...(await m(T.parentIds.find(at)))] : [];
      };
      let g = await m(l);
      if (o.itemsMeta.some((x) => l === x.itemId)) {
        Qt(w("cannotMoveItemIntoItself"));
        return;
      }
      if (o.itemsMeta.some((x) => g.includes(x.itemId))) {
        Qt(w("cannotMoveItemAncestorHere"));
        return;
      }
    }
    if (
      (e?.(),
      l === "quickList" ||
        (r.includes("tab") &&
          (b.some((m) => m.sourceParentId === "quickList") || $s(i))))
    )
      if (r.includes("tab") && u === "folder") {
        let m = await Xs({ O: l, N: a });
        await A.eu({ iu: b.map((g) => g.itemId), O: m });
      } else await A.eu({ iu: b.map((m) => m.itemId), N: a, O: l });
    else {
      let m = D.q === "quickAccessCol-quickList",
        g = !!D.q;
      (await Ke({ rt: b, O: l, N: a }), (D.mu = !(m || g)));
    }
    y();
  } else if (i.dataTransfer)
    if (
      ["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
        (c) => Ve(i.dataTransfer.types, c),
      )
    ) {
      let c;
      if (
        Ve(i.dataTransfer.types, "text/x-moz-place") &&
        wr(i.dataTransfer.getData("text/x-moz-place"))
      ) {
        let y = JSON.parse(i.dataTransfer.getData("text/x-moz-place")),
          b = y.uri,
          p = se(b);
        c = [[{ title: y.title || jt(p), kt: p }]];
      } else if (
        ["text/html", "text/plain"].some((y) => Ve(i.dataTransfer.types, y))
      ) {
        let y = ["text/html", "text/plain"].reduce(
          (b, p) =>
            b ??
            (Ve(i.dataTransfer.types, p) ? i.dataTransfer.getData(p) : void 0),
          void 0,
        );
        c = await xi(y);
      } else {
        let y = i.dataTransfer.getData("text/uri-list"),
          b = (await chrome.tabs.query({})).find((m) => m.url === y)?.title,
          p = se(i.dataTransfer.getData("text/uri-list"));
        p && (c = [[{ title: b || jt(p), kt: p }]]);
      }
      if (!Array.isArray(c) || !c.length) return;
      let d = await A.ht(l);
      if (!d) {
        Lt();
        return;
      }
      ((u = d.groupType ?? u), await A.Ma({ Ga: c, Gs: u, O: l, N: a }));
    } else console.log(`Unrecognized dropped content: ${i.dataTransfer.types}`);
  else console.log("Unhandled onDrop - should be unreachable");
}
async function Xs({ O: i, N: t }) {
  let e = new Date().getTime(),
    s = Bt(),
    n = {
      id: s,
      type: "group",
      groupType: "window",
      createDate: e,
      modifyDate: e,
      parentIds: [i],
      childIds: [],
      pinnedCount: 0,
    };
  return (
    await A.In({
      Lo: [n],
      vn: [],
      O: i,
      ...(t !== void 0 && { N: t }),
      An: [s],
    }),
    s
  );
}
function Ve(i, t) {
  return typeof Ai == "function"
    ? Ai(i, t)
    : i
      ? typeof i.includes == "function"
        ? i.includes(t)
        : typeof i.contains == "function"
          ? i.contains(t)
          : typeof i.indexOf == "function"
            ? i.indexOf(t) !== -1
            : Array.from(i).includes(t)
      : !1;
}
let Ao = {},
  Vs = [
    { name: "dragged-group", w: 21, tt: 18, x: 21, y: 12 },
    { name: "dragged-tab", w: 21, tt: 5, x: 21, y: 2 },
    { name: "folder", w: 21, tt: 18, x: 21, y: 12 },
    { name: "multi-dragged-group", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-tab", w: 25, tt: 22, x: 25, y: 7 },
    { name: "multi-dragged-folder", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-item", w: 25, tt: 22, x: 25, y: 11 },
  ];
function Rl() {
  let i = 0;
  Vs.forEach((t) => {
    let [e, s] = [`${t.name}.png`, `${t.name}-dark.png`].map((n) => {
      i -= Math.ceil(t.w * 1.2);
      let r = f({
        style: {
          width: `${t.w}px`,
          height: `${t.tt}px`,
          position: "absolute",
          left: `${i}px`,
        },
        p: F("img", {
          src: `images/${n}`,
          style: { width: `${t.w}px`, height: `${t.tt}px` },
        }),
      }).i;
      return (document.body.appendChild(r), r);
    });
    Ao[t.name] = { light: e, dark: s, x: t.x, y: t.y };
  });
}
const $o = '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">';
function _s(i) {
  let t = `<a href="${cs(i.url)}">${mt(i.title)}</a>`;
  return (vt(i.notes?.text, (e) => (t += `<br/>${e}`)), t);
}
function Nl({ links: i, ge: t }) {
  let e = i.map((r) => Di({ link: r, ge: t })),
    s = e.map((r) => r.Xe).filter((r) => r).join(`
`),
    n = e
      .map((r) => r.Ee)
      .filter((r) => r)
      .join("<br/>");
  return { Xe: s, Ee: n };
}
function Di({ link: i, ge: t }) {
  let e, s;
  return (
    ["urlAndTitle", "richText"].includes(t)
      ? (e = [i.url, ...O(i.title)].join(" | "))
      : t === "titleAndUrl"
        ? (e = [...O(i.title), i.url].join(" | "))
        : t === "url"
          ? (e = i.url)
          : console.log("Unknown linkExportFormat"),
    t === "richText" &&
      vt(
        i.notes?.text,
        (n) =>
          (e += `
${n}`),
      ),
    t === "richText" && (s = _s(i)),
    { Xe: e, Ee: s }
  );
}
function Io({ group: i, level: t = 0, ge: e }) {
  let s = "",
    n = !1;
  return (
    e === "richText" &&
      (vt(
        i.l.label,
        (r) => (
          (s += `${r}
`),
          (n = !0)
        ),
      ),
      vt(
        i.l.notes?.text,
        (r) => (
          (s += `${r}
`),
          (n = !0)
        ),
      )),
    n &&
      (s += `
`),
    (s += i.k.map((r) =>
      r.l.type === "tab"
        ? Di({ link: r.l, ge: e }).Xe
        : `
${Io({ group: r, level: t + 1, ge: e })}
`,
    ).join(`
`)),
    s
  );
}
function vo({ group: i, level: t = 0 }) {
  let e = "",
    s = t ? 14 : 16,
    n = !1;
  return (
    vt(i.l.label, (r) => ((e += Ys(mt(r), s) + "<br/>"), (n = !0))),
    vt(i.l.notes?.text, (r) => ((e += mt(r) + "<br/>"), (n = !0))),
    n && (e += "<br/>"),
    (e += i.k
      .map((r) =>
        r.l.type === "tab"
          ? _s(r.l)
          : `<br/>${vo({ group: r, level: t + 1 })}<br/>`,
      )
      .join("<br/>")),
    e
  );
}
async function Wl({ zw: i, ge: t, h: e }) {
  e ??= new kt();
  let s = await Promise.all(
      i.map((o) => Le({ groupId: o, ge: t, h: e, xu: !1, te: !1 })),
    ),
    n = s.map((o) => o.Xe).filter((o) => o).join(`

`),
    r = s
      .map((o) => o.Ee)
      .filter((o) => o)
      .join("<br/><br/>");
  return { Xe: n, Ee: r };
}
async function Le({ groupId: i, ge: t, h: e, xu: s, te: n }) {
  ((e ??= new kt()), s || (await e.Te({ groupId: i })));
  let r,
    o,
    a = e.v(i),
    l = a.childIds.map((u) => e.v(u));
  if (t === "richText") {
    let u = !1;
    (vt(a.label, (c) => {
      if (
        ((u = !0),
        r || (r = ""),
        (r +=
          c +
          `
`),
        t === "richText")
      ) {
        o || (o = "");
        let d = n ? 14 : 16;
        (G(a) && (d = 18), (o += Ys(mt(c), d) + "<br/>"));
      }
    }),
      vt(a.notes?.text, (c) => {
        ((u = !0),
          r || (r = ""),
          (r +=
            c +
            `
`),
          t === "richText" && (o || (o = ""), (o += mt(c) + "<br/>")));
      }),
      G(a) &&
        u &&
        ((r += `
`),
        (o += "<br/>")));
  }
  for (let u of l)
    if (j(u)) {
      let { Xe: c, Ee: d } = Di({ link: u, ge: t });
      (c &&
        (r
          ? (r += `
`)
          : (r = ""),
        (r += c)),
        d && (o ? (o += "<br/>") : (o = ""), (o += d)));
    } else {
      let { Xe: c, Ee: d } = await Le({
        groupId: u.id,
        ge: t,
        h: e,
        xu: !0,
        te: zt(a),
      });
      (c &&
        (r
          ? (r += `
`)
          : (r = ""),
        (r +=
          c +
          `
`)),
        d && (o ? (o += "<br/><br/>") : (o = ""), (o += d + "<br/>")));
    }
  return { Xe: r, Ee: o };
}
function Oo(i, t) {
  return `<span${t ? " " + t : ""}>${i}</span>`;
}
function Ys(i, t) {
  return Oo(i, `style="font-size: ${t}pt;"`);
}
function Ei({ Er: i, Fr: t, jr: e, Br: s, Cr: n }) {
  return !(
    (i.includes("folder") && Ht(t, ["window", "tabGroup"])) ||
    (i.includes("trash") && e === "quickList") ||
    (i.includes("locked") && i.includes("tab") && e !== "quickList") ||
    (i.includes("locked") &&
      Xt(["window", "tabGroup"], i) &&
      Ht(t, ["window", "tabGroup"])) ||
    (s &&
      !(
        n === "treeItem" &&
        e === "trash" &&
        !(i.includes("tab") && i.includes("isTreeItemInQuickListRoot"))
      ))
  );
}
let ft = !1,
  tn = 0;
const en = (() => {
  let t,
    e,
    s,
    n,
    r,
    o,
    a,
    l = 0,
    u = 0,
    c,
    d,
    y,
    b,
    p,
    m,
    g,
    x,
    T,
    h = !1,
    k = null,
    $ = !1,
    L = null,
    M = null,
    H = null,
    Q = null,
    lt = 0,
    U = 0,
    z = 0,
    Z = null,
    Tt = null,
    q = null;
  (document.addEventListener(
    "pointerdown",
    (I) => {
      ft &&
        I.pointerId !== o &&
        (n?.({
          ts: t,
          es: e,
          dx: 0,
          dy: 0,
          qs: c,
          Us: d,
          pageX: I.pageX,
          pageY: I.pageY,
        }),
        Kt(I));
    },
    !0,
  ),
    document.addEventListener(
      "keydown",
      (I) => {
        !le(I) ||
          (!ft && !$) ||
          (I.cancelable && I.preventDefault(),
          I.stopPropagation(),
          Kt(I, { If: ft }));
      },
      !0,
    ),
    document.addEventListener(
      "pointercancel",
      (I) => {
        (ft || $) && I.pointerId === o && Kt(I);
      },
      !0,
    ));
  function et({
    event: I,
    element: E,
    Il: R,
    wh: N,
    Al: it,
    xh: tt,
    mh: nt = 0,
    ph: Pt = null,
  }) {
    ft ||
      $ ||
      ((t = E),
      (e = R),
      (s = N),
      (n = it),
      (r = tt),
      (o = I.pointerId),
      (a = I.pointerType || "mouse"),
      (y = 0),
      (b = 0),
      (c = I.pageX),
      (d = I.pageY),
      (l = nt),
      (u = nt * nt),
      (L = Rt(Pt)),
      (M = L?.enabled ? Nt(E) : null),
      (H = null),
      ue(),
      document.addEventListener("pointermove", wt, !1),
      document.addEventListener("pointerup", yt, !1),
      I.preventDefault(),
      ($ = !0));
  }
  function wt(I) {
    I.isTrusted !== !1 &&
      ((!ft && !$) ||
        I.pointerId !== o ||
        ((p = I.pageX),
        (m = I.pageY),
        (g = I.clientY),
        (x = I.clientX),
        (T = I.target),
        (h = !0),
        k === null && (k = requestAnimationFrame(Gt)),
        ft && I.cancelable && I.preventDefault()));
  }
  function Gt() {
    ((k = null), h && ((h = !1), X(p, m, g, x, T)));
  }
  function X(I, E, R, N, it) {
    if (!ft && !$) return;
    let tt, nt;
    ((tt = I - c), (nt = E - d));
    const Pt = tt * tt + nt * nt >= u;
    if (
      (!ft &&
        $ &&
        Pt &&
        ((ft = !0),
        ($ = !1),
        he(),
        document.body.classList.add("dnd-no-select"),
        t && ((Tt = t.style.pointerEvents), (t.style.pointerEvents = "none")),
        s?.({ ts: t, es: e, qs: c, Us: d }),
        P(R, N)),
      !ft)
    )
      return;
    let ce = !1;
    ((y !== tt || b !== nt) && (ce = !0),
      (y = tt),
      (b = nt),
      (U = R),
      (z = N),
      ce &&
        n?.({ ts: t, es: e, dx: tt, dy: nt, qs: c, Us: d, pageX: I, pageY: E }),
      Et(it, N, R),
      P(R, N));
  }
  function yt(I) {
    I.isTrusted !== !1 &&
      ((I?.pointerId !== void 0 && o !== void 0 && I.pointerId !== o) ||
        (!ft && !$) ||
        (Fe(I), Kt(I)));
  }
  function Kt(I, { If: E = !1 } = {}) {
    if (!ft && !$) return;
    const R = ft;
    (R && h && (X(p, m, g, x, T), (h = !1)),
      k !== null && (cancelAnimationFrame(k), (k = null)),
      v(),
      R &&
        (E ? Pe() : q || document.body.classList.remove("dnd-no-select"),
        t && Tt !== null && (t.style.pointerEvents = Tt),
        (Tt = null)),
      document.removeEventListener("pointermove", wt, !1),
      document.removeEventListener("pointerup", yt, !1),
      (ft = !1),
      ($ = !1),
      R && (tn = +new Date()),
      (o = void 0),
      (a = void 0),
      (T = null),
      R && r?.({ ts: t, es: e, Ww: y, Nw: b, qs: c, Us: d }));
  }
  function he() {
    q &&
      (document.removeEventListener("pointerup", q, !0),
      document.removeEventListener("pointercancel", q, !0),
      document.removeEventListener("mouseup", q, !0),
      (q = null));
  }
  function Pe() {
    (document.body.classList.add("dnd-no-select"),
      !q &&
        ((q = () => {
          (he(), document.body.classList.remove("dnd-no-select"));
        }),
        document.addEventListener("pointerup", q, !0),
        document.addEventListener("pointercancel", q, !0),
        document.addEventListener("mouseup", q, !0)));
  }
  function Et(I, E, R) {
    if (!ft) return;
    const N = a || "mouse";
    if (
      !(N !== "mouse" || (N === "mouse" && !1)) ||
      !Number.isFinite(E) ||
      !Number.isFinite(R) ||
      E < 0 ||
      R < 0 ||
      E > window.innerWidth ||
      R > window.innerHeight ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const tt = document.elementsFromPoint(E, R);
    if (!tt?.length) return;
    const nt = tt.find((Pt) => !pt(Pt)) || tt[0];
    !nt ||
      !(nt instanceof Element) ||
      (I instanceof Element && I === nt) ||
      nt.dispatchEvent(
        new PointerEvent("pointermove", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: E,
          clientY: R,
          button: -1,
          buttons: 1,
        }),
      );
  }
  function Fe(I) {
    if (!ft) return;
    const E = a || "mouse";
    if (
      !(E !== "mouse" || (E === "mouse" && !1)) ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const N = Number.isFinite(I?.clientX) ? I.clientX : z,
      it = Number.isFinite(I?.clientY) ? I.clientY : U;
    if (
      !Number.isFinite(N) ||
      !Number.isFinite(it) ||
      N < 0 ||
      it < 0 ||
      N > window.innerWidth ||
      it > window.innerHeight
    )
      return;
    const tt = document.elementsFromPoint(N, it);
    if (!tt?.length) return;
    const nt = tt.find((Pt) => !pt(Pt)) || tt[0];
    !nt ||
      !(nt instanceof Element) ||
      (I?.target instanceof Element && I.target === nt) ||
      nt.dispatchEvent(
        new PointerEvent("pointerup", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: N,
          clientY: it,
          button: 0,
          buttons: 0,
        }),
      );
  }
  function Rt(I) {
    if ((I === !0 && (I = { enabled: !0 }), !I || I.enabled !== !0))
      return null;
    const E = Number.isFinite(I.Da) ? I.Da : 48,
      R = Number.isFinite(I.Fo) ? I.Fo : 80,
      N = Number.isFinite(I.Pa) ? I.Pa : 640,
      it = I.jo || "quadratic",
      tt = I.target || "hover";
    return { enabled: !0, Da: E, Fo: R, Pa: N, jo: it, target: tt };
  }
  function Nt(I) {
    let E = I;
    for (; E && E !== document.body && E !== document.documentElement; ) {
      const R = window.getComputedStyle(E),
        N = R.overflowY,
        it = R.overflow;
      if (
        N === "auto" ||
        N === "scroll" ||
        N === "overlay" ||
        it === "auto" ||
        it === "scroll"
      )
        return E;
      E = E.parentElement;
    }
    return window;
  }
  function ue() {
    (v(), (U = 0), (z = 0), (Z = null));
  }
  function v() {
    (Q !== null && (cancelAnimationFrame(Q), (Q = null)), (lt = 0));
  }
  function P(I, E) {
    !ft ||
      !L ||
      ((U = I),
      (z = E),
      (H = st(E, I)),
      H &&
        Q === null &&
        ((lt = performance.now()), (Q = requestAnimationFrame(B))));
  }
  function B(I) {
    if (((Q = null), !ft || !L)) return;
    const E = Math.max(0, (I - lt) / 1e3);
    if (((lt = I), (H = st(z, U)), !H)) return;
    const R = W(U);
    if (R !== 0) {
      const N = R * E;
      (H === window ? window.scrollBy(0, N) : (H.scrollTop += N),
        (Q = requestAnimationFrame(B)));
    }
  }
  function W(I) {
    const E = L;
    if (!E) return 0;
    let R = 0,
      N = window.innerHeight,
      it = window.scrollY,
      tt = document.documentElement.scrollHeight - window.innerHeight;
    if (H !== window) {
      const Ni = H.getBoundingClientRect();
      ((R = Ni.top),
        (N = Ni.bottom),
        (it = H.scrollTop),
        (tt = H.scrollHeight - H.clientHeight));
    }
    const nt = Math.min(N, Math.max(R, I)),
      Pt = Math.max(0, nt - R),
      ce = Math.max(0, N - nt),
      _e = Math.max(1, E.Da);
    let fe = 0,
      Ye = 0;
    if (Pt < _e) ((fe = -1), (Ye = Pt));
    else if (ce < _e) ((fe = 1), (Ye = ce));
    else return 0;
    if ((fe < 0 && it <= 0) || (fe > 0 && it >= tt)) return 0;
    let te = 1 - Math.min(1, Ye / _e);
    return (
      E.jo === "quadratic"
        ? (te = te * te)
        : typeof E.jo == "function" && (te = E.jo(te)),
      (E.Fo + (E.Pa - E.Fo) * te) * fe
    );
  }
  function st(I, E) {
    if (L?.target === "origin")
      return M && M !== window && !M.isConnected ? null : M;
    if (I < 0 || E < 0 || I > window.innerWidth || E > window.innerHeight)
      return St() || M || window;
    const R = document.elementsFromPoint(I, E);
    for (const N of R) {
      if (pt(N)) continue;
      const it = Nt(N);
      if (it) {
        const tt = St();
        return it === window && tt ? tt : ((Z = it), it);
      }
    }
    return St() || M || window;
  }
  function pt(I) {
    return I ? !!(t && (I === t || t.contains(I))) : !1;
  }
  function St() {
    return (Z && Z !== window && !Z.isConnected && (Z = null), Z);
  }
  return et;
})();
function Mo(i, t) {
  return f({
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
      Rw: f({
        style: {
          display: "inline-block",
          marginBlock: "9px 10px",
          marginInline: "34px 0px",
          height: 86 / 2 + "px",
          minWidth: 310 / 2 + "px",
          width: 310 / 2 + "px",
        },
        children: {
          vf: C(
            {
              width: 310 / 2 + "px",
              height: 86 / 2 + "px",
              style: { cursor: "pointer" },
              St: async () => await chrome.tabs.create({ url: De, active: !0 }),
            },
            (e) =>
              `images/top-left-logo-sml-${e ? "light" : "dark"}${K() ? "" : "-rtl"}.png`,
          ),
        },
      }),
      title: f({
        style: {
          fontSize: "22px",
          fontWeight: 300,
          marginInlineStart: "20px",
          borderInlineStart: "1px solid var(--border-color)",
          paddingInlineStart: "26px",
        },
        textContent: i,
      }),
      ...(t && { Zw: t }),
    },
  });
}
function sn(i, t, e) {
  let s = (r) => {
      ((i = !i),
        (n.u.Af.style.display = i ? "inline-block" : "none"),
        (n.u.$f.style.display = i ? "none" : "inline-block"),
        (n.u.content.i.style.display = i ? "block" : "none"));
    },
    n = f({
      style: { display: "flex", gap: "10px" },
      children: {
        Qw: f({
          onclick: s,
          style: { fontSize: "16px", cursor: "pointer" },
          children: {
            Af: C(
              {
                width: "14px",
                height: "14px",
                style: {
                  position: "relative",
                  top: "-1px",
                  display: i ? "inline-block" : "none",
                  verticalAlign: "middle",
                },
              },
              (r) => `images/twistie-open${r ? "" : "-dark"}.png`,
            ),
            $f: C(
              {
                width: "14px",
                height: "14px",
                style: {
                  position: "relative",
                  top: "-1px",
                  display: i ? "none" : "inline-block",
                  verticalAlign: "middle",
                  ...(!K() && { transform: "rotate(180deg)" }),
                },
              },
              (r) => `images/twistie-closed${r ? "" : "-dark"}.png`,
            ),
          },
        }),
        body: f({
          children: {
            label: f({
              style: { fontSize: "16px", cursor: "pointer" },
              textContent: t,
              onclick: s,
            }),
            content: f({
              style: { paddingTop: "10px", display: i ? "block" : "none" },
              p: e,
            }),
          },
        }),
      },
    });
  return n;
}
let nn, rn, Bi;
async function Cl() {
  Bi = (await chrome.permissions.getAll()).permissions.includes("favicon");
  try {
    Bi && (nn = await ao(on("http://example.com")));
  } catch (i) {
    console.log(i);
  }
  rn = await oo("alpha");
}
function Lo(i) {
  return (
    "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" +
    i +
    "&size=32"
  );
}
function on(i) {
  const t = new URL(chrome.runtime.getURL("/_favicon/"));
  return (
    t.searchParams.set("pageUrl", i),
    t.searchParams.set("size", "32"),
    t.toString()
  );
}
let Hi = 0,
  ji = 0;
async function an(i, t) {
  let e = +new Date();
  e - Hi < 500
    ? ((Hi = e), ji++, ji >= 8 ? await Zt(t) : await Zt(i))
    : ((Hi = e), (ji = 0), await Zt(i));
}
function ln(i, t = "move") {
  let e = ro(i),
    s = document.createElement("div");
  if (
    ((s.style.flex = "0 0 auto"),
    (s.style.display = "inline-block"),
    (s.style.width = "16px"),
    (s.style.height = "16px"),
    (s.style.marginInlineStart = "5px"),
    (s.style.cursor = t),
    rn && iconGrid.Ko.has(e))
  ) {
    let n = iconGrid.Ko.get(e),
      r = 16 * (n % iconGrid.hl),
      o = 16 * Math.floor(n / iconGrid.hl);
    ((s.style.backgroundSize =
      iconGrid.imageWidth / 2 + "px " + iconGrid.imageHeight / 2 + "px"),
      (s.style.backgroundRepeat = "none;"),
      (s.style.backgroundPositionX = -1 * r + "px"),
      (s.style.backgroundPositionY = -1 * o + "px"),
      (async () => (
        await $e(),
        (s.style.backgroundImage = "url(images/iconGrid.webp)")
      ))());
  } else {
    let n = mn(i),
      r = Lo(n),
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
        (Bi
          ? ((a.onload = () => {
              a.src.endsWith(o) ||
                setTimeout(() => {
                  nn === Us(a) &&
                    ((a.onload = null),
                    (a.onerror = () => (a.src = o)),
                    (a.src = r));
                }, 10);
            }),
            (async () => (
              document.readyState !== "complete" && (await $e()),
              (a.onerror = () => (a.src = o)),
              await an(10, 100),
              (a.src = on(i))
            ))())
          : (async () => (
              document.readyState !== "complete" && (await $e()),
              (a.onerror = () => (a.src = o)),
              await an(10, 100),
              (a.src = r)
            ))()));
  }
  return s;
}
async function qi({
  view: i,
  Ri: t,
  ic: e,
  Vt: s,
  me: n,
  lf: r,
  cf: o,
  nc: a,
  Zr: l,
  onChange: u,
  xs: c,
  sc: d,
  vt: y,
  H: b,
}) {
  let p = t?.G && oi(t.G.l),
    m = t && oi(t.L.l),
    g = t?.q === "treeBrowser",
    x = (t ?? i).l,
    T = x.id,
    h = (t ?? i).index,
    k = i?.Tt,
    $ = i?.te;
  i || ($ = t?.G && $t(t.G.l) && ct(t.l));
  let L = i?.k?.some((v) => v instanceof Ot);
  i || (L = t.S?.some((v) => ct(v.l)));
  let M = t?.G && [G].some((v) => v(t.G.l)),
    H = t?.G && [$t, G].some((v) => v(t.G.l)),
    Q = G(x) && (t || k),
    lt = (G(x) && (t || k)) || $t(x),
    U = i?.J,
    z = t?.L.l.id === "trash",
    Z = t?.l.id === "trash",
    Tt = i?.wt?.J,
    q = (t?.G || i?.wt)?.l;
  !q && !j(x) && (q = await A.ht(x.parentIds.find(at)));
  let et = q && q.childIds.indexOf(x.id) < (q.pinnedCount ?? 0),
    wt = 0,
    Gt = i && i instanceof Y && !i.wt;
  (t?.G &&
    (j(x)
      ? (wt = t.G.S.filter((v) => j(v.l) && x.id === v.l?.id).findIndex(
          (v) => v === t,
        ))
      : (wt = void 0)),
    i?.wt &&
      (j(x)
        ? (wt = i.wt.k
            .filter((v) => v instanceof Y && x.id === v.l?.id)
            .findIndex((v) => v === i))
        : (wt = void 0)),
    j(x) &&
      wt &&
      q &&
      (et =
        (q.childIds.map((v, P) => [v, P]).filter(([v, P]) => v === x.id)[
          wt
        ]?.[1] ?? 0) < (q.pinnedCount ?? 0)));
  let X = t?.q === "quickAccessCol-tasks",
    yt = X && je(x),
    Kt = i?.ut || x.locked || t?.G?.l.locked,
    he =
      !j(x) &&
      !(t && !H) &&
      !p &&
      !t?.B &&
      !t?.Ot &&
      !(i && !window.Sf?.an.uo.As) &&
      !k,
    Pe =
      !j(x) &&
      !$ &&
      !(i && !window.Sf?.an.uo.As) &&
      !(t && !M) &&
      !V(x) &&
      !k &&
      !p;
  ((s = s && !g && !G(x) && !z), (e = e && !g && zt(x) && !L && !z));
  let Et = ({
      icon: v,
      label: P,
      name: B,
      action: W,
      D: st,
      ee: pt,
      Zt: St,
      ni: I,
    }) =>
      St
        ? xe({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          })
        : dt.bi({
            icon: v,
            label: P,
            name: B,
            D: st,
            ee: pt,
            ni: I,
            action: async ({ e: E, o: R }) => {
              (await W({ Of: B, e: E, i: R.i })) || l();
            },
          }),
    Fe = ({ parentId: v, As: P }) => {
      let B = P ? "direct" : "recurse";
      return async ({ o: W, e: st }) => (
        d(
          f({
            style: {
              fontSize: "12px",
              fontWeight: 400,
              margin: "8px",
              lineHeight: "1.5em",
            },
            children: {
              header: f({
                textContent: w("sortByColon"),
                style: {
                  marginInline: "10px 15px",
                  marginBlock: "12px 6px",
                  fontSize: "12px",
                  fontWeight: 600,
                },
              }),
              body: f({
                children: [
                  {
                    ki: [{ field: "title", order: "lexical" }],
                    label: w("title"),
                  },
                  ...O(!P, {
                    ki: [
                      { field: "rootDomain", order: "lexical" },
                      { field: "title", order: "lexical" },
                    ],
                    label: w("website"),
                  }),
                  {
                    ki: [
                      { field: "rating", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: w("starred"),
                  },
                  {
                    ki: [
                      { field: "modified", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: w("recentlyModified"),
                  },
                  {
                    ki: [
                      { field: "accessed", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: w("recentlyAccessed"),
                  },
                  {
                    ki: [
                      { field: "created", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: w("recentlyCreated"),
                  },
                  ...O(!P, {
                    ki: [{ field: "index", order: "desc" }],
                    label: w("reverse"),
                  }),
                ].map(({ ki: pt, label: St }, I) =>
                  Et({
                    name: `${I}`,
                    label: St,
                    icon: {
                      I: "sort",
                      ...(pt[0].field === "index" && { Ed: !0 }),
                    },
                    action: async () =>
                      await A.sort({ ki: pt, parentId: v, Jw: B }),
                  }),
                ),
              }),
            },
          }).i,
          st,
        ),
        !0
      );
    },
    Rt = {
      ...ci(
        [
          s && {
            ...Object.fromEntries(
              [
                ...Go.map(({ name: v, label: P }, B) => ({
                  name: v,
                  label: P,
                  ...(B === 0 && { icon: { I: "open", ee: !K() } }),
                  action: async ({ Of: W, e: st }) => {
                    if (
                      (Je(st) && (st.preventDefault(), st.stopPropagation()),
                      !b &&
                        !m &&
                        !Kt &&
                        !X &&
                        !i?.C &&
                        !(await A._e("autoActionOnOpenOptionChosen")))
                    )
                      try {
                        await displayAutoActionOnOpenOptionModal();
                      } catch {
                        return;
                      }
                    await Rs({
                      id: T,
                      zr: W,
                      Kw: W === "newWindow",
                      Wr: !0,
                      Nr: (await chrome.windows.getCurrent()).id,
                      Yl: Je(st),
                      Rr: !(Kt || i?.C || Ie(st)),
                      Yh: !ae(st),
                      ...(j(x) &&
                        m &&
                        !p && {
                          bu: t.G.l.id,
                          tabIndex: t.G.S.findIndex((pt) => pt === t),
                          yu: ds(
                            t.G.S.filter((pt) => pt.l.id === t.l.id).findIndex(
                              (pt) => pt === t,
                            ),
                          ),
                        }),
                    });
                  },
                })),
              ].map((v) => [v.name, Et(v)]),
            ),
          },
          n && {
            ...Object.fromEntries(
              [
                ...O(
                  (Gt && y) ||
                    (!U && y && x.parentIds.includes("quickList")) ||
                    (t?.q === "quickAccessCol-quickList" && p),
                  {
                    name: "removeFromQuickList",
                    label: w("removeFromQuickList"),
                    icon: {
                      I: "remove-from-quicklist",
                      dimension: "14px",
                      top: "1px",
                    },
                    D: w("removeFromQuickListMenuItemHelp"),
                    action: async () => await A.Xw([T]),
                  },
                ),
                ...O(!U && !g && !y && _(x) && !X && !b, {
                  name: "shareAsWebPage",
                  label: w("shareAsAWebPage"),
                  icon: { I: "share-action", dimension: "12px", left: "0px" },
                  D: w("shareAsAWebPageMenuItemHelp"),
                  action: async () => showSharingModal(x.id),
                }),
                ...O(!U && !g && G(x) && !X, {
                  name: "saveFolderTabsAsHtmlFile",
                  label: w("saveTabsAsHtmlFile"),
                  D: w("saveTabsAsHtmlFileMenuItemHelp"),
                  action: async () => await No({ La: x.id }),
                }),
                ...O(!U && !V(x) && G(x), {
                  name: "storeAllOpenWindowsHere",
                  label: w("storeAllOpenWindowsHere"),
                  Kt: { I: "close", dimension: "13px", left: "0px", ee: !K() },
                  D: w("storeAllOpenWindowsHereMenuItemHelp"),
                  action: async () => await A.Kh(x.id),
                }),
                ...O(!U && !g && zt(x) && !X, {
                  name: "copyToClipboard",
                  label: w("copyToClipboard"),
                  icon: { I: "copy-to-clipboard", left: "0px" },
                  D: w("copyToClipboardMenuItemHelp"),
                  action: async () => {
                    let v = async () => {
                      let { Xe: P, Ee: B } = await Le({
                        groupId: i?.l.id ?? t.l.id,
                        ge: a,
                      });
                      return {
                        Mf: new Blob([P], { type: "text/plain" }),
                        ...(B && {
                          Gf: new Blob([$o + B], { type: "text/html" }),
                        }),
                      };
                    };
                    await uo({
                      kf: async () => (await v()).Mf,
                      ...(a === "richText" && {
                        Tf: async () => (await v()).Gf,
                      }),
                    });
                  },
                }),
                ...O(!V(x) && !g && !j(x), { name: "horizDivider1", Zt: !0 }),
                ...O(!V(x), {
                  name: "rename",
                  label: w("renameOrAddNote"),
                  Kt: { I: "caret", dimension: "12px", left: "0px" },
                  action: async () => {
                    i
                      ? i instanceof Y
                        ? (i._c(), i.Oo(), i.Je.Rs(!0))
                        : i.on.Sl()
                      : t?.du();
                  },
                }),
                ...O(zt(x) && !X && !g && !U, {
                  name: "lock",
                  label: x.locked ? w("unlock") : w("lock"),
                  icon: {
                    I: x.locked ? "unlock" : "lock-action",
                    dimension: "14px",
                    left: "0px",
                    top: "1px",
                  },
                  D: w("lockMenuItemHelp"),
                  action: async () => await A.Fi(x.id, { locked: !x.locked }),
                }),
                ...O(!V(x) && !x.rating && !g, {
                  name: "star",
                  label: w("star"),
                  icon: {
                    I: "star2-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: w("starMenuItemHelp"),
                  action: async () => qt.call(i ?? t, { rating: 5 }),
                }),
                ...O(!V(x) && x.rating && !g, {
                  name: "removeStar",
                  label: w("removeStar"),
                  icon: {
                    I: "un-star2",
                    left: "0px",
                    top: "0px",
                    dimension: "17px",
                  },
                  action: async () => qt.call(i ?? t, { rating: 0 }),
                }),
                ...O(!V(x) && x.task && !x.done && !g, {
                  name: "markAsDoneTask",
                  label: w("markAsDoneTask"),
                  icon: {
                    I: "task-ticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: w("markAsDoneTaskMenuItemHelp"),
                  action: async () => qt.call(i ?? t, { task: 1, done: 1 }),
                }),
                ...O(!V(x) && x.task && !g, {
                  name: "unmarkAsTask",
                  label: w("unMarkAsTask"),
                  icon: {
                    I: "un-task",
                    left: "0px",
                    top: "-2px",
                    dimension: "18px",
                  },
                  action: async () => qt.call(i ?? t, { task: 0, done: 0 }),
                }),
                ...O(!V(x) && (!x.task || x.done) && !g, {
                  name: "markAsPendingTask",
                  label: w("markAsPendingTask"),
                  icon: {
                    I: "task-unticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: w("markAsPendingTaskMenuItemHelp"),
                  action: async () => qt.call(i ?? t, { task: 1, done: 0 }),
                }),
                ...O(!V(x) && x.archived && !g, {
                  name: "un-archive",
                  label: w("unmarkAsArchived"),
                  Kt: {
                    I: "un-archive",
                    dimension: "18px",
                    left: "0px",
                    top: "-1px",
                  },
                  D: w("markAsArchivedMenuItemHelp"),
                  action: async () => qt.call(i ?? t, { archived: 0 }),
                }),
                ...O(!V(x) && !x.archived && !g, {
                  name: "archive",
                  label: w("markAsArchived"),
                  Kt: {
                    I: "archive",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: w("markAsArchivedMenuItemHelp"),
                  action: async () => qt.call(i ?? t, { archived: 1 }),
                }),
                ...O(
                  !Tt &&
                    !i?.Tt &&
                    !U &&
                    !y &&
                    !(V(x) || m || (t && !M) || X || g || Gt),
                  {
                    name: "pin",
                    label: et
                      ? w("unpin")
                      : j(x)
                        ? w("openAsPinnedTab")
                        : w("pinToTopOfFolder"),
                    Kt: {
                      I: `${et ? "un-" : ""}pin-action`,
                      dimension: `${et ? 15 : 13}px`,
                      top: "1px",
                    },
                    ...(!et && {
                      D: j(x)
                        ? w("openAsPinnedTabMenuItemHelp")
                        : w("pinToTopOfFolderMenuItemHelp"),
                    }),
                    action: async () => {
                      let v;
                      (j(x) ? (v = q.id) : (v = x.parentIds.find(at)),
                        await A.Ir({
                          itemId: x.id,
                          parentId: v,
                          zt: wt,
                          value: !et,
                        }));
                    },
                  },
                ),
                ...O(!V(x) && !j(x), { name: "horizDivider2", Zt: !0 }),
                ...O(!U && !g && !y && _(x) && !X, {
                  name: "importLinks",
                  label: w("importLinksHere"),
                  Kt: { I: "import", dimension: "14px", left: "1px", ee: !K() },
                  D: w("importLinksHereMenuItemHelp"),
                  action: async () =>
                    await hn({
                      O: T,
                      Gs: x.groupType,
                      gu: async ({ itemId: v, Zi: P }) => {
                        k &&
                          G(i.l) &&
                          (await navigateToItem({ itemId: v, Zi: P }));
                      },
                    }),
                }),
                ...O(!U && !Pe && G(x) && !(i && !k) && !X, {
                  name: "createFolderWithin",
                  label: w("createFolderWithin"),
                  D: w("createFolderWithinMenuItemHelp"),
                  icon: {
                    I: "add-folder",
                    dimension: "15px",
                    top: "1px",
                    left: "0px",
                  },
                  action: async () => {
                    let v = await Ae({ we: "folder", parentId: x.id, Ri: t });
                    k && (await navigateToItem({ itemId: x.id, Zi: v }));
                  },
                }),
                ...O(!U && Pe && !X, {
                  name: "createFolder",
                  label: w(
                    Q
                      ? "createFolderAboveWithinBelow"
                      : "createFolderAboveBelow",
                  ),
                  icon: { I: "add-folder", dimension: "16px", left: "0px" },
                  D: w("createFolderWithinMenuItemHelp"),
                  action: async ({ o: v, e: P }) => (
                    d(
                      f({
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
                              label: w("createFolderAbove"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let B = T,
                                  W = x.parentIds.find(at),
                                  st = await rt(W);
                                await Ae({
                                  we: "folder",
                                  parentId: W,
                                  Ri: t,
                                  N: st.childIds.indexOf(B),
                                });
                              },
                            },
                            ...O(Q, {
                              name: "within",
                              label: w("createFolderWithin"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                await Ae({ we: "folder", parentId: T, Ri: t });
                              },
                            }),
                            {
                              name: "below",
                              label: w("createFolderBelow"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let B = T,
                                  W = x.parentIds.find(at),
                                  st = await rt(W);
                                await Ae({
                                  we: "folder",
                                  parentId: W,
                                  Ri: t,
                                  N: st.childIds.indexOf(B) + 1,
                                });
                              },
                            },
                          ].map((B) => [B.name, Et(B)]),
                        ),
                      }).i,
                      P,
                    ),
                    !0
                  ),
                }),
                ...O(
                  !U &&
                    !X &&
                    !(i && G(x) && !k) &&
                    !he &&
                    !t?.B &&
                    !t?.Ot &&
                    !y &&
                    (G(x) || $t(x)),
                  {
                    name: "within",
                    label: w("createGroupWithin"),
                    icon: {
                      I: "add-group",
                      dimension: "14px",
                      top: "2px",
                      left: "0px",
                    },
                    D: w("createGroupMenuItemHelp"),
                    action: async () => {
                      if (t && o) await Qt(w("createNewGroupTip"));
                      else {
                        let v = await Ae({
                          we: $t(await rt(T)) ? "tabGroup" : "window",
                          parentId: T,
                          Ri: t,
                        });
                        k && (await navigateToItem({ itemId: x.id, Zi: v }));
                      }
                    },
                  },
                ),
                ...O(!U && he && !X, {
                  name: "createGroup",
                  label: w(
                    lt
                      ? "createGroupAboveWithinBelow"
                      : "createGroupAboveBelow",
                  ),
                  icon: {
                    I: "add-group",
                    dimension: "14px",
                    top: "2px",
                    left: "0px",
                  },
                  D: w("createGroupMenuItemHelp"),
                  action: async ({ o: v, e: P }) => (
                    o
                      ? await Qt(w("createNewGroupTip"))
                      : d(
                          f({
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
                                  label: w("createGroupAbove"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let B = T,
                                      W = x.parentIds.find(at),
                                      st = await rt(W);
                                    await A.Sa({
                                      id: Bt(),
                                      parentId: W,
                                      we: x.groupType,
                                      N: st.childIds.indexOf(B),
                                    });
                                  },
                                },
                                ...O(lt, {
                                  name: "within",
                                  label: w("createGroupWithin"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () =>
                                    await A.Sa({
                                      id: Bt(),
                                      parentId: T,
                                      we: "tabGroup",
                                    }),
                                }),
                                {
                                  name: "below",
                                  label: w("createGroupBelow"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let B = T,
                                      W = x.parentIds.find(at),
                                      st = await rt(W);
                                    await A.Sa({
                                      id: Bt(),
                                      parentId: W,
                                      we: x.groupType,
                                      N: st.childIds.indexOf(B) + 1,
                                    });
                                  },
                                },
                              ].map((B) => [B.name, Et(B)]),
                            ),
                          }).i,
                          P,
                        ),
                    !0
                  ),
                }),
                ...O(
                  !U &&
                    !y &&
                    G(x) &&
                    (["navCol-root", "quickAccessCol-quickList"].includes(
                      t?.q,
                    ) ||
                      i),
                  {
                    name: "searchHere",
                    label: w("searchHere"),
                    Kt: {
                      I: "search-action",
                      dimension: "12px",
                      top: "0px",
                      left: "0px",
                      ee: !K(),
                    },
                    action: async () => {
                      await oneTabPage.Hd({ query: "", Xu: x.id });
                    },
                  },
                ),
                ...O(!U && $ && !y && !g && !X, {
                  name: "mergeIntoParent",
                  label: w("mergeIntoParent"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "1px" },
                  action: async () => {
                    let v = await rt(T);
                    await A.Df({ Pf: v, Lf: v.parentIds.find(at), N: h });
                  },
                }),
                ...O(!U && L && !g && !G(x) && !y && !X, {
                  name: "mergeInnerGroups",
                  label: w("mergeWithInnerGroups"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "2px" },
                  action: async () => {
                    let v = await ge(x.childIds);
                    for (let P = v.length - 1; P >= 0; P--) {
                      let B = v[P];
                      _(B) && (await A.Df({ Pf: B, Lf: x.id, N: P }));
                    }
                  },
                }),
                ...O(!U && !g && G(x) && !y && !X, {
                  name: "sortDirect",
                  label: w("sortGroups"),
                  Kt: { I: "sort", dimension: "14px", ee: !K() },
                  action: Fe({ parentId: T, As: !0 }),
                }),
                ...O(!U && i && zt(x) && !X && !y, {
                  name: "sortRecursive",
                  label: w("sort"),
                  Kt: { I: "sort", dimension: "14px", ee: !K() },
                  action: Fe({ parentId: T, As: !1 }),
                }),
                ...O(!U && !y && !g && _(x) && !X, {
                  name: "removeDuplicates",
                  label: w("removeDuplicates"),
                  Kt: { I: "remove-duplicates", dimension: "14px", ee: !K() },
                  D: w("removeDuplicatesMenuItemHelp"),
                  action: async ({ e: v }) => {
                    let { Yw: P, _w: B, Vw: W } = await A.tx(T),
                      st = !(P.length || B.length || W.length);
                    return (
                      d(
                        f({
                          style: {
                            fontSize: "12px",
                            fontWeight: 400,
                            margin: "8px",
                            lineHeight: "1.5em",
                          },
                          children: {
                            body: f({
                              children: [
                                ...[
                                  ...O(P.length, {
                                    mode: "hereRetainNewest",
                                    label: Ft(
                                      "removeDuplicateTabsHere",
                                      P.length,
                                    ),
                                    D: w("recentDuplicateRetainedHelp"),
                                    Ea: P,
                                  }),
                                  ...O(B.length, {
                                    mode: "hereIfElsewhere",
                                    label: Ft(
                                      "removeTabsHereAlsoElsewhere",
                                      B.length,
                                    ),
                                    Ea: B,
                                  }),
                                  ...O(W.length, {
                                    mode: "elsewhereIfHere",
                                    label: Ft(
                                      "removeTabsElsewhereAlsoHere",
                                      W.length,
                                    ),
                                    Ea: W,
                                  }),
                                ].map(({ mode: pt, label: St, Ea: I, D: E }) =>
                                  Et({
                                    name: pt,
                                    label: St,
                                    D: E,
                                    Kt: {
                                      I: "remove-duplicates",
                                      dimension: "14px",
                                      top: "2px",
                                    },
                                    action: async () => {
                                      let R = I.map((N) =>
                                        gt({
                                          itemId: N.id,
                                          Fe: N.parentId,
                                          zt: N.zt,
                                        }),
                                      );
                                      await A.move({ rt: R, O: "trash" });
                                    },
                                  }),
                                ),
                                ...O(
                                  st,
                                  f({
                                    style: {
                                      fontSize: "12px",
                                      padding: "10px",
                                      textAlign: "center",
                                    },
                                    textContent: w("noDupsFoundHere"),
                                    onclick: (pt) => l(),
                                  }),
                                ),
                              ],
                            }),
                          },
                        }).i,
                        v,
                      ),
                      !0
                    );
                  },
                }),
                ...O(!U && !y && !j(x) && !g && !V(x) && !p, {
                  name: "move",
                  label: w("move"),
                  Kt: { I: "move", dimension: "15px", ee: !K(), left: "1px" },
                  action: async () => {
                    let v = [gt({ itemId: T })];
                    await We({
                      title: w("chooseLocationToMoveTo"),
                      He: G(x),
                      io: async (P) => {
                        await Ke({ rt: v, O: P.id });
                      },
                    });
                  },
                }),
                ...O(!U && !g && !V(x) && !(j(x) && p), {
                  name: "trash",
                  label: w("moveToTrash"),
                  icon: { I: "cross-action", dimension: "10px", left: "0px" },
                  ni: !0,
                  action: async () => {
                    let v;
                    j(x) && q && (v = q.id);
                    let P = [gt({ itemId: T, Fe: v })],
                      B = await A.gs(P);
                    (await A.move({ rt: P, O: "trash" }),
                      await A.Oe(B),
                      await Po({ Ef: !!i && !t && !b && !k && zt(x) }));
                  },
                }),
              ].map((v) => [v.name, Et(v)]),
            ),
          },
          e && {
            horizDivider3: xe({
              marginTop: "5px",
              marginBottom: "4px",
              marginInlineStart: "-8px",
              marginInlineEnd: "-8px",
            }),
            ku: new ke({
              dt: c,
              value: ct(x),
              fontSize: "12px",
              label: w("openAsTabGroup"),
              D: w("openAsTabGroupMenuItemHelp"),
              onChange: async (v) => {
                Rt.Fa.i.style.display = v ? "block" : "none";
                let P = { isTabGroup: v };
                (v && (x.color || (P.color = me)),
                  v || ((P.color = void 0), (P.collapsed = void 0)),
                  ps.forEach((B) =>
                    Rt.Fa.Ff[B].p.fh(B === (P.color ?? x.color)),
                  ),
                  Rt.Fa.jf.et(x.collapsed, !0),
                  u(P));
              },
              ae: `${24 / 2}px`,
              $: {
                marginTop: "8px",
                marginInlineStart: "12px",
                marginInlineEnd: "15px",
              },
            }),
            Fa: f({
              style: {
                marginTop: "3px",
                marginBottom: "0px",
                display: ct(x) ? "block" : "none",
              },
              children: {
                jf: new ke({
                  value: !!x.collapsed,
                  fontSize: "12px",
                  label: w("openAsCollapsedTabGroup"),
                  D: w("openAsCollapsedTabGroupMenuItemHelp"),
                  onChange: async (v) => {
                    let P = { collapsed: v };
                    (ct(x) || (Rt.ku.et(!0, !1), x.color || (P.color = me)),
                      u(P));
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    marginTop: "0px",
                    marginInlineStart: "12px",
                    marginInlineEnd: "15px",
                  },
                }),
                ix: f({
                  style: {
                    textAlign: "start",
                    fontSize: "12px",
                    marginTop: "8px",
                    paddingBottom: "3px",
                    marginInlineStart: "15px",
                    marginInlineEnd: "15px",
                  },
                  textContent: w("tabGroupColorColon"),
                }),
                Ff: f({
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    paddingInline: "14px 14px",
                    paddingBlock: "0px 7px",
                  },
                  children: {
                    ...Object.fromEntries(
                      ps.map((v) => [
                        v,
                        F("div", {
                          style: { display: "inline-block", cursor: "pointer" },
                          onclick: (P) => {
                            let B = x.color,
                              W = {};
                            (ct(x) ||
                              ((W.isTabGroup = !0),
                              (W.color = v),
                              Rt.ku.et(!0, !0)),
                              v !== B && (W.color = v),
                              Object.keys(W).length > 0 && u(W),
                              l());
                          },
                          p: new ki({
                            color: v,
                            dh: !0,
                            isSelected: x.color === v,
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
                ...O(Z, {
                  name: "deleteAllTrash",
                  label: w("deleteAllTrash"),
                  icon: { I: "cross-action", dimension: "10px" },
                  ni: !0,
                  action: async () => {
                    await A.td();
                  },
                }),
                ...O(!Z, {
                  name: "moveBack",
                  label: w("moveBack"),
                  icon: { I: "move", dimension: "14px", top: "1px" },
                  action: async () => Ms(x),
                }),
              ].map((v) => [v.name, Et(v)]),
            ),
          },
        ],
        () =>
          xe({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          }),
      ),
    },
    Nt = Object.entries(Rt),
    ue = (v) => v.i?.classList.contains("horizDivider");
  return (
    (Nt = Nt.filter(
      ([v, P], B, W) => !((B === 0 || B === W.length - 1) && ue(P)),
    )),
    (Nt = Nt.filter(([v, P], B, W) => !(ue(P) && B > 0 && ue(W[B - 1][1])))),
    Object.fromEntries(Nt)
  );
}
async function hn({ mode: i = "text", O: t, Gs: e, gu: s, Bf: n }) {
  let r = i === "readingList" && (await chrome.readingList.query({}));
  r &&
    r.sort(
      we(
        os((u) => u.hasBeenRead),
        _t((u) => u.creationTime),
      ),
    );
  let o = i === "bookmarks" && (await chrome.bookmarks.getTree()),
    a = new Ls({ style: { flex: "1 1 10px", margin: "0 20px" } });
  n?.();
  let l = new It({
    $r: !0,
    minWidth: "490px",
    minHeight: "360px",
    Sr: "490px",
    zl: "390px",
    buttons:
      i === "text"
        ? [
            new Ge({
              id: "cancel",
              label: w("Cancel"),
              V: !1,
              Pn: !0,
              tabIndex: 2,
            }),
            new Ge({
              id: "import",
              label: w("Import"),
              V: !0,
              tabIndex: 1,
              onclick: async (u) => {
                let c = a.i.contentWindow.document.body.innerHTML,
                  d = await xi(c),
                  y = await A.Ma({ Ga: d, Gs: e, O: t });
                y && (await s({ itemId: t, ...(t !== y && { Zi: y }) }));
              },
            }),
          ]
        : [],
  });
  (l.Lt({
    content: f({
      style: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        overflow: "auto",
      },
      children: {
        sx: f({
          init: (u) => (u.i.onclick = (c) => l.destroy()),
          style: {
            position: "absolute",
            top: "14px",
            [K() ? "right" : "left"]: "17px",
            cursor: "pointer",
          },
          p: C(
            { dimension: "12px" },
            (u) => `images/cross${u ? "" : "-dark"}.png`,
          ),
        }),
        nx: new qr({
          fontSize: "12px",
          $: { paddingTop: "12px", paddingInlineStart: "16px" },
          Dc: [
            { label: w("importText"), name: "text" },
            { label: w("importBookmarks"), name: "bookmarks" },
            ...O(await xr(), {
              label: w("importReadingList"),
              name: "readingList",
            }),
          ],
          Pc: [i],
          onChange: async ([u]) => {
            if (u !== i) {
              if (u === "bookmarks" && !(await Ci("bookmarks")))
                return (alert(w("bookmarksPermissionNecesssary")), !1);
              if (u === "readingList" && !(await Ci("readingList")))
                return (alert(w("readingListPermissionNecesssary")), !1);
              await hn({ mode: u, O: t, Gs: e, gu: s, Bf: () => l.destroy() });
            }
          },
        }),
        ...(i === "text" && {
          content: Gs({
            style: { paddingInline: "20px 20px", paddingBlock: "18px 10px" },
          }),
          ox: a,
        }),
        ...(i === "bookmarks" && {
          content: f({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "8px",
              overflow: "auto",
            },
            children: {
              lx: f({
                children: o.map((u) => Ds(u, !0, e, t, () => l.destroy())),
              }),
            },
          }),
        }),
        ...(i === "readingList" && {
          content: f({
            style: {
              marginInlineStart: "26px",
              marginInlineEnd: "10px",
              marginTop: "16px",
              marginBottom: "26px",
              overflow: "auto",
            },
            children: {
              header: f({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                },
                children: {
                  xf: C(
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
                  title: f({
                    style: { flex: "0 1 auto", fontWeight: 600 },
                    textContent: w("readingList"),
                  }),
                  bf: f({
                    style: { flex: "0 0 auto" },
                    p: new ne({
                      V: !0,
                      label: w("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (u) => {
                        (await A.Ma({
                          Ga: [
                            r.map(({ title: c, url: d }) => ({
                              kt: At(d),
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
                entries: f({
                  style: { marginInlineStart: "-6px" },
                  children: r.map((u) => Es(u)),
                }),
              }),
              ...(!r?.length && {
                ux: f({
                  style: { marginInlineStart: "25px", fontSize: "13px" },
                  textContent: w("noReadingListEntries"),
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
const Go = [
  { name: "newWindow", label: w("openInNewWindow") },
  { name: "currentWindow", label: w("openInThisWindow") },
  { name: "newIncognitoWindow", label: w("openInIncognitoWindow") },
];
(async () => (
  await $e(),
  [...document.querySelectorAll("[data-m]")].forEach(
    (i) => (i.textContent = w(i.dataset.m)),
  )
))();
function So(i, t) {
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
async function zl(i, t, e) {
  const s = So(i, t),
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
    (await e(l, a), qn(n, a, l), (r = a + l.length));
  }
  return n;
}
class Ge {
  constructor({ id: t, label: e, V: s, Pn: n, onclick: r, tabIndex: o }) {
    ((this.id = t),
      (this.V = s),
      (this.Pn = n),
      (this.Tu = O(r)),
      (this.o = f({
        className: "button-outer" + (s ? " button-default-outer" : ""),
        p: F("button", {
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
async function Zl({ message: i, xi: t }) {
  return new Promise((e) => {
    new It({
      buttons: [
        new Ge({
          id: "cancel",
          label: w("Cancel"),
          V: !1,
          Pn: !0,
          tabIndex: 2,
          onclick: (n) => e(!1),
        }),
        new Ge({
          id: "ok",
          label: w("OK"),
          V: !0,
          tabIndex: 1,
          onclick: (n) => e(!0),
        }),
      ],
    }).Lt({ message: i, xi: t });
  });
}
async function Qt(i, { Iu: t = !1 } = {}) {
  return new Promise((e) => {
    new It({
      buttons: [
        new Ge({
          id: "ok",
          label: w("OK"),
          V: !0,
          Pn: !0,
          tabIndex: 0,
          onclick: (n) => e(),
        }),
      ],
    }).Lt({ message: i, Iu: t });
  });
}
async function Jl(i) {
  return new Promise((t) => {
    new It({ buttons: [] }).Lt({ message: i });
  });
}
const un = "moveToTrashGroupCrossHintShown";
async function Po({ Ef: i }) {
  if (i)
    try {
      if (await A._e(un)) return;
      (await A.Ve(un, !0), await Fo());
    } catch (t) {
      console.log(`maybeShowMoveToTrashGroupCrossHintModal failed: ${t}`);
    }
}
async function Fo() {
  return await new Promise((i) => {
    let t = new It({
        fs: !0,
        Ul: !1,
        $r: !1,
        minWidth: "460px",
        Sr: "460px",
        buttons: [],
        Bo: () => i(),
      }),
      e = C(
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
      s = f({
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
          title: f({
            className: "tabGroupLabelText oneLineWithEllipsis",
            style: { flex: "1 1 auto" },
            textContent: w("modalMoveToTrashHintExampleGroupTitle"),
          }),
        },
      }),
      n = f({
        style: {
          padding: "24px 30px 22px 30px",
          maxWidth: "460px",
          lineHeight: "1.6em",
        },
        children: {
          heading: f({
            style: {
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "12px",
              marginInlineStart: "10px",
            },
            textContent: w("modalMoveToTrashHintHeading"),
          }),
          mx: s,
          wx: f({
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            },
            p: new ne({
              label: w("gotIt"),
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
class It {
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
    ((this.Bo = u), (It.Is = !0), (this.m = []), (this.buttons = t));
    let c = Object.fromEntries(t.map((y) => [y.id, y]));
    if (
      ((this.o = f({
        onclick: (y) => {
          (y.stopPropagation(),
            l && !(new Date() - tn < 50) && !ft && this.destroy());
        },
        style: {
          zIndex: It.zIndex,
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
        p: f({
          role: "alertdialog",
          ariaModal: "true",
          style: {
            border: "var(--tab-group-border)",
            borderRadius: "10px",
            backgroundColor: "var(--border-color)",
            boxShadow: "var(--popup-box-shadow)",
            position: "relative",
          },
          init: ({ i: y }) => {
            this.m.push(
              J(y, "click", (b) => {
                b.stopPropagation();
              }),
            );
          },
          children: {
            ja: f({
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
                content: f({}),
                ...(t.length && {
                  buttons: f({
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
                  Hf: f({
                    style: {
                      position: "absolute",
                      right: "4px",
                      bottom: "0px",
                    },
                    p: C(
                      {
                        width: "12px",
                        height: "12px",
                        style: { cursor: "nwse-resize" },
                      },
                      (y) =>
                        `images/bottom-right-resize${y ? "" : "-dark"}.png`,
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
      let y = this.o.p.ja.i;
      (this.m.push(
        J(this.o.p.ja.Hf.i, "pointerdown", (b) =>
          en({
            event: b,
            Il: {
              vu: y,
              qf: y.offsetWidth,
              Uf: y.offsetHeight,
              Qn: parseInt(y.style.minWidth),
              zf: parseInt(y.style.minHeight),
            },
            Al: ({ ts: p, es: m, dx: g, dy: x }) => {
              ((m.vu.style.width = `${Math.min(window.innerWidth - 80, Math.max(m.Qn, m.qf + g * 2))}px`),
                (m.vu.style.height = `${Math.min(window.innerHeight - 70, Math.max(m.zf, m.Uf + x * 2))}px`));
            },
          }),
        ),
      ),
        this.m.push(
          J(window, "resize", (b) => {
            ((y.style.width = `${Math.min(window.innerWidth - 80, Math.max(parseInt(y.style.minWidth), y.clientWidth))}px`),
              (y.style.height = `${Math.min(window.innerHeight - 70, Math.max(parseInt(y.style.minHeight), y.clientHeight))}px`));
          }),
        ));
    }
    let d = t.find((y) => y.Pn);
    (d &&
      this.m.push(
        J(document, "keydown", (y) => {
          le(y) && d.click();
        }),
      ),
      a &&
        this.m.push(
          J(document, "keydown", (y) => {
            le(y) && (y.preventDefault(), this.destroy());
          }),
        ),
      Object.values(c).forEach((y) =>
        y.Cf((b) => {
          this.destroy();
        }),
      ));
  }
  Lt({ content: t, message: e, xi: s, Iu: n }) {
    ((this.content = t), (this.message = e));
    let r = e
      ? f({
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
            xx: f({ ...(n ? { innerHTML: e } : { textContent: e }) }),
            ...(s && {
              xi: f({
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
    ((It.Is = !1),
      this.m?.forEach((t) => t.remove()),
      this.content?.destroy?.(),
      this.o.i.remove(),
      this.Bo?.(),
      (this.Bo = null));
  }
}
function Do({ eo: i, Ec: t }) {
  return F("div", {
    style: {
      fontSize: "12px",
      fontWeight: 400,
      marginInline: "8px 8px",
      marginBlock: "8px 8px",
      lineHeight: "1.5em",
    },
    children: {
      body: f({
        style: {},
        children: i.map(({ name: e, label: s }) =>
          dt.bi({ name: e, label: s, action: () => t(e) }),
        ),
      }),
    },
  });
}
function Eo({ content: i, filename: t, mimeType: e = "text/plain" }) {
  const s = document.createElement("a"),
    n = new Blob([i], { type: e }),
    r = URL.createObjectURL(n);
  ((s.href = r),
    (s.download = t),
    s.click(),
    setTimeout(() => URL.revokeObjectURL(r), 2e3));
}
function Bo(i) {
  return (
    (i = Wt(Ki(i))),
    (i = i.replace(/[\\/:*?"<>|]/g, " ")),
    (i = i.replace(/[\s]+/g, " ").trim()),
    (i = i.replace(/[. ]+$/g, "")),
    i || (i = "folder"),
    i.substring(0, 70)
  );
}
function Ho(i) {
  if (!i) return "";
  let t = new Date(i);
  return `${t.toLocaleDateString(void 0, { cc: "short" })}, ${t.toLocaleTimeString()}`;
}
function Ui({ h: i, Qt: t }) {
  let e = 0;
  for (let s of t.childIds ?? []) {
    let n = i.v(s);
    n && (j(n) ? e++ : _(n) && (e += Ui({ h: i, Qt: n })));
  }
  return e;
}
function jo({ h: i, Wf: t, entries: e = [] }) {
  for (let s of t.childIds ?? []) {
    let n = i.v(s);
    n && _(n) && !G(n) && e.push({ Qt: n });
  }
  return e;
}
function cn({ Qt: i, h: t, level: e = 0, Ps: s }) {
  let n = "",
    r = 20,
    o = e ? e * r : 0,
    a = (e + 1) * r,
    l = 0;
  for (let u of i.childIds ?? []) {
    let c = t.v(u);
    if (c) {
      if (j(c)) {
        let d = cs(c.url || ""),
          y = mt(c.title || c.url || ""),
          b =
            s && c.notes?.text
              ? `<div class="tabNotes">${mt(c.notes.text)}</div>`
              : "";
        ((n += `<div class="tab" style="padding-inline-start: ${o}px;"><a class="tabLink" href="${d}">${y}</a>${b}</div>`),
          l++);
      } else if (_(c)) {
        let d = be({ h: t, l: c });
        ((n += `<div class="innerGroupBlock" style="margin-top: ${l ? 8 : 2}px;">
        <div class="innerGroupTitleText" style="padding-inline-start: ${a}px;">${mt(d)}</div>`),
          s &&
            c.notes?.text &&
            (n += `<div class="innerGroupNotes" style="padding-inline-start: ${a}px;">${mt(c.notes.text)}</div>`),
          (n += cn({ Qt: c, h: t, level: e + 1, Ps: s })),
          (n += "</div>"),
          l++);
      }
    }
  }
  return n;
}
function qo({ Qt: i, h: t, Ps: e }) {
  let s = Ui({ h: t, Qt: i }),
    n = yi({ h: t, l: i }),
    r = Ft("tabCount", s),
    o = i.createDate ? `${w("createdPreceedingDate")} ${Ho(i.createDate)}` : "",
    a = cn({ Qt: i, h: t, Ps: e });
  return `<div class="tabGroup">
      <div class="tabGroupHeader">
        <div class="tabGroupHeaderRow">
          <div class="tabGroupTitleText">${mt(n || r)}</div>
          ${n ? `<div class="tabCountInline">${mt(r)}</div>` : ""}
        </div>
        ${o ? `<div class="createdDate">${mt(o)}</div>` : ""}
      </div>
      <div class="tabList">${a}</div>
    </div>`;
}
function Uo({ Nf: i, Rf: t, Zf: e, h: s, Qf: n, Ps: r }) {
  let o = e.map((c) => qo({ Qt: c.Qt, h: s, Ps: r })).join(""),
    a = e.length
      ? ""
      : `<div id="emptyState">${mt(w("noTabsInOneTabYet"))}</div>`,
    l = w("oneTabExportPageTitle"),
    u = n ? `${i} - ${l}` : l;
  return `<!DOCTYPE html>
<html dir="${K() ? "ltr" : "rtl"}">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>${mt(u)}</title>
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
    ${n ? `<div id="folderTitle">${mt(i)}</div>` : ""}
    <div id="headerText">${mt(Ft("tabTotalCount", t))}</div>
    <div id="tabGroupsDiv">${o}${a}</div>
  </div>
</body>
</html>`;
}
async function Ro({ La: i, h: t }) {
  ((t ??= new kt()), await t.Te({ groupId: i }));
  let e = t.v(i);
  if (!e || !G(e))
    throw new Error("getFolderSavedPageExport requires a folder item");
  let s = be({ h: t, l: e }),
    n = !1,
    r = jo({ h: t, Wf: e }),
    o = r.map(({ Qt: l }) => Ui({ h: t, Qt: l })).reduce((l, u) => l + u, 0),
    a = !V(e);
  return {
    filename: `${Bo(s)}.html`,
    Ee: Uo({ Nf: s, Rf: o, Zf: r, h: t, Qf: a, Ps: n }),
  };
}
async function No({ La: i }) {
  let { filename: t, Ee: e } = await Ro({ La: i });
  Eo({ content: e, filename: t, mimeType: "text/html" });
}
let ut, Se;
async function fn(i) {
  return f({
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
async function dn(i) {
  if (typeof i == "string") return fn(i);
  if (typeof i == "function") {
    let t = await i();
    return t
      ? typeof t == "string"
        ? fn(t)
        : t instanceof Element
          ? t
          : t.i
      : void 0;
  } else return;
}
function Dt(i, { Yt: t, Ls: e, bx: s }) {
  let n = i instanceof HTMLElement ? i : (i?.o?.i ?? i.i),
    r,
    o = [];
  return (
    o.push(
      Oe(n, () => {
        (Se !== void 0 && clearTimeout(Se),
          (Se = setTimeout(async () => {
            if ((ut?.destroy(), !n?.isConnected || s?.())) return;
            let a = await dn(t);
            if (!a) return;
            let l = n.getBoundingClientRect(),
              u = document.body.getBoundingClientRect();
            r = l.left < (u.right - u.left) / 2 + u.left;
            let c = f({
              style: { width: "250px", position: "absolute", left: "-1000px" },
              p: a,
            }).i;
            document.body.appendChild(c);
            let d = c.offsetHeight + 20 > l.top;
            (c.remove(),
              (ut = new Wo({ parent: i, Yt: t, Jf: a, Kf: d, Xf: r, Ls: e })));
            let y = Math.round(l.width / 2);
            if (e) {
              let b = e();
              y !== void 0 && (y = b);
            }
            ((ut.Au = y),
              (ut.o.i.style.left = `${l.x + y + (r ? 0 : -250) + window.scrollX}px`),
              (ut.o.i.style.top = `${l.y + (d ? l.height : 0) + window.scrollY}px`),
              document.body.appendChild(ut.o.i));
          }, 250)));
      }),
    ),
    e &&
      o.push(
        mo(n, async () => {
          if (!ut?.Ls) return;
          let a = ut.Ls();
          if (a !== ut.Au && a !== void 0) {
            let l = await dn(ut.Yt);
            (ut.o.$u.p.replaceWith(l), (ut.o.$u.p = l));
            let u = n.getBoundingClientRect();
            ((ut.o.i.style.left = `${u.x + a + (r ? 0 : -250) + window.scrollX}px`),
              (ut.Au = a));
          }
        }),
      ),
    o.push(
      Me(n, () => {
        (Se !== void 0 && clearTimeout(Se), ut?.destroy());
      }),
    ),
    o
  );
}
class Wo {
  constructor({ Jf: t, Kf: e, Xf: s, Ls: n }) {
    ((this.Ls = n),
      (this.o = f({
        className: "tooltip-content",
        style: {
          fontSize: 0,
          position: "absolute",
          width: "250px",
          height: "0",
          zIndex: 2e4,
        },
        children: {
          $u: f({
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
setTimeout(async () => {
  (await co(), await Yr(), await Co());
}, 1);
async function Co() {
  await zo();
}
async function zo() {
  document.body.style.backgroundColor = "var(--col-bg-color)";
  let i = new Ls({ style: { width: "720px", height: "400px", margin: "0 0" } }),
    t = pe(document.getElementById("contentAreaDiv"), void 0, {
      style: { padding: "0", maxWidth: "700px" },
      children: {
        header: Mo(
          w("importAndExport"),
          f({
            style: {
              flex: "1 0 auto",
              textAlign: "end",
              fontSize: "12px",
              marginInlineEnd: "30px",
              display: "flex",
            },
            children: [xo()],
          }),
        ),
        body: f({
          style: {
            marginTop: "103px",
            marginBottom: "60px",
            paddingInlineStart: "45px",
          },
          children: {
            Xx: sn(
              !0,
              w("importUrls"),
              f({
                style: {},
                children: {
                  Vx: Gs({
                    style: {
                      paddingInline: "0px 20px",
                      paddingBlock: "18px 10px",
                    },
                  }),
                  ox: i,
                  Qx: f({
                    style: { display: "flex", marginTop: "10px" },
                    children: {
                      Kx: new $i({
                        vr: w("chooseALocationToImportTo"),
                        Li: "destination",
                        style: {
                          marginInlineStart: "3px",
                          marginInlineEnd: "8px",
                        },
                        Eh: await rt("root"),
                        Z: document,
                        maxHeight: "500px",
                      }),
                      _x: new ne({
                        label: w("import"),
                        V: !0,
                        tabIndex: void 0,
                        fontSize: "12px",
                        $: {
                          flex: "0 0 auto",
                          marginInlineStart: "auto",
                          marginInlineEnd: "0px",
                        },
                        onclick: async () => {
                          let e = i.i.contentWindow.document.body.innerHTML;
                          if (!/\S/.test(e)) Qt(w("noTextHasBeenEntered"));
                          else {
                            let s = await xi(e),
                              n = t.u.Kx.ds,
                              r = n.id,
                              o = await A.Ma({ Ga: s, Gs: n.groupType, O: r });
                            (await A.ec({
                              itemId: n.id,
                              ...(o !== r && { Zi: o }),
                            }),
                              setTimeout(() => window.close(), 100));
                          }
                        },
                      }),
                    },
                  }),
                  Yx: f({
                    style: {
                      fontSize: "12px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      paddingInlineStart: "4px",
                    },
                    textContent: w("toImportBrowserBookmarksUseMenuOption"),
                  }),
                },
              }),
            ),
            t0: eo(16),
            e0: sn(
              !0,
              w("exportUrls"),
              f({
                children: {
                  Fc: f({
                    style: { paddingBottom: "10px" },
                    textContent: w("exportThenImportNote"),
                  }),
                  Jx: F("textArea", {
                    style: {
                      width: "700px",
                      maxWidth: "800px",
                      height: "500px",
                      fontFamily: "monospace",
                      fontSize: "13px",
                      backgroundColor: "transparent",
                      "unicode-bidi": "plaintext",
                    },
                  }),
                  Qx: f({
                    style: { display: "flex", flexWrap: "wrap" },
                    children: {
                      source: f({
                        style: {
                          marginInlineStart: "5px",
                          marginTop: "20px",
                          marginInlineEnd: "auto",
                          flex: "1 1 auto",
                        },
                        children: {
                          i0: new $i({
                            vr: w("chooseExportLocation"),
                            Li: "source",
                            label: w("sourceColon"),
                            style: {
                              marginInlineStart: "3px",
                              marginInlineEnd: "8px",
                            },
                            Eh: await rt("root"),
                            Js: async (e) =>
                              (t.u.Jx.i.value = (
                                await Le({ groupId: e.id, ge: "urlAndTitle" })
                              ).Xe),
                            Z: document,
                            maxHeight: "500px",
                          }),
                        },
                      }),
                      buttons: f({
                        style: {
                          flex: "0 0 auto",
                          marginInlineStart: "auto",
                          display: "flex",
                          marginTop: "10px",
                          gap: "6px",
                          justifyContent: "flex-end",
                        },
                        children: {
                          s0: new ne({
                            label: w("copyToClipboard"),
                            V: !0,
                            tabIndex: void 0,
                            fontSize: "12px",
                            $: { flex: "0 0 auto", marginInlineEnd: "0px" },
                            onclick: async () => {
                              await navigator.clipboard.writeText(
                                t.u.Jx.i.value,
                              );
                            },
                          }),
                        },
                      }),
                    },
                  }),
                },
              }),
            ),
          },
        }),
      },
    });
  (i.jd(),
    (t.u.Jx.i.value = (await Le({ groupId: "root", ge: "urlAndTitle" })).Xe));
}
function Ql(i, t, e) {
  const s = document.createElement("a"),
    n = new Blob([i], { type: t }),
    r = URL.createObjectURL(n);
  (s.setAttribute("href", r), s.setAttribute("download", e), s.click());
}
