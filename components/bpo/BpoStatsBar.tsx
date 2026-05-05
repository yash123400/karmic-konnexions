"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { value: 60, suffix: "%", label: "Average Cost Reduction" },
  { value: 200, suffix: "+", label: "Processes Automated" },
  { value: 15, suffix: "+", label: "Years Combined Expertise" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

export default function BpoStatsBar() {
  return (
    <section className="bg-[#4F46E5] py-16">
      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-black text-white"
                  />
                </div>
                <p className="text-white/70 text-sm font-medium tracking-wide uppercase">
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
