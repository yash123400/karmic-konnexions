"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Globe, Shirt, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  {
    icon: Briefcase,
    title: "HRO & Business Functions",
    desc: "Human Resources Operations, Accounts, Marketing & CRM outsourcing powered by Agentic AI.",
    href: "/services/hro-outsourcing",
  },
  {
    icon: GraduationCap,
    title: "E-Learning & Training",
    desc: "AI-powered LMS, corporate upskilling, pre/post assessments and placement support for enterprise-wide scaling.",
    href: "/services/elearning",
  },
  {
    icon: Globe,
    title: "Global Workforce Solutions",
    desc: "Talent acquisition, contract staffing and RPO across India, SEA, Middle East, Africa and Europe.",
    href: "/services/global-workforce",
  },
  {
    icon: Shirt,
    title: "Corporate Apparel",
    desc: "Branded uniform solutions — traditional and casual business attire for enterprise clients across industries.",
    href: "/services/corporate-apparel",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Workflow automation and AI-powered systems for HR, marketing and business operations.",
    href: "/services/ai-automation",
  },
];

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything Your Business Needs, Under One Roof"
          align="center"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={i === services.length - 1 && services.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.desc}
                href={service.href}
                delay={i * 0.1}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
