import { Reveal } from "@/components/motion/Reveal";

export type SpecItem = { param: string; value: string };

/** Engineering parameters on flat panels — never effectiveness figures. */
export function SpecCards({ items }: { items: SpecItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal as="li" key={s.param} index={i}>
          <div className="flex h-full min-h-[180px] flex-col justify-between bg-surface-200 p-6">
            <p className="display text-step">{s.value}</p>
            <p className="mt-6 text-[13px] leading-[18px] text-ink-muted">{s.param}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
