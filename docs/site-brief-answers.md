# Answers to the site brief

Everything in `docs/site-brief-questions.md` that does not require a measurement, a price, a name or a
signature. 155 questions in, about 60 left for you at the end of this file.

**How to read a line**

- **Answered** — established from the repository or from how this kind of purchase works. Correct it if it is wrong.
- **Proposed** — a decision I would make. Say no and it changes; say nothing and it stands.
- **Draft** — text or a template you can edit and use.

Nothing here is a product fact. Torque, latency, price, dates, names and legal wording stay with you.

---

## 1. Positioning

**1.1 Answered.** Dovmant builds a programmable lower-limb exoskeleton for locomotion research: a device a
laboratory can program, log and take data out of, rather than a product that assists a person.

**1.2 Proposed.** The principal investigator decides and the institution signs. The PI chooses the instrument,
the grants office executes the purchase, and when the money is instrumentation funding the PI is also the
applicant. Every page is written for the PI; `/specifications` is written for the grants office reading over
the PI's shoulder.

**1.3 Answered.** Beyond the PI: department head or chair for capital, grants office for the purchase, IRB for
the protocol, EH&S for electrical and battery safety, IT for anything that touches the network, and the lab
technician who will actually mount it. The site answers EH&S and IT on `/specifications` and `/system`; the IRB
is answered on `/research`, where responsibility is split line by line.

**1.4 You.** What a lab uses instead is yours to say — but the shape of the answer is already on the site: an
instrument that both intervenes and measures, where the intervention is programmable and the measurement is
exportable. Fill in what they do today and we sharpen the sentence.

**1.5 Draft.** Three questions a sceptical PI asks, which belong in the FAQ once answered:

1. Is torque measured or inferred from motor current? (3.12)
2. What has synchronisation actually been verified against, by you, on a bench? (3.26)
3. If my student publishes something unflattering about the device, can you stop them? (6.5 — the site
   already answers: no review rights, no embargo)

**1.6 Proposed.** In scope: gait biomechanics, energetics and metabolic cost, neuromechanics and motor control,
sports science and load management, ergonomics and occupational biomechanics, and robotics teaching. Out of
scope on the site: anything clinical.

**1.7 Proposed, internal.** The venues that matter to this audience are the biomechanics and wearable-robotics
meetings — ISB, ASB, ESB, ISEK, Dynamic Walking, ICORR, BioRob, WearRAcon — and the journals a lab publishes in,
led by Journal of Biomechanics and IEEE Transactions on Biomedical Engineering. Confirm which ones your buyers
actually attend before we spend anything on them.

**1.8 Proposed.** United States first. It decides everything downstream: FDA language rather than CE, UN 38.3 for
battery shipping, NIH and NSF funding mechanisms, one language. Europe is a later decision with its own
compliance cost, and the site is built so a second language can be added without rework.

## 2. The instrument

**2.1–2.7 You.** What ships in the box, mode names from the firmware, what is adjustable, donning time, whether a
participant can leave the lab in it, participants per day, hygiene between them. All of it is observable fact
about hardware I have not seen.

**2.8 Proposed.** Yes — a hardware revision visible to the buyer, printed on the device and quoted on the
specification page, with a changelog once there is a second revision. Laboratories cite the revision in methods
sections; without one, two papers about "the Dovmant exoskeleton" may not describe the same instrument.

## 3. Engineering specification

**3.1–3.11, 3.13–3.15, 3.17–3.18, 3.21–3.22, 3.24–3.28, 3.31–3.34 You.** Measurements. Nothing here can be
inferred, and a plausible number is worse than an empty row.

**3.12 You, but worth flagging.** Measured versus estimated from current is the question that separates an
instrument from a consumer device for this audience. If torque is measured, say so loudly and say with what. If
it is estimated, say that too and give the error — that is still publishable, and hiding it is not survivable.

