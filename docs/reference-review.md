# Reference review — home page

The reference screenshots (an unrelated agency site, used for composition only) were compared against
`screenshots/desktop/home.png` and `screenshots/mobile/home.png`. Nothing from the reference — copy, logo,
names, photography — is reused; only layout patterns and techniques are.

## Patterns taken from the reference

| Reference pattern                                                                          | Where it lives here                                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Oversized tight uppercase wordmark bottom-left, media frame on the right                   | `components/sections/Hero.tsx`                                           |
| Red translucent block over the lower part of a B&W frame, `mix-blend-multiply`             | `components/media/RedOverlay.tsx`                                        |
| Black square with a white ↗ at the overlay corner, opening a film                          | `components/ui/ArrowSquare.tsx`, `components/media/VideoModal.tsx`       |
| Rotated vertical label on the right edge                                                   | `Hero.tsx` ("EXOSKELETON")                                               |
| Small thumbnail in the empty top-left corner                                               | `Hero.tsx` (`detail-knee-actuator` slot)                                 |
| Numbered rows 01–04: accent number, uppercase title, small note right, hairlines           | `components/sections/NumberedSteps.tsx`                                  |
| Flat grey metric cards, huge number top-left, label bottom-left, note top-right            | `components/sections/StatGrid.tsx`                                       |
| Portrait row bleeding off the right edge, headline between portraits, one overlay          | `components/sections/Testimonials.tsx`                                   |
| Team portraits of mixed heights, bottom-aligned, role captions                             | `components/sections/PortraitRow.tsx`                                    |
| FAQ: open question in accent with its answer, closed in ink, hairlines                     | `components/sections/FAQAccordion.tsx`                                   |
| Stepped headline + underline-only fields + accent arrow submit                             | `components/sections/FaqContact.tsx`, `components/ui/UnderlineInput.tsx` |
| Rounded (24px) footer panel with wordmark, address, link columns and an accent image block | `components/layout/Footer.tsx`                                           |

## Differences found and fixed

| #   | Difference                                                                                                    | Fix                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | Hero wordmark far smaller than in the reference, where it fills roughly half the page width                   | `--text-hero` raised from `clamp(48px, 11vw, 120px)` to `clamp(48px, 12.5vw, 168px)`                |
| 2   | Headline clip mask cut the bottom of the glyphs                                                               | Mask padding raised to `pb-[0.16em] -mb-[0.16em]` in `SectionHeading`                               |
| 3   | Reference opens the composition with a small thumbnail top-left; ours had an empty corner                     | Added a thumbnail slot in the hero                                                                  |
| 4   | Horizontal scrollers snapped their first card flush to the viewport edge, eating the 40px gutter              | `scroll-pl-[var(--gutter)]` on the wear gallery, testimonials and portrait row                      |
| 5   | Red overlays on the first screen only appeared after hydration (they also delayed LCP)                        | CSS-driven `overlay-in` variant used above the fold; the JS variant stays for sections further down |
| 6   | Header showed the outline pill and the Menu button together at 375px                                          | Pill hidden below `md`; the mobile sticky CTA covers that case                                      |
| 7   | At 768px the hero media filled a 4/5 frame across the full width and pushed everything down                   | `md:aspect-16/10` for the hero frame                                                                |
| 8   | Fully accent-coloured one-word headings on `/investors` read heavier than the reference's single accent group | Reworded to `MARKET SIZE`, `OUR TRACTION`, `THE ROADMAP`, `THE TEAM`                                |

## Deliberate departures

- **Imagery.** The reference carries finished photography; every frame here is an `ImageSlot` placeholder until the
  real device is shot. The red overlay therefore sits on flat grey rather than on a B&W photograph, and `grayscale(1)`
  only takes effect once a file exists.
- **Vertical rhythm.** The reference stacks sections tightly with overlapping headlines. Here sections are separated by
  the 96/48px scale from the brief, which reads calmer and keeps the grid predictable with placeholder content.
- **One word per headline in accent** is applied strictly, including where the reference colours a whole line.
- **Sticky schematic** in "How it works" is an abstract node diagram, not a product render — no imagery may be invented.
- **Copy** is neutral and factual; everything unconfirmed is `[TBD]`. The reference's claims and numbers are not mirrored.

## Still open

- Re-run this comparison once real photography, renders and the hero video land — the overlay-on-photo effect and the
  grayscale treatment cannot be judged against placeholders.
- `/investors` deck link and the research PDF links are placeholders and resolve to nothing.
