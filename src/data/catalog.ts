// ============================================================
//  InstallArte — Catálogo Central de Datos
//  Edita este archivo para actualizar precios, productos,
//  número de WhatsApp o activar/desactivar cualquier ítem.
// ============================================================

/** Número de WhatsApp sin el símbolo +  (incluye código de país 52) */
export const WHATSAPP_NUMBER = "5219625999763";

// ─────────────────────────────────────────────────────────────
//  Tipos
// ─────────────────────────────────────────────────────────────
export type ServiceCategory =
  | "software"
  | "mantenimiento"
  | "especializado"
  | "tienda";

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  price: number;
  /** Precio antes del descuento (opcional) */
  originalPrice?: number;
  /** Texto de ahorro (ej: "¡Ahorras 31%!" o "Ahorras $100") */
  savingsText?: string;
  /** Prefijo del precio (ej: "Desde ") */
  pricePrefix?: string;
  /** Sufijo del precio (ej: "/ mes" o "por evento") */
  priceSuffix?: string;
  /** true  → muestra precio  |  false → muestra "Consultar disponibilidad" */
  showPrice: boolean;
  /** Etiqueta destacada sobre la tarjeta */
  badge?: string;
  /** Garantía del servicio */
  warranty?: string;
  /** Nombre de archivo de la imagen (en /public/images/) */
  imagePlaceholder: string;
  /** Si requiere cotizar la pieza aparte (Upgrade SSD, etc.) */
  requiresPartQuote?: boolean;
  /** Incluir en el cotizador interactivo */
  inQuoter?: boolean;
  /** true si está activo en el catálogo */
  active: boolean;
}

export function formatServicePrice(
  item: Pick<ServiceItem, "price" | "pricePrefix" | "priceSuffix">
): string {
  const prefix = item.pricePrefix ?? "";
  const suffix = item.priceSuffix ? ` ${item.priceSuffix}` : "";
  return `${prefix}$${item.price.toLocaleString("es-MX")} MXN${suffix}`;
}

