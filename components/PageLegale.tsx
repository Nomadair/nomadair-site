import Link from "next/link";
import Logo from "./Logo";

// Gabarit sobre des pages légales : barre simple, texte lisible, retour à l'accueil.
export default function PageLegale({ titre, maj, children }: { titre: string; maj: string; children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-white">
      <header className="bg-nomad-black">
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" aria-label="NomadAir, retour à l'accueil">
            <Logo couleur="blanc" />
          </Link>
          <Link href="/" className="text-[15px] text-white/75 hover:text-white transition-colors">
            Retour au site
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-nomad-black font-medium text-[2.25rem] md:text-6xl tracking-[-0.035em] leading-[1]">{titre}</h1>
        <p className="mt-4 text-sm text-nomad-black/65">Mise à jour : {maj}</p>
        <div className="mt-12 max-w-[68ch] space-y-10 text-[17px] leading-relaxed text-nomad-black [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-[-0.02em] [&_h2]:mb-3 [&_p+p]:mt-3 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li+li]:mt-1">
          {children}
        </div>
      </main>
    </div>
  );
}
