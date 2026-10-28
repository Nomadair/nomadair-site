const inclus = [
  "Annonce optimisée : photos, textes, mots-clés",
  "Prix ajustés chaque jour, jamais sous votre minimum",
  "Messages et accueil des voyageurs 7 j/7",
  "Ménage et linge contrôlés à chaque départ",
  "Photos de l'état du logement après chaque séjour",
  "Gestion des imprévus et des dégâts",
  "Suivi en temps réel dans votre QG NomadAir",
];

const Offres = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-nomad-blue text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <h2 className="text-xl md:text-2xl text-white/90">Une commission. Tout est inclus. Rien de caché.</h2>
          <p className="mt-6 font-medium leading-none tracking-[-0.04em] text-[9rem] md:text-[15rem]">
            20&nbsp;%
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
            des nuits encaissées. Sur 100&nbsp;€, 80&nbsp;€ sont pour vous, reversés avec un relevé
            détaillé. Pas de commission sur la taxe de séjour. Le ménage est payé par le voyageur.
          </p>
        </div>

        <div className="lg:pt-10">
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {inclus.map((item) => (
            <li key={item} className="flex gap-3 text-base md:text-lg text-white/90">
              <svg
                className="mt-1.5 h-4 w-4 shrink-0 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Offres;
