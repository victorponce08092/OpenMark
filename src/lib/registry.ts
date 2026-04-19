import fs from "fs";
import path from "path";
import { CarouselEntry, CarouselMeta } from "@/types/carousel";

const GENERATED_DIR = path.join(process.cwd(), "generated", "carousels");

export function getCarouselEntries(): CarouselEntry[] {
  if (!fs.existsSync(GENERATED_DIR)) {
    return [];
  }

  const entries: CarouselEntry[] = [];

  const dirs = fs
    .readdirSync(GENERATED_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of dirs) {
    const metaPath = path.join(GENERATED_DIR, dir.name, "meta.json");
    if (!fs.existsSync(metaPath)) continue;

    try {
      const raw = fs.readFileSync(metaPath, "utf-8");
      const meta: CarouselMeta = JSON.parse(raw);
      entries.push({
        id: dir.name,
        meta,
        path: path.join(GENERATED_DIR, dir.name),
      });
    } catch {
      // skip malformed meta.json
    }
  }

  return entries;
}
