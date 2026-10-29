const lignes = [
  {
    ailleurs: "Des frais cachés partout, découverts au premier relevé.",
    nomadair: "Une seule commission, 20 %. Chaque euro est visible dans votre QG NomadAir.",
  },
  {
    ailleurs: "Une conciergerie qui ne répond plus.",
    nomadair: "Voyageurs pris en charge 7 j/7, et un interlocuteur unique qui connaît votre bien.",
  },
  {
    ailleurs: "Un ménage bâclé, des avis qui chutent.",
    nomadair: "Contrôle photo après chaque séjour. Vous voyez l'état du logement sans vous déplacer.",
  },
  {
    ailleurs: "Des voisins qui se plaignent.",
    nomadair: "Voyageurs vérifiés, règlement intérieur clair, fêtes interdites.",
  },
  {
    ailleurs: "Des revenus promis au hasard.",
    nomadair: "Une étude AirDNA de votre quartier avant toute signature.",
  },
  {
    ailleurs: "Aucune visibilité sur ce qui se passe chez soi.",
    nomadair: "Réservations, revenus, avis et état du logement, en temps réel dans votre QG.",
  },
];

const Douleurs = () => {
  return (
    <section id="pourquoi" className="py-24 md:py-36 bg-[#F5F6F7]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-medium text-[2rem] md:text-6xl tracking-[-0.035em] leading-[1] text-nomad-black max-w-3xl">
          Les galères ? Réglées.
        </h2>

        <table className="mt-12 w-full text-left border-collapse">
          <caption className="sr-only">Comparaison entre une conciergerie classique et NomadAir</caption>
          <thead>
            <tr className="border-b border-nomad-black">{/* taste-skill-ignore : vrai tableau */}
              <th scope="col" className="w-1/2 pb-4 pr-6 font-normal text-sm text-nomad-black/65">
                Ailleurs
              </th>
              <th scope="col" className="w-1/2 pb-4 font-semibold text-sm text-nomad-black">
                Chez NomadAir
              </th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l) => (
              <tr key={l.ailleurs} className="border-b border-gray-200 align-top">{/* taste-skill-ignore : vrai tableau */}
                <td className="py-5 pr-6 text-nomad-black/65 text-[15px] md:text-base leading-relaxed">
                  {l.ailleurs}
                </td>
                <td className="py-5 text-nomad-black text-[15px] md:text-lg leading-relaxed">
                  {l.nomadair}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <a
          href="#simulateur"
          className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-nomad-blue text-nomad-black font-medium rounded-full hover:bg-nomad-black hover:text-white transition-colors"
        >
          Demander l'audit gratuit de mon bien
        </a>
      </div>
    </section>
  );
};

export default Douleurs;
