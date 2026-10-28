import Logo from "./Logo";

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
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
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
          <h2 className="text-sm text-white/40 mb-4">Le site</h2>
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
          <h2 className="text-sm text-white/40 mb-4">Nous joindre</h2>
          <ul className="space-y-3 text-white/75">
            <li>
              <a href="tel:+33767211909" className="hover:text-white transition-colors">
                +33 7 67 21 19 09
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

      <div className="border-t border-white/10">
        <p className="container mx-auto px-6 py-6 text-xs text-white/40">
          © {new Date().getFullYear()} NomadAir. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
