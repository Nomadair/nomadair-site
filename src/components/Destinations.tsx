const destinations = [
  {
    nom: "Paris et Île-de-France",
    detail: "Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-d'Oise. Saint-Ouen, Le Blanc-Mesnil et alentours.",
    statut: "Biens en gestion",
    ouvert: true,
  },
  {
    nom: "Marrakech",
    detail: "Appartements et villas. Équipe sur place pour l'accueil, le ménage et l'entretien.",
    statut: "Biens en gestion",
    ouvert: true,
  },
  {
    nom: "Tanger",
    detail: "Appartements en ville, gérés avec notre associé sur place.",
    statut: "Biens en gestion",
    ouvert: true,
  },
  {
    nom: "Corse",
    detail: "Villas et appartements de bord de mer. Parlez-nous de votre bien dès maintenant.",
    statut: "Ouverture 2027",
    ouvert: false,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#FAFAFB]">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <h2 className="font-light text-3xl md:text-5xl tracking-[-0.02em] text-nomad-black">
            Gestion Airbnb en France et au Maroc.
          </h2>
          <p className="mt-5 text-lg text-nomad-black/60 max-w-md">
            Une seule équipe, les mêmes standards, partout où votre bien se trouve.
          </p>
          <div className="mt-10 hidden lg:block aspect-[4/5] max-w-[340px] overflow-hidden rounded-t-full">
            <img
              src="/images/06-chambre-lit-frontal-900.jpg"
              alt="Chambre d'un appartement géré par NomadAir"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="border-t border-nomad-black self-start">
          {destinations.map((d) => (
            <li key={d.nom} className="grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b border-gray-200 py-7">
              <h3 className="text-2xl md:text-3xl font-light text-nomad-black">{d.nom}</h3>
              <span
                className={`sm:text-right text-sm ${d.ouvert ? "text-[#2E8B5A]" : "text-nomad-blue"}`}
              >
                {d.statut}
              </span>
              <p className="sm:col-span-2 text-nomad-black/60 leading-relaxed max-w-xl">{d.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Destinations;
