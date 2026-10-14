/**
 * Investor pages. Every number stays [TBD] until it has a source we can name —
 * a market figure without a citation reads as a guess to the people who matter,
 * and the claims firewall applies here exactly as it does on the product pages.
 */
export const investors = {
  title: "INVESTOR {RELATIONS}",
  lead: "An instrument for locomotion research, placed with the laboratories whose published work becomes the evidence base.",

  thesis: {
    heading: "THE {THESIS}",
    paragraphs: [
      "Powered exoskeletons have had a decade of clinical approvals and reimbursement codes, and the category still has not produced a venture outcome. We think the reason is that the industry built devices before it built evidence, and then had to buy the evidence itself.",
      "Dovmant starts from the other end. We are placing a programmable, instrumented device with research laboratories, who design the studies, own the data and publish the findings. The asset that compounds is not unit sales — it is an independent body of published work and the dataset underneath it.",
      "That evidence base is what makes a later clinical path credible, and it is the one thing in this category that cannot be bought.",
    ],
  },

  why: {
    heading: "WHY {NOW}",
    items: [
      {
        title: "Actuation got cheap enough to instrument",
        text: "[TBD] One sentence on the component shift that makes a programmable, logged device affordable for a laboratory budget.",
      },
      {
        title: "Laboratories want a controllable variable",
        text: "[TBD] One sentence on what a lab cannot do today with the instruments it owns.",
      },
      {
        title: "Evidence is the bottleneck, not hardware",
        text: "[TBD] One sentence on why published work is the gate every later market passes through.",
      },
    ],
  },

  market: {
    heading: "THE {MARKET}",
    note: "Figures appear here only with a citation. Until each one has a source we can name, the row stays empty — an unsourced market number is the fastest way to lose a reader who knows the field.",
    rows: [
      ["Biomechanics and motion-analysis laboratories, United States", "[TBD]", "[TBD source]"],
      ["Same, worldwide", "[TBD]", "[TBD source]"],
      ["Instrumentation funding awarded annually in scope", "[TBD]", "[TBD source]"],
      ["Performance and sports science groups with capital budget", "[TBD]", "[TBD source]"],
    ] as [string, string, string][],
  },

  model: {
    heading: "BUSINESS {MODEL}",
    items: [
      { title: "Instrument sale", text: "[TBD] Price, gross margin, and what is included." },
      {
        title: "Service and support",
        text: "[TBD] Recurring element, if any: support, calibration, spares.",
      },
      {
        title: "Software",
        text: "[TBD] Whether anything is licensed separately, and on what terms.",
      },
    ],
  },

  traction: {
    heading: "{TRACTION}",
    note: "Only confirmed facts go in this table. Conversations are not traction.",
    items: [] as { date: string; title: string; note: string }[],
    empty:
      "Nothing to report here yet, and we would rather say so than pad the page. What exists today is hardware, a specification in progress and the first laboratory conversations.",
  },

  round: {
    heading: "THE {ROUND}",
    text: "[TBD] Stage, amount, instrument and use of funds. Nothing about the round is published until it is decided — ask and we will tell you where it stands.",
  },

  team: {
    heading: "THE {TEAM}",
    text: "[TBD] Founders and the key hires the round pays for. Names and roles are on the about page as they are confirmed.",
    link: { label: "About the company", href: "/about" },
  },

  deck: {
    heading: "THE {DECK}",
    text: "The deck is shared directly rather than left on an open link, so we know who is reading and can answer questions while they read.",
    /** Set to a DocSend or viewer URL to embed the deck in place of the form. */
    embedUrl: null as string | null,
    embedNote:
      "[TBD] Add the deck link once there is a version you are happy for a stranger to read unaccompanied.",
  },

  contact: {
    heading: "TALK TO {US}",
    text: "Questions about the thesis, the roadmap or the round. We answer every message from an investor ourselves.",
  },
};
