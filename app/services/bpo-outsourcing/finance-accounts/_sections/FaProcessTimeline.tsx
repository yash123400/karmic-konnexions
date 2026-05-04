"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    range: "Days 1–3",
    title: "Books Audit",
    desc: "We review your current financial records, identify backlog, and map all recurring transactions.",
    color: "#4F46E5",
  },
  {
    range: "Days 4–7",
    title: "Chart of Accounts Setup",
    desc: "We standardise your accounting categories to match your business model and reporting needs.",
    color: "#6366F1",
  },
  {
    range: "Days 8–12",
    title: "Data Migration & Catch-Up",
    desc: "We clean and migrate historical data, and bring any overdue books up to date.",
    color: "#818CF8",
  },
  {
    range: "Day 15",
    title: "First MIS Delivered",
    desc: "You receive your first clean MIS report and a 30-minute walkthrough call with our CA.",
    color: "#F97316",
  },
];

export default function FaProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="our-process" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="From Handover to First MIS in 15 Days"
          align="center"
        />

        <div ref={ref} className="relative mt-16">
          {/* Desktop connector */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-[#4F46E5]/30 via-[#818CF8]/30 to-[#F97316]/30" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg mb-5 relative z-10 shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border-2 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full"
                  style={{ borderColor: step.color + "30" }}>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: step.color + "15", color: step.color }}
                  >
                    {step.range}
                  </span>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
