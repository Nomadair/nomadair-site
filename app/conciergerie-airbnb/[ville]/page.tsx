import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLocale from "@/components/PageLocale";
import { PAGES_LOCALES, pageLocale } from "@/lib/villes";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES_LOCALES.map((p) => ({ ville: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const page = pageLocale((await params).ville);
  if (!page) return {};
  const url = `/conciergerie-airbnb/${page.slug}`;
  return {
    title: { absolute: page.titre },
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.titre, description: page.description, url, type: "website", locale: "fr_FR", siteName: "NomadAir", images: ["/og-image.png"] },
  };
}

export default async function Page({ params }: { params: Promise<{ ville: string }> }) {
  const page = pageLocale((await params).ville);
  if (!page) notFound();
  const url = `https://nomadair.co/conciergerie-airbnb/${page.slug}`;
  const zone =
    page.type === "departement"
      ? { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" }
      : { "@type": "City", name: page.nom };
  const donnees = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: "Conciergerie Airbnb",
      url,
      areaServed: zone,
      provider: { "@type": "Organization", name: "NomadAir", url: "https://nomadair.co", telephone: "+33756914143" },
      offers: { "@type": "Offer", description: "20 % des revenus encaissés, tout compris" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://nomadair.co/" },
        { "@type": "ListItem", position: 2, name: page.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } })),
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }} />
      <PageLocale page={page} />
    </>
  );
}
