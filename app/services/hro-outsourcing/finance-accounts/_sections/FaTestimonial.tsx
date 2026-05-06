"use client";

import RevealSection from "@/components/shared/RevealSection";

export default function FaTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E0E7FF] shadow-xl p-10 md:p-12 relative overflow-hidden">
            {/* Bg accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#4F46E5] rounded-l-3xl" />

            <div className="pl-4">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl font-medium text-[#0F172A] leading-relaxed mb-8">
                &ldquo;We used to spend 8 days closing our monthly books. With
                Karmic&apos;s finance team, we close in under 72 hours — and
                the MIS actually helps us make decisions.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-[#F1F5F9] pt-6">
                <div className="w-12 h-12 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  CO
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">COO</p>
                  <p className="text-[#6B7280] text-sm">
                    D2C Brand, Delhi NCR · Annual Revenue: ₹12 Cr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
