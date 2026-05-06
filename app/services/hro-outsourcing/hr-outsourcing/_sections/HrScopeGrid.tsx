"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const hrServices = [
  {
    icon: "/images/icons/bpo/icon-7.png",
    title: "Payroll Processing",
    desc: "Monthly payroll with tax-accurate salary slips for every employee.",
  },
  {
    icon: "/images/icons/bpo/icon-1.png",
    title: "Recruitment & Hiring",
    desc: "End-to-end talent acquisition from JD creation to offer letters.",
  },
  {
    icon: "/images/icons/bpo/icon-10.png",
    title: "Statutory Compliance",
    desc: "PF, ESIC, PT, TDS, gratuity — all filings handled on time.",
  },
  {
    icon: "/images/icons/bpo/icon-6.png",
    title: "Employee Onboarding",
    desc: "Digital onboarding kits, document collection, system access setup.",
  },
  {
    icon: "/images/icons/bpo/icon-9.png",
    title: "HR Policy Design",
    desc: "Custom HR policies aligned with Indian labour law and your culture.",
  },
  {
    icon: "/images/icons/bpo/icon-11.png",
    title: "Performance Management",
    desc: "Appraisal cycles, KPI tracking, 360° feedback facilitation.",
  },
  {
    icon: "/images/icons/bpo/icon-13.png",
    title: "Exit Management",
    desc: "Offboarding, F&F settlements, and attrition reporting.",
  },
  {
    icon: "/images/icons/bpo/icon-8.png",
    title: "HRIS Management",
    desc: "We manage your HR software (Zoho People, GreytHR, Keka, etc.).",
  },
  {
    icon: "/images/icons/bpo/icon-12.png",
    title: "Cost-to-Company Reports",
    desc: "Monthly CTC analytics and workforce cost dashboards for leadership.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HrScopeGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What's Included"
          title={"Complete HR Coverage,\nZero Internal Overhead"}
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {hrServices.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-[#E0E7FF] bg-white
                hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/[0.03] transition-all duration-200
                hover:shadow-md cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0
                group-hover:bg-[#4F46E5]/10 transition-colors duration-200">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-base mb-1 group-hover:text-[#4F46E5] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
