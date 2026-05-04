"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

const checklistItems = [
  "50–500 employees on payroll",
  "Multi-state or multi-city operations in India",
  "Struggling with statutory compliance filings",
  "Recently funded or in rapid expansion mode",
  "Currently managing HR on Excel or basic software",
];

function GreenCheck() {
  return (
    <svg
      className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HrWhoWeServe() {
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/images/capability/workforce-network.png"
              alt="Connected workforce — HR outsourcing for growing teams"
              width={540}
              height={360}
              className="rounded-2xl object-cover shadow-2xl w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-[#E0E7FF] px-5 py-4">
              <div className="text-2xl font-black text-[#4F46E5]">500+</div>
              <div className="text-xs text-[#6B7280] font-medium mt-0.5">
                Companies Trust Us
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <SectionHeader
              eyebrow="Who We Serve"
              title="Built for Growing Businesses"
              subtitle="Our HR outsourcing service is designed for companies that have outgrown their HR generalist but aren't ready to build a full in-house team."
              align="left"
            />

            <div className="space-y-3 mt-6">
              {checklistItems.map((item, i) => (
                <RevealSection key={i} delay={i * 0.08} direction="right">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E0E7FF] hover:border-emerald-200 hover:shadow-sm transition-all duration-200">
                    <GreenCheck />
                    <span className="text-[#374151] font-medium text-sm">
                      {item}
                    </span>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
