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
    <section id="services" className="py-20 md:py-28 bg-nomad-black text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <h2 className="text-lg text-white/60">Une commission. Tout est inclus. Rien de caché.</h2>
          <p className="mt-6 font-extralight leading-none tracking-[-0.04em] text-[7rem] md:text-[10rem]">
            20&nbsp;%
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            des nuits encaissées. Sur 100&nbsp;€, 80&nbsp;€ sont pour vous, reversés avec un relevé
            détaillé. Pas de commission sur la taxe de séjour. Le ménage est payé par le voyageur.
          </p>
        </div>

        <ul className="lg:pt-10 divide-y divide-white/10 border-y border-white/10">
          {inclus.map((item) => (
            <li key={item} className="flex gap-4 py-4 text-base md:text-lg">
              <svg
                className="mt-1.5 h-4 w-4 shrink-0 text-nomad-blue"
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
    </section>
  );
};

export default Offres;
