"use client";

import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";

export default function CrmTestimonialCta() {
  return (
    <>
      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E0E7FF] shadow-xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#F97316] rounded-l-3xl" />
              
              <div className="pl-4 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-[#0F172A] leading-relaxed mb-8">
                  &ldquo;Our sales director used to spend every Monday morning pulling reports. 
                  Now they arrive in her inbox on Sunday night, auto-formatted. The team&apos;s 
                  productivity went up 25% in the first quarter.&rdquo;
                </blockquote>

                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="font-bold text-[#0F172A] text-base">VP Sales</p>
                  <p className="text-[#6B7280] text-sm">SaaS Company, Pune</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ready to Fix Your Pipeline?
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Get a free CRM audit. We&apos;ll review your data hygiene, stage tracking, 
              and reporting gaps, and show you exactly how we can fix them.
            </p>
            <MagneticButton
              href="/contact?service=crm-sales-ops"
              variant="primary"
              className="px-10 py-4 text-base font-bold rounded-xl bg-[#F97316] text-white hover:bg-[#EA580C]"
            >
              Get a Free CRM Audit
            </MagneticButton>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