**3.16 Proposed, pending your answer.** Publish raw channels, not only processed values. A lab that cannot get
raw data will not use the device as an instrument.

**3.19–3.20 You.** But note what the page needs: not a description, an example. One profile file a PI can read in
ten seconds does more than a paragraph.

**3.23 Proposed.** An offline mode or simulator for writing profiles without the hardware is worth building, and
worth saying on the site — it lets a lab start work between order and delivery, which shortens the gap where
deals die. Not before launch.

**3.29 Answered.** CSV and HDF5 as published. HDF5 is the right second format for this audience: it carries
metadata and survives large sessions. Add Parquet only if someone asks.

**3.30 Proposed.** Yes, publish a reference dataset and a parser. It is the cheapest credibility on the whole
site: a PI can read the schema and verify the instrument does what we say before ever contacting us.

**3.35–3.37 You.** Safety behaviour is the one area where an invented answer could get someone hurt. Answer it
exactly, and EH&S will ask for the same answers in writing.

**3.38 Draft.** A pre-session checklist, to be corrected by whoever knows the hardware:

1. Visual inspection of frame, cuffs and cabling for damage
2. Battery charge above the stated minimum, battery seated and latched
3. Power on, self-test passes, firmware revision recorded in the session log
4. Torque and range limits confirmed for this protocol
5. Emergency stop tested before the participant is in the device
6. Fit checked against the participant's segment lengths, cuffs tensioned to the stated figure
7. Unloaded movement through the full range before assistance is enabled
8. Synchronisation trigger confirmed against the capture system
9. Operator and participant agree the stop signal

**3.39 Proposed.** Operator training as a half-day, delivered on site at installation, repeated remotely on
request, with a named trained operator per site recorded by us. Keep "certification" out of it unless you intend
to run a real certification scheme.

**3.40 You and counsel.** Participant selection limits must be written as device limits — height, mass, segment
length, skin integrity at cuff contact — never as medical contraindications. The moment it reads as medical
screening advice, intended use has moved.

## 4. Regulatory

**4.1 Answered.** The status line is confirmed and already published in the footer of every page: research
instrument, not a medical device, not FDA cleared, institutional responsibility, IRB approval required. Counsel
still has to approve the wording (15.1).

**4.2–4.4 You.** Which standards, which reports, CE or UKCA, export classification.

**4.5 Draft.** What an institution should get for an IRB submission. This list is standard; the contents are yours:

- Device description and intended use, matching the site word for word
- Technical specification, including torque and range limits and how they are enforced
- Risk assessment: identified hazards, mitigations, residual risk
- Safety features: stop behaviour, fault behaviour, limit enforcement
- Operator training outline and the pre-session checklist
- Adverse-event reporting route with a named contact and a response time
- Electrical and battery test reports when they exist
- Statement that the institution is the sponsor of the research

That pack is itself a selling point, and `/research` should list it once it exists.

**4.6 You and counsel.** Insurance split.

**4.7 Proposed.** A later regulatory path may be mentioned only as a direction, never as a status, and never on a
product page — `/roadmap` under Compliance is the right place, which is where it now sits. Wording: groundwork
a later path would stand on. Not "FDA submission planned" with a date.

## 5. Integration

**5.1 You.** Verified systems, by name and version. Until then the site says verification is pending, which is
the honest form of the sentence.

**5.2 Draft.** What a lab needs before a unit arrives, to be corrected with real figures:

- Floor space for fitting and a clear walking path
- A bench with mains power for charging and a place to store the battery
- Network access only if telemetry is transferred over it — otherwise none
- One trained operator present for every session
- Capture system details sent to us in advance so synchronisation is checked before delivery

**5.3–5.5 You.**

**5.4 Proposed shape.** The IT answer a university wants is three sentences: what leaves the building, whether
the device can run fully offline, and what ports it needs. If the honest answer is "nothing leaves the building
and it runs offline", that is a competitive advantage and belongs on `/specifications`.

## 6. Research programme

