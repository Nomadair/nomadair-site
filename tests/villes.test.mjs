// Pages locales « Conciergerie Airbnb [ville] » : une seule source de vérité, des textes vrais.
import { test } from "node:test";
import assert from "node:assert/strict";
import { PAGES_LOCALES, pageLocale } from "../lib/villes.ts";

const tout = (p) => JSON.stringify(p);

test("trois pages locales, celles où NomadAir gère un vrai bien, plus le hub 93", () => {
  assert.deepEqual(PAGES_LOCALES.map((p) => p.slug), ["saint-ouen", "le-blanc-mesnil", "seine-saint-denis"]);
  assert.equal(pageLocale("paris"), undefined);
  assert.equal(pageLocale("saint-ouen").nom, "Saint-Ouen");
});

test("titres et descriptions taillés pour Google", () => {
  for (const p of PAGES_LOCALES) {
    assert.ok(p.titre.length <= 60, `${p.slug} : titre trop long (${p.titre.length})`);
    assert.ok(p.titre.includes("Conciergerie Airbnb"), `${p.slug} : titre sans le mot-clé`);
    assert.ok(p.description.length <= 155, `${p.slug} : description trop longue (${p.description.length})`);
    assert.ok(p.h1.startsWith("Conciergerie Airbnb"), `${p.slug} : H1 sans le mot-clé`);
  }
  assert.equal(new Set(PAGES_LOCALES.map((p) => p.titre)).size, PAGES_LOCALES.length, "titres en double");
});

test("les villes voisines existent toutes", () => {
  const slugs = new Set(PAGES_LOCALES.map((p) => p.slug));
  for (const p of PAGES_LOCALES) {
    assert.ok(p.voisines.length > 0, `${p.slug} sans voisines`);
    for (const v of p.voisines) assert.ok(slugs.has(v) && v !== p.slug, `${p.slug} → ${v} inconnue`);
  }
});

test("les vraies notes Airbnb, et rien d'inventé", () => {
  assert.equal(pageLocale("saint-ouen").annonce.note, "4,76");
  assert.equal(pageLocale("le-blanc-mesnil").annonce.note, "4,65");
  for (const p of PAGES_LOCALES) {
    assert.ok(p.faq.length >= 4, `${p.slug} : FAQ trop courte`);
    for (const interdit of ["Superh", "Corse", "06 19", "AirDNA estime"]) {
      assert.ok(!tout(p).includes(interdit), `${p.slug} contient « ${interdit} »`);
    }
  }
});

test("la FAQ prix dit que le ménage est payé par le voyageur", () => {
  for (const p of PAGES_LOCALES) {
    assert.ok(tout(p).includes("frais de ménage sont payés par le voyageur"), `${p.slug} : ménage flou`);
  }
});
