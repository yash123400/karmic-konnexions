import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronRight, Award } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'Career Guidance & Placement Support | Karmic Konnexions',
  description: 'Career exploration workshops, resume reviews, skill mapping, alumni connect, and job market insights — helping learners land the right role after training.',
};

export default function CareerGuidancePage() {
  const pillars = [
    {
      title: "Career Exploration Workshops",
      desc: "Sessions on different career paths in engineering, tech, and non-tech domains."
    },
    {
      title: "Personalized Sessions",
      desc: "Resume reviews, career advice, and interview preparation tailored to your profile."
    },
    {
      title: "Skill Mapping & Goal Setting",
      desc: "Help students identify strengths and align them with long-term career goals."
    },
    {
      title: "Job Market Insights",
      desc: "Analyse industry trends, emerging technologies, and in-demand skills to stay ahead."
    },
    {
      title: "Alumni Connect",
      desc: "Interactive sessions with successful alumni to inspire and provide real-world insights."
    }
  ];

  return (
    <>
      <PageHero
        variant="gradient"
        eyebrow="Career Guidance Program"
        title="From Learner\nto Professional."
        subtitle="Our responsibility doesn't end with training. We actively guide learners toward their desired career outcomes through structured workshops, mentoring, and placement support."
        primaryCta={{ label: 'Enroll Your Institution', href: '/contact?service=career-guidance' }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Process" title="5 Pillars of Career Guidance" align="center" />
          
          <div className="mt-16 max-w-4xl mx-auto space-y-6">
            {pillars.map((pillar, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-[#FAFBFF] p-6 rounded-2xl border border-[#E0E7FF] hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0 font-black text-2xl">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{pillar.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SME Mentoring Section */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4F46E5 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealSection>
            <div className="w-20 h-20 rounded-full bg-[#4F46E5]/20 flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-[#4F46E5]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subject Matter Expert (SME) Mentoring</h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Ongoing guidance from Subject Matter Experts (SMEs) for project and capstone support. We provide refresher & doubt-clearing sessions, plus 6 months of post-training access to recordings and dashboards.
            </p>
          </RevealSection>
        </div>
      </section>
      
      {/* CTA bottom */}
      <section className="py-20 bg-white border-t border-[#E0E7FF] text-center">
        <RevealSection>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to empower your students?</h2>
          <MagneticButton
            href="/contact?service=career-guidance"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Start a Conversation
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
