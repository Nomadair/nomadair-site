// Demande d'audit : contenu du mail, message WhatsApp, lien photos, étapes du formulaire.
import { test } from "node:test";
import assert from "node:assert/strict";
import { messageAudit, lienWhatsAppAudit, lienPhotos, resumeMail, etapeComplete } from "../lib/whatsapp.ts";

const demande = {
  adresse: "12 rue Arago, 93400 Saint-Ouen",
  type: "Appartement",
  chambres: "2",
  sallesDeBain: "1",
  voyageurs: "4",
  surface: "55",
  atouts: ["Balcon ou terrasse", "Parking"],
  situation: "Loué à l'année",
  lienAnnonce: "https://www.seloger.com/annonces/123",
  revenuActuel: "1100",
  prenom: "Lina",
  email: "lina@exemple.fr",
  telephone: "06 12 34 56 78",
};

test("le mail reprend tout ce qu'il faut pour la projection AirDNA", () => {
  const r = resumeMail(demande);
  assert.equal(r["Adresse"], "12 rue Arago, 93400 Saint-Ouen");
  assert.equal(r["Type"], "Appartement");
  assert.equal(r["Chambres"], "2");
  assert.equal(r["Salles de bain"], "1");
  assert.equal(r["Voyageurs"], "4");
  assert.equal(r["Surface"], "55 m²");
  assert.equal(r["Atouts"], "Balcon ou terrasse, Parking");
  assert.equal(r["Situation actuelle"], "Loué à l'année");
  assert.equal(r["Lien de l'annonce"], "https://www.seloger.com/annonces/123");
  assert.equal(r["Revenu ou loyer actuel"], "1100 € par mois");
  assert.equal(r["Téléphone"], "06 12 34 56 78");
});

test("les champs facultatifs vides sont notés « non précisé »", () => {
  const r = resumeMail({ ...demande, atouts: [], lienAnnonce: "", revenuActuel: "" });
  assert.equal(r["Atouts"], "aucun indiqué");
  assert.equal(r["Lien de l'annonce"], "non précisé");
  assert.equal(r["Revenu ou loyer actuel"], "non précisé");
});

test("le message WhatsApp de repli contient adresse, chambres, coordonnées", () => {
  const m = messageAudit(demande);
  for (const v of ["12 rue Arago, 93400 Saint-Ouen", "2 chambres", "1 salle de bain", "4 voyageurs", "55 m²", "lina@exemple.fr", "06 12 34 56 78"]) {
    assert.ok(m.includes(v), `absent du message : ${v}`);
  }
  assert.ok(lienWhatsAppAudit(demande).startsWith("https://wa.me/33619741903?text="));
});

test("le lien photos ouvre WhatsApp avec un message prêt", () => {
  const lien = lienPhotos(demande);
  assert.ok(lien.startsWith("https://wa.me/33619741903?text="));
  const m = decodeURIComponent(lien.split("text=")[1]);
  assert.ok(m.includes("photos") && m.includes("Lina") && m.includes("12 rue Arago"));
});

test("étape 1 exige le bien, étape 2 exige les coordonnées", () => {
  assert.equal(etapeComplete(1, demande), true);
  assert.equal(etapeComplete(1, { ...demande, adresse: " " }), false);
  assert.equal(etapeComplete(1, { ...demande, chambres: "" }), false);
  assert.equal(etapeComplete(1, { ...demande, lienAnnonce: "", revenuActuel: "", atouts: [] }), true);
  assert.equal(etapeComplete(2, demande), true);
  assert.equal(etapeComplete(2, { ...demande, telephone: "" }), false);
  assert.equal(etapeComplete(2, { ...demande, email: "pas-un-mail" }), false);
});
