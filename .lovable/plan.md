
# Aura Infinity Labs — AI Agency Site + Custom Logo

Building the full warm-gold + matte-black landing page positioned around landing pages, websites, AI agents, AI automations, and Claude Code / Codex mastery — plus a **custom-designed SVG logo**.

## Custom Logo (designed in code, not generated as raster)

**File**: `src/components/ui/logo.tsx` — a typed React SVG component.

**Concept**: A monogram where the **α (alpha)** glyph and the **∞ (infinity)** symbol are fused into a single mark, sitting beside the wordmark "AI LABS".

**Construction**:
- **Mark (square, 64×64 viewBox)**:
  - Stroked path forming a lowercase **alpha (α)** — a closed loop on the left flowing into a tail on the right.
  - The **tail of the alpha extends rightward and loops back through itself**, completing a sideways figure-eight (∞). So the alpha's tail IS the right lobe of the infinity, and the alpha's body IS the left lobe — one continuous stroke.
  - Stroke: 4px, `stroke-linecap="round"`, `stroke-linejoin="round"`.
  - Stroke uses an SVG `<linearGradient id="goldGrad">` from `#FCD34D` (amber-300) → `#FACC15` (yellow-400) → `#F59E0B` (amber-500), 45° angle.
  - Subtle inner glow via `<filter>` with `feGaussianBlur` + `feMerge` for a soft amber halo.
- **Wordmark** (next to the mark):
  - "AI" in bold gold gradient text (`from-amber-200 via-yellow-300 to-amber-400`).
  - "LABS" in lighter weight, tracked-wide, `text-amber-100/80`.
  - Inter font, `font-semibold`.
- **Props**: `size?: number` (default 32), `showWordmark?: boolean` (default true), `className?: string` — so the same component works in the navbar (with wordmark) and footer (mark-only or full).

**Where it's used**:
- Navbar (left side, links to `/`).
- Footer (brand column, larger).
- Route head `<link rel="icon">` → a separate static `/public/favicon.svg` rendering just the alpha-infinity mark in gold.

## Site Structure (single route `/`)

Composed in `src/routes/index.tsx`:

1. **Navbar** (`src/components/sections/Navbar.tsx`) — fixed, transparent → backdrop-blur on scroll. Logo component left; links Services, Stack, Work, Pricing, Contact (smooth-scroll); gold "Get in Touch" CTA; mobile shadcn Sheet.
2. **Hero** (`src/components/ui/animated-shader-hero.tsx`) — WebGL2 cosmic shader recolored to molten gold (bronze → amber → honey, no red/blue terms), CSS gold-gradient fallback if WebGL2 absent. Trust pill "✨ Built by Claude Code & Codex power users". Headline: "AI Labs" / "Ship AI-Native Products". Subtitle on landing pages, websites, AI agents & automations. Two CTAs.
3. **Services** (`Services.tsx`) — 4 glass cards: Landing Pages (Rocket), Websites & Web Apps (Code), AI Agents (Bot), AI Automations (Workflow).
4. **Stack** (`Stack.tsx`) — "Our Stack & Superpowers". Three pillars: Claude Code Mastery (Terminal), OpenAI Codex Power Users (Cpu), Production-Grade Delivery (ShieldCheck). Tech pill strip: Claude • OpenAI • MCP • n8n • Vercel • Supabase.
5. **Process** (`Process.tsx`) — 4-step timeline: Discover → Architect → Build with Claude Code & Codex → Launch & Iterate.
6. **Work** (`Work.tsx`) — 3 case-study cards using verified Unsplash URLs (`photo-1451187580459-43490279c0fa`, `photo-1526374965328-7f61d4dc18c5`, `photo-1519389950473-47ba0277781c`); amber category tags (Landing Page / AI Agent / Automation).
7. **Stats** (`Stats.tsx`) — 50+ Projects · 30+ Clients · 10k+ Hours Automated · 24/7 Support, large gold gradient numbers.
8. **Testimonials** (`Testimonials.tsx`) — 3 glass quote cards, amber stars, gradient author names.
9. **Pricing** (`Pricing.tsx`) — 3 tiers: Landing Page Sprint, Website Build, AI Agent / Automation Retainer. Each with bullet outcomes + "Get a Quote" gold button.
10. **CTA** (`CTA.tsx`) — "Ready to Build Something Infinite?" + "Launch Your Idea" gold button.
11. **Footer** (`Footer.tsx`) — 4 columns (Logo + tagline, Services, Company, Connect with Twitter/LinkedIn/GitHub/Mail lucide icons), bottom: © 2026 AI Labs · www.aurainfinitylabs.com.

## Supporting Files

- `src/hooks/use-reveal.ts` — IntersectionObserver fade-in-up hook.
- `src/styles.css` — matte black tokens (`#0A0907` base, `#111110` alt), gold gradient utilities (`.text-gold-gradient`, `.bg-gold-gradient`), keyframes (`fade-in-down`, `fade-in-up`, `gradient-shift`), animation-delay helpers, Inter font import.
- `public/favicon.svg` — standalone alpha-infinity mark in gold.
- `src/routes/index.tsx` — replaces placeholder; composes all sections; per-route head with title "AI Labs — Ship AI-Native Products", description, og:title/description.

## Locked Palette (no drift)

- Surfaces: `#0A0907` base, `#111110` alt — never pure `#000`.
- Gold gradient text: `from-amber-200 via-yellow-300 to-amber-400`.
- Gold gradient buttons: `from-amber-400 via-yellow-400 to-amber-500`, black text.
- Borders: `border-amber-300/15` → hover `border-amber-300/40`.
- Body: `text-amber-50` / `text-amber-100/75`. Stars/icons: `text-amber-300`. Glow: `shadow-amber-400/25`.

## Acceptance

✓ Custom alpha-∞ logo as a typed SVG React component, used in navbar/footer/favicon  
✓ One continuous gold-gradient stroke fuses α and ∞ into a single mark  
✓ Site sells landing pages, websites, AI agents, AI automations  
✓ Claude Code + Codex mastery has its own dedicated section  
✓ Every gradient stays amber/gold — no red, no cool tones  
✓ All backgrounds matte black variants, never pure `#000`  
✓ WebGL2 shader hero renders + interactive (with CSS gold fallback)  
✓ Typed components, smooth scroll, zero console errors, placeholder index removed
