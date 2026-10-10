"use client";

import { useState } from "react";
import { how } from "@/content/home";
import type { PartId } from "@/content/parts";
import { NumberedSteps } from "./NumberedSteps";
import { ProductDiagram } from "./ProductDiagram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";

export function HowItWorks() {
  const [active, setActive] = useState<PartId>("sensors");
  return (
    <Section id="how-it-works">
      <SectionHeading text={how.heading} size="h1" className="mb-10 md:mb-16" />
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <NumberedSteps steps={how.steps} onActive={(p) => p && setActive(p as PartId)} />
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28">
            <ProductDiagram active={active} onSelect={setActive} />
          </div>
        </div>
      </div>
    </Section>
  );
}
