"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: "/images/icons/bpo/icon-4.png",
    title: "Content Creation",
    desc: "Blog posts, LinkedIn articles, whitepapers, scripts.",
  },
  {
    icon: "/images/icons/bpo/icon-6.png",
    title: "Social Media Management",
    desc: "Posting, engagement, community management.",
  },
  {
    icon: "/images/icons/bpo/icon-7.png",
    title: "Email Marketing",
    desc: "Campaign design, list management, A/B testing, automation.",
  },
  {
    icon: "/images/icons/bpo/icon-8.png",
    title: "Campaign Execution",
    desc: "Google Ads, LinkedIn Ads setup and monitoring.",
  },
  {
    icon: "/images/icons/bpo/icon-9.png",
    title: "Analytics & Reporting",
    desc: "Weekly and monthly marketing performance dashboards.",
  },
  {
    icon: "/images/icons/bpo/icon-10.png",
    title: "SEO Operations",
    desc: "On-page SEO, keyword tracking, backlink outreach.",
  },
  {
    icon: "/images/icons/bpo/icon-11.png",
    title: "Marketing Automation",
    desc: "HubSpot, Mailchimp, Zoho Campaigns workflow setup.",
  },
  {
    icon: "/images/icons/bpo/icon-12.png",
    title: "Design Support",
    desc: "Social creatives, email templates, banner ads.",
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

export default function MktgServicesList() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Text */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              eyebrow="What We Execute For You"
              title={"Every Marketing Function.\nOn Time. Every Week."}
              subtitle="We're not a strategy agency. We're your marketing engine — the team that actually does the work."
            />
          </div>

          {/* Right: Tiles */}
          <div className="lg:w-2/3">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-[#E0E7FF] bg-white
                    hover:border-[#F97316]/40 hover:shadow-md hover:bg-[#F97316]/[0.02] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center shrink-0
                    group-hover:bg-[#F97316]/10 transition-colors duration-200">
                    <Image src={s.icon} alt={s.title} width={28} height={28} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm mb-0.5 group-hover:text-[#F97316] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
