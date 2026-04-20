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
    background: theme.colors.background,
    display: "flex",
    alignItems: "stretch",
    fontFamily: theme.font,
    position: "relative",
  }}>
    {/* Left Column */}
    <div style={{
      flex: 1.1,
      background: theme.colors.surface,
      padding: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRight: `2px solid ${theme.colors.primary}11`
    }}>
      <div>
        <div style={{ color: theme.colors.primary, fontSize: "20px", fontWeight: 800, fontFamily: "monospace", marginBottom: "30px", letterSpacing: "2px" }}>
          // SHIFT THE PARADIGM
        </div>
        <h2 style={{
          color: theme.colors.text,
          fontSize: "64px",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-1px",
        }}>
          {data?.slide2Title ?? "The End of Infinite Canvas Tweaking"}
        </h2>
      </div>
      <div>
        <p style={{
          color: theme.colors.textMuted,
          fontSize: "28px",
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          {data?.slide2Body ?? "Traditional tools steal your hours adjusting alignments. OpenMark treats marketing assets as pure React Code, ensuring absolute precision in zero time."}
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div style={{
      flex: 0.9,
      padding: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
        height: "300px",
        background: theme.colors.primary,
        opacity: 0.1,
        borderRadius: "50%",
        filter: "blur(60px)",
      }} />

      {/* Editor Mockup */}
      <div style={{
        width: "100%",
        maxWidth: "450px",
        background: theme.colors.surface,
        borderRadius: "24px",
        border: `1px solid ${theme.colors.primary}33`,
        boxShadow: `0 30px 60px ${theme.colors.primary}15`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{ padding: "20px 24px", borderBottom: `1px solid ${theme.colors.primary}15`, display: "flex", gap: "8px" }}>
           <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: theme.colors.textMuted, opacity: 0.2 }} />
           <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: theme.colors.textMuted, opacity: 0.2 }} />
        </div>
        <div style={{ padding: "30px", fontFamily: "monospace", fontSize: "16px", color: theme.colors.textMuted, lineHeight: 1.8 }}>
          <div style={{ color: theme.colors.primary }}>const</div> <span style={{ color: theme.colors.text }}>Layout</span> = () =&gt; (
          <div style={{ paddingLeft: "24px" }}>
            &lt;div style=&#123;&#123; <br />
            <span style={{ paddingLeft: "24px", color: theme.colors.text }}>display: "flex",</span><br />
            <span style={{ paddingLeft: "24px", color: theme.colors.text }}>justifyContent: "center"</span><br />
            &#125;&#125;&gt;
          </div>
          <div style={{ paddingLeft: "48px", color: theme.colors.primary }}>
            Pixel Perfect. Always.
          </div>
          <div style={{ paddingLeft: "24px" }}>
            &lt;/div&gt;
          </div>
          );
        </div>
      </div>
    </div>
  </div>
);

