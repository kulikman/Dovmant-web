import { Reveal } from "@/components/motion/Reveal";

export type TimelineItem = { year: string; title: string; note: string };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="border-t border-line">
      {items.map((it, i) => (
        <Reveal as="li" key={i} index={i}>
          <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-line py-8">
            <p className="display col-span-12 text-step text-accent md:col-span-2">{it.year}</p>
            <h3 className="display col-span-12 text-step md:col-span-6">{it.title}</h3>
            <p className="col-span-12 text-[13px] leading-[18px] text-ink-muted md:col-span-4">
              {it.note}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
