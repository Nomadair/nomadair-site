# Passage du site nomadair.co sur Next.js — plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** remplacer la base React/Vite du site vitrine par Next.js, au rendu identique, avec la maquette du QG transformée en conversation Telegram propriétaire.

**Architecture:** Next.js App Router en export statique (`output: "export"`), publié par GitHub Actions sur GitHub Pages (domaine `nomadair.co` déjà déclaré). Une seule page `/`, sections reprises des composants actuels. Les composants à état (menu, formulaire, apparitions) sont des composants client ; tout le reste est rendu au build. Aucun serveur : l'espace propriétaire est le QG sur Telegram (chantier séparé dans `qg-nomadair`).

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3 (config actuelle conservée), `next/font/google` (Outfit), test de fumée avec `node --test` sur le dossier `out/`.

**Spec:** décisions de Kenny du 28-29/10/2026 dans cette conversation : même rendu que la version publiée `0137a4d` ; site seulement ; espace propriétaire = QG Telegram ; décisions techniques laissées à Claude.

## Global Constraints

- Rendu identique à `main@0137a4d` : mêmes textes, couleurs (`#111111`, `#FFFFFF`, `#53A2F9`), police Outfit, ordre des sections.
- Aucun chiffre ou avis inventé ; avis et notes Airbnb repris tels quels.
- Le build doit produire un site 100 % statique dans `out/` (aucune route serveur, aucune API).
- Contrôles de sortie : `taste-skill lint` 0 FAIL, `taste-skill inspect` 0 FAIL hors signature d'accueil, `impeccable detect` sans alerte de contraste.
- Le fichier `CNAME` (`nomadair.co`), `robots.txt`, `sitemap.xml` et `llms.txt` sont publiés à la racine.

## Review Focus

- Lien d'ancre depuis la barre (`#qg`, `#avis`…) : la section arrive sous la barre fixe, pas cachée → couvert par `scroll-margin-top` dans `globals.css`, vérifié à l'inspection.
- Formulaire sans clé Web3Forms : doit ouvrir WhatsApp pré-rempli au lieu d'échouer → test de fumée sur la présence de `wa.me` dans le JS du formulaire + essai manuel.
- Visiteur avec « réduire les animations » : tout le contenu visible, aucun texte masqué → vérifié à l'inspection (0 élément `.a-apparaitre` resté caché).
- Rechargement d'une adresse inconnue (`/xyz`) sur GitHub Pages : renvoie la page 404 de Next, pas une page blanche → `not-found.tsx` exporté en `404.html`, testé.
- Partage du lien sur WhatsApp/LinkedIn : titre, description et image d'aperçu présents → test de fumée sur `og:title`, `og:image`.

---

### Task 1: Socle Next.js qui compile en statique

