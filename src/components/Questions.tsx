const questions = [
  {
    q: "Combien je vais gagner ?",
    a: "Ça dépend du quartier et du bien. On vous donne une estimation chiffrée et prudente, jamais une promesse.",
  },
  {
    q: "Qui encaisse l'argent ?",
    a: "Vous. Vos revenus arrivent directement sur votre compte. Notre commission, c'est 20 % des nuits encaissées.",
  },
  {
    q: "Je peux encore utiliser mon logement ?",
    a: "Oui. Bloquez vos dates à l'avance, elles restent à vous.",
  },
  {
    q: "Et si un voyageur abîme quelque chose ?",
    a: "On photographie le logement après chaque séjour. En cas de dégât, on monte le dossier auprès d'Airbnb dans les délais.",
  },
  {
    q: "Où intervenez-vous ?",
    a: "À Paris, dans les Hauts-de-Seine, la Seine-Saint-Denis et le Val-d'Oise, ainsi qu'à Marrakech et Tanger.",
  },
];

const Questions = () => {
  return (
    <section id="questions" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Vos questions, nos réponses.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-gray-100 border-y border-gray-100">
          {questions.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base md:text-lg font-semibold text-nomad-black">
                {item.q}
                <span className="text-nomad-blue text-2xl leading-none transition-transform duration-200 group-open:rotate-45">
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

export default Questions;