**6.1–6.3, 6.6 You.** Terms, the responsibility split sign-off, the exact telemetry fields, units available.

**6.4 Draft.** Acknowledgement rather than authorship: "The device used in this study was supplied by Dovmant
Inc. The company had no role in study design, data collection, analysis or the decision to publish." Ask for
that sentence in the methods section and ask for nothing else — it is both honest and more useful to us than a
citation would be.

**6.5 Answered.** The site already says it: no review rights over findings, no embargo. Keep it. A lab that
believes it can be silenced will not sign.

**6.7 Proposed.** An early-access cohort of a named small number of laboratories, each getting a unit at a stated
price, direct engineering contact, and influence on the firmware roadmap, in exchange for feedback and a public
acknowledgement that they are using it. Real scarcity if the number is real.

## 7. Performance research

**7.1 Proposed.** The performance director or head of sports science signs; the budget is usually operating
rather than grant, which is why this branch converts faster and why its form is shorter.

**7.2 Answered.** The permitted language is already encoded in the claims firewall and enforced by
`tests/claims.spec.ts`: a controllable load, repeatable across sessions, logged per side. Never recovery,
never injury prevention, never return to play. `/performance` carries a block that says so explicitly.

**7.3 You.** Whether the on-site evaluation along the Front Range is genuinely on offer, and what it includes.
It is currently promised on the page.

**7.4 Proposed.** A case study goes up only with written sign-off from the partner organisation, and describes
what was measured, never what was achieved.

## 8. Commercial

**8.1–8.7 You.** Price, academic price, lead time, warranty, service, installation and training, spares.

**8.8 Proposed.** DAP for domestic shipments with us as shipper of record; EXW for international, with the
institution handling import. Batteries ship under UN 38.3 — ground only in many cases, which affects lead time
and should be stated on the page rather than discovered at the dock.

**8.9 Proposed.** Quotation validity of 90 days. Grant timelines are long, and a 30-day quote expires before a
submission deadline, which forces the PI to come back for a reissue.

**8.10 Proposed.** Purchase order accepted, net 30 from invoice, a deposit only for the first unit to a new
institution. Universities rarely pay by card and almost never pay in advance.

**8.11 Proposed.** A multi-unit price, stated as a percentage from the second unit, mostly because consortium
grants buy two or three at once.

**8.12 Proposed.** Nothing licensed separately and no subscription at launch. A perpetual, offline-capable
instrument is a materially easier purchase for a grant, and a licence that can lapse is a reason for an
institution to say no.

## 9. Procurement and grants

**9.1–9.4 You.** Entity, address, phone, mailboxes.

**9.5 Answered as a list, values yours.** A US grants office will ask for: legal entity name and address, EIN,
UEI with active SAM.gov registration, W-9, banking details for ACH, a certificate of insurance, and sometimes a
small-business or ownership classification. UEI and SAM matter most — without an active registration, federal
money cannot reach you, and a PI discovering that late will buy from someone else.

**9.6 Answered.** Beyond NIH S10 and NSF MRI: DoD DURIP, NIH R01 equipment lines, institutional capital
equipment funds, college or departmental matching funds, and private foundation instrumentation grants. All are
worth naming on `/specifications`, because a PI reading their own mechanism feels understood.

**9.7 Draft.** A letter of support from a supplier is short and contains: the instrument and its configuration,
the quoted price and quotation validity, lead time from purchase order, warranty and service terms, a statement
that the instrument is commercially available, our commitment to deliver within the grant period, and a named
contact. It makes no scientific claim and does not endorse the research. Issue it within two working days of a
request — the usual reason a PI leaves an instrument out of a budget is that the paperwork did not arrive in time.

**9.8 Draft.** A sole-source justification is written by the PI, but we supply the technical grounds. The ones
that are defensible here: programmable torque as a function of gait phase, a transparent mode usable as a control
condition, open export of raw telemetry in documented formats, and hardware synchronisation with existing capture
equipment. Each must be something a competitor genuinely does not offer — a justification that overstates is
rejected by the office, and it is the PI who pays for that.

