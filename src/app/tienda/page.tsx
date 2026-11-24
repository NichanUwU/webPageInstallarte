import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServiceCard from "@/components/ui/ServiceCard";
import { CATALOG } from "@/data/catalog";

const products = CATALOG.filter((item) => item.category === "tienda");

export default function TiendaPage() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <Navbar />
      <section id="tienda" className="scroll-mt-24 bg-[#131033] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pt-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#00F0FF]">
              Tienda InstallArte
            </p>
            <h1 className="break-words text-3xl font-black sm:text-4xl">
              Accesorios bajo pedido
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
              Consulta por WhatsApp la disponibilidad y el precio de los productos.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item, index) => (
              <ServiceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
