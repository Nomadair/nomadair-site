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
    <section id="destinations" className="py-24 md:py-36 bg-nomad-black text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <h2 className="font-medium text-4xl md:text-6xl tracking-[-0.035em] leading-[1] text-white">
            Gestion Airbnb en France et au Maroc.
          </h2>
          <p className="mt-5 text-lg text-white/55 max-w-md">
            Une seule équipe, les mêmes standards, partout où votre bien se trouve.
          </p>
        </div>

        <ul className="self-start space-y-10">
          {destinations.map((d) => (
            <li key={d.nom} className="grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-2">
              <h3 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-white">{d.nom}</h3>
              <span
                className={`sm:text-right text-sm ${d.ouvert ? "text-[#4CC38A]" : "text-nomad-blue"}`}
              >
                {d.statut}
              </span>
              <p className="sm:col-span-2 text-white/55 leading-relaxed max-w-xl">{d.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Destinations;
