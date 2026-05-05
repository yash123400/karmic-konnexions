import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schemas";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RevealSection from "@/components/shared/RevealSection";
import SplitText from "@/components/shared/SplitText";
import MagneticButton from "@/components/shared/MagneticButton";
import SplineSceneDynamic from "@/components/3d/SplineSceneDynamic";

// Client section imports
import BpoStatsBar from "@/components/bpo/BpoStatsBar";
import BpoServicesGrid from "@/components/bpo/BpoServicesGrid";
import BpoWhySection from "@/components/bpo/BpoWhySection";
import BpoOnboardingTimeline from "@/components/bpo/BpoOnboardingTimeline";
import BpoFaqAccordion from "@/components/bpo/BpoFaqAccordion";
import BpoCtaBanner from "@/components/bpo/BpoCtaBanner";

export const metadata: Metadata = {
  title: "BPO Outsourcing Services | Karmic Konnexions Global Consulting",
  description:
    "End-to-end business process outsourcing — HR & Payroll, Finance & Accounts, CRM & Sales Operations, Marketing Services. Scale smarter with Karmic Konnexions.",
  keywords: [
    "BPO outsourcing India",
    "business process outsourcing Gurgaon",
    "HR outsourcing",
    "finance outsourcing",
    "CRM outsourcing",
  ],
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BPO Outsourcing", href: "/services/bpo-outsourcing" },
];

const bpoFaqs = [
  { q: "What processes can you outsource?", a: "We cover the full spectrum of back-office functions — HR, Payroll, Finance, Accounts, CRM Administration, and Marketing Operations. If it's process-driven and repeatable, we can handle it." },
  { q: "How do you ensure data security?", a: "All our BPO operations follow ISO 27001 guidelines. Data is accessed through secured VPN channels, with role-based access controls and NDA-bound contracts for every engagement." },
  { q: "Do I need to provide your team with computers?", a: "No. Our teams work from our infrastructure. You only provide secure access credentials to your systems and a point of contact for escalations." },
  { q: "Can we start with just one process?", a: "Absolutely. Most clients start with payroll or accounts payable, see the results in 60 days, and then expand. There's no minimum scope requirement." },
  { q: "What are your pricing models?", a: "We offer FTE-based (per-person per-month), transaction-based, and hybrid pricing. We'll recommend the best model after a free process audit tailored to your operations." },
  { q: "Is there a lock-in period?", a: "Our standard contracts are 12 months with a 90-day exit clause. We keep clients by delivering results, not by locking them in." },
];

export default function BpoOutsourcingPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'BPO Outsourcing', item: '/services/bpo-outsourcing' },
      ])} />
      <JsonLd data={buildFaqSchema(bpoFaqs)} />
      {/* ── Section 1 — Custom Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F0F4FF] to-[#FAFBFF] pt-32 pb-20 md:pb-28">
        {/* Geometric SVG decoration */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none select-none" aria-hidden="true">
          <svg viewBox="0 0 700 700" fill="none" className="w-full h-full">
            <circle cx="600" cy="100" r="280" fill="#4F46E5" fillOpacity="0.06" />
            <circle cx="550" cy="200" r="200" fill="#4F46E5" fillOpacity="0.05" />
            <circle cx="650" cy="350" r="150" fill="#F97316" fillOpacity="0.04" />
            {/* Grid dots */}
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={380 + col * 40}
                  cy={80 + row * 40}
                  r="2"
                  fill="#4F46E5"
                  fillOpacity="0.2"
                />
              ))
            )}
          </svg>
        </div>

        {/* Bottom-left blob */}
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F97316]/6 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8" aria-label="Breadcrumb">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;
              return (
                <div key={item.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-[#374151] font-medium">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-[#4F46E5] transition-colors">
                      {item.label}
                    </Link>
                  )}
                  {!isLast && <ChevronRight className="w-3 h-3" />}
                </div>
              );
            })}
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              {/* Eyebrow */}
              <div className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-4">
                Business Process Outsourcing
              </div>

              {/* Headline */}
              <div className="max-w-4xl">
                <SplitText
                  text="Scale Operations Without"
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.08]"
                />
                <SplitText
                  text="Scaling Headcount"
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4F46E5] leading-[1.08]"
                />
              </div>

              {/* Subtitle */}
              <RevealSection delay={0.35}>
                <p className="text-lg md:text-xl text-[#374151] mt-6 max-w-2xl leading-relaxed">
                  Karmic Konnexions delivers end-to-end BPO solutions that cut
                  operational costs by up to 60% while elevating service quality.
                  From HR to Finance to Sales — we run the processes so you can run
                  the business.
                </p>
              </RevealSection>

              {/* CTAs */}
              <RevealSection delay={0.5}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                  <MagneticButton
                    href="/contact?service=bpo"
                    variant="primary"
                    className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
                  >
                    Get a Free Process Audit
                  </MagneticButton>
                  <Link
                    href="#how-we-work"
                    className="inline-flex items-center gap-2 text-[#4F46E5] font-semibold text-base
                      hover:gap-3 transition-all duration-200"
                  >
                    See Our Process
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </RevealSection>
            </div>
            
            <div className="hidden lg:flex w-full lg:w-[400px] justify-end items-center">
              <RevealSection delay={0.2}>
                <SplineSceneDynamic
                  fallbackColor="#4F46E5"
                  className="w-80 h-80 lg:w-[400px] lg:h-[400px]"
                  // url="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
                />
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 — Stats Bar ── */}
      <BpoStatsBar />

      {/* ── Section 3 — BPO Services Grid ── */}
      <BpoServicesGrid />

      {/* ── Section 4 — Why Outsource with Karmic ── */}
      <BpoWhySection />

      {/* ── Section 5 — Onboarding Timeline ── */}
      <BpoOnboardingTimeline />

      {/* ── Section 6 — Client Testimonial ── */}
      <section className="py-20 bg-[#F97316] relative overflow-hidden">
        {/* Large decorative quote mark */}
        <div className="absolute top-8 left-8 pointer-events-none select-none" aria-hidden="true">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="white" fillOpacity="0.25">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealSection>
            <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-3xl mx-auto">
              &ldquo;Karmic Konnexions took over our entire back-office in 30
              days. We went from a 12-person admin team to a lean 3-person
              oversight function — and accuracy actually improved.&rdquo;
            </blockquote>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="text-white/70 mt-6 text-sm font-medium">
              — CFO, Mid-size NBFC, Gurugram (300+ employees)
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 7 — FAQ ── */}
      <BpoFaqAccordion />

      {/* ── Section 8 — CTA Banner ── */}
      <BpoCtaBanner />
    </>
  );
}
