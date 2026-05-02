"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Voices"
          title="What Our Clients Say"
          align="center"
        />

        <RevealSection>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-border relative">
              {/* Large quote mark */}
              <svg
                className="absolute top-8 left-8 w-20 h-20 text-primary opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-2xl font-medium text-text-primary italic leading-relaxed relative z-10">
                &ldquo;Karmic Konnexions built our entire HR function from
                scratch in 45 days. Dashboards, compliance and a great team —
                without a single full-time HR hire.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  KK
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    CFO, Logistics Company
                  </p>
                  <p className="text-sm text-text-muted">300 Employees</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
