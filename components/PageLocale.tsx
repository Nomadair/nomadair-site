import Link from "next/link";
import Navbar from "./Navbar";
import Simulateur from "./Simulateur";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { pageLocale, type PageLocale as Donnees } from "@/lib/villes";

// Gabarit d'une page « Conciergerie Airbnb [lieu] » : preuve locale d'abord, puis l'offre, la FAQ et l'audit.
export default function PageLocale({ page }: { page: Donnees }) {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <section className="bg-nomad-black text-white pt-[140px] pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span aria-hidden="true"> / </span>
              <span>{page.nom}</span>
            </nav>
            <h1 className="mt-6 text-white font-medium text-[2.5rem] md:text-7xl tracking-[-0.04em] leading-[0.95] max-w-4xl">
              {page.h1}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">{page.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#simulateur"
                className="px-6 py-3.5 bg-nomad-blue text-nomad-black font-medium rounded-full hover:bg-white transition-colors"
              >
                Audit gratuit de mon bien
              </a>
              <a
                href="tel:+33756914143"
                className="px-6 py-3.5 border border-white/30 text-white rounded-full hover:border-white transition-colors"
              >
                07 56 91 41 43
              </a>
            </div>
          </div>
        </section>

        {page.annonce && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              <a
                href={page.annonce.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl"
              >
                <img
                  src={page.annonce.image}
                  alt={`Notre logement Airbnb à ${page.nom} : ${page.annonce.titre}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </a>
              <div>
                <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
                  Notre logement à {page.nom}
                </h2>
                <p className="mt-6 text-lg text-nomad-black/70">
                  {page.annonce.titre} · {page.annonce.detail}
                </p>
                <p className="mt-4 text-5xl font-medium tracking-[-0.03em] text-nomad-black">
                  {page.annonce.note}
                  <span className="text-lg text-nomad-black/60 font-normal"> / 5 sur Airbnb</span>
                </p>
                <a
                  href={page.annonce.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block underline underline-offset-4 text-nomad-black"
                >
                  Lire les avis des voyageurs sur Airbnb
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="py-20 md:py-28 bg-[#F5F5F3]">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
                Ce qu'on fait pour vous
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-nomad-black/80">
                {page.atouts.map((a) => (
                  <li key={a} className="pl-6 relative before:absolute before:left-0 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-nomad-blue">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg text-nomad-black">
                Tout ça pour <strong>20 % des revenus, tout compris</strong>.{" "}
                <Link href="/tarifs" className="underline underline-offset-4">Voir le détail des tarifs</Link>
              </p>
            </div>
            <div>
              <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
                {page.type === "departement" ? "Le marché du 93" : `Le marché à ${page.nom}`}
              </h2>
              <ul className="mt-8 space-y-5 text-lg text-nomad-black/80 leading-relaxed">
                {page.marche.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-medium text-[2rem] md:text-5xl tracking-[-0.035em] leading-[1] text-nomad-black">
              Vos questions sur la conciergerie Airbnb {page.type === "departement" ? "dans le 93" : `à ${page.nom}`}
            </h2>
            <div className="mt-10 divide-y divide-nomad-black/10 border-y border-nomad-black/10">
              {page.faq.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="cursor-pointer list-none text-lg font-medium text-nomad-black flex justify-between gap-6">
                    {f.q}
                    <span aria-hidden="true" className="text-nomad-black/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-nomad-black/75 leading-relaxed">{f.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <h2 className="text-sm text-nomad-black/60">Nous gérons aussi</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {page.voisines.map((slug) => {
                const v = pageLocale(slug);
                if (!v) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/conciergerie-airbnb/${slug}`}
                      className="inline-block px-5 py-2.5 rounded-full border border-nomad-black/15 text-nomad-black hover:border-nomad-black transition-colors"
                    >
                      Conciergerie Airbnb {v.type === "departement" ? "en Seine-Saint-Denis" : `à ${v.nom}`}
                    </Link>
                  </li>
                );
              })}
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
