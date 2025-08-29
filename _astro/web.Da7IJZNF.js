import {
  u as A,
  e as w,
  g as c,
  b as $,
  h as p,
  s as R,
  i as _,
  a as F,
  j as S,
  r as V,
  c as j,
  o as P,
} from "./solid.DvGzRSA8.js";
const G = [
    "allowfullscreen",
    "async",
    "alpha",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
    "adauctionheaders",
    "browsingtopics",
    "credentialless",
    "defaultchecked",
    "defaultmuted",
    "defaultselected",
    "defer",
    "disablepictureinpicture",
    "disableremoteplayback",
    "preservespitch",
    "shadowrootclonable",
    "shadowrootcustomelementregistry",
    "shadowrootdelegatesfocus",
    "shadowrootserializable",
    "sharedstoragewritable",
  ],
  B = new Set([
    "className",
    "value",
    "readOnly",
    "noValidate",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    "adAuctionHeaders",
    "allowFullscreen",
    "browsingTopics",
    "defaultChecked",
    "defaultMuted",
    "defaultSelected",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "preservesPitch",
    "shadowRootClonable",
    "shadowRootCustomElementRegistry",
    "shadowRootDelegatesFocus",
    "shadowRootSerializable",
    "sharedStorageWritable",
    ...G,
  ]),
  U = new Set(["innerHTML", "textContent", "innerText", "children"]),
  Y = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for",
  }),
  q = Object.assign(Object.create(null), {
    class: "className",
    novalidate: { $: "noValidate", FORM: 1 },
    formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
    ismap: { $: "isMap", IMG: 1 },
    nomodule: { $: "noModule", SCRIPT: 1 },
    playsinline: { $: "playsInline", VIDEO: 1 },
    readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
    adauctionheaders: { $: "adAuctionHeaders", IFRAME: 1 },
    allowfullscreen: { $: "allowFullscreen", IFRAME: 1 },
    browsingtopics: { $: "browsingTopics", IMG: 1 },
    defaultchecked: { $: "defaultChecked", INPUT: 1 },
    defaultmuted: { $: "defaultMuted", AUDIO: 1, VIDEO: 1 },
    defaultselected: { $: "defaultSelected", OPTION: 1 },
    disablepictureinpicture: { $: "disablePictureInPicture", VIDEO: 1 },
    disableremoteplayback: { $: "disableRemotePlayback", AUDIO: 1, VIDEO: 1 },
    preservespitch: { $: "preservesPitch", AUDIO: 1, VIDEO: 1 },
    shadowrootclonable: { $: "shadowRootClonable", TEMPLATE: 1 },
    shadowrootdelegatesfocus: { $: "shadowRootDelegatesFocus", TEMPLATE: 1 },
    shadowrootserializable: { $: "shadowRootSerializable", TEMPLATE: 1 },
    sharedstoragewritable: { $: "sharedStorageWritable", IFRAME: 1, IMG: 1 },
  });
function K(n, e) {
  const t = q[n];
  return typeof t == "object" ? (t[e] ? t.$ : void 0) : t;
}
const W = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  X = new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ]),
  z = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
  },
  ge = (n) => $(() => n());
