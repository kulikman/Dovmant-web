"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { UnderlineInput } from "@/components/ui/UnderlineInput";
import { orgTypes, type ContactState } from "@/lib/contact-schema";

const initial: ContactState = { status: "idle" };

export function ContactForm({ intent = "general" }: { intent?: string }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const e = state.errors ?? {};

  if (state.status === "success")
    return (
      <p role="status" className="text-[20px] leading-[26px]">
        Thank you. We have received your message and will get back to you. [TBD: response time]
      </p>
    );

  return (
    <form action={action} noValidate className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
      <input type="hidden" name="intent" value={intent} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <UnderlineInput
        name="name"
        label="Full name"
        required
        error={e.name}
        autoComplete="name"
        className="md:col-span-2"
      />
      <UnderlineInput
        name="email"
        type="email"
        label="Email"
        required
        error={e.email}
        autoComplete="email"
      />
      <UnderlineInput name="phone" type="tel" label="Phone" error={e.phone} autoComplete="tel" />
      <UnderlineInput
        as="select"
        name="orgType"
        label="Organization type"
        required
        options={orgTypes}
        error={e.orgType}
        className="md:col-span-2"
      />
      <UnderlineInput
        as="textarea"
        name="message"
        label="Message"
        required
        error={e.message}
        className="md:col-span-2"
      />
      <div className="flex justify-end md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          aria-label="Send message"
          className="text-accent text-[56px] leading-none transition-transform duration-200 hover:translate-x-1 disabled:opacity-40"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
