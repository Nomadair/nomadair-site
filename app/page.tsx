import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Annonces from "@/components/Annonces";
import Expertise from "@/components/Expertise";
import Douleurs from "@/components/Douleurs";
import Avis from "@/components/Avis";
import Offres from "@/components/Offres";
import Destinations from "@/components/Destinations";
import Process from "@/components/Process";
import Questions from "@/components/Questions";
import Simulateur from "@/components/Simulateur";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Apparitions from "@/components/Apparitions";

export default function Accueil() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <Hero />
        <Annonces />
        <Expertise />
        <Douleurs />
        <Avis />
        <Offres />
        <Destinations />
        <Process />
        <Questions />
        <Simulateur />
      </main>
      <Footer />
      <WhatsAppButton />
      <Apparitions />
    </div>
  );
}
