export function SpecsTable({ rows, caption }: { rows: [string, string][]; caption: string }) {
  return (
    <table className="w-full border-t border-line text-left">
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k} className="border-b border-line transition-colors hover:bg-surface-300/60">
            <th scope="row" className="w-1/2 py-4 pr-6 text-[16px] leading-6 font-normal">
              {k}
            </th>
            <td className="py-4 text-[16px] leading-6 text-ink-muted">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
