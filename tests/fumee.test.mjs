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
