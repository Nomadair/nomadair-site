# SEO nomadair.co : pages villes, tarifs et signaux Google — plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** faire ranker nomadair.co sur « conciergerie airbnb » + Saint-Ouen, Blanc-Mesnil, Seine-Saint-Denis et « tarif conciergerie airbnb », pour dépasser Rentaplus sur le 93 et générer des demandes d'audit organiques.

**Architecture:** une seule source de vérité `lib/villes.ts` (données et textes de chaque page locale) consommée par une route statique `app/conciergerie-airbnb/[ville]/page.tsx` (`generateStaticParams`), une page `app/tarifs/page.tsx`, et un `app/sitemap.ts` généré. Les blocs visuels réutilisent Navbar, Footer, Simulateur, WhatsAppButton. L'accueil garde son design ; seuls métadonnées, H1 secondaire, JSON-LD et liens changent.

**Tech Stack:** Next.js 15 App Router, `output: "export"`, Tailwind 3, tests `node --test` (Node 22, type stripping) sur `out/`.

**Spec:** `~/Desktop/Bureau - MacBook Air de Salem/NOMADAIR/00_Strategy/2026-11-01-audit-seo-nomadair.md` (actions 2, 3, 4, 7, 8, 13).

## Global Constraints

- Mot principal : « Conciergerie Airbnb » (+ ville) dans title, H1 et premier paragraphe ; « gestion Airbnb » en second.
- Title ≤ 60 caractères, meta description ≤ 155 caractères, sur chaque page.
- Numéro unique : 07 56 91 41 43 / `+33756914143` ; jamais le 06.
- Vrais faits seulement : notes Airbnb 4,76 (Saint-Ouen) et 4,65 (Blanc-Mesnil) relevées le 28/10/2026 ; 93,6 % des nuits louées en août 2026 (biens IDF). Aucun chiffre AirDNA public, aucun avis inventé, aucun « Superhôte », pas d'`AggregateRating`.
- Pas de page-porte : une page ville n'existe que si un bien NomadAir y est géré (Saint-Ouen, Blanc-Mesnil) ; le hub 93 relie les deux.
- Corse retirée partout (accueil, JSON-LD, llms.txt).
- Commission : 20 % des revenus, tout compris.
- Chaque page : canonical propre, `BreadcrumbList`, liens vers villes voisines + accueil + tarifs + formulaire d'audit.

## Review Focus

- Une slug inconnue (`/conciergerie-airbnb/paris`) ne doit pas être générée → test : `out/conciergerie-airbnb/paris.html` absent.
- Deux pages qui se cannibalisent (même title) → test : titles uniques sur toutes les pages publiées.
- Un lien interne cassé (page voisine non générée) → test : chaque `href="/conciergerie-airbnb/..."` publié correspond à un fichier dans `out/`.
- Le sitemap oublie une page ou liste une page absente → test : URLs du sitemap = pages HTML publiées (hors 404).
- Une page ville sans le formulaire d'audit ni le 07 → test sur chaque page ville.

---

### Task 1: Données des pages locales

**Files:**
- Create: `lib/villes.ts`
- Test: `tests/villes.test.mjs`

**Interfaces:**
- Produces: `type PageLocale = { slug: string; nom: string; type: "ville" | "departement"; titre: string; description: string; h1: string; intro: string; annonce?: { titre: string; note: string; url: string; image: string; detail: string }; atouts: string[]; marche: string[]; faq: { q: string; r: string }[]; voisines: string[] }` ; `export const PAGES_LOCALES: PageLocale[]` (slugs : `saint-ouen`, `le-blanc-mesnil`, `seine-saint-denis`) ; `export function pageLocale(slug: string): PageLocale | undefined`.

- [ ] Step 1: tests : 3 slugs exactement ; chaque `titre` ≤ 60 et contient « Conciergerie Airbnb » ; chaque `description` ≤ 155 ; chaque `h1` commence par « Conciergerie Airbnb » ; titres uniques ; chaque `voisines` ne pointe que vers des slugs existants ; Saint-Ouen a la note « 4,76 », Blanc-Mesnil « 4,65 » ; aucun texte ne contient « Superh », « Corse », « 06 19 ».
- [ ] Step 2: `node --test tests/villes.test.mjs` → FAIL (module absent).
- [ ] Step 3: écrire `lib/villes.ts` (textes vrais : Puces de Saint-Ouen, ligne 14, Docks, Stade de France proche ; Blanc-Mesnil : parking, Le Bourget, Roissy ; hub 93 qui renvoie aux deux) ; FAQ locale 4-5 questions par page.
- [ ] Step 4: → PASS. Commit « SEO : données des pages locales ».

