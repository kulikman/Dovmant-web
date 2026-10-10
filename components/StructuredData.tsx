import { site } from "@/content/site";

/**
 * Organization only. MedicalDevice schema must never be used here — this is a
 * research instrument, and the schema type itself would be a claim.
 * A Product entry goes in once the specification values are published.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description:
      "Dovmant builds a programmable lower-limb exoskeleton for locomotion research, supplied to biomechanics and performance laboratories.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      addressCountry: "US",
    },
  };
  return (
    <script
      type="application/ld+json"
      // The payload is a literal above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
