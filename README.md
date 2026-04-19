# 🎨 Carousel Studio — Code-First Generator

> Sistema completo para generar carruseles de marketing como **código React**, y visualizarlos en un studio visual tipo Remotion.

---

## 🧠 Filosofía del sistema

La IA **NO genera imágenes**. La IA **genera código** que representa slides.

```
Editor (IA) → Código React → Studio Web → Imagen exportable
```

---

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar el studio en desarrollo
npm run dev

# Abrir el studio
open http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
/
├── skills/
│   └── carousel-generator.md   ← Instrucciones para la IA
│
├── resources/
│   ├── business.md              ← Contexto del negocio
│   ├── branding.md              ← Identidad visual
│   └── offer.md                 ← Productos y CTAs
│
├── generated/
│   └── carousels/
│       └── <nombre>/
│           └── meta.json        ← Metadatos del carrusel
│
├── src/
│   ├── generated/
│   │   └── carousels/
│   │       └── <nombre>/
│   │           ├── slides.tsx   ← Componentes React de slides
│   │           └── index.tsx    ← Definición de la composición
│   │
│   ├── registry.ts              ← Registro central de carruseles
│   │
│   ├── components/
│   │   ├── CarouselList.tsx     ← Sidebar de carruseles
│   │   ├── SlideRenderer.tsx    ← Preview del slide
│   │   ├── ThemeEditor.tsx      ← Editor de tema en vivo
│   │   └── ExportPanel.tsx      ← Exportar PNG/JPG/ZIP
│   │
│   ├── lib/
│   │   ├── theme.ts             ← Temas y presets
│   │   └── registry.ts          ← Scanner de filesystem
│   │
│   ├── types/
│   │   └── carousel.ts          ← Tipos TypeScript
│   │
│   └── app/
│       ├── page.tsx             ← Studio principal
│       ├── layout.tsx
│       ├── globals.css
│       └── api/
│           └── carousels/
│               └── route.ts    ← API: lista de carruseles
```

---

## 🤖 Cómo usar la skill con la IA

### 1. Prepara el contexto

Abre tu editor con IA (Claude Code, Cursor, Antigravity...) y escribe:

```
Lee el archivo /skills/carousel-generator.md y sigue sus instrucciones.

Luego crea un carrusel de 5 slides sobre [TU TEMA] para [TU NEGOCIO].
```

### 2. La IA hará:

1. Leer `/skills/carousel-generator.md`
2. Revisar `/resources/` para entender tu negocio
3. Si hay campos `[PENDIENTE]` → te preguntará
4. Generar el carrusel en `/src/generated/carousels/<nombre>/`
5. Crear el `meta.json` en `/generated/carousels/<nombre>/`
6. Registrarlo en `/src/registry.ts`

### 3. Ver el carrusel

Guarda los archivos → el studio en `npm run dev` recarga automáticamente.

---

## 🎨 Sistema de temas

El studio incluye **6 paletas prediseñadas**:

| Tema | Descripción |
|------|-------------|
| 🌌 Dark Pro | Oscuro premium con violeta |
| ☀️ Light Clean | Blanco limpio con azul |
| 🔥 Gradient Warm | Oscuro con naranjas y rojos |
| 🌊 Ocean Depth | Oscuro profundo con cyan |
| 🌿 Forest Calm | Verde natural minimalista |
| ⚡ Neon Bold | Negro total con neones |

Puedes personalizar cualquier color individualmente desde el panel de tema.

---

## 📤 Exportar slides

El studio permite exportar:

| Formato | Resolución | Notas |
|---------|-----------|-------|
| PNG | 1080×1080px | Transparencia soportada |
| JPG | 1080×1080px | Calidad 95% |
| ZIP | 1080×1080px × N slides | Todos los slides |

---

## ➕ Agregar un nuevo carrusel manualmente

1. Crea la carpeta: `/src/generated/carousels/mi-carrusel/`
2. Crea `slides.tsx` siguiendo la plantilla de la skill
3. Crea `index.tsx` con la composición
4. Crea `/generated/carousels/mi-carrusel/meta.json`
5. Registra en `/src/registry.ts`:

```ts
import miCarrusel from "@/generated/carousels/mi-carrusel";
// agrega en el array: miCarrusel,
```

6. ¡El studio lo detecta automáticamente al recargar!

---

## 🧱 Tipos de slides disponibles

La IA puede crear slides con estos layouts:

- **Hero** — Título grande centrado + decoración
- **Lista** — Items con iconos/emojis
- **Comparación** — Grid 2 columnas (bien / mal)
- **Estadística** — Número grande + contexto
- **Quote** — Cita destacada
- **Pasos** — Proceso numerado
- **CTA** — Llamada a acción con botón

---

## 🛠️ Stack tecnológico

- **Next.js 14** — App Router, Server Components
- **React 18** — Componentes de slides
- **TailwindCSS** — Utilidades de layout del studio
- **html2canvas** — Captura de DOM para export
- **JSZip** — Exportación ZIP de todos los slides
- **lucide-react** — Iconos del UI

---

## 📝 Licencia

MIT — Úsalo, modifícalo, échalo a producción.

---

*Hecho con ❤️ para creadores de contenido que quieren escalar sin perder calidad.*
