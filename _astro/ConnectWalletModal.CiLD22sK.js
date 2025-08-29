import {
  d as v,
  g as i,
  t as d,
  a as C,
  e as $,
  j as k,
  i as g,
  m as l,
  c as u,
  b as y,
  P as x,
  s as M,
} from "./web.Da7IJZNF.js";
import { s as E, d as a, m as w, e as c, F as P } from "./solid.DvGzRSA8.js";
import { G as _ } from "./Glass.C62YBLxa.js";
import { c as W } from "./clsx.B-dksMZM.js";
import { T as N } from "./Text.Bjpw5Huf.js";
import { u as S, h as m, g as F, c as G } from "./user.store.CUEOGz3f.js";
import "./cjs.Wk7D1Z2j.js";
import { c as I } from "./connect.BMP7IoEd.js";
import "./contact.73104974.DhhBGPSP.js";
import "./reactivity.util.RgUA--aT.js";
import "./hooks.util.DwERTY88.js";
import "./preload-helper.BlTxHScW.js";
import "./runtime.BjGO-K5b.js";
const T = "_title_pogb3_57",
  r = {
    "modal-container": "_modal-container_pogb3_1",
    "modal-backdrop": "_modal-backdrop_pogb3_20",
    "modal-body": "_modal-body_pogb3_29",
    title: T,
  };
var j = d("<div><div></div><!$><!/>");
const z = (s) => {
  const [o, t] = E(s, ["open", "onClose", "title"]);
  return a(x, {
    get mount() {
      return document.getElementById("modals");
    },
    get children() {
      var e = i(j),
        n = e.firstChild,
        f = n.nextSibling,
        [b, h] = C(f.nextSibling);
      return (
        $(
          e,
          w(t, {
            get class() {
              return W(r["modal-container"], { open: o.open }, t.class);
            },
          }),
          !1,
          !0
        ),
        k(n, "click", o.onClose, !0),
        g(
          e,
          a(_, {
            padding: "md",
            get class() {
              return r["modal-body"];
            },
            background: "#fca311",
            get children() {
              return [
                l(
                  () =>
                    l(() => !!o.title)() &&
                    a(N, {
                      variant: "body-lg",
                      get class() {
                        return r.title;
                      },
                      get children() {
                        return o.title;
                      },
                    })
                ),
                l(() => t.children),
              ];
            },
          }),
          b,
          h
        ),
        c(() => u(n, r["modal-backdrop"])),
        y(),
        e
      );
    },
  });
};
v(["click"]);
const A = "_options_1uicr_1",
  B = "_option_1uicr_1",
  p = { options: A, option: B };
var D = d("<div>"),
  H = d("<img alt loading=lazy decoding=async>", !0, !1, !1);
const et = () => {
  const s = S();
  return a(z, {
    get open() {
      return s().connectWalletModalOpen;
    },
    onClose: m,
    title: "Connect Wallet",
    get children() {
      var o = i(D);
      return (
        g(
          o,
          a(P, {
            get each() {
              return G.filter((t) => !t.hide?.());
            },
            children: (t) =>
              a(_, {
                component: "button",
                get class() {
                  return p.option;
                },
                onClick: async () => {
                  const { config: e, walletConnectModal: n } = await F();
                  t.key === "walletconnect"
                    ? n.open()
                    : t.onClick
                    ? await t.onClick()
                    : I(e, { connector: e.connectors[t.connectorIndex] }),
                    m();
                },
                background: "",
                get children() {
                  return [
                    (() => {
                      var e = i(H);
                      return c(() => M(e, "src", t.icon.src)), e;
                    })(),
                    l(() => t.label),
                  ];
                },
              }),
          })
        ),
        c(() => u(o, p.options)),
        o
      );
    },
  });
};
export { et as default };
