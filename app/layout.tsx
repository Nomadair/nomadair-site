import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Cookies from "@/components/Cookies";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const titre = "NomadAir · Gestion Airbnb et conciergerie à Paris, Île-de-France et Maroc";
const description =
  "Gestion immobilière de location courte durée à Paris, dans le 92, 93, 95, à Marrakech et Tanger. Études AirDNA, gestion automatisée par l'IA, 20 % de commission tout compris. Audit gratuit de votre bien.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomadair.co"),
  title: titre,
  description,
  keywords: [
    "gestion airbnb", "conciergerie airbnb", "gestion locative courte durée",
    "gestion immobilière location saisonnière", "conciergerie airbnb paris",
    "conciergerie airbnb seine-saint-denis", "conciergerie saint-ouen", "gestion airbnb hauts-de-seine",
    "conciergerie airbnb marrakech", "gestion airbnb tanger", "conciergerie airbnb corse",
    "estimation revenus airbnb", "étude airdna", "superhôte", "location meublée de tourisme",
  ],
  authors: [{ name: "NomadAir" }],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: "NomadAir",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NomadAir, conciergerie Airbnb" }],
  },
  twitter: { card: "summary_large_image", title: titre, description, images: ["/og-image.png"] },
};

// Données structurées lues par Google et les IA (entreprise, service, FAQ).
const donneesStructurees = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nomadair.co/#entreprise",
    "name": "NomadAir",
    "url": "https://nomadair.co",
    "logo": "https://nomadair.co/favicon.png",
    "image": "https://nomadair.co/og-image.png",
    "description": "Gestion immobilière de location courte durée et conciergerie Airbnb à Paris, en Île-de-France et au Maroc. Études de marché AirDNA, gestion automatisée par l'IA, transparence totale, 20 % de commission.",
    "slogan": "Vous possédez. Nous gérons. Votre bien rapporte.",
    "telephone": "+33619741903",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": [
      "Paris",
      "Hauts-de-Seine",
      "Seine-Saint-Denis",
      "Val-d'Oise",
      "Saint-Ouen-sur-Seine",
      "Le Blanc-Mesnil",
      "Marrakech",
      "Tanger"
    ],
    "knowsAbout": [
      "Gestion Airbnb",
      "Location courte durée",
      "Conciergerie Airbnb",
      "Études de marché AirDNA",
      "Tarification dynamique",
      "Automatisation par l'IA"
    ],
    "priceRange": "20 % des revenus"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestion de location courte durée",
    "provider": {
      "@id": "https://nomadair.co/#entreprise"
    },
    "areaServed": [
      "Paris",
      "Île-de-France",
      "Marrakech",
      "Tanger"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Gestion complète Airbnb : annonce, prix dynamiques, voyageurs 7 j/7, ménage contrôlé, suivi en temps réel dans le QG NomadAir. Commission de 20 % des nuits encaissées, audit gratuit."
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien je vais gagner ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ça dépend du quartier et du bien. On vous donne une estimation chiffrée et prudente, jamais une promesse."
        }
      },
      {
        "@type": "Question",
        "name": "Comment je touche mes revenus ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vos revenus vous sont reversés avec un relevé détaillé, et vous les suivez en temps réel dans votre QG NomadAir. Notre commission : 20 % des nuits encaissées, rien d'autre."
        }
      },
      {
        "@type": "Question",
        "name": "Je peux encore utiliser mon logement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Bloquez vos dates à l'avance, elles restent à vous."
        }
      },
      {
        "@type": "Question",
        "name": "Et si un voyageur abîme quelque chose ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On photographie le logement après chaque séjour, donc on voit tout de suite ce qui a bougé. On fait réparer, et on monte le dossier de remboursement AirCover auprès d'Airbnb dans les délais. Vous suivez le dossier dans votre QG."
        }
      },
      {
        "@type": "Question",
        "name": "Où intervenez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À Paris, dans les Hauts-de-Seine, la Seine-Saint-Denis et le Val-d'Oise, ainsi qu'à Marrakech et Tanger. La Corse ouvre en 2027 : on étudie déjà les biens."
        }
      },
      {
        "@type": "Question",
        "name": "Conciergerie ou gestion immobilière, quelle différence ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une conciergerie remet des clés. Nous, on gère votre location de bout en bout : étude de marché, annonce, prix, voyageurs, ménage, entretien et suivi de vos revenus."
        }
      },
      {
        "@type": "Question",
        "name": "Comment savez-vous combien mon bien peut rapporter ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On utilise AirDNA, l'outil de référence des données Airbnb dans le monde. On compare votre bien aux logements similaires de votre rue : occupation, prix par nuit, saisons fortes. Vous recevez une projection sur 12 mois, avec les sources."
        }
      },
      {
        "@type": "Question",
        "name": "Comment l'IA nous aide à gérer votre bien ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elle prend en charge les tâches répétitives : réponses aux voyageurs, envoi des codes, ajustement des prix, alertes. Nos équipes gardent la main sur chaque décision."
        }
      }
    ]
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
        />
      </head>
      <body>
        {children}
        <Cookies />
      </body>
    </html>
  );
}
