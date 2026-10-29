import Logo from "./Logo";
import GererCookies from "./GererCookies";

const liens = [
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#services", label: "L'offre" },
  { href: "#qg", label: "Le QG" },
  { href: "#destinations", label: "Destinations" },
  { href: "#questions", label: "Questions" },
  { href: "#simulateur", label: "Audit gratuit" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-nomad-black text-white">
      <div className="container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Logo couleur="blanc" />
          <p className="mt-6 text-2xl font-light leading-snug max-w-sm">
            Vous possédez. Nous gérons. Votre bien rapporte.
          </p>
          <p className="mt-4 text-sm text-white/50 max-w-sm">
            Gestion immobilière de location courte durée et conciergerie Airbnb à Paris, en
            Île-de-France, à Marrakech et à Tanger. Corse en 2027.
          </p>
        </div>

        <nav aria-label="Pied de page">
          <h2 className="text-sm text-white/60 mb-4">Le site</h2>
          <ul className="space-y-3">
            {liens.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/75 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm text-white/60 mb-4">Nous joindre</h2>
          <ul className="space-y-3 text-white/75">
            <li>
              <a href="tel:+33619741903" className="hover:text-white transition-colors">
                06 19 74 19 03
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/33619741903"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#simulateur" className="text-nomad-blue hover:text-white transition-colors">
                Demander l'audit gratuit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 overflow-hidden">
        <p
          aria-hidden="true"
          className="select-none font-medium leading-[0.8] tracking-[-0.05em] text-white text-[21vw] lg:text-[17.5vw] -mb-[0.12em]"
        >
          NomadAir
        </p>
      </div>
      <div className="container mx-auto px-6 pt-8 pb-8 text-[13px] leading-relaxed text-white/60">
        <p>
          © {new Date().getFullYear()} NomadAir, une marque d'Altaïs Capital.{" "}
          <a href="/mentions-legales" className="underline underline-offset-4 hover:text-white transition-colors">
            Mentions légales
          </a>{" "}
          ·{" "}
          <a href="/confidentialite" className="underline underline-offset-4 hover:text-white transition-colors">
            Confidentialité
          </a>{" "}
          · <GererCookies />
        </p>
        <p className="mt-2 max-w-[90ch]">
          Photos des destinations, Wikimedia Commons : Sacré-Cœur par Giò Terra (CC BY-SA 4.0), Koutoubia par
          Schorle (CC BY-SA 4.0), Kasbah de Tanger par Diego Delso (CC BY-SA 4.0), Bonifacio par Isiwal (CC BY-SA 3.0).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
