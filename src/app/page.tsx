"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Theme, CarouselComposition } from "@/types/carousel";
import { defaultTheme } from "@/lib/theme";
import { getAllCompositions } from "@/registry";
import CarouselList from "@/components/CarouselList";
import SlideRenderer from "@/components/SlideRenderer";
import ThemeEditor from "@/components/ThemeEditor";
import ExportPanel from "@/components/ExportPanel";
import { Layers, Palette, Download, Code2, Zap } from "lucide-react";

type RightPanel = "theme" | "export";

export default function StudioPage() {
  const compositions = getAllCompositions();
  const [selectedId, setSelectedId] = useState<string>(
    compositions[0]?.id ?? ""
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [rightPanel, setRightPanel] = useState<RightPanel>("theme");

  const composition: CarouselComposition | undefined = compositions.find(
    (c) => c.id === selectedId
  );

  // Reset slide when composition changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedId]);

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
      className="flex flex-col h-screen overflow-hidden"
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.font,
      }}
    >
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-6 h-14 shrink-0"
        style={{
          background: theme.colors.surface,
          borderBottom: `1px solid ${theme.colors.background}`,
          zIndex: 50,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          >
            <Zap size={16} color="#fff" />
          </div>
          <span className="font-bold text-sm tracking-tight">
            Carousel Studio
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono"
            style={{
              background: `${theme.colors.primary}22`,
              color: theme.colors.primary,
            }}
          >
            code-first
          </span>
        </div>

        {/* Composition info */}
        {composition && (
          <div className="flex items-center gap-4">
            <div className="text-center hidden md:block">
              <p
                className="text-xs font-semibold"
                style={{ color: theme.colors.text }}
              >
                {composition.title}
              </p>
              <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                {composition.width} × {composition.height}
              </p>
            </div>

            {/* Slide pills */}
            <div className="flex gap-1">
              {composition.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="rounded transition-all"
                  style={{
                    width: i === currentSlide ? "20px" : "8px",
                    height: "8px",
                    background:
                      i === currentSlide
                        ? theme.colors.primary
                        : `${theme.colors.primary}44`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Right panel tabs */}
        <div
          className="flex items-center gap-1 p-1 rounded-lg"
          style={{ background: theme.colors.background }}
        >
          {(
            [
              { id: "theme" as RightPanel, icon: Palette, label: "Tema" },
              { id: "export" as RightPanel, icon: Download, label: "Exportar" },
            ] as const
          ).map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setRightPanel(id)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all"
              style={{
                background:
                  rightPanel === id ? theme.colors.surface : "transparent",
                color:
                  rightPanel === id
                    ? theme.colors.text
                    : theme.colors.textMuted,
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
            background: theme.colors.surface,
            borderRight: `1px solid ${theme.colors.background}`,
          }}
        >
          <CarouselList
            compositions={compositions}
            selectedId={selectedId}
            theme={theme}
            onSelect={handleSelect}
          />
        </aside>

        {/* Center: Slide preview */}
        <main
          className="flex-1 flex items-center justify-center overflow-hidden relative"
          style={{ background: theme.colors.background }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(${theme.colors.text} 1px, transparent 1px),
                linear-gradient(90deg, ${theme.colors.text} 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {composition ? (
            <SlideRenderer
              composition={composition}
              currentSlide={currentSlide}
              theme={theme}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          ) : (
            <div className="text-center">
              <Code2
                size={48}
                className="mx-auto mb-4"
                style={{ color: theme.colors.primary, opacity: 0.5 }}
              />
              <p style={{ color: theme.colors.textMuted }}>
                No hay composiciones disponibles.
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: theme.colors.textMuted }}
              >
                Genera un carrusel con la skill y aparecerá aquí.
              </p>
            </div>
          )}
        </main>

        {/* Right sidebar: Theme / Export */}
        <aside
          className="w-64 shrink-0 overflow-hidden flex flex-col"
          style={{
            background: theme.colors.surface,
            borderLeft: `1px solid ${theme.colors.background}`,
          }}
        >
          {rightPanel === "theme" ? (
            <ThemeEditor theme={theme} onChange={setTheme} />
          ) : (
            composition && (
              <ExportPanel
                composition={composition}
                currentSlide={currentSlide}
                theme={theme}
              />
            )
          )}
        </aside>
      </div>

      {/* ── Status Bar ───────────────────────────────────────── */}
      <footer
        className="h-7 flex items-center px-4 gap-6 text-xs shrink-0"
        style={{
          background: theme.colors.surface,
          borderTop: `1px solid ${theme.colors.background}`,
          color: theme.colors.textMuted,
        }}
      >
        <span className="flex items-center gap-1.5">
          <Layers size={11} />
          {compositions.length}{" "}
          {compositions.length === 1 ? "composición" : "composiciones"}
        </span>
        {composition && (
          <span>
            Slide {currentSlide + 1} / {composition.slides.length}
          </span>
        )}
        <span className="ml-auto">← → para navegar</span>
      </footer>
    </div>
  );
}
