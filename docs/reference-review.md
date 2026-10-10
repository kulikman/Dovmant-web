# Reference review

The reference screenshots (an unrelated agency site) were used for composition only. Nothing from them — copy, logo,
names, photography — is reused. This file records what was borrowed, what was corrected, and where the site
deliberately departs from the reference.

Rewritten after the v2 repositioning: the site is now a research instrument's sales material for one audience, so
several patterns from the reference no longer have a place here.

## Patterns taken from the reference

| Reference pattern                                                                          | Where it lives here                                                                       |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Oversized tight uppercase wordmark bottom-left, media frame on the right                   | `components/sections/Hero.tsx`                                                            |
| Red translucent block over the lower part of a B&W frame, `mix-blend-multiply`             | `components/media/RedOverlay.tsx`                                                         |
| Black square with a white ↗ at the overlay corner, opening a film                          | `components/ui/ArrowSquare.tsx`, `components/media/VideoModal.tsx`                        |
| Rotated vertical label on the right edge                                                   | `Hero.tsx` ("LOCOMOTION RESEARCH")                                                        |
| Small thumbnail in the empty top-left corner                                               | `Hero.tsx`                                                                                |
| Numbered rows 01–04: accent number, uppercase title, small note right, hairlines           | `components/sections/NumberedSteps.tsx`                                                   |
| Flat grey panels, large value top-left, label bottom-left                                  | `components/sections/SpecCards.tsx` — engineering parameters, never effectiveness figures |
| Horizontal gallery bleeding off the right edge                                             | `components/sections/WearGallery.tsx`                                                     |
| FAQ: open question in accent with its answer, closed in ink, hairlines                     | `components/sections/FAQAccordion.tsx`                                                    |
| Stepped headline + underline-only fields + accent arrow submit                             | `components/sections/FaqContact.tsx`, `components/ui/UnderlineInput.tsx`                  |
| Rounded (24px) footer panel with wordmark, address, link columns and an accent image block | `components/layout/Footer.tsx`                                                            |

## Differences found and fixed

| #   | Difference                                                                                       | Fix                                                                               |
| --- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 1   | Hero wordmark far smaller than in the reference, where it fills roughly half the page width      | `--text-hero` raised to `clamp(48px, 12.5vw, 168px)`                              |
| 2   | Headline clip mask cut the bottom of the glyphs                                                  | Mask padding raised to `pb-[0.16em] -mb-[0.16em]` in `SectionHeading`             |
| 3   | Reference opens the composition with a small thumbnail top-left; ours had an empty corner        | Added a thumbnail slot in the hero                                                |
| 4   | Horizontal scrollers snapped their first card flush to the viewport edge, eating the 40px gutter | `scroll-pl-[var(--gutter)]` on the galleries                                      |
| 5   | Red overlays on the first screen only appeared after hydration (they also delayed LCP)           | CSS-driven `overlay-in` variant above the fold; the JS variant stays further down |
| 6   | Header showed the outline pill and the Menu button together at 375px                             | Pill hidden below `md`; the mobile sticky CTA covers that case                    |
| 7   | At 768px the hero media filled a 4/5 frame across the full width                                 | `md:aspect-16/10` for the hero frame                                              |
| 8   | Horizontal scrollers were not reachable from the keyboard (axe, mobile widths)                   | `tabIndex`, `role="region"` and a label on each scroller                          |
| 9   | Scenario cards cropped a 3:2 lab frame into a 4:5 card                                           | The gallery now uses each slot's own aspect and wider cards                       |

## Deliberate departures

- **Testimonials and partner logos are gone, not stubbed.** A row of portraits with quotes and no real user, or a
  logo row with no real partner, is fabrication. They return when there is someone real to quote.
- **The metrics block is a specification block.** The reference fills that row with large result figures; publishing
  placeholder effectiveness numbers is exactly the signal this company must not send, so the row carries engineering
  parameters with units.
- **Imagery.** The reference carries finished photography; every frame here is a stand-in illustration until the
  shoot. The accent block therefore sits on line art rather than on a photograph, and `grayscale(1)` only takes
  effect once a real file exists.
- **Vertical rhythm.** The reference stacks sections tightly with overlapping headlines. Here sections are separated
  by the 96/48px scale, which reads calmer and keeps the grid predictable with placeholder content.
- **One accent word group per headline** is applied strictly, including where the reference colours a whole line.
- **Copy** is neutral and factual, and every unconfirmed value is `[TBD]`. The reference's claims and numbers are not
  mirrored — see the claims firewall in `CLAUDE.md`.

## Still open

- Re-run this comparison once real photography, renders and the hero video land — the overlay-on-photo effect and the
  grayscale treatment cannot be judged against line art.
- The specification PDF and the research PDFs are placeholders and resolve to nothing.
