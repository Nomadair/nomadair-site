import { ClipboardCheck, FileText, Wallet } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "On audite votre bien",
    description: "Vous nous envoyez votre demande. On étudie votre quartier avec AirDNA et on vous rappelle avec une projection de revenus réaliste.",
  },
  {
    icon: FileText,
    number: "02",
    title: "On fixe les règles",
    description: "On visite votre bien. Ensemble, on fixe votre prix minimum, vos dates personnelles et un contrat clair.",
  },
  {
    icon: Wallet,
    number: "03",
    title: "On gère, vous encaissez",
    description: "On s'occupe de tout. Vous suivez chaque réservation et chaque euro depuis votre QG NomadAir.",
  },
];

const Process = () => {
  return (
    <section id="processus" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Trois étapes, sans surprise.
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg max-w-xl mx-auto">
            Vous ne signez qu'après avoir vu les chiffres.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gray-200" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 group-hover:border-nomad-blue/20 group-hover:bg-nomad-blue/5 transition-all duration-300 mb-6">
                <step.icon className="w-8 h-8 text-nomad-black/70 group-hover:text-nomad-blue transition-colors duration-300" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-nomad-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-nomad-black mb-2">
                {step.title}
              </h3>
              <p className="text-nomad-black/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;