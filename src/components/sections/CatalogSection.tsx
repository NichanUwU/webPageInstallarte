"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATALOG } from "@/data/catalog";
import ServiceCard from "@/components/ui/ServiceCard";

type TabId = "todos" | "software" | "mantenimiento";

const TABS: { id: TabId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "software", label: "Software y Activación" },
  { id: "mantenimiento", label: "Mantenimiento y Upgrade" },
];

export default function CatalogSection() {
  const [activeTab, setActiveTab] = useState<TabId>("todos");
  const serviceItems = CATALOG.filter(
    (item) => item.category === "software" || item.category === "mantenimiento"
  );

  const filtered =
    activeTab === "todos"
      ? serviceItems
      : serviceItems.filter((item) => item.category === activeTab);

  return (
    <section id="servicios" className="scroll-mt-24 bg-[#131033] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#00F0FF] font-semibold mb-2"
          >
            Catálogo Completo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black"
          >
            Todos nuestros servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-white/50 text-sm max-w-xl mx-auto"
          >
            Selecciona la categoría y encuentra exactamente lo que necesitas. Cada botón te lleva directo a WhatsApp.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`max-w-full break-words px-4 py-2 rounded-full text-center text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "btn-neon"
                  : "border border-white/15 text-white/60 hover:border-[#00F0FF]/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((item, i) => (
              <ServiceCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
