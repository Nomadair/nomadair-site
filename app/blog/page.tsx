import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ARTICLES } from "@/lib/articles";

const titre = "Blog location courte durée et conciergerie Airbnb · NomadAir";
const description =
  "Prix, règles, revenus : nos guides pour les propriétaires qui veulent louer en courte durée sur Airbnb, en Île-de-France et au Maroc.";

export const metadata: Metadata = {
  title: { absolute: titre },
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: titre, description, url: "/blog", type: "website", locale: "fr_FR", siteName: "NomadAir", images: ["/og-image.png"] },
};

const date = (iso: string) => new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <section className="bg-nomad-black text-white pt-[140px] pb-20">
          <div className="container mx-auto px-6">
            <h1 className="text-white font-medium text-[2.5rem] md:text-7xl tracking-[-0.04em] leading-[0.95] max-w-4xl">
              Le blog des propriétaires
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Prix, règles, revenus : ce qu'il faut savoir avant de louer en courte durée.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
            {ARTICLES.map((a) => (
              <article key={a.slug} className="rounded-2xl bg-[#F5F5F3] p-8">
                <p className="text-sm text-nomad-black/60">{date(a.publie)}</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-medium tracking-[-0.03em] text-nomad-black leading-tight">
                  <Link href={`/blog/${a.slug}`} className="hover:underline underline-offset-4">
                    {a.h1}
                  </Link>
                </h2>
                <p className="mt-4 text-nomad-black/75 leading-relaxed">{a.resume}</p>
                <Link href={`/blog/${a.slug}`} className="mt-6 inline-block underline underline-offset-4 text-nomad-black">
                  Lire l'article
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
