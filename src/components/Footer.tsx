const Footer = () => {
  return (
    <footer id="footer" className="bg-nomad-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" alt="NomadAir" className="w-8 h-8 rounded-md object-contain" />
              <span className="text-xl font-bold">NomadAir</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Vous possédez. Nous gérons. Votre bien rapporte. Conciergerie de location courte durée.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#hero", label: "Accueil" },
                { href: "#chiffres", label: "Chiffres" },
                { href: "#services", label: "Services" },
                { href: "#processus", label: "Méthode" },
                { href: "#questions", label: "Questions" },
                { href: "#simulateur", label: "Estimer mon bien" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-nomad-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="font-medium text-white/80">
                L'équipe NomadAir
              </li>
              <li>
                <a href="tel:+33767211909" className="hover:text-nomad-blue transition-colors">
                  +33 7 67 21 19 09
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#simulateur"
                  className="inline-flex items-center gap-2 text-nomad-blue hover:text-nomad-blue/80 transition-colors font-medium"
                >
                  Nous écrire via le formulaire →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} NomadAir. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Paris · 92 · 93 · 95 · Marrakech · Tanger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;