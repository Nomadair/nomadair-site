// Les deux annonces Airbnb gérées par NomadAir, chiffres publics relevés le 28/10/2026.
const annonces = [
  {
    ville: "Saint-Ouen",
    titre: "La Casita, Paris à 5 min à pied",
    detail: "65 m² · 1 chambre · 4 voyageurs",
    note: "4,76",
    image: "/annonces/saint-ouen.jpg",
    url: "https://www.airbnb.fr/rooms/1699064180176532481",
  },
  {
    ville: "Le Blanc-Mesnil",
    titre: "Verrière atelier, terrasse, parking",
    detail: "2 chambres · 4 voyageurs",
    note: "4,65",
    image: "/annonces/blanc-mesnil.jpg",
    url: "https://www.airbnb.fr/rooms/1665087588292045763",
  },
];

const Etoile = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);

const Annonces = () => {
  return (
    <section id="annonces" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-medium text-4xl md:text-6xl tracking-[-0.035em] text-nomad-black max-w-2xl leading-[1]">
            Nos annonces, en direct sur Airbnb.
          </h2>
          <p className="text-lg text-nomad-black/60 max-w-sm">
            Allez voir les notes et les avis vous-même. C'est notre meilleure carte de visite.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {annonces.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 md:gap-7 rounded-3xl bg-[#F5F6F7] p-4 md:p-5 pr-6 hover:bg-nomad-black hover:text-white transition-colors duration-300"
            >
              <div className="h-24 w-24 md:h-32 md:w-32 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={a.image}
                  alt={`Annonce Airbnb ${a.titre}, ${a.ville}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={720}
                  height={480}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-nomad-black/50 group-hover:text-white/50">{a.ville}</p>
                <h3 className="mt-1 text-xl md:text-2xl font-medium tracking-[-0.02em] leading-tight">
                  {a.titre}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm md:text-base">
                  <Etoile />
                  <span className="font-medium">{a.note}</span>
                  <span className="text-nomad-black/50 group-hover:text-white/50">
                    · {a.detail}
                  </span>
                </p>
              </div>
              <span className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF385C] text-white px-4 py-2 text-sm font-medium">
                <img src="/logos/outils/airbnb.svg" alt="" className="h-4 w-4 brightness-0 invert" />
                Voir sur Airbnb
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Annonces;
