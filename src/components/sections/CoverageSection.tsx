"use client";

import { motion } from "framer-motion";
import { Store, Home, Bike, MapPin } from "lucide-react";

const modalidades = [
  {
    icon: <Store size={28} className="text-[#00F0FF]" />,
    title: "Local Físico",
    desc: "Visítanos en nuestra sucursal para atención directa, segura y personalizada. Sin filas largas.",
    badge: null,
  },
  {
    icon: <Home size={28} className="text-[#00F0FF]" />,
    title: "A Domicilio / In situ",
    desc: "Vamos hasta tu casa o negocio. Resolvemos tu problema en tu espacio, sin que te muevas.",
    badge: null,
  },
  {
    icon: <Bike size={28} className="text-[#00F0FF]" />,
    title: "Recolección y Entrega",
    desc: "Recolectamos tu equipo en bicicleta eléctrica, lo atendemos y te lo devolvemos listo.",
    badge: "Próximamente",
  },
];

const ciudades = [
  "Tuxtla Gutiérrez",
  "Villaflores",
  "Villacorzo",
];

export default function CoverageSection() {
  return (
    <section id="cobertura" className="scroll-mt-24 bg-[#131033] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#00F0FF] font-semibold mb-2"
          >
            Modalidades de Atención
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black"
          >
            ¿Cómo te atendemos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-white/50 text-sm max-w-xl mx-auto"
          >
            Elige la modalidad que más te convenga. Siempre priorizamos tu comodidad y seguridad.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {modalidades.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass border border-white/8 rounded-2xl p-7 flex flex-col gap-4 relative hover:border-[#00F0FF]/25 transition-all duration-200"
            >
              {m.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold bg-white/10 text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                  {m.badge}
                </span>
              )}
              <div className="p-3 rounded-xl bg-[#00F0FF]/8 w-fit">{m.icon}</div>
              <div>
                <h3 className="font-bold text-white text-lg">{m.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass border border-[#00F0FF]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="p-4 rounded-xl bg-[#00F0FF]/10 shrink-0">
            <MapPin size={28} className="text-[#00F0FF]" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-[#00F0FF]/70 font-semibold mb-1">
              Zona de Cobertura
            </p>
            <h3 className="text-xl font-black text-white">
              {ciudades.join(" · ")}
            </h3>
            <p className="text-sm text-white/50 mt-1">Chiapas, México</p>
          </div>
          <div className="sm:ml-auto flex flex-wrap gap-2 justify-center sm:justify-end">
            {ciudades.map((ciudad) => (
              <span
                key={ciudad}
                className="text-xs font-semibold border border-[#00F0FF]/25 text-[#00F0FF]/80 rounded-full px-3 py-1"
              >
                {ciudad}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
