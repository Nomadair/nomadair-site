import { useEffect } from "react";

// Apparition au défilement : titre, texte, image, lignes de liste, décalés de 70 ms.
// Le contenu n'est masqué que si ce script tourne : sans JavaScript, tout reste visible.
const CIBLES =
  "main section:not(#hero) h2, main section:not(#hero) h2 + p, main section:not(#hero) img, main section:not(#hero) li, main section:not(#hero) tbody tr, main section:not(#hero) details, main section:not(#hero) [data-ui]";

export function useApparitions() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("apparu");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0 }
    );

    const vus = new WeakSet<Element>();
    const brancher = () => {
      document.querySelectorAll("main section:not(#hero)").forEach((section) => {
        let i = 0;
        section.querySelectorAll(CIBLES).forEach((el) => {
          if (vus.has(el)) return;
          vus.add(el);
          (el as HTMLElement).style.setProperty("--delai", `${Math.min(i, 8) * 70}ms`);
          el.classList.add("a-apparaitre");
          io.observe(el);
          i += 1;
        });
      });
    };

    brancher();
    const mo = new MutationObserver(brancher);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
