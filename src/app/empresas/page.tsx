import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EmpresasSection from "@/components/sections/EmpresasSection";

export default function EmpresasPage() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Navbar />
      <EmpresasSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
