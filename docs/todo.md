# Task list

State on 20 October 2026. The site is live at dovmant.tech, 15 pages, no placeholders left in the copy,
280 checks passing. What follows is what stands between that and a site the company can point a laboratory at.

**Owner** says who can do it: **me** — in the repository · **you** — a decision or a fact · **counsel** ·
**render** — whoever makes the renders and shoots · **engineering** — whoever measures.
**Size:** S under an hour · M half a day · L a day or more.

---

## 1. Before the site is shown to anyone outside the company

**1.1 Form submissions reach nobody.** S · you, then me
`RESEND_API_KEY` is not set, so an enquiry is written to the Vercel runtime log and the visitor is told it was
received. The confirmation now names `info@dovmant.tech` as a fallback, which is a patch, not a fix. Three
environment variables and it works: the key, the from address and the to address.

**1.2 The legal pages are published drafts and the domain is open.** S to protect · counsel to resolve
Every legal page carries "Draft pending review by counsel", the research-use wording defines the regulatory
position of the device, and the domain has no password and allows indexing. Either send the four pages to counsel
now, or put the password on until they come back. Project → Settings → Deployment Protection.

**1.3 `ANTHROPIC_API_KEY` sits in the Vercel project.** S · you
Not added by this work and not used by the site. If nothing needs it, remove it — an unused secret is only a
liability.

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
