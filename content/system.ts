export const system = {
  title: "THE {SYSTEM}",
  lead: "Four layers, each one open where it matters to a researcher: sensing you can read, control you can rewrite, actuation you can measure, and data you can take with you.",
  modes: {
    heading: "THREE {MODES}",
    /** Mode names are a proposal — take the firmware's names once they are fixed. */
    note: "[TBD: use the names from the firmware, not from the copy.]",
    items: [
      {
        title: "Transparent",
        text: "The device tracks the limb with minimal resistance, so a session in the device is a usable control condition rather than a confound.",
      },
      {
        title: "Profile",
        text: "A torque curve you define as a function of gait phase, loaded onto the controller and repeated identically across participants and sessions.",
      },
      {
        title: "Adaptive",
        text: "Onboard model adjusts assistance in real time. Every adjustment is logged, so the condition stays reconstructable after the fact.",
      },
    ],
  },
  control: {
    heading: "WRITE YOUR {OWN}",
    text: "Control profiles are not a menu. Define torque as a function of gait phase, load it over [TBD], run it, and the device records what it commanded alongside what it delivered. The gap between the two is itself a measurement.",
    note: "[TBD: name the interface — API, SDK, language, profile file format — and link the documentation or the repository once it exists.]",
  },
  data: {
    heading: "OPEN BY {DEFAULT}",
    text: "Every channel the device logs, with its unit and rate. This table is filled from the real telemetry schema.",
    columns: ["Field", "Unit", "Rate", "Description"],
    rows: [
      ["[TBD]", "[TBD]", "[TBD]", "[TBD]"],
      ["[TBD]", "[TBD]", "[TBD]", "[TBD]"],
      ["[TBD]", "[TBD]", "[TBD]", "[TBD]"],
    ] as string[][],
  },
};
