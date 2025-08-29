import {
  a as T,
  o as R,
  d as l,
  F as U,
  e as m,
  M as w,
  m as $,
  q as V,
  b as W,
  t as Y,
} from "./solid.DvGzRSA8.js";
import {
  g as f,
  t as v,
  a as y,
  i as u,
  k as g,
  c as N,
  e as h,
  b as S,
  u as D,
  m as j,
  s as b,
  f as E,
} from "./web.Da7IJZNF.js";
import {
  m as G,
  c as I,
  s as J,
  d as K,
  r as O,
  g as Q,
  a as B,
  A as P,
  b as A,
  e as X,
  f as Z,
  u as ee,
} from "./toast.Z6oOZu6A.js";
import "./store.DGuKexFv.js";
const te = {
    display: "flex",
    "align-items": "center",
    color: "#363636",
    background: "white",
    "box-shadow":
      "0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)",
    "max-width": "350px",
    "pointer-events": "auto",
    padding: "8px 10px",
    "border-radius": "4px",
    "line-height": "1.3",
    "will-change": "transform",
  },
  ae = {
    display: "flex",
    "align-items": "center",
    flex: "1 1 auto",
    margin: "4px 10px",
    "white-space": "pre-line",
  },
  C = {
    "flex-shrink": 0,
    "min-width": "20px",
    "min-height": "20px",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "text-align": "center",
  },
  F = (e) => ({ calcMode: "spline", keyTimes: "0; 1", keySplines: e });
var ie = v(
  "<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}</style><!$><!/>"
);
const re = (e) => (
  T(() => {
    G(e);
  }),
  T(() => {
    const i = I();
    R(() => {
      i && i.forEach((t) => t && clearTimeout(t));
    });
  }),
  (() => {
    var i = f(ie),
      t = i.firstChild,
      n = t.nextSibling,
      [r, c] = y(n.nextSibling);
    return (
      u(
        i,
        l(U, {
          get each() {
            return J.toasts;
          },
          children: (s) => l(le, { toast: s }),
        }),
        r,
        c
      ),
      m(
        (s) => {
          var d = { ...K, ...e.containerStyle },
            a = e.containerClassName;
          return (s.e = g(i, d, s.e)), a !== s.t && N(i, (s.t = a)), s;
        },
        { e: void 0, t: void 0 }
      ),
      i
    );
  })()
);
var p = v("<div>"),
  se = v("<div><!$><!/><div>");
