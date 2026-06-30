import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'Karmic FairConnect - Virtual Job Fair Platform',
  description: 'A comprehensive virtual job fair platform built to handle massive concurrent traffic. Features AI-driven candidate matching, integrated video interviews, and real-time analytics.',
};

export default function KarmicFairConnectPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        eyebrow="Virtual Job Fair Platform"
        title="Karmic FairConnect"
        subtitle="A comprehensive virtual job fair platform built to handle massive concurrent traffic. Featuring AI-driven candidate matching, integrated video interviews, and real-time analytics for employers and job seekers."
        primaryCta={{ label: 'Visit KarmicFairConnect.in', href: 'https://karmicfairconnect.in' }}
      />

      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Platform Features" title="Built for Massive Scale & Engagement" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "10,000+ Concurrent Capacity",
                desc: "Built to handle massive concurrent traffic ensuring a smooth experience for all attendees.",
                num: "01"
              },
              {
                title: "Live Interview Rooms",
                desc: "Integrated WebRTC video calls directly within the platform for seamless communication.",
                num: "02"
              },
              {
                title: "AI Matching Engine",
                desc: "Automatically scores and ranks candidates against job descriptions to find the best fit.",
                num: "03"
              },
              {
                title: "Real-time Event Analytics",
                desc: "Live tracking of footfall, application rates, and interview success.",
                num: "04"
              },
              {
                title: "Employer & Candidate Portals",
                desc: "Dedicated dashboards for managing job postings, profiles, and applications.",
                num: "05"
              },
              {
                title: "AI Resume Parsing",
                desc: "Instantly extracts and structures data from candidate resumes for easy filtering.",
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

      <section className="py-20 bg-white border-t border-[#E0E7FF] text-center">
        <RevealSection>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Experience the Future of Hiring</h2>
          <MagneticButton
            href="https://karmicfairconnect.in"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Explore Karmic FairConnect
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
