const points = [
  "Pricing dynamique quotidien",
  "Sélection manuelle des voyageurs",
  "Reporting mensuel",
  "Un cofondateur joignable sous 1h",
];

const Offres = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Un modèle. Zéro ambiguïté.
          </h2>
        </div>

        {/* Single centered card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-nomad-black mb-5">
              Gestion Patrimoniale à la Performance
            </h3>
            <p className="text-nomad-black/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Nous pilotons votre bien à 100%. Vous touchez 75% des revenus
              générés. Nous prenons 25%&nbsp;— parce que nous faisons ce que les
              autres délèguent.
            </p>

            {/* 4 points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
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