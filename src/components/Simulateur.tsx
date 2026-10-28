import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, MessageCircle } from "lucide-react";

// Clé publique Web3Forms (envoi des demandes par mail vers contact@nomadair.co).
// Sans clé, le formulaire ouvre WhatsApp avec la demande pré-remplie.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const villes = [
  "Paris (75)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-d'Oise (95)",
  "Marrakech",
  "Tanger",
];

const Simulateur = () => {
  const [prenom, setPrenom] = useState("");
  const [ville, setVille] = useState("");
  const [surface, setSurface] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isValid = prenom.trim() && ville && surface && email.trim() && telephone.trim();

  const whatsappMessage = `Bonjour, je souhaite estimer les revenus de mon bien de ${surface}m² à ${ville}. Mon prénom : ${prenom}.`;
  const whatsappLink = `https://wa.me/33619741903?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (!WEB3FORMS_KEY) {
        window.open(whatsappLink, "_blank", "noopener,noreferrer");
        setSubmitted(true);
      } else {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Demande d'estimation : ${prenom}, ${ville}`,
            from_name: "Site nomadair.co",
            Prénom: prenom,
            Ville: ville,
            Surface: `${surface} m²`,
            Email: email,
            Téléphone: telephone,
          }),
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting lead:", err);
      setSubmitError("Une erreur est survenue. Écrivez-nous directement sur WhatsApp.");
    }

    setIsSubmitting(false);
  };


  return (
    <section id="simulateur" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nomad-black mb-4">
            Combien peut rapporter votre bien ?
          </h2>
          <p className="text-nomad-black/60 text-base md:text-lg max-w-xl mx-auto">
            5 informations, 30 secondes. On vous rappelle avec une estimation pour votre quartier.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Prénom */}
                <div>
                  <label className="block text-sm font-medium text-nomad-black mb-1.5">
                    Prénom
                  </label>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nomad-blue/30 focus:border-nomad-blue/30 transition-all text-sm"
                    required
                  />
                </div>

                {/* Ville + Surface */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-nomad-black mb-1.5">
                      Ville du bien
                    </label>
                    <select
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black focus:outline-none focus:ring-2 focus:ring-nomad-blue/30 focus:border-nomad-blue/30 transition-all text-sm"
                      required
                    >
                      <option value="">Sélectionnez une ville</option>
                      {villes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-nomad-black mb-1.5">
                      Surface (m²)
                    </label>
                    <input
                      type="number"
                      value={surface}
                      onChange={(e) => setSurface(e.target.value)}
                      placeholder="Ex : 45"
                      min="10"
                      max="500"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nomad-blue/30 focus:border-nomad-blue/30 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Email + Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-nomad-black mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nomad-blue/30 focus:border-nomad-blue/30 transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-nomad-black mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nomad-blue/30 focus:border-nomad-blue/30 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Error */}
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full mt-2 px-8 py-4 bg-nomad-blue text-white font-bold text-base rounded-xl hover:bg-nomad-blue/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-nomad-blue/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Recevoir mon estimation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-nomad-black/40 mt-3">
                  Gratuit et sans engagement. Vos coordonnées servent uniquement à vous rappeler. Estimation indicative, aucun revenu garanti.
                </p>
              </form>
            ) : (
              /* Success state */
              <div className="text-center py-6 animate-scale-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-nomad-black mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-nomad-black/60 text-sm mb-8 max-w-sm mx-auto">
                  Merci {prenom}. On vous rappelle très vite avec une estimation pour votre bien à {ville}.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold text-sm rounded-full hover:bg-[#1fb855] transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter maintenant sur WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulateur;