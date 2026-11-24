import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InstallArte — Soluciones Tecnológicas en Chiapas",
  description:
    "Instalación y activación de Windows/Office, mantenimiento preventivo, upgrade RAM/SSD, armado de PCs Gamer y diseño web. Fácil, rápido y confiable. Tuxtla Gutiérrez, Villaflores y Villacorzo, Chiapas.",
  keywords:
    "soporte técnico Tuxtla, activación Windows Chiapas, mantenimiento PC Tuxtla, armado PC Gamer, diseño web Chiapas, InstallArte",
  openGraph: {
    title: "InstallArte — Soluciones Tecnológicas en Chiapas",
    description:
      "Soporte técnico, activación de software, mantenimiento y más. Atendemos en Tuxtla Gutiérrez, Villaflores y Villacorzo.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="w-full max-w-full overflow-x-hidden">
        <div className="w-full max-w-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
