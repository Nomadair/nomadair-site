import type { Metadata } from "next";
import PageLegale from "@/components/PageLegale";

export const metadata: Metadata = {
  title: "Confidentialité · NomadAir",
  description: "Comment NomadAir traite vos données et utilise les cookies sur nomadair.co.",
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  return (
    <PageLegale titre="Confidentialité" maj="29 octobre 2026">
      <section>
        <h2>Qui est responsable de vos données</h2>
        <p>
          Altaïs Capital, qui exploite la marque NomadAir, 5 Chemin de la Baulue, 14760 Bretteville-sur-Odon. Pour toute
          question : <a href="mailto:contact@nomadair.co">contact@nomadair.co</a>.
        </p>
      </section>

      <section>
        <h2>Le formulaire d'audit</h2>
        <p>
          Quand vous demandez l'audit de votre bien, nous recevons votre prénom, la ville et la surface du bien, votre
          e-mail et votre téléphone. Ils servent uniquement à vous rappeler et à préparer l'étude de votre bien. Nous ne
          les vendons pas et ne les utilisons pas pour de la publicité.
        </p>
        <p>Selon la façon dont le formulaire est envoyé, vos informations passent par :</p>
        <ul>
          <li>Web3Forms, un service qui nous transmet votre demande par e-mail ;</li>
          <li>ou WhatsApp, quand vous envoyez vous-même le message préparé par le site.</li>
        </ul>
        <p>
          Nous gardons ces informations le temps de l'échange, puis 3 ans au plus après notre dernier contact si vous ne
          devenez pas client.
        </p>
      </section>

      <section>
        <h2>Les cookies</h2>
        <p>
          Le site n'utilise qu'un outil de mesure d'audience : Google Analytics. Il ne se charge que si vous cliquez sur
          « Tout accepter » dans le bandeau. Si vous refusez, aucun cookie de mesure n'est déposé.
        </p>
        <p>
          Votre choix est gardé 6 mois dans votre navigateur, puis le bandeau vous le redemande. Vous pouvez le modifier
          à tout moment avec le lien « Gérer les cookies » en bas de chaque page.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander à consulter, corriger ou effacer vos données, ou vous opposer à leur utilisation, en
          écrivant à <a href="mailto:contact@nomadair.co">contact@nomadair.co</a>. Nous répondons sous un mois.
        </p>
        <p>
          Si notre réponse ne vous convient pas, vous pouvez vous adresser à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </section>
    </PageLegale>
  );
}
