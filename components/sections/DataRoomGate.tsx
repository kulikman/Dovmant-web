"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { UnderlineInput } from "@/components/ui/UnderlineInput";

/**
 * Auth stub. Phase 2 replaces this with Supabase auth + RLS;
 * nothing here grants access to anything.
 */
export function DataRoomGate() {
  const [sent, setSent] = useState(false);

  return (
    <div data-theme="dark" className="min-h-dvh bg-surface-100 text-ink">
      <div className="mx-auto flex min-h-dvh max-w-[1440px] flex-col justify-between px-[var(--gutter)] py-10">
        <Link href="/investors" className="link w-fit text-[15px]">
          ← Investor relations
        </Link>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-6">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading as="h1" size="h1" text={"INVESTOR\nDATA {ROOM}"} immediate />
            <p className="max-w-[40ch] text-[16px] leading-6 text-ink-muted">
              Access is granted on request. Sign in with the email we approved. [TBD —
              authentication is not connected yet.]
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:pl-10">
            {sent ? (
              <p role="status" className="text-[20px] leading-[26px]">
                [TBD] Sign-in is not available yet. Request access from the investor relations page.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="max-w-[460px]"
                noValidate
              >
                <UnderlineInput
                  name="email"
                  type="email"
                  label="Work email"
                  required
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="mt-10 rounded-pill border border-ink px-6 py-3 text-[15px] transition-colors hover:bg-ink hover:text-surface-100"
                >
                  Send sign-in link <span aria-hidden>↘</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="text-[13px] leading-[18px] text-ink-muted">
          Documents in this room are confidential. [TBD — add NDA language after legal review.]
        </p>
      </div>
    </div>
  );
}
