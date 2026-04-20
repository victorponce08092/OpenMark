"use client";

import React, { useState } from "react";
import { CarouselComposition, Theme } from "@/types/carousel";
import { Download, Image, FileImage, Archive, Loader2 } from "lucide-react";

interface ExportPanelProps {
  composition: CarouselComposition;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  uiTheme: Theme;
}

export default function ExportPanel({
  composition,
  currentSlide,
  setCurrentSlide,
  uiTheme,
}: ExportPanelProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const getSlideElement = (): HTMLElement | null => {
    return document.getElementById("slide-canvas");
  };

  const captureSlide = async (
    format: "png" | "jpeg",
    quality = 1
  ): Promise<string | null> => {
    const el = getSlideElement();
    if (!el) {
      setStatus("Slide canvas not found.");
      return null;
    }

    // Dynamic import to avoid SSR issues
    const htmlToImage = await import("html-to-image");
    const options = {
      width: composition.width,
      height: composition.height,
      canvasWidth: composition.width,
      canvasHeight: composition.height,
      pixelRatio: 1,
      style: { transform: "none" },
    };

    if (format === "png") {
      return htmlToImage.toPng(el, options);
    } else {
      return htmlToImage.toJpeg(el, { ...options, quality });
    }
  };

  const downloadDataUrl = (url: string, fileName: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };

  const exportCurrentAsPNG = async () => {
    setLoading("png");
    setStatus("Capturing slide...");
    try {
      const url = await captureSlide("png");
      if (url) {
        downloadDataUrl(
          url,
          `${composition.id}-slide-${currentSlide + 1}.png`
        );
        setStatus("PNG downloaded");
      }
    } catch (e) {
      setStatus("Export error");
      console.error(e);
    } finally {
      setLoading(null);
    }
  };

  const exportCurrentAsJPG = async () => {
    setLoading("jpg");
    setStatus("Capturing slide...");
    try {
      const url = await captureSlide("jpeg", 0.95);
      if (url) {
        downloadDataUrl(
          url,
          `${composition.id}-slide-${currentSlide + 1}.jpg`
        );
        setStatus("JPG downloaded");
      }
    } catch (e) {
      setStatus("Export error");
      console.error(e);
    } finally {
      setLoading(null);
    }
  };

  const exportAllAsZip = async () => {
    setLoading("zip");
    setStatus("Preparing ZIP (this might take a while)...");
    const originalSlide = currentSlide;
    try {
      const JSZip = (await import("jszip")).default;
      const htmlToImage = await import("html-to-image");
      const zip = new JSZip();
      const folder = zip.folder(composition.id)!;

      for (let i = 0; i < composition.slides.length; i++) {
        setStatus(`Capturing slide ${i + 1}/${composition.slides.length}...`);
        
        // Force slide change and wait for React to re-render + styles to apply
        setCurrentSlide(i);
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const el = document.getElementById("slide-canvas");
        if (!el) continue;

        const blob = await htmlToImage.toBlob(el, {
          width: composition.width,
          height: composition.height,
          canvasWidth: composition.width,
          canvasHeight: composition.height,
          pixelRatio: 1,
          style: { transform: "none" }
        });
        
        if (blob) {
          folder.file(`slide-${i + 1}.png`, blob);
        }
      }

      // Restore to original slide
      setCurrentSlide(originalSlide);

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      downloadDataUrl(url, `${composition.id}.zip`);
      URL.revokeObjectURL(url);
      setStatus("ZIP downloaded");
    } catch (e) {
      setStatus("Error exporting ZIP");
      console.error(e);
      setCurrentSlide(originalSlide); // restore on error
    } finally {
      setLoading(null);
    }
  };

  const buttons = [
    {
      id: "png",
      label: "PNG (current slide)",
      icon: Image,
      action: exportCurrentAsPNG,
      color: uiTheme.colors.primary,
    },
    {
      id: "jpg",
      label: "JPG (current slide)",
      icon: FileImage,
      action: exportCurrentAsJPG,
      color: uiTheme.colors.primary,
    },
    {
      id: "zip",
      label: "ZIP (all slides)",
      icon: Archive,
      action: exportAllAsZip,
      color: uiTheme.colors.accent,
    },
  ];

  return (
    <div
      className="flex flex-col h-full"
      style={{ fontFamily: uiTheme.font }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
      >
        <Download size={16} style={{ color: uiTheme.colors.primary }} />
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: uiTheme.colors.textMuted }}
        >
          Export
        </span>
      </div>

      <div className="flex-1 px-5 py-4">
        {/* Export buttons */}
        <div className="flex flex-col gap-3">
          {buttons.map((btn) => {
            const Icon = btn.icon;
            const isLoading = loading === btn.id;
            return (
              <button
                key={btn.id}
                onClick={btn.action}
                disabled={loading !== null}
                className="group w-full flex items-center gap-4 p-3 rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:transform-none cursor-pointer disabled:cursor-not-allowed"
                style={{
                  background: `${uiTheme.colors.surface}88`,
                  border: `1px solid ${uiTheme.colors.surface}`,
                }}
              >
                <div 
                  className="p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${btn.color}15` }}
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" style={{ color: btn.color }} />
                  ) : (
                    <Icon size={20} style={{ color: btn.color }} />
                  )}
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-bold tracking-tight" style={{ color: uiTheme.colors.text }}>
                    {btn.label}
                  </span>
                  <span className="text-[10px] font-medium tracking-wide uppercase mt-0.5" style={{ color: uiTheme.colors.textMuted }}>
                    High Quality Render
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Status */}
        {status && (
          <div
            className="mt-4 px-4 py-3 rounded-xl text-xs"
            style={{
              background: `${uiTheme.colors.primary}12`,
              color: uiTheme.colors.textMuted,
              border: `1px solid ${uiTheme.colors.primary}22`,
            }}
          >
            {status}
          </div>
        )}

        {/* Info */}
        <div className="mt-6">
          <p className="text-xs" style={{ color: uiTheme.colors.textMuted }}>
            Note: Images are exported at <strong>1080×1080px</strong>.
            For best results, ensure all styles have loaded properly.
          </p>
        </div>
      </div>
    </div>
  );
}
