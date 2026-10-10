import type { ImageSlotId } from "./images";
import type { PartId } from "./parts";

export const hero = {
  claim: "AI-driven support for {every step.}",
  moreInfo: {
    label: "More info",
    href: "/technology",
    about: "about the technology",
  },
  paragraph:
    "Dovmant is developing an AI-driven lower-limb exoskeleton for rehabilitation and sports performance. [TBD: regulatory status]",
  contact: { label: "Request a demo", href: "/contact" },
  label: "EXOSKELETON",
};

export const paths = {
  heading: "ONE DEVICE\n~TWO~ {PATHS}",
  items: [
    {
      title: "Rehabilitation",
      text: "A device for therapist-led gait training programs. [TBD: indications]",
      href: "/rehabilitation",
      image: "wear-rehab-therapist" as ImageSlotId,
      overlay: true,
    },
    {
      title: "Sports Performance",
      text: "Support for training, load management and return to play. [TBD]",
      href: "/sports",
      image: "wear-sport-training" as ImageSlotId,
      overlay: false,
    },
  ],
};

export const how = {
  heading: "HOW IT {WORKS}",
  steps: [
    {
      title: "Sensors",
      note: "[TBD] Measure how the leg moves and loads in real time.",
      part: "sensors" as PartId,
    },
    {
      title: "AI motion model",
      note: "[TBD] Interprets movement and decides how much support to give.",
      part: "controller" as PartId,
    },
    {
      title: "Actuators",
      note: "[TBD] Deliver assistance at the joint, adapted step by step.",
      part: "actuator" as PartId,
    },
    {
      title: "App & data",
      note: "[TBD] Sessions and progress available to clinicians and coaches.",
      part: "app" as PartId,
    },
  ],
};

export const wear = {
  heading: "WEAR IT\n~YOUR~ {WAY}",
  items: [
    {
      id: "wear-rehab-therapist" as ImageSlotId,
      caption: "In the clinic — assisted walking",
      overlay: true,
    },
    { id: "wear-rehab-stairs" as ImageSlotId, caption: "Stairs" },
    { id: "wear-sport-training" as ImageSlotId, caption: "Training" },
    { id: "wear-sport-return" as ImageSlotId, caption: "Return-to-play testing" },
    { id: "wear-everyday-walk" as ImageSlotId, caption: "Everyday walking" },
  ],
};

export const metrics = {
  heading: "DOVMANT IN {NUMBERS}",
  stats: [
    { value: "[TBD]", label: "[TBD] metric label", note: "[TBD] short note", source: "[TBD]" },
    { value: "[TBD]", label: "[TBD] metric label", source: "[TBD]" },
    { value: "[TBD]", label: "[TBD] metric label", source: "[TBD]" },
    { value: "[TBD]", label: "[TBD] metric label", source: "[TBD]" },
    { value: "[TBD]", label: "[TBD] metric label", note: "[TBD] short note", source: "[TBD]" },
  ],
};

export const research = {
  heading: "RESEARCH &\n{PARTNERS}",
  logos: ["partner-logo-1", "partner-logo-2", "partner-logo-3", "partner-logo-4"] as ImageSlotId[],
  studies: [
    {
      title: "[TBD] Study title",
      institution: "[TBD] Institution",
      finding: "[TBD] Key finding.",
      pdf: "#",
    },
    {
      title: "[TBD] Study title",
      institution: "[TBD] Institution",
      finding: "[TBD] Key finding.",
      pdf: "#",
    },
  ],
  link: { label: "All research", href: "/research" },
};

export const testimonials = {
  heading: "OUR RESULTS —\nOUR {PROOF}",
  items: [
    {
      id: "testimonial-1" as ImageSlotId,
      name: "[TBD] Name",
      quote: "[TBD] Short quote from a clinician or athlete.",
      overlay: true,
    },
    {
      id: "testimonial-2" as ImageSlotId,
      name: "[TBD] Name",
      quote: "[TBD] Short quote from a clinician or athlete.",
    },
    {
      id: "testimonial-3" as ImageSlotId,
      name: "[TBD] Name",
      quote: "[TBD] Short quote from a clinician or athlete.",
    },
  ],
};

export const investorTeaser = {
  heading: "BUILDING THE NEXT\n{STANDARD} OF MOVEMENT",
  cta: { label: "Investor relations", href: "/investors" },
};

export const faq = {
  heading: "FREQUENTLY ASKED\n{QUESTIONS}",
  items: [
    {
      q: "Who is the device for?",
      a: "[TBD] Describe intended users and indications once confirmed with regulatory and clinical teams.",
    },
    {
      q: "Is the device available to purchase?",
      a: "[TBD] Availability, pilot programs and pre-order status.",
    },
    {
      q: "How is user data handled?",
      a: "[TBD] Data handling, storage and privacy summary. See Privacy page.",
    },
    {
      q: "Has the device been clinically validated?",
      a: "[TBD] Do not state any validation until studies are published.",
    },
  ],
};

export const contact = {
  heading: "LET’S\nGET IN\n{TOUCH}",
  text: "Leave your details and a question — our team will get back to you.",
};
