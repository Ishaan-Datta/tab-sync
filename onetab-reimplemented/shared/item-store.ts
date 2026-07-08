(globalThis as any).createOneTabItemStore = function createOneTabItemStore(deps: any) {
  deps ||= {};
  // @ts-ignore TypeScript cannot model this oracle-derived dependency scope.
  with (deps) {
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

    return { S, bl, ge, rt, Ir, vr, Or, Mr, Lr, gl, Gr };
  }
};
