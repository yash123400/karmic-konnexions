"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const cards = [
  {
    title: "Traditional Hire",
    highlight: false,
    points: [
      { label: "Salary", value: "₹6–10L/year" },
      { label: "Time to productive", value: "3–4 months" },
      { label: "Skills", value: "1–2 specialisations" },
      { label: "Scalability", value: "Low (fixed headcount)" },
      { label: "Management", value: "You manage them" },
    ],
  },
  {
    title: "Agency Retainer",
    highlight: false,
    points: [
      { label: "Cost", value: "₹50,000–2L/month" },
      { label: "Account manager distance", value: "High" },
      { label: "Strategy vs execution", value: "Heavy on strategy, light on execution" },
      { label: "Lock-in", value: "6–12 months typically" },
    ],
  },
  {
    title: "Karmic Marketing Ops",
    highlight: true,
    points: [
      { label: "Cost", value: "From ₹25,000/month" },
      { label: "Time to start", value: "2 weeks" },
      { label: "Skills", value: "Multi-specialist team" },
      { label: "Scalability", value: "Add/remove services monthly" },
      { label: "Management", value: "We self-manage with weekly reports" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function MktgComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Karmic Difference"
          title="Why Outsource to Us?"
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`rounded-2xl p-8 flex flex-col ${
                card.highlight
                  ? "bg-[#4F46E5] text-white shadow-xl scale-[1.02] border-none"
                  : "bg-white border border-[#E0E7FF] text-[#0F172A]"
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 pb-4 border-b ${card.highlight ? "border-white/20" : "border-[#F1F5F9]"}`}>
                {card.title}
              </h3>
              <ul className="space-y-4 flex-1">
                {card.points.map((pt, j) => (
                  <li key={j} className="text-sm">
                    <span className={`block font-semibold mb-0.5 ${card.highlight ? "text-white" : "text-[#374151]"}`}>
                      {pt.label}
                    </span>
                    <span className={`${card.highlight ? "text-indigo-200" : "text-[#6B7280]"}`}>
                      {pt.value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
