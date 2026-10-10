export type NewsItem = {
  slug: string;
  date: string;
  /** ISO date; null until a real publication date exists. */
  published: string | null;
  title: string;
  summary: string;
  /** Paragraphs. Keep free of claims until reviewed. */
  body: string[];
};

export const newsPage = {
  title: "NEWS &\n{UPDATES}",
  lead: "Company updates, research notes and events. [TBD]",
  empty: "No updates have been published yet.",
};

export const newsItems: NewsItem[] = [
  {
    slug: "placeholder-update-1",
    date: "[TBD]",
    published: null,
    title: "[TBD] Headline",
    summary: "[TBD] One-paragraph summary shown in the list and in search results.",
    body: [
      "[TBD] First paragraph of the update. Replace with reviewed copy before publishing.",
      "[TBD] Second paragraph. Do not state outcomes, certifications or partnerships until they are confirmed.",
    ],
  },
  {
    slug: "placeholder-update-2",
    date: "[TBD]",
    published: null,
    title: "[TBD] Headline",
    summary: "[TBD] One-paragraph summary shown in the list and in search results.",
    body: ["[TBD] First paragraph of the update."],
  },
];

export const findNews = (slug: string) => newsItems.find((n) => n.slug === slug);
