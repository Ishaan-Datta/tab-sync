// @ts-nocheck
globalThis.createOneTabUiControls = function createOneTabUiControls(deps) {
  const { h, G, W, Xt, O, ws, co, xe, z, ti, Kr, x, Gs, J, Yr, Bs, Ve, Qt, Zi, ze, oi, St, getSettings, getModal, getTheme, getTooltip } = deps;
function gr({ fontSize: i, label: t, isSelected: e, St: s }) {
  return h({
    className: ["multiple-choice-button", ...O(e, "on")].join(" "),
    style: { fontSize: i },
    textContent: t,
    onclick: (n) => s(n),
  });
}
class nl extends ws {
  constructor({ eo: t, iw: e, Ec: s, ...n }) {
    (super({
      oi: !0,
      Ih: { marginInlineStart: "5px" },
      Qn: 250,
      zs: 500,
      ce: h({
        style: { fontSize: "12px", marginInline: "6px 3px", marginBlock: 0 },
        textContent: t.find((r) => r.name === e)?.label ?? "",
      }),
      Th: { fontSize: "12px" },
      ...n,
      kh: async () =>
        co({
          Ec: (r) => {
            ((this.Gd = r),
              this.Jn(!1),
              (this.ce.i.textContent =
                t.find((o) => o.name === r)?.label ?? ""),
              s?.(r));
          },
          eo: t,
        }),
    }),
      (this.Gd = e),
      (this.eo = t));
  }
}
class kr {
  constructor({ heading: t, Dd: e, icon: s, note: n, style: r }) {
    this.o = h({
      style: {
        marginInlineStart: "16px",
        marginBottom: "60px",
        maxWidth: "600px",
        ...r,
      },
      children: {
        heading: h({
          style: { fontSize: "16px", fontWeight: 400, display: "flex" },
          children: {
            ...(s && {
              icon: new Xt(
                {
                  dimension: "16px",
                  style: {
                    left: "1px",
                    top: "4px",
                    flex: "0 0 auto",
                    marginInlineEnd: "16px",
                    filter: "grayscale(1)",
                  },
                },
                (o) => `images/${s.prefix}${o ? "" : "-dark"}.png`,
              ),
            }),
            text: h({ textContent: t }),
          },
        }),
        ...(e && { Dd: h({ style: { fontSize: "12px" }, textContent: e }) }),
        sw: h({ style: { paddingTop: "16px" } }),
        body: h({}),
        ...(n && {
          note: h({
            style: {
              fontSize: "12.25px",
              color: "var(--text-color-weak)",
              paddingTop: "18px",
              paddingBottom: "12px",
            },
            textContent: n,
          }),
        }),
      },
    });
  }
  Pd(t) {
    (this.o.body.i.replaceWith(t), (this.o.body.i = t));
  }
}
class rl extends kr {
  constructor({ To: t, heading: e, options: s, note: n, icon: r, style: o }) {
    (super({ heading: e, icon: r, note: n, style: o }),
      (this.To = t),
      (this.options = s),
      (this.mn = this.options.map((a) => new Tr({ aa: this, mi: a }))),
      this.Pd(
        h({
          style: {
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            gap: "12px",
            marginInlineStart: "-1px",
          },
          children: this.mn,
        }).i,
      ));
  }
  async Lt() {
    let t = await getSettings().ks(this.To);
    await this.wn(t);
  }
  async wn(t, e) {
    (this.mn.forEach((s) => s.wn(t)), e && (await getSettings().Ve(this.To, t)));
  }
}
class Tr {
  wn(t) {
    ((this.value = t), this.o.u.wi.Re(!1));
  }
  constructor({ aa: t, mi: e }) {
    this.o = h({
      onclick: (s) => {
        (this.wn(e.settingValue), this.o.u.wi.Re(!1), t.wn(e.settingValue, !0));
      },
      onpointerover: (s) => {
        this.o.u.wi.Re(!0);
      },
      onpointerleave: (s) => {
        this.o.u.wi.Re(!1);
      },
      style: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        position: "relative",
      },
      children: {
        nw: h({
          style: {
            fontSize: "14px",
            flex: "0 0 auto",
            marginInlineEnd: "10px",
            position: "relative",
          },
          children: {
            wi: new Xt(
              {
                width: "17px",
                height: "17px",
                style: {
                  position: "relative",
                  top: "-2px",
                  display: "inline-block",
                  verticalAlign: "middle",
                },
              },
              (s, n) =>
                `images/option-button-${this.value === e.settingValue ? "on" : n ? "hover" : "off"}${s ? "" : "-dark"}.png`,
            ),
          },
        }),
        ow: h({
          style: { style: { fontSize: "14px" } },
          children: {
            label: h({ style: { fontSize: "14px" }, textContent: e.title }),
            ...(e.xi && {
              xi: h({
                style: {
                  color: "var(--text-color-weak)",
                  fontSize: "12.25px",
                  paddingTop: "4px",
                },
                textContent: e.xi,
              }),
            }),
            ...(e.Fc && { Fc: h({ style: { marginTop: "8px" }, p: e.Fc }) }),
          },
        }),
      },
    });
  }
}
class lt {
  constructor({
    la: t,
    ca: e,
    borderRadius: s = "10px",
    Z: n = document,
    init: r,
    fs: o,
  }) {
    try {
      lt.rn?.();
    } catch (c) {
      console.log(c);
    }
    ((this.ua = []),
      (this.o = h({
        className: "popup",
        style: {
          fontSize: 0,
          position: "absolute",
          zIndex: getModal().Is ? getModal().zIndex + 1 : 1e3,
          borderRadius: s,
        },
        p:
          t ??
          xe({ style: { marginInline: "4px 14px", marginBlock: "10px 10px" } }),
      })),
      (this.m ??= []).push(z(this.o.i, "click", (c) => c.stopPropagation())));
    let a = e.getBoundingClientRect();
    ((this.o.i.style.left = "-1000px"),
      (this.o.i.style.top = 0),
      document.body.appendChild(this.o.i));
    let l = this.o.i.offsetWidth,
      u = this.o.i.offsetHeight;
    ((this.o.i.style.left = ""),
      (this.o.i.style.top = ""),
      window.innerWidth - a.x > l
        ? (this.o.i.style.left = `${a.x + a.width / 2}px`)
        : (this.o.i.style.right = `${window.innerWidth - a.x - a.width / 2}px`),
      window.innerHeight - a.y > u
        ? (this.o.i.style.top = `${window.scrollY + a.y + a.height / 2 - 11}px`)
        : (this.o.i.style.top = `${window.scrollY + a.y + a.height / 2 - 11 + (window.innerHeight - a.y - u)}px`),
      (this.m ??= []).push(z(n, "click", (c) => this.destroy())),
      (this.m ??= []).push(z(n, "contextmenu", (c) => this.destroy(), !0)),
      (lt.rn = () => this.destroy()),
      o &&
        this.m.push(
          z(document, "keydown", (c) => {
            ti(c) && this.destroy();
          }),
        ),
      r?.(this));
  }
  destroy() {
    this.j ||
      ((this.m ?? []).forEach((t) => t.remove()),
      (this.m = null),
      this.o.i.parentNode && this.o.i.remove(),
      this.ua.forEach((t) => t.destroy()),
      (this.ua = null),
      (this.j = !0));
  }
  rw(t) {
    this.ua.push(t);
  }
  static bi({ icon: t, label: e, name: s, action: n, D: r, ni: o }) {
    return h({
      className: ["menuItem", ...O(o, "red")].join(" "),
      style: {
        display: "flex",
        alignItems: "flex-start",
        cursor: "pointer",
        padding: "2px 10px",
        lineHeight: "1.6em",
        fontSize: "12px",
        gap: "12px",
      },
      children: {
        ...(t && {
          Ld: h({
            style: {
              width: "16px",
              height: "16px",
              position: "relative",
              top: "1px",
              textAlign: "center",
            },
            p: lt.kl(t),
          }),
        }),
        ...(!t && {
          Ld: h({
            style: { width: "16px", height: "16px", position: "relative" },
          }),
        }),
        label: h({
          style: {
            userSelect: "none",
            color: o ? "var(--red-control)" : "var(--blue-control)",
            flex: "0 1 auto",
            fontSize: "12px",
            position: "relative",
            overflowWrap: "break-word",
            hyphens: "auto",
            marginInlineEnd: "2px",
            minWidth: 0,
          },
          children: {
            label: G("span", { textContent: e }),
            ...(r && {
              yl: W(
                {
                  width: "12px",
                  height: "12px",
                  style: {
                    display: "inline-block",
                    verticalAlign: "middle",
                    opacity: 0.8,
                    lineHeight: "1.6em",
                    marginTop: "-1px",
                    marginInlineStart: "8px",
                    cursor: "default",
                  },
                  init: (a) => {
                    St(a.i, { Yt: r });
                  },
                },
                (a) => `images/help-circle${a ? "" : "-dark"}.png`,
              ),
            }),
          },
        }),
      },
      init: (a) => {
        a.i.onclick = async (l) => {
          (l.stopPropagation(), await n({ e: l, o: a }));
        };
      },
    });
  }
  static kl({
    I: t,
    dimension: e = "16px",
    left: s,
    top: n,
    ee: r,
    Ed: o,
    $: a,
  }) {
    return new Xt(
      {
        dimension: e,
        style: {
          flex: "0 0 auto",
          position: "relative",
          ...(s && { [J() ? "left" : "right"]: s }),
          ...(n && { top: n }),
          ...(r && { transform: "scaleX(-1)" }),
          ...(o && { transform: "rotate(180deg)" }),
          ...(a && a),
        },
      },
      (l) => `images/${t}${l ? "" : "-dark"}.png`,
    );
  }
  aw(t) {
    let e = parseInt(this.o.i.style.top),
      s = this.o.i.getBoundingClientRect().top,
      n = t.clientY;
    this.o.i.style.top = `${e + n - s - 30}px`;
  }
}
class Ar {
  constructor({ aa: t, label: e, value: s }) {
    ((this.o = h({
      style: {
        display: "flex",
        flexDirection: "row",
        fontSize: "12px",
        cursor: "pointer",
        flex: "0 1 auto",
        whiteSpace: "break-spaces",
        alignItems: "center",
      },
      children: {
        wi: new Xt(
          { width: "15px", height: "15px", style: { marginInlineEnd: "8px" } },
          (n, r) =>
            `images/option-button-${t.value === s ? "on" : r ? "hover" : "off"}${n ? "" : "-dark"}.png`,
        ),
        label: h({ textContent: e }),
      },
      init: (n) => {
        ((n.i.onclick = (r) => (r.stopPropagation(), t.Fd(s), !1)),
          (n.i.onpointerover = (r) => {
            n.u.wi.Re(!0);
          }),
          (n.i.onpointerleave = (r) => {
            n.u.wi.Re(!1);
          }));
      },
    })),
      (this.i = this.o.i));
  }
  update() {
    this.o.u.wi.Re(!1);
  }
}
class ol {
  constructor({ onChange: t, lw: e, options: s }) {
    ((this.onChange = t),
      (this.value = e),
      (this.mn = s.map(
        ({ label: n, value: r }) => new Ar({ aa: this, label: n, value: r }),
      )),
      (this.o = h({
        style: { display: "flex", flexDirection: "column", gap: "8px" },
        children: this.mn,
      })));
  }
  Fd(t) {
    ((this.value = t), this.mn.forEach((e) => e.update()), this.onChange(t));
  }
}
class $r {
  constructor({ h: t, Et: e, he: s, B: n }) {
    ((this.h = t),
      (this.Et = e),
      (this.he = s),
      (this.B = n),
      (this.o = h({})),
      (async () => this.st())());
  }
  async st() {
    let t = await this.h.il({ count: 30, B: this.B, sl: !1 }),
      e = await Gs({
        Et: this.Et,
        groups: t,
        h: this.h,
        he: this.he,
        oe: void 0,
      });
    this.o.i.replaceChildren(...e.map((s) => s.i));
  }
  Vs(t) {
    this.B = t;
  }
}
class fe {
  constructor({
    maxHeight: t,
    oi: e,
    onShown: s,
    onHidden: n,
    zs: r,
    Ce: o = { x: 0, y: 0 },
    Z: a = document,
    Vi: l,
  }) {
    ((this.oi = e),
      (this.onShown = s),
      (this.onHidden = n),
      (this.zs = r),
      (this.Ce = o),
      (this.Z = a),
      (this.Vi = l),
      (this.o = h({
        onclick: (u) => u.stopPropagation(),
        style: { position: "absolute", display: "none", top: 0, zIndex: 2 },
        children: {
          body: h({
            className: "dropdown-selection",
            style: {
              marginBottom: "20px",
              ...(t && {
                maxHeight: t,
                overflowY: "auto",
                overflowX: "hidden",
              }),
            },
            children: { ha: h({}) },
          }),
        },
      })));
  }
  le(t) {
    if (t !== this.isVisible) {
      if (t) {
        try {
          lt.rn?.();
        } catch (e) {
          console.log(e);
        }
        (this.onShown?.(this), (lt.rn = () => this.le(!1)));
      } else this.onHidden?.(this);
      ((this.isVisible = t),
        (this.o.i.style.display = t ? "block" : "none"),
        t
          ? ((this.o.i.style.maxWidth = `${this.zs}px`),
            (this.da = () => this.le(!1)),
            this.Z.addEventListener("click", this.da),
            (this.fa = z(document, "keydown", (e) => {
              ti(e) && (this.da(), document.activeElement?.blur());
            })),
            (this.m ??= []).push(this.fa),
            getTooltip()?.destroy(),
            this.o.u.ha.i.replaceChildren(
              xe({
                style: { marginInline: "4px 14px", marginBlock: "0px 6px" },
              }),
            ),
            (async () => this.jc(await this.Vi((e, s) => this.jc(e, s))))())
          : (this.Io &&
              (window.scrollTo(this.Io.x, this.Io.y), (this.Io = void 0)),
            this.Z.removeEventListener("click", this.da),
            this.fa && this.fa.remove(),
            this.Bt?.destroy?.(),
            (this.Bt = null)));
    }
  }
  jc(t, e) {
    this.o.u.ha.i.replaceChildren();
    let s = Kr(this.o.i);
    ((this.o.i.style[this.oi ? "right" : "left"] = 0),
      (this.o.i.style.top = 0));
    let n = e ? e.clientY - 10 - this.o.i.getBoundingClientRect().top : 0;
    e && (this.o.i.style.top = n);
    let r =
        s.getBoundingClientRect().right -
        (this.o.i.getBoundingClientRect().left + this.Ce.x) -
        25,
      o =
        s.getBoundingClientRect().left -
        this.o.i.getBoundingClientRect().left +
        30,
      a =
        s.getBoundingClientRect().bottom -
        (this.o.i.getBoundingClientRect().top + this.Ce.y) -
        20;
    ((this.Bt = t), (this.Bt.i.style.boxSizing = "border-box"));
    let l = this.Bt.i.style.position,
      u = this.Bt.i.style.left;
    ((this.Bt.i.style.position = "absolute"),
      (this.Bt.i.style.left = "-1000px"),
      document.body.appendChild(this.Bt.i));
    let c = this.Bt.i.offsetWidth + 1,
      d = this.Bt.i.offsetHeight + 1;
    ((this.Bt.i.style.position = l),
      (this.Bt.i.style.left = u),
      (this.Bt.i.style.width = c + "px"));
    let m = 0;
    c > r && (m = r - c);
    let y = 0;
    (d > a && (y = a - d),
      (y = 0),
      this.o.u.ha.i.replaceChildren(this.Bt.i),
      (this.Io = { x: window.scrollX, y: window.scrollY }),
      (this.o.i.style[this.oi ? "right" : "left"] =
        `${Math.max(o, this.Ce.x + m)}px`),
      (this.o.i.style.top = `${this.Ce.y + n + y}px`));
  }
  destroy() {
    (this.le(!1),
      (this.Vi = null),
      (this.Z = null),
      (this.onShown = null),
      (this.onHidden = null));
  }
}
class vr {
  constructor({ style: t = {} }) {
    let e = document.createElement("iframe");
    ((e.style.border = "1px solid var(--tree-glyph-color)"),
      (e.style.borderRadius = "6px"),
      Object.assign(e.style, t),
      document.body.appendChild(e),
      (this.i = e));
  }
  jd() {
    let [t, e] = {
        auto: ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
        light: ["all", "not(all)"],
        dark: ["not(all)", "all"],
      }[getTheme()],
      s = `
      <html>
        <head>
          <style>
            * {
              font-style: normal !important;   
              font-family: monospace !important;
              font-size: 13px !important;
              color: var(--text-color) !important;
              font-weight: normal !important;
              background-color: transparent !important;
              margin:0 !important; 
              padding:0 !important;
              word-wrap: break-word !important;;
            }
            a {
              color: var(--link-color) !important;
              background-color: var(--link-color-background) !important;
              text-decoration: underline !important;
            }
            body {
              padding: 5px !important;
              margin: 5px !important; 
            }
            @media ${t} {
              :root {
                --text-color: #444;
                --link-color: #234da7;
                --link-color-background: #f1f4f9;
              }
            }
            @media ${e} {
              :root {
                --text-color: #E8EAED;
                --link-color: #8AB4F8;
                --link-color-background: #242e40;
              }
            }
          </style>
        </head>
        <body></body>
      </html>`,
      n = this.i.contentWindow.document;
    (n.open(), n.write(s), n.close(), (n.designMode = "on"));
  }
}
function Ir({ style: i }) {
  return h({
    init: (t) =>
      (t.u.Bc.Bd.i.onclick = (e) => {
        ((t.u.Bc.i.style.display = "none"), (t.u.Cd.i.style.display = "block"));
      }),
    style: { ...(i && i), fontSize: "12px" },
    children: {
      Bc: h({
        children: {
          info: G("span", { textContent: x("pasteRichOrPlainTextBelow") }),
          Bd: G("span", {
            textContent: x("seePasteInstructions"),
            style: {
              marginInlineStart: "1ex",
              color: "var(--link-color)",
              cursor: "pointer",
            },
          }),
        },
      }),
      Cd: h({
        style: { display: "none" },
        children: [
          h({ textContent: x("canPasteWebContentForExample") }),
          (() => {
            let t = (o, a) =>
                G("a", {
                  textContent: o,
                  href: a,
                  style: { backgroundColor: "var(--link-color-background)" },
                }),
              e = (o) => (o === "" ? void 0 : G("span", { textContent: o })),
              [s, n, r] = x("exampleRichTextParagraph")
                .split("PLACEHOLDER")
                .map(e);
            return h({
              className: "linkImportExample",
              children: [
                s,
                t(x("exampleLink"), "https://www.example.com/one"),
                n,
                t(x("secondExampleLink"), "https://www.example.com/two"),
                r,
              ].filter((o) => o),
            });
          })(),
          h({
            style: { paddingTop: "8px" },
            textContent: x("plainTextLineFormat"),
          }),
          h({
            className: "linkImportExample",
            children: [
              h({
                textContent: `https://www.example.com/one | ${x("exampleLinkTitle")}`,
              }),
              h({
                textContent: `https://www.example.com/two | ${x("secondExampleLinkTitle")}`,
              }),
            ],
          }),
          h({
            style: { paddingTop: "8px" },
            textContent: x("alternatePlainTextFormat"),
          }),
          h({
            style: { "unicode-bidi": "plaintext" },
            className: "linkImportExample",
            children: [
              h({ textContent: x("exampleLinkTitleOptional") }),
              h({ textContent: "https://www.example.com/one" }),
              h({ textContent: x("notesAboutTheLinkOptional") }),
              h({ style: { paddingTop: "14px" } }),
              h({ textContent: x("secondExampleLinkTitleOptional") }),
              h({ textContent: "https://www.example.com/two" }),
              h({ textContent: x("notesAboutTheSecondLinkOptional") }),
            ],
          }),
          h({
            style: { paddingTop: "10px", paddingBottom: "14px" },
            textContent: x("canDragTextNote"),
          }),
        ],
      }),
    },
  });
}
class Or {
  constructor({ Cc: t, cw: e, xn: s, pa: n, ma: r, wa: o }) {
    ((this.Cc = t),
      (this.pa = n),
      (this.ma = r),
      (this.wa = o),
      (this.highlighted = !1),
      (this.xn = s),
      (this.o = h({
        style: {
          minWidth: "350px",
          borderRadius: "10px",
          backgroundColor: "var(--search-input-color)",
          border: "1px solid transparent",
          position: "relative",
        },
        children: {
          be: h({
            style: { height: "36px", display: "flex", alignItems: "center" },
            children: {
              uw: W(
                {
                  width: "13px",
                  height: "13px",
                  style: {
                    marginInlineStart: "13px",
                    opacity: 0.5,
                    ...(!J() && { transform: "scaleX(-1)" }),
                  },
                },
                (l) => `images/search${l ? "" : "-dark"}.png`,
              ),
              Ze: G("input", {
                style: {
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: "400",
                  verticalAlign: "middle",
                  marginInlineStart: "10px",
                  marginInlineEnd: "10px",
                  width: "100%",
                  height: "1.8em",
                  color: "var(--text-color)",
                  outline: "none",
                  border: "none",
                  backgroundColor: "transparent",
                  padding: 0,
                  spellcheck: "false",
                },
                type: "text",
                init: (l) => l.i.setAttribute("spellcheck", "false"),
                onfocus: (l) => {
                  ((this.active = !0), this.vo(!0));
                },
                onblur: (l) => {
                  !this.$i() && !e?.() && this.clear(!0);
                },
                oninput: (l) => {
                  this.vo(!0);
                },
                onkeydown: (l) => {
                  l.stopPropagation();
                },
              }),
              Hc: h({
                style: {
                  paddingInline: "6px 14px",
                  paddingBlock: "6px 6px",
                  cursor: "pointer",
                  opacity: 0,
                  pointerEvents: "none",
                },
                onclick: (l) => this.clear(!0),
                p: W(
                  { width: "10px", height: "10px" },
                  (l) => `images/cross${l ? "" : "-dark"}.png`,
                ),
              }),
            },
          }),
          vs: h({
            style: { display: "none" },
            children: {
              hw: oi({
                marginTop: "0px",
                marginBottom: "0px",
                marginInlineStart: "8px",
                marginInlineEnd: "8px",
              }),
              body: h({
                style: {
                  paddingInline: "32px 16px",
                  paddingBlock: "16px 16px",
                },
                textContent: "Search results here....",
              }),
            },
          }),
        },
      })));
    let a = (l) => {
      l.isComposing ||
        (l.key === "Escape" || l.key === "Esc"
          ? (l.preventDefault(), l.stopPropagation(), this.clear(!0))
          : l.key === "Enter" && this.pa?.());
    };
    ((this.m ??= []).push(z(this.o.be.Ze.i, "keydown", a, !0)),
      (this.m ??= []).push(
        z(this.o.be.Ze.i, "input", (l) => {
          this.xn?.({ value: this.$i(), qc: this.o.vs.body.i, Ct: this });
        }),
      ),
      (this.m ??= []).push(
        z(document, "keydown", (l) => {
          !(this.Cc && getModal().Is) &&
            !l.isComposing &&
            l.key === "/" &&
            !Yr(l.target) &&
            (l.preventDefault(),
            l.stopPropagation(),
            setTimeout(() => this.o.be.Ze.i.focus(), 1));
        }),
      ));
  }
  Hd({ query: t }) {
    ((this.active = !0),
      this.vo(!0),
      (this.o.be.Ze.i.value = t),
      this.xn?.({ value: this.$i(), qc: this.o.vs.body.i, Ct: this }),
      setTimeout(() => this.o.be.Ze.i.focus(), 1));
  }
  xa(t) {
    this.o.vs.i.style.display = t ? "block" : "none";
  }
  $i() {
    return this.o.be.Ze.i.value.trim();
  }
  clear(t) {
    this.isActive &&
      ((this.isActive = !1),
      (this.o.be.Ze.i.value = ""),
      this.o.be.Ze.i.blur(),
      (this.o.vs.i.style.display = "none"),
      this.vo(!1),
      this.xa(!1),
      this.wa?.(t));
  }
  vo(t) {
    let e = !1;
    (t && !this.isActive && ((this.isActive = !0), (e = !0)),
      t !== this.highlighted &&
        ((this.highlighted = t),
        (this.o.be.Hc.i.style.pointerEvents = t ? "auto" : "none"),
        Bs({
          i: this.o.be.Hc.i,
          duration: 150,
          Uc: t,
          zc: [{ name: "opacity", before: 0, after: 1 }],
        }),
        Bs({
          i: this.o.i,
          duration: 150,
          Uc: t,
          zc: [
            {
              name: "backgroundColor",
              before: "var(--search-input-color)",
              after: "var(--bg-color)",
            },
            {
              name: "borderColor",
              before: "transparent",
              after: "var(--stronger-border-color)",
            },
          ],
        })),
      e && this.ma?.());
  }
  Wt(t) {
    this.o.i.style.display = t ? "block" : "none";
  }
  destroy() {
    ((this.m ?? []).forEach((t) => t.remove()),
      (this.m = null),
      (this.pa = null),
      (this.ma = null),
      (this.wa = null),
      (this.xn = null));
  }
}
class Mr {
  constructor({ h: t, Et: e, B: s, he: n }) {
    ((this.j = !1),
      (this.h = t),
      (this.Et = e),
      (this.B = s),
      (this.he = n),
      (this.o = h({
        children: {
          Ct: new Or({
            xn: async ({ value: r, qc: o, Ct: a }) => {
              this.j ||
                ((this.ti = r
                  .trim()
                  .split(" ")
                  .filter((l) => l.length)),
                await this.Bl());
            },
          }),
        },
      })),
      (this.Ct = this.o.u.Ct));
  }
  focus() {
    setTimeout(() => this.o.Ct.o.be.Ze.i.focus(), 1);
  }
  async Bl() {
    if (!(this.j || !this.Ct))
      if (this.ti?.length) {
        let t = this.h.Ku({ ti: this.ti, maxResults: 100, B: this.B });
        if (t.length) {
          let e = await Gs({
            Et: this.Et,
            groups: t,
            h: this.h,
            he: this.he,
            oe: this.ti,
          });
          if (this.j || !this.Ct) return;
          this.Ct.o.vs.body.i.replaceChildren(...e.map((s) => s.i));
        } else
          this.Ct.o.vs.body.i.replaceChildren(
            h({ style: {}, textContent: x("noMatchesFound") }).i,
          );
        this.Ct.xa(!0);
      } else this.Ct.xa(!1);
  }
  Vs(t) {
    this.B = t;
  }
  destroy() {
    ((this.j = !0),
      this.Ct?.destroy?.(),
      (this.Ct = null),
      (this.he = null),
      (this.h = null),
      (this.Et = null));
  }
}
class Sr {
  constructor({
    label: t,
    isSelected: e = !1,
    qd: s,
    oe: n,
    margin: r,
    padding: o,
  }) {
    this.o = h({
      className: ["selectable-item", ...O(e, "on")].join(" "),
      style: {
        display: "inline-block",
        textIndent: 0,
        ...(r && { margin: r }),
      },
      children: {
        Md: h({
          style: { height: 0 },
          p: h({
            style: {
              overflow: "hidden",
              visibility: "hidden",
              fontWeight: "var(--selectable-item-bold-font-weight)",
              ...(o && { padding: o }),
            },
            textContent: t,
          }),
        }),
        button: h({
          style: { ...(o && { padding: o }) },
          onclick: (a) => s(a),
          children: Ve({ label: t, oe: n }),
        }),
      },
    });
  }
}
class al {
  constructor(t) {
    ((this.id = t), (this.nt = []), (this.bn = []), (this.yn = void 0));
  }
  Wc() {
    return this.id;
  }
  Ao({ newState: t, selection: e, Nc: s }) {
    (t && !s && (this.yn = e),
      t ? Qt(this.nt, e) : Zi(this.nt, e),
      this.bn.forEach((n) =>
        n({ count: this.nt.length, nt: this.nt, A: this }),
      ));
  }
  reset() {
    (this.nt.forEach((t) => t.Rc?.()),
      ze(this.nt),
      (this.yn = void 0),
      this.bn.forEach((t) =>
        t({ count: this.nt.length, nt: this.nt, A: this }),
      ));
  }
  lc(t) {
    this.bn.push(t);
  }
  od(t) {
    Zi(this.bn, t);
  }
  count() {
    return this.nt.length;
  }
  destroy() {
    ((this.nt = null), (this.bn = null), (this.yn = void 0));
  }
}
  return { gr, nl, kr, rl, Tr, lt, Ar, ol, $r, fe, vr, Ir, Or, Mr, Sr, al };
};
