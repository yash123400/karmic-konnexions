"use client";

import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";

export default function HrCtaBanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F97316]/8 blur-[80px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealSection>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#4F46E5]/20 border border-[#4F46E5]/30 rounded-full px-4 py-2 text-[#A5B4FC] text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A5B4FC] animate-pulse" />
            Free for the first 48 hours
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Hand Off Your HR?
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Get started with a free HR health check. We&apos;ll review your
            payroll, compliance, and HR ops in 48 hours and give you a clear
            action plan — no strings attached.
          </p>
        </RevealSection>

        <RevealSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="/contact?service=hr-outsourcing"
              variant="primary"
              className="px-10 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white hover:bg-[#4338CA]"
            >
              Book Free HR Audit
            </MagneticButton>
            <a
              href="https://wa.me/919667759894?text=Hi%2C%20I%20want%20to%20know%20more%20about%20HR%20outsourcing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20
                text-white/80 font-semibold text-base hover:bg-white/10 hover:border-white/40 hover:text-white
                transition-all duration-200"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              "No credit card required",
              "Response within 2 hours",
              "Zero commitment",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[#64748B] text-sm"
              >
                <svg
                  className="w-4 h-4 text-[#22C55E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
