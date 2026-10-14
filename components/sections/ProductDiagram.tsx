"use client";

import { useState } from "react";
import { parts, type PartId } from "@/content/parts";
import { cn } from "@/lib/cn";

/** Node positions on a 240×560 canvas. */
const nodes: { id: PartId; x: number; y: number; labelSide: "l" | "r" }[] = [
  { id: "control", x: 80, y: 40, labelSide: "l" },
  { id: "sensors", x: 80, y: 140, labelSide: "l" },
  { id: "hip", x: 80, y: 240, labelSide: "l" },
  { id: "knee", x: 80, y: 340, labelSide: "l" },
  { id: "fit", x: 80, y: 440, labelSide: "l" },
  { id: "battery", x: 200, y: 140, labelSide: "r" },
  { id: "sync", x: 200, y: 340, labelSide: "r" },
];

type Props = {
  active?: PartId | null;
  onSelect?: (id: PartId) => void;
  className?: string;
  /** show the description for the active part under the diagram */
  describe?: boolean;
};

export function ProductDiagram({ active: controlled, onSelect, className, describe }: Props) {
  const [inner, setInner] = useState<PartId>("knee");
  const active = controlled === undefined ? inner : controlled;
  const select = (id: PartId) => (onSelect ? onSelect(id) : setInner(id));
  const part = parts.find((p) => p.id === active);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 380 500"
        role="group"
        aria-label="Schematic of the main parts"
        className="h-auto w-full max-w-[420px]"
      >
        <line x1="80" y1="40" x2="80" y2="440" stroke="var(--steel)" strokeWidth="1" />
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
          const part = parts.find((p) => p.id === n.id)!;
          const label = part.planned ? `${part.label} — in development` : part.label;
          return (
            <g key={n.id}>
              <rect
                x={n.x - 9}
                y={n.y - 9}
                width="18"
                height="18"
                fill={part.planned ? "none" : on ? "var(--accent)" : "var(--steel)"}
                stroke={part.planned ? (on ? "var(--accent)" : "var(--steel)") : "none"}
                strokeWidth="2"
                strokeDasharray={part.planned ? "4 3" : undefined}
                style={{ transition: "fill 300ms" }}
              />
              <text
                x={n.x + 20}
                y={n.y + 5}
                textAnchor="start"
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
