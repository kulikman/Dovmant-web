import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { investors } from "@/content/investors";

/**
 * The deck. While `embedUrl` is null the block is a request form, which is the
 * deliberate default: the deck is handed over rather than left on an open link.
 * Setting the URL swaps the form for the viewer without touching this file.
 */
export function DeckBlock({ id = "deck" }: { id?: string }) {
  const { heading, text, embedUrl, embedNote } = investors.deck;

  return (
    <Section id={id}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
          <SquareMarker tone="accent" size={16} />
          <SectionHeading text={heading} size="h1" />
          <p className="max-w-[40ch] text-[16px] leading-6 text-ink-muted">{text}</p>
          {!embedUrl && (
            <p className="max-w-[40ch] text-[13px] leading-[18px] text-ink-muted">{embedNote}</p>
          )}
        </div>
        <div className="col-span-12 md:col-span-7">
          {embedUrl ? (
            <div className="aspect-16/10 w-full border border-line bg-surface-200">
              <iframe
                src={embedUrl}
                title="Dovmant deck"
                allow="fullscreen"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <EnquiryForm kind="deck" />
          )}
        </div>
      </div>
    </Section>
  );
}
