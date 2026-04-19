// ============================================================
// Carousel Studio — Core Types
// ============================================================

import type { ComponentType } from "react";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
  font: string;
  borderRadius: string;
}

export interface SlideProps {
  theme: Theme;
  data?: Record<string, string>;
  index?: number;
}

export interface SlideDefinition {
  id: string;
  component: ComponentType<SlideProps>;
  label?: string;
}

export interface CarouselComposition {
  id: string;
  title: string;
  width: number;
  height: number;
  slides: SlideDefinition[];
  defaultData?: Record<string, string>;
}

export interface CarouselMeta {
  title: string;
  type: string;
  slides: number;
  createdAt?: string;
  description?: string;
  tags?: string[];
}

export interface CarouselEntry {
  id: string;
  meta: CarouselMeta;
  path: string;
}

export type ThemePresetName =
  | "dark-pro"
  | "light-clean"
  | "gradient-warm"
  | "ocean-depth"
  | "forest-calm"
  | "neon-bold";
