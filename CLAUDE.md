# Dovmant website

Marketing site for Dovmant: AI-driven lower-limb exoskeleton for rehabilitation and sports performance.
Swiss-editorial look: light grey ground, near-black type, ONE red accent, red translucent blocks over B&W imagery.

## Commands

- `npm run dev` — dev server
- `npm run lint` · `npm run typecheck` · `npm run build` — run all three before every commit
- `npm run test` — Playwright (screenshots 375/768/1280/1440, reduced-motion, keyboard)
- `npm run shot-list` — regenerate `docs/shot-list.md` from `content/images.ts`
- `npm run format` — prettier

Next.js here is a newer major than most training data: read `node_modules/next/dist/docs/` before using unfamiliar APIs (see AGENTS.md).

## HARD RULES

1. **No invented facts.** No metrics, certifications, partners, studies, people, prices, dates. Use `[TBD]` placeholders everywhere a fact is needed.
2. **Never reuse the reference's** (Astro Traffic) texts, logo, names or photos.
3. **Never generate/fetch stock or AI images of the exoskeleton.** Placeholders only via `ImageSlot`.
4. No colors outside tokens, no shadows, no gradients (except the dark scrim under text on video), no rounded cards, no emoji, no icons except thin arrows (→ ↗ ↘).
5. All copy lives in `/content/*.ts`.

## Design tokens (defined in `app/globals.css`)

Light (default): `surface-100 #F2F2F2` page · `surface-200 #E8E8E8` cards/panels · `surface-300 #DCDCDC` image placeholders/row hover · `line #CFCFCF` hairlines/field underlines · `ink #111111` · `ink-muted #5C5C5C` · `accent #C1121F` (only accent) · `on-accent #FFFFFF` · `accent-overlay rgba(193,18,31,.88)` (multiply over B&W imagery) · `steel #8C8C8C` (diagrams, never text).
Dark (`data-theme="dark"`, ONLY video modal + investor data room): 100 #0E0E0E · 200 #1A1A1A · 300 #262626 · line #333333 · ink #F2F2F2 · muted #A3A3A3 · accent #E5383B · on-accent #0E0E0E.

Type: Display = Inter Tight 300/500/600 UPPERCASE, tracking −0.03em, leading .9–.95 (hero 120 · h1 88 · h2 56 · step 40 · step no. 64 accent · metric 88; fluid via clamp, hero ≥ 48px mobile). Text = Inter 400/500 (lead 20/26 · FAQ 24/30 · body 16/24 · small 13/18 · nav 15/20 · label 12/16).
Spacing 8/16/24/40/48/96; gutters 16 mobile / 40 desktop; section 48 / 96; 12-col grid, max 1440.
Radius 0 everywhere; 999px buttons only; 24px only for outer page frame and footer panel.

## Style rules

- Exactly one accent word group per headline. Max two weights per headline (light + medium).
- 12–16px solid square marker (accent or ink) opens text blocks / marks section corners. Squares only.
- Photos B&W (`grayscale(1)`); colour only from one `accent-overlay` block over lower third–half. One overlay per section.
- Rows separated by hairlines, not boxes. Form fields = label + underline, no borders. Links are underlined text.
- Header CTA = outline pill "Request a demo ↘". Form submit = accent arrow →.
- Motion: reveal fade+24px 400ms `cubic-bezier(.22,1,.36,1)` 60ms stagger once; overlays scaleY 0→1 from bottom 600ms; headlines line-by-line clip 500ms/80ms; hover = underline, row tint, image 1.02. No bounce. All off under `prefers-reduced-motion`.
- A11y: WCAG 2.1 AA, contrast ≥ 4.5:1, errors = text + marker (accent is red), focus ring 2px ink offset 2px, keyboard support for nav/accordion/modal.

## Image system

`content/images.ts` registry → `<ImageSlot id aspect alt overlay />`. `src: null` shows a `surface-300` placeholder with id + description. Files go to `/public/images/<slot-id>.(webp|jpg)`. Keep `docs/shot-list.md` in sync (`npm run shot-list`).

## Status

Step 1 scaffold done. See plan: scaffold → base components + /styleguide → home → inner pages + /investors → verify → Vercel prep.
