import Link from "next/link";

export default function PageIntrouvable() {
  return (
    <main className="min-h-svh bg-nomad-black text-white flex items-center">
      <div className="container mx-auto px-6">
        <h1 className="text-white text-5xl md:text-7xl font-medium tracking-[-0.04em]">Cette page n'existe pas.</h1>
        <p className="mt-6 text-lg text-white/75">Le lien est peut-être ancien. Le site NomadAir vous attend à l'accueil.</p>
        <Link href="/" className="mt-10 inline-flex px-8 py-4 bg-nomad-blue text-nomad-black font-medium rounded-full">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
