/**
 * The roadmap. Horizons, not dates: a public date is a promise, and a missed one
 * costs more than an empty field. Statuses come from the build, not from hope.
 */
export type RoadmapItem = { title: string; note: string; status: "done" | "active" | "planned" };

export const roadmap = {
  title: "THE {ROADMAP}",
  lead: "What exists, what is being built, and what each step unlocks. Horizons rather than dates: a published date is a promise, and we would rather keep the ones we make.",

  legend: {
    done: "Done",
    active: "In progress",
    planned: "Planned",
  },

  phases: [
    {
      period: "NOW",
      heading: "INSTRUMENT",
      note: "The hardware a laboratory receives.",
      items: [
        {
          title: "Hip-actuated device",
          note: "Hip-actuated, worn on a belt with thigh cuffs. This is the device a laboratory receives today.",
          status: "active",
        },
        {
          title: "Bench characterisation",
          note: "Torque, latency and residual torque measured on the bench and written into the specification we issue.",
          status: "planned",
        },
        {
          title: "Knee module",
          note: "In development. Not part of the current device, and not quoted as if it were.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "NOW",
      heading: "CONTROL AND DATA",
      note: "What a researcher can write, record and take away.",
      items: [
        {
          title: "Torque profiles",
          note: "Profile format and the interface a researcher writes against.",
          status: "active",
        },
        {
          title: "Telemetry schema",
          note: "Channels, units and rates documented in full for the laboratories we work with.",
          status: "planned",
        },
        {
          title: "Synchronisation",
          note: "Hardware trigger checked against each capture system by name, rather than claimed in general.",
          status: "planned",
        },
        {
          title: "Investigator console",
          note: "Session review and export for the investigator, with synthetic data until a laboratory records its own.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "NEXT",
      heading: "EVIDENCE",
      note: "Independent work by laboratories, which we do not author.",
      items: [
        {
          title: "First laboratory placements",
          note: "Units placed with laboratories. They write the protocol, hold the approval and own the data.",
          status: "planned",
        },
        {
          title: "First publications",
          note: "Authored and submitted by the laboratories. We are named in the methods section, not on the paper.",
          status: "planned",
        },
        {
          title: "Reference dataset",
          note: "A dataset recorded with the instrument, published for download so a lab can read the schema before it commits.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "NOW",
      heading: "COMMERCIAL",
      note: "What makes the instrument buyable through an institution.",
      items: [
        {
          title: "Specification and quotation",
          note: "Specification, price, lead time and warranty, issued to a named institution.",
          status: "active",
        },
        {
          title: "Supplier registration",
          note: "The registrations a grants office checks before a purchase order can be raised.",
          status: "planned",
        },
        {
          title: "Service and spares",
          note: "A stated response time, a repair route and parts on the shelf — the things an institution asks about before it buys.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
    {
      period: "LATER",
      heading: "COMPLIANCE",
      note: "The groundwork a later path would stand on. Nothing here is a claim about status today.",
      items: [
        {
          title: "Electrical safety and EMC testing",
          note: "Electrical safety and EMC testing, with reports an institution can put in front of its safety office.",
          status: "planned",
        },
        {
          title: "Battery certification",
          note: "Battery certification, without which the instrument cannot be shipped.",
          status: "planned",
        },
        {
          title: "Documentation for IRB submissions",
          note: "The document pack an institution submits with its ethics application.",
          status: "planned",
        },
      ] as RoadmapItem[],
    },
  ],

  caveat:
    "This roadmap is a statement of intent, not a commitment to dates or features. It is written for investors and for the laboratories deciding whether to work with an instrument that is still evolving.",
};
