import type { ImageSlotId } from "./images";

/** Every factual claim is deliberately left as [TBD]. See CLAUDE.md rule 1. */

export const technology = {
  title: "ONE SYSTEM,\n{FOUR} LAYERS",
  lead: "Sensing, an AI motion model, actuation and data — working together on every step. [TBD]",
  hero: "page-hero-technology" as ImageSlotId,
  aiHeading: "THE {AI} LAYER",
  ai: [
    {
      title: "Learns the gait",
      note: "[TBD] Describe how the model adapts to an individual's walking pattern.",
    },
    {
      title: "Decides the assistance",
      note: "[TBD] Describe how support level is chosen step by step.",
    },
    { title: "Stays within limits", note: "[TBD] Describe safety supervision and limits." },
  ],
  specsHeading: "SPECIFICATIONS",
  specs: [
    ["Weight", "[TBD]"],
    ["Battery life", "[TBD]"],
    ["Actuated joints", "[TBD]"],
    ["Torque", "[TBD]"],
    ["User height range", "[TBD]"],
    ["User weight limit", "[TBD]"],
    ["Donning time", "[TBD]"],
    ["Connectivity", "[TBD]"],
    ["Regulatory status", "[TBD] — no claims until confirmed"],
  ] as [string, string][],
  details: ["detail-knee-actuator", "detail-sensors", "detail-fit-straps"] as ImageSlotId[],
};

export const rehabilitation = {
  title: "REHABILITATION\n~BUILT ON~ {DATA}",
  lead: "A device intended to support therapist-led gait training. [TBD: indications and regulatory status]",
  hero: "page-hero-rehabilitation" as ImageSlotId,
  indicationsHeading: "WHERE IT {FITS}",
  indications: [
    {
      title: "[TBD] Indication",
      text: "[TBD] Describe the clinical situation once confirmed with the clinical team.",
    },
    {
      title: "[TBD] Indication",
      text: "[TBD] Describe the clinical situation once confirmed with the clinical team.",
    },
    {
      title: "[TBD] Indication",
      text: "[TBD] Describe the clinical situation once confirmed with the clinical team.",
    },
  ],
  protocolHeading: "A SESSION,\n{STEP BY STEP}",
  protocol: [
    { title: "Assessment", note: "[TBD] What the therapist records before the first session." },
    { title: "Fitting", note: "[TBD] How the device is adjusted to the patient." },
    { title: "Guided training", note: "[TBD] How a training session is structured." },
    { title: "Review", note: "[TBD] How progress is reviewed between sessions." },
  ],
  pilotHeading: "PILOT {PROGRAM}",
  pilotText:
    "We are looking for clinics to work with us on early evaluations. Tell us about your setting and we will follow up. [TBD: program details]",
  faq: [
    {
      q: "Which professionals operate the device?",
      a: "[TBD] Describe required training and supervision.",
    },
    {
      q: "How does it fit into an existing therapy plan?",
      a: "[TBD] Describe integration with standard care.",
    },
    { q: "What data does the clinician receive?", a: "[TBD] Describe session data and reporting." },
  ],
};

export const sports = {
  title: "TRAIN HARDER.\n{RECOVER} SMARTER.",
  lead: "Support for training load, recovery and return to play. [TBD: evidence]",
  hero: "page-hero-sports" as ImageSlotId,
  scenariosHeading: "THREE {SCENARIOS}",
  scenarios: [
    {
      title: "Return to play",
      note: "[TBD] How the device is intended to support a graded return.",
    },
    { title: "Load management", note: "[TBD] How session load is tracked and adjusted." },
    { title: "Training", note: "[TBD] How the device is used in regular training." },
  ],
  caseHeading: "CASE {STUDY}",
  caseText:
    "[TBD] A case study will be published here once a partner team has completed an evaluation.",
};

export const research = {
  title: "EVIDENCE\n{FIRST}",
  lead: "We publish what we find and name our partners. Until a study is complete, this page stays empty on purpose. [TBD]",
  hero: "page-hero-research" as ImageSlotId,
  tableHeading: "PUBLICATIONS",
  rows: [
    {
      title: "[TBD] Title",
      institution: "[TBD] Institution",
      year: "[TBD]",
      status: "[TBD]",
      pdf: "#",
    },
    {
      title: "[TBD] Title",
      institution: "[TBD] Institution",
      year: "[TBD]",
      status: "[TBD]",
      pdf: "#",
    },
  ],
  partnershipHeading: "RESEARCH {PARTNERSHIPS}",
  partnershipText:
    "We work with clinics and labs on protocol design, data collection and publication. [TBD: what we provide]",
};

export const about = {
  title: "WE BUILD FOR\n{MOVEMENT}",
  lead: "Dovmant is developing an AI-driven lower-limb exoskeleton for rehabilitation and sports performance. [TBD]",
  hero: "page-hero-about" as ImageSlotId,
  missionHeading: "OUR {MISSION}",
  missionText:
    "[TBD] One paragraph on why the company exists, written by the founders. Keep it free of performance claims.",
  timelineHeading: "TIMELINE",
  timeline: [
    { year: "[TBD]", title: "[TBD] Milestone", note: "[TBD] One line." },
    { year: "[TBD]", title: "[TBD] Milestone", note: "[TBD] One line." },
    { year: "[TBD]", title: "[TBD] Milestone", note: "[TBD] One line." },
  ],
  teamHeading: "OUR {TEAM}",
  team: [
    { id: "team-1" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "tall" },
    { id: "team-2" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "mid" },
    { id: "team-3" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "tall" },
    { id: "team-4" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "short" },
    { id: "team-5" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "mid" },
    { id: "team-6" as ImageSlotId, name: "[TBD] Name", role: "[TBD] Role", h: "tall" },
  ],
  advisorsHeading: "ADVISORS",
  advisors: [
    { name: "[TBD] Name", role: "[TBD] Field" },
    { name: "[TBD] Name", role: "[TBD] Field" },
    { name: "[TBD] Name", role: "[TBD] Field" },
  ],
  careersHeading: "CAREERS",
  careersText: "[TBD] Open roles will be listed here. Write to us in the meantime.",
};

export const news = {
  title: "NEWS &\n{UPDATES}",
  lead: "Company updates, research notes and events. [TBD]",
  items: [
    { date: "[TBD]", title: "[TBD] Headline", text: "[TBD] One-paragraph summary." },
    { date: "[TBD]", title: "[TBD] Headline", text: "[TBD] One-paragraph summary." },
  ],
};

export const contactPage = {
  title: "LET’S\nGET IN\n{TOUCH}",
  lead: "Tell us who you are and what you need. We read every message. [TBD: response time]",
};
