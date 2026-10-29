const questions = [
  {
    q: "Combien je vais gagner ?",
    a: "Ça dépend du quartier et du bien. On vous donne une estimation chiffrée et prudente, jamais une promesse.",
  },
  {
    q: "Comment je touche mes revenus ?",
    a: "Vos revenus vous sont reversés avec un relevé détaillé, et vous les suivez en temps réel dans votre QG NomadAir. Notre commission : 20 % des nuits encaissées, rien d'autre.",
  },
  {
    q: "Je peux encore utiliser mon logement ?",
    a: "Oui. Bloquez vos dates à l'avance, elles restent à vous.",
  },
  {
    q: "Et si un voyageur abîme quelque chose ?",
    a: "On photographie le logement après chaque séjour, donc on voit tout de suite ce qui a bougé. On fait réparer, et on monte le dossier de remboursement AirCover auprès d'Airbnb dans les délais. Vous suivez le dossier dans votre QG.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "À Paris, dans les Hauts-de-Seine, la Seine-Saint-Denis et le Val-d'Oise, ainsi qu'à Marrakech et Tanger. La Corse ouvre en 2027 : on étudie déjà les biens.",
  },
  {
    q: "Conciergerie ou gestion immobilière, quelle différence ?",
    a: "Une conciergerie remet des clés. Nous, on gère votre location de bout en bout : étude de marché, annonce, prix, voyageurs, ménage, entretien et suivi de vos revenus.",
  },
  {
    q: "Comment savez-vous combien mon bien peut rapporter ?",
    a: "On utilise AirDNA, l'outil de référence des données Airbnb dans le monde. On compare votre bien aux logements similaires de votre rue : occupation, prix par nuit, saisons fortes. Vous recevez une projection sur 12 mois, avec les sources.",
  },
  {
    q: "Comment l'IA nous aide à gérer votre bien ?",
    a: "Elle prend en charge les tâches répétitives : réponses aux voyageurs, envoi des codes, ajustement des prix, alertes. Nos équipes gardent la main sur chaque décision.",
  },
];

const Questions = () => {
  return (
    <section id="questions" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black">
            Vos questions, nos réponses.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {questions.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-[#F5F6F7] px-6 py-5 open:bg-[#E7F2FE] transition-colors">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base md:text-xl font-medium text-nomad-black">
                {item.q}
                <span className="text-nomad-blue text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-nomad-black/60 text-sm md:text-base leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export { questions };
export default Questions;
