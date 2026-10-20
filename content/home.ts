import type { ImageSlotId } from "./images";

export const hero = {
  claim:
    "A programmable lower-limb exoskeleton built to be {measured}, not just worn. Open telemetry, controllable torque, transparent mode.",
  moreInfo: { label: "What it does", href: "#how-it-works", about: "— how the system works" },
  contact: { label: "Request a lab evaluation", href: "/research#evaluation" },
  label: "LOCOMOTION RESEARCH",
};

/** Three claims — the lab-facing argument, in place of audience segments. */
/** Two large cards: the instrument, and the way it reaches a laboratory. */
export const paths = {
  items: [
    {
      title: "The system",
      text: "Four layers, each open where it matters: sensing you can read, control you can rewrite, actuation you can measure, data you can take with you.",
      href: "/system",
      image: "page-hero-system" as ImageSlotId,
      overlay: true,
    },
    {
      title: "Research partnerships",
      text: "We place instruments with laboratories and get out of the way. You write the protocol, hold the approval, own the data and publish.",
      href: "/research",
      image: "device-standalone" as ImageSlotId,
      overlay: false,
    },
  ],
};

export const claims = {
  heading: "BUILT FOR THE {LAB}",
  items: [
    {
      title: "Torque you program",
      text: "Assistance is a function you define across the gait cycle, not a preset you pick.",
    },
    {
      title: "Data you own",
      text: "Raw signals export in open formats. No closed ecosystem, no vendor dashboard between you and your data.",
    },
    {
      title: "A true baseline",
      text: "Transparent mode is built to track the limb with minimal resistance, so a session in the device is a usable control condition rather than a confound.",
    },
  ],
};

export const how = {
  heading: "HOW IT {WORKS}",
  steps: [
    {
      title: "Sensing",
      note: "Onboard sensors read joint state and interaction forces continuously, and every channel is logged.",
      part: "sensors",
    },
    {
      title: "Control",
      note: "Torque profiles run on a real-time loop. Presets ship with the device; custom profiles are yours to write.",
      part: "control",
    },
    {
      title: "Actuation",
      note: "Actuation at the hip, with commanded and measured torque both recorded. A knee module is in development and is not part of the current device.",
      part: "hip",
    },
    {
      title: "Sync and export",
      note: "Hardware trigger and timestamped streams for alignment with motion capture, force plates and EMG. Export as CSV and HDF5.",
      part: "sync",
    },
  ],
};

export const scenarios = {
  heading: "RESEARCH {SCENARIOS}",
  lead: "What laboratories are setting up with it. Photographs follow as the first sessions are recorded — we would rather show an empty row than a scene we staged.",
  items: [
    {
      title: "Overground gait",
      text: "Walking trials across a force-plate runway, in transparent mode and under assistance.",
    },
    {
      title: "Incline and stairs",
      text: "Controlled elevation work, where joint moments are highest.",
    },
    {
      title: "Loaded locomotion",
      text: "Carriage tasks with an added external load.",
    },
    {
      title: "Sprint and change of direction",
      text: "High-rate movement, where control latency is the limiting factor.",
    },
    {
      title: "Extended-duration protocols",
      text: "Multi-hour sessions for fatigue and metabolic work.",
    },
  ],
};

/**
 * No parameters on the site: at this stage they are the work itself, and the
 * document goes to a named institution rather than to an open page.
 */
export const specNote = {
  heading: "THE {SPECIFICATION}",
  text: "Peak and continuous torque, loop rate, latency, the telemetry schema, battery and the participant limits are all measured and written down. They are shared with laboratories considering an evaluation, in a document you can attach to a grant application — not published here.",
  link: { label: "What the document covers", href: "/specifications" },
};

export const programme = {
  heading: "WORK WITH {US}",
  text: "We are placing units with biomechanics and performance laboratories. You design the protocol and own the data; we supply the instrument, the integration support and the engineering contact. Publications are yours.",
  link: { label: "Partnership programme", href: "/research" },
};

export const investorStrip = {
  heading: "BUILDING THE {MEASUREMENT} LAYER FOR HUMAN LOCOMOTION",
  cta: { label: "Investor relations", href: "/investors" },
  secondary: { label: "Roadmap", href: "/roadmap" },
};

export const faq = {
  heading: "FREQUENTLY ASKED {QUESTIONS}",
  items: [
    {
      q: "Is Dovmant a medical device?",
      a: "No. Dovmant is a research instrument. It is not cleared by the FDA and is not intended for diagnosis, treatment or prevention of any condition.",
    },
    {
      q: "Can we use it in a study with human participants?",
      a: "That is the intended use. The protocol, the IRB submission and the ethical oversight are the purchasing institution's responsibility. We supply the device specification and engineering support for your application.",
    },
    {
      q: "What data comes out of it?",
      a: "Timestamped joint state, commanded and measured torque, and interaction forces, exported as CSV and HDF5. The full channel schema is in the specification we send you.",
    },
    {
      q: "Does it synchronise with our capture system?",
      a: "Tell us what you run. We check the trigger against your capture system before you commit to anything, and the systems it has been verified with are named in the specification we send you.",
    },
    {
      q: "Can we write our own control profiles?",
      a: "Yes. You define torque as a function of gait phase and load the profile onto the controller; the interface and the profile format are described in the specification.",
    },
    {
      q: "What does it cost and how long is delivery?",
      a: "Price, lead time and warranty are quoted to your institution in writing, in a form that goes straight into a grant budget. Ask and we will send it.",
    },
    {
      q: "Do you help with instrumentation grant applications?",
      a: "Yes. We provide the specification, a quotation and a letter of support for S10 and equivalent instrumentation funding.",
    },
  ],
};

export const contact = {
  heading: "REQUEST A\nLAB\n{EVALUATION}",
  text: "Tell us what you study and what you run. We will work out whether the instrument fits your setup before you commit to anything.",
};
