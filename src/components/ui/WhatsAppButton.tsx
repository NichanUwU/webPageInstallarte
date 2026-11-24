"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/catalog";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola InstallArte! Necesito ayuda con mi equipo.")}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat de WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-neon-cyan sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{ background: "linear-gradient(135deg, #00D4E8, #00F0FF)" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
    >
      <MessageCircle size={26} color="#0F0C29" strokeWidth={2.5} />
    </motion.a>
  );
}
