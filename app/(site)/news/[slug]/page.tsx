import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { findNews, newsItems } from "@/content/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findNews(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      type: "article",
      title: item.title,
      description: item.summary,
      publishedTime: item.published ?? undefined,
    },
  };
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  const item = findNews(slug);
  if (!item) notFound();

  return (
    <Section className="pt-8">
      <Link href="/news" className="link text-[15px]">
        ← All news
      </Link>
      <article className="mt-10">
        <SquareMarker tone="accent" className="mb-8" />
        <p className="mb-6 text-[12px] leading-4 uppercase text-ink-muted">
          {item.published ? (
            <time dateTime={item.published}>
              {new Date(item.published).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          ) : (
            item.date
          )}
        </p>
        <SectionHeading as="h1" size="h1" text={item.title} immediate />
        <p className="mt-8 max-w-[60ch] text-[20px] leading-[26px]">{item.summary}</p>
        <div className="mt-12 max-w-[70ch] border-t border-line pt-8">
          {item.body.map((p, i) => (
            <p key={i} className="mb-6 text-[16px] leading-6">
              {p}
            </p>
          ))}
        </div>
      </article>
    </Section>
  );
}
