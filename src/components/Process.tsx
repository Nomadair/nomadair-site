const steps = [
  {
    title: "On audite votre bien",
    description:
      "Vous nous envoyez votre demande. On étudie votre quartier avec AirDNA et on vous rappelle avec une projection de revenus réaliste.",
  },
  {
    title: "On fixe les règles",
    description:
      "On visite votre bien. Ensemble, on fixe votre prix minimum, vos dates personnelles et un contrat clair.",
  },
  {
    title: "On gère, vous encaissez",
    description:
      "On s'occupe de tout. Vous suivez chaque réservation et chaque euro depuis votre QG NomadAir.",
  },
];

const Process = () => {
  return (
    <section id="processus" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 aspect-[4/5] lg:aspect-[4/5] max-h-[640px] overflow-hidden">
          <img
            src="/images/03-salon-cuisine-ouverte-900.jpg"
            alt="Salon et cuisine ouverte d'un appartement géré par NomadAir"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-light text-3xl md:text-5xl tracking-[-0.02em] text-nomad-black">
            Trois étapes, sans surprise.
          </h2>
          <p className="mt-5 text-lg text-nomad-black/60">Vous ne signez qu'après avoir vu les chiffres.</p>

          <ol className="mt-12 space-y-10">
            {steps.map((step) => (
              <li key={step.title}>
                <h3 className="text-2xl md:text-3xl font-light tracking-[-0.02em] text-nomad-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-nomad-black/65 leading-relaxed max-w-md">{step.description}</p>
              </li>
            ))}
          </ol>

          <a
            href="#simulateur"
            className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-nomad-blue text-white font-medium rounded-full hover:bg-[#2A7AD3] transition-colors"
          >
            Demander l'audit gratuit de mon bien
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
