import type { MetadataRoute } from "next";
import { PAGES_LOCALES } from "@/lib/villes";

export const dynamic = "force-static";

// Généré à chaque build : la date est celle de la mise en ligne.
export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date().toISOString().slice(0, 10);
  const page = (chemin: string, priority: number) => ({ url: `https://nomadair.co${chemin}`, lastModified: maj, priority });
  return [
    page("", 1),
    ...PAGES_LOCALES.map((p) => page(`/conciergerie-airbnb/${p.slug}`, 0.9)),
    page("/tarifs", 0.8),
    page("/mentions-legales", 0.2),
    page("/confidentialite", 0.2),
  ];
}
