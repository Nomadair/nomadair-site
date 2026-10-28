# Nomadair - Site Vitrine Premium

## Design References
- Style: Luxe sobre, minimaliste, rassurant
- Color Palette: #53a2f9 (bleu principal), #111111 (noir), #ffffff (blanc), #f8fafc (gris clair fond)
- Typography: Nunito (ronde, moderne, bold) via Google Fonts
- Key Styles: Grandes typographies, espaces généreux, animations douces au scroll, boutons arrondis avec ombres subtiles

## Images to Generate
1. hero-premium-apartment-living.jpg - Salon luxueux d'un appartement parisien avec lumière naturelle (1024x576)
2. apartment-paris-bedroom.jpg - Chambre élégante d'un appartement premium à Paris (1024x576)
3. apartment-marrakech-terrace.jpg - Terrasse avec vue sur Marrakech, riad moderne (1024x576)
4. apartment-modern-kitchen.jpg - Cuisine moderne et équipée d'un appartement haut de gamme (1024x576)

## Development Tasks
- [x] Configure tailwind with Nomadair brand colors and Nunito font
- [x] Create Logo component (arche/porte arrondie bleue avec point central)
- [x] Create Hero section with headline revenus garantis
- [x] Create Chiffres clés section (x3, 72h, 100%, 0€)
- [x] Create Offres section (Sous-location + Conciergerie)
- [x] Create Process 3 étapes section
- [x] Create Confiance section
- [x] Create Zones section (Île-de-France + Marrakech)
- [x] Create Formulaire de contact
- [x] Create Footer
- [x] Assemble all sections in Index.tsx
- [x] Backend: contacts table created in Atoms Cloud database
- [x] Backend: email notification service (sends to mereokennysalem@gmail.com when SMTP configured)
- [x] Backend: POST /api/v1/contacts/submit endpoint (saves contact + triggers email)
- [x] Frontend: Contact form integrated with web-sdk to submit to backend API