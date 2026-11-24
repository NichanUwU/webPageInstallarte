"use client";

import { Facebook, MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";

const links = [
  { label: "Servicios", href: "#catalogo" },
  { label: "Arma tu Paquete", href: "#cotizador" },
  { label: "Empresas", href: "#empresas" },
  { label: "Tienda", href: "#catalogo" },
  { label: "Cobertura", href: "#cobertura" },
];

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola InstallArte! Quiero más información.")}`;

  return (
    <footer className="bg-[#0F0C29] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black">
              Install<span className="text-[#00F0FF]">Arte</span>
            </span>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Soluciones tecnológicas confiables para personas y negocios en Chiapas.
              Rápido, garantizado y con atención empática.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/40">
              <MapPin size={14} />
              <span>Tuxtla Gutiérrez · Villaflores · Villacorzo, Chiapas</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4 font-semibold">Navegación</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-[#00F0FF] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4 font-semibold">Contáctanos</p>
            <div className="flex flex-col gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[#00F0FF] transition-colors"
              >
                <MessageCircle size={18} className="text-[#00F0FF]" />
                WhatsApp Business
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[#00F0FF] transition-colors"
              >
                <Facebook size={18} className="text-[#00F0FF]" />
                Facebook InstallArte
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} InstallArte. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/25">
            Hecho con ♥ en Chiapas, México
          </p>
        </div>
      </div>
    </footer>
  );
}
