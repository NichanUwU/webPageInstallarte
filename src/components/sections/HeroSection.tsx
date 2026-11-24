"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Zap, Star } from "lucide-react";
import { WHATSAPP_NUMBER, CATALOG, FEATURED_IDS } from "@/data/catalog";

export default function HeroSection() {
  const featured = CATALOG.filter((item) => FEATURED_IDS.includes(item.id));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola InstallArte! Quiero cotizar un servicio.")}`;

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass border border-[#00F0FF]/20 rounded-full px-4 py-1.5 mb-6"
            >
              <Zap size={12} className="text-[#00F0FF]" />
              <span className="text-xs font-semibold text-[#00F0FF] tracking-wide uppercase">
                Tuxtla Gutiérrez, Chiapas · México
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
            >
              Soluciones completas{" "}
              <span className="neon-text">para tu PC</span> y negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Instalación y activación de Windows/Office, mantenimiento preventivo,
              upgrade de RAM/SSD, armado de PCs Gamer y diseño web.{" "}
              <strong className="text-white/90">Fácil, rápido y confiable.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
              >
                <MessageCircle size={18} />
                Cotizar por WhatsApp
              </a>
              <a
                href="#cotizador"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-white/20 text-white/80 hover:border-[#00F0FF]/50 hover:text-white transition-all duration-200"
              >
                Armar mi paquete
                <ChevronDown size={16} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                "⚡ Servicio Rápido",
                "🛡 Garantía Real",
                "🤝 Atención Empática",
                "🔧 Post-servicio incluido",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-white/40 border border-white/10 rounded-full px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Featured cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 font-semibold flex items-center gap-2">
              <Star size={12} className="text-[#00F0FF]" />
              Paquetes más populares
            </p>
            {featured.map((item, i) => {
              const waMsg = `¡Hola InstallArte! Me interesa el paquete *${item.title}* ($${item.price.toLocaleString("es-MX")} MXN). ¿Podrían darme más información?`;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="glass border border-[#00F0FF]/20 rounded-2xl p-5 shadow-neon-cyan"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      {item.badge && (
                        <span className="text-xs font-bold text-orange-400 mb-1 block">
                          {item.badge}
                        </span>
                      )}
                      <h3 className="font-bold text-white text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {item.originalPrice && (
                        <p className="text-xs line-through text-white/30">
                          ${item.originalPrice.toLocaleString("es-MX")}
                        </p>
                      )}
                      <p className="text-2xl font-black text-white">
                        ${item.price.toLocaleString("es-MX")}
                        <span className="text-xs font-normal text-white/40 ml-1">MXN</span>
                      </p>
                      {item.savingsText && (
                        <span className="text-xs font-bold text-emerald-400">{item.savingsText}</span>
                      )}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 btn-neon py-2 rounded-xl text-sm font-bold w-full"
                  >
                    <MessageCircle size={15} />
                    Quiero este paquete
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={22} className="text-white/20" />
      </motion.div>
    </section>
  );
}
