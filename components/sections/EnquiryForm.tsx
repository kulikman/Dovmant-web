"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { UnderlineInput } from "@/components/ui/UnderlineInput";
import { forms, type FormKind, type FormState } from "@/lib/forms";
import { cn } from "@/lib/cn";

const initial: FormState = { status: "idle" };

export function EnquiryForm({ kind, className }: { kind: FormKind; className?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const def = forms[kind];
  const errors = state.errors ?? {};

  if (state.status === "success")
    return (
      <p role="status" className={cn("text-[20px] leading-[26px]", className)}>
        {def.done}
      </p>
    );

  return (
    <form
      action={action}
      noValidate
      className={cn("grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2", className)}
    >
      <input type="hidden" name="kind" value={kind} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {def.fields.map((f) =>
        f.type === "textarea" ? (
          <UnderlineInput
            key={f.name}
            as="textarea"
            name={f.name}
            label={f.label}
            required={f.required}
            error={errors[f.name]}
            className={f.wide ? "md:col-span-2" : undefined}
          />
        ) : f.type === "select" ? (
          <UnderlineInput
            key={f.name}
            as="select"
            name={f.name}
            label={f.label}
            required={f.required}
            options={f.options ?? []}
            error={errors[f.name]}
            className={f.wide ? "md:col-span-2" : undefined}
          />
        ) : (
          <UnderlineInput
            key={f.name}
            name={f.name}
            type={f.type}
            label={f.label}
            required={f.required}
            autoComplete={f.autoComplete}
            error={errors[f.name]}
            className={f.wide ? "md:col-span-2" : undefined}
          />
        ),
      )}

      <div className="flex justify-end md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          aria-label={def.submit}
          className="text-[56px] leading-none text-accent transition-transform duration-200 hover:translate-x-1 disabled:opacity-40"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
