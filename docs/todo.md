# Task list

State on 20 October 2026. The site is live at dovmant.tech, 15 pages, no placeholders left in the copy,
280 checks passing. What follows is what stands between that and a site the company can point a laboratory at.

**Owner** says who can do it: **me** — in the repository · **you** — a decision or a fact · **counsel** ·
**render** — whoever makes the renders and shoots · **engineering** — whoever measures.
**Size:** S under an hour · M half a day · L a day or more.

---

## 1. Before the site is shown to anyone outside the company

**1.1 Form submissions reach nobody.** S · BLOCKED ON YOU
`RESEND_API_KEY` is not set, so an enquiry is written to the Vercel runtime log and the visitor is told it was
received. The confirmation names `info@dovmant.tech` as a fallback, which is a patch, not a fix.

My half is done: `tests/delivery.spec.ts` exercises the path against a stubbed provider and proves it posts to
Resend with the configured addresses, carries every field the visitor filled, reports false when nothing is
configured, and raises rather than swallows a provider error. The first real enquiry will not be the first run of
this code.

Yours: a Resend account, a verified sending domain, then three variables —

```
npx vercel env add RESEND_API_KEY production
npx vercel env add CONTACT_FROM_EMAIL production   # e.g. site@dovmant.tech, on the verified domain
npx vercel env add CONTACT_TO_EMAIL production     # info@dovmant.tech
npx vercel --prod --force                          # variables are read at build time
```

**1.2 ~~The legal pages are published drafts and the domain is open.~~ DONE (search) · counsel still to resolve**
The site is closed to search: every page carries `noindex, nofollow`. Crawling stays allowed deliberately — a
`robots.txt` disallow can leave an already-indexed URL listed without a snippet, whereas a crawled page carrying
`noindex` is removed. Both the metadata and the note in `app/robots.ts` are lifted together once counsel signs
off. The pages remain reachable by direct link, which is what you asked for.

**1.3 ~~`ANTHROPIC_API_KEY` sits in the Vercel project.~~ CLOSED · kept at your request**
Left in place. It is not read by this site.

## 2. Imagery

**2.1 Six drawn placeholders are visible on live pages.** M · render
Thirteen of twenty-four slots are still stand-in drawings; six of them render: one each on `/system`,
`/investors` and `/about`, two each on `/research` and `/performance`. The home page and `/specifications` are
fully on real renders.

**2.2 `detail-sensors` is the last priority-1 frame outstanding.** S · render
A macro of a sensor on its mount. Everything else at priority 1 has been delivered.

**2.3 The laboratory scenes do not exist.** L · you and render
`lab-gait-trial`, `lab-instrumentation`, `lab-console`, `transparent-mode`, `incline-trial`, `sprint-trial`.
They carry `/research`, `/performance` and the home scenarios, which is currently a list precisely because there
is nothing honest to show. Needs a laboratory willing to be photographed and a release from everyone in frame.

**2.4 Re-render the delivered angles on neutral grey.** S · render
They arrive on near-black. On a light page they read as heavy dark rectangles, and the accent block has to switch
out of `multiply` for them. On `#E6E6E6` the whole system would be consistent and `tone: "dark"` could go.

**2.5 No hero video.** M · render
`/public/video` is empty, so the hero shows its poster — a graceful fallback, but the band is built for motion.
8–12 s, silent, under 3 MB, plus a vertical variant. Then set `NEXT_PUBLIC_HERO_VIDEO=1`.

## 3. Layout

**3.1 The inner pages are in the old composition.** M · me
The home page now leads with a full-bleed band and large image cards. `/system`, `/research`, `/performance`,
`/investors` and `/roadmap` still use the earlier hero — text left, framed image right. Worth bringing them into
line now that the direction is settled.

**3.2 `/news` is published and empty.** S · you
Deliberate, and it says so. It stays out of the navigation and the sitemap until it has entries. Revisit once
there is something to report.

## 4. Measurement

**4.1 Analytics is enabled in the project and not instrumented.** S · me
Vercel Web Analytics and Speed Insights have IDs but the packages are not installed, so nothing is recorded.
Either add them — both cookieless, so the cookie page stays accurate — or switch them off in the project.

**4.2 Lighthouse has not been re-measured since the home page was rebuilt.** S · me
The last figures predate the full-bleed band, which replaced an SVG hero with a photograph.

## 5. Facts the site is still missing

**5.1 EIN, UEI and SAM registration.** you
Procurement currently answers "supplied with the quotation". That works, but a grants office usually checks a
supplier before the application goes in.

**5.2 Mode names from the firmware.** engineering
The site names three modes — Transparent, Profile, Adaptive — and no longer says they are provisional. Correct
them before anyone quotes them in a methods section.

**5.3 Everything in the specification document.** engineering, then you
No longer a blocker for the site, which now says the document is issued on request. Still needed for the
document itself, for a quotation, and for the letter of support a grant application asks for.
`docs/site-brief-questions.md` has the full list; `docs/site-brief-answers.md` has the answers that did not need
a measurement.

**5.4 Team, advisors and milestones.** you
The pages are built and will show them the moment the names are confirmed. A timeline needs three or more real
milestones before it goes up.

## 6. Later

**6.1 A methods note and a reference dataset.** L · you and engineering
The two documents most likely to convert a laboratory, and the site has nowhere to put them yet.

**6.2 Technical documentation, a firmware changelog, a support address.** L · you
What a laboratory reads after it buys, and what a careful one asks for before.

**6.3 The investor data room.** M · me, after the first signed LOI.

---

## Deliberately empty

Partner logos, testimonials, the publications table, any effectiveness figure, and the data room. Each of these
is a decision, not an omission: an empty row says less about us than a fabricated one.
