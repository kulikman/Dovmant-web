export type LegalDoc = {
  title: string;
  updated: string;
  intro?: string;
  sections: { h: string; p: string }[];
};

/**
 * These are drafts written from how the site actually behaves — what the forms
 * collect, what the server stores, what the instrument logs. They are specific
 * rather than generic, which makes them useful to review, but they have not been
 * reviewed. Counsel signs off before anyone relies on them; the Research Use
 * Statement in particular defines intended use and therefore the regulatory
 * position of the device.
 */
const PENDING = "Draft pending review by counsel.";

export const legal: Record<
  "privacy" | "terms" | "research-use" | "cookies" | "accessibility",
  LegalDoc
> = {
  "research-use": {
    title: "RESEARCH USE {STATEMENT}",
    updated: "20 October 2026 — draft",
    intro: PENDING + " The wording below defines the intended use of the instrument.",
    sections: [
      {
        h: "Device status",
        p: "Dovmant is a research instrument. It is not a medical device and is not intended for the diagnosis, treatment, mitigation, or prevention of any disease or condition. It has not been evaluated or cleared by the FDA. No regulatory clearance, approval or certification is claimed, anywhere on this site or in any document we issue.",
      },
      {
        h: "Intended use",
        p: "The instrument is intended for research into human locomotion, in controlled settings, with healthy adult participants, operated by trained research staff under the supervision of a qualified investigator. It is intended to apply a programmable load and to record what it commanded and what it delivered. It is not intended for unsupervised use, for use outside a research setting, or for use by anyone for whom the device limits published in the specification do not hold.",
      },
      {
        h: "Responsibilities of the purchasing institution",
        p: "The institution that purchases or receives the instrument is the sponsor of any research conducted with it. The institution is responsible for ethical review and approval before any session with a human participant, for informed consent, for compliance with all regulations applicable to human-subject research in its jurisdiction, for the qualification and training of everyone who operates the device, and for deciding who may take part in a study. Dovmant does not review protocols and does not approve research.",
      },
      {
        h: "No clinical claims",
        p: "Dovmant makes no claim regarding safety or effectiveness for any clinical purpose. We state engineering parameters in the specification we issue, and we describe what the instrument lets a laboratory measure and set. We do not publish outcome figures, and we do not interpret the findings of research conducted with the instrument. Where a published study by a third party exists, we may state that the device was used in it, without characterising its result.",
      },
      {
        h: "Limits of use",
        p: "The instrument must be used within the torque, range, participant height and participant mass limits stated in the specification issued with it, and with the safety features enabled. It must not be modified in ways that defeat those limits. It is not intended for use with anyone under 18, for use during competition, or for continuous unsupervised wear. The limits that apply to your unit are stated in the specification issued with it.",
      },
      {
        h: "Incidents",
        p: "Any injury, device fault or unexpected behaviour during a session should be reported to us at the address on the contact page, in addition to whatever reporting the institution's own procedures require. We keep a record of every report, we respond to each one, and we tell the other laboratories using the instrument if a fault affects them.",
      },
      {
        h: "Questions",
        p: "If anything in this statement is unclear, or if your institution needs it in a different form for an ethics submission, write to us before you commit to a purchase, not after.",
      },
    ],
  },

  privacy: {
    title: "PRIVACY {POLICY}",
    updated: "20 October 2026 — draft",
    intro: PENDING,
    sections: [
      {
        h: "Who we are",
        p: "Dovmant LLC, 9300 E Mineral Ave, Suite 318, Centennial, CO 80112, United States. For anything in this policy, write to the address on the contact page.",
      },
      {
        h: "What this site collects",
        p: "Only what you type into a form and send: your name, your email address, your institution or organisation, and whatever you write in the free-text fields. Which fields appear depends on the form. Nothing is collected before you press send. This site sets no cookies, runs no analytics, and loads nothing from a third party, so there is no tracking of your visit to speak of.",
      },
      {
        h: "What our hosting provider sees",
        p: "The site is served by Vercel. Like any web server, its infrastructure processes the request itself — the page you asked for, your IP address, your browser's user agent — in order to deliver the page and to protect against abuse. We do not combine that information with anything you send us, and we do not use it to identify you.",
      },
      {
        h: "Why we process what you send",
        p: "To answer you. A lab evaluation request, a quotation request, a deck request and a general message are all requests for a reply, and we use what you send for that and for the commercial relationship that may follow. We do not sell it, we do not share it with anyone outside the company except a service that delivers our email, and we do not use it for advertising.",
      },
      {
        h: "How long we keep it",
        p: "Enquiries and the correspondence that follows are kept while the relationship is live and for a limited period afterwards, which counsel is setting. Ask us to delete your enquiry and we will, unless we are required to keep it.",
      },
      {
        h: "Your rights",
        p: "You can ask what we hold about you, ask for it to be corrected, ask for it to be deleted, and ask for a copy. Write to the address on the contact page and we will answer. If you are in the European Union or the United Kingdom, the rights under the GDPR apply to you and the lawful basis we rely on is our legitimate interest in answering an enquiry you chose to send.",
      },
      {
        h: "Data from the instrument",
        p: "This policy covers the website. Data recorded by the instrument during research is a separate matter, governed by the agreement with the purchasing institution: physiological and participant data belongs to the institution, and we receive engineering telemetry only. The split is described on the research partnerships page and in the terms.",
      },
      {
        h: "Changes",
        p: "If this policy changes, the date at the top of this page changes with it.",
      },
    ],
  },

  terms: {
    title: "TERMS OF {USE}",
    updated: "20 October 2026 — draft",
    intro: PENDING,
    sections: [
      {
        h: "Scope",
        p: "These terms govern your use of this website. They are not the contract under which an instrument is supplied — that is a separate written agreement, and where the two differ, the agreement prevails.",
      },
      {
        h: "Use of this site",
        p: "You may read these pages, print them, and quote them with attribution. You may not misrepresent what they say. In particular, nothing here may be repeated in a way that presents the instrument as a medical device or attributes to it a clinical, therapeutic or performance outcome.",
      },
      {
        h: "What this site does not state",
        p: "Technical parameters and commercial terms are not published on this site. They are issued to a named institution in a specification and a written quotation, and only those documents may be relied upon — including for a figure quoted in a grant application. Nothing on these pages is an offer.",
      },
      {
        h: "Supply of research equipment",
        p: "Quotations, prices, lead times, warranty and service terms are stated in a written quotation issued to a named institution and are valid for the period stated on it. An order is accepted when we confirm it in writing. Delivery dates are estimates given in good faith. Title passes on full payment; risk passes on delivery. Counsel is completing this section as the commercial terms are set.",
      },
      {
        h: "Ownership of data",
        p: "Physiological data and any data about a research participant belongs to the purchasing institution. The institution owns the findings and decides what is published; we have no review rights over them and impose no embargo. Engineering telemetry from the instrument — load, temperature, faults and usage profile — belongs to Dovmant and is used to support and improve the hardware. This wording is intended to match the responsibility split published on the research partnerships page, and the two are to be read together.",
      },
      {
        h: "Intellectual property",
        p: "The content of this site, the design system and the instrument's software and documentation belong to Dovmant. Buying an instrument gives you the right to use its software as supplied; it does not transfer ownership of it.",
      },
      {
        h: "No warranty for the website",
        p: "The website is provided as it is. Warranties for the instrument itself are those stated in the written agreement and in the specification, and nothing on this page limits them.",
      },
      {
        h: "Liability",
        p: "Being drafted by counsel. Until it is published here, liability for the supply of an instrument is governed by the written agreement with the purchasing institution, not by this page.",
      },
      {
        h: "Governing law",
        p: "The laws of the State of Colorado, United States. The venue clause is being confirmed by counsel.",
      },
    ],
  },

  cookies: {
    title: "COOKIE {POLICY}",
    updated: "20 October 2026 — draft",
    sections: [
      {
        h: "This site sets no cookies",
        p: "We set no cookies of any kind, and nothing on these pages is loaded from a third party: no analytics, no embedded players, no fonts or scripts from another domain. There is nothing to consent to, which is why you are not being asked.",
      },
      {
        h: "What that means for you",
        p: "Nothing about your visit is stored in your browser by us, and no third party can observe it through this site. Your browser and your network provider still see the pages you request, as they do for any website, and our hosting provider processes the request in order to serve it.",
      },
      {
        h: "Forms",
        p: "What you type into a form is sent to us when you submit it, and nothing before that. How that information is handled is described in the privacy policy.",
      },
      {
        h: "If this changes",
        p: "If we ever add analytics or embed anything from another domain, this page is updated before the change goes live, and anything that requires consent will ask for it.",
      },
    ],
  },

  accessibility: {
    title: "ACCESSIBILITY {STATEMENT}",
    updated: "20 October 2026 — draft",
    sections: [
      {
        h: "What we aim for",
        p: "This site is built to meet WCAG 2.1 level AA. That target is checked on every build rather than claimed once: an automated audit runs against every page, and the build fails if it finds a violation.",
      },
      {
        h: "What is tested",
        p: "Every page is checked for contrast, labelling, landmark structure and heading order. Text contrast is at least 4.5:1 on every pair of colours the site uses. The navigation, the accordion, the forms and the video dialog are operated from the keyboard in the test suite, and the focus ring is visible on every interactive element. Pages are rendered at 375, 768, 1280 and 1440 pixels wide with no horizontal scrolling.",
      },
      {
        h: "Motion",
        p: "All motion on the site is decorative. If your system is set to reduce motion, every animation is disabled and all content is shown without it.",
      },
      {
        h: "Known limits",
        p: "Automated testing does not catch everything. Screen-reader behaviour has not yet been verified by a person using one, and the technical diagrams convey their information through text as well as shape, but have not been reviewed by a specialist. A manual audit with assistive technology is planned.",
      },
      {
        h: "If something does not work",
        p: "Write to us at the address on the contact page and say what you were trying to do and what got in the way. An accessibility problem is a defect and is treated as one.",
      },
    ],
  },
};
