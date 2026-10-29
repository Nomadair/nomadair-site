// Règle du choix cookies : lu, enregistré, valable 6 mois.
import { test } from "node:test";
import assert from "node:assert/strict";
import { lireConsentement, enregistrerConsentement } from "../lib/consentement.ts";

const stockageVide = () => {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) };
};

test("sans choix enregistré, aucun consentement", () => {
  assert.equal(lireConsentement(stockageVide(), new Date("2026-10-29")), null);
});

test("un choix enregistré est relu le lendemain", () => {
  const s = stockageVide();
  enregistrerConsentement(s, "accepte", new Date("2026-10-29"));
  assert.equal(lireConsentement(s, new Date("2026-10-30")), "accepte");
  enregistrerConsentement(s, "refuse", new Date("2026-10-29"));
  assert.equal(lireConsentement(s, new Date("2026-10-30")), "refuse");
});

test("le choix expire après 6 mois et le bandeau revient", () => {
  const s = stockageVide();
  enregistrerConsentement(s, "accepte", new Date("2026-10-29"));
  assert.equal(lireConsentement(s, new Date("2027-04-28")), "accepte");
  assert.equal(lireConsentement(s, new Date("2027-04-30")), null);
});

test("une valeur abîmée ou inconnue est ignorée sans erreur", () => {
  for (const brut of ["pas du json", '{"choix":"peut-etre","date":"2026-10-29T00:00:00.000Z"}', '{"choix":"accepte","date":"n importe quoi"}']) {
    const s = stockageVide();
    s.setItem("nomadair-consentement", brut);
    assert.equal(lireConsentement(s, new Date("2026-10-30")), null, brut);
  }
});