**Files:**
- Create: `next.config.mjs`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/not-found.tsx`, `tests/fumee.test.mjs`
- Modify: `package.json` (scripts `dev`, `build`, `test`), `tsconfig.json`, `tailwind.config.ts` (`content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]`), `.gitignore` (`.next/`, `out/`)
- Delete: `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`, `prerender/`, `src/pages/`, `src/components/ui/`, `src/components/blog/`, `src/lib/`, `src/hooks/use-*.ts*`, `eslint.config.js`, `components.json`, `tsconfig.app.json`, `tsconfig.node.json`, `postcss.config.js` remplacé par `postcss.config.mjs`

**Interfaces:**
- Produces: `app/layout.tsx` exporte `metadata` (title, description, keywords, openGraph, twitter) et rend `<html lang="fr">` avec la police Outfit en variable `--font-outfit` et le JSON-LD (LocalBusiness, Service, FAQPage repris de `index.html` actuel).

- [ ] Step 1: écrire `tests/fumee.test.mjs` : lit `out/index.html` et vérifie : contient `<html lang="fr"`, contient `Vous possédez.`, contient `og:title`, contient `og:image`, contient `"@type":"FAQPage"` ; `out/404.html`, `out/CNAME` (= `nomadair.co`), `out/robots.txt`, `out/sitemap.xml`, `out/llms.txt` existent.
- [ ] Step 2: `npm test` → FAIL (pas de `out/`).
- [ ] Step 3: installer `next react react-dom` et retirer Vite et les paquets inutilisés ; `next.config.mjs` = `{ output: "export", images: { unoptimized: true }, trailingSlash: false }` ; layout + page minimale avec le h1 ; `public/` conserve CNAME, robots, sitemap, llms, logos, annonces, destinations.
- [ ] Step 4: `npm run build && npm test` → PASS.
- [ ] Step 5: commit « Socle Next.js en export statique ».

### Task 2: Reprise des sections à l'identique

**Files:**
- Move: `src/components/*.tsx` → `components/*.tsx` (Hero, Annonces, Expertise, Douleurs, Avis, Offres, Destinations, Process, Questions, Simulateur, Footer, Navbar, WhatsAppButton, Logo)
- Move: `src/hooks/useApparitions.ts` → `components/Apparitions.tsx` (composant client sans rendu qui appelle le hook)
- Modify: `app/page.tsx` (ordre : Navbar, Hero, Annonces, Expertise, Douleurs, Avis, Offres, Destinations, Process, Questions, Simulateur, Footer, WhatsAppButton, Apparitions), `app/globals.css` (contenu de `src/index.css`, sans l'import Google Fonts remplacé par `next/font`)

**Interfaces:**
- Consumes: layout de la tâche 1.
- Produces: composants client marqués `"use client"` : `Navbar`, `Simulateur`, `Apparitions` ; les autres restent serveur. Variable d'environnement `NEXT_PUBLIC_WEB3FORMS_KEY` remplace `VITE_WEB3FORMS_KEY`.

- [ ] Step 1: ajouter au test de fumée : `out/index.html` contient `Nos annonces Airbnb.`, `Le QG NomadAir, tout en clair.`, `Les galères ? Réglées.`, `20`, `En France et au Maroc.`, `Trois étapes, sans surprise.`, `Demandez l'audit gratuit de votre bien.` ; le JS du formulaire contient `wa.me/33619741903`.
- [ ] Step 2: `npm test` → FAIL.
- [ ] Step 3: déplacer et brancher les composants ; remplacer `import.meta.env.VITE_WEB3FORMS_KEY` par `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`.
- [ ] Step 4: `npm run build && npm test` → PASS ; capture à 1440/768/390 comparée à la version publiée.
- [ ] Step 5: commit « Sections reprises en Next.js ».

### Task 3: Maquette du QG en conversation Telegram

**Files:**
- Modify: `components/Expertise.tsx` (remplace `QGApercu` par `QGTelegram`)

**Interfaces:**
- Produces: `QGTelegram` (fragment `data-ui`), conversation fictive marquée « Exemple de conversation » : propriétaire « Combien j'ai gagné ce mois-ci ? » → QG « Octobre : 2 840 € encaissés, 568 € de commission, 2 272 € pour vous. 26 nuits louées sur 31. » ; propriétaire « Le ménage est fait pour vendredi ? » → QG « Oui, validé hier à 14 h, 14 photos. Prochaine arrivée vendredi 15 h, Camille, 3 nuits. »

- [ ] Step 1: ajouter au test de fumée : `out/index.html` contient `Combien j'ai gagné ce mois-ci ?` et `Exemple de conversation`.
- [ ] Step 2: `npm test` → FAIL.
- [ ] Step 3: construire la bulle Telegram (fond conversation, bulles propriétaire à droite, QG à gauche avec le symbole NomadAir), texte de la section ajusté : « Votre QG sur Telegram » dans les points de transparence.
- [ ] Step 4: `npm run build && npm test` → PASS.
- [ ] Step 5: commit « QG en conversation Telegram ».

### Task 4: Publication et contrôles

**Files:**
- Modify: `.github/workflows/deploy.yml` (`npm ci` → `npm run build` → `upload-pages-artifact` avec `path: out`, variable `NEXT_PUBLIC_WEB3FORMS_KEY: ${{ vars.WEB3FORMS_KEY }}`)
- Modify: `/Users/kenny.s/skil pro max/.claude/launch.json` (`site-nomadair` lance `next dev -p 3000` ; `site-nomadair-prod` sert `out/`)

- [ ] Step 1: `taste-skill lint components app` → 0 FAIL ; `inspect http://localhost:4173/` → 0 FAIL hors signature ; `impeccable detect` → aucune alerte de contraste.
- [ ] Step 2: push sur `main`, attendre l'exécution « Publier le site » → success.
- [ ] Step 3: commit éventuel des corrections, mise à jour du suivi dans `NOMADAIR/03_Acquisition/2026-10-28-plan-sortie-atoms.md`.
