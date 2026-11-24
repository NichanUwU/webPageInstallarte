import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/Hero";
import ServiceCatalog from "@/components/ServiceCatalog";
import PackageBuilder from "@/components/PackageBuilder";
import HowWeWork from "@/components/HowWeWork";

export default function Home() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServiceCatalog />
      <PackageBuilder />
      <HowWeWork />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
