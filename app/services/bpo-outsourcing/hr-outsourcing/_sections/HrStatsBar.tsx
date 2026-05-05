"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { value: 5000, suffix: "+", label: "Employees Payrolled Monthly" },
  { value: 100, suffix: "%", label: "On-time Payroll Delivery" },
  { value: 40, suffix: "%", label: "Average HR Cost Reduction" },
  { value: 0, suffix: " Penalties", label: "Statutory Compliance Penalties" },
];

export default function HrStatsBar() {
  return (
    <section className="bg-[#0F172A] py-16 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4F46E5]/15 blur-[80px] rounded-full pointer-events-none" />

      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
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
                {/* Accent underline */}
                <div className="mt-3 h-0.5 w-10 bg-[#F97316] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
