const transparence = [
  {
    titre: "Chaque euro, en direct",
    texte: "Réservations, prix par nuit, revenus du mois et commission : tout s'affiche dans votre QG, au moment où ça arrive.",
  },
  {
    titre: "Votre logement, sans vous déplacer",
    texte: "Ménage validé, photos après chaque séjour, incidents et réparations : vous voyez l'état réel de votre bien.",
  },
  {
    titre: "Des chiffres avant de signer",
    texte: "Étude AirDNA de votre quartier : occupation, prix, saisons fortes. Une projection sur 12 mois, prudente et sourcée.",
  },
  {
    titre: "Une gestion automatisée",
    texte: "Messages voyageurs, codes d'accès, prix ajustés chaque jour, alertes : nos outils s'en chargent, l'équipe garde la main.",
  },
];

const outils = [
  { nom: "Airbnb", src: "/logos/outils/airbnb.svg", classe: "h-8 md:h-9", texte: "Airbnb" },
  { nom: "AirDNA", src: "/logos/outils/airdna.svg", classe: "h-5 md:h-6" },
  { nom: "GuestLucky", src: "/logos/outils/guestlucky.png", classe: "h-7 md:h-8" },
];

const reservations = [
  { dates: "31 oct. – 3 nov.", voyageur: "Camille R.", statut: "Arrivée demain", couleur: "bg-nomad-blue" },
  { dates: "3 – 7 nov.", voyageur: "Thomas L.", statut: "Confirmée", couleur: "bg-nomad-blue" },
  { dates: "8 – 10 nov.", voyageur: "Vos dates", statut: "Bloquée", couleur: "bg-white/30" },
];

// taste-skill-ignore : fragment d'interface réel (data-ui), ses filets font partie du produit.
const QGApercu = () => (
  <div
    data-ui
    className="rounded-3xl bg-white text-nomad-black overflow-hidden"
    role="img"
    aria-label="Aperçu de l'espace propriétaire QG NomadAir : revenus du mois, occupation, note voyageurs, prochaines réservations et dernier ménage"
  >
    <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">{/* taste-skill-ignore */}
      <span className="font-medium">QG NomadAir · La Casita</span>
      <span className="flex items-center gap-2 text-sm text-[#237A4B]">
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2E8B5A]" />
        </span>
        En direct
      </span>
    </div>

    <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">{/* taste-skill-ignore */}
      {[
        { label: "Revenus du mois", valeur: "2 840 €" },
        { label: "Occupation", valeur: "91 %" },
        { label: "Note voyageurs", valeur: "4,8" },
      ].map((k) => (
        <div key={k.label} className="px-5 py-5">
          <p className="text-xs text-nomad-black/65">{k.label}</p>
          <p className="mt-1 text-2xl md:text-3xl font-medium tracking-[-0.03em]">{k.valeur}</p>
        </div>
      ))}
    </div>

    <ul className="divide-y divide-gray-100">{/* taste-skill-ignore */}
      {reservations.map((r) => (
        <li key={r.dates} className="flex items-center gap-3 px-6 py-3.5 text-sm">
          <span className={`h-2 w-2 shrink-0 rounded-full ${r.couleur === "bg-white/30" ? "bg-gray-300" : r.couleur}`} />
          <span className="w-32 shrink-0 whitespace-nowrap text-nomad-black/70">{r.dates}</span>
          <span className="flex-1">{r.voyageur}</span>
          <span className="text-xs text-nomad-black/65">{r.statut}</span>
        </li>
      ))}
    </ul>

    <div className="flex items-center justify-between bg-[#F5F6F7] px-6 py-4 text-sm">
      <span className="text-nomad-black/65">Ménage du 29 oct. validé, 14 photos ajoutées</span>
      <span className="font-medium underline underline-offset-4">Voir</span>
    </div>
  </div>
);

const Expertise = () => {
  return (
    <section id="qg" className="bg-nomad-black text-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center">
          <div>
            <h2 className="text-white font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1]">
              Le QG NomadAir, tout en clair.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/65 max-w-xl">
              Chaque propriétaire a son espace QG NomadAir. Vous voyez tout ce qu'on voit, en temps réel. Pas
              besoin de nous demander un relevé.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-9">
              {transparence.map((p) => (
                <div key={p.titre}>
                  <h3 className="text-white text-lg md:text-xl font-medium">{p.titre}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{p.texte}</p>
                </div>
              ))}
            </div>
          </div>

          <figure>
            <QGApercu />
            <figcaption className="mt-3 text-sm text-white/60">
              Aperçu de votre espace QG NomadAir. Données d'exemple.
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 md:mt-28 rounded-3xl bg-white/[0.05] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          <p className="text-white/60 md:max-w-[16rem] text-lg leading-snug">
            Nos outils, les mêmes que les meilleurs gestionnaires du marché.
          </p>
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {outils.map((o) => (
              <li key={o.nom} className="flex items-center gap-3">
                <img
                  src={o.src}
                  alt={o.nom}
                  className={`${o.classe} w-auto brightness-0 invert opacity-90`}
                  loading="lazy"
                />
                {o.texte && <span className="text-2xl md:text-3xl font-medium tracking-[-0.03em]">{o.texte}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
