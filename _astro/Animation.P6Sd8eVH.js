import { _ as w } from "./preload-helper.BlTxHScW.js";
import {
  g,
  a as b,
  u as v,
  e as x,
  f as _,
  i as P,
  b as T,
  t as y,
  s as V,
  c as N,
  m as z,
} from "./web.Da7IJZNF.js";
import { c as M } from "./clsx.B-dksMZM.js";
import {
  m as h,
  s as W,
  c,
  a as B,
  d as F,
  o as G,
  e as H,
  S as j,
} from "./solid.DvGzRSA8.js";
import { b as L } from "./contact.73104974.DhhBGPSP.js";
import "./cjs.Wk7D1Z2j.js";
import { b as q } from "./hooks.util.DwERTY88.js";
import { g as J } from "./data.util.CTzr6aWM.js";
import "./toast.Z6oOZu6A.js";
import "./store.DGuKexFv.js";
var K = y("<img alt fetchpriority=high>"),
  Q = y("<div><canvas></canvas><!$><!/>");
let U = 0;
const ie = (D) => {
  const E = h({ autoplay: !0, loop: !0, mode: "canvas" }, D),
    R = U++,
    [r, l] = W(E, [
      "autoplay",
      "loop",
      "src",
      "mode",
      "aspectRatio",
      "autoLoad",
      "placeholder",
    ]),
    [d, S] = c(!1),
    [k, u] = c(!1),
    [I, A] = c(null),
    C = Date.now(),
    m = async () => {
      const t =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches === !0;
      if ((window.localStorage.setItem("animations_loaded", "true"), d()))
        return;
      const e = O();
      if (!e) return;
      S(!0);
      const s = J();
      if (s === null || s > 15) {
        const { DotLottieWorker: a } = await w(async () => {
          const { DotLottieWorker: o } = await import("./index.DUSYMHvA.js");
          return { DotLottieWorker: o };
        }, []);
        new a({
          canvas: e,
          loop: !0,
          autoplay: !t,
          src: window.location.origin + r.src,
          renderConfig: { freezeOnOffscreen: !0 },
          workerId: R.toString(),
        }).addEventListener("load", () => u(!0));
      } else {
        const { DotLottie: a } = await w(async () => {
          const { DotLottie: o } = await import("./index.DUSYMHvA.js");
          return { DotLottie: o };
        }, []);
        new a({
          canvas: e,
          loop: !0,
          autoplay: !t,
          src: window.location.origin + r.src,
          renderConfig: { freezeOnOffscreen: !0 },
        }).addEventListener("load", () => u(!0));
      }
    };
  B(() => {
    r.autoLoad && m();
  });
  const [O, $] = c(null);
  return (
    q(I, (t) => {
      let e;
      if (t) {
        const n =
          (window.localStorage.getItem("animations_loaded") === "true"
            ? 0
            : 2e3) -
          (Date.now() - C);
        d() || (e = setTimeout(() => m(), n));
      }
      G(() => clearTimeout(e));
    }),
    (() => {
      var t = g(Q),
        e = t.firstChild,
        s = e.nextSibling,
        [a, n] = b(s.nextSibling);
      return (
        v((o) => A(o), t),
        x(
          t,
          h(l, {
            get class() {
              return M(L.container, l.class);
            },
            get style() {
              return { "aspect-ratio": r.aspectRatio, ...l.style };
            },
          }),
          !1,
          !0
        ),
        v($, e),
        _(e, "width", "100%"),
        _(e, "height", "100%"),
        P(
          t,
          F(j, {
            get when() {
              return z(() => !k())() && r.placeholder;
            },
            get children() {
              var o = g(K);
              return (
                H(
                  (i) => {
                    var p = r.placeholder,
                      f = L.placeholder;
                    return (
                      p !== i.e && V(o, "src", (i.e = p)),
                      f !== i.t && N(o, (i.t = f)),
                      i
                    );
                  },
                  { e: void 0, t: void 0 }
                ),
                o
              );
            },
          }),
          a,
          n
        ),
        T(),
        t
      );
    })()
  );
};
export { ie as default };
