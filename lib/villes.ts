// Pages locales « Conciergerie Airbnb [lieu] ». Une page n'existe que si NomadAir y gère un vrai bien
// (pas de page-porte). Notes Airbnb relevées le 28/10/2026, occupation d'août 2026 relevée sur les biens gérés.

export type PageLocale = {
  slug: string;
  nom: string;
  type: "ville" | "departement";
  titre: string;
  description: string;
  h1: string;
  intro: string;
  annonce?: { titre: string; note: string; url: string; image: string; detail: string };
  atouts: string[];
  marche: string[];
  faq: { q: string; r: string }[];
  voisines: string[];
};

const FAQ_COMMUNE = {
  prix: {
    q: "Combien coûte la conciergerie NomadAir ?",
    r: "20 % des revenus encaissés, tout compris : annonce, prix, voyageurs, ménage organisé, entretien courant et relevé du mois. Les frais de ménage sont payés par le voyageur dans le prix Airbnb. Pas de frais d'entrée, pas de frais cachés.",
  },
  suivi: {
    q: "Comment je suis mon logement au quotidien ?",
    r: "Depuis votre QG NomadAir sur Telegram : réservations, arrivées, ménage et relevé du mois, en temps réel. Et un humain répond au 07 56 91 41 43.",
  },
};