// ─── Slide 3: CONTENIDO 2 ───────────────────────────────────
export const Slide3: React.FC<SlideProps> = ({ theme, data }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: theme.colors.background,
    display: "flex",
    padding: "90px",
    fontFamily: theme.font,
    alignItems: "center",
    position: "relative",
  }}>
    {/* Left Column for Content */}
    <div style={{ flex: 1.3, paddingRight: "60px" }}>
      <div style={{
        width: "60px",
        height: "8px",
        background: theme.colors.primary,
        borderRadius: "4px",
        marginBottom: "40px",
        boxShadow: `0 4px 12px ${theme.colors.primary}66`,
      }} />

      <h2 style={{
        color: theme.colors.text,
        fontSize: "64px",
        fontWeight: 800,
        margin: "0 0 32px",
        lineHeight: 1.1,
      }}>
        {data?.slide3Title ?? "Designed By Code"}
      </h2>
      <p style={{
        color: theme.colors.textMuted,
        fontSize: "32px",
        lineHeight: 1.6,
      }}>
        {data?.slide3Body ?? "Colors, fonts, and layouts are defined as variables. Build perfect carousels programmatically with React."}
      </p>
    </div>

    {/* Right Column for Visual Card */}
    <div style={{ flex: 0.9 }}>
      <div style={{
        background: theme.colors.surface,
        padding: "40px",
        borderRadius: "32px",
        border: `1px solid ${theme.colors.primary}22`,
        boxShadow: `0 30px 60px ${theme.colors.primary}15`,
        position: "relative",
      }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#ff5f56" }} />
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#27c93f" }} />
        </div>
        <div style={{ fontFamily: "monospace", fontSize: "20px", lineHeight: 1.8 }}>
          <div style={{ color: theme.colors.primary, marginBottom: "12px" }}>export const Slide = () =&gt; (</div>
          <div style={{ paddingLeft: "24px", color: theme.colors.text }}>
            &lt;<span style={{ color: theme.colors.primary }}>OpenMark.Card</span>
          </div>
          <div style={{ paddingLeft: "48px", color: theme.colors.textMuted }}>
            theme=&#123;palette&#125;
          </div>
          <div style={{ paddingLeft: "48px", color: theme.colors.textMuted }}>
            layout="auto"
          </div>
          <div style={{ paddingLeft: "24px", color: theme.colors.text }}>
            /&gt;
          </div>
          <div style={{ color: theme.colors.primary, marginTop: "12px" }}>);</div>
        </div>
      </div>
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
    justifyContent: "space-between",
    position: "relative",
  }}>
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{
        color: theme.colors.text,
        fontSize: "64px",
        fontWeight: 800,
        margin: "0 auto 24px",
        maxWidth: "850px",
        letterSpacing: "-1px",
      }}>
        {data?.slide4Title ?? "Zero Distractions. Deep Work."}
      </h2>
      <p style={{
        color: theme.colors.textMuted,
        fontSize: "28px",
        lineHeight: 1.6,
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        {data?.slide4Body ?? "The OpenMark studio interface forces you to focus tightly on message quality, removing the interface noise of traditional software."}
      </p>
    </div>

    {/* OpenMark Studio Mockup */}
    <div style={{
      width: "100%",
      height: "400px",
      background: theme.colors.background,
      border: `2px solid ${theme.colors.primary}22`,
      borderRadius: "24px",
      display: "flex",
      overflow: "hidden",
      boxShadow: `0 30px 60px ${theme.colors.primary}15`,
      marginTop: "60px",
    }}>
      {/* Sidebar Navigation */}
      <div style={{ width: "200px", background: theme.colors.surface, padding: "30px", borderRight: `1px solid ${theme.colors.primary}11` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: theme.colors.primary }} />
          <div style={{ fontWeight: 800, color: theme.colors.text, fontSize: "16px" }}>OpenMark</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ width: "100%", height: "12px", background: theme.colors.background, borderRadius: "6px" }} />
          <div style={{ width: "80%", height: "12px", background: theme.colors.background, borderRadius: "6px", opacity: 0.5 }} />
          <div style={{ width: "90%", height: "12px", background: theme.colors.background, borderRadius: "6px", opacity: 0.5 }} />
        </div>
      </div>
      
      {/* Main Canvas Area */}
      <div style={{ flex: 1, padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Floating properties panel */}
        <div style={{ position: "absolute", top: "40px", right: "40px", width: "160px", padding: "20px", background: theme.colors.surface, borderRadius: "16px", border: `1px solid ${theme.colors.primary}11` }}>
          <div style={{ width: "100%", height: "8px", background: theme.colors.primary, borderRadius: "4px", marginBottom: "12px" }} />
          <div style={{ width: "60%", height: "8px", background: theme.colors.background, borderRadius: "4px", opacity: 0.5 }} />
        </div>

        {/* Live Preview Slide Mockup */}
        <div style={{
          width: "280px",
          height: "280px",
          background: theme.colors.surface,
          borderRadius: "16px",
          border: `2px dashed ${theme.colors.primary}66`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: theme.colors.primary,
          fontWeight: "bold",
          fontSize: "20px",
        }}>
          Live Preview
          <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
            <div style={{ width: "40px", height: "4px", background: theme.colors.primary, borderRadius: "2px", opacity: 0.4 }} />
            <div style={{ width: "20px", height: "4px", background: theme.colors.background, borderRadius: "2px" }} />
          </div>
        </div>
      </div>
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
    overflow: "hidden",
  }}>
    {/* Abstract Background Vectors */}
    <div style={{
      position: "absolute",
      top: "-10%",
      left: "-10%",
      width: "120%",
      height: "120%",
      background: `radial-gradient(circle at center, ${theme.colors.primary}15 0%, transparent 60%)`,
      zIndex: 0,
    }} />
    

    <h2 style={{
      color: theme.colors.text,
      fontSize: "72px",
      fontWeight: 900,
      textAlign: "center",
      margin: "0 0 24px",
      zIndex: 1,
      lineHeight: 1.1,
      letterSpacing: "-2px",
    }}>
      {data?.ctaQuestion ?? "Start coding your design."}
    </h2>
    
    <p style={{
      color: theme.colors.textMuted,
      fontSize: "28px",
      textAlign: "center",
      maxWidth: "600px",
      marginBottom: "60px",
      zIndex: 1,
    }}>
      Join the visual revolution with OpenMark. Perfect carousels, built entirely in React.
    </p>

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
      display: "flex",
      alignItems: "center",
      gap: "16px",
    }}>
      {data?.ctaButton ?? "Deploy OpenMark"} 
      <span style={{ fontSize: "28px" }}>→</span>
    </div>
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
