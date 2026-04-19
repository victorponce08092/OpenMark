import { CarouselComposition } from "@/types/carousel";

// ============================================================
// Static Registry — Import ALL generated carousels here.
// When the AI generates a new carousel, add its import below.
// The dev server will hot-reload automatically.
// ============================================================

import exampleCarousel from "@/generated/carousels/example-carousel";

const registry: CarouselComposition[] = [
  exampleCarousel,
  // ADD NEW CAROUSELS HERE ↓
  // import myCarousel from "@/generated/carousels/my-carousel";
  // myCarousel,
];

export function getComposition(id: string): CarouselComposition | undefined {
  return registry.find((c) => c.id === id);
}

export function getAllCompositions(): CarouselComposition[] {
  return registry;
}

export default registry;
