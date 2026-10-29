// Demande d'audit d'un bien : ce que le formulaire collecte pour lancer la projection AirDNA.
export type DemandeAudit = {
  adresse: string;
  type: string;
  chambres: string;
  sallesDeBain: string;
  voyageurs: string;
  surface: string;
  atouts: string[];
  situation: string;
  lienAnnonce: string;
  revenuActuel: string;
  prenom: string;
  email: string;
  telephone: string;
};

export const NUMERO_WHATSAPP = "33619741903";

const NON_PRECISE = "non précisé";
const rempli = (v: string) => v.trim().length > 0;
const pluriel = (n: string, mot: string) => `${n} ${mot}${Number(n) > 1 ? "s" : ""}`;
const lienWa = (message: string) => `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;

// Champs envoyés par mail (Web3Forms), dans l'ordre où on les lit pour faire la projection.
export function resumeMail(d: DemandeAudit): Record<string, string> {
  return {
    "Adresse": d.adresse,
    "Type": d.type,
    "Chambres": d.chambres,
    "Salles de bain": d.sallesDeBain,
    "Voyageurs": d.voyageurs,
    "Surface": `${d.surface} m²`,
    "Atouts": d.atouts.length ? d.atouts.join(", ") : "aucun indiqué",
    "Situation actuelle": d.situation || NON_PRECISE,
    "Lien de l'annonce": rempli(d.lienAnnonce) ? d.lienAnnonce : NON_PRECISE,
    "Revenu ou loyer actuel": rempli(d.revenuActuel) ? `${d.revenuActuel} € par mois` : NON_PRECISE,
    "Prénom": d.prenom,
    "Email": d.email,
    "Téléphone": d.telephone,
  };
}

// Message de repli quand le mail ne peut pas partir : tout est écrit dans WhatsApp.
export function messageAudit(d: DemandeAudit): string {
  const r = resumeMail(d);
  return [
    `Bonjour, je souhaite un audit de mon bien : ${d.type.toLowerCase()} de ${d.surface} m², ${pluriel(d.chambres, "chambre")}, ${pluriel(d.sallesDeBain, "salle")} de bain, ${pluriel(d.voyageurs, "voyageur")}.`,
    `Adresse : ${d.adresse}`,
    `Atouts : ${r["Atouts"]}`,
    `Situation actuelle : ${r["Situation actuelle"]}`,
    `Annonce : ${r["Lien de l'annonce"]}`,
    `Revenu ou loyer actuel : ${r["Revenu ou loyer actuel"]}`,
    `Prénom : ${d.prenom}`,
    `Email : ${d.email}`,
    `Téléphone : ${d.telephone}`,
  ].join("\n");
}

export function lienWhatsAppAudit(d: DemandeAudit): string {
  return lienWa(messageAudit(d));
}

// Après l'envoi : le propriétaire envoie ses photos sur WhatsApp, message déjà prêt.
export function lienPhotos(d: DemandeAudit): string {
  return lienWa(`Bonjour, c'est ${d.prenom}. Voici les photos de mon bien au ${d.adresse} pour l'audit NomadAir.`);
}

// Étape 1 : le bien. Étape 2 : les coordonnées.
export function etapeComplete(etape: 1 | 2, d: DemandeAudit): boolean {
  if (etape === 1) {
    return [d.adresse, d.type, d.chambres, d.sallesDeBain, d.voyageurs, d.surface].every(rempli);
  }
  return rempli(d.prenom) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()) && rempli(d.telephone);
}
