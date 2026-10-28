const points = [
  "Annonce optimisée : photos, textes, mots-clés",
  "Prix ajustés chaque jour, jamais sous votre minimum",
  "Messages et accueil des voyageurs 7 j/7",
  "Ménage et linge contrôlés à chaque départ",
  "Photos de l'état du logement après chaque séjour",
  "Gestion des imprévus et des dégâts",
  "Relevé clair chaque mois",
];

const Offres = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Une commission. Tout est inclus. Rien de caché.
          </h2>
        </div>

        {/* Single centered card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-nomad-black mb-5">
              20 % des nuits encaissées. C'est tout.
            </h3>
            <p className="text-nomad-black/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Sur 100&nbsp;€ encaissés, 80&nbsp;€ sont pour vous et arrivent
              directement sur votre compte. Pas de frais cachés, pas de commission
              sur la taxe de séjour. Le ménage est payé par le voyageur.
            </p>

            {/* Ce qui est inclus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-nomad-black/80"
                >
                  <svg
                    className="w-4 h-4 text-nomad-blue shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offres;