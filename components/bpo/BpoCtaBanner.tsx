"use client";

import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";

export default function BpoCtaBanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Outsource Smarter?
          </h2>
        </RevealSection>

        <RevealSection delay={0.1}>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Book a free 30-minute process audit. No commitment. We&apos;ll show
            you exactly where you&apos;re losing money on internal operations.
          </p>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="/contact?service=hro&type=audit"
              variant="primary"
              className="px-10 py-4 text-base font-bold rounded-xl bg-white !text-[#4F46E5] hover:bg-[#EEF2FF]"
            >
              Book Free Audit
            </MagneticButton>

            <Link
              href="/resources/bpo-brochure.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40
                text-white font-semibold text-base hover:bg-white/10 hover:border-white/70
                transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download HRO Brochure
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
