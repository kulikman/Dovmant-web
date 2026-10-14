import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { roadmap, type RoadmapItem } from "@/content/roadmap";

/** Status reads from the marker and from the word, never from colour alone. */
function Status({ status }: { status: RoadmapItem["status"] }) {
  return (
    <span className="flex items-center gap-2 text-[12px] leading-4 uppercase text-ink-muted">
      <span
        aria-hidden
        className={cn(
          "inline-block h-3 w-3 shrink-0",
          status === "done" && "bg-ink",
          status === "active" && "bg-accent",
          status === "planned" && "border border-ink-muted",
        )}
      />
      {roadmap.legend[status]}
    </span>
  );
}

export function RoadmapPhases() {
  return (
    <div>
      {roadmap.phases.map((phase, i) => (
        <section
          key={phase.heading}
          className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-ink py-10"
        >
          <div className="col-span-12 md:col-span-4">
            <p className="display text-step-no font-light text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="display mt-4 text-step">{phase.heading}</h2>
            <p className="mt-3 text-[12px] leading-4 uppercase text-ink-muted">{phase.period}</p>
            <p className="mt-4 max-w-[36ch] text-[13px] leading-[18px] text-ink-muted">
              {phase.note}
            </p>
          </div>
          <ul className="col-span-12 md:col-span-8">
            {phase.items.map((item, j) => (
              <Reveal as="li" key={item.title} index={j}>
                <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-line py-5 transition-colors hover:bg-surface-300/60">
                  <p className="col-span-12 text-[20px] leading-[26px] md:col-span-5">
                    {item.title}
                  </p>
                  <p className="col-span-12 max-w-[44ch] text-[13px] leading-[18px] text-ink-muted md:col-span-4">
                    {item.note}
                  </p>
                  <div className="col-span-12 md:col-span-3 md:justify-self-end">
                    <Status status={item.status} />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
