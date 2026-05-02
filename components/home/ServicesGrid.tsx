"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Globe, Shirt, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Briefcase,
    title: "BPO Outsourcing",
    desc: "Fixed-cost, execution-focused outsourcing for HR, Finance, CRM and Marketing. Senior expertise without the headcount.",
    href: "/services/bpo-outsourcing",
  },
  {
    icon: GraduationCap,
    title: "E-Learning & Training",
    desc: "AI-powered LMS, corporate upskilling, pre/post assessments and placement support for 300,000+ learners.",
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
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={i === services.length - 1 && services.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              >
                <Link href={service.href} className="block group h-full">
                  <div className="bg-white rounded-2xl border border-border p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 hover:border-l-[3px] hover:border-l-primary">
                    <div className="w-14 h-14 rounded-xl bg-primary-tint flex items-center justify-center text-primary">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mt-6">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mt-3 leading-relaxed">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold mt-6 group-hover:gap-2 transition-all duration-200">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
