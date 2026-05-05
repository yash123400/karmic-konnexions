"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { value: 4, suffix: "x", label: "More Content Output vs One Hire", decimals: 0 },
  { value: 30, suffix: "%", label: "Average Email Open Rate Improvement", decimals: 0 },
  { value: 2, suffix: " weeks", label: "Time to First Campaign Launch", decimals: 0 },
  { value: 60, suffix: "%", label: "Lower Cost vs Agency Retainer", decimals: 0 },
];

export default function MktgStatsBar() {
  return (
    <section className="bg-[#0F172A] py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F97316]/10 blur-[100px] pointer-events-none" />

      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <p className="text-[#94A3B8] text-sm font-medium uppercase tracking-wide">
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
