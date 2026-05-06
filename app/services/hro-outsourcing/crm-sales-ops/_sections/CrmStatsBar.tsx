"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { value: 35, suffix: "%", label: "Increase in Lead Follow-up Rate", decimals: 0 },
  { value: 4, suffix: "hrs", label: "Weekly Report Delivery Time", decimals: 0 },
  { value: 90, suffix: "%", label: "CRM Data Accuracy (post-audit)", decimals: 0 },
  { value: 20, suffix: "%", label: "Average Increase in Pipeline Conversion", decimals: 0 },
];

export default function CrmStatsBar() {
  return (
    <section className="bg-[#F97316] py-16 relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />

      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-white text-sm font-bold uppercase tracking-widest">
              Metrics We Improve
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-white mb-2 tabular-nums">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl font-black text-white"
                  />
                </div>
                <p className="text-orange-100 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
