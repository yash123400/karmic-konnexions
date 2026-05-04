"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { value: 99.8, suffix: "%", label: "Reconciliation Accuracy", decimals: 1 },
  { value: 72, suffix: "hrs", label: "Average Closure Time (Monthly)", decimals: 0 },
  { value: 50, suffix: "%", label: "Reduction in Finance Costs", decimals: 0 },
  { value: 500, suffix: "+", label: "GST Returns Filed Annually", decimals: 0 },
];

export default function FaStatsBar() {
  return (
    <section className="bg-[#4F46E5] py-16 relative overflow-hidden">
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-white mb-2 tabular-nums">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="text-5xl font-black text-white"
                    duration={2.5}
                  />
                </div>
                <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">
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
