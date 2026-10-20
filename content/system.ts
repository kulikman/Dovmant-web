export const system = {
  title: "THE {SYSTEM}",
  lead: "Four layers, each one open where it matters to a researcher: sensing you can read, control you can rewrite, actuation you can measure, and data you can take with you. The device actuates the hip; a knee module is in development.",
  modes: {
    heading: "THREE {MODES}",
    /** Internal: take the firmware's names once they are fixed. */
    note: "[TBD] Mode names are provisional.",
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
    text: "Control profiles are not a menu. Define torque as a function of gait phase, load it onto the controller, run it, and the device records what it commanded alongside what it delivered. The gap between the two is itself a measurement.",
    note: "The interface, the profile format and the documentation go to laboratories with the specification.",
  },
  data: {
    heading: "OPEN BY {DEFAULT}",
    text: "Every channel the device logs is exported in open formats — CSV and HDF5 — with a hardware trigger for alignment against your capture system. What is logged, in what unit and at what rate, is listed channel by channel in the specification we send you.",
    logged: [
      "Joint angle and joint state",
      "Commanded torque",
      "Measured torque",
      "Interaction forces at the cuffs",
      "Mode, profile identifier and every change to either",
      "Session timestamps aligned to the trigger",
    ],
  },
};
