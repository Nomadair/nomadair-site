import { BarChart3, Bot, Eye } from "lucide-react";

const piliers = [
  {
    icon: BarChart3,
    titre: "Des études de marché AirDNA",
    texte:
      "Avant de vous proposer quoi que ce soit, on analyse votre quartier avec AirDNA : taux d'occupation, prix moyen, saisonnalité, concurrence. Vous recevez une projection de revenus prudente, chiffrée, expliquée.",
  },
  {
    icon: Bot,
    titre: "Une gestion automatisée",
    texte:
      "Nos outils répondent aux voyageurs, envoient codes et consignes au bon moment, ajustent les prix chaque jour et nous alertent au moindre souci. Résultat : zéro oubli, et une équipe concentrée sur ce qui compte.",
  },
  {
    icon: Eye,
    titre: "Tout suivre en temps réel",
    texte:
      "Votre espace QG NomadAir vous montre tout, en direct : réservations, revenus, avis, ménage, incidents. Un relevé clair à tout moment, sans avoir à demander.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Pourquoi les propriétaires nous confient leur bien.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg">
            Nos standards sont ceux des Superhôtes Airbnb : note visée de 4,8, réponse en moins d'une heure, logement impeccable à chaque arrivée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {piliers.map((p) => (
            <div key={p.titre} className="p-8 rounded-2xl border border-gray-100">
              <p.icon className="w-8 h-8 text-nomad-blue mb-5" />
              <h3 className="text-lg font-bold text-nomad-black mb-3">{p.titre}</h3>
              <p className="text-nomad-black/60 text-sm leading-relaxed">{p.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
