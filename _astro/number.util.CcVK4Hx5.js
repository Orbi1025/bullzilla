const h = (i, r) => {
  let t = typeof i == "string" ? i : i.toString();
  const e = t.length;
  for (let n = 0; n < r - e; n++) t = `0${t}`;
  return t;
};
const m = (i, r = 0) => {
    i = i.toString();
    const t = i.split(".");
    if (t.length < 2) return i;
    const e = t[0],
      n = t[1];
    if (n.length <= r) return "";
    const s = n.match(/0*$/);
    if (!s) return "";
    let o = s[0];
    const c = n.substring(0, s.index);
    return (o = o.substring(0, r - (n.length - o.length))), `${e}.${c}${o}`;
  },
  p = (i, r = 0, t = 8) => {
    i = Math.floor(i * Math.pow(10, 8) + 0.5) / Math.pow(10, 8);
    let e = m(
        new Intl.NumberFormat("en-GB", {
          useGrouping: !1,
          minimumSignificantDigits: 3,
          minimumFractionDigits: 3,
          compactDisplay: "long",
        }).format(i)
      ),
      n = 0;
    if ((e.includes(".") && (n = e.split(".")[1].length), n < r)) {
      n === 0 && (e = e + ".");
      for (let s = n; s < r; s++) e = e + "0";
    }
    if (n > 0) {
      const s = e.split("."),
        o = s[0],
        c = s[1];
      let l = (c.match(/[1-9][0-9]*/) || [""])[0];
      const f = l.length,
        g = (c.match(/0*/) || [""])[0];
      let a = g + l;
      o !== "0" && a.length > t
        ? ((a = a.substring(0, t)), (e = `${o}.${m(a, r)}`))
        : f > t && ((l = l.substring(0, t)), (e = `${o}.${g}${m(l, r)}`));
    }
    return e;
  },
  u = (i) => {
    const t = i.toString().split("."),
      e = t[1];
    return (
      t[0]
        .split("")
        .reverse()
        .map((s, o) => (o % 3 === 2 ? `,${s}` : s))
        .reverse()
        .join("")
        .replace(/(,$)|(^,)/, "") + (e ? "." + e : "")
    );
  },
  $ = (i, r, t) => u(p(i, r, t));
export { $ as f, h as z };