// ─────────────────────────────────────────────────────────────
//  Categoría 1: Software y Activación
// ─────────────────────────────────────────────────────────────
const softwareItems: ServiceItem[] = [
  {
    id: "sw-activacion-individual",
    title: "Activación Individual (Windows o Office)",
    category: "software",
    description:
      "Windows (7, 10, 11) o Paquete Office individual con licencia activa y verificada. Rápido y garantizado.",
    price: 250,
    originalPrice: 350,
    savingsText: "Ahorras $100",
    showPrice: true,
    badge: "Básico",
    imagePlaceholder: "sw-activacion.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "sw-combo-basico",
    title: "Combo Software Básico ⭐",
    category: "software",
    description:
      "Windows + Office completo + Antivirus + Programas esenciales (Navegadores, PDF). Todo en un solo servicio.",
    price: 450,
    originalPrice: 650,
    savingsText: "¡Ahorras 31%! / $200 MXN",
    showPrice: true,
    badge: "🔥 MÁS VENDIDO",
    imagePlaceholder: "sw-combo-basico.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "sw-combo-especializado",
    title: "Combo Software Especializado",
    category: "software",
    description:
      "Combo Básico + instalación de programas de diseño, arquitectura o estudio (AutoCAD, Photoshop, etc.).",
    price: 650,
    originalPrice: 800,
    savingsText: "¡Ahorras 19%! / $150 MXN",
    showPrice: true,
    badge: "Estudiantes / Pro",
    imagePlaceholder: "sw-combo-especializado.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "sw-adicional",
    title: "Software Adicional (Complemento)",
    category: "software",
    description:
      "Instalación de un programa individual de diseño, arquitectura o utilidades. Ideal como complemento.",
    price: 150,
    showPrice: true,
    badge: "Add-on",
    imagePlaceholder: "sw-adicional.png",
    inQuoter: true,
    active: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Categoría 2: Mantenimiento y Rendimiento
// ─────────────────────────────────────────────────────────────
const mantenimientoItems: ServiceItem[] = [
  {
    id: "mant-logico",
    title: "Mantenimiento Lógico",
    category: "mantenimiento",
    description:
      "Limpieza de virus, depuración de archivos basura y optimización de velocidad de arranque. Tu equipo como nuevo.",
    price: 350,
    originalPrice: 450,
    savingsText: "Ahorras $100",
    showPrice: true,
    badge: "Limpieza Soft",
    imagePlaceholder: "mant-logico.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "mant-fisico",
    title: "Mantenimiento Físico Profundo",
    category: "mantenimiento",
    description:
      "Limpieza interna profunda, soplado de polvo y cambio de pasta térmica de alta calidad. Previene daños graves.",
    price: 450,
    originalPrice: 600,
    savingsText: "Ahorras $150",
    showPrice: true,
    badge: "Preventivo",
    imagePlaceholder: "mant-fisico.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "mant-combo-total",
    title: "Combo Rendimiento Total ⭐",
    category: "mantenimiento",
    description:
      "Mantenimiento Físico Profundo + Lógico + Windows & Office Activado. El paquete más completo para tu equipo.",
    price: 850,
    originalPrice: 1050,
    savingsText: "¡Ahorras 19%! / $200 MXN",
    showPrice: true,
    badge: "👑 TE CONVIENE MÁS",
    imagePlaceholder: "mant-combo-total.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "mant-upgrade-ssd",
    title: "Paquete Upgrade SSD / RAM",
    category: "mantenimiento",
    description:
      "Instalación física de Disco Sólido o RAM + Reinstalación limpia de Sistema Operativo. (La pieza se cotiza aparte.)",
    price: 650,
    originalPrice: 850,
    savingsText: "¡Ahorras 24%! / $200 MXN",
    showPrice: true,
    badge: "Super Velocidad",
    imagePlaceholder: "mant-upgrade-ssd.png",
    requiresPartQuote: true,
    inQuoter: true,
    active: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Categoría 3: Especializados y Empresas (B2B)
// ─────────────────────────────────────────────────────────────
const especializadoItems: ServiceItem[] = [
  {
    id: "esp-pc-gamer",
    title: "Armado y Diagnóstico PC Gamer",
    category: "especializado",
    description:
      "Ensamble profesional, cable management, pruebas de estrés y SO. Máximo rendimiento sin sobrecalentar.",
    price: 800,
    pricePrefix: "Desde ",
    priceSuffix: "por evento",
    showPrice: true,
    badge: "🎮 Gamer",
    warranty: "30 Días",
    imagePlaceholder: "esp-pc-gamer.png",
    requiresPartQuote: true,
    inQuoter: true,
    active: true,
  },
  {
    id: "esp-domotica",
    title: "Instalación Domótica Básica (2-4 equipos)",
    category: "especializado",
    description:
      "Configuración de dispositivos inteligentes (Steren/Sonoff; equipos aparte). Controla tu hogar o local desde tu celular.",
    price: 550,
    pricePrefix: "Desde ",
    priceSuffix: "por evento",
    showPrice: true,
    badge: "🏠 Smart Home",
    warranty: "30 Días",
    imagePlaceholder: "esp-domotica.png",
    requiresPartQuote: true,
    inQuoter: true,
    active: true,
  },
  {
    id: "esp-web-redes",
    title: "Página Web / Redes Sociales Inicial",
    category: "especializado",
    description:
      "Sitio informativo profesional o puesta a punto de Facebook/Google para atraer más clientes en Tuxtla y la región.",
    price: 1500,
    pricePrefix: "Desde ",
    priceSuffix: "por proyecto",
    showPrice: true,
    badge: "🌐 Digital",
    warranty: "Soporte inicial",
    imagePlaceholder: "esp-web.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "esp-poliza-basica",
    title: "Póliza PyME Básica (1 a 3 PCs)",
    category: "especializado",
    description:
      "1 mantenimiento preventivo al mes + Soporte prioritario. Evita caídas de sistema en tu negocio.",
    price: 900,
    priceSuffix: "/ mes",
    showPrice: true,
    badge: "🏢 PyME",
    warranty: "Soporte continuo",
    imagePlaceholder: "esp-poliza-basica.png",
    inQuoter: true,
    active: true,
  },
  {
    id: "esp-poliza-plus",
    title: "Póliza PyME Plus (4 a 7 PCs + Red)",
    category: "especializado",
    description:
      "Mantenimiento preventivo + Gestión de red + Respaldos de datos. Tu infraestructura digital 100% protegida.",
    price: 1800,
    priceSuffix: "/ mes",
    showPrice: true,
    badge: "👑 PyME Plus",
    warranty: "Soporte continuo",
    imagePlaceholder: "esp-poliza-plus.png",
    inQuoter: true,
    active: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Categoría 4: Tienda / Accesorios
// ─────────────────────────────────────────────────────────────
const tiendaItems: ServiceItem[] = [
  {
    id: "tienda-ssd",
    title: "Disco de Estado Sólido (SSD 240GB / 480GB / 1TB)",
    category: "tienda",
    description: "Acelera tu laptop o PC hasta 5 veces más. Consulta disponibilidad y precio por WhatsApp.",
    price: 0,
    showPrice: false,
    badge: "Bajo pedido",
    imagePlaceholder: "tienda-ssd.png",
    inQuoter: false,
    active: true,
  },
  {
    id: "tienda-ram",
    title: "Memoria RAM DDR4 / DDR5",
    category: "tienda",
    description: "Más fluidez para multitarea, estudio y gaming. Disponibles en distintas capacidades.",
    price: 0,
    showPrice: false,
    badge: "Bajo pedido",
    imagePlaceholder: "tienda-ram.png",
    inQuoter: false,
    active: true,
  },
  {
    id: "tienda-mouse",
    title: "Mouse Ergonómico / Gamer",
    category: "tienda",
    description: "Precisión y comodidad para jornadas largas de trabajo o gaming.",
    price: 0,
    showPrice: false,
    badge: "Próximamente",
    imagePlaceholder: "tienda-mouse.png",
    inQuoter: false,
    active: true,
  },
  {
    id: "tienda-usb",
    title: "Memorias USB y Almacenamiento Portátil",
    category: "tienda",
    description: "Respaldo rápido y seguro para tus archivos. Varias capacidades disponibles.",
    price: 0,
    showPrice: false,
    badge: "Próximamente",
    imagePlaceholder: "tienda-usb.png",
    inQuoter: false,
    active: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Catálogo completo exportado
// ─────────────────────────────────────────────────────────────
export const CATALOG: ServiceItem[] = [
  ...softwareItems,
  ...mantenimientoItems,
  ...especializadoItems,
  ...tiendaItems,
].filter((item) => item.active);

export const FEATURED_IDS = ["sw-combo-basico", "mant-combo-total"];
