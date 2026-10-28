const douleurs = [
  {
    avant: "« Je ne savais pas ce que je payais vraiment. »",
    apres: "Une seule commission, 20 %. Chaque euro est détaillé dans votre relevé. Pas de ligne surprise.",
  },
  {
    avant: "« Ma conciergerie ne répondait plus. »",
    apres: "Messages voyageurs pris en charge 7 j/7 par notre système, et un interlocuteur unique qui connaît votre bien.",
  },
  {
    avant: "« Le ménage était bâclé, les avis ont chuté. »",
    apres: "Contrôle photo après chaque séjour. Vous voyez l'état de votre logement sans vous déplacer.",
  },
  {
    avant: "« Mes voisins se sont plaints. »",
    apres: "Voyageurs vérifiés, règlement intérieur clair, fêtes interdites. Votre copropriété reste tranquille.",
  },
  {
    avant: "« J'ai signé sans savoir combien j'allais gagner. »",
    apres: "Étude AirDNA de votre quartier avant toute signature. Vous décidez sur des chiffres, pas sur des promesses.",
  },
  {
    avant: "« Je ne voyais plus rien de ce qui se passait chez moi. »",
    apres: "Vous gardez l'accès à votre compte Airbnb. Réservations, prix, avis : tout est visible, en temps réel.",
  },
];

const Douleurs = () => {
  return (
    <section id="pourquoi" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Ce que les propriétaires nous racontent. Et ce qu'on a changé.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg">
            Frais cachés, conciergerie injoignable, ménage raté : on a construit NomadAir contre tout ça.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {douleurs.map((d) => (
            <div key={d.avant} className="bg-white rounded-2xl p-7 border border-gray-100">
              <p className="text-nomad-black/50 text-sm italic mb-4">{d.avant}</p>
              <p className="text-nomad-black font-semibold leading-relaxed">{d.apres}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#simulateur"
            className="inline-flex items-center justify-center px-8 py-4 bg-nomad-blue text-white font-bold text-base rounded-full hover:bg-nomad-blue/90 transition-all duration-200 shadow-lg shadow-nomad-blue/25"
          >
            Demander l'audit gratuit de mon bien
          </a>
        </div>
      </div>
    </section>
  );
};

export default Douleurs;
