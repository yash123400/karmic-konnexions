import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'AI-Based LMS Platform | Karmic Konnexions NextGen Learning',
  description: 'Karmic Konnexions AI-powered Learning Management System — content delivery, progress tracking, assessments, discussion forums and mobile access for corporate and institutional training.',
};

export default function LmsPlatformPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        variant="gradient"
        eyebrow="AI-Based LMS"
        title="Smart Learning.\nMeasurable Outcomes."
        subtitle="Our Learning Management System powers every program — delivering content, tracking progress, enabling assessments, and keeping learners engaged across devices."
        primaryCta={{ label: 'Get a Demo', href: '/contact?service=lms-platform' }}
      />

      {/* Visual Infographic */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="The Engine Behind Our Training" align="center" />
          
          <RevealSection delay={0.2}>
            <div className="mt-12 mb-20 relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E0E7FF]">
               <Image 
                 src="/images/capability/capability-infographic.png" 
                 fill
                 alt="E-Learning LMS Infographic" 
                 className="object-cover" 
               />
            </div>
          </RevealSection>

          {/* 6 Feature Deep-Dives */}
          <SectionHeader eyebrow="LMS Features" title="Built for Modern Learners" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Content Access",
                desc: "Trainees access lecture materials, e-books, videos, and practice questions on-demand.",
                num: "01"
              },
              {
                title: "Progress Tracking",
                desc: "Individual dashboards showing test scores, attendance, and participation.",
                num: "02"
              },
              {
                title: "Quizzes & Tests",
                desc: "Weekly assessments and final evaluations with real-time feedback.",
                num: "03"
              },
              {
                title: "Discussion Forums",
                desc: "Interactive forums for peer discussions, SME queries, and group problem-solving.",
                num: "04"
              },
              {
                title: "Mobile Access",
                desc: "Fully accessible on smartphones for learning flexibility and convenience.",
                num: "05"
              },
              {
                title: "AI Personalisation",
                desc: "AI adapts learning paths based on individual performance and engagement data.",
                num: "06"
              }
            ].map((feature, i) => (
              <RevealSection key={i} delay={0.1 * (i % 3)}>
                <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 text-7xl font-black text-[#FAFBFF] group-hover:text-[#EEF2FF] transition-colors z-0 select-none pointer-events-none">
                    {feature.num}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA bottom */}
      <section className="py-20 bg-white border-t border-[#E0E7FF] text-center">
        <RevealSection>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to see it in action?</h2>
          <MagneticButton
            href="/contact?service=lms-platform"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Request an LMS Demo
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
