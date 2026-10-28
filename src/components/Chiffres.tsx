const metrics = [
  {
    value: "93,6 %",
    label: "des nuits louées en août 2026",
    detail: "sur nos biens d'Île-de-France",
  },
  {
    value: "4,7/5",
    label: "à Saint-Ouen",
    detail: "sur 17 avis voyageurs Airbnb",
  },
  {
    value: "4,6/5",
    label: "au Blanc-Mesnil",
    detail: "sur 36 avis voyageurs Airbnb",
  },
];

const Chiffres = () => {
  return (
    <section id="chiffres" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Nos biens, nos chiffres.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg max-w-xl mx-auto">
            Mesurés sur les logements que nous gérons vraiment.
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
          Avis Airbnb publics relevés le 20 octobre 2026, occupation d'août 2026. Les résultats varient selon le bien. Aucun revenu n'est garanti.
        </p>
      </div>
    </section>
  );
};

export default Chiffres;