import Link from "next/link";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface-100 p-3 md:hidden">
      <Link
        href="/contact"
        className="flex w-full items-center justify-center gap-2 rounded-pill bg-ink py-3 text-[15px] font-medium text-surface-100"
      >
        Request a demo <span aria-hidden>↘</span>
      </Link>
    </div>
  );
}
