import { a as u, c as w, o as E, k as l } from "./solid.DvGzRSA8.js";
const g = (e, s, r) => {
    u(() => {
      const t = typeof e == "function" ? e() : e;
      if (!t) return;
      const o = new IntersectionObserver((d) => {
        s(d[0].isIntersecting);
      }, r?.observerOptions);
      o.observe(t), E(() => o.disconnect());
    });
  },
  z = (e, s) => {
    const [r, t] = w(s);
    return (
      u(() => {
        t(() => e.get()), e.subscribe(() => t(() => e.get()));
      }),
      r
    );
  },
  p = [],
  h = (e, s, r, t) => {
    const o = (c, n) => {
        e !== window || c !== "resize"
          ? e?.addEventListener(c, n, t)
          : p.push(n);
      },
      d = (c, n) => {
        if (e !== window || c !== "resize") e?.removeEventListener(c, n, t);
        else {
          const i = p.indexOf(n);
          if (i < 0) return;
          p.splice(i, 1);
        }
      };
    u(() => {
      if (e === void 0) return;
      const c = Array.isArray(s) ? s : [s];
      c.forEach((n) => {
        o(n, r), e?.addEventListener(n, r, t);
      }),
        E(() => {
          c.forEach((n) => {
            d(n, r);
          });
        });
    });
  },
  v = (e, s) => {
    const r = Array.isArray(e) ? e : [e];
    u(() => {
      const t = new ResizeObserver(() => s());
      r.forEach((o) => o && t.observe(o)), E(() => t.disconnect());
    });
  },
  b = (e, s) => {
    const [r, t] = w(!1),
      o = () => {
        const i = typeof s == "function" ? s() : s;
        return { onElementResize: !0, dependencies: () => [], ...i };
      },
      [d, c] = w({ width: 0, height: 0, x: 0, y: 0, top: 0, left: 0 }),
      n = () => {
        const i = typeof e == "function" ? e() : e;
        if (!i || !document.contains(i)) return;
        const a = i.getBoundingClientRect(),
          f = d();
        (a.width === f.width &&
          a.height === f.height &&
          a.x === f.x &&
          a.y === f.y) ||
          c(a);
      };
    return (
      u(() => {
        const i = typeof e == "function" ? e() : e;
        i &&
          (n(),
          o().onElementResize && v(i, n),
          h(window, "resize", n),
          o().onScroll && h(window, "scroll", n),
          !(r() || !o().position) && t(!0));
      }),
      u(l(() => o().dependencies(), n)),
      d
    );
  };
export { z as a, g as b, h as c, v as o, b as u };
