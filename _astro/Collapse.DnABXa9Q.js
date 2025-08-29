import {
  d as y,
  g as i,
  t as m,
  a as g,
  i as l,
  s as S,
  c,
  b as R,
  u as z,
} from "./web.Da7IJZNF.js";
import { c as B } from "./clsx.B-dksMZM.js";
import { s as N, c as h, d, e as p } from "./solid.DvGzRSA8.js";
import { G as f } from "./Glass.C62YBLxa.js";
import { T as A } from "./Text.Bjpw5Huf.js";
import { a as r } from "./index.95d291e9.DIihPDsH.js";
import { c as G } from "./runtime.BjGO-K5b.js";
import "./cjs.Wk7D1Z2j.js";
import { u as I } from "./hooks.util.DwERTY88.js";
import "./contact.73104974.DhhBGPSP.js";
import "./reactivity.util.RgUA--aT.js";
const L = G({
  meta: {
    src: "/_astro/down-chevron.DAEps9uc.svg",
    width: 24,
    height: 24,
    format: "svg",
  },
  attributes: { width: "24", height: "24", viewBox: "0 0 18 18", fill: "none" },
  children: `
  <g transform="translate(3, 6)">
    <path d="M1 1L6 5L11 1" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
`,
});
var M = m("<img alt=Expand loading=lazy decoding=async>", !0, !1, !1),
  T = m("<button><!$><!/><!$><!/>"),
  j = m("<div><div>");
const W = (v) => {
  const [u, $] = N(v, ["title", "titleComponent"]),
    [x, b] = h(null),
    _ = I(x, { onElementResize: !0 }),
    [k, w] = h(!1);
  return d(f, {
    padding: "sm",
    get style() {
      return { "--inner-height": `${_().height}px` };
    },
    background: "transparent",
    get class() {
      return B(r.collapse, { [r.expanded]: k() });
    },
    borderOpacity: 0.5,
    radius: 16,
    mobile: { radius: 8 },
    get children() {
      return [
        (() => {
          var e = i(T),
            n = e.firstChild,
            [t, s] = g(n.nextSibling),
            o = t.nextSibling,
            [E, C] = g(o.nextSibling);
          return (
            (e.$$click = () => w((a) => !a)),
            l(
              e,
              d(A, {
                get component() {
                  return u.titleComponent;
                },
                weight: 600,
                get children() {
                  return u.title;
                },
              }),
              t,
              s
            ),
            l(
              e,
              d(f, {
                background: "transparent",
                get class() {
                  return r["dropdown-icon"];
                },
                radius: 12,
                cutSize: "xs",
                get children() {
                  var a = i(M);
                  return p(() => S(a, "src", L.src)), a;
                },
              }),
              E,
              C
            ),
            p(() => c(e, r["top-button"])),
            R(),
            e
          );
        })(),
        (() => {
          var e = i(j),
            n = e.firstChild;
          return (
            z(b, n),
            l(n, () => $.children),
            p(
              (t) => {
                var s = r["collapse-body"],
                  o = r["collapse-inner"];
                return (
                  s !== t.e && c(e, (t.e = s)), o !== t.t && c(n, (t.t = o)), t
                );
              },
              { e: void 0, t: void 0 }
            ),
            e
          );
        })(),
      ];
    },
  });
};
y(["click"]);
export { W as default };
