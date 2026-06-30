"use client";

import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

const steps = [
  {
    number: 1,
    days: "Days 1–90",
    title: "Audit & Setup",
    bullets: [
      "Stakeholder discovery & process mapping",
      "Current-state audit across all selected functions",
      "System logins, access and integrations configured",
    ],
  },
  {
    number: 2,
    days: "Days 91–270",
    title: "Implementation",
    bullets: [
      "Policies, HRMS, payroll and compliance go live",
      "Lead flows automated, first campaigns launched",
      "KPI dashboards built, first management review held",
    ],
  },
  {
    number: 3,
    days: "Days 271–730",
    title: "Optimise & Scale",
    bullets: [
      "Conversion rate optimisation across all functions",
      "Month-3 ROI review: savings vs target presented",
      "Year-1 roadmap finalised and signed off",
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="From Discovery to Full Operation in 730 Days"
          align="center"
        />

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="text-center lg:text-left">
                  {/* Step circle */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/25">
                      {step.number}
                    </div>
                  </div>

                  {/* Day badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-tint text-accent text-sm font-semibold mb-4">
                    {step.days}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mt-2 mb-4">
                    {step.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
