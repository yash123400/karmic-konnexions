import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contract & Temporary Staffing | Karmic Konnexions',
  description: 'Flexible contract staffing, payroll management, compliance, and scalable managed workforce for seasonal and project-based needs — across India and internationally.',
};

export default function ContractStaffingPage() {
  const scope = [
    {
      title: "Contract / Temporary Staffing",
      desc: "Rapid deployment of screened contract resources for fixed durations. Avoid headcount commitments while meeting immediate delivery requirements.",
    },
    {
      title: "Payroll & Compliance",
      desc: "Full statutory payroll management for contract staff including PF, ESIC, PT, and TDS. We assume the employer-of-record liabilities.",
    },
    {
      title: "Onboarding & Exit Management",
      desc: "End-to-end joining formalities, induction coordination, and smooth exit processes — ensuring zero friction for your internal HR teams.",
    },
    {
      title: "Scalable for Seasonal/Project Needs",
      desc: "Ramp up or down within 2 weeks. Ideal for IT rollouts, festive season retail spikes, or large-scale manufacturing shifts with no long-term commitment.",
    }
  ];

  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Contract Staffing"
        title={"Flexible Workforce.\nZero Compliance Risk."}
        subtitle="Deploy contract and temporary staff rapidly. We handle payroll, compliance, onboarding and exit — you get the output without the employment liability."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Global Workforce', href: '/services/global-workforce' },
          { label: 'Contract Staffing', href: '/services/global-workforce/contract-staffing' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Solution" title="Comprehensive Staffing Scope" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scope.map((item, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="flex gap-6 items-start bg-[#FAFBFF] p-8 rounded-2xl border border-[#E0E7FF] h-full hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] text-center border-t border-white/10">
        <RevealSection>
          <h2 className="text-3xl font-bold text-white mb-6">Need resources quickly?</h2>
          <MagneticButton
            href="/contact?service=contract-staffing"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Discuss Staffing Needs
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
