// ============================================================
// Carousel Studio — Core Types
// ============================================================

import type { ComponentType } from "react";

export interface Theme {
  colors: Record<string, string>;
  font: string;
  borderRadius: string;
}

export interface ThemeConfig {
  fontOptions: string[];
  colorKeys: { key: string; label: string }[];
  themePresets: { id: string; label: string; theme: Theme }[];
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
  themeConfig?: ThemeConfig;
  socialCopy?: {
    text: string;
    hashtags: string[];
  };
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


