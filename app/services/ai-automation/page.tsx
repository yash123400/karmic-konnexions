import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import { Sparkles, Bot, Zap, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Karmic Konnexions',
  description: 'AI-powered workflow automation, intelligent HR systems, AI marketing tools and process optimisation. Karmic Konnexions brings enterprise AI to growing businesses.',
};

export default function AiAutomationPage() {
  const upcomingFeatures = [
    {
      title: "AI-Enhanced HR Ops",
      desc: "Automated payroll anomaly detection, AI-driven talent matching, and smart onboarding workflows that reduce manual HR overhead.",
      icon: <Bot className="w-8 h-8 text-[#F97316]" />
    },
    {
      title: "Intelligent Finance",
      desc: "Auto-categorised transactions, GST anomaly alerts, and AI-generated MIS summaries for real-time financial visibility.",
      icon: <LineChart className="w-8 h-8 text-[#F97316]" />
    },
    {
      title: "CRM Intelligence",
      desc: "AI lead scoring, automated follow-up suggestions, and pipeline health predictions to accelerate sales velocity.",
      icon: <Zap className="w-8 h-8 text-[#F97316]" />
    },
    {
      title: "Marketing Automation",
      desc: "AI content generation, dynamic campaign optimisation, and automated performance reporting across digital channels.",
      icon: <Sparkles className="w-8 h-8 text-[#F97316]" />
    }
  ];

  return (
    <>
      <JsonLd data={buildServiceSchema({
        name: 'AI Automation Solutions',
        description: 'AI-powered workflow automation, intelligent HR systems, AI marketing tools and process optimisation. Karmic Konnexions brings enterprise AI to growing businesses.',
        serviceType: 'AI Automation',
        url: '/services/ai-automation',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'AI Automation', item: '/services/ai-automation' },
      ])} />
      {/*
        Note: Using 'accent' gradient which features coral/orange tones
        as defined in our PageHero component gradientStyles
      */}
      <PageHero
        variant="gradient"
        gradient="accent"
        badge="Early Access"
        eyebrow="AI Automation"
        title={"The Future of Work.\nPowered by AI."}
        subtitle="Karmic Konnexions is expanding into AI-powered workflow automation — bringing intelligent process tools to HR, Finance, CRM and Marketing operations."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI Automation', href: '/services/ai-automation' }
        ]}
      />

      {/* Positioning Statement */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFF7ED] to-transparent pointer-events-none opacity-50" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <div className="bg-[#0F172A] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-[#F97316]/20">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F97316] rounded-full blur-[100px] opacity-20 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#4F46E5] rounded-full blur-[100px] opacity-20 pointer-events-none" />
              
              <Sparkles className="w-12 h-12 text-[#F97316] mx-auto mb-8" />
              
              <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                "We're building AI-enhanced versions of our HRO, HR, and Marketing services — integrating automation tools that reduce manual effort, increase accuracy, and surface insights faster."
              </h2>
              
              <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                If you want to be among the first businesses to access Karmic's AI-enhanced outsourcing services, register your interest below.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-24 bg-[#FAFBFF] border-y border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="In Development" title="What's Coming" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white rounded-2xl p-8 border border-[#E0E7FF] h-full shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF7ED] text-[#F97316] text-xs font-bold px-3 py-1 rounded-full border border-[#FFEDD5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                      Early Access
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 bg-[#FFF7ED] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4 pr-24">{feature.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed text-lg">{feature.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">Register for Early Access</h2>
            <p className="text-[#4B5563] text-lg mb-12">
              Be the first to know when our AI-enhanced services launch. We're onboarding a select group of pilot clients.
            </p>
            
            <form action="/api/lead-capture" method="POST" className="bg-[#FAFBFF] p-8 rounded-3xl border border-[#E0E7FF] shadow-lg text-left space-y-6">
              <input type="hidden" name="source" value="AI Early Access Page" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#374151]">Full Name</label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-[#D1D5DB] focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#374151]">Work Email</label>
                  <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-[#D1D5DB] focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-[#374151]">Company Name</label>
                <input required type="text" id="company" name="company" className="w-full px-4 py-3 rounded-xl border border-[#D1D5DB] focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] outline-none transition-all" placeholder="Acme Corp" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-semibold text-[#374151]">Service of Interest</label>
                <select id="interest" name="interest" className="w-full px-4 py-3 rounded-xl border border-[#D1D5DB] focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] outline-none transition-all bg-white text-[#0F172A]">
                  <option value="" disabled selected>Select an area of interest...</option>
                  <option value="AI HR Ops">AI-Enhanced HR Ops</option>
                  <option value="Intelligent Finance">Intelligent Finance</option>
                  <option value="CRM Intelligence">CRM Intelligence</option>
                  <option value="Marketing Automation">Marketing Automation</option>
                  <option value="All of the above">All of the above</option>
                </select>
              </div>
              
              <div className="pt-4 text-center">
                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-[#F97316] text-white hover:bg-[#EA580C] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl w-full">
                  Register Interest
                </button>
                <p className="text-xs text-[#6B7280] mt-4">By registering, you agree to our privacy policy. No spam, just product updates.</p>
              </div>
            </form>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
