import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'Recruitment Process Outsourcing (RPO) | Karmic Konnexions',
  description: 'Full-cycle RPO services — resume processing, assessments, HR helpdesk, BGV, document management, and centralised dashboards. Outsource your entire recruitment function.',
};

export default function RpoPage() {
  const blocks = [
    {
      title: "Recruitment Process Outsourcing",
      desc: "We operate as your embedded talent acquisition team. We absorb your culture, understand your long-term goals, and handle the complete recruitment lifecycle from requisition to onboarding.",
      number: "01"
    },
    {
      title: "Resume Processing & Assessments",
      desc: "Structured screening, shortlisting and assessment coordination. We filter out the noise and present only the top quartile of qualified candidates to your hiring managers.",
      number: "02"
    },
    {
      title: "HR Helpdesk & BGV",
      desc: "Comprehensive support covering candidate queries, background verification (BGV), reference checks, and secure offer documentation management.",
      number: "03"
    },
    {
      title: "Centralised Dashboards",
      desc: "Real-time visibility into pipeline health, time-to-fill, cost-per-hire, and diversity metrics through our integrated analytics dashboards.",
      number: "04"
    }
  ];

  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Recruitment Process Outsourcing"
        title={"Your Hiring Function.\nFully Managed."}
        subtitle="Outsource your recruitment end-to-end. We deploy dedicated teams, proven processes, and advanced technology to deliver talent at scale while reducing your cost-per-hire."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Global Workforce', href: '/services/global-workforce' },
          { label: 'RPO', href: '/services/global-workforce/rpo' }
        ]}
      />

      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Methodology" title="The RPO Advantage" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blocks.map((block, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#E0E7FF] h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-[#F3F4F6] group-hover:text-[#EEF2FF] transition-colors z-0 select-none">
                    {block.number}
                  </div>
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 pr-12">{block.title}</h3>
                    <p className="text-[#4B5563] leading-relaxed text-lg">{block.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center border-t border-[#E0E7FF]">
        <RevealSection>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Want to lower your cost-per-hire?</h2>
          <MagneticButton
            href="/contact?service=rpo&type=proposal"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Get an RPO Proposal
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
