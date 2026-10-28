const piliers = [
  {
    titre: "Des études de marché AirDNA",
    texte:
      "Avant de vous proposer quoi que ce soit, on compare votre bien aux logements similaires de votre quartier avec AirDNA : occupation, prix par nuit, saisons fortes. Vous recevez une projection sur 12 mois, prudente et sourcée.",
  },
  {
    titre: "Une gestion automatisée",
    texte:
      "Nos outils répondent aux voyageurs, envoient codes et consignes au bon moment, ajustent les prix chaque jour et nous alertent au moindre souci. Zéro oubli, et une équipe concentrée sur l'accueil.",
  },
  {
    titre: "Tout suivre en temps réel",
    texte:
      "Votre espace QG NomadAir montre tout, en direct : réservations, revenus, avis, ménage, incidents. Un relevé clair à tout moment, sans avoir à demander.",
  },
];

const reservations = [
  { dates: "31 oct. – 3 nov.", voyageur: "Camille R.", statut: "Arrivée demain", couleur: "bg-nomad-blue" },
  { dates: "3 – 7 nov.", voyageur: "Thomas L.", statut: "Confirmée", couleur: "bg-nomad-blue" },
  { dates: "8 – 10 nov.", voyageur: "Vos dates", statut: "Bloquée", couleur: "bg-gray-300" },
];

const QGApercu = () => (
  <div
    data-ui
    className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
    role="img"
    aria-label="Aperçu de l'espace propriétaire QG NomadAir : revenus du mois, taux d'occupation, note voyageurs et prochaines réservations"
  >
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
      <div className="flex items-center gap-2">
        <img src="/logos/symbol-bleu.svg" alt="" className="h-5 w-5" />
        <span className="text-sm font-medium text-nomad-black">QG NomadAir</span>
      </div>
      <span className="flex items-center gap-1.5 text-xs text-[#2E8B5A]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#2E8B5A]" />
        En direct
      </span>
    </div>

    <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
      {[
        { label: "Revenus du mois", valeur: "2 840 €" },
        { label: "Occupation", valeur: "91 %" },
        { label: "Note voyageurs", valeur: "4,8" },
      ].map((k) => (
        <div key={k.label} className="px-4 py-4">
          <p className="text-[11px] text-nomad-black/50">{k.label}</p>
          <p className="mt-1 font-mono text-lg md:text-xl text-nomad-black">{k.valeur}</p>
        </div>
      ))}
    </div>

    <ul className="divide-y divide-gray-100">
      {reservations.map((r) => (
        <li key={r.dates} className="flex items-center gap-3 px-5 py-3 text-sm">
          <span className={`h-2 w-2 shrink-0 rounded-full ${r.couleur}`} />
          <span className="font-mono text-xs text-nomad-black/60 w-32 shrink-0 whitespace-nowrap">{r.dates}</span>
          <span className="flex-1 text-nomad-black">{r.voyageur}</span>
          <span className="text-xs text-nomad-black/50">{r.statut}</span>
        </li>
      ))}
    </ul>

    <div className="border-t border-gray-100 bg-[#FAFAFB] px-5 py-3 text-xs text-nomad-black/60">
      Ménage du 29 oct. validé, 14 photos ajoutées.
    </div>
  </div>
);

const Expertise = () => {
  return (
    <section id="qg" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <h2 className="font-medium text-4xl md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black">
            Pourquoi les propriétaires nous confient leur bien.
          </h2>
          <p className="mt-5 text-lg text-nomad-black/60 max-w-xl">
            Nos standards sont ceux des Superhôtes Airbnb : note visée de 4,8, réponse en moins
            d'une heure, logement impeccable à chaque arrivée.
          </p>

          <div className="mt-12 space-y-10">
            {piliers.map((p) => (
              <div key={p.titre}>
                <h3 className="text-xl font-medium text-nomad-black">{p.titre}</h3>
                <p className="mt-2 text-nomad-black/65 leading-relaxed max-w-xl">{p.texte}</p>
              </div>
            ))}
          </div>
        </div>

        <figure>
          <QGApercu />
          <figcaption className="mt-3 text-sm text-nomad-black/45">
            Aperçu de votre espace QG NomadAir. Données d'exemple.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Expertise;
