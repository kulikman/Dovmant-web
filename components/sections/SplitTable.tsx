import { cn } from "@/lib/cn";

/** Two columns of matched responsibilities, separated by a hairline. */
export function SplitTable({
  left,
  right,
  rows,
  className,
}: {
  left: string;
  right: string;
  rows: [string, string][];
  className?: string;
}) {
  return (
    <table className={cn("w-full border-t border-line text-left", className)}>
      <thead>
        <tr className="border-b border-line text-[12px] leading-4 uppercase text-ink-muted">
          <th scope="col" className="w-1/2 py-3 pr-6 font-medium">
            {left}
          </th>
          <th scope="col" className="py-3 pl-6 font-medium">
            {right}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b]) => (
          <tr
            key={a}
            className="border-b border-line align-top transition-colors hover:bg-surface-300/60"
          >
            <td className="py-5 pr-6 text-[16px] leading-6">{a}</td>
            <td className="border-l border-line py-5 pl-6 text-[16px] leading-6 text-ink-muted">
              {b}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
