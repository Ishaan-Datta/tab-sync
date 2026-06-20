globalThis.createOneTabBaseControls = function createOneTabBaseControls(deps) {
  const { h, G, vi, W, z, St, Ei, mi, bi, O, Si, J, Cs, Ni, Yt, Qt, Ji, He, Be, se, dn, spinner, getFt, getDnd, getP, getVt, getFe, getLt, getTooltip, getQs } = deps;
class il {
  constructor({
    parent: t,
    label: e,
    ym: s,
    Xa: n,
    isEnabled: r,
    Yo: o,
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
class Di {
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
    Hs: m,
    _i: y,
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
  Ai: m,
  _i: y,
  Wn: w,
}) {
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
      init: (k) => {
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
          z(k.i, "click", async (T) => {
            await f(T);
          }),
        ),
          b.push(
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
          ? Si(e.split("ONETAB"), (k) => ({
              ...(k[0] !== "" && { a: le(k[0]) }),
              b: W(
                {
                  width: 176 / 2.2 + "px",
                  height: 56 / 2.2 + "px",
                  style: { display: "inline-block", marginBottom: "2px" },
                },
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
            init: (k) => {
              (b.push(
                z(k.i, "click", async (f) => {
                  (f.stopPropagation(), m());
                }),
              ),
                b.push(
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
    m: b,
  };
}
class cr {
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
      (this.o = h({
        className: "checkbox" + (n ? ` ${n}` : ""),
        init: (u) => {
          s && St(u, { Yt: s });
        },
        onclick: (u) => {
          o?.()
            ? a?.()
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
class fi {
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
      (this.o = h({
        className: "checkboxField",
        init: ({ i: d }) => {
          (n && (this.m ??= []).push(...St(d, { Yt: n })),
            (this.m ??= []).push(
              z(d, "click", async (m) => {
                let y = !this.value;
                (!u || !(await u(y))) && this.et(!this.value);
              }),
            ),
            (this.m ??= []).push(
              mi(d, (m) => {
                (this.Si("tick"),
                  (this.o.u.icon.style.opacity = this.value ? 1 : 0.7));
              }),
            ),
            (this.m ??= []).push(
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
                init: (d) => {
                  (this.m ??= []).push(...St(d.i, { Yt: c }));
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
      (r.src = getFt() ? s : n));
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
class he {
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
      (this.o = h({
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
  Xt(t) {
    this.o.label.i.textContent = t;
  }
  destroy() {
    (this.o.u.Oi?.le(!1),
      this.o.u.Oi?.destroy(),
      (this.onclick = null),
      getTooltip()?.destroy(),
      (this.m ?? []).forEach((t) => t.remove()),
      (this.m = null));
  }
}
const fs = new WeakSet(),
  ds = new WeakSet(),
  ps = !1;
class el {
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
      ps && !t.style.touchAction && (t.style.touchAction = "none"),
      u.push(
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
                    ts: d,
                    es: m,
                    dx: y,
                    dy: w,
                    qs: b,
                    Us: g,
                    pageX: p,
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
  hr({ Ae: t, i: e, dr: s, pr: n, mr: r, wr: o }) {
    let a = [],
      l = (c) => {
        let d = getDnd().P.Mi === t;
        return (
          d && (delete getDnd().P.Mi, delete getDnd().P.ss),
          getP().currentTarget === c && delete getP().currentTarget,
          d
        );
      },
      u = (c) => (e.isConnected ? !1 : (l(c), !0));
    return (
      ["dragover", "pointermove"].forEach((c) =>
        a.push(
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
      a
    );
  }
  setDragImage(t) {
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
function ue(i) {
  return !!(
    i.dataTransfer &&
    ((i.dataTransfer.dropEffect = "move"),
    !["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
      (t) => ce(i.dataTransfer.types, t),
    ))
  );
}
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
function xs(i) {
  return i.ctrlKey || i.altKey;
}
function fr(i) {
  return i.isPrimary && i.button === 0;
}
function dr(i) {
  let t =
    typeof i.pointerType == "string" ? i.pointerType.toLowerCase() : "mouse";
  return ps || t !== "touch";
}
class ws {
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
    $: m,
    Em: y,
    Ih: w,
    Z: b = document,
    onShown: g,
    D: p,
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
                init: (f) => {
                  (this.m ??= []).push(...St(f.i, { Yt: p }));
                },
              },
              (f) => `images/help-circle${f ? "" : "-dark"}.png`,
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
class ms {
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
let sl = !0;
class Kt {
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
    ue: m,
    gr: y,
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
        (this.o.i.onclick = (b) =>
          this._t
            ? !0
            : {
                click: (g) => {
                  this.St?.(g);
                },
                edit: (g) => (this.Rs(!0), !1),
              }[this.Di](b))));
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
    ((this.group = t), Qt(this.group.children, this));
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
      (this.W = G("textarea", {
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
      (this.W.Gl = (e) => {
        this.Dh = !0;
      }),
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
      (this.W.onkeyup = (e) => {
        e.stopPropagation();
      }),
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
  et(t) {
    ((this.value = Ji(this.cs ? He(t) : Be(t))),
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
