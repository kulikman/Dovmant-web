/**
 * The roadmap. Dates are [TBD] until they are committed internally — a public
 * date is a promise, and a missed one costs more than an empty field.
 */
export type RoadmapItem = { title: string; note: string; status: "done" | "active" | "planned" };

export const roadmap = {
  title: "THE {ROADMAP}",
  lead: "What exists, what is being built, and what each step unlocks. Dates appear here once they are committed rather than hoped for.",

  legend: {
    done: "Done",
    active: "In progress",
    planned: "Planned",
  },

  phases: [
    {
      period: "[TBD]",
      heading: "INSTRUMENT",
      note: "The hardware a laboratory receives.",
      items: [
        {
          title: "Hip-actuated device",
          note: "[TBD] State of the current build.",
          status: "active",
        },
        {
          title: "Bench characterisation",
          note: "[TBD] Torque, latency and residual torque measured and published in the specification.",
          status: "planned",
        },
        {
          title: "Knee module",
          note: "[TBD] In development. Not part of the current device.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "[TBD]",
      heading: "CONTROL AND DATA",
      note: "What a researcher can write, record and take away.",
      items: [
        {
          title: "Torque profiles",
          note: "[TBD] Profile format and the interface for loading them.",
          status: "active",
        },
        {
          title: "Telemetry schema",
          note: "[TBD] Channels, units and rates, published in full.",
          status: "planned",
        },
        {
          title: "Synchronisation",
          note: "[TBD] Hardware trigger verified against named capture systems.",
          status: "planned",
        },
        {
          title: "Investigator console",
          note: "[TBD] Session review and export.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "[TBD]",
      heading: "EVIDENCE",
      note: "Independent work by laboratories, which we do not author.",
      items: [
        {
          title: "First laboratory placements",
          note: "[TBD] Units placed, protocols written by the labs.",
          status: "planned",
        },
        {
          title: "First publications",
          note: "[TBD] Authored and submitted by the laboratories.",
          status: "planned",
        },
        {
          title: "Reference dataset",
          note: "[TBD] A recorded dataset published for download.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "[TBD]",
      heading: "COMMERCIAL",
      note: "What makes the instrument buyable through an institution.",
      items: [
        {
          title: "Specification and quotation",
          note: "[TBD] Published parameters, price, lead time and warranty.",
          status: "active",
        },
        {
          title: "Supplier registration",
          note: "[TBD] Entity, UEI and the paperwork a grants office asks for.",
          status: "planned",
        },
        {
          title: "Service and spares",
          note: "[TBD] Response time, repair route, parts availability.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "[TBD]",
      heading: "COMPLIANCE",
      note: "The groundwork a later path would stand on. Nothing here is a claim about status today.",
      items: [
        {
          title: "Electrical safety and EMC testing",
          note: "[TBD] Standards tested against, reports available.",
          status: "planned",
        },
        {
          title: "Battery certification",
          note: "[TBD] UN 38.3, needed for shipping.",
          status: "planned",
        },
        {
          title: "Documentation for IRB submissions",
          note: "[TBD] The pack an institution receives.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
  ],

  caveat:
    "This roadmap is a statement of intent, not a commitment to dates or features. It is written for investors and for the laboratories deciding whether to work with an instrument that is still evolving.",
};
