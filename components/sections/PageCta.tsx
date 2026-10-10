import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PageCta({ title, label, href }: { title: string; label: string; href: string }) {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 border-t border-line px-[var(--gutter)] py-[var(--section)] md:flex-row md:items-end">
      <SectionHeading text={title} size="h2" />
      <Button href={href} variant="filled" arrow="→">
        {label}
      </Button>
    </section>
  );
}
