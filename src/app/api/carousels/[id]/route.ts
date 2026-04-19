import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  
  if (!id) {
    return NextResponse.json({ error: "No ID provided" }, { status: 400 });
  }

  try {
    const srcDir = path.join(process.cwd(), "src", "generated", "carousels", id);
    const rootDir = path.join(process.cwd(), "generated", "carousels", id);
    const registryPath = path.join(process.cwd(), "src", "registry.ts");

    // Remove directories
    await fs.promises.rm(srcDir, { recursive: true, force: true }).catch(() => {});
    await fs.promises.rm(rootDir, { recursive: true, force: true }).catch(() => {});

    // Update Registry if exists
    if (fs.existsSync(registryPath)) {
      let registryContent = await fs.promises.readFile(registryPath, "utf-8");
      
      const importRegex = new RegExp(`import\\s+([\\w]+)\\s+from\\s+['"]@\/generated\/carousels\/${id}['"];?\\r?\\n?`, "g");
      const match = importRegex.exec(registryContent);
      
      if (match) {
        const varName = match[1];
        registryContent = registryContent.replace(importRegex, "");
        // Remove variable name with optional comma and surrounding whitespace on its line
        const itemRegex = new RegExp(`^\\s*${varName}\\s*,?\\r?\\n?`, "gm");
        registryContent = registryContent.replace(itemRegex, "");
        
        await fs.promises.writeFile(registryPath, registryContent, "utf-8");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Error", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
