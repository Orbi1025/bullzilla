import { a as d } from "./solid.DvGzRSA8.js";
import "./cjs.Wk7D1Z2j.js";
import { o as m, c as g } from "./hooks.util.DwERTY88.js";
const s = (t) => {
    const e = t.value;
    if (typeof e == "number") return e;
    if (e === "width") return t.width;
    if (e === "height") return t.height;
    if (e === "rem") return t.rem;
    if (Array.isArray(e)) {
      const a = s({ ...t, value: e[0] }),
        r = s({ ...t, value: e[2] });
      if (e[1] === "+") return a + r;
      if (e[1] === "-") return a - r;
      if (e[1] === "*") return a * r;
      if (e[1] === "/") return a / r;
      if (e[1] === "max") return Math.max(a, r);
      if (e[1] === "min") return Math.min(a, r);
      if (e[1] === "mobile") return window.innerWidth <= 850 ? r : a;
    }
    throw "Invalid path";
  },
  A = (t) => {
    const e = t.value;
    return Array.isArray(e) && e.length === 2 && e[0] === "percentage"
      ? `${s({ ...t, value: e[1] })}%`
      : s({ ...t, value: e });
  },
  z = (t, e, a, r) =>
    t
      .map((n) => {
        const c = (
          Array.isArray(n[1]) && !["*", "+", "-", "/"].includes(n[1][2])
            ? n[1]
            : [n[1]]
        ).map((i) => s({ value: i, width: e, height: a, rem: r }));
        return `${n[0]}${c.join(" ")}`;
      })
      .join(" "),
  l = (t, e) => {
    const r = Array.from(t.querySelectorAll("[data-reactive-path]")).map(
        (i) => ({
          el: i,
          path: JSON.parse(i.getAttribute("data-reactive-path")),
        })
      ),
      o = Array.from(t.querySelectorAll("[data-reactive-values]")).map((i) => ({
        el: i,
        values: JSON.parse(i.getAttribute("data-reactive-values")),
      })),
      c = () => {
        const { width: i, height: v } = t.getBoundingClientRect(),
          y = Number.parseFloat(
            getComputedStyle(document.body).fontSize.split("px")[0]
          );
        t.setAttribute("viewBox", `0 0 ${i} ${v}`),
          r.forEach(({ path: p, el: f }) => {
            f.setAttribute("path", z(p, i, v, y));
          }),
          o.forEach(({ values: p, el: f }) => {
            p.map(({ key: b, value: w }) => {
              let u = A({ height: v, value: w, width: i, rem: y });
              typeof u == "number" && u < 0 && (u = 0),
                f.setAttribute(b, u.toString());
            });
          });
      };
    c(),
      e?.applyListeners &&
        (new ResizeObserver(c).observe(t),
        window.addEventListener("resize", () => l(t)));
  },
  E = (t) => {
    d(() => {
      const e = typeof t == "function" ? t() : t;
      e &&
        (l(e),
        m(e, () => {
          t && l(e);
        }),
        g(window, "resize", () => {
          t && l(e);
        }));
    });
  },
  h = (t, e) => {
    const a = () => {
      const { width: r, height: n } = t.getBoundingClientRect();
      t.style.setProperty("--el-width", `${r}px`),
        t.style.setProperty("--el-height", `${n}px`);
      const o = Math.asin(n / r);
      t.style.setProperty("--el-angle", `${(o * 180) / Math.PI}deg`);
    };
    a(), e?.applyListeners && new ResizeObserver(a).observe(t);
  },
  O = (t) => {
    d(() => {
      const e = typeof t == "function" ? t() : t;
      e &&
        (h(e),
        m(e, () => {
          t && h(e);
        }),
        g(window, "resize", () => {
          t && h(e);
        }));
    });
  };
export { O as a, h as b, l as c, E as u };