export const PAGES_LOCALES: PageLocale[] = [
  {
    slug: "saint-ouen",
    nom: "Saint-Ouen",
    type: "ville",
    titre: "Conciergerie Airbnb Saint-Ouen · NomadAir, 20 % tout compris",
    description:
      "Conciergerie Airbnb à Saint-Ouen-sur-Seine : annonce, prix, voyageurs, ménage. Notre logement près des Puces est noté 4,76. Audit gratuit de votre bien.",
    h1: "Conciergerie Airbnb à Saint-Ouen",
    intro:
      "NomadAir gère déjà un logement Airbnb à Saint-Ouen, à cinq minutes à pied de Paris. On connaît la ville, ses voyageurs et ses prix. Confiez-nous votre bien : on s'occupe de tout, vous suivez tout.",
    annonce: {
      titre: "La Casita, Paris à 5 min à pied",
      note: "4,76",
      url: "https://www.airbnb.fr/rooms/1699064180176532481",
      image: "/annonces/saint-ouen.jpg",
      detail: "65 m² · 1 chambre · 4 voyageurs",
    },
    atouts: [
      "Annonce rédigée et photos mises en valeur pour sortir dans les recherches Airbnb",
      "Prix ajustés chaque jour selon la demande (salons, matchs, week-ends)",
      "Messages et arrivées des voyageurs gérés, de jour comme de nuit",
      "Ménage et linge organisés entre chaque séjour",
    ],
    marche: [
      "Les Puces de Saint-Ouen, le plus grand marché aux antiquités du monde, attirent des visiteurs toute l'année.",
      "La ligne 14 met le centre de Paris à quelques minutes, ce que cherchent les voyageurs pour un séjour à Paris.",
      "Le quartier des Docks a fait arriver des sièges d'entreprises : des voyageurs professionnels en semaine, des touristes le week-end.",
    ],
    faq: [
      FAQ_COMMUNE.prix,
      {
        q: "Est-ce que vous gérez déjà un logement à Saint-Ouen ?",
        r: "Oui. « La Casita », 65 m² à cinq minutes à pied de Paris, est gérée par NomadAir et notée 4,76 sur Airbnb. Vous pouvez lire les avis des voyageurs directement sur l'annonce.",
      },
      {
        q: "Mon appartement à Saint-Ouen peut-il être loué sur Airbnb ?",
        r: "En résidence principale, la loi limite la location à 120 nuits par an et demande une déclaration en mairie. Pour une résidence secondaire, d'autres règles s'appliquent. On vérifie votre cas pendant l'audit gratuit.",
      },
      FAQ_COMMUNE.suivi,
      {
        q: "Combien peut rapporter mon logement à Saint-Ouen ?",
        r: "Ça dépend de la surface, de l'emplacement et de l'équipement. On vous fait une projection de revenus gratuite à partir des données du marché local, avant tout engagement.",
      },
    ],
    voisines: ["le-blanc-mesnil", "seine-saint-denis"],
  },
  {
    slug: "le-blanc-mesnil",
    nom: "Le Blanc-Mesnil",
    type: "ville",
    titre: "Conciergerie Airbnb Le Blanc-Mesnil · NomadAir",
    description:
      "Conciergerie Airbnb au Blanc-Mesnil (93150) : on gère votre location de A à Z, près du Bourget et de Roissy. Notre logement est noté 4,65. Audit gratuit.",
    h1: "Conciergerie Airbnb au Blanc-Mesnil",
    intro:
      "NomadAir gère un logement Airbnb au Blanc-Mesnil, avec terrasse et parking. Entre l'aéroport du Bourget, Roissy et Paris, la ville attire des voyageurs que peu de conciergeries savent accueillir. On s'en occupe pour vous.",
    annonce: {
      titre: "Verrière atelier, terrasse, parking",
      note: "4,65",
      url: "https://www.airbnb.fr/rooms/1665087588292045763",
      image: "/annonces/blanc-mesnil.jpg",
      detail: "2 chambres · 4 voyageurs",
    },
    atouts: [
      "Le parking et l'accès aux aéroports mis en avant dans l'annonce",
      "Prix ajustés selon les salons du Bourget et les vols de Roissy",
      "Arrivées autonomes et messages gérés pour les voyageurs en transit",
      "Ménage et linge organisés entre chaque séjour",
    ],
    marche: [
      "L'aéroport du Bourget et son parc des expositions accueillent des salons internationaux qui remplissent les logements alentour.",
      "Roissy-Charles-de-Gaulle est à quelques minutes en voiture : familles et voyageurs en escale cherchent un logement avec parking.",
      "Le RER B relie la ville à Paris, ce qui élargit la clientèle aux touristes qui veulent un logement plus grand que dans Paris.",
    ],
    faq: [
      FAQ_COMMUNE.prix,
      {
        q: "Est-ce que vous gérez déjà un logement au Blanc-Mesnil ?",
        r: "Oui. Notre logement avec verrière, terrasse et parking est géré par NomadAir et noté 4,65 sur Airbnb. Les avis des voyageurs sont visibles sur l'annonce.",
      },
      {
        q: "Un logement au Blanc-Mesnil se loue-t-il bien sur Airbnb ?",
        r: "Oui, grâce aux aéroports et au parc des expositions du Bourget. Sur nos logements d'Île-de-France, 93,6 % des nuits étaient louées en août 2026. On vous donne une projection pour votre bien pendant l'audit.",
      },
      FAQ_COMMUNE.suivi,
      {
        q: "Je n'habite pas en Île-de-France, est-ce un problème ?",
        r: "Non. Tout se suit à distance depuis votre QG NomadAir, et l'équipe s'occupe de tout sur place.",
      },
    ],
    voisines: ["saint-ouen", "seine-saint-denis"],
  },
  {
    slug: "seine-saint-denis",
    nom: "Seine-Saint-Denis",
    type: "departement",
    titre: "Conciergerie Airbnb Seine-Saint-Denis (93) · NomadAir",
    description:
      "Conciergerie Airbnb en Seine-Saint-Denis : nos logements à Saint-Ouen et au Blanc-Mesnil. 20 % tout compris, suivi en temps réel. Audit gratuit.",
    h1: "Conciergerie Airbnb en Seine-Saint-Denis",
    intro:
      "Le 93, c'est notre terrain. NomadAir y gère ses logements Airbnb, à Saint-Ouen et au Blanc-Mesnil. Aux portes de Paris, près du Stade de France et des aéroports, le département attire des voyageurs toute l'année.",
    atouts: [
      "Des logements déjà gérés dans le département, avec leurs notes publiques",
      "Une équipe de ménage en place sur nos villes",
      "Des prix ajustés aux grands événements (Stade de France, salons du Bourget)",
      "Un suivi en temps réel depuis votre QG NomadAir sur Telegram",
    ],
    marche: [
      "Le Stade de France, à Saint-Denis, remplit les logements du département à chaque grand match et concert.",
      "Les aéroports du Bourget et de Roissy amènent des voyageurs professionnels et des familles en transit.",
      "Les lignes 13 et 14 et le RER B mettent Paris à quelques minutes, pour des logements souvent plus grands qu'à Paris.",
      "Sur nos logements d'Île-de-France, 93,6 % des nuits étaient louées en août 2026.",
    ],
    faq: [
      FAQ_COMMUNE.prix,
      {
        q: "Dans quelles villes du 93 intervenez-vous ?",
        r: "Nous gérons aujourd'hui des logements à Saint-Ouen et au Blanc-Mesnil. Pour une autre ville du département, demandez un audit : on vous dit franchement si on peut bien s'occuper de votre bien.",
      },
      FAQ_COMMUNE.suivi,
      {
        q: "Qu'est-ce qui différencie NomadAir d'une conciergerie classique ?",
        r: "Avant de commencer, on étudie votre bien avec les données du marché pour une projection réaliste. Ensuite, vous voyez tout en temps réel, et un humain vous répond.",
      },
    ],
    voisines: ["saint-ouen", "le-blanc-mesnil"],
  },
];

export function pageLocale(slug: string): PageLocale | undefined {
  return PAGES_LOCALES.find((p) => p.slug === slug);
}
