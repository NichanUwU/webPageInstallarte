"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Shield, Headphones } from "lucide-react";

const pillars = [
  {
    icon: <Zap size={24} className="text-[#00F0FF]" />,
    title: "Rapidez",
    desc: "Atendemos el mismo día o en el tiempo más corto posible.",
  },
  {
    icon: <Heart size={24} className="text-[#00F0FF]" />,
    title: "Atención empática",
    desc: "Te explicamos todo en términos claros, sin tecnicismos innecesarios.",
  },
  {
    icon: <Shield size={24} className="text-[#00F0FF]" />,
    title: "Garantía real",
    desc: "Respaldamos cada servicio con garantía verificable, no solo palabras.",
  },
  {
    icon: <Headphones size={24} className="text-[#00F0FF]" />,
    title: "Soporte post-servicio",
    desc: "Seguimos disponibles después de entregar tu equipo. No te dejamos solo.",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="bg-[#1B1746] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantee seal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-[#00F0FF]/20 rounded-2xl p-8 sm:p-10 text-center mb-14 relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-[#00F0FF]/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-4 mx-auto">
              <Shield size={32} className="text-[#00F0FF]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-tight">
              Garantía de Satisfacción{" "}
              <span className="neon-text">InstallArte</span>
            </h2>
            <p className="mt-4 text-white/60 text-base max-w-xl mx-auto leading-relaxed">
              Todos nuestros servicios cuentan con soporte post-servicio y
              garantía real. Si algo no funciona como esperabas, volvemos y lo
              resolvemos. Sin excusas, sin cobros extras.
            </p>
          </div>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00F0FF]/25 transition-all duration-200"
            >
              <div className="p-3 rounded-xl bg-[#00F0FF]/8 w-fit">{pillar.icon}</div>
              <div>
                <h3 className="font-bold text-white text-base">{pillar.title}</h3>
                <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
