"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Camera, CheckCircle, Loader2 } from "lucide-react";
import { etapeComplete, lienPhotos, lienWhatsAppAudit, resumeMail, type DemandeAudit } from "@/lib/whatsapp";

// Clé publique Web3Forms : les demandes arrivent par mail. Sans clé, repli sur WhatsApp.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const TYPES = ["Appartement", "Studio", "Maison", "Villa"];
const CHAMBRES = ["1", "2", "3", "4", "5"];
const SALLES = ["1", "2", "3"];
const VOYAGEURS = ["1", "2", "3", "4", "5", "6", "7", "8", "10", "12"];
const ATOUTS = ["Balcon ou terrasse", "Parking", "Jardin", "Ascenseur", "Piscine", "Climatisation"];
const SITUATIONS = ["Vide", "Loué à l'année", "Déjà sur Airbnb", "Résidence principale", "En travaux"];

const VIDE: DemandeAudit = {
  adresse: "",
  type: "",
  chambres: "",
  sallesDeBain: "",
  voyageurs: "",
  surface: "",
  atouts: [],
  situation: "",
  lienAnnonce: "",
  revenuActuel: "",
  prenom: "",
  email: "",
  telephone: "",
};

const CHAMP =
  "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-nomad-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nomad-blue/40 focus:border-nomad-blue transition-colors text-[15px]";
const LIBELLE = "block text-sm font-medium text-nomad-black mb-1.5";
const BOUTON =
  "inline-flex items-center justify-center gap-2 px-8 py-4 bg-nomad-black text-white font-medium text-base rounded-full hover:bg-nomad-blue hover:text-nomad-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors";

