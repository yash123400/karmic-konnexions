"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const painPoints = [
  {
    pain: "60% of our CRM data is outdated or incomplete",
    fix: "We run weekly data audits and deduplication.",
  },
  {
    pain: "Sales reps don't update the CRM — leads fall through the cracks",
    fix: "We do it for them, from email and call logs.",
  },
  {
    pain: "We have no idea what stage our pipeline is at",
    fix: "Weekly pipeline snapshots delivered to your inbox.",
  },
  {
    pain: "Our follow-up process is inconsistent",
    fix: "We implement and run a standardised follow-up cadence.",
  },
  {
    pain: "We're paying for Salesforce but barely using it",
    fix: "We unlock the full ROI of your CRM investment.",
  },
  {
    pain: "Reporting takes our sales manager 2 days every week",
    fix: "We deliver ready reports in under 4 hours.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function CrmPainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-[#4F46E5]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sound Familiar?"
          title="These are the most common CRM and sales ops complaints we fix."
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white border-l-4 border-l-[#F97316] rounded-r-xl rounded-l-sm p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm leading-snug mb-3">
                    &ldquo;{item.pain}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-[#16A34A] flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item.fix}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
