"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calculator, AlertCircle } from "lucide-react";
import { CATALOG, formatServicePrice, WHATSAPP_NUMBER } from "@/data/catalog";

const quoterItems = CATALOG.filter(
  (item) => item.inQuoter && item.showPrice && item.category !== "tienda"
);

export default function QuoterSection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectedItems = useMemo(
    () => quoterItems.filter((item) => selected.has(item.id)),
    [selected]
  );

  const total = useMemo(
    () =>
      selectedItems
        .filter((item) => !item.priceSuffix?.includes("/ mes"))
        .reduce((sum, item) => sum + item.price, 0),
    [selectedItems]
  );

  const monthlyTotal = useMemo(
    () =>
      selectedItems
        .filter((item) => item.priceSuffix?.includes("/ mes"))
        .reduce((sum, item) => sum + item.price, 0),
    [selectedItems]
  );

  const hasPartQuote = selectedItems.some((item) => item.requiresPartQuote);

  const buildWaMessage = () => {
    if (selectedItems.length === 0) return "";
    const lines = [
      "¡Hola InstallArte! Quiero cotizar los siguientes servicios:",
      "",
      ...selectedItems.map(
        (item) =>
          `• ${item.title}: ${formatServicePrice(item)}${
            item.requiresPartQuote ? " (+ pieza aparte)" : ""
          }`
      ),
      "",
      `*Total estimado de servicios: $${total.toLocaleString("es-MX")} MXN*`,
      ...(monthlyTotal > 0
        ? [`*Mensualidad estimada: $${monthlyTotal.toLocaleString("es-MX")} MXN*`]
        : []),
      ...(hasPartQuote ? ["Piezas/equipos se cotizan aparte."] : []),
      "",
      "¿Cuándo podríamos agendar?",
    ];
    return lines.join("\n");
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWaMessage())}`;

  return (
    <section id="cotizador" className="scroll-mt-24 bg-[#1B1746] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#00F0FF] font-semibold mb-2"
          >
            Cotizador Interactivo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black"
          >
            Arma tu Paquete
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-white/50 text-sm max-w-lg mx-auto"
          >
            Selecciona los servicios que necesitas y te generamos un presupuesto
            al instante para enviarlo por WhatsApp.
          </motion.p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-5">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 lg:col-span-3 glass border border-white/8 rounded-2xl p-4 sm:p-6"
          >
            <p className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wide">
              Servicios disponibles
            </p>
            <div className="flex flex-col gap-2">
              {quoterItems.map((item) => {
                const checked = selected.has(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex min-w-0 items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-150 sm:gap-4 ${
                      checked
                        ? "bg-[#00F0FF]/10 border border-[#00F0FF]/30"
                        : "border border-transparent hover:bg-white/4"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(item.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                        checked
                          ? "bg-[#00F0FF] border-[#00F0FF]"
                          : "border-white/25"
                      }`}
                    >
                      {checked && (
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                        >
                          <path
                            d="M1 4L4 7L10 1"
                            stroke="#0F0C29"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="break-words text-sm font-semibold leading-tight text-white">
                        {item.title}
                      </p>
                      {item.badge && (
                        <span className="text-xs text-[#00F0FF]/70">{item.badge}</span>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="max-w-[7rem] break-words text-sm font-bold text-white sm:max-w-none">
                        {formatServicePrice(item)}
                      </span>
                      {item.requiresPartQuote && (
                        <p className="text-xs text-amber-400/70">+ pieza</p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 lg:col-span-2 glass border border-[#00F0FF]/20 rounded-2xl p-4 sm:p-6 lg:sticky lg:top-20"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calculator size={18} className="text-[#00F0FF]" />
              <p className="font-bold text-white">Resumen</p>
            </div>

            {selectedItems.length === 0 ? (
              <p className="text-sm text-white/30 text-center py-8">
                Selecciona servicios para ver el total
              </p>
            ) : (
              <div className="flex flex-col gap-2 mb-5">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm gap-2">
                    <span className="text-white/70 leading-tight truncate">{item.title}</span>
                    <span className="text-white font-semibold shrink-0">
                      {formatServicePrice(item)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-white/10 pt-4 mt-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-white/50">
                  {monthlyTotal > 0 ? "Servicios (pago único)" : "Total estimado"}
                </span>
                <span className="text-2xl font-black text-white">
                  ${total.toLocaleString("es-MX")}
                  <span className="text-xs font-normal text-white/40 ml-1">MXN</span>
                </span>
              </div>
              {monthlyTotal > 0 && (
                <div className="flex justify-between items-baseline mt-3">
                  <span className="text-sm text-white/50">Mensualidad estimada</span>
                  <span className="text-lg font-bold text-white">
                    ${monthlyTotal.toLocaleString("es-MX")}
                    <span className="text-xs font-normal text-white/40 ml-1">MXN / mes</span>
                  </span>
                </div>
              )}
              {hasPartQuote && (
                <div className="flex items-start gap-2 mt-3 p-2 rounded-lg bg-amber-400/8 border border-amber-400/20">
                  <AlertCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-400/80">
                    Algún servicio requiere cotizar piezas de hardware aparte.
                  </p>
                </div>
              )}
            </div>

            <a
              href={selectedItems.length > 0 ? waLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                selectedItems.length > 0
                  ? "btn-neon"
                  : "bg-white/5 text-white/30 cursor-not-allowed pointer-events-none"
              }`}
            >
              <MessageCircle size={16} />
              Enviar cotización por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
