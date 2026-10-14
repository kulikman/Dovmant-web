# Dovmant — full site brief

Every question that has to be answered for the site to stand on its own: the product, the evidence, the
commercial terms, the company, the law, and the machinery around the pages. `docs/content-questionnaire.md`
is the subset of this that blocks the pages already built; this document is the whole picture.

## How to answer

- A value with its unit, or `not applicable`, or `not before <date>`.
- Approximate is fine: write `~` or a range and it is published as a range. A guess written as a measurement
  is the one thing we cannot publish.
- `internal` marks an answer that informs the writing but never appears on the site.
- Anything unanswered stays `[TBD]` on the page. An empty field costs less than a wrong one.

**Priority:** **B** blocks publication · **L** needed before launch · **N** improves the site later.

**The rule every answer is checked against:** the site says what the instrument lets a laboratory measure and
set. It never says what the device does to a person. Wording defines intended use, and intended use defines the
regulatory class — see the claims firewall in `CLAUDE.md`.

---

## 1. Positioning

1.1 **B** In one sentence a stranger would repeat correctly: what is Dovmant?
1.2 **B** Who is the buyer? Name the role that signs: principal investigator, lab director, core facility
manager, performance director, procurement.
1.3 **L** Who else has to agree — department head, IRB, EH&S, IT, grants office?
1.4 **B** What does a laboratory use today instead, and what does our instrument let them do that the
alternative does not? Describe the capability, not superiority. _internal, shapes the copy_
1.5 **L** Which three questions does a sceptical PI ask in the first call? Those become FAQ entries.
1.6 **L** Which fields are in scope: gait biomechanics, energetics, neuromechanics, sports science,
ergonomics, human factors, robotics teaching?
1.7 **N** Which conferences and journals matter to this audience? _internal, drives the news page and SEO_
1.8 **L** Geography: United States only at first, or Europe and Asia too? Decides shipping, compliance and
whether the site needs a second language.

## 2. The instrument

2.1 **B** What exactly ships in the box? List every item: device, battery, charger, case, cables, spare cuffs,
tool kit, documentation.
2.2 **B** Operating modes, named **as the firmware names them**, with one sentence each. The site currently
proposes Transparent / Profile / Adaptive as placeholders.
2.3 **B** What can a researcher change, and what is fixed? The whole page `/system` rests on this line.
2.4 **B** Knee module: what is the actual state, and what may we say about it today?
2.5 **L** Sizing: how is the device fitted, what is adjustable, how long does donning take with and without help?
2.6 **L** Can a participant walk out of the lab in it, or is it a bench and runway instrument?
2.7 **L** How many participants per unit per day, realistically? Cuff hygiene between participants?
2.8 **N** Is the hardware revision visible to the buyer — a version number, a changelog?

## 3. Engineering specification

The tables on `/specifications`. Every line is a published number, so each needs a measured value or `[TBD]`.

### Mechanical

3.1 **L** Mass distribution across the device. Total 5–6 kg is already published.
3.2 **B** Actuated joints, degrees of freedom, and which are passive.
3.3 **L** Range of motion per joint, degrees.
3.4 **B** Participant height range and mass limit.
3.5 **L** Adjustable segment range · donning time · ingress protection rating.
3.6 **L** Materials of frame, cuffs and belt, and what touches skin. Latex-free?

### Actuation

3.7 **B** Peak torque per joint, N·m.
3.8 **B** Continuous torque per joint, N·m — what the actuator holds without thermal derating.
3.9 **B** Residual torque in transparent mode, N·m. This is the number behind "near-zero" on the home page;
until it exists the phrase stays flagged as unverified.
3.10 **B** Peak angular velocity.
3.11 **L** Torque resolution and torque measurement accuracy.
3.12 **L** Is torque measured or estimated from current? A buyer in biomechanics will ask within a minute.

### Sensing

3.13 **B** Sensor types and where each one sits.
3.14 **B** Sampling rate per channel.
3.15 **L** Resolution and measurement range per channel.
3.16 **L** Is raw sensor data available, or only processed values?

### Control

3.17 **B** Control loop rate.
3.18 **B** Latency sensor → actuation, and how it was measured.
3.19 **B** What a torque profile physically is: a file, a script, a lookup table. Give an example.
3.20 **B** The interface for loading profiles — API, SDK, language — and a link to documentation or a
repository when one exists.
3.21 **L** Onboard profile storage: how many, how large.
3.22 **L** Can a profile be changed mid-session, and is the change logged?
3.23 **N** Is there a simulator or offline mode for developing profiles without the hardware?

### Data and synchronisation

3.24 **B** The full telemetry schema: channel, unit, rate, one-line description. One of the two or three
things a buyer actually reads.
3.25 **B** Hardware trigger type and connector.
3.26 **B** Which capture systems synchronisation has **actually been verified** with, on the bench. Nothing is
listed as compatible before someone has run it.
3.27 **L** Timestamp accuracy and clock drift over a one-hour session.
3.28 **L** Onboard storage capacity and transfer interface.
3.29 **N** Confirm the export formats. The site says CSV and HDF5.
3.30 **N** Is there a reference parser or example dataset we can publish? A download like that converts.

