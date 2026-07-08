// @ts-nocheck
globalThis.createOneTabTreeRenderer = function createOneTabTreeRenderer(deps) {
  with (deps) {
  class X {
    constructor({
      H: t,
      fn: e,
      Nt: s,
      xo: n,
      Ft: r = !1,
      A: o,
      At: a,
      dt: l = !0,
      hn: u = !1,
      It: c,
      C: d,
      vt: m,
      We: y,
      Ne: w,
      Mt: b,
      gn: g,
    }) {
      ((this.vt = m),
        (this.C = d),
        (this.xo = n),
        (this.fn = e),
        (this.A = o),
        (this.At = a),
        (this.hn = u),
        (this.Nt = s),
        (this.Ft = r),
        (this.dt = l),
        (this.It = c),
        (this.H = t),
        (this.We = y),
        (this.Ne = w),
        (this.Mt = b),
        (this.gn = g),
        (this.yo = Ht()),
        (this.o = h({})));
    }
    Ud({ e: t, $o: e }) {
      if (!e) return !1;
      if (t.detail === 0) return !0;
      let { clientX: s, clientY: n } = t;
      if (typeof s != "number" || typeof n != "number") return !0;
      let r = document.createRange();
      r.selectNodeContents(e);
      let o = Array.from(r.getClientRects()).filter(
        (a) => a.width > 0 && a.height > 0,
      );
      return (
        r.detach?.(),
        o.length || (o = [e.getBoundingClientRect()]),
        o.some((a) => s >= a.left && s <= a.right && n >= a.top && n <= a.bottom)
      );
    }
    Zc({ e: t, $o: e, zd: s = !1, Wd: n = !1 }) {
      return this.Ud({ e: t, $o: e })
        ? (s && t.stopPropagation(),
          n && t.preventDefault(),
          this.Nt({ e: t, qi: this }))
        : (t.preventDefault(), !1);
    }
    Dr(t, e) {
      this.J &&
        e &&
        this.yo !== e &&
        (async () =>
          await this.st({
            ta: this.nn,
            ys: this.ys,
            pinned: this.pinned,
            xe: this.xe,
            wt: this.wt,
            kn: this.kn,
            ut: this.ut,
          }))();
    }
    async st({ ta: t, ys: e, pinned: s, xe: n, wt: r, kn: o, h: a, ut: l }) {
      ((this.l = { ...t }),
        (this.ut = l),
        (this.ys = e),
        (this.pinned = s),
        (this.xe = n),
        (this.wt = r),
        (this.J = this.l.uncommitted),
        (this.X = `uncommitted:tab-${this.l.id}`),
        (this.kn = o));
      let u = Tn(yt(this.l.url), this.xo);
      if ((this.Qc(), this.J)) {
        this.nn = structuredClone(this.l);
        let y = await Qe(this.X),
          w = Object.entries(y);
        w.length > 0 &&
          (w.forEach(([b, g]) => (this.l[b] = g)),
          (this.Rt = !0),
          this.It({ de: !0, pe: !1, X: this.X, Ui: this.yo }));
      }
      let c, d;
      if (this.gn) {
        let { o: y, Nd: w } = await this.Jc({ h: a });
        ((c = y), (d = w));
      }
      let m = this.o.i;
      ((this.o = h({
        dataset: { id: this.l.id },
        className: [
          "tab",
          ...O(this.l.archived, "archived"),
          ...O(this.l.task && !this.l.done, "task-pending"),
          ...O(this.l.task && this.l.done, "task-done"),
        ].join(" "),
        style: {
          ...(!this.dt && { display: "none" }),
          ...(o && {
            paddingInline: "1px 4px",
            paddingBlock: `2px ${this.C ? 6 : 4}px`,
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "var(--bg-color)",
          }),
        },
        init: (y) => {
          ((this.m ??= []).push(
            mi(y.i, (w) => {
              !P.Xr &&
                !this.ue?._t &&
                (this.Kc(),
                this.K && (this.K.style.visibility = "visible"),
                this.it && (this.it.style.visibility = "visible"),
                this.K &&
                  this.it &&
                  this.o.tab.i.insertBefore(de(), this.o.tab.i.children.item(0)));
            }),
          ),
            (this.m ??= []).push(
              bi(y.i, (w) => {
                (this.K && (this.K.style.visibility = "hidden"),
                  this.it && !this.Gt() && (this.it.style.visibility = "hidden"),
                  de().remove());
              }),
            ));
        },
        children: {
          tab: h({
            className: "tabInner",
            style: { ...(o && { paddingInlineEnd: "19px" }) },
            children: {
              zi: h({
                className: "favIconDiv tabLinkText",
                p: _s(this.l.url, this.Ft && !this.ut ? "move" : "default"),
              }),
              ba: G("a", {
                draggable: !1,
                ...(!this.kn && { tabIndex: -1 }),
                className: "tabLink tabLinkText",
                style: { cursor: "default" },
                children: {
                  So: G("span", {
                    className: "tabLinkText tabLinkTextStripesPossible",
                    style: { cursor: "pointer" },
                    textContent: Qi(this.l.title, "Untitled"),
                  }),
                },
                href: u,
                onclick: (y) =>
                  this.Zc({ e: y, $o: this.o.u.So.i, zd: !0, Wd: !0 }),
              }),
              ...(this.C && {
                xc: new Dr({
                  Rd: o && d > 0,
                  Zd: !0,
                  Qd: "tabLinkText",
                  We: this.We,
                  Ne: this.Ne,
                }),
              }),
              ...(!this.C && {
                Ei: W(
                  {
                    className: "flag tabMoreButton",
                    width: "13px",
                    height: "11px",
                    l: {
                      onclick: async (y) => {
                        (y.stopPropagation(),
                          (this.Qe = new fe({
                            maxHeight: "600px",
                            oi: !1,
                            Vi: async () =>
                              h({
                                style: {
                                  paddingInline: "8px",
                                  paddingBlock: "8px 8px",
                                  maxWidth: "300px",
                                },
                                children: await Oe({
                                  view: this,
                                  H: this.H,
                                  Vt: !1,
                                  me: !this.C,
                                  vt: this.vt,
                                  Zr: () => {
                                    (this.K &&
                                      (this.K.style.visibility = "hidden"),
                                      this.it &&
                                        !this.Gt() &&
                                        (this.it.style.visibility = "hidden"),
                                      this.Qe &&
                                        (this.Qe.le(!1), this.Qe.destroy()));
                                  },
                                }),
                              }),
                            onHidden: () => {
                              this.o.u.Ei.style.visibility = "";
                            },
                            onShown: () => (lt.rn = () => this.Qe.le(!1)),
                          })),
                          (this.o.u.Ei.style.visibility = "visible"),
                          this.o.u.Ei.appendChild(this.Qe.o.i),
                          this.Qe.le(!0));
                      },
                    },
                  },
                  (y) => `images/vertical-ellipses${y ? "" : "-dark"}.png`,
                ),
              }),
              ...(!this.C && { flags: new bs({ view: this }) }),
            },
          }),
          ...(this.Mt !== "none" && {
            Wi: G("div", {
              className: [
                "tabUrl",
                ...O(
                  this.Mt === "abbr" || this.Mt === "domain",
                  "oneLineWithEllipsis",
                ),
              ].join(" "),
              children: {
                a: G("a", {
                  draggable: !1,
                  tabIndex: -1,
                  className: "tabUrlText tabLinkTextStripesPossible",
                  href: u,
                  onclick: (y) => this.Zc({ e: y, $o: this.o.u.Wi.a.i }),
                  children: {
                    dw: G("span", {
                      textContent: Si(prettyPrintUrl(this.l.url), (y) =>
                        js(this.Mt === "domain" ? Fe(y) : nn(y), Hs),
                      ),
                    }),
                  },
                }),
              },
            }),
          }),
          ...(this.gn && {
            info: h({
              style: {
                textAlign: "end",
                fontSize: "12px",
                marginInlineEnd: "20px",
                marginBottom: "4px",
                marginInlineStart: "51px",
                color: "var(--text-color-weak)",
                display: "flex",
              },
              children: {
                location: c,
                co: h({
                  style: {
                    flex: "0 0 auto",
                    marginInlineStart: "auto",
                    Qh: "balance",
                  },
                }),
              },
            }),
          }),
        },
      })),
        (this.m ??= []).push(
          ...dnd.ir({
            nr: {},
            sr: this.o.i,
            rr: this.o.i,
            ur: this.o.i,
            ar: (y) => this.Jd(y),
            lr: () => Ni(),
            cr: () => !this.Ft || this.Kd,
          }),
        ),
        this.o.u.flags?.update(),
        this.gn && this.ln(),
        this.l.notes?.text && this.Oo(),
        m?.parentNode && m.replaceWith(this.o.i),
        (this.zi = this.o.tab.zi),
        this.A?.nt.includes(this) && this.lt(!0, !0));
    }
    async Jc({ h: t }) {
      let e = "11px;",
        s;
      this.C && (s = x("otherCopiesColon"));
      let n = this.l.id;
      await t.ke();
      let r = await getItemById(n),
        o = await Promise.all(
          r.parentIds
            .filter((l) => ut(l) && !t.re.has(l))
            .map((l) => {
              let u = t.v(l);
              return {
                parentId: l,
                Xd: Math.max(
                  u.createDate ?? 0,
                  u.modifyDate ?? 0,
                  u.accessDate ?? 0,
                ),
              };
            })
            .sort(Oi(ai((l) => l.Xd)))
            .map(
              async ({ parentId: l }, u) =>
                await we({
                  h: t,
                  itemId: l,
                  fontSize: e,
                  Qo: !0,
                  jl: !u,
                  prefix: s,
                }),
            ),
        ),
        a;
      if (!o.length) a = h({});
      else if (o.length === 1) a = h({ p: o[0] });
      else {
        let l = () =>
          G("span", { style: { textAlign: "start" }, textContent: ",   " });
        a = h({
          style: { textAlign: "start", marginInlineEnd: "20px" },
          children: {
            Yd: (() => {
              let [u, c] = Mt("placeholderAndOtherLocations", o.length - 1).split(
                  "PLACEHOLDER",
                ),
                d = [u, o[0], c].filter((m) => m);
              return (
                (d = d.map((m) =>
                  typeof m == "string"
                    ? G("span", {
                        style: { cursor: "pointer" },
                        onclick: (y) => {
                          ((a.u.Yd.i.style.display = "none"),
                            a.u._d.i.replaceWith(
                              G("span", {
                                children: te(
                                  o.map((w, b) => ({ [`loc_${b}`]: w })),
                                  l,
                                ),
                              }).i,
                            ));
                        },
                        textContent: m,
                      }).i
                    : m,
                )),
                G("span", { children: d })
              );
            })(),
            _d: G("span", {}),
          },
        });
      }
      return { o: a, Nd: o.length };
    }
    async Vd({ h: t }) {
      let { o: e } = await this.Jc({ h: t });
      this.o.info.location.i.replaceWith(e.i);
    }
    Gt() {
      return this.oa;
    }
    isSelected() {
      return !this.A?.count() || this.Gt();
    }
    Si(t) {
      let e = (o) => `images/${t}${o ? "" : "-dark"}.png`,
        s = e(!0),
        n = e(!1),
        r = this.it.firstElementChild;
      ((r.dataset.lightSrc = s),
        (r.dataset.darkSrc = n),
        (r.draggable = !1),
        (r.src = Ft ? s : n));
    }
    lt(t, e, s) {
      this.A &&
        ((this.oa = t),
        t && this.Kc(),
        (this.it.firstElementChild.style.opacity = t ? "1" : "0.5"),
        (this.it.style.visibility = t ? "visible" : "hidden"),
        this.Si(t ? "tick" : "tickbox"),
        e ||
          (this.A.Ao({ newState: this.Gt(), selection: this, Nc: s }),
          s && this.wt.na(this.A.yn, this)));
    }
    Xc(t) {
      this.Kd = t;
    }
    tr() {
      return this.dt;
    }
    Wt(t) {
      ((this.dt = t), (this.o.i.style.display = t ? "block" : "none"));
    }
    Jl() {
      return this.l;
    }
    us(t, e, s) {
      (se({ label: jt(this.l.title), Ro: this.o.u.So.i, oe: t, ei: e, ii: s }),
        this.Y?.us(t, e, s),
        this.o.u.Wi &&
          se({
            label: prettyPrintUrl(this.l.url),
            Ro: this.o.u.Wi.a.i,
            oe: t,
            ei: e,
            ii: s,
            No: Hs,
          }));
    }
    async Ge(t, e) {
      if (this.j) return;
      let s = t.itemId;
      if (t.type === "update" && this.l.id === s) {
        if (
          (st(t, "title", (n) => this.setTitle(n)),
          st(t, "notes", (n) => this.wo(n)),
          st(t, "rating", (n) => this.fi(n)),
          st(t, "archived", (n) => this.Bi(n)),
          ui.some((n) => t.propChanges[n]))
        ) {
          let n = Object.fromEntries(
            Object.entries(t.propChanges)
              .filter(([r, o]) => ui.includes(r))
              .map(([r, o]) => [r, o.new]),
          );
          this.Ci(n);
        }
      } else if (
        (t.type === "move" &&
          Dt(
            this.l.id,
            t.itemsMeta.map((n) => n.itemId),
          )) ||
        (t.type === "copy" && Dt(this.l.id, t.itemIds))
      ) {
        let n = await getItemById(this.l.id);
        ((this.l.parentIds = n.parentIds), this.gn && (await this.Vd({ h: e })));
      } else if (
        t.type === "store" &&
        Dt(
          this.l.id,
          t.tabItems.map((n) => n.id),
        )
      ) {
        let n = await getItemById(this.l.id);
        n &&
          ((this.l = { ...n }),
          this.setTitle(this.l.title),
          this.wo(this.l.notes),
          this.fi(this.l.rating),
          this.Bi(this.l.archived),
          this.Ci(this.l));
      }
    }
    setTitle(t) {
      ((this.l.title = t),
        (this.o.u.So.i.textContent = Qi(t, x("untitled"))),
        this.Je?.et(t));
    }
    wo(t) {
      ((this.l.notes = t), this.Oo(), this.Y.et(this.l.notes?.text));
      let e = this.l.notes?.text;
      this.Y.i.style.display = e ? "block" : "none";
    }
    un(t) {
      ((this.pinned = t), this.o.u.flags?.update());
    }
    fi(t) {
      ((this.l.rating = t), this.o.u.flags?.update());
    }
    Bi(t) {
      ((this.l.archived = +t),
        this.o.i.classList[t ? "add" : "remove"]("archived"));
    }
    Ci(t) {
      (Object.entries(t).forEach(([e, s]) => (this.l[e] = s)),
        ["task-pending", "task-done"].forEach((e) =>
          this.o.i.classList.remove(e),
        ),
        this.l.task && !this.l.done && this.o.i.classList.add("task-pending"),
        this.l.task && this.l.done && this.o.i.classList.add("task-done"),
        this.o.u.flags?.update());
    }
    Qc() {
      (this.Ue && clearTimeout(this.Ue),
        this.o.u.Ei && (this.o.u.Ei.onclick = null),
        this.Tn?.destroy(),
        this.Qe && (this.Qe.le(!1), this.Qe.destroy()),
        this.o.u.xc?.destroy(),
        this.o.u.flags?.destroy(),
        (this.m ?? []).forEach((t) => t.remove()),
        (this.m = null),
        this.Je?.destroy(),
        this.ie?.destroy(),
        this.Y?.destroy(),
        (this.Je = null),
        (this.ie = null),
        (this.Y = null),
        this.ue?.destroy(),
        (this.ue = null),
        (this.it = null),
        (this.K = null));
    }
    De({ pi: t }) {
      this.j ||
        ((this.j = !0),
        this.Qc(),
        this.A && this.Gt() && this.A.Ao({ newState: !1, selection: this }),
        (this.wt = null),
        (this.fn = null),
        (this.A = null),
        (this.Nt = null),
        (this.It = null),
        (this.We = null),
        (this.Ne = null),
        t || this.o.i.remove());
    }
    Oo() {
      (this.Yc(),
        this.Y ||
          ((this.Y = new Kt({
            style: {
              marginInlineStart: "49px",
              marginInlineEnd: "10px",
              marginBottom: "2px",
              borderTop: "1px solid var(--border-color)",
              color: this.l.archived
                ? "var(--text-color-weak)"
                : "var(--text-color)",
            },
            ue: this.ue,
            value: this.l.notes?.text,
            rs: "tabLinkText",
            ls: "tabLinkTextStripesPossible",
            Gi: x("notes"),
            cs: !0,
          })),
          this.o.i.appendChild(this.Y.i)));
    }
    _c() {
      (this.Yc(),
        this.Je ||
          ((this.Je = new Kt({
            style: {
              display: "none",
              marginInlineStart: "8px",
              marginInlineEnd: "20px",
              flex: "1 1 auto",
              top: "-2px",
            },
            ue: this.ue,
            value: jt(this.l.title),
            rs: "tabLinkText",
            Gi: x("title"),
            Qs: (t) => (this.o.u.So.i.textContent = Qi(t, x("untitled"))),
          })),
          this.o.tab.i.insertBefore(this.Je.i, this.o.tab.ba.i)),
        !this.ie &&
          this.hn &&
          ((this.ie = new Kt({
            style: {
              display: "none",
              marginInlineStart: `${J() ? 49 : 10}px`,
              marginInlineEnd: `${J() ? 10 : 49}px`,
              marginBottom: "5px",
              direction: "ltr",
              "unicode-bidi": "isolate",
            },
            ue: this.ue,
            value: this.l.url,
            rs: "tabLinkText",
            Gi: "URL",
            cs: !1,
          })),
          this.Y
            ? this.o.i.insertBefore(this.ie.i, this.Y.i)
            : this.o.i.appendChild(this.ie.i)));
    }
    Kc() {
      (this.A &&
        !this.it &&
        ((this.it = W(
          {
            className: "tabTickImg tabLinkText",
            dimension: `${28 / 2}px`,
            style: {
              [J() ? "left" : "right"]: "-9px",
              width: "20px",
              height: "14px",
            },
            init: (t) => {
              ((this.m ??= []).push(
                z(t.i, "click", (e) => this.lt(!this.Gt(), !1, Ei(e))),
              ),
                (this.m ??= []).push(z(t.i, "contextmenu", (e) => this.ya(e))));
            },
          },
          (t) => `images/tickbox${t ? "" : "-dark"}.png`,
        )),
        this.o.tab.i.insertBefore(this.it, this.o.tab.i.firstChild),
        (this.m ??= []).push(
          mi(this.it, (t) => {
            P.Xr ||
              this.Gt() ||
              ((this.it.firstElementChild.style.opacity = "0.5"),
              (this.it.style.visibility = "visible"),
              this.Si("tick"));
          }),
        ),
        (this.m ??= []).push(
          bi(this.it, (t) => {
            this.it &&
              !this.Gt() &&
              ((this.it.style.opacity = "1"),
              (this.it.style.visibility = "hidden"),
              this.Si("tickbox"));
          }),
        )),
        this.fn &&
          !this.ut &&
          !this.K &&
          ((this.K = W(
            {
              className: "tabCrossImg tabLinkText",
              dimension: `${26 / 2}px`,
              style: {
                [J() ? "left" : "right"]: `${this.A ? -28 : -9}px`,
                width: "20px",
                height: "16px",
              },
              l: {
                onclick: async (t) => {
                  this.fn(this, t);
                },
              },
            },
            (t) => `images/cross2${t ? "" : "-dark"}.png`,
          )),
          this.o.tab.i.insertBefore(this.K, this.o.tab.i.firstChild)));
    }
    ya(t) {
      (t.preventDefault(),
        t.stopPropagation(),
        (this.Tn = new lt({
          fs: !0,
          Z: document,
          ca: t.currentTarget,
          la: h({
            style: { margin: "8px" },
            children: ks({
              view: this,
              Vc: this.wt,
              Ni: () => this.Tn.destroy(),
            }),
          }),
        })));
    }
    Yc() {
      this.ue ||
        (this.ue = new ms({
          children: [],
          Ws: () => {
            (this.Xc(!0),
              this.K && (this.K.style.visibility = "hidden"),
              this._c(),
              this.Oo(),
              (this.o.tab.ba.i.style.display = "none"),
              this.o.Wi && (this.o.Wi.i.style.display = "none"),
              (this.Je.i.style.display = "block"),
              this.ie && (this.ie.i.style.display = "block"),
              (this.Y.i.style.display = "block"),
              (this.Y.i.style.borderTop = "none"),
              (this.Y.i.style.marginTop = "-1px"));
          },
          ns: async () => {
            (this.Xc(!1),
              (this.o.tab.ba.i.style.display = "inline"),
              this.o.Wi && (this.o.Wi.i.style.display = "block"),
              (this.Je.i.style.display = "none"),
              (this.Y.i.style.borderTop = "1px solid var(--border-color)"),
              (this.Y.i.style.marginTop = "0"),
              this.ie && (this.ie.i.style.display = "none"));
            let t = this.l.title,
              e = this.l.url,
              s = structuredClone(this.l.notes);
            ((this.l.title = this.Je.value),
              this.Y.value
                ? ((this.l.notes ??= {}).text = this.Y.value)
                : this.l.notes && delete this.l.notes.text,
              (this.Y.i.style.display = this.l.notes?.text ? "block" : "none"));
            let n = !0;
            if (this.hn)
              if (!this.ie.value) this.ie.et(this.l.url);
              else {
                let r = yt(this.ie.value);
                if (r !== this.l.url) {
                  ((n = !1), (this.tu = !0));
                  let [o] = await A.Xo([
                      { id: await zi(r), kt: r, oh: [this.xe] },
                    ]),
                    a = o;
                  (Object.entries(this.l)
                    .filter(([d]) => !["id", "url", "parentIds"].includes(d))
                    .forEach(([d, m]) => (a[d] = m)),
                    (a.parentIds = [this.xe]));
                  let l = this.wt.k
                    .map((d, m) => [d, m])
                    .filter(([d]) => d.l.id === this.l.id)
                    .map(([d, m]) => m);
                  await A.In({ vn: [a], O: this.xe, N: this.index, An: [a.id] });
                  let u = new ItemCache();
                  if (
                    (await u.ke(),
                    !(
                      this.l.parentIds.filter(
                        (d) => ut(d) && !u.re.has(d) && d !== this.xe,
                      ).length || l.length > 1
                    ) && this.l.parentIds.includes("quickList"))
                  ) {
                    let m = (await getItemById("quickList")).childIds.indexOf(
                      this.l.id,
                    );
                    await A.eu({ iu: [a.id], O: "quickList", N: m });
                  }
                  await A.move({ rt: [di(this)], O: "delete" });
                }
              }
            if (n) {
              let r = {
                ...(t !== this.l.title && { title: this.l.title }),
                ...(e !== this.l.url && { url: this.l.url }),
                ...(!Ii(s, this.l.notes) && { notes: this.l.notes }),
              };
              if (Object.entries(r).length > 0)
                if (this.J) {
                  (r.title === "" && (r.title = void 0),
                    ["", void 0].includes(r.notes?.text) && (r.notes = void 0));
                  let o = await Zt(this.X, r);
                  ((this.Rt = Object.entries(o).length > 0),
                    this.It({ de: this.Rt, pe: !0, X: this.X, Ui: this.yo }));
                } else await A.Fi(this.l.id, r);
            }
          },
        }));
    }
    Rc() {
      this.lt(!1, !0);
    }
    ln() {
      let t = new Date(this.l.createDate),
        e = (new Date().getTime() - t) / 1e3,
        s = t.toLocaleDateString(void 0, { cc: "short" }),
        n = t.toLocaleTimeString(void 0, { rd: "short" });
      this.o.u.co.i.textContent = `${s} ${n} - ${We(t)}`;
      let r = 10;
      (e > 60 && (r = 15),
        e > 300 && (r = 60),
        e > 3600 && (r = 900),
        e > 3600 * 24 * 7 && (r = 3600),
        (this.Ue = setTimeout(() => this.ln(), r * 1e3)));
    }
    Jd(t) {
      let e = (this.A?.nt ?? []).filter((l) => l?.o?.i?.isConnected && l?.l),
        s = [...e];
      if (
        (s.includes(this) || s.push(this),
        new Set(s.map((l) => be(l.l))).size > 1)
      )
        return (bt.Is || zt(x("cannotMixTabsGroupsFoldersDuringDrag")), !1);
      dnd.ft.types = ["tab", ...O(this.C, "trash"), ...O(this.ut, "locked")];
      let r = [this.o.i];
      e.map((l) => l.o.i).forEach((l) => {
        r.includes(l) || r.push(l);
      });
      let o = e.map(di);
      (e.includes(this) || o.push(di(this)),
        (dnd.ft.Ae = {
          itemsMeta: o,
          ...(this.A && { selectionGroupId: this.A.Wc() }),
        }),
        this.K && (this.K.style.visibility = "hidden"),
        this.it && (this.it.style.visibility = "hidden"),
        de().remove());
      let a;
      (o.length > 1 && (a = "multi-dragged-tab"),
        dnd.bh({ title: this.l.title }),
        ye({ e: t, Kr: a, ji: r }));
    }
  }
  function st(i, t, e) {
    let s = i.propChanges;
    if (s[t] !== void 0) {
      let n = s[t].new;
      e(n);
    }
  }
  let gs;
  function de() {
    return (
      (gs ??= h({
        className: "tabViewTickCrossHoverDiv",
        style: {
          [J() ? "left" : "right"]: "-31px",
          boxShadow: `var(--tick-cross-box-shadow${J() ? "" : "-rtl"})`,
        },
      }).i),
      gs
    );
  }
  function Lr(i) {
    return {
      itemId: i.l.id,
      ...(B(i.l) && {
        Fe: i.xe ?? i.G?.l.id,
        zt: ns(
          i.wt?.k.filter((t) => t.l.id === i.l.id).findIndex((t) => t === i),
        ),
      }),
    };
  }
  function di(i) {
    return xt(Lr(i));
  }
  class Dr {
    constructor({ Zd: t, As: e, We: s, Ne: n, su: r, Qd: o, Rd: a }) {
      ((this.We = s),
        (this.Ne = n),
        (this.su = r),
        (this.o = h({
          className: [o, "trashControls"].join(" "),
          style: {
            display: "flex",
            alignItems: "center",
            flex: "0 0 auto",
            position: "relative",
            left: `${t ? 8 : 0}px`,
            top: `${t ? 0 : e ? 5 : 2}px`,
            height: 0,
          },
          children: {
            Qr: new $t({
              ni: !0,
              label: x(a ? "deleteThisCopy" : "delete"),
              icon: { I: "cross-action", dimension: "10px" },
              onclick: this.Ne,
            }),
            Jr: new $t({
              label: x("moveBack"),
              icon: { I: "move", dimension: "15px" },
              onclick: this.We,
            }),
          },
        })));
    }
    destroy() {
      (this.o.Qr?.destroy(),
        this.o.Jr?.destroy(),
        (this.We = null),
        (this.Ne = null),
        (this.su = null));
    }
  }
  class Gr {
    constructor({ ot: t, tf: e, marginInlineStart: s }) {
      ((this.o = h({
        className: "treeGlyph",
        style: {
          flex: `1 0 ${e}px`,
          display: t ? "none" : "flex",
          flexDirection: "column",
          userSelect: "none",
          fontSize: 0,
          marginInlineStart: s,
        },
        children: {
          top: h({
            className: "treeGlyphTop",
            style: {
              flex: `0 0 ${e - 1}px`,
              height: `${e - 1}px`,
              width: "6px",
              display: "inline-block",
              borderBottom: "1px solid var(--tree-glyph-color)",
            },
          }),
        },
      })),
        (this.i = this.o.i));
    }
  }
  class ll {
    constructor() {}
    ef({ ye: t, $n: e, Sn: s } = { ye: void 0, $n: void 0, Sn: void 0 }) {
      t !== this.ye &&
        (this.ye && !this.ye.j && this.ye?.setActive(!1),
        (this.ye = t),
        (this.$n = e),
        (this.Sn = s));
    }
    fw() {
      (this.ye && !this.ye.j && this.ye?.setActive(!1),
        (this.$n = void 0),
        (this.Sn = void 0));
    }
  }
  class Se {
    constructor({
      ot: t = !0,
      yi: e,
      $s: s,
      Pt: n,
      Z: r,
      Mo: o,
      q: a,
      itemId: l,
      G: u,
      Go: c,
      Do: d,
      B: m,
      Ht: y,
      Po: w,
      nu: b,
      Ot: g,
      On: p,
      L: k = this,
      ga: f,
      ou: T,
      A: $,
      Mn: M,
      yt: S,
      xt: H,
      Ss: Q,
      ru: ht,
    }) {
      ((this.L = k),
        (this.Ot = g),
        (this.On = p),
        (this.q = a),
        (this.itemId = l),
        (this.G = u),
        (this.ot = t),
        (this.yi = e),
        (this.$s = s),
        (this.Pt = n),
        (this.Z = r),
        (this.Mo = o),
        (this.Go = c),
        (this.Do = d),
        (this.B = m),
        (this.Po = w),
        (this.nu = b),
        (this.ga = f),
        (this.ou = T),
        (this.A = $),
        (this.Mn = M),
        (this.yt = S),
        (this.xt = H),
        (this.Ss = Q),
        (this.Ht = y),
        (this.ru = ht));
    }
    async st({ h: t, ka: e, sf: s } = {}) {
      t ??= (await new ItemCache().Te({ groupId: this.itemId })).h;
      let n = t.v(this.itemId);
      this.l = { ...n };
      let r = this.l.id === "trash" ? [] : [this.l.id];
      e ??= await A.pw(`treeItemsOpen:${this.q}`, r);
      let o = e.includes(this.l.id),
        a,
        l;
      if (this.l.type === "tab") a = this.l.title;
      else {
        let [b, g] = or({ h: t, l: this.l });
        ((a = b), (l = g));
      }
      let u = B(this.l) ? 1 : t.Xi(this.l.id),
        c = this.Ht && t.ll(this.l.id).cl,
        d = this.Ht ? c : u,
        m = Number(d).toLocaleString();
      this.Ht && !d && (m = "");
      let y = "none";
      (L(this.l) && (y = "folder"),
        wt(this.l) && (y = "trash"),
        (this.isOpen = o),
        (this.icon = y),
        (this.au = 11));
      let w = this.i;
      (w && this.De({ pi: !0 }),
        (this.o = h({
          dataset: { id: `${this.l.id}-tree-${this.q}` },
          className: "treeItem",
          style: {
            display: "flex",
            alignItems: "stretch",
            marginInlineStart: "2px",
          },
          children: {
            mw: new Gr({ ot: this.ot, tf: this.au }),
            se: h({
              style: { position: "relative", width: "100%" },
              children: {
                body: h({
                  style: {
                    display: this.Po && this.ot ? "none" : "flex",
                    alignItems: "flex-start",
                    ...(this.ot && { paddingBottom: "2px" }),
                  },
                  init: (b) => {
                    ((this.m ??= []).push(
                      z(b.i, "pointerenter", (g) => {
                        (this.Nn(),
                          this.xt || this.Ta(),
                          !dnd.F &&
                            this.qt &&
                            (this.qt.i.style.visibility = "visible"));
                      }),
                    ),
                      (this.m ??= []).push(
                        z(b.i, "pointerleave", (g) => {
                          this.qt && (this.qt.i.style.visibility = "hidden");
                        }),
                      ));
                  },
                  children: {
                    ...(this.A &&
                      !this.ot && {
                        Pe: new cr({
                          style: { flex: "0 0 auto", top: "8px" },
                          color: "gray",
                          value: !1,
                          borderStyle: "1px solid var(--tree-glyph-color)",
                          onChange: (b, g) => {
                            (this.A.Ao({ newState: b, selection: this, Nc: g }),
                              g && this.G.na(this.A.yn, this));
                          },
                        }),
                      }),
                    ...(B(this.l) && {
                      zi: h({
                        className: "tabLinkText",
                        style: {
                          position: "relative",
                          top: "0px",
                          left: "-3px",
                          display: "flex",
                          alignItems: "center",
                          lineHeight: "inherit",
                          fontSize: "inherit",
                          height: "1.4em",
                          flex: "0 0 auto",
                        },
                        p: _s(this.l.url),
                      }),
                    }),
                    ...(this.icon === "folder" && {
                      so: h({
                        className: "tree-item-text",
                        p: W(
                          {
                            width: "14px",
                            height: "14px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: `${(this.Pt, 3)}px`,
                              paddingInlineEnd: `${(this.Pt, 4)}px`,
                              position: "relative",
                              top: "3px",
                              cursor: "pointer",
                            },
                            l: { onclick: (b) => this.setActive(!0, !0) },
                          },
                          (b) => `images/folder${b ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    ...(this.icon === "trash" && {
                      lu: h({
                        className: "tree-item-text",
                        p: W(
                          {
                            width: "14px",
                            height: "15px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: "3px",
                              marginInlineEnd: "6px",
                              position: "relative",
                              top: "2px",
                              cursor: "pointer",
                            },
                            l: { onclick: (b) => this.setActive(!0, !0) },
                          },
                          (b) => `images/trash${b ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    Ut: new Kt({
                      style: {
                        flex: "0 1 auto",
                        display: "inline-block",
                        color: "var(--text-color)",
                        position: "relative",
                        top: `${this.Pt ? -2 : -1}px`,
                        marginInlineEnd: "21px",
                        ...(this.Pt
                          ? { padding: "2px 6px" }
                          : { paddingInlineStart: "4px" }),
                      },
                      value: a,
                      Zs: l,
                      rs: [
                        "tree-item-text",
                        ...O(this.l.archived, "archived"),
                        ...O(this.l.task && !this.l.done, "task-pending"),
                        ...O(this.l.task && this.l.done, "task-done"),
                      ].join(" "),
                      Pi: this.Pt,
                      Di: this.isActive && this.Go ? "edit" : "click",
                      St: (b) => this.setActive(!0, !0),
                      _n: () => {
                        this.xt ||
                          (this.Ta(), (this.qt.cu.i.style.visibility = "hidden"));
                      },
                      Qs: async (b) => {
                        this.xt ||
                          (this.Ta(),
                          this.qt.cu.i.style.removeProperty("visibility"));
                        let g = B(this.l) ? "title" : "label",
                          p = this.l[g];
                        if (((this.l[g] = b), p !== this.l[g])) {
                          let k = { [g]: this.l[g] };
                          await A.Fi(this.itemId, k);
                        }
                      },
                    }),
                    uu: h({
                      className: "tree-item-text",
                      style: {
                        flex: "0 0 auto",
                        display: "inline-block",
                        marginInlineStart: "auto",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                        color: "var(--text-color-weak)",
                        cursor: "default",
                        "font-variant-numeric": "tabular-nums",
                      },
                      textContent: m,
                    }),
                  },
                }),
                ...(this.ot &&
                  this.ga && {
                    Ia: h({
                      style: {
                        margin: "20px 20px",
                        textAlign: "center",
                        "text-wrap": "balance",
                        fontSize: "12px",
                        display: "none",
                      },
                      textContent: this.ga,
                    }),
                  }),
              },
            }),
          },
        })),
        (this.i = this.o.i),
        (this.m ??= []).push(
          ...dnd.ir({
            nr: {},
            sr: this.o.i,
            rr: this.o.i,
            ur: this.o.i,
            ar: (b) => {
              this.qt && (this.qt.i.style.visibility = "hidden");
              let g = (this.A?.nt ?? []).filter(
                  (S) => S?.o?.i?.isConnected && S?.l,
                ),
                p = [this.o.i];
              g.map((S) => S.o.i).forEach((S) => {
                p.includes(S) || p.push(S);
              });
              let k = g.map(di);
              g.includes(this) || k.push(di(this));
              let f = [...g];
              f.includes(this) || f.push(this);
              let T = Pr(f);
              if (new Set(f.map((S) => be(S.l))).size > 1)
                return (
                  bt.Is || zt(x("cannotMixTabsGroupsFoldersDuringDrag")),
                  !1
                );
              ((dnd.ft.types = T),
                (dnd.ft.Ae = {
                  itemsMeta: k,
                  ...(this.A && { selectionGroupId: this.A.Wc() }),
                }));
              let M = B(this.l)
                ? "dragged-tab"
                : L(this.l)
                  ? "folder"
                  : "dragged-group";
              (f.length > 1 &&
                (f.every((S) => dt(S.l) && !L(S.l))
                  ? (M = "multi-dragged-group")
                  : f.every((S) => L(S.l))
                    ? (M = "multi-dragged-folder")
                    : f.every((S) => B(S.l))
                      ? (M = "multi-dragged-tab")
                      : (M = "multi-dragged-item")),
                ye({ e: b, Kr: M, ji: p, q: this.q }));
            },
            lr: () => {
              (Ni(),
                this.qt &&
                  (this.qt.i.style.visibility = this.o.u.body.i.matches(":hover")
                    ? "visible"
                    : "hidden"));
            },
            cr: () => this.yt || this.ot,
          }),
        ),
        (this.m ??= []).push(
          ...dnd.hr({
            Ae: this,
            i: this.o.i,
            dr: (b) => {
              let g = this.o.u.body.Ut.i,
                k = this.o.u.se.i.getBoundingClientRect(),
                f = g.getBoundingClientRect(),
                T = Math.floor(f.height * 0.2);
              const $ = (rt) => (rt ? [rt.l.id, ...$(rt.G)] : []);
              let M = $(this.G),
                S = [this.l.id, ...M],
                H = dnd.F ? (dnd.ft?.Ae?.itemsMeta ?? []) : [],
                Q = dnd.F ? (dnd.ft?.types ?? []) : ["tab"];
              if (dnd.F && (!H.length || !Q.length)) return !1;
              let ht = !(
                  (this.ot && !this.S.length && this.ou) ||
                  B(this.l) ||
                  H.some((rt) => S.includes(rt.itemId))
                ),
                q = !(
                  H.some((rt) => M.includes(rt.itemId)) ||
                  (Q.includes("tab") && this.q !== "quickAccessCol-quickList") ||
                  (this.B && Ct(["window", "tabGroup"], Q)) ||
                  (this.Ot &&
                    Ct(["window", "tabGroup"], Q) &&
                    Q.includes("untitled")) ||
                  (this.L.l.id === "trash" && this.l.id !== "trash")
                );
              if (!ht && !q) return !1;
              let C = ht ? "within" : "before";
              !this.ot &&
                q &&
                (b.clientY <= f.y + Math.max(9, T) && (C = "before"),
                this.isOpen
                  ? b.clientY > k.y + k.height - 2 && (C = "after")
                  : ht
                    ? b.clientY > f.y + f.height - Math.max(9, T) && (C = "after")
                    : b.clientY > f.y + f.height / 2 && (C = "after"));
              let Z =
                this.ot &&
                this.q === "quickAccessCol-quickList" &&
                this.itemId === "quickList" &&
                q;
              if (Z) {
                let rt = this.Ke?.i,
                  Ut = this.S.map((K) => K?.o?.i)
                    .filter((K) => K?.parentElement === rt)
                    .at(-1);
                if (Ut) {
                  let K = Ut.getBoundingClientRect();
                  b.clientY > K.bottom - 2 && (C = "after");
                }
              }
              let Tt = Z && C === "after";
              dnd.P.Le = C;
              let R = C === "within" || Tt ? this : this.G;
              return !R ||
                !Ae({
                  Er: Q,
                  Fr: R.l.groupType,
                  jr: R.itemId,
                  Br: this.L.l.id === "trash",
                  Cr: "treeItem",
                }) ||
                ue(b)
                ? !1
                : R.itemId === "quickList" && !dnd.F
                  ? (delete Rt.Le, ft.remove(), !1)
                  : R.q === "quickAccessCol-tasks" && R.itemId === "root"
                    ? (delete Rt.Le, ft.remove(), !1)
                    : !0;
            },
            pr: (b) => {
              let g = dnd.P.Le,
                p = this.o.u.se.i,
                k = this.o.u.body.Ut.i,
                f = this.o.se?.Ia;
              (f && this.ot && !this.S.length && g === "within"
                ? (f.i.appendChild(ft),
                  Object.assign(ft.style, {
                    top: "3px",
                    bottom: "3px",
                    left: "13px",
                    right: "13px",
                    width: "",
                    borderWidth: "3px",
                  }))
                : g === "before"
                  ? (p.appendChild(ft),
                    Object.assign(ft.style, {
                      top: "-2px",
                      bottom: "",
                      left: `${k.clientLeft - 3}px`,
                      right: "",
                      width: `${p.clientWidth + 3}px`,
                      borderWidth: "3px 0 0 0",
                    }))
                  : g === "after"
                    ? (p.appendChild(ft),
                      Object.assign(ft.style, {
                        top: "",
                        bottom: "-1px",
                        left: `${k.clientLeft - 3}px`,
                        right: "",
                        width: `${p.clientWidth + 3}px`,
                        borderWidth: "3px 0 0 0",
                      }))
                    : (k.appendChild(ft),
                      Object.assign(ft.style, {
                        top: "-1px",
                        bottom: "-1px",
                        left: "-3px",
                        right: "",
                        width: `${k.clientWidth + 3}px`,
                        borderWidth: "3px",
                      })),
                (Rt.Le = g));
            },
            mr: () => {
              (delete Rt.Le, ft.remove());
            },
            wr: async (b) => {
              if (this.j) return;
              let g = dnd.P.Le ?? Rt.Le;
              if ((delete Rt.Le, ft.remove(), !g)) return;
              let p =
                this.ot &&
                this.q === "quickAccessCol-quickList" &&
                this.itemId === "quickList" &&
                g === "after";
              (g !== "within" && !p && !this.G?.Ke?.i.contains(this.o.i)) ||
                (g === "within" && this.Os(!0),
                await ge({
                  e: b,
                  Hr: () => {
                    if (g === "within") return;
                    let k = p ? this : this.G,
                      f = k?.Ke?.i;
                    if (!f) return;
                    let T = [...f.children],
                      $ = p ? T.length : T.findIndex((C) => C === this.o.i);
                    if ($ < 0) {
                      let C = k.S.filter((Z) => Z?.o?.i?.parentElement === f);
                      return C.length ? C.at(-1)?.index + 1 : void 0;
                    }
                    g === "after" && !p && $++;
                    let M = new Map();
                    k.S.forEach((C) => {
                      let Z = C?.o?.i;
                      Z && Z.parentElement === f && !M.has(Z) && M.set(Z, C);
                    });
                    let S = T.map((C) => M.get(C)).filter(Boolean),
                      H = S[$]?.index,
                      Q = k?.l?.id;
                    ($ === S.length && S.length && (H = S[$ - 1]?.index + 1),
                      H === void 0 &&
                        $ > S.length &&
                        S.length &&
                        (H = S.at(-1)?.index + 1));
                    let ht = dnd.F ? (dnd.ft?.types ?? []) : [],
                      q = dnd.F ? (dnd.ft?.Ae?.itemsMeta ?? []) : [];
                    if (
                      Number.isFinite(H) &&
                      dnd.F &&
                      Q !== "quickList" &&
                      !ht.includes("tab")
                    ) {
                      let C = new Set(q.map((Z) => Z.itemId));
                      if (C.size) {
                        let Z = T.reduce((Tt, R, rt) => {
                          if (rt >= $) return Tt;
                          let At = M.get(R);
                          return Tt + (C.has(At?.l?.id) ? 1 : 0);
                        }, 0);
                        Z && (H = Math.max(0, H - Z));
                      }
                    }
                    return (
                      H === void 0 && console.log("Warn: viewIndex not found"),
                      H
                    );
                  },
                  qr: () => (g === "within" || p ? this.itemId : this.G.l.id),
                  Ur: () =>
                    g === "within" || p ? this.l.groupType : this.G.l.groupType,
                }));
            },
          }),
        ),
        ot(this.l) && this.va(),
        this.un((s ?? 0) < (this.G?.l.pinnedCount ?? 0)),
        this.fi(this.l.rating),
        (this.S = []),
        dt(n) && (await this.sync({ L: this.L, h: t, Hi: !0, ka: e })),
        w && w.replaceWith(this.i),
        this.yi?.ye === this && this.setActive(!0, !1));
    }
    un(t) {
      (t && this.nf(),
        this.gi && (this.gi.i.style.display = t ? "inline-block" : "none"));
    }
    rf() {
      if (!this.Gn) {
        this.Gn = h({
          className: "tree-item-text",
          p: W(
            {
              width: "14px",
              height: "14px",
              style: {
                display: "inline-block",
                marginInlineStart: `${(this.Pt, 3)}px`,
                paddingInlineEnd: `${(this.Pt, 4)}px`,
                position: "relative",
                top: "3px",
                cursor: "pointer",
              },
              l: { onclick: (s) => this.setActive(!0, !0) },
            },
            (s) => `images/star2${s ? "" : "-dark"}.png`,
          ),
        });
        let t = this.o.se.body,
          e;
        (t.Pe && (e = t.Pe.o.i),
          t.zi && (e = t.zi.i),
          this.gi && (e = this.gi.i),
          e
            ? e.insertAdjacentElement("afterend", this.Gn.i)
            : t.i.prepend(this.Gn.i));
      }
    }
    nf() {
      if (!this.gi) {
        this.gi = h({
          className: "tree-item-text",
          p: W(
            {
              width: "11px",
              height: "11px",
              style: {
                display: "inline-block",
                marginInlineStart: `${(this.Pt, 3)}px`,
                paddingInlineEnd: `${(this.Pt, 4)}px`,
                position: "relative",
                top: "2px",
                cursor: "pointer",
              },
              l: { onclick: (s) => this.setActive(!0, !0) },
            },
            (s) => `images/pin${s ? "" : "-dark"}.png`,
          ),
        });
        let t = this.o.se.body,
          e;
        (t.Pe && (e = t.Pe.o.i),
          t.zi && (e = t.zi.i),
          e
            ? e.insertAdjacentElement("afterend", this.gi.i)
            : t.i.prepend(this.gi.i));
      }
    }
    Nn() {
      this.o.u.Pe &&
        !this.o.u.Pe.Vo &&
        (this.o.u.Pe.Nn(),
        (this.m ??= []).push(
          z(this.o.u.Pe.o.i, "contextmenu", (t) => this.ya(t)),
        ));
    }
    af() {
      this.Ke ||
        ((this.Ke = h({
          className: "treeChildrenContainer",
          style: {
            marginInlineStart: "-13px",
            display: this.isOpen ? "block" : "none",
          },
        })),
        this.o.se.i.appendChild(this.Ke.i));
    }
    hu() {
      this.ot ? (this.Aa(), this.S.forEach((t) => t.Aa())) : this.G.hu();
    }
    Aa() {
      (this.Dn && this.Dn.destroy(), this.S.forEach((t) => t.Aa()));
    }
    Ta() {
      this.qt ||
        ((this.qt = h({
          className: "tree-item-text",
          style: {
            position: "relative",
            flex: "0 1 auto",
            userSelect: "none",
            width: "21px",
            visibility: dnd.F ? "hidden" : "visible",
          },
          children: {
            cu: h({
              className: "menuDots tree-item-text",
              style: {
                borderRadius: "7px",
                paddingInlineStart: "6px",
                paddingInlineEnd: "6px",
                paddingBottom: "2px",
                flex: "0 0 auto",
                cursor: "pointer",
                marginInlineStart: "3px",
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--link-color)",
                whiteSpace: "nowrap",
                userSelect: "none",
              },
              textContent: "⋮",
              onclick: async (t) => {
                (t.stopPropagation(), this.hu());
                let e = await Oe({
                  nc: await A.ks("copyToClipboardFormat"),
                  ic:
                    Nt(this.l) &&
                    this.L.l.id !== "trash" &&
                    !this.S.length &&
                    !ot(this.G.l),
                  Vt: !L(this.l) && this.L.l.id !== "trash",
                  me: this.L.l.id !== "trash",
                  lf: this.L.l.id === "trash",
                  Ri: this,
                  cf: this.B,
                  Zr: () => this.Dn.destroy(),
                  sc: (s) => this.Dn.o.p.i.replaceWith(s),
                  onChange: async (s) => {
                    (Object.hasOwn(s, "isTabGroup") &&
                      ((s.groupType = s.isTabGroup ? "tabGroup" : "window"),
                      delete s.isTabGroup),
                      Object.keys(s).length > 0 && (await A.Fi(this.l.id, s)));
                  },
                  xs: this.G && L(this.G.l),
                });
                this.Dn = new lt({
                  Z: this.Z,
                  ca: this.qt.uf.i,
                  fs: !0,
                  la: h({
                    style: {
                      paddingInline: "8px",
                      paddingBlock: "8px 8px",
                      maxWidth: "300px",
                    },
                    children: e,
                  }),
                });
              },
            }),
            uf: h({}),
          },
        })),
        this.o.se.body.i.insertBefore(this.qt.i, this.o.u.uu.i),
        (this.o.u.Ut.i.style.marginInlineEnd = "0"));
    }
    hf(t) {
      return new Se({
        yt: this.yt,
        Mn: this.Mn,
        L: this.L,
        q: this.q,
        G: this,
        itemId: t,
        ot: !1,
        yi: this.yi,
        $s: this.$s,
        Pt: this.Pt,
        Z: this.Z,
        A: this.A,
        Mo: this.Mo,
        Go: this.Do,
        Do: this.Do,
        B: this.B,
        Ss: this.Ss,
        Ht: this.Ht,
        xt: this.xt,
        Ot: this.Ot,
        On: this.On,
      });
    }
    setActive(t, e) {
      let s = this.isActive !== t;
      this.isActive = t;
      let n = this.o.u.Ut;
      (n.Ol(this.isActive && this.Go ? "edit" : "click"),
        n.Oh((o) => {
          this.isActive
            ? o.classList.add("selected")
            : o.classList.remove("selected");
        }),
        s && e && this.$s(this.isActive, this.itemId),
        this.isActive && this.yi?.ef({ ye: this, $n: this.itemId, Sn: this.q }),
        !s && t && e && this.ru?.());
      let r = this.o.u.body.Ut.i;
      this.Mn && !Zr(r, this.Mn) && r.scrollIntoView();
    }
    async df(t, e) {
      if (this.itemId === t) (await this.G?.Os(!0, !0), this.setActive(!0, e));
      else for (let s of this.S) await s.df(t, e);
    }
    async Ge(t, e) {
      if (this.j) return;
      let s = this.S.length;
      if (
        t.type === "update" &&
        t.itemId === this.itemId &&
        (st(t, "label", (r) => this.mo(r)),
        st(t, "title", (r) => this.mo(r)),
        st(t, "archived", (r) => this.Bi(r)),
        st(t, "color", (r) => this.setColor(r)),
        st(t, "groupType", (r) => this.ze(r)),
        st(t, "rating", (r) => this.fi(r)),
        st(t, "locked", (r) => (this.l.locked = r)),
        ["task", "done"].some((r) => t.propChanges[r]))
      ) {
        let r = Object.fromEntries(
          Object.entries(t.propChanges)
            .filter(([o, a]) => ui.includes(o))
            .map(([o, a]) => [o, a.new]),
        );
        this.Ci(r);
      }
      if (
        (gt(
          t.targetParentId === this.itemId && t.targetParentGroupTypeUpdated,
          (r) => this.ze(r),
        ),
        t.type === "move")
      ) {
        let r = t.itemsMeta.find(
          (o) => o.itemId === this.itemId && o.groupTypeUpdated,
        );
        if (r) {
          let o = r.groupTypeUpdated;
          this.ze(o);
        }
      }
      if (
        (((this.Ot &&
          t.type === "update" &&
          Ct(["label"], Object.keys(t.propChanges)) &&
          t.updatedItemParentIds.includes(this.itemId)) ||
          (this.On &&
            t.type === "update" &&
            Ct(["archived"], Object.keys(t.propChanges)) &&
            t.updatedItemParentIds.includes(this.itemId)) ||
          (this.Ht &&
            ((Dt(t.type, ["store", "move", "copy"]) &&
              t.affectedAncestorIds.includes(this.itemId)) ||
              (t.type === "update" &&
                Ct(["archived", "task"], Object.keys(t.propChanges)) &&
                t.affectedAncestorIds.includes(this.itemId)))) ||
          (t.type === "sort" && t.parentId === this.itemId) ||
          (t.type === "removeFromQuickList" && this.itemId === "quickList") ||
          (t.type === "copy" && t.targetParentId === this.itemId)) &&
          (await this.sync({ L: this.L })),
        t.type === "move")
      ) {
        let r = t.itemsMeta ?? [],
          o = new Set(r.map((l) => l.sourceParentId)),
          a = new Set(r.map((l) => l.itemId));
        ((this.itemId === "quickList" && t.targetParentId === "trash") ||
          (this.itemId === "trash" &&
            ["trash", "delete"].includes(t.targetParentId)) ||
          o.has(this.itemId) ||
          this.itemId === t.targetParentId ||
          a.has(this.itemId)) &&
          (await this.sync({ L: this.L }));
      }
      if (
        t.type === "store" &&
        Dt(this.itemId, ["trash", "quickList", t.targetParentId])
      ) {
        await this.sync({ L: this.L });
        let r = this.S.find((o) => o.itemId === e.$a);
        r && (await this.Os(!0), delete e.$a, r.du());
      }
      t.type === "pin" &&
        t.itemId === this.itemId &&
        ((this.tu = !0), await this.G.sync({ L: this.L }));
      let n = new ItemCache();
      (this.ot &&
        this.Ht &&
        t.type === "update" &&
        Ct(["archived", "task", "done"], Object.keys(t.propChanges)) &&
        (await oneTabPage.ww.xw(n), await this.fu(n, t.updatedItemParentIds)),
        this.ot &&
          Dt(t.type, ["store", "move", "copy", "removeFromQuickList"]) &&
          (await this.fu(n, t.storeMoveCopyAffectedParentIds)),
        !this.j &&
          (this.S.forEach((r) => r.Ge(t, e)),
          s !== this.S.length && this.nu?.(this.S.length)));
    }
    ff(t) {
      if (!t.v(this.itemId)) return;
      let e = t.Xi(this.itemId),
        s = this.Ht && t.ll(this.itemId).cl,
        n = this.Ht ? s : e,
        r = Number(n).toLocaleString();
      (this.Ht && !n && (r = ""),
        L(this.l) || this.o.u.Ut.Dl(ee(e)),
        (this.o.u.uu.i.textContent = r));
    }
    du() {
      this.o.u.Ut.Rs(!0);
    }
    mo(t) {
      ((this.l.label = t), this.o.u.Ut.et(t));
    }
    Bi(t) {
      ((this.l.archived = +t),
        this.o.u.Ut.i.classList[t ? "add" : "remove"]("archived"));
    }
    Ci(t) {
      (Object.entries(t).forEach(([e, s]) => (this.l[e] = s)),
        ["task-pending", "task-done"].forEach((e) =>
          this.o.u.Ut.i.classList.remove(e),
        ),
        this.l.task &&
          !this.l.done &&
          this.o.u.Ut.i.classList.add("task-pending"),
        this.l.task && this.l.done && this.o.u.Ut.i.classList.add("task-done"));
    }
    setColor(t) {
      ((this.l.color = t), this.va(), this.Ms.setColor(t));
    }
    fi(t) {
      ((this.l.rating = t),
        t && this.rf(),
        this.Gn && (this.Gn.i.style.display = t ? "inline-block" : "none"));
    }
    ze(t) {
      ((this.l.groupType = t),
        this.va(),
        this.Ms.Wt(ot(this.l)),
        this.l.color || this.setColor(hi));
    }
    async sync({ L: t, h: e, Hi: s, ka: n }) {
      if (this.j) return;
      e ||
        ((e = new ItemCache()),
        this.Ht
          ? await e.tl()
          : this.Ss
            ? dt(this.l) && (await e.Te({ groupId: this.itemId }))
            : await e.ke());
      let r = e.v(this.itemId);
      if (!r) return;
      if (
        ((this.l = { ...r }),
        this.ze(r.groupType),
        !this.Ss && r.id !== "trash" && L(r))
      ) {
        let a = (r.childIds ?? []).filter((l) => !e.v(l));
        a.length && (await e.getItems(a), (r = e.v(this.itemId) ?? r));
      }
      let o = (r.childIds ?? [])
        .map((a, l) => ({ id: a, index: l }))
        .filter(({ id: a, index: l }) => {
          let u = e.v(a);
          return !(
            !u ||
            (!this.Ss && !dt(u)) ||
            (this.Ot && dt(u) && !u.label && this.L.$a !== u.id) ||
            (this.B && !L(u)) ||
            (this.On && En(u)) ||
            (this.Ht && !(_e(u) || e.Yu(u)))
          );
        });
      (gt(this.o.u.Ia?.i, (a) => (a.style.display = o.length ? "none" : "block")),
        this.af(),
        !this.j &&
          (await Ps({
            Hi: s,
            pf: Number.MAX_SAFE_INTEGER,
            ea: o,
            Me: this.Ke.i,
            views: this.S,
            ia: (a) => a.itemId,
            pn: (a) => a?.i,
            sa: async (a, l) => {
              let u = this.yi && this.yi.$n === a && this.yi.Sn === this.q,
                c = this.hf(a);
              return (
                await c.st({ h: e, ka: n, sf: l }),
                u && c.setActive(!0, !1),
                c
              );
            },
            bc: (a) => a.un?.(a.index < (this.l.pinnedCount ?? 0)),
          }),
          !this.j &&
            (gt(
              this.o.se.Ia?.i,
              (a) => (a.style.display = this.S.length ? "none" : "block"),
            ),
            this.mf(),
            await this.Os(this.isOpen))));
    }
    async fu(t, e) {
      if (!this.j && this.ot) {
        let s = new Map();
        const n = (r, o = []) => {
          if (r.j) return;
          let a = [...o, r];
          (s.has(r.itemId) || s.set(r.itemId, a), r.S.forEach((l) => n(l, a)));
        };
        (n(this), await t.ke(), this.Ht && (await t.tl()));
        for (let r of e) s.get(r)?.forEach((a) => a.ff(t));
      }
    }
    va() {
      this.Ms ||
        ((this.Ms = new he({
          dt: ot(this.l),
          color: this.l.color,
          dimension: "10px",
          $: {
            flex: "0 0 auto",
            marginInlineStart: `${(this.Pt, 3)}px`,
            marginInlineEnd: `${(this.Pt, 4)}px`,
            position: "relative",
            top: "4px",
            cursor: "pointer",
          },
          St: (t) => this.setActive(!0, !0),
        })),
        gn(this.Ms.o.i, this.o.u.Ut.i));
    }
    mf() {
      (this.ot &&
        !this.Po &&
        (this.o.i.style.marginInlineStart = `${this.S.length ? 0 : 24}px`),
        this.Jt && !this.S.length && (this.Jt.i.remove(), delete this.Jt),
        !this.Jt &&
          this.S.length &&
          ((this.Jt = h({
            className: "tree-item-text",
            style: {
              userSelect: "none",
              flex: "0 0 auto",
              paddingInlineStart: "8px",
              paddingInlineEnd: "6px",
              paddingTop: `${this.au - 10}px`,
              paddingBottom: "4px",
              display: this.Po && this.ot ? "none" : "inline-block",
              cursor: "pointer",
            },
            p: W(
              {
                width: 20 / 2 + "px",
                height: 20 / 2 + "px",
                style: {
                  visibility: this.S.length > 0 ? "visible" : "hidden",
                  display: "inline-block",
                },
              },
              (t) => `images/tree-twistie-closed-${t ? "light" : "dark"}.png`,
            ),
            onclick: async (t) => {
              await this.Os(!this.isOpen);
            },
          })),
          yn(this.Jt.i, this.o.i, 0)));
    }
    async Os(t, e) {
      if (
        (t && e && (await this.G?.Os(!0, !0)),
        this.Jt &&
          ((this.Jt.p.style.transform = t
            ? "rotate(90deg)"
            : `rotate(${J() ? 0 : 180}deg)`),
          (this.Jt.p.style.top = t ? "0px" : "0")),
        this.Ke &&
          (this.Ke.i.style.display = this.S.length && t ? "block" : "none"),
        this.isOpen === t && !e)
      )
        return;
      this.isOpen = t;
      let s = `treeItemsOpen:${this.q}`,
        n = await A._e(s);
      ((n = n.filter((r) => !r.includes(this.itemId))),
        this.isOpen && n.push(this.itemId),
        await A.Ve(s, n));
    }
    De({ pi: t } = {}) {
      this.j ||
        ((this.j = !0),
        this.A && this.Gt() && this.A.Ao({ newState: !1, selection: this }),
        this.Dn?.destroy(),
        this.Tn?.destroy(),
        (this.m ?? []).forEach((e) => e.remove()),
        (this.m = null),
        (this.$s = null),
        (this.A = null),
        (this.Mo = null),
        t || this.o.i?.remove(),
        (this.o.i = null),
        this.Jt && (this.Jt.i.onclick = null),
        this.o.se.body.so && (this.o.se.body.so.i.onclick = null),
        this.o.se.body.lu && (this.o.se.body.lu.i.onclick = null),
        this.o.u.Ut.destroy(),
        this.S.forEach((e) => e.De({ pi: t })),
        (this.S = null),
        (this.gi = null),
        (this.Ke = null),
        (this.qt = null),
        this.Ms?.destroy(),
        (this.Ms = null),
        (this.Jt = null));
    }
    ya(t) {
      (t.preventDefault(),
        t.stopPropagation(),
        (this.Tn = new lt({
          fs: !0,
          Z: document,
          ca: t.currentTarget,
          la: h({
            style: { margin: "8px" },
            children: ks({ view: this, Vc: this.G, Ni: () => this.Tn.destroy() }),
          }),
        })));
    }
    Rc() {
      this.lt(!1, !0);
    }
    lt(t, e) {
      (this.Nn(), this.o.u.Pe.et(t, !e));
    }
    Gt() {
      return this.o.u.Pe?.$i();
    }
    yc() {
      this.S.forEach((t) => t.lt(!0));
    }
    gc(t) {
      let e = !1;
      this.S.filter((s) => (s === t && (e = !0), !e || s === t)).forEach((s) =>
        s.lt(!0),
      );
    }
    kc(t) {
      let e = !1;
      this.S.filter((s) => (s === t && (e = !0), e)).forEach((s) => s.lt(!0));
    }
    Tc(t) {
      (this.S.filter((e) => e !== t).forEach((e) => e.lt(!0)), t.lt(!1));
    }
    Ic() {
      this.S.forEach((t) => t.lt(!t.Gt()));
    }
    vc() {
      this.A.reset();
    }
    na(t, e) {
      if (this.S.includes(t)) {
        let s = !1,
          n = !1;
        this.S.forEach((r) => {
          let o = !1;
          (!s && (r === t || r === e) && ((s = !0), (o = !0)),
            s && !n && (r.oa || r.lt(!0)),
            !o && s && (r === t || r === e) && (n = !0));
        });
      } else return;
    }
    Ac() {
      return this.S.filter((t) => t.Gt()).length;
    }
    ra() {
      return this.S.length;
    }
    $c(t) {
      return this.S[0] !== t;
    }
    Sc(t) {
      return this.S.at(-1) !== t;
    }
  }
  const ft = h({
    id: "treeInsertMarker",
    style: {
      position: "absolute",
      borderStyle: "var(--drop-area-border-style)",
      borderColor: "var(--drop-area-border-color)",
      borderRadius: "10px",
    },
  }).i;
  let Rt = {};
    return { X, st, gs, de, Lr, di, Dr, Gr, ll, Se, ft, Rt };
  }
};
