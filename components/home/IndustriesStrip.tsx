"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

const industries = [
  { name: "Logistics & Supply Chain", color: "#4F46E5" },
  { name: "Manufacturing", color: "#059669" },
  { name: "Healthcare & Pharma", color: "#DC2626" },
  { name: "EdTech", color: "#7C3AED" },
  { name: "IT & Technology", color: "#2563EB" },
  { name: "BFSI & FinTech", color: "#CA8A04" },
  { name: "Retail & D2C", color: "#EA580C" },
  { name: "Startups & SMEs", color: "#0D9488" },
];

function IndustryPill({ name, color }: { name: string; color: string }) {
  return (
    <div className="bg-white border border-border rounded-full px-5 py-2.5 text-sm font-medium text-text-secondary flex items-center gap-2 whitespace-nowrap hover:bg-primary-tint hover:border-primary hover:text-primary transition-all duration-200 cursor-default shrink-0">
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      {name}
    </div>
  );
}

export default function IndustriesStrip() {
  return (
    <section className="py-16 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Industries We Serve"
          align="center"
          subtitle="Trusted across 20+ industries worldwide"
        />
      </div>

      <RevealSection delay={0.2}>
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 animate-marquee-left pause-on-hover">
            {[...industries, ...industries].map((ind, i) => (
              <IndustryPill key={`r1-${i}`} name={ind.name} color={ind.color} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-right pause-on-hover">
            {[...industries, ...industries].map((ind, i) => (
              <IndustryPill key={`r2-${i}`} name={ind.name} color={ind.color} />
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
