"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const proofCards = [
  {
    stat: 60,
    suffix: "%",
    isCounter: true,
    label: "Average Cost Saving",
    desc: "vs. maintaining equivalent in-house teams with PF, gratuity and compliance overhead",
  },
  {
    stat: "3-4",
    suffix: "",
    isCounter: false,
    label: "× ROI Delivered",
    desc: "within Year 1 across HR, Finance, CRM and Marketing functions — measured and reported monthly",
  },
  {
    stat: "Zero",
    suffix: "",
    isCounter: false,
    label: "Compliance Liability",
    desc: "100% statutory accuracy on PF, ESIC, GST, TDS filings. Dedicated compliance calendar managed by us.",
  },
];

export default function WhyKarmic() {
  return (
    <section className="py-24 bg-primary-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why 500+ Companies Choose Karmic Konnexions"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {proofCards.map((card, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border h-full">
                <div className="flex items-baseline gap-1">
                  {card.isCounter ? (
                    <AnimatedCounter
                      value={card.stat as number}
                      suffix={card.suffix}
                      className="text-6xl font-black text-primary"
                    />
                  ) : (
                    <span className="text-6xl font-black text-primary">
                      {card.stat}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-primary mt-2">
                  {card.label}
                </h3>
                <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
