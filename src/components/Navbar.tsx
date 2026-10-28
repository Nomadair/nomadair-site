import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#services", label: "L'offre" },
  { href: "#qg", label: "Le QG" },
  { href: "#destinations", label: "Destinations" },
  { href: "#questions", label: "Questions" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_0_rgba(17,17,17,0.06)]" : ""
      }`}
    >
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#hero" aria-label="NomadAir, retour en haut">
          <Logo />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-nomad-black/70 hover:text-nomad-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simulateur"
            className="px-5 py-2.5 bg-nomad-black text-white text-[15px] font-medium rounded-full hover:bg-nomad-blue transition-colors"
          >
            Audit gratuit
          </a>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-nomad-black"
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-nomad-black text-lg py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#simulateur"
              onClick={() => setIsMobileOpen(false)}
              className="mt-3 px-6 py-3.5 bg-nomad-black text-white text-center font-medium rounded-full"
            >
              Audit gratuit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
