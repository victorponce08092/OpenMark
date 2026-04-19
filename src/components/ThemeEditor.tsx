"use client";

import React from "react";
import { Palette, Type } from "lucide-react";

import { Theme, ThemeConfig } from "@/types/carousel";

interface ThemeEditorProps {
  theme: Theme;
  uiTheme: Theme;
  themeConfig: ThemeConfig;
  onChange: (theme: Theme) => void;
}

export default function ThemeEditor({ theme, uiTheme, themeConfig, onChange }: ThemeEditorProps) {
  const handleColorChange = (key: keyof Theme["colors"], value: string) => {
    onChange({
      ...theme,
      colors: { ...theme.colors, [key]: value },
    });
  };

  const handlePreset = (id: string) => {
    const preset = themeConfig.themePresets.find(p => p.id === id);
    if (preset) onChange(preset.theme);
  };

  const handleFont = (font: string) => {
    onChange({ ...theme, font });
  };

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{ fontFamily: uiTheme.font }}
    >
      {/* Section: Presets */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Palette size={16} style={{ color: uiTheme.colors.primary }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: uiTheme.colors.textMuted }}
          >
            Palettes
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {themeConfig.themePresets.map((preset) => {
            return (
              <button
                key={preset.id}
                onClick={() => handlePreset(preset.id)}
                title={preset.label}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105 cursor-pointer"
                style={{
                  background: preset.theme.colors.background,
                  border: `1px solid ${preset.theme.colors.primary}55`,
                  color: preset.theme.colors.text,
                }}
              >
                <span style={{ color: preset.theme.colors.primary }}>
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section: Colors */}
      <div
        className="px-5 py-4"
        style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
      >
        <span
          className="text-xs font-bold tracking-widest uppercase block mb-3"
          style={{ color: uiTheme.colors.textMuted }}
        >
          Colors
        </span>
        <div className="flex flex-col gap-3">
          {themeConfig.colorKeys.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <span
                className="text-xs flex-1 truncate"
                style={{ color: uiTheme.colors.textMuted }}
              >
                {label}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-mono"
                  style={{ color: uiTheme.colors.textMuted }}
                >
                  {theme.colors[key] || "#000000"}
                </span>
                <label
                  className="relative cursor-pointer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: theme.colors[key] || "#000000",
                    border: `2px solid ${uiTheme.colors.surface}`,
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="color"
                    value={theme.colors[key] || "#000000"}
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
          <Type size={16} style={{ color: uiTheme.colors.primary }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: uiTheme.colors.textMuted }}
          >
            Typography
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {themeConfig.fontOptions.map((font) => (
            <button
              key={font}
              onClick={() => handleFont(font)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all cursor-pointer"
              style={{
                fontFamily: font,
                background:
                  theme.font === font
                    ? `${uiTheme.colors.primary}22`
                    : "transparent",
                color:
                  theme.font === font
                    ? uiTheme.colors.text
                    : uiTheme.colors.textMuted,
                border:
                  theme.font === font
                    ? `1px solid ${uiTheme.colors.primary}44`
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
