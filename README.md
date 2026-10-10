# Dovmant website

Marketing site for Dovmant — a programmable lower-limb exoskeleton for locomotion research.
Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Playwright.

See [CLAUDE.md](./CLAUDE.md) for the claims firewall, the design tokens and the "no invented facts" rule.
The claims firewall is enforced by `tests/claims.spec.ts` — clinical or outcome wording fails the build.

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
- Images are slots: `content/images.ts` maps a slot id to a file. While `src` is `null` the page renders generated
  stand-in artwork (`npm run art`) — a temporary visualisation to be replaced by the real shoot. Drop files at
  `public/images/<slot-id>.webp` and set `src`.
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

Optional, for storing investor deck requests:

| Variable                        | Scope       | Purpose                                                                     |
| ------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | all         | Supabase project URL                                                        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | all         | Supabase publishable key                                                    |
| `SUPABASE_SERVICE_ROLE_KEY`     | server only | Server-side access for access-request handling — never expose to the client |

With none of these set, every form logs to the server and the visitor still gets the success state.
See `lib/delivery.ts` and `lib/forms.ts`.

### Enabling the hero video

Video files are not in the repository. Once `public/video/hero.{webm,mp4}` (and the vertical variants) exist, set
`NEXT_PUBLIC_HERO_VIDEO=1`; for the modal film (`public/video/film.mp4`) set `NEXT_PUBLIC_FILM_VIDEO=1`. Until then the
poster/placeholder renders and no 404s are requested.
