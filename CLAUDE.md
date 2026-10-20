# Dovmant website

Marketing site for Dovmant — a **programmable lower-limb exoskeleton for locomotion research**.
One audience: biomechanics laboratories and the research arms of performance centres.
Swiss-editorial look: light grey ground, near-black type, ONE red accent, red translucent blocks over B&W imagery.

## Commands

- `npm run dev` — dev server
- `npm run lint` · `npm run typecheck` · `npm run build` — run all three before every commit
- `npm run test` — Playwright: screenshots (375/768/1280/1440), keyboard, reduced motion, axe, claims firewall
- `npm run art` — regenerate the stand-in artwork in `public/images/art`
- `npm run shot-list` — regenerate `docs/shot-list.md` from `content/images.ts`
- `npm run format` — prettier

Next.js here is a newer major than most training data: read `node_modules/next/dist/docs/` before using unfamiliar
APIs (see AGENTS.md).

## CLAIMS FIREWALL — overrides everything below

The site describes what the instrument **lets a laboratory measure and set**, never what it does to a person.
Statements on the site define intended use and therefore the regulatory class of the device.

**Never**, on the site, in the deck, in social posts or in email:

- rehabilitation, therapy, therapist, patient, indications, therapy protocol, injury prevention, recovery,
  return to play
- improves outcomes, reduces injury risk, restores gait, speeds return to competition
- any outcome figure without a citation to a published third-party study
- "better than" comparisons with a named competitor
- "new", "breakthrough", "revolutionary" about the device

**Allowed**

- engineering parameters with units
- what the instrument lets you measure or set
- the application: an instrument for studying locomotion in healthy participants and athletes
- "the device was used in study X", citing someone else's publication without interpreting its result

`tests/claims.spec.ts` enforces this against `content/` and against every rendered page. Phrases that must contain a
banned word in order to deny it (the Research Use Statement, the footer notice, the "what we do not claim" block)
are allow-listed there by exact phrase.

**Mandatory footer notice**, on every page, 13/18, `ink-muted` — wording pending FDA regulatory counsel:
`researchUseNotice` in `content/site.ts`.

### Replacement table

| Old                                                 | Use instead                                                 |
| --------------------------------------------------- | ----------------------------------------------------------- |
| AI-driven exoskeleton for rehabilitation and sports | Programmable lower-limb exoskeleton for locomotion research |
| Rehabilitation                                      | (section removed)                                           |
| Sports performance                                  | Performance research                                        |
| Patient                                             | Participant                                                 |
| Therapist / clinician                               | Investigator / research staff                               |
| Therapy protocol                                    | Experimental protocol (written by the lab, not by us)       |
| Indications                                         | Research applications                                       |
| Clinician dashboard                                 | Investigator console                                        |
| Metrics (effectiveness figures)                     | Specifications (engineering parameters)                     |
| Book a demo                                         | Request a lab evaluation                                    |
| Medical Disclaimer                                  | Research Use Statement                                      |

## Disclosure policy

Technical parameters and commercial terms are **not published on the site**. Torque, loop rate, latency, the
telemetry schema, battery figures, participant limits, price and lead time live in a specification and a
quotation issued to a named institution. At this stage those numbers are the work itself, and an open table
hands them to a competitor.

The site says the instrument exists, what it lets a laboratory do, and how to ask for the document. Pages name
the _headings_ the specification covers, never the values. A figure may appear on the site only when the company
decides it should be public — and then it is a measured value, never an estimate.

## Other hard rules

1. **No invented facts.** No parameters, certifications, partners, studies, people, prices or dates until confirmed.
   An empty field is cheaper than a wrong one. The site now carries no `[TBD]` at all: where a fact was missing the
   copy was rewritten to say what is true instead — the document is issued on request, the horizon rather than the
   date, the name once the person has agreed. If you are about to add a `[TBD]`, write the honest sentence instead.
2. **Never reuse the reference's** (Astro Traffic) texts, logo, names or photos.
3. No colours outside the tokens, no shadows, no gradients (except the scrim under text on video), no rounded cards,
   no emoji, no icons except thin arrows (→ ↗ ↘).
4. All copy lives in `/content/*.ts`.

## Page map

Nav: System · Specifications · Research · Performance · Roadmap · Investors · About. Header CTA:
"Request a lab evaluation ↘". Seven items is the ceiling at 1280 — the next page goes in the footer.

| Route                                             | Role                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `/`                                               | Short fork into the two pages that matter                                                             |
| `/system`                                         | What the instrument is made of and what is open to change                                             |
| `/specifications`                                 | What the specification covers and how to request it — the document itself goes to a named institution |
| `/research`                                       | Partnership programme, responsibility split, three routes — the conversion page                       |
| `/performance`                                    | Side branch for performance groups, same regulatory frame                                             |
| `/about`, `/contact`, `/news`                     | `/news` is empty, out of the nav and out of the sitemap until it has entries                          |
| `/roadmap`                                        | Five phases with a status per item; dates stay [TBD] because a published date is a promise            |
| `/investors`                                      | Thesis, why now, market with a source column, model, traction, round, team, deck, contact             |
| `/research-use`, `/privacy`, `/terms`, `/cookies` | `/terms` data ownership must match the split on `/research`                                           |
| `/styleguide`                                     | Internal, noindex                                                                                     |

Removed in v2: `/rehabilitation`, `/investors/data-room`, testimonials, partner logos, the metrics block.
`next.config.ts` redirects the old URLs.

