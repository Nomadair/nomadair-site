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
    <section id="processus" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-light text-3xl md:text-5xl tracking-[-0.02em] text-nomad-black max-w-2xl">
          Trois étapes, sans surprise.
        </h2>
        <p className="mt-5 text-lg text-nomad-black/60">Vous ne signez qu'après avoir vu les chiffres.</p>

        <ol className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-nomad-black pt-6">
              <span className="font-mono text-sm text-nomad-blue">Étape {i + 1}</span>
              <h3 className="mt-3 text-2xl font-light text-nomad-black">{step.title}</h3>
              <p className="mt-3 text-nomad-black/65 leading-relaxed max-w-sm">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
