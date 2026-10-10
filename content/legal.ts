export type LegalDoc = { title: string; updated: string; sections: { h: string; p: string }[] };

const tbd = (h: string) => ({
  h,
  p: "[TBD — legal review required] Content for this section has not been written yet.",
});

export const legal: Record<"privacy" | "terms" | "medical-disclaimer" | "cookies", LegalDoc> = {
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
      tbd("Intellectual property"),
      tbd("Liability"),
      tbd("Governing law"),
    ],
  },
  "medical-disclaimer": {
    title: "MEDICAL {DISCLAIMER}",
    updated: "[TBD]",
    sections: [
      {
        h: "Not medical advice",
        p: "Nothing on this website is medical advice, a diagnosis or a treatment recommendation. Always consult a qualified healthcare professional. [TBD — legal review required]",
      },
      tbd("Regulatory status"),
      tbd("Intended use"),
      tbd("Reporting an incident"),
    ],
  },
  cookies: {
    title: "COOKIE {POLICY}",
    updated: "[TBD]",
    sections: [tbd("What cookies we use"), tbd("How to control them"), tbd("Third parties")],
  },
};
