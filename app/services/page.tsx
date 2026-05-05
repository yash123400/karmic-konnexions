import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/home/CTABanner";
import { Users, BarChart4, GraduationCap, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Services & Solutions | Karmic Konnexions",
  description: "Full-spectrum BPO, Global Workforce, E-Learning, and AI Automation services. Scale smarter with Karmic Konnexions.",
};

const serviceCategories = [
  {
    title: "BPO & Outsourcing",
    icon: BarChart4,
    color: "indigo",
    href: "/services/bpo-outsourcing",
    description: "End-to-end management of back-office operations. HR, Finance, CRM, and Marketing executed by experts.",
    subLinks: [
      { label: "HR & Payroll", href: "/services/bpo-outsourcing/hr-outsourcing" },
      { label: "Finance & Accounts", href: "/services/bpo-outsourcing/finance-accounts" },
      { label: "CRM & Sales Ops", href: "/services/bpo-outsourcing/crm-sales-ops" },
    ]
  },
  {
    title: "Global Workforce",
    icon: Users,
    color: "amber",
    href: "/services/global-workforce",
    description: "International recruitment, RPO, and contract staffing solutions to build high-performance teams.",
    subLinks: [
      { label: "Talent Acquisition", href: "/services/global-workforce/talent-acquisition" },
      { label: "Contract Staffing", href: "/services/global-workforce/contract-staffing" },
      { label: "RPO Services", href: "/services/global-workforce/rpo" },
    ]
  },
  {
    title: "E-Learning & Training",
    icon: GraduationCap,
    color: "emerald",
    href: "/services/elearning",
    description: "Proprietary LMS platforms and customized corporate training programs for the modern workforce.",
    subLinks: [
      { label: "Training Programs", href: "/services/elearning/training-programs" },
      { label: "LMS Platform", href: "/services/elearning/lms-platform" },
      { label: "Career Guidance", href: "/services/elearning/career-guidance" },
    ]
  },
  {
    title: "AI & Specialized",
    icon: Zap,
    color: "rose",
    href: "/services/ai-automation",
    description: "Leveraging Gen-AI for workflow automation and providing specialized corporate apparel solutions.",
    subLinks: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Corporate Apparel", href: "/services/corporate-apparel" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="Solutions for Growth"
        title={"Execution-First\nServices Portfolio."}
        subtitle="We don't just advise; we execute. Explore our four pillars of business excellence designed to scale your operations efficiently."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Service Pillars" 
            title="Integrated Business Solutions" 
            align="center"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="group bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                    category.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                    category.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                    category.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-rose-50 text-rose-600'
                  }`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{category.title}</h3>
                  <p className="text-text-muted mb-8 flex-grow">{category.description}</p>
                  
                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.subLinks.map((link) => (
                        <Link 
                          key={link.href} 
                          href={link.href}
                          className="text-sm font-medium text-text-secondary hover:text-primary flex items-center gap-1.5 transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    
                    <Link 
                      href={category.href}
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mt-4"
                    >
                      View Pillar Overview <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to optimize your business operations?"
        subtitle="Schedule a free strategy session with our execution specialists today."
      />
    </>
  );
}
