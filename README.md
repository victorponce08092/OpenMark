```text
   ___                   __  __            _    
  / _ \ _ __   ___ _ __ |  \/  | __ _ _ __| | __
 | | | | '_ \ / _ \ '_ \| |\/| |/ _` | '__| |/ /
 | |_| | |_) |  __/ | | | |  | | (_| | |  |   < 
  \___/| .__/ \___|_| |_|_|  |_|\__,_|_|  |_|\_\
       |_|                                      
```

# OpenMark — Code-First Carousel Studio

> A complete ecosystem to generate marketing carousels as pure React code and render them in a real-time, programmatic web studio.

---

## Core Philosophy

OpenMark fundamentally shifts how marketing assets are created. In this system, AI does **not** generate images. The AI generates **React Code** that represents slides. 

```
AI Agent → React Source Code → OpenMark Web Studio → Exportable Assets
```

By treating design as code, you enforce strict brand consistency, pixel-perfect alignment, and programmatic scalability that traditional canvas editors cannot provide.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the development studio
npm run dev

# Open the studio
open http://localhost:3000
```

---

## Project Architecture

```
/
├── skills/
│   └── carousel-generator.md   <- Master AI instruction prompt
│
├── resources/
│   ├── business.md              <- Business context and avatar
│   ├── branding.md              <- Visual identity rules
│   └── offer.md                 <- Active products and CTAs
│
├── generated/                   <- External database mapping
│   └── carousels/
│       └── <id>/meta.json
│
├── src/
│   ├── generated/
│   │   └── carousels/
│   │       └── <id>/
│   │           ├── slides.tsx   <- The generated React slide components
│   │           └── index.tsx    <- The composition and theme definitions
│   │
│   ├── registry.ts              <- Central composition registry
│   │
│   ├── components/
│   │   ├── CarouselList.tsx     <- Left sidebar navigation
│   │   ├── SlideRenderer.tsx    <- Live preview engine
│   │   ├── ThemeEditor.tsx      <- Live theme palette editor
│   │   ├── ExportPanel.tsx      <- Export engine (PNG/JPG/ZIP)
│   │   └── SocialPanel.tsx      <- AI-generated social media captions
│   │
│   ├── lib/
│   │   └── theme.ts             <- Theme definitions and constraints
│   │
│   ├── types/
│   │   └── carousel.ts          <- Strict TypeScript definitions
│   │
│   └── app/
│       ├── page.tsx             <- Main Studio Interface
│       ├── layout.tsx
│       └── globals.css
```

---

## How to Work with AI Agents

OpenMark is designed to be paired with advanced coding copilots (such as Cursor, Windsurf, Claude Code, or Antigravity).

### Step 0: Set Up Your Brand Identity

Before running any prompts, navigate to the `/resources` folder and customize the template files with your actual business data:
- `business.md`: Explain what your company does and who your target audience is.
- `branding.md`: Provide your specific hex color codes, typography preferences, and brand voice.
- `offer.md`: Describe the exact product, lead magnet, or service you are promoting.

*(The AI agent will continually scan these files as its "memory" whenever you ask it to build something).*

### 1. Establish Context

Inside your AI-enabled editor, run the following prompt:

```text
Read the file /skills/carousel-generator.md and execute its instructions.
Then, create a 5-slide carousel about [YOUR TOPIC] for [YOUR BUSINESS].
```

### 2. The AI Workflow

1. The AI reads `/skills/carousel-generator.md` to understand the code-first paradigm.
2. It scans `/resources/` to map your exact target audience and visual brand.
3. If data is missing, it will directly consult you.
4. It programs the carousel inside `/src/generated/carousels/<id>/`.
5. It scaffolds the internal database entry in `/generated/carousels/<id>/meta.json`.
6. It dynamically links the new asset in `/src/registry.ts`.

### 3. Review and Export

Save the files. The OpenMark development server will hot-reload instantly. You can now preview the layout, tweak the theme properties effortlessly, read the generated social media caption, and export your slides in maximum resolution.

---

## Theming Engine

OpenMark provides dynamic theme overriding without modifying the underlying React code. Each composition can define its own unique palettes, empowering you to flip between entirely different visual identities (e.g., from Minimalist Monochrome to Deep Cyberpunk) with a single click.

---

## Exporting Capabilities

The OpenMark Studio relies on advanced DOM capturing to render your React concepts into flawless marketing resources.

| Format | Output | Notes |
|--------|--------|-------|
| PNG | 1080x1080px | Current slide, supports alpha transparency |
| JPG | 1080x1080px | Current slide, high-quality compression |
| ZIP | 1080x1080px | Generates and bundles all slides in sequence |

---

## Adding Carousels Manually

If you prefer to bypass the AI and handwrite programmatic marketing assets:

1. Create a directory: `/src/generated/carousels/<your-carousel-id>/`
2. Define the slides in `slides.tsx` adhering to the `SlideProps` interface.
3. Bundle the data, styling, and social copy in `index.tsx`.
4. Create the corresponding metadata file at `/generated/carousels/<your-carousel-id>/meta.json`.
5. Require it inside `/src/registry.ts`:

```typescript
import myCarousel from "@/generated/carousels/<your-carousel-id>";
// Inject myCarousel into the exported array
```

---

## Technology Stack

- Next.js 14 (App Router)
- React 18
- TailwindCSS
- HTML2Canvas (Export Pipeline)
- JSZip (Batch Archiving)
- Lucide React (Clean Iconography)

---

## License

MIT License. Open source and built for high-performance marketing teams.