**9.9 You.**

## 10. Company

**10.1–10.4, 10.6–10.7 You.** Story, milestones, people, where it is built, funding.

**10.5 Proposed.** Until there are open positions, one line and a mailbox, which is what the page says now.

## 11. Evidence

**11.1, 11.3 You.**

**11.2 Proposed.** A publication entry goes up when the paper is accepted, is listed with its DOI, and is
approved by one named person internally. No preprints with results, no conference abstracts presented as
publications.

**11.4 Proposed.** Yes, publish a methods note of your own: how the device measures and commands torque, how
synchronisation works, how a profile is defined. A methods note is not a results claim, it is the document a lab
reads before deciding, and it is the one piece of writing we are entitled to publish ourselves.

**11.5 Proposed.** Same as 3.30 — a reference dataset, published for download.

## 12. Investors

**12.1 You.**

**12.2 Proposed.** The thesis reads well and I would not reword it. It is a claim about an industry, not about
the device, which is why it survives the claims firewall.

**12.3 Proposed.** Keep the page qualitative. The round is discussed in a conversation, and the page now says
exactly that. An amount on a public page dates fast and prices you before the first call.

## 13. Brand

**13.1–13.2, 13.4 You.** Wordmark files, the origin of the name, who signs off copy.

**13.3 Proposed.** The writing should sound **precise, plain, unhurried**. It must never sound **promotional,
clinical, or clever**. The first is the voice already in the content files; the second is what the claims
firewall exists to prevent.

**13.5 Proposed.** Keep `#C1121F`. It passes contrast on every surface it is used on, which a brighter red would
not, and it is already carried through the OG cards and the overlay.

**13.6 Proposed.** A partner kit is worth assembling later: wordmark in SVG, the colour tokens, the device
renders on neutral grey, and a one-paragraph boilerplate ending in the research-use sentence — so that anyone
quoting us repeats the regulatory language rather than inventing their own.

## 14. Imagery

**14.1–14.6 You.** Re-rendering on neutral grey, video, who shoots the laboratory frames, releases.
`docs/shot-list.md` has the full brief and the priority order.

## 15. Legal pages

**15.1–15.4, 15.6 You and counsel.**

**15.5 Answered, verified in the code.** The site sets no cookies and loads nothing from a third party — no
analytics, no fonts from a CDN, no embeds, no `document.cookie`, no local storage. So there is nothing to consent
to and no banner is needed; the cookie page should simply say that. The moment analytics is added (17.1) this
answer has to be revisited.

**15.7 Draft.** An accessibility statement can be published now, because the evidence exists: the site targets
WCAG 2.1 AA; every page is checked automatically against axe on each build; contrast on every text pair is at
least 4.5:1; navigation, the accordion and the modal work from the keyboard; all motion is disabled under
`prefers-reduced-motion`. Add a contact address for accessibility problems and a date, and it is ready.

## 16. Infrastructure

**16.1–16.2, 16.5 You.** Domain and DNS, mailboxes, who owns the project after handover.

**16.3 Proposed.** Start with a shared mailbox, not a CRM. Volume will be low and personal, and routing an
instrumentation enquiry through a sales pipeline reads wrong to a PI. `lib/delivery.ts` already sends to email
and can write to a store later without touching the forms.

**16.4 Proposed.** Promise two working days and mean it. It is currently `[TBD]` in five places in the content.

**16.6 Proposed.** The site is static and hosted on Vercel, so uptime is effectively the platform's. What
actually needs an owner is the mailbox and the DNS.

## 17. Measurement and search

**17.1 Proposed.** Cookieless analytics — Vercel Analytics or Plausible. Both are first-party, neither needs a
banner, and both answer the only questions worth asking here: which pages a lab reads before it contacts us, and
which of those pages precede a submitted form.

