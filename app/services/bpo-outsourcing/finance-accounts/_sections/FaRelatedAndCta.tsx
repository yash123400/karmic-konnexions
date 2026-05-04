"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";

const related = [
  {
    title: "HR & Payroll Outsourcing",
    desc: "Full-cycle HR operations — from hire to retire — managed by certified professionals.",
    href: "/services/bpo-outsourcing/hr-outsourcing",
    color: "#4F46E5",
  },
  {
    title: "CRM & Sales Operations",
    desc: "Pipeline management, lead nurturing, and CRM administration at scale.",
    href: "/services/bpo-outsourcing/crm-sales-ops",
    color: "#F97316",
  },
  {
    title: "Marketing Services",
    desc: "Demand generation, content operations, and campaign execution — outsourced.",
    href: "/services/bpo-outsourcing/marketing-services",
    color: "#4F46E5",
  },
];

export default function FaRelatedAndCta() {
  return (
    <>
      {/* ── Related Services ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="More BPO Services" title="Also Explore" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="group block bg-white border border-[#E0E7FF] rounded-2xl p-7
                    hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className="w-10 h-1 rounded-full mb-5 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: s.color }}
                  />
                  <h3 className="font-bold text-[#0F172A] text-base mb-2 group-hover:text-[#4F46E5] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #0F172A 100%)" }}
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/8 blur-[80px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-full px-4 py-2 text-[#A5B4FC] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A5B4FC] animate-pulse" />
              Report delivered in 48 hours
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Book Free Finance Health Check
            </h2>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              We&apos;ll audit your books, flag compliance gaps, and deliver a
              full finance health report — no strings attached, in 48 hours.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href="/contact?service=finance-accounts"
                variant="primary"
                className="px-10 py-4 text-base font-bold rounded-xl"
              >
                Book Free Finance Audit
              </MagneticButton>
              <a
                href="https://wa.me/919667759894?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Finance%20outsourcing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20
                  text-white/80 font-semibold text-base hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {["No credit card required", "Response within 2 hours", "Zero commitment"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[#64748B] text-sm">
                  <svg className="w-4 h-4 text-[#22C55E]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
