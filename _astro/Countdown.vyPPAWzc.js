import { g as f, t as h, i as p, c as u, a as N } from "./web.Da7IJZNF.js";
import { c as P } from "./clsx.B-dksMZM.js";
import {
  s as T,
  c as E,
  a as b,
  b as y,
  d as o,
  m as z,
  o as B,
  S as M,
  I as G,
  e as g,
} from "./solid.DvGzRSA8.js";
import { G as H } from "./Glass.C62YBLxa.js";
import { T as S } from "./Text.Bjpw5Huf.js";
import { c as a } from "./index.95d291e9.DIihPDsH.js";
import "./cjs.Wk7D1Z2j.js";
import { z as O } from "./number.util.CcVK4Hx5.js";
import "./contact.73104974.DhhBGPSP.js";
import "./reactivity.util.RgUA--aT.js";
import "./hooks.util.DwERTY88.js";
var R = h("<div>"),
  j = h("<div>:"),
  q = h("<div><!$><!/><p>");
const Z = (C) => {
  const [i, v] = T(C, ["endDate", "onEnd", "title"]),
    [l, I] = E(0);
  b(() => {
    const t = () => {
      I(Math.max(i.endDate.getTime() - Date.now(), 0));
    };
    t();
    const r = setInterval(t, 1e3);
    B(() => clearInterval(r));
  });
  const k = y(() => {
      const t = [
          ["Days", 864e5],
          ["Hours", 36e5],
          ["Minutes", 6e4],
          ["Seconds", 1e3],
        ],
        r = [];
      return (
        t.forEach(([s, e], d) => {
          let c = l();
          d > 0 &&
            r.slice(0, d).forEach(([D, m], n) => {
              c -= m * t[n][1];
            }),
            r.push([s, Math.floor(c / e)]);
        }),
        r.map(([s, e]) => [s, O(e, 2)])
      );
    }),
    [w, x] = E(l() <= 0);
  return (
    b(() => {
      l() <= 0 && !w() ? (x(!0), i.onEnd?.()) : w() && l() > 0 && x(!1);
    }),
    o(
      H,
      z({ padding: "sm" }, v, {
        get class() {
          return P(a["countdown-container"], v.class);
        },
        borderOpacity: 0.5,
        get children() {
          return [
            o(M, {
              get when() {
                return i.title;
              },
              get children() {
                return o(S, {
                  get class() {
                    return a.title;
                  },
                  get children() {
                    return i.title;
                  },
                });
              },
            }),
            (() => {
              var t = f(R);
              return (
                p(
                  t,
                  o(G, {
                    get each() {
                      return k();
                    },
                    children: (r, s) => [
                      o(M, {
                        when: s > 0,
                        get children() {
                          var e = f(j);
                          return g(() => u(e, a["countdown-colon"])), e;
                        },
                      }),
                      (() => {
                        var e = f(q),
                          d = e.firstChild,
                          [c, D] = N(d.nextSibling),
                          m = c.nextSibling;
                        return (
                          p(
                            e,
                            o(S, {
                              variant: "section-subheading",
                              get class() {
                                return a["countdown-value"];
                              },
                              get children() {
                                return r()[1];
                              },
                            }),
                            c,
                            D
                          ),
                          p(m, () => r()[0]),
                          g(
                            (n) => {
                              var _ = a["countdown-item"],
                                $ = a["countdown-label"];
                              return (
                                _ !== n.e && u(e, (n.e = _)),
                                $ !== n.t && u(m, (n.t = $)),
                                n
                              );
                            },
                            { e: void 0, t: void 0 }
                          ),
                          e
                        );
                      })(),
                    ],
                  })
                ),
                g(() => u(t, a["time-container"])),
                t
              );
            })(),
          ];
        },
      })
    )
  );
};
export { Z as default };
