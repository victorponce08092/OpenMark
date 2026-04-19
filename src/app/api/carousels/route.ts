import { NextResponse } from "next/server";
import { getCarouselEntries } from "@/lib/registry";

export async function GET() {
  try {
    const entries = getCarouselEntries();
    return NextResponse.json({ carousels: entries });
  } catch {
    return NextResponse.json(
      { error: "Failed to read carousels" },
      { status: 500 }
    );
  }
}
