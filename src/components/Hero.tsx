const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-premium-apartment-living.png"
          alt="Salon d'un appartement géré par NomadAir"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-nomad-black/65" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 text-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Vous possédez. Nous gérons.
            <br />
            <span className="text-nomad-blue">Votre bien rapporte.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Gestion immobilière de location courte durée à Paris, en Île-de-France et au Maroc.
            Études AirDNA, prix pilotés par la data, voyageurs gérés 7 j/7. Vous suivez tout en temps réel, on fait le reste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#simulateur"
              className="inline-flex items-center justify-center px-8 py-4 bg-nomad-blue text-white font-bold text-base rounded-full hover:bg-nomad-blue/90 transition-all duration-200 shadow-lg shadow-nomad-blue/25"
            >
              Demander l'audit gratuit de mon bien
            </a>
            <a
              href="https://wa.me/33619741903?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20appel%20de%2015%20min%20pour%20parler%20de%20mon%20bien."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Réserver un appel de 15 min
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#chiffres" className="block animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;