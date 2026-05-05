import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronRight } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'Corporate Training Programs | Karmic Konnexions',
  description: 'Industry-aligned training programs — pre/post assessments, bridge programs, hackathons, SME mentoring, and 6-month post-training support. Real outcomes, not just certificates.',
};

export default function TrainingProgramsPage() {
  const modesOfEngagement = [
    "Academicians & Industry Practitioners",
    "Integration with existing curriculum",
    "Soft skills training",
    "Real Time Projects",
    "Career Guidance program",
    "Case Studies",
    "Hackathons",
    "Assessments",
    "Access to LMS & e-learning content",
    "Gamification",
    "Masterclass from Industry Experts",
    "Virtual Labs",
    "Capstone Projects + Placement Assistance*"
  ];

  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Training Programs"
        title="Programs Built for\nthe Real World."
        subtitle="Every Karmic training program is designed with industry outcomes in mind. We combine academic rigour (via Regenesys) with practical, hands-on learning."
        primaryCta={{ label: 'View Course Catalog', href: '/programs' }}
        secondaryCta={{ label: 'Corporate Enquiry', href: '/contact?service=training' }}
      />

      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Methodology" title="13 Modes of Engagement" align="center" />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {modesOfEngagement.map((mode, i) => (
              <RevealSection key={i} delay={0.05 * (i % 4)}>
                <div className="bg-white p-5 rounded-xl border border-[#E0E7FF] shadow-sm flex items-center gap-3 h-full hover:border-[#4F46E5]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    <span className="text-[#4F46E5] text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-[#374151] font-medium text-sm leading-snug">{mode}</span>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.4}>
            <p className="text-center text-[#6B7280] text-sm mt-8 italic">
              * Placement assistance is available for select comprehensive programs.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F46E5]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <RevealSection>
              <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Beyond Just Certificates</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                Our objective isn&apos;t to hand out paper — it&apos;s to build capabilities. We measure our success by your team&apos;s productivity post-training.
              </p>
              <MagneticButton
                href="/contact?service=training"
                variant="primary"
                className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4338CA] transition-colors relative z-10"
              >
                Discuss Your Training Needs
              </MagneticButton>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
