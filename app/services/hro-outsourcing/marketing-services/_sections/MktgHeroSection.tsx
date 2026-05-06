"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";
import SplitText from "@/components/shared/SplitText";
import HroSubNav from "@/components/bpo/HroSubNav";

function MegaphoneDecoration() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full text-[#F97316] opacity-20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 6l9-3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2l-9-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
      <path d="M22 10c1.5 1 1.5 3 0 4" />
      <path d="M25 7c3 2 3 8 0 10" />
      <path d="M28 4c4.5 3 4.5 13 0 16" />
    </svg>
  );
}

export default function MktgHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-white pt-32 pb-20 md:pb-28">
      {/* Decorative SVG Megaphone */}
      <div className="absolute -right-10 -top-10 w-[400px] h-[400px] pointer-events-none select-none hidden lg:block rotate-12">
        <MegaphoneDecoration />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <HroSubNav />

        {/* Eyebrow */}
        <div className="inline-block bg-gradient-to-r from-[#F97316] to-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
          Marketing Services
        </div>

        {/* Headlines */}
        <div className="max-w-3xl mb-6">
          <SplitText
            text="Consistent Marketing."
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0F172A] leading-[1.08]"
          />
          <SplitText
            text="Without the Agency Markup."
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#F97316] leading-[1.08]"
          />
        </div>

        <RevealSection delay={0.35}>
          <p className="text-lg text-[#374151] leading-relaxed max-w-2xl mb-8">
            From content calendars to email campaigns to analytics reporting — 
            Karmic&apos;s marketing operations team executes your strategy week 
            after week, without the overhead of an agency retainer.
          </p>
        </RevealSection>

        <RevealSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton
              href="/contact?service=marketing-services"
              variant="primary"
              className="px-8 py-4 text-base font-bold rounded-xl bg-[#F97316] text-white hover:bg-[#EA580C]"
            >
              Explore Marketing Plans
            </MagneticButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
