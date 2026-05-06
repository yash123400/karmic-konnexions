import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Truck, 
  Factory, 
  Heart, 
  GraduationCap, 
  Monitor, 
  Banknote, 
  ShoppingBag, 
  Rocket,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'

export const metadata: Metadata = {
  title: 'Industries We Serve | Karmic Konnexions',
  description: 'Karmic Konnexions serves 20+ industries — Logistics, Manufacturing, Healthcare, EdTech, IT, BFSI, Retail and Startups — with tailored HRO, workforce and training solutions.'
}

const industries = [
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    description: 'Payroll, compliance and CRM for logistics operators managing large distributed workforces.',
    pills: ['HR Outsourcing', 'CRM & Sales Ops', 'Contract Staffing']
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industrial',
    description: 'Workforce management, statutory compliance and uniform solutions for large factory headcounts.',
    pills: ['HR Outsourcing', 'Contract Staffing', 'Corporate Apparel']
  },
  {
    icon: Heart,
    name: 'Healthcare & Pharma',
    description: 'Compliant HR, international hiring and training solutions for hospitals, clinics and pharma companies.',
    pills: ['Talent Acquisition', 'HR Outsourcing', 'Training Programs']
  },
  {
    icon: GraduationCap,
    name: 'Education & EdTech',
    description: 'Campus-to-corporate pipelines, LMS platforms and career guidance for institutions and ed-tech platforms.',
    pills: ['E-Learning', 'Career Guidance', 'RPO']
  },
  {
    icon: Monitor,
    name: 'IT & Technology',
    description: 'Finance outsourcing, CRM operations and executive search for fast-scaling technology companies.',
    pills: ['Finance & Accounts', 'CRM & Sales Ops', 'Talent Acquisition']
  },
  {
    icon: Banknote,
    name: 'BFSI & FinTech',
    description: 'Payroll compliance, MIS reporting and CRM pipeline management for NBFC, banks and fintech startups.',
    pills: ['HR Outsourcing', 'Finance & Accounts', 'CRM & Sales Ops']
  },
  {
    icon: ShoppingBag,
    name: 'Retail & D2C',
    description: 'Marketing outsourcing, CRM operations and brand-aligned uniform solutions for retail and D2C brands.',
    pills: ['Marketing Services', 'CRM & Sales Ops', 'Corporate Apparel']
  },
  {
    icon: Rocket,
    name: 'Startups & SMEs',
    description: 'Shared services model — cost-effective HR, finance and marketing outsourcing for lean, growing teams.',
    pills: ['HR Outsourcing', 'Finance & Accounts', 'Marketing Services']
  }
]

export default function IndustriesPage() {
  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Industries We Serve"
        title={"Sector-Specific Expertise\nAcross 20+ Industries."}
        subtitle="Our teams are not generalists — we build vertical-specific knowledge in every sector we serve, so you get solutions that understand your business."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <RevealSection key={industry.name} delay={idx * 0.05}>
                <div className="h-full bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/40 hover:shadow-xl transition-all group flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                  <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-1">
                    {industry.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                    {industry.pills.map((pill) => (
                      <span 
                        key={pill} 
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.4} className="mt-16">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Don&apos;t see your industry?</h3>
                <p className="text-slate-600">
                  We work across 20+ industries. If yours isn&apos;t listed, reach out — we likely have experience in your sector.
                </p>
              </div>
              <MagneticButton 
                href="/contact" 
                variant="primary"
                className="bg-primary text-white px-8 py-4 !rounded-xl flex items-center gap-3"
              >
                Tell Us About Your Business
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
