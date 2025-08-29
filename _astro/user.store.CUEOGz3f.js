const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "_astro/connections.xMPUm19e.js",
      "_astro/preload-helper.BlTxHScW.js",
      "_astro/mainnet.Bzp6V_5p.js",
      "_astro/cjs.Wk7D1Z2j.js",
      "_astro/connect.BMP7IoEd.js",
      "_astro/disconnect.fQnpZ0pp.js",
      "_astro/public-client.oCvv0m2W.js",
      "_astro/createPublicClient.CV651Z5O.js",
      "_astro/isAddressEqual.DhcGsiIP.js",
      "_astro/secp256k1.Bhcljo4L.js",
      "_astro/hooks.util.DwERTY88.js",
      "_astro/solid.DvGzRSA8.js",
      "_astro/runtime.BjGO-K5b.js",
      "_astro/clsx.B-dksMZM.js",
    ])
) => i.map((i) => d[i]);
import "./cjs.Wk7D1Z2j.js";
import { a as yn } from "./hooks.util.DwERTY88.js";
import { _ as Ft } from "./preload-helper.BlTxHScW.js";
import { c as Pe } from "./runtime.BjGO-K5b.js";
function Ln(e) {
  const t = e.state.current,
    n = e.state.connections.get(t),
    r = n?.accounts,
    i = r?.[0],
    s = e.chains.find((l) => l.id === n?.chainId),
    o = e.state.status;
  switch (o) {
    case "connected":
      return {
        address: i,
        addresses: r,
        chain: s,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case "reconnecting":
      return {
        address: i,
        addresses: r,
        chain: s,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !!i,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: o,
      };
    case "connecting":
      return {
        address: i,
        addresses: r,
        chain: s,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: o,
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: o,
      };
  }
}
function Ye(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (Array.isArray(e) && Array.isArray(t)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ye(e[r], t[r])) return !1;
      return !0;
    }
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const i = Object.keys(e);
    if (((n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.hasOwn(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (s && !Ye(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vn(e, t) {
  const { onChange: n } = t;
  return e.subscribe(() => Ln(e), n, {
    equalityFn(r, i) {
      const { connector: s, ...o } = r,
        { connector: l, ...c } = i;
      return Ye(o, c) && s?.id === l?.id && s?.uid === l?.uid;
    },
  });
}
let H = [],
  Q = 0;
const Le = 4;
let Sn = (e) => {
    let t = [],
      n = {
        get() {
          return n.lc || n.listen(() => {})(), n.value;
        },
        lc: 0,
        listen(r) {
          return (
            (n.lc = t.push(r)),
            () => {
              for (let s = Q + Le; s < H.length; )
                H[s] === r ? H.splice(s, Le) : (s += Le);
              let i = t.indexOf(r);
              ~i && (t.splice(i, 1), --n.lc || n.off());
            }
          );
        },
        notify(r, i) {
          let s = !H.length;
          for (let o of t) H.push(o, n.value, r, i);
          if (s) {
            for (Q = 0; Q < H.length; Q += Le)
              H[Q](H[Q + 1], H[Q + 2], H[Q + 3]);
            H.length = 0;
          }
        },
        off() {},
        set(r) {
          let i = n.value;
          i !== r && ((n.value = r), n.notify(i));
        },
        subscribe(r) {
          let i = n.listen(r);
          return r(n.value), i;
        },
        value: e,
      };
    return n;
  },
  ut = (e = {}) => {
    let t = Sn(e);
    return (
      (t.setKey = function (n, r) {
        let i = t.value;
        typeof r > "u" && n in t.value
          ? ((t.value = { ...t.value }), delete t.value[n], t.notify(i, n))
          : t.value[n] !== r &&
            ((t.value = { ...t.value, [n]: r }), t.notify(i, n));
      }),
      t
    );
  };
function Mt(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Rn } = Object.prototype,
  { getPrototypeOf: ft } = Object,
  { iterator: Fe, toStringTag: Dt } = Symbol,
  Me = ((e) => (t) => {
    const n = Rn.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $ = (e) => ((e = e.toLowerCase()), (t) => Me(t) === e),
  De = (e) => (t) => typeof t === e,
  { isArray: ae } = Array,
  he = De("undefined");
function me(e) {
  return (
    e !== null &&
    !he(e) &&
    e.constructor !== null &&
    !he(e.constructor) &&
    B(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ut = $("ArrayBuffer");
function Nn(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ut(e.buffer)),
    t
  );
}
const Cn = De("string"),
  B = De("function"),
  Bt = De("number"),
  ge = (e) => e !== null && typeof e == "object",
  On = (e) => e === !0 || e === !1,
  ve = (e) => {
    if (Me(e) !== "object") return !1;
    const t = ft(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Dt in e) &&
      !(Fe in e)
    );
  },
  An = (e) => {
    if (!ge(e) || me(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Tn = $("Date"),
  kn = $("File"),
  _n = $("Blob"),
  Pn = $("FileList"),
  Fn = (e) => ge(e) && B(e.pipe),
  Mn = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (B(e.append) &&
          ((t = Me(e)) === "formdata" ||
            (t === "object" &&
              B(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Dn = $("URLSearchParams"),
  [Un, Bn, xn, In] = ["ReadableStream", "Request", "Response", "Headers"].map(
    $
  ),
  qn = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), ae(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (me(e)) return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let l;
    for (r = 0; r < o; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function xt(e, t) {
  if (me(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const re =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  It = (e) => !he(e) && e !== re;
function et() {
  const { caseless: e } = (It(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && xt(t, i)) || i;
      ve(t[s]) && ve(r)
        ? (t[s] = et(t[s], r))
        : ve(r)
        ? (t[s] = et({}, r))
        : ae(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && we(arguments[r], n);
  return t;
}
const jn = (e, t, n, { allOwnKeys: r } = {}) => (
    we(
      t,
      (i, s) => {
        n && B(i) ? (e[s] = Mt(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Hn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Zn = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  $n = (e, t, n, r) => {
    let i, s, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && ft(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Vn = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  zn = (e) => {
    if (!e) return null;
    if (ae(e)) return e;
    let t = e.length;
    if (!Bt(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Kn = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ft(Uint8Array)),
  Wn = (e, t) => {
    const r = (e && e[Fe]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  Jn = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Xn = $("HTMLFormElement"),
  Gn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  gt = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Qn = $("RegExp"),
  qt = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    we(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  Yn = (e) => {
    qt(e, (t, n) => {
      if (B(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (B(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  er = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return ae(e) ? r(e) : r(String(e).split(t)), n;
  },
  tr = () => {},
  nr = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function rr(e) {
  return !!(e && B(e.append) && e[Dt] === "FormData" && e[Fe]);
}
const ir = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ge(r)) {
          if (t.indexOf(r) >= 0) return;
          if (me(r)) return r;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = ae(r) ? [] : {};
            return (
              we(r, (o, l) => {
                const c = n(o, i + 1);
                !he(c) && (s[l] = c);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  sr = $("AsyncFunction"),
  or = (e) => e && (ge(e) || B(e)) && B(e.then) && B(e.catch),
  jt = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          re.addEventListener(
            "message",
            ({ source: i, data: s }) => {
              i === re && s === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), re.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    B(re.postMessage)
  ),
  lr =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(re)
      : (typeof process < "u" && process.nextTick) || jt,
  ar = (e) => e != null && B(e[Fe]),
  d = {
    isArray: ae,
    isArrayBuffer: Ut,
    isBuffer: me,
    isFormData: Mn,
    isArrayBufferView: Nn,
    isString: Cn,
    isNumber: Bt,
    isBoolean: On,
    isObject: ge,
    isPlainObject: ve,
    isEmptyObject: An,
    isReadableStream: Un,
    isRequest: Bn,
    isResponse: xn,
    isHeaders: In,
    isUndefined: he,
    isDate: Tn,
    isFile: kn,
    isBlob: _n,
    isRegExp: Qn,
    isFunction: B,
    isStream: Fn,
    isURLSearchParams: Dn,
    isTypedArray: Kn,
    isFileList: Pn,
    forEach: we,
    merge: et,
    extend: jn,
    trim: qn,
    stripBOM: Hn,
    inherits: Zn,
    toFlatObject: $n,
    kindOf: Me,
    kindOfTest: $,
    endsWith: Vn,
    toArray: zn,
    forEachEntry: Wn,
    matchAll: Jn,
    isHTMLForm: Xn,
    hasOwnProperty: gt,
    hasOwnProp: gt,
    reduceDescriptors: qt,
    freezeMethods: Yn,
    toObjectSet: er,
    toCamelCase: Gn,
    noop: tr,
    toFiniteNumber: nr,
    findKey: xt,
    global: re,
    isContextDefined: It,
    isSpecCompliantForm: rr,
    toJSONObject: ir,
    isAsyncFn: sr,
    isThenable: or,
    setImmediate: jt,
    asap: lr,
    isIterable: ar,
  };
function R(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
d.inherits(R, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ht = R.prototype,
  Zt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Zt[e] = { value: e };
});
Object.defineProperties(R, Zt);
Object.defineProperty(Ht, "isAxiosError", { value: !0 });
R.from = (e, t, n, r, i, s) => {
  const o = Object.create(Ht);
  return (
    d.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    R.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const cr = null;
function tt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function $t(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wt(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = $t(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function ur(e) {
  return d.isArray(e) && !e.some(tt);
}
const fr = d.toFlatObject(d, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ue(e, t, n) {
  if (!d.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = d.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !d.isUndefined(b[g]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || u,
    s = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(t);
  if (!d.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(m) {
    if (m === null) return "";
    if (d.isDate(m)) return m.toISOString();
    if (d.isBoolean(m)) return m.toString();
    if (!c && d.isBlob(m))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(m) || d.isTypedArray(m)
      ? c && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, g, b) {
    let S = m;
    if (m && !b && typeof m == "object") {
      if (d.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (d.isArray(m) && ur(m)) ||
        ((d.isFileList(m) || d.endsWith(g, "[]")) && (S = d.toArray(m)))
      )
        return (
          (g = $t(g)),
          S.forEach(function (L, O) {
            !(d.isUndefined(L) || L === null) &&
              t.append(
                o === !0 ? wt([g], O, s) : o === null ? g : g + "[]",
                a(L)
              );
          }),
          !1
        );
    }
    return tt(m) ? !0 : (t.append(wt(b, g, s), a(m)), !1);
  }
  const f = [],
    h = Object.assign(fr, {
      defaultVisitor: u,
      convertValue: a,
      isVisitable: tt,
    });
  function w(m, g) {
    if (!d.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(m),
        d.forEach(m, function (S, N) {
          (!(d.isUndefined(S) || S === null) &&
            i.call(t, S, d.isString(N) ? N.trim() : N, g, h)) === !0 &&
            w(S, g ? g.concat(N) : [N]);
        }),
        f.pop();
    }
  }
  if (!d.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function bt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function dt(e, t) {
  (this._pairs = []), e && Ue(e, this, t);
}
const Vt = dt.prototype;
Vt.append = function (t, n) {
  this._pairs.push([t, n]);
};
Vt.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, bt);
      }
    : bt;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function dr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function zt(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || dr;
  d.isFunction(n) && (n = { serialize: n });
  const i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = d.isURLSearchParams(t) ? t.toString() : new dt(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Et {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    d.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Kt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  hr = typeof URLSearchParams < "u" ? URLSearchParams : dt,
  pr = typeof FormData < "u" ? FormData : null,
  mr = typeof Blob < "u" ? Blob : null,
  gr = {
    isBrowser: !0,
    classes: { URLSearchParams: hr, FormData: pr, Blob: mr },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ht = typeof window < "u" && typeof document < "u",
  nt = (typeof navigator == "object" && navigator) || void 0,
  wr =
    ht &&
    (!nt || ["ReactNative", "NativeScript", "NS"].indexOf(nt.product) < 0),
  br =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Er = (ht && window.location.href) || "http://localhost",
  yr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ht,
        hasStandardBrowserEnv: wr,
        hasStandardBrowserWebWorkerEnv: br,
        navigator: nt,
        origin: Er,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  D = { ...yr, ...gr };
function Lr(e, t) {
  return Ue(e, new D.classes.URLSearchParams(), {
    visitor: function (n, r, i, s) {
      return D.isNode && d.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : s.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function vr(e) {
  return d
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Sr(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Wt(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      c = s >= n.length;
    return (
      (o = !o && d.isArray(i) ? i.length : o),
      c
        ? (d.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !l)
        : ((!i[o] || !d.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && d.isArray(i[o]) && (i[o] = Sr(i[o])),
          !l)
    );
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return (
      d.forEachEntry(e, (r, i) => {
        t(vr(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Rr(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const be = {
  transitional: Kt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = d.isObject(t);
      if ((s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t)))
        return i ? JSON.stringify(Wt(t)) : t;
      if (
        d.isArrayBuffer(t) ||
        d.isBuffer(t) ||
        d.isStream(t) ||
        d.isFile(t) ||
        d.isBlob(t) ||
        d.isReadableStream(t)
      )
        return t;
      if (d.isArrayBufferView(t)) return t.buffer;
      if (d.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Lr(t, this.formSerializer).toString();
        if ((l = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ue(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), Rr(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || be.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (d.isResponse(t) || d.isReadableStream(t)) return t;
      if (t && d.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? R.from(l, R.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: D.classes.FormData, Blob: D.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  be.headers[e] = {};
});
const Nr = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Cr = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && Nr[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  yt = Symbol("internals");
function de(e) {
  return e && String(e).trim().toLowerCase();
}
function Se(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Se) : String(e);
}
function Or(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Ar = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ve(e, t, n, r, i) {
  if (d.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!d.isString(t))) {
    if (d.isString(r)) return t.indexOf(r) !== -1;
    if (d.isRegExp(r)) return r.test(t);
  }
}
function Tr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function kr(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
let x = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(l, c, a) {
      const u = de(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const f = d.findKey(i, u);
      (!f || i[f] === void 0 || a === !0 || (a === void 0 && i[f] !== !1)) &&
        (i[f || c] = Se(l));
    }
    const o = (l, c) => d.forEach(l, (a, u) => s(a, u, c));
    if (d.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (d.isString(t) && (t = t.trim()) && !Ar(t)) o(Cr(t), n);
    else if (d.isObject(t) && d.isIterable(t)) {
      let l = {},
        c,
        a;
      for (const u of t) {
        if (!d.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[(a = u[0])] = (c = l[a])
          ? d.isArray(c)
            ? [...c, u[1]]
            : [c, u[1]]
          : u[1];
      }
      o(l, n);
    } else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = de(t)), t)) {
      const r = d.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Or(i);
        if (d.isFunction(n)) return n.call(this, i, r);
        if (d.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = de(t)), t)) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ve(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = de(o)), o)) {
        const l = d.findKey(r, o);
        l && (!n || Ve(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ve(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      d.forEach(this, (i, s) => {
        const o = d.findKey(r, s);
        if (o) {
          (n[o] = Se(i)), delete n[s];
          return;
        }
        const l = t ? Tr(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = Se(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      d.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && d.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[yt] = this[yt] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const l = de(o);
      r[l] || (kr(i, o), (r[l] = !0));
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
x.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
d.reduceDescriptors(x.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
d.freezeMethods(x);
function ze(e, t) {
  const n = this || be,
    r = t || n,
    i = x.from(r.headers);
  let s = r.data;
  return (
    d.forEach(e, function (l) {
      s = l.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Jt(e) {
  return !!(e && e.__CANCEL__);
}
function ce(e, t, n) {
  R.call(this, e ?? "canceled", R.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
d.inherits(ce, R, { __CANCEL__: !0 });
function Xt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new R(
          "Request failed with status code " + n.status,
          [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function _r(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Pr(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const a = Date.now(),
        u = r[s];
      o || (o = a), (n[i] = c), (r[i] = a);
      let f = s,
        h = 0;
      for (; f !== i; ) (h += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), a - o < t)) return;
      const w = u && a - u;
      return w ? Math.round((h * 1e3) / w) : void 0;
    }
  );
}
function Fr(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    s;
  const o = (a, u = Date.now()) => {
    (n = u), (i = null), s && (clearTimeout(s), (s = null)), e(...a);
  };
  return [
    (...a) => {
      const u = Date.now(),
        f = u - n;
      f >= r
        ? o(a, u)
        : ((i = a),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, r - f)));
    },
    () => i && o(i),
  ];
}
const Oe = (e, t, n = 3) => {
    let r = 0;
    const i = Pr(50, 250);
    return Fr((s) => {
      const o = s.loaded,
        l = s.lengthComputable ? s.total : void 0,
        c = o - r,
        a = i(c),
        u = o <= l;
      r = o;
      const f = {
        loaded: o,
        total: l,
        progress: l ? o / l : void 0,
        bytes: c,
        rate: a || void 0,
        estimated: a && l && u ? (l - o) / a : void 0,
        event: s,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Lt = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  vt =
    (e) =>
    (...t) =>
      d.asap(() => e(...t)),
  Mr = D.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, D.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(D.origin),
        D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
      )
    : () => !0,
  Dr = D.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          d.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            d.isString(r) && o.push("path=" + r),
            d.isString(i) && o.push("domain=" + i),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ur(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Br(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Gt(e, t, n) {
  let r = !Ur(t);
  return e && (r || n == !1) ? Br(e, t) : t;
}
const St = (e) => (e instanceof x ? { ...e } : e);
function se(e, t) {
  t = t || {};
  const n = {};
  function r(a, u, f, h) {
    return d.isPlainObject(a) && d.isPlainObject(u)
      ? d.merge.call({ caseless: h }, a, u)
      : d.isPlainObject(u)
      ? d.merge({}, u)
      : d.isArray(u)
      ? u.slice()
      : u;
  }
  function i(a, u, f, h) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(a)) return r(void 0, a, f, h);
    } else return r(a, u, f, h);
  }
  function s(a, u) {
    if (!d.isUndefined(u)) return r(void 0, u);
  }
  function o(a, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, u);
  }
  function l(a, u, f) {
    if (f in t) return r(a, u);
    if (f in e) return r(void 0, a);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (a, u, f) => i(St(a), St(u), f, !0),
  };
  return (
    d.forEach(Object.keys({ ...e, ...t }), function (u) {
      const f = c[u] || i,
        h = f(e[u], t[u], u);
      (d.isUndefined(h) && f !== l) || (n[u] = h);
    }),
    n
  );
}
const Qt = (e) => {
    const t = se({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: l,
    } = t;
    (t.headers = o = x.from(o)),
      (t.url = zt(
        Gt(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      l &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let c;
    if (d.isFormData(n)) {
      if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((c = o.getContentType()) !== !1) {
        const [a, ...u] = c
          ? c
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([a || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      D.hasStandardBrowserEnv &&
      (r && d.isFunction(r) && (r = r(t)), r || (r !== !1 && Mr(t.url)))
    ) {
      const a = i && s && Dr.read(s);
      a && o.set(i, a);
    }
    return t;
  },
  xr = typeof XMLHttpRequest < "u",
  Ir =
    xr &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Qt(e);
        let s = i.data;
        const o = x.from(i.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: a } = i,
          u,
          f,
          h,
          w,
          m;
        function g() {
          w && w(),
            m && m(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let b = new XMLHttpRequest();
        b.open(i.method.toUpperCase(), i.url, !0), (b.timeout = i.timeout);
        function S() {
          if (!b) return;
          const L = x.from(
              "getAllResponseHeaders" in b && b.getAllResponseHeaders()
            ),
            k = {
              data:
                !l || l === "text" || l === "json"
                  ? b.responseText
                  : b.response,
              status: b.status,
              statusText: b.statusText,
              headers: L,
              config: e,
              request: b,
            };
          Xt(
            function (q) {
              n(q), g();
            },
            function (q) {
              r(q), g();
            },
            k
          ),
            (b = null);
        }
        "onloadend" in b
          ? (b.onloadend = S)
          : (b.onreadystatechange = function () {
              !b ||
                b.readyState !== 4 ||
                (b.status === 0 &&
                  !(b.responseURL && b.responseURL.indexOf("file:") === 0)) ||
                setTimeout(S);
            }),
          (b.onabort = function () {
            b &&
              (r(new R("Request aborted", R.ECONNABORTED, e, b)), (b = null));
          }),
          (b.onerror = function () {
            r(new R("Network Error", R.ERR_NETWORK, e, b)), (b = null);
          }),
          (b.ontimeout = function () {
            let O = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = i.transitional || Kt;
            i.timeoutErrorMessage && (O = i.timeoutErrorMessage),
              r(
                new R(
                  O,
                  k.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
                  e,
                  b
                )
              ),
              (b = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in b &&
            d.forEach(o.toJSON(), function (O, k) {
              b.setRequestHeader(k, O);
            }),
          d.isUndefined(i.withCredentials) ||
            (b.withCredentials = !!i.withCredentials),
          l && l !== "json" && (b.responseType = i.responseType),
          a && (([h, m] = Oe(a, !0)), b.addEventListener("progress", h)),
          c &&
            b.upload &&
            (([f, w] = Oe(c)),
            b.upload.addEventListener("progress", f),
            b.upload.addEventListener("loadend", w)),
          (i.cancelToken || i.signal) &&
            ((u = (L) => {
              b &&
                (r(!L || L.type ? new ce(null, e, b) : L),
                b.abort(),
                (b = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const N = _r(i.url);
        if (N && D.protocols.indexOf(N) === -1) {
          r(new R("Unsupported protocol " + N + ":", R.ERR_BAD_REQUEST, e));
          return;
        }
        b.send(s || null);
      });
    },
  qr = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const s = function (a) {
        if (!i) {
          (i = !0), l();
          const u = a instanceof Error ? a : this.reason;
          r.abort(
            u instanceof R ? u : new ce(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new R(`timeout ${t} of ms exceeded`, R.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(s)
              : a.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", s));
      const { signal: c } = r;
      return (c.unsubscribe = () => d.asap(l)), c;
    }
  },
  jr = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Hr = async function* (e, t) {
    for await (const n of Zr(e)) yield* jr(n, t);
  },
  Zr = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Rt = (e, t, n, r) => {
    const i = Hr(e, t);
    let s = 0,
      o,
      l = (c) => {
        o || ((o = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: a, value: u } = await i.next();
            if (a) {
              l(), c.close();
              return;
            }
            let f = u.byteLength;
            if (n) {
              let h = (s += f);
              n(h);
            }
            c.enqueue(new Uint8Array(u));
          } catch (a) {
            throw (l(a), a);
          }
        },
        cancel(c) {
          return l(c), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Be =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Yt = Be && typeof ReadableStream == "function",
  $r =
    Be &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  en = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Vr =
    Yt &&
    en(() => {
      let e = !1;
      const t = new Request(D.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Nt = 64 * 1024,
  rt = Yt && en(() => d.isReadableStream(new Response("").body)),
  Ae = { stream: rt && ((e) => e.body) };
Be &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ae[t] &&
        (Ae[t] = d.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new R(
                `Response type '${t}' is not supported`,
                R.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const zr = async (e) => {
    if (e == null) return 0;
    if (d.isBlob(e)) return e.size;
    if (d.isSpecCompliantForm(e))
      return (
        await new Request(D.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (d.isArrayBufferView(e) || d.isArrayBuffer(e)) return e.byteLength;
    if ((d.isURLSearchParams(e) && (e = e + ""), d.isString(e)))
      return (await $r(e)).byteLength;
  },
  Kr = async (e, t) => {
    const n = d.toFiniteNumber(e.getContentLength());
    return n ?? zr(t);
  },
  Wr =
    Be &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: a,
        headers: u,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = Qt(e);
      a = a ? (a + "").toLowerCase() : "text";
      let w = qr([i, s && s.toAbortSignal()], o),
        m;
      const g =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let b;
      try {
        if (
          c &&
          Vr &&
          n !== "get" &&
          n !== "head" &&
          (b = await Kr(u, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            P;
          if (
            (d.isFormData(r) &&
              (P = k.headers.get("content-type")) &&
              u.setContentType(P),
            k.body)
          ) {
            const [q, W] = Lt(b, Oe(vt(c)));
            r = Rt(k.body, Nt, q, W);
          }
        }
        d.isString(f) || (f = f ? "include" : "omit");
        const S = "credentials" in Request.prototype;
        m = new Request(t, {
          ...h,
          signal: w,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: S ? f : void 0,
        });
        let N = await fetch(m, h);
        const L = rt && (a === "stream" || a === "response");
        if (rt && (l || (L && g))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((G) => {
            k[G] = N[G];
          });
          const P = d.toFiniteNumber(N.headers.get("content-length")),
            [q, W] = (l && Lt(P, Oe(vt(l), !0))) || [];
          N = new Response(
            Rt(N.body, Nt, q, () => {
              W && W(), g && g();
            }),
            k
          );
        }
        a = a || "text";
        let O = await Ae[d.findKey(Ae, a) || "text"](N, e);
        return (
          !L && g && g(),
          await new Promise((k, P) => {
            Xt(k, P, {
              data: O,
              headers: x.from(N.headers),
              status: N.status,
              statusText: N.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (S) {
        throw (
          (g && g(),
          S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new R("Network Error", R.ERR_NETWORK, e, m), {
                cause: S.cause || S,
              })
            : R.from(S, S && S.code, e, m))
        );
      }
    }),
  it = { http: cr, xhr: Ir, fetch: Wr };
d.forEach(it, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ct = (e) => `- ${e}`,
  Jr = (e) => d.isFunction(e) || e === null || e === !1,
  tn = {
    getAdapter: (e) => {
      e = d.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !Jr(n) && ((r = it[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new R(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(Ct).join(`
`)
            : " " + Ct(s[0])
          : "as no adapter specified";
        throw new R(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: it,
  };
function Ke(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ce(null, e);
}
function Ot(e) {
  return (
    Ke(e),
    (e.headers = x.from(e.headers)),
    (e.data = ze.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    tn
      .getAdapter(e.adapter || be.adapter)(e)
      .then(
        function (r) {
          return (
            Ke(e),
            (r.data = ze.call(e, e.transformResponse, r)),
            (r.headers = x.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Jt(r) ||
              (Ke(e),
              r &&
                r.response &&
                ((r.response.data = ze.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = x.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const nn = "1.11.0",
  xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    xe[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const At = {};
xe.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      nn +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, l) => {
    if (t === !1)
      throw new R(
        i(o, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return (
      n &&
        !At[o] &&
        ((At[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, l) : !0
    );
  };
};
xe.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Xr(e, t, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const l = e[s],
        c = l === void 0 || o(l, s, e);
      if (c !== !0)
        throw new R("option " + s + " must be " + c, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new R("Unknown option " + s, R.ERR_BAD_OPTION);
  }
}
const Re = { assertOptions: Xr, validators: xe },
  V = Re.validators;
let ie = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Et(), response: new Et() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = se(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      Re.assertOptions(
        r,
        {
          silentJSONParsing: V.transitional(V.boolean),
          forcedJSONParsing: V.transitional(V.boolean),
          clarifyTimeoutError: V.transitional(V.boolean),
        },
        !1
      ),
      i != null &&
        (d.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Re.assertOptions(
              i,
              { encode: V.function, serialize: V.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Re.assertOptions(
        n,
        {
          baseUrl: V.spelling("baseURL"),
          withXsrfToken: V.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && d.merge(s.common, s[n.method]);
    s &&
      d.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete s[m];
        }
      ),
      (n.headers = x.concat(o, s));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((c = c && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let u,
      f = 0,
      h;
    if (!c) {
      const m = [Ot.bind(this), void 0];
      for (
        m.unshift(...l), m.push(...a), h = m.length, u = Promise.resolve(n);
        f < h;

      )
        u = u.then(m[f++], m[f++]);
      return u;
    }
    h = l.length;
    let w = n;
    for (f = 0; f < h; ) {
      const m = l[f++],
        g = l[f++];
      try {
        w = m(w);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = Ot.call(this, w);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = a.length; f < h; ) u = u.then(a[f++], a[f++]);
    return u;
  }
  getUri(t) {
    t = se(this.defaults, t);
    const n = Gt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return zt(n, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function (t) {
  ie.prototype[t] = function (n, r) {
    return this.request(
      se(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
d.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, l) {
      return this.request(
        se(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (ie.prototype[t] = n()), (ie.prototype[t + "Form"] = n(!0));
});
let Gr = class rn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((l) => {
          r.subscribe(l), (s = l);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, l) {
        r.reason || ((r.reason = new ce(s, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new rn(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Qr(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Yr(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const st = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(st).forEach(([e, t]) => {
  st[t] = e;
});
function sn(e) {
  const t = new ie(e),
    n = Mt(ie.prototype.request, t);
  return (
    d.extend(n, ie.prototype, t, { allOwnKeys: !0 }),
    d.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return sn(se(e, i));
    }),
    n
  );
}
const T = sn(be);
T.Axios = ie;
T.CanceledError = ce;
T.CancelToken = Gr;
T.isCancel = Jt;
T.VERSION = nn;
T.toFormData = Ue;
T.AxiosError = R;
T.Cancel = T.CanceledError;
T.all = function (t) {
  return Promise.all(t);
};
T.spread = Qr;
T.isAxiosError = Yr;
T.mergeConfig = se;
T.AxiosHeaders = x;
T.formToJSON = (e) => Wt(d.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = tn.getAdapter;
T.HttpStatusCode = st;
T.default = T;
const {
    Axios: Ls,
    AxiosError: vs,
    CanceledError: Ss,
    isCancel: Rs,
    CancelToken: Ns,
    VERSION: Cs,
    all: Os,
    Cancel: As,
    isAxiosError: Ts,
    spread: ks,
    toFormData: _s,
    AxiosHeaders: Ps,
    HttpStatusCode: Fs,
    formToJSON: Ms,
    getAdapter: Ds,
    mergeConfig: Us,
  } = T,
  ei = "https://api.bullzilla.com/v1",
  ue = "bullzilla",
  fe = async (e, t = {}) => await T({ url: e, baseURL: ei, ...t }),
  ti = () => fe(`/projects/${ue}/stages/current`),
  ni = () => fe(`/projects/${ue}/payment-tokens`),
  ri = (e) => fe(`/projects/${ue}/wallet/${e}`),
  ii = () => fe(`/projects/${ue}/info`),
  si = () => fe(`/projects/${ue}/leaderboard`),
  oi = (e) => fe(`/projects/${ue}/wallet/${e}/stakes`);
var Tt;
((e) => {
  e.defaultTransactionHistoryItem = {
    id: 0,
    project: "",
    stage_name: null,
    wallet_address: "",
    transaction_hash: "",
    payment_token_name: "",
    payment_usd_amount: "123",
    tokens_bought: null,
    status: "pending",
    created_at: new Date().toISOString(),
    payment_token_amount: "123123",
    type: "",
  };
})(Tt || (Tt = {}));
const li = {
    stage: null,
    stageLoading: !0,
    paymentTokens: null,
    paymentTokensLoading: !0,
    presaleEnded: !1,
    leaderboard: null,
    info: null,
    infoLoading: !0,
  },
  J = ut({ ...li }),
  ai = (e) => {
    e ? J.setKey("presaleEnded", !1) : J.setKey("presaleEnded", !0),
      J.setKey("stage", e),
      J.setKey("stageLoading", !1);
  },
  ci = (e) => {
    J.setKey("leaderboard", e);
  },
  ui = (e) => {
    J.setKey("paymentTokens", e), J.setKey("paymentTokensLoading", !1);
  },
  fi = (e) => {
    J.setKey("info", e), J.setKey("infoLoading", !1);
  };
typeof window < "u" &&
  (ti()
    .then((e) => ai(e.data))
    .catch(() => {}),
  ni().then((e) => ui(e.data)),
  si()
    .then((e) => ci(e.data))
    .catch(() => {}),
  ii().then((e) => fi(e.data)));
const on = { connectWalletModalOpen: !1 },
  pt = ut({ ...on }),
  Bs = () => yn(pt, on),
  xs = () => {
    pt.setKey("connectWalletModalOpen", !0);
  },
  Is = () => {
    pt.setKey("connectWalletModalOpen", !1);
  },
  di = Pe({
    meta: {
      src: "/_astro/coinbase.jDMV70gh.svg",
      width: 800,
      height: 800,
      format: "svg",
    },
    attributes: { width: "800px", height: "800px", viewBox: "0 0 1024 1024" },
    children: `
   <circle cx="512" cy="512" r="512" style="fill:#0052ff" />
   <path d="M516.3 361.83c60.28 0 108.1 37.18 126.26 92.47H764C742 336.09 644.47 256 517.27 256 372.82 256 260 365.65 260 512.49S370 768 517.27 768c124.35 0 223.82-80.09 245.84-199.28H642.55c-17.22 55.3-65 93.45-125.32 93.45-83.23 0-141.56-63.89-141.56-149.68.04-86.77 57.43-150.66 140.63-150.66z" style="fill:#fff" />
`,
  }),
  hi = Pe({
    meta: {
      src: "/_astro/metamask.EhFEr6cn.svg",
      width: 31,
      height: 27,
      format: "svg",
    },
    attributes: {
      width: "31",
      height: "27",
      viewBox: "0 0 31 27",
      fill: "none",
    },
    children: `
<g clip-path="url(#clip0_1613_75281)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66992 24.5167L12.5703 25.5515V24.1983L12.8887 23.8799H15.1175V25.4719V26.5863H12.7295L9.78431 25.3127L8.66992 24.5167Z" fill="#CDBDB2" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4082 24.5167L17.5874 25.5515V24.1983L17.2691 23.8799H15.0403V25.4719V26.5863H17.4283L20.3733 25.3127L21.4082 24.5167Z" fill="#CDBDB2" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8907 21.5709L12.5723 24.1976L12.9702 23.8792H17.1093L17.5869 24.1976L17.2685 21.5709L16.6317 21.1729L13.4478 21.2525L12.8907 21.5709Z" fill="#393939" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7402 3.82031L12.6506 8.27786L13.5263 21.2526H16.6306L17.5858 8.27786L19.3369 3.82031H10.7402Z" fill="#F89C35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.38307 13.6116L0.154297 20.0591L5.72623 19.7407H9.30812V16.9548L9.14892 11.2236L8.35293 11.8604L2.38307 13.6116Z" fill="#F89D35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.60352 14.3271L13.1306 14.4863L12.4143 17.8295L9.30988 17.0335L6.60352 14.3271Z" fill="#D87C30" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.60352 14.4072L9.30988 16.9544V19.5016L6.60352 14.4072Z" fill="#EA8D3A" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.31055 17.0342L12.4945 17.8302L13.5294 21.253L12.8129 21.6509L9.31055 19.5813V17.0342Z" fill="#F89D35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.30671 19.5811L8.66992 24.5162L12.8887 21.5711L9.30671 19.5811Z" fill="#EB8F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.13 14.4863L13.528 21.2523L12.334 17.7897L13.13 14.4863Z" fill="#EA8E3A" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 19.6607L9.30804 19.5811L8.67125 24.5162L5.64648 19.6607Z" fill="#D87C30" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.90548 26.6659L8.67132 24.5166L5.64656 19.6611L0.154297 20.0591L1.90548 26.6659Z" fill="#EB8F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.653 8.27832L9.23036 11.1439L6.60352 14.3278L13.1306 14.5667L12.653 8.27832Z" fill="#E8821E" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66992 24.5164L12.8887 21.5713L12.5703 24.1185V25.5512L9.70478 24.994L8.66992 24.5164Z" fill="#DFCEC3" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4082 24.5164L17.2691 21.5713L17.5874 24.1185V25.5512L20.453 24.994L21.4082 24.5164Z" fill="#DFCEC3" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3763 15.9189L12.252 17.7498L9.14752 16.9538L11.3763 15.9189Z" fill="#393939" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.82617 0.0791016L12.6516 8.27773L10.8209 3.82019L1.82617 0.0791016Z" fill="#E88F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.82536 0.0791016L0.392578 4.45705L1.18857 9.23299L0.631375 9.55139L1.42737 10.2678L0.790573 10.825L1.66616 11.621L1.10897 12.0986L2.38255 13.6905L8.35248 11.8598C11.2711 9.52486 12.7039 8.33087 12.6508 8.2778C12.5978 8.22474 8.98928 5.49184 1.82536 0.0791016Z" fill="#8E5A30" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6951 13.6116L29.9238 20.0591L24.3519 19.7407H20.77V16.9548L20.9292 11.2236L21.7252 11.8604L27.6951 13.6116Z" fill="#F89D35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4746 14.3271L16.9475 14.4863L17.6638 17.8295L20.7682 17.0335L23.4746 14.3271Z" fill="#D87C30" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4746 14.4072L20.7682 16.9544V19.5016L23.4746 14.4072Z" fill="#EA8D3A" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7676 17.0332L17.5836 17.8292L16.5488 21.252L17.2652 21.6499L20.7676 19.5804V17.0332Z" fill="#F89D35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7675 19.5811L21.4043 24.5162L17.2651 21.6506L20.7675 19.5811Z" fill="#EB8F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9482 14.4873L16.5501 21.2533L17.7441 17.7907L16.9482 14.4873Z" fill="#EA8E3A" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4316 19.6607L20.7701 19.5811L21.4069 24.5162L24.4316 19.6607Z" fill="#D87C30" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1726 26.6659L21.4068 24.5166L24.4316 19.6611L29.9238 20.0591L28.1726 26.6659Z" fill="#EB8F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4251 8.27832L20.8478 11.1439L23.4746 14.3278L16.9475 14.5667L17.4251 8.27832Z" fill="#E8821E" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7018 15.9199L17.8262 17.7508L20.9306 16.9548L18.7018 15.9199Z" fill="#393939" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.252 0.0791016L17.4265 8.27773L19.2572 3.82019L28.252 0.0791016Z" fill="#E88F35" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.2489 0.0791016L29.6816 4.45705L28.8857 9.23299L29.4428 9.55139L28.6469 10.2678L29.2836 10.825L28.4081 11.621L28.9652 12.0986L27.6917 13.6905L21.7217 11.8598C18.8031 9.52486 17.3703 8.33087 17.4234 8.2778C17.4765 8.22474 21.0849 5.49184 28.2489 0.0791016Z" fill="#8E5A30" />
</g>
<defs>
<clipPath id="clip0_1613_75281">
<rect width="30" height="26.7453" fill="white" transform="translate(0.0722656)" />
</clipPath>
</defs>
`,
  }),
  pi = Pe({
    meta: {
      src: "/_astro/phantom.VkVF_iS1.svg",
      width: 37,
      height: 35,
      format: "svg",
    },
    attributes: {
      width: "37",
      height: "35",
      viewBox: "0 0 37 35",
      fill: "none",
    },
    children: `
<rect x="-0.00195312" width="37" height="35" rx="4" fill="#AB9FF2" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6279 21.5339C16.6771 22.9908 15.0839 24.8347 12.9639 24.8347C11.9617 24.8347 10.9981 24.4222 10.998 22.63C10.998 18.0657 17.2294 11.0001 23.0112 11C26.3004 10.9999 27.6111 13.282 27.6111 15.8736C27.6111 19.2 25.4525 23.0036 23.3069 23.0036C22.626 23.0036 22.2919 22.6297 22.2919 22.0367C22.2919 21.882 22.3175 21.7143 22.369 21.5339C21.6365 22.7844 20.2232 23.9451 18.8999 23.9451C17.9362 23.9451 17.448 23.339 17.448 22.4879C17.448 22.1785 17.5122 21.8563 17.6279 21.5339ZM21.9194 14.5094C21.396 14.5104 21.0392 14.955 21.0404 15.5893C21.0415 16.2237 21.3999 16.6798 21.9232 16.6789C22.434 16.678 22.7906 16.2206 22.7895 15.5863C22.7884 14.9519 22.4301 14.5085 21.9194 14.5094ZM24.6956 14.5064C24.1722 14.5073 23.8154 14.952 23.8165 15.5863C23.8176 16.2207 24.1759 16.6768 24.6994 16.6758C25.2101 16.6749 25.5668 16.2176 25.5656 15.5832C25.5645 14.9489 25.2063 14.5055 24.6956 14.5064Z" fill="white" />
`,
  }),
  mi = Pe({
    meta: {
      src: "/_astro/wallet-connect.BrwZHhL_.svg",
      width: 480,
      height: 332,
      format: "svg",
    },
    attributes: {
      fill: "none",
      height: "332",
      viewBox: "0 0 480 332",
      width: "480",
    },
    children:
      '<path d="m126.613 93.9842c62.622-61.3123 164.152-61.3123 226.775 0l7.536 7.3788c3.131 3.066 3.131 8.036 0 11.102l-25.781 25.242c-1.566 1.533-4.104 1.533-5.67 0l-10.371-10.154c-43.687-42.7734-114.517-42.7734-158.204 0l-11.107 10.874c-1.565 1.533-4.103 1.533-5.669 0l-25.781-25.242c-3.132-3.066-3.132-8.036 0-11.102zm280.093 52.2038 22.946 22.465c3.131 3.066 3.131 8.036 0 11.102l-103.463 101.301c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896c-.783-.767-2.052-.767-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0l-103.4657-101.302c-3.1311-3.066-3.1311-8.036 0-11.102l22.9456-22.466c3.1311-3.065 8.2077-3.065 11.3388 0l73.4333 71.897c.782.767 2.051.767 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897c.783.767 2.052.767 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0z" fill="#3396ff" />',
  }),
  gi = () => {
    const e = navigator.userAgent || navigator.vendor || window.opera || "";
    return !!(
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e.substring(0, 4)
      )
    );
  },
  wi = di,
  bi = hi,
  Ei = pi,
  yi = mi;
let We;
const Je = { current: void 0 },
  ln = async () => {
    if (Je.current) return Je.current;
    We ||
      (We = Ft(
        () => import("./connections.xMPUm19e.js").then((t) => t.aF),
        __vite__mapDeps([0, 1, 2, 3, 4, 5])
      ));
    const e = await We;
    return (
      (Je.current = e),
      document.dispatchEvent(new Event("wagmi-loaded")),
      Li(1),
      e
    );
  };
let Xe;
const Ge = { current: void 0 },
  Li = async (e) => {
    if (Ge.current) return (await Ge.current)(e);
    Xe ||
      (Xe = Ft(
        () => import("./public-client.oCvv0m2W.js"),
        __vite__mapDeps([6, 2, 1, 3, 7, 8, 9, 10, 11, 12, 13])
      ));
    const t = await Xe;
    return (Ge.current = t.getPublicClient), t.getPublicClient(e);
  },
  qs = [
    {
      label: "Metamask",
      key: "metamask",
      icon: bi,
      connectorIndex: 0,
      hide: () => {
        const e = window.ethereum;
        return !e || !e.isMetaMask;
      },
    },
    {
      label: "Wallet Connect",
      key: "walletconnect",
      icon: yi,
      connectorIndex: 1,
    },
    { label: "Coinbase", key: "coinbase", icon: wi, connectorIndex: 2 },
    {
      label: "Phantom Wallet",
      key: "phantom-wallet",
      icon: Ei,
      connectorIndex: 3,
      hide: () => typeof window > "u" || (!("phantom" in window) && !gi()),
      onClick:
        typeof window < "u" && !("phantom" in window)
          ? () => {
              const e = new URL(window.location.href);
              let t = `${e.origin}${e.pathname}`;
              (t += "?" + e.searchParams.toString()),
                e.search && (t += "&"),
                (t += `connect_wallet=${encodeURIComponent("phantom-wallet")}`),
                window.open(
                  `https://phantom.app/ul/browse/${encodeURIComponent(
                    t
                  )}?ref=${encodeURIComponent(window.location.href)}`,
                  "_blank"
                );
            }
          : void 0,
    },
  ];
typeof localStorage < "u" &&
  localStorage.getItem("connect-wallet-id-v2") &&
  ln().then(({ loadStoredConnection: e }) => {
    e();
  });
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ var oe = 9e15,
  ne = 1e9,
  ot = "0123456789abcdef",
  Te =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  ke =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  lt = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -oe,
    maxE: oe,
    crypto: !1,
  },
  an,
  X,
  v = !0,
  Ie = "[DecimalError] ",
  te = Ie + "Invalid argument: ",
  cn = Ie + "Precision limit exceeded",
  un = Ie + "crypto unavailable",
  fn = "[object Decimal]",
  U = Math.floor,
  _ = Math.pow,
  vi = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Si = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Ri = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  dn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Z = 1e7,
  y = 7,
  Ni = 9007199254740991,
  Ci = Te.length - 1,
  at = ke.length - 1,
  p = { toStringTag: fn };
p.absoluteValue = p.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), E(e);
};
p.ceil = function () {
  return E(new this.constructor(this), this.e + 1, 2);
};
p.clampedTo = p.clamp = function (e, t) {
  var n,
    r = this,
    i = r.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(te + t);
  return (n = r.cmp(e)), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
p.comparedTo = p.cmp = function (e) {
  var t,
    n,
    r,
    i,
    s = this,
    o = s.d,
    l = (e = new s.constructor(e)).d,
    c = s.s,
    a = e.s;
  if (!o || !l)
    return !c || !a ? NaN : c !== a ? c : o === l ? 0 : !o ^ (c < 0) ? 1 : -1;
  if (!o[0] || !l[0]) return o[0] ? c : l[0] ? -a : 0;
  if (c !== a) return c;
  if (s.e !== e.e) return (s.e > e.e) ^ (c < 0) ? 1 : -1;
  for (r = o.length, i = l.length, t = 0, n = r < i ? r : i; t < n; ++t)
    if (o[t] !== l[t]) return (o[t] > l[t]) ^ (c < 0) ? 1 : -1;
  return r === i ? 0 : (r > i) ^ (c < 0) ? 1 : -1;
};
p.cosine = p.cos = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return n.d
    ? n.d[0]
      ? ((e = r.precision),
        (t = r.rounding),
        (r.precision = e + Math.max(n.e, n.sd()) + y),
        (r.rounding = 1),
        (n = Oi(r, wn(r, n))),
        (r.precision = e),
        (r.rounding = t),
        E(X == 2 || X == 3 ? n.neg() : n, e, t, !0))
      : new r(1)
    : new r(NaN);
};
p.cubeRoot = p.cbrt = function () {
  var e,
    t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u = this,
    f = u.constructor;
  if (!u.isFinite() || u.isZero()) return new f(u);
  for (
    v = !1,
      s = u.s * _(u.s * u, 1 / 3),
      !s || Math.abs(s) == 1 / 0
        ? ((n = F(u.d)),
          (e = u.e),
          (s = (e - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"),
          (s = _(n, 1 / 3)),
          (e = U((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          s == 1 / 0
            ? (n = "5e" + e)
            : ((n = s.toExponential()),
              (n = n.slice(0, n.indexOf("e") + 1) + e)),
          (r = new f(n)),
          (r.s = u.s))
        : (r = new f(s.toString())),
      o = (e = f.precision) + 3;
    ;

  )
    if (
      ((l = r),
      (c = l.times(l).times(l)),
      (a = c.plus(u)),
      (r = C(a.plus(u).times(l), a.plus(c), o + 2, 1)),
      F(l.d).slice(0, o) === (n = F(r.d)).slice(0, o))
    )
      if (((n = n.slice(o - 3, o + 1)), n == "9999" || (!i && n == "4999"))) {
        if (!i && (E(l, e + 1, 0), l.times(l).times(l).eq(u))) {
          r = l;
          break;
        }
        (o += 4), (i = 1);
      } else {
        (!+n || (!+n.slice(1) && n.charAt(0) == "5")) &&
          (E(r, e + 1, 1), (t = !r.times(r).times(r).eq(u)));
        break;
      }
  return (v = !0), E(r, e, f.rounding, t);
};
p.decimalPlaces = p.dp = function () {
  var e,
    t = this.d,
    n = NaN;
  if (t) {
    if (((e = t.length - 1), (n = (e - U(this.e / y)) * y), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
p.dividedBy = p.div = function (e) {
  return C(this, new this.constructor(e));
};
p.dividedToIntegerBy = p.divToInt = function (e) {
  var t = this,
    n = t.constructor;
  return E(C(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
p.equals = p.eq = function (e) {
  return this.cmp(e) === 0;
};
p.floor = function () {
  return E(new this.constructor(this), this.e + 1, 3);
};
p.greaterThan = p.gt = function (e) {
  return this.cmp(e) > 0;
};
p.greaterThanOrEqualTo = p.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
p.hyperbolicCosine = p.cosh = function () {
  var e,
    t,
    n,
    r,
    i,
    s = this,
    o = s.constructor,
    l = new o(1);
  if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return l;
  (n = o.precision),
    (r = o.rounding),
    (o.precision = n + Math.max(s.e, s.sd()) + 4),
    (o.rounding = 1),
    (i = s.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / je(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (s = le(o, 1, s.times(t), new o(1), !0));
  for (var c, a = e, u = new o(8); a--; )
    (c = s.times(s)), (s = l.minus(c.times(u.minus(c.times(u)))));
  return E(s, (o.precision = n), (o.rounding = r), !0);
};
p.hyperbolicSine = p.sinh = function () {
  var e,
    t,
    n,
    r,
    i = this,
    s = i.constructor;
  if (!i.isFinite() || i.isZero()) return new s(i);
  if (
    ((t = s.precision),
    (n = s.rounding),
    (s.precision = t + Math.max(i.e, i.sd()) + 4),
    (s.rounding = 1),
    (r = i.d.length),
    r < 3)
  )
    i = le(s, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(r)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / je(5, e))),
      (i = le(s, 2, i, i, !0));
    for (var o, l = new s(5), c = new s(16), a = new s(20); e--; )
      (o = i.times(i)), (i = i.times(l.plus(o.times(c.times(o).plus(a)))));
  }
  return (s.precision = t), (s.rounding = n), E(i, t, n, !0);
};
p.hyperbolicTangent = p.tanh = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return n.isFinite()
    ? n.isZero()
      ? new r(n)
      : ((e = r.precision),
        (t = r.rounding),
        (r.precision = e + 7),
        (r.rounding = 1),
        C(n.sinh(), n.cosh(), (r.precision = e), (r.rounding = t)))
    : new r(n.s);
};
p.inverseCosine = p.acos = function () {
  var e = this,
    t = e.constructor,
    n = e.abs().cmp(1),
    r = t.precision,
    i = t.rounding;
  return n !== -1
    ? n === 0
      ? e.isNeg()
        ? z(t, r, i)
        : new t(0)
      : new t(NaN)
    : e.isZero()
    ? z(t, r + 4, i).times(0.5)
    : ((t.precision = r + 6),
      (t.rounding = 1),
      (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
      (t.precision = r),
      (t.rounding = i),
      e.times(2));
};
p.inverseHyperbolicCosine = p.acosh = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return n.lte(1)
    ? new r(n.eq(1) ? 0 : NaN)
    : n.isFinite()
    ? ((e = r.precision),
      (t = r.rounding),
      (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
      (r.rounding = 1),
      (v = !1),
      (n = n.times(n).minus(1).sqrt().plus(n)),
      (v = !0),
      (r.precision = e),
      (r.rounding = t),
      n.ln())
    : new r(n);
};
p.inverseHyperbolicSine = p.asinh = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return !n.isFinite() || n.isZero()
    ? new r(n)
    : ((e = r.precision),
      (t = r.rounding),
      (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
      (r.rounding = 1),
      (v = !1),
      (n = n.times(n).plus(1).sqrt().plus(n)),
      (v = !0),
      (r.precision = e),
      (r.rounding = t),
      n.ln());
};
p.inverseHyperbolicTangent = p.atanh = function () {
  var e,
    t,
    n,
    r,
    i = this,
    s = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = s.precision),
        (t = s.rounding),
        (r = i.sd()),
        Math.max(r, e) < 2 * -i.e - 1
          ? E(new s(i), e, t, !0)
          : ((s.precision = n = r - i.e),
            (i = C(i.plus(1), new s(1).minus(i), n + e, 1)),
            (s.precision = e + 4),
            (s.rounding = 1),
            (i = i.ln()),
            (s.precision = e),
            (s.rounding = t),
            i.times(0.5)))
    : new s(NaN);
};
p.inverseSine = p.asin = function () {
  var e,
    t,
    n,
    r,
    i = this,
    s = i.constructor;
  return i.isZero()
    ? new s(i)
    : ((t = i.abs().cmp(1)),
      (n = s.precision),
      (r = s.rounding),
      t !== -1
        ? t === 0
          ? ((e = z(s, n + 4, r).times(0.5)), (e.s = i.s), e)
          : new s(NaN)
        : ((s.precision = n + 6),
          (s.rounding = 1),
          (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (s.precision = n),
          (s.rounding = r),
          i.times(2)));
};
p.inverseTangent = p.atan = function () {
  var e,
    t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a = this,
    u = a.constructor,
    f = u.precision,
    h = u.rounding;
  if (a.isFinite()) {
    if (a.isZero()) return new u(a);
    if (a.abs().eq(1) && f + 4 <= at)
      return (o = z(u, f + 4, h).times(0.25)), (o.s = a.s), o;
  } else {
    if (!a.s) return new u(NaN);
    if (f + 4 <= at) return (o = z(u, f + 4, h).times(0.5)), (o.s = a.s), o;
  }
  for (
    u.precision = l = f + 10,
      u.rounding = 1,
      n = Math.min(28, (l / y + 2) | 0),
      e = n;
    e;
    --e
  )
    a = a.div(a.times(a).plus(1).sqrt().plus(1));
  for (
    v = !1, t = Math.ceil(l / y), r = 1, c = a.times(a), o = new u(a), i = a;
    e !== -1;

  )
    if (
      ((i = i.times(c)),
      (s = o.minus(i.div((r += 2)))),
      (i = i.times(c)),
      (o = s.plus(i.div((r += 2)))),
      o.d[t] !== void 0)
    )
      for (e = t; o.d[e] === s.d[e] && e--; );
  return (
    n && (o = o.times(2 << (n - 1))),
    (v = !0),
    E(o, (u.precision = f), (u.rounding = h), !0)
  );
};
p.isFinite = function () {
  return !!this.d;
};
p.isInteger = p.isInt = function () {
  return !!this.d && U(this.e / y) > this.d.length - 2;
};
p.isNaN = function () {
  return !this.s;
};
p.isNegative = p.isNeg = function () {
  return this.s < 0;
};
p.isPositive = p.isPos = function () {
  return this.s > 0;
};
p.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
p.lessThan = p.lt = function (e) {
  return this.cmp(e) < 0;
};
p.lessThanOrEqualTo = p.lte = function (e) {
  return this.cmp(e) < 1;
};
p.logarithm = p.log = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a = this,
    u = a.constructor,
    f = u.precision,
    h = u.rounding,
    w = 5;
  if (e == null) (e = new u(10)), (t = !0);
  else {
    if (((e = new u(e)), (n = e.d), e.s < 0 || !n || !n[0] || e.eq(1)))
      return new u(NaN);
    t = e.eq(10);
  }
  if (((n = a.d), a.s < 0 || !n || !n[0] || a.eq(1)))
    return new u(n && !n[0] ? -1 / 0 : a.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t)
    if (n.length > 1) s = !0;
    else {
      for (i = n[0]; i % 10 === 0; ) i /= 10;
      s = i !== 1;
    }
  if (
    ((v = !1),
    (l = f + w),
    (o = ee(a, l)),
    (r = t ? _e(u, l + 10) : ee(e, l)),
    (c = C(o, r, l, 1)),
    pe(c.d, (i = f), h))
  )
    do
      if (
        ((l += 10),
        (o = ee(a, l)),
        (r = t ? _e(u, l + 10) : ee(e, l)),
        (c = C(o, r, l, 1)),
        !s)
      ) {
        +F(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = E(c, f + 1, 0));
        break;
      }
    while (pe(c.d, (i += 10), h));
  return (v = !0), E(c, f, h);
};
p.minus = p.sub = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u,
    f,
    h,
    w = this,
    m = w.constructor;
  if (((e = new m(e)), !w.d || !e.d))
    return (
      !w.s || !e.s
        ? (e = new m(NaN))
        : w.d
        ? (e.s = -e.s)
        : (e = new m(e.d || w.s !== e.s ? w : NaN)),
      e
    );
  if (w.s != e.s) return (e.s = -e.s), w.plus(e);
  if (
    ((a = w.d), (h = e.d), (l = m.precision), (c = m.rounding), !a[0] || !h[0])
  ) {
    if (h[0]) e.s = -e.s;
    else if (a[0]) e = new m(w);
    else return new m(c === 3 ? -0 : 0);
    return v ? E(e, l, c) : e;
  }
  if (((n = U(e.e / y)), (u = U(w.e / y)), (a = a.slice()), (s = u - n), s)) {
    for (
      f = s < 0,
        f
          ? ((t = a), (s = -s), (o = h.length))
          : ((t = h), (n = u), (o = a.length)),
        r = Math.max(Math.ceil(l / y), o) + 2,
        s > r && ((s = r), (t.length = 1)),
        t.reverse(),
        r = s;
      r--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (r = a.length, o = h.length, f = r < o, f && (o = r), r = 0; r < o; r++)
      if (a[r] != h[r]) {
        f = a[r] < h[r];
        break;
      }
    s = 0;
  }
  for (
    f && ((t = a), (a = h), (h = t), (e.s = -e.s)),
      o = a.length,
      r = h.length - o;
    r > 0;
    --r
  )
    a[o++] = 0;
  for (r = h.length; r > s; ) {
    if (a[--r] < h[r]) {
      for (i = r; i && a[--i] === 0; ) a[i] = Z - 1;
      --a[i], (a[r] += Z);
    }
    a[r] -= h[r];
  }
  for (; a[--o] === 0; ) a.pop();
  for (; a[0] === 0; a.shift()) --n;
  return a[0]
    ? ((e.d = a), (e.e = qe(a, n)), v ? E(e, l, c) : e)
    : new m(c === 3 ? -0 : 0);
};
p.modulo = p.mod = function (e) {
  var t,
    n = this,
    r = n.constructor;
  return (
    (e = new r(e)),
    !n.d || !e.s || (e.d && !e.d[0])
      ? new r(NaN)
      : !e.d || (n.d && !n.d[0])
      ? E(new r(n), r.precision, r.rounding)
      : ((v = !1),
        r.modulo == 9
          ? ((t = C(n, e.abs(), 0, 3, 1)), (t.s *= e.s))
          : (t = C(n, e, 0, r.modulo, 1)),
        (t = t.times(e)),
        (v = !0),
        n.minus(t))
  );
};
p.naturalExponential = p.exp = function () {
  return ct(this);
};
p.naturalLogarithm = p.ln = function () {
  return ee(this);
};
p.negated = p.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), E(e);
};
p.plus = p.add = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u,
    f = this,
    h = f.constructor;
  if (((e = new h(e)), !f.d || !e.d))
    return (
      !f.s || !e.s
        ? (e = new h(NaN))
        : f.d || (e = new h(e.d || f.s === e.s ? f : NaN)),
      e
    );
  if (f.s != e.s) return (e.s = -e.s), f.minus(e);
  if (
    ((a = f.d), (u = e.d), (l = h.precision), (c = h.rounding), !a[0] || !u[0])
  )
    return u[0] || (e = new h(f)), v ? E(e, l, c) : e;
  if (((s = U(f.e / y)), (r = U(e.e / y)), (a = a.slice()), (i = s - r), i)) {
    for (
      i < 0
        ? ((n = a), (i = -i), (o = u.length))
        : ((n = u), (r = s), (o = a.length)),
        s = Math.ceil(l / y),
        o = s > o ? s + 1 : o + 1,
        i > o && ((i = o), (n.length = 1)),
        n.reverse();
      i--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    o = a.length,
      i = u.length,
      o - i < 0 && ((i = o), (n = u), (u = a), (a = n)),
      t = 0;
    i;

  )
    (t = ((a[--i] = a[i] + u[i] + t) / Z) | 0), (a[i] %= Z);
  for (t && (a.unshift(t), ++r), o = a.length; a[--o] == 0; ) a.pop();
  return (e.d = a), (e.e = qe(a, r)), v ? E(e, l, c) : e;
};
p.precision = p.sd = function (e) {
  var t,
    n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(te + e);
  return (
    n.d ? ((t = hn(n.d)), e && n.e + 1 > t && (t = n.e + 1)) : (t = NaN), t
  );
};
p.round = function () {
  var e = this,
    t = e.constructor;
  return E(new t(e), e.e + 1, t.rounding);
};
p.sine = p.sin = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return n.isFinite()
    ? n.isZero()
      ? new r(n)
      : ((e = r.precision),
        (t = r.rounding),
        (r.precision = e + Math.max(n.e, n.sd()) + y),
        (r.rounding = 1),
        (n = Ti(r, wn(r, n))),
        (r.precision = e),
        (r.rounding = t),
        E(X > 2 ? n.neg() : n, e, t, !0))
    : new r(NaN);
};
p.squareRoot = p.sqrt = function () {
  var e,
    t,
    n,
    r,
    i,
    s,
    o = this,
    l = o.d,
    c = o.e,
    a = o.s,
    u = o.constructor;
  if (a !== 1 || !l || !l[0])
    return new u(!a || (a < 0 && (!l || l[0])) ? NaN : l ? o : 1 / 0);
  for (
    v = !1,
      a = Math.sqrt(+o),
      a == 0 || a == 1 / 0
        ? ((t = F(l)),
          (t.length + c) % 2 == 0 && (t += "0"),
          (a = Math.sqrt(t)),
          (c = U((c + 1) / 2) - (c < 0 || c % 2)),
          a == 1 / 0
            ? (t = "5e" + c)
            : ((t = a.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + c)),
          (r = new u(t)))
        : (r = new u(a.toString())),
      n = (c = u.precision) + 3;
    ;

  )
    if (
      ((s = r),
      (r = s.plus(C(o, s, n + 2, 1)).times(0.5)),
      F(s.d).slice(0, n) === (t = F(r.d)).slice(0, n))
    )
      if (((t = t.slice(n - 3, n + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (E(s, c + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        (n += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (E(r, c + 1, 1), (e = !r.times(r).eq(o)));
        break;
      }
  return (v = !0), E(r, c, u.rounding, e);
};
p.tangent = p.tan = function () {
  var e,
    t,
    n = this,
    r = n.constructor;
  return n.isFinite()
    ? n.isZero()
      ? new r(n)
      : ((e = r.precision),
        (t = r.rounding),
        (r.precision = e + 10),
        (r.rounding = 1),
        (n = n.sin()),
        (n.s = 1),
        (n = C(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
        (r.precision = e),
        (r.rounding = t),
        E(X == 2 || X == 4 ? n.neg() : n, e, t, !0))
    : new r(NaN);
};
p.times = p.mul = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u = this,
    f = u.constructor,
    h = u.d,
    w = (e = new f(e)).d;
  if (((e.s *= u.s), !h || !h[0] || !w || !w[0]))
    return new f(
      !e.s || (h && !h[0] && !w) || (w && !w[0] && !h)
        ? NaN
        : !h || !w
        ? e.s / 0
        : e.s * 0
    );
  for (
    n = U(u.e / y) + U(e.e / y),
      c = h.length,
      a = w.length,
      c < a && ((s = h), (h = w), (w = s), (o = c), (c = a), (a = o)),
      s = [],
      o = c + a,
      r = o;
    r--;

  )
    s.push(0);
  for (r = a; --r >= 0; ) {
    for (t = 0, i = c + r; i > r; )
      (l = s[i] + w[r] * h[i - r - 1] + t),
        (s[i--] = l % Z | 0),
        (t = (l / Z) | 0);
    s[i] = (s[i] + t) % Z | 0;
  }
  for (; !s[--o]; ) s.pop();
  return (
    t ? ++n : s.shift(),
    (e.d = s),
    (e.e = qe(s, n)),
    v ? E(e, f.precision, f.rounding) : e
  );
};
p.toBinary = function (e, t) {
  return mt(this, 2, e, t);
};
p.toDecimalPlaces = p.toDP = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    (n = new r(n)),
    e === void 0
      ? n
      : (I(e, 0, ne),
        t === void 0 ? (t = r.rounding) : I(t, 0, 8),
        E(n, e + n.e + 1, t))
  );
};
p.toExponential = function (e, t) {
  var n,
    r = this,
    i = r.constructor;
  return (
    e === void 0
      ? (n = K(r, !0))
      : (I(e, 0, ne),
        t === void 0 ? (t = i.rounding) : I(t, 0, 8),
        (r = E(new i(r), e + 1, t)),
        (n = K(r, !0, e + 1))),
    r.isNeg() && !r.isZero() ? "-" + n : n
  );
};
p.toFixed = function (e, t) {
  var n,
    r,
    i = this,
    s = i.constructor;
  return (
    e === void 0
      ? (n = K(i))
      : (I(e, 0, ne),
        t === void 0 ? (t = s.rounding) : I(t, 0, 8),
        (r = E(new s(i), e + i.e + 1, t)),
        (n = K(r, !1, e + r.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + n : n
  );
};
p.toFraction = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u,
    f,
    h,
    w = this,
    m = w.d,
    g = w.constructor;
  if (!m) return new g(w);
  if (
    ((a = n = new g(1)),
    (r = c = new g(0)),
    (t = new g(r)),
    (s = t.e = hn(m) - w.e - 1),
    (o = s % y),
    (t.d[0] = _(10, o < 0 ? y + o : o)),
    e == null)
  )
    e = s > 0 ? t : a;
  else {
    if (((l = new g(e)), !l.isInt() || l.lt(a))) throw Error(te + l);
    e = l.gt(t) ? (s > 0 ? t : a) : l;
  }
  for (
    v = !1,
      l = new g(F(m)),
      u = g.precision,
      g.precision = s = m.length * y * 2;
    (f = C(l, t, 0, 1, 1)), (i = n.plus(f.times(r))), i.cmp(e) != 1;

  )
    (n = r),
      (r = i),
      (i = a),
      (a = c.plus(f.times(i))),
      (c = i),
      (i = t),
      (t = l.minus(f.times(i))),
      (l = i);
  return (
    (i = C(e.minus(n), r, 0, 1, 1)),
    (c = c.plus(i.times(a))),
    (n = n.plus(i.times(r))),
    (c.s = a.s = w.s),
    (h =
      C(a, r, s, 1).minus(w).abs().cmp(C(c, n, s, 1).minus(w).abs()) < 1
        ? [a, r]
        : [c, n]),
    (g.precision = u),
    (v = !0),
    h
  );
};
p.toHexadecimal = p.toHex = function (e, t) {
  return mt(this, 16, e, t);
};
p.toNearest = function (e, t) {
  var n = this,
    r = n.constructor;
  if (((n = new r(n)), e == null)) {
    if (!n.d) return n;
    (e = new r(1)), (t = r.rounding);
  } else {
    if (((e = new r(e)), t === void 0 ? (t = r.rounding) : I(t, 0, 8), !n.d))
      return e.s ? n : e;
    if (!e.d) return e.s && (e.s = n.s), e;
  }
  return (
    e.d[0]
      ? ((v = !1), (n = C(n, e, 0, t, 1).times(e)), (v = !0), E(n))
      : ((e.s = n.s), (n = e)),
    n
  );
};
p.toNumber = function () {
  return +this;
};
p.toOctal = function (e, t) {
  return mt(this, 8, e, t);
};
p.toPower = p.pow = function (e) {
  var t,
    n,
    r,
    i,
    s,
    o,
    l = this,
    c = l.constructor,
    a = +(e = new c(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new c(_(+l, a));
  if (((l = new c(l)), l.eq(1))) return l;
  if (((r = c.precision), (s = c.rounding), e.eq(1))) return E(l, r, s);
  if (((t = U(e.e / y)), t >= e.d.length - 1 && (n = a < 0 ? -a : a) <= Ni))
    return (i = pn(c, l, n, r)), e.s < 0 ? new c(1).div(i) : E(i, r, s);
  if (((o = l.s), o < 0)) {
    if (t < e.d.length - 1) return new c(NaN);
    if (
      ((e.d[t] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
    )
      return (l.s = o), l;
  }
  return (
    (n = _(+l, a)),
    (t =
      n == 0 || !isFinite(n)
        ? U(a * (Math.log("0." + F(l.d)) / Math.LN10 + l.e + 1))
        : new c(n + "").e),
    t > c.maxE + 1 || t < c.minE - 1
      ? new c(t > 0 ? o / 0 : 0)
      : ((v = !1),
        (c.rounding = l.s = 1),
        (n = Math.min(12, (t + "").length)),
        (i = ct(e.times(ee(l, r + n)), r)),
        i.d &&
          ((i = E(i, r + 5, 1)),
          pe(i.d, r, s) &&
            ((t = r + 10),
            (i = E(ct(e.times(ee(l, t + n)), t), t + 5, 1)),
            +F(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = E(i, r + 1, 0)))),
        (i.s = o),
        (v = !0),
        (c.rounding = s),
        E(i, r, s))
  );
};
p.toPrecision = function (e, t) {
  var n,
    r = this,
    i = r.constructor;
  return (
    e === void 0
      ? (n = K(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
      : (I(e, 1, ne),
        t === void 0 ? (t = i.rounding) : I(t, 0, 8),
        (r = E(new i(r), e, t)),
        (n = K(r, e <= r.e || r.e <= i.toExpNeg, e))),
    r.isNeg() && !r.isZero() ? "-" + n : n
  );
};
p.toSignificantDigits = p.toSD = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    e === void 0
      ? ((e = r.precision), (t = r.rounding))
      : (I(e, 1, ne), t === void 0 ? (t = r.rounding) : I(t, 0, 8)),
    E(new r(n), e, t)
  );
};
p.toString = function () {
  var e = this,
    t = e.constructor,
    n = K(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
p.truncated = p.trunc = function () {
  return E(new this.constructor(this), this.e + 1, 1);
};
p.valueOf = p.toJSON = function () {
  var e = this,
    t = e.constructor,
    n = K(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function F(e) {
  var t,
    n,
    r,
    i = e.length - 1,
    s = "",
    o = e[0];
  if (i > 0) {
    for (s += o, t = 1; t < i; t++)
      (r = e[t] + ""), (n = y - r.length), n && (s += Y(n)), (s += r);
    (o = e[t]), (r = o + ""), (n = y - r.length), n && (s += Y(n));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return s + o;
}
function I(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(te + e);
}
function pe(e, t, n, r) {
  var i, s, o, l;
  for (s = e[0]; s >= 10; s /= 10) --t;
  return (
    --t < 0 ? ((t += y), (i = 0)) : ((i = Math.ceil((t + 1) / y)), (t %= y)),
    (s = _(10, y - t)),
    (l = e[i] % s | 0),
    r == null
      ? t < 3
        ? (t == 0 ? (l = (l / 100) | 0) : t == 1 && (l = (l / 10) | 0),
          (o =
            (n < 4 && l == 99999) ||
            (n > 3 && l == 49999) ||
            l == 5e4 ||
            l == 0))
        : (o =
            (((n < 4 && l + 1 == s) || (n > 3 && l + 1 == s / 2)) &&
              ((e[i + 1] / s / 100) | 0) == _(10, t - 2) - 1) ||
            ((l == s / 2 || l == 0) && ((e[i + 1] / s / 100) | 0) == 0))
      : t < 4
      ? (t == 0
          ? (l = (l / 1e3) | 0)
          : t == 1
          ? (l = (l / 100) | 0)
          : t == 2 && (l = (l / 10) | 0),
        (o = ((r || n < 4) && l == 9999) || (!r && n > 3 && l == 4999)))
      : (o =
          (((r || n < 4) && l + 1 == s) || (!r && n > 3 && l + 1 == s / 2)) &&
          ((e[i + 1] / s / 1e3) | 0) == _(10, t - 3) - 1),
    o
  );
}
function Ne(e, t, n) {
  for (var r, i = [0], s, o = 0, l = e.length; o < l; ) {
    for (s = i.length; s--; ) i[s] *= t;
    for (i[0] += ot.indexOf(e.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 &&
        (i[r + 1] === void 0 && (i[r + 1] = 0),
        (i[r + 1] += (i[r] / n) | 0),
        (i[r] %= n));
  }
  return i.reverse();
}
function Oi(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  (r = t.d.length),
    r < 32
      ? ((n = Math.ceil(r / 3)), (i = (1 / je(4, n)).toString()))
      : ((n = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += n),
    (t = le(e, 1, t.times(i), new e(1)));
  for (var s = n; s--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return (e.precision -= n), t;
}
var C = (function () {
  function e(r, i, s) {
    var o,
      l = 0,
      c = r.length;
    for (r = r.slice(); c--; )
      (o = r[c] * i + l), (r[c] = o % s | 0), (l = (o / s) | 0);
    return l && r.unshift(l), r;
  }
  function t(r, i, s, o) {
    var l, c;
    if (s != o) c = s > o ? 1 : -1;
    else
      for (l = c = 0; l < s; l++)
        if (r[l] != i[l]) {
          c = r[l] > i[l] ? 1 : -1;
          break;
        }
    return c;
  }
  function n(r, i, s, o) {
    for (var l = 0; s--; )
      (r[s] -= l), (l = r[s] < i[s] ? 1 : 0), (r[s] = l * o + r[s] - i[s]);
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function (r, i, s, o, l, c) {
    var a,
      u,
      f,
      h,
      w,
      m,
      g,
      b,
      S,
      N,
      L,
      O,
      k,
      P,
      q,
      W,
      G,
      Ze,
      j,
      Ee,
      ye = r.constructor,
      $e = r.s == i.s ? 1 : -1,
      M = r.d,
      A = i.d;
    if (!M || !M[0] || !A || !A[0])
      return new ye(
        !r.s || !i.s || (M ? A && M[0] == A[0] : !A)
          ? NaN
          : (M && M[0] == 0) || !A
          ? $e * 0
          : $e / 0
      );
    for (
      c
        ? ((w = 1), (u = r.e - i.e))
        : ((c = Z), (w = y), (u = U(r.e / w) - U(i.e / w))),
        j = A.length,
        G = M.length,
        S = new ye($e),
        N = S.d = [],
        f = 0;
      A[f] == (M[f] || 0);
      f++
    );
    if (
      (A[f] > (M[f] || 0) && u--,
      s == null
        ? ((P = s = ye.precision), (o = ye.rounding))
        : l
        ? (P = s + (r.e - i.e) + 1)
        : (P = s),
      P < 0)
    )
      N.push(1), (m = !0);
    else {
      if (((P = (P / w + 2) | 0), (f = 0), j == 1)) {
        for (h = 0, A = A[0], P++; (f < G || h) && P--; f++)
          (q = h * c + (M[f] || 0)), (N[f] = (q / A) | 0), (h = q % A | 0);
        m = h || f < G;
      } else {
        for (
          h = (c / (A[0] + 1)) | 0,
            h > 1 &&
              ((A = e(A, h, c)),
              (M = e(M, h, c)),
              (j = A.length),
              (G = M.length)),
            W = j,
            L = M.slice(0, j),
            O = L.length;
          O < j;

        )
          L[O++] = 0;
        (Ee = A.slice()), Ee.unshift(0), (Ze = A[0]), A[1] >= c / 2 && ++Ze;
        do
          (h = 0),
            (a = t(A, L, j, O)),
            a < 0
              ? ((k = L[0]),
                j != O && (k = k * c + (L[1] || 0)),
                (h = (k / Ze) | 0),
                h > 1
                  ? (h >= c && (h = c - 1),
                    (g = e(A, h, c)),
                    (b = g.length),
                    (O = L.length),
                    (a = t(g, L, b, O)),
                    a == 1 && (h--, n(g, j < b ? Ee : A, b, c)))
                  : (h == 0 && (a = h = 1), (g = A.slice())),
                (b = g.length),
                b < O && g.unshift(0),
                n(L, g, O, c),
                a == -1 &&
                  ((O = L.length),
                  (a = t(A, L, j, O)),
                  a < 1 && (h++, n(L, j < O ? Ee : A, O, c))),
                (O = L.length))
              : a === 0 && (h++, (L = [0])),
            (N[f++] = h),
            a && L[0] ? (L[O++] = M[W] || 0) : ((L = [M[W]]), (O = 1));
        while ((W++ < G || L[0] !== void 0) && P--);
        m = L[0] !== void 0;
      }
      N[0] || N.shift();
    }
    if (w == 1) (S.e = u), (an = m);
    else {
      for (f = 1, h = N[0]; h >= 10; h /= 10) f++;
      (S.e = f + u * w - 1), E(S, l ? s + S.e + 1 : s, o, m);
    }
    return S;
  };
})();
function E(e, t, n, r) {
  var i,
    s,
    o,
    l,
    c,
    a,
    u,
    f,
    h,
    w = e.constructor;
  e: if (t != null) {
    if (((f = e.d), !f)) return e;
    for (i = 1, l = f[0]; l >= 10; l /= 10) i++;
    if (((s = t - i), s < 0))
      (s += y),
        (o = t),
        (u = f[(h = 0)]),
        (c = (u / _(10, i - o - 1)) % 10 | 0);
    else if (((h = Math.ceil((s + 1) / y)), (l = f.length), h >= l))
      if (r) {
        for (; l++ <= h; ) f.push(0);
        (u = c = 0), (i = 1), (s %= y), (o = s - y + 1);
      } else break e;
    else {
      for (u = l = f[h], i = 1; l >= 10; l /= 10) i++;
      (s %= y),
        (o = s - y + i),
        (c = o < 0 ? 0 : (u / _(10, i - o - 1)) % 10 | 0);
    }
    if (
      ((r =
        r ||
        t < 0 ||
        f[h + 1] !== void 0 ||
        (o < 0 ? u : u % _(10, i - o - 1))),
      (a =
        n < 4
          ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (n == 4 ||
                r ||
                (n == 6 &&
                  (s > 0 ? (o > 0 ? u / _(10, i - o) : 0) : f[h - 1]) % 10 &
                    1) ||
                n == (e.s < 0 ? 8 : 7)))),
      t < 1 || !f[0])
    )
      return (
        (f.length = 0),
        a
          ? ((t -= e.e + 1), (f[0] = _(10, (y - (t % y)) % y)), (e.e = -t || 0))
          : (f[0] = e.e = 0),
        e
      );
    if (
      (s == 0
        ? ((f.length = h), (l = 1), h--)
        : ((f.length = h + 1),
          (l = _(10, y - s)),
          (f[h] = o > 0 ? ((u / _(10, i - o)) % _(10, o) | 0) * l : 0)),
      a)
    )
      for (;;)
        if (h == 0) {
          for (s = 1, o = f[0]; o >= 10; o /= 10) s++;
          for (o = f[0] += l, l = 1; o >= 10; o /= 10) l++;
          s != l && (e.e++, f[0] == Z && (f[0] = 1));
          break;
        } else {
          if (((f[h] += l), f[h] != Z)) break;
          (f[h--] = 0), (l = 1);
        }
    for (s = f.length; f[--s] === 0; ) f.pop();
  }
  return (
    v &&
      (e.e > w.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < w.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function K(e, t, n) {
  if (!e.isFinite()) return gn(e);
  var r,
    i = e.e,
    s = F(e.d),
    o = s.length;
  return (
    t
      ? (n && (r = n - o) > 0
          ? (s = s.charAt(0) + "." + s.slice(1) + Y(r))
          : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
        (s = s + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
      ? ((s = "0." + Y(-i - 1) + s), n && (r = n - o) > 0 && (s += Y(r)))
      : i >= o
      ? ((s += Y(i + 1 - o)), n && (r = n - i - 1) > 0 && (s = s + "." + Y(r)))
      : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
        n && (r = n - o) > 0 && (i + 1 === o && (s += "."), (s += Y(r)))),
    s
  );
}
function qe(e, t) {
  var n = e[0];
  for (t *= y; n >= 10; n /= 10) t++;
  return t;
}
function _e(e, t, n) {
  if (t > Ci) throw ((v = !0), n && (e.precision = n), Error(cn));
  return E(new e(Te), t, 1, !0);
}
function z(e, t, n) {
  if (t > at) throw Error(cn);
  return E(new e(ke), t, n, !0);
}
function hn(e) {
  var t = e.length - 1,
    n = t * y + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function Y(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function pn(e, t, n, r) {
  var i,
    s = new e(1),
    o = Math.ceil(r / y + 4);
  for (v = !1; ; ) {
    if (
      (n % 2 && ((s = s.times(t)), _t(s.d, o) && (i = !0)),
      (n = U(n / 2)),
      n === 0)
    ) {
      (n = s.d.length - 1), i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    (t = t.times(t)), _t(t.d, o);
  }
  return (v = !0), s;
}
function kt(e) {
  return e.d[e.d.length - 1] & 1;
}
function mn(e, t, n) {
  for (var r, i, s = new e(t[0]), o = 0; ++o < t.length; ) {
    if (((i = new e(t[o])), !i.s)) {
      s = i;
      break;
    }
    (r = s.cmp(i)), (r === n || (r === 0 && s.s === n)) && (s = i);
  }
  return s;
}
function ct(e, t) {
  var n,
    r,
    i,
    s,
    o,
    l,
    c,
    a = 0,
    u = 0,
    f = 0,
    h = e.constructor,
    w = h.rounding,
    m = h.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new h(
      e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN
    );
  for (
    t == null ? ((v = !1), (c = m)) : (c = t), l = new h(0.03125);
    e.e > -2;

  )
    (e = e.times(l)), (f += 5);
  for (
    r = ((Math.log(_(2, f)) / Math.LN10) * 2 + 5) | 0,
      c += r,
      n = s = o = new h(1),
      h.precision = c;
    ;

  ) {
    if (
      ((s = E(s.times(e), c, 1)),
      (n = n.times(++u)),
      (l = o.plus(C(s, n, c, 1))),
      F(l.d).slice(0, c) === F(o.d).slice(0, c))
    ) {
      for (i = f; i--; ) o = E(o.times(o), c, 1);
      if (t == null)
        if (a < 3 && pe(o.d, c - r, w, a))
          (h.precision = c += 10), (n = s = l = new h(1)), (u = 0), a++;
        else return E(o, (h.precision = m), w, (v = !0));
      else return (h.precision = m), o;
    }
    o = l;
  }
}
function ee(e, t) {
  var n,
    r,
    i,
    s,
    o,
    l,
    c,
    a,
    u,
    f,
    h,
    w = 1,
    m = 10,
    g = e,
    b = g.d,
    S = g.constructor,
    N = S.rounding,
    L = S.precision;
  if (g.s < 0 || !b || !b[0] || (!g.e && b[0] == 1 && b.length == 1))
    return new S(b && !b[0] ? -1 / 0 : g.s != 1 ? NaN : b ? 0 : g);
  if (
    (t == null ? ((v = !1), (u = L)) : (u = t),
    (S.precision = u += m),
    (n = F(b)),
    (r = n.charAt(0)),
    Math.abs((s = g.e)) < 15e14)
  ) {
    for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3); )
      (g = g.times(e)), (n = F(g.d)), (r = n.charAt(0)), w++;
    (s = g.e),
      r > 1 ? ((g = new S("0." + n)), s++) : (g = new S(r + "." + n.slice(1)));
  } else
    return (
      (a = _e(S, u + 2, L).times(s + "")),
      (g = ee(new S(r + "." + n.slice(1)), u - m).plus(a)),
      (S.precision = L),
      t == null ? E(g, L, N, (v = !0)) : g
    );
  for (
    f = g,
      c = o = g = C(g.minus(1), g.plus(1), u, 1),
      h = E(g.times(g), u, 1),
      i = 3;
    ;

  ) {
    if (
      ((o = E(o.times(h), u, 1)),
      (a = c.plus(C(o, new S(i), u, 1))),
      F(a.d).slice(0, u) === F(c.d).slice(0, u))
    )
      if (
        ((c = c.times(2)),
        s !== 0 && (c = c.plus(_e(S, u + 2, L).times(s + ""))),
        (c = C(c, new S(w), u, 1)),
        t == null)
      )
        if (pe(c.d, u - m, N, l))
          (S.precision = u += m),
            (a = o = g = C(f.minus(1), f.plus(1), u, 1)),
            (h = E(g.times(g), u, 1)),
            (i = l = 1);
        else return E(c, (S.precision = L), N, (v = !0));
      else return (S.precision = L), c;
    (c = a), (i += 2);
  }
}
function gn(e) {
  return String((e.s * e.s) / 0);
}
function Ce(e, t) {
  var n, r, i;
  for (
    (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (r = t.search(/e/i)) > 0
        ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
        : n < 0 && (n = t.length),
      r = 0;
    t.charCodeAt(r) === 48;
    r++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(r, i)), t)) {
    if (
      ((i -= r),
      (e.e = n = n - r - 1),
      (e.d = []),
      (r = (n + 1) % y),
      n < 0 && (r += y),
      r < i)
    ) {
      for (r && e.d.push(+t.slice(0, r)), i -= y; r < i; )
        e.d.push(+t.slice(r, (r += y)));
      (t = t.slice(r)), (r = y - t.length);
    } else r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t),
      v &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Ai(e, t) {
  var n, r, i, s, o, l, c, a, u;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), dn.test(t))) return Ce(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Si.test(t)) (n = 16), (t = t.toLowerCase());
  else if (vi.test(t)) n = 2;
  else if (Ri.test(t)) n = 8;
  else throw Error(te + t);
  for (
    s = t.search(/p/i),
      s > 0
        ? ((c = +t.slice(s + 1)), (t = t.substring(2, s)))
        : (t = t.slice(2)),
      s = t.indexOf("."),
      o = s >= 0,
      r = e.constructor,
      o &&
        ((t = t.replace(".", "")),
        (l = t.length),
        (s = l - s),
        (i = pn(r, new r(n), s, s * 2))),
      a = Ne(t, n, Z),
      u = a.length - 1,
      s = u;
    a[s] === 0;
    --s
  )
    a.pop();
  return s < 0
    ? new r(e.s * 0)
    : ((e.e = qe(a, u)),
      (e.d = a),
      (v = !1),
      o && (e = C(e, i, l * 4)),
      c && (e = e.times(Math.abs(c) < 54 ? _(2, c) : He.pow(2, c))),
      (v = !0),
      e);
}
function Ti(e, t) {
  var n,
    r = t.d.length;
  if (r < 3) return t.isZero() ? t : le(e, 2, t, t);
  (n = 1.4 * Math.sqrt(r)),
    (n = n > 16 ? 16 : n | 0),
    (t = t.times(1 / je(5, n))),
    (t = le(e, 2, t, t));
  for (var i, s = new e(5), o = new e(16), l = new e(20); n--; )
    (i = t.times(t)), (t = t.times(s.plus(i.times(o.times(i).minus(l)))));
  return t;
}
function le(e, t, n, r, i) {
  var s,
    o,
    l,
    c,
    a = e.precision,
    u = Math.ceil(a / y);
  for (v = !1, c = n.times(n), l = new e(r); ; ) {
    if (
      ((o = C(l.times(c), new e(t++ * t++), a, 1)),
      (l = i ? r.plus(o) : r.minus(o)),
      (r = C(o.times(c), new e(t++ * t++), a, 1)),
      (o = l.plus(r)),
      o.d[u] !== void 0)
    ) {
      for (s = u; o.d[s] === l.d[s] && s--; );
      if (s == -1) break;
    }
    (s = l), (l = r), (r = o), (o = s);
  }
  return (v = !0), (o.d.length = u + 1), o;
}
function je(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function wn(e, t) {
  var n,
    r = t.s < 0,
    i = z(e, e.precision, 1),
    s = i.times(0.5);
  if (((t = t.abs()), t.lte(s))) return (X = r ? 4 : 1), t;
  if (((n = t.divToInt(i)), n.isZero())) X = r ? 3 : 2;
  else {
    if (((t = t.minus(n.times(i))), t.lte(s)))
      return (X = kt(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
    X = kt(n) ? (r ? 1 : 4) : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function mt(e, t, n, r) {
  var i,
    s,
    o,
    l,
    c,
    a,
    u,
    f,
    h,
    w = e.constructor,
    m = n !== void 0;
  if (
    (m
      ? (I(n, 1, ne), r === void 0 ? (r = w.rounding) : I(r, 0, 8))
      : ((n = w.precision), (r = w.rounding)),
    !e.isFinite())
  )
    u = gn(e);
  else {
    for (
      u = K(e),
        o = u.indexOf("."),
        m
          ? ((i = 2), t == 16 ? (n = n * 4 - 3) : t == 8 && (n = n * 3 - 2))
          : (i = t),
        o >= 0 &&
          ((u = u.replace(".", "")),
          (h = new w(1)),
          (h.e = u.length - o),
          (h.d = Ne(K(h), 10, i)),
          (h.e = h.d.length)),
        f = Ne(u, 10, i),
        s = c = f.length;
      f[--c] == 0;

    )
      f.pop();
    if (!f[0]) u = m ? "0p+0" : "0";
    else {
      if (
        (o < 0
          ? s--
          : ((e = new w(e)),
            (e.d = f),
            (e.e = s),
            (e = C(e, h, n, r, 0, i)),
            (f = e.d),
            (s = e.e),
            (a = an)),
        (o = f[n]),
        (l = i / 2),
        (a = a || f[n + 1] !== void 0),
        (a =
          r < 4
            ? (o !== void 0 || a) && (r === 0 || r === (e.s < 0 ? 3 : 2))
            : o > l ||
              (o === l &&
                (r === 4 ||
                  a ||
                  (r === 6 && f[n - 1] & 1) ||
                  r === (e.s < 0 ? 8 : 7)))),
        (f.length = n),
        a)
      )
        for (; ++f[--n] > i - 1; ) (f[n] = 0), n || (++s, f.unshift(1));
      for (c = f.length; !f[c - 1]; --c);
      for (o = 0, u = ""; o < c; o++) u += ot.charAt(f[o]);
      if (m) {
        if (c > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
            for (f = Ne(u, i, t), c = f.length; !f[c - 1]; --c);
            for (o = 1, u = "1."; o < c; o++) u += ot.charAt(f[o]);
          } else u = u.charAt(0) + "." + u.slice(1);
        u = u + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; ) u = "0" + u;
        u = "0." + u;
      } else if (++s > c) for (s -= c; s--; ) u += "0";
      else s < c && (u = u.slice(0, s) + "." + u.slice(s));
    }
    u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
  }
  return e.s < 0 ? "-" + u : u;
}
function _t(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function ki(e) {
  return new this(e).abs();
}
function _i(e) {
  return new this(e).acos();
}
function Pi(e) {
  return new this(e).acosh();
}
function Fi(e, t) {
  return new this(e).plus(t);
}
function Mi(e) {
  return new this(e).asin();
}
function Di(e) {
  return new this(e).asinh();
}
function Ui(e) {
  return new this(e).atan();
}
function Bi(e) {
  return new this(e).atanh();
}
function xi(e, t) {
  (e = new this(e)), (t = new this(t));
  var n,
    r = this.precision,
    i = this.rounding,
    s = r + 4;
  return (
    !e.s || !t.s
      ? (n = new this(NaN))
      : !e.d && !t.d
      ? ((n = z(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)), (n.s = e.s))
      : !t.d || e.isZero()
      ? ((n = t.s < 0 ? z(this, r, i) : new this(0)), (n.s = e.s))
      : !e.d || t.isZero()
      ? ((n = z(this, s, 1).times(0.5)), (n.s = e.s))
      : t.s < 0
      ? ((this.precision = s),
        (this.rounding = 1),
        (n = this.atan(C(e, t, s, 1))),
        (t = z(this, s, 1)),
        (this.precision = r),
        (this.rounding = i),
        (n = e.s < 0 ? n.minus(t) : n.plus(t)))
      : (n = this.atan(C(e, t, s, 1))),
    n
  );
}
function Ii(e) {
  return new this(e).cbrt();
}
function qi(e) {
  return E((e = new this(e)), e.e + 1, 2);
}
function ji(e, t, n) {
  return new this(e).clamp(t, n);
}
function Hi(e) {
  if (!e || typeof e != "object") throw Error(Ie + "Object expected");
  var t,
    n,
    r,
    i = e.defaults === !0,
    s = [
      "precision",
      1,
      ne,
      "rounding",
      0,
      8,
      "toExpNeg",
      -oe,
      0,
      "toExpPos",
      0,
      oe,
      "maxE",
      0,
      oe,
      "minE",
      -oe,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < s.length; t += 3)
    if (((n = s[t]), i && (this[n] = lt[n]), (r = e[n]) !== void 0))
      if (U(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
      else throw Error(te + n + ": " + r);
  if (((n = "crypto"), i && (this[n] = lt[n]), (r = e[n]) !== void 0))
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[n] = !0;
        else throw Error(un);
      else this[n] = !1;
    else throw Error(te + n + ": " + r);
  return this;
}
function Zi(e) {
  return new this(e).cos();
}
function $i(e) {
  return new this(e).cosh();
}
function bn(e) {
  var t, n, r;
  function i(s) {
    var o,
      l,
      c,
      a = this;
    if (!(a instanceof i)) return new i(s);
    if (((a.constructor = i), Pt(s))) {
      (a.s = s.s),
        v
          ? !s.d || s.e > i.maxE
            ? ((a.e = NaN), (a.d = null))
            : s.e < i.minE
            ? ((a.e = 0), (a.d = [0]))
            : ((a.e = s.e), (a.d = s.d.slice()))
          : ((a.e = s.e), (a.d = s.d ? s.d.slice() : s.d));
      return;
    }
    if (((c = typeof s), c === "number")) {
      if (s === 0) {
        (a.s = 1 / s < 0 ? -1 : 1), (a.e = 0), (a.d = [0]);
        return;
      }
      if ((s < 0 ? ((s = -s), (a.s = -1)) : (a.s = 1), s === ~~s && s < 1e7)) {
        for (o = 0, l = s; l >= 10; l /= 10) o++;
        v
          ? o > i.maxE
            ? ((a.e = NaN), (a.d = null))
            : o < i.minE
            ? ((a.e = 0), (a.d = [0]))
            : ((a.e = o), (a.d = [s]))
          : ((a.e = o), (a.d = [s]));
        return;
      }
      if (s * 0 !== 0) {
        s || (a.s = NaN), (a.e = NaN), (a.d = null);
        return;
      }
      return Ce(a, s.toString());
    }
    if (c === "string")
      return (
        (l = s.charCodeAt(0)) === 45
          ? ((s = s.slice(1)), (a.s = -1))
          : (l === 43 && (s = s.slice(1)), (a.s = 1)),
        dn.test(s) ? Ce(a, s) : Ai(a, s)
      );
    if (c === "bigint")
      return s < 0 ? ((s = -s), (a.s = -1)) : (a.s = 1), Ce(a, s.toString());
    throw Error(te + s);
  }
  if (
    ((i.prototype = p),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Hi),
    (i.clone = bn),
    (i.isDecimal = Pt),
    (i.abs = ki),
    (i.acos = _i),
    (i.acosh = Pi),
    (i.add = Fi),
    (i.asin = Mi),
    (i.asinh = Di),
    (i.atan = Ui),
    (i.atanh = Bi),
    (i.atan2 = xi),
    (i.cbrt = Ii),
    (i.ceil = qi),
    (i.clamp = ji),
    (i.cos = Zi),
    (i.cosh = $i),
    (i.div = Vi),
    (i.exp = zi),
    (i.floor = Ki),
    (i.hypot = Wi),
    (i.ln = Ji),
    (i.log = Xi),
    (i.log10 = Qi),
    (i.log2 = Gi),
    (i.max = Yi),
    (i.min = es),
    (i.mod = ts),
    (i.mul = ns),
    (i.pow = rs),
    (i.random = is),
    (i.round = ss),
    (i.sign = os),
    (i.sin = ls),
    (i.sinh = as),
    (i.sqrt = cs),
    (i.sub = us),
    (i.sum = fs),
    (i.tan = ds),
    (i.tanh = hs),
    (i.trunc = ps),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      r = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < r.length;

    )
      e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
  return i.config(e), i;
}
function Vi(e, t) {
  return new this(e).div(t);
}
function zi(e) {
  return new this(e).exp();
}
function Ki(e) {
  return E((e = new this(e)), e.e + 1, 3);
}
function Wi() {
  var e,
    t,
    n = new this(0);
  for (v = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s) return (v = !0), new this(1 / 0);
      n = t;
    }
  return (v = !0), n.sqrt();
}
function Pt(e) {
  return e instanceof He || (e && e.toStringTag === fn) || !1;
}
function Ji(e) {
  return new this(e).ln();
}
function Xi(e, t) {
  return new this(e).log(t);
}
function Gi(e) {
  return new this(e).log(2);
}
function Qi(e) {
  return new this(e).log(10);
}
function Yi() {
  return mn(this, arguments, -1);
}
function es() {
  return mn(this, arguments, 1);
}
function ts(e, t) {
  return new this(e).mod(t);
}
function ns(e, t) {
  return new this(e).mul(t);
}
function rs(e, t) {
  return new this(e).pow(t);
}
function is(e) {
  var t,
    n,
    r,
    i,
    s = 0,
    o = new this(1),
    l = [];
  if (
    (e === void 0 ? (e = this.precision) : I(e, 1, ne),
    (r = Math.ceil(e / y)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        (i = t[s]),
          i >= 429e7
            ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (l[s++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((r *= 4)); s < r; )
        (i =
          t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, s)
            : (l.push(i % 1e7), (s += 4));
      s = r / 4;
    } else throw Error(un);
  else for (; s < r; ) l[s++] = (Math.random() * 1e7) | 0;
  for (
    r = l[--s],
      e %= y,
      r && e && ((i = _(10, y - e)), (l[s] = ((r / i) | 0) * i));
    l[s] === 0;
    s--
  )
    l.pop();
  if (s < 0) (n = 0), (l = [0]);
  else {
    for (n = -1; l[0] === 0; n -= y) l.shift();
    for (r = 1, i = l[0]; i >= 10; i /= 10) r++;
    r < y && (n -= y - r);
  }
  return (o.e = n), (o.d = l), o;
}
function ss(e) {
  return E((e = new this(e)), e.e + 1, this.rounding);
}
function os(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function ls(e) {
  return new this(e).sin();
}
function as(e) {
  return new this(e).sinh();
}
function cs(e) {
  return new this(e).sqrt();
}
function us(e, t) {
  return new this(e).sub(t);
}
function fs() {
  var e = 0,
    t = arguments,
    n = new this(t[e]);
  for (v = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return (v = !0), E(n, this.precision, this.rounding);
}
function ds(e) {
  return new this(e).tan();
}
function hs(e) {
  return new this(e).tanh();
}
function ps(e) {
  return E((e = new this(e)), e.e + 1, 1);
}
p[Symbol.for("nodejs.util.inspect.custom")] = p.toString;
p[Symbol.toStringTag] = "Decimal";
var He = (p.constructor = bn(lt));
Te = new He(Te);
ke = new He(ke);
const En = {
    user: null,
    userStakeData: null,
    token: null,
    leaderboardRank: null,
    appliedBonusCode: null,
    rankData: null,
    referralBonuses: null,
  },
  Qe = ut({ ...En });
typeof document < "u" &&
  document.addEventListener("wagmi-loaded", async () => {
    const { config: e } = await ln();
    vn(e, {
      onChange: (t) => {
        const n = t.address;
        if (!n) return Qe.set({ ...En });
        ri(n).then((r) => Qe.setKey("user", r.data)),
          oi(n).then((r) => Qe.setKey("userStakeData", r.data));
      },
    });
  });
export {
  Ln as a,
  qs as c,
  Ye as d,
  ln as g,
  Is as h,
  xs as s,
  Bs as u,
  vn as w,
};
