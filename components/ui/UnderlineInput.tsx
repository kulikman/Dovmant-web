import { useId } from "react";
import { cn } from "@/lib/cn";

type Base = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
};
type Props =
  | (Base & { as?: "input"; type?: string; autoComplete?: string })
  | (Base & { as: "textarea"; rows?: number })
  | (Base & { as: "select"; options: readonly string[] });

export function UnderlineInput(props: Props) {
  const id = useId();
  const errId = `${id}-err`;
  const { label, name, required, error, className } = props;
  const field =
    "peer w-full bg-transparent pt-6 pb-2 text-[16px] leading-6 text-ink outline-none border-0 border-b border-line transition-colors focus:border-ink aria-[invalid=true]:border-accent";
  const common = {
    id,
    name,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
  };
  return (
    <div className={cn("relative", className)}>
      {props.as === "textarea" ? (
        <textarea
          {...common}
          rows={props.rows ?? 3}
          placeholder=" "
          className={cn(field, "resize-none")}
        />
      ) : props.as === "select" ? (
        <select {...common} defaultValue="" className={cn(field, "appearance-none")}>
          <option value="" disabled />
          {props.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={props.type ?? "text"}
          autoComplete={props.autoComplete}
          placeholder=" "
          className={field}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-0 left-0 text-[13px] leading-[18px] text-ink-muted"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-accent">
            *
          </span>
        )}
      </label>
      {props.as === "select" && (
        <span aria-hidden className="pointer-events-none absolute right-0 bottom-3 text-ink">
          ↓
        </span>
      )}
      {error && (
        <p
          id={errId}
          role="alert"
          className="mt-2 flex items-start gap-2 text-[13px] leading-[18px] text-accent"
        >
          <span aria-hidden className="mt-[3px] inline-block h-3 w-3 shrink-0 bg-accent" />
          <span>
            <span className="font-medium">Error — </span>
            {error}
          </span>
        </p>
      )}
    </div>
  );
}
