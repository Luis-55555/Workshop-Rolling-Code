import { useLayoutEffect } from "react";

const TARGETS = [
  ".speakers__header",
  ".speakers__card",
  ".events__intro",
  ".events__item",
  ".rc-entrada__title",
  ".rc-entrada__countdown",
  ".rc-entrada__card",
  ".ticket-checkout-card",
  ".rc-sponsor__header",
  ".rc-sponsor__tier",
  ".rc-sponsor__form",
  ".como-llegar__contenido > *",
  ".event-stats",
  ".main-partner__header",
  ".main-partner__card",
  ".main-partner__tier-card",
].join(",");

export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => {
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) =>
            c.classList.contains([...el.classList][0])
          )
        : [];
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      items.forEach((el) => el.classList.remove("reveal", "is-visible"));
    };
  }, []);
}
