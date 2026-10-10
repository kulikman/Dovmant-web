import { Hero } from "@/components/sections/Hero";
import { TwoPaths } from "@/components/sections/TwoPaths";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WearGallery } from "@/components/sections/WearGallery";
import { StatGrid } from "@/components/sections/StatGrid";
import { ResearchPartners } from "@/components/sections/ResearchPartners";
import { Testimonials } from "@/components/sections/Testimonials";
import { InvestorTeaser } from "@/components/sections/InvestorTeaser";
import { FaqContact } from "@/components/sections/FaqContact";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { metrics, wear } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <TwoPaths />
      <HowItWorks />
      <Section bleed>
        <div className="px-[var(--gutter)]">
          <SectionHeading text={wear.heading} size="h1" className="mb-10 md:mb-16" />
        </div>
        <WearGallery items={wear.items} />
      </Section>
      <Section>
        <SectionHeading text={metrics.heading} size="h1" className="mb-10 md:mb-16" />
        <StatGrid stats={metrics.stats} />
      </Section>
      <ResearchPartners />
      <Testimonials />
      <InvestorTeaser />
      <FaqContact />
    </>
  );
}
