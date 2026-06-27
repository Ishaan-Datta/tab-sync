// Copyright 2026 OneTab Ltd.  All rights reserved.
const {
  version: Qi,
  false1: Ko,
  false2: Xo,
  false3: Vo,
  false4: _o,
  false5: Yo,
  false6: ta,
  true1: ea,
  chromeUrl: ia,
  chromeNewTabUrl: sa,
  websiteUrl: De,
  false7: na,
  false8: ra,
  true2: oa,
  false9: aa,
  oneTabPageUrl: wn,
  extensionRootUrl: pe,
  tabGroupsEnabled: Ki,
  hasTabGroupsPermission: la,
  requestTabGroupsPermission: ha,
  isOneTabPageUrl: Vi,
  isExtensionUrl: ua,
  stripHttpProtocol: _i,
  extractDomain: Fe,
  protocolPrefix: xa,
  commonDomainSuffixes: Ji,
  registeredDomain: mn,
  randomAlphabet: ti,
  newId: Bt,
  textEncoder: An,
  textDecoder: fa,
  digestBytes: Sn,
  digestText: $n,
  stableIdFromText: ei,
  domainWithoutWww: ii,
  isLineBreak: On,
  nonStandardLineBreaks: vn,
  normalizeLineBreaks: Mn,
  removeControlCharacters: Yi,
  removeControlCharactersExceptTabs: Xi,
  normalizeText: zt,
  defaultSettings: wa,
  moveElementToIndex: Pn,
  insertBeforeElement: Gn,
  div: c,
  createElement: M,
  internalProps: Dn,
  createNode: xe,
  readerUrlPrefix: ss,
  normalizeUrl: At,
  placeholderUrlFor: Fn,
  isFileAccessBlocked: ma,
  parseDigits: ba,
  last: ya,
  backoffSteps: ns,
  backoffDurations: En,
  waitForCondition: ga,
  translate: h,
  runWhenDomReady: ka,
  horizontalDivider: we,
  relativeTimeFormatter: Bn,
  relativeTimeUnits: rs,
  relativeTime: os,
  relativePastTime: as,
  relativeFutureTime: Hn,
  deepEqual: Ee,
  sortObjectDeep: ls,
  clearArray: hs,
  uniqueBy: jn,
  arrayInsert: Un,
  sameSet: qn,
  sameJson: Ta,
  pushUnique: ie,
  includes: jt,
  includesAny: Xt,
  removeAll: ai,
  removeWhere: Aa,
  toggleValue: va,
  removeFirstWhere: $a,
  maybeArray: $,
  removeOccurrence: Ia,
  mapIdsToItems: Oa,
  filterToSet: Ma,
  filterNested: Nn,
  not: Be,
  partition: li,
  partitionMany: Sa,
  asyncPartition: La,
  activateTab: Pa,
  activateTabAndWindow: Ga,
  randomItem: Da,
  randomColor: Fa,
  excludedUrlPrefixes: Cn,
  isExcludedUrl: us,
  saveUncommittedChanges: se,
  clearUncommittedChanges: Ea,
  getUncommittedChanges: cs,
  clearAllUncommittedChanges: Ba,
  pruneUncommittedChanges: Rn,
  localStorageAdapter: zn,
  getLocalStorageAdapter: Ha,
  placeholderParts: Ra,
  makeProxyHandler: Ja,
  identity: fi,
  intersperseLocal: Va,
  childTypeCode: _a,
  editTypeCode: Ya,
  tabTypeCode: tl,
  sessionStorageAdapter: ir,
  getSessionStorageAdapter: el,
  runtimeMarker: sr,
  renderLabelSegments: ps,
  tabCount: wi,
  bookmarkCount: hr,
  replaceLabelSegments: mi,
  htmlEscapeText: mt,
  htmlEscapeAttribute: bs,
  identityPair: Ne,
  EventAttachment: ys,
  itemOccurrenceRef: gt,
  AsyncMapCache: xr,
  hasNotesText: ol,
  nonNegative: gs,
  isTabExcluded: al,
  isPlaceholderUrl: wr,
  shouldSkipTab: ll,
  allSame: hl,
  escapeXml: ul,
  isChromium120OrNewer: mr,
  colorNames: ks,
  defaultColor: me,
  true3: cl,
  leadingNonAlphanumeric: fl,
  measureElement: dl,
  modelPredicates: { isUndefined: ja, isDefined: Zn, hasId: Ua, doesNotHaveId: Jn, sameIdAs: qa, getId: Vt, isTab: j, isRoot: V, isTrash: yt, isFolder: P, isArchived: Zt, isTask: He, isUserFolder: Na, isQuickList: hi, isFolderOrWindowGroup: Ca, isGroup: _, isTabGroup: ct, isWindowGroup: vt, isBrowserGroup: Jt, isNotQuickList: ot, isSharedAndNotExpired: Qn },
  collectionHelpers: { combineComparators: ne, compareAscendingBy: fs, compareDescendingBy: _t, compareLocaleBy: Kn, compareLocaleNumericBy: Wa, mergeOwnProperty: za, mergeDefined: Za, mapBy: Xn, groupBy: Qa, range: Vn, nthIndexOf: Ka, KeyedObjectMap: Xa },
  searchHelpers: { splitSearchText: _n, splitSearchTextWithTerm: Yn, createSearchTermRegExp: ds },
  runtimeHelpers: { delay: Ut, replaceValueDeep: di, isOpera: nr, isBrave: il, isMicrosoftEdge: rr, unsleepTab: sl, mergeObjectsWithSeparators: pi, intersperse: or, callIfOwnProperty: xi, callIfDefined: ar, joinUniqueTrimmed: nl },
  domTransitionHelpers: { fadeOut: lr, fadeIn: rl },
  applyRuntimeHelpers: { applyValue: Ue, applyIfTruthy: It },
  urlHelpers: { trimTrailingDotOrComma: ur, substringAfter: cr, stripProtocol: qt, equalIgnoringProtocol: qe, safeNormalizeText: Yt, canonicalizeTextAsUrl: xs, areUrlLikeEqual: ws, isYouTubeUrl: fr, shouldUseCandidateUrl: dr, safeNonJavascriptUrl: re },
  textHelpers: { normalizeImportedText: pr },
  importHelpers: { parseImportedTabGroups: ms }
} = globalThis.createOneTabBundlePrelude({
  getCoreProxy: () => v,
  isNewOrBlankTabPageUrl: url => globalThis.isNewOrBlankTabPageUrl(url),
  pluralize: (key, count) => Ft(key, count),
  trimToLengthWithEllipsis: (...args) => Ys(...args),
});
const {
  taskFieldNames: be,
  shareFieldNames: Ts,
  sharedPageUrlPattern: pl,
  splitOversized: xl,
  isJson: br,
  localeId: bi,
  helpUrl: wl,
  localizedPathPrefix: yr,
  matchesOrUnset: As,
  getDirection: gr,
  isLtr: K,
  applyDocumentDirection: kr,
  pluralize: Ft,
  groupPathLabel: ml,
  groupLabelParts: Tr,
  groupDisplayLabel: ye,
  groupFallbackLabel: yi,
  groupLabel: gi,
  debounceByType: Ar,
  shouldApplyChrome145Workaround: vr,
  isChrome145: $r,
  uncollapseChrome145TabGroup: bl,
} = globalThis.createOneTabPageCommon({
  websiteUrl: De,
  translate: h,
  tabCount: wi,
  isRoot: V,
  isTrash: yt,
  isFolder: P,
  isMicrosoftEdge: rr,
});
const { cleanUrlForSearch: Ir } = globalThis.createOneTabUrlQueryCleanup();
class kt {
  constructor(t = []) {
    ((this.$t = new Map()), t.forEach((e) => this.$t.set(e.id, e)));
  }
  static qn = Symbol("uncommitted");
  async ht(t) {
    let e = this.$t.get(t);
    if (!e) {
      if (((e = await lt(t)), !e)) return;
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
        (await Or()).forEach((t) => this.put(t)),
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
        (await Mr()).forEach((e) => this.put(e)),
        this.Ya(),
        this._a()),
      this
    );
  }
  async tl() {
    if ((await this.ke(), !this.Zu)) {
      this.Zu = !0;
      let t = await Sr();
      (t.forEach((s) => this.put(s)),
        (this.Un = new Set(
          t.filter(Be(Zt)).flatMap((s) =>
            s.parentIds
              .filter(ot)
              .map((o) => this.v(o))
              .filter(Be(Zt))
              .map(Vt),
          ),
        )));
      let e = new Set(this.Un);
      for (; e.size; ) {
        let s = new Set();
        (e.forEach((n) => {
          this.v(n)
            .parentIds.filter(ot)
            .map((a) => this.v(a))
            .filter(Be(Zt))
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
      this.Va || ((this.Va = !0), (await Lr()).forEach((e) => this.put(e))),
      this
    );
  }
  _a() {
    this.Qu = new Set();
    let e = [...this.$t.values()].filter(Zt).filter(_).map(Vt);
    for (; e.length; ) {
      let s = e.pop();
      (this.Qu.add(s), this.v(s)?.childIds?.forEach((r) => e.push(r)));
    }
    for (this.el = new Set(), e = ["root"]; e.length; ) {
      let s = e.pop();
      (this.el.add(s),
        this.v(s)?.childIds?.forEach((r) => {
          let o = this.v(r);
          !o || j(o) ? this.el.add(r) : Zt(o) || e.push(r);
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
      return e && P(e);
    });
  }
  async il({ count: t, B: e, Rp: s, sl: n, Ju: r }) {
    await this.ke();
    let o = [...this.$t.values()]
      .filter((a) => !a.archived)
      .filter((a) => (e ? P(a) : !0))
      .filter((a) => (s ? !P(a) : !0))
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
        .filter((n) => !(s && !P(n)))
        .filter((n) => {
          if (!_(n) || this.re.has(n.id)) return !1;
          let r = (V(n) ? h("all") : n.label)?.toLocaleLowerCase();
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
    a || (t = t.map((x) => x.toLocaleLowerCase()));
    let d = new Set(n ? this.nl(n) : []),
      p = (x, m) => (l ? ds(x, !0, a).test(m) : m.includes(x)),
      b = h("all");
    return [...this.$t.values()]
      .filter((x) => {
        if (
          x.parentIds.filter((m) => !this.re.has(m) && m !== "quickList")
            .length === 0
        )
          return !1;
        if (n && !x.parentIds.some((m) => d.has(m))) return !1;
        if (this.re.has(x.id)) return !1;
        if (["quickList", "trash"].some((m) => m === x.id)) return !1;
        if (s && !s(x)) return !1;
        if (u && !t.length) return !0;
        if (V(x)) return o && t.every((m) => p(m, b));
        if (j(x)) {
          let m = [x.title, this.Jo.get(x.id) ?? x.url, x.notes?.text].filter(
            (w) => w,
          );
          return (
            a || (m = m.map((w) => w.toLocaleLowerCase())),
            t.every((w) => m.some((T) => p(w, T)))
              ? ((m = [
                  x.title,
                  Ir(this.Jo.get(x.id) ?? x.url),
                  x.notes?.text,
                ].filter((w) => w)),
                a || (m = m.map((w) => w.toLocaleLowerCase())),
                t.every((w) => m.some((T) => p(w, T))))
              : !1
          );
        } else if (_(x)) {
          let m = [x.label, x.notes?.text].filter((g) => g);
          return (
            a || (m = m.map((g) => g.toLocaleLowerCase())),
            t.every((g) => m.some((w) => p(g, w)))
          );
        } else return !1;
      })
      .sort(ne(...e))
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
      Zt(u) ||
        (He(u) && o(u),
        (u.childIds ?? []).forEach((d) => {
          let p = this.v(d);
          p &&
            !Zt(p) &&
            (_(p) ? l.push(p) : He(p) && (a.has(p.id) || (a.add(p.id), o(p))));
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
      return [...(await this.Hn(r)), o, ...$(e, n)];
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
class G {
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
    return await G.je([t], "readonly", async (n, [r]) => {
      let o = e ? r.index(e) : r;
      return await G.Ie(s(o));
    });
  }
  static async ih(t, e) {
    let s = (await G.sh()).transaction(t, e);
    return [s, t.map((n) => fi(s.objectStore(n), "db"))];
  }
  static async je(t, e, s) {
    let [n, r] = await G.ih(t, e),
      o,
      a = new Promise((d) => {
        ((n.oncomplete = () => d()),
          (n.onabort = (p) => {
            ((o =
              n.error ??
              p?.target?.error ??
              new Error("IndexedDB transaction aborted")),
              d());
          }));
      }),
      l,
      u;
    try {
      l = await s(n, r);
    } catch (d) {
      ((u = d), console.log(d));
      try {
        n.abort();
      } catch {}
    }
    if ((await a, u)) throw u;
    if (o) throw o;
    return l;
  }
  static async om(t, e, s) {
    await G.je([t], "readwrite", async (n, [r]) => {
      if (!(await G.get(s[e], r))) await G.put(s, r);
      else throw new Error("Object already exists in ObjectStore");
    });
  }
  static async Xo(t, e) {
    e = jn(e, (n) => n.kt);
    let s = new Date().getTime();
    return await Promise.all(
      e.map(async ({ id: n, kt: r, title: o, nh: a, oh: l }) => {
        let u = await G.get(n, t),
          d = u ?? {
            id: n,
            type: "tab",
            title: Yt(o),
            url: r,
            createDate: a ?? s,
            modifyDate: a ?? s,
            parentIds: [],
            ...(!u && { uncommitted: !0 }),
          },
          p = Yt(o);
        return (
          dr(d.title, d.url, p) && (d.title = p),
          l && (d.parentIds = l),
          d
        );
      }),
    );
  }
  static async _e(t) {
    return (await G.query({ si: "attr" }, (e) => e.get(t)))?.value;
  }
  static async Ve(t, e) {
    await G.je(
      ["attr"],
      "readwrite",
      async (s, [n]) => await G.put({ id: t, value: e }, n),
    );
  }
  static async rm(t, e) {
    return (await G.query({ si: "attr" }, (n) => n.get(t)))
      ? !1
      : (await G.Ve(t, e), !0);
  }
  static async Bu(t) {
    await G.je(["attr"], "readwrite", async (e, [s]) => await G.delete(t, s));
  }
  static async am(t, e) {
    let s;
    return (
      await G.je(
        ["attr"],
        "readwrite",
        async (n, [r]) =>
          await G.modify(r, t, (o) => (s = o.value = e(o?.value))),
      ),
      s
    );
  }
  static async modify(t, e, s) {
    let n = await G.get(e, t);
    return (n || (n = { id: e }), s(n), await G.put(n, t));
  }
  static async lm(t, e) {
    return await Promise.all(t.map((s) => G.get(s, e)));
  }
  static async um(t, e) {
    await Promise.all(t.map((s) => G.put(s, e)));
  }
  static async get(t, e) {
    return await G.Ie(e.get(t));
  }
  static async getAll(t, e) {
    return await G.Ie(e.getAll(t));
  }
  static async put(t, e) {
    return await G.Ie(e.put(t));
  }
  static async delete(t, e) {
    return await G.Ie(e.delete(t));
  }
  static async hm(t, e) {
    return await Promise.all(t.map((s) => G.delete(s, e)));
  }
  static async count(t, e) {
    return await G.Ie(t.count(e));
  }
  static async getAllKeys(t) {
    return await G.Ie(t.getAllKeys());
  }
  static async dm(t) {
    return await G.je(
      ["item"],
      "readonly",
      async (e, [s]) => await G.get(t, s),
    );
  }
  static async fm(t) {
    return await G.je(
      ["item"],
      "readonly",
      async (e, [s]) => await G.get(At(t), s.index("url")),
    );
  }
  static async sh() {
    return (await G.rh()).pl;
  }
  static async pm(t) {
    let e = await G.Ie(t.index("type").getAll("group")),
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
    if (G.ml) return G.ml;
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
          for (let d of ["root", "quickList", "trash"]) {
            let p = d === "quickList" ? "quickList" : "folder";
            await G.put(
              {
                id: d,
                type: "group",
                groupType: p,
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
            l.put({ id: "installId", value: Ht() }));
          let u = n.createObjectStore("shareUpdate", {
            keyPath: "id",
            autoIncrement: !0,
          });
        }
        s.oldVersion < 3;
      };
      let e = await G.Ie(t);
      return (G.ml = new G(e));
    }
  }
}
class yl extends xr {
  constructor(t) {
    super(async (e) => await G.get(e, t));
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
    ? await G.je(
        ["item"],
        "readonly",
        async (t, [e]) => await Promise.all(i.map((s) => G.get(s, e))),
      )
    : [];
}
async function lt(i) {
  if (i) return await G.query({ si: "item" }, (t) => t.get(i));
}
async function Or() {
  return await G.query({ si: "item" }, (i) => i.getAll());
}
async function Mr() {
  return await G.query({ si: "item", zn: "type" }, (i) => i.getAll("group"));
}
async function Sr() {
  return await G.query({ si: "item", zn: "task" }, (i) => i.getAll(1));
}
async function Lr() {
  return await G.query({ si: "item", zn: "groupType" }, (i) =>
    i.getAll("folder"),
  );
}
async function Pr(i) {
  return await G.query({ si: "item", zn: "parentIds" }, (t) => t.getAll(i));
}
async function gl(i) {
  let t = new Set();
  for (; i && !t.has(i); ) {
    t.add(i);
    let e = await lt(i);
    if (!e) return !1;
    let s = e.parentIds?.find(ot);
    if (s) i = s;
    else return yt(e);
  }
  return !1;
}
async function Gr({ groupId: i, ol: t = 0, rl: e, bm: s = !1 }) {
  let n = await lt(i),
    r = new Map();
  r.set(n.id, n);
  let o = Xn(await Pr(i), Vt),
    a = n.childIds.map((x) => o.get(x)),
    l = a.filter(_),
    u = new Set(a.filter(P).map(Vt)),
    d = Math.max(0, e ? l.length - e - t : 0),
    p = new Set([...l.slice(0, t), ...(e ? l.slice(e) : [])].map((x) => x.id)),
    b = a.filter((x) => !p.has(x.id) && !(s && u.has(x.id)));
  b.forEach((x) => r.set(x.id, x));
  let y = b.filter(_).map((x) => x.id);
  return (
    await G.je(["item"], "readonly", async (x, [m]) => {
      let g = m.index("parentIds");
      for (; y.length; ) {
        let w = y.shift(),
          T = await G.Ie(g.getAll(w));
        (T.forEach((f) => r.set(f.id, f)),
          T.forEach((f) => {
            _(f) && y.push(f.id);
          }));
      }
    }),
    { items: [...r.values()], _u: b, al: d }
  );
}
const { il: kl, Di: Ce, le: Ti, ur: Dr, cr: Fr, fi: ke, he: Ai, cs: Os, $t: Mt, el: Tl, ue: vi, ce: $i, xs: Ps, fr: Er, dr: Br, ws: Gs, ms: Ds, Kt: oe } = globalThis.createOneTabBaseControls({ h: (...a) => c(...a), G: (...a) => M(...a), vi: (...a) => xe(...a), W: (...a) => W(...a), z: (...a) => J(...a), St: (...a) => Et(...a), Ei: (...a) => Ze(...a), mi: (...a) => Oe(...a), bi: (...a) => Me(...a), O: (...a) => $(...a), Si: (...a) => Ue(...a), J: () => K(), Cs: (...a) => on(...a), Ni: (...a) => Xe(...a), Yt: (...a) => le(...a), Qt: (...a) => ie(...a), Ji: (...a) => ri(...a), He: (...a) => es(...a), Be: (...a) => ts(...a), se: (...a) => mi(...a), dn: (...a) => $n(...a), spinner: (...a) => Pi(...a), getFt: () => Ct, getDnd: () => dnd, getP: () => F, getVt: () => { try { return Lt; } catch { return; } }, getFe: () => Oi, getLt: () => dt, getTooltip: () => ut, getQs: () => en });
const { bs: Fs, Gi: Re, kt: Ot, Pt: Nt, ys: Es, Xt: ae, W, yr: Cr } = globalThis.createOneTabViewControls({
  get $r() { return Zr; },
  get $t() { return Mt; },
  get A() { return v; },
  get Ae() { return Ui; },
  get B() { return j; },
  get Bi() { return Je; },
  get Bn() { return Qn; },
  get Dt() { return jt; },
  get Ei() { return Ze; },
  get Es() { return Xs; },
  get Fn() { return Jn; },
  get Fr() { return io; },
  get Ft() { return Ct; },
  get G() { return M; },
  get Ii() { return Ee; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get Ki() { return hi; },
  get Kt() { return oe; },
  get L() { return P; },
  get Ls() { return Zs; },
  get Mr() { return Xr; },
  get Mt() { return Ft; },
  get Ni() { return Xe; },
  get Nt() { return Jt; },
  get O() { return $; },
  get Oe() { return Wi; },
  get On() { return qn; },
  get P() { return F; },
  get Pe() { return Vi; },
  get Ps() { return Qs; },
  get Qe() { return cs; },
  get Qn() { return ar; },
  get Qt() { return ie; },
  get St() { return Et; },
  get Ts() { return js; },
  get We() { return as; },
  get X() { return Y; },
  get Yt() { return le; },
  get Zn() { return lr; },
  get Zt() { return se; },
  get _() { return V; },
  get as() { return As; },
  get bi() { return Me; },
  get bt() { return $t; },
  get ci() { return ye; },
  get cs() { return Os; },
  get displayAutoActionOnOpenOptionModal() { return displayAutoActionOnOpenOptionModal; },
  get dnd() { return dnd; },
  get dt() { return _; },
  get ee() { return wi; },
  get et() { return rt; },
  get fi() { return ke; },
  get ft() { return xt; },
  get ge() { return Bi; },
  get getActiveTabInCurrentWindow() { return getActiveTabInCurrentWindow; },
  get getItemById() { return lt; },
  get getTabById() { return getTabById; },
  get gr() { return Rr; },
  get gt() { return It; },
  get h() { return c; },
  get he() { return Ai; },
  get hi() { return me; },
  get ie() { return xi; },
  get ji() { return Ke; },
  get lt() { return dt; },
  get mi() { return Oe; },
  get ms() { return Ds; },
  get mt() { return vt; },
  get navigateToItem() { return navigateToItem; },
  get nt() { return ut; },
  get oi() { return we; },
  get oneTabPage() { return oneTabPage; },
  get os() { return Ts; },
  get ot() { return ct; },
  get qt() { return Ut; },
  get re() { return yi; },
  get showSharingModal() { return showSharingModal; },
  get ss() { return ys; },
  get st() { return ht; },
  get to() { return $o; },
  get ue() { return vi; },
  get ui() { return be; },
  get ut() { return ot; },
  get vn() { return Hn; },
  get we() { return Gi; },
  get ws() { return Gs; },
  get wt() { return yt; },
  get x() { return h; },
  get xi() { return $e; },
  get xs() { return Ps; },
  get xt() { return gt; },
  get ye() { return Ei; },
  get z() { return J; },
  get ze() { return hs; },
});
let Ie, Ct;
const { gr: Rr, nl: vl, kr: Ii, rl: St, Tr: Wr, lt: dt, Ar: zr, ol: $l, $r: Zr, fe: Oi, vr: Jr, Ir: Qr, Or: Kr, Mr: Xr, Sr: Vr, al: Il } = createOneTabUiControls({ h: (...a) => c(...a), G: (...a) => M(...a), W: (...a) => W(...a), Xt: ae, O: (...a) => $(...a), ws: Gs, co: (...a) => Ho(...a), xe: (...a) => Pi(...a), z: (...a) => J(...a), ti: (...a) => he(...a), Kr: (...a) => ko(...a), x: (...a) => h(...a), Gs: (...a) => Js(...a), J: () => K(), Yr: (...a) => vo(...a), Bs: (...a) => Vs(...a), Ve: (...a) => ps(...a), Qt: (...a) => ie(...a), Zi: (...a) => ai(...a), ze: (...a) => hs(...a), oi: (...a) => we(...a), St: (...a) => Et(...a), getSettings: () => v, getModal: () => $t, getTheme: () => Ie, getTooltip: () => ut });
const {
  X: Y,
  st: ht,
  gs: Bs,
  de: Mi,
  Lr: _r,
  di: Te,
  Dr: Yr,
  Gr: to,
  ll: Ol,
  Se: Zi,
  ft: xt,
  Rt: Qt,
} = globalThis.createOneTabTreeRenderer({
  get $t() { return Mt; },
  get A() { return v; },
  get Ae() { return Ui; },
  get B() { return j; },
  get Ct() { return Xt; },
  get Dt() { return jt; },
  get Ei() { return Ze; },
  get En() { return Zt; },
  get Fe() { return ii; },
  get Ft() { return Ct; },
  get G() { return M; },
  get Hs() { return 300; },
  get Ht() { return Ht; },
  get Ii() { return Ee; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get Kt() { return oe; },
  get L() { return P; },
  get Mt() { return Ft; },
  get Ni() { return Xe; },
  get Nt() { return Jt; },
  get O() { return $; },
  get Oe() { return Wi; },
  get Oi() { return ne; },
  get P() { return F; },
  get Pr() { return (...a) => eo(...a); },
  get Ps() { return (...a) => Qs(...a); },
  get Qe() { return cs; },
  get Qi() { return oi; },
  get Si() { return Ue; },
  get Tn() { return Fn; },
  get W() { return W; },
  get We() { return as; },
  get Zr() { return yo; },
  get Zt() { return se; },
  get _e() { return He; },
  get _s() { return Ri; },
  get ai() { return _t; },
  get be() { return Fi; },
  get bi() { return Me; },
  get bs() { return Fs; },
  get bt() { return $t; },
  get cr() { return Fr; },
  get dnd() { return dnd; },
  get dt() { return _; },
  get ee() { return wi; },
  get fe() { return Oi; },
  get ge() { return Bi; },
  get getItemById() { return lt; },
  get gn() { return Gn; },
  get gt() { return It; },
  get h() { return c; },
  get he() { return Ai; },
  get hi() { return me; },
  get js() { return (...a) => Ys(...a); },
  get jt() { return zt; },
  get ks() { return (...a) => Hs(...a); },
  get lt() { return dt; },
  get mi() { return Oe; },
  get ms() { return Ds; },
  get nn() { return _i; },
  get ns() { return gs; },
  get oneTabPage() { return oneTabPage; },
  get or() { return Tr; },
  get ot() { return ct; },
  get prettyPrintUrl() { return prettyPrintUrl; },
  get se() { return mi; },
  get te() { return pi; },
  get ue() { return vi; },
  get ui() { return be; },
  get ut() { return ot; },
  get we() { return Gi; },
  get wt() { return yt; },
  get x() { return h; },
  get xt() { return gt; },
  get ye() { return Ei; },
  get yn() { return Pn; },
  get yt() { return At; },
  get z() { return J; },
  get zi() { return ni; },
  get zt() { return te; },
});
const {
  pi: Ae,
  Pr: eo,
  ks: Hs,
  Fr: io,
  Ts: js,
  Pi: We,
  pe: Si,
  As: Us,
  $s: qs,
  hl: so,
  Er: no,
  ul: Ml,
  vs: Ns,
  Br: ro,
  cl: Sl,
  Fi: ze,
  Hr: oo,
  jr: ao,
  A: v,
  Vt: ve,
  Nr: lo,
  xi: $e,
  Yt: le,
  Ei: Ze,
  Bi: Je,
  fl: Ll,
  Is: Cs,
  qr: ho,
  Rr: uo,
  Hi: Qe,
  Os: Rs,
  Ms: Ws,
  Ur: co,
  Ss: zs,
  Ls: Zs,
  Ds: Li,
  Wr: fo,
  xe: Pi,
  we: Gi,
  Gs: Js,
  Cr: po,
  dl: Pl,
  Ps: Qs,
  pl: Gl,
  zr: xo,
  Jr: wo,
  xl: Dl,
  me: Di,
  Qr: mo,
  Fs: Ks,
  wl: Fl,
  ml: bo,
  Zr: yo,
  Es: Xs,
  ti: he,
  z: J,
  mi: Oe,
  _r: go,
  bi: Me,
  ji: Ke,
  Bs: Vs,
  Kr: ko,
  Hs: _s,
  js: Ys,
  bl: El,
  yl: Bl,
  Xr: To,
  Vr: Ao,
  gl: Hl,
  be: Fi,
  kl: jl,
  Yr: vo,
  to: $o,
  Tl: Ul,
  Al: ql,
  et: rt,
} = globalThis.createOneTabTreeActions({
  get $i() { return Fe; },
  get Ai() { return De; },
  get B() { return j; },
  get Cn() { return sr; },
  get Di() { return Ce; },
  get Fe() { return ii; },
  get G() { return M; },
  get Hn() { return Vn; },
  get Ht() { return Ht; },
  get ItemCache() { return kt; },
  get J() { return K; },
  get L() { return P; },
  get Ns() { return tn; },
  get O() { return $; },
  get Se() { return Zi; },
  get Si() { return Ue; },
  get Sn() { return Be; },
  get Sr() { return Vr; },
  get W() { return W; },
  get Xe() { return fi; },
  get Yi() { return di; },
  get Ze() { return Vt; },
  get _() { return V; },
  get _i() { return li; },
  get _n() { return hr; },
  get ci() { return ye; },
  get cs() { return Os; },
  get dt() { return _; },
  get en() { return Qi; },
  get getItemById() { return lt; },
  get getItems() { return ge; },
  get h() { return c; },
  get hi() { return me; },
  get lt() { return dt; },
  get mt() { return vt; },
  get navigateToItem() { return navigateToItem; },
  get oneTabPage() { return oneTabPage; },
  get ot() { return ct; },
  get qt() { return Ut; },
  get rr() { return kr; },
  get ss() { return ys; },
  get te() { return pi; },
  get ut() { return ot; },
  get x() { return h; },
  get xt() { return gt; },
  get yt() { return At; },
  get zi() { return ni; },
  get zt() { return te; },
  setThemeState({ wi: i, Ft: t }) { Ie = i; Ct = t; },
});
let F = {};
const { vt: Lt, ye: Ei, Ni: Xe, ge: Bi, Ns: tn, qi: Ve, io: Io, qs: en, $l: Nl, eo: Oo, Rs: sn, vl: Cl, ke: Hi, so: Mo, no: So, Il: Rl, Te: ji, ro: Lo, Us: nn, Ae: Ui, at: ft, Ws: rn, Cs: on, Ol: Po, Ml: Wl, zs: an, Js: ln, $e: qi, Sl: zl, oo: Go, Qs: hn, ve: Ni, Ie: Ci, Zs: un, _s: Ri, Oe: Wi } = globalThis.createOneTabTreeInteractions({get _(){return V},get _e(){return He},get _t(){return re},get A(){return v},get Ai(){return De},get ao(){return Do},get B(){return j},get Bi(){return Je},get ce(){return $i},get Cr(){return po},get Ct(){return Xt},get displayAutoActionOnOpenOptionModal(){return displayAutoActionOnOpenOptionModal},get dnd(){return dnd},get dt(){return _},get Dt(){return jt},get er(){return br},get es(){return bs},get et(){return rt},get fi(){return ke},get ft(){return xt},get G(){return M},get getItemById(){return lt},get getItems(){return ge},get Gi(){return Re},get go(){return zo},get gt(){return It},get Gt(){return qt},get h(){return c},get he(){return Ai},get hi(){return me},get ho(){return Eo},get Ht(){return Ht},get iconGrid(){return iconGrid},get is(){return ms},get ItemCache(){return kt},get J(){return K},get ji(){return Ke},get Ki(){return hi},get Ks(){return cn},get kt(){return Ot},get L(){return P},get Ls(){return Zs},get lt(){return dt},get mt(){return vt},get Mt(){return Ft},get navigateToItem(){return navigateToItem},get Nr(){return lo},get ns(){return gs},get Nt(){return Jt},get O(){return $},get oi(){return we},get oneTabPage(){return oneTabPage},get ot(){return ct},get P(){return F},set P(value){F = value},get pi(){return Ae},get pt(){return mt},get Pt(){return Nt},get qr(){return ho},get qt(){return Ut},get rn(){return mn},get Rr(){return uo},get rs(){return ks},get Rt(){return Qt},get showSharingModal(){return showSharingModal},get Ss(){return zs},get te(){return pi},get ti(){return he},get ut(){return ot},get Vt(){return ve},get W(){return W},get x(){return h},get X(){return Y},get xi(){return $e},get xs(){return Ps},get xt(){return gt},get ys(){return Es},get Yt(){return le},get zt(){return te}});
let ut, Le;
const { Ks: cn, ao: Do, lo: Fo, Ll: Zl, yi: Se, Dl: Jl, zt: te, Gl: Ql, Xs: fn, ho: Eo, uo: Bo, bt: $t, co: Ho, fo: jo, po: Uo, xo: qo, Me: zi, wo: No, Vs: dn, mo: Co, bo: Ro, yo: Wo, go: zo, Ys: pn, tn: xn, St: Et, ko: Zo } = globalThis.createOneTabImportExportControls({get _(){return V},get _r(){return go},get $s(){return qs},get A(){return v},get ai(){return _t},get As(){return Us},get at(){return ft},get B(){return j},get bi(){return Me},get ci(){return ye},get Cs(){return on},get Di(){return Ce},get dt(){return _},get es(){return bs},get G(){return M},get Ge(){return Xi},get gi(){return Le},set gi(value){Le=value},get h(){return c},get He(){return es},get In(){return Un},get ir(){return mr},get Ir(){return Qr},get is(){return ms},get ItemCache(){return kt},get J(){return K},get jt(){return zt},get Ke(){return fs},get L(){return P},get lt(){return dt},get mi(){return Oe},get Mt(){return Ft},get nt(){return ut},set nt(value){ut=value},get O(){return $},get oe(){return gi},get Oi(){return ne},get pt(){return mt},get ti(){return he},get vr(){return Jr},get Vt(){return ve},get W(){return W},get Ws(){return rn},get x(){return h},get yr(){return Cr},get yt(){return At},get z(){return J}});
setTimeout(async () => {
  (await xo(), await so(), await Jo());
}, 1);
function _e(i) {
  return c({
    style: {
      padding: "6px 14px",
      marginInline: "0px 10px",
      marginBlock: "0px 0px",
      borderRadius: "10px",
      backgroundColor: "var(--bg-color)",
      border: "1px solid var(--border-color)",
      maxWidth: "500px",
      display: "inline-block",
    },
    children: {
      content: M(i === "richText" ? "a" : "span", {
        style: {
          ...(i !== "richText" && { fontFamily: "monospace" }),
          fontSize: `${i === "richText" ? 13 : 12}px`,
        },
        textContent: {
          urlAndTitle: `https://www.example.com | ${h("exampleWebsitePageTitle")}`,
          titleAndUrl: `${h("exampleWebsitePageTitle")} | https://www.example.com`,
          url: "https://www.example.com",
          richText: h("exampleWebsitePageTitle"),
        }[i],
        ...(i === "richText" && {
          onclick: (t) => {
            t.preventDefault();
          },
          href: "https://www.example.com",
        }),
      }),
    },
  });
}
function Ye(i) {
  const t =
    "https://www.example.com/abc/def?g=01234567890123456789&h=01234567890123456789&i=01234567890123456789&k=01234567890123456789";
  return c({
    style: {
      paddingInline: "1px 6px",
      paddingBlock: "2px 4px",
      marginInline: "0px 10px",
      marginBlock: "0px 0px",
      borderRadius: "10px",
      backgroundColor: "var(--bg-color)",
      border: "1px solid var(--border-color)",
      maxWidth: "500px",
    },
    children: {
      tab: c({
        style: {
          display: "flex",
          alignItems: "flex-start",
          paddingInlineEnd: "12px",
          paddingTop: "4px",
          paddingBottom: "2px",
          position: "relative",
          marginInlineStart: "7px",
        },
        children: {
          zi: c({
            className: "tabLinkText",
            style: {
              position: "relative",
              top: "-1px",
              display: "flex",
              alignItems: "center",
              lineHeight: "inherit",
              fontSize: "inherit",
              height: "1.4em",
              flex: "0 0 auto",
            },
            p: Ri("", "pointer"),
          }),
          ba: M("a", {
            className: "tabLinkText",
            style: {
              flex: "1 1 auto",
              marginInlineStart: "10px",
              marginInlineEnd: "20px",
              textDecoration: "none",
            },
            children: {
              So: M("span", {
                className: "tabLinkText",
                textContent: h("exampleWebsitePageTitle"),
                onclick: (e) => e.preventDefault(),
              }),
            },
          }),
        },
      }),
      ...(i !== "none" && {
        Wi: M("div", {
          style: { marginInlineStart: "39px", color: "var(--text-color-weak)" },
          className: ["tabUrl", ...$(i === "abbr", "oneLineWithEllipsis")].join(
            " ",
          ),
          children: {
            dw: M("span", {
              className: "tabUrlText tabLinkTextStripesPossible",
              textContent: i === "domain" ? ii(t) : _i(t),
              onclick: (e) => e.preventDefault(),
            }),
          },
        }),
      }),
    },
  });
}
async function Jo() {
  document.body.style.backgroundColor = "var(--col-bg-color)";
  let i = new Ii({ heading: h("keyboardShortcutsColon") }),
    t;
  t = "chrome://extensions/shortcuts";
  let e;
  const s = (await chrome.runtime.getPlatformInfo()).os === "mac";
  let n,
    r = async () => {
      let l = await chrome.commands.getAll(),
        u = l.map((b) => Object.values(b).join("|||")).join("&&&");
      if (u === n) return;
      n = u;
      const d = (b) => {
        if (!b) return [h("notAssigned")];
        let y;
        if (
          (b.includes("+") && (y = b.split("+").map((m) => m.trim())),
          ["⇧", "⌥", "⌃", "⌘"].some((m) => b.includes(m)) && (y = [...b]),
          !y)
        )
          return [b];
        let x = new Map([
          ...$(s, ["⌃", "control ⌃"]),
          ...$(s, ["⌘", "command ⌘"]),
          ...$(s, ["⇧", "shift ⇧"]),
          ...$(s, ["⌥", "alt ⌥"]),
        ]);
        return ((y = y.map((m) => x.get(m) ?? m)), y);
      };
      l = l.map((b) => ({ ...b, n0: d(b.shortcut) }));
      let p = (await chrome.runtime.getPlatformInfo()).os;
      (i.Pd(
        c({
          style: {},
          children: {
            configure: c({
              style: { marginBottom: "10px" },
              children: {
                a: M("a", {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  textContent: h("configureShortcuts"),
                  onclick: async (b) => {
                    (b.preventDefault(),
                      await chrome.tabs.create({ url: t, active: !0 }));
                  },
                }),
                ...(e && { b: M("span", { textContent: " " + e }) }),
              },
            }),
            r0: c({
              style: {
                marginTop: "18px",
                display: "grid",
                gap: "18px 22px",
                gridTemplateColumns: "auto 1fr",
                padding: "5px 0",
                alignItems: "center",
              },
              children: l.sort(ne(Kn((b) => b.shortcut))).flatMap((b) => {
                let y = b.name,
                  x = b.description;
                return (
                  y === "_execute_action" && (x = h("openActionPopup")),
                  [
                    c({
                      children: or(
                        b.n0.map((m) => M("x-key", { textContent: m })),
                        () => M("x-key-plus", { textContent: "+" }),
                      ),
                    }),
                    M("span", { textContent: x }),
                  ]
                );
              }),
            }),
            note: c({
              style: {
                fontSize: "12.25px",
                color: "var(--text-color-weak)",
                paddingTop: "18px",
                paddingBottom: "28px",
              },
              textContent: h("conflictingShortcutsHint"),
            }),
            o0: c({ style: {}, p: c({}) }),
            a0: c({
              style: {
                display: "grid",
                gap: "10px 18px",
                gridTemplateColumns: "auto 1fr",
                padding: "5px 0",
                alignItems: "center",
              },
              children: [
                M("x-key", { textContent: "/" }),
                M("span", { textContent: h("oneTabSlashShortcutInfo") }),
                M("x-key", { textContent: "/" }),
                M("span", { textContent: h("popupSlashShortcutInfo") }),
                M("x-key", { textContent: "⇥" }),
                M("span", { textContent: h("tabShortcutInfo") }),
                M("x-key", { textContent: "11" }),
                M("span", { textContent: h("omniboxShortcutInfo") }),
              ],
            }),
            l0: c({
              style: {
                display: "grid",
                gap: "10px 18px",
                gridTemplateColumns: "auto 1fr",
                padding: "5px 0",
                alignItems: "center",
              },
              children: [
                c({ children: [M("x-key", { textContent: "shift ⇧" })] }),
                M("span", { textContent: h("dragCopyModifierInfo") }),
                c({
                  children: [
                    M("x-key", { textContent: s ? "command ⌘" : "ctrl" }),
                    M("x-key-plus", { textContent: "+" }),
                    M("x-key", { textContent: "enter ⏎" }),
                  ],
                }),
                M("span", { textContent: h("completeEditingShortcutInfo") }),
                ...$(["windows", "mac"].includes(p), [
                  ...$(
                    p === "mac",
                    c({
                      children: [
                        M("x-key", { textContent: "control ⌃" }),
                        M("x-key-plus", { textContent: "+" }),
                        M("x-key", { textContent: "command ⌘" }),
                        M("x-key-plus", { textContent: "+" }),
                        M("x-key", { textContent: "space" }),
                      ],
                    }),
                  ),
                  ...$(
                    p === "windows",
                    c({
                      children: [
                        M("x-key", { textContent: "windows ⊞" }),
                        M("x-key-plus", { textContent: "+" }),
                        M("x-key", { textContent: "." }),
                      ],
                    }),
                  ),
                  M("span", { textContent: h("emojiShortcutInfo") }),
                ]).flat(),
              ],
            }),
          },
        }).i,
      ),
        await Ut(5e3),
        r());
    };
  r();
  let o = new Ii({ heading: h("incognitoWindows") });
  o.Pd(
    c({
      style: { lineHeight: "1.7em" },
      textContent: h("toAllowOneTabInIncognito") + Li(),
    }).i,
  );
  let a = [
    new St({
      To: "startupLaunch",
      heading: h("optionStartupLaunchTitle"),
      options: [
        {
          settingValue: "displayOneTab",
          title: h("optionStartupLaunchDisplay"),
        },
        {
          settingValue: "none",
          title: h("optionStartupLaunchNone"),
          xi: h("optionStartupLaunchNoneDesc3"),
        },
      ],
    }),
    new St({
      To: "autoActionOnOpen",
      heading: h("optionAutoActionOnOpenHeading"),
      options: [
        {
          settingValue: "trash",
          title: h("optionAutoActionOnOpenTrashTitle"),
          xi: h("optionAutoActionOnOpenTrashDesc"),
        },
        {
          settingValue: "open",
          title: h("optionAutoActionOnOpenOpenTitle"),
          xi: h("optionAutoActionOnOpenOpenDesc"),
        },
        {
          settingValue: "archive",
          title: h("optionAutoActionOnOpenArchiveTitle"),
          xi: h("optionAutoActionOnOpenArchiveDesc"),
        },
      ],
      note: h("optionAutoActionOnOpenNote"),
    }),
    new St({
      To: "browserAction",
      heading: h("optionBrowserActionHeading"),
      options: [
        {
          settingValue: "sendTabsInWindow",
          title: h("optionBrowserActionSendTabsInWindowTitle"),
          xi: h("optionBrowserActionSendTabsInWindowDesc"),
        },
        {
          settingValue: "sendCurrentTab",
          title: h("optionBrowserActionSendCurrentTabTitle"),
          xi: h("optionBrowserActionSendCurrentTabDesc"),
        },
        {
          settingValue: "openPopup",
          title: h("optionBrowserActionOpenPopupTitle"),
          xi: h("optionBrowserActionOpenPopupDesc"),
        },
      ],
    }),
    new St({
      To: "duplicates",
      heading: h("optionDuplicatesTitle"),
      options: [
        { settingValue: "allow", title: h("optionDuplicatesAllow") },
        {
          settingValue: "reject",
          title: h("optionDuplicatesReject"),
          xi: h("optionDuplicatesRejectDesc"),
        },
      ],
      note: h("actionPopupOverrideNote"),
    }),
    new St({
      To: "pinnedTabs",
      heading: h("optionPinnedTabsTitle"),
      options: [
        { settingValue: "ignore", title: h("optionPinnedTabsDontSend") },
        { settingValue: "allow", title: h("optionPinnedTabsAllow") },
      ],
      note: h("actionPopupOverrideNote"),
    }),
    new St({
      To: "moveOneTabToCurrentWindowOnOpen",
      heading: h("optionMoveOneTabToCurrentWindowOnOpenHeading"),
      options: [
        {
          settingValue: "false",
          title: h("optionMoveOneTabToCurrentWindowOnOpenFalseTitle"),
        },
        {
          settingValue: "true",
          title: h("optionMoveOneTabToCurrentWindowOnOpenTrueTitle"),
        },
      ],
    }),
    new St({
      To: "urlDisplay",
      heading: h("optionUrlDisplayTitle"),
      options: [
        { settingValue: "none", title: h("optionUrlNone"), Fc: Ye("none") },
        {
          settingValue: "domain",
          title: h("optionUrlDomain"),
          Fc: Ye("domain"),
        },
        { settingValue: "abbr", title: h("optionUrlAbbr"), Fc: Ye("abbr") },
        { settingValue: "full", title: h("optionUrlFull"), Fc: Ye("full") },
      ],
    }),
    new St({
      To: "switchToOpenedTab",
      heading: h("optionSwitchToOpenedTabHeading"),
      icon: { prefix: "open" },
      options: [
        {
          settingValue: "false",
          title: h("optionSwitchToOpenedTabFalseTitle"),
        },
        { settingValue: "true", title: h("optionSwitchToOpenedTabTrueTitle") },
      ],
      note: h("optionSwitchToOpenedTabNote"),
    }),
    new St({
      To: "defaultWindowGroupOpenType",
      heading: h("optionDefaultWindowGroupOpenTypeHeading"),
      icon: { prefix: "open" },
      options: [
        {
          settingValue: "newWindow",
          title: h("optionDefaultWindowGroupOpenTypeNewWindow"),
        },
        {
          settingValue: "currentWindow",
          title: h("optionDefaultWindowGroupOpenTypeCurrentWindow"),
        },
      ],
    }),
    new St({
      To: "copyToClipboardFormat",
      heading: h("optionCopyToClipboardFormatHeading"),
      options: [
        {
          settingValue: "richText",
          title: h("optionCopyToClipboardFormatRichTextTitle"),
          xi: h("optionCopyToClipboardFormatRichTextDesc"),
          Fc: _e("richText"),
        },
        {
          settingValue: "urlAndTitle",
          title: h("optionCopyToClipboardFormatUrlTitleTitle"),
          Fc: _e("urlAndTitle"),
        },
        {
          settingValue: "titleAndUrl",
          title: h("optionCopyToClipboardFormatTitleUrlTitle"),
          Fc: _e("titleAndUrl"),
        },
        {
          settingValue: "url",
          title: h("optionCopyToClipboardFormatUrlOnlyTitle"),
          Fc: _e("url"),
        },
      ],
      note: h("optionCopyToClipboardFormatNote"),
    }),
    new St({
      To: "displayContextMenu",
      heading: h("optionDisplayContextMenuHeading"),
      options: [
        { settingValue: "true", title: h("enabled") },
        { settingValue: "false", title: h("disabled") },
      ],
      note: h("optionDisplayContextMenuNote"),
    }),
    new St({
      To: "discardNonActiveTabOnOpen",
      heading: h("optionDiscardNonActiveTabOnOpenHeading"),
      options: [
        { settingValue: "false", title: h("disabled") },
        { settingValue: "true", title: h("enabled") },
      ],
      note: h("optionDiscardNonActiveTabOnOpenNote"),
    }),
    i,
    o,
  ];
  (xe(document.getElementById("contentAreaDiv"), void 0, {
    style: { padding: "0", margin: "0" },
    children: {
      header: Po(
        h("options"),
        c({
          style: {
            flex: "1 0 auto",
            textAlign: "end",
            fontSize: "12px",
            marginInlineEnd: "30px",
            display: "flex",
          },
          children: [bo()],
        }),
      ),
      body: c({
        style: {
          marginTop: "63px",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          gap: "30px",
          paddingTop: "24px",
          paddingInlineStart: "28px",
        },
        children: {
          gx: c({ style: {}, children: a.map((l) => l.o.i) }),
          h0: c({
            style: {
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingInlineStart: "20px",
              fontSize: "12px",
              color: "var(--text-color-weak)",
            },
            textContent: `OneTab v${Qi}`,
          }),
        },
      }),
    },
  }),
    await Promise.all(a.map((l) => l.Lt?.())));
}