## Design tokens (defined in `app/globals.css`)

Light (default): `surface-100 #F2F2F2` page · `surface-200 #E8E8E8` panels · `surface-300 #DCDCDC` image
placeholders and row hover · `line #CFCFCF` hairlines and field underlines · `ink #111111` · `ink-muted #5C5C5C` ·
`accent #C1121F` (the only accent) · `on-accent #FFFFFF` · `accent-overlay rgba(193,18,31,.88)` (multiply over B&W
imagery) · `steel #8C8C8C` (diagrams, never text).
Dark (`data-theme="dark"`, video modal only): 100 #0E0E0E · 200 #1A1A1A · 300 #262626 · line #333333 ·
ink #F2F2F2 · muted #A3A3A3 · accent #E5383B · on-accent #0E0E0E.

Type: Display = Inter Tight (variable) UPPERCASE, tracking −0.03em, leading .9–.95 (hero 168 · h1 88 · h2 56 ·
step 40 · step no. 64 accent; fluid via clamp, hero ≥ 48px mobile). Text = Inter (variable): lead 20/26 ·
FAQ 24/30 · body 16/24 · small 13/18 · nav 15/20 · label 12/16.
Spacing 8/16/24/40/48/96; gutters 16 mobile / 40 desktop; section 48 / 96; 12-col grid, max 1440.
Radius 0 everywhere; 999px buttons only; 24px only for the footer panel.

## Style rules

- Exactly one accent word group per headline. Max two weights per headline.
- A 12–16px solid square marker opens text blocks and marks section corners. Squares only.
- Photos B&W (`grayscale(1)`); colour only from one `accent-overlay` block over the lower third to half.
  One overlay per section.
- Rows separated by hairlines, not boxes. Form fields = label + underline. Links are underlined text.
- Motion: reveal fade+24px 400ms `cubic-bezier(.22,1,.36,1)`, 60ms stagger, once; overlays scaleY from the bottom
  600ms; headlines line by line 500ms/80ms; hover = underline, row tint, image 1.02. All off under
  `prefers-reduced-motion`.
- A11y: WCAG 2.1 AA, contrast ≥ 4.5:1, errors = square marker + text, focus ring 2px ink offset 2px, keyboard
  support for nav, accordion and modal.

## Forms

One component (`components/sections/EnquiryForm.tsx`) and one Server Action (`app/actions/enquiry.ts`), driven by
`lib/forms.ts`: lab evaluation, quotation, performance evaluation, deck, general. Schemas are derived from the field
definitions so the two cannot drift. Delivery goes through `lib/delivery.ts` (Resend and Supabase over REST, no
SDKs); with nothing configured the submission is logged and the visitor still gets the success state.

## Image system

`content/images.ts` → `<ImageSlot id aspect alt overlay />`. A slot renders `src` (real photography) if set,
otherwise `art` — stand-in artwork at `/public/images/art/<slot-id>.svg` from `npm run art`.

The artwork is a temporary visualisation: technical line illustrations of the device on a schematic figure, lab
scenes, joint schematics, an exploded layout, the console wireframe. **Replace it with real photography before
launch** — set `src` and the artwork is ignored.

Shooting rule: no clinical dressing. No gowns, couches, parallel bars, hospital corridors or anyone being helped to
walk. Photograph a laboratory — markers, force plates, capture cameras, monitors with traces, cables.
`docs/shot-list.md` carries the brief with a shooting priority; priority 1 covers `/specifications`, which goes live
first.

## Verified (last run)

- `lint` · `typecheck` · `build` clean; Playwright 280 checks pass — screenshots at 375/768/1280/1440, keyboard,
  reduced motion, axe (WCAG 2.1 AA) on every page, the claims firewall, and the integrity suite: dead links,
  missing anchors, broken images, heading order, console errors, horizontal overflow, a painted accent block,
  one hero image per page, and no section mixing photography with stand-in artwork. CI runs all of it.
- Lighthouse with the real renders in place: performance `/` 91 · `/specifications` 93 · `/roadmap` 95 ·
  `/investors` 96 · `/research` 99; accessibility, best practices and SEO 100 on all five. Simulated LCP is
  3.5 s on `/`, up from 3.1 s with the drawn hero — a photograph is heavier and Lantern charges it to the
  preloaded hero image. Measured LCP on a throttled device profile was 0.66 s before the swap.
- Token contrast: every text pair ≥ 4.5:1. `steel` is 3.0:1 — graphics only.

## Open — needs input that only the company has

Publication blockers: legal review of the Research Use Statement, the footer notice, the four legal pages and the
responsibility split. Parameters are no longer a blocker for the site — they went into the document that is
issued on request (see the disclosure policy above), though they are still needed for that document and for a
quotation.

Live: dovmant.tech. Entity Dovmant LLC, 9300 E Mineral Ave, Suite 318, Centennial, CO 80112. Mailbox
info@dovmant.tech, which is also the fallback named in every form confirmation while delivery is unwired.

Before launch but not blocking: the shoot (priority 1 first) · hero video · mode names taken from the firmware
(the site no longer says they are provisional, so correct them before anyone quotes them) · team and advisors ·
three or more real milestones before a timeline goes up · EIN, UEI and SAM registration, which procurement
currently answers with "supplied with the quotation".

Deliberately empty: partner logos, testimonials, the publications table, any effectiveness figure, the data room.
