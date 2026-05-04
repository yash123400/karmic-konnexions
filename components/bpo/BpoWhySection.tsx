"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

const features = [
  {
    icon: "/images/icons/bpo/icon-8.png",
    iconAlt: "Scalable operations",
    title: "Scalable On Demand",
    description:
      "Add or remove resources in 48 hours without long-term hiring commitments.",
  },
  {
    icon: "/images/icons/bpo/icon-10.png",
    iconAlt: "Compliance shield",
    title: "Compliance-First Delivery",
    description:
      "All processes adhere to Indian and international regulatory standards.",
  },
  {
    icon: "/images/icons/bpo/icon-12.png",
    iconAlt: "Cost savings",
    title: "Guaranteed Cost Savings",
    description:
      "Clients consistently achieve 40–60% reduction in operational costs.",
  },
  {
    icon: "/images/icons/bpo/icon-13.png",
    iconAlt: "Global delivery",
    title: "24/7 Global Delivery",
    description:
      "Our teams operate across time zones to match your business hours.",
  },
  {
    icon: "/images/icons/bpo/icon-22.png",
    iconAlt: "Tech enabled",
    title: "Tech-Enabled Workflows",
    description:
      "We integrate with your existing tools: SAP, Zoho, Salesforce, QuickBooks.",
  },
];

export default function BpoWhySection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { once: true, margin: "-80px 0px" });

  return (
    <section id="how-we-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/capability/workforce-network.png"
              alt="Connected workforce operations"
              width={580}
              height={380}
              className="rounded-2xl object-cover shadow-xl w-full"
            />
          </motion.div>

          {/* Right — features */}
          <div>
            <SectionHeader
              eyebrow="Why Choose Karmic"
              title={"Why Outsource\nWith Karmic?"}
              align="left"
            />

            <div className="space-y-6">
              {features.map((feature, i) => (
                <RevealSection key={i} delay={i * 0.08} direction="right">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.iconAlt}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-0.5">
                        {feature.title}
                      </h4>
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
