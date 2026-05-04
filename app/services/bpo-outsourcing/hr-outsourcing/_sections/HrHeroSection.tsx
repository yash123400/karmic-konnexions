"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";
import SplitText from "@/components/shared/SplitText";

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BPO Outsourcing", href: "/services/bpo-outsourcing" },
  { label: "HR & Payroll", href: "/services/bpo-outsourcing/hr-outsourcing" },
];

export default function HrHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-[#FAFBFF] pt-32 pb-20 md:pb-28">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F97316]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#6B7280] mb-8 flex-wrap"
          aria-label="Breadcrumb"
        >
          {breadcrumb.map((item, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-[#374151] font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 shrink-0" />}
              </span>
            );
          })}
        </nav>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-4">
              HR &amp; Payroll Outsourcing
            </div>

            <div className="mb-6">
              <SplitText
                text="Your Entire HR Function."
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0F172A] leading-[1.08]"
              />
              <SplitText
                text="Managed for You."
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#4F46E5] leading-[1.08]"
              />
            </div>

            <RevealSection delay={0.35}>
              <p className="text-lg text-[#374151] leading-relaxed max-w-xl mb-8">
                From onboarding to exit interviews, payroll compliance to
                PF/ESIC filings — Karmic Konnexions becomes your off-site HR
                department. Certified professionals, zero penalties, guaranteed.
              </p>
            </RevealSection>

            <RevealSection delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="/contact?service=hr-outsourcing"
                  variant="primary"
                  className="px-8 py-4 text-base font-bold rounded-xl"
                >
                  Start with a Free HR Audit
                </MagneticButton>
                <Link
                  href="#our-process"
                  className="inline-flex items-center gap-2 text-[#4F46E5] font-semibold text-base hover:gap-3 transition-all duration-200"
                >
                  See How It Works <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealSection>
          </div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#4F46E5]/8 blur-2xl scale-110" />
              {/* Circle bg */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#4F46E5]/10 flex items-center justify-center relative">
                {/* Inner accent ring */}
                <div className="absolute inset-6 rounded-full border-2 border-[#4F46E5]/15" />
                <Image
                  src="/images/icons/bpo/icon-1.png"
                  alt="HR & People management"
                  width={200}
                  height={200}
                  className="drop-shadow-2xl relative z-10"
                />
              </div>

              {/* Floating stat chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-6 top-16 bg-white rounded-xl shadow-lg border border-[#E0E7FF] px-4 py-2.5"
              >
                <div className="text-lg font-black text-[#4F46E5]">5,000+</div>
                <div className="text-xs text-[#6B7280] font-medium">
                  Employees Payrolled
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-6 bottom-16 bg-white rounded-xl shadow-lg border border-[#E0E7FF] px-4 py-2.5"
              >
                <div className="text-lg font-black text-[#F97316]">
                  100%
                </div>
                <div className="text-xs text-[#6B7280] font-medium">
                  On-time Delivery
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
