export const site = {
  name: "Dovmant",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dovmant.example",
  tagline:
    "Programmable lower-limb exoskeleton for locomotion research. Open telemetry, controllable torque, transparent mode.",
  heroNote:
    "Built for biomechanics laboratories and the research arms of performance centres. Based in Denver, Colorado.",
  location: "Denver, Colorado",
  address: "[TBD] Street address, Denver, Colorado, USA",
  phone: "[TBD] +1 000 000 0000",
  email: "[TBD] hello@dovmant.example",
  grantsEmail: "[TBD] procurement@dovmant.example",
  researchEmail: "[TBD] research@dovmant.example",
  legalEntity: "[TBD] Legal entity name, Denver, Colorado",
  /** Flip on once the files in /public/video exist (see docs/shot-list.md). */
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO === "1",
  filmVideo: process.env.NEXT_PUBLIC_FILM_VIDEO === "1",
} as const;

/**
 * The exact wording sits in the footer of every page. Pending FDA device
 * regulatory review — do not edit without legal sign-off.
 */
export const researchUseNotice =
  "Dovmant is a research instrument. It is not a medical device and is not intended for the diagnosis, treatment, mitigation, or prevention of any disease or condition. It has not been evaluated or cleared by the FDA. Use in human-subject research is the responsibility of the purchasing institution and requires IRB approval.";

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "System", href: "/system" },
  { label: "Specifications", href: "/specifications" },
  { label: "Research", href: "/research" },
  { label: "Performance", href: "/performance" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
];

export const primaryCta = { label: "Request a lab evaluation", href: "/research#evaluation" };

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Instrument",
    links: [
      { label: "The system", href: "/system" },
      { label: "Specifications", href: "/specifications" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Research partnerships", href: "/research" },
      { label: "Performance research", href: "/performance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Investor relations", href: "/investors" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Research Use Statement", href: "/research-use" },
  { label: "Cookies", href: "/cookies" },
];
