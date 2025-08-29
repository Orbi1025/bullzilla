import { D as n } from "./web.Da7IJZNF.js";
import { c as s } from "./clsx.B-dksMZM.js";
import { s as i, d as a, m as p } from "./solid.DvGzRSA8.js";
import { a as r } from "./contact.73104974.DhhBGPSP.js";
const d = (o) => {
  const [t, e] = i(o, [
    "variant",
    "weight",
    "font",
    "size",
    "italic",
    "center",
    "uppercase",
    "props",
    "component",
    "underline",
  ]);
  return a(
    n,
    p(
      e,
      {
        get component() {
          return t.component ?? "p";
        },
        get class() {
          return s(r.text, r[`variant-${t.variant ?? "body"}`], e.class);
        },
      },
      () => t.props,
      () => ({
        style: {
          "font-weight": t.weight,
          "font-family": t.font ? `var(--theme-font-${t.font})` : void 0,
          "font-size": t.size,
          "text-transform": t.uppercase ? "uppercase" : void 0,
          "text-align": t.center ? "center" : void 0,
          "font-style": t.italic ? "italic" : void 0,
          "text-decoration": t.underline ? "underline" : void 0,
          ...e.style,
        },
      }),
      {
        get children() {
          return e.children;
        },
      }
    )
  );
};
export { d as T };
