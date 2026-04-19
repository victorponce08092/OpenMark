"use client";

import React from "react";
import { CarouselComposition } from "@/types/carousel";
import { Theme } from "@/types/carousel";
import { Layers, ChevronRight } from "lucide-react";

interface CarouselListProps {
  compositions: CarouselComposition[];
  selectedId: string | null;
  theme: Theme;
  onSelect: (id: string) => void;
}

export default function CarouselList({
  compositions,
  selectedId,
  theme,
  onSelect,
}: CarouselListProps) {
  return (
    <aside className="flex flex-col h-full" style={{ fontFamily: theme.font }}>
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${theme.colors.surface}` }}
      >
        <Layers
          size={20}
          style={{ color: theme.colors.primary }}
          className="shrink-0"
        />
        <span
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: theme.colors.textMuted }}
        >
          Carruseles
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto py-3">
        {compositions.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              No hay carruseles generados.
            </p>
            <p className="text-xs mt-2" style={{ color: theme.colors.textMuted }}>
              Usa la skill para crear uno.
            </p>
          </div>
        ) : (
          compositions.map((comp) => {
            const isSelected = comp.id === selectedId;
            return (
              <button
                key={comp.id}
                onClick={() => onSelect(comp.id)}
                className="w-full text-left px-4 py-3 flex items-center justify-between group transition-all"
                style={{
                  background: isSelected
                    ? `${theme.colors.primary}18`
                    : "transparent",
                  borderLeft: isSelected
                    ? `3px solid ${theme.colors.primary}`
                    : "3px solid transparent",
                }}
              >
                <div className="min-w-0">
                  {/* Mini slide preview */}
                  <div
                    className="w-full rounded-lg mb-2 overflow-hidden flex items-center justify-center"
                    style={{
                      height: "72px",
                      background: isSelected
                        ? `${theme.colors.primary}22`
                        : theme.colors.surface,
                      borderRadius: "8px",
                    }}
                  >
                    <span className="text-2xl">🎨</span>
                  </div>

                  <p
                    className="text-sm font-semibold truncate"
                    style={{
                      color: isSelected
                        ? theme.colors.text
                        : theme.colors.textMuted,
                    }}
                  >
                    {comp.title}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: theme.colors.textMuted }}
                  >
                    {comp.slides.length} slides · {comp.width}×{comp.height}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="shrink-0 ml-2 transition-transform group-hover:translate-x-1"
                  style={{
                    color: isSelected
                      ? theme.colors.primary
                      : theme.colors.textMuted,
                    opacity: isSelected ? 1 : 0,
                  }}
                />
              </button>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div
        className="px-5 py-4 text-xs"
        style={{
          color: theme.colors.textMuted,
          borderTop: `1px solid ${theme.colors.surface}`,
        }}
      >
        {compositions.length}{" "}
        {compositions.length === 1 ? "composición" : "composiciones"}
      </div>
    </aside>
  );
}
