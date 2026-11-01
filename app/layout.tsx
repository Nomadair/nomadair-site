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

const titre = "Conciergerie Airbnb 93 et Paris · NomadAir, 20 % compris";
const description =
  "Conciergerie Airbnb en Seine-Saint-Denis, à Paris et au Maroc : annonce, prix, voyageurs, ménage. 20 % tout compris, suivi en temps réel. Audit gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomadair.co"),
  title: titre,
  description,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
      </head>
      <body>
        {children}
        <Cookies />
      </body>
    </html>
  );
}
