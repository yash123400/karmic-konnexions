"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";
import SplitText from "@/components/shared/SplitText";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "HRO & Business Functions", href: "/services/hro-outsourcing" },
  { label: "Finance & Accounts", href: "/services/hro-outsourcing/finance-accounts" },
];

// Animated SVG bar-chart decoration
function BarChartDecoration() {
  const bars = [
    { h: 40, delay: 0 },
    { h: 65, delay: 0.1 },
    { h: 50, delay: 0.2 },
    { h: 80, delay: 0.3 },
    { h: 60, delay: 0.4 },
    { h: 95, delay: 0.5 },
  ];
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Horizontal grid lines */}
      {[100, 75, 50, 25].map((y) => (
        <line
          key={y}
          x1="10" y1={y} x2="230" y2={y}
          stroke="#4F46E5" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4"
        />
      ))}
      {/* Bars */}
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={20 + i * 34}
          width={20}
          y={100 - bar.h}
          height={bar.h}
          rx={4}
          fill="#4F46E5"
          fillOpacity="0.18"
          initial={{ height: 0, y: 100 }}
          animate={{ height: bar.h, y: 100 - bar.h }}
          transition={{ duration: 0.8, delay: 0.4 + bar.delay, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      {/* Trend line */}
      <motion.polyline
        points={bars.map((b, i) => `${30 + i * 34},${100 - b.h}`).join(" ")}
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function FaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-[#FAFBFF] pt-32 pb-20 md:pb-28">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-[#4F46E5]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F97316]/6 blur-3xl pointer-events-none" />

      {/* Decorative bar-chart SVG */}
      <div className="absolute right-0 top-24 w-[340px] h-[240px] pointer-events-none select-none opacity-70 hidden lg:block">
        <BarChartDecoration />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8 flex-wrap" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-[#374151] font-medium">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-[#4F46E5] transition-colors">{item.label}</Link>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 shrink-0" />}
              </span>
            );
          })}
        </nav>

        {/* Eyebrow */}
        <div className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-4">
          Finance &amp; Accounts Outsourcing
        </div>

        {/* Headlines */}
        <div className="max-w-3xl mb-6">
          <SplitText
            text="CFO-Grade Finance."
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0F172A] leading-[1.08]"
          />
          <SplitText
            text="Startup-Friendly Costs."
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#4F46E5] leading-[1.08]"
          />
        </div>

        <RevealSection delay={0.35}>
          <p className="text-lg text-[#374151] leading-relaxed max-w-xl mb-8">
            Get CA-supervised accounts management, real-time MIS dashboards,
            GST filing, and financial reporting — without hiring a full finance team.
          </p>
        </RevealSection>

        <RevealSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton
              href="/contact?service=finance-accounts"
              variant="primary"
              className="px-8 py-4 text-base font-bold rounded-xl"
            >
              Get a Free Finance Audit
            </MagneticButton>
            <Link
              href="#our-process"
              className="inline-flex items-center gap-2 text-[#4F46E5] font-semibold text-base hover:gap-3 transition-all duration-200"
            >
              See Our Process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealSection>

        {/* Trust chips */}
        <RevealSection delay={0.65}>
          <div className="flex flex-wrap gap-3 mt-8">
            {["CA-Supervised", "GST Compliant", "Real-time MIS", "Zero Penalties"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 bg-white border border-[#E0E7FF] rounded-full px-4 py-1.5 text-xs font-semibold text-[#374151] shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                {tag}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
