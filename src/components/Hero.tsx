const WHATSAPP_APPEL =
  "https://wa.me/33619741903?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20appel%20de%2015%20min%20pour%20parler%20de%20mon%20bien.";

// Chiffres publics du profil hôte Airbnb, relevés le 28/10/2026.
const preuves = [
  { valeur: "4,69", texte: "note moyenne sur Airbnb" },
  { valeur: "93,6 %", texte: "d'occupation en août" },
  { valeur: "97 %", texte: "taux de réponse" },
  { valeur: "< 1 h", texte: "pour vous répondre" },
];

const Hero = () => {
  return (
    <section id="hero" className="bg-nomad-black text-white pt-[72px]">
      <div className="container mx-auto px-6 pt-16 md:pt-24 pb-14 md:pb-20">
        <h1 className="text-white font-medium leading-[0.92] tracking-[-0.045em] text-[clamp(3.1rem,10.5vw,10.5rem)]">
          <span className="hero-ligne block" style={{ animationDelay: "0.05s" }}>Vous possédez.</span>
          <span className="hero-ligne block text-white/45" style={{ animationDelay: "0.18s" }}>Nous gérons.</span>
          <span className="hero-ligne block text-nomad-blue" style={{ animationDelay: "0.31s" }}>
            Votre bien rapporte.
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <p
            className="hero-ligne max-w-[38rem] text-lg md:text-2xl leading-snug text-white/75"
            style={{ animationDelay: "0.45s" }}
          >
            Gestion Airbnb à Paris, en Île-de-France et au Maroc. Études AirDNA, prix pilotés chaque
            jour, voyageurs gérés 7 j/7. Vous suivez tout en temps réel.
          </p>

          <div className="hero-ligne flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.58s" }}>
            <a
              href="#simulateur"
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-5 bg-nomad-blue text-white text-base md:text-lg font-medium rounded-full hover:bg-white hover:text-nomad-black"
            >
              Audit gratuit de mon bien
            </a>
            <a
              href={WHATSAPP_APPEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-5 border border-white/30 text-white text-base md:text-lg font-medium rounded-full hover:border-white"
            >
              Appel de 15 min
            </a>
          </div>
        </div>

        <dl
          className="hero-ligne mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
          style={{ animationDelay: "0.7s" }}
        >
          {preuves.map((p) => (
            <div key={p.texte} className="bg-nomad-black px-5 py-6 md:px-8 md:py-8">
              <dt className="text-4xl md:text-6xl font-light tracking-[-0.04em]">{p.valeur}</dt>
              <dd className="mt-2 text-sm md:text-base text-white/55">{p.texte}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-white/35">Chiffres publics Airbnb relevés le 28 octobre 2026. Occupation : biens d'Île-de-France, août 2026.</p>
      </div>
    </section>
  );
};

export default Hero;
