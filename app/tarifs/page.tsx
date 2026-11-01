import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Simulateur from "@/components/Simulateur";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PAGES_LOCALES } from "@/lib/villes";

const titre = "Tarif conciergerie Airbnb : 20 % tout compris · NomadAir";
const description =
  "Combien coûte une conciergerie Airbnb ? Chez NomadAir, 20 % des revenus encaissés, tout compris, sans frais d'entrée. Exemple chiffré et détail de ce qui est inclus.";

export const metadata: Metadata = {
  title: { absolute: titre },
  description,
  alternates: { canonical: "/tarifs" },
  openGraph: { title: titre, description, url: "/tarifs", type: "website", locale: "fr_FR", siteName: "NomadAir", images: ["/og-image.png"] },
};

const inclus = [
  "Création ou reprise de l'annonce Airbnb, textes et mise en valeur des photos",
  "Prix ajustés chaque jour selon la demande et les événements",
  "Messages, arrivées et départs des voyageurs, 7 jours sur 7",
  "Ménage et linge organisés entre chaque séjour",
  "Petit entretien courant et suivi des incidents",
  "Votre QG NomadAir sur Telegram : réservations, arrivées, ménage et relevé du mois",
];

const nonInclus = [
  "Les réparations et travaux : on vous envoie un devis, vous décidez",
  "L'équipement de départ si le logement est vide : on vous conseille, vous achetez",
];

const faq = [
  {
    q: "Sur quoi sont calculés les 20 % ?",
    r: "Sur les revenus réellement encaissés pour vos nuits louées. Pas de nuit louée, pas de commission.",
  },
  {
    q: "Y a-t-il des frais d'entrée ou un abonnement ?",
    r: "Non. Pas de frais d'entrée, pas d'abonnement mensuel. L'audit de votre bien est gratuit.",
  },
  {
    q: "Pourquoi 20 % et pas 15 % ?",
    r: "Sur le marché, les conciergeries affichent souvent entre 15 et 25 %, mais pas pour le même service. Une offre à 15 % laisse souvent le ménage, le linge ou les prix à votre charge. Nos 20 % couvrent tout ce qui est listé plus haut.",
  },
  {
    q: "Quand suis-je payé ?",
    r: "Airbnb verse les revenus après chaque arrivée de voyageur. Vous voyez chaque réservation et le relevé du mois dans votre QG NomadAir.",
  },
];

const donnees = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } })),
};

export default function Tarifs() {
  return (
    <div className="min-h-svh bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }} />
      <Navbar />
      <main>
        <section className="bg-nomad-black text-white pt-[140px] pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span aria-hidden="true"> / </span>
              <span>Tarifs</span>
            </nav>
            <h1 className="mt-6 text-white font-medium text-[2.5rem] md:text-7xl tracking-[-0.04em] leading-[0.95] max-w-4xl">
              Tarif de la conciergerie Airbnb : 20 % tout compris
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Un seul prix, simple à comprendre : 20 % des revenus encaissés. Pas de frais d'entrée, pas
              d'abonnement, pas de ligne cachée sur le relevé.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
              Un exemple, en vrai
            </h2>
            <p className="mt-6 text-lg text-nomad-black/70">
              Votre logement encaisse 2 000 € de revenus sur le mois.
            </p>
            <dl className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#F5F5F3] p-6">
                <dt className="text-sm text-nomad-black/60">Revenus du mois</dt>
                <dd className="mt-2 text-4xl font-medium tracking-[-0.03em] text-nomad-black">2 000 €</dd>
              </div>
              <div className="rounded-2xl bg-[#F5F5F3] p-6">
                <dt className="text-sm text-nomad-black/60">Commission NomadAir (20 %)</dt>
                <dd className="mt-2 text-4xl font-medium tracking-[-0.03em] text-nomad-black">400 €</dd>
              </div>
              <div className="rounded-2xl bg-nomad-blue p-6">
                <dt className="text-sm text-nomad-black/70">Pour vous</dt>
                <dd className="mt-2 text-4xl font-medium tracking-[-0.03em] text-nomad-black">1 600 €</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F5F5F3]">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
                Ce qui est inclus
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-nomad-black/80">
                {inclus.map((a) => (
                  <li key={a} className="pl-6 relative before:absolute before:left-0 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-nomad-blue">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
                Ce qui ne l'est pas
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-nomad-black/80">
                {nonInclus.map((a) => (
                  <li key={a} className="pl-6 relative before:absolute before:left-0 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-nomad-black/30">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
              Vos questions sur le prix
            </h2>
            <div className="mt-10 divide-y divide-nomad-black/10 border-y border-nomad-black/10">
              {faq.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="cursor-pointer list-none text-lg font-medium text-nomad-black flex justify-between gap-6">
                    {f.q}
                    <span aria-hidden="true" className="text-nomad-black/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-nomad-black/75 leading-relaxed">{f.r}</p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-lg text-nomad-black">
              Une question précise ? Appelez-nous au{" "}
              <a href="tel:+33756914143" className="underline underline-offset-4">07 56 91 41 43</a>.
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <h2 className="text-sm text-nomad-black/60">Nos conciergeries Airbnb</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {PAGES_LOCALES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/conciergerie-airbnb/${p.slug}`}
                    className="inline-block px-5 py-2.5 rounded-full border border-nomad-black/15 text-nomad-black hover:border-nomad-black transition-colors"
                  >
                    {p.type === "departement" ? "Seine-Saint-Denis (93)" : p.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Simulateur />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
