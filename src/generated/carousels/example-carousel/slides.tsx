import React from "react";
import { SlideProps, SlideDefinition } from "@/types/carousel";

// ============================================================
// EXAMPLE CAROUSEL — "5 Errores Comunes de Marketing"
// Estructura: Hook → Valor → Desarrollo × 3 → Cierre → CTA
// ============================================================

// ─── Slide 1: HOOK ──────────────────────────────────────────
export const Slide1: React.FC<SlideProps> = ({ theme }) => (
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
    {/* Decorative blob */}
    <div
      style={{
        position: "absolute",
        top: "-120px",
        right: "-120px",
        width: "480px",
        height: "480px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${theme.colors.primary}44, transparent 70%)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${theme.colors.secondary}33, transparent 70%)`,
      }}
    />

    {/* Slide number badge */}
    <div
      style={{
        background: theme.colors.primary,
        color: theme.colors.background,
        padding: "6px 18px",
        borderRadius: "99px",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "40px",
      }}
    >
      Marketing
    </div>

    <h1
      style={{
        color: theme.colors.text,
        fontSize: "72px",
        fontWeight: 800,
        lineHeight: 1.1,
        textAlign: "center",
        margin: "0 0 32px",
        zIndex: 1,
      }}
    >
      5 Errores que{" "}
      <span style={{ color: theme.colors.primary }}>destrozan</span> tu
      marketing
    </h1>

    <p
      style={{
        color: theme.colors.textMuted,
        fontSize: "28px",
        textAlign: "center",
        maxWidth: "600px",
        lineHeight: 1.6,
        zIndex: 1,
      }}
    >
      ...y cómo evitarlos desde hoy
    </p>

    {/* Arrow down */}
    <div
      style={{
        position: "absolute",
        bottom: "56px",
        color: theme.colors.textMuted,
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span>desliza →</span>
    </div>
  </div>
);

// ─── Slide 2: VALOR ─────────────────────────────────────────
export const Slide2: React.FC<SlideProps> = ({ theme }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: theme.colors.surface,
      display: "flex",
      flexDirection: "column",
      padding: "72px",
      fontFamily: theme.font,
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "60px",
        height: "6px",
        background: theme.colors.primary,
        borderRadius: "3px",
        marginBottom: "40px",
      }}
    />

    <div
      style={{
        background: `${theme.colors.primary}18`,
        border: `1px solid ${theme.colors.primary}44`,
        borderRadius: theme.borderRadius,
        padding: "28px 36px",
        marginBottom: "40px",
      }}
    >
      <p
        style={{
          color: theme.colors.primary,
          fontSize: "16px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          margin: "0 0 8px",
        }}
      >
        Error #1
      </p>
      <h2
        style={{
          color: theme.colors.text,
          fontSize: "48px",
          fontWeight: 800,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        Hablar a todos... y no conectar con nadie
      </h2>
    </div>

    <p
      style={{
        color: theme.colors.textMuted,
        fontSize: "26px",
        lineHeight: 1.7,
        maxWidth: "720px",
      }}
    >
      Sin un avatar de cliente claro, tu mensaje se diluye. El marketing
      genérico no convierte porque no resuena con nadie en particular.
    </p>

    <div
      style={{
        marginTop: "48px",
        padding: "24px 36px",
        background: `${theme.colors.accent}18`,
        borderLeft: `4px solid ${theme.colors.accent}`,
        borderRadius: "8px",
      }}
    >
      <p
        style={{
          color: theme.colors.text,
          fontSize: "22px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        ✅ Solución: Define un solo avatar. Escríbele solo a él.
      </p>
    </div>
  </div>
);

// ─── Slide 3: DESARROLLO 1 ──────────────────────────────────
export const Slide3: React.FC<SlideProps> = ({ theme }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: theme.colors.background,
      display: "flex",
      flexDirection: "column",
      padding: "72px",
      fontFamily: theme.font,
      justifyContent: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "6px",
        background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      }}
    />

    <p
      style={{
        color: theme.colors.primary,
        fontSize: "16px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "24px",
      }}
    >
      Error #2
    </p>

    <h2
      style={{
        color: theme.colors.text,
        fontSize: "56px",
        fontWeight: 800,
        lineHeight: 1.15,
        margin: "0 0 40px",
        maxWidth: "800px",
      }}
    >
      Publicar por publicar sin estrategia de contenido
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {[
        { icon: "❌", text: "Contenido sin propósito claro" },
        { icon: "❌", text: "Inconsistencia en frecuencia y tono" },
        { icon: "❌", text: "Sin embudo: atraes pero no conviertes" },
        { icon: "✅", text: "Crea un pilar de contenido mensual + calendario" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "18px 28px",
            background:
              i === 3 ? `${theme.colors.primary}18` : `${theme.colors.surface}`,
            borderRadius: "12px",
            border:
              i === 3
                ? `1px solid ${theme.colors.primary}44`
                : `1px solid ${theme.colors.surface}`,
          }}
        >
          <span style={{ fontSize: "24px" }}>{item.icon}</span>
          <span
            style={{
              color: i === 3 ? theme.colors.text : theme.colors.textMuted,
              fontSize: "22px",
              fontWeight: i === 3 ? 600 : 400,
            }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Slide 4: DESARROLLO 2 ──────────────────────────────────
export const Slide4: React.FC<SlideProps> = ({ theme }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: `linear-gradient(135deg, ${theme.colors.primary}22, ${theme.colors.background} 60%)`,
      display: "flex",
      flexDirection: "column",
      padding: "72px",
      fontFamily: theme.font,
      justifyContent: "center",
    }}
  >
    <p
      style={{
        color: theme.colors.secondary,
        fontSize: "16px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "24px",
      }}
    >
      Error #3 + #4
    </p>

    <h2
      style={{
        color: theme.colors.text,
        fontSize: "52px",
        fontWeight: 800,
        lineHeight: 1.2,
        margin: "0 0 48px",
      }}
    >
      Ignorar los datos y copiar a la competencia
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
      }}
    >
      {[
        {
          title: "Sin métricas",
          body: "No sabes qué funciona. Gastas sin saber el retorno.",
          color: theme.colors.secondary,
        },
        {
          title: "Copiar sin adaptar",
          body: "Lo que le funciona a otro no funciona para tu audiencia.",
          color: theme.colors.accent,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            background: theme.colors.surface,
            borderRadius: theme.borderRadius,
            padding: "36px",
            borderTop: `4px solid ${card.color}`,
          }}
        >
          <h3
            style={{
              color: card.color,
              fontSize: "24px",
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              color: theme.colors.textMuted,
              fontSize: "20px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {card.body}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "32px",
        padding: "24px 36px",
        background: `${theme.colors.accent}15`,
        borderRadius: "12px",
        borderLeft: `4px solid ${theme.colors.accent}`,
      }}
    >
      <p
        style={{
          color: theme.colors.text,
          fontSize: "22px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        ✅ Revisa tus métricas cada semana. Inspírate, nunca copies.
      </p>
    </div>
  </div>
);

// ─── Slide 5: CTA ───────────────────────────────────────────
export const Slide5: React.FC<SlideProps> = ({ theme }) => (
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
    {/* Background gradient */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse at 50% 110%, ${theme.colors.primary}44, transparent 70%)`,
      }}
    />

    <div
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "96px",
        fontWeight: 900,
        margin: "0 0 32px",
        zIndex: 1,
      }}
    >
      ¿Y tú?
    </div>

    <h2
      style={{
        color: theme.colors.text,
        fontSize: "48px",
        fontWeight: 700,
        textAlign: "center",
        lineHeight: 1.3,
        margin: "0 0 24px",
        zIndex: 1,
        maxWidth: "700px",
      }}
    >
      ¿Cuál de estos errores estás cometiendo ahora mismo?
    </h2>

    <p
      style={{
        color: theme.colors.textMuted,
        fontSize: "24px",
        textAlign: "center",
        marginBottom: "56px",
        zIndex: 1,
      }}
    >
      Comenta 👇 con el número y te ayudo.
    </p>

    <div
      style={{
        display: "flex",
        gap: "16px",
        zIndex: 1,
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: "#fff",
          padding: "20px 48px",
          borderRadius: "99px",
          fontSize: "22px",
          fontWeight: 700,
          boxShadow: `0 8px 32px ${theme.colors.primary}55`,
        }}
      >
        Sígueme para más 🚀
      </div>
      <div
        style={{
          background: "transparent",
          color: theme.colors.text,
          padding: "20px 48px",
          borderRadius: "99px",
          fontSize: "22px",
          fontWeight: 600,
          border: `2px solid ${theme.colors.surface}`,
        }}
      >
        Guarda este post 🔖
      </div>
    </div>
  </div>
);

// ─── Slides Array ────────────────────────────────────────────
export const slides: SlideDefinition[] = [
  { id: "hook", component: Slide1, label: "Hook" },
  { id: "error-1", component: Slide2, label: "Error #1" },
  { id: "error-2", component: Slide3, label: "Error #2" },
  { id: "errores-3-4", component: Slide4, label: "Errores #3 y #4" },
  { id: "cta", component: Slide5, label: "CTA" },
];
