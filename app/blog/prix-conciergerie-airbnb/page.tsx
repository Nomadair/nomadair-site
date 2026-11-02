import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Simulateur from "@/components/Simulateur";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ARTICLES } from "@/lib/articles";

const article = ARTICLES.find((a) => a.slug === "prix-conciergerie-airbnb")!;
const url = `https://nomadair.co/blog/${article.slug}`;

export const metadata: Metadata = {
  title: { absolute: article.titre },
  description: article.description,
  alternates: { canonical: `/blog/${article.slug}` },
  openGraph: {
    title: article.titre,
    description: article.description,
    url: `/blog/${article.slug}`,
    type: "article",
    locale: "fr_FR",
    siteName: "NomadAir",
    images: ["/og-image.png"],
  },
};

const faq = [
  {
    q: "Quel est le prix moyen d'une conciergerie Airbnb ?",
    r: "La plupart des conciergeries Airbnb prennent entre 15 et 25 % des revenus. Autour de 20 %, on trouve en général une gestion complète : annonce, prix, voyageurs, ménage organisé et entretien courant.",
  },
  {
    q: "La commission est-elle calculée sur le prix payé par le voyageur ?",
    r: "Ça dépend des conciergeries. Certaines calculent leur part sur les revenus réellement encaissés par le propriétaire, d'autres sur le prix total payé par le voyageur, frais de ménage compris. Faites-le préciser par écrit.",
  },
  {
    q: "Qui paie le ménage avec une conciergerie Airbnb ?",
    r: "Le plus souvent, le voyageur, via les frais de ménage affichés sur Airbnb. Vérifiez qu'il ne vous est pas refacturé en plus de la commission.",
  },
  {
    q: "Une conciergerie Airbnb est-elle rentable pour un propriétaire ?",
    r: "Oui si elle remplit mieux et vend plus cher que vous ne le feriez seul. Une bonne conciergerie ajuste les prix chaque jour selon la demande : ce gain compense souvent sa commission.",
  },
];

