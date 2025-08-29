const h = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: !1,
  getContextId() {
    return Z(this.context.count);
  },
  getNextContextId() {
    return Z(this.context.count++);
  },
};
function Z(e) {
  const t = String(e),
    r = t.length - 1;
  return h.context.id + (r ? String.fromCharCode(96 + r) : "") + t;
}
function j(e) {
  h.context = e;
}
function ge() {
  return { ...h.context, id: h.getNextContextId(), count: 0 };
}
const pe = !1,
  be = (e, t) => e === t,
  M = Symbol("solid-proxy"),
  ee = typeof Proxy == "function",
  te = Symbol("solid-track"),
  U = { equals: be };
let ne = ce;
const E = 1,
  R = 2,
  re = { owned: null, cleanups: null, context: null, owner: null };
var d = null;
let X = null,
  we = null,
  g = null,
  b = null,
  A = null,
  W = 0;
function N(e, t) {
  const r = g,
    n = d,
    s = e.length === 0,
    u = t === void 0 ? n : t,
    l = s
      ? re
      : {
          owned: null,
          cleanups: null,
          context: u ? u.context : null,
          owner: u,
        },
    i = s ? e : () => e(() => k(() => L(l)));
  (d = l), (g = null);
  try {
    return I(i, !0);
  } finally {
    (g = r), (d = n);
  }
}
function T(e, t) {
  t = t ? Object.assign({}, U, t) : U;
  const r = {
      value: e,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0,
    },
    n = (s) => (typeof s == "function" && (s = s(r.value)), oe(r, s));
  return [ie.bind(r), n];
}
function ye(e, t, r) {
  const n = z(e, t, !1, E);
  $(n);
}
function xe(e, t, r) {
  ne = Oe;
  const n = z(e, t, !1, E),
    s = V && ue(V);
  s && (n.suspense = s),
    (!r || !r.render) && (n.user = !0),
    A ? A.push(n) : $(n);
}
function y(e, t, r) {
  r = r ? Object.assign({}, U, r) : U;
  const n = z(e, t, !0, 0);
  return (
    (n.observers = null),
    (n.observerSlots = null),
    (n.comparator = r.equals || void 0),
    $(n),
    ie.bind(n)
  );
}
function Le(e) {
  return I(e, !1);
}
function k(e) {
  if (g === null) return e();
  const t = g;
  g = null;
  try {
    return e();
  } finally {
    g = t;
  }
}
function $e(e, t, r) {
  const n = Array.isArray(e);
  let s;
  return (u) => {
    let l;
    if (n) {
      l = Array(e.length);
      for (let o = 0; o < e.length; o++) l[o] = e[o]();
    } else l = e();
    const i = k(() => t(l, s, u));
    return (s = l), i;
  };
}
function De(e) {
  xe(() => k(e));
}
function Q(e) {
  return (
    d === null ||
      (d.cleanups === null ? (d.cleanups = [e]) : d.cleanups.push(e)),
    e
  );
}
function Me() {
  return g;
}
function ve() {
  return d;
}
function Ue(e, t) {
  const r = d,
    n = g;
  (d = e), (g = null);
  try {
    return I(t, !0);
  } catch (s) {
    J(s);
  } finally {
    (d = r), (g = n);
  }
}
function me(e) {
  A.push.apply(A, e), (e.length = 0);
}
function se(e, t) {
  const r = Symbol("context");
  return { id: r, Provider: Pe(r), defaultValue: e };
}
function ue(e) {
  let t;
  return d && d.context && (t = d.context[e.id]) !== void 0
    ? t
    : e.defaultValue;
}
function le(e) {
  const t = y(e),
    r = y(() => q(t()));
  return (
    (r.toArray = () => {
      const n = r();
      return Array.isArray(n) ? n : n != null ? [n] : [];
    }),
    r
  );
}
let V;
function ke() {
  return V || (V = se());
}
function ie() {
  if (this.sources && this.state)
    if (this.state === E) $(this);
    else {
      const e = b;
      (b = null), I(() => K(this), !1), (b = e);
    }
  if (g) {
    const e = this.observers ? this.observers.length : 0;
    g.sources
      ? (g.sources.push(this), g.sourceSlots.push(e))
      : ((g.sources = [this]), (g.sourceSlots = [e])),
      this.observers
        ? (this.observers.push(g),
          this.observerSlots.push(g.sources.length - 1))
        : ((this.observers = [g]),
          (this.observerSlots = [g.sources.length - 1]));
  }
  return this.value;
}
function oe(e, t, r) {
  let n = e.value;
  return (
    (!e.comparator || !e.comparator(n, t)) &&
      ((e.value = t),
      e.observers &&
        e.observers.length &&
        I(() => {
          for (let s = 0; s < e.observers.length; s += 1) {
            const u = e.observers[s],
              l = X && X.running;
            l && X.disposed.has(u),
              (l ? !u.tState : !u.state) &&
                (u.pure ? b.push(u) : A.push(u), u.observers && fe(u)),
              l || (u.state = E);
          }
          if (b.length > 1e6) throw ((b = []), new Error());
        }, !1)),
    t
  );
}
function $(e) {
  if (!e.fn) return;
  L(e);
  const t = W;
  Se(e, e.value, t);
}
function Se(e, t, r) {
  let n;
  const s = d,
    u = g;
  g = d = e;
  try {
    n = e.fn(t);
  } catch (l) {
    return (
      e.pure &&
        ((e.state = E), e.owned && e.owned.forEach(L), (e.owned = null)),
      (e.updatedAt = r + 1),
      J(l)
    );
  } finally {
    (g = u), (d = s);
  }
  (!e.updatedAt || e.updatedAt <= r) &&
    (e.updatedAt != null && "observers" in e ? oe(e, n) : (e.value = n),
    (e.updatedAt = r));
}
function z(e, t, r, n = E, s) {
  const u = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: d,
    context: d ? d.context : null,
    pure: r,
  };
  return (
    d === null || (d !== re && (d.owned ? d.owned.push(u) : (d.owned = [u]))), u
  );
}
function _(e) {
  if (e.state === 0) return;
  if (e.state === R) return K(e);
  if (e.suspense && k(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < W); )
    e.state && t.push(e);
  for (let r = t.length - 1; r >= 0; r--)
    if (((e = t[r]), e.state === E)) $(e);
    else if (e.state === R) {
      const n = b;
      (b = null), I(() => K(e, t[0]), !1), (b = n);
    }
}
function I(e, t) {
  if (b) return e();
  let r = !1;
  t || (b = []), A ? (r = !0) : (A = []), W++;
  try {
    const n = e();
    return Ae(r), n;
  } catch (n) {
    r || (A = null), (b = null), J(n);
  }
}
function Ae(e) {
  if ((b && (ce(b), (b = null)), e)) return;
  const t = A;
  (A = null), t.length && I(() => ne(t), !1);
}
function ce(e) {
  for (let t = 0; t < e.length; t++) _(e[t]);
}
function Oe(e) {
  let t,
    r = 0;
  for (t = 0; t < e.length; t++) {
    const n = e[t];
    n.user ? (e[r++] = n) : _(n);
  }
  if (h.context) {
    if (h.count) {
      h.effects || (h.effects = []), h.effects.push(...e.slice(0, r));
      return;
    }
    j();
  }
  for (
    h.effects &&
      (h.done || !h.count) &&
      ((e = [...h.effects, ...e]), (r += h.effects.length), delete h.effects),
      t = 0;
    t < r;
    t++
  )
    _(e[t]);
}
function K(e, t) {
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const n = e.sources[r];
    if (n.sources) {
      const s = n.state;
      s === E
        ? n !== t && (!n.updatedAt || n.updatedAt < W) && _(n)
        : s === R && K(n, t);
    }
  }
}
function fe(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const r = e.observers[t];
    r.state ||
      ((r.state = R), r.pure ? b.push(r) : A.push(r), r.observers && fe(r));
  }
}
function L(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const r = e.sources.pop(),
        n = e.sourceSlots.pop(),
        s = r.observers;
      if (s && s.length) {
        const u = s.pop(),
          l = r.observerSlots.pop();
        n < s.length &&
          ((u.sourceSlots[l] = n), (s[n] = u), (r.observerSlots[n] = l));
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) L(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) L(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ce(e) {
  return e instanceof Error
    ? e
    : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function J(e, t = d) {
  throw Ce(e);
}
function q(e) {
  if (typeof e == "function" && !e.length) return q(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = q(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return e;
}
function Pe(e, t) {
  return function (n) {
    let s;
    return (
      ye(
        () =>
          (s = k(
            () => (
              (d.context = { ...d.context, [e]: n.value }), le(() => n.children)
            )
          )),
        void 0
      ),
      s
    );
  };
}
const B = Symbol("fallback");
function H(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function Ee(e, t, r = {}) {
  let n = [],
    s = [],
    u = [],
    l = 0,
    i = t.length > 1 ? [] : null;
  return (
    Q(() => H(u)),
    () => {
      let o = e() || [],
        a = o.length,
        f,
        c;
      return (
        o[te],
        k(() => {
          let p, m, x, P, O, v, S, C, F;
          if (a === 0)
            l !== 0 &&
              (H(u), (u = []), (n = []), (s = []), (l = 0), i && (i = [])),
              r.fallback &&
                ((n = [B]),
                (s[0] = N((he) => ((u[0] = he), r.fallback()))),
                (l = 1));
          else if (l === 0) {
            for (s = new Array(a), c = 0; c < a; c++)
              (n[c] = o[c]), (s[c] = N(w));
            l = a;
          } else {
            for (
              x = new Array(a),
                P = new Array(a),
                i && (O = new Array(a)),
                v = 0,
                S = Math.min(l, a);
              v < S && n[v] === o[v];
              v++
            );
            for (
              S = l - 1, C = a - 1;
              S >= v && C >= v && n[S] === o[C];
              S--, C--
            )
              (x[C] = s[S]), (P[C] = u[S]), i && (O[C] = i[S]);
            for (p = new Map(), m = new Array(C + 1), c = C; c >= v; c--)
              (F = o[c]),
                (f = p.get(F)),
                (m[c] = f === void 0 ? -1 : f),
                p.set(F, c);
            for (f = v; f <= S; f++)
              (F = n[f]),
                (c = p.get(F)),
                c !== void 0 && c !== -1
                  ? ((x[c] = s[f]),
                    (P[c] = u[f]),
                    i && (O[c] = i[f]),
                    (c = m[c]),
                    p.set(F, c))
                  : u[f]();
            for (c = v; c < a; c++)
              c in x
                ? ((s[c] = x[c]), (u[c] = P[c]), i && ((i[c] = O[c]), i[c](c)))
                : (s[c] = N(w));
            (s = s.slice(0, (l = a))), (n = o.slice(0));
          }
          return s;
        })
      );
      function w(p) {
        if (((u[c] = p), i)) {
          const [m, x] = T(c);
          return (i[c] = x), t(o[c], m);
        }
        return t(o[c]);
      }
    }
  );
}
function je(e, t, r = {}) {
  let n = [],
    s = [],
    u = [],
    l = [],
    i = 0,
    o;
  return (
    Q(() => H(u)),
    () => {
      const a = e() || [],
        f = a.length;
      return (
        a[te],
        k(() => {
          if (f === 0)
            return (
              i !== 0 &&
                (H(u), (u = []), (n = []), (s = []), (i = 0), (l = [])),
              r.fallback &&
                ((n = [B]),
                (s[0] = N((w) => ((u[0] = w), r.fallback()))),
                (i = 1)),
              s
            );
          for (
            n[0] === B && (u[0](), (u = []), (n = []), (s = []), (i = 0)),
              o = 0;
            o < f;
            o++
          )
            o < n.length && n[o] !== a[o]
              ? l[o](() => a[o])
              : o >= n.length && (s[o] = N(c));
          for (; o < n.length; o++) u[o]();
          return (
            (i = l.length = u.length = f), (n = a.slice(0)), (s = s.slice(0, i))
          );
        })
      );
      function c(w) {
        u[o] = w;
        const [p, m] = T(a[o]);
        return (l[o] = m), t(p, o);
      }
    }
  );
}
let ae = !1;
function Re() {
  ae = !0;
}
function Ie(e, t) {
  if (ae && h.context) {
    const r = h.context;
    j(ge());
    const n = k(() => e(t || {}));
    return j(r), n;
  }
  return k(() => e(t || {}));
}
function D() {
  return !0;
}
const G = {
  get(e, t, r) {
    return t === M ? r : e.get(t);
  },
  has(e, t) {
    return t === M ? !0 : e.has(t);
  },
  set: D,
  deleteProperty: D,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: D,
      deleteProperty: D,
    };
  },
  ownKeys(e) {
    return e.keys();
  },
};
function Y(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function Fe() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const r = this[e]();
    if (r !== void 0) return r;
  }
}
function Te(...e) {
  let t = !1;
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    (t = t || (!!i && M in i)),
      (e[l] = typeof i == "function" ? ((t = !0), y(i)) : i);
  }
  if (ee && t)
    return new Proxy(
      {
        get(l) {
          for (let i = e.length - 1; i >= 0; i--) {
            const o = Y(e[i])[l];
            if (o !== void 0) return o;
          }
        },
        has(l) {
          for (let i = e.length - 1; i >= 0; i--) if (l in Y(e[i])) return !0;
          return !1;
        },
        keys() {
          const l = [];
          for (let i = 0; i < e.length; i++) l.push(...Object.keys(Y(e[i])));
          return [...new Set(l)];
        },
      },
      G
    );
  const r = {},
    n = Object.create(null);
  for (let l = e.length - 1; l >= 0; l--) {
    const i = e[l];
    if (!i) continue;
    const o = Object.getOwnPropertyNames(i);
    for (let a = o.length - 1; a >= 0; a--) {
      const f = o[a];
      if (f === "__proto__" || f === "constructor") continue;
      const c = Object.getOwnPropertyDescriptor(i, f);
      if (!n[f])
        n[f] = c.get
          ? {
              enumerable: !0,
              configurable: !0,
              get: Fe.bind((r[f] = [c.get.bind(i)])),
            }
          : c.value !== void 0
          ? c
          : void 0;
      else {
        const w = r[f];
        w &&
          (c.get
            ? w.push(c.get.bind(i))
            : c.value !== void 0 && w.push(() => c.value));
      }
    }
  }
  const s = {},
    u = Object.keys(n);
  for (let l = u.length - 1; l >= 0; l--) {
    const i = u[l],
      o = n[i];
    o && o.get ? Object.defineProperty(s, i, o) : (s[i] = o ? o.value : void 0);
  }
  return s;
}
function Ve(e, ...t) {
  if (ee && M in e) {
    const s = new Set(t.length > 1 ? t.flat() : t[0]),
      u = t.map(
        (l) =>
          new Proxy(
            {
              get(i) {
                return l.includes(i) ? e[i] : void 0;
              },
              has(i) {
                return l.includes(i) && i in e;
              },
              keys() {
                return l.filter((i) => i in e);
              },
            },
            G
          )
      );
    return (
      u.push(
        new Proxy(
          {
            get(l) {
              return s.has(l) ? void 0 : e[l];
            },
            has(l) {
              return s.has(l) ? !1 : l in e;
            },
            keys() {
              return Object.keys(e).filter((l) => !s.has(l));
            },
          },
          G
        )
      ),
      u
    );
  }
  const r = {},
    n = t.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(e)) {
    const u = Object.getOwnPropertyDescriptor(e, s),
      l = !u.get && !u.set && u.enumerable && u.writable && u.configurable;
    let i = !1,
      o = 0;
    for (const a of t)
      a.includes(s) &&
        ((i = !0), l ? (n[o][s] = u.value) : Object.defineProperty(n[o], s, u)),
        ++o;
    i || (l ? (r[s] = u.value) : Object.defineProperty(r, s, u));
  }
  return [...n, r];
}
const de = (e) => `Stale read from <${e}>.`;
function _e(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return y(Ee(() => e.each, e.children, t || void 0));
}
function Ke(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return y(je(() => e.each, e.children, t || void 0));
}
function He(e) {
  const t = e.keyed,
    r = y(() => e.when, void 0, void 0),
    n = t ? r : y(r, void 0, { equals: (s, u) => !s == !u });
  return y(
    () => {
      const s = n();
      if (s) {
        const u = e.children;
        return typeof u == "function" && u.length > 0
          ? k(() =>
              u(
                t
                  ? s
                  : () => {
                      if (!k(n)) throw de("Show");
                      return r();
                    }
              )
            )
          : u;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
function We(e) {
  const t = le(() => e.children),
    r = y(() => {
      const n = t(),
        s = Array.isArray(n) ? n : [n];
      let u = () => {};
      for (let l = 0; l < s.length; l++) {
        const i = l,
          o = s[l],
          a = u,
          f = y(() => (a() ? void 0 : o.when), void 0, void 0),
          c = o.keyed ? f : y(f, void 0, { equals: (w, p) => !w == !p });
        u = () => a() || (c() ? [i, f, o] : void 0);
      }
      return u;
    });
  return y(
    () => {
      const n = r()();
      if (!n) return e.fallback;
      const [s, u, l] = n,
        i = l.children;
      return typeof i == "function" && i.length > 0
        ? k(() =>
            i(
              l.keyed
                ? u()
                : () => {
                    if (k(r)()?.[0] !== s) throw de("Match");
                    return u();
                  }
            )
          )
        : i;
    },
    void 0,
    void 0
  );
}
function Xe(e) {
  return e;
}
const Ne = se();
function Ye(e) {
  let t = 0,
    r,
    n,
    s,
    u,
    l;
  const [i, o] = T(!1),
    a = ke(),
    f = {
      increment: () => {
        ++t === 1 && o(!0);
      },
      decrement: () => {
        --t === 0 && o(!1);
      },
      inFallback: i,
      effects: [],
      resolved: !1,
    },
    c = ve();
  if (h.context && h.load) {
    const m = h.getContextId();
    let x = h.load(m);
    if (
      (x && (typeof x != "object" || x.s !== 1 ? (s = x) : h.gather(m)),
      s && s !== "$$f")
    ) {
      const [P, O] = T(void 0, { equals: !1 });
      (u = P),
        s.then(
          () => {
            if (h.done) return O();
            h.gather(m), j(n), O(), j();
          },
          (v) => {
            (l = v), O();
          }
        );
    }
  }
  const w = ue(Ne);
  w && (r = w.register(f.inFallback));
  let p;
  return (
    Q(() => p && p()),
    Ie(a.Provider, {
      value: f,
      get children() {
        return y(() => {
          if (l) throw l;
          if (((n = h.context), u)) return u(), (u = void 0);
          n && s === "$$f" && j();
          const m = y(() => e.children);
          return y((x) => {
            const P = f.inFallback(),
              { showContent: O = !0, showFallback: v = !0 } = r ? r() : {};
            if ((!P || (s && s !== "$$f")) && O)
              return (
                (f.resolved = !0),
                p && p(),
                (p = n = s = void 0),
                me(f.effects),
                m()
              );
            if (v)
              return p
                ? x
                : N(
                    (S) => (
                      (p = S),
                      n && (j({ id: n.id + "F", count: 0 }), (n = void 0)),
                      e.fallback
                    ),
                    c
                  );
          });
        });
      },
    })
  );
}
export {
  M as $,
  _e as F,
  Ke as I,
  Xe as M,
  He as S,
  xe as a,
  y as b,
  T as c,
  Ie as d,
  ye as e,
  Ye as f,
  h as g,
  N as h,
  Re as i,
  ve as j,
  $e as k,
  Le as l,
  Te as m,
  te as n,
  Q as o,
  Me as p,
  We as q,
  Ue as r,
  Ve as s,
  De as t,
  k as u,
};