### Power

3.31 **B** Battery capacity, Wh.
3.32 **B** Runtime, h, and the load profile that figure was taken under.
3.33 **L** Charge time · swappable or fixed · operating temperature range.
3.34 **L** Battery chemistry and cell certification — needed for shipping and for EH&S review.

### Safety

3.35 **B** How does the device stop? Emergency stop, where it is, what happens to the limb.
3.36 **B** Behaviour on fault, on battery depletion and on loss of communication.
3.37 **B** Software and hardware limits on torque and range, and who can change them.
3.38 **L** What an operator must do before each session — a checklist we can publish.
3.39 **L** Required operator training: how long, delivered how, certified how.
3.40 **L** Known contraindications for participant selection, phrased as device limits rather than medical
advice. _needs legal review_

## 4. Regulatory and compliance

4.1 **B** Confirm the device status line: research instrument, not a medical device, not FDA cleared.
4.2 **B** Which standards has it been tested against — electrical safety, EMC, battery (UN 38.3)? Test reports?
4.3 **L** CE marking or UKCA, if Europe is in scope.
4.4 **L** Export control classification, if any.
4.5 **L** What we hand an institution for an IRB submission: specification, risk documentation, operator
training outline, adverse-event reporting route.
4.6 **L** Insurance: what the institution is expected to carry, what we carry. _needs legal review_
4.7 **N** Is there a regulatory path planned for later, and may the site mention it? Wording matters: a plan
is not a claim.

## 5. Integration with a laboratory

5.1 **B** Verified capture systems, force plates and EMG — by name and version.
5.2 **L** What a lab must have before a unit arrives: space, power, network, a technician?
5.3 **L** Does anything need to be installed on lab computers? Operating systems supported.
5.4 **L** Network and data security answers for the IT review: does the device phone home, what leaves the
building, can it run fully offline?
5.5 **N** Typical integration time from delivery to first recorded trial.

## 6. The research programme

6.1 **B** Terms of the three routes — purchase, loan for one defined study, co-developed programme:
price or fee, duration, what is included, what the lab commits to.
6.2 **B** Confirm the responsibility split published on `/research` line by line. _needs legal review_
6.3 **B** Engineering telemetry we receive: exactly which fields, how often, how transmitted. It must match
what `/terms` says about data ownership.
6.4 **L** Do we ask for acknowledgement in publications, and in what form?
6.5 **L** Can a lab publish a negative result about the instrument without our consent? The site says yes,
with no embargo — confirm.
6.6 **L** How many units are available to place this year? Honest scarcity is useful; invented scarcity is not.
6.7 **N** Is there an early-access cohort, and what do its members get?

## 7. Performance research

7.1 **L** Who is the buyer here: a performance director, a sports scientist, a university athletics department?
7.2 **L** What may we say about use with athletes without straying into recovery or injury claims?
7.3 **L** Is an on-site evaluation genuinely offered along the Front Range, and what does it include?
7.4 **N** A case study, once a partner completes an evaluation — who signs it off?

## 8. Commercial terms

8.1 **B** List price, USD.
8.2 **B** Academic pricing — figure, percentage, or same as list.
8.3 **B** Lead time from purchase order, weeks.
8.4 **B** Warranty: duration and what it covers.
8.5 **B** Service and support: response time, where repairs happen, who pays shipping, loaner during repair.
8.6 **B** Installation and training: included or priced, how many days, on site or remote.
8.7 **L** Spare parts: which, from stock or made to order, price list.
8.8 **L** Shipping terms (Incoterm), customs, who is the importer of record.
8.9 **L** Quotation validity, days.
8.10 **L** Payment terms: net 30, deposit, purchase order accepted, credit card?
8.11 **N** Is there a multi-unit or consortium price?
8.12 **N** Software: is anything licensed separately, is there a subscription, what happens if it lapses?

## 9. Procurement and grants

9.1 **B** Legal entity name exactly as on an invoice.
9.2 **B** Street address in Denver.
9.3 **B** Phone.
9.4 **B** Email addresses: general, research, procurement — or one that covers all three.
9.5 **B** Supplier registration: EIN, UEI / SAM.gov, DUNS, W-9 on request.
9.6 **L** Which funding mechanisms we support beyond NIH S10 and NSF MRI.
9.7 **L** What a letter of support from us contains, and how fast we can issue one.
9.8 **L** Sole-source justification: can we provide one, and on what grounds? Grants offices ask for this.
9.9 **N** Are we on any purchasing framework, GSA schedule or university supplier list?

## 10. Company

10.1 **L** Founding story in three sentences: what you saw, why you started, what you refuse to do.
10.2 **L** Confirmed milestones with dates. Three or more and a timeline goes up on `/about`; fewer and the
block stays off.
10.3 **L** Team: name, role, portrait, for each person who appears. One slot per real person.
10.4 **L** Advisors: only with a signed agreement — name and field.
10.5 **N** Open positions, or the address careers enquiries go to.
10.6 **N** Where the device is built, and how much of it is made in house.
10.7 **N** Funding to date, if it may be stated publicly.

