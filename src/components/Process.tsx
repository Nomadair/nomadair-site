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
    <section id="processus" className="py-24 md:py-36 bg-[#F5F6F7]">
      <div className="container mx-auto px-6 ">

        <div>
          <h2 className="font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black">
            Trois étapes, sans surprise.
          </h2>
          <p className="mt-5 text-lg text-nomad-black/60">Vous ne signez qu'après avoir vu les chiffres.</p>

          <ol className="mt-14 grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <li key={step.title}>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.03em] text-nomad-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-nomad-black/65 leading-relaxed max-w-sm">{step.description}</p>
              </li>
            ))}
          </ol>

          <a
            href="#simulateur"
            className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-nomad-blue text-nomad-black font-medium rounded-full hover:bg-nomad-black hover:text-white transition-colors"
          >
            Demander l'audit gratuit de mon bien
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
