# Layout audit — brief

Role: design engineer checking a built page for geometry defects. Not taste, not copy — collisions, alignment,
truncation and anything that makes the page look broken rather than designed.

Scope: every route in `tests/pages.ts`, at 375, 768, 1280 and 1440, with motion settled and lazy images loaded.
Run it on the built site, not the dev server: fonts, image sizes and layout shift differ.

Severity: **blocker** (content unreadable or lost) · **major** (visible collision or break at a supported width) ·
**minor** (alignment or rhythm).

## 1. Collisions

- No text sits on top of other text. Overlap is only ever deliberate: type over an image band, where a scrim
  guarantees contrast.
- No block covers another. Check the sticky header against anchor targets, the mobile CTA bar against the last
  section, the arrow square against the caption underneath it.
- Fixed and sticky elements do not hide content at any scroll position, including at the very bottom of the page.
- Nothing overlaps the focus ring: tab through and watch for a ring clipped by an `overflow: hidden` parent.

## 2. Containment

- Nothing crosses the page gutter: 16px at mobile, 40px from 768 up. The only exceptions are the full-bleed bands,
  which must reach both edges exactly, with no 1px seam.
- No horizontal scrollbar at any width.
- Content stays inside its container: no element whose right edge exceeds its section's right edge.
- Long words, long emails and long slot ids do not push a card or a table wider than its column.

## 3. Truncation and clipping

- No text is cut by an `overflow: hidden` parent. Headlines are the usual victim: the clip mask used for the
  reveal animation must be taller than the glyphs, including descenders.
- No element is stuck at its animation start state — a block at `translateY(105%)` or `opacity: 0` after the page
  has settled is a defect, not an animation.
- Tables do not clip their last column; galleries do not clip their last card at the right edge.

## 4. Alignment

- Section content starts on the same left edge down the whole page. One block indented by a stray padding is the
  most common defect and the easiest to miss.
- Columns in a grid share baselines where they are meant to: a heading beside a paragraph, a number beside a title.
- Hairlines run the full width of their row and meet the gutter.
- Captions sit at a consistent distance below their image; spacing follows 8 / 16 / 24 / 40 / 48 / 96.

## 5. Images

- No image is stretched: rendered aspect ratio matches the file's, or the fit is `cover` and the crop is
  deliberate.
- Every image frame is filled — no letterbox bars from `contain` unless the background matches the file's own.
- A crop never lands somewhere embarrassing. Check every image band at every width before trusting `object-cover`.
- Images that sit side by side are the same height and share a baseline.

## 6. Rhythm

- Section spacing is consistent: 96 desktop, 48 mobile, with no double gap where two sections meet.
- No section is visually empty — a heading with nothing under it reads as a loading failure.
- The page does not end abruptly: the footer is reached after a closing section, not after a table.

## Method

Measure first, then look.

- Geometry: walk the DOM, collect bounding boxes, and report overlaps between text-bearing elements that are not
  ancestors of one another, elements exceeding their container, elements clipped by a hidden overflow, and images
  whose rendered aspect differs from the file's.
- Then read the screenshots at all four widths, in order, as a visitor would.

## Output

A table of findings ordered by severity: page, width, element, what happens, what should happen. Then the fixes
applied, and anything left alone with the reason.
