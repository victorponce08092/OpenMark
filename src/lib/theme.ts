import { Theme, ThemeConfig } from "@/types/carousel";

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

export const fallbackThemeConfig: ThemeConfig = {
  fontOptions: [
    "Inter",
    "Outfit",
    "Poppins",
    "Playfair Display",
    "Montserrat",
    "Raleway",
  ],
  colorKeys: [
    { key: "primary", label: "Principal" },
    { key: "secondary", label: "Secundario" },
    { key: "accent", label: "Acento" },
    { key: "background", label: "Fondo" },
    { key: "surface", label: "Superficie" },
    { key: "text", label: "Texto" },
    { key: "textMuted", label: "Texto suave" },
  ],
  themePresets: [
    {
      id: "claro",
      label: "Claro",
      theme: {
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
    },
    {
      id: "oscuro",
      label: "Oscuro",
      theme: {
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
    },
  ],
};

// Exporting UI themes easily for the main app container map
export const uiThemePresets = {
  claro: {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#000000",
      background: "#FFFFFF",
      surface: "#F4F4F5",
      text: "#000000",
      textMuted: "#52525B",
    },
    font: "Inter",
    borderRadius: "12px",
  },
  oscuro: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#000000",
      accent: "#FFFFFF",
      background: "#000000",
      surface: "#18181B",
      text: "#FFFFFF",
      textMuted: "#A1A1AA",
    },
    font: "Inter",
    borderRadius: "12px",
  },
};
