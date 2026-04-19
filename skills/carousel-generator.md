# Skill: Generador de Carruseles de Marketing

> **Skill para agentes IA** (Claude Code, Cursor, Antigravity, etc.)
> Lee este archivo completo antes de generar cualquier carrusel.

---

## Identidad de la skill

Eres un experto en **marketing de contenidos y diseño visual** especializado en crear carruseles para redes sociales.

Tu trabajo es generar carruseles como **código React**, no como imágenes.

---

## PASO 1: Verificar contexto del negocio

Antes de escribir una sola línea de código, **siempre** revisa:

```
/resources/business.md
/resources/branding.md
/resources/offer.md
```

### Si los archivos NO existen o contienen `[PENDIENTE]`:

Haz estas preguntas al usuario (una sección a la vez):

**Negocio:**
1. ¿Cuál es el nombre de tu negocio?
2. ¿A qué se dedica? (describe brevemente)
3. ¿Cuál es tu industria o sector?
4. ¿Quién es tu cliente ideal? (avatar)
5. ¿Qué tono quieres usar? (profesional / cercano / inspirador)

**Branding:**
6. ¿Tienes colores de marca? (hex codes o descripciones)
7. ¿Qué tipografía prefieres? (Inter / Outfit / Poppins / Playfair / Montserrat / Raleway)
8. ¿Prefieres tema oscuro o claro?

**Oferta:**
9. ¿Cuál es tu servicio o producto principal?
10. ¿Qué CTA quieres al final del carrusel?

Una vez que el usuario responda, **crea o actualiza los archivos `.md`** en `/resources/` con esa información antes de continuar.

### Si los archivos SÍ existen y tienen contenido:

Léelos todos y úsalos como base. No preguntes información que ya está documentada.

---

## PASO 2: Entender el pedido del carrusel

El usuario debe especificar:
- **Tema**: ¿Sobre qué es el carrusel?
- **Objetivo**: ¿Educar, vender, inspirar, generar engagement?
- **Número de slides**: (recomendado: 5-7)
- **Nombre del carrusel**: en kebab-case (ej: `errores-de-marketing`)

Si algo falta, pregúntalo.

---

## PASO 3: Planear la estructura narrativa

Todo carrusel debe seguir esta estructura de 5 actos:

| Slide | Tipo | Propósito |
|-------|------|-----------|
| 1 | **HOOK** | Detener el scroll. Provocar curiosidad. Prometer valor. |
| 2 | **VALOR** | Primera revelación. El por qué importa. |
| 3-4 | **DESARROLLO** | Contenido principal. Tips, errores, pasos, comparaciones. |
| N-1 | **CIERRE** | Resumen o reflexión. Consolidar el aprendizaje. |
| N | **CTA** | Llamada a la acción clara. Comentar, guardar, seguir, DM. |

Adapta según el número de slides pedidos.

---

## PASO 4: Generar el código

### Estructura de carpetas a crear:

```
/generated/carousels/<nombre-kebab-case>/
├── slides.tsx
├── index.tsx
└── meta.json
```

> ⚠️ **IMPORTANTE**: En este proyecto, el código de carruseles vive en DOS lugares:
> - `/src/generated/carousels/<nombre>/` → para que Next.js lo compile
> - `/generated/carousels/<nombre>/` → solo para el `meta.json` (lo lee el API)
>
> Crea los archivos `.tsx` en `/src/generated/carousels/<nombre>/`  
> Crea el `meta.json` en `/generated/carousels/<nombre>/`

---

### Plantilla de `slides.tsx`

```tsx
import React from "react";
import { SlideProps, SlideDefinition } from "@/types/carousel";

// ─── Slide 1: HOOK ──────────────────────────────────────────
export const Slide1: React.FC<SlideProps> = ({ theme, data }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: theme.colors.background,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "72px",
      fontFamily: theme.font,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative element */}
    <div style={{
      position: "absolute",
      top: "-100px",
      right: "-100px",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: `radial-gradient(circle, ${theme.colors.primary}33, transparent 70%)`,
    }} />

    {/* Badge */}
    <div style={{
      background: theme.colors.primary,
      color: theme.colors.background,
      padding: "6px 20px",
      borderRadius: "99px",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "36px",
    }}>
      {data?.category ?? "Marketing"}
    </div>

    <h1 style={{
      color: theme.colors.text,
      fontSize: "68px",
      fontWeight: 900,
      lineHeight: 1.1,
      textAlign: "center",
      margin: "0 0 28px",
    }}>
      {data?.headline ?? "Título del carrusel"}
    </h1>

    <p style={{
      color: theme.colors.textMuted,
      fontSize: "26px",
      textAlign: "center",
      maxWidth: "600px",
      lineHeight: 1.6,
    }}>
      {data?.subheadline ?? "Subtítulo que genera curiosidad"}
    </p>
  </div>
);

// ─── Slide 2: CONTENIDO ─────────────────────────────────────
export const Slide2: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.surface,
    display: "flex",
    flexDirection: "column",
    padding: "72px",
    fontFamily: theme.font,
    justifyContent: "center",
  }}>
    <h2 style={{
      color: theme.colors.text,
      fontSize: "52px",
      fontWeight: 800,
      margin: "0 0 36px",
    }}>
      {data?.slide2Title ?? "Punto principal"}
    </h2>
    <p style={{
      color: theme.colors.textMuted,
      fontSize: "26px",
      lineHeight: 1.7,
    }}>
      {data?.slide2Body ?? "Explicación del punto principal."}
    </p>
  </div>
);

// ─── Slide N: CTA ────────────────────────────────────────────
export const SlideN: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "72px",
    fontFamily: theme.font,
    position: "relative",
  }}>
    <div style={{
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse at 50% 110%, ${theme.colors.primary}44, transparent 70%)`,
    }} />

    <h2 style={{
      color: theme.colors.text,
      fontSize: "56px",
      fontWeight: 800,
      textAlign: "center",
      margin: "0 0 32px",
      zIndex: 1,
    }}>
      {data?.ctaQuestion ?? "¿Qué te pareció este contenido?"}
    </h2>

    <div style={{
      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      color: "#fff",
      padding: "20px 48px",
      borderRadius: "99px",
      fontSize: "22px",
      fontWeight: 700,
      zIndex: 1,
    }}>
      {data?.ctaButton ?? "Sígueme para más 🚀"}
    </div>
  </div>
);

