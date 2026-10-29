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
  const trouve = fichiers.some((f) => {
    const code = readFileSync(join(dossier, String(f)), "utf8");
    return code.includes("33619741903") && code.includes("wa.me/") && code.includes("noopener,noreferrer");
  });
  assert.ok(trouve, "le formulaire n'ouvre pas WhatsApp en repli");
});

test("le QG est montré comme une conversation Telegram", () => {
  const html = page().replace(/&#x27;|&#39;/g, "'");
  assert.ok(html.includes("Combien j'ai gagné ce mois-ci ?"), "question du propriétaire absente");
  assert.ok(html.includes("Exemple de conversation"), "mention d'exemple absente");
});

test("en repli WhatsApp, l'écran demande d'envoyer le message au lieu d'annoncer un envoi", () => {
  const dossier = join(OUT, "_next", "static", "chunks");
  const code = readdirSync(dossier, { recursive: true })
    .filter((f) => String(f).endsWith(".js"))
    .map((f) => readFileSync(join(dossier, String(f)), "utf8"))
    .join("\n");
  assert.ok(code.includes("Envoyez le message WhatsApp pour finaliser"), "texte de repli absent");
});

test("un seul numéro de contact : le 06 19 74 19 03", () => {
  const publie = [page(), readFileSync(join(OUT, "llms.txt"), "utf8")].join("\n");
  assert.ok(!publie.includes("767211909") && !publie.includes("67 21 19 09"), "l'ancien numéro est encore publié");
  assert.ok(publie.includes("+33619741903"), "le numéro du site manque dans les données Google");
});

test("Google Analytics n'est pas chargé avant le consentement", () => {
  assert.ok(!page().includes("googletagmanager.com"), "le script Google est dans la page avant tout choix");
});

test("le bandeau propose Refuser et Accepter, et le pied de page « Gérer les cookies »", () => {
  const dossier = join(OUT, "_next", "static", "chunks");
  const code = readdirSync(dossier, { recursive: true })
    .filter((f) => String(f).endsWith(".js"))
    .map((f) => readFileSync(join(dossier, String(f)), "utf8"))
    .join("\n");
  assert.ok(code.includes("Tout refuser") && code.includes("Tout accepter"), "boutons du bandeau absents");
  assert.ok(page().includes("Gérer les cookies"), "lien du pied de page absent");
});
