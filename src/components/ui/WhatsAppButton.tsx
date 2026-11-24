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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-neon-cyan"
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
