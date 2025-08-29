import {
  g as O,
  a as x,
  u as Z,
  e as j,
  i as P,
  b as G,
  t as q,
  m as g,
  c as z,
  f as i,
} from "./web.Da7IJZNF.js";
import { c as A } from "./clsx.B-dksMZM.js";
import {
  c as H,
  m as F,
  d as f,
  F as J,
  b as I,
  e as Q,
} from "./solid.DvGzRSA8.js";
import { T as L } from "./Text.Bjpw5Huf.js";
import { b as r } from "./index.95d291e9.DIihPDsH.js";
import "./twitter._GYkNQvT.js";
import "./cjs.Wk7D1Z2j.js";
import { u as K } from "./hooks.util.DwERTY88.js";
import { f as U } from "./number.util.CcVK4Hx5.js";
import "./contact.73104974.DhhBGPSP.js";
import "./runtime.BjGO-K5b.js";
const V = 159999999910;
var W = q("<div><!$><!/><!$><!/>"),
  p = q("<div><!$><!/><div></div><!$><!/>");
const ee = [
    {
      label: "Burn Reserve",
      fraction: 0.05,
      linePos: "end",
      pos: [5, -8],
      line: [42, 20],
    },
    {
      label: "Community Vault",
      fraction: 0.2,
      linePos: "start",
      pos: [64, -12],
      line: [55, 15],
      mobilePos: [65, 9],
      mobileLine: [55, 18],
    },
    {
      label: "Staking",
      fraction: 0.2,
      linePos: "start",
      pos: [77, 10],
      line: [65, 65],
      mobilePos: [72, 55],
    },
    {
      label: "Team",
      fraction: 0.05,
      linePos: "end",
      pos: [-5, 9],
      line: [35, 28],
      mobilePos: [-14, 10],
    },
    {
      label: "Presale",
      fraction: 0.5,
      linePos: "end",
      pos: [-23, 78],
      line: [32, 90],
      mobilePos: [-14, 92],
    },
  ],
  be = (t) => {
    const [$, S] = H(null),
      a = K($, { onElementResize: !0 });
    return (() => {
      var l = O(W),
        d = l.firstChild,
        [n, o] = x(d.nextSibling),
        m = n.nextSibling,
        [c, v] = x(m.nextSibling);
      return (
        Z(S, l),
        j(
          l,
          F(t, {
            get class() {
              return A(r.labels, t.class);
            },
          }),
          !1,
          !0
        ),
        P(
          l,
          f(J, {
            each: ee,
            children: (s) =>
              f(
                te,
                F(
                  {
                    get containerBounds() {
                      return a();
                    },
                  },
                  s
                )
              ),
          }),
          n,
          o
        ),
        P(
          l,
          f(L, {
            weight: 600,
            get class() {
              return r["total-text"];
            },
            get children() {
              return ["Total Supply - ", g(() => U(V)), " $BZIL"];
            },
          }),
          c,
          v
        ),
        G(),
        l
      );
    })();
  },
  te = (t) => {
    const [$, S] = H(null),
      a = K($, { onElementResize: !0 }),
      l = (o, m) => {
        const c = (t.containerBounds.width * o) / 100,
          v = (t.containerBounds.height * m) / 100,
          s =
            (t.linePos === "start" ? a().left : a().left + a().width) -
            t.containerBounds.left,
          w = a().top - t.containerBounds.top,
          b = c - s,
          u = v - w,
          e = Math.sqrt(b ** 2 + u ** 2),
          h = Math.atan2(u, b);
        return {
          width: e,
          rotation: h,
          dotX: b + (t.linePos === "end" ? a().width : 0),
          dotY: u,
        };
      },
      d = I(() => l(t.line[0], t.line[1])),
      n = I(() =>
        t.mobileLine ? l(t.mobileLine[0], t.mobileLine[1]) : void 0
      );
    return (() => {
      var o = O(p),
        m = o.firstChild,
        [c, v] = x(m.nextSibling),
        s = c.nextSibling,
        w = s.nextSibling,
        [b, u] = x(w.nextSibling);
      return (
        P(
          o,
          f(L, {
            weight: 600,
            uppercase: !0,
            get class() {
              return r["label-text"];
            },
            component: "h3",
            get children() {
              return [g(() => t.label), " - ", g(() => t.fraction * 100), "%"];
            },
          }),
          c,
          v
        ),
        Z(S, s),
        P(
          o,
          f(L, {
            get class() {
              return r["token-label"];
            },
            get children() {
              return [g(() => U(Math.floor(V * t.fraction))), " BZIL"];
            },
          }),
          b,
          u
        ),
        Q(
          (e) => {
            var h = r["label-container"],
              B = `${t.pos[0]}%`,
              k = `${t.pos[1]}%`,
              y = `${d().width}px`,
              E = `${d().rotation}rad`,
              R = `${d().dotX}px`,
              C = `${d().dotY}px`,
              T = t.mobilePos ? `${t.mobilePos[0]}%` : void 0,
              Y = t.mobilePos ? `${t.mobilePos[1]}%` : void 0,
              D = n() ? `${n().width}px` : void 0,
              M = n() ? `${n().rotation}rad` : void 0,
              N = n() ? `${n().dotX}px` : void 0,
              X = n() ? `${n().dotY}px` : void 0,
              _ = A(r.line, r[`line-${t.linePos}`]);
            return (
              h !== e.e && z(o, (e.e = h)),
              B !== e.t && i(o, "--desktop-left", (e.t = B)),
              k !== e.a && i(o, "--desktop-top", (e.a = k)),
              y !== e.o && i(o, "--desktop-line-width", (e.o = y)),
              E !== e.i && i(o, "--desktop-line-rot", (e.i = E)),
              R !== e.n && i(o, "--desktop-dot-x", (e.n = R)),
              C !== e.s && i(o, "--desktop-dot-y", (e.s = C)),
              T !== e.h && i(o, "--mobile-left", (e.h = T)),
              Y !== e.r && i(o, "--mobile-top", (e.r = Y)),
              D !== e.d && i(o, "--mobile-line-width", (e.d = D)),
              M !== e.l && i(o, "--mobile-line-rot", (e.l = M)),
              N !== e.u && i(o, "--mobile-dot-x", (e.u = N)),
              X !== e.c && i(o, "--mobile-dot-y", (e.c = X)),
              _ !== e.w && z(s, (e.w = _)),
              e
            );
          },
          {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
            d: void 0,
            l: void 0,
            u: void 0,
            c: void 0,
            w: void 0,
          }
        ),
        o
      );
    })();
  };
export { be as default };
