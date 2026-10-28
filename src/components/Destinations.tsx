// Photos libres de Wikimedia Commons, crédits dans le pied de page.
const destinations = [
  {
    nom: "Paris et Île-de-France",
    detail: "Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-d'Oise. La Casita est à deux stations de Montmartre.",
    statut: "Biens en gestion",
    ouvert: true,
    image: "/destinations/paris.jpg",
    alt: "La basilique du Sacré-Cœur à Montmartre, Paris",
  },
  {
    nom: "Marrakech",
    detail: "Appartements et villas, avec une équipe sur place pour l'accueil, le ménage et l'entretien.",
    statut: "Biens en gestion",
    ouvert: true,
    image: "/destinations/marrakech.jpg",
    alt: "Le minaret de la Koutoubia au-dessus des toits de Marrakech",
  },
  {
    nom: "Tanger",
    detail: "Appartements en ville, gérés avec notre associé sur place.",
    statut: "Biens en gestion",
    ouvert: true,
    image: "/destinations/tanger.jpg",
    alt: "Une ruelle blanche de la Kasbah de Tanger",
  },
  {
    nom: "Corse",
    detail: "Villas et appartements de bord de mer. Parlez-nous de votre bien dès maintenant.",
    statut: "Ouverture 2027",
    ouvert: false,
    image: "/destinations/corse.jpg",
    alt: "La ville haute de Bonifacio sur ses falaises, en Corse",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="bg-white py-24 md:py-36">
      <div className="container mx-auto px-6">
        <h2 className="font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black max-w-3xl">
          En France et au Maroc.
        </h2>
        <p className="mt-5 text-lg text-nomad-black/70 max-w-[60ch]">
          Une seule équipe, les mêmes standards, partout où votre bien se trouve.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-x-8 gap-y-12">
          {destinations.map((d, i) => (
            <article key={d.nom} className={i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-3" : ""}>
              <div className={`overflow-hidden ${i === 0 ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-[16/9]"}`}>
                <img src={d.image} alt={d.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.03em] text-nomad-black">{d.nom}</h3>
                <span className={`shrink-0 text-sm font-medium ${d.ouvert ? "text-[#237A4B]" : "text-[#1F6FC4]"}`}>
                  {d.statut}
                </span>
              </div>
              <p className="mt-2 text-nomad-black/70 leading-relaxed max-w-[48ch]">{d.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
