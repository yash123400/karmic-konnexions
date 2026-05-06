"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: "/images/icons/bpo/icon-3.png",
    title: "CRM Data Hygiene",
    desc: "Deduplication, enrichment, and standardisation of contact records.",
  },
  {
    icon: "/images/icons/bpo/icon-4.png",
    title: "Lead Qualification & Scoring",
    desc: "Inbound lead triage and prioritisation based on your ICP.",
  },
  {
    icon: "/images/icons/bpo/icon-5.png",
    title: "Pipeline Management",
    desc: "Stage tracking and opportunity updates to keep forecasts accurate.",
  },
  {
    icon: "/images/icons/bpo/icon-6.png",
    title: "Sales Reporting",
    desc: "Weekly and monthly dashboards detailing conversion rates and velocity.",
  },
  {
    icon: "/images/icons/bpo/icon-7.png",
    title: "CRM Administration",
    desc: "Custom fields, workflow automation, and tool integrations.",
  },
  {
    icon: "/images/icons/bpo/icon-8.png",
    title: "Lead Follow-Up Cadences",
    desc: "Email sequences, WhatsApp follow-ups, and call scheduling.",
  },
  {
    icon: "/images/icons/bpo/icon-9.png",
    title: "Contact Database Management",
    desc: "Segmentation, list hygiene, and import/export operations.",
  },
  {
    icon: "/images/icons/bpo/icon-3.png",
    title: "CRM Training & Adoption",
    desc: "We train your sales reps to use the CRM correctly and consistently.",
  },
  {
    icon: "/images/icons/bpo/icon-5.png",
    title: "Proposal & Quote Management",
    desc: "Generating and tracking proposals directly within your CRM.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function CrmServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our CRM Services"
          title="Everything You Need to Run a Clean Pipeline"
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-[#F8FAFC] border border-[#E0E7FF] rounded-2xl p-8 hover:bg-white hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[#E0E7FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-3 group-hover:text-[#4F46E5] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
