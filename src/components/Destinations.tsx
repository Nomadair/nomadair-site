const destinations = [
  {
    nom: "Paris et Île-de-France",
    detail: "Paris, Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-d'Oise (95). Saint-Ouen, Blanc-Mesnil et alentours.",
    statut: "Biens en gestion",
  },
  {
    nom: "Marrakech",
    detail: "Appartements et villas. Équipe sur place pour l'accueil, le ménage et l'entretien.",
    statut: "Biens en gestion",
  },
  {
    nom: "Tanger",
    detail: "Appartements en ville, gérés avec notre associé sur place.",
    statut: "Biens en gestion",
  },
  {
    nom: "Corse",
    detail: "Villas et appartements de bord de mer. On prépare l'ouverture : parlez-nous de votre bien dès maintenant.",
    statut: "Ouverture 2027",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Gestion Airbnb en France et au Maroc.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg">
            Une seule équipe, les mêmes standards, partout où votre bien se trouve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {destinations.map((d) => (
            <div key={d.nom} className="bg-white rounded-2xl p-7 border border-gray-100">
              <span className="inline-block text-xs font-semibold text-nomad-blue bg-nomad-blue/10 rounded-full px-3 py-1 mb-4">
                {d.statut}
              </span>
              <h3 className="text-lg font-bold text-nomad-black mb-2">{d.nom}</h3>
              <p className="text-nomad-black/60 text-sm leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
