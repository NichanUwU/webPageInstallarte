"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";
import { formatServicePrice, WHATSAPP_NUMBER } from "@/data/catalog";
import type { ServiceItem } from "@/data/catalog";
import ImagePlaceholder from "./ImagePlaceholder";

function getBadgeStyle(badge?: string): string {
  if (!badge) return "";
  if (badge.includes("MÁS VENDIDO"))
    return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
  if (badge.includes("TE CONVIENE"))
    return "bg-gradient-to-r from-violet-600 to-purple-500 text-white";
  if (badge.includes("Próximamente") || badge.includes("Bajo pedido"))
    return "bg-white/10 text-white/60 border border-white/15";
  return "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30";
}

interface Props {
  item: ServiceItem;
  index?: number;
}

export default function ServiceCard({ item, index = 0 }: Props) {
  const waMessage = item.showPrice
    ? `¡Hola InstallArte! Me interesa el servicio: *${item.title}* (${formatServicePrice(item)}). ¿Podrían darme más información?`
    : `¡Hola InstallArte! Quiero consultar disponibilidad de: *${item.title}*.`;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const isFeatured =
    item.badge?.includes("MÁS VENDIDO") || item.badge?.includes("TE CONVIENE");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isFeatured
          ? "glass border border-[#00F0FF]/25 shadow-neon-cyan"
          : "glass border border-white/8"
      }`}
    >
      {/* Badge */}
      {item.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${getBadgeStyle(item.badge)}`}
          >
            {item.badge}
          </span>
        </div>
      )}

      {/* Image placeholder */}
      <ImagePlaceholder name={item.imagePlaceholder} aspect="16/9" />

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-base leading-snug text-white">{item.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed flex-1">{item.description}</p>

        {/* Price */}
        <div className="flex flex-col gap-1">
          {item.showPrice ? (
            <>
              {item.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-xs line-through text-white/30">
                    ${item.originalPrice.toLocaleString("es-MX")} MXN
                  </span>
                  {item.savingsText && (
                    <span className="text-xs font-bold text-emerald-400">
                      {item.savingsText}
                    </span>
                  )}
                </div>
              )}
              <span className="text-2xl font-black text-white">
                {formatServicePrice(item)}
              </span>
            </>
          ) : (
            <span className="text-sm font-semibold text-[#00F0FF]">
              Consultar disponibilidad por WhatsApp
            </span>
          )}
          {item.requiresPartQuote && (
            <p className="text-xs text-amber-400/80">⚠ Pieza se cotiza aparte</p>
          )}
        </div>

        {/* Warranty */}
        {item.warranty && (
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Shield size={12} className="text-[#00F0FF]" />
            <span>Garantía: {item.warranty}</span>
          </div>
        )}

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 btn-neon"
        >
          <MessageCircle size={16} />
          {item.showPrice ? "Pedir por WhatsApp" : "Consultar por WhatsApp"}
        </a>
      </div>
    </motion.div>
  );
}
