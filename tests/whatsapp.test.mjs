// Le message WhatsApp de repli doit transmettre toutes les coordonnées saisies.
import { test } from "node:test";
import assert from "node:assert/strict";
import { messageAudit, lienWhatsAppAudit } from "../lib/whatsapp.ts";

const demande = { prenom: "Lina", ville: "Seine-Saint-Denis (93)", surface: "45", email: "lina@exemple.fr", telephone: "06 12 34 56 78" };

test("le message reprend prénom, ville, surface, email et téléphone", () => {
  const m = messageAudit(demande);
  for (const valeur of ["Lina", "Seine-Saint-Denis (93)", "45", "lina@exemple.fr", "06 12 34 56 78"]) {
    assert.ok(m.includes(valeur), `absent du message : ${valeur}`);
  }
});

test("le lien ouvre la conversation NomadAir avec le message encodé", () => {
  const lien = lienWhatsAppAudit(demande);
  assert.ok(lien.startsWith("https://wa.me/33619741903?text="));
  assert.equal(decodeURIComponent(lien.split("text=")[1]), messageAudit(demande));
});
