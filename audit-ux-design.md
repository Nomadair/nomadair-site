# Audit UX/Design — Nomadair
## Site vitrine de gestion locative courte durée

**Date :** 7 mai 2026  
**Auditeur :** Emma — Product Manager  
**Périmètre :** Parcours utilisateur, lisibilité, hiérarchie visuelle, accessibilité, CTA, responsive design, cohérence visuelle

---

## 1. Résumé exécutif

Le site Nomadair présente une base solide avec une identité visuelle cohérente (bleu #53a2f9, noir #111111, blanc) et une structure de page logique. Cependant, plusieurs points de friction UX et incohérences design méritent une attention immédiate pour maximiser le taux de conversion auprès de la cible (propriétaires 30-60 ans, revenus moyens à élevés).

### Points forts
- ✅ Identité visuelle claire et premium
- ✅ Structure de page logique (Hero → Chiffres → Offres → Process → Confiance → Simulateur → Zones → Contact)
- ✅ CTA multiples et bien positionnés (WhatsApp + formulaire)
- ✅ Bouton WhatsApp flottant toujours visible
- ✅ Animations douces et non-agressives
- ✅ Simulateur de revenus interactif (engagement)

### Points critiques à corriger
- ❌ Incohérence typographique dans le Simulateur (styles différents du reste)
- ❌ Absence de preuve sociale (témoignages clients)
- ❌ Formulaire de contact sans backend fonctionnel
- ❌ Accessibilité insuffisante (contrastes, navigation clavier, ARIA)
- ❌ Duplication de composants WhatsApp (WhatsAppButton.tsx + WhatsAppFloat.tsx)

---

## 2. Analyse du parcours utilisateur

### 2.1 Flux principal identifié

```
Arrivée → Hero (promesse) → Chiffres (preuve) → Offres (choix) → Process (simplicité) 
→ Confiance (rassurance) → Simulateur (engagement) → Zones (pertinence) → Contact (conversion)
```

**Verdict :** Le parcours est logique et suit le modèle AIDA (Attention, Intérêt, Désir, Action). Cependant :

| Étape | Force | Faiblesse |
|-------|-------|-----------|
| Hero | Promesse claire, CTA visible | Trop de CTA (WhatsApp + Estimer + 2 téléphones) — dilution de l'attention |
| Chiffres | Visuellement impactant | Pas de source/contexte pour les chiffres |
| Offres | Comparaison claire des 2 formules | Pas de prix indicatif pour la sous-location |
| Process | Ultra simplifié, rassurant | Manque un élément de temporalité (timeline visuelle) |
| Confiance | 6 points de rassurance | Aucun témoignage client réel |
| Simulateur | Excellent outil d'engagement | Style visuel incohérent avec le reste du site |
| Zones | Clair et visuel | Images identiques pour Paris et Marrakech |
| Contact | Formulaire + WhatsApp | Pas de confirmation d'envoi réelle (pas de backend) |

### 2.2 Points de friction identifiés

1. **Hero surchargé** : L'utilisateur voit simultanément un bouton WhatsApp vert, un bouton bleu "Estimer mes revenus", et deux numéros de téléphone. Pour une cible non-technophile, c'est trop de choix.

2. **Absence de preuve sociale** : Aucun témoignage, avis Google, ou photo d'équipe. Pour une cible qui "cherche la confiance", c'est un manque critique.

3. **Simulateur déconnecté visuellement** : Utilise des classes Tailwind brutes (`from-blue-600 to-indigo-600`, `text-slate-900`) au lieu des tokens de design Nomadair (`nomad-blue`, `nomad-black`).

4. **Formulaire sans feedback réel** : Le `handleSubmit` ne fait que `setSubmitted(true)` — aucune donnée n'est envoyée. L'utilisateur pense avoir soumis, mais rien ne se passe côté serveur.

5. **Scroll indicator en bas du Hero** : L'indicateur de scroll (flèche animée) est un bon pattern, mais il peut être invisible sur mobile si le viewport est petit.

---

## 3. Analyse de la lisibilité

### 3.1 Typographie

| Élément | Taille | Poids | Verdict |
|---------|--------|-------|---------|
| H1 (Hero) | 4xl → 6xl responsive | font-900 | ✅ Excellent — très lisible |
| H2 (Sections) | 3xl → 4xl responsive | font-900 | ✅ Bon — cohérent |
| H3 (Cards) | xl → 2xl | font-800/900 | ✅ Bon |
| Body text | base → lg | normal/semibold | ✅ Lisible |
| Labels formulaire | sm | bold | ⚠️ Un peu petit pour la cible 50+ |
| Texte footer | sm | normal | ⚠️ Petit, mais acceptable pour un footer |

**Police Poppins** : Choix pertinent — géométrique, moderne, très lisible. Bien importée via Google Fonts avec les graisses 400-900.

### 3.2 Espacement et aération

- **Sections** : `py-20` (80px vertical) — ✅ Très aéré, premium
- **Container** : `max-w-5xl` pour le contenu principal — ✅ Bonne largeur de lecture
- **Cards** : `p-6 md:p-8` — ✅ Espacement confortable
- **Line-height** : `leading-relaxed` utilisé systématiquement — ✅ Bonne lisibilité

### 3.3 Recommandations lisibilité

1. **Augmenter la taille des labels de formulaire** de `text-sm` à `text-base` pour la cible 50+
2. **Ajouter un `max-width` aux paragraphes** pour limiter la longueur de ligne (65-75 caractères optimal)
3. **Le Simulateur** utilise des emojis (📍, 🏠, 📐, 🚪) comme labels — incohérent avec le style sobre du reste du site

---

## 4. Hiérarchie visuelle

### 4.1 Structure des titres

```
H1: "Vos revenus locatifs, garantis chaque mois." (Hero — unique ✅)
H2: "Des résultats qui parlent d'eux-mêmes" (Chiffres)
H2: "Deux solutions, un même objectif" (Offres)
H2: "Simple comme 1, 2, 3" (Process)
H2: "Pourquoi nous faire confiance" (Confiance)
H2: "Estimez vos revenus locatifs" (Simulateur)
H2: "Nos zones d'intervention" (Zones)
H2: "Estimez vos revenus gratuitement" (Contact)
```

**Problème :** Deux H2 ont un message quasi-identique ("Estimez vos revenus locatifs" et "Estimez vos revenus gratuitement"). Cela crée une confusion dans le parcours — l'utilisateur peut penser qu'il s'agit de la même section.

### 4.2 Contraste et poids visuel

| Zone | Fond | Texte | Contraste |
|------|------|-------|-----------|
| Hero | Image sombre + overlay | Blanc | ✅ Bon (overlay assure la lisibilité) |
| Chiffres | #f8fafc (gris clair) | #111111 | ✅ Excellent |
| Offres | Blanc | #111111 | ✅ Excellent |
| Process | #f8fafc | #111111 | ✅ Excellent |
| Confiance | Blanc | #111111 | ✅ Excellent |
| Simulateur | Gradient slate-50 → blue-50 | slate-900 | ✅ Bon |
| Zones | #f8fafc | #111111 | ✅ Excellent |
| Contact | Blanc | #111111 | ✅ Excellent |
| Footer | #111111 | white/60 (60% opacité) | ⚠️ Ratio ~4.5:1 — limite WCAG AA |

### 4.3 Alternance des fonds

```
Hero (image sombre) → Chiffres (gris) → Offres (blanc) → Process (gris) 
→ Confiance (blanc) → Simulateur (gradient bleu) → Zones (gris) → Contact (blanc) → Footer (noir)
```

✅ L'alternance blanc/gris est bien respectée et crée un rythme visuel agréable. Le Simulateur avec son gradient bleu crée une rupture visuelle qui attire l'attention — c'est intentionnel et efficace.

---

## 5. Analyse des Call-to-Action (CTA)

### 5.1 Inventaire des CTA

| Section | CTA | Style | Destination |
|---------|-----|-------|-------------|
| Navbar | "Estimation gratuite" | Bleu, rounded-full | #contact |
| Hero | "Nous contacter" | Vert WhatsApp, rounded-full | wa.me |
| Hero | "Estimer mes revenus" | Bleu, rounded-full | #contact |
| Offres | "Obtenir mon loyer garanti" | Bleu, rounded-full | #contact |
| Offres | "Découvrir la conciergerie" | Noir, rounded-full | #contact |
| Process | "Commencer maintenant" | Bleu, rounded-full | #contact |
| Simulateur | "Estimer mes revenus" | Gradient bleu-indigo | Calcul JS |
| Simulateur (résultat) | "Discuter avec un expert" | Vert WhatsApp | wa.me |
| Contact | "Recevoir mon estimation gratuite" | Bleu, rounded-full | Submit form |
| Flottant | Icône WhatsApp | Vert, cercle | wa.me |

### 5.2 Problèmes identifiés

1. **Trop de CTA mènent au même endroit (#contact)** — 5 boutons différents pointent vers la même section. C'est bien pour la conversion, mais les libellés devraient être plus cohérents.

2. **Incohérence de style du CTA Simulateur** : Le bouton utilise `bg-gradient-to-r from-blue-600 to-indigo-600` au lieu du `bg-nomad-blue` standard. Cela brise la cohérence visuelle.

3. **Le CTA "Commencer maintenant" (Process)** est vague — "Demander une estimation" serait plus clair pour la cible.

4. **Hiérarchie CTA dans le Hero** : Le bouton WhatsApp vert est visuellement plus dominant que le bouton bleu "Estimer mes revenus" à cause de la couleur verte saturée. Or, l'estimation est probablement le parcours principal souhaité.

### 5.3 Recommandations CTA

- Uniformiser le style des boutons principaux (tous en `bg-nomad-blue`)
- Réduire à 1 CTA principal dans le Hero + 1 secondaire
- Renommer "Commencer maintenant" → "Estimer mes revenus gratuitement"
- Ajouter des micro-interactions (hover scale, pulse subtil) sur le CTA principal

---

## 6. Responsive Design

### 6.1 Breakpoints utilisés

Le site utilise les breakpoints Tailwind standard :
- `sm:` (640px) — Flex direction, gaps
- `md:` (768px) — Grid cols, text sizes, padding
- `lg:` (1024px) — Grid cols (Chiffres 4 cols)

### 6.2 Analyse par section

| Section | Mobile | Tablette | Desktop | Verdict |
|---------|--------|----------|---------|---------|
| Navbar | ✅ Hamburger menu | ✅ | ✅ Desktop nav | Bon |
| Hero | ✅ Stack vertical | ✅ | ✅ | Bon |
| Chiffres | ✅ 2 cols | ✅ 2 cols | ✅ 4 cols | Bon |
| Offres | ✅ Stack | ✅ | ✅ 2 cols | Bon |
| Process | ✅ Stack | ✅ | ✅ 3 cols | ⚠️ Ligne connectrice invisible mobile |
| Confiance | ✅ 1 col | ✅ 2 cols | ✅ 3 cols | Bon |
| Simulateur | ✅ 1 col | ✅ | ✅ 2 cols form | Bon |
| Zones | ✅ Stack | ✅ | ✅ 2 cols | Bon |
| Contact | ✅ Stack | ✅ | ✅ 2 cols | Bon |
| Footer | ✅ Stack | ✅ | ✅ 4 cols | Bon |

### 6.3 Problèmes responsive

1. **Hero sur mobile** : Le H1 en `text-4xl` (36px) est correct, mais avec les 2 boutons + 2 numéros de téléphone, la section devient très longue sur petit écran.

2. **WhatsApp flottant** : `bottom-6 right-6` (24px) — pourrait chevaucher le contenu sur très petit écran (320px).

3. **Simulateur** : Les inputs sont en `grid-cols-1 md:grid-cols-2` — correct, mais le bouton pleine largeur (`w-full mt-8`) crée un grand espace vide sur desktop.

4. **Navbar mobile** : Le menu hamburger fonctionne, mais il n'y a pas d'animation de transition (apparition brutale du menu).

---

## 7. Accessibilité (a11y)

### 7.1 Points positifs

- ✅ `aria-label="Menu"` sur le bouton hamburger
- ✅ `aria-label="Nous contacter sur WhatsApp"` sur le bouton flottant
- ✅ Labels `htmlFor` sur les champs de formulaire
- ✅ `scroll-behavior: smooth` pour la navigation
- ✅ Attributs `alt` sur les images

### 7.2 Problèmes critiques

| Problème | Sévérité | Localisation |
|----------|----------|--------------|
| Pas de `<main>` landmark | Haute | Index.tsx |
| Pas de skip-to-content link | Moyenne | Navbar |
| Icônes SVG sans `aria-hidden` | Moyenne | Partout |
| Pas de `role="navigation"` explicite | Basse | Navbar (utilise `<nav>`) |
| Footer links `href="#"` (liens morts) | Haute | Footer |
| Contraste `text-white/60` sur fond noir | Moyenne | Footer |
| Pas de focus visible personnalisé | Haute | Boutons, liens |
| Formulaire sans messages d'erreur | Haute | Contact |
| Select sans état disabled visible | Basse | Simulateur |

### 7.3 Recommandations accessibilité

1. **Ajouter `<main>` autour du contenu** et des landmarks ARIA appropriés
2. **Ajouter un lien "Aller au contenu"** en haut de page (skip-to-content)
3. **Ajouter `aria-hidden="true"`** sur toutes les icônes décoratives SVG
4. **Améliorer les focus states** : ajouter `focus-visible:ring-2 focus-visible:ring-nomad-blue` sur tous les éléments interactifs
5. **Ajouter des messages d'erreur** au formulaire (champs requis non remplis)
6. **Augmenter l'opacité du texte footer** de `white/60` à `white/70` minimum

---

## 8. Cohérence visuelle

### 8.1 Palette de couleurs

| Token | Valeur | Usage | Cohérence |
|-------|--------|-------|-----------|
| `nomad-blue` | #53a2f9 | CTA, accents, icônes | ✅ Cohérent partout sauf Simulateur |
| `nomad-black` | #111111 | Titres, texte principal | ✅ Cohérent |
| `nomad-white` | #ffffff | Fonds, texte sur sombre | ✅ Cohérent |
| `nomad-gray` | #f8fafc | Fonds alternés | ✅ Cohérent |
| `nomad-gray-dark` | #64748b | Texte secondaire | ✅ Cohérent |

### 8.2 Incohérences détectées

1. **Simulateur.tsx** — Utilise des classes Tailwind brutes au lieu des tokens :
   - `text-slate-900` au lieu de `text-nomad-black`
   - `from-blue-600 to-indigo-600` au lieu de `bg-nomad-blue`
   - `text-emerald-700` pour les résultats (couleur non définie dans la charte)
   - `border-slate-200`, `bg-slate-50` au lieu de `border-gray-200`, `bg-nomad-gray`

2. **Emojis dans le Simulateur** (📍, 🏠, 📐, 🚪) — Le reste du site utilise des icônes SVG monochromes. Les emojis cassent le style premium/sobre.

3. **WhatsAppFloat.tsx** existe mais n'est pas utilisé — fichier orphelin qui crée de la confusion dans le code.

4. **Bordures des cards** :
   - Offres : `border-2` + `rounded-3xl`
   - Confiance : `border-transparent` + `rounded-2xl`
   - Zones : pas de bordure + `rounded-3xl`
   - → Manque d'uniformité dans le traitement des cards

### 8.3 Recommandations cohérence

1. **Refactorer le Simulateur** pour utiliser les tokens de design Nomadair
2. **Remplacer les emojis** par des icônes SVG cohérentes avec le reste
3. **Supprimer WhatsAppFloat.tsx** (fichier inutilisé)
4. **Standardiser les cards** : choisir un style unique (border-radius, border, shadow)

---

## 9. Analyse des micro-interactions et animations

### 9.1 Animations présentes

| Animation | Type | Durée | Verdict |
|-----------|------|-------|---------|
| `animate-fade-up` | Entrée au scroll | 0.6s | ✅ Douce, appropriée |
| `animate-fade-in` | Entrée | 0.6s | ✅ Douce |
| `animate-bounce` | Scroll indicator | Infini | ✅ Subtil |
| Hover cards Confiance | Couleur + shadow | 0.3s | ✅ Bon feedback |
| Hover images Zones | Scale 1.05 | 0.5s | ✅ Premium |
| WhatsApp button hover | Scale 1.1 | 0.3s | ✅ Bon |
| Simulateur loading | Spinner SVG | 1.2s | ✅ Bon feedback |

### 9.2 Animations manquantes

1. **Pas d'animation d'entrée sur les sections Offres, Confiance, Zones** — seule la section Chiffres a un IntersectionObserver
2. **Pas de transition sur le menu mobile** — apparition/disparition brutale
3. **Pas de feedback visuel** quand on clique sur un lien de navigation (active state)
4. **Le formulaire** n'a pas d'animation de transition vers l'état "soumis"

### 9.3 Recommandations animations

1. Ajouter un `IntersectionObserver` sur toutes les sections pour des entrées progressives
2. Ajouter une transition `max-height` ou `opacity` sur le menu mobile
3. Ajouter un `transition` sur l'état de soumission du formulaire (fade out form → fade in confirmation)

---

## 10. Analyse spécifique à la cible (30-60 ans, propriétaires)

### 10.1 Adéquation au profil

| Critère cible | Implémentation | Score |
|---------------|----------------|-------|
| Pas technophile → simplicité | Navigation claire, peu de pages | 8/10 |
| Confiance et sécurité | Section dédiée, mais pas de témoignages | 6/10 |
| Chiffres concrets | Section Chiffres + Simulateur | 9/10 |
| Garanties | "Loyer garanti", "0€ frais" | 8/10 |
| Lisibilité | Gros titres, textes aérés | 8/10 |
| Pas flashy | Design sobre, animations douces | 9/10 |

### 10.2 Éléments manquants pour cette cible

1. **Témoignages clients** — Un propriétaire de 45-55 ans veut voir que d'autres comme lui font confiance à Nomadair
2. **Photos de l'équipe** — Mettre un visage sur Kenny et Mohamed rassure énormément
3. **Mentions légales / SIRET** — Les liens footer sont morts (`href="#"`). Pour un investisseur, c'est un red flag
4. **FAQ** — Les questions fréquentes réduisent l'anxiété de décision
5. **Indicateur de temps de réponse** — "Réponse sous 24h" est mentionné mais pas mis en avant visuellement

---

## 11. Synthèse des recommandations prioritaires

### 🔴 Priorité haute (Impact conversion immédiat)

| # | Recommandation | Effort | Impact |
|---|---------------|--------|--------|
| 1 | Ajouter des témoignages clients (même fictifs/anonymisés) | Moyen | Très élevé |
| 2 | Connecter le formulaire à un backend réel (email/webhook) | Moyen | Critique |
| 3 | Refactorer le Simulateur pour cohérence visuelle | Faible | Élevé |
| 4 | Simplifier le Hero : 1 CTA principal + 1 secondaire | Faible | Élevé |
| 5 | Ajouter les mentions légales / page SIRET | Faible | Élevé (confiance) |

### 🟡 Priorité moyenne (Amélioration UX)

| # | Recommandation | Effort | Impact |
|---|---------------|--------|--------|
| 6 | Ajouter une section FAQ | Moyen | Moyen |
| 7 | Ajouter des animations d'entrée sur toutes les sections | Faible | Moyen |
| 8 | Améliorer l'accessibilité (landmarks, focus, contrastes) | Moyen | Moyen |
| 9 | Ajouter une photo d'équipe / section "Qui sommes-nous" | Moyen | Moyen |
| 10 | Animer la transition du menu mobile | Faible | Faible |

### 🟢 Priorité basse (Polish)

| # | Recommandation | Effort | Impact |
|---|---------------|--------|--------|
| 11 | Supprimer WhatsAppFloat.tsx (fichier orphelin) | Très faible | Nul (code propre) |
| 12 | Standardiser les border-radius des cards | Faible | Faible |
| 13 | Remplacer emojis du Simulateur par icônes SVG | Faible | Faible |
| 14 | Ajouter un favicon personnalisé (logo arche) | Très faible | Faible |
| 15 | Utiliser des images différentes pour Paris vs Marrakech dans Zones | Moyen | Moyen |

---

## 12. Score global UX/Design

| Critère | Score | Commentaire |
|---------|-------|-------------|
| Parcours utilisateur | 8/10 | Logique et fluide, quelques redondances |
| Lisibilité | 8.5/10 | Excellente typographie et espacement |
| Hiérarchie visuelle | 7.5/10 | Bonne, mais Simulateur incohérent |
| Accessibilité | 5/10 | Bases présentes, mais insuffisant WCAG AA |
| Call-to-Action | 7/10 | Nombreux et visibles, mais trop dispersés |
| Responsive design | 8/10 | Bien géré, quelques détails à ajuster |
| Cohérence visuelle | 7/10 | Très bonne sauf Simulateur |
| Confiance/Rassurance | 6.5/10 | Manque témoignages et preuves sociales |
| **Score global** | **7.2/10** | **Bonne base, potentiel d'amélioration significatif** |

---

## 13. Conclusion

Le site Nomadair dispose d'une base UX/Design solide avec une identité visuelle premium cohérente et un parcours utilisateur logique. Les principales améliorations à apporter concernent :

1. **La preuve sociale** (témoignages, avis) — élément n°1 de conversion pour la cible propriétaires
2. **La cohérence du Simulateur** — qui casse actuellement l'harmonie visuelle
3. **L'accessibilité** — à renforcer pour toucher une cible plus large et respecter les normes
4. **La simplification du Hero** — trop de choix tue le choix

En appliquant les recommandations de priorité haute, le site pourrait passer d'un score de 7.2/10 à un 8.5/10 estimé, avec un impact direct sur le taux de conversion.