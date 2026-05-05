import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import {
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Users,
  Quote
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'
import { cn } from '@/lib/utils'

const ROICalculator = dynamic(
  () => import('@/components/why-karmic/ROICalculator'),
  {
    loading: () => (
      <div className="h-96 bg-slate-100 rounded-2xl animate-pulse" aria-label="Loading ROI Calculator..." />
    ),
  }
)

export const metadata: Metadata = {
  title: 'Why Choose Karmic Konnexions | Fixed-Cost Outsourcing That Delivers ROI',
  description: '60% cost savings, 3–4x ROI within Year 1, zero compliance liability. Discover why 500+ clients trust Karmic Konnexions for execution-focused outsourcing.'
}

const painPoints = [
  {
    title: 'High Fixed Salary Costs',
    description: 'Full-time specialists across HR, Finance, CRM & Marketing add ₹15–40L/year each to payroll — plus PF, gratuity and annual bonuses.'
  },
  {
    title: 'Attrition & Knowledge Gaps',
    description: 'Internal teams leave mid-project, taking institutional knowledge with them — and recovery takes 3–6 months.'
  },
  {
    title: 'Compliance Blind Spots',
    description: 'Labour law, tax filings and statutory deadlines are missed when overburdened generalists are stretched across too many functions.'
  },
  {
    title: 'No Scalability',
    description: 'Headcount grows linearly with business. Each new geography or product line requires fresh hiring cycles.'
  },
  {
    title: 'Lack of Specialised Depth',
    description: 'One HR manager cannot simultaneously master payroll compliance, talent acquisition, L&D and HRMS administration.'
  }
]

const advantages = [
  {
    title: 'Immediate Access to Senior Expertise',
    description: 'Day-1 deployment of specialists with 10–15 years of domain experience.'
  },
  {
    title: 'Zero Compliance Risk',
    description: 'Dedicated compliance calendars ensure zero statutory penalties — ever.'
  },
  {
    title: 'Scalable Without Headcount',
    description: 'Add geographies, products or verticals — same retainer, same team.'
  },
  {
    title: 'Predictable Monthly OpEx',
    description: 'No increments, PF, gratuity, ESIC or attrition replacement costs.'
  },
  {
    title: 'KPI-Linked Accountability',
    description: 'Every deliverable tracked monthly with dashboards and review meetings.'
  }
]

const fixedCostBenefits = [
  { title: 'No PF, Gratuity or Bonus Liability', detail: 'Zero statutory employment costs on your books' },
  { title: 'No Increment or Attrition Risk', detail: 'Team continuity guaranteed regardless of market salary changes' },
  { title: 'Predictable Monthly OpEx', detail: 'Budget with confidence — no surprise costs mid-year' },
  { title: 'Senior Governance at Minimal Cost', detail: 'Domain heads review your account monthly' },
  { title: 'Cost Doesn\'t Scale With Headcount', detail: 'Same fee covers 50 or 500 employees. Processes scale, cost doesn\'t' }
]

const engagementModels = [
  {
    title: 'Dedicated Pod Model',
    bestFor: '100+ employees',
    description: 'A named team of specialists — fully dedicated to your account. Includes an Account Manager, functional leads and a compliance officer. Operates as your internal department.',
    popular: false
  },
  {
    title: 'Shared Services Model',
    bestFor: 'SMEs & Startups',
    description: 'A shared pool of experts handles your functions alongside a small portfolio of similar-sized clients. Cost-optimised with guaranteed SLAs, dedicated SPOC and monthly reviews.',
    popular: true
  },
  {
    title: 'Project / Advisory Model',
    bestFor: 'Specific initiatives',
    description: 'Fixed-scope, fixed-fee engagements for specific tasks: HRMS implementation, tax clean-up, CRM migration, campaign launch, compliance audit. Defined deliverables, clear timeline.',
    popular: false
  }
]

export default function WhyKarmicPage() {
  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Why Karmic Konnexions"
        title={"Not Just a Vendor.\nA Business Partner That Delivers."}
        subtitle="We are an execution-first outsourcing partner. Every engagement includes dedicated specialists, measurable KPIs, compliance management, and a monthly review — from Day 1."
      />

      {/* SECTION 2 — The In-House Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Reality of In-House Teams"
            title={"Why Businesses Are Outsourcing\nFunctions They Once Hired For."}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {painPoints.map((point, idx) => (
              <RevealSection key={point.title} delay={idx * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Outsourcing Advantage */}
      <section className="py-24 bg-primary-tint/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Karmic Advantage"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {advantages.map((adv, idx) => (
              <RevealSection key={adv.title} delay={idx * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white border-l-4 border-primary shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-slate-900">{adv.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {adv.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Fixed-Cost Advantages */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="The Fixed-Cost Model That Changes Everything"
            className="text-white"
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">
            {fixedCostBenefits.map((benefit, idx) => (
              <RevealSection key={benefit.title} delay={idx * 0.1} className="text-center">
                <div className="group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary transition-all">
                    <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Three Engagement Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Work With You"
            title={"Three Models.\nOne for Every Business Stage."}
            align="center"
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {engagementModels.map((model, idx) => (
              <RevealSection key={model.title} delay={idx * 0.1}>
                <div className={cn(
                  "h-full p-10 rounded-[2rem] border-2 flex flex-col relative",
                  model.popular 
                    ? "border-primary bg-primary/5 shadow-xl shadow-primary/5" 
                    : "border-slate-100 bg-white"
                )}>
                  {model.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-black text-slate-900 mb-2">{model.title}</h4>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                      <Users className="w-3 h-3" />
                      Best for: {model.bestFor}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed flex-1 mb-10">
                    {model.description}
                  </p>

                  <MagneticButton 
                    href="/contact" 
                    variant={model.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Discuss This Model
                  </MagneticButton>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ROI Calculator */}
      <section id="roi-calculator" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Calculate Your Savings"
            title={"See What Outsourcing\nSaves You in Year 1."}
            align="center"
          />

          <div className="mt-16">
            <ROICalculator />
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 max-w-2xl mx-auto italic">
              * Estimates are based on industry-average in-house team costs and Karmic&apos;s track record of 60% cost savings. Actual savings depend on your specific scope and engagement model. Contact us for a personalised ROI analysis.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact?type=roi-analysis" variant="outline" className="px-10 py-4">
                Get a Personalised ROI Report
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Real Testimonial */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="max-w-3xl mx-auto">
            <div className="relative p-12 md:p-16 rounded-[3rem] bg-primary/5 border border-primary/10">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed italic mb-8">
                  &ldquo;Karmic Konnexions built our entire HR function from scratch in 45 days. Dashboards, compliance and a great team without a single full-time HR hire.&rdquo;
                </p>
                <div className="h-px w-20 bg-primary/30 mx-auto mb-6" />
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">
                  — CFO, Logistics Company, 300 Employees
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-950 p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
              <RevealSection>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                  Let&apos;s Build the Business Case Together
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                  Book a 30-minute discovery call. We&apos;ll show you exactly what outsourcing your functions would cost — and what it would save.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <MagneticButton 
                    href="/contact?type=discovery" 
                    variant="primary"
                    className="bg-white text-primary hover:bg-amber-500 hover:text-white px-10 py-5 text-lg"
                  >
                    Book Discovery Call
                  </MagneticButton>
                  <MagneticButton 
                    href="/get-proposal" 
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-10 py-5 text-lg"
                  >
                    Get a Proposal
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
