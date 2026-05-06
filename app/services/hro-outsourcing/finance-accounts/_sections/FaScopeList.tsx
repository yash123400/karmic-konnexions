"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const col1 = [
  {
    icon: "/images/icons/bpo/icon-2.png",
    title: "Accounts Payable (AP)",
    desc: "Vendor invoice processing, payment scheduling, reconciliation.",
  },
  {
    icon: "/images/icons/bpo/icon-2.png",
    title: "Accounts Receivable (AR)",
    desc: "Invoice generation, collections follow-up, aging reports.",
  },
  {
    icon: "/images/icons/bpo/icon-12.png",
    title: "Bookkeeping",
    desc: "Daily ledger entries, bank reconciliations, expense categorisation.",
  },
  {
    icon: "/images/icons/bpo/icon-7.png",
    title: "Payroll Accounting",
    desc: "Salary journal entries, PF/ESIC/TDS postings.",
  },
  {
    icon: "/images/icons/bpo/icon-31.png",
    title: "Fixed Assets Register",
    desc: "Asset tracking, depreciation schedules, physical verification.",
  },
];

const col2 = [
  {
    icon: "/images/icons/bpo/icon-10.png",
    title: "GST Compliance",
    desc: "Monthly GSTR filings, ITC reconciliation, annual returns.",
  },
  {
    icon: "/images/icons/bpo/icon-10.png",
    title: "TDS Management",
    desc: "TDS deductions, Form 16/16A, quarterly returns.",
  },
  {
    icon: "/images/icons/bpo/icon-12.png",
    title: "MIS Reports",
    desc: "P&L, balance sheet, cash flow, budget vs actual dashboards.",
  },
  {
    icon: "/images/icons/bpo/icon-3.png",
    title: "Financial Forecasting",
    desc: "12-month rolling forecasts, scenario planning.",
  },
  {
    icon: "/images/icons/bpo/icon-9.png",
    title: "Audit Support",
    desc: "Statutory audit readiness, document preparation, auditor liaison.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function ServiceItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-start gap-4 p-5 rounded-2xl border border-[#E0E7FF] bg-white
        hover:border-[#4F46E5]/40 hover:shadow-md hover:bg-[#4F46E5]/[0.02] transition-all duration-200"
    >
      <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0
        group-hover:bg-[#4F46E5]/10 transition-colors duration-200">
        <Image src={icon} alt={title} width={28} height={28} className="object-contain" />
      </div>
      <div>
        <h3 className="font-bold text-[#0F172A] text-sm mb-0.5 group-hover:text-[#4F46E5] transition-colors">
          {title}
        </h3>
        <p className="text-[#6B7280] text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function FaScopeList() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services Included"
          title={"Every Finance Function,\nCovered End-to-End"}
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Col 1 */}
          <div className="space-y-4">
            {col1.map((s, i) => (
              <ServiceItem key={i} {...s} />
            ))}
          </div>
          {/* Col 2 */}
          <div className="space-y-4">
            {col2.map((s, i) => (
              <ServiceItem key={i} {...s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