const ne = (e) => {
  let i;
  return (
    T(() => {
      if (!i) return;
      const t = Q(e.toast, e.position);
      e.toast.visible
        ? i.animate(
            [
              {
                transform: `translate3d(0,${t * -200}%,0) scale(.6)`,
                opacity: 0.5,
              },
              { transform: "translate3d(0,0,0) scale(1)", opacity: 1 },
            ],
            {
              duration: 350,
              fill: "forwards",
              easing: "cubic-bezier(.21,1.02,.73,1)",
            }
          )
        : i.animate(
            [
              { transform: "translate3d(0,0,-1px) scale(1)", opacity: 1 },
              {
                transform: `translate3d(0,${t * -150}%,-1px) scale(.4)`,
                opacity: 0,
              },
            ],
            {
              duration: 400,
              fill: "forwards",
              easing: "cubic-bezier(.06,.71,.55,1)",
            }
          );
    }),
    (() => {
      var t = f(se),
        n = t.firstChild,
        [r, c] = y(n.nextSibling),
        s = r.nextSibling,
        d = i;
      return (
        typeof d == "function" ? D(d, t) : (i = t),
        u(
          t,
          l(V, {
            get children() {
              return [
                l(w, {
                  get when() {
                    return e.toast.icon;
                  },
                  get children() {
                    var a = f(p);
                    return u(a, () => e.toast.icon), m((o) => g(a, C, o)), a;
                  },
                }),
                l(w, {
                  get when() {
                    return e.toast.type === "loading";
                  },
                  get children() {
                    var a = f(p);
                    return (
                      u(
                        a,
                        l(
                          he,
                          $(() => e.toast.iconTheme)
                        )
                      ),
                      m((o) => g(a, C, o)),
                      a
                    );
                  },
                }),
                l(w, {
                  get when() {
                    return e.toast.type === "success";
                  },
                  get children() {
                    var a = f(p);
                    return (
                      u(
                        a,
                        l(
                          me,
                          $(() => e.toast.iconTheme)
                        )
                      ),
                      m((o) => g(a, C, o)),
                      a
                    );
                  },
                }),
                l(w, {
                  get when() {
                    return e.toast.type === "error";
                  },
                  get children() {
                    var a = f(p);
                    return (
                      u(
                        a,
                        l(
                          ve,
                          $(() => e.toast.iconTheme)
                        )
                      ),
                      m((o) => g(a, C, o)),
                      a
                    );
                  },
                }),
              ];
            },
          }),
          r,
          c
        ),
        h(
          s,
          $(() => e.toast.ariaProps),
          !1,
          !0
        ),
        u(s, () => O(e.toast.message, e.toast)),
        m(
          (a) => {
            var o = e.toast.className,
              _ = { ...te, ...e.toast.style },
              k = ae;
            return (
              o !== a.e && N(t, (a.e = o)),
              (a.t = g(t, _, a.t)),
              (a.a = g(s, k, a.a)),
              a
            );
          },
          { e: void 0, t: void 0, a: void 0 }
        ),
        S(),
        t
      );
    })()
  );
};
var oe = v("<div>");
const le = (e) => {
  const i = () => {
      const r = e.toast.position || A.position,
        c = X(e.toast, r);
      return Z(r, c);
    },
    t = W(() => i());
  let n;
  return (
    Y(() => {
      n && ee(n, e.toast);
    }),
    (() => {
      var r = f(oe);
      r.addEventListener("mouseleave", () =>
        B({ type: P.END_PAUSE, time: Date.now() })
      ),
        r.addEventListener("mouseenter", () =>
          B({ type: P.START_PAUSE, time: Date.now() })
        );
      var c = n;
      return (
        typeof c == "function" ? D(c, r) : (n = r),
        u(
          r,
          (() => {
            var s = j(() => e.toast.type === "custom");
            return () =>
              s()
                ? O(e.toast.message, e.toast)
                : l(ne, {
                    get toast() {
                      return e.toast;
                    },
                    get position() {
                      return e.toast.position || A.position;
                    },
                  });
          })()
        ),
        m(
          (s) => {
            var d = t(),
              a = e.toast.visible ? "sldt-active" : "";
            return (s.e = g(r, d, s.e)), a !== s.t && N(r, (s.t = a)), s;
          },
          { e: void 0, t: void 0 }
        ),
        r
      );
    })()
  );
};
var ce = v(
    '<svg><circle cx=16 cy=16 r=0><animate attributeName=opacity values="0; 1; 1"></animate><animate attributeName=r values="0; 17.5; 16"></svg>',
    !1,
    !0,
    !1
  ),
  de = v(
    '<svg><circle cx=16 cy=16 r=12 opacity=0><animate attributeName=opacity values="1; 0"></animate><animate attributeName=r values="12; 26"></svg>',
    !1,
    !0,
    !1
  );
const L = (e) => {
    const i = {
      dur: "0.35s",
      begin: "100ms",
      fill: "freeze",
      calcMode: "spline",
      keyTimes: "0; 0.6; 1",
      keySplines: "0.25 0.71 0.4 0.88; .59 .22 .87 .63",
    };
    return (() => {
      var t = f(ce),
        n = t.firstChild,
        r = n.nextSibling;
      return (
        h(n, i, !0, !1), h(r, i, !0, !1), m(() => b(t, "fill", e.fill)), S(), t
      );
    })();
  },
  q = (e) => {
    const i = {
      dur: "1s",
      begin: e.begin || "320ms",
      fill: "freeze",
      ...F("0.0 0.0 0.2 1"),
    };
    return (() => {
      var t = f(de),
        n = t.firstChild,
        r = n.nextSibling;
      return (
        h(n, i, !0, !1), h(r, i, !0, !1), m(() => b(t, "fill", e.fill)), S(), t
      );
    })();
  };
