import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type Stat = {
  value: string;
  label: string;
  note?: string;
  source?: string;
};

const spans = ["md:col-span-5", "md:col-span-7", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

export function StatCard({ stat, className }: { stat: Stat; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[260px] flex-col justify-between bg-surface-200 p-6 md:min-h-[340px] md:p-8",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <p className="display text-metric">{stat.value}</p>
        {stat.note && (
          <p className="max-w-[26ch] text-[13px] leading-[18px] text-ink-muted">{stat.note}</p>
        )}
      </div>
      <div>
        <p className="text-[16px] leading-6 text-ink-muted">{stat.label}</p>
        {stat.source && (
          <p className="mt-2 text-[12px] leading-4 text-ink-muted">Source: {stat.source}</p>
        )}
      </div>
    </div>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      {stats.map((s, i) => (
        <Reveal key={s.label} index={i} className={spans[i % spans.length]}>
          <StatCard stat={s} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}
