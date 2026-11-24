"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";

const links = [
  { label: "Servicios", href: "#catalogo" },
  { label: "Arma tu Paquete", href: "#cotizador" },
  { label: "Empresas", href: "#empresas" },
  { label: "Tienda", href: "#catalogo" },
  { label: "Cobertura", href: "#cobertura" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola InstallArte! Quiero más información sobre sus servicios.")}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0C29]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight">
            Install<span className="text-[#00F0FF] group-hover:text-white transition-colors">Arte</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-sm text-white/70 hover:text-[#00F0FF] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 btn-neon px-4 py-2 rounded-full text-sm"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#131033]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-white/80 hover:text-[#00F0FF] font-medium py-2 border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center justify-center gap-2 py-3 rounded-xl text-sm mt-2"
              >
                <MessageCircle size={16} />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
