globalThis.createOneTabTreeInteractions = function createOneTabTreeInteractions(deps) {
  with (deps) {
function vt() {
  (et.remove(),
    typeof ft < "u" && ft.remove(),
    typeof Rt < "u" && delete Rt.Le,
    typeof dnd < "u" && dnd.P && (delete dnd.P.Mi, delete dnd.P.ss));
}
document.addEventListener(
  "keydown",
  (i) => {
    ti(i) &&
      (vt(),
      typeof dnd < "u" &&
        dnd.F &&
        dnd.P &&
        ((dnd.P.$l = !0), delete dnd.P.Mi, delete dnd.P.ss, delete dnd.P.Le),
      delete P.currentTarget);
  },
  !0,
);
function ye({ e: i, Kr: t, ji: e, q: s }) {
  (i.stopPropagation(),
    vt(),
    delete P.br,
    delete P.mu,
    delete P.currentTarget,
    (P.Xr = !0),
    (P.i = e[0]),
    (P.ji = e),
    (P.Ds = []),
    (P.wu = !s),
    (P.q = s),
    t ? (dnd.setDragImage(t), (P.Mc = 20)) : (P.Mc = P.i.offsetHeight));
  let n = P.i.getBoundingClientRect();
  ((P.Hw = i.clientX - n.left),
    (P.qw = i.clientY - n.top),
    i.dataTransfer && (i.dataTransfer.effectAllowed = "all"),
    e.forEach((r) => {
      P.Ds.push({ i: r, parent: r.parentElement, nextSibling: r.nextSibling });
    }),
    P.wu && e.forEach((r) => r.remove()));
}
function Ni() {
  if (dnd?.P?.Rn) {
    P.br = !0;
    return;
  }
  if (!Array.isArray(P.Ds)) {
    (vt(), (P = {}));
    return;
  }
  if (P.wu && !P.mu) {
    let i = new Set();
    for (P.Ds.forEach(({ i: t }) => i.add(t)); P.Ds.length; ) {
      let t = P.Ds.findIndex(({ i: s, nextSibling: n }) => !i.has(n)),
        [e] = P.Ds.splice(t, 1);
      if ((i.delete(e.i), e.parent)) {
        let s =
          e.nextSibling?.parentElement === e.parent ? e.nextSibling : null;
        e.parent.insertBefore(e.i, s);
      }
    }
  }
  (vt(), (P = {}));
}
async function ge({ e: i, Hr: t, Sd: e, qr: s, Ur: n }) {
  (i.preventDefault(), i.type === "drop" && i.stopPropagation());
  let r = dnd.F ? (dnd.ft?.types ?? []) : ["tab"],
    o = dnd.F ? dnd.ft?.Ae : void 0;
  if (dnd.F && (!o || !r.length)) {
    vt();
    return;
  }
  let a = t();
  a !== void 0 && (!Number.isFinite(a) || a < 0) && (a = void 0);
  let l = s();
  if (!l) {
    vt();
    return;
  }
  let u = n();
  if (o) {
    let c = await A.ht(l);
    if (!c) {
      vt();
      return;
    }
    if (
      ((u = c.groupType ?? u),
      r?.includes("tab") &&
        r.some((b) => ["tabGroup", "window", "folder"].includes(b)))
    )
      throw new Error("Can't mix tabs with groups during drag");
    let d = o.selectionGroupId,
      m = () => {
        d && oneTabPage?.Uw(d)?.reset();
      },
      y = o.itemsMeta;
    {
      const b = async (p) => {
        if (!p) return [];
        let k = await A.ht(p);
        return k ? [k.id, ...(await b(k.parentIds.find(ut)))] : [];
      };
      let g = await b(l);
      if (o.itemsMeta.some((p) => l === p.itemId)) {
        zt(x("cannotMoveItemIntoItself"));
        return;
      }
      if (o.itemsMeta.some((p) => g.includes(p.itemId))) {
        zt(x("cannotMoveItemAncestorHere"));
        return;
      }
    }
    if (
      (e?.(),
      l === "quickList" ||
        (r.includes("tab") &&
          (y.some((b) => b.sourceParentId === "quickList") || xs(i))))
    )
      if (r.includes("tab") && u === "folder") {
        let b = await Ns({ O: l, N: a });
        await A.eu({ iu: y.map((g) => g.itemId), O: b });
      } else await A.eu({ iu: y.map((b) => b.itemId), N: a, O: l });
    else {
      let b = P.q === "quickAccessCol-quickList",
        g = !!P.q;
      (await ji({ rt: y, O: l, N: a }), (P.mu = !(b || g)));
    }
    m();
  } else if (i.dataTransfer)
    if (
      ["text/uri-list", "text/html", "text/plain", "text/x-moz-place"].some(
        (c) => qi(i.dataTransfer.types, c),
      )
    ) {
      let c;
      if (
        qi(i.dataTransfer.types, "text/x-moz-place") &&
        er(i.dataTransfer.getData("text/x-moz-place"))
      ) {
        let m = JSON.parse(i.dataTransfer.getData("text/x-moz-place")),
          y = m.uri,
          w = _t(y);
        c = [[{ title: m.title || Gt(w), kt: w }]];
      } else if (
        ["text/html", "text/plain"].some((m) => qi(i.dataTransfer.types, m))
      ) {
        let m = ["text/html", "text/plain"].reduce(
          (y, w) =>
            y ??
            (qi(i.dataTransfer.types, w) ? i.dataTransfer.getData(w) : void 0),
          void 0,
        );
        c = await is(m);
      } else {
        let m = i.dataTransfer.getData("text/uri-list"),
          y = (await chrome.tabs.query({})).find((b) => b.url === m)?.title,
          w = _t(i.dataTransfer.getData("text/uri-list"));
        w && (c = [[{ title: y || Gt(w), kt: w }]]);
      }
      if (!Array.isArray(c) || !c.length) return;
      let d = await A.ht(l);
      if (!d) {
        vt();
        return;
      }
      ((u = d.groupType ?? u), await A.Ma({ Ga: c, Gs: u, O: l, N: a }));
    } else console.log(`Unrecognized dropped content: ${i.dataTransfer.types}`);
  else console.log("Unhandled onDrop - should be unreachable");
}
async function Ns({ O: i, N: t }) {
  let e = new Date().getTime(),
    s = Ht(),
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
function qi(i, t) {
  return typeof ce == "function"
    ? ce(i, t)
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
let io = {},
  qs = [
    { name: "dragged-group", w: 21, tt: 18, x: 21, y: 12 },
    { name: "dragged-tab", w: 21, tt: 5, x: 21, y: 2 },
    { name: "folder", w: 21, tt: 18, x: 21, y: 12 },
    { name: "multi-dragged-group", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-tab", w: 25, tt: 22, x: 25, y: 7 },
    { name: "multi-dragged-folder", w: 25, tt: 22, x: 25, y: 11 },
    { name: "multi-dragged-item", w: 25, tt: 22, x: 25, y: 11 },
  ];
function $l() {
  let i = 0;
  qs.forEach((t) => {
    let [e, s] = [`${t.name}.png`, `${t.name}-dark.png`].map((n) => {
      i -= Math.ceil(t.w * 1.2);
      let r = h({
        style: {
          width: `${t.w}px`,
          height: `${t.tt}px`,
          position: "absolute",
          left: `${i}px`,
        },
        p: G("img", {
          src: `images/${n}`,
          style: { width: `${t.w}px`, height: `${t.tt}px` },
        }),
      }).i;
      return (document.body.appendChild(r), r);
    });
    io[t.name] = { light: e, dark: s, x: t.x, y: t.y };
  });
}
const eo = '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">';
function Rs(i) {
  let t = `<a href="${es(i.url)}">${pt(i.title)}</a>`;
  return (gt(i.notes?.text, (e) => (t += `<br/>${e}`)), t);
}
function vl({ links: i, ge: t }) {
  let e = i.map((r) => ke({ link: r, ge: t })),
    s = e.map((r) => r.Xe).filter((r) => r).join(`
`),
    n = e
      .map((r) => r.Ee)
      .filter((r) => r)
      .join("<br/>");
  return { Xe: s, Ee: n };
}
function ke({ link: i, ge: t }) {
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
      gt(
        i.notes?.text,
        (n) =>
          (e += `
${n}`),
      ),
    t === "richText" && (s = Rs(i)),
    { Xe: e, Ee: s }
  );
}
function so({ group: i, level: t = 0, ge: e }) {
  let s = "",
    n = !1;
  return (
    e === "richText" &&
      (gt(
        i.l.label,
        (r) => (
          (s += `${r}
`),
          (n = !0)
        ),
      ),
      gt(
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
        ? ke({ link: r.l, ge: e }).Xe
        : `
${so({ group: r, level: t + 1, ge: e })}
`,
    ).join(`
`)),
    s
  );
}
function no({ group: i, level: t = 0 }) {
  let e = "",
    s = t ? 14 : 16,
    n = !1;
  return (
    gt(i.l.label, (r) => ((e += Us(pt(r), s) + "<br/>"), (n = !0))),
    gt(i.l.notes?.text, (r) => ((e += pt(r) + "<br/>"), (n = !0))),
    n && (e += "<br/>"),
    (e += i.k
      .map((r) =>
        r.l.type === "tab"
          ? Rs(r.l)
          : `<br/>${no({ group: r, level: t + 1 })}<br/>`,
      )
      .join("<br/>")),
    e
  );
}
async function Il({ zw: i, ge: t, h: e }) {
  e ??= new ItemCache();
  let s = await Promise.all(
      i.map((o) => Te({ groupId: o, ge: t, h: e, xu: !1, te: !1 })),
    ),
    n = s.map((o) => o.Xe).filter((o) => o).join(`

`),
    r = s
      .map((o) => o.Ee)
      .filter((o) => o)
      .join("<br/><br/>");
  return { Xe: n, Ee: r };
}
async function Te({ groupId: i, ge: t, h: e, xu: s, te: n }) {
  ((e ??= new ItemCache()), s || (await e.Te({ groupId: i })));
  let r,
    o,
    a = e.v(i),
    l = a.childIds.map((u) => e.v(u));
  if (t === "richText") {
    let u = !1;
    (gt(a.label, (c) => {
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
        (L(a) && (d = 18), (o += Us(pt(c), d) + "<br/>"));
      }
    }),
      gt(a.notes?.text, (c) => {
        ((u = !0),
          r || (r = ""),
          (r +=
            c +
            `
`),
          t === "richText" && (o || (o = ""), (o += pt(c) + "<br/>")));
      }),
      L(a) &&
        u &&
        ((r += `
`),
        (o += "<br/>")));
  }
  for (let u of l)
    if (B(u)) {
      let { Xe: c, Ee: d } = ke({ link: u, ge: t });
      (c &&
        (r
          ? (r += `
`)
          : (r = ""),
        (r += c)),
        d && (o ? (o += "<br/>") : (o = ""), (o += d)));
    } else {
      let { Xe: c, Ee: d } = await Te({
        groupId: u.id,
        ge: t,
        h: e,
        xu: !0,
        te: Nt(a),
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
function ro(i, t) {
  return `<span${t ? " " + t : ""}>${i}</span>`;
}
function Us(i, t) {
  return ro(i, `style="font-size: ${t}pt;"`);
}
function Ae({ Er: i, Fr: t, jr: e, Br: s, Cr: n }) {
  return !(
    (i.includes("folder") && Dt(t, ["window", "tabGroup"])) ||
    (i.includes("trash") && e === "quickList") ||
    (i.includes("locked") && i.includes("tab") && e !== "quickList") ||
    (i.includes("locked") &&
      Ct(["window", "tabGroup"], i) &&
      Dt(t, ["window", "tabGroup"])) ||
    (s &&
      !(
        n === "treeItem" &&
        e === "trash" &&
        !(i.includes("tab") && i.includes("isTreeItemInQuickListRoot"))
      ))
  );
}
let at = !1,
  Ws = 0;
const Cs = (() => {
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
    m,
    y,
    w,
    b,
    g,
    p,
    k,
    f = !1,
    T = null,
    $ = !1,
    M = null,
    S = null,
    H = null,
    Q = null,
    ht = 0,
    q = 0,
    C = 0,
    Z = null,
    Tt = null,
    R = null;
  (document.addEventListener(
    "pointerdown",
    (v) => {
      at &&
        v.pointerId !== o &&
        (n?.({
          ts: t,
          es: e,
          dx: 0,
          dy: 0,
          qs: c,
          Us: d,
          pageX: v.pageX,
          pageY: v.pageY,
        }),
        Wt(v));
    },
    !0,
  ),
    document.addEventListener(
      "keydown",
      (v) => {
        !ti(v) ||
          (!at && !$) ||
          (v.cancelable && v.preventDefault(),
          v.stopPropagation(),
          Wt(v, { If: at }));
      },
      !0,
    ),
    document.addEventListener(
      "pointercancel",
      (v) => {
        (at || $) && v.pointerId === o && Wt(v);
      },
      !0,
    ));
  function rt({
    event: v,
    element: F,
    Il: j,
    wh: N,
    Al: Y,
    xh: V,
    mh: it = 0,
    ph: Ot = null,
  }) {
    at ||
      $ ||
      ((t = F),
      (e = j),
      (s = N),
      (n = Y),
      (r = V),
      (o = v.pointerId),
      (a = v.pointerType || "mouse"),
      (m = 0),
      (y = 0),
      (c = v.pageX),
      (d = v.pageY),
      (l = it),
      (u = it * it),
      (M = Et(Ot)),
      (S = M?.enabled ? Bt(F) : null),
      (H = null),
      ei(),
      document.addEventListener("pointermove", At, !1),
      document.addEventListener("pointerup", Ri, !1),
      v.preventDefault(),
      ($ = !0));
  }
  function At(v) {
    v.isTrusted !== !1 &&
      ((!at && !$) ||
        v.pointerId !== o ||
        ((w = v.pageX),
        (b = v.pageY),
        (g = v.clientY),
        (p = v.clientX),
        (k = v.target),
        (f = !0),
        T === null && (T = requestAnimationFrame(Ut)),
        at && v.cancelable && v.preventDefault()));
  }
  function Ut() {
    ((T = null), f && ((f = !1), K(w, b, g, p, k)));
  }
  function K(v, F, j, N, Y) {
    if (!at && !$) return;
    let V, it;
    ((V = v - c), (it = F - d));
    const Ot = V * V + it * it >= u;
    if (
      (!at &&
        $ &&
        Ot &&
        ((at = !0),
        ($ = !1),
        ii(),
        document.body.classList.add("dnd-no-select"),
        t && ((Tt = t.style.pointerEvents), (t.style.pointerEvents = "none")),
        s?.({ ts: t, es: e, qs: c, Us: d }),
        D(j, N)),
      !at)
    )
      return;
    let si = !1;
    ((m !== V || y !== it) && (si = !0),
      (m = V),
      (y = it),
      (q = j),
      (C = N),
      si &&
        n?.({ ts: t, es: e, dx: V, dy: it, qs: c, Us: d, pageX: v, pageY: F }),
      Lt(Y, N, j),
      D(j, N));
  }
  function Ri(v) {
    v.isTrusted !== !1 &&
      ((v?.pointerId !== void 0 && o !== void 0 && v.pointerId !== o) ||
        (!at && !$) ||
        (Ti(v), Wt(v)));
  }
  function Wt(v, { If: F = !1 } = {}) {
    if (!at && !$) return;
    const j = at;
    (j && f && (K(w, b, g, p, k), (f = !1)),
      T !== null && (cancelAnimationFrame(T), (T = null)),
      I(),
      j &&
        (F ? ki() : R || document.body.classList.remove("dnd-no-select"),
        t && Tt !== null && (t.style.pointerEvents = Tt),
        (Tt = null)),
      document.removeEventListener("pointermove", At, !1),
      document.removeEventListener("pointerup", Ri, !1),
      (at = !1),
      ($ = !1),
      j && (Ws = +new Date()),
      (o = void 0),
      (a = void 0),
      (k = null),
      j && r?.({ ts: t, es: e, Ww: m, Nw: y, qs: c, Us: d }));
  }
  function ii() {
    R &&
      (document.removeEventListener("pointerup", R, !0),
      document.removeEventListener("pointercancel", R, !0),
      document.removeEventListener("mouseup", R, !0),
      (R = null));
  }
  function ki() {
    (document.body.classList.add("dnd-no-select"),
      !R &&
        ((R = () => {
          (ii(), document.body.classList.remove("dnd-no-select"));
        }),
        document.addEventListener("pointerup", R, !0),
        document.addEventListener("pointercancel", R, !0),
        document.addEventListener("mouseup", R, !0)));
  }
  function Lt(v, F, j) {
    if (!at) return;
    const N = a || "mouse";
    if (
      !(N !== "mouse" || (N === "mouse" && !1)) ||
      !Number.isFinite(F) ||
      !Number.isFinite(j) ||
      F < 0 ||
      j < 0 ||
      F > window.innerWidth ||
      j > window.innerHeight ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const V = document.elementsFromPoint(F, j);
    if (!V?.length) return;
    const it = V.find((Ot) => !ct(Ot)) || V[0];
    !it ||
      !(it instanceof Element) ||
      (v instanceof Element && v === it) ||
      it.dispatchEvent(
        new PointerEvent("pointermove", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: F,
          clientY: j,
          button: -1,
          buttons: 1,
        }),
      );
  }
  function Ti(v) {
    if (!at) return;
    const F = a || "mouse";
    if (
      !(F !== "mouse" || (F === "mouse" && !1)) ||
      typeof PointerEvent != "function" ||
      typeof document.elementsFromPoint != "function"
    )
      return;
    const N = Number.isFinite(v?.clientX) ? v.clientX : C,
      Y = Number.isFinite(v?.clientY) ? v.clientY : q;
    if (
      !Number.isFinite(N) ||
      !Number.isFinite(Y) ||
      N < 0 ||
      Y < 0 ||
      N > window.innerWidth ||
      Y > window.innerHeight
    )
      return;
    const V = document.elementsFromPoint(N, Y);
    if (!V?.length) return;
    const it = V.find((Ot) => !ct(Ot)) || V[0];
    !it ||
      !(it instanceof Element) ||
      (v?.target instanceof Element && v.target === it) ||
      it.dispatchEvent(
        new PointerEvent("pointerup", {
          bubbles: !0,
          cancelable: !0,
          composed: !0,
          pointerId: o ?? 1,
          pointerType: a || "mouse",
          isPrimary: !0,
          clientX: N,
          clientY: Y,
          button: 0,
          buttons: 0,
        }),
      );
  }
  function Et(v) {
    if ((v === !0 && (v = { enabled: !0 }), !v || v.enabled !== !0))
      return null;
    const F = Number.isFinite(v.Da) ? v.Da : 48,
      j = Number.isFinite(v.Fo) ? v.Fo : 80,
      N = Number.isFinite(v.Pa) ? v.Pa : 640,
      Y = v.jo || "quadratic",
      V = v.target || "hover";
    return { enabled: !0, Da: F, Fo: j, Pa: N, jo: Y, target: V };
  }
  function Bt(v) {
    let F = v;
    for (; F && F !== document.body && F !== document.documentElement; ) {
      const j = window.getComputedStyle(F),
        N = j.overflowY,
        Y = j.overflow;
      if (
        N === "auto" ||
        N === "scroll" ||
        N === "overlay" ||
        Y === "auto" ||
        Y === "scroll"
      )
        return F;
      F = F.parentElement;
    }
    return window;
  }
  function ei() {
    (I(), (q = 0), (C = 0), (Z = null));
  }
  function I() {
    (Q !== null && (cancelAnimationFrame(Q), (Q = null)), (ht = 0));
  }
  function D(v, F) {
    !at ||
      !M ||
      ((q = v),
      (C = F),
      (H = tt(F, v)),
      H &&
        Q === null &&
        ((ht = performance.now()), (Q = requestAnimationFrame(E))));
  }
  function E(v) {
    if (((Q = null), !at || !M)) return;
    const F = Math.max(0, (v - ht) / 1e3);
    if (((ht = v), (H = tt(C, q)), !H)) return;
    const j = U(q);
    if (j !== 0) {
      const N = j * F;
      (H === window ? window.scrollBy(0, N) : (H.scrollTop += N),
        (Q = requestAnimationFrame(E)));
    }
  }
  function U(v) {
    const F = M;
    if (!F) return 0;
    let j = 0,
      N = window.innerHeight,
      Y = window.scrollY,
      V = document.documentElement.scrollHeight - window.innerHeight;
    if (H !== window) {
      const Le = H.getBoundingClientRect();
      ((j = Le.top),
        (N = Le.bottom),
        (Y = H.scrollTop),
        (V = H.scrollHeight - H.clientHeight));
    }
    const it = Math.min(N, Math.max(j, v)),
      Ot = Math.max(0, it - j),
      si = Math.max(0, N - it),
      Ui = Math.max(1, F.Da);
    let ni = 0,
      Wi = 0;
    if (Ot < Ui) ((ni = -1), (Wi = Ot));
    else if (si < Ui) ((ni = 1), (Wi = si));
    else return 0;
    if ((ni < 0 && Y <= 0) || (ni > 0 && Y >= V)) return 0;
    let Jt = 1 - Math.min(1, Wi / Ui);
    return (
      F.jo === "quadratic"
        ? (Jt = Jt * Jt)
        : typeof F.jo == "function" && (Jt = F.jo(Jt)),
      (F.Fo + (F.Pa - F.Fo) * Jt) * ni
    );
  }
  function tt(v, F) {
    if (M?.target === "origin")
      return S && S !== window && !S.isConnected ? null : S;
    if (v < 0 || F < 0 || v > window.innerWidth || F > window.innerHeight)
      return It() || S || window;
    const j = document.elementsFromPoint(v, F);
    for (const N of j) {
      if (ct(N)) continue;
      const Y = Bt(N);
      if (Y) {
        const V = It();
        return Y === window && V ? V : ((Z = Y), Y);
      }
    }
    return It() || S || window;
  }
  function ct(v) {
    return v ? !!(t && (v === t || t.contains(v))) : !1;
  }
  function It() {
    return (Z && Z !== window && !Z.isConnected && (Z = null), Z);
  }
  return rt;
})();
function Ol(i, t) {
  return h({
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
      Rw: h({
        style: {
          display: "inline-block",
          marginBlock: "9px 10px",
          marginInline: "34px 0px",
          height: 86 / 2 + "px",
          minWidth: 310 / 2 + "px",
          width: 310 / 2 + "px",
        },
        children: {
          vf: W(
            {
              width: 310 / 2 + "px",
              height: 86 / 2 + "px",
              style: { cursor: "pointer" },
              St: async () => await chrome.tabs.create({ url: Ai, active: !0 }),
            },
            (e) =>
              `images/top-left-logo-sml-${e ? "light" : "dark"}${J() ? "" : "-rtl"}.png`,
          ),
        },
      }),
      title: h({
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
function Ml(i, t, e) {
  let s = (r) => {
      ((i = !i),
        (n.u.Af.style.display = i ? "inline-block" : "none"),
        (n.u.$f.style.display = i ? "none" : "inline-block"),
        (n.u.content.i.style.display = i ? "block" : "none"));
    },
    n = h({
      style: { display: "flex", gap: "10px" },
      children: {
        Qw: h({
          onclick: s,
          style: { fontSize: "16px", cursor: "pointer" },
          children: {
            Af: W(
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
            $f: W(
              {
                width: "14px",
                height: "14px",
                style: {
                  position: "relative",
                  top: "-1px",
                  display: i ? "none" : "inline-block",
                  verticalAlign: "middle",
                  ...(!J() && { transform: "rotate(180deg)" }),
                },
              },
              (r) => `images/twistie-closed${r ? "" : "-dark"}.png`,
            ),
          },
        }),
        body: h({
          children: {
            label: h({
              style: { fontSize: "16px", cursor: "pointer" },
              textContent: t,
              onclick: s,
            }),
            content: h({
              style: { paddingTop: "10px", display: i ? "block" : "none" },
              p: e,
            }),
          },
        }),
      },
    });
  return n;
}
let zs, Js, $e;
async function Sl() {
  $e = (await chrome.permissions.getAll()).permissions.includes("favicon");
  try {
    $e && (zs = await Rr(Qs("http://example.com")));
  } catch (i) {
    console.log(i);
  }
  Js = await qr("alpha");
}
function oo(i) {
  return (
    "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" +
    i +
    "&size=32"
  );
}
function Qs(i) {
  const t = new URL(chrome.runtime.getURL("/_favicon/"));
  return (
    t.searchParams.set("pageUrl", i),
    t.searchParams.set("size", "32"),
    t.toString()
  );
}
let ve = 0,
  Ie = 0;
async function Zs(i, t) {
  let e = +new Date();
  e - ve < 500
    ? ((ve = e), Ie++, Ie >= 8 ? await qt(t) : await qt(i))
    : ((ve = e), (Ie = 0), await qt(i));
}
function _s(i, t = "move") {
  let e = Nr(i),
    s = document.createElement("div");
  if (
    ((s.style.flex = "0 0 auto"),
    (s.style.display = "inline-block"),
    (s.style.width = "16px"),
    (s.style.height = "16px"),
    (s.style.marginInlineStart = "5px"),
    (s.style.cursor = t),
    Js && iconGrid.Ko.has(e))
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
        await Vt(),
        (s.style.backgroundImage = "url(images/iconGrid.webp)")
      ))());
  } else {
    let n = rn(i),
      r = oo(n),
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
        ($e
          ? ((a.onload = () => {
              a.src.endsWith(o) ||
                setTimeout(() => {
                  zs === Ss(a) &&
                    ((a.onload = null),
                    (a.onerror = () => (a.src = o)),
                    (a.src = r));
                }, 10);
            }),
            (async () => (
              document.readyState !== "complete" && (await Vt()),
              (a.onerror = () => (a.src = o)),
              await Zs(10, 100),
              (a.src = Qs(i))
            ))())
          : (async () => (
              document.readyState !== "complete" && (await Vt()),
              (a.onerror = () => (a.src = o)),
              await Zs(10, 100),
              (a.src = r)
            ))()));
  }
  return s;
}
async function Oe({
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
  vt: m,
  H: y,
}) {
  let w = t?.G && Ki(t.G.l),
    b = t && Ki(t.L.l),
    g = t?.q === "treeBrowser",
    p = (t ?? i).l,
    k = p.id,
    f = (t ?? i).index,
    T = i?.Tt,
    $ = i?.te;
  i || ($ = t?.G && mt(t.G.l) && ot(t.l));
  let M = i?.k?.some((I) => I instanceof kt);
  i || (M = t.S?.some((I) => ot(I.l)));
  let S = t?.G && [L].some((I) => I(t.G.l)),
    H = t?.G && [mt, L].some((I) => I(t.G.l)),
    Q = L(p) && (t || T),
    ht = (L(p) && (t || T)) || mt(p),
    q = i?.J,
    C = t?.L.l.id === "trash",
    Z = t?.l.id === "trash",
    Tt = i?.wt?.J,
    R = (t?.G || i?.wt)?.l;
  !R && !B(p) && (R = await A.ht(p.parentIds.find(ut)));
  let rt = R && R.childIds.indexOf(p.id) < (R.pinnedCount ?? 0),
    At = 0,
    Ut = i && i instanceof X && !i.wt;
  (t?.G &&
    (B(p)
      ? (At = t.G.S.filter((I) => B(I.l) && p.id === I.l?.id).findIndex(
          (I) => I === t,
        ))
      : (At = void 0)),
    i?.wt &&
      (B(p)
        ? (At = i.wt.k
            .filter((I) => I instanceof X && p.id === I.l?.id)
            .findIndex((I) => I === i))
        : (At = void 0)),
    B(p) &&
      At &&
      R &&
      (rt =
        (R.childIds.map((I, D) => [I, D]).filter(([I, D]) => I === p.id)[
          At
        ]?.[1] ?? 0) < (R.pinnedCount ?? 0)));
  let K = t?.q === "quickAccessCol-tasks",
    Ri = K && _e(p),
    Wt = i?.ut || p.locked || t?.G?.l.locked,
    ii =
      !B(p) &&
      !(t && !H) &&
      !w &&
      !t?.B &&
      !t?.Ot &&
      !(i && !window.Sf?.an.uo.As) &&
      !T,
    ki =
      !B(p) &&
      !$ &&
      !(i && !window.Sf?.an.uo.As) &&
      !(t && !S) &&
      !_(p) &&
      !T &&
      !w;
  ((s = s && !g && !L(p) && !C), (e = e && !g && Nt(p) && !M && !C));
  let Lt = ({
      icon: I,
      label: D,
      name: E,
      action: U,
      D: tt,
      ee: ct,
      Zt: It,
      ni: v,
    }) =>
      It
        ? oi({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          })
        : lt.bi({
            icon: I,
            label: D,
            name: E,
            D: tt,
            ee: ct,
            ni: v,
            action: async ({ e: F, o: j }) => {
              (await U({ Of: E, e: F, i: j.i })) || l();
            },
          }),
    Ti = ({ parentId: I, As: D }) => {
      let E = D ? "direct" : "recurse";
      return async ({ o: U, e: tt }) => (
        d(
          h({
            style: {
              fontSize: "12px",
              fontWeight: 400,
              margin: "8px",
              lineHeight: "1.5em",
            },
            children: {
              header: h({
                textContent: x("sortByColon"),
                style: {
                  marginInline: "10px 15px",
                  marginBlock: "12px 6px",
                  fontSize: "12px",
                  fontWeight: 600,
                },
              }),
              body: h({
                children: [
                  {
                    ki: [{ field: "title", order: "lexical" }],
                    label: x("title"),
                  },
                  ...O(!D, {
                    ki: [
                      { field: "rootDomain", order: "lexical" },
                      { field: "title", order: "lexical" },
                    ],
                    label: x("website"),
                  }),
                  {
                    ki: [
                      { field: "rating", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: x("starred"),
                  },
                  {
                    ki: [
                      { field: "modified", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: x("recentlyModified"),
                  },
                  {
                    ki: [
                      { field: "accessed", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: x("recentlyAccessed"),
                  },
                  {
                    ki: [
                      { field: "created", order: "desc" },
                      { field: "title", order: "lexical" },
                    ],
                    label: x("recentlyCreated"),
                  },
                  ...O(!D, {
                    ki: [{ field: "index", order: "desc" }],
                    label: x("reverse"),
                  }),
                ].map(({ ki: ct, label: It }, v) =>
                  Lt({
                    name: `${v}`,
                    label: It,
                    icon: {
                      I: "sort",
                      ...(ct[0].field === "index" && { Ed: !0 }),
                    },
                    action: async () =>
                      await A.sort({ ki: ct, parentId: I, Jw: E }),
                  }),
                ),
              }),
            },
          }).i,
          tt,
        ),
        !0
      );
    },
    Et = {
      ...te(
        [
          s && {
            ...Object.fromEntries(
              [
                ...ao.map(({ name: I, label: D }, E) => ({
                  name: I,
                  label: D,
                  ...(E === 0 && { icon: { I: "open", ee: !J() } }),
                  action: async ({ Of: U, e: tt }) => {
                    if (
                      (Bi(tt) && (tt.preventDefault(), tt.stopPropagation()),
                      !y &&
                        !b &&
                        !Wt &&
                        !K &&
                        !i?.C &&
                        !(await A._e("autoActionOnOpenOptionChosen")))
                    )
                      try {
                        await displayAutoActionOnOpenOptionModal();
                      } catch {
                        return;
                      }
                    await Ls({
                      id: k,
                      zr: U,
                      Kw: U === "newWindow",
                      Wr: !0,
                      Nr: (await chrome.windows.getCurrent()).id,
                      Yl: Bi(tt),
                      Rr: !(Wt || i?.C || xi(tt)),
                      Yh: !Yt(tt),
                      ...(B(p) &&
                        b &&
                        !w && {
                          bu: t.G.l.id,
                          tabIndex: t.G.S.findIndex((ct) => ct === t),
                          yu: ns(
                            t.G.S.filter((ct) => ct.l.id === t.l.id).findIndex(
                              (ct) => ct === t,
                            ),
                          ),
                        }),
                    });
                  },
                })),
              ].map((I) => [I.name, Lt(I)]),
            ),
          },
          n && {
            ...Object.fromEntries(
              [
                ...O(
                  (Ut && m) ||
                    (!q && m && p.parentIds.includes("quickList")) ||
                    (t?.q === "quickAccessCol-quickList" && w),
                  {
                    name: "removeFromQuickList",
                    label: x("removeFromQuickList"),
                    icon: {
                      I: "remove-from-quicklist",
                      dimension: "14px",
                      top: "1px",
                    },
                    D: x("removeFromQuickListMenuItemHelp"),
                    action: async () => await A.Xw([k]),
                  },
                ),
                ...O(!q && !g && !m && dt(p) && !K && !y, {
                  name: "shareAsWebPage",
                  label: x("shareAsAWebPage"),
                  icon: { I: "share-action", dimension: "12px", left: "0px" },
                  D: x("shareAsAWebPageMenuItemHelp"),
                  action: async () => showSharingModal(p.id),
                }),
                ...O(!q && !g && L(p) && !K, {
                  name: "saveFolderTabsAsHtmlFile",
                  label: x("saveTabsAsHtmlFile"),
                  D: x("saveTabsAsHtmlFileMenuItemHelp"),
                  action: async () => await go({ La: p.id }),
                }),
                ...O(!q && !_(p) && L(p), {
                  name: "storeAllOpenWindowsHere",
                  label: x("storeAllOpenWindowsHere"),
                  Kt: { I: "close", dimension: "13px", left: "0px", ee: !J() },
                  D: x("storeAllOpenWindowsHereMenuItemHelp"),
                  action: async () => await A.Kh(p.id),
                }),
                ...O(!q && !g && Nt(p) && !K, {
                  name: "copyToClipboard",
                  label: x("copyToClipboard"),
                  icon: { I: "copy-to-clipboard", left: "0px" },
                  D: x("copyToClipboardMenuItemHelp"),
                  action: async () => {
                    let I = async () => {
                      let { Xe: D, Ee: E } = await Te({
                        groupId: i?.l.id ?? t.l.id,
                        ge: a,
                      });
                      return {
                        Mf: new Blob([D], { type: "text/plain" }),
                        ...(E && {
                          Gf: new Blob([eo + E], { type: "text/html" }),
                        }),
                      };
                    };
                    await Cr({
                      kf: async () => (await I()).Mf,
                      ...(a === "richText" && {
                        Tf: async () => (await I()).Gf,
                      }),
                    });
                  },
                }),
                ...O(!_(p) && !g && !B(p), { name: "horizDivider1", Zt: !0 }),
                ...O(!_(p), {
                  name: "rename",
                  label: x("renameOrAddNote"),
                  Kt: { I: "caret", dimension: "12px", left: "0px" },
                  action: async () => {
                    i
                      ? i instanceof X
                        ? (i._c(), i.Oo(), i.Je.Rs(!0))
                        : i.on.Sl()
                      : t?.du();
                  },
                }),
                ...O(Nt(p) && !K && !g && !q, {
                  name: "lock",
                  label: p.locked ? x("unlock") : x("lock"),
                  icon: {
                    I: p.locked ? "unlock" : "lock-action",
                    dimension: "14px",
                    left: "0px",
                    top: "1px",
                  },
                  D: x("lockMenuItemHelp"),
                  action: async () => await A.Fi(p.id, { locked: !p.locked }),
                }),
                ...O(!_(p) && !p.rating && !g, {
                  name: "star",
                  label: x("star"),
                  icon: {
                    I: "star2-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: x("starMenuItemHelp"),
                  action: async () => Pt.call(i ?? t, { rating: 5 }),
                }),
                ...O(!_(p) && p.rating && !g, {
                  name: "removeStar",
                  label: x("removeStar"),
                  icon: {
                    I: "un-star2",
                    left: "0px",
                    top: "0px",
                    dimension: "17px",
                  },
                  action: async () => Pt.call(i ?? t, { rating: 0 }),
                }),
                ...O(!_(p) && p.task && !p.done && !g, {
                  name: "markAsDoneTask",
                  label: x("markAsDoneTask"),
                  icon: {
                    I: "task-ticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: x("markAsDoneTaskMenuItemHelp"),
                  action: async () => Pt.call(i ?? t, { task: 1, done: 1 }),
                }),
                ...O(!_(p) && p.task && !g, {
                  name: "unmarkAsTask",
                  label: x("unMarkAsTask"),
                  icon: {
                    I: "un-task",
                    left: "0px",
                    top: "-2px",
                    dimension: "18px",
                  },
                  action: async () => Pt.call(i ?? t, { task: 0, done: 0 }),
                }),
                ...O(!_(p) && (!p.task || p.done) && !g, {
                  name: "markAsPendingTask",
                  label: x("markAsPendingTask"),
                  icon: {
                    I: "task-unticked-action",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: x("markAsPendingTaskMenuItemHelp"),
                  action: async () => Pt.call(i ?? t, { task: 1, done: 0 }),
                }),
                ...O(!_(p) && p.archived && !g, {
                  name: "un-archive",
                  label: x("unmarkAsArchived"),
                  Kt: {
                    I: "un-archive",
                    dimension: "18px",
                    left: "0px",
                    top: "-1px",
                  },
                  D: x("markAsArchivedMenuItemHelp"),
                  action: async () => Pt.call(i ?? t, { archived: 0 }),
                }),
                ...O(!_(p) && !p.archived && !g, {
                  name: "archive",
                  label: x("markAsArchived"),
                  Kt: {
                    I: "archive",
                    left: "0px",
                    top: "1px",
                    dimension: "14px",
                  },
                  D: x("markAsArchivedMenuItemHelp"),
                  action: async () => Pt.call(i ?? t, { archived: 1 }),
                }),
                ...O(
                  !Tt &&
                    !i?.Tt &&
                    !q &&
                    !m &&
                    !(_(p) || b || (t && !S) || K || g || Ut),
                  {
                    name: "pin",
                    label: rt
                      ? x("unpin")
                      : B(p)
                        ? x("openAsPinnedTab")
                        : x("pinToTopOfFolder"),
                    Kt: {
                      I: `${rt ? "un-" : ""}pin-action`,
                      dimension: `${rt ? 15 : 13}px`,
                      top: "1px",
                    },
                    ...(!rt && {
                      D: B(p)
                        ? x("openAsPinnedTabMenuItemHelp")
                        : x("pinToTopOfFolderMenuItemHelp"),
                    }),
                    action: async () => {
                      let I;
                      (B(p) ? (I = R.id) : (I = p.parentIds.find(ut)),
                        await A.Ir({
                          itemId: p.id,
                          parentId: I,
                          zt: At,
                          value: !rt,
                        }));
                    },
                  },
                ),
                ...O(!_(p) && !B(p), { name: "horizDivider2", Zt: !0 }),
                ...O(!q && !g && !m && dt(p) && !K, {
                  name: "importLinks",
                  label: x("importLinksHere"),
                  Kt: { I: "import", dimension: "14px", left: "1px", ee: !J() },
                  D: x("importLinksHereMenuItemHelp"),
                  action: async () =>
                    await Ks({
                      O: k,
                      Gs: p.groupType,
                      gu: async ({ itemId: I, Zi: D }) => {
                        T &&
                          L(i.l) &&
                          (await navigateToItem({ itemId: I, Zi: D }));
                      },
                    }),
                }),
                ...O(!q && !ki && L(p) && !(i && !T) && !K, {
                  name: "createFolderWithin",
                  label: x("createFolderWithin"),
                  D: x("createFolderWithinMenuItemHelp"),
                  icon: {
                    I: "add-folder",
                    dimension: "15px",
                    top: "1px",
                    left: "0px",
                  },
                  action: async () => {
                    let I = await pi({ we: "folder", parentId: p.id, Ri: t });
                    T && (await navigateToItem({ itemId: p.id, Zi: I }));
                  },
                }),
                ...O(!q && ki && !K, {
                  name: "createFolder",
                  label: x(
                    Q
                      ? "createFolderAboveWithinBelow"
                      : "createFolderAboveBelow",
                  ),
                  icon: { I: "add-folder", dimension: "16px", left: "0px" },
                  D: x("createFolderWithinMenuItemHelp"),
                  action: async ({ o: I, e: D }) => (
                    d(
                      h({
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
                              label: x("createFolderAbove"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let E = k,
                                  U = p.parentIds.find(ut),
                                  tt = await getItemById(U);
                                await pi({
                                  we: "folder",
                                  parentId: U,
                                  Ri: t,
                                  N: tt.childIds.indexOf(E),
                                });
                              },
                            },
                            ...O(Q, {
                              name: "within",
                              label: x("createFolderWithin"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                await pi({ we: "folder", parentId: k, Ri: t });
                              },
                            }),
                            {
                              name: "below",
                              label: x("createFolderBelow"),
                              icon: { I: "add-folder", dimension: "16px" },
                              action: async () => {
                                let E = k,
                                  U = p.parentIds.find(ut),
                                  tt = await getItemById(U);
                                await pi({
                                  we: "folder",
                                  parentId: U,
                                  Ri: t,
                                  N: tt.childIds.indexOf(E) + 1,
                                });
                              },
                            },
                          ].map((E) => [E.name, Lt(E)]),
                        ),
                      }).i,
                      D,
                    ),
                    !0
                  ),
                }),
                ...O(
                  !q &&
                    !K &&
                    !(i && L(p) && !T) &&
                    !ii &&
                    !t?.B &&
                    !t?.Ot &&
                    !m &&
                    (L(p) || mt(p)),
                  {
                    name: "within",
                    label: x("createGroupWithin"),
                    icon: {
                      I: "add-group",
                      dimension: "14px",
                      top: "2px",
                      left: "0px",
                    },
                    D: x("createGroupMenuItemHelp"),
                    action: async () => {
                      if (t && o) await zt(x("createNewGroupTip"));
                      else {
                        let I = await pi({
                          we: mt(await getItemById(k)) ? "tabGroup" : "window",
                          parentId: k,
                          Ri: t,
                        });
                        T && (await navigateToItem({ itemId: p.id, Zi: I }));
                      }
                    },
                  },
                ),
                ...O(!q && ii && !K, {
                  name: "createGroup",
                  label: x(
                    ht
                      ? "createGroupAboveWithinBelow"
                      : "createGroupAboveBelow",
                  ),
                  icon: {
                    I: "add-group",
                    dimension: "14px",
                    top: "2px",
                    left: "0px",
                  },
                  D: x("createGroupMenuItemHelp"),
                  action: async ({ o: I, e: D }) => (
                    o
                      ? await zt(x("createNewGroupTip"))
                      : d(
                          h({
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
                                  label: x("createGroupAbove"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let E = k,
                                      U = p.parentIds.find(ut),
                                      tt = await getItemById(U);
                                    await A.Sa({
                                      id: Ht(),
                                      parentId: U,
                                      we: p.groupType,
                                      N: tt.childIds.indexOf(E),
                                    });
                                  },
                                },
                                ...O(ht, {
                                  name: "within",
                                  label: x("createGroupWithin"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () =>
                                    await A.Sa({
                                      id: Ht(),
                                      parentId: k,
                                      we: "tabGroup",
                                    }),
                                }),
                                {
                                  name: "below",
                                  label: x("createGroupBelow"),
                                  icon: {
                                    I: "add-group",
                                    dimension: "14px",
                                    top: "2px",
                                  },
                                  action: async () => {
                                    let E = k,
                                      U = p.parentIds.find(ut),
                                      tt = await getItemById(U);
                                    await A.Sa({
                                      id: Ht(),
                                      parentId: U,
                                      we: p.groupType,
                                      N: tt.childIds.indexOf(E) + 1,
                                    });
                                  },
                                },
                              ].map((E) => [E.name, Lt(E)]),
                            ),
                          }).i,
                          D,
                        ),
                    !0
                  ),
                }),
                ...O(
                  !q &&
                    !m &&
                    L(p) &&
                    (["navCol-root", "quickAccessCol-quickList"].includes(
                      t?.q,
                    ) ||
                      i),
                  {
                    name: "searchHere",
                    label: x("searchHere"),
                    Kt: {
                      I: "search-action",
                      dimension: "12px",
                      top: "0px",
                      left: "0px",
                      ee: !J(),
                    },
                    action: async () => {
                      await oneTabPage.Hd({ query: "", Xu: p.id });
                    },
                  },
                ),
                ...O(!q && $ && !m && !g && !K, {
                  name: "mergeIntoParent",
                  label: x("mergeIntoParent"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "1px" },
                  action: async () => {
                    let I = await getItemById(k);
                    await A.Df({ Pf: I, Lf: I.parentIds.find(ut), N: f });
                  },
                }),
                ...O(!q && M && !g && !L(p) && !m && !K, {
                  name: "mergeInnerGroups",
                  label: x("mergeWithInnerGroups"),
                  Kt: { I: "merge-into-parent", dimension: "14px", top: "2px" },
                  action: async () => {
                    let I = await getItems(p.childIds);
                    for (let D = I.length - 1; D >= 0; D--) {
                      let E = I[D];
                      dt(E) && (await A.Df({ Pf: E, Lf: p.id, N: D }));
                    }
                  },
                }),
                ...O(!q && !g && L(p) && !m && !K, {
                  name: "sortDirect",
                  label: x("sortGroups"),
                  Kt: { I: "sort", dimension: "14px", ee: !J() },
                  action: Ti({ parentId: k, As: !0 }),
                }),
                ...O(!q && i && Nt(p) && !K && !m, {
                  name: "sortRecursive",
                  label: x("sort"),
                  Kt: { I: "sort", dimension: "14px", ee: !J() },
                  action: Ti({ parentId: k, As: !1 }),
                }),
                ...O(!q && !m && !g && dt(p) && !K, {
                  name: "removeDuplicates",
                  label: x("removeDuplicates"),
                  Kt: { I: "remove-duplicates", dimension: "14px", ee: !J() },
                  D: x("removeDuplicatesMenuItemHelp"),
                  action: async ({ e: I }) => {
                    let { Yw: D, _w: E, Vw: U } = await A.tx(k),
                      tt = !(D.length || E.length || U.length);
                    return (
                      d(
                        h({
                          style: {
                            fontSize: "12px",
                            fontWeight: 400,
                            margin: "8px",
                            lineHeight: "1.5em",
                          },
                          children: {
                            body: h({
                              children: [
                                ...[
                                  ...O(D.length, {
                                    mode: "hereRetainNewest",
                                    label: Mt(
                                      "removeDuplicateTabsHere",
                                      D.length,
                                    ),
                                    D: x("recentDuplicateRetainedHelp"),
                                    Ea: D,
                                  }),
                                  ...O(E.length, {
                                    mode: "hereIfElsewhere",
                                    label: Mt(
                                      "removeTabsHereAlsoElsewhere",
                                      E.length,
                                    ),
                                    Ea: E,
                                  }),
                                  ...O(U.length, {
                                    mode: "elsewhereIfHere",
                                    label: Mt(
                                      "removeTabsElsewhereAlsoHere",
                                      U.length,
                                    ),
                                    Ea: U,
                                  }),
                                ].map(({ mode: ct, label: It, Ea: v, D: F }) =>
                                  Lt({
                                    name: ct,
                                    label: It,
                                    D: F,
                                    Kt: {
                                      I: "remove-duplicates",
                                      dimension: "14px",
                                      top: "2px",
                                    },
                                    action: async () => {
                                      let j = v.map((N) =>
                                        xt({
                                          itemId: N.id,
                                          Fe: N.parentId,
                                          zt: N.zt,
                                        }),
                                      );
                                      await A.move({ rt: j, O: "trash" });
                                    },
                                  }),
                                ),
                                ...O(
                                  tt,
                                  h({
                                    style: {
                                      fontSize: "12px",
                                      padding: "10px",
                                      textAlign: "center",
                                    },
                                    textContent: x("noDupsFoundHere"),
                                    onclick: (ct) => l(),
                                  }),
                                ),
                              ],
                            }),
                          },
                        }).i,
                        I,
                      ),
                      !0
                    );
                  },
                }),
                ...O(!q && !m && !B(p) && !g && !_(p) && !w, {
                  name: "move",
                  label: x("move"),
                  Kt: { I: "move", dimension: "15px", ee: !J(), left: "1px" },
                  action: async () => {
                    let I = [xt({ itemId: k })];
                    await Gi({
                      title: x("chooseLocationToMoveTo"),
                      He: L(p),
                      io: async (D) => {
                        await ji({ rt: I, O: D.id });
                      },
                    });
                  },
                }),
                ...O(!q && !g && !_(p) && !(B(p) && w), {
                  name: "trash",
                  label: x("moveToTrash"),
                  icon: { I: "cross-action", dimension: "10px", left: "0px" },
                  ni: !0,
                  action: async () => {
                    let I;
                    B(p) && R && (I = R.id);
                    let D = [xt({ itemId: k, Fe: I })],
                      E = await A.gs(D);
                    (await A.move({ rt: D, O: "trash" }),
                      await A.Oe(E),
                      await ho({ Ef: !!i && !t && !y && !T && Nt(p) }));
                  },
                }),
              ].map((I) => [I.name, Lt(I)]),
            ),
          },
          e && {
            horizDivider3: oi({
              marginTop: "5px",
              marginBottom: "4px",
              marginInlineStart: "-8px",
              marginInlineEnd: "-8px",
            }),
            ku: new fi({
              dt: c,
              value: ot(p),
              fontSize: "12px",
              label: x("openAsTabGroup"),
              D: x("openAsTabGroupMenuItemHelp"),
              onChange: async (I) => {
                Et.Fa.i.style.display = I ? "block" : "none";
                let D = { isTabGroup: I };
                (I && (p.color || (D.color = hi)),
                  I || ((D.color = void 0), (D.collapsed = void 0)),
                  rs.forEach((E) =>
                    Et.Fa.Ff[E].p.fh(E === (D.color ?? p.color)),
                  ),
                  Et.Fa.jf.et(p.collapsed, !0),
                  u(D));
              },
              ae: `${24 / 2}px`,
              $: {
                marginTop: "8px",
                marginInlineStart: "12px",
                marginInlineEnd: "15px",
              },
            }),
            Fa: h({
              style: {
                marginTop: "3px",
                marginBottom: "0px",
                display: ot(p) ? "block" : "none",
              },
              children: {
                jf: new fi({
                  value: !!p.collapsed,
                  fontSize: "12px",
                  label: x("openAsCollapsedTabGroup"),
                  D: x("openAsCollapsedTabGroupMenuItemHelp"),
                  onChange: async (I) => {
                    let D = { collapsed: I };
                    (ot(p) || (Et.ku.et(!0, !1), p.color || (D.color = hi)),
                      u(D));
                  },
                  ae: `${24 / 2}px`,
                  $: {
                    marginTop: "0px",
                    marginInlineStart: "12px",
                    marginInlineEnd: "15px",
                  },
                }),
                ix: h({
                  style: {
                    textAlign: "start",
                    fontSize: "12px",
                    marginTop: "8px",
                    paddingBottom: "3px",
                    marginInlineStart: "15px",
                    marginInlineEnd: "15px",
                  },
                  textContent: x("tabGroupColorColon"),
                }),
                Ff: h({
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    paddingInline: "14px 14px",
                    paddingBlock: "0px 7px",
                  },
                  children: {
                    ...Object.fromEntries(
                      rs.map((I) => [
                        I,
                        G("div", {
                          style: { display: "inline-block", cursor: "pointer" },
                          onclick: (D) => {
                            let E = p.color,
                              U = {};
                            (ot(p) ||
                              ((U.isTabGroup = !0),
                              (U.color = I),
                              Et.ku.et(!0, !0)),
                              I !== E && (U.color = I),
                              Object.keys(U).length > 0 && u(U),
                              l());
                          },
                          p: new he({
                            color: I,
                            dh: !0,
                            isSelected: p.color === I,
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
                  label: x("deleteAllTrash"),
                  icon: { I: "cross-action", dimension: "10px" },
                  ni: !0,
                  action: async () => {
                    await A.td();
                  },
                }),
                ...O(!Z, {
                  name: "moveBack",
                  label: x("moveBack"),
                  icon: { I: "move", dimension: "14px", top: "1px" },
                  action: async () => ys(p),
                }),
              ].map((I) => [I.name, Lt(I)]),
            ),
          },
        ],
        () =>
          oi({
            marginTop: "5px",
            marginBottom: "4px",
            marginInlineStart: "-8px",
            marginInlineEnd: "-8px",
          }),
      ),
    },
    Bt = Object.entries(Et),
    ei = (I) => I.i?.classList.contains("horizDivider");
  return (
    (Bt = Bt.filter(
      ([I, D], E, U) => !((E === 0 || E === U.length - 1) && ei(D)),
    )),
    (Bt = Bt.filter(([I, D], E, U) => !(ei(D) && E > 0 && ei(U[E - 1][1])))),
    Object.fromEntries(Bt)
  );
}
  return { vt, ye, Ni, ge, Ns, qi, io, qs, $l, eo, Rs, vl, ke, so, no, Il, Te, ro, Us, Ae, at, Ws, Cs, Ol, Ml, zs, Js, $e, Sl, oo, Qs, ve, Ie, Zs, _s, Oe };
  }
};
