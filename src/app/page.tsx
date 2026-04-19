"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Theme, CarouselComposition } from "@/types/carousel";
import { defaultTheme, uiThemePresets, fallbackThemeConfig } from "@/lib/theme";
import { getAllCompositions } from "@/registry";
import CarouselList from "@/components/CarouselList";
import SlideRenderer from "@/components/SlideRenderer";
import ThemeEditor from "@/components/ThemeEditor";
import ExportPanel from "@/components/ExportPanel";
import SocialPanel from "@/components/SocialPanel";
import AboutModal from "@/components/AboutModal";
import { Layers, Palette, Download, Code2, Zap, Moon, Sun, MessageSquare } from "lucide-react";

type RightPanel = "theme" | "export" | "social";

export default function StudioPage() {
  const compositions = getAllCompositions();
  const initialCompId = compositions[0]?.id ?? "";
  const [selectedId, setSelectedId] = useState<string>(initialCompId);
  
  // Set the initial theme from the first composition if available to prevent DOM errors
  const initialComposition = compositions.find(c => c.id === initialCompId);
  const initialTheme = initialComposition?.themeConfig?.themePresets?.[0]?.theme ?? defaultTheme;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [appThemeName, setAppThemeName] = useState<"claro" | "oscuro">("oscuro");
  const uiTheme = uiThemePresets[appThemeName];
  const [rightPanel, setRightPanel] = useState<RightPanel>("theme");
  const [showAbout, setShowAbout] = useState(false);

  const composition: CarouselComposition | undefined = compositions.find(
    (c) => c.id === selectedId
  );

  // Reset slide and theme when composition changes
  useEffect(() => {
    setCurrentSlide(0);
    if (composition) {
      const config = composition.themeConfig ?? fallbackThemeConfig;
      if (config.themePresets.length > 0) {
        setTheme(config.themePresets[0].theme);
      }
    }
  }, [selectedId, composition]);

  // Handle localStorage theme
  useEffect(() => {
    const saved = localStorage.getItem("openmark_theme");
    if (saved === "claro" || saved === "oscuro") {
      setAppThemeName(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = appThemeName === "claro" ? "oscuro" : "claro";
    setAppThemeName(nextTheme);
    localStorage.setItem("openmark_theme", nextTheme);
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!composition) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentSlide((s) => Math.min(s + 1, composition.slides.length - 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [composition]);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    if (!composition) return;
    setCurrentSlide((s) => Math.min(s + 1, composition.slides.length - 1));
  }, [composition]);

  return (
    <div
      className="flex flex-col h-screen overflow-hidden transition-colors duration-300"
      style={{
        background: uiTheme.colors.background,
        color: uiTheme.colors.text,
        fontFamily: uiTheme.font,
      }}
    >
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-6 h-14 shrink-0 relative"
        style={{
          background: uiTheme.colors.surface,
          borderBottom: `1px solid ${uiTheme.colors.background}`,
          zIndex: 50,
        }}
      >
        <div className="flex items-center gap-3 z-10">
          <span className="font-bold text-sm tracking-tight">
            OpenMark
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono"
            style={{
              background: `${uiTheme.colors.primary}22`,
              color: uiTheme.colors.primary,
            }}
          >
            open-code
          </span>
          <button
            onClick={() => setShowAbout(true)}
            className="ml-2 text-xs font-semibold px-3 py-1 rounded-md transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/5"
            style={{ color: uiTheme.colors.textMuted }}
          >
            About
          </button>
        </div>

        {/* Composition info (Absolutely Centered) */}
        {composition && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-center pointer-events-none">
            <p
              className="text-xs font-semibold"
              style={{ color: uiTheme.colors.text }}
            >
              {composition.title}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: uiTheme.colors.textMuted }}>
              {composition.width} × {composition.height}px
            </p>
          </div>
        )}

        <div
          className="flex items-center gap-1 p-1 rounded-lg mr-2 z-10"
          style={{ background: uiTheme.colors.background }}
        >
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-md transition-all mr-2 cursor-pointer"
            style={{ color: uiTheme.colors.textMuted }}
            title="Toggle App Theme"
          >
            {appThemeName === "claro" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          {(
            [
              { id: "theme" as RightPanel, icon: Palette, label: "Theme" },
              { id: "export" as RightPanel, icon: Download, label: "Export" },
              { id: "social" as RightPanel, icon: MessageSquare, label: "Social" },
            ] as const
          ).map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setRightPanel(id)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer"
              style={{
                background:
                  rightPanel === id ? uiTheme.colors.surface : "transparent",
                color:
                  rightPanel === id
                    ? uiTheme.colors.text
                    : uiTheme.colors.textMuted,
              }}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar: Carousel list */}
        <aside
          className="w-56 shrink-0 overflow-hidden flex flex-col"
          style={{
            background: uiTheme.colors.surface,
            borderRight: `1px solid ${uiTheme.colors.background}`,
          }}
        >
          <CarouselList
            compositions={compositions}
            selectedId={selectedId}
            uiTheme={uiTheme}
            onSelect={handleSelect}
          />
        </aside>

        {/* Center: Slide preview */}
        <main
          className="flex-1 flex items-center justify-center overflow-hidden relative"
          style={{ background: uiTheme.colors.background }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(${uiTheme.colors.text} 1px, transparent 1px),
                linear-gradient(90deg, ${uiTheme.colors.text} 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              zIndex: 0,
            }}
          />

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {composition ? (
              <SlideRenderer
                composition={composition}
                currentSlide={currentSlide}
                theme={theme}
                uiTheme={uiTheme}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            ) : (
              <div className="text-center">
                <Code2
                  size={48}
                  className="mx-auto mb-4"
                  style={{ color: uiTheme.colors.primary, opacity: 0.5 }}
                />
                <p style={{ color: uiTheme.colors.textMuted }}>
                  No compositions available.
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: uiTheme.colors.textMuted }}
                >
                  Generate a carousel with the designated skill, and it will appear here.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Right sidebar: Theme / Export */}
        <aside
          className="w-64 shrink-0 overflow-hidden flex flex-col"
          style={{
            background: uiTheme.colors.surface,
            borderLeft: `1px solid ${uiTheme.colors.background}`,
          }}
        >
          {rightPanel === "theme" && composition ? (
            <ThemeEditor 
              theme={theme} 
              uiTheme={uiTheme} 
              themeConfig={composition.themeConfig ?? fallbackThemeConfig}
              onChange={setTheme} 
            />
          ) : rightPanel === "export" && composition ? (
            <ExportPanel
              composition={composition}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              uiTheme={uiTheme}
            />
          ) : rightPanel === "social" && composition ? (
            <SocialPanel
              composition={composition}
              uiTheme={uiTheme}
            />
          ) : null}
        </aside>
      </div>

      {/* ── Status Bar ───────────────────────────────────────── */}
      <footer
        className="h-7 flex items-center px-4 gap-6 text-xs shrink-0"
        style={{
          background: uiTheme.colors.surface,
          borderTop: `1px solid ${uiTheme.colors.background}`,
          color: uiTheme.colors.textMuted,
        }}
      >
        <span className="flex items-center gap-1.5">
          <Layers size={11} />
          {compositions.length}{" "}
          {compositions.length === 1 ? "composition" : "compositions"}
        </span>
        {composition && (
          <span>
            Slide {currentSlide + 1} / {composition.slides.length}
          </span>
        )}
        <span className="ml-auto hidden sm:inline">Use ← → to navigate · Ctrl+S to export</span>
      </footer>

      {/* ── Modals ─────────────────────────────────────────────── */}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} uiTheme={uiTheme} />}
    </div>
  );
}
