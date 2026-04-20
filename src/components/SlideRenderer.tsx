"use client";

import React, { useRef, useState, useEffect } from "react";
import { CarouselComposition, Theme } from "@/types/carousel";
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Maximize } from "lucide-react";

interface SlideRendererProps {
  composition: CarouselComposition;
  currentSlide: number;
  theme: Theme;
  uiTheme: Theme;
  onPrev: () => void;
  onNext: () => void;
  onExport?: (canvas: HTMLElement) => void;
}


export default function SlideRenderer({
  composition,
  currentSlide,
  theme,
  uiTheme,
  onPrev,
  onNext,
}: SlideRendererProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const slide = composition.slides[currentSlide];
  const SlideComponent = slide?.component;

  const [previewSize, setPreviewSize] = useState(540);
  const [zoom, setZoom] = useState(1); // 1 = auto fit

  useEffect(() => {
    const handleResize = () => {
      // Available height minus header (56), footer (28), and padding for controls (~180)
      const availableHeight = window.innerHeight - 264;
      // Also ensure we don't overflow horizontally on very narrow screens (subtracting sidebar widths: 224 + 256 + 100 padding = 580px)
      const availableWidth = window.innerWidth - 580;
      
      const maxSize = Math.min(availableHeight, availableWidth);
      setPreviewSize(Math.min(Math.max(maxSize, 280), 800));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.25, 0.25));
  const handleZoomFit = () => setZoom(1);

  const baseScale = previewSize / composition.width;
  const scale = baseScale * zoom;
  const previewHeight = composition.height * scale;
  const actualPreviewSize = previewSize * zoom;

  return (
    <div
      className="flex flex-col items-center h-full w-full pb-6"
      style={{ fontFamily: theme.font }}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between w-full max-w-3xl px-4 py-4 shrink-0">
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
              background: `${uiTheme.colors.primary}18`,
              color: uiTheme.colors.text,
              border: `1px solid ${uiTheme.colors.primary}44`,
            }}
          >
            {currentSlide + 1} / {composition.slides.length}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            style={{ color: uiTheme.colors.textMuted }}
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={handleZoomFit}
            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            style={{ color: zoom === 1 ? uiTheme.colors.primary : uiTheme.colors.textMuted }}
            title="Fit to Screen"
          >
            <Maximize size={16} />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            style={{ color: uiTheme.colors.textMuted }}
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
          <span className="text-xs w-12 text-right opacity-70" style={{ color: uiTheme.colors.textMuted }}>
            {Math.round(zoom * 100)}%
          </span>
        </div>
      </div>

      {/* Canvas Area Container - Scrollable if zoomed */}
      <div className="flex-1 w-full overflow-auto flex items-center justify-center p-4">
        <div
          className="relative shadow-2xl transition-all duration-200 shrink-0"
          style={{
            width: `${actualPreviewSize}px`,
            height: `${previewHeight}px`,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: `0 24px 64px ${theme.colors.primary}22, 0 0 0 1px ${theme.colors.surface}`,
          }}
        >
          {/* Actual slide rendered at composition size, scaled down/up */}
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
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-4 mt-6 shrink-0">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full transition-all disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
          style={{
            background: uiTheme.colors.primary,
            color: uiTheme.colors.surface,
            border: `1px solid ${uiTheme.colors.surface}22`,
          }}
          title="Previous slide"
        >
          <ChevronLeft size={16} />
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
                    ? uiTheme.colors.primary
                    : `${uiTheme.colors.textMuted}44`,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === composition.slides.length - 1}
          className="p-2 rounded-full transition-all disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
          style={{
            background: uiTheme.colors.primary,
            color: uiTheme.colors.surface,
            border: `1px solid ${uiTheme.colors.surface}22`,
          }}
          title="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
}