## 11. Evidence

11.1 **L** Any study already running or agreed, even unpublished — what may be said about it?
11.2 **L** Who approves a publication entry before it goes on the site?
11.3 **L** Internal validation we have done: bench tests, repeatability, pilot sessions. May any of it be
published, and as what — a technical note rather than a result?
11.4 **N** Will we publish a methods note or a white paper of our own? That is often the first thing a lab reads.
11.5 **N** A reference dataset recorded with the device, published for download.

## 12. Investors

12.1 **N** Who receives deck requests, and does the deck go through DocSend?
12.2 **N** Anything in the three-paragraph thesis on `/investors` to reword.
12.3 **N** May the round be mentioned at all, or does the page stay purely qualitative?

## 13. Brand and voice

13.1 **L** Is the wordmark final? Do you have an svg, and is there a lockup with a symbol?
13.2 **L** Pronunciation and origin of the name, if it is worth a line on `/about`.
13.3 **L** Three words the writing should sound like, and three it must never sound like.
13.4 **L** Who signs off on copy before it goes live?
13.5 **N** Is the red accent fixed as `#C1121F`, or does the brand have its own red?
13.6 **N** Do you need a brand kit for partners: logo files, colours, a one-paragraph boilerplate?

## 14. Imagery and video

Detail is in `docs/shot-list.md`, which already splits delivered from outstanding.

14.1 **L** Can the delivered renders be re-rendered on neutral grey (`#E6E6E6`)? They arrive on near-black,
which forces the accent block out of its blend mode and reads heavy on a light page.
14.2 **L** Hero video: an 8–12 s silent loop plus a vertical variant for mobile.
14.3 **L** Who shoots the laboratory frames, where, and when? Those carry `/research` and the home gallery.
14.4 **L** Do we have a laboratory willing to be photographed, and is a release signed by everyone in frame?
14.5 **N** An exploded technical render with part labels, for `/system`.
14.6 **N** A screen recording of the investigator console, with synthetic data.

## 15. Legal pages

15.1 **B** Sign-off on the Research Use Statement and on the footer notice that appears on every page. The
current wording is a draft pending FDA device regulatory counsel.
15.2 **B** Data ownership in the terms: engineering telemetry ours, participant data the institution's. The
wording on `/terms` and on `/research` must agree.
15.3 **L** Privacy policy: what the forms collect, where it is stored, how long, who processes it. GDPR if
Europe is in scope.
15.4 **L** Terms of use, including supply of research equipment.
15.5 **L** Cookie policy, and whether we set any non-essential cookies at all. If not, the banner is unnecessary
and the page says so.
15.6 **L** Limitations of use: who and what the instrument is explicitly not for.
15.7 **N** An accessibility statement, once the site is audited against WCAG 2.1 AA.

## 16. Domain, mail and infrastructure

16.1 **B** The production domain, and who controls DNS.
16.2 **B** Mailboxes for the form destinations, and who reads each.
16.3 **L** Where enquiries should land: inbox only, or a CRM? Which one?
16.4 **L** Response time we are prepared to promise on forms.
16.5 **L** Who owns the Vercel project and the repository after handover?
16.6 **N** Status or uptime expectations, backups, and who to call when something breaks.

## 17. Measurement and search

17.1 **L** Analytics: privacy-friendly and cookieless, or a conventional product? This decides the cookie page.
17.2 **L** What counts as a conversion: a lab evaluation request, a quotation request, a deck request.
17.3 **L** Search terms worth ranking for, beyond the ones already targeted: programmable exoskeleton research,
exoskeleton for biomechanics lab, gait assistance research device, exoskeleton torque control API.
17.4 **N** Should the site carry `Product` structured data once the parameters are published? `MedicalDevice`
is never used — the schema type would itself be a claim.
17.5 **N** A second language, if Europe or Asia is in scope.

## 18. Launch

18.1 **B** What must be true for `/specifications` to go live? It is the page a PI attaches to a grant.
18.2 **L** Launch order. The plan today: `/specifications` and `/research` first, then the home page,
`/system` and `/performance`, then `/investors`.
18.3 **L** A hard date, if there is one — a conference, a grant deadline, a funding round.
18.4 **L** What success looks like in the first quarter: number of qualified lab conversations, quotations
issued, letters of support written.
18.5 **N** Who announces the launch, and where.

## 19. Later

19.1 **N** Technical documentation or a knowledge base — the thing a lab reads after it buys.
19.2 **N** A firmware and software changelog.
19.3 **N** A support portal or ticket address.
19.4 **N** A customer area for manuals, firmware and spare-part ordering.
19.5 **N** The investor data room, after the first signed LOI.

---

## Return path

Answer the **B** lines first: they unblock `/specifications` and `/research`, the two pages that go live before
the rest. Fill values in beside the numbers and send the file back, or answer by block in chat and the content
files are updated as the answers arrive.
