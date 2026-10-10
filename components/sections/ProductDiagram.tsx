"use client";

import { useState } from "react";
import { parts, type PartId } from "@/content/parts";
import { cn } from "@/lib/cn";

/** Node positions on a 240×560 canvas. */
const nodes: { id: PartId; x: number; y: number; labelSide: "l" | "r" }[] = [
  { id: "controller", x: 80, y: 60, labelSide: "l" },
  { id: "sensors", x: 80, y: 190, labelSide: "l" },
  { id: "actuator", x: 80, y: 320, labelSide: "l" },
  { id: "fit", x: 80, y: 450, labelSide: "l" },
  { id: "app", x: 200, y: 190, labelSide: "r" },
];

type Props = {
  active?: PartId | null;
  onSelect?: (id: PartId) => void;
  className?: string;
  /** show the description for the active part under the diagram */
  describe?: boolean;
};

export function ProductDiagram({ active: controlled, onSelect, className, describe }: Props) {
  const [inner, setInner] = useState<PartId>("actuator");
  const active = controlled === undefined ? inner : controlled;
  const select = (id: PartId) => (onSelect ? onSelect(id) : setInner(id));
  const part = parts.find((p) => p.id === active);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 280 520"
        role="group"
        aria-label="Schematic of the main parts"
        className="h-auto w-full max-w-[420px]"
      >
        <line x1="80" y1="60" x2="80" y2="450" stroke="var(--steel)" strokeWidth="1" />
        <line
          x1="80"
          y1="190"
          x2="200"
          y2="190"
          stroke="var(--steel)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        {nodes.map((n) => {
          const on = n.id === active;
          const label = parts.find((p) => p.id === n.id)!.label;
          return (
            <g key={n.id}>
              <rect
                x={n.x - 9}
                y={n.y - 9}
                width="18"
                height="18"
                fill={on ? "var(--accent)" : "var(--steel)"}
                style={{ transition: "fill 300ms" }}
              />
              <text
                x={n.labelSide === "l" ? n.x + 20 : n.x - 10}
                y={n.labelSide === "l" ? n.y + 5 : n.y - 20}
                textAnchor={n.labelSide === "l" ? "start" : "middle"}
                fontSize="13"
                fill="var(--ink)"
                fontWeight={on ? 500 : 400}
              >
                {label}
              </text>
              <foreignObject x={n.x - 22} y={n.y - 22} width="44" height="44">
                <button
                  type="button"
                  aria-label={label}
                  aria-pressed={on}
                  onClick={() => select(n.id)}
                  onMouseEnter={() => controlled === undefined && select(n.id)}
                  className={cn("h-full w-full")}
                />
              </foreignObject>
            </g>
          );
        })}
      </svg>
      {describe && part && (
        <div className="mt-6 border-t border-line pt-4" aria-live="polite">
          <p className="display text-step">{part.label}</p>
          <p className="mt-3 max-w-[48ch] text-[16px] leading-6 text-ink-muted">
            {part.description}
          </p>
        </div>
      )}
    </div>
  );
}
