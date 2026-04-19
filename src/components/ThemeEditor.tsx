"use client";

import React from "react";
import { Theme, ThemePresetName } from "@/types/carousel";
import { themePresets, fontOptions } from "@/lib/theme";
import { Palette, Type } from "lucide-react";

interface ThemeEditorProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

const colorKeys: { key: keyof Theme["colors"]; label: string }[] = [
  { key: "primary", label: "Principal" },
  { key: "secondary", label: "Secundario" },
  { key: "accent", label: "Acento" },
  { key: "background", label: "Fondo" },
  { key: "surface", label: "Superficie" },
  { key: "text", label: "Texto" },
  { key: "textMuted", label: "Texto suave" },
];

const presetNames: { id: ThemePresetName; label: string; emoji: string }[] = [
  { id: "dark-pro", label: "Dark Pro", emoji: "🌌" },
  { id: "light-clean", label: "Light Clean", emoji: "☀️" },
  { id: "gradient-warm", label: "Gradient Warm", emoji: "🔥" },
  { id: "ocean-depth", label: "Ocean Depth", emoji: "🌊" },
  { id: "forest-calm", label: "Forest Calm", emoji: "🌿" },
  { id: "neon-bold", label: "Neon Bold", emoji: "⚡" },
];

export default function ThemeEditor({ theme, onChange }: ThemeEditorProps) {
  const handleColorChange = (key: keyof Theme["colors"], value: string) => {
    onChange({
      ...theme,
      colors: { ...theme.colors, [key]: value },
    });
  };

  const handlePreset = (id: ThemePresetName) => {
    onChange(themePresets[id]);
  };

  const handleFont = (font: string) => {
    onChange({ ...theme, font });
  };

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{ fontFamily: theme.font }}
    >
      {/* Section: Presets */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: `1px solid ${theme.colors.surface}` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Palette size={16} style={{ color: theme.colors.primary }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: theme.colors.textMuted }}
          >
            Paletas
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {presetNames.map((p) => {
            const preset = themePresets[p.id];
            return (
              <button
                key={p.id}
                onClick={() => handlePreset(p.id)}
                title={p.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-left text-xs font-medium transition-all hover:scale-105"
                style={{
                  background: preset.colors.background,
                  border: `1px solid ${preset.colors.primary}55`,
                  color: preset.colors.text,
                }}
              >
                <span>{p.emoji}</span>
                <span style={{ color: preset.colors.primary }}>
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section: Colors */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: `1px solid ${theme.colors.surface}` }}
      >
        <span
          className="text-xs font-bold tracking-widest uppercase block mb-3"
          style={{ color: theme.colors.textMuted }}
        >
          Colores
        </span>
        <div className="flex flex-col gap-3">
          {colorKeys.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <span
                className="text-xs flex-1 truncate"
                style={{ color: theme.colors.textMuted }}
              >
                {label}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-mono"
                  style={{ color: theme.colors.textMuted }}
                >
                  {theme.colors[key]}
                </span>
                <label
                  className="relative cursor-pointer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: theme.colors[key],
                    border: `2px solid ${theme.colors.surface}`,
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="color"
                    value={theme.colors[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Font */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Type size={16} style={{ color: theme.colors.primary }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: theme.colors.textMuted }}
          >
            Tipografía
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {fontOptions.map((font) => (
            <button
              key={font}
              onClick={() => handleFont(font)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                fontFamily: font,
                background:
                  theme.font === font
                    ? `${theme.colors.primary}22`
                    : "transparent",
                color:
                  theme.font === font
                    ? theme.colors.text
                    : theme.colors.textMuted,
                border:
                  theme.font === font
                    ? `1px solid ${theme.colors.primary}44`
                    : "1px solid transparent",
              }}
            >
              {font}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
