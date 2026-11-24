"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield, Cpu, Globe, Building2 } from "lucide-react";
import { CATALOG, formatServicePrice, WHATSAPP_NUMBER } from "@/data/catalog";

const b2bIds = [
  "esp-poliza-basica",
  "esp-poliza-plus",
  "esp-web-redes",
  "esp-pc-gamer",
  "esp-domotica",
];

const ICON_MAP: Record<string, React.ReactNode> = {
  "esp-poliza-basica": <Building2 size={22} className="text-[#00F0FF]" />,
  "esp-poliza-plus":   <Building2 size={22} className="text-[#00F0FF]" />,
  "esp-web-redes":     <Globe size={22} className="text-[#00F0FF]" />,
  "esp-pc-gamer":      <Cpu size={22} className="text-[#00F0FF]" />,
  "esp-domotica":      <Shield size={22} className="text-[#00F0FF]" />,
};

export default function EmpresasSection() {
  const items = CATALOG.filter((item) => b2bIds.includes(item.id));
  const polizas = items.filter((i) => i.id.includes("poliza"));
  const otros = items.filter((i) => !i.id.includes("poliza"));

  const buildLink = (item: (typeof items)[0]) => {
    const msg = `¡Hola InstallArte! Me interesa el servicio *${item.title}* (${formatServicePrice(item)}). ¿Pueden darme más información?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="empresas" className="scroll-mt-24 bg-[#0F0C29] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#00F0FF] font-semibold mb-2"
          >
            Para Empresas y Entusiastas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black"
          >
            Soluciones B2B y Gamer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-white/50 text-sm max-w-xl mx-auto"
          >
            Protege tu negocio con una póliza de soporte continuo, o lleva tu
            setup gamer al siguiente nivel. Cotizamos a medida.
          </motion.p>
        </div>

        {/* Pólizas */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-6 flex items-center gap-2">
            <Building2 size={14} className="text-[#00F0FF]" />
            Pólizas PyME — Soporte continuo
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {polizas.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-[#00F0FF]/15 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00F0FF]/35 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#00F0FF]/8 shrink-0">
                    {ICON_MAP[item.id]}
                  </div>
                  <div className="flex-1">
                    {item.badge && (
                      <span className="text-xs text-[#00F0FF] font-bold">{item.badge}</span>
                    )}
                    <h3 className="font-bold text-white text-base mt-0.5">{item.title}</h3>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-2xl font-black text-white">
                      {formatServicePrice(item)}
                    </p>
                    {item.warranty && (
                      <p className="text-xs text-white/35 flex items-center gap-1 mt-1">
                        <Shield size={11} />
                        {item.warranty}
                      </p>
                    )}
                  </div>
                  <a
                    href={buildLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap"
                  >
                    <MessageCircle size={15} />
                    Cotizar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Otros especializados */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-6 flex items-center gap-2">
            <Cpu size={14} className="text-[#00F0FF]" />
            Servicios especializados
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-white/8 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#00F0FF]/25 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-[#00F0FF]/8 w-fit">
                  {ICON_MAP[item.id]}
                </div>
                {item.badge && (
                  <span className="text-xs text-[#00F0FF] font-bold">{item.badge}</span>
                )}
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-auto">
                  <p className="text-xl font-black text-white">
                    {formatServicePrice(item)}
                  </p>
                  {item.warranty && (
                    <p className="text-xs text-white/30 flex items-center gap-1 mt-1">
                      <Shield size={11} />
                      {item.warranty}
                    </p>
                  )}
                  <a
                    href={buildLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 btn-neon py-2.5 rounded-xl text-sm font-bold w-full"
                  >
                    <MessageCircle size={15} />
                    Cotizar por WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
