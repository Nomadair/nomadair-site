// Articles du blog : une entrée par article, lue par la page /blog, le sitemap et chaque page d'article.

export type Article = {
  slug: string;
  titre: string;
  description: string;
  h1: string;
  publie: string;
  resume: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "prix-conciergerie-airbnb",
    titre: "Prix d'une conciergerie Airbnb en 2026 : 15, 20 ou 25 % ?",
    description:
      "Combien coûte une conciergerie Airbnb ? Ce que couvrent 15, 20 et 25 %, les frais cachés, et un calcul pour comparer les offres avant de signer.",
    h1: "Prix d'une conciergerie Airbnb en 2026 : ce que couvrent 15, 20 ou 25 %",
    publie: "2026-11-02",
    resume:
      "15, 20, 25 %… Les taux varient, et le moins cher n'est pas toujours celui qui rapporte le plus. Ce qu'il faut comparer avant de signer.",
  },
];
