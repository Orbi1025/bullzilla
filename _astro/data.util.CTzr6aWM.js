import { t as n } from "./toast.Z6oOZu6A.js";
const a = async (t) => {
    try {
      await navigator.clipboard.writeText(t), n("Copied text");
    } catch {
      n("Error copying text, copy manually");
    }
  },
  o = () => {
    const t = window.navigator.userAgent,
      e = t.indexOf("OS");
    return (t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1) && e > -1
      ? Number.parseInt(t.substring(e + 3, 3).replace("_", "."))
      : null;
  };
export { a as c, o as g };
