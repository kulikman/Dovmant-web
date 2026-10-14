export type LegalDoc = {
  title: string;
  updated: string;
  intro?: string;
  sections: { h: string; p: string }[];
};

const tbd = (h: string) => ({
  h,
  p: "[TBD — legal review required] Content for this section has not been written yet.",
});

export const legal: Record<"privacy" | "terms" | "research-use" | "cookies", LegalDoc> = {
  "research-use": {
    title: "RESEARCH USE {STATEMENT}",
    updated: "[TBD]",
    intro:
      "The wording below is pending review by FDA device regulatory counsel and must not be published until that review is complete.",
    sections: [
      {
        h: "Device status",
        p: "Dovmant is a research instrument. It is not a medical device and is not intended for the diagnosis, treatment, mitigation, or prevention of any disease or condition. It has not been evaluated or cleared by the FDA. [TBD — legal review required]",
      },
      {
        h: "Intended use",
        p: "The instrument is intended for research use in controlled settings, operated under the supervision of qualified personnel. [TBD — legal review required]",
      },
      {
        h: "Responsibilities of the purchasing institution",
        p: "IRB approval, informed consent, compliance with applicable human-subject research regulations, personnel qualification and participant selection are the responsibility of the purchasing institution. [TBD — legal review required]",
      },
      {
        h: "No clinical claims",
        p: "Dovmant makes no claim regarding safety or effectiveness for any clinical purpose. [TBD — legal review required]",
      },
      {
        h: "Limitations of use",
        p: "[TBD — legal review required] Who and what the instrument is not intended for.",
      },
    ],
  },
  privacy: {
    title: "PRIVACY {POLICY}",
    updated: "[TBD]",
    sections: [
      tbd("Who we are"),
      tbd("What data we collect"),
      tbd("Why we process it"),
      tbd("How long we keep it"),
      tbd("Your rights"),
      tbd("Contact"),
    ],
  },
  terms: {
    title: "TERMS OF {USE}",
    updated: "[TBD]",
    sections: [
      tbd("Scope"),
      tbd("Use of this website"),
      {
        h: "Supply of research equipment",
        p: "[TBD — legal review required] Terms covering quotation validity, lead time, delivery, installation, warranty and service for research equipment.",
      },
      {
        h: "Ownership of data",
        p: "Engineering telemetry from the instrument — load, temperature, faults and usage profile — belongs to Dovmant. Physiological and participant data belongs to the purchasing institution, which also owns the findings and decides what is published. This must match the responsibility split published on the research partnerships page. [TBD — legal review required]",
      },
      tbd("Intellectual property"),
      tbd("Liability"),
      tbd("Governing law"),
    ],
  },
  cookies: {
    title: "COOKIE {POLICY}",
    updated: "[TBD]",
    sections: [
      {
        h: "This site sets no cookies",
        p: "We set no cookies of any kind, and nothing on these pages is loaded from a third party: no analytics, no embedded players, no fonts or scripts from another domain. There is nothing to consent to, which is why you are not being asked.",
      },
      {
        h: "What that means for you",
        p: "Nothing about your visit is stored in your browser by us, and no third party can observe it through this site. Your browser and your network provider still see the pages you request, as they do for any website.",
      },
      {
        h: "Forms",
        p: "What you type into a form is sent to us when you submit it, and nothing before that. How that information is handled is described in the privacy policy. [TBD — legal review required]",
      },
      {
        h: "If this changes",
        p: "If we ever add analytics, this page is updated before the change goes live, and anything that would require consent will ask for it. [TBD — legal review required]",
      },
    ],
  },
};
