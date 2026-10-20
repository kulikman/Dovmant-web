/**
 * Investor pages. No figure appears here without a source we can name: a market
 * number without a citation reads as a guess to the people who matter. The
 * working goes in the deck, and the claims firewall applies here exactly as it
 * does on the product pages.
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
        text: "Actuation, sensing and onboard compute have reached a price where a fully instrumented, programmable device fits a laboratory budget rather than a national programme.",
      },
      {
        title: "Laboratories want a controllable variable",
        text: "A laboratory can measure movement precisely or intervene in it, but rarely both with the same instrument — and almost never with an intervention it defines itself and can repeat exactly.",
      },
      {
        title: "Evidence is the bottleneck, not hardware",
        text: "Every later market in this category — clinical, occupational, consumer — is gated by independent published work, and that work has to be done by someone other than the manufacturer.",
      },
    ],
  },

  market: {
    heading: "THE {MARKET}",
    text: "We size it from the number of laboratories that could use an instrument like this and the instrumentation funding they draw on, and we show the working — with sources — in the deck rather than on this page. A market figure without a citation is a guess, and the people we want to talk to can tell.",
  },

  model: {
    heading: "BUSINESS {MODEL}",
    items: [
      {
        title: "Instrument sale",
        text: "The instrument is sold outright to the institution, with the specification and quotation written so it can be bought on an instrumentation grant.",
      },
      {
        title: "Service and support",
        text: "Support, spares and the engineering contact that comes with a placement. This is where the relationship continues after the purchase order.",
      },
      {
        title: "Software",
        text: "The device runs what it ships with, and a laboratory writes its own profiles against it. Unit economics and anything licensed separately are in the deck.",
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
    text: "Stage, amount and use of funds are discussed in a conversation rather than published. Ask and we will tell you exactly where it stands.",
  },

  team: {
    heading: "THE {TEAM}",
    text: "Founders, and the hires the round pays for. Names and roles appear on the about page as each person agrees to be listed.",
    link: { label: "About the company", href: "/about" },
  },

  deck: {
    heading: "THE {DECK}",
    text: "The deck is shared directly rather than left on an open link, so we know who is reading and can answer questions while they read.",
    /** Set to a DocSend or viewer URL to embed the deck in place of the form. */
    embedUrl: null as string | null,
    /** Internal: set embedUrl and the form is replaced by the viewer. */
    embedNote: "",
  },

  contact: {
    heading: "TALK TO {US}",
    text: "Questions about the thesis, the roadmap or the round. We answer every message from an investor ourselves.",
  },
};
