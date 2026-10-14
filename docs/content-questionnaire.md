# Content questionnaire

Every `[TBD]` in the pages already built, as a question, grouped by who can answer them. The count moves as
pages are added — `grep -ro "\[TBD" content | wc -l` gives today's figure.
For the whole picture — positioning, safety, regulatory, integration, infrastructure, launch — see
`docs/site-brief-questions.md`; this file is the subset that blocks the current build.
Each line says where the answer lands, so a filled-in copy of this file can be applied directly.

Answer format: a value with its unit, or `not applicable`, or `не раньше <date>`. "Roughly" is fine —
write `~` and we publish it as a range. What we cannot publish is a guess presented as a measurement.

Legend: **B** = blocks publication of the page · **L** = needed before launch · **N** = nice to have.

---

## 0. One decision first

**0.1 B — Is the knee actuated?** The renders show a belt, two hip actuators and thigh cuffs. No knee unit.
The site currently claims knee torque in four places.

- (a) Hip only, no knee planned → every knee mention is removed, the device is described as a hip exoskeleton
- (b) Knee is in development → knee stays, marked explicitly as a future module, not as an existing one
- (c) Knee exists, just not in these renders → everything stays, and we need a render showing it

→ `content/home.ts`, `content/specifications.ts`, `content/parts.ts`, `content/images.ts`

---

## 1. Engineering — the publication blockers for `/specifications` and `/system`

### Actuation

1.1 **B** Peak torque per joint, N·m — hip, and knee if it exists
1.2 **B** Continuous torque per joint, N·m
1.3 **B** Peak angular velocity (rad/s or deg/s)
1.4 **L** Torque resolution
1.5 **L** Torque measurement accuracy (± N·m or ± %)
1.6 **B** Residual torque in transparent mode — the number behind the phrase "near-zero" on the home page.
Until it exists, that claim stays flagged
1.7 **L** Actuated joints and degrees of freedom — how many, which
1.8 **L** Range of motion per joint, degrees

### Sensing

1.9 **B** Sensor types and where each sits on the frame (IMU, encoder, load cell, …)
1.10 **B** Sampling rate per channel, Hz
1.11 **L** Resolution per channel
1.12 **L** Measurement range per channel

### Control

1.13 **B** Control loop rate, Hz
1.14 **B** Latency sensor → actuation, ms
1.15 **B** Profile definition format — what a torque profile physically is (file, code, table)
1.16 **B** Interface for loading profiles — API, SDK, language, and a documentation or repository link
1.17 **L** Onboard profile storage — how many profiles, how big
1.18 **L** Operating mode names **as they appear in the firmware**. The site currently proposes
Transparent / Profile / Adaptive; firmware wins

### Data and synchronisation

1.19 **B** Full telemetry schema: channel name, unit, rate, one-line description. This fills a table on
`/system` and is one of the two or three things a buyer actually reads
1.20 **B** Hardware trigger type and connector (BNC, TTL, …)
1.21 **B** With which capture systems synchronisation has **actually been verified** on the bench.
Not "compatible with Vicon" until someone has run it
1.22 **L** Timestamp accuracy, and clock drift over a one-hour session
1.23 **L** Onboard storage capacity, and the transfer interface (USB, Wi-Fi, …)
1.24 **N** Confirm export formats — the site says CSV and HDF5

### Power

1.25 **B** Battery capacity, Wh
1.26 **B** Runtime, h — and under which load profile that figure was taken
1.27 **L** Charge time · swappable or fixed · operating temperature range

### Mechanical

1.28 **L** Mass distribution across the device (the total, 5–6 kg, is already published)
1.29 **B** Participant height range and mass limit
1.30 **L** Adjustable segment range · donning time · ingress protection rating

→ `content/specifications.ts`, `content/system.ts`, `content/parts.ts`, `content/home.ts`

---

## 2. Commercial — without these the instrument does not qualify as commercially available in a grant

2.1 **B** List price, USD
2.2 **B** Academic pricing — a figure, a percentage, or "same as list"
2.3 **B** Lead time from purchase order, weeks
2.4 **B** Warranty — duration and what it covers
2.5 **B** Service and support — response time, where repairs happen, who pays shipping
2.6 **B** Installation and training — included or priced separately, how many days, on site or remote
2.7 **L** Spare parts availability — which parts, from stock or made to order
2.8 **L** Shipping terms (Incoterm) and who handles customs
2.9 **L** Quotation validity, days
2.10 **L** Terms for the two non-purchase routes: a loan for one study, and the co-developed programme

→ `content/specifications.ts`, `content/research.ts`

---

## 3. Company and procurement

3.1 **B** Legal entity name exactly as it appears on an invoice
3.2 **B** Street address in Denver
3.3 **B** Phone
3.4 **B** Three email addresses, or one that covers all three: general, research enquiries, procurement
3.5 **B** Supplier registration details a grants office will ask for: EIN, SAM.gov / UEI, DUNS, W-9 on request
3.6 **N** Response time we are prepared to promise on forms — "within two working days" or similar

→ `content/site.ts`, `content/about.ts`

---

## 4. Legal — needs counsel, not us

4.1 **B** Sign-off on the Research Use Statement and on the footer notice that sits on every page.
Current wording is a draft pending FDA device regulatory review
4.2 **B** Sign-off on the responsibility split on `/research` — who is the sponsor of the research
4.3 **B** Data ownership in the terms: engineering telemetry ours, participant data the institution's.
The wording on `/terms` and on `/research` must agree
4.4 **L** Privacy policy, terms of use, cookie policy — full text
4.5 **L** Limitations of use: who and what the instrument is explicitly not for
4.6 **N** Check the phrase "requirements feed back into the hardware roadmap" on the co-developed route —
it must not imply we are a research sponsor

→ `content/legal.ts`

---

## 5. People

5.1 **L** Team: name, role, and a portrait for each person who goes on the site. One slot per real person
5.2 **L** Advisors: only those with a signed advisor agreement, name plus field
5.3 **N** Open positions, or the address careers enquiries go to
5.4 **N** Three or more confirmed milestones with dates, if a timeline is to go up on `/about`.
Fewer than three and the block stays off

→ `content/about.ts`

---

## 6. Investors

6.1 **N** Who receives deck requests, and whether they go through DocSend
6.2 **N** Anything in the three-paragraph thesis on `/investors` that you want worded differently

→ `content/about.ts`

---

## 7. Imagery and video

Covered by `docs/shot-list.md`, which lists what has been delivered and what is still needed.
Two questions belong here:

7.1 **L** Can the delivered renders be re-rendered on a neutral grey background (#E6E6E6)? They arrive on
near-black, which forces the accent block out of its normal blend mode and reads heavy on a light page
7.2 **L** Hero video — an 8–12 s silent loop, plus a vertical variant for mobile

---

## How to return this

Either fill the values in beside each number and send the file back, or answer only the **B** lines first —
those unblock `/specifications` and `/research`, which are the two pages that go live first.
