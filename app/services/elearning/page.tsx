import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: 'E-Learning & Corporate Training Solutions | Karmic Konnexions',
  description: 'AI-powered LMS, industry-aligned training programs, career guidance and campus-to-corporate pipelines. Karmic Konnexions NextGen Learning — bridging education and employment.',
  keywords: ['corporate training India', 'e-learning solutions', 'LMS platform India', 'campus to corporate training', 'NextGen Learning'],
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "E-Learning", href: "/services/elearning" },
];

export default function ELearningPage() {
  return (
    <>
      {/* Breadcrumb wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-[#6B7280]" aria-label="Breadcrumb">
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
      </div>

      {/* Section 1 — PageHero */}
      <PageHero
        variant="split"
        eyebrow="Karmic Konnexions NextGen Learning"
        title="Bridging Education\nand Employment."
        subtitle="AI-powered learning management, industry-aligned training programs, and career guidance that transforms students into industry-ready professionals."
        primaryCta={{ label: 'Explore Programs', href: '/services/elearning/training-programs' }}
        secondaryCta={{ label: 'Partner with Us', href: '/contact?service=elearning' }}
        rightContent={
          <Image
            src="/images/capability/capability-hero-slide1.png"
            width={580}
            height={380}
            alt="E-Learning and graduation"
            className="rounded-2xl object-cover shadow-2xl"
            priority
          />
        }
      />

      {/* Section 2 — Global Presence Banner */}
      <section className="bg-[#3730A3] py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Impacting Lives Across Multiple Countries — from South Africa to the United Kingdom
            </h2>
            <p className="text-indigo-200 text-lg max-w-3xl mx-auto mb-10">
              Karmic Konnexions&apos; learning programs have reached learners across India, UAE, South Africa, the United Kingdom, and Southeast Asia.
            </p>
            <div className="relative w-full max-w-5xl mx-auto h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl bg-[#0F172A]/50">
               <Image 
                 src="/images/capability/capability-hero-large.png" 
                 fill
                 alt="Global Map" 
                 className="object-cover opacity-80" 
               />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 3 — Core Offerings */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Offer" title="A Complete Learning\nEcosystem" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <RevealSection delay={0.1}>
              <div className="bg-[#FAFBFF] rounded-2xl p-8 border border-[#E0E7FF] h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#EEF2FF] rounded-xl flex items-center justify-center mb-6">
                  {/* Using an img if icon exists, fallback to simple styling if not */}
                  <Image src="/images/icons/bpo/icon-13.png" width={32} height={32} alt="Global Workforce" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Global Workforce Solutions</h3>
                <ul className="space-y-3">
                  {["Contract Staffing", "Shared Services", "Retainership Model"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>

            {/* Card 2 */}
            <RevealSection delay={0.2}>
              <div className="bg-[#FAFBFF] rounded-2xl p-8 border border-[#E0E7FF] h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#FFF7ED] rounded-xl flex items-center justify-center mb-6">
                  <Image src="/images/icons/bpo/icon-8.png" width={32} height={32} alt="LMS" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">AI-Based LMS Platform</h3>
                <ul className="space-y-3">
                  {[
                    "Content delivery & e-books",
                    "Progress tracking dashboards",
                    "Quizzes, assessments & discussion forums",
                    "Mobile-accessible"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>

            {/* Card 3 */}
            <RevealSection delay={0.3}>
              <div className="bg-[#FAFBFF] rounded-2xl p-8 border border-[#E0E7FF] h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#EEF2FF] rounded-xl flex items-center justify-center mb-6">
                  <Image src="/images/icons/bpo/icon-1.png" width={32} height={32} alt="Campus" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Campus-to-Corporate</h3>
                <ul className="space-y-3">
                  {[
                    "Pre & post assessments",
                    "Bridge programs",
                    "Industry masterclasses (with Regenesys)",
                    "Placement assistance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5" />
                      <span className="text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Section 4 — 4 Engagement Approaches */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Approach" title="Four Ways We Work\nWith Institutions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <RevealSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] h-full shadow-sm">
                <div className="text-4xl font-black text-[#EEF2FF] mb-4">01</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Manpower Hiring — Global Talent Acquisition</h3>
                <p className="text-[#6B7280] text-sm mb-4">Healthcare, IT, Manufacturing, Logistics, Retail, Aviation</p>
                <p className="text-[#374151] leading-relaxed">International & Domestic Hiring, Executive Search, Project Hiring, Campus-to-Corporate Pipelines</p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] h-full shadow-sm">
                <div className="text-4xl font-black text-[#FFF7ED] mb-4">02</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Contractual Staffing & Managed Workforce</h3>
                <p className="text-[#6B7280] text-sm mb-4">Flexible, on-demand workforce</p>
                <p className="text-[#374151] leading-relaxed">Contract/Temporary Staffing, Payroll & Compliance, Onboarding & Exit, Scalable manpower for seasonal/project needs</p>
              </div>
            </RevealSection>

            <RevealSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] h-full shadow-sm">
                <div className="text-4xl font-black text-[#EEF2FF] mb-4">03</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Contractual Vendor Empanelment</h3>
                <p className="text-[#6B7280] text-sm mb-4">Streamlined partner management</p>
                <p className="text-[#374151] leading-relaxed">Empanelment of regional/niche vendors, SLA Monitoring & Governance, Unified billing & performance tracking, Standardized onboarding protocols</p>
              </div>
            </RevealSection>

            <RevealSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] h-full shadow-sm">
                <div className="text-4xl font-black text-[#FFF7ED] mb-4">04</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Shared Services & Centralized Hiring</h3>
                <p className="text-[#6B7280] text-sm mb-4">Optimizing operational efficiency</p>
                <p className="text-[#374151] leading-relaxed">Recruitment Process Outsourcing (RPO), Resume Processing & Assessments, HR Helpdesk, BGV, Document Management, Centralized dashboards and analytics</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Section 5 — USPs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <RevealSection>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 w-full max-w-[520px] mx-auto lg:mx-0">
                  <Image 
                    src="/images/capability/capability-slide-photo.png" 
                    fill
                    alt="Graduate student success" 
                    className="object-cover" 
                  />
                </div>
              </RevealSection>
            </div>
            <div className="w-full lg:w-1/2">
              <RevealSection delay={0.2}>
                <SectionHeader eyebrow="Why Choose Karmic Learning" title="Our Unique Strengths" />
                <div className="mt-10 space-y-8">
                  {[
                    {
                      title: "Global Reach | Local Expertise",
                      desc: "Talent sourcing across India, SEA, Middle East, Africa, Europe. Local teams & international mobilization.",
                      color: "text-[#4F46E5]",
                      bg: "bg-[#EEF2FF]"
                    },
                    {
                      title: "Industry-Specific Talent Pools",
                      desc: "Deep vertical expertise built over 15+ years of placements",
                      color: "text-[#F97316]",
                      bg: "bg-[#FFF7ED]"
                    },
                    {
                      title: "GCC Model Adoption",
                      desc: "Ready frameworks for Global Capability Centre talent pipelines",
                      color: "text-[#4F46E5]",
                      bg: "bg-[#EEF2FF]"
                    },
                    {
                      title: "AI-Enabled Learning",
                      desc: "Our LMS uses AI to personalise learning paths, track progress, and identify skill gaps",
                      color: "text-[#F97316]",
                      bg: "bg-[#FFF7ED]"
                    }
                  ].map((usp, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full ${usp.bg} flex items-center justify-center shrink-0`}>
                        <ChevronRight className={`w-5 h-5 ${usp.color}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0F172A] mb-1">{usp.title}</h4>
                        <p className="text-[#374151] leading-relaxed">{usp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Training Features */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Program Features" title="What Every Program Includes" align="center" />
          
          <RevealSection delay={0.2}>
            <div className="mt-12 mb-16 relative w-full max-w-4xl mx-auto h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white">
               <Image 
                 src="/images/capability/capability-infographic.png" 
                 fill
                 alt="E-Learning LMS Infographic" 
                 className="object-cover" 
               />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pre-Training Assessment (baseline evaluation via AI LMS)",
              "Pre-Training SME Guidance (pre-reads from Subject Matter Experts)",
              "Bridge Programs (foundational skill building before core curriculum)",
              "AI-Based LMS (content delivery, progress tracking, forums, mobile access)",
              "Access to Industry Webinars (hosted by Regenesys with industry professionals)",
              "Masterclass Sessions (professionals from top organisations)",
              "E-Learning Support (PDFs, PPTs, video tutorials, chapter-wise quizzes)",
              "Hackathons (team-based competitive events with real-world problems)",
              "Post-Training Assessment (final evaluation, detailed analytics)",
              "Post-Training SME Guidance (group mentoring, career counselling, mock interviews)",
              "Post-Training Support (6 months access to recordings, dashboards, materials)",
              "Career Guidance Program (career exploration, resume reviews, skill mapping, alumni connect)"
            ].map((feature, i) => (
              <RevealSection key={i} delay={0.1 * (i % 3)}>
                <div className="bg-white p-6 rounded-xl border border-[#E0E7FF] shadow-sm flex items-start gap-4 h-full">
                  <div className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 shrink-0" />
                  <p className="text-[#374151] font-medium text-sm leading-relaxed">{feature}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Training Partner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] to-white/0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealSection>
            <h2 className="text-3xl font-black text-[#0F172A] mb-12">Training in Partnership with Regenesys</h2>
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-[#E0E7FF] flex flex-col items-center">
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl w-48 h-24 flex items-center justify-center">
                {/* Fallback to text if logo not found, using generic partner-logo path */}
                <Image src="/images/capability/logo-regenesys-or-partner.png" width={160} height={60} alt="Regenesys Logo" className="object-contain" />
              </div>
              <p className="text-xl md:text-2xl text-[#0F172A] font-semibold leading-relaxed mb-6">
                Our exclusive webinars are curated in collaboration with Regenesys — an internationally accredited business school — bringing world-class academic rigour to corporate training.
              </p>
              <p className="text-[#6B7280] text-lg max-w-2xl">
                Topics include: emerging technology trends, interview and placement preparation, career pathways and growth opportunities.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 8 — Outcomes */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="mb-16">
              <SectionHeader title="The Outcome: Industry-Ready Professionals" theme="dark" align="center" />
            </div>
            
            <div className="w-full max-w-5xl mx-auto mb-16 relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden bg-white/5">
              <Image src="/images/capability/cap17.png" fill alt="Student University Industry Flow" className="object-contain p-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Skill-to-Job Alignment", desc: "Our curriculum is designed against real industry requirements, not theoretical syllabi" },
                { title: "Placement Readiness", desc: "Mock interviews, resume building, and alumni networks prepare every learner" },
                { title: "Measurable Progress", desc: "Pre/post assessment scores and LMS dashboards show measurable growth" }
              ].map((outcome, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">{outcome.title}</h3>
                  <p className="text-white/70 leading-relaxed">{outcome.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 9 — CTA */}
      <section className="py-24 bg-gradient-to-br from-[#4F46E5] to-[#3730A3] text-center relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Partner with Karmic Konnexions<br />for Your Training Needs
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              Whether you&apos;re a corporate, institution, or government body — we build training programs that create measurable workforce outcomes.
            </p>
            <MagneticButton
              href="/contact?service=elearning"
              className="bg-white text-[#4F46E5] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl"
            >
              Start a Conversation
            </MagneticButton>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
