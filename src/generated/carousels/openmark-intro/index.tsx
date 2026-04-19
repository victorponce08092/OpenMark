import { CarouselComposition } from "@/types/carousel";
import { slides } from "./slides";

const composition: CarouselComposition = {
  id: "openmark-intro",
  title: "Welcome to OpenMark",
  width: 1080,
  height: 1080,
  slides,
  defaultData: {}, // Text is hardcoded or has fallback, keeping it simple
  themeConfig: {
    fontOptions: [
      "Inter", "Outfit", "Playfair Display", "Geist", "Space Grotesk", "Syne"
    ],
    colorKeys: [
      { key: "background", label: "Background" },
      { key: "surface", label: "Surface Layer" },
      { key: "primary", label: "Brand Accent" },
      { key: "text", label: "Headlines" },
      { key: "textMuted", label: "Body Copy" }
    ],
    themePresets: [
      {
        id: "palette-openmark-dark",
        label: "Abyss",
        theme: {
          colors: { background: "#000000", surface: "#111111", primary: "#ffffff", text: "#f4f4f5", textMuted: "#a1a1aa" },
          font: "Space Grotesk",
          borderRadius: "0px"
        }
      },
      {
        id: "palette-openmark-light",
        label: "Blank Canvas",
        theme: {
          colors: { background: "#f4f4f5", surface: "#ffffff", primary: "#000000", text: "#000000", textMuted: "#52525b" },
          font: "Inter",
          borderRadius: "24px"
        }
      },
      {
        id: "palette-cyber",
        label: "Cyberpunk",
        theme: {
          colors: { background: "#09090b", surface: "#18181b", primary: "#10b981", text: "#f4f4f5", textMuted: "#a1a1aa" },
          font: "Outfit",
          borderRadius: "8px"
        }
      },
      {
        id: "palette-indigo",
        label: "Deep Indigo",
        theme: {
          colors: { background: "#1e1b4b", surface: "#312e81", primary: "#a5b4fc", text: "#ffffff", textMuted: "#c7d2fe" },
          font: "Outfit",
          borderRadius: "16px"
        }
      },
      {
        id: "palette-warm",
        label: "Desert Sand",
        theme: {
          colors: { background: "#fdf8f6", surface: "#f5ebe0", primary: "#d4a373", text: "#2c2a29", textMuted: "#7a7471" },
          font: "Playfair Display",
          borderRadius: "4px"
        }
      },
      {
        id: "palette-ruby",
        label: "Velvet Ruby",
        theme: {
          colors: { background: "#4c0519", surface: "#881337", primary: "#fecdd3", text: "#fff1f2", textMuted: "#fda4af" },
          font: "Syne",
          borderRadius: "32px"
        }
      }
    ]
  },
  socialCopy: {
    text: "Say goodbye to dragging layers on infinite canvases. ❌🎨\n\nOpenMark transforms marketing content into intelligent, programmable React code. Generate, theme, and export pixel-perfect carousels securely.\n\nCode-first design for elite teams. Check out what happens when you treat UI as literal code.",
    hashtags: ["#openmark", "#saas", "#reactjs", "#codefirstdesign", "#marketingautomation", "#frontend"]
  }
};

export default composition;
