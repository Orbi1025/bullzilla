import { g as a, a as r, s, w as d } from "./user.store.CUEOGz3f.js";
import "./cjs.Wk7D1Z2j.js";
import { d as l } from "./disconnect.fQnpZ0pp.js";
import "./hooks.util.DwERTY88.js";
import "./solid.DvGzRSA8.js";
import "./preload-helper.BlTxHScW.js";
import "./runtime.BjGO-K5b.js";
import "./clsx.B-dksMZM.js";
const m = (n, t) => {
  if (n.length < t) return n;
  if (!n) return "";
  const e = t / 2;
  return n.substring(0, e) + "..." + n.substring(n.length - t / 2);
};
let c = !1;
const o = Array.from(document.querySelectorAll("[data-connect-wallet-button]")),
  f = o.map((n) => n.innerHTML);
o.forEach((n) => {
  n.addEventListener("click", async () => {
    if (n.getAttribute("data-locked")) return;
    const { config: t } = await a(),
      e = r(t);
    e.isConnected && e.address ? l(t) : s();
  });
});
document.addEventListener("wagmi-loaded", async () => {
  const { config: n } = await a();
  d(n, {
    onChange: (t) => {
      (c = t.isConnected),
        c
          ? o.forEach((e) => {
              e.innerHTML = `Disconnect<br />(${m(t.address ?? "", 12)})`;
            })
          : o.forEach((e, i) => {
              e.innerHTML = f[i];
            });
    },
  });
});
