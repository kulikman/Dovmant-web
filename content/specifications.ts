export const specifications = {
  title: "SPECIFICATION {SHEET}",
  lead: "Everything a grant application needs in one document: parameters, interfaces, delivery terms and a quotation request. Download the PDF or request a formal quote.",
  tables: [
    {
      heading: "MECHANICAL",
      rows: [
        ["Total system mass", "5–6 kg"],
        ["Mass distribution", "[TBD]"],
        ["Degrees of freedom", "[TBD]"],
        ["Actuated joints", "[TBD]"],
        ["Range of motion per joint", "[TBD]"],
        ["Adjustable segment range", "[TBD]"],
        ["Participant height range", "[TBD]"],
        ["Participant mass limit", "[TBD]"],
        ["Donning time", "[TBD]"],
        ["Ingress protection", "[TBD]"],
      ],
    },
    {
      heading: "ACTUATION",
      rows: [
        ["Peak torque per joint", "[TBD] N·m"],
        ["Continuous torque per joint", "[TBD] N·m"],
        ["Peak angular velocity", "[TBD]"],
        ["Torque resolution", "[TBD]"],
        ["Torque measurement accuracy", "[TBD]"],
        ["Residual torque in transparent mode", "[TBD]"],
      ],
    },
    {
      heading: "SENSING",
      rows: [
        ["Sensor types and locations", "[TBD]"],
        ["Sampling rate per channel", "[TBD] Hz"],
        ["Resolution", "[TBD]"],
        ["Measurement range", "[TBD]"],
      ],
    },
    {
      heading: "CONTROL",
      rows: [
        ["Loop rate", "[TBD] Hz"],
        ["Latency, sensor to actuation", "[TBD] ms"],
        ["Profile definition format", "[TBD]"],
        ["Onboard profile storage", "[TBD]"],
        ["Interface for loading profiles", "[TBD]"],
      ],
    },
    {
      heading: "DATA AND SYNCHRONISATION",
      rows: [
        ["Logged channels", "[TBD]"],
        ["Export formats", "CSV, HDF5"],
        ["Onboard storage", "[TBD]"],
        ["Transfer interface", "[TBD]"],
        ["Hardware trigger type and connector", "[TBD]"],
        ["Timestamp accuracy", "[TBD]"],
        ["Clock drift over a one-hour session", "[TBD]"],
      ],
    },
    {
      heading: "POWER",
      rows: [
        ["Battery capacity", "[TBD] Wh"],
        ["Runtime under [TBD] load profile", "[TBD] h"],
        ["Charge time", "[TBD]"],
        ["Swappable or fixed", "[TBD]"],
        ["Operating temperature range", "[TBD]"],
      ],
    },
  ] as { heading: string; rows: [string, string][] }[],
  commercial: {
    heading: "COMMERCIAL {TERMS}",
    text: "An instrument counts as commercially available only if these are published. Every line is required before this page goes live.",
    rows: [
      ["List price (USD)", "[TBD]"],
      ["Academic pricing", "[TBD]"],
      ["Lead time from PO", "[TBD] weeks"],
      ["Warranty", "[TBD]"],
      ["Service and support", "[TBD]"],
      ["Installation and training", "[TBD]"],
      ["Spare parts availability", "[TBD]"],
      ["Shipping terms", "[TBD]"],
      ["Quotation validity", "[TBD] days"],
    ] as [string, string][],
  },
  grants: {
    heading: "FOR {GRANT} APPLICATIONS",
    text: "Applying for instrumentation funding? We provide a formal quotation, a letter of support, and a technical justification section you can adapt for your application. Tell us your submission deadline and we will work to it.",
    /** A supplier's letter about availability, price and lead time — not a scientific endorsement. */
    note: "A letter of support here is a supplier statement on availability, price and lead time. It is not a scientific endorsement and makes no claim about outcomes.",
  },
};
