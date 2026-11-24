# InstallArte — Sitio Web Oficial

> Aplicación web de alta conversión para **InstallArte**, negocio de soluciones tecnológicas en Chiapas, México.
> Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React**

---

## 🚀 Inicio rápido

```bash
# 1. Instala dependencias
npm install

# 2. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ✏️ Guía de edición rápida

### 1. Editar precios y productos

Abre el archivo central de datos:

```
src/data/catalog.ts
```

Cada producto/servicio es un objeto con esta estructura:

```ts
{
  id: "sw-combo-basico",          // Identificador único (no cambiar)
  title: "Combo Software Básico", // Nombre visible
  description: "...",             // Descripción corta
  price: 450,                     // Precio en MXN (número)
  originalPrice: 650,             // Precio anterior tachado (opcional)
  savingsText: "¡Ahorras 31%!",   // Texto de ahorro (opcional)
  pricePrefix: "Desde ",          // Prefijo del precio (opcional)
  priceSuffix: "/ mes",           // Sufijo del precio (opcional)
  showPrice: true,                // false → muestra consulta de disponibilidad
  badge: "🔥 MÁS VENDIDO",        // Etiqueta superior (opcional)
  warranty: "30 Días",            // Garantía (opcional)
  imagePlaceholder: "sw-combo-basico.png",
  requiresPartQuote: true,        // Piezas/equipos se cotizan aparte (opcional)
  inQuoter: true,                 // Aparece en el cotizador interactivo
  active: true,                   // false → oculta del catálogo
}
```

**Para desactivar un ítem temporalmente**, cambia `active: false`.

---

### 2. Cambiar el número de WhatsApp

En `src/data/catalog.ts`, línea 7:

```ts
export const WHATSAPP_NUMBER = "5219610000000";
//                              ↑ Reemplaza con tu número real
//                                Formato: 52 + código de área + número
//                                Ejemplo Tuxtla: 52961XXXXXXX
```

Todos los botones y links del sitio se actualizan automáticamente.

---

### 3. Reemplazar imágenes / renders 3D

1. Coloca tus imágenes en la carpeta `public/images/`.
2. Nombra cada archivo **exactamente** como el valor `imagePlaceholder` del ítem en el catálogo (ej: `sw-combo-basico.png`).
3. Las imágenes se cargan automáticamente; mientras no exista un archivo, se conserva el placeholder elegante.

---

### 4. Desplegar en Vercel desde GitHub

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: InstallArte web inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/installarte-web.git
   git push -u origin main
   ```

2. **Conecta en Vercel:**
   - Ve a [vercel.com](https://vercel.com) → **New Project**
   - Importa tu repositorio de GitHub
   - Framework: **Next.js** (detectado automáticamente)
   - Haz clic en **Deploy** — sin configuración adicional ✅

3. **Dominio personalizado (opcional):**
   En tu dashboard de Vercel → Settings → Domains → agrega `installarte.com.mx`

---

## 🗂 Estructura del proyecto

```
webPageInstallarte/
├── public/
│   └── images/          ← Coloca aquí tus renders 3D
├── src/
│   ├── app/
│   │   ├── globals.css  ← Estilos globales y tokens de color
│   │   ├── layout.tsx   ← Metadatos SEO
│   │   └── page.tsx     ← Página principal (ensambla secciones)
│   ├── components/
│   │   ├── sections/    ← Secciones de la landing
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CatalogSection.tsx
│   │   │   ├── QuoterSection.tsx
│   │   │   ├── EmpresasSection.tsx
│   │   │   ├── CoverageSection.tsx
│   │   │   └── GuaranteeSection.tsx
│   │   └── ui/          ← Componentes reutilizables
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ImagePlaceholder.tsx
│   │       └── WhatsAppButton.tsx
│   └── data/
│       └── catalog.ts   ← ⭐ ARCHIVO PRINCIPAL DE DATOS
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Paleta de colores

| Token          | Valor     | Uso                        |
|----------------|-----------|----------------------------|
| `ia-bg-deep`   | `#0F0C29` | Fondo principal oscuro     |
| `ia-bg-dark`   | `#131033` | Secciones alternadas       |
| `ia-bg-main`   | `#1B1746` | Tarjetas y componentes     |
| `ia-cyan`      | `#00F0FF` | CTAs, acentos y neon glow  |
| `ia-purple`    | `#7C3AED` | Gradientes secundarios     |
| `ia-lavender`  | `#C4B5FD` | Texto descriptivo suave    |

---

## 📄 Licencia

Proyecto privado — InstallArte © 2024. Todos los derechos reservados.
