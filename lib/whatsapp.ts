// Message de repli quand le formulaire ne peut pas envoyer de mail : tout part sur WhatsApp.
export type DemandeAudit = {
  prenom: string;
  ville: string;
  surface: string;
  email: string;
  telephone: string;
};

export const NUMERO_WHATSAPP = "33619741903";

export function messageAudit(d: DemandeAudit): string {
  return [
    `Bonjour, je souhaite un audit de mon bien de ${d.surface} m² à ${d.ville}.`,
    `Prénom : ${d.prenom}`,
    `Email : ${d.email}`,
    `Téléphone : ${d.telephone}`,
  ].join("\n");
}

export function lienWhatsAppAudit(d: DemandeAudit): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(messageAudit(d))}`;
}
