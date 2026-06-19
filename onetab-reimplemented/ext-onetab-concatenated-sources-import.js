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
  modelPredicates: { isUndefined: ja, isDefined: Zn, hasId: Ua, doesNotHaveId: Jn, sameIdAs: qa, getId: Vt, isTab: j, isRoot: V, isTrash: yt, isFolder: G, isUserFolder: Na, isFolderOrWindowGroup: Ca, isGroup: _, isTabGroup: ct, isSharedAndNotExpired: Qn },
  collectionHelpers: { compareDescendingBy: _t, compareLocaleBy: Kn, compareLocaleNumericBy: Wa, mergeOwnProperty: za, groupBy: Qa, range: Xn, nthIndexOf: Ka },
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
  trimToLengthWithEllipsis: Ks,
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
class kl {
  constructor({
    parent: t,
    label: e,
    ym: s,
    Xa: n,
    isEnabled: r,
    Yo: o,
    className: a,
  }) {
    ((this.div = pe(t, "div", {
      style: {
        paddingInlineEnd: s + "px",
        display: "inline-block",
        fontSize: "12px",
        cursor: "pointer",
        color: "var(--link-color)",
      },
      className: a,
      textContent: e,
      onclick: (l) => {
        this.isEnabled ? n(l, this.div) : this.Yo && this.Yo(l);
      },
    }).i),
      this.setEnabled(r),
      (this.Yo = o));
  }
  setEnabled(t) {
    ((this.isEnabled = t),
      this.isEnabled
        ? (this.div.style.color = "")
        : (this.div.style.color = "var(--text-color-weak)"));
  }
}
class ne {
  constructor({
    label: t,
    fontSize: e = "14px",
    dt: s = !0,
    V: n,
    onclick: r,
    tabIndex: o,
    $: a,
    Cs: l,
    Be: u,
    Yi: c = !1,
    vi: d,
    Hs: y,
    _i: b,
    Ai: p,
    Wn: m = !1,
  }) {
    ((this.label = t),
      (this.fontSize = e),
      (this.onclick = r),
      (this.tabIndex = o),
      (this.Be = u),
      (this.Yi = c),
      (this.vi = d),
      (this.Hs = y),
      (this.Ai = p),
      (this._i = b),
      (this.Cs = l),
      (this.Wn = m),
      (this.o = f({
        className: "button-outer" + (n ? " button-default-outer" : ""),
        style: { margin: 0, ...(a ?? {}) },
        p: f({}).i,
      })),
      this.Wt(s),
      this.Xt(this.label));
  }
  gm() {
    this.onclick();
  }
  wl(t) {
    ((this._o = t),
      t
        ? (this.o.i.classList.remove("button-outer", "button-default-outer"),
          (this.o.p.style.backgroundColor = "transparent"),
          (this.o.p.style.cursor = "default"),
          this.o.p.classList.remove("button", "button-hover-bg-change"))
        : (this.o.i.classList.add("button-outer", "button-default-outer"),
          (this.o.p.style.backgroundColor = ""),
          (this.o.p.style.cursor = "pointer"),
          this.o.p.classList.add("button", "button-hover-bg-change")));
  }
  Wt(t) {
    this.o.i.style.display = t ? "inline-block" : "none";
  }
  Xt(t) {
    this.label = t;
    let { o: e, m: s } = Sr({
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
    let n = e.i;
    (this.o.p.replaceWith(n), (this.o.p = n));
  }
  destroy() {
    ((this.m ?? []).forEach((t) => t.remove()),
      (this.m = null),
      (this.onclick = null));
  }
}
function gi(i) {
  return f({
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      color: "var(--text-color)",
      fontWeight: 400,
      userSelect: "none",
    },
    textContent: i,
  });
}
function Sr({
  xl: i,
  className: t,
  label: e,
  fontSize: s,
  onclick: n,
  ah: r,
  tabIndex: o = -1,
  style: a = {},
  Be: l,
  Yi: u,
  vi: c,
  Hs: d,
  Ai: y,
  _i: b,
  Wn: p,
}) {
  let m = [],
    g = !1;
  return {
    o: F(i, {
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
        ...(u || l ? {} : { padding: "6px 10px" }),
        ...a,
      },
      className: t,
      init: (T) => {
        let h = async (k) => {
          if (!r?.() && !g) {
            ((g = !0),
              (T.bl.style.display = "inline-block"),
              (T.i.style.cursor = "wait"));
            try {
              await n(k, T);
            } catch ($) {
              console.log($);
            } finally {
              ((T.bl.style.display = "none"),
                (T.i.style.cursor = "pointer"),
                (g = !1));
            }
          }
        };
        (m.push(
          J(T.i, "click", async (k) => {
            await h(k);
          }),
        ),
          m.push(
            J(T.i, "keydown", async (k) => {
              k.key === "Enter" &&
                document.querySelector(":focus-visible") === T.i &&
                (k.stopPropagation(), await h(k));
            }),
          ));
      },
      tabIndex: o,
      children: {
        ...(l
          ? Ue(e.split("ONETAB"), (T) => ({
              ...(T[0] !== "" && { a: gi(T[0]) }),
              b: C(
                {
                  width: 176 / 2.2 + "px",
                  height: 56 / 2.2 + "px",
                  style: { display: "inline-block", marginBottom: "2px" },
                },
                (h) => `images/onetab-button-logo-${h ? "light" : "dark"}.png`,
              ),
              ...(T[1] !== "" && { c: gi(T[1]) }),
            }))
          : {
              a: gi(e),
              ...(u && { b: f({ style: { height: `${56 / 2 + 2}px` } }) }),
            }),
        ...(d && {
          km: f({
            style: {
              height: "10px",
              margin: "4px 0",
              border: "1px solid transparent",
            },
          }),
        }),
        ...(c && {
          Tm: f({
            init: (T) => {
              (m.push(
                J(T.i, "click", async (h) => {
                  (h.stopPropagation(), y());
                }),
              ),
                m.push(
                  J(T.i, "keydown", async (h) => {
                    h.key === "Enter" &&
                      document.querySelector(":focus-visible") === T.i &&
                      (h.stopPropagation(), y());
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
              lh: C(
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
                (T) => `images/tree-twistie-closed-${T ? "light" : "dark"}.png`,
              ),
            },
          }),
        }),
        bl: Mi({
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
    m,
  };
}
class Pr {
  constructor({
    borderStyle: t,
    value: e,
    Im: s,
    className: n,
    style: r,
    vm: o,
    Am: a,
    onChange: l,
  }) {
    ((this.value = e),
      (this.onChange = l),
      (this.o = f({
        className: "checkbox" + (n ? ` ${n}` : ""),
        init: (u) => {
          s && Dt(u, { Yt: s });
        },
        onclick: (u) => {
          o?.()
            ? a?.()
            : (this.et(!this.value), this.onChange?.(this.value, Ze(u)));
        },
        style: {
          zIndex: 0,
          position: "relative",
          marginInlineEnd: "4px",
          width: "4px",
          height: "4px",
          border: t,
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
      ((this.Vo = C(
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
        (t) => `images/tick${t ? "" : "-dark"}.png`,
      )),
      this.o.i.appendChild(this.Vo));
  }
  et(t, e) {
    ((this.value = t),
      this.o.i.classList.remove(this.value ? "off" : "on"),
      this.o.i.classList.add(this.value ? "on" : "off"),
      e && this.onChange?.(this.value));
  }
  $i() {
    return this.value;
  }
}
class ke {
  constructor({
    value: t = !1,
    dt: e = !0,
    label: s,
    tooltipText: n,
    fontSize: r,
    onChange: o,
    $: a = {},
    ae: l = `${28 / 2}px`,
    hh: u,
    D: c,
  }) {
    ((this.value = t),
      (this.label = s),
      (this.onChange = o),
      (this.o = f({
        className: "checkboxField",
        init: ({ i: d }) => {
          (n && (this.m ??= []).push(...Dt(d, { Yt: n })),
            (this.m ??= []).push(
              J(d, "click", async (y) => {
                let b = !this.value;
                (!u || !(await u(b))) && this.et(!this.value);
              }),
            ),
            (this.m ??= []).push(
              Oe(d, (y) => {
                (this.Si("tick"),
                  (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
              }),
            ),
            (this.m ??= []).push(
              Me(d, (y) => {
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
          icon: C(
            {
              className: "checkboxFieldBox",
              dimension: l,
              style: { fontSize: r, minWidth: l },
            },
            (d) => `images/tick${d ? "" : "-dark"}.png`,
          ),
          label: f({
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
          ...(c && {
            yl: C(
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
                  (this.m ??= []).push(...Dt(d.i, { Yt: c }));
                },
              },
              (d) => `images/help-circle${d ? "" : "-dark"}.png`,
            ),
          }),
        },
      })),
      this.et(this.value, !0),
      this.Wt(e));
  }
  $i() {
    return this.value;
  }
  et(t, e) {
    let s = this.value;
    ((this.value = t),
      this.o.i.classList.remove(this.value ? "off" : "on"),
      this.o.i.classList.add(this.value ? "on" : "off"),
      s !== this.value && !e && this.onChange?.(this.value),
      this.Si(t ? "tick" : "tickbox"),
      (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
  }
  Si(t) {
    let e = (o) => `images/${t}${o ? "" : "-dark"}.png`,
      s = e(!0),
      n = e(!1),
      r = this.o.u.icon.firstElementChild;
    ((r.dataset.lightSrc = s),
      (r.dataset.darkSrc = n),
      (r.draggable = !1),
      (r.src = Ut ? s : n));
  }
  Wt(t) {
    this.o.i.style.display = t ? "flex" : "none";
  }
  tr() {
    return this.o.i.style.display !== "none";
  }
  destroy() {
    ((this.m ?? []).forEach((t) => t.remove()), (this.m = null));
  }
}
class ki {
  constructor({
    color: t,
    dh: e,
    isSelected: s,
    dimension: n = "11px",
    $: r,
    dt: o = !0,
    St: a,
  }) {
    ((this.color = t),
      (this.o = f({
        className: ["colorSwatch", ...O(e, "selectable"), ...O(s, "on")].join(
          " ",
        ),
        style: {
          display: o ? "inline-block" : "none",
          width: n,
          height: n,
          borderRadius: "4px",
          backgroundColor: `var(--tab-group-color-${t})`,
          position: "relative",
          top: "4px",
          ...r,
        },
        ...(a && { onclick: a }),
      })));
  }
  setColor(t) {
    ((this.color = t),
      (this.o.i.style.backgroundColor = `var(--tab-group-color-${t})`));
  }
  $m() {
    return this.color;
  }
  Wt(t) {
    this.o.i.style.display = t ? "inline-block" : "none";
  }
  fh(t) {
    t ? this.o.i.classList.add("on") : this.o.i.classList.remove("on");
  }
  destroy() {
    this.o.i.onclick = null;
  }
}
function gs({ color: i, dimension: t, $: e = {}, St: s }) {
  return f({
    style: {
      backgroundColor: `var(--tab-group-color-${i})`,
      borderRadius: "4px",
      width: t,
      height: t,
      display: "inline-block",
      ...e,
      ...(s && { cursor: "pointer" }),
    },
    onclick: s,
  });
}
class Mt {
  constructor({
    label: t,
    onclick: e,
    icon: s,
    tooltipText: n,
    er: r,
    gl: o,
    ni: a,
  }) {
    ((this.onclick = e),
      (this.er = r),
      (this.o = f({
        className: ["controlButton", ...O(a, "red")].join(" "),
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
          ...(r && { Oi: new Ii({ oi: !1, Vi: this.er }) }),
          ...(s && {
            icon: dt.kl({
              ...s,
              $: { paddingInlineStart: "9px", paddingInlineEnd: "8px", ...s.$ },
            }),
          }),
          label: f({
            style: {
              fontSize: "11px",
              color: a ? "var(--red-control)" : "var(--blue-control)",
              paddingTop: "4px",
              paddingBottom: "4px",
            },
            textContent: t,
          }),
        },
      })),
      n && (this.m ??= []).push(...Dt(this, { Yt: n })));
  }
  Xt(t) {
    this.o.label.i.textContent = t;
  }
  destroy() {
    (this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy(),
      (this.onclick = null),
      ut?.destroy(),
      (this.m ?? []).forEach((t) => t.remove()),
      (this.m = null));
  }
}
const ks = new WeakSet(),
  Ts = new WeakSet(),
  As = !1;
class Tl {
  constructor() {
    ((this.ft = null),
      (this.Tl = null),
      (this.ve = null),
      (this.F = !1),
      (this.P = {}));
  }
  ir({ sr: t, nr: e, rr: s, ar: n, Sm: r, lr: o, cr: a, ur: l }) {
    let u = [];
    return (
      As && !t.style.touchAction && (t.style.touchAction = "none"),
      u.push(
        J(t, "pointerdown", (c) => {
          (c.stopPropagation(),
            Dr(c) &&
              Fr(c) &&
              (c.shiftKey ||
                c.metaKey ||
                this.P.Rn ||
                (a && a()) ||
                ((this.P = {}),
                en({
                  ph: { enabled: !0 },
                  mh: 3,
                  event: c,
                  element: t,
                  Il: null,
                  wh: ({ ts: d, es: y, qs: b, Us: p }) => {
                    ((this.F = !0), (this.ft = e));
                    let m = s.getBoundingClientRect();
                    ((this.Om = m.left),
                      (this.Mm = m.top),
                      (this.Gm = s.offsetWidth),
                      (this.Tl = s),
                      n(c) === !1 &&
                        ((this.F = !1),
                        (this.ft = null),
                        (this.Tl = null),
                        (this.P.vl = !0)));
                  },
                  Al: ({
                    ts: d,
                    es: y,
                    dx: b,
                    dy: p,
                    qs: m,
                    Us: g,
                    pageX: x,
                    pageY: T,
                  }) => {
                    !this.F ||
                      !this.ve ||
                      ((this.ve.style.left = `${m + b + (K() ? -20 : 20 - this.ve.offsetWidth)}px`),
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
      u
    );
  }
  hr({ Ae: t, i: e, dr: s, pr: n, mr: r, wr: o }) {
    let a = [],
      l = (c) => {
        let d = dnd.P.Mi === t;
        return (
          d && (delete dnd.P.Mi, delete dnd.P.ss),
          D.currentTarget === c && delete D.currentTarget,
          d
        );
      },
      u = (c) => (e.isConnected ? !1 : (l(c), !0));
    return (
      ["dragover", "pointermove"].forEach((c) =>
        a.push(
          J(e, c, (d) => {
            if (u(d.currentTarget) || (d.type === "pointermove" && !dnd.F))
              return;
            if (dnd.F && dnd.P.$l) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (ks.has(d)) return;
            let y = dnd.P.Mi,
              b = dnd.P.ss;
            if (
              ((y || b) &&
                (y !== t || b !== d.currentTarget) &&
                typeof Lt == "function" &&
                Lt(),
              !s(d))
            ) {
              l(d.currentTarget) && r(d);
              return;
            }
            (ks.add(d),
              (dnd.P.Mi = t),
              (dnd.P.ss = d.currentTarget),
              d.type === "dragover" && d.preventDefault(),
              d.dataTransfer && (d.dataTransfer.dropEffect = "move"),
              n(d));
          }),
        ),
      ),
      ["dragleave", "pointerleave"].forEach((c) =>
        a.push(
          J(e, c, (d) => {
            u(d.currentTarget) ||
              (d.type.startsWith("pointer") && !dnd.F) ||
              (d.stopPropagation(),
              !d.currentTarget.contains(d.relatedTarget) &&
                (l(d.currentTarget), r(d)));
          }),
        ),
      ),
      ["drop", "pointerup"].forEach((c) =>
        a.push(
          J(e, c, async (d) => {
            if (
              u(d.currentTarget) ||
              (d.type.startsWith("pointer") && !dnd.F) ||
              (dnd.F && dnd.P.$l)
            )
              return;
            if (!s(d)) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (Ts.has(d)) return;
            let y = dnd.P.Mi,
              b = dnd.P.ss;
            if (
              !(
                y &&
                y !== t &&
                b instanceof Element &&
                b.isConnected &&
                e.contains(b)
              ) &&
              !dnd.P.Rn
            ) {
              ((dnd.P.Mi = t),
                (dnd.P.ss = d.currentTarget),
                n(d),
                d.type === "drop" && (d.preventDefault(), d.stopPropagation()),
                Ts.add(d),
                (dnd.P.Rn = !0));
              try {
                await o(d);
              } finally {
                (delete dnd.P.Rn,
                  D.br && (delete D.br, Xe()),
                  l(d.currentTarget),
                  typeof Lt == "function" && Lt());
              }
            }
          }),
        ),
      ),
      a
    );
  }
  setDragImage(t) {
    let e = Vs.find((s) => s.name === t);
    (this.ve?.remove(),
      (this.ve = pe(document.body, "div", {
        style: {
          pointerEvents: "none",
          zIndex: "100000",
          position: "absolute",
          cursor: "move",
        },
        p: F("img", {
          src: `images/${t + (Ut ? "" : "-dark")}.png`,
          style: { width: `${e.w}px`, height: `${e.tt}px` },
        }),
      }).i));
  }
  bh({ title: t, Dm: e }) {
    (this.ve?.remove(),
      (this.ve = pe(document.body, "div", {
        style: {
          pointerEvents: "none",
          zIndex: "100000",
          position: "absolute",
          cursor: "move",
          fontSize: "13px",
          color: "var(--link-color)",
          marginLeft: `${e}px`,
        },
        textContent: t,
      }).i));
  }
}
function Ti(i) {
  return !!(
    i.dataTransfer &&
    ((i.dataTransfer.dropEffect = "move"),
    !["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
      (t) => Ai(i.dataTransfer.types, t),
    ))
  );
}
function Ai(i, t) {
  return i
    ? typeof i.includes == "function"
      ? i.includes(t)
      : typeof i.contains == "function"
        ? i.contains(t)
        : typeof i.indexOf == "function"
          ? i.indexOf(t) !== -1
          : Array.from(i).includes(t)
    : !1;
}
function $s(i) {
  return i.ctrlKey || i.altKey;
}
function Fr(i) {
  return i.isPrimary && i.button === 0;
}
function Dr(i) {
  let t =
    typeof i.pointerType == "string" ? i.pointerType.toLowerCase() : "mouse";
  return As || t !== "touch";
}
class Is {
  yh(t) {
    (this.ce.i.replaceWith(t.i), (this.ce = t));
  }
  Pm(t) {
    this.o.body.i.style.visibility = t ? "visible" : "hidden";
  }
  constructor({
    label: t,
    ce: e,
    gh: s,
    Zn: n,
    kh: r,
    Lm: o = !1,
    Qn: a,
    zs: l,
    Ce: u = { x: 0, y: 0 },
    maxHeight: c = "300px",
    Th: d,
    $: y,
    Em: b,
    Ih: p,
    Z: m = document,
    onShown: g,
    D: x,
    oi: T,
  }) {
    ((this.ce = e),
      (this.Zn = n),
      (this.Ah = !1),
      (this.Qn = a),
      s &&
        ((this.ce = f({})),
        (async () => {
          let h = await s();
          (this.ce.i.replaceWith(h.i), (this.ce = h));
        })()),
      (this.o = f({
        style: {
          display: "flex",
          alignItems: "center",
          position: "relative",
          ...y,
        },
        children: {
          ...((t || d) && {
            label: f({
              style: {
                fontSize: "12px",
                whiteSpace: "pre",
                display: "inline-block",
                marginInlineEnd: "10px",
                ...d,
              },
              textContent: t,
            }),
          }),
          body: f({
            onclick: (h) => {
              (h.stopPropagation(), this.Ah && this.Jn(!1), this.Jn(!0));
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
              lh: C(
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
                (h) => `images/tree-twistie-closed-${h ? "light" : "dark"}.png`,
              ),
            },
          }),
          Oi: new Ii({
            maxHeight: "600px",
            oi: T,
            onShown: g,
            zs: l,
            Ce: u,
            Z: m,
            Vi: r,
          }),
          ...(x && {
            yl: C(
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
                init: (h) => {
                  (this.m ??= []).push(...Dt(h.i, { Yt: x }));
                },
              },
              (h) => `images/help-circle${h ? "" : "-dark"}.png`,
            ),
          }),
        },
      })),
      (this.i = this.o.i));
  }
  Jn(t) {
    this.Zn ? t && this.Zn() : this.o.u.Oi.le(t);
  }
  destroy() {
    (this.m?.forEach((t) => t.remove()),
      this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy());
  }
}
class vs {
  constructor({ children: t, Ws: e, ns: s, Kn: n, Xn: r }) {
    ((this.children = t),
      (this.Ws = e),
      (this.ns = s),
      (this.Kn = n),
      (this.Xn = r),
      this.children.forEach((o) => o.Ns(this)));
  }
  $h() {
    this._t ||
      ((this._t = !0),
      this.Ws?.(),
      this.children.forEach((t) => t.Rs(!1)),
      this.children.forEach((t) => t.yr()));
  }
  Sh() {
    this._t &&
      ((this._t = !1), this.children.forEach((t) => t.Yn()), this.ns?.());
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
let Al = !0;
class re {
  constructor({
    value: t,
    Zs: e,
    Gi: s,
    rs: n,
    ls: r,
    _n: o,
    Qs: a,
    style: l = {},
    cs: u = !1,
    Di: c = "edit",
    St: d,
    ue: y,
    gr: b,
    Pi: p,
  }) {
    ((this.value = ii(t)),
      (this._n = o),
      (this.Qs = a),
      (this.Zs = e),
      (this.cs = u),
      (this.Gi = s),
      (this.Di = c),
      (this.St = d),
      (this.gr = b),
      (this.Pi = p),
      (this.ls = r),
      (this._t = !1),
      y && this.Ns(y),
      (this.o = f({
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
        p: F("span", {
          className: ["editInPlaceLabelSpan", ...O(r)].join(" "),
        }),
      })),
      (this.i = this.o.i),
      this.Pi && this.o.i.classList.add("selectable-item"),
      this.et(this.value),
      this.gr ||
        (this.Ol(this.Di),
        (this.o.i.onclick = (m) =>
          this._t
            ? !0
            : {
                click: (g) => {
                  this.St?.(g);
                },
                edit: (g) => (this.Rs(!0), !1),
              }[this.Di](m))));
  }
  Oh(t) {
    [this.o.i, this.Vn?.i].forEach((e) => {
      e && t(e);
    });
  }
  Ol(t) {
    ((this.Di = t), this.kr());
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
  Ns(t) {
    ((this.group = t), ee(this.group.children, this));
  }
  Yn() {
    this._t &&
      (this.ls && this.o.p.i.classList.add(this.ls),
      this.group
        ? setTimeout(() => {
            this.group.children.some((t) => t !== this && t.Mh()) || this.Ml();
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
  Rs(t) {
    if (this.group?.Kn?.()) {
      this.group.Xn?.();
      return;
    }
    this._t ||
      ((this._t = !0),
      this.kr(),
      this.ls && this.o.p.i.classList.remove(this.ls),
      this.Pi && this.o.i.classList.remove("selectable-item"),
      (this.W = F("textarea", {
        className: this.o.i.className,
        ondragstart: (e) => e.stopPropagation(),
        ondragend: (e) => e.stopPropagation(),
        ondrop: (e) => e.stopPropagation(),
        ondragenter: (e) => e.stopPropagation(),
        ondragleave: (e) => e.stopPropagation(),
        ondragover: (e) => e.stopPropagation(),
        onpointerdown: (e) => e.stopPropagation(),
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
      (this.W.onblur = (e) => (this.Yn(), !1)),
      (this.o.p.i.style.color = "transparent"),
      (this.o.i.style.userSelect = "none"),
      this.Vn ||
        ((this.Vn = f({
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
      (this.W.Gl = (e) => {
        this.Dh = !0;
      }),
      (this.W.onkeydown = (e) => {
        (e.stopPropagation(),
          e.isComposing ||
            ((e.key === "Escape" || e.key === "Esc") &&
              (this.Yn(), e.preventDefault()),
            e.key === "Enter" &&
              (!this.cs || ae(e)) &&
              (e.preventDefault(), this.Yn())),
          (this.Dh = !1));
      }),
      (this.W.onkeyup = (e) => {
        e.stopPropagation();
      }),
      (this.W.oninput = (e) => {
        (e?.stopPropagation(), (this.value = this.W.value));
        let s = this.value;
        return (
          (s.length === 0 || (s.length > 0 && In(s.charAt(s.length - 1)))) &&
            (s = s + " "),
          (this.o.p.i.textContent = s),
          this.yr(),
          !1
        );
      }),
      this.W.oninput(void 0),
      t &&
        setTimeout(() => {
          this.W.focus();
        }, 100),
      this._n?.(),
      this.group?.$h());
  }
  yr() {
    let t = 0;
    ((this.W.style.width = `${this.o.i.offsetWidth + t}px`),
      (this.W.style.height = `${this.o.i.offsetHeight}px`),
      (this.W.scrollLeft = 0),
      (this.W.scrollTop = 0));
    for (let e = 0; e < 10 && this.W.offsetHeight < this.W.scrollHeight; e++)
      (t++, (this.W.style.width = `${this.o.i.offsetWidth + t}px`));
    ((this.o.i.scrollLeft = 0), (this.o.i.scrollTop = 0));
  }
  et(t) {
    ((this.value = ii(this.cs ? Ki(t) : Qi(t))),
      this.value
        ? ((this.o.p.i.textContent = this.value), (this.o.i.style.color = ""))
        : ((this.o.p.i.textContent = this.Zs),
          (this.o.i.style.color = "var(--text-color-weak)")),
      (this.o.i.style.userSelect = ""));
  }
  Dl(t) {
    ((this.Zs = t), this.et(this.value));
  }
  us(t, e, s) {
    this.value &&
      pi({ label: this.value, Ro: this.o.p.i, oe: t, ei: e, ii: s });
  }
  destroy() {
    ((this.o.i.onclick = null),
      (this._n = null),
      (this.Qs = null),
      (this.St = null),
      this.W && (this.W.remove(), (this.W.onblur = null), (this.W.Gl = null)));
  }
}
class Os {
  constructor({ view: t, style: e }) {
    ((this.view = t),
      (this.o = f({ style: { display: "none", whiteSpace: "nowrap", ...e } })));
  }
  update() {
    let t = ({ Tr: e, Fm: s, onclick: n, D: r, Ph: o, Lh: a = 15 }) =>
      C(
        {
          className: "flag " + s + (o ? " no-hover" : ""),
          width: `${a}px`,
          height: `${a}px`,
          style: { marginBlock: "-2px -6px" },
          init: (l) => {
            ((l.i.onclick = n),
              r && (this.m ??= []).push(...Dt(l.i, { Yt: r })));
          },
        },
        (l) => `images/${e}${l ? "" : "-dark"}.png`,
      );
    if (
      (this.view.pinned &&
        !this.hs &&
        !this.view.Tt &&
        ((this.hs = t({
          Ph: this.view.H,
          Tr: "pin",
          ...(!this.view.H && {
            D: j(this.view.l) ? w("tabPinFlagHelp") : w("nonTabPinFlagHelp"),
          }),
          onclick: async (e) => {
            if (this.view.H) return;
            let s, n;
            (j(this.view.l)
              ? ((s = this.view.wt.l.id),
                (n = this.view.wt.k
                  .filter((r) => r.l.id === this.view.l.id)
                  .findIndex((r) => r === this.view)))
              : (s = this.view.l.parentIds.find(at)),
              await A.Ir({
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
        ((this.ri = t({
          Tr: this.view.l.done ? "task-ticked" : "task-unticked",
          D: this.view.l.done
            ? w("completedTaskFlagHelp")
            : w("pendingTaskFlagHelp"),
          onclick: async (e) =>
            qt.call(this.view, { task: 1, done: +!this.view.l.done }),
        })),
        this.ai ? this.ai.before(this.ri) : this.o.i.appendChild(this.ri)),
      this.view.l.task)
    ) {
      let e = (o) =>
          `images/${this.view.l.done ? "task-ticked" : "task-unticked"}${o ? "" : "-dark"}.png`,
        s = e(!0),
        n = e(!1),
        r = this.ri.firstElementChild;
      ((r.dataset.lightSrc = s),
        (r.dataset.darkSrc = n),
        (r.draggable = !1),
        (r.src = Ut ? s : n));
    }
    (this.view.l.rating &&
      !this.ai &&
      ((this.ai = t({
        Tr: "star2",
        Lh: 16,
        D: w("starFlagHelp"),
        onclick: async (e) => qt.call(this.view, { rating: 0 }),
      })),
      this.o.i.appendChild(this.ai)),
      this.view.pinned || (this.hs?.remove(), ut?.destroy(), delete this.hs),
      this.view.l.task || (this.ri?.remove(), ut?.destroy(), delete this.ri),
      this.view.l.rating || (this.ai?.remove(), ut?.destroy(), delete this.ai),
      (this.o.i.style.display = this.o.i.children.length ? "block" : "none"));
  }
  destroy() {
    ((this.view = null),
      ut?.destroy(),
      this.hs && (this.hs.onclick = null),
      this.ri && (this.ri.onclick = null),
      this.ai && (this.ai.onclick = null),
      (this.m ?? []).forEach((t) => t.remove()),
      (this.m = null));
  }
}
class $i {
  constructor({
    Li: t = "destination",
    Eh: e,
    label: s,
    jm: n,
    style: r,
    Bm: o,
    Pl: a,
    Js: l,
    Z: u,
    Ks: c,
    Xs: d = !1,
    Ys: y,
    maxHeight: b,
    Ce: p,
    yt: m,
    vr: g,
    Ll: x,
    Fh: T,
    He: h = !1,
    xt: k,
  }) {
    (s || (s = w("destinationColon")),
      (this.ds = e),
      (this.Pl = a),
      (this.Js = l),
      (this.vr = g),
      (this.He = h),
      (this.xt = k),
      (this.Li = t),
      (this.yt = m));
    let $ = new kt();
    this.o = f({
      ...(r && { style: r }),
      children: {
        Cm: f({
          style: { display: "flex", alignItems: "center" },
          children: {
            ...(!n && {
              label: f({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginInlineEnd: "9px",
                },
                p: f({
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
            gt: new Is({
              Z: u,
              maxHeight: b,
              Ce: p,
              Hm: { left: "60px", top: "60px" },
              qm: document.body,
              gh: async () => this.El(await Zs(this.ds.id), this.ds),
              Zn: async () => {
                await this.Fl();
              },
            }),
            jh: new ke({
              dt: d,
              value: y,
              fontSize: "12px",
              label: w("createGroupInsideDestination"),
              D: w("createGroupInsideDestinationHelp"),
              $: { marginInlineStart: "28px" },
              onChange: (L) => c(L),
            }),
          },
        }),
        ...(x?.length && {
          Ll: f({
            style: {
              display: "flex",
              fontSize: "12px",
              marginTop: "8px",
              marginBottom: "8px",
            },
            children: {
              label: f({ style: { whiteSpace: "nowrap" }, textContent: T }),
              eo: f({
                style: { display: "flex", flexWrap: "wrap" },
                children: Object.fromEntries(
                  x.map((L, M) => [
                    `_${M}`,
                    f({
                      style: {
                        marginInlineStart: "16px",
                        cursor: "pointer",
                        whiteSpace: L.label?.length > 50 ? "wrap" : "normal",
                      },
                      className: "recentGroup",
                      textContent: L.label,
                      onclick: async (H) => {
                        await this.Ns(L, !0);
                      },
                      init: (H) =>
                        Dt(H.i, {
                          Yt: async () => {
                            let Q = await Li({
                              h: $,
                              itemId: L.id,
                              fontSize: "12px",
                              Qo: !0,
                              jl: !1,
                            });
                            return f({ style: { padding: "5px 15px" }, p: Q });
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
  async Fl({ _s: t } = {}) {
    await We({
      title: this.vr,
      He: this.He,
      xt: this.xt,
      Li: this.Li,
      yt: this.yt,
      io: async (e) => {
        (this.o.u.gt.Jn(!1), await this.Ns(await rt(e.id), !0));
      },
      _s: t,
    });
  }
  async Ns(t, e) {
    ((this.ds = t),
      this.o.u.gt.yh(this.El(await Zs(this.ds.id), this.ds)),
      e && (await this.Js?.(this.ds)));
  }
  El(t, e) {
    return F("div", {
      style: {
        fontSize: "12px",
        fontWeight: 400,
        display: "flex",
        flex: "1 1 auto",
        ...this.Pl,
      },
      children: {
        ...(G(e) && {
          so: f({
            style: { display: "inline-block" },
            p: C(
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
        label: f({
          style: { display: "inline-block", marginInlineStart: "6px" },
          children: {
            ...(ct(e) && {
              Um: gs({
                color: e.color,
                dimension: "11px",
                $: {
                  flex: "0 0 auto",
                  marginInlineEnd: "6px",
                  position: "relative",
                  top: "1px",
                },
              }),
            }),
            zm: F("span", { textContent: be({ h: t, l: e }) }),
          },
        }),
      },
    });
  }
}
class Er {
  constructor() {}
  async Lt({
    title: t,
    Li: e,
    yt: s,
    Js: n,
    Z: r,
    width: o = "670px",
    He: a,
    xt: l,
    _s: u = !1,
  }) {
    let c = await A.getSettings([
        `${e}GroupChooserShowFoldersOnly`,
        `${e}GroupChooserShowNamedOnly`,
        `${e}GroupChooserRecentsOpen`,
      ]),
      d = await new kt().ke(),
      y = await A.Wm();
    a && (s = !0);
    let b = new _r({
      Et: y,
      h: d,
      yt: s,
      Ar: async (p, m) => {
        p && (await n?.(await d.ht(m)));
      },
      Z: r,
      B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
      Ot: ws(c[`${e}GroupChooserShowNamedOnly`], "true"),
      xt: l,
    });
    (await b.st(),
      (this.o = F("div", {
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
          header: f({
            style: {
              paddingInline: "8px 11px",
              paddingBlock: "4px 0px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            },
            children: {
              title: f({
                style: { flex: "1 1 auto", fontWeight: 600 },
                textContent: t,
              }),
              Nm: f({
                style: {
                  marginInlineStart: "auto",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                },
                children: {
                  ...(!a && {
                    B: new ke({
                      value: c[`${e}GroupChooserShowFoldersOnly`] === "true",
                      fontSize: "12px",
                      label: w("showFoldersOnly"),
                      $: { flex: "0 1 auto" },
                      onChange: async (p) => {
                        ((c[`${e}GroupChooserShowFoldersOnly`] = p
                          ? "true"
                          : "false"),
                          await A.bt(
                            `${e}GroupChooserShowFoldersOnly`,
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
                  Ot: new ke({
                    value: ws(c[`${e}GroupChooserShowNamedOnly`], "true"),
                    fontSize: "12px",
                    label: w("showNamedOnly"),
                    $: { flex: "0 1 auto" },
                    onChange: async (p) => {
                      ((c[`${e}GroupChooserShowNamedOnly`] = p
                        ? "true"
                        : "false"),
                        await A.bt(
                          `${e}GroupChooserShowNamedOnly`,
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
          search: f({
            style: {},
            children: {
              oo: new Zr({
                h: d,
                Et: y,
                B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
                he: async (p) => await n?.(p),
              }),
            },
          }),
          Cl: new Fs({
            label: w("recent"),
            isOpen: c[`${e}GroupChooserRecentsOpen`] === "true",
            Ch: async (p) => {
              await A.bt(`${e}GroupChooserRecentsOpen`, p ? "true" : "false");
            },
            style: { paddingInlineStart: "10px" },
            body: f({
              style: {
                paddingInlineStart: "10px",
                fontSize: "13px",
                paddingTop: "7px",
              },
              children: {
                ql: new Cr({
                  h: d,
                  Et: y,
                  he: async (p) => await n?.(p),
                  B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
                }),
              },
            }),
          }),
          all: f({
            style: { paddingInline: "0px 16px", paddingBlock: "0px 0px" },
            children: { ro: b },
          }),
        },
      })),
      u && this.o.u.oo.focus());
  }
  destroy() {
    (this.o.u.oo?.destroy?.(), this.o.destroy());
  }
}
async function We({
  io: i,
  title: t,
  He: e,
  xt: s,
  Li: n = "destination",
  yt: r = !0,
  _s: o = !1,
}) {
  await Zt(1);
  let a = new Er(),
    l = new It({
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
    title: t,
    He: e,
    width: "",
    xt: s,
    Li: n,
    yt: r,
    Js: async (u) => {
      (await i(u), l.destroy());
    },
    Z: l.o.p.i,
    _s: o,
  }),
    l.Lt({
      content: f({
        style: {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          overflow: "auto",
        },
        children: { info: f({}), Rm: a.o.i },
        destroy: () => a.destroy(),
      }),
    }));
}
class Ot {
  constructor({
    li: t,
    Vt: e = !1,
    te: s = !1,
    ao: n = !1,
    tn: r = !1,
    Nt: o,
    Ft: a,
    A: l,
    Wl: u,
    qe: c,
    ps: d,
    X: y,
    J: b = !1,
    It: p,
    Or: m,
    Nl: g,
    Rl: x,
    dt: T = !0,
    H: h,
    vt: k,
    Mr: $,
    Ks: L,
    ws: M = !0,
    Xs: H = !1,
    xs: Q,
    Ys: lt,
    Mt: U,
    Gr: z,
    Tt: Z,
    Zl: Tt,
    bs: q = !1,
  }) {
    ((this.Mt = U),
      (this.li = t),
      (this.Vt = e),
      (this.ao = n),
      (this.tn = r),
      (this.Nt = o),
      (this.qe = c),
      (this.ps = d),
      (this.Ft = a),
      (this.A = l),
      (this.Wl = u),
      (this.J = b),
      (this.X = y),
      (this.It = p),
      (this.Or = m),
      (this.Nl = g),
      (this.Rl = x),
      (this.dt = T),
      (this.H = h),
      (this.vt = k),
      (this.Mr = $),
      (this.Ks = L),
      (this.Gr = z),
      (this.ws = M),
      (this.Xs = H),
      (this.xs = Q),
      (this.Ys = lt),
      (this.te = s),
      (this.Tt = Z),
      (this.Zl = Tt),
      (this.bs = q),
      (this.k = []),
      (this.o = f({})));
  }
  async Hh() {
    if (!this.J) throw new Error();
    let t = { groupType: void 0, collapsed: void 0, color: void 0 },
      e = await ie(this.X, t);
  }
  Dr(t, e) {
    this.k && this.k.forEach((s) => s.Dr(t, e));
  }
  Ql() {
    return [this.X, ...this.k.flatMap((t) => (t instanceof Ot ? t.Ql() : []))];
  }
  Jl() {
    return this.k.map((t) => t.Jl()).flat();
  }
  async getParent() {
    let t = this.l.parentIds.find(at);
    return await rt(t);
  }
  async qh() {
    return ct(await this.getParent());
  }
  async Uh(t) {
    let e = this.l.parentIds.find(at),
      s = await rt(e),
      n = this.l.parentIds.filter((o) => o === "quickList");
    if (
      (ee(n, t.id),
      JSON.stringify([...n].sort()) !==
        JSON.stringify([...this.l.parentIds].sort()))
    ) {
      if (
        ((this.o.u.destination.o.u.gt.ce.label.i.textContent = V(t)
          ? w("all")
          : t.label || w("untitled")),
        (this.l.parentIds = n),
        this.J)
      ) {
        let o = await ie(this.X, { parentIds: n });
        ((this.Rt = Object.entries(o).length > 0),
          this.It({ de: this.Rt || this.fe.size > 0, pe: !0 }));
      } else throw new Error("not implemented");
      this.Or?.(t, s);
    }
  }
  zh(t) {
    this.o.u.Kl.i.style.display = t ? "flex" : "none";
  }
  us(t, e, s) {
    (this.k.forEach((n) => n.us(t, e, s)),
      this.o.u.en.u.$e.us(t, e, s),
      this.o.u.sn.us(t, e, s));
  }
  async Wh({ jt: t }) {
    ((this.jt = t),
      this.k.forEach((e) => {
        e instanceof Y
          ? e.Wt(t?.has(e.l.id) ?? !0)
          : e instanceof Ot && e.Wh({ jt: t });
      }),
      await this.Xl());
  }
  async Nh() {
    await this.o.u.destination?.Fl({ _s: !0 });
  }
  async st({
    groupId: t,
    jt: e,
    h: s,
    ci: n,
    Se: r,
    pinned: o,
    C: a,
    me: l,
    ut: u,
  }) {
    ((this.m ?? []).forEach((h) => h.remove()),
      (this.m = []),
      (this.pinned = o),
      (this.C = a),
      (this.me = l),
      (this.ut = u),
      (this.jt = e));
    {
      let h = await s.ht(t);
      this.l = { ...h };
      let k = await s.ht(h.parentIds.find(at));
      this.ys = k && G(k) && !this.H;
    }
    if (this.J) {
      this.nn = structuredClone(this.l);
      let h = await rs(this.X),
        k = Object.entries(h),
        $ = !1;
      if (k.length) {
        for (let [L, M] of k) L !== "parentIds" && (this.l[L] = M);
        ((this.Rt = !0), this.It({ de: !0, pe: !1 }));
      }
    }
    let c,
      d = this.l.parentIds.find(at);
    c = await s.ht(d);
    let y = !this.H && !this.C && c && !ct(c),
      b = await Promise.all(this.l.parentIds.map(async (h) => await s.ht(h))),
      p = b.find((h) => !oi(h)),
      m = G(p ?? {}),
      g = b.find($t),
      x = this.l.childIds;
    if (this.jt && this.J)
      throw new Error("childIdsSubset not allowed for uncommitted group views");
    let T = this.o.i;
    ((this.o = f({
      dataset: { id: this.l.id },
      className: [
        "tabGroup",
        ...O(this.l.archived, "archived"),
        ...O(this.l.task && !this.l.done, "task-pending"),
        ...O(this.l.task && this.l.done, "task-done"),
      ].join(" "),
      style: {
        display: this.dt ? "block" : "none",
        marginInline: this.te ? "" : "0px 0px",
        marginBlock: this.te ? "" : `${this.Tt ? 0 : 9}px 4px`,
      },
      children: {
        body: f({
          init: (h) => {
            (this.m ??= []).push(
              J(h.i, "keydown", (k) => {
                let $;
                (this.o.u.Pr && ($ = () => this.o.u.Pr.onclick(k)),
                  this.o.u.Lr && ($ = () => this.o.u.Lr.onclick(k)),
                  k.key === "Enter" &&
                    $ &&
                    document.querySelector(":focus-visible") === h.i &&
                    (k.stopPropagation(), $()));
              }),
            );
          },
          tabIndex: this.Tt ? -1 : 0,
          className: [
            "tabGroupBody",
            ...O(this.Tt, "centerColFolderHeaderGroup"),
          ].join(" "),
          style: {
            ...(this.Tt && { borderRadius: "10px" }),
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingInlineStart: "0px",
            paddingInlineEnd: "0px",
            marginInline: "10px",
            marginBlock: this.te ? "0px 6px" : this.Tt ? "0 10px" : "10px",
            ...(!G(this.l) && { minHeight: "70px" }),
          },
          children: {
            ...(this.ao &&
              !this.bs && {
                Zm: f({
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    marginTop: "10px",
                    marginInlineStart: "14px",
                    marginInlineEnd: "20px",
                    marginBottom: "6px",
                  },
                  children: {
                    body: f({
                      style: {
                        marginInlineStart: "17px",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        rowGap: "9px",
                        flex: "1 1 auto",
                      },
                      children: { lo: f({}) },
                    }),
                  },
                }),
              }),
            ...(this.tn && {
              destination: new $i({
                vr: w("chooseALocation"),
                yt: this.H,
                Li: "destination",
                Ll: (await s.il({ count: 5, B: !1, sl: !0, Ju: !0 })).filter(
                  (h) => h.id !== c.id,
                ),
                Fh: w("recentDestinationsColon"),
                style: {
                  marginInlineStart: "26px",
                  marginInlineEnd: "8px",
                  marginBottom: "4px",
                  marginTop: "10px",
                },
                Eh: c,
                Js: async (h) => await this.Uh(h),
                Ks: (h) => this.Ks(h),
                Xs: this.Xs,
                Ys: this.Ys,
                Z: document,
                maxHeight: "",
              }),
            }),
            ...(this.H && {
              Rh: f({
                style: {
                  display: "none",
                  fontSize: "12px",
                  marginInlineStart: "26px",
                  marginTop: "30px",
                  textAlign: "center",
                },
                textContent: w("noTabsMeetCriteriaUseCheckboxes"),
              }),
            }),
            Kl: f({
              style: {
                display: this.ws ? "flex" : "none",
                alignItems: "flex-start",
                marginInlineStart: "8px",
                marginInlineEnd: `${this.te ? -6 : 6}px`,
              },
              children: {
                en: f({
                  ...(G(this.l) &&
                    !this.C && {
                      init: ({ i: h }) => {
                        (this.m ??= []).push(
                          ...dnd.hr({
                            Ae: this,
                            i: h,
                            dr: (k) => {
                              if (this.Tt) return !1;
                              let $ = dnd.F ? (dnd.ft?.types ?? []) : ["tab"];
                              return !(
                                (dnd.F && !$.length) ||
                                !Ei({
                                  Er: $,
                                  Fr: this.l.groupType,
                                  jr: this.l.id,
                                  Br: this.C,
                                  Cr: "groupView",
                                }) ||
                                Ti(k)
                              );
                            },
                            pr: () => {
                              (ot.remove(),
                                h.appendChild(xt),
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
                              (ot.remove(), xt.remove());
                            },
                            wr: async (k) => {
                              (ot.remove(),
                                xt.remove(),
                                !(this.j || !this.l?.id || !G(this.l)) &&
                                  (await Fi({
                                    e: k,
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
                    K: C(
                      {
                        className: "groupCrossImg",
                        dimension: `${26 / 2}px`,
                        style: {
                          ...(this.Tt && { display: "none" }),
                          width: "19px",
                          height: "19px",
                          top: G(this.l) ? "6px" : "11px",
                        },
                        l: {
                          onclick: async (h) => {
                            await or(this.o.i);
                            let k = [gt({ itemId: this.l.id })],
                              $ = await A.gs(k);
                            (await A.move({ rt: k, O: "trash" }),
                              await A.Oe($));
                          },
                        },
                      },
                      (h) => `images/cross2${h ? "" : "-dark"}.png`,
                    ),
                    ...(G(this.l) && {
                      so: f({
                        style: { display: "inline-block" },
                        p: C(
                          {
                            width: "19px",
                            height: "19px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: "6px",
                              marginInlineEnd: "4px",
                              position: "relative",
                              top: `${bt(this.l) ? 7 : 8}px`,
                            },
                          },
                          (h) =>
                            `images/${bt(this.l) ? "trash" : "folder"}${h ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    ...(zt(this.l) && {
                      Zh: f({
                        style: {
                          display: this.l.locked ? "inline-block" : "none",
                        },
                        p: C(
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
                            init: (h) => {
                              (this.m ??= []).push(
                                ...Dt(h.i, { Yt: w("lockedGroupUnlockHelp") }),
                              );
                            },
                          },
                          (h) => `images/lock${h ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    $e: new re({
                      ...(G(this.l) && bt(this.l) && { gr: !0 }),
                      ...(G(this.l) && { Zs: mi({ h: s, l: this.l }) }),
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        marginInlineEnd: "10px",
                        marginInlineStart: "5px",
                        marginTop: G(this.l) ? "0" : "5px",
                        flex: "1 1 auto",
                      },
                      value: this.l.label,
                      rs: "tabGroupLabelText",
                      Gi: w("title"),
                      ...(V(this.l) && {
                        Di: "click",
                        St: (h) => this.on.Sl(),
                      }),
                    }),
                  },
                }),
                Qm: f({
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    ...(this.Tt &&
                      !V(this.l) &&
                      !bt(this.l) && { marginTop: "-13px" }),
                  },
                  children: {
                    ...(!V(this.l) &&
                      !bt(this.l) && {
                        Jm: f({
                          style: {
                            display: "flex",
                            marginInlineEnd: "15px",
                            marginBlockStart: G(this.l) ? "3px" : "8px",
                          },
                          children: {
                            ...(!this.J && {
                              co: f({
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
                              flags: new Os({
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
                    controls: f({
                      style: {
                        marginTop: `${V(this.l) || bt(this.l) ? 10 : 0}px`,
                        marginInlineEnd: "7px",
                        textAlign: "end",
                        ...(this.J && { marginTop: "6px" }),
                      },
                      children: {
                        ...(this.Tt &&
                          !bt(this.l) &&
                          V(this.l) && {
                            Jh: new Mt({
                              label: w("storeAllOpenWindowsHere"),
                              icon: { I: "close", dimension: "12px" },
                              onclick: async (h) => await A.Kh(),
                            }),
                          }),
                        ...(this.Tt &&
                          !V(this.l) &&
                          !bt(this.l) && {
                            Xh: new Mt({
                              label: w("openParentFolder"),
                              icon: {
                                I: "nav-to-parent",
                                dimension: "12px",
                                ee: !K(),
                              },
                              onclick: async (h) => {
                                await navigateToItem({
                                  itemId: this.l.parentIds.find(at),
                                });
                              },
                            }),
                          }),
                        ...(this.Vt &&
                          !G(this.l) &&
                          !this.C && {
                            Pr: new Mt({
                              label: w("restoreAll"),
                              icon: { I: "open", dimension: "13px" },
                              onclick: async (h) => {
                                h.stopPropagation();
                                let k,
                                  $ = !1;
                                if (this.H && !Ie(h))
                                  if (this.vt) {
                                    let L = await getActiveTabInCurrentWindow();
                                    ((k = zi(L?.url)
                                      ? "currentWindow"
                                      : "replaceCurrentTab"),
                                      ($ = !0));
                                  } else $ = !0;
                                if (
                                  (Je(h) &&
                                    (h.preventDefault(), h.stopPropagation()),
                                  !this.H &&
                                    !Ie(h) &&
                                    !(await A._e(
                                      "autoActionOnOpenOptionChosen",
                                    )))
                                )
                                  try {
                                    await displayAutoActionOnOpenOptionModal();
                                  } catch {
                                    return;
                                  }
                                await Rs({
                                  id: this.l.id,
                                  ...(k && { zr: k }),
                                  Wr: !1,
                                  Nr: (await chrome.windows.getCurrent()).id,
                                  Yl: Je(h),
                                  Rr: !this.C && !this.ut && !Ie(h),
                                  _l: Ze(h),
                                  Vl: ae(h),
                                  tc: $ && !ae(h),
                                  Yh: !this.H && !ae(h),
                                });
                              },
                            }),
                          }),
                        ...(G(this.l) &&
                          !this.Tt && {
                            Lr: new Mt({
                              label: w("openFolder"),
                              icon: {
                                I: "right-arrow",
                                dimension: "12px",
                                ee: !K(),
                              },
                              onclick: async () => {
                                this.H
                                  ? (await A.ec({ itemId: this.l.id }),
                                    window.close())
                                  : await navigateToItem({ itemId: this.l.id });
                              },
                            }),
                          }),
                        ...(!bt(this.l) &&
                          !this.C && {
                            Ei: new Mt({
                              label: w("moreEllipsis"),
                              icon: {
                                I: "vertical-ellipses",
                                dimension: "12px",
                              },
                              er: async (h) =>
                                F("div", {
                                  init: (k) =>
                                    (k.i.onpointerover = ($) =>
                                      $.stopPropagation()),
                                  style: {
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    paddingInline: "8px",
                                    paddingBlock: "8px 8px",
                                    lineHeight: "1.5em",
                                    maxWidth: "300px",
                                  },
                                  children: await qi({
                                    view: this,
                                    H: this.H,
                                    Vt: this.Vt,
                                    me: this.me,
                                    ic: y,
                                    vt: this.vt,
                                    onChange: async (k) => {
                                      if (this.J) {
                                        (Object.hasOwn(k, "isTabGroup") &&
                                          (this.Mr(k.isTabGroup),
                                          (this.l.groupType = k.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          delete k.isTabGroup,
                                          (k.groupType = this.l.groupType)),
                                          k.groupType &&
                                            k.groupType === this.nn.groupType &&
                                            (k.groupType = void 0),
                                          (k.collapsed ?? !1) ===
                                            (this.nn.collapsed ?? !1) &&
                                            (k.collapsed = void 0),
                                          Object.assign(this.l, k));
                                        let $ = await ie(this.X, k);
                                        ((this.Rt =
                                          Object.entries($).length > 0),
                                          this.It({
                                            de: this.Rt || this.fe.size > 0,
                                            pe: !0,
                                          }));
                                      } else
                                        (Object.hasOwn(k, "isTabGroup") &&
                                          ((k.groupType = k.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          k.groupType === "tabGroup" &&
                                            (k.pinnedCount = 0),
                                          delete k.isTabGroup),
                                          Object.keys(k).length > 0 &&
                                            (await A.Fi(this.l.id, k)));
                                    },
                                    Zr: () => dt.rn?.(),
                                    sc: (k, $) =>
                                      h(
                                        f({
                                          init: (L) =>
                                            (L.i.onpointerover = (M) =>
                                              M.stopPropagation()),
                                          p: k,
                                        }),
                                        $,
                                      ),
                                    xs: this.xs ?? m,
                                    nc: await A.ks("copyToClipboardFormat"),
                                  }),
                                }),
                            }),
                          }),
                        ...(this.C &&
                          !bt(this.l) && {
                            Qr: new Mt({
                              label: w("delete"),
                              ni: !0,
                              icon: { I: "cross-action", dimension: "10px" },
                              onclick: async () => {
                                let h = [gt({ itemId: this.l.id })];
                                await A._h({ rt: h });
                              },
                            }),
                            Jr: new Mt({
                              label: w("moveBack"),
                              icon: { I: "move", dimension: "14px" },
                              onclick: async (h, k) => Ms(this.l),
                            }),
                          }),
                        ...(this.C &&
                          bt(this.l) && {
                            Vh: new Mt({
                              label: w("deleteAllTrash"),
                              ni: !0,
                              icon: { I: "cross-action", dimension: "10px" },
                              onclick: async () => {
                                (await A.td(),
                                  await oneTabPage.an.Km({
                                    params: oneTabPage.an.uo,
                                  }));
                              },
                            }),
                          }),
                      },
                    }),
                  },
                }),
              },
            }),
            ...((this.Vt || this.me || y || this.bs || this.ws) &&
              !G(this.l) && {
                Zt: xe({
                  marginTop: "0px",
                  marginBottom: "4px",
                  marginInlineStart: "24px",
                  marginInlineEnd: "14px",
                }),
              }),
            sn: new re({
              style: {
                marginTop: G(this.l) ? 0 : "4px",
                marginBottom: "8px",
                marginInlineStart: G(this.l)
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
              Gi: w("notes"),
              cs: !0,
            }),
            hi: f({ style: { display: "none" } }),
            ...(!G(this.l) && {
              Me: f({
                className: "childContainer",
                style: {
                  paddingInlineStart: "1px",
                  paddingInlineEnd: "1px",
                  paddingTop: "4px",
                  paddingBottom: "12px",
                },
                init: (h) => {
                  let k = Br({
                    we: this.l.groupType,
                    Me: h,
                    k: this.k,
                    ed: () => this.l.id,
                    sd: () => this.Ft && !this.ut,
                    nd: () => this.C,
                  });
                  (this.m ??= []).push(...k);
                },
              }).i,
            }),
            ho: f({
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
              init: (h) => {
                (this.m ??= []).push(J(h.i, "click", (k) => this.Wt(!0, !0)));
              },
            }),
            ...(this.bs && {
              bs: f({
                style: {
                  display: "flex",
                  marginInlineStart: G(this.l) ? "59px" : "32px",
                  marginInlineEnd: "22px",
                  marginBottom: "7px",
                  gap: "24px",
                  color: "var(--text-color-weak)",
                },
                children: { lo: f({}) },
              }),
            }),
          },
        }),
      },
    })),
      (this.m ??= []).push(
        ...dnd.ir({
          nr: {},
          sr: this.o.i,
          rr: this.o.i,
          ur: this.o.i,
          ar: (h) => {
            ((dnd.ft.types = [
              this.l.groupType,
              ...O(this.ut, "locked"),
              ...O(this.C, "trash"),
              ...O(!this.l.label, "untitled"),
            ]),
              (dnd.ft.Ae = { itemsMeta: [gt({ itemId: this.l.id })] }),
              this.o.u.K && (this.o.u.K.style.visibility = "hidden"),
              Pi({ e: h, Kr: "dragged-group", ji: [this.o.i] }));
          },
          lr: () => Xe(),
          cr: () => !this.Ft,
        }),
      ),
      this.oc(this.l.locked || this.ut, !0),
      this.rc(),
      this.o.u.flags?.update(),
      this.ac(),
      this.o.u.en &&
        ((this.m ??= []).push(
          Oe(this.o.u.en.i, (h) => {
            !D.Xr &&
              !this.on?._t &&
              this.qe &&
              !this.ut &&
              (this.o.u.K.style.visibility = "visible");
          }),
        ),
        (this.m ??= []).push(
          Me(this.o.u.en.i, (h) => {
            this.qe && (this.o.u.K.style.visibility = "hidden");
          }),
        )),
      (this.$e = this.o.u.en.u.$e),
      (this.Y = this.o.u.sn),
      (this.on = new vs({
        children: [...O(!V(this.l), this.$e), this.Y],
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
          let h = this.l.label,
            k = structuredClone(this.l.notes);
          ((this.l.label = this.$e.value),
            this.Y.value
              ? (this.l.notes || (this.l.notes = {}),
                (this.l.notes.text = this.Y.value))
              : this.l.notes && delete this.l.notes.text,
            (this.o.u.sn.i.style.display = this.l.notes?.text
              ? "block"
              : "none"));
          let $ = {
            ...(h !== this.l.label && { label: this.l.label }),
            ...(!Be(k, this.l.notes) && { notes: this.l.notes }),
          };
          if (Object.entries($).length > 0)
            if (this.J) {
              ($.label === "" && ($.label = void 0),
                ["", void 0].includes($.notes?.text) && ($.notes = void 0));
              let L = await ie(this.X, $);
              ((this.Rt = Object.entries(L).length > 0),
                this.It({ de: this.Rt || this.fe.size > 0, pe: !0 }));
            } else await A.Fi(this.l.id, $);
        },
      })),
      this.ln(),
      (this.fe = new Set()),
      await s.th(x),
      ss(this.k),
      await this.sync({ h: s, ci: n, Se: r }),
      this.A &&
        this.J &&
        (this.m ??= []).push(
          new fs({
            listener: ({ count: h, nt: k }) => this.Yr(),
            Ka: (h) => this.A.lc(h),
            Bs: (h) => this.A.od(h),
          }),
        ),
      T?.parentNode && T.replaceWith(this.o.i),
      this.J || (await this.Xl()));
  }
  Wt(t, e) {
    (e && delete this.jt,
      (this.o.u.ho.i.style.display = t ? "none" : "block"),
      (this.dt = t),
      (this.o.i.style.display = t ? "block" : "none"),
      this.k.forEach((s) => s.Wt(t, e)));
  }
  ln() {
    if (!this.o.u.co) return;
    let t = new Date(this.l.createDate),
      e = (new Date().getTime() - t) / 1e3,
      s = t.toLocaleDateString(void 0, { cc: "short" }),
      n = t.toLocaleTimeString(void 0, { rd: "short" });
    this.o.u.co.i.textContent = `${s} ${n} - ${es(t)}`;
    let r = 10;
    (e > 60 && (r = 15),
      e > 300 && (r = 60),
      e > 3600 && (r = 900),
      e > 3600 * 24 * 7 && (r = 3600),
      this.Ue && clearTimeout(this.Ue),
      (this.Ue = setTimeout(() => this.ln(), r * 1e3)));
  }
  rc() {
    if (
      (this.o.u.hi && (this.o.u.hi.cn?.destroy(), this.o.u.hi._r?.destroy()),
      Qn(this.l))
    ) {
      let t = f({
        style: {
          display: "flex",
          alignItems: "center",
          marginInline: `27px ${this.te ? 6 : 18}px`,
          marginBlockEnd: "10px",
        },
        children: {
          icon: new oe(
            { dimension: "12px", style: { flex: "0 0 auto" } },
            (e) => `images/share${e ? "" : "-dark"}.png`,
          ),
          label: f({
            style: {
              marginInlineStart: "8px",
              marginInlineEnd: "8px",
              fontSize: "11px",
            },
            textContent:
              w("sharedExpiresColon") +
              " " +
              Hn(new Date(this.l.shareExpiryDate)),
          }),
          cn: new Mt({
            gl: !0,
            label: w("copySharedPageUrl"),
            onclick: async () => {
              let e = await A.ht(this.l.id),
                s = To(e.shareId);
              (await navigator.clipboard.writeText(s),
                t.u.cn.Xt(w("copiedToClipboard")),
                setTimeout(() => t.u.cn.Xt(w("copySharedPageUrl")), 3e3));
            },
          }),
          _r: new Mt({
            gl: !0,
            label: w("modifySharing"),
            onclick: async () => await showSharingModal(this.l.id),
          }),
        },
      });
      (this.o.u.hi.i.replaceWith(t.i), (this.o.u.hi = t));
    } else this.o.u.hi.i.style.display = "none";
  }
  Yr() {
    if (G(this.l)) return;
    let t;
    this.A && this.A.count()
      ? this.l.groupType === "tabGroup"
        ? (t = this.k.filter(
            (n) => n instanceof Y && this.A.nt.some((r) => r.At === n.At),
          ).length)
        : (t = this.A.nt.length)
      : (t = this.Xi());
    let e =
        t === 0 &&
        this.H &&
        !this.vt &&
        !this.te &&
        !this.k.map((n) => n instanceof Ot).length,
      s = e ? "" : di(t);
    (this.$e.Dl(s),
      rr(this.o.u.Rh, (n) => {
        (this.o.u.destination &&
          (this.o.u.destination.o.i.style.display = e ? "none" : "block"),
          (n.i.style.display = e ? "block" : "none"));
      }),
      this.zh(!e && this.ws),
      this.o.u.Zt &&
        (this.o.u.Zt.i.style.display = !e && this.ws ? "flex" : "none"));
  }
  Xi() {
    return this.k
      .map((t) => (t instanceof Y ? 1 : t.Xi()))
      .reduce((t, e) => t + e, 0);
  }
  async ad(t) {
    let e = this.k.filter((s) => s.l.id === t.l.id).findIndex((s) => s === t);
    (await A.move({
      rt: [gt({ itemId: t.l.id, Fe: this.l.id, zt: e })],
      O: "trash",
    }),
      await A.Oe([this.l.id]));
  }
  async ld({ ud: t, Xm: e = !1, hd: s = [] }) {
    if (!this.J) throw new Error("Already committed");
    let n = [],
      r = [],
      o,
      a,
      l = [],
      u = new Set(s),
      c = new Map(),
      d = new Map(),
      y = (h) => (d.has(h) || d.set(h, h.fo(s)), d.get(h)),
      b = y(this),
      p =
        !t && (b.length || this.k.some((h) => h instanceof Ot && y(h).length)),
      m = 0,
      g = this.k.flatMap((h, k) => {
        if (h instanceof Y) {
          let $ = O(h.isSelected() && !u.has(h.l.id), h);
          return ($t(this.l) && $ && k < this.l.pinnedCount && m++, $);
        } else if (h instanceof Ot) {
          let $ = y(h);
          return e ? $ : O($.length, h);
        } else throw new Error("childView instance type unrecognized");
      });
    ((o = g.map((h) => h.l.id)),
      (a = g.map((h) => ({ itemId: h.l.id, At: h.At }))),
      p &&
        n.push({
          ...this.l,
          childIds: o,
          ...($t(this.l) && {
            pinnedCount: (
              await Promise.all(b.map((h) => h.At).map(getTabById))
            ).filter((h) => h?.pinned).length,
          }),
        }));
    let x = (h, k, $) => {
      let L = c.get(h.l.id);
      (L || ((L = { ...h.l }), r.push(L), c.set(L.id, L)),
        (L.parentIds = ee(L.parentIds.filter(Jn(k)), $)));
    };
    for (let h of this.k) {
      let k = h instanceof Ot ? y(h) : void 0;
      if (h instanceof Ot && k.length) {
        if (!e) {
          let $ = {
            ...h.l,
            childIds: k.map((M) => M.l.id),
            ...(t && {
              parentIds: ee(
                h.l.parentIds.filter((M) => M === "quickList"),
                t,
              ),
            }),
          };
          n.push($);
          let L = { Qt: $, dd: k.map((M) => ({ itemId: M.l.id, At: M.At })) };
          ((L.di = (await chrome.tabs.get(L.dd[0].At))?.groupId), l.push(L));
        }
        k.forEach(($) => {
          x($, h.l.id, e ? (t ?? this.l.id) : h.l.id);
        });
      } else
        h instanceof Y &&
          h.isSelected() &&
          !u.has(h.l.id) &&
          x(h, this.l.id, t ?? this.l.id);
    }
    let T = new Set(["quickList", ...n.map((h) => h.id), ...O(t)]);
    return (
      r.forEach((h) => (h.parentIds = h.parentIds.filter((k) => T.has(k)))),
      r.forEach((h) => delete h.pinned),
      { fd: n, pd: r, md: o, wd: m, xd: a, bd: l }
    );
  }
  yd(t = []) {
    return [...this.fo(t), ...this.Vr().flatMap((e) => e.fo(t))];
  }
  uc() {
    return (
      this.k.some((t) => t instanceof Y && t.Gt()) ||
      this.Vr().some((t) => t.uc())
    );
  }
  fo(t = []) {
    let e = new Set(t);
    return this.k.filter(
      (s) => s instanceof Y && s.isSelected() && !e.has(s.l.id),
    );
  }
  Vr() {
    return this.k.filter((t) => t instanceof Ot);
  }
  gd() {
    return this.k.filter((t) => t instanceof Y);
  }
  po(t = []) {
    return [
      ...this.fo(t).map((e) => e.At),
      ...this.k.filter((e) => e instanceof Ot).flatMap((e) => e.po(t)),
    ];
  }
  hc() {
    return this.o.u.Kl.flags.hc();
  }
  kd() {
    return this.o.u.jh;
  }
  async Ge(t) {
    if (!this.j) {
      if (
        (vt(t.targetParentGroupTypeUpdated, (e) => this.ze(e)),
        vt(
          t.targetParentId === this.l.id && t.targetParentGroupTypeUpdated,
          (e) => this.ze(e),
        ),
        t.type === "update" && this.l.id === t.itemId)
      ) {
        if (
          (ht(t, "label", (e) => this.mo(e)),
          ht(t, "notes", (e) => this.wo(e)),
          ht(t, "rating", (e) => this.fi(e)),
          ht(t, "archived", (e) => this.Bi(e)),
          ht(t, "color", (e) => this.setColor(e)),
          ht(t, "collapsed", (e) => this.Td(e)),
          ht(t, "openType", (e) => this.Id(e)),
          ht(t, "groupType", (e) => this.ze(e)),
          ht(t, "locked", (e) => this.vd(e)),
          ht(t, "pinnedCount", (e) => (this.l.pinnedCount = e)),
          ye.some((e) => t.propChanges[e]))
        ) {
          let e = Object.fromEntries(
            Object.entries(t.propChanges)
              .filter(([s, n]) => ye.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          this.Ci(e);
        }
        if (xs.some((e) => t.propChanges[e])) {
          let e = Object.fromEntries(
            Object.entries(t.propChanges)
              .filter(([s, n]) => xs.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          (Object.assign(this.l, e), this.rc());
        }
      } else if (t.type === "store" && this.l.id === t.targetParentId) {
        let e = await rt(this.l.id);
        ((this.l.pinnedCount = e.pinnedCount), await this.sync());
      } else if (t.type === "move") {
        let e = t.itemsMeta.find(
          (s) => s.itemId === this.l.id && s.groupTypeUpdated,
        );
        if (e) {
          let s = e.groupTypeUpdated;
          this.ze(s);
        }
        Ht(this.l.id, [
          ...t.itemsMeta.flatMap((s) => [s.sourceParentId, s.itemId]),
          t.targetParentId,
        ]) && (await this.sync());
      } else
        t.type === "copy" && t.targetParentId === this.l.id
          ? await this.sync()
          : (t.type === "sort" && t.parentId === this.l.id) ||
              this.l.parentIds.includes(t.parentId)
            ? await this.sync()
            : t.type === "pin" &&
              t.parentId === this.l.id &&
              (await this.sync());
      this.k?.forEach((e) => e.Ge(t));
    }
  }
  oc(t, e) {
    ((this.ut = t),
      vt(
        this.o.u.Zh,
        (s) => (s.i.style.display = this.l.locked ? "inline-block" : "none"),
      ),
      e || (async () => await this.sync({ Hi: !0 }))());
  }
  vd(t) {
    ((this.l.locked = t), this.oc(t));
  }
  mo(t) {
    ((this.l.label = t), this.$e.et(t));
  }
  wo(t) {
    ((this.l.notes = t),
      (this.o.u.sn.i.style.display = this.l.notes?.text ? "block" : "none"),
      this.Y.et(this.l.notes?.text));
  }
  fi(t) {
    ((this.l.rating = t), this.o.u.flags?.update());
  }
  un(t) {
    ((this.pinned = t), this.o.u.flags?.update());
  }
  Bi(t) {
    ((this.l.archived = +t),
      this.o.i.classList[t ? "add" : "remove"]("archived"));
  }
  Ci(t) {
    (Object.assign(this.l, t),
      ["task-pending", "task-done"].forEach((e) =>
        this.o.i.classList.remove(e),
      ),
      this.l.task && !this.l.done && this.o.i.classList.add("task-pending"),
      this.l.task && this.l.done && this.o.i.classList.add("task-done"),
      this.o.u.flags?.update());
  }
  setColor(t) {
    ((this.l.color = t), this.dc());
  }
  Td(t) {
    this.l.collapsed = t;
  }
  Id(t) {
    this.l.openType = t;
  }
  ze(t) {
    if (((this.l.groupType = t), this.dc(), !this.J)) {
      let e = this.k.filter((s) => s instanceof Y);
      (async () => {
        let s = new kt();
        await s.Te({ groupId: this.l.id });
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          await this.fc({ item: { ...r.l }, view: r, h: s, index: n });
        }
      })();
    }
    this.l.color || this.setColor(me);
  }
  mc() {
    let t = this.k.filter((s) => s instanceof Y && !s.tr()).length,
      e = this.k
        .filter((s) => s instanceof Ot)
        .map((s) => s.mc())
        .reduce((s, n) => s + n, 0);
    return t + e;
  }
  wc() {
    let t = this.k.filter((s) => s instanceof Y && s.tr()).length,
      e = this.k
        .filter((s) => s instanceof Ot)
        .map((s) => s.wc())
        .reduce((s, n) => s + n, 0);
    return t + e;
  }
  async Xl() {
    let t = this.mc(),
      e = this.wc();
    this.o.u.ho.i.style.display = t ? "block" : "none";
    let s;
    (e
      ? (s = Ft("seeOtherTabsInThisGroup", t))
      : (s = Ft("seeTabsInThisGroup", t)),
      (this.o.u.ho.i.textContent = s),
      (this.o.u.ho.i.style.paddingInlineStart = e ? "52px" : "32px"));
  }
  De({ pi: t }) {
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
      (this.m ?? []).forEach((e) => e.remove()),
      (this.m = null),
      this.Ue !== void 0 && clearTimeout(this.Ue),
      (this.fe = null),
      t || this.o.i.remove(),
      this.Ts?.destroy(),
      this.$e?.destroy(),
      this.Y?.destroy(),
      (this.$e = null),
      (this.Y = null),
      this.k.forEach((e) => e.De({ pi: t })),
      (this.k = null),
      (this.on = null),
      (this.o.u = null),
      (this.o = null),
      this.on?.destroy());
  }
  Ad({ item: t, ci: e, index: s, di: n }) {
    let r = this.jt && this.jt.has(t.id),
      o;
    return (
      j(t)
        ? (o = new Y({
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
                tabIndex: this.k.filter((u) => u instanceof Y).indexOf(l),
              }),
            ...(this.ps && { fn: async (a) => await this.ad(o) }),
            At: e?.[s],
            A: this.A,
            xo: this.li,
            It: ({ de: a, pe: l, X: u, Ui: c }) => {
              (a ? this.fe.add(t.id) : this.fe.delete(t.id),
                this.It({
                  de: this.Rt || this.fe.size > 0,
                  pe: l,
                  X: u,
                  Ui: c,
                }));
            },
            We: async (a, l) => {
              let u = this.k
                  .filter((d) => d.l.id === o.l.id)
                  .findIndex((d) => d === o),
                c = [gt({ itemId: o.l.id, Fe: this.l.id, zt: u })];
              await We({
                title: w("chooseLocationToRestoreTo"),
                He: G(o.l),
                io: async (d) => {
                  await Ke({ rt: c, O: d.id });
                },
              });
            },
            Ne: async () => {
              let a = this.k
                  .filter((u) => u.l.id === o.l.id)
                  .findIndex((u) => u === o),
                l = [gt({ itemId: o.l.id, Fe: this.l.id, zt: a })];
              await A._h({ rt: l });
            },
          }))
        : _(t) &&
          (o = new Ot({
            Gr: () => this.Yr(),
            Mt: this.Mt,
            te: !0,
            H: this.H,
            vt: this.vt,
            dt: this.jt && (r || t.childIds.some((a) => this.jt.has(a))),
            Ft: this.Ft,
            Nt: ({ e: a, qi: l, dn: u }) =>
              this.Nt({
                e: a,
                qi: l,
                dn: u,
                tabIndex: o.k.filter((c) => c instanceof Y).indexOf(l),
              }),
            Vt: this.Vt && !this.C,
            qe: this.qe && !this.C,
            ps: this.ps && !this.C,
            A: this.A,
            ...(this.J && {
              J: this.J,
              X: `uncommitted:tabGroup-${n}`,
              It: ({ de: a, pe: l, X: u, Ui: c }) => {
                (a ? this.fe.add(t.id) : this.fe.delete(t.id),
                  this.It({
                    de: this.Rt || this.fe.size > 0,
                    pe: l,
                    X: u,
                    Ui: c,
                  }));
              },
            }),
          })),
      o
    );
  }
  async fc({ item: t, view: e, h: s, index: n, ci: r, Se: o }) {
    j(t)
      ? (await e.st({
          ut: this.ut,
          ta: t,
          pinned: n < (this.l.pinnedCount ?? 0),
          xe: this.l.id,
          wt: this,
          ys: $t(this.l) && this.Rl,
          h: s,
        }),
        e.A && o?.has(e.At) && e.lt(!0))
      : _(t) &&
        (await e.st({
          ut: this.ut,
          C: this.C,
          me: this.me,
          groupId: t.id,
          pinned: n < (this.l.pinnedCount ?? 0),
          jt: this.jt,
          h: s,
          ci: r?.[n],
          Se: o,
        }));
  }
  async sync({ h: t, ci: e, Se: s, Hi: n } = {}) {
    if (!this.j) {
      if (((t ??= new kt()), !G(this.l))) {
        let r;
        e?.length && (r = (await chrome.tabs.get(e.flat()[0])).groupId);
        let o = await t.ht(this.l.id);
        ((this.l.parentIds = o.parentIds), (this.l.childIds = o.childIds));
        let a = o.pinnedCount ?? 0;
        ((this.l.pinnedCount = a),
          await Cs({
            Hi: n,
            ea: this.l.childIds.map((l, u) => ({ id: l, index: u })),
            Me: this.o.u.Me,
            views: this.k,
            bc: (l) => l.un?.(l.index < a),
            ia: (l) => l.l.id,
            pn: (l) => l.o?.i,
            sa: async (l, u) => {
              let c = await t.ht(l);
              if (!c) return;
              let d = this.Ad({ item: c, ci: e, index: u, di: r });
              return (
                await this.fc({
                  item: c,
                  view: d,
                  h: t,
                  index: u,
                  ci: e,
                  Se: s,
                }),
                d
              );
            },
          }),
          this.Yr());
      }
      (await this.$d(t), this.Gr?.());
    }
  }
  async $d(t) {
    if (!this.j && this.o?.u.lo) {
      let e = (
        await Li({
          h: t,
          itemId: this.l.id,
          ...(this.bs && { fontSize: "12px" }),
        })
      ).i;
      if (this.j) return;
      (this.o.u.lo.i.replaceWith(e), (this.o.u.lo.i = e));
    }
  }
  yc() {
    this.k.filter((t) => t instanceof Y).forEach((t) => t.lt(!0));
  }
  gc(t) {
    let e = !1;
    this.k
      .filter((s) =>
        s instanceof Y ? (s === t && (e = !0), !e || s === t) : !1,
      )
      .forEach((s) => s.lt(!0));
  }
  kc(t) {
    let e = !1;
    this.k.filter((s) => (s === t && (e = !0), e)).forEach((s) => s.lt(!0));
  }
  Tc(t) {
    (this.k
      .filter((e) => e instanceof Y)
      .filter((e) => e !== t)
      .forEach((e) => e.lt(!0)),
      t.lt(!1));
  }
  Ic() {
    this.k.filter((t) => t instanceof Y).forEach((t) => t.lt(!t.Gt()));
  }
  vc() {
    this.A.reset();
  }
  na(t, e) {
    let s = this.k.filter((n) => n instanceof Y);
    if (s.includes(t)) {
      let n = !1,
        r = !1;
      s.forEach((o) => {
        let a = !1;
        (!n && (o === t || o === e) && ((n = !0), (a = !0)),
          n && !r && (o.oa || o.lt(!0)),
          !a && n && (o === t || o === e) && (r = !0));
      });
    } else return;
  }
  Ac() {
    return this.k.filter((t) => t instanceof Y && t.Gt()).length;
  }
  ra() {
    return this.gd().length;
  }
  $c(t) {
    return this.k.filter((e) => e instanceof Y)[0] !== t;
  }
  Sc(t) {
    return this.k.filter((e) => e instanceof Y).at(-1) !== t;
  }
  ac() {
    this.Ts ||
      !ct(this.l) ||
      ((this.Ts = new ki({
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
        ...Dt(this.Ts.o.i, { Yt: w("tabGroupIndicatorTooltipHelp") }),
      ),
      (this.bo = f({ children: { Ts: this.Ts } })),
      this.o.u.$e.o.i.before(this.bo.i));
  }
  dc() {
    ct(this.l)
      ? (this.ac(),
        (this.bo.i.style.display = "inline-block"),
        this.Ts.setColor(this.l.color))
      : this.bo && (this.bo.i.style.display = "none");
  }
}
async function qt(i) {
  if (
    (i.task && this.l.archived && (i.archived = 0),
    fi(i, "archived", (t) => this.Bi(t)),
    fi(i, "rating", (t) => this.fi?.(t)),
    fi(i, "task", (t) => {
      this.Ci({ task: +t, done: i.done });
      let e = t,
        s = i.done;
      (e || ((i.pendingDate = void 0), (i.doneDate = void 0)),
        e && !s && ((i.pendingDate = +new Date()), (i.doneDate = void 0)),
        e && s && (i.doneDate = +new Date()));
    }),
    this.J)
  ) {
    (Object.assign(this.l, i),
      i.parentIds &&
        Un(i.parentIds, this.nn.parentIds) &&
        (i.parentIds = void 0),
      i?.rating === 0 && (i.rating = void 0),
      i?.archived === 0 && (i.archived = void 0),
      i?.task === 0 && (i?.done === 0 && (i.done = void 0), (i.task = void 0)));
    let t = await ie(this.X, i);
    ((this.Rt = Object.entries(t).length > 0),
      this.It({
        de: this.Rt || this.fe?.size,
        pe: !0,
        X: this.X,
        Ui: this.yo,
      }));
  } else {
    if (Object.hasOwn(i, "pinned")) {
      let t, e;
      (j(this.l)
        ? ((e = this.xe),
          (t = this.wt.k
            .filter((s) => s instanceof Y && this.l.id === s.l?.id)
            .findIndex((s) => s === this)))
        : (e = this.l.parentIds.find(at)),
        await A.Ir({ itemId: this.l.id, parentId: e, zt: t, value: i.pinned }),
        delete i.pinned);
    }
    (Object.assign(this.l, i),
      Object.keys(i).length && (await A.Fi(this.l.id, i)));
  }
}
function Br({ Me: i, k: t, ed: e, sd: s, we: n, nd: r, Oc: o = !1 }) {
  let a = [];
  return (
    a.push(
      ...dnd.hr({
        Ae: i,
        i: i.i,
        dr: (l) => {
          if (!i?.i?.isConnected) return !1;
          let u = e();
          if (!u || !s()) return !1;
          let c = dnd.F ? (dnd.ft?.types ?? []) : ["tab"];
          return !(
            (dnd.F && !c.length) ||
            !Ei({ Er: c, Fr: n, jr: u, Br: r(), Cr: "groupView" }) ||
            Ti(l)
          );
        },
        pr: (l) => {
          Hr({ e: l, pn: (u) => u?.o?.i, k: t, Me: i, Oc: o });
        },
        mr: () => {
          ot.remove();
        },
        wr: async (l) => {
          if (!i?.i?.isConnected) return;
          let u = e();
          if (u && i.i.contains(ot))
            try {
              await Fi({
                e: l,
                Hr: () => {
                  let c = [...i.i.children],
                    d = c.findIndex((T) => T === ot);
                  if (d < 0) {
                    let T = t.filter((h) => h?.o?.i?.parentElement === i.i);
                    return T.length ? T.at(-1)?.index + 1 : void 0;
                  }
                  let y = new Map();
                  t.forEach((T) => {
                    let h = T?.o?.i;
                    h && h.parentElement === i.i && !y.has(h) && y.set(h, T);
                  });
                  let b = c
                      .filter((T) => T !== ot)
                      .map((T) => y.get(T))
                      .filter(Boolean),
                    p = b[d]?.index;
                  (d === b.length && b.length && (p = b[d - 1]?.index + 1),
                    p === void 0 &&
                      d > b.length &&
                      b.length &&
                      (p = b.at(-1)?.index + 1));
                  let m = dnd.F ? (dnd.ft?.types ?? []) : [],
                    g = dnd.F ? (dnd.ft?.Ae?.itemsMeta ?? []) : [],
                    x =
                      u === "quickList" ||
                      (m.includes("tab") &&
                        (g.some((T) => T.sourceParentId === "quickList") ||
                          $s(l)));
                  if (
                    Number.isFinite(p) &&
                    dnd.F &&
                    !D.q &&
                    Array.isArray(D.ji) &&
                    !x
                  ) {
                    let T = D.ji.reduce((h, k) => {
                      let $ = t.find((L) => L?.o?.i === k);
                      return h + ($?.index < p ? 1 : 0);
                    }, 0);
                    T && (p = Math.max(0, p - T));
                  } else if (
                    Number.isFinite(p) &&
                    dnd.F &&
                    D.q &&
                    !m.includes("tab") &&
                    !x
                  ) {
                    let T = new Set(g.map((h) => h.itemId));
                    if (T.size) {
                      let h = c.reduce((k, $, L) => {
                        if (L >= d || $ === ot) return k;
                        let M = y.get($);
                        return k + (T.has(M?.l?.id) ? 1 : 0);
                      }, 0);
                      h && (p = Math.max(0, p - h));
                    }
                  }
                  return (
                    p === void 0 &&
                      b.length &&
                      console.log("Warn: viewIndex not found"),
                    p
                  );
                },
                qr: () => u,
                Ur: () => n,
                Sd: () =>
                  !D.q && D.i && D.ji.length === 1 && ot.replaceWith(D.i),
              });
            } finally {
              ot.remove();
            }
        },
      }),
    ),
    a
  );
}
function Hr({ e: i, pn: t, k: e, Me: s, Oc: n }) {
  if (!s?.i?.isConnected) {
    ot.remove();
    return;
  }
  let r = D.Mc ?? 20;
  i.currentTarget !== D.currentTarget &&
    ((D.currentTarget = i.currentTarget),
    n
      ? ((ot.style.border = ""),
        (ot.style.borderBottom = "var(--drop-area-border)"),
        (ot.style.borderRadius = ""),
        (ot.style.height = 0))
      : ((ot.style.borderBottom = ""),
        (ot.style.border = "var(--drop-area-border)"),
        (ot.style.borderRadius = "10px"),
        (ot.style.height = `${r - 6}px`)));
  let o = new Set(
      e.map((l) => t(l)).filter((l) => l && l.parentElement === s.i),
    ),
    a = null;
  for (let l of s.i.children) {
    if (l === ot || !o.has(l)) continue;
    let u = l.getBoundingClientRect(),
      c = u.y + u.height / 2;
    if (l.previousSibling === ot ? i.clientY < c : i.clientY < c - 1) {
      a = l;
      break;
    }
  }
  (a?.parentElement !== s.i && (a = null), s.i.insertBefore(ot, a));
}
async function Ms(i) {
  let t = [gt({ itemId: i.id })];
  await We({
    title: w("chooseLocationToRestoreTo"),
    He: G(i),
    io: async (e) => {
      await Ke({ rt: t, O: e.id });
    },
  });
}
class oe {
  constructor(
    {
      className: t = "",
      dimension: e,
      width: s = e,
      height: n = e,
      style: r = {},
      l: o = {},
      Ym: a,
      St: l,
      init: u,
    },
    c,
  ) {
    ((this.Gc = c),
      (this.o = F("picture", {
        style: { width: s, height: n, ...r },
        className: `lightDarkPicture${t ? " " + t : ""}`,
        ...o,
        draggable: !1,
        children: { ko: jr(c(!0), c(!1), s, n) },
        ...(a && {
          onpointerover: (d) => this.Re(!0),
          onpointerout: (d) => this.Re(!1),
        }),
        ...(l && { onclick: l }),
      })),
      u?.(this.o));
  }
  _m(t) {
    ((this.Gc = t),
      (this.o.ko.src = t(Ut)),
      (this.o.ko.dataset.lightSrc = t(!0)),
      (this.o.ko.dataset.darkSrc = t(!1)));
  }
  Re(t = !1) {
    this.o.ko.src = this.Gc(Ut, t);
  }
}
function C(...i) {
  return new oe(...i).o.i;
}
function jr(i, t, e, s) {
  const n = document.createElement("img");
  return (
    (n.className = "lightDarkInnerImg"),
    (n.dataset.lightSrc = i),
    (n.dataset.darkSrc = t),
    (n.draggable = !1),
    (n.src = Ut ? i : t),
    (n.style.maxWidth = e),
    (n.style.maxHeight = s),
    n
  );
}
class qr {
  constructor({
    Dc: t,
    Pc: e,
    onChange: s,
    fontSize: n = "12px",
    $: r = {},
    Vm: o = !1,
    tw: a = !1,
    Od: l = !1,
  }) {
    ((this.Dt = Object.fromEntries(
      t.map((c) => [
        c.name,
        {
          mi: c,
          button: Ur({
            fontSize: n,
            label: c.label,
            isSelected: e.includes(c.name),
            St: async (d) => {
              if (c.St) c.St(d);
              else {
                let y = this.Dt[c.name].button.i.classList.contains("on");
                if (o) {
                  this.Dt[c.name].button.i.classList.toggle("on");
                  let b = this.Lc();
                  (await s(b)) === !1 &&
                    this.Dt[c.name].button.i.classList.remove("on");
                } else if (y) {
                  if (a) {
                    let b = Object.values(this.Dt).find(
                      ({ mi: g, button: x }) => x.i.classList.contains("on"),
                    )?.button.i;
                    Object.values(this.Dt).forEach(({ button: g }) =>
                      g.i.classList.remove("on"),
                    );
                    let p = this.Lc();
                    (await s(p)) === !1 && b.classList.add("on");
                  }
                } else {
                  let b = Object.values(this.Dt).find(({ mi: m, button: g }) =>
                    g.i.classList.contains("on"),
                  )?.button.i;
                  (Object.values(this.Dt).forEach(({ button: m }) =>
                    m.i.classList.remove("on"),
                  ),
                    this.Dt[c.name].button.i.classList.add("on"),
                    (await s([c.name])) === !1 &&
                      (this.Dt[c.name].button.i.classList.remove("on"),
                      b.classList.add("on")));
                }
              }
            },
          }),
        },
      ]),
    )),
      l && (this.Dt = Object.fromEntries(Object.entries(this.Dt).reverse())));
    let u = Object.fromEntries(
      Object.values(this.Dt).map(({ mi: c, button: d }) => [
        c.name,
        f({
          children: {
            Md: f({
              style: { height: 0, fontSize: n },
              p: f({
                className: "multiple-choice-button",
                style: {
                  fontSize: n,
                  overflow: "hidden",
                  visibility: "hidden",
                  fontWeight: "var(--multiple-choice-button-bold-font-weight)",
                },
                textContent: c.label,
              }),
            }),
            button: d,
          },
        }),
      ]),
    );
    this.o = f({
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
      children: u,
    });
  }
  Lc() {
    return Object.values(this.Dt)
      .filter(({ mi: t, button: e }) => e.i.classList.contains("on"))
      .map(({ mi: t }) => t.name);
  }
  clear() {
    Object.values(this.Dt).forEach(({ mi: t, button: e }) =>
      e.i.classList.remove("on"),
    );
  }
  ew(t, e) {
    this.Dt[t].button.i.classList.toggle("on", e);
  }
}
const { gr: Ur, nl: $l, kr: Rr, rl: Il, Tr: Nr, lt: dt, Ar: Wr, ol: vl, $r: Cr, fe: Ii, vr: Ls, Ir: Gs, Or: zr, Mr: Zr, Sr: Jr, al: Ol } = createOneTabUiControls({ h: (...a) => f(...a), G: (...a) => F(...a), W: (...a) => C(...a), Xt: oe, O: (...a) => O(...a), ws: Is, co: (...a) => Do(...a), xe: (...a) => Mi(...a), z: (...a) => J(...a), ti: (...a) => le(...a), Kr: (...a) => yo(...a), x: (...a) => w(...a), Gs: (...a) => Ws(...a), J: () => K(), Yr: (...a) => ko(...a), Bs: (...a) => Js(...a), Ve: (...a) => ls(...a), Qt: (...a) => ee(...a), Zi: (...a) => ni(...a), ze: (...a) => ss(...a), oi: (...a) => xe(...a), getSettings: () => A, getModal: () => It, getTheme: () => ve, getTooltip: () => ut });
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
  get Hs() { return Qs; },
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
  get Pr() { return Vr; },
  get Ps() { return Cs; },
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
  get js() { return Ks; },
  get jt() { return Wt; },
  get ks() { return Ps; },
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
async function Ae({ parentId: i, we: t, N: e, Ri: s }) {
  let n = Bt();
  return (
    s && (s.L.$a = n),
    await A.Sa({ id: n, parentId: i, we: t, N: e }),
    n
  );
}
function Vr(i) {
  let t = i.some((n) => n?.G.l.id === "quickList"),
    e = i.some((n) => n.L.l.id === "trash"),
    s = i.some((n) => _(n.l) && !n.l.label);
  return [
    ...new Set([
      ...i.map((n) => (_(n.l) ? n.l.groupType : n.l.type)),
      ...O(e, "trash"),
      ...O(s, "untitled"),
      ...O(t, "isTreeItemInQuickListRoot"),
    ]),
  ];
}
function Ps({ Vc: i, view: t, Ni: e }) {
  return [
    dt.bi({
      label: w("selectAll"),
      name: "all",
      icon: { I: "select-all", dimension: "14px", left: "0px", top: "1px" },
      action: () => {
        (i.yc(), e());
      },
    }),
    ...O(
      i.$c(t),
      dt.bi({
        label: w("selectThisAndAbove"),
        name: "thisAndAbove",
        icon: { I: "up-arrow", dimension: "10px", left: "1px" },
        action: () => {
          (i.gc(t), e());
        },
      }),
    ),
    ...O(
      i.Sc(t),
      dt.bi({
        label: w("selectThisAndBelow"),
        name: "thisAndBelow",
        icon: { I: "down-arrow", dimension: "10px", left: "1px" },
        action: () => {
          (i.kc(t), e());
        },
      }),
    ),
    ...O(
      i.ra() > 1,
      dt.bi({
        label: w("selectAllExceptThis"),
        name: "exceptThis",
        icon: { I: "except-this", dimension: "12px", top: "1px" },
        action: () => {
          (i.Tc(t), e());
        },
      }),
    ),
    ...O(
      i.ra() > 1,
      dt.bi({
        label: w("invertSelection"),
        name: "invert",
        icon: { I: "invert", dimension: "12px", top: "1px" },
        action: () => {
          (i.Ic(t), e());
        },
      }),
    ),
    ...O(
      i.Ac(),
      dt.bi({
        label: w("deselectAll"),
        name: "clear",
        icon: { I: "clear", dimension: "12px", top: "1px" },
        action: () => {
          (i.vc(t), e());
        },
      }),
    ),
  ];
}
class _r {
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
      (this.o = f({})),
      (this.Oa = (u) => this.L?.Ge(u, this.L)),
      so(this.Oa));
  }
  async st() {
    (this.L?.De({}),
      (this.L = new Ri({
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
    (no(this.Oa), (this.Oa = null), this.L?.De({}));
  }
}
class Fs {
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
      (this.o = f({
        style: { ...a },
        children: {
          header: f({
            style: {
              display: "flex",
              alignItems: "stretch",
              cursor: "pointer",
              fontSize: o,
            },
            onclick: (l) => {
              ((this.isOpen = !this.isOpen),
                Ue(this.o.header.Jt.p.style, (u) => {
                  ((u.transform = `rotate(${this.isOpen ? 90 : K() ? 0 : 180}deg)`),
                    (u.top = `${s ? 1 : 0}px`));
                }),
                (this.o.pu.i.style.display = this.isOpen ? "block" : "none"),
                n?.(this.isOpen));
            },
            children: {
              Jt: f({
                className: "tree-item-text",
                style: {
                  userSelect: "none",
                  flex: "0 0 auto",
                  paddingInlineEnd: "6px",
                  display: "inline-block",
                },
                p: C(
                  {
                    width: 20 / 2 + "px",
                    height: 20 / 2 + "px",
                    style: {
                      display: "inline-block",
                      transform: `rotate(${s ? 90 : K() ? 0 : 180}deg)`,
                      top: `${s ? 1 : 0}px`,
                    },
                  },
                  (l) =>
                    `images/tree-twistie-closed-${l ? "light" : "dark"}.png`,
                ),
              }),
              header: f({
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
          pu: f({ style: { display: this.isOpen ? "block" : "none" }, p: r }),
        },
      })));
  }
  Hl() {
    return this.o.pu.p;
  }
}
const Ce = (i) => i.url && i.type !== "folder",
  Oi = (i) => !i.url && i.type !== "bookmark";
function Ds(i, t = !1, e, s, n) {
  let r = i.children.filter(Ce),
    o = i.children.some(Oi);
  return f({
    style: { display: "flex", marginTop: "8px" },
    children: {
      bw: f({
        style: {
          flex: "0 0 auto",
          display: t ? "none" : "block",
          fontSize: "16px",
          width: "20px",
        },
      }),
      body: f({
        style: { flex: "1 1 auto" },
        children: {
          yw: f({
            style: { display: "flex", alignItems: "center" },
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
                (a) => `images/folder${a ? "" : "-dark"}.png`,
              ),
              title: f({
                style: { flex: "0 1 auto", fontWeight: 600 },
                textContent: t ? w("allBookmarks") : i.title,
              }),
              gw: f({
                style: { flex: "0 0 auto" },
                ...(o && {
                  p: new ne({
                    V: !0,
                    label: w("importFolderAndSubfolders"),
                    fontSize: "12px",
                    $: { marginInlineStart: "6px" },
                    Cs: { padding: "1px 5px" },
                    onclick: async (a) => {
                      let l = new Map(),
                        u = (p) => {
                          p.children.forEach((m) => {
                            if (Ce(m)) {
                              let g = At(m.url);
                              l.has(g) || l.set(g, m);
                            } else u(m);
                          });
                        };
                      u(i);
                      let c = await A.Xo(
                        await Promise.all(
                          [...l.entries()].map(async ([p, m]) => ({
                            id: await ei(p),
                            kt: p,
                            title: m.title,
                            nh: m.dateAdded || void 0,
                          })),
                        ),
                      );
                      c.forEach((p) => (p.parentIds = []));
                      let d = [],
                        y = (p, m) => {
                          let g = p.children.some(Oi),
                            x = p.children.some(Ce),
                            T = new Date().getTime(),
                            h;
                          g &&
                            ((h = {
                              id: Bt(),
                              label: p.title || w("importedBookmarks"),
                              type: "group",
                              groupType: "folder",
                              createDate: p.dateAdded ?? T,
                              modifyDate: p.dateGroupModified ?? T,
                              parentIds: [m.id],
                              childIds: [],
                              pinnedCount: 0,
                            }),
                            m.childIds.push(h.id),
                            d.push(h));
                          let k = 1e3,
                            $,
                            L = () => {
                              let M = {
                                id: Bt(),
                                label: h ? void 0 : p.title,
                                type: "group",
                                groupType: "window",
                                createDate: p.dateAdded ?? T,
                                modifyDate: p.dateGroupModified ?? T,
                                parentIds: [h?.id ?? m.id],
                                childIds: [],
                                pinnedCount: 0,
                              };
                              return (
                                d.push(M),
                                (h ?? m).childIds.push(M.id),
                                M
                              );
                            };
                          (x && ($ = L()),
                            p.children.forEach((M) => {
                              if (Ce(M)) {
                                let H = At(M.url),
                                  Q = c.find((lt) => lt.url === H);
                                ($.childIds.length >= k && ($ = L()),
                                  $.childIds.push(Q.id),
                                  Q.parentIds.push($.id));
                              } else y(M, h);
                            }));
                        },
                        b = await rt(s);
                      for (; !G(b); ) {
                        let p = b.parentIds.find(at);
                        if (!p)
                          throw new Error("non-quicklist parent id not found");
                        b = await rt(p);
                      }
                      (y(i, b),
                        await A.In({ Lo: d, vn: c, O: b.id, An: [d[0].id] }),
                        n());
                    },
                  }),
                }),
              }),
            },
          }),
          ...(r.length && {
            kw: new Fs({
              wf: f({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-3px",
                },
                children: {
                  label: f({ style: {}, textContent: ar(r.length) }),
                  bf: f({
                    style: { flex: "0 0 auto" },
                    p: new ne({
                      V: !0,
                      label: w("import"),
                      fontSize: "12px",
                      $: { marginInlineStart: "6px" },
                      Cs: { padding: "1px 5px" },
                      onclick: async (a) => {
                        let l = await A.Ma({
                          Ga: [
                            r.map(({ title: u, url: c }) => ({
                              kt: At(c),
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
              body: f({
                style: { marginTop: "5px", marginBottom: "5px" },
                children: r.map((a) => Es(a)),
              }),
            }),
          }),
          Me: f({
            style: { marginTop: "12px", marginBottom: "12px" },
            children: {
              ...i.children.filter(Oi).map((a) => Ds(a, !1, e, s, n)),
              ...(!i.children.length && {
                Iw: f({
                  style: { paddingInlineStart: "26px", fontSize: "12px" },
                  textContent: w("emptyInBrackets"),
                }),
              }),
            },
          }),
        },
      }),
    },
  });
}
function Es(i) {
  let t = (e) => {
    if (!Ie(e))
      return ((async () => await chrome.tabs.create({ url: i.url }))(), !1);
  };
  return f({
    className: [...O(i.hasBeenRead, "archived")].join(" "),
    style: {
      marginInlineStart: "30px",
      marginBottom: "8px",
      cursor: "pointer",
    },
    children: {
      Aw: f({
        children: {
          title: F("a", {
            className: "tabLinkText tabLinkTextStripesPossible",
            href: i.url,
            onclick: t,
            textContent: i.title,
          }),
        },
      }),
      url: F("span", {
        onclick: t,
        className: "tabUrlText tabLinkTextStripesPossible",
        textContent: i.url,
      }),
    },
  });
}
async function Yr() {
  (await to(), await $e(), br());
}
async function to() {
  try {
    (await chrome.tabs.getCurrent()) &&
      (await chrome.tabs.update((await chrome.tabs.getCurrent()).id, {
        autoDiscardable: !1,
      }));
  } catch (i) {
    console.log(i);
  }
}
function eo(i) {
  return f({ style: { fontSize: "1px", height: i + "px", width: "1px" } }).i;
}
let Bs = !1;
async function io(i, t = {}) {
  if (!Bs) {
    const s = async () => {
      if (
        (
          await chrome.runtime.sendMessage({
            args: [],
            type: "corePing",
            yf: !0,
          })
        )?.result?.pong !== String(pn)
      )
        throw new Error("core version mismatch");
    };
    try {
      await s();
    } catch (n) {
      if (n.message === "core version mismatch") throw n;
      (console.log(n),
        console.log("core not ready. retrying..."),
        await Zt(1e3));
      try {
        await s();
      } catch (r) {
        (console.log(r),
          console.log("core not ready. retrying..."),
          await Zt(5e3));
        try {
          await s();
        } catch (o) {
          throw (console.log(o), new Error("Cannot connect to core"));
        }
      }
    }
    Bs = !0;
  }
  ((t.type = i), (t.yf = !0));
  let e = await chrome.runtime.sendMessage(t);
  if (e === null) throw new Error("null message response from core");
  if (e?.gf) throw new Error(e.gf);
  return e.result;
}
const Ll = new Proxy(
  {},
  {
    get(i, t) {
      return t;
    },
  },
);
let ze = [];
function so(i) {
  ze.push(i);
}
function no(i) {
  let t = ze.indexOf(i);
  t >= 0 && ze.splice(t, 1);
}
chrome.runtime.onMessage.addListener((i, t, e) => {
  i.type === "stateChange" && ze.forEach((s) => s(i.$w));
});
const A = hi(
  new Proxy(
    {},
    {
      get(i, t, e) {
        return (...s) => ((s = ui(s, void 0, ir)), io(t, { args: s }));
      },
    },
  ),
  "core",
);
async function $e() {
  return new Promise((i, t) => {
    document.readyState === "complete"
      ? i()
      : document.addEventListener("readystatechange", (e) => {
          document.readyState === "complete" && i();
        });
  });
}
function ro(i) {
  if (!i || i.toLowerCase().startsWith("file://")) return "";
  if (i.indexOf("://docs.google.com/spreadsheets/d/") !== -1)
    return "docs.google.com-spreadsheets";
  if (i.indexOf("://docs.google.com/document/d/") !== -1)
    return "docs.google.com-document";
  if (i.indexOf("://docs.google.com/presentation/d/") !== -1)
    return "docs.google.com-presentation";
  if (i.indexOf("://docs.google.com/forms/d/") !== -1)
    return "docs.google.com-forms";
  let t = Zi(i);
  return (t.endsWith(".wikipedia.org") && (t = "wikipedia.org"), t);
}
function Ie(i) {
  return ae(i) || Ze(i);
}
function ae(i) {
  return i.ctrlKey || i.metaKey;
}
function Ze(i) {
  return i.shiftKey;
}
function Je(i) {
  return i.altKey;
}
function Gl(i) {
  let t = document.createElement("span"),
    e = i.indexOf("OneTab"),
    s = e + "OneTab".length;
  return (
    e === 0
      ? (t.appendChild(Hs()),
        t.appendChild(document.createTextNode(i.substring(s))))
      : (t.appendChild(document.createTextNode(i.substring(0, e))),
        t.appendChild(Hs()),
        s !== i.length &&
          t.appendChild(document.createTextNode(i.substring(s)))),
    t
  );
}
function Hs() {
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
async function oo(i) {
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
async function ao(i) {
  return new Promise((t, e) => {
    let s = new Image();
    ((s.onload = () => {
      t(Us(s));
    }),
      (s.onerror = (n) => {
        e(n);
      }),
      (s.src = i));
  });
}
let Qe = document.createElement("canvas");
((Qe.width = 32), (Qe.height = 32));
let js = Qe.getContext("2d"),
  qs = "data:image/png;base64,",
  lo = qs.length;
function Us(i) {
  (js.clearRect(0, 0, 32, 32), js.drawImage(i, 0, 0, 32, 32));
  let t = Qe.toDataURL("image/png");
  return t.startsWith(qs) ? t.substring(lo) : t;
}
async function Rs(i) {
  let { Sw: t, Ow: e } = await A.Mw(i);
  return t ? (await ho(), []) : e;
}
function Ns() {
  return w("chromeIncognitoInstructions");
}
async function ho() {
  let i = w("incogitoPermissionRequired") + " " + Ns(),
    t = w("privateBrowsingPermissionRequired") + " " + Ns();
  await Qt(i);
}
function Mi({ style: i = {}, uh: t = 7 }) {
  let e = f({
    className: "spinner",
    style: { opacity: "1", ...i },
    children: Object.fromEntries(
      Xn(t).map((s) => [s, document.createElement("div")]),
    ),
  }).i;
  return (e.animate([{ opacity: "0" }, { opacity: "1" }], 100), e);
}
async function Li({
  h: i,
  itemId: t,
  fontSize: e,
  Qo: s,
  jl: n = !0,
  prefix: r,
}) {
  (r || (r = w("locationColon")), await i.ke());
  let o = await i.Hn(t, s);
  return F("span", {
    style: { fontSize: e ?? "12px" },
    children: {
      ...(n && { Gw: F("span", { textContent: `${r}  ` }) }),
      ...ci(
        o.map((a, l) => ({
          [`loc${l}`]: F("span", {
            dir: "auto",
            style: { cursor: "pointer" },
            textContent: be({ groupId: a.id, h: i, l: a }),
            onclick: async (u) => {
              await A.ec({ itemId: a.id, Zi: l === 0 ? a.id : o[l - 1].id });
            },
          }),
        })),
        () => F("span", { textContent: `  ${K() ? "➝" : "⭠"}  ` }),
      ),
    },
  });
}
async function Ws({ Et: i, groups: t, h: e, he: s, oe: n }) {
  return (
    await Promise.all(t.map(async (o) => [...(await e.Hn(o.id)), o]))
  ).map((o) =>
    f({
      className: "groupPath",
      children: o.map((a, l) =>
        f({
          style: {
            display: "inline-block",
            textIndent: 0,
            whiteSpace: "nowrap",
          },
          p: f({
            style: { display: "flex", alignItems: "flex-start" },
            children: [
              f({
                style: {
                  display: "inline-block",
                  position: "relative",
                  top: "4px",
                  visibility: l === 0 ? "hidden" : "visible",
                },
                textContent:
                  l === 0 ? `${K() ? "➝" : "⭠"}` : `  ${K() ? "➝" : "⭠"}  `,
              }),
              ...O(
                G(a),
                f({
                  className: "tree-item-text",
                  p: C(
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
                    (u) => `images/folder${u ? "" : "-dark"}.png`,
                  ),
                }),
              ),
              ...O(
                ct(a),
                f({
                  style: { display: "inline-block", paddingTop: "4px" },
                  p: gs({
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
              new Jr({
                padding: "2px",
                marginInline: "0px -4px",
                marginBlock: "0px 0px",
                label: a.label || (V(a) ? w("all") : w("untitled")),
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
async function uo({ kf: i, Tf: t }) {
  return navigator.clipboard.write([
    new ClipboardItem({
      ...(i && { "text/plain": i() }),
      ...(t && { "text/html": t() }),
    }),
  ]);
}
async function Sl(i) {
  try {
    return (await A.corePing(), !0);
  } catch {
    let e = f({
      style: { padding: "40px" },
      children: {
        Dw: F("div", {
          children: {
            a: F("span", { textContent: w("oneTabRestartRequired") + " " }),
            b: F("a", {
              style: { cursor: "pointer", textDecoration: "underline" },
              onclick: () => chrome.runtime.reload(),
              textContent: w("clickHereToContinue"),
            }),
          },
        }),
        Pw: F("div", {
          p: F("div", {
            style: { paddingTop: "20px" },
            textContent: w("mayNeedToRestartBrowser"),
          }).i,
        }),
      },
    });
    return (i.replaceChildren(e.i), !1);
  }
}
async function Cs({
  Hi: i = !1,
  Me: t,
  views: e,
  ia: s,
  pn: n,
  sa: r,
  ea: o,
  Lw: a,
  Ew: l,
  bc: u,
  pf: c = 10,
}) {
  let d = !1,
    y = 0;
  for (let p = 0; p < o.length; p++) {
    let m = o[p],
      g = e.findIndex((h, k) => k >= p && s(h) === m.id),
      x = e[g],
      T = x && n(x);
    if (!i && T && !x?.tu)
      (g > p && (e.splice(g, 1), e.splice(p, 0, x)),
        t.children.item(p) !== T && t.insertBefore(T, t.children.item(p)),
        T.classList.remove("fadeOutTransition", "fadedOut"));
    else {
      if ((y++, a?.())) {
        d = !0;
        break;
      }
      let h = g >= p ? e[g] : void 0;
      if ((y % c === 0 && (await Zt(0)), (x = await r(m.id, m.index)), x)) {
        let k = n(x);
        if (!k) (x.De?.({ pi: !0 }), (x = h));
        else {
          let $ = p;
          if (h) {
            let L = e.indexOf(h);
            L >= 0 && (h.De?.({ pi: !0 }), e.splice(L, 1), L < $ && $--);
          }
          (t.insertBefore(k, t.children.item($)), e.splice($, 0, x));
        }
      } else h && (x = h);
    }
    x && ((x.index = m.index), u?.(x));
  }
  if ((a?.() && (d = !0), d)) {
    l();
    return;
  }
  for (; e.length > o.length; ) {
    let p = e[e.length - 1];
    if (!p) {
      e.splice(e.length - 1, 1);
      continue;
    }
    let m = p && n(p),
      g = !m || m.parentElement !== t;
    (p.De({ pi: g }), e.splice(e.length - 1, 1));
  }
  let b = new Set(e.map((p) => n(p)).filter(Boolean));
  [...t.children].forEach((p) => {
    b.has(p) || p.remove();
  });
}
async function Pl(i) {
  return Object.fromEntries(
    await Promise.all(
      i.map(
        (t) =>
          new Promise((e) => {
            let s = new Image();
            ((s.onload = () => e([t, s])), (s.src = t));
          }),
      ),
    ),
  );
}
let ve;
async function co() {
  ((ve = await A.ks("theme")), Gi());
}
function fo() {
  return !window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}
async function Fl(i) {
  (await A.bt("theme", i), (ve = i), Gi());
}
let Ut;
function Gi() {
  ((Ut = { auto: fo(), light: !0, dark: !1 }[ve]),
    po(),
    [...document.querySelectorAll(".lightDarkInnerImg")].forEach((i) => {
      i.src = i.dataset[Ut ? "lightSrc" : "darkSrc"];
    }),
    zs.forEach((i) => i()));
}
function po() {
  let [i, t] = {
    auto: ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    light: ["all", "not(all)"],
    dark: ["not(all)", "all"],
  }[ve];
  [...document.styleSheets]
    .flatMap((e) => [...e.cssRules])
    .filter(
      (e) =>
        e instanceof CSSMediaRule &&
        [...e.cssRules].some((s) => s.selectorText === ":root"),
    )
    .forEach((e, s) => (e.media = s % 2 === 0 ? i : t));
}
let zs = [];
function Dl(i) {
  zs.push(i);
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (i) => {
    Gi();
  });
function xo() {
  return f({
    style: {
      flex: "0 1 auto",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      marginInlineStart: "auto",
      gap: "8px",
    },
    onclick: async (i) => {
      (await A.dl({}), window.close());
    },
    children: [
      C(
        {
          dimension: "10px",
          style: { transform: `rotate(${K() ? 90 : 270}deg)` },
        },
        (i) => `images/down-arrow${i ? "" : "-dark"}.png`,
      ),
      f({ textContent: w("returnToOneTab") }),
    ],
  });
}
function wo(i, t) {
  const { top: e, bottom: s, height: n } = i.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return e <= r.top ? r.top - e <= n : s - r.bottom <= n;
}
async function Zs(i) {
  let t = new kt(),
    e = await t.ht(i);
  return (G(e) || (await t.Te({ groupId: i })), t);
}
function le(i) {
  return !i.isComposing && (i.key === "Escape" || i.key === "Esc");
}
function J(i, t, e, s = !1) {
  return new fs({
    listener: e,
    Ka: () => i.addEventListener(t, e, s),
    Bs: () => i.removeEventListener(t, e, s),
  });
}
function Oe(i, t) {
  return J(i, "pointerover", t);
}
function mo(i, t) {
  return J(i, "pointermove", t);
}
function Me(i, t) {
  return J(i, "pointerleave", t);
}
async function Ke({ rt: i, O: t, N: e }) {
  let s = await ge(i.map((o) => o.itemId)),
    n = await rt(t);
  if (s.some(G) && !G(n))
    throw new Error(
      "folder should not have been allowed to have been moved here",
    );
  if (s.some(j) && s.some(He(j)))
    throw new Error("Can't mix tabs with groups during smart move");
  let r = new Set(s.map(Si));
  if (r.size > 1)
    throw new Error(
      `Can't mix the following types during smart move: ${[...r].join()}`,
    );
  {
    let o = new kt();
    await o.ke();
    let [a, l] = ri(i, (b) => b.sourceParentId),
      u = new Set(
        (await o.getItems([...new Set(l.map((b) => b.itemId))]))
          .filter(j)
          .map(Vt),
      );
    a = a.filter((b) => !u.has(b.itemId));
    let [c, d] = ri(l, (b) => u.has(b.itemId)),
      y = [];
    for (let b of c) {
      let p = b.itemId,
        m = o.v(p),
        g = m.parentIds.map((T) => o.v(T)),
        x = [];
      if (
        (g.forEach((T) =>
          T.childIds
            .filter((h) => h === m.id)
            .forEach((h, k) => x.push(gt({ itemId: m.id, Fe: T.id, zt: k }))),
        ),
        t === "trash")
      )
        x.forEach((T) => a.push(T));
      else {
        let T = x[0];
        (a.push(T), x.slice(1).forEach((k) => y.push(k)));
      }
    }
    if (y.length) {
      let b = await A.gs(y);
      (await A.move({ rt: y, O: "delete" }), await A.Oe(b));
    }
    i = [...a, ...d];
  }
  if (t === "trash") {
    let o = await A.gs(i);
    (await A.move({ rt: i, O: t, N: e }), await A.Oe(o));
  } else if (s.some(j) && G(n)) {
    let o = await Xs({ O: t, N: e }),
      a = await A.gs(i);
    (await A.move({ rt: i, O: o }), await A.Oe(a));
  } else if (s.some($t) && $t(n)) {
    let o = 0;
    for (let a of i) {
      let l = a.itemId,
        u = await rt(l);
      if ($t(u)) {
        let c = await ge(u.childIds);
        if (!0) {
          let y = [];
          (c.forEach((b, p) => {
            j(b)
              ? y.push(
                  gt({
                    itemId: b.id,
                    zt: u.childIds.slice(0, p).filter((m) => m === b.id).length,
                    Fe: u.id,
                  }),
                )
              : y.push(gt({ itemId: b.id }));
          }),
            await A.move({ rt: y, O: t, N: e === void 0 ? void 0 : e + o }),
            (o += c.length),
            await A.Oe([a.itemId], !0));
        } else {
          let [y, b] = ri(c, j);
          (b.length &&
            (await A.move({
              rt: b.map((p) => gt({ itemId: p.id })),
              O: t,
              N: e === void 0 ? void 0 : e + o,
            }),
            (o += b.length)),
            y.length
              ? (await A.Fi(u.id, { groupType: "tabGroup", color: me }),
                await A.move({
                  rt: [a],
                  O: t,
                  N: e === void 0 ? void 0 : e + (o - b.length),
                }),
                o++)
              : await A.Oe([a.itemId], !0));
        }
      } else if (ct(u)) {
        let c = await A.gs([a]);
        (await A.move({ rt: [a], O: t, N: e === void 0 ? void 0 : e + o++ }),
          await A.Oe(c));
      }
    }
  } else if ((s.some(ct) || s.some($t)) && ct(n)) {
    let o = new kt(),
      a = [],
      l = [];
    const u = (c, d, y) => {
      if (_(c)) {
        let b = c;
        (o.ul(b.childIds).forEach((m, g) => u(m, c, g)), l.push(b));
      } else
        a.push(
          gt({
            itemId: c.id,
            zt: d.childIds.slice(0, y).filter((b) => b === c.id).length,
            Fe: d.id,
          }),
        );
    };
    for (let c of i) {
      let d = c.itemId;
      await o.Te({ groupId: d });
      let y = o.v(d),
        b = await o.ht(y.parentIds.find(at));
      u(y, b);
    }
    (a.length && (await A.move({ rt: a, O: t, N: e })),
      await A.Oe(l.map(Vt), !0));
  } else {
    let o = await A.gs(i);
    (await A.move({ rt: i, O: t, N: e }), await A.Oe(o));
  }
}
function Js({
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
function yo(i) {
  let t = i.parentElement;
  for (; t; ) {
    const e = window.getComputedStyle(t);
    if (e.overflow === "auto" || e.overflowY === "auto") return t;
    t = t.parentElement;
  }
  return document.body;
}
const Qs = 300;
function Ks(i, t) {
  return i?.length > t ? `${i.substring(0, t)}…` : i;
}
function El(i) {
  const t = new Date(i + "T00:00:00Z");
  return (t.setUTCDate(t.getUTCDate() + 1), t.toISOString().split("T")[0]);
}
async function Bl(i) {
  let t = await chrome.tabs.query({ groupId: i });
  return await bo(t);
}
async function bo(i) {
  return await Promise.all(
    i.map(async (t) => {
      let e = At(t.url || t.pendingUrl);
      return { fl: t, Eo: await ei(e), kt: e, At: t.id, di: t.groupId };
    }),
  );
}
function go(i) {
  return At(i.url || i.pendingUrl);
}
function Hl(i) {
  return Ee(go(i));
}
function Si(i) {
  let t = "undef";
  return (
    i.type === "tab"
      ? (t = "tab")
      : i.type === "group" &&
        (i.groupType === "folder" ? (t = "folder") : (t = "group")),
    t
  );
}
async function jl() {
  try {
    let i = await chrome.permissions.request({ origins: [`${De}/*`] });
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
function ko(i) {
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
function To(i) {
  return `${De}/page/${i}`;
}
const ql = Symbol("dropHandled"),
  Ul = Symbol("dragOverHandled"),
  ot = f({
    id: "landingDiv",
    style: {
      background: "var(--drop-area-gradient)",
      border: "var(--drop-area-border)",
      marginInline: "14px",
    },
  }).i;
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
