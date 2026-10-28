import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useApparitions } from "@/hooks/useApparitions";

// Lazy load below-the-fold components
const Offres = lazy(() => import("@/components/Offres"));
const Process = lazy(() => import("@/components/Process"));
const Douleurs = lazy(() => import("@/components/Douleurs"));
const Expertise = lazy(() => import("@/components/Expertise"));
const Destinations = lazy(() => import("@/components/Destinations"));
const Questions = lazy(() => import("@/components/Questions"));
const Simulateur = lazy(() => import("@/components/Simulateur"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="py-16" />}>
    {children}
  </Suspense>
);

const Index = () => {
  useApparitions();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
      <Hero />
      <LazySection><Douleurs /></LazySection>
      <LazySection><Offres /></LazySection>
      <LazySection><Expertise /></LazySection>
      <LazySection><Destinations /></LazySection>
      <LazySection><Process /></LazySection>
      <LazySection><Questions /></LazySection>
      <LazySection><Simulateur /></LazySection>
      </main>
      <LazySection><Footer /></LazySection>
      <LazySection><WhatsAppButton /></LazySection>
    </div>
  );
};

export default Index;