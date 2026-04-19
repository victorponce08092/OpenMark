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
      padding: "80px",
      fontFamily: theme.font,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative element */}
    <div style={{
      position: "absolute",
      top: "-150px",
      right: "-150px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: `radial-gradient(circle, ${theme.colors.primary}22, transparent 70%)`,
    }} />
    
    <div style={{
      position: "absolute",
      bottom: "-100px",
      left: "-100px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      border: `2px dashed ${theme.colors.surface}`,
      opacity: 0.5,
    }} />

    {/* Badge */}
    <div style={{
      background: theme.colors.primary,
      color: theme.colors.background,
      padding: "8px 24px",
      borderRadius: "99px",
      fontSize: "14px",
      fontWeight: 800,
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "40px",
      boxShadow: `0 10px 30px ${theme.colors.primary}44`,
    }}>
      {data?.category ?? "Productivity"}
    </div>

    <h1 style={{
      color: theme.colors.text,
      fontSize: "76px",
      fontWeight: 900,
      lineHeight: 1.1,
      textAlign: "center",
      margin: "0 0 32px",
      letterSpacing: "-1px",
    }}>
      {data?.headline ?? "Stop designing."}
      <br />
      <span style={{ color: theme.colors.primary }}>Start compiling.</span>
    </h1>

    <p style={{
      color: theme.colors.textMuted,
      fontSize: "28px",
      textAlign: "center",
      maxWidth: "700px",
      lineHeight: 1.6,
      fontWeight: 500,
    }}>
      {data?.subheadline ?? "Meet OpenMark: The world's first code-driven carousel studio for elite creators."}
    </p>
  </div>
);

// ─── Slide 2: CONTENIDO 1 ───────────────────────────────────
export const Slide2: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.surface,
    display: "flex",
    flexDirection: "column",
    padding: "90px",
    fontFamily: theme.font,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "12px",
      height: "100%",
      background: theme.colors.primary,
    }} />

    <span style={{
      fontSize: "120px",
      fontWeight: 900,
      color: theme.colors.primary,
      opacity: 0.1,
      position: "absolute",
      top: "40px",
      right: "60px",
      lineHeight: 1,
    }}>01</span>

    <h2 style={{
      color: theme.colors.text,
      fontSize: "56px",
      fontWeight: 800,
      margin: "0 0 40px",
      lineHeight: 1.2,
      maxWidth: "800px",
    }}>
      {data?.slide2Title ?? "The End of Infinite Canvas Tweaking"}
    </h2>
    <p style={{
      color: theme.colors.textMuted,
      fontSize: "28px",
      lineHeight: 1.7,
      maxWidth: "800px",
      fontWeight: 400,
    }}>
      {data?.slide2Body ?? "Traditional design tools steal your hours adjusting alignments. OpenMark treats marketing assets as pure React Code, ensuring absolute precision in zero time."}
    </p>
  </div>
);

// ─── Slide 3: CONTENIDO 2 ───────────────────────────────────
export const Slide3: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.background,
    display: "flex",
    flexDirection: "column",
    padding: "90px",
    fontFamily: theme.font,
    justifyContent: "center",
    position: "relative",
  }}>
    <div style={{
      width: "60px",
      height: "60px",
      background: theme.colors.primary,
      borderRadius: "16px",
      marginBottom: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.background,
      fontWeight: 900,
      fontSize: "24px"
    }}>⚡</div>

    <h2 style={{
      color: theme.colors.text,
      fontSize: "56px",
      fontWeight: 800,
      margin: "0 0 32px",
      lineHeight: 1.2,
      maxWidth: "850px",
    }}>
      {data?.slide3Title ?? "Designed By Code"}
    </h2>
    <div style={{
      padding: "30px",
      borderLeft: `4px solid ${theme.colors.primary}`,
      background: theme.colors.surface,
      borderRadius: "0 16px 16px 0",
    }}>
      <p style={{
        color: theme.colors.textMuted,
        fontSize: "26px",
        lineHeight: 1.6,
      }}>
        {data?.slide3Body ?? "Colors, fonts, and compositions are hardcoded as elegant variables. AI agents can natively compose thousands of perfect layouts without breaking your branding."}
      </p>
    </div>
  </div>
);

// ─── Slide 4: CONTENIDO 3 ───────────────────────────────────
export const Slide4: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.surface,
    display: "flex",
    flexDirection: "column",
    padding: "90px",
    fontFamily: theme.font,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  }}>
    <h2 style={{
      color: theme.colors.text,
      fontSize: "52px",
      fontWeight: 800,
      margin: "0 0 24px",
      maxWidth: "800px",
    }}>
      {data?.slide4Title ?? "Zero Distractions. Deep Work."}
    </h2>
    <p style={{
      color: theme.colors.textMuted,
      fontSize: "26px",
      lineHeight: 1.7,
      maxWidth: "600px",
      marginBottom: "60px",
    }}>
      {data?.slide4Body ?? "Our elite pure B&W studio interface forces you to focus tightly on message quality, not interface noise."}
    </p>

    <div style={{
      display: "flex",
      gap: "20px",
    }}>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ width: "80px", height: "80px", borderRadius: "20px", background: i === 2 ? theme.colors.primary : theme.colors.background }} />
      ))}
    </div>
  </div>
);

// ─── Slide 5: CTA ────────────────────────────────────────────
export const Slide5: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px",
    fontFamily: theme.font,
    position: "relative",
  }}>
    <div style={{
      position: "absolute",
      inset: 0,
      background: `linear-gradient(45deg, transparent 0%, ${theme.colors.primary}11 100%)`,
    }} />

    <h2 style={{
      color: theme.colors.text,
      fontSize: "64px",
      fontWeight: 900,
      textAlign: "center",
      margin: "0 0 40px",
      zIndex: 1,
      lineHeight: 1.1,
    }}>
      {data?.ctaQuestion ?? "Ready to shift your paradigm?"}
    </h2>

    <div style={{
      background: theme.colors.primary,
      color: theme.colors.background,
      padding: "24px 64px",
      borderRadius: "99px",
      fontSize: "24px",
      fontWeight: 800,
      zIndex: 1,
      boxShadow: `0 20px 40px ${theme.colors.primary}44`,
      letterSpacing: "1px",
    }}>
      {data?.ctaButton ?? "Deploy OpenMark"}
    </div>
    
    <p style={{
      color: theme.colors.textMuted,
      fontSize: "20px",
      marginTop: "40px",
      fontWeight: 500,
      letterSpacing: "2px",
      textTransform: "uppercase",
      zIndex: 1,
    }}>
      React Code • Next.js Engine
    </p>
  </div>
);

// ─── Export ──────────────────────────────────────────────────
export const slides: SlideDefinition[] = [
  { id: "intro", component: Slide1, label: "Hook" },
  { id: "problem", component: Slide2, label: "The Shift" },
  { id: "solution", component: Slide3, label: "Code Design" },
  { id: "studio", component: Slide4, label: "Focus" },
  { id: "cta", component: Slide5, label: "Action" },
];
