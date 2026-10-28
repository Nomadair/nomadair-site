import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#questions", label: "Questions" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="NomadAir"
            className="w-8 h-8 rounded-md object-contain"
          />
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-nomad-black" : "text-white"
            }`}
          >
            NomadAir
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-nomad-blue ${
                isScrolled ? "text-nomad-black/70" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simulateur"
            className="px-5 py-2.5 bg-nomad-blue text-white text-sm font-semibold rounded-full hover:bg-nomad-blue/90 transition-all duration-200 shadow-md shadow-nomad-blue/20"
          >
            Audit gratuit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-nomad-black" : "text-white"
          }`}
          aria-label="Menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-nomad-black/80 text-base font-medium py-2 hover:text-nomad-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#simulateur"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-nomad-blue text-white text-center font-semibold rounded-full hover:bg-nomad-blue/90 transition-all"
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