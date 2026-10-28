import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Chiffres = lazy(() => import("@/components/Chiffres"));
const Offres = lazy(() => import("@/components/Offres"));
const Process = lazy(() => import("@/components/Process"));
const Simulateur = lazy(() => import("@/components/Simulateur"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="py-16" />}>
    {children}
  </Suspense>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LazySection><Chiffres /></LazySection>
      <LazySection><Offres /></LazySection>
      <LazySection><Process /></LazySection>
      <LazySection><Simulateur /></LazySection>
      <LazySection><Footer /></LazySection>
      <LazySection><WhatsAppButton /></LazySection>
    </div>
  );
};

export default Index;