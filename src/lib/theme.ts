import { Theme, ThemePresetName } from "@/types/carousel";

export const defaultTheme: Theme = {
  colors: {
    primary: "#6C63FF",
    secondary: "#FF6584",
    accent: "#FFD166",
    background: "#0A0A0F",
    surface: "#16161D",
    text: "#F5F5FA",
    textMuted: "#8585A4",
  },
  font: "Inter",
  borderRadius: "16px",
};

export const themePresets: Record<ThemePresetName, Theme> = {
  "dark-pro": {
    colors: {
      primary: "#6C63FF",
      secondary: "#FF6584",
      accent: "#FFD166",
      background: "#0A0A0F",
      surface: "#16161D",
      text: "#F5F5FA",
      textMuted: "#8585A4",
    },
    font: "Inter",
    borderRadius: "16px",
  },
  "light-clean": {
    colors: {
      primary: "#2563EB",
      secondary: "#7C3AED",
      accent: "#F59E0B",
      background: "#FFFFFF",
      surface: "#F8FAFC",
      text: "#0F172A",
      textMuted: "#64748B",
    },
    font: "Inter",
    borderRadius: "12px",
  },
  "gradient-warm": {
    colors: {
      primary: "#F97316",
      secondary: "#EF4444",
      accent: "#FCD34D",
      background: "#18110C",
      surface: "#231A12",
      text: "#FFFBF5",
      textMuted: "#A8896B",
    },
    font: "Outfit",
    borderRadius: "20px",
  },
  "ocean-depth": {
    colors: {
      primary: "#06B6D4",
      secondary: "#3B82F6",
      accent: "#A78BFA",
      background: "#020C18",
      surface: "#071828",
      text: "#E0F7FA",
      textMuted: "#4A7A8F",
    },
    font: "Poppins",
    borderRadius: "12px",
  },
  "forest-calm": {
    colors: {
      primary: "#10B981",
      secondary: "#059669",
      accent: "#D1FAE5",
      background: "#0A1A12",
      surface: "#122418",
      text: "#ECFDF5",
      textMuted: "#4B7A5F",
    },
    font: "Poppins",
    borderRadius: "8px",
  },
  "neon-bold": {
    colors: {
      primary: "#FF00FF",
      secondary: "#00FFFF",
      accent: "#FFFF00",
      background: "#000000",
      surface: "#0D0D0D",
      text: "#FFFFFF",
      textMuted: "#888888",
    },
    font: "Outfit",
    borderRadius: "4px",
  },
};

export const fontOptions = [
  "Inter",
  "Outfit",
  "Poppins",
  "Playfair Display",
  "Montserrat",
  "Raleway",
];