### Task 2: Route des pages locales

**Files:**
- Create: `app/conciergerie-airbnb/[ville]/page.tsx`, `components/PageLocale.tsx`
- Modify: `tests/fumee.test.mjs`

**Interfaces:**
- Consumes: `PAGES_LOCALES`, `pageLocale` (Task 1).
- Produces: `generateStaticParams()` → les 3 slugs ; `generateMetadata({ params })` → title, description, canonical `/conciergerie-airbnb/<slug>` ; JSON-LD `Service` (`areaServed` = la ville ou le département, `provider` NomadAir, `telephone` +33756914143) + `BreadcrumbList` + `FAQPage`.

- [ ] Step 1: tests sur `out/` : `conciergerie-airbnb/saint-ouen.html`, `le-blanc-mesnil.html`, `seine-saint-denis.html` existent ; `paris.html` n'existe pas ; chacune a un `<h1>` contenant « Conciergerie Airbnb », un canonical vers sa propre URL, `BreadcrumbList`, `tel:+33756914143`, le formulaire (`id="simulateur"`), et chaque lien `/conciergerie-airbnb/x` publié pointe vers un fichier existant.
- [ ] Step 2: `npm run build && npm test` → FAIL.
- [ ] Step 3: implémenter la route et le gabarit : Navbar, H1, intro, bloc annonce (vignette + note + lien Airbnb) si `annonce`, « Ce qu'on fait pour vous », « Le marché local », « 20 % tout compris » (lien `/tarifs`), FAQ, villes voisines, Simulateur, Footer, WhatsAppButton.
- [ ] Step 4: → PASS. Commit « SEO : pages Conciergerie Airbnb Saint-Ouen, Blanc-Mesnil, 93 ».

### Task 3: Page Tarifs

**Files:**
- Create: `app/tarifs/page.tsx`
- Modify: `tests/fumee.test.mjs`

- [ ] Step 1: test : `out/tarifs.html` existe ; title contient « Tarif » et « conciergerie Airbnb » (insensible à la casse) ; contient « 20 % » ; un exemple chiffré (« 2 000 € » de revenus → « 400 € » de commission → « 1 600 € » pour le propriétaire) ; liens vers les 3 pages locales ; `tel:+33756914143`.
- [ ] Step 2: → FAIL. Step 3: implémenter (ce qui est inclus, ce qui ne l'est pas, exemple, comparaison 15 / 20 / 25 % sans nommer de concurrent, FAQ prix, Simulateur). Step 4: → PASS. Commit « SEO : page Tarifs ».

### Task 4: Accueil, sitemap, maillage, llms.txt

**Files:**
- Modify: `app/layout.tsx` (title, description, suppression `keywords`, JSON-LD : plus d'`address` Paris, `areaServed` sans Corse), `components/Hero.tsx` (sous-titre visible « Conciergerie Airbnb en Seine-Saint-Denis, à Paris et au Maroc »), `components/Destinations.tsx` (Corse retirée, cartes 93 → liens pages locales), `components/Footer.tsx` (liens vers les 3 pages + Tarifs), `public/llms.txt`
- Create: `app/sitemap.ts` (`export const dynamic = "force-static"`) ; Delete: `public/sitemap.xml`
- Modify: `tests/fumee.test.mjs`

- [ ] Step 1: tests : title accueil ≤ 60 et contient « Conciergerie Airbnb » ; description ≤ 155 ; pas de `name="keywords"` ; « Corse » absent de l'accueil et de llms.txt ; footer de l'accueil lie les 3 pages + `/tarifs` ; `out/sitemap.xml` liste exactement les pages HTML publiées (hors 404), avec `lastmod` = date du build ; titles uniques sur toutes les pages.
- [ ] Step 2: → FAIL. Step 3: implémenter. Step 4: `npm run build && npm test` → tout vert. Commit « SEO : accueil conciergerie Airbnb, sitemap généré, maillage ».

### Après le dernier commit (hors code)

Pousser sur `main`, attendre le déploiement GitHub Pages, vérifier les 5 nouvelles URL en 200, puis Search Console : renvoyer le sitemap et « Demander l'indexation » sur l'accueil, Saint-Ouen, Blanc-Mesnil, 93, Tarifs.

Hors périmètre de ce plan (attendent des faits de Mohamed / Samira ou une décision) : pages Tanger et Marrakech, estimateur, blog, annuaires.
