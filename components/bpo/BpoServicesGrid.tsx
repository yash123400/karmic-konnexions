"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";

const bpoServices = [
  {
    icon: "/images/icons/bpo/icon-1.png",
    iconAlt: "HR & People icon",
    title: "HR & Payroll Outsourcing",
    description:
      "Full-cycle HR operations — from hire to retire — managed by certified professionals.",
    deliverables: [
      "Payroll processing & compliance",
      "Recruitment & onboarding",
      "Performance management systems",
    ],
    href: "/services/bpo-outsourcing/hr-outsourcing",
    accent: "#4F46E5",
  },
  {
    icon: "/images/icons/bpo/icon-2.png",
    iconAlt: "Finance & Accounts icon",
    title: "Finance & Accounts Outsourcing",
    description:
      "Accurate, compliant, and insightful financial operations delivered remotely.",
    deliverables: [
      "Accounts payable & receivable",
      "MIS reporting & dashboards",
      "GST/tax compliance (India & global)",
    ],
    href: "/services/bpo-outsourcing/finance-accounts",
    accent: "#4F46E5",
  },
  {
    icon: "/images/icons/bpo/icon-3.png",
    iconAlt: "CRM icon",
    title: "CRM & Sales Operations",
    description:
      "Pipeline management, lead nurturing, and CRM administration at scale.",
    deliverables: [
      "CRM setup & data hygiene",
      "Sales pipeline reporting",
      "Lead qualification & follow-up",
    ],
    href: "/services/bpo-outsourcing/crm-sales-ops",
    accent: "#F97316",
  },
  {
    icon: "/images/icons/bpo/icon-4.png",
    iconAlt: "Marketing icon",
    title: "Marketing Services",
    description:
      "Demand generation, content operations, and campaign execution — outsourced.",
    deliverables: [
      "Content creation & scheduling",
      "Email marketing automation",
      "Performance analytics & reporting",
    ],
    href: "/services/bpo-outsourcing/marketing-services",
    accent: "#F97316",
  },
];

interface BpoCardProps {
  service: (typeof bpoServices)[0];
  delay: number;
}

function BpoCard({ service, delay }: BpoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const maxRotate = 5;
    rotateX.set(-(mouseY / (rect.height / 2)) * maxRotate);
    rotateY.set((mouseX / (rect.width / 2)) * maxRotate);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <RevealSection delay={delay}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="group relative bg-white rounded-2xl border border-[#E0E7FF] p-8 min-h-[320px] h-full
          hover:shadow-2xl hover:border-[#4F46E5]/40 transition-all duration-300
          border-l-[3px] hover:border-l-[3px] hover:border-l-[#4F46E5]"
      >
        {/* Invisible full-card link */}
        <Link
          href={service.href}
          className="absolute inset-0 z-10"
          aria-label={`Learn more about ${service.title}`}
        />

        <div className="relative z-20">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6">
            <Image
              src={service.icon}
              alt={service.iconAlt}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Title & desc */}
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">
            {service.title}
          </h3>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Deliverables */}
          <ul className="space-y-1.5 mb-6">
            {service.deliverables.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-[#6B7280]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: service.accent }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
            style={{ color: service.accent }}
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>
    </RevealSection>
  );
}

export default function BpoServicesGrid() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Outsource For You"
          title={"Four Verticals.\nOne Seamless Partnership."}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bpoServices.map((service, i) => (
            <BpoCard key={i} service={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
