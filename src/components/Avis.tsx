// Avis 5 étoiles publics, relevés sur les deux annonces Airbnb le 28/10/2026.
const avis = [
  { texte: "Kenny a été un hôte formidable et très réactif. Il a toujours répondu instantanément.", nom: "Angela", bien: "Le Blanc-Mesnil" },
  { texte: "10/10, appartement sublime.", nom: "Amel", bien: "Saint-Ouen" },
  { texte: "Nous avons passé un excellent séjour. Je vous recommande ce logement à 100 %.", nom: "Chacha", bien: "Le Blanc-Mesnil" },
  { texte: "Kenny a été un hôte incroyablement proactif et réactif. L'appartement semble sûr et fraîchement décoré.", nom: "Kit", bien: "Saint-Ouen" },
  { texte: "L'appartement était très propre et la literie excellente. Nous y séjournerons à nouveau avec plaisir.", nom: "Sylvie", bien: "Le Blanc-Mesnil" },
  { texte: "L'environnement et la chambre étaient superbes, c'était parfait. J'aimerais y séjourner à nouveau.", nom: "Masataka", bien: "Saint-Ouen" },
  { texte: "Juste parfait. Appartement incroyable.", nom: "Shade", bien: "Le Blanc-Mesnil" },
  { texte: "Kenny a été très réactif et a résolu un problème très rapidement. Je le recommande vivement.", nom: "Victoria", bien: "Saint-Ouen" },
  { texte: "Kenny a toujours été joignable et a su résoudre tous les problèmes. Je recommande.", nom: "Alisa", bien: "Le Blanc-Mesnil" },
  { texte: "Logement super agréable, hôte très serviable et proactif.", nom: "Rodrigo", bien: "Saint-Ouen" },
  { texte: "Kenny était serviable et disponible quand nous avions besoin de lui. Le parking gratuit était un gros plus.", nom: "Martina", bien: "Le Blanc-Mesnil" },
  { texte: "Tout était parfait. Très attentionné. Je conseille fortement.", nom: "Yasmeen", bien: "Saint-Ouen" },
];

const Citation = ({ a }: { a: (typeof avis)[number] }) => (
  <figure className="w-[280px] md:w-[440px] shrink-0 pr-10 md:pr-16">
    <blockquote className="text-xl md:text-2xl leading-snug text-white">« {a.texte} »</blockquote>
    <figcaption className="mt-4 text-sm text-white/65">
      {a.nom}, séjour à {a.bien}
    </figcaption>
  </figure>
);

const Bande = ({ items, sens }: { items: typeof avis; sens: "gauche" | "droite" }) => (
  <div className="defile-zone flex overflow-hidden">
    <div className={`defile flex ${sens === "droite" ? "defile-inverse" : ""}`}>
      {[...items, ...items].map((a, i) => (
        <Citation key={`${a.nom}-${i}`} a={a} />
      ))}
    </div>
  </div>
);

const Avis = () => {
  return (
    <section id="avis" className="bg-nomad-black text-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-white font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1]">
            Ce que disent nos voyageurs.
          </h2>
          <p className="flex items-center gap-2 text-lg text-white/75">
            <span className="flex gap-1 text-nomad-blue" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
                </svg>
              ))}
            </span>
            Avis 5 étoiles publiés sur Airbnb
          </p>
        </div>
        <div className="mt-16 space-y-14 overflow-hidden" aria-label="Avis voyageurs Airbnb">
          <Bande items={avis.slice(0, 6)} sens="gauche" />
          <Bande items={avis.slice(6)} sens="droite" />
        </div>
      </div>
    </section>
  );
};

export default Avis;
