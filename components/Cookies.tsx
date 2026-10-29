"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { lireConsentement, enregistrerConsentement, type Choix } from "@/lib/consentement";

export const EVENEMENT_GERER = "nomadair:gerer-cookies";
const ID_GA = "G-V2Z38545HP";

// Bandeau de consentement : Google Analytics ne se charge qu'après « Tout accepter ».
export default function Cookies() {
  const [choix, setChoix] = useState<Choix | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lu: Choix | null = null;
    try {
      lu = lireConsentement(window.localStorage, new Date());
    } catch {
      lu = null;
    }
    setChoix(lu);
    setVisible(lu === null);
    const rouvrir = () => setVisible(true);
    window.addEventListener(EVENEMENT_GERER, rouvrir);
    return () => window.removeEventListener(EVENEMENT_GERER, rouvrir);
  }, []);

  const decider = (c: Choix) => {
    try {
      enregistrerConsentement(window.localStorage, c, new Date());
    } catch {
      // Stockage indisponible (navigation privée) : le choix vaut pour cette visite.
    }
    setChoix(c);
    setVisible(false);
  };

  return (
    <>
      {choix === "accepte" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID_GA}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ID_GA}');`}
          </Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-labelledby="cookies-titre"
          aria-describedby="cookies-texte"
          className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-3xl bg-nomad-black text-white p-6 md:p-8 md:flex md:items-center md:gap-10">
            <div className="md:flex-1">
              <h2 id="cookies-titre" className="text-white text-lg font-medium">Mesure d'audience</h2>
              <p id="cookies-texte" className="mt-2 text-[15px] leading-relaxed text-white/75 max-w-[60ch]">
                Avec votre accord, nous utilisons Google Analytics pour savoir combien de personnes visitent ce
                site. Rien d'autre. Vous pouvez changer d'avis à tout moment en bas de page.
              </p>
            </div>
            <div className="mt-5 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => decider("refuse")}
                className="px-6 py-3.5 rounded-full bg-white/[0.12] text-white font-medium hover:bg-white hover:text-nomad-black transition-colors"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={() => decider("accepte")}
                className="px-6 py-3.5 rounded-full bg-white/[0.12] text-white font-medium hover:bg-white hover:text-nomad-black transition-colors"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
