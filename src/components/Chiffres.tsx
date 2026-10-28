const metrics = [
  {
    value: "93,6 %",
    label: "taux d'occupation",
    detail: "sur nos biens d'Île-de-France en août 2026",
  },
  {
    value: "4,7/5",
    label: "note des voyageurs",
    detail: "sur Airbnb, notre meilleure annonce",
  },
  {
    value: "7j/7",
    label: "voyageurs suivis",
    detail: "messages, arrivées, imprévus",
  },
];

const Chiffres = () => {
  return (
    <section id="chiffres" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Des résultats, sur de vrais biens.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg max-w-xl mx-auto">
            Mesurés sur les logements que nous gérons aujourd'hui.
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
          Note Airbnb relevée le 20 octobre 2026. Les résultats varient selon le bien.
        </p>
      </div>
    </section>
  );
};

export default Chiffres;