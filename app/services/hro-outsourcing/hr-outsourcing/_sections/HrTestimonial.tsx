"use client";

import RevealSection from "@/components/shared/RevealSection";

export default function HrTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E0E7FF] shadow-xl p-10 md:p-12 relative">
            {/* Decorative quote mark */}
            <svg
              className="absolute top-8 left-8 w-16 h-16 text-[#4F46E5] opacity-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#F97316]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl font-medium text-[#0F172A] leading-relaxed mb-8">
                &ldquo;We had 3 payroll errors in a year before Karmic. In 18
                months with them, we&apos;ve had zero. Their compliance team is
                sharper than most in-house HR departments I&apos;ve seen.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-[#F1F5F9] pt-6">
                <div className="w-12 h-12 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  DF
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">
                    Director of Finance
                  </p>
                  <p className="text-[#6B7280] text-sm">
                    IT Services Company, Bangalore · 180 employees
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
