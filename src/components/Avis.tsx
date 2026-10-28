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

const Carte = ({ a }: { a: (typeof avis)[number] }) => (
  <figure className="w-[300px] md:w-[380px] shrink-0 rounded-3xl bg-white/[0.06] p-6 md:p-7 mr-4">
    <p className="text-nomad-blue tracking-[0.2em] text-sm" aria-label="5 étoiles sur 5">★★★★★</p>
    <blockquote className="mt-4 text-lg md:text-xl leading-snug text-white">« {a.texte} »</blockquote>
    <figcaption className="mt-5 text-sm text-white/50">
      {a.nom}, séjour à {a.bien}
    </figcaption>
  </figure>
);

const Bande = ({ items, sens }: { items: typeof avis; sens: "gauche" | "droite" }) => (
  <div className="defile-masque flex overflow-hidden">
    <div className={`defile flex ${sens === "droite" ? "defile-inverse" : ""}`}>
      {[...items, ...items].map((a, i) => (
        <Carte key={`${a.nom}-${i}`} a={a} />
      ))}
    </div>
  </div>
);

const Avis = () => {
  return (
    <section id="avis" className="bg-nomad-black text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <h2 className="text-white font-medium text-4xl md:text-6xl tracking-[-0.035em] leading-[1] max-w-3xl">
          Ce que disent nos voyageurs.
        </h2>
        <p className="mt-5 text-lg text-white/55">
          Avis 5 étoiles publiés sur nos annonces Airbnb. Des voyageurs contents, c'est un bien qui se loue.
        </p>
      </div>
      <div className="space-y-4" aria-label="Avis voyageurs Airbnb">
        <Bande items={avis.slice(0, 6)} sens="gauche" />
        <Bande items={avis.slice(6)} sens="droite" />
      </div>
    </section>
  );
};

export default Avis;
