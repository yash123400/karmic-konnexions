"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

const relatedServices = [
  {
    title: "Finance & Accounts Outsourcing",
    description:
      "Accurate, compliant, and insightful financial operations — AP/AR, MIS reporting, GST compliance — delivered remotely.",
    href: "/services/hro-outsourcing/finance-accounts",
    color: "#4F46E5",
  },
  {
    title: "CRM & Sales Operations",
    description:
      "Pipeline management, lead nurturing, and CRM administration. We run your sales back-office at scale.",
    href: "/services/hro-outsourcing/crm-sales-ops",
    color: "#F97316",
  },
  {
    title: "Marketing Services",
    description:
      "Demand generation, content ops, and campaign execution. Your full marketing engine, outsourced.",
    href: "/services/hro-outsourcing/marketing-services",
    color: "#4F46E5",
  },
];

export default function HrRelatedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="More HRO Services"
          title="Also Explore"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group block bg-[#F8FAFC] border border-[#E0E7FF] rounded-2xl p-7
                  hover:border-[#4F46E5]/40 hover:bg-white hover:shadow-lg transition-all duration-250"
              >
                {/* Accent bar */}
                <div
                  className="w-10 h-1 rounded-full mb-5 group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: service.color }}
                />
                <h3 className="font-bold text-[#0F172A] text-base mb-2 group-hover:text-[#4F46E5] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: service.color }}
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