const donnees = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    datePublished: article.publie,
    dateModified: article.publie,
    mainEntityOfPage: url,
    image: "https://nomadair.co/og-image.png",
    author: { "@type": "Organization", name: "NomadAir", url: "https://nomadair.co" },
    publisher: { "@type": "Organization", name: "NomadAir", logo: { "@type": "ImageObject", url: "https://nomadair.co/favicon.png" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://nomadair.co/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://nomadair.co/blog" },
      { "@type": "ListItem", position: 3, name: article.h1, item: url },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-14 mb-5 text-2xl md:text-4xl font-medium tracking-[-0.03em] text-nomad-black leading-tight">{children}</h2>
);

export default function PrixConciergerieAirbnb() {
  return (
    <div className="min-h-svh bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }} />
      <Navbar />
      <main>
        <section className="bg-nomad-black text-white pt-[140px] pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </nav>
            <h1 className="mt-6 text-white font-medium text-[2.25rem] md:text-6xl tracking-[-0.04em] leading-[1]">{article.h1}</h1>
            <p className="mt-6 text-sm text-white/60">Par l'équipe NomadAir · 2 novembre 2026 · 7 min de lecture</p>
          </div>
        </section>

        <article className="container mx-auto px-6 max-w-3xl py-16 text-[18px] leading-relaxed text-nomad-black/85 [&_p+p]:mt-5 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-nomad-black [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6">
          <p className="text-xl text-nomad-black">
            Vous cherchez une conciergerie Airbnb et chacune affiche un prix différent : 15 % ici, 20 % là, 25 % ailleurs.
            Le bon réflexe n'est pas de prendre le taux le plus bas, mais de comprendre ce que chaque pourcentage couvre et
            sur quoi il est calculé. Voici comment comparer les offres, avec un exemple chiffré.
          </p>

          <H2>Comment une conciergerie Airbnb fixe son prix</H2>
          <p>
            Presque toutes les conciergeries Airbnb se rémunèrent par une commission, un pourcentage prélevé sur les
            revenus de la location. Pas de nuit louée, pas de commission : leur intérêt est aligné sur le vôtre. Certaines
            ajoutent des frais d'entrée, un abonnement mensuel ou des prestations facturées à part.
          </p>
          <p>
            Le premier piège est la <strong>base de calcul</strong>. Une conciergerie peut prendre sa part sur les revenus
            réellement encaissés par le propriétaire, ou sur le prix total payé par le voyageur, frais de ménage compris.
            Sur un même mois, l'écart peut atteindre plusieurs dizaines d'euros. Demandez toujours : « Si mon logement
            encaisse 2 000 € ce mois-ci, combien je reçois, et qu'est-ce qui a été déduit ? »
          </p>

          <H2>Ce que couvre, en général, chaque niveau de prix</H2>
          <p>Ces fourchettes sont des repères observés sur le marché, pas des règles. Elles aident à poser les bonnes questions.</p>
          <p><strong>Autour de 15 %.</strong> Souvent une gestion partielle : création de l'annonce et messages des
            voyageurs. Le ménage, le linge, les consommables ou le réglage des prix restent fréquemment à la charge du
            propriétaire, ou sont facturés à part.</p>
          <p><strong>Autour de 20 %.</strong> Le cœur du marché pour une gestion complète : annonce, prix ajustés selon
            la demande, voyageurs 7 jours sur 7, organisation du ménage et du linge, petit entretien. C'est le niveau à
            partir duquel le propriétaire n'a plus rien à faire au quotidien.</p>
          <p><strong>25 % et plus.</strong> Des offres très haut de gamme, des marchés où la main-d'œuvre coûte cher, ou
            des services en plus : décoration, photos professionnelles, conciergerie pour les voyageurs.</p>

          <H2>Les frais qu'on oublie de comparer</H2>
          <ul>
            <li><strong>Le ménage.</strong> Il est le plus souvent payé par le voyageur via les frais de ménage d'Airbnb. Vérifiez qu'il ne vous est pas refacturé en plus.</li>
            <li><strong>Les frais d'entrée.</strong> Certaines conciergeries facturent la mise en route : photos, annonce, état des lieux.</li>
            <li><strong>Le linge et les consommables.</strong> Inclus, loués ou refacturés : à faire préciser.</li>
            <li><strong>Les réparations.</strong> Elles doivent être soumises à votre accord, avec un devis.</li>
            <li><strong>La durée d'engagement.</strong> Un contrat qu'on ne peut pas quitter avant un an coûte cher si le service déçoit.</li>
          </ul>

          <H2>Le calcul qui change tout : un exemple sur un mois</H2>
          <p>Prenez un mois type où votre logement encaisse 2 000 € de revenus.</p>
          <ul>
            <li><strong>Offre A, 20 % tout compris.</strong> La conciergerie garde 400 €. Il vous reste 1 600 €.</li>
            <li><strong>Offre B, 15 %, ménage refacturé 60 € par séjour.</strong> Avec trois séjours dans le mois, la conciergerie garde 300 € et le ménage vous coûte 180 €. Il vous reste 1 520 €.</li>
          </ul>
          <p>
            L'offre « la moins chère » vous rapporte 80 € de moins. Et ce calcul ne tient pas compte du plus important :
            une conciergerie qui ajuste ses prix chaque jour selon la demande peut faire monter vos revenus bien au-delà de
            la différence de commission.
          </p>

          <H2>Ce qui justifie vraiment le prix : remplir et vendre au bon tarif</H2>
          <p>
            Une commission ne se juge pas seule. Ce qui compte, c'est ce qui reste dans votre poche à la fin du mois. Une
            bonne conciergerie Airbnb remplit les nuits creuses, monte les prix pendant les salons, les matchs ou les
            vacances, et évite les mauvais voyageurs. C'est là que se joue la rentabilité, bien plus que sur trois points de
            commission.
          </p>
          <p>
            Avant de signer, demandez une projection de revenus pour votre logement, appuyée sur des données de marché, pas
            sur une promesse. Chez NomadAir, on utilise AirDNA, l'outil de référence du secteur, pour estimer ce que votre
            bien peut rapporter dans votre quartier.
          </p>

          <H2>La transparence, le critère qu'on oublie</H2>
          <p>
            Le reproche le plus fréquent fait aux conciergeries, c'est l'opacité : un relevé en fin de mois, sans savoir
            qui a dormi chez soi ni pourquoi un mois a été moins bon. Exigez de voir vos réservations, vos arrivées et vos
            revenus en temps réel. Chez NomadAir, chaque propriétaire suit son logement depuis son espace dédié.
          </p>

          <H2>En résumé : les 5 questions à poser</H2>
          <ol>
            <li>Sur quoi la commission est-elle calculée ?</li>
            <li>Qu'est-ce qui est inclus, ligne par ligne ?</li>
            <li>Qui paie le ménage ?</li>
            <li>Combien me resterait-il sur un mois type ?</li>
            <li>Comment je suis mes réservations et mes revenus ?</li>
          </ol>
          <p>
            Pour voir une offre détaillée ligne par ligne, consultez <Link href="/tarifs">nos tarifs : 20 % tout compris</Link>.
            Vous êtes propriétaire en Île-de-France ? Découvrez notre{" "}
            <Link href="/conciergerie-airbnb/seine-saint-denis">conciergerie Airbnb en Seine-Saint-Denis</Link>, à{" "}
            <Link href="/conciergerie-airbnb/saint-ouen">Saint-Ouen</Link> et au{" "}
            <Link href="/conciergerie-airbnb/le-blanc-mesnil">Blanc-Mesnil</Link>.
          </p>

          <H2>Questions fréquentes</H2>
          {faq.map((f) => (
            <div key={f.q} className="mt-6">
              <h3 className="text-xl font-medium text-nomad-black">{f.q}</h3>
              <p className="mt-2">{f.r}</p>
            </div>
          ))}

          <p className="mt-12 rounded-2xl bg-[#F5F5F3] p-6 text-nomad-black">
            Une question sur le prix pour votre logement ? Appelez-nous au{" "}
            <a href="tel:+33756914143">07 56 91 41 43</a>, ou demandez votre audit gratuit ci-dessous.
          </p>
        </article>

        <Simulateur />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
