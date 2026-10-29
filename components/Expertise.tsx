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

type Message = { de: "proprio" | "qg"; texte: string; heure: string };

// Conversation d'exemple entre un propriétaire et son QG NomadAir sur Telegram.
const conversation: Message[] = [
  { de: "proprio", texte: "Combien j'ai gagné ce mois-ci ?", heure: "09:12" },
  {
    de: "qg",
    texte: "Octobre : 2 840 € encaissés, 568 € de commission, 2 272 € pour vous. 26 nuits louées sur 31.",
    heure: "09:12",
  },
  { de: "proprio", texte: "Le ménage est fait pour vendredi ?", heure: "09:14" },
  {
    de: "qg",
    texte: "Oui, validé hier à 14 h, 14 photos. Prochaine arrivée vendredi 15 h, Camille, 3 nuits.",
    heure: "09:14",
  },
];

const QGTelegram = () => (
  <div
    data-ui
    className="rounded-3xl overflow-hidden bg-[#0E1621]"
    role="img"
    aria-label="Exemple de conversation sur Telegram entre un propriétaire et son QG NomadAir : revenus du mois et ménage validé"
  >
    <div className="flex items-center gap-3 bg-[#17212B] px-5 py-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nomad-blue">
        <svg viewBox="0 0 80 96" className="h-5 w-auto" aria-hidden="true">
          <path d="M 0 96 L 0 40 A 40 40 0 0 1 80 40 L 80 96 L 64 96 L 64 40 A 24 24 0 0 0 16 40 L 16 96 Z" fill="#111111" />
          <circle cx="40" cy="57.6" r="7.2" fill="#111111" />
        </svg>
      </span>
      <div>
        <p className="text-white font-medium leading-tight">QG NomadAir</p>
        <p className="text-sm text-[#7FB2E5]">en ligne</p>
      </div>
    </div>

    <ul className="space-y-3 px-4 py-6 md:px-6">
      {conversation.map((m, i) => (
        <li key={i} className={`flex ${m.de === "proprio" ? "justify-end" : "justify-start"}`}>
          <p
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[15px] leading-snug ${
              m.de === "proprio" ? "bg-[#2B5278] text-white rounded-br-md" : "bg-[#182533] text-white rounded-bl-md"
            }`}
          >
            {m.texte}
            <span className="ml-2 align-bottom text-[11px] text-white/50">{m.heure}</span>
          </p>
        </li>
      ))}
    </ul>

    <div className="flex items-center gap-3 bg-[#17212B] px-5 py-3.5">
      <span className="flex-1 text-[15px] text-white/40">Posez votre question…</span>
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-nomad-blue" aria-hidden="true">
        <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
      </svg>
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
              Chaque propriétaire a son QG NomadAir sur Telegram. Vous posez une question, il vous répond
              tout de suite, avec les vrais chiffres de votre bien.
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
            <QGTelegram />
            <figcaption className="mt-3 text-sm text-white/60">
              Exemple de conversation avec le QG NomadAir sur Telegram.
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
