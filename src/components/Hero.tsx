const WHATSAPP_APPEL =
  "https://wa.me/33619741903?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20appel%20de%2015%20min%20pour%20parler%20de%20mon%20bien.";

const preuves = [
  { valeur: "93,6 %", texte: "d'occupation en août 2026, Île-de-France" },
  { valeur: "4,7/5", texte: "de note voyageurs sur Airbnb" },
  { valeur: "7j/7", texte: "voyageurs suivis, arrivées et imprévus" },
];

const Hero = () => {
  return (
    <section id="hero" className="pt-[72px] bg-white">
      <div className="container mx-auto px-6 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <h1 className="font-light text-nomad-black text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] tracking-[-0.03em]">
            <span className="hero-ligne block" style={{ animationDelay: "0.05s" }}>Vous possédez.</span>
            <span className="hero-ligne block" style={{ animationDelay: "0.2s" }}>Nous gérons.</span>
            <span className="hero-ligne block font-medium" style={{ animationDelay: "0.35s" }}>
              Votre bien rapporte.
            </span>
          </h1>

          <p
            className="hero-ligne mt-8 max-w-[34rem] text-lg md:text-xl leading-relaxed text-nomad-black/70"
            style={{ animationDelay: "0.5s" }}
          >
            Gestion immobilière de location courte durée à Paris, en Île-de-France et au Maroc.
            Études AirDNA, prix pilotés chaque jour, voyageurs gérés 7 j/7. Vous suivez tout en
            temps réel, on fait le reste.
          </p>

          <div className="hero-ligne mt-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:max-w-[22rem] xl:max-w-none" style={{ animationDelay: "0.65s" }}>
            <a
              href="#simulateur"
              className="inline-flex items-center justify-center whitespace-nowrap px-6 sm:px-8 py-4 text-[15px] sm:text-base bg-nomad-blue text-white font-medium rounded-full hover:bg-[#2A7AD3] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nomad-blue"
            >
              Demander l'audit gratuit de mon bien
            </a>
            <a
              href={WHATSAPP_APPEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap px-6 sm:px-8 py-4 text-[15px] sm:text-base border border-nomad-black/20 text-nomad-black font-medium rounded-full hover:border-nomad-black transition-colors"
            >
              Réserver un appel de 15 min
            </a>
          </div>

          <dl
            className="hero-ligne mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-[34rem] border-t border-gray-200 pt-6"
            style={{ animationDelay: "0.8s" }}
          >
            {preuves.map((p) => (
              <div key={p.valeur}>
                <dt className="font-mono text-lg sm:text-xl md:text-2xl text-nomad-black">{p.valeur}</dt>
                <dd className="mt-1 text-xs md:text-sm leading-snug text-nomad-black/55">{p.texte}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-full max-w-[520px]">
          <div className="hero-arche aspect-[4/5] overflow-hidden rounded-t-full bg-[#ECEDEF]">
            <img
              src="/images/01-salon-niches-balcon.jpg"
              srcSet="/images/01-salon-niches-balcon-900.jpg 900w, /images/01-salon-niches-balcon.jpg 1800w"
              sizes="(min-width: 1024px) 520px, 100vw"
              width={1800}
              height={1350}
              alt="Salon d'un appartement géré par NomadAir à Saint-Ouen, niches en arche et marbre"
              className="h-full w-full object-cover object-[30%_50%]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-3 text-sm text-nomad-black/50">
            Saint-Ouen, un de nos biens en gestion. Noté 4,7/5 par ses voyageurs.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
