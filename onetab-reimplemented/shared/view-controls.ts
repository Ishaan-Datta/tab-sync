// @ts-nocheck
globalThis.createOneTabViewControls = function createOneTabViewControls(deps) {
  with (deps) {
class bs {
  constructor({ view: t, style: e }) {
    ((this.view = t),
      (this.o = h({ style: { display: "none", whiteSpace: "nowrap", ...e } })));
  }
  update() {
    let t = ({ Tr: e, Fm: s, onclick: n, D: r, Ph: o, Lh: a = 15 }) =>
      W(
        {
          className: "flag " + s + (o ? " no-hover" : ""),
          width: `${a}px`,
          height: `${a}px`,
          style: { marginBlock: "-2px -6px" },
          init: (l) => {
            ((l.i.onclick = n),
              r && (this.m ??= []).push(...St(l.i, { Yt: r })));
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
            D: B(this.view.l) ? x("tabPinFlagHelp") : x("nonTabPinFlagHelp"),
          }),
          onclick: async (e) => {
            if (this.view.H) return;
            let s, n;
            (B(this.view.l)
              ? ((s = this.view.wt.l.id),
                (n = this.view.wt.k
                  .filter((r) => r.l.id === this.view.l.id)
                  .findIndex((r) => r === this.view)))
              : (s = this.view.l.parentIds.find(ut)),
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
            ? x("completedTaskFlagHelp")
            : x("pendingTaskFlagHelp"),
          onclick: async (e) =>
            Pt.call(this.view, { task: 1, done: +!this.view.l.done }),
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
        (r.src = Ft ? s : n));
    }
    (this.view.l.rating &&
      !this.ai &&
      ((this.ai = t({
        Tr: "star2",
        Lh: 16,
        D: x("starFlagHelp"),
        onclick: async (e) => Pt.call(this.view, { rating: 0 }),
      })),
      this.o.i.appendChild(this.ai)),
      this.view.pinned || (this.hs?.remove(), nt?.destroy(), delete this.hs),
      this.view.l.task || (this.ri?.remove(), nt?.destroy(), delete this.ri),
      this.view.l.rating || (this.ai?.remove(), nt?.destroy(), delete this.ai),
      (this.o.i.style.display = this.o.i.children.length ? "block" : "none"));
  }
  destroy() {
    ((this.view = null),
      nt?.destroy(),
      this.hs && (this.hs.onclick = null),
      this.ri && (this.ri.onclick = null),
      this.ai && (this.ai.onclick = null),
      (this.m ?? []).forEach((t) => t.remove()),
      (this.m = null));
  }
}
class pr {
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
    Ys: m,
    maxHeight: y,
    Ce: w,
    yt: b,
    vr: g,
    Ll: p,
    Fh: k,
    He: f = !1,
    xt: T,
  }) {
    (s || (s = x("destinationColon")),
      (this.ds = e),
      (this.Pl = a),
      (this.Js = l),
      (this.vr = g),
      (this.He = f),
      (this.xt = T),
      (this.Li = t),
      (this.yt = b));
    let $ = new ItemCache();
    this.o = h({
      ...(r && { style: r }),
      children: {
        Cm: h({
          style: { display: "flex", alignItems: "center" },
          children: {
            ...(!n && {
              label: h({
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginInlineEnd: "9px",
                },
                p: h({
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
            gt: new ws({
              Z: u,
              maxHeight: y,
              Ce: w,
              Hm: { left: "60px", top: "60px" },
              qm: document.body,
              gh: async () => this.El(await Es(this.ds.id), this.ds),
              Zn: async () => {
                await this.Fl();
              },
            }),
            jh: new fi({
              dt: d,
              value: m,
              fontSize: "12px",
              label: x("createGroupInsideDestination"),
              D: x("createGroupInsideDestinationHelp"),
              $: { marginInlineStart: "28px" },
              onChange: (M) => c(M),
            }),
          },
        }),
        ...(p?.length && {
          Ll: h({
            style: {
              display: "flex",
              fontSize: "12px",
              marginTop: "8px",
              marginBottom: "8px",
            },
            children: {
              label: h({ style: { whiteSpace: "nowrap" }, textContent: k }),
              eo: h({
                style: { display: "flex", flexWrap: "wrap" },
                children: Object.fromEntries(
                  p.map((M, S) => [
                    `_${S}`,
                    h({
                      style: {
                        marginInlineStart: "16px",
                        cursor: "pointer",
                        whiteSpace: M.label?.length > 50 ? "wrap" : "normal",
                      },
                      className: "recentGroup",
                      textContent: M.label,
                      onclick: async (H) => {
                        await this.Ns(M, !0);
                      },
                      init: (H) =>
                        St(H.i, {
                          Yt: async () => {
                            let Q = await we({
                              h: $,
                              itemId: M.id,
                              fontSize: "12px",
                              Qo: !0,
                              jl: !1,
                            });
                            return h({ style: { padding: "5px 15px" }, p: Q });
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
    await Gi({
      title: this.vr,
      He: this.He,
      xt: this.xt,
      Li: this.Li,
      yt: this.yt,
      io: async (e) => {
        (this.o.u.gt.Jn(!1), await this.Ns(await getItemById(e.id), !0));
      },
      _s: t,
    });
  }
  async Ns(t, e) {
    ((this.ds = t),
      this.o.u.gt.yh(this.El(await Es(this.ds.id), this.ds)),
      e && (await this.Js?.(this.ds)));
  }
  El(t, e) {
    return G("div", {
      style: {
        fontSize: "12px",
        fontWeight: 400,
        display: "flex",
        flex: "1 1 auto",
        ...this.Pl,
      },
      children: {
        ...(L(e) && {
          so: h({
            style: { display: "inline-block" },
            p: W(
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
        label: h({
          style: { display: "inline-block", marginInlineStart: "6px" },
          children: {
            ...(ot(e) && {
              Um: cs({
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
            zm: G("span", { textContent: ci({ h: t, l: e }) }),
          },
        }),
      },
    });
  }
}
class xr {
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
      d = await new ItemCache().ke(),
      m = await A.Wm();
    a && (s = !0);
    let y = new Fr({
      Et: m,
      h: d,
      yt: s,
      Ar: async (w, b) => {
        w && (await n?.(await d.ht(b)));
      },
      Z: r,
      B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
      Ot: as(c[`${e}GroupChooserShowNamedOnly`], "true"),
      xt: l,
    });
    (await y.st(),
      (this.o = G("div", {
        destroy: () => y.destroy(),
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
          header: h({
            style: {
              paddingInline: "8px 11px",
              paddingBlock: "4px 0px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            },
            children: {
              title: h({
                style: { flex: "1 1 auto", fontWeight: 600 },
                textContent: t,
              }),
              Nm: h({
                style: {
                  marginInlineStart: "auto",
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                },
                children: {
                  ...(!a && {
                    B: new fi({
                      value: c[`${e}GroupChooserShowFoldersOnly`] === "true",
                      fontSize: "12px",
                      label: x("showFoldersOnly"),
                      $: { flex: "0 1 auto" },
                      onChange: async (w) => {
                        ((c[`${e}GroupChooserShowFoldersOnly`] = w
                          ? "true"
                          : "false"),
                          await A.bt(
                            `${e}GroupChooserShowFoldersOnly`,
                            w ? "true" : "false",
                          ),
                          this.o.search.oo.Vs(w),
                          await this.o.search.oo.Bl(),
                          this.o.Cl.Hl().ql.Vs(w),
                          await this.o.Cl.Hl().ql.st(),
                          this.o.all.ro.Vs(w),
                          await this.o.all.ro.st());
                      },
                    }),
                  }),
                  Ot: new fi({
                    value: as(c[`${e}GroupChooserShowNamedOnly`], "true"),
                    fontSize: "12px",
                    label: x("showNamedOnly"),
                    $: { flex: "0 1 auto" },
                    onChange: async (w) => {
                      ((c[`${e}GroupChooserShowNamedOnly`] = w
                        ? "true"
                        : "false"),
                        await A.bt(
                          `${e}GroupChooserShowNamedOnly`,
                          w ? "true" : "false",
                        ),
                        this.o.all.ro.Bh(w),
                        await this.o.all.ro.st());
                    },
                  }),
                },
              }),
            },
          }),
          search: h({
            style: {},
            children: {
              oo: new Mr({
                h: d,
                Et: m,
                B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
                he: async (w) => await n?.(w),
              }),
            },
          }),
          Cl: new Ts({
            label: x("recent"),
            isOpen: c[`${e}GroupChooserRecentsOpen`] === "true",
            Ch: async (w) => {
              await A.bt(`${e}GroupChooserRecentsOpen`, w ? "true" : "false");
            },
            style: { paddingInlineStart: "10px" },
            body: h({
              style: {
                paddingInlineStart: "10px",
                fontSize: "13px",
                paddingTop: "7px",
              },
              children: {
                ql: new $r({
                  h: d,
                  Et: m,
                  he: async (w) => await n?.(w),
                  B: a || c[`${e}GroupChooserShowFoldersOnly`] === "true",
                }),
              },
            }),
          }),
          all: h({
            style: { paddingInline: "0px 16px", paddingBlock: "0px 0px" },
            children: { ro: y },
          }),
        },
      })),
      u && this.o.u.oo.focus());
  }
  destroy() {
    (this.o.u.oo?.destroy?.(), this.o.destroy());
  }
}
async function Gi({
  io: i,
  title: t,
  He: e,
  xt: s,
  Li: n = "destination",
  yt: r = !0,
  _s: o = !1,
}) {
  await qt(1);
  let a = new xr(),
    l = new bt({
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
      content: h({
        style: {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          overflow: "auto",
        },
        children: { info: h({}), Rm: a.o.i },
        destroy: () => a.destroy(),
      }),
    }));
}
class kt {
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
    X: m,
    J: y = !1,
    It: w,
    Or: b,
    Nl: g,
    Rl: p,
    dt: k = !0,
    H: f,
    vt: T,
    Mr: $,
    Ks: M,
    ws: S = !0,
    Xs: H = !1,
    xs: Q,
    Ys: ht,
    Mt: q,
    Gr: C,
    Tt: Z,
    Zl: Tt,
    bs: R = !1,
  }) {
    ((this.Mt = q),
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
      (this.J = y),
      (this.X = m),
      (this.It = w),
      (this.Or = b),
      (this.Nl = g),
      (this.Rl = p),
      (this.dt = k),
      (this.H = f),
      (this.vt = T),
      (this.Mr = $),
      (this.Ks = M),
      (this.Gr = C),
      (this.ws = S),
      (this.Xs = H),
      (this.xs = Q),
      (this.Ys = ht),
      (this.te = s),
      (this.Tt = Z),
      (this.Zl = Tt),
      (this.bs = R),
      (this.k = []),
      (this.o = h({})));
  }
  async Hh() {
    if (!this.J) throw new Error();
    let t = { groupType: void 0, collapsed: void 0, color: void 0 },
      e = await Zt(this.X, t);
  }
  Dr(t, e) {
    this.k && this.k.forEach((s) => s.Dr(t, e));
  }
  Ql() {
    return [this.X, ...this.k.flatMap((t) => (t instanceof kt ? t.Ql() : []))];
  }
  Jl() {
    return this.k.map((t) => t.Jl()).flat();
  }
  async getParent() {
    let t = this.l.parentIds.find(ut);
    return await getItemById(t);
  }
  async qh() {
    return ot(await this.getParent());
  }
  async Uh(t) {
    let e = this.l.parentIds.find(ut),
      s = await getItemById(e),
      n = this.l.parentIds.filter((o) => o === "quickList");
    if (
      (Qt(n, t.id),
      JSON.stringify([...n].sort()) !==
        JSON.stringify([...this.l.parentIds].sort()))
    ) {
      if (
        ((this.o.u.destination.o.u.gt.ce.label.i.textContent = _(t)
          ? x("all")
          : t.label || x("untitled")),
        (this.l.parentIds = n),
        this.J)
      ) {
        let o = await Zt(this.X, { parentIds: n });
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
        e instanceof X
          ? e.Wt(t?.has(e.l.id) ?? !0)
          : e instanceof kt && e.Wh({ jt: t });
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
    ((this.m ?? []).forEach((f) => f.remove()),
      (this.m = []),
      (this.pinned = o),
      (this.C = a),
      (this.me = l),
      (this.ut = u),
      (this.jt = e));
    {
      let f = await s.ht(t);
      this.l = { ...f };
      let T = await s.ht(f.parentIds.find(ut));
      this.ys = T && L(T) && !this.H;
    }
    if (this.J) {
      this.nn = structuredClone(this.l);
      let f = await Qe(this.X),
        T = Object.entries(f),
        $ = !1;
      if (T.length) {
        for (let [M, S] of T) M !== "parentIds" && (this.l[M] = S);
        ((this.Rt = !0), this.It({ de: !0, pe: !1 }));
      }
    }
    let c,
      d = this.l.parentIds.find(ut);
    c = await s.ht(d);
    let m = !this.H && !this.C && c && !ot(c),
      y = await Promise.all(this.l.parentIds.map(async (f) => await s.ht(f))),
      w = y.find((f) => !Ki(f)),
      b = L(w ?? {}),
      g = y.find(mt),
      p = this.l.childIds;
    if (this.jt && this.J)
      throw new Error("childIdsSubset not allowed for uncommitted group views");
    let k = this.o.i;
    ((this.o = h({
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
        body: h({
          init: (f) => {
            (this.m ??= []).push(
              z(f.i, "keydown", (T) => {
                let $;
                (this.o.u.Pr && ($ = () => this.o.u.Pr.onclick(T)),
                  this.o.u.Lr && ($ = () => this.o.u.Lr.onclick(T)),
                  T.key === "Enter" &&
                    $ &&
                    document.querySelector(":focus-visible") === f.i &&
                    (T.stopPropagation(), $()));
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
            ...(!L(this.l) && { minHeight: "70px" }),
          },
          children: {
            ...(this.ao &&
              !this.bs && {
                Zm: h({
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    marginTop: "10px",
                    marginInlineStart: "14px",
                    marginInlineEnd: "20px",
                    marginBottom: "6px",
                  },
                  children: {
                    body: h({
                      style: {
                        marginInlineStart: "17px",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        rowGap: "9px",
                        flex: "1 1 auto",
                      },
                      children: { lo: h({}) },
                    }),
                  },
                }),
              }),
            ...(this.tn && {
              destination: new pr({
                vr: x("chooseALocation"),
                yt: this.H,
                Li: "destination",
                Ll: (await s.il({ count: 5, B: !1, sl: !0, Ju: !0 })).filter(
                  (f) => f.id !== c.id,
                ),
                Fh: x("recentDestinationsColon"),
                style: {
                  marginInlineStart: "26px",
                  marginInlineEnd: "8px",
                  marginBottom: "4px",
                  marginTop: "10px",
                },
                Eh: c,
                Js: async (f) => await this.Uh(f),
                Ks: (f) => this.Ks(f),
                Xs: this.Xs,
                Ys: this.Ys,
                Z: document,
                maxHeight: "",
              }),
            }),
            ...(this.H && {
              Rh: h({
                style: {
                  display: "none",
                  fontSize: "12px",
                  marginInlineStart: "26px",
                  marginTop: "30px",
                  textAlign: "center",
                },
                textContent: x("noTabsMeetCriteriaUseCheckboxes"),
              }),
            }),
            Kl: h({
              style: {
                display: this.ws ? "flex" : "none",
                alignItems: "flex-start",
                marginInlineStart: "8px",
                marginInlineEnd: `${this.te ? -6 : 6}px`,
              },
              children: {
                en: h({
                  ...(L(this.l) &&
                    !this.C && {
                      init: ({ i: f }) => {
                        (this.m ??= []).push(
                          ...dnd.hr({
                            Ae: this,
                            i: f,
                            dr: (T) => {
                              if (this.Tt) return !1;
                              let $ = dnd.F ? (dnd.ft?.types ?? []) : ["tab"];
                              return !(
                                (dnd.F && !$.length) ||
                                !Ae({
                                  Er: $,
                                  Fr: this.l.groupType,
                                  jr: this.l.id,
                                  Br: this.C,
                                  Cr: "groupView",
                                }) ||
                                ue(T)
                              );
                            },
                            pr: () => {
                              (et.remove(),
                                f.appendChild(ft),
                                Object.assign(ft.style, {
                                  top: "3px",
                                  bottom: "3px",
                                  left: "40px",
                                  right: "13px",
                                  width: "",
                                  borderWidth: "3px",
                                }));
                            },
                            mr: () => {
                              (et.remove(), ft.remove());
                            },
                            wr: async (T) => {
                              (et.remove(),
                                ft.remove(),
                                !(this.j || !this.l?.id || !L(this.l)) &&
                                  (await ge({
                                    e: T,
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
                    K: W(
                      {
                        className: "groupCrossImg",
                        dimension: `${26 / 2}px`,
                        style: {
                          ...(this.Tt && { display: "none" }),
                          width: "19px",
                          height: "19px",
                          top: L(this.l) ? "6px" : "11px",
                        },
                        l: {
                          onclick: async (f) => {
                            await Zn(this.o.i);
                            let T = [xt({ itemId: this.l.id })],
                              $ = await A.gs(T);
                            (await A.move({ rt: T, O: "trash" }),
                              await A.Oe($));
                          },
                        },
                      },
                      (f) => `images/cross2${f ? "" : "-dark"}.png`,
                    ),
                    ...(L(this.l) && {
                      so: h({
                        style: { display: "inline-block" },
                        p: W(
                          {
                            width: "19px",
                            height: "19px",
                            style: {
                              display: "inline-block",
                              marginInlineStart: "6px",
                              marginInlineEnd: "4px",
                              position: "relative",
                              top: `${wt(this.l) ? 7 : 8}px`,
                            },
                          },
                          (f) =>
                            `images/${wt(this.l) ? "trash" : "folder"}${f ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    ...(Nt(this.l) && {
                      Zh: h({
                        style: {
                          display: this.l.locked ? "inline-block" : "none",
                        },
                        p: W(
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
                            init: (f) => {
                              (this.m ??= []).push(
                                ...St(f.i, { Yt: x("lockedGroupUnlockHelp") }),
                              );
                            },
                          },
                          (f) => `images/lock${f ? "" : "-dark"}.png`,
                        ),
                      }),
                    }),
                    $e: new Kt({
                      ...(L(this.l) && wt(this.l) && { gr: !0 }),
                      ...(L(this.l) && { Zs: re({ h: s, l: this.l }) }),
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        marginInlineEnd: "10px",
                        marginInlineStart: "5px",
                        marginTop: L(this.l) ? "0" : "5px",
                        flex: "1 1 auto",
                      },
                      value: this.l.label,
                      rs: "tabGroupLabelText",
                      Gi: x("title"),
                      ...(_(this.l) && {
                        Di: "click",
                        St: (f) => this.on.Sl(),
                      }),
                    }),
                  },
                }),
                Qm: h({
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    ...(this.Tt &&
                      !_(this.l) &&
                      !wt(this.l) && { marginTop: "-13px" }),
                  },
                  children: {
                    ...(!_(this.l) &&
                      !wt(this.l) && {
                        Jm: h({
                          style: {
                            display: "flex",
                            marginInlineEnd: "15px",
                            marginBlockStart: L(this.l) ? "3px" : "8px",
                          },
                          children: {
                            ...(!this.J && {
                              co: h({
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
                              flags: new bs({
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
                    controls: h({
                      style: {
                        marginTop: `${_(this.l) || wt(this.l) ? 10 : 0}px`,
                        marginInlineEnd: "7px",
                        textAlign: "end",
                        ...(this.J && { marginTop: "6px" }),
                      },
                      children: {
                        ...(this.Tt &&
                          !wt(this.l) &&
                          _(this.l) && {
                            Jh: new $t({
                              label: x("storeAllOpenWindowsHere"),
                              icon: { I: "close", dimension: "12px" },
                              onclick: async (f) => await A.Kh(),
                            }),
                          }),
                        ...(this.Tt &&
                          !_(this.l) &&
                          !wt(this.l) && {
                            Xh: new $t({
                              label: x("openParentFolder"),
                              icon: {
                                I: "nav-to-parent",
                                dimension: "12px",
                                ee: !J(),
                              },
                              onclick: async (f) => {
                                await navigateToItem({
                                  itemId: this.l.parentIds.find(ut),
                                });
                              },
                            }),
                          }),
                        ...(this.Vt &&
                          !L(this.l) &&
                          !this.C && {
                            Pr: new $t({
                              label: x("restoreAll"),
                              icon: { I: "open", dimension: "13px" },
                              onclick: async (f) => {
                                f.stopPropagation();
                                let T,
                                  $ = !1;
                                if (this.H && !xi(f))
                                  if (this.vt) {
                                    let M = await getActiveTabInCurrentWindow();
                                    ((T = Pe(M?.url)
                                      ? "currentWindow"
                                      : "replaceCurrentTab"),
                                      ($ = !0));
                                  } else $ = !0;
                                if (
                                  (Bi(f) &&
                                    (f.preventDefault(), f.stopPropagation()),
                                  !this.H &&
                                    !xi(f) &&
                                    !(await A._e(
                                      "autoActionOnOpenOptionChosen",
                                    )))
                                )
                                  try {
                                    await displayAutoActionOnOpenOptionModal();
                                  } catch {
                                    return;
                                  }
                                await Ls({
                                  id: this.l.id,
                                  ...(T && { zr: T }),
                                  Wr: !1,
                                  Nr: (await chrome.windows.getCurrent()).id,
                                  Yl: Bi(f),
                                  Rr: !this.C && !this.ut && !xi(f),
                                  _l: Ei(f),
                                  Vl: Yt(f),
                                  tc: $ && !Yt(f),
                                  Yh: !this.H && !Yt(f),
                                });
                              },
                            }),
                          }),
                        ...(L(this.l) &&
                          !this.Tt && {
                            Lr: new $t({
                              label: x("openFolder"),
                              icon: {
                                I: "right-arrow",
                                dimension: "12px",
                                ee: !J(),
                              },
                              onclick: async () => {
                                this.H
                                  ? (await A.ec({ itemId: this.l.id }),
                                    window.close())
                                  : await navigateToItem({ itemId: this.l.id });
                              },
                            }),
                          }),
                        ...(!wt(this.l) &&
                          !this.C && {
                            Ei: new $t({
                              label: x("moreEllipsis"),
                              icon: {
                                I: "vertical-ellipses",
                                dimension: "12px",
                              },
                              er: async (f) =>
                                G("div", {
                                  init: (T) =>
                                    (T.i.onpointerover = ($) =>
                                      $.stopPropagation()),
                                  style: {
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    paddingInline: "8px",
                                    paddingBlock: "8px 8px",
                                    lineHeight: "1.5em",
                                    maxWidth: "300px",
                                  },
                                  children: await Oe({
                                    view: this,
                                    H: this.H,
                                    Vt: this.Vt,
                                    me: this.me,
                                    ic: m,
                                    vt: this.vt,
                                    onChange: async (T) => {
                                      if (this.J) {
                                        (Object.hasOwn(T, "isTabGroup") &&
                                          (this.Mr(T.isTabGroup),
                                          (this.l.groupType = T.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          delete T.isTabGroup,
                                          (T.groupType = this.l.groupType)),
                                          T.groupType &&
                                            T.groupType === this.nn.groupType &&
                                            (T.groupType = void 0),
                                          (T.collapsed ?? !1) ===
                                            (this.nn.collapsed ?? !1) &&
                                            (T.collapsed = void 0),
                                          Object.assign(this.l, T));
                                        let $ = await Zt(this.X, T);
                                        ((this.Rt =
                                          Object.entries($).length > 0),
                                          this.It({
                                            de: this.Rt || this.fe.size > 0,
                                            pe: !0,
                                          }));
                                      } else
                                        (Object.hasOwn(T, "isTabGroup") &&
                                          ((T.groupType = T.isTabGroup
                                            ? "tabGroup"
                                            : "window"),
                                          T.groupType === "tabGroup" &&
                                            (T.pinnedCount = 0),
                                          delete T.isTabGroup),
                                          Object.keys(T).length > 0 &&
                                            (await A.Fi(this.l.id, T)));
                                    },
                                    Zr: () => lt.rn?.(),
                                    sc: (T, $) =>
                                      f(
                                        h({
                                          init: (M) =>
                                            (M.i.onpointerover = (S) =>
                                              S.stopPropagation()),
                                          p: T,
                                        }),
                                        $,
                                      ),
                                    xs: this.xs ?? b,
                                    nc: await A.ks("copyToClipboardFormat"),
                                  }),
                                }),
                            }),
                          }),
                        ...(this.C &&
                          !wt(this.l) && {
                            Qr: new $t({
                              label: x("delete"),
                              ni: !0,
                              icon: { I: "cross-action", dimension: "10px" },
                              onclick: async () => {
                                let f = [xt({ itemId: this.l.id })];
                                await A._h({ rt: f });
                              },
                            }),
                            Jr: new $t({
                              label: x("moveBack"),
                              icon: { I: "move", dimension: "14px" },
                              onclick: async (f, T) => ys(this.l),
                            }),
                          }),
                        ...(this.C &&
                          wt(this.l) && {
                            Vh: new $t({
                              label: x("deleteAllTrash"),
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
            ...((this.Vt || this.me || m || this.bs || this.ws) &&
              !L(this.l) && {
                Zt: oi({
                  marginTop: "0px",
                  marginBottom: "4px",
                  marginInlineStart: "24px",
                  marginInlineEnd: "14px",
                }),
              }),
            sn: new Kt({
              style: {
                marginTop: L(this.l) ? 0 : "4px",
                marginBottom: "8px",
                marginInlineStart: L(this.l)
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
              Gi: x("notes"),
              cs: !0,
            }),
            hi: h({ style: { display: "none" } }),
            ...(!L(this.l) && {
              Me: h({
                className: "childContainer",
                style: {
                  paddingInlineStart: "1px",
                  paddingInlineEnd: "1px",
                  paddingTop: "4px",
                  paddingBottom: "12px",
                },
                init: (f) => {
                  let T = wr({
                    we: this.l.groupType,
                    Me: f,
                    k: this.k,
                    ed: () => this.l.id,
                    sd: () => this.Ft && !this.ut,
                    nd: () => this.C,
                  });
                  (this.m ??= []).push(...T);
                },
              }).i,
            }),
            ho: h({
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
              init: (f) => {
                (this.m ??= []).push(z(f.i, "click", (T) => this.Wt(!0, !0)));
              },
            }),
            ...(this.bs && {
              bs: h({
                style: {
                  display: "flex",
                  marginInlineStart: L(this.l) ? "59px" : "32px",
                  marginInlineEnd: "22px",
                  marginBottom: "7px",
                  gap: "24px",
                  color: "var(--text-color-weak)",
                },
                children: { lo: h({}) },
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
          ar: (f) => {
            ((dnd.ft.types = [
              this.l.groupType,
              ...O(this.ut, "locked"),
              ...O(this.C, "trash"),
              ...O(!this.l.label, "untitled"),
            ]),
              (dnd.ft.Ae = { itemsMeta: [xt({ itemId: this.l.id })] }),
              this.o.u.K && (this.o.u.K.style.visibility = "hidden"),
              ye({ e: f, Kr: "dragged-group", ji: [this.o.i] }));
          },
          lr: () => Ni(),
          cr: () => !this.Ft,
        }),
      ),
      this.oc(this.l.locked || this.ut, !0),
      this.rc(),
      this.o.u.flags?.update(),
      this.ac(),
      this.o.u.en &&
        ((this.m ??= []).push(
          mi(this.o.u.en.i, (f) => {
            !P.Xr &&
              !this.on?._t &&
              this.qe &&
              !this.ut &&
              (this.o.u.K.style.visibility = "visible");
          }),
        ),
        (this.m ??= []).push(
          bi(this.o.u.en.i, (f) => {
            this.qe && (this.o.u.K.style.visibility = "hidden");
          }),
        )),
      (this.$e = this.o.u.en.u.$e),
      (this.Y = this.o.u.sn),
      (this.on = new ms({
        children: [...O(!_(this.l), this.$e), this.Y],
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
          let f = this.l.label,
            T = structuredClone(this.l.notes);
          ((this.l.label = this.$e.value),
            this.Y.value
              ? (this.l.notes || (this.l.notes = {}),
                (this.l.notes.text = this.Y.value))
              : this.l.notes && delete this.l.notes.text,
            (this.o.u.sn.i.style.display = this.l.notes?.text
              ? "block"
              : "none"));
          let $ = {
            ...(f !== this.l.label && { label: this.l.label }),
            ...(!Ii(T, this.l.notes) && { notes: this.l.notes }),
          };
          if (Object.entries($).length > 0)
            if (this.J) {
              ($.label === "" && ($.label = void 0),
                ["", void 0].includes($.notes?.text) && ($.notes = void 0));
              let M = await Zt(this.X, $);
              ((this.Rt = Object.entries(M).length > 0),
                this.It({ de: this.Rt || this.fe.size > 0, pe: !0 }));
            } else await A.Fi(this.l.id, $);
        },
      })),
      this.ln(),
      (this.fe = new Set()),
      await s.th(p),
      ze(this.k),
      await this.sync({ h: s, ci: n, Se: r }),
      this.A &&
        this.J &&
        (this.m ??= []).push(
          new ss({
            listener: ({ count: f, nt: T }) => this.Yr(),
            Ka: (f) => this.A.lc(f),
            Bs: (f) => this.A.od(f),
          }),
        ),
      k?.parentNode && k.replaceWith(this.o.i),
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
    this.o.u.co.i.textContent = `${s} ${n} - ${We(t)}`;
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
      Bn(this.l))
    ) {
      let t = h({
        style: {
          display: "flex",
          alignItems: "center",
          marginInline: `27px ${this.te ? 6 : 18}px`,
          marginBlockEnd: "10px",
        },
        children: {
          icon: new Xt(
            { dimension: "12px", style: { flex: "0 0 auto" } },
            (e) => `images/share${e ? "" : "-dark"}.png`,
          ),
          label: h({
            style: {
              marginInlineStart: "8px",
              marginInlineEnd: "8px",
              fontSize: "11px",
            },
            textContent:
              x("sharedExpiresColon") +
              " " +
              vn(new Date(this.l.shareExpiryDate)),
          }),
          cn: new $t({
            gl: !0,
            label: x("copySharedPageUrl"),
            onclick: async () => {
              let e = await A.ht(this.l.id),
                s = to(e.shareId);
              (await navigator.clipboard.writeText(s),
                t.u.cn.Xt(x("copiedToClipboard")),
                setTimeout(() => t.u.cn.Xt(x("copySharedPageUrl")), 3e3));
            },
          }),
          _r: new $t({
            gl: !0,
            label: x("modifySharing"),
            onclick: async () => await showSharingModal(this.l.id),
          }),
        },
      });
      (this.o.u.hi.i.replaceWith(t.i), (this.o.u.hi = t));
    } else this.o.u.hi.i.style.display = "none";
  }
  Yr() {
    if (L(this.l)) return;
    let t;
    this.A && this.A.count()
      ? this.l.groupType === "tabGroup"
        ? (t = this.k.filter(
            (n) => n instanceof X && this.A.nt.some((r) => r.At === n.At),
          ).length)
        : (t = this.A.nt.length)
      : (t = this.Xi());
    let e =
        t === 0 &&
        this.H &&
        !this.vt &&
        !this.te &&
        !this.k.map((n) => n instanceof kt).length,
      s = e ? "" : ee(t);
    (this.$e.Dl(s),
      Qn(this.o.u.Rh, (n) => {
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
      .map((t) => (t instanceof X ? 1 : t.Xi()))
      .reduce((t, e) => t + e, 0);
  }
  async ad(t) {
    let e = this.k.filter((s) => s.l.id === t.l.id).findIndex((s) => s === t);
    (await A.move({
      rt: [xt({ itemId: t.l.id, Fe: this.l.id, zt: e })],
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
      m = (f) => (d.has(f) || d.set(f, f.fo(s)), d.get(f)),
      y = m(this),
      w =
        !t && (y.length || this.k.some((f) => f instanceof kt && m(f).length)),
      b = 0,
      g = this.k.flatMap((f, T) => {
        if (f instanceof X) {
          let $ = O(f.isSelected() && !u.has(f.l.id), f);
          return (mt(this.l) && $ && T < this.l.pinnedCount && b++, $);
        } else if (f instanceof kt) {
          let $ = m(f);
          return e ? $ : O($.length, f);
        } else throw new Error("childView instance type unrecognized");
      });
    ((o = g.map((f) => f.l.id)),
      (a = g.map((f) => ({ itemId: f.l.id, At: f.At }))),
      w &&
        n.push({
          ...this.l,
          childIds: o,
          ...(mt(this.l) && {
            pinnedCount: (
              await Promise.all(y.map((f) => f.At).map(getTabById))
            ).filter((f) => f?.pinned).length,
          }),
        }));
    let p = (f, T, $) => {
      let M = c.get(f.l.id);
      (M || ((M = { ...f.l }), r.push(M), c.set(M.id, M)),
        (M.parentIds = Qt(M.parentIds.filter(Fn(T)), $)));
    };
    for (let f of this.k) {
      let T = f instanceof kt ? m(f) : void 0;
      if (f instanceof kt && T.length) {
        if (!e) {
          let $ = {
            ...f.l,
            childIds: T.map((S) => S.l.id),
            ...(t && {
              parentIds: Qt(
                f.l.parentIds.filter((S) => S === "quickList"),
                t,
              ),
            }),
          };
          n.push($);
          let M = { Qt: $, dd: T.map((S) => ({ itemId: S.l.id, At: S.At })) };
          ((M.di = (await chrome.tabs.get(M.dd[0].At))?.groupId), l.push(M));
        }
        T.forEach(($) => {
          p($, f.l.id, e ? (t ?? this.l.id) : f.l.id);
        });
      } else
        f instanceof X &&
          f.isSelected() &&
          !u.has(f.l.id) &&
          p(f, this.l.id, t ?? this.l.id);
    }
    let k = new Set(["quickList", ...n.map((f) => f.id), ...O(t)]);
    return (
      r.forEach((f) => (f.parentIds = f.parentIds.filter((T) => k.has(T)))),
      r.forEach((f) => delete f.pinned),
      { fd: n, pd: r, md: o, wd: b, xd: a, bd: l }
    );
  }
  yd(t = []) {
    return [...this.fo(t), ...this.Vr().flatMap((e) => e.fo(t))];
  }
  uc() {
    return (
      this.k.some((t) => t instanceof X && t.Gt()) ||
      this.Vr().some((t) => t.uc())
    );
  }
  fo(t = []) {
    let e = new Set(t);
    return this.k.filter(
      (s) => s instanceof X && s.isSelected() && !e.has(s.l.id),
    );
  }
  Vr() {
    return this.k.filter((t) => t instanceof kt);
  }
  gd() {
    return this.k.filter((t) => t instanceof X);
  }
  po(t = []) {
    return [
      ...this.fo(t).map((e) => e.At),
      ...this.k.filter((e) => e instanceof kt).flatMap((e) => e.po(t)),
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
        (gt(t.targetParentGroupTypeUpdated, (e) => this.ze(e)),
        gt(
          t.targetParentId === this.l.id && t.targetParentGroupTypeUpdated,
          (e) => this.ze(e),
        ),
        t.type === "update" && this.l.id === t.itemId)
      ) {
        if (
          (st(t, "label", (e) => this.mo(e)),
          st(t, "notes", (e) => this.wo(e)),
          st(t, "rating", (e) => this.fi(e)),
          st(t, "archived", (e) => this.Bi(e)),
          st(t, "color", (e) => this.setColor(e)),
          st(t, "collapsed", (e) => this.Td(e)),
          st(t, "openType", (e) => this.Id(e)),
          st(t, "groupType", (e) => this.ze(e)),
          st(t, "locked", (e) => this.vd(e)),
          st(t, "pinnedCount", (e) => (this.l.pinnedCount = e)),
          ui.some((e) => t.propChanges[e]))
        ) {
          let e = Object.fromEntries(
            Object.entries(t.propChanges)
              .filter(([s, n]) => ui.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          this.Ci(e);
        }
        if (os.some((e) => t.propChanges[e])) {
          let e = Object.fromEntries(
            Object.entries(t.propChanges)
              .filter(([s, n]) => os.includes(s))
              .map(([s, n]) => [s, n.new]),
          );
          (Object.assign(this.l, e), this.rc());
        }
      } else if (t.type === "store" && this.l.id === t.targetParentId) {
        let e = await getItemById(this.l.id);
        ((this.l.pinnedCount = e.pinnedCount), await this.sync());
      } else if (t.type === "move") {
        let e = t.itemsMeta.find(
          (s) => s.itemId === this.l.id && s.groupTypeUpdated,
        );
        if (e) {
          let s = e.groupTypeUpdated;
          this.ze(s);
        }
        Dt(this.l.id, [
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
      gt(
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
      let e = this.k.filter((s) => s instanceof X);
      (async () => {
        let s = new ItemCache();
        await s.Te({ groupId: this.l.id });
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          await this.fc({ item: { ...r.l }, view: r, h: s, index: n });
        }
      })();
    }
    this.l.color || this.setColor(hi);
  }
  mc() {
    let t = this.k.filter((s) => s instanceof X && !s.tr()).length,
      e = this.k
        .filter((s) => s instanceof kt)
        .map((s) => s.mc())
        .reduce((s, n) => s + n, 0);
    return t + e;
  }
  wc() {
    let t = this.k.filter((s) => s instanceof X && s.tr()).length,
      e = this.k
        .filter((s) => s instanceof kt)
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
      ? (s = Mt("seeOtherTabsInThisGroup", t))
      : (s = Mt("seeTabsInThisGroup", t)),
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
      B(t)
        ? (o = new X({
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
                tabIndex: this.k.filter((u) => u instanceof X).indexOf(l),
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
                c = [xt({ itemId: o.l.id, Fe: this.l.id, zt: u })];
              await Gi({
                title: x("chooseLocationToRestoreTo"),
                He: L(o.l),
                io: async (d) => {
                  await ji({ rt: c, O: d.id });
                },
              });
            },
            Ne: async () => {
              let a = this.k
                  .filter((u) => u.l.id === o.l.id)
                  .findIndex((u) => u === o),
                l = [xt({ itemId: o.l.id, Fe: this.l.id, zt: a })];
              await A._h({ rt: l });
            },
          }))
        : dt(t) &&
          (o = new kt({
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
                tabIndex: o.k.filter((c) => c instanceof X).indexOf(l),
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
    B(t)
      ? (await e.st({
          ut: this.ut,
          ta: t,
          pinned: n < (this.l.pinnedCount ?? 0),
          xe: this.l.id,
          wt: this,
          ys: mt(this.l) && this.Rl,
          h: s,
        }),
        e.A && o?.has(e.At) && e.lt(!0))
      : dt(t) &&
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
      if (((t ??= new ItemCache()), !L(this.l))) {
        let r;
        e?.length && (r = (await chrome.tabs.get(e.flat()[0])).groupId);
        let o = await t.ht(this.l.id);
        ((this.l.parentIds = o.parentIds), (this.l.childIds = o.childIds));
        let a = o.pinnedCount ?? 0;
        ((this.l.pinnedCount = a),
          await Ps({
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
        await we({
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
    this.k.filter((t) => t instanceof X).forEach((t) => t.lt(!0));
  }
  gc(t) {
    let e = !1;
    this.k
      .filter((s) =>
        s instanceof X ? (s === t && (e = !0), !e || s === t) : !1,
      )
      .forEach((s) => s.lt(!0));
  }
  kc(t) {
    let e = !1;
    this.k.filter((s) => (s === t && (e = !0), e)).forEach((s) => s.lt(!0));
  }
  Tc(t) {
    (this.k
      .filter((e) => e instanceof X)
      .filter((e) => e !== t)
      .forEach((e) => e.lt(!0)),
      t.lt(!1));
  }
  Ic() {
    this.k.filter((t) => t instanceof X).forEach((t) => t.lt(!t.Gt()));
  }
  vc() {
    this.A.reset();
  }
  na(t, e) {
    let s = this.k.filter((n) => n instanceof X);
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
    return this.k.filter((t) => t instanceof X && t.Gt()).length;
  }
  ra() {
    return this.gd().length;
  }
  $c(t) {
    return this.k.filter((e) => e instanceof X)[0] !== t;
  }
  Sc(t) {
    return this.k.filter((e) => e instanceof X).at(-1) !== t;
  }
  ac() {
    this.Ts ||
      !ot(this.l) ||
      ((this.Ts = new he({
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
        ...St(this.Ts.o.i, { Yt: x("tabGroupIndicatorTooltipHelp") }),
      ),
      (this.bo = h({ children: { Ts: this.Ts } })),
      this.o.u.$e.o.i.before(this.bo.i));
  }
  dc() {
    ot(this.l)
      ? (this.ac(),
        (this.bo.i.style.display = "inline-block"),
        this.Ts.setColor(this.l.color))
      : this.bo && (this.bo.i.style.display = "none");
  }
}
async function Pt(i) {
  if (
    (i.task && this.l.archived && (i.archived = 0),
    ie(i, "archived", (t) => this.Bi(t)),
    ie(i, "rating", (t) => this.fi?.(t)),
    ie(i, "task", (t) => {
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
        On(i.parentIds, this.nn.parentIds) &&
        (i.parentIds = void 0),
      i?.rating === 0 && (i.rating = void 0),
      i?.archived === 0 && (i.archived = void 0),
      i?.task === 0 && (i?.done === 0 && (i.done = void 0), (i.task = void 0)));
    let t = await Zt(this.X, i);
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
      (B(this.l)
        ? ((e = this.xe),
          (t = this.wt.k
            .filter((s) => s instanceof X && this.l.id === s.l?.id)
            .findIndex((s) => s === this)))
        : (e = this.l.parentIds.find(ut)),
        await A.Ir({ itemId: this.l.id, parentId: e, zt: t, value: i.pinned }),
        delete i.pinned);
    }
    (Object.assign(this.l, i),
      Object.keys(i).length && (await A.Fi(this.l.id, i)));
  }
}
function wr({ Me: i, k: t, ed: e, sd: s, we: n, nd: r, Oc: o = !1 }) {
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
            !Ae({ Er: c, Fr: n, jr: u, Br: r(), Cr: "groupView" }) ||
            ue(l)
          );
        },
        pr: (l) => {
          mr({ e: l, pn: (u) => u?.o?.i, k: t, Me: i, Oc: o });
        },
        mr: () => {
          et.remove();
        },
        wr: async (l) => {
          if (!i?.i?.isConnected) return;
          let u = e();
          if (u && i.i.contains(et))
            try {
              await ge({
                e: l,
                Hr: () => {
                  let c = [...i.i.children],
                    d = c.findIndex((k) => k === et);
                  if (d < 0) {
                    let k = t.filter((f) => f?.o?.i?.parentElement === i.i);
                    return k.length ? k.at(-1)?.index + 1 : void 0;
                  }
                  let m = new Map();
                  t.forEach((k) => {
                    let f = k?.o?.i;
                    f && f.parentElement === i.i && !m.has(f) && m.set(f, k);
                  });
                  let y = c
                      .filter((k) => k !== et)
                      .map((k) => m.get(k))
                      .filter(Boolean),
                    w = y[d]?.index;
                  (d === y.length && y.length && (w = y[d - 1]?.index + 1),
                    w === void 0 &&
                      d > y.length &&
                      y.length &&
                      (w = y.at(-1)?.index + 1));
                  let b = dnd.F ? (dnd.ft?.types ?? []) : [],
                    g = dnd.F ? (dnd.ft?.Ae?.itemsMeta ?? []) : [],
                    p =
                      u === "quickList" ||
                      (b.includes("tab") &&
                        (g.some((k) => k.sourceParentId === "quickList") ||
                          xs(l)));
                  if (
                    Number.isFinite(w) &&
                    dnd.F &&
                    !P.q &&
                    Array.isArray(P.ji) &&
                    !p
                  ) {
                    let k = P.ji.reduce((f, T) => {
                      let $ = t.find((M) => M?.o?.i === T);
                      return f + ($?.index < w ? 1 : 0);
                    }, 0);
                    k && (w = Math.max(0, w - k));
                  } else if (
                    Number.isFinite(w) &&
                    dnd.F &&
                    P.q &&
                    !b.includes("tab") &&
                    !p
                  ) {
                    let k = new Set(g.map((f) => f.itemId));
                    if (k.size) {
                      let f = c.reduce((T, $, M) => {
                        if (M >= d || $ === et) return T;
                        let S = m.get($);
                        return T + (k.has(S?.l?.id) ? 1 : 0);
                      }, 0);
                      f && (w = Math.max(0, w - f));
                    }
                  }
                  return (
                    w === void 0 &&
                      y.length &&
                      console.log("Warn: viewIndex not found"),
                    w
                  );
                },
                qr: () => u,
                Ur: () => n,
                Sd: () =>
                  !P.q && P.i && P.ji.length === 1 && et.replaceWith(P.i),
              });
            } finally {
              et.remove();
            }
        },
      }),
    ),
    a
  );
}
function mr({ e: i, pn: t, k: e, Me: s, Oc: n }) {
  if (!s?.i?.isConnected) {
    et.remove();
    return;
  }
  let r = P.Mc ?? 20;
  i.currentTarget !== P.currentTarget &&
    ((P.currentTarget = i.currentTarget),
    n
      ? ((et.style.border = ""),
        (et.style.borderBottom = "var(--drop-area-border)"),
        (et.style.borderRadius = ""),
        (et.style.height = 0))
      : ((et.style.borderBottom = ""),
        (et.style.border = "var(--drop-area-border)"),
        (et.style.borderRadius = "10px"),
        (et.style.height = `${r - 6}px`)));
  let o = new Set(
      e.map((l) => t(l)).filter((l) => l && l.parentElement === s.i),
    ),
    a = null;
  for (let l of s.i.children) {
    if (l === et || !o.has(l)) continue;
    let u = l.getBoundingClientRect(),
      c = u.y + u.height / 2;
    if (l.previousSibling === et ? i.clientY < c : i.clientY < c - 1) {
      a = l;
      break;
    }
  }
  (a?.parentElement !== s.i && (a = null), s.i.insertBefore(et, a));
}
async function ys(i) {
  let t = [xt({ itemId: i.id })];
  await Gi({
    title: x("chooseLocationToRestoreTo"),
    He: L(i),
    io: async (e) => {
      await ji({ rt: t, O: e.id });
    },
  });
}
class Xt {
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
      (this.o = G("picture", {
        style: { width: s, height: n, ...r },
        className: `lightDarkPicture${t ? " " + t : ""}`,
        ...o,
        draggable: !1,
        children: { ko: br(c(!0), c(!1), s, n) },
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
      (this.o.ko.src = t(Ft)),
      (this.o.ko.dataset.lightSrc = t(!0)),
      (this.o.ko.dataset.darkSrc = t(!1)));
  }
  Re(t = !1) {
    this.o.ko.src = this.Gc(Ft, t);
  }
}
function W(...i) {
  return new Xt(...i).o.i;
}
function br(i, t, e, s) {
  const n = document.createElement("img");
  return (
    (n.className = "lightDarkInnerImg"),
    (n.dataset.lightSrc = i),
    (n.dataset.darkSrc = t),
    (n.draggable = !1),
    (n.src = Ft ? i : t),
    (n.style.maxWidth = e),
    (n.style.maxHeight = s),
    n
  );
}
class yr {
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
          button: gr({
            fontSize: n,
            label: c.label,
            isSelected: e.includes(c.name),
            St: async (d) => {
              if (c.St) c.St(d);
              else {
                let m = this.Dt[c.name].button.i.classList.contains("on");
                if (o) {
                  this.Dt[c.name].button.i.classList.toggle("on");
                  let y = this.Lc();
                  (await s(y)) === !1 &&
                    this.Dt[c.name].button.i.classList.remove("on");
                } else if (m) {
                  if (a) {
                    let y = Object.values(this.Dt).find(
                      ({ mi: g, button: p }) => p.i.classList.contains("on"),
                    )?.button.i;
                    Object.values(this.Dt).forEach(({ button: g }) =>
                      g.i.classList.remove("on"),
                    );
                    let w = this.Lc();
                    (await s(w)) === !1 && y.classList.add("on");
                  }
                } else {
                  let y = Object.values(this.Dt).find(({ mi: b, button: g }) =>
                    g.i.classList.contains("on"),
                  )?.button.i;
                  (Object.values(this.Dt).forEach(({ button: b }) =>
                    b.i.classList.remove("on"),
                  ),
                    this.Dt[c.name].button.i.classList.add("on"),
                    (await s([c.name])) === !1 &&
                      (this.Dt[c.name].button.i.classList.remove("on"),
                      y.classList.add("on")));
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
        h({
          children: {
            Md: h({
              style: { height: 0, fontSize: n },
              p: h({
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
    this.o = h({
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
  return { bs, pr, Gi, kt, Pt, wr, ys, Xt, W, yr };
  }
};
