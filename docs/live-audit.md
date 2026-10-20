# Live site audit — dovmant.tech

Checked against the running site, not the repository. Ordered by what it costs while the site is publicly
reachable. 14 pages respond, the certificate is valid, the build is current.

## Fixed during this audit

- **Canonical host.** The apex redirected to `www` while `sitemap.xml`, `robots.txt` and every canonical URL
  pointed at the apex, so a crawler was bounced on every address in the sitemap. The apex now serves directly
  and `www` redirects to it with a 308. All 17 addresses return 200 on the apex.
- **Favicon.** The tab carried the Next.js logo from the scaffold. Replaced with the wordmark's first letter and
  its accent square, plus an apple-touch icon. **Not deployed yet** — see the note at the end.

## P0 — the site is public and these actively mislead

**1. There is no working way to contact the company.** Every address, phone number and postal address on the
live site is a placeholder a visitor can read: `[TBD] hello@dovmant.example`,
`[TBD] procurement@dovmant.example`, `[TBD] +1 000 000 0000`. A principal investigator who wants a quotation
today has nowhere to write. The forms are the only path, and see point 3.

**2. The legal pages are published drafts.** `/research-use`, `/privacy`, `/terms` and `/cookies` carry
"[TBD — legal review required]" in the body, and the research-use wording — the statement that defines the
regulatory position of the device — is marked as pending FDA counsel. That text is live, indexable, and
quotable by anyone, including a regulator.

**3. Form submissions go to a log file.** Resend is deferred, so an enquiry is written to the Vercel runtime log
and the visitor is told "thank you". Nothing reaches a person. The first real lab enquiry will be lost silently.

**4. Nothing stops indexing.** `robots.txt` allows everything except `/styleguide`, and there is no password on
the production domain. Preview deployments are protected by Vercel SSO; the custom domain is not.

Any one of these is a reason to put the password on until the content is ready. The switch is in
Project → Settings → Deployment Protection, and it does not affect the preview you share with counsel.

## P1 — working, but incomplete

**5. Analytics is enabled in the project and not instrumented in the app.** Vercel Web Analytics and Speed
Insights both have IDs on the project, but the packages are not installed, so nothing is recorded. Either add
`@vercel/analytics` and `@vercel/speed-insights` — both cookieless, so the cookie page stays accurate — or turn
them off in the project so the dashboard stops showing an empty product.

**6. No `Product` structured data.** `Organization` is live and correct. `Product` waits for real specification
values; `MedicalDevice` must never be used, as the schema type would itself be a claim.

**7. No web manifest.** Minor, and only matters if anyone pins the site to a home screen.

**8. `/news` is published and empty.** Deliberate — it is out of the navigation and out of the sitemap — but it
is reachable and says there is nothing to report. Fine for now; it reads worse once the site has traffic.

## P2 — missing data, by page

Count of `[TBD]` a visitor can read on each live page:

| Page              | Visible `[TBD]` | What is missing                                                        |
| ----------------- | --------------- | ---------------------------------------------------------------------- |
| `/specifications` | 101             | Every parameter table, and all nine commercial terms                   |
| `/roadmap`        | 52              | Dates for all five phases, and the detail of each item                 |
| `/investors`      | 42              | Market figures and their sources, the model, traction, the round       |
| `/system`         | 38              | Telemetry schema, control interface, mode names, part figures          |
| `/`               | 30              | The headline parameters, and the three FAQ answers that depend on them |
| `/terms`          | 24              | Supply terms and the data-ownership section                            |
| `/contact`        | 22              | Every address and the supplier registration details                    |
| `/privacy`        | 22              | The whole document                                                     |
| `/research-use`   | 20              | The whole document, pending counsel                                    |
| `/research`       | 16              | Terms of the three routes, verified capture systems                    |
| `/cookies`        | 14              | Partly answered already: the site genuinely sets no cookies            |
| `/about`          | 10              | Team, advisors, milestones                                             |
| `/performance`    | 8               | On-site evaluation detail                                              |
| `/news`           | 8               | Nothing — by design                                                    |

The questions behind these numbers are in `docs/content-questionnaire.md`; the ones I could answer without a
measurement are already answered in `docs/site-brief-answers.md`.

## Imagery still missing

Nine slots carry real renders. Thirteen are still stand-in drawings, and the two that matter most are
`detail-sensors` (priority 1, it is the only priority-1 frame outstanding) and the laboratory scenes that carry
the home gallery and `/research`. `docs/shot-list.md` splits delivered from outstanding.

No hero video: `/public/video` is empty, so the hero shows its poster. That is a graceful fallback, not a defect.

## What I would do, in order

1. Put the password on the production domain until items 1–3 are closed.
2. Publish a working email address and phone, even if it is a single forwarding mailbox. One line in
   `content/site.ts` and the site has a front door.
3. Wire Resend, or point the forms at that mailbox, so an enquiry reaches a person.
4. Send the legal pages to counsel; they are the only content that carries real risk while public.
5. Deploy the favicon, which is ready and waiting.
6. Then the specification values, which unlock the page the whole site is built around.

## A note on deploying

The project is connected to GitHub, so **any push to `main` deploys to the live domain automatically**. The
favicon fix is committed locally and held back until you say so — I am not publishing to a live site without
your word.
