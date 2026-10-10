"use client";

import { useActionState } from "react";
import { requestDataRoom } from "@/app/actions/data-room";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnderlineInput } from "@/components/ui/UnderlineInput";
import type { ContactState } from "@/lib/contact-schema";

const initial: ContactState = { status: "idle" };

export function DataRoomRequest() {
  const [state, action, pending] = useActionState(requestDataRoom, initial);
  const e = (state.errors ?? {}) as Record<string, string | undefined>;

  return (
    <Section id="data-room-access">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-5">
          <SectionHeading text={"REQUEST DATA\nROOM {ACCESS}"} size="h2" />
          <p className="mt-6 max-w-[40ch] text-[16px] leading-6 text-ink-muted">
            We review every request manually. The deck is shared after a short call. [TBD]
          </p>
          {site.deckUrl ? (
            <a href={site.deckUrl} className="link mt-6 inline-block text-[15px]">
              Download deck ↘
            </a>
          ) : (
            <p className="mt-6 text-[15px] text-ink-muted">
              Deck download: [TBD] — shared on request for now.
            </p>
          )}
        </div>
        <div className="col-span-12 md:col-span-7">
          {state.status === "success" ? (
            <p role="status" className="text-[20px] leading-[26px]">
              Thank you. We will review your request and get back to you. [TBD: response time]
            </p>
          ) : (
            <form
              action={action}
              noValidate
              className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2"
            >
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
              />
              <UnderlineInput
                name="email"
                type="email"
                label="Work email"
                required
                error={e.email}
                autoComplete="email"
              />
              <UnderlineInput name="fund" label="Fund" required error={e.fund} />
              <UnderlineInput name="checkSize" label="Typical check size" error={e.checkSize} />
              <UnderlineInput
                name="link"
                label="Website or profile link"
                error={e.link}
                className="md:col-span-2"
              />
              <div className="flex justify-end md:col-span-2">
                <button
                  type="submit"
                  disabled={pending}
                  aria-label="Send request"
                  className="text-[56px] leading-none text-accent transition-transform duration-200 hover:translate-x-1 disabled:opacity-40"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
