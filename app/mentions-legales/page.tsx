import type { Metadata } from "next";
import PageLegale from "@/components/PageLegale";

export const metadata: Metadata = {
  title: "Mentions légales · NomadAir",
  description: "Éditeur, hébergeur et informations légales du site nomadair.co.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" maj="29 octobre 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site nomadair.co est édité par <strong>Altaïs Capital</strong>, société par actions simplifiée à associé
          unique (SASU) au capital de 743 995 €, immatriculée au registre du commerce et des sociétés sous le numéro
          995 305 133 RCS Caen.
        </p>
        <p>Siège social : 5 Chemin de la Baulue, 14760 Bretteville-sur-Odon, France.</p>
        <p>NomadAir est une marque exploitée par Altaïs Capital.</p>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>Kenny Salem, président d'Altaïs Capital.</p>
      </section>

      <section>
        <h2>Nous contacter</h2>
        <p>
          Par e-mail : <a href="mailto:contact@nomadair.co">contact@nomadair.co</a>
          <br />
          Par téléphone ou WhatsApp : <a href="tel:+33619741903">06 19 74 19 03</a>
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par GitHub, Inc. (service GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco,
          CA 94107, États-Unis.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le logo NomadAir et la mise en page de ce site appartiennent à Altaïs Capital. Toute reproduction
          sans accord écrit est interdite.
        </p>
        <p>
          Les photos des destinations proviennent de Wikimedia Commons et restent la propriété de leurs auteurs, cités en
          bas de chaque page avec leur licence. Les logos Airbnb, AirDNA et GuestLucky appartiennent à leurs
          propriétaires respectifs et désignent les outils que nous utilisons.
        </p>
      </section>

      <section>
        <h2>Chiffres et avis présentés</h2>
        <p>
          Les notes, avis et taux d'occupation affichés proviennent des annonces Airbnb gérées par NomadAir et sont datés
          sur la page. Les projections de revenus sont des estimations : aucun revenu n'est garanti.
        </p>
      </section>

      <section>
        <h2>Données personnelles et cookies</h2>
        <p>
          La façon dont nous traitons vos données et nos cookies est décrite dans notre{" "}
          <a href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>
    </PageLegale>
  );
}
