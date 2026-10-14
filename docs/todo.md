# Fix list

Found by reading the repository and the current build, not by guesswork. Ordered by what it costs us to leave
alone. Size: **S** under an hour · **M** half a day · **L** a day or more.
"Blocked" means the work cannot start until someone outside this repository answers — see
`docs/site-brief-answers.md` for who.

---

## 1. Visible defects

**1.1 The detail row on `/system` mixes photographs with line drawings.** S
Four frames side by side: a real macro of the hip actuator, a drawn schematic, a real macro of the cuff, a drawn
schematic. The two registers next to each other read as a broken page rather than as a style.
_Fix now:_ show only the two real frames until the others are shot.
_Fix properly:_ shoot `detail-sensors` and `sync-port-detail` — both already priority 1 and 2 in the shot list.

**1.2 The home gallery is entirely drawings while the hero above it is a photograph.** M
"Research scenarios" carries five line-art lab scenes directly under a real render. The same mismatch as 1.1,
over a whole section.
_Fix now:_ a decision — either drop the gallery to the two or three scenarios we can illustrate honestly, or
keep it and accept the mixed register until the lab shoot.
_Blocked on:_ the laboratory shoot (14.3 in the brief).

**1.3 `/roadmap` and `/specifications` share the same hero image.** S
`page-hero-roadmap.webp` is a copy of `page-hero-specifications.webp`. Two pages with an identical hero look
like a mistake to anyone who moves between them.
_Fix:_ crop a different angle from the delivered renders, or shoot the slot.

**1.4 The renders are on near-black, which pushes the accent block out of its blend mode.** S here, theirs there
A dark frame makes `mix-blend-multiply` invisible, so those slots now paint the block instead of multiplying it.
It works, but it is a second visual rule to maintain.
_Fix:_ re-render the same angles on neutral grey `#E6E6E6`, then delete `tone: "dark"` from the registry.
_Blocked on:_ whoever renders.

**1.5 Seven items in the navigation at 1280.** S
Fits, with the gap tightened from 40px to 24px below 1280. Watch it: an eighth item will not fit, and the next
page to be added should go in the footer instead.
_No action, recorded so the next person does not add one._

## 2. Stale documentation

**2.1 `CLAUDE.md` is behind the build.** S
No `/roadmap` in the page map; the navigation is described as five items when it is seven; "Playwright 188
checks" when there are 272; the Lighthouse figures predate the real renders and the two new pages.

**2.2 `public/llms.txt` does not know about `/roadmap`.** S
It also still describes `/investors` as a single strip. Language models quote this file; a stale page list comes
back as a wrong answer about the company.

**2.3 `docs/content-questionnaire.md` says 114 placeholders.** S
The roadmap and the expanded investor page added their own, so the count is now higher. Either regenerate the
number or drop it — a wrong count makes the document look unmaintained.

**2.4 `docs/reference-review.md` predates both new pages.** S
Harmless, but it claims to describe the site as built.

## 3. Code that no longer earns its place

**3.1 `content/about.ts` still exports `investors`.** S
The investor copy moved to `content/investors.ts` and nothing imports the old export. Two sources of truth for
the same page is how a page ends up with last month's wording.

**3.2 `WearGallery` is a name from the deleted version of the site.** S
It renders research scenarios now. Rename to `ScenarioGallery` so the file says what it does.

**3.3 `StatGrid` is only used by the styleguide.** S
It was the metrics block, which v2 replaced with `SpecCards`. Either delete it or state in the styleguide that
it is kept deliberately as a pattern.

**3.4 `stripRich` in `lib/rich.ts` is exported and unused.** S
Left over from when headings carried a screen-reader copy. Delete.

**3.5 `PortraitRow` renders nothing until there is a team.** S
Correct as written — recorded so nobody deletes it as dead code.

## 4. Measurement and checks

**4.1 Lighthouse has not been re-run since the real renders and the two new pages landed.** S
The last figures in `CLAUDE.md` are from the build before either. The hero is now a photograph rather than an
SVG, which changes the picture — probably for the better, but it is unmeasured.

**4.2 No check that a page carries its own hero image.** S
1.3 would have been caught by a test asserting that no two pages share a hero slot.

**4.3 No check that real photography and stand-in artwork are not mixed inside one section.** M
1.1 and 1.2 are the same defect twice. A test over the registry could flag any section whose slots are not all
delivered or all pending.

## 5. Content waiting on an answer

Not defects — the pages are built and will fill themselves the moment the values arrive.

**5.1 `/specifications`: 45 placeholders.** Blocked on engineering and commercial.
**5.2 `/roadmap`: 22.** Blocked on which dates may be published.
**5.3 `/investors`: 18.** Blocked on the market sources, the model and the round.
**5.4 `/system`: 15.** Blocked on the telemetry schema and the control interface.
**5.5 Legal pages: 14.** Blocked on counsel.
**5.6 Response time on forms: five places.** One decision — the brief proposes two working days.
**5.7 Company details: 6.** Entity, address, phone, mailboxes.

## 6. Worth doing, not urgent

**6.1 An accessibility statement.** S — the evidence exists: axe on every page in CI, contrast measured,
keyboard paths tested, motion disabled under `prefers-reduced-motion`. Drafted in the answers document.

**6.2 Analytics.** S — cookieless, so the cookie page stays as it is. Decide first (17.1), then wire it.

**6.3 A reference dataset and a methods note.** L and theirs to write, but they are the two documents most
likely to convert a laboratory, and the site has nowhere to put them yet.

**6.4 `Product` structured data.** S — after the specification carries real values. `Organization` is already live.

---

## Suggested order

1. Everything in §2 and §3 — stale documents and dead code, half a day in total, no dependencies.
2. 1.1 and 1.3 — the two visible mismatches, fixable today from the renders already delivered.
3. 4.1, then 4.2 and 4.3 so the same defects cannot return.
4. 1.2 and 1.4 once the shoot and the re-render are scheduled.
5. §5 as the answers arrive.
