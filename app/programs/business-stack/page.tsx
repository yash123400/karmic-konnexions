import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, XCircle, BookOpen, Clock, Presentation, GraduationCap, Laptop, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: 'Business-Stack Leadership Program | Karmic Konnexions',
  description: 'A comprehensive leadership development program for mid-to-senior managers covering strategic thinking, stakeholder management, and P&L ownership.',
};

export default function BusinessStackPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Leadership Development"
        title={"Business-Stack\nLeadership"}
        subtitle="A comprehensive leadership development program for mid-to-senior managers. Covers strategic thinking, stakeholder management, P&L ownership, and change leadership."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' },
          { label: 'Business-Stack', href: '/programs/business-stack' }
        ]}
      />

      {/* Program Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader eyebrow="Overview" title="Program Outcomes" />
            <div className="mt-12 bg-[#FAFBFF] rounded-3xl p-8 md:p-12 border border-[#E0E7FF] shadow-sm">
              <ul className="space-y-6">
                {[
                  "Develop strong strategic thinking and execution capabilities aligned with corporate objectives.",
                  "Master stakeholder management and cross-functional team leadership.",
                  "Gain deep understanding of P&L ownership, budgeting, and financial decision-making."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#4F46E5] shrink-0" />
                    <p className="text-lg text-[#374151] pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Target Audience" title="Who Is This For?" align="center" theme="dark" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection delay={0.1}>
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ideal Candidate</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Mid-to-senior level managers preparing for executive roles.",
                    "Team leads managing cross-functional projects.",
                    "Professionals transitioning from technical to leadership tracks."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#94A3B8]">
                      <span className="text-[#16A34A] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
            
            <RevealSection delay={0.2}>
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Not For You If</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "You are looking for an entry-level management course.",
                    "You want a highly technical, deep-dive coding program.",
                    "You are not currently in a role with people or project management responsibilities."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#94A3B8]">
                      <span className="text-[#DC2626] font-bold">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Curriculum" title="Program Structure" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Module 1: Strategic Foundations",
                duration: "Weeks 1-4",
                items: ["Business Strategy Frameworks", "Market Analysis & Positioning", "Vision & Goal Setting"]
              },
              {
                title: "Module 2: Financial Acumen",
                duration: "Weeks 5-8",
                items: ["Understanding P&L", "Budgeting & Forecasting", "Financial Decision Making"]
              },
              {
                title: "Module 3: Leadership & Execution",
                duration: "Weeks 9-12",
                items: ["Stakeholder Management", "Change Leadership", "Capstone Project"]
              }
            ].map((module, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-[#FAFBFF] rounded-2xl p-8 border border-[#E0E7FF] h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold px-3 py-1 rounded-full mb-6">
                    <Clock className="w-3.5 h-3.5" />
                    {module.duration}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-6">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-[#4B5563] text-sm">
                        <BookOpen className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery */}
      <section className="py-24 bg-[#FAFBFF] border-t border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Methodology" title="Training Delivery" align="center" />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Laptop className="w-6 h-6" />, title: "AI-Based LMS", desc: "24/7 access to our intelligent learning platform." },
              { icon: <Presentation className="w-6 h-6" />, title: "Live Sessions", desc: "Interactive masterclasses with industry practitioners." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Capstone Project", desc: "Real-time projects solving actual business challenges." },
              { icon: <PhoneCall className="w-6 h-6" />, title: "Post-Training Support", desc: "6 months of mentoring and implementation support." }
            ].map((item, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="text-center p-6 bg-white rounded-2xl border border-[#E0E7FF] shadow-sm">
                  <div className="w-12 h-12 mx-auto bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#4F46E5] mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#0F172A] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-24 bg-[#4F46E5] text-center px-4">
        <RevealSection>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Lead?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Take the next step in your career with the Business-Stack Leadership Program.
          </p>
          <a
            href="/contact?service=programs&program=Business-Stack%20Leadership"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-white text-[#4F46E5] hover:bg-indigo-50 transition-all transform hover:scale-[1.02] shadow-xl"
          >
            Express Interest / Enroll Now
          </a>
        </RevealSection>
      </section>
    </>
  );
}
