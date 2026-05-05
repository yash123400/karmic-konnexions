import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'Global Talent Acquisition | Karmic Konnexions',
  description: 'International and domestic hiring, executive search, project-based hiring, and campus-to-corporate talent pipelines — across Healthcare, IT, Manufacturing, Logistics, Retail and Aviation.',
};

export default function TalentAcquisitionPage() {
  const industries = [
    {
      name: "Healthcare",
      icon: "/images/icons/bpo/icon-healthcare.svg",
      note: "Sourcing certified medical professionals and hospital administrators globally."
    },
    {
      name: "IT & Technology",
      icon: "/images/icons/bpo/icon-tech.svg",
      note: "Filling niche tech stacks and scaling engineering teams rapidly."
    },
    {
      name: "Manufacturing",
      icon: "/images/icons/bpo/icon-manufacturing.svg",
      note: "Recruiting plant heads, shop-floor supervisors, and operational leaders."
    },
    {
      name: "Logistics & SCM",
      icon: "/images/icons/bpo/icon-logistics.svg",
      note: "Finding supply chain experts, fleet managers, and warehouse leadership."
    },
    {
      name: "Retail & FMCG",
      icon: "/images/icons/bpo/icon-retail.svg",
      note: "Volume hiring for store operations and category management specialists."
    },
    {
      name: "Aviation",
      icon: "/images/icons/bpo/icon-aviation.svg",
      note: "Placing ground staff, technical crew, and aviation operations experts."
    }
  ];

  const services = [
    {
      title: "International & Domestic Hiring",
      desc: "End-to-end placement across borders and within India. We handle compliance, market mapping, and the entire candidate journey.",
      number: "01"
    },
    {
      title: "Executive Search",
      desc: "C-suite, VP, and Director level mandates. We utilize confidential search protocols to approach passive candidates discreetly.",
      number: "02"
    },
    {
      title: "Project Hiring",
      desc: "Fixed-term, project-specific talent deployed rapidly. Ideal for scaling up teams for short-term implementations and rollouts.",
      number: "03"
    },
    {
      title: "Campus-to-Corporate Pipelines",
      desc: "Structured campus recruitment drives and fresher onboarding programs, bridging the gap between academia and industry requirements.",
      number: "04"
    }
  ];

  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Talent Acquisition"
        title={"Senior Talent.\nFast. Globally."}
        subtitle="From executive search to campus recruitment, we build the pipelines that keep your organisation staffed with the right people at the right time."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Global Workforce', href: '/services/global-workforce' },
          { label: 'Talent Acquisition', href: '/services/global-workforce/talent-acquisition' }
        ]}
      />

      {/* Service Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Approach" title="Specialized Hiring Methods" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="group relative bg-[#FAFBFF] p-8 rounded-2xl border border-[#E0E7FF] overflow-hidden h-full">
                  <div className="absolute -right-6 -top-6 text-[#EEF2FF] font-black text-9xl z-0 transition-transform group-hover:scale-110">
                    {service.number}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{service.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Industry Focus" title="Where We Excel" theme="dark" align="center" />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Image src={ind.icon} alt={ind.name} width={28} height={28} className="brightness-0 invert opacity-90" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{ind.note}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center border-t border-[#E0E7FF]">
        <RevealSection>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Looking for leadership or volume talent?</h2>
          <MagneticButton
            href="/contact?service=talent-acquisition"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Share Your Hiring Brief
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