var ue = v(
  '<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><!$><!/><!$><!/><path fill=none stroke-width=4 stroke-dasharray=22 stroke-dashoffset=22 stroke-linecap=round stroke-miterlimit=10 d=M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7><animate attributeName=stroke-dashoffset values=22;0 dur=0.25s begin=250ms fill=freeze>'
);
const me = (e) => {
  const i = e.primary || "#34C759";
  return (() => {
    var t = f(ue),
      n = t.firstChild,
      [r, c] = y(n.nextSibling),
      s = r.nextSibling,
      [d, a] = y(s.nextSibling),
      o = d.nextSibling,
      _ = o.firstChild;
    return (
      E(t, "overflow", "visible"),
      u(t, l(L, { fill: i }), r, c),
      u(t, l(q, { fill: i, begin: "350ms" }), d, a),
      h(
        _,
        $(() => F("0.0, 0.0, 0.58, 1.0")),
        !0,
        !1
      ),
      m(() => b(o, "stroke", e.secondary || "#FCFCFC")),
      S(),
      t
    );
  })();
};
var fe = v(
  '<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><!$><!/><!$><!/><path fill=none stroke-width=4 stroke-dasharray=9 stroke-dashoffset=9 stroke-linecap=round d=M16,7l0,9><animate attributeName=stroke-dashoffset values=9;0 dur=0.2s begin=250ms fill=freeze></animate></path><circle cx=16 cy=23 r=2.5 opacity=0><animate attributeName=opacity values=0;1 dur=0.25s begin=350ms fill=freeze>'
);
const ve = (e) => {
  const i = e.primary || "#FF3B30";
  return (() => {
    var t = f(fe),
      n = t.firstChild,
      [r, c] = y(n.nextSibling),
      s = r.nextSibling,
      [d, a] = y(s.nextSibling),
      o = d.nextSibling,
      _ = o.firstChild,
      k = o.nextSibling,
      H = k.firstChild;
    return (
      E(t, "overflow", "visible"),
      u(t, l(L, { fill: i }), r, c),
      u(t, l(q, { fill: i }), d, a),
      h(
        _,
        $(() => F("0.0, 0.0, 0.58, 1.0")),
        !0,
        !1
      ),
      h(
        H,
        $(() => F("0.0, 0.0, 0.58, 1.0")),
        !0,
        !1
      ),
      m(
        (x) => {
          var M = e.secondary || "#FFFFFF",
            z = e.secondary || "#FFFFFF";
          return (
            M !== x.e && b(o, "stroke", (x.e = M)),
            z !== x.t && b(k, "fill", (x.t = z)),
            x
          );
        },
        { e: void 0, t: void 0 }
      ),
      S(),
      t
    );
  })();
};
var ge = v(
  '<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z></path><path fill=none stroke-width=4 stroke-linecap=round stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2><animateTransform attributeName=transform type=rotate from="0 16 16"to="360 16 16"dur=0.75s repeatCount=indefinite>'
);
const he = (e) =>
    (() => {
      var i = f(ge),
        t = i.firstChild,
        n = t.nextSibling;
      return (
        E(i, "overflow", "visible"),
        m(
          (r) => {
            var c = e.primary || "#E5E7EB",
              s = e.secondary || "#4b5563";
            return (
              c !== r.e && b(t, "stroke", (r.e = c)),
              s !== r.t && b(n, "stroke", (r.t = s)),
              r
            );
          },
          { e: void 0, t: void 0 }
        ),
        i
      );
    })(),
  $e = { "toast-container": "_toast-container_1e6q0_1" },
  Se = () =>
    l(re, {
      get containerClassName() {
        return $e["toast-container"];
      },
      position: "bottom-center",
      toastOptions: { duration: 4e3 },
    });
export { Se as default };
