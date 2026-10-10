# Visual and interaction audit — brief

Role: senior design engineer auditing a live build. Report defects, not impressions. Every finding needs the page,
the element, what happens, what should happen, and the severity. A finding you cannot reproduce is not a finding.

Severity: **blocker** (the page is broken or a visitor is misled) · **major** (a task cannot be completed or the
layout breaks at a supported width) · **minor** (polish).

Scope: every route in `tests/pages.ts`, at 375, 768, 1280 and 1440, in light theme, plus the dark video modal.

## 1. Links and navigation

- Every internal link resolves with 200. No link to a removed route, no link to `#`, no empty `href`.
- Every in-page anchor (`#how-it-works`, `#evaluation`, `#quotation`, `#faq`, `#deck`) has a matching element, and
  the sticky header does not cover the target after the jump.
- Header nav marks the current page. The wordmark returns to `/`. Footer columns match the live page map.
- Nothing promises a file or a document that does not exist.
- Outbound links, if any: correct `rel`, and they say where they go.

## 2. Buttons and controls

Exercise each one, do not just look at it:

- Header CTA, mobile menu open/close/Escape/navigate, sticky mobile CTA.
- FAQ accordion: opens, closes, one at a time, `aria-expanded` follows, reachable by keyboard.
- Video modal: the arrow square opens it, Escape and the close button shut it, focus is trapped while open,
  focus returns to the opener, body does not scroll behind.
- Gallery arrows scroll the row; the row itself is focusable and scrolls with the keyboard; nothing is cut at the
  right edge at any width.
- Every form: submit empty (errors appear, are announced, and are not conveyed by colour alone), submit valid
  (success state replaces the form), required markers match the schema, labels are bound to inputs, the select has
  the options the brief lists.
- Disabled and pending states exist and are visible.

## 3. Text

- Spelling, grammar, consistent capitalisation of headings and labels; one accent word group per headline.
- The claims firewall holds on every rendered page (see `CLAUDE.md`), including the footer notice.
- No internal note is visible to a visitor. `[TBD]` is fine; "fill this before launch" is not.
- Numbers, units and formats are consistent (`N·m`, `Hz`, `kg`, `5–6` with an en dash).
- Metadata: unique title and description per page, correct OG image, `lang` on `<html>`, one `h1` per page, heading
  levels do not skip.
- Nothing left from an earlier version of the site.

## 4. Images and media

- Every `<img>` has loaded (`naturalWidth > 0`), has meaningful `alt`, and keeps its aspect ratio — no stretching.
- Image slots that have no file render the stand-in, not an empty grey box or a broken icon.
- The accent overlay lands on the lower part of the frame and never covers the subject or any text.
- The hero poster paints before the video; a missing video file never produces a console error or a 404.
- Nothing shifts as media loads (CLS 0).

## 5. Motion

- Reveal on enter: fade plus 24px rise, once, staggered; nothing animates twice or on every scroll.
- Headline lines clip-reveal without cutting glyphs; accent overlays grow from the bottom.
- Hover: link underline, row tint, image scale inside its frame with no layout shift.
- With `prefers-reduced-motion: reduce` everything is static and all content is visible — nothing stays at opacity 0.
- No animation blocks the first paint; nothing janks on scroll.

## 6. Layout and responsive

- 375 / 768 / 1280 / 1440: no horizontal scroll, no overlap, no text under the sticky header or the mobile CTA.
- Gutters 16 / 40, section rhythm 48 / 96, 12-column grid, content capped at 1440.
- Tap targets at least 44×44 on touch widths; focus ring visible on every interactive element.
- Long words and long `[TBD]` strings do not break tables or cards.

## 7. Console and network

- No console errors or warnings, no 404s, no hydration mismatch, no duplicate requests.

## Output

A table of findings ordered by severity, each with page, element, actual, expected. Then the fixes applied, and
anything deliberately left alone with the reason.
