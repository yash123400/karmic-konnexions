import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import { Users, FileText, Settings, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: 'Global Workforce Solutions | Karmic Konnexions',
  description: 'Talent sourcing across India, SEA, Middle East, Africa, and Europe. Karmic Konnexions delivers global talent acquisition, contract staffing, RPO, and managed workforce solutions.',
  keywords: ['global workforce solutions India', 'international talent acquisition', 'RPO India', 'contract staffing', 'GCC talent pipeline'],
};

export default function GlobalWorkforceHubPage() {
  const stats = [
    { value: "500+", label: "Clients Served Globally" },
    { value: "20+", label: "Industries Covered" },
    { value: "15+", label: "Years of Hiring Expertise" },
    { value: "6 Regions", label: "Talent Sourcing Reach" },
  ];

  const coreServices = [
    {
      title: "Talent Acquisition",
      desc: "International & Domestic Hiring, Executive Search, Project Hiring, Campus-to-Corporate Pipelines.",
      industries: "Healthcare, IT, Manufacturing, Logistics, Retail, Aviation",
      icon: <Users className="w-8 h-8 text-[#4F46E5]" />
    },
    {
      title: "Contractual Staffing & Managed Workforce",
      desc: "Contract / Temporary Staffing, Payroll & Compliance Management, Onboarding & Exit Management, Scalable manpower for seasonal/project needs.",
      icon: <FileText className="w-8 h-8 text-[#4F46E5]" />
    },
    {
      title: "Contractual Vendor Empanelment",
      desc: "Empanelment of regional & niche vendors, SLA Monitoring & Governance, Unified billing & performance tracking, Standardized onboarding protocols.",
      icon: <ShieldCheck className="w-8 h-8 text-[#4F46E5]" />
    },
    {
      title: "Shared Services & RPO",
      desc: "Recruitment Process Outsourcing (RPO), Resume Processing & Assessments, HR Helpdesk, BGV, Document Management, Centralized dashboards & analytics.",
      icon: <Settings className="w-8 h-8 text-[#4F46E5]" />
    }
  ];

  const regions = [
    { flag: "🇮🇳", name: "India", note: "Domestic + GCC pipelines" },
    { flag: "🇦🇪", name: "Middle East", note: "UAE, Saudi Arabia, Qatar" },
    { flag: "🌍", name: "Africa", note: "South Africa, Nigeria, Kenya" },
    { flag: "🇬🇧", name: "United Kingdom", note: "Skilled worker visas" },
    { flag: "🌏", name: "Southeast Asia", note: "Singapore, Malaysia" },
    { flag: "🇪🇺", name: "Europe", note: "Select country coverage" },
  ];

  const usps = [
    "Talent sourcing across India, SEA, Middle East, Africa, Europe",
    "Local teams & international mobilization capabilities",
    "Industry-specific talent pools built over 15+ years",
    "GCC (Global Capability Centre) model adoption and pipeline support"
  ];

  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Global Workforce Solutions"
        title={"The Right Talent.\nAnywhere in the World."}
        subtitle="Karmic Konnexions sources, onboards and manages talent across India, Southeast Asia, the Middle East, Africa and Europe — with local expertise at every location."
        primaryCta={{ label: 'Discuss Your Hiring Needs', href: '/contact?service=global-workforce' }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Global Workforce', href: '/services/global-workforce' }
        ]}
      />

      {/* Stats Bar */}
      <section className="bg-[#4F46E5] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <RevealSection key={i} delay={i * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium text-sm tracking-wider uppercase">{stat.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Offerings" title="4 Core Services" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-[#FAFBFF] rounded-2xl p-8 border border-[#E0E7FF] h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{service.title}</h3>
                  <p className="text-[#374151] leading-relaxed mb-4">{service.desc}</p>
                  {service.industries && (
                    <div className="pt-4 border-t border-[#E0E7FF]">
                      <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-1">Industries</p>
                      <p className="text-[#6B7280] text-sm">{service.industries}</p>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-[#FAFBFF] border-y border-[#E0E7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F172A]">
                <Image
                  src="/images/capability/workforce-network.png"
                  alt="Global Network"
                  width={540}
                  height={360}
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
            </RevealSection>
            
            <RevealSection direction="right">
              <SectionHeader 
                eyebrow="Global Reach" 
                title="We Source Talent Across 6 Global Regions" 
                align="left" 
              />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regions.map((region, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E0E7FF]">
                    <span className="text-2xl">{region.flag}</span>
                    <div>
                      <div className="font-bold text-[#0F172A]">{region.name}</div>
                      <div className="text-sm text-[#6B7280]">{region.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Karmic Konnexions" title="Global Reach | Local Expertise" align="center" />
          
          <div className="mt-16 max-w-4xl mx-auto">
            <ul className="space-y-6">
              {usps.map((usp, i) => (
                <RevealSection key={i} delay={i * 0.1}>
                  <li className="flex items-center gap-4 bg-[#FAFBFF] p-6 rounded-2xl border border-[#E0E7FF]">
                    <div className="w-10 h-10 rounded-full bg-[#4F46E5]/10 flex flex-shrink-0 items-center justify-center text-[#4F46E5]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#0F172A] font-medium text-lg">{usp}</span>
                  </li>
                </RevealSection>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] text-center border-t border-white/10">
        <RevealSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to expand your team globally?</h2>
          <MagneticButton
            href="/contact?service=global-workforce"
            variant="primary"
            className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white"
          >
            Start a Hiring Conversation
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
