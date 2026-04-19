"use client";

import React from "react";
import { CarouselComposition } from "@/types/carousel";
import { Theme } from "@/types/carousel";
import { Layers, Copy, Trash2, Check } from "lucide-react";

interface CarouselListProps {
  compositions: CarouselComposition[];
  selectedId: string | null;
  uiTheme: Theme;
  onSelect: (id: string) => void;
}

export default function CarouselList({
  compositions,
  selectedId,
  uiTheme,
  onSelect,
}: CarouselListProps) {
  const [confirmDeleteId, setConfirmDeleteId] = React.useState<string | null>(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopyClick = async (e: React.MouseEvent, text: string, id: string) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setConfirmDeleteId(id);
  };

  const executeDelete = async () => {
    if (!confirmDeleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/carousels/${confirmDeleteId}`, { method: "DELETE" });
      if (res.ok) {
        window.location.reload();
      } else {
        alert("There was an error trying to delete the carousel.");
      }
    } catch (err) {
      console.error(err);
      alert("There was a connection error.");
    } finally {
      setIsDeleting(false);
      setConfirmDeleteId(null);
    }
  };
  return (
    <>
      <aside className="flex flex-col h-full" style={{ fontFamily: uiTheme.font }}>
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
      >
        <Layers
          size={20}
          style={{ color: uiTheme.colors.primary }}
          className="shrink-0"
        />
        <span
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: uiTheme.colors.textMuted }}
        >
          Carousels
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto py-3">
        {compositions.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <p className="text-sm" style={{ color: uiTheme.colors.textMuted }}>
              No carousels generated.
            </p>
            <p className="text-xs mt-2" style={{ color: uiTheme.colors.textMuted }}>
              Use the skill to create one.
            </p>
          </div>
        ) : (
          compositions.map((comp) => {
            const isSelected = comp.id === selectedId;
            return (
              <div
                key={comp.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(comp.id)}
                className="text-left mx-2 mb-2 px-3 py-2.5 rounded-xl flex items-center gap-3 group transition-all cursor-pointer"
                style={{
                  background: isSelected
                    ? uiTheme.colors.surface
                    : "transparent",
                  border: isSelected
                    ? `1px solid ${uiTheme.colors.primary}22`
                    : "1px solid transparent",
                }}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{
                      color: isSelected
                        ? uiTheme.colors.text
                        : uiTheme.colors.textMuted,
                    }}
                  >
                    {comp.title}
                  </p>
                  <p
                    className="text-[10px] mt-0.5 tracking-wider uppercase font-medium"
                    style={{ color: uiTheme.colors.textMuted }}
                  >
                    {comp.slides.length} slides
                  </p>
                </div>
                
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleDeleteClick(e, comp.id)}
                    className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                    title="Delete carousel"
                  >
                    <Trash2
                      size={14}
                      style={{ color: uiTheme.colors.textMuted }}
                    />
                  </button>
                  <button
                    onClick={(e) => handleCopyClick(e, comp.id, comp.id)}
                    className="p-1.5 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                    title="Copy name"
                  >
                    {copiedId === comp.id ? (
                      <Check
                        size={14}
                        style={{ color: uiTheme.colors.primary }}
                      />
                    ) : (
                      <Copy
                        size={14}
                        style={{ color: uiTheme.colors.textMuted }}
                      />
                    )}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

    </aside>
      
      {/* ── Custom Delete Confirmation Modal ── */}
      {confirmDeleteId && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200"
          style={{
            background: `${uiTheme.colors.surface}E6`,
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden p-6 text-center"
            style={{
              background: uiTheme.colors.background,
              border: `1px solid ${uiTheme.colors.primary}44`,
            }}
          >
            <Trash2 size={40} className="mx-auto mb-4" style={{ color: uiTheme.colors.primary }} />
            <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: uiTheme.colors.text }}>Delete Carousel?</h3>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: uiTheme.colors.textMuted }}>
              Are you completely sure? This will permanently delete the React code and metadata for this asset.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                disabled={isDeleting}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer disabled:opacity-50"
                style={{ color: uiTheme.colors.text }}
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                disabled={isDeleting}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:scale-100"
                style={{ background: uiTheme.colors.primary, color: uiTheme.colors.surface }}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
