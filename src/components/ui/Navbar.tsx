"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";

const links = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Arma tu Paquete", href: "/#cotizador" },
  { label: "Empresas", href: "/empresas" },
  { label: "Tienda", href: "/tienda" },
  { label: "Cobertura", href: "/#cobertura" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola InstallArte! Quiero más información sobre sus servicios.")}`;

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;

    event.preventDefault();
    const hash = href.slice(1);
    window.history.pushState(null, "", href);
    requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0C29]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-2">
          <span className="text-xl font-black tracking-tight">
            Install<span className="text-[#00F0FF] transition-colors group-hover:text-white">Arte</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="text-sm font-medium text-white/70 transition-colors hover:text-[#00F0FF]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon hidden items-center gap-2 rounded-full px-4 py-2 text-sm md:flex"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <button
          type="button"
          className="p-1 text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/5 bg-[#131033]/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="border-b border-white/5 py-2 text-sm font-medium text-white/80 hover:text-[#00F0FF]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-neon mt-2 flex items-center justify-center gap-2 rounded-xl py-3 text-sm"
            >
              <MessageCircle size={16} />
              Cotizar por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
