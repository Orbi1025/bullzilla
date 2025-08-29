import {
  m as Q,
  g as V,
  t as X,
  u as Y,
  s as r,
  D as Z,
} from "./web.Da7IJZNF.js";
import { c as ee } from "./clsx.B-dksMZM.js";
import { m as E, s as te, c as P, d as re, e as ie } from "./solid.DvGzRSA8.js";
import { c } from "./contact.73104974.DhhBGPSP.js";
import "./cjs.Wk7D1Z2j.js";
import { u as ae, a as oe } from "./reactivity.util.RgUA--aT.js";
var se = X(
  "<svg data-reactive-svg><defs><linearGradient x1=0 y1=0 x2=1 y2=1><stop offset=0% stop-color=white></stop><stop stop-color=white></stop><stop stop-color=black></stop><stop stop-color=black></stop><stop stop-color=white></stop><stop stop-color=white offset=100%></stop></linearGradient><mask maskUnits=objectBoundingBox><rect fill=white x=0 y=0></rect><rect x=0></rect><rect y=0></rect><rect fill=black></rect></mask></defs><rect x=0 y=0>"
);
const ge = (j) => {
  const A = E(
      {
        radius: 16,
        borderWidth: 1,
        opacity: 0.2,
        borderColor: "#fff",
        padding: "none",
        background: "default",
        cutSize: "default",
        borderOpacity: 1,
      },
      j
    ),
    [e, l] = te(A, [
      "component",
      "radius",
      "borderWidth",
      "opacity",
      "borderColor",
      "borderOpacity",
      "padding",
      "background",
      "cutSize",
      "mobile",
    ]),
    [L, T] = P(null),
    [U, q] = P(null),
    o = `${Math.floor(Math.random() * 1e9)}`;
  ae(U), oe(L);
  const i = () => [
      "height",
      "min",
      [
        "width",
        "min",
        [
          "rem",
          "*",
          [[e.radius, "mobile", e.mobile?.radius ?? e.radius], "/", 16],
        ],
      ],
    ],
    b = () => [i(), "-", e.borderWidth],
    d = () => (e.radius * 0.5) / 16,
    f = () => (e.radius * 0.5) / 16,
    s = () => (e.radius * 2) / 16,
    a = () => [
      [["rem", "*", s()], "min", ["height", "-", e.borderWidth + 1]],
      "min",
      ["width", "-", e.borderWidth + 1],
    ],
    F = () => e.borderColor ?? `rgb(255, 255, 255, ${e.borderOpacity})`,
    m = () => e.background.startsWith("#") || e.background.startsWith("rgb");
  return re(
    Z,
    E(l, {
      get component() {
        return e.component ?? "div";
      },
      get class() {
        return ee(
          c.glass,
          c[`padding-${e.padding}`],
          !m() && c[`background-${e.background}`],
          l.class
        );
      },
      ref: T,
      "data-calculate-size": !0,
      get style() {
        return {
          "--border-width": `${e.borderWidth}px`,
          "--desktop-radius": `${e.radius / 16}rem`,
          "--mobile-radius": e.mobile?.radius
            ? `${e.mobile.radius / 16}rem`
            : `${e.radius / 16}rem`,
          "--bg-opacity": e.opacity,
          "--border-opacity": e.borderOpacity,
          "--border-color": e.borderColor,
          "--bg": m() ? e.background : "rgba(255, 255, 255, var(--bg-opacity))",
          ...l.style,
        };
      },
      get children() {
        return [
          (() => {
            var n = V(se),
              k = n.firstChild,
              u = k.firstChild,
              H = u.firstChild,
              p = H.nextSibling,
              x = p.nextSibling,
              S = x.nextSibling,
              K = S.nextSibling,
              w = u.nextSibling,
              $ = w.firstChild,
              v = $.nextSibling,
              g = v.nextSibling,
              h = g.nextSibling,
              y = k.nextSibling;
            return (
              Y(q, n),
              r(u, "id", `glass-gradient-${o}`),
              r(w, "id", `glass-mask-${o}`),
              r(v, "fill", `url(#glass-gradient-${o})`),
              r(g, "fill", `url(#glass-gradient-${o})`),
              r(y, "mask", `url(#glass-mask-${o})`),
              ie(
                (t) => {
                  var C = c.mask,
                    O = JSON.stringify([
                      {
                        key: "offset",
                        value: [
                          "percentage",
                          [50, "-", ((d() / 2 + f()) * 100) / s()],
                        ],
                      },
                    ]),
                    W = JSON.stringify([
                      {
                        key: "offset",
                        value: ["percentage", [50, "-", (d() * 100) / 2 / s()]],
                      },
                    ]),
                    N = JSON.stringify([
                      {
                        key: "offset",
                        value: ["percentage", [50, "+", (d() * 100) / 2 / s()]],
                      },
                    ]),
                    R = JSON.stringify([
                      {
                        key: "offset",
                        value: [
                          "percentage",
                          [50, "+", ((d() / 2 + f()) * 100) / s()],
                        ],
                      },
                    ]),
                    J = JSON.stringify([
                      { key: "width", value: "width" },
                      { key: "height", value: "height" },
                      { key: "rx", value: i() },
                      { key: "ry", value: i() },
                    ]),
                    z = JSON.stringify([
                      { key: "y", value: ["height", "-", a()] },
                      { key: "width", value: a() },
                      { key: "height", value: a() },
                      { key: "rx", value: i() },
                      { key: "ry", value: i() },
                    ]),
                    B = JSON.stringify([
                      { key: "x", value: ["width", "-", a()] },
                      { key: "width", value: a() },
                      { key: "height", value: a() },
                      { key: "rx", value: i() },
                      { key: "ry", value: i() },
                    ]),
                    G = e.borderWidth,
                    I = e.borderWidth,
                    M = JSON.stringify([
                      {
                        key: "width",
                        value: ["width", "-", e.borderWidth * 2],
                      },
                      {
                        key: "height",
                        value: ["height", "-", e.borderWidth * 2],
                      },
                      { key: "rx", value: b() },
                      { key: "ry", value: b() },
                    ]),
                    _ = F(),
                    D = JSON.stringify([
                      { key: "width", value: "width" },
                      { key: "height", value: "height" },
                      { key: "rx", value: i() },
                      { key: "ry", value: i() },
                    ]);
                  return (
                    C !== t.e && r(n, "class", (t.e = C)),
                    O !== t.t && r(p, "data-reactive-values", (t.t = O)),
                    W !== t.a && r(x, "data-reactive-values", (t.a = W)),
                    N !== t.o && r(S, "data-reactive-values", (t.o = N)),
                    R !== t.i && r(K, "data-reactive-values", (t.i = R)),
                    J !== t.n && r($, "data-reactive-values", (t.n = J)),
                    z !== t.s && r(v, "data-reactive-values", (t.s = z)),
                    B !== t.h && r(g, "data-reactive-values", (t.h = B)),
                    G !== t.r && r(h, "x", (t.r = G)),
                    I !== t.d && r(h, "y", (t.d = I)),
                    M !== t.l && r(h, "data-reactive-values", (t.l = M)),
                    _ !== t.u && r(y, "fill", (t.u = _)),
                    D !== t.c && r(y, "data-reactive-values", (t.c = D)),
                    t
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
                }
              ),
              n
            );
          })(),
          Q(() => l.children),
        ];
      },
    })
  );
};
export { ge as G };
