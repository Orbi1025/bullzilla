import "./twitter._GYkNQvT.js";
import "./runtime.BjGO-K5b.js";
import "./clsx.B-dksMZM.js";
const o = new Date("2025-08-29T18:00:00Z"),
  r = Array.from(document.querySelectorAll(".title-section-join-button")),
  t = () => {
    new Date() > o
      ? r.forEach((e) => {
          e.removeAttribute("data-locked");
        })
      : setTimeout(t, 1e3);
  };
t();
