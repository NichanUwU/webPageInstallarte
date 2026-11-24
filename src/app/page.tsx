"use client";

import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CatalogSection from "@/components/sections/CatalogSection";
import QuoterSection from "@/components/sections/QuoterSection";
import EmpresasSection from "@/components/sections/EmpresasSection";
import CoverageSection from "@/components/sections/CoverageSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <QuoterSection />
      <EmpresasSection />
      <CoverageSection />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