// ─── Export ──────────────────────────────────────────────────
export const slides: SlideDefinition[] = [
  { id: "hook", component: Slide1, label: "Hook" },
  { id: "contenido", component: Slide2, label: "Contenido" },
  { id: "cta", component: SlideN, label: "CTA" },
];
```

---

### Plantilla de `index.tsx`

```tsx
import { CarouselComposition } from "@/types/carousel";
import { slides } from "./slides";

const composition: CarouselComposition = {
  id: "nombre-del-carrusel", // mismo que el nombre de carpeta
  title: "Título legible del carrusel",
  width: 1080,
  height: 1080,
  slides,
  defaultData: {
    category: "Marketing",
    headline: "Título principal",
    subheadline: "Subtítulo",
    ctaButton: "Sígueme 🚀",
    // ... todos los datos usados en slides.tsx
  },
};

export default composition;
```

---

### Plantilla de `meta.json`

```json
{
  "title": "Título del carrusel",
  "type": "marketing",
  "slides": 5,
  "createdAt": "YYYY-MM-DD",
  "description": "Breve descripción del carrusel",
  "tags": ["tag1", "tag2"]
}
```

---

## PASO 5: Registrar el carrusel en el Studio

Después de crear los archivos, agrega el carrusel al registry en:

```
/src/registry.ts
```

Agrega:
```ts
import miCarrusel from "@/generated/carousels/nombre-del-carrusel";

// En el array:
miCarrusel,
```

---

## Reglas de diseño (OBLIGATORIAS)

### ✅ DEBES:
- Usar `theme.colors.*` para TODOS los colores
- Usar `theme.font` para la tipografía
- Usar `theme.borderRadius` para bordes
- Usar `data.*` para todos los textos editables
- Crear componentes React funcionales con `React.FC<SlideProps>`
- Agregar `position: "relative"` y `overflow: "hidden"` en el contenedor raíz
- Usar `width: "100%"` y `height: "100%"` en el contenedor raíz
- Crear al menos un elemento decorativo por slide (gradiente, blob, línea, etc.)
- Escribir comentarios claros en cada slide

### ❌ NUNCA debes:
- Hardcodear colores (ej: `color: "#FF0000"`)
- Usar `px` fijos para tamaños de contenedor (solo para tipografía y spacing)
- Importar imágenes externas sin verificar que existen
- Crear slides idénticos entre sí
- Ignorar los archivos `/resources/`
- Generizar el copy (cada carrusel debe ser único y específico)

---

## Criterios de calidad

Un carrusel bien generado:
- [ ] Tiene estructura narrativa clara (Hook → Valor → Desarrollo → Cierre → CTA)
- [ ] El Slide 1 detiene el scroll (headline poderoso + elemento visual llamativo)
- [ ] Usa el tema de color correctamente (sin hardcoding)
- [ ] El CTA es específico y relevante al tema
- [ ] Cada slide tiene un rol diferente visualmente
- [ ] Los textos son concisos y legibles (no más de 3-4 líneas por slide)
- [ ] El copy está adaptado al avatar del cliente definido en `/resources/`

---

## Ejemplo de instrucción completa al agente

```
Usando la skill en /skills/carousel-generator.md:

1. Lee /resources/business.md, /resources/branding.md y /resources/offer.md
2. Si hay campos [PENDIENTE], pídeme esa información primero
3. Crea un carrusel de 6 slides sobre "cómo conseguir tus primeros 1000 seguidores en Instagram"
4. Guarda los archivos en /src/generated/carousels/primeros-1000-seguidores/
5. Crea también /generated/carousels/primeros-1000-seguidores/meta.json
6. Regístralo en /src/registry.ts
```

---

## Versión de la skill
`v1.0.0` — Carousel Studio Code-First System
