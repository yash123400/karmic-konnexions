"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const tools = [
  "Mailchimp",
  "HubSpot",
  "Zoho Campaigns",
  "Canva Pro",
  "Buffer",
  "Hootsuite",
  "Google Analytics 4",
  "SEMrush",
  "Notion",
  "Airtable",
  "Google Ads",
  "Meta Ads Manager",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function MktgToolsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tool Expertise"
          title={"Tools We Use"}
          subtitle="We are proficient in the industry's best marketing tools."
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={badgeVariants}
              className="bg-white border border-[#E0E7FF] rounded-xl px-5 py-3 shadow-sm
                hover:shadow-md hover:border-[#F97316]/40 hover:-translate-y-0.5
                transition-all duration-200 cursor-default"
            >
              <span className="text-sm font-semibold text-[#374151]">{tool}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
