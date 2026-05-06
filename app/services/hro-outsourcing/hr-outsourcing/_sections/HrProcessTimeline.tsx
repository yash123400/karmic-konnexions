"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: 1,
    week: "Week 1",
    title: "HR Audit & Discovery",
    description:
      "We review your current HR processes, payroll data, and compliance status. We identify gaps, risks, and quick wins before touching a single process.",
    color: "#4F46E5",
  },
  {
    number: 2,
    week: "Week 2",
    title: "System Integration & Team Assignment",
    description:
      "Our certified HR specialists get access to your HRIS, payroll tool, and communication channels. We shadow your current setup and document every workflow.",
    color: "#6366F1",
  },
  {
    number: 3,
    week: "Week 3",
    title: "Parallel Run",
    description:
      "We run payroll and HR processes in parallel with your team, cross-checking every output until you're fully confident in our accuracy.",
    color: "#818CF8",
  },
  {
    number: 4,
    week: "Go Live",
    title: "Full Handover",
    description:
      "Your monthly cadence begins: payroll on the 25th, compliance reports monthly, HR dashboard updates weekly. You step back, we step up.",
    color: "#F97316",
  },
];

export default function HrProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="our-process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="How We Take Over in 3 Weeks"
          align="center"
        />

        <div ref={ref} className="mt-16 relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#4F46E5]/30 via-[#4F46E5]/15 to-[#F97316]/30" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    i === steps.length - 1 ? "" : "lg:mb-16"
                  }`}
                >
                  {/* Desktop: alternating left/right */}
                  <div
                    className={`${
                      isEven ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"
                    }`}
                  >
                    <div
                      className={`inline-block bg-white rounded-2xl border-2 p-7 shadow-md hover:shadow-xl transition-all duration-300 max-w-md`}
                      style={{ borderColor: step.color + "40" }}
                    >
                      {/* Week badge */}
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4"
                        style={{
                          backgroundColor: step.color + "15",
                          color: step.color,
                        }}
                      >
                        {step.week}
                      </span>

                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Centre circle (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center text-white font-black text-lg shadow-lg z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Mobile: circle inline */}
                  <div className="lg:hidden flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: step.color + "15",
                        color: step.color,
                      }}
                    >
                      {step.week}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
