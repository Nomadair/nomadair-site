const metrics = [
  {
    value: "×2.6",
    label: "revenus vs location classique",
    detail: "en moyenne constatée sur nos biens gérés",
  },
  {
    value: "0",
    label: "jour de gestion pour vous",
    detail: "nous pilotons l'intégralité des opérations",
  },
  {
    value: "7j/7",
    label: "suivi et disponibilité",
    detail: "voyageurs accompagnés en continu",
  },
];

const Chiffres = () => {
  return (
    <section id="chiffres" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Des résultats, pas des promesses.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg max-w-xl mx-auto">
            Nos chiffres parlent. Votre patrimoine performe.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-nomad-blue/20 hover:shadow-lg hover:shadow-nomad-blue/5 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-900 text-nomad-blue mb-3">
                {metric.value}
              </div>
              <p className="text-nomad-black font-semibold text-base mb-2">
                {metric.label}
              </p>
              <p className="text-nomad-black/50 text-sm">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Legal disclaimer */}
        <p className="text-center text-xs text-nomad-black/40 mt-10 max-w-2xl mx-auto">
          * Données basées sur la performance moyenne de nos biens gérés en Île-de-France et au Maroc sur les 12 derniers mois. Les résultats peuvent varier selon la localisation, le type de bien et les conditions du marché.
        </p>
      </div>
    </section>
  );
};

export default Chiffres;