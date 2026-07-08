(globalThis as any).createOneTabBaseControls = function createOneTabBaseControls(deps: any) {
  const { h, G, vi, W, z, St, Ei, mi, bi, O, Si, J, Cs, Ni, Yt, Qt, Ji, He, Be, se, dn, spinner, getFt, getDnd, getP, getVt, getFe, getLt, getTooltip, getQs } = deps;
class il {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    parent: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    label: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ym: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Xa: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    isEnabled: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Yo: o,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    className: a,
  }) {
    ((this.div = vi(t, "div", {
      style: {
        paddingInlineEnd: s + "px",
        display: "inline-block",
        fontSize: "12px",
        cursor: "pointer",
        color: "var(--link-color)",
      },
      className: a,
      textContent: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      onclick: (l) => {
        this.isEnabled ? n(l, this.div) : this.Yo && this.Yo(l);
      },
    }).i),
      this.setEnabled(r),
      (this.Yo = o));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  setEnabled(t) {
    ((this.isEnabled = t),
      this.isEnabled
        ? (this.div.style.color = "")
        : (this.div.style.color = "var(--text-color-weak)"));
  }
}
class Di {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    label: t,
    fontSize: e = "14px",
    dt: s = !0,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    V: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    onclick: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    tabIndex: o,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    $: a,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Cs: l,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Be: u,
    Yi: c = !1,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    vi: d,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Hs: m,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    _i: y,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Ai: w,
    Wn: b = !1,
  }) {
    ((this.label = t),
      (this.fontSize = e),
      (this.onclick = r),
      (this.tabIndex = o),
      (this.Be = u),
      (this.Yi = c),
      (this.vi = d),
      (this.Hs = m),
      (this.Ai = w),
      (this._i = y),
      (this.Cs = l),
      (this.Wn = b),
      (this.o = h({
        className: "button-outer" + (n ? " button-default-outer" : ""),
        style: { margin: 0, ...(a ?? {}) },
        p: h({}).i,
      })),
      this.Wt(s),
      this.Xt(this.label));
  }
  gm() {
    this.onclick();
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Wt(t) {
    this.o.i.style.display = t ? "inline-block" : "none";
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Xt(t) {
    this.label = t;
    let { o: e, m: s } = ur({
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ((this.m ?? []).forEach((r) => r.remove()), (this.m = s));
    let n = e.i;
    (this.o.p.replaceWith(n), (this.o.p = n));
  }
  destroy() {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ((this.m ?? []).forEach((t) => t.remove()),
      (this.m = null),
      (this.onclick = null));
  }
}
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function le(i) {
  return h({
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
function ur({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  xl: i,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  className: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  label: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  fontSize: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  onclick: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  ah: r,
  tabIndex: o = -1,
  style: a = {},
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Be: l,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Yi: u,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  vi: c,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Hs: d,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Ai: m,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  _i: y,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Wn: w,
}) {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  let b = [],
    g = !1;
  return {
    o: G(i, {
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      init: (k) => {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        let f = async (T) => {
          if (!r?.() && !g) {
            ((g = !0),
              (k.bl.style.display = "inline-block"),
              (k.i.style.cursor = "wait"));
            try {
              await n(T, k);
            } catch ($) {
              console.log($);
            } finally {
              ((k.bl.style.display = "none"),
                (k.i.style.cursor = "pointer"),
                (g = !1));
            }
          }
        };
        (b.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
          z(k.i, "click", async (T) => {
            await f(T);
          }),
        ),
          b.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            z(k.i, "keydown", async (T) => {
              T.key === "Enter" &&
                document.querySelector(":focus-visible") === k.i &&
                (T.stopPropagation(), await f(T));
            }),
          ));
      },
      tabIndex: o,
      children: {
        ...(l
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
          ? Si(e.split("ONETAB"), (k) => ({
              ...(k[0] !== "" && { a: le(k[0]) }),
              b: W(
                {
                  width: 176 / 2.2 + "px",
                  height: 56 / 2.2 + "px",
                  style: { display: "inline-block", marginBottom: "2px" },
                },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                (f) => `images/onetab-button-logo-${f ? "light" : "dark"}.png`,
              ),
              ...(k[1] !== "" && { c: le(k[1]) }),
            }))
          : {
              a: le(e),
              ...(u && { b: h({ style: { height: `${56 / 2 + 2}px` } }) }),
            }),
        ...(d && {
          km: h({
            style: {
              height: "10px",
              margin: "4px 0",
              border: "1px solid transparent",
            },
          }),
        }),
        ...(c && {
          Tm: h({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            init: (k) => {
              (b.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                z(k.i, "click", async (f) => {
                  (f.stopPropagation(), m());
                }),
              ),
                b.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                  z(k.i, "keydown", async (f) => {
                    f.key === "Enter" &&
                      document.querySelector(":focus-visible") === k.i &&
                      (f.stopPropagation(), m());
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
              ...y,
            },
            children: {
              lh: W(
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                (k) => `images/tree-twistie-closed-${k ? "light" : "dark"}.png`,
              ),
            },
          }),
        }),
        bl: spinner({
          style: {
            display: "none",
            position: "absolute",
            right: "10px",
            bottom: "-1px",
            ...(w && { right: "-6px", bottom: "-2px" }),
          },
          ...(w && { uh: 4 }),
        }),
      },
    }),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    m: b,
  };
}
class cr {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    borderStyle: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    value: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Im: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    className: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    style: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    vm: o,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Am: a,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    onChange: l,
  }) {
    ((this.value = e),
      (this.onChange = l),
      (this.o = h({
        className: "checkbox" + (n ? ` ${n}` : ""),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        init: (u) => {
          s && St(u, { Yt: s });
        },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        onclick: (u) => {
          o?.()
            ? a?.()
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            : (this.et(!this.value), this.onChange?.(this.value, Ei(u)));
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      this.et(this.value));
  }
  Nn() {
    this.Vo ||
      ((this.Vo = W(
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        (t) => `images/tick${t ? "" : "-dark"}.png`,
      )),
      this.o.i.appendChild(this.Vo));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
class fi {
  [key: string]: any;
  constructor({
    value: t = !1,
    dt: e = !0,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    label: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    tooltipText: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    fontSize: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    onChange: o,
    $: a = {},
    ae: l = `${28 / 2}px`,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    hh: u,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    D: c,
  }) {
    ((this.value = t),
      (this.label = s),
      (this.onChange = o),
      (this.o = h({
        className: "checkboxField",
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        init: ({ i: d }) => {
          (n && (this.m ??= []).push(...St(d, { Yt: n })),
            (this.m ??= []).push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
              z(d, "click", async (m) => {
                let y = !this.value;
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                (!u || !(await u(y))) && this.et(!this.value);
              }),
            ),
            (this.m ??= []).push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
              mi(d, (m) => {
                (this.Si("tick"),
                  (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
              }),
            ),
            (this.m ??= []).push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
              bi(d, (m) => {
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
          icon: W(
            {
              className: "checkboxFieldBox",
              dimension: l,
              style: { fontSize: r, minWidth: l },
            },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            (d) => `images/tick${d ? "" : "-dark"}.png`,
          ),
          label: h({
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
            yl: W(
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                init: (d) => {
                  (this.m ??= []).push(...St(d.i, { Yt: c }));
                },
              },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  et(t, e) {
    let s = this.value;
    ((this.value = t),
      this.o.i.classList.remove(this.value ? "off" : "on"),
      this.o.i.classList.add(this.value ? "on" : "off"),
      s !== this.value && !e && this.onChange?.(this.value),
      this.Si(t ? "tick" : "tickbox"),
      (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Si(t) {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    let e = (o) => `images/${t}${o ? "" : "-dark"}.png`,
      s = e(!0),
      n = e(!1),
      r = this.o.u.icon.firstElementChild;
    ((r.dataset.lightSrc = s),
      (r.dataset.darkSrc = n),
      (r.draggable = !1),
      (r.src = getFt() ? s : n));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Wt(t) {
    this.o.i.style.display = t ? "flex" : "none";
  }
  tr() {
    return this.o.i.style.display !== "none";
  }
  destroy() {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ((this.m ?? []).forEach((t) => t.remove()), (this.m = null));
  }
}
class he {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    color: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    dh: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    isSelected: s,
    dimension: n = "11px",
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    $: r,
    dt: o = !0,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    St: a,
  }) {
    ((this.color = t),
      (this.o = h({
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  setColor(t) {
    ((this.color = t),
      (this.o.i.style.backgroundColor = `var(--tab-group-color-${t})`));
  }
  $m() {
    return this.color;
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Wt(t) {
    this.o.i.style.display = t ? "inline-block" : "none";
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  fh(t) {
    t ? this.o.i.classList.add("on") : this.o.i.classList.remove("on");
  }
  destroy() {
    this.o.i.onclick = null;
  }
}
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function cs({ color: i, dimension: t, $: e = {}, St: s }) {
  return h({
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
class $t {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    label: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    onclick: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    icon: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    tooltipText: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    er: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    gl: o,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ni: a,
  }) {
    ((this.onclick = e),
      (this.er = r),
      (this.o = h({
        className: ["controlButton", ...O(a, "red")].join(" "),
        style: {
          position: "relative",
          ...(!s && { paddingInlineStart: "10px" }),
          ...(o && { flex: "0 1 auto", whiteSpace: "normal" }),
        },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        onclick: (l) => {
          if ((l.stopPropagation(), l.preventDefault(), r)) this.o.u.Oi.le(!0);
          else return this.onclick(l);
        },
        children: {
          ...(r && { Oi: new (getFe())({ oi: !1, Vi: this.er }) }),
          ...(s && {
            icon: getLt().kl({
              ...s,
              $: { paddingInlineStart: "9px", paddingInlineEnd: "8px", ...s.$ },
            }),
          }),
          label: h({
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
      n && (this.m ??= []).push(...St(this, { Yt: n })));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Xt(t) {
    this.o.label.i.textContent = t;
  }
  destroy() {
    (this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy(),
      (this.onclick = null),
      getTooltip()?.destroy(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.m ?? []).forEach((t) => t.remove()),
      (this.m = null));
  }
}
const fs = new WeakSet(),
  ds = new WeakSet(),
  ps = !1;
class el {
  [key: string]: any;
  constructor() {
    ((this.ft = null),
      (this.Tl = null),
      (this.ve = null),
      (this.F = !1),
      (this.P = {}));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  ir({ sr: t, nr: e, rr: s, ar: n, Sm: r, lr: o, cr: a, ur: l }) {
    let u = [];
    return (
      ps && !t.style.touchAction && (t.style.touchAction = "none"),
      u.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        z(t, "pointerdown", (c) => {
          (c.stopPropagation(),
            dr(c) &&
              fr(c) &&
              (c.shiftKey ||
                c.metaKey ||
                this.P.Rn ||
                (a && a()) ||
                ((this.P = {}),
                Cs({
                  ph: { enabled: !0 },
                  mh: 3,
                  event: c,
                  element: t,
                  Il: null,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                  wh: ({ ts: d, es: m, qs: y, Us: w }) => {
                    ((this.F = !0), (this.ft = e));
                    let b = s.getBoundingClientRect();
                    ((this.Om = b.left),
                      (this.Mm = b.top),
                      (this.Gm = s.offsetWidth),
                      (this.Tl = s),
                      n(c) === !1 &&
                        ((this.F = !1),
                        (this.ft = null),
                        (this.Tl = null),
                        (this.P.vl = !0)));
                  },
                  Al: ({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    ts: d,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    es: m,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    dx: y,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    dy: w,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    qs: b,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    Us: g,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    pageX: p,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                    pageY: k,
                  }) => {
                    !this.F ||
                      !this.ve ||
                      ((this.ve.style.left = `${b + y + (J() ? -20 : 20 - this.ve.offsetWidth)}px`),
                      (this.ve.style.top = `${g + -20 + w}px`));
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  hr({ Ae: t, i: e, dr: s, pr: n, mr: r, wr: o }) {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    let a = [],
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      l = (c) => {
        let d = getDnd().P.Mi === t;
        return (
          d && (delete getDnd().P.Mi, delete getDnd().P.ss),
          getP().currentTarget === c && delete getP().currentTarget,
          d
        );
      },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      u = (c) => (e.isConnected ? !1 : (l(c), !0));
    return (
      ["dragover", "pointermove"].forEach((c) =>
        a.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
          z(e, c, (d) => {
            if (u(d.currentTarget) || (d.type === "pointermove" && !getDnd().F))
              return;
            if (getDnd().F && getDnd().P.$l) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (fs.has(d)) return;
            let m = getDnd().P.Mi,
              y = getDnd().P.ss;
            if (
              ((m || y) &&
                (m !== t || y !== d.currentTarget) &&
                typeof getVt() == "function" && getVt()(),
              !s(d))
            ) {
              l(d.currentTarget) && r(d);
              return;
            }
            (fs.add(d),
              (getDnd().P.Mi = t),
              (getDnd().P.ss = d.currentTarget),
              d.type === "dragover" && d.preventDefault(),
              d.dataTransfer && (d.dataTransfer.dropEffect = "move"),
              n(d));
          }),
        ),
      ),
      ["dragleave", "pointerleave"].forEach((c) =>
        a.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
          z(e, c, (d) => {
            u(d.currentTarget) ||
              (d.type.startsWith("pointer") && !getDnd().F) ||
              (d.stopPropagation(),
              !d.currentTarget.contains(d.relatedTarget) &&
                (l(d.currentTarget), r(d)));
          }),
        ),
      ),
      ["drop", "pointerup"].forEach((c) =>
        a.push(
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
          z(e, c, async (d) => {
            if (
              u(d.currentTarget) ||
              (d.type.startsWith("pointer") && !getDnd().F) ||
              (getDnd().F && getDnd().P.$l)
            )
              return;
            if (!s(d)) {
              l(d.currentTarget) && r(d);
              return;
            }
            if (ds.has(d)) return;
            let m = getDnd().P.Mi,
              y = getDnd().P.ss;
            if (
              !(
                m &&
                m !== t &&
                y instanceof Element &&
                y.isConnected &&
                e.contains(y)
              ) &&
              !getDnd().P.Rn
            ) {
              ((getDnd().P.Mi = t),
                (getDnd().P.ss = d.currentTarget),
                n(d),
                d.type === "drop" && (d.preventDefault(), d.stopPropagation()),
                ds.add(d),
                (getDnd().P.Rn = !0));
              try {
                await o(d);
              } finally {
                (delete getDnd().P.Rn,
                  getP().br && (delete getP().br, Ni()),
                  l(d.currentTarget),
                  typeof getVt() == "function" && getVt()());
              }
            }
          }),
        ),
      ),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      a
    );
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  setDragImage(t) {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    let e = getQs().find((s) => s.name === t);
    (this.ve?.remove(),
      (this.ve = vi(document.body, "div", {
        style: {
          pointerEvents: "none",
          zIndex: "100000",
          position: "absolute",
          cursor: "move",
        },
        p: G("img", {
          src: `images/${t + (getFt() ? "" : "-dark")}.png`,
          style: { width: `${e.w}px`, height: `${e.tt}px` },
        }),
      }).i));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  bh({ title: t, Dm: e }) {
    (this.ve?.remove(),
      (this.ve = vi(document.body, "div", {
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function ue(i) {
  return !!(
    i.dataTransfer &&
    ((i.dataTransfer.dropEffect = "move"),
    !["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
      (t) => ce(i.dataTransfer.types, t),
    ))
  );
}
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function ce(i, t) {
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function xs(i) {
  return i.ctrlKey || i.altKey;
}
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function fr(i) {
  return i.isPrimary && i.button === 0;
}
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
function dr(i) {
  let t =
    typeof i.pointerType == "string" ? i.pointerType.toLowerCase() : "mouse";
  return ps || t !== "touch";
}
class ws {
  [key: string]: any;
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  yh(t) {
    (this.ce.i.replaceWith(t.i), (this.ce = t));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Pm(t) {
    this.o.body.i.style.visibility = t ? "visible" : "hidden";
  }
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    label: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ce: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    gh: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Zn: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    kh: r,
    Lm: o = !1,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Qn: a,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    zs: l,
    Ce: u = { x: 0, y: 0 },
    maxHeight: c = "300px",
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Th: d,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    $: m,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Em: y,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Ih: w,
    Z: b = document,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    onShown: g,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    D: p,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    oi: k,
  }) {
    ((this.ce = e),
      (this.Zn = n),
      (this.Ah = !1),
      (this.Qn = a),
      s &&
        ((this.ce = h({})),
        (async () => {
          let f = await s();
          (this.ce.i.replaceWith(f.i), (this.ce = f));
        })()),
      (this.o = h({
        style: {
          display: "flex",
          alignItems: "center",
          position: "relative",
          ...m,
        },
        children: {
          ...((t || d) && {
            label: h({
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
          body: h({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            onclick: (f) => {
              (f.stopPropagation(), this.Ah && this.Jn(!1), this.Jn(!0));
            },
            className: "dropdown",
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: "2px 4px",
              ...(o && { height: "14px" }),
              ...y,
            },
            children: {
              ce: this.ce,
              lh: W(
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
                    ...w,
                  },
                },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                (f) => `images/tree-twistie-closed-${f ? "light" : "dark"}.png`,
              ),
            },
          }),
          Oi: new (getFe())({
            maxHeight: "600px",
            oi: k,
            onShown: g,
            zs: l,
            Ce: u,
            Z: b,
            Vi: r,
          }),
          ...(p && {
            yl: W(
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                init: (f) => {
                  (this.m ??= []).push(...St(f.i, { Yt: p }));
                },
              },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
              (f) => `images/help-circle${f ? "" : "-dark"}.png`,
            ),
          }),
        },
      })),
      (this.i = this.o.i));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Jn(t) {
    this.Zn ? t && this.Zn() : this.o.u.Oi.le(t);
  }
  destroy() {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    (this.m?.forEach((t) => t.remove()),
      this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy());
  }
}
class ms {
  [key: string]: any;
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  constructor({ children: t, Ws: e, ns: s, Kn: n, Xn: r }) {
    ((this.children = t),
      (this.Ws = e),
      (this.ns = s),
      (this.Kn = n),
      (this.Xn = r),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      this.children.forEach((o) => o.Ns(this)));
  }
  $h() {
    this._t ||
      ((this._t = !0),
      this.Ws?.(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      this.children.forEach((t) => t.Rs(!1)),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      this.children.forEach((t) => t.yr()));
  }
  Sh() {
    this._t &&
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
let sl = !0;
class Kt {
  [key: string]: any;
  constructor({
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    value: t,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Zs: e,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Gi: s,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    rs: n,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ls: r,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    _n: o,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Qs: a,
    style: l = {},
    cs: u = !1,
    Di: c = "edit",
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    St: d,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    ue: m,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    gr: y,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
    Pi: w,
  }) {
    ((this.value = Ji(t)),
      (this._n = o),
      (this.Qs = a),
      (this.Zs = e),
      (this.cs = u),
      (this.Gi = s),
      (this.Di = c),
      (this.St = d),
      (this.gr = y),
      (this.Pi = w),
      (this.ls = r),
      (this._t = !1),
      m && this.Ns(m),
      (this.o = h({
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
        p: G("span", {
          className: ["editInPlaceLabelSpan", ...O(r)].join(" "),
        }),
      })),
      (this.i = this.o.i),
      this.Pi && this.o.i.classList.add("selectable-item"),
      this.et(this.value),
      this.gr ||
        (this.Ol(this.Di),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        (this.o.i.onclick = (b) =>
          this._t
            ? !0
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
            : {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                click: (g) => {
                  this.St?.(g);
                },
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
                edit: (g) => (this.Rs(!0), !1),
              }[this.Di](b))));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Oh(t) {
    [this.o.i, this.Vn?.i].forEach((e) => {
      e && t(e);
    });
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Ol(t) {
    ((this.Di = t), this.kr());
  }
  kr() {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Ns(t) {
    ((this.group = t), Qt(this.group.children, this));
  }
  Yn() {
    this._t &&
      (this.ls && this.o.p.i.classList.add(this.ls),
      this.group
        ? setTimeout(() => {
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
      (this.W = G("textarea", {
        className: this.o.i.className,
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondragstart: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondragend: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondrop: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondragenter: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondragleave: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
        ondragover: (e) => e.stopPropagation(),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.W.onblur = (e) => (this.Yn(), !1)),
      (this.o.p.i.style.color = "transparent"),
      (this.o.i.style.userSelect = "none"),
      this.Vn ||
        ((this.Vn = h({
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.W.Gl = (e) => {
        this.Dh = !0;
      }),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.W.onkeydown = (e) => {
        (e.stopPropagation(),
          e.isComposing ||
            ((e.key === "Escape" || e.key === "Esc") &&
              (this.Yn(), e.preventDefault()),
            e.key === "Enter" &&
              (!this.cs || Yt(e)) &&
              (e.preventDefault(), this.Yn())),
          (this.Dh = !1));
      }),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.W.onkeyup = (e) => {
        e.stopPropagation();
      }),
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
      (this.W.oninput = (e) => {
        (e?.stopPropagation(), (this.value = this.W.value));
        let s = this.value;
        return (
          (s.length === 0 || (s.length > 0 && dn(s.charAt(s.length - 1)))) &&
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
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  et(t) {
    ((this.value = Ji(this.cs ? He(t) : Be(t))),
      this.value
        ? ((this.o.p.i.textContent = this.value), (this.o.i.style.color = ""))
        : ((this.o.p.i.textContent = this.Zs),
          (this.o.i.style.color = "var(--text-color-weak)")),
      (this.o.i.style.userSelect = ""));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  Dl(t) {
    ((this.Zs = t), this.et(this.value));
  }
// @ts-ignore TypeScript cannot model this oracle-derived minified control factory.
  us(t, e, s) {
    this.value &&
      se({ label: this.value, Ro: this.o.p.i, oe: t, ei: e, ii: s });
  }
  destroy() {
    ((this.o.i.onclick = null),
      (this._n = null),
      (this.Qs = null),
      (this.St = null),
      this.W && (this.W.remove(), (this.W.onblur = null), (this.W.Gl = null)));
  }
}
  return { il, Di, le, ur, cr, fi, he, cs, $t, el, ue, ce, xs, fr, dr, ws, ms, Kt };
};