const Simulateur = () => {
  const [d, setD] = useState<DemandeAudit>(VIDE);
  const [etape, setEtape] = useState<1 | 2>(1);
  const [envoi, setEnvoi] = useState(false);
  const [fini, setFini] = useState<null | "mail" | "whatsapp">(null);
  const [erreur, setErreur] = useState("");

  const maj = (champ: keyof DemandeAudit) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setD({ ...d, [champ]: e.target.value });

  const basculerAtout = (atout: string) =>
    setD({ ...d, atouts: d.atouts.includes(atout) ? d.atouts.filter((a) => a !== atout) : [...d.atouts, atout] });

  const envoyer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (etape === 1) {
      if (etapeComplete(1, d)) setEtape(2);
      return;
    }
    if (!etapeComplete(2, d)) return;
    setEnvoi(true);
    setErreur("");
    try {
      if (!WEB3FORMS_KEY) {
        window.open(lienWhatsAppAudit(d), "_blank", "noopener,noreferrer");
        setFini("whatsapp");
      } else {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Demande d'audit : ${d.prenom}, ${d.adresse}`,
            from_name: "Site nomadair.co",
            replyto: d.email,
            ...resumeMail(d),
          }),
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        setFini("mail");
      }
    } catch (err) {
      console.error("Envoi de la demande d'audit impossible :", err);
      setErreur("L'envoi n'a pas abouti. Envoyez-nous la demande sur WhatsApp, elle est déjà écrite.");
    }
    setEnvoi(false);
  };

  return (
    <section id="simulateur" className="py-24 md:py-36 bg-nomad-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black mb-4">
            Demandez l'audit gratuit de votre bien.
          </h2>
          <p className="text-nomad-black text-lg">
            Deux étapes, une minute. On étudie votre bien avec AirDNA et on vous rappelle avec une projection de
            revenus.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-7 md:p-10">
          {fini ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-5">
                <CheckCircle className="w-8 h-8 text-[#237A4B]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-medium text-nomad-black mb-3">
                {fini === "whatsapp" ? "Dernière étape sur WhatsApp" : "Demande envoyée !"}
              </h3>
              <p className="text-nomad-black/70 max-w-md mx-auto">
                {fini === "whatsapp"
                  ? `Merci ${d.prenom}. Envoyez le message WhatsApp pour finaliser : votre demande y est déjà écrite, avec vos coordonnées.`
                  : `Merci ${d.prenom}. On étudie votre bien et on vous rappelle très vite. Pour une projection plus juste, envoyez-nous quelques photos.`}
              </p>
              <a
                href={lienPhotos(d)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-nomad-black font-medium rounded-full hover:bg-[#1FB855] transition-colors"
              >
                <Camera className="w-5 h-5" aria-hidden="true" />
                Envoyer mes photos sur WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={envoyer} noValidate>
              <p className="text-sm font-medium text-nomad-black/70 mb-6" aria-live="polite">
                Étape {etape} sur 2 · {etape === 1 ? "Votre bien" : "Vos coordonnées"}
              </p>

              {etape === 1 ? (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="adresse" className={LIBELLE}>Adresse du bien</label>
                    <input id="adresse" type="text" autoComplete="street-address" value={d.adresse} onChange={maj("adresse")} placeholder="12 rue Arago, 93400 Saint-Ouen" className={CHAMP} required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="type" className={LIBELLE}>Type</label>
                      <select id="type" value={d.type} onChange={maj("type")} className={CHAMP} required>
                        <option value="">Choisir</option>
                        {TYPES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="surface" className={LIBELLE}>Surface (m²)</label>
                      <input id="surface" type="number" inputMode="numeric" min="9" max="1000" value={d.surface} onChange={maj("surface")} placeholder="45" className={CHAMP} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="chambres" className={LIBELLE}>Chambres</label>
                      <select id="chambres" value={d.chambres} onChange={maj("chambres")} className={CHAMP} required>
                        <option value="">–</option>
                        {CHAMBRES.map((n) => <option key={n} value={n}>{n === "5" ? "5 et +" : n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sdb" className={LIBELLE}>Salles de bain</label>
                      <select id="sdb" value={d.sallesDeBain} onChange={maj("sallesDeBain")} className={CHAMP} required>
                        <option value="">–</option>
                        {SALLES.map((n) => <option key={n} value={n}>{n === "3" ? "3 et +" : n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="voyageurs" className={LIBELLE}>Voyageurs</label>
                      <select id="voyageurs" value={d.voyageurs} onChange={maj("voyageurs")} className={CHAMP} required>
                        <option value="">–</option>
                        {VOYAGEURS.map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>

                  <fieldset>
                    <legend className={LIBELLE}>Atouts (facultatif)</legend>
                    <div className="flex flex-wrap gap-2">
                      {ATOUTS.map((a) => {
                        const coche = d.atouts.includes(a);
                        return (
                          <button
                            key={a}
                            type="button"
                            aria-pressed={coche}
                            onClick={() => basculerAtout(a)}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${coche ? "bg-nomad-black text-white" : "bg-[#F5F6F7] text-nomad-black hover:bg-[#E7F2FE]"}`}
                          >
                            {a}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="situation" className={LIBELLE}>Situation actuelle (facultatif)</label>
                      <select id="situation" value={d.situation} onChange={maj("situation")} className={CHAMP}>
                        <option value="">Choisir</option>
                        {SITUATIONS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="revenu" className={LIBELLE}>Loyer ou revenu actuel, € par mois (facultatif)</label>
                      <input id="revenu" type="number" inputMode="numeric" min="0" value={d.revenuActuel} onChange={maj("revenuActuel")} placeholder="1100" className={CHAMP} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="annonce" className={LIBELLE}>Lien de l'annonce Airbnb, SeLoger ou Leboncoin (facultatif)</label>
                    <input id="annonce" type="url" inputMode="url" value={d.lienAnnonce} onChange={maj("lienAnnonce")} placeholder="https://www.airbnb.fr/rooms/…" className={CHAMP} />
                  </div>

                  <button type="submit" disabled={!etapeComplete(1, d)} className={`${BOUTON} w-full mt-2`}>
                    Continuer
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="prenom" className={LIBELLE}>Prénom</label>
                    <input id="prenom" type="text" autoComplete="given-name" value={d.prenom} onChange={maj("prenom")} placeholder="Votre prénom" className={CHAMP} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={LIBELLE}>Email</label>
                      <input id="email" type="email" autoComplete="email" value={d.email} onChange={maj("email")} placeholder="votre@email.com" className={CHAMP} required />
                    </div>
                    <div>
                      <label htmlFor="telephone" className={LIBELLE}>Téléphone</label>
                      <input id="telephone" type="tel" autoComplete="tel" value={d.telephone} onChange={maj("telephone")} placeholder="06 12 34 56 78" className={CHAMP} required />
                    </div>
                  </div>

                  {erreur && (
                    <p className="p-3 bg-red-50 rounded-xl text-sm text-red-700" role="alert">
                      {erreur}{" "}
                      <a href={lienWhatsAppAudit(d)} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                        Ouvrir WhatsApp
                      </a>
                    </p>
                  )}

                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                    <button type="button" onClick={() => setEtape(1)} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#F5F6F7] text-nomad-black font-medium hover:bg-[#E7F2FE] transition-colors">
                      <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                      Retour
                    </button>
                    <button type="submit" disabled={!etapeComplete(2, d) || envoi} className={`${BOUTON} flex-1`}>
                      {envoi ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Recevoir mon audit gratuit
                          <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <p className="text-center text-sm text-nomad-black/70 mt-5">
                Gratuit et sans engagement. Vos coordonnées servent uniquement à vous rappeler. Estimation indicative,
                aucun revenu garanti.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Simulateur;