function J(n, e, t) {
  let i = t.length,
    s = e.length,
    o = i,
    r = 0,
    l = 0,
    f = e[s - 1].nextSibling,
    a = null;
  for (; r < s || l < o; ) {
    if (e[r] === t[l]) {
      r++, l++;
      continue;
    }
    for (; e[s - 1] === t[o - 1]; ) s--, o--;
    if (s === r) {
      const d = o < i ? (l ? t[l - 1].nextSibling : t[o - l]) : f;
      for (; l < o; ) n.insertBefore(t[l++], d);
    } else if (o === l)
      for (; r < s; ) (!a || !a.has(e[r])) && e[r].remove(), r++;
    else if (e[r] === t[o - 1] && t[l] === e[s - 1]) {
      const d = e[--s].nextSibling;
      n.insertBefore(t[l++], e[r++].nextSibling),
        n.insertBefore(t[--o], d),
        (e[s] = t[o]);
    } else {
      if (!a) {
        a = new Map();
        let h = l;
        for (; h < o; ) a.set(t[h], h++);
      }
      const d = a.get(e[r]);
      if (d != null)
        if (l < d && d < o) {
          let h = r,
            u = 1,
            y;
          for (
            ;
            ++h < s && h < o && !((y = a.get(e[h])) == null || y !== d + u);

          )
            u++;
          if (u > d - l) {
            const E = e[r];
            for (; l < d; ) n.insertBefore(t[l++], E);
          } else n.replaceChild(t[l++], e[r++]);
        } else r++;
      else e[r++].remove();
    }
  }
}
const x = "_$DX_DELEGATE";
function M(n, e, t, i = {}) {
  let s;
  return (
    p((o) => {
      (s = o),
        e === document ? n() : C(e, n(), e.firstChild ? null : void 0, t);
    }, i.owner),
    () => {
      s(), (e.textContent = "");
    }
  );
}
function ye(n, e, t, i) {
  let s;
  const o = () => {
      const l = i
        ? document.createElementNS(
            "http://www.w3.org/1998/Math/MathML",
            "template"
          )
        : document.createElement("template");
      return (
        (l.innerHTML = n),
        t
          ? l.content.firstChild.firstChild
          : i
          ? l.firstChild
          : l.content.firstChild
      );
    },
    r = e
      ? () => A(() => document.importNode(s || (s = o()), !0))
      : () => (s || (s = o())).cloneNode(!0);
  return (r.cloneNode = r), r;
}
function Q(n, e = window.document) {
  const t = e[x] || (e[x] = new Set());
  for (let i = 0, s = n.length; i < s; i++) {
    const o = n[i];
    t.has(o) || (t.add(o), e.addEventListener(o, D));
  }
}
function T(n, e, t) {
  g(n) || (t == null ? n.removeAttribute(e) : n.setAttribute(e, t));
}
function Z(n, e, t, i) {
  g(n) || (i == null ? n.removeAttributeNS(e, t) : n.setAttributeNS(e, t, i));
}
function v(n, e, t) {
  g(n) || (t ? n.setAttribute(e, "") : n.removeAttribute(e));
}
function ee(n, e) {
  g(n) || (e == null ? n.removeAttribute("class") : (n.className = e));
}
function te(n, e, t, i) {
  if (i)
    Array.isArray(t)
      ? ((n[`$$${e}`] = t[0]), (n[`$$${e}Data`] = t[1]))
      : (n[`$$${e}`] = t);
  else if (Array.isArray(t)) {
    const s = t[0];
    n.addEventListener(e, (t[0] = (o) => s.call(n, t[1], o)));
  } else n.addEventListener(e, t, typeof t != "function" && t);
}
function ne(n, e, t = {}) {
  const i = Object.keys(e || {}),
    s = Object.keys(t);
  let o, r;
  for (o = 0, r = s.length; o < r; o++) {
    const l = s[o];
    !l || l === "undefined" || e[l] || (I(n, l, !1), delete t[l]);
  }
  for (o = 0, r = i.length; o < r; o++) {
    const l = i[o],
      f = !!e[l];
    !l || l === "undefined" || t[l] === f || !f || (I(n, l, !0), (t[l] = f));
  }
  return t;
}
function ie(n, e, t) {
  if (!e) return t ? T(n, "style") : e;
  const i = n.style;
  if (typeof e == "string") return (i.cssText = e);
  typeof t == "string" && (i.cssText = t = void 0),
    t || (t = {}),
    e || (e = {});
  let s, o;
  for (o in t) e[o] == null && i.removeProperty(o), delete t[o];
  for (o in e) (s = e[o]), s !== t[o] && (i.setProperty(o, s), (t[o] = s));
  return t;
}
function me(n, e, t) {
  t != null ? n.style.setProperty(e, t) : n.style.removeProperty(e);
}
function se(n, e = {}, t, i) {
  const s = {};
  return (
    i || w(() => (s.children = b(n, e.children, s.children))),
    w(() => typeof e.ref == "function" && oe(e.ref, n)),
    w(() => le(n, e, t, !0, s, !0)),
    s
  );
}
function oe(n, e, t) {
  return A(() => n(e, t));
}
function C(n, e, t, i) {
  if ((t !== void 0 && !i && (i = []), typeof e != "function"))
    return b(n, e, i, t);
  w((s) => b(n, e(), s, t), i);
}
function le(n, e, t, i, s = {}, o = !1) {
  e || (e = {});
  for (const r in s)
    if (!(r in e)) {
      if (r === "children") continue;
      s[r] = L(n, r, null, s[r], t, o, e);
    }
  for (const r in e) {
    if (r === "children") continue;
    const l = e[r];
    s[r] = L(n, r, l, s[r], t, o, e);
  }
}
function fe(n, e, t = {}) {
  if (globalThis._$HY.done) return M(n, e, [...e.childNodes], t);
  (c.completed = globalThis._$HY.completed),
    (c.events = globalThis._$HY.events),
    (c.load = (i) => globalThis._$HY.r[i]),
    (c.has = (i) => i in globalThis._$HY.r),
    (c.gather = (i) => k(e, i)),
    (c.registry = new Map()),
    (c.context = { id: t.renderId || "", count: 0 });
  try {
    return k(e, t.renderId), M(n, e, [...e.childNodes], t);
  } finally {
    c.context = null;
  }
}
function re(n) {
  let e, t;
  return !g() || !(e = c.registry.get((t = ce())))
    ? n()
    : (c.completed && c.completed.add(e), c.registry.delete(t), e);
}
function we(n) {
  let e = n,
    t = 0,
    i = [];
  if (g(n))
    for (; e; ) {
      if (e.nodeType === 8) {
        const s = e.nodeValue;
        if (s === "$") t++;
        else if (s === "/") {
          if (t === 0) return [e, i];
          t--;
        }
      }
      i.push(e), (e = e.nextSibling);
    }
  return [e, i];
}
function be() {
  c.events &&
    !c.events.queued &&
    (queueMicrotask(() => {
      const { completed: n, events: e } = c;
      if (e) {
        for (e.queued = !1; e.length; ) {
          const [t, i] = e[0];
          if (!n.has(t)) return;
          e.shift(), D(i);
        }
        c.done &&
          ((c.events = _$HY.events = null),
          (c.completed = _$HY.completed = null));
      }
    }),
    (c.events.queued = !0));
}
function g(n) {
  return !!c.context && !c.done && (!n || n.isConnected);
}
function ae(n) {
  return n.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function I(n, e, t) {
  const i = e.trim().split(/\s+/);
  for (let s = 0, o = i.length; s < o; s++) n.classList.toggle(i[s], t);
}
function L(n, e, t, i, s, o, r) {
  let l, f, a, d, h;
  if (e === "style") return ie(n, t, i);
  if (e === "classList") return ne(n, t, i);
  if (t === i) return i;
  if (e === "ref") o || t(n);
  else if (e.slice(0, 3) === "on:") {
    const u = e.slice(3);
    i && n.removeEventListener(u, i, typeof i != "function" && i),
      t && n.addEventListener(u, t, typeof t != "function" && t);
  } else if (e.slice(0, 10) === "oncapture:") {
    const u = e.slice(10);
    i && n.removeEventListener(u, i, !0), t && n.addEventListener(u, t, !0);
  } else if (e.slice(0, 2) === "on") {
    const u = e.slice(2).toLowerCase(),
      y = W.has(u);
    if (!y && i) {
      const E = Array.isArray(i) ? i[0] : i;
      n.removeEventListener(u, E);
    }
    (y || t) && (te(n, u, t, y), y && Q([u]));
  } else if (e.slice(0, 5) === "attr:") T(n, e.slice(5), t);
  else if (e.slice(0, 5) === "bool:") v(n, e.slice(5), t);
  else if (
    (h = e.slice(0, 5) === "prop:") ||
    (a = U.has(e)) ||
    (!s && ((d = K(e, n.tagName)) || (f = B.has(e)))) ||
    (l = n.nodeName.includes("-") || "is" in r)
  ) {
    if (h) (e = e.slice(5)), (f = !0);
    else if (g(n)) return t;
    e === "class" || e === "className"
      ? ee(n, t)
      : l && !f && !a
      ? (n[ae(e)] = t)
      : (n[d || e] = t);
  } else {
    const u = s && e.indexOf(":") > -1 && z[e.split(":")[0]];
    u ? Z(n, u, e, t) : T(n, Y[e] || e, t);
  }
  return t;
}
function D(n) {
  if (c.registry && c.events && c.events.find(([f, a]) => a === n)) return;
  let e = n.target;
  const t = `$$${n.type}`,
    i = n.target,
    s = n.currentTarget,
    o = (f) =>
      Object.defineProperty(n, "target", { configurable: !0, value: f }),
    r = () => {
      const f = e[t];
      if (f && !e.disabled) {
        const a = e[`${t}Data`];
        if ((a !== void 0 ? f.call(e, a, n) : f.call(e, n), n.cancelBubble))
          return;
      }
      return (
        e.host &&
          typeof e.host != "string" &&
          !e.host._$host &&
          e.contains(n.target) &&
          o(e.host),
        !0
      );
    },
    l = () => {
      for (; r() && (e = e._$host || e.parentNode || e.host); );
    };
  if (
    (Object.defineProperty(n, "currentTarget", {
      configurable: !0,
      get() {
        return e || document;
      },
    }),
    c.registry && !c.done && (c.done = _$HY.done = !0),
    n.composedPath)
  ) {
    const f = n.composedPath();
    o(f[0]);
    for (let a = 0; a < f.length - 2 && ((e = f[a]), !!r()); a++) {
      if (e._$host) {
        (e = e._$host), l();
        break;
      }
      if (e.parentNode === s) break;
    }
  } else l();
  o(i);
}
function b(n, e, t, i, s) {
  const o = g(n);
  if (o) {
    !t && (t = [...n.childNodes]);
    let f = [];
    for (let a = 0; a < t.length; a++) {
      const d = t[a];
      d.nodeType === 8 && d.data.slice(0, 2) === "!$" ? d.remove() : f.push(d);
    }
    t = f;
  }
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const r = typeof e,
    l = i !== void 0;
  if (
    ((n = (l && t[0] && t[0].parentNode) || n),
    r === "string" || r === "number")
  ) {
    if (o || (r === "number" && ((e = e.toString()), e === t))) return t;
    if (l) {
      let f = t[0];
      f && f.nodeType === 3
        ? f.data !== e && (f.data = e)
        : (f = document.createTextNode(e)),
        (t = m(n, t, i, f));
    } else
      t !== "" && typeof t == "string"
        ? (t = n.firstChild.data = e)
        : (t = n.textContent = e);
  } else if (e == null || r === "boolean") {
    if (o) return t;
    t = m(n, t, i);
  } else {
    if (r === "function")
      return (
        w(() => {
          let f = e();
          for (; typeof f == "function"; ) f = f();
          t = b(n, f, t, i);
        }),
        () => t
      );
    if (Array.isArray(e)) {
      const f = [],
        a = t && Array.isArray(t);
      if (N(f, e, t, s)) return w(() => (t = b(n, f, t, i, !0))), () => t;
      if (o) {
        if (!f.length) return t;
        if (i === void 0) return (t = [...n.childNodes]);
        let d = f[0];
        if (d.parentNode !== n) return t;
        const h = [d];
        for (; (d = d.nextSibling) !== i; ) h.push(d);
        return (t = h);
      }
      if (f.length === 0) {
        if (((t = m(n, t, i)), l)) return t;
      } else
        a ? (t.length === 0 ? O(n, f, i) : J(n, t, f)) : (t && m(n), O(n, f));
      t = f;
    } else if (e.nodeType) {
      if (o && e.parentNode) return (t = l ? [e] : e);
      if (Array.isArray(t)) {
        if (l) return (t = m(n, t, i, e));
        m(n, t, null, e);
      } else
        t == null || t === "" || !n.firstChild
          ? n.appendChild(e)
          : n.replaceChild(e, n.firstChild);
      t = e;
    }
  }
  return t;
}
function N(n, e, t, i) {
  let s = !1;
  for (let o = 0, r = e.length; o < r; o++) {
    let l = e[o],
      f = t && t[n.length],
      a;
    if (!(l == null || l === !0 || l === !1))
      if ((a = typeof l) == "object" && l.nodeType) n.push(l);
      else if (Array.isArray(l)) s = N(n, l, f) || s;
      else if (a === "function")
        if (i) {
          for (; typeof l == "function"; ) l = l();
          s = N(n, Array.isArray(l) ? l : [l], Array.isArray(f) ? f : [f]) || s;
        } else n.push(l), (s = !0);
      else {
        const d = String(l);
        f && f.nodeType === 3 && f.data === d
          ? n.push(f)
          : n.push(document.createTextNode(d));
      }
  }
  return s;
}
function O(n, e, t = null) {
  for (let i = 0, s = e.length; i < s; i++) n.insertBefore(e[i], t);
}
function m(n, e, t, i) {
  if (t === void 0) return (n.textContent = "");
  const s = i || document.createTextNode("");
  if (e.length) {
    let o = !1;
    for (let r = e.length - 1; r >= 0; r--) {
      const l = e[r];
      if (s !== l) {
        const f = l.parentNode === n;
        !o && !r
          ? f
            ? n.replaceChild(s, l)
            : n.insertBefore(s, t)
          : f && l.remove();
      } else o = !0;
    }
  } else n.insertBefore(s, t);
  return [s];
}
function k(n, e) {
  const t = n.querySelectorAll("*[data-hk]");
  for (let i = 0; i < t.length; i++) {
    const s = t[i],
      o = s.getAttribute("data-hk");
    (!e || o.startsWith(e)) && !c.registry.has(o) && c.registry.set(o, s);
  }
}
function ce() {
  return c.getNextContextId();
}
const de = "http://www.w3.org/2000/svg";
function H(n, e = !1, t = void 0) {
  return e
    ? document.createElementNS(de, n)
    : document.createElement(n, { is: t });
}
const Ae = (...n) => (_(), fe(...n));
function $e(n) {
  const { useShadow: e } = n,
    t = document.createTextNode(""),
    i = () => n.mount || document.body,
    s = S();
  let o,
    r = !!c.context;
  return (
    F(
      () => {
        r && (S().user = r = !1), o || (o = V(s, () => $(() => n.children)));
        const l = i();
        if (l instanceof HTMLHeadElement) {
          const [f, a] = j(!1),
            d = () => a(!0);
          p((h) => C(l, () => (f() ? h() : o()), null)), P(d);
        } else {
          const f = H(n.isSVG ? "g" : "div", n.isSVG),
            a = e && f.attachShadow ? f.attachShadow({ mode: "open" }) : f;
          Object.defineProperty(f, "_$host", {
            get() {
              return t.parentNode;
            },
            configurable: !0,
          }),
            C(a, o),
            l.appendChild(f),
            n.ref && n.ref(f),
            P(() => l.removeChild(f));
        }
      },
      void 0,
      { render: !r }
    ),
    t
  );
}
function ue(n, e) {
  const t = $(n);
  return $(() => {
    const i = t();
    switch (typeof i) {
      case "function":
        return A(() => i(e));
      case "string":
        const s = X.has(i),
          o = c.context
            ? re()
            : H(
                i,
                s,
                A(() => e.is)
              );
        return se(o, e, s), o;
    }
  });
}
function Ee(n) {
  const [, e] = R(n, ["component"]);
  return ue(() => n.component, e);
}
export {
  Ee as D,
  $e as P,
  we as a,
  be as b,
  ee as c,
  Q as d,
  se as e,
  me as f,
  re as g,
  Ae as h,
  C as i,
  te as j,
  ie as k,
  ge as m,
  M as r,
  T as s,
  ye as t,
  oe as u,
};
