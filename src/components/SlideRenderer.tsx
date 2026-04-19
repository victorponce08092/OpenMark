"use client";

import React, { useRef } from "react";
import { CarouselComposition, Theme } from "@/types/carousel";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface SlideRendererProps {
  composition: CarouselComposition;
  currentSlide: number;
  theme: Theme;
  onPrev: () => void;
  onNext: () => void;
  onExport?: (canvas: HTMLElement) => void;
}

const PREVIEW_SIZE = 540; // px — display size (actual slide is 1080×1080)

export default function SlideRenderer({
  composition,
  currentSlide,
  theme,
  onPrev,
  onNext,
}: SlideRendererProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const slide = composition.slides[currentSlide];
  const SlideComponent = slide?.component;

  const scale = PREVIEW_SIZE / composition.width;

  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full gap-6"
      style={{ fontFamily: theme.font }}
    >
      {/* Slide label */}
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: theme.colors.textMuted }}
        >
          {slide?.label ?? `Slide ${currentSlide + 1}`}
        </span>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{
            background: `${theme.colors.primary}22`,
            color: theme.colors.primary,
          }}
        >
          {currentSlide + 1} / {composition.slides.length}
        </span>
      </div>

      {/* Canvas area */}
      <div
        className="relative shadow-2xl"
        style={{
          width: `${PREVIEW_SIZE}px`,
          height: `${PREVIEW_SIZE}px`,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: `0 24px 64px ${theme.colors.primary}22, 0 0 0 1px ${theme.colors.surface}`,
        }}
      >
        {/* Actual slide rendered at 1080×1080, scaled down */}
        <div
          ref={slideRef}
          id="slide-canvas"
          style={{
            width: `${composition.width}px`,
            height: `${composition.height}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {SlideComponent && (
            <SlideComponent
              theme={theme}
              data={composition.defaultData}
              index={currentSlide}
            />
          )}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-3 rounded-full transition-all disabled:opacity-30"
          style={{
            background: theme.colors.surface,
            color: theme.colors.text,
            border: `1px solid ${theme.colors.surface}`,
          }}
          title="Slide anterior"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {composition.slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === currentSlide ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  i === currentSlide
                    ? theme.colors.primary
                    : theme.colors.surface,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === composition.slides.length - 1}
          className="p-3 rounded-full transition-all disabled:opacity-30"
          style={{
            background: theme.colors.surface,
            color: theme.colors.text,
            border: `1px solid ${theme.colors.surface}`,
          }}
          title="Slide siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="text-xs" style={{ color: theme.colors.textMuted }}>
        Usa ← → para navegar · Ctrl+S para exportar
      </p>
    </div>
  );
}
