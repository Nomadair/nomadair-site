// Test de fumée sur le site exporté (dossier out/) : la page publiée contient l'essentiel.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));
const page = () => readFileSync(join(OUT, "index.html"), "utf8");

test("la page d'accueil est en français et porte la signature", () => {
  const html = page();
  assert.match(html, /<html lang="fr"/);
  assert.match(html, /Vous possédez\./);
});

test("les balises de partage sont présentes", () => {
  const html = page();
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:image"/);
});

test("la FAQ structurée est publiée pour Google", () => {
  assert.match(page(), /"@type":"FAQPage"/);
});

test("les fichiers racine sont publiés", () => {
  for (const f of ["404.html", "CNAME", "robots.txt", "sitemap.xml", "llms.txt"]) {
    assert.ok(existsSync(join(OUT, f)), `${f} manquant`);
  }
  assert.equal(readFileSync(join(OUT, "CNAME"), "utf8").trim(), "nomadair.co");
});

export { OUT, page, readdirSync };

test("toutes les sections du site sont présentes", () => {
  const html = page().replace(/&#x27;|&#39;/g, "'");
  for (const titre of [
    "Nos annonces Airbnb.",
    "Le QG NomadAir, tout en clair.",
    "Les galères ? Réglées.",
    "Ce que disent nos voyageurs.",
    "En France et au Maroc.",
    "Trois étapes, sans surprise.",
    "Demandez l'audit gratuit de votre bien.",
  ]) {
    assert.ok(html.includes(titre), `section manquante : ${titre}`);
  }
});

test("sans clé mail, le formulaire bascule sur WhatsApp", () => {
  const dossier = join(OUT, "_next", "static", "chunks");
  const fichiers = readdirSync(dossier, { recursive: true }).filter((f) => String(f).endsWith(".js"));
  const trouve = fichiers.some((f) => readFileSync(join(dossier, String(f)), "utf8").includes("wa.me/33619741903"));
  assert.ok(trouve, "le lien WhatsApp du formulaire est absent du code publié");
});

test("le QG est montré comme une conversation Telegram", () => {
  const html = page().replace(/&#x27;|&#39;/g, "'");
  assert.ok(html.includes("Combien j'ai gagné ce mois-ci ?"), "question du propriétaire absente");
  assert.ok(html.includes("Exemple de conversation"), "mention d'exemple absente");
});
