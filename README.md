# Dovmant website

Marketing site for Dovmant — an AI-driven lower-limb exoskeleton for rehabilitation and sports performance.
Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Playwright.

See [CLAUDE.md](./CLAUDE.md) for the design tokens, style rules and the "no invented facts" rule.

## Develop

```bash
npm install
npm run dev
```

| Command                              | What it does                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `npm run dev`                        | Dev server on http://localhost:3000                                          |
| `npm run build` / `npm start`        | Production build and server                                                  |
| `npm run lint` · `npm run typecheck` | ESLint · TypeScript                                                          |
| `npm run test`                       | Playwright: screenshots at 375/1280/1440, keyboard and reduced-motion checks |
| `npm run shot-list`                  | Regenerate `docs/shot-list.md` from `content/images.ts`                      |
| `npm run format`                     | Prettier                                                                     |

## Content and images

- All copy lives in `content/*.ts`. Values that are not yet confirmed are marked `[TBD]` — never replace one with a guess.
- Images are slots: `content/images.ts` maps a slot id to a file. While `src` is `null` the page renders a labelled
  placeholder. Drop files at `public/images/<slot-id>.webp` and set `src`.
- `docs/shot-list.md` is the brief for the photographer / 3D artist.
- Video goes to `public/video/` (`hero.webm`, `hero.mp4`, `hero-vertical.*`, `film.mp4`). The poster renders until a
  file exists, so missing video degrades gracefully.

## Deploy (Vercel)

Import the repository in Vercel; the framework preset, build command and output are detected automatically.
No secrets are committed to the repository.

### Environment variables

| Variable               | Scope | Required    | Purpose                                                                            |
| ---------------------- | ----- | ----------- | ---------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | all   | recommended | Absolute base URL used by metadata, sitemap and robots. Defaults to a placeholder. |

Phase 2 (investor data room on Supabase auth + RLS) will add:

| Variable                        | Scope       | Purpose                                                                     |
| ------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | all         | Supabase project URL                                                        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | all         | Supabase publishable key                                                    |
| `SUPABASE_SERVICE_ROLE_KEY`     | server only | Server-side access for access-request handling — never expose to the client |

The contact and data-room forms currently log to the server only (`app/actions/*.ts`); wiring them to a CRM or mail
provider is a phase-2 task and will add its own variables.
