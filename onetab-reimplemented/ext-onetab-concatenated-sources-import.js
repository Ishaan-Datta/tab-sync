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
const { vt: Lt, ye: Pi, Ni: Xe, ge: Fi, Ns: Xs, qi: Ve, io: Ao, qs: Vs, $l: Rl, eo: $o, Rs: _s, vl: Nl, ke: Di, so: Io, no: vo, Il: Wl, Te: Le, ro: Oo, Us: Ys, Ae: Ei, at: ft, Ws: tn, Cs: en, Ol: Mo, Ml: sn, zs: nn, Js: rn, $e: Bi, Sl: Cl, oo: Lo, Qs: on, ve: Hi, Ie: ji, Zs: an, _s: ln, Oe: qi } = globalThis.createOneTabTreeInteractions({
  get _() { return V; },
  get _e() { return je; },
  get _t() { return se; },
  get A() { return A; },
  get Ai() { return De; },
  get ao() { return Go; },
  get B() { return j; },
  get Bi() { return Je; },
  get ce() { return Ai; },
  get Cr() { return uo; },
  get Ct() { return Xt; },
  get displayAutoActionOnOpenOptionModal() { return displayAutoActionOnOpenOptionModal; },
  get dnd() { return dnd; },
  get dt() { return _; },
  get Dt() { return Ht; },
  get er() { return wr; },
  get es() { return cs; },
  get et() { return ot; },
  get fi() { return ke; },
  get ft() { return xt; },
  get G() { return F; },
  get getItemById() { return rt; },
  get getItems() { return ge; },
  get Gi() { return We; },
  get go() { return No; },
  get gt() { return vt; },
  get Gt() { return jt; },
  get h() { return f; },
  get he() { return ki; },
  get hi() { return me; },
  get ho() { return Po; },
  get Ht() { return Bt; },
  get iconGrid() { return iconGrid; },
  get is() { return xi; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get ji() { return Ke; },
  get Ki() { return oi; },
  get Ks() { return hn; },
  get kt() { return Ot; },
  get L() { return G; },
  get Ls() { return Rs; },
  get lt() { return dt; },
  get mt() { return $t; },
  get Mt() { return Ft; },
  get navigateToItem() { return navigateToItem; },
  get Nr() { return ro; },
  get ns() { return ds; },
  get Nt() { return zt; },
  get O() { return O; },
  get oi() { return xe; },
  get oneTabPage() { return oneTabPage; },
  get ot() { return ct; },
  get P() { return D; },
  set P(value) { D = value; },
  get pi() { return Ae; },
  get pt() { return mt; },
  get Pt() { return qt; },
  get qr() { return oo; },
  get qt() { return Zt; },
  get rn() { return mn; },
  get Rr() { return ao; },
  get rs() { return ps; },
  get Rt() { return Jt; },
  get showSharingModal() { return showSharingModal; },
  get Ss() { return Us; },
  get te() { return ci; },
  get ti() { return le; },
  get ut() { return at; },
  get Vt() { return $e; },
  get W() { return C; },
  get x() { return w; },
  get X() { return Y; },
  get xi() { return Ie; },
  get xs() { return $s; },
  get xt() { return gt; },
  get ys() { return Ms; },
  get Yt() { return ae; },
  get zt() { return Qt; }
});
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
