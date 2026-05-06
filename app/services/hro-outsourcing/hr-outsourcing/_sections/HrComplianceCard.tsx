"use client";

import RevealSection from "@/components/shared/RevealSection";

const complianceItems = [
  "Provident Fund (PF)",
  "Employees State Insurance (ESIC)",
  "Professional Tax (PT)",
  "Tax Deducted at Source (TDS)",
  "Gratuity Calculation",
  "Labour Welfare Fund",
  "Shop & Establishment Registration",
  "Annual Returns Filing",
];

export default function HrComplianceCard() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="bg-white rounded-2xl border border-[#E0E7FF] border-l-4 border-l-[#F97316] p-8 md:p-10 shadow-sm">
            {/* Icon + heading */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] leading-snug">
                  We Handle Every Statutory Filing —{" "}
                  <span className="text-[#F97316]">
                    So You Never Pay a Penalty
                  </span>
                </h2>
                <p className="text-[#6B7280] text-sm mt-1">
                  Our compliance calendar runs on autopilot — no missed
                  deadlines, no fines, no stress.
                </p>
              </div>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2.5">
              {complianceItems.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-[#EEF2FF] text-[#4F46E5] rounded-full px-3.5 py-1.5 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            {/* Bottom note */}
            <p className="mt-6 text-xs text-[#94A3B8] border-t border-[#F1F5F9] pt-4">
              All filings are managed by our in-house compliance team, reviewed monthly, and escalated proactively for any regulatory changes.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