**17.2 Proposed.** Three conversions, in this order: a lab evaluation request, a quotation request, a deck
request. Everything else is a page view.

**17.3 Answered, extended.** Beyond the terms already targeted, worth ranking for: exoskeleton torque control
API · open telemetry exoskeleton · research exoskeleton for gait lab · hip exoskeleton research device ·
exoskeleton synchronisation motion capture · instrumentation grant exoskeleton · NIH S10 exoskeleton ·
transparent mode exoskeleton baseline. All are low-volume and high-intent, which is the point — nobody in this
market searches for "exoskeleton".

**17.4 Answered.** `Product` once the parameters are published; `Organization` is already live. `MedicalDevice`
is never used, and the reason is written into the code: the schema type would itself be a claim.

**17.5 Proposed.** No second language until Europe is a decision (1.8).

## 18. Launch

**18.1 Answered.** `/specifications` can go live when four things are true: every parameter row carries a
measured value or an honest `[TBD]`; the commercial block is complete, because without price, lead time, warranty
and service the instrument does not qualify as commercially available in a grant budget; the research-use wording
has counsel's sign-off; and the legal entity with its procurement details is published, because a grants office
checks the supplier before the PI submits.

**18.2 Answered.** `/specifications` and `/research` first — they are the pages a PI uses in a conversation.
Then the home page, `/system` and `/performance`. `/investors` and `/roadmap` last, and they can go live earlier
if a fundraising conversation needs them, since neither makes a product claim.

**18.3, 18.5 You.**

**18.4 Proposed.** For a first quarter, the honest metrics are counts, not rates: qualified laboratory
conversations started, quotations issued, letters of support written, and units committed. Traffic is not a
metric for a market this size — twenty of the right readers beats twenty thousand of the wrong ones.

## 19. Later

**19.1–19.5 Proposed order.** Documentation first, because it is what a lab reads after it buys and what a
careful lab asks for before it buys. Then a firmware changelog, which is also how a published methods section
stays reproducible. Then a support address. A customer area and the investor data room last — the data room only
after the first signed LOI, as the brief already says.

---

## What is left for you

Grouped so you can forward each block to the right person.

**Engineering, to whoever measures** — §3 in full: mechanical, actuation, sensing, control, data and
synchronisation, power. Plus safety behaviour (3.35–3.37), what ships in the box (2.1), firmware mode names
(2.2), what is adjustable (2.3), sizing and donning (2.5–2.7), verified capture systems (5.1), and the IT answers
(5.3–5.4). This block alone unblocks `/specifications` and `/system`.

**Commercial, to whoever prices** — price, academic price, lead time, warranty, service, installation and
training, spares (8.1–8.7), the terms of the three placement routes (6.1), and how many units exist this year
(6.6).

**Procurement, to whoever registers the company** — entity name, address, phone, mailboxes, EIN, UEI and SAM
(9.1–9.5), and whether we are on any purchasing framework (9.9).

**Legal, to counsel** — the research-use statement and the footer notice (15.1), data ownership across `/terms`
and `/research` (15.2–15.3), the responsibility split (6.2), limitations of use (15.6), insurance (4.6), and
participant selection limits phrased as device limits (3.40).

**Compliance, to whoever holds the test reports** — standards tested against (4.2), CE or UKCA (4.3), export
classification (4.4), battery chemistry and certification (3.34).

**Company, to you** — the founding story (10.1), confirmed milestones (10.2), team and advisors (10.3–10.4),
where it is built (10.6), funding (10.7), the wordmark files (13.1), and who signs off copy (13.4).

**Media, to the render and photo people** — renders on neutral grey (14.1), hero video (14.2), the laboratory
shoot and its releases (14.3–14.4).

**Decisions only you can take** — the production domain and DNS (16.1), the mailboxes (16.2), ownership after
handover (16.5), a launch date (18.3), and whether there is any study already running that may be mentioned
(11.1).
