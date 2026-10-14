export const about = {
  title: "WHY WE BUILD {THIS}",
  lead: "Dovmant builds a programmable lower-limb exoskeleton for locomotion research. We are based in Denver, Colorado.",
  mission: {
    heading: "THE {MISSION}",
    text: "Human locomotion is studied with instruments that either measure without intervening or intervene without measuring. We are building one that does both, and we are building it to be opened, programmed and argued with rather than trusted.",
  },
  /** Only confirmed milestones. Fewer than three → the block is not rendered. */
  timeline: {
    heading: "TIMELINE",
    items: [] as { year: string; title: string; note: string }[],
  },
  /** One slot per real person. No portraits until the shoot. */
  team: {
    heading: "THE {TEAM}",
    note: "[TBD] The team block goes up with real names, real roles and real portraits — one slot per person, no more.",
    people: [] as { id: string; name: string; role: string; h?: string }[],
  },
  /** Advisors appear only with a signed agreement. */
  advisors: {
    heading: "ADVISORS",
    note: "[TBD] Advisors are listed only once an advisor agreement is signed.",
    items: [] as { name: string; role: string }[],
  },
  location: {
    heading: "WHERE WE {ARE}",
    text: "Denver, Colorado. For laboratories and performance groups along the Front Range, that means we can bring a unit to you.",
  },
  careers: {
    heading: "CAREERS",
    text: "No open positions listed right now. If you build instruments for human movement research, write to us.",
  },
};

export const contactPage = {
  title: "CONTACT",
  lead: "Three ways in, depending on what you need.",
  branches: [
    {
      heading: "RESEARCH {ENQUIRIES}",
      text: "Principal investigators, lab directors and core facilities. Tell us what you study and what you run.",
      form: "lab-evaluation" as const,
    },
    {
      heading: "PROCUREMENT AND {GRANTS}",
      text: "Grants offices and purchasing. We supply a formal quotation, a letter of support on availability and lead time, and supplier registration details.",
      details: [
        ["Email", "[TBD] procurement@dovmant.example"],
        ["Legal entity", "[TBD] Legal entity name, Denver, Colorado"],
        ["W-9", "[TBD] available on request"],
        ["Supplier registration", "[TBD] registration details"],
      ] as [string, string][],
      form: "quotation" as const,
    },
    {
      heading: "{GENERAL}",
      text: "Anything else.",
      form: "general" as const,
    },
  ],
};

export const news = {
  title: "NEWS",
  lead: "Company updates and research notes.",
  empty:
    "Nothing published yet. This page stays empty until there is something real to report — it is linked from the footer and will return to the navigation once it carries its third entry.",
};
