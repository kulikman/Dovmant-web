export const site = {
  name: "Dovmant",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dovmant.example",
  tagline: "AI-driven lower-limb exoskeleton for rehabilitation and sports performance.",
  address: "[TBD] Address line, City, Country",
  phone: "[TBD] +00 000 000 000",
  email: "[TBD] hello@dovmant.example",
  /** Flip on once the files in /public/video exist (see docs/shot-list.md). */
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO === "1",
  filmVideo: process.env.NEXT_PUBLIC_FILM_VIDEO === "1",
  /** Set to the deck path once the PDF is published, e.g. "/investors/deck.pdf". */
  deckUrl: null as string | null,
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Rehabilitation", href: "/rehabilitation" },
  { label: "Sports", href: "/sports" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Rehabilitation", href: "/rehabilitation" },
      { label: "Sports", href: "/sports" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Investor relations", href: "/investors" },
      { label: "Data room", href: "/investors/data-room" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Request a demo", href: "/contact" },
      { label: "Questions", href: "/#faq" },
    ],
  },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Cookies", href: "/cookies" },
];
