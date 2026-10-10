import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";

export default function NotFound() {
  return (
    <Section className="pt-8">
      <SquareMarker tone="accent" className="mb-8" />
      <SectionHeading as="h1" size="h1" text={"PAGE NOT\n{FOUND}"} immediate />
      <p className="mt-6 max-w-[40ch] text-[20px] leading-[26px]">
        The page you were looking for does not exist.
      </p>
      <Link href="/" className="link mt-8 inline-block text-[15px]">
        Back to home →
      </Link>
    </Section>
  );
}
