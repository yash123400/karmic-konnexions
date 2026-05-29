import { Metadata } from "next";
import { 
  FileX, 
  Clock, 
  BarChart2, 
  LineChart, 
  Users, 
  Cpu, 
  Layers, 
  Heart, 
  Shield, 
  BookOpen, 
  Award, 
  Target, 
  FileText, 
  UserPlus, 
  Briefcase, 
  CheckCircle, 
  Zap
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";
import HrRoadmap from "./HrRoadmap";

export const metadata: Metadata = {
  title: "HR & Payroll Outsourcing Services India | Karmic Konnexions",
  description:
    "Outsource your complete HR function — payroll, recruitment, compliance, and performance management — to certified HR professionals at Karmic Konnexions, Gurgaon.",
  keywords: [
    "HR outsourcing India",
    "payroll outsourcing Gurgaon",
    "HR operations outsourcing",
    "payroll management company India",
  ],
};

const problems = [
  {
    icon: FileX,
    title: "Fragmented HR Policies",
    desc: "Outdated, inconsistent policies across departments",
  },
  {
    icon: Clock,
    title: "Slow Recruitment",
    desc: "Hiring timelines lag business agility by weeks",
  },
  {
    icon: BarChart2,
    title: "Weak PMS & KRA Alignment",
    desc: "Performance systems inconsistently implemented",
  },
  {
    icon: LineChart,
    title: "Limited Workforce Analytics",
    desc: "Decisions made without data",
  },
  {
    icon: Users,
    title: "Reactive Engagement",
    desc: "Employee engagement addressed after problems arise",
  },
  {
    icon: Cpu,
    title: "Partial HR Digitalization",
    desc: "Legacy manual processes persist alongside modern tools",
  },
  {
    icon: Layers,
    title: "Weak Succession Planning",
    desc: "No talent maps, no continuity plans",
  },
];

const solutions = [
  {
    gap: "Fragmented HR policies",
    solution: "Consolidate and standardize policies aligned with legal requirements and business goals.",
  },
  {
    gap: "Slow recruitment & onboarding",
    solution: "Streamline recruitment process; implement ATS; define recruitment KPIs.",
  },
  {
    gap: "Weak PMS & KRA alignment",
    solution: "Define clear KRAs, link PMS to performance & rewards; integrate analytics dashboards.",
  },
  {
    gap: "Limited analytics & insights",
    solution: "Deploy HR dashboards, predictive analytics for attrition, engagement, and skill gaps.",
  },
  {
    gap: "Reactive employee engagement",
    solution: "Introduce pulse surveys, recognition programs, and engagement frameworks.",
  },
  {
    gap: "Partial HR digitalization",
    solution: "Automate core HR processes: recruitment, PMS, leave & attendance, and employee self-service portals.",
  },
  {
    gap: "Weak talent & succession planning",
    solution: "Identify critical roles, develop talent pools, create structured succession plans.",
  },
];

const pillars = [
  {
    icon: Heart,
    title: "Employee Engagement",
    bullets: [
      "Recognition Programs",
      "Team Activities & Culture Building",
      "Pulse Surveys & Feedback Loops",
    ],
  },
  {
    icon: Shield,
    title: "Grievance Mechanism",
    bullets: [
      "Clear Policies & Fair Escalation Process",
      "Resolution Tracking (SLA <7 days)",
      "Confidential Reporting Channels",
    ],
  },
  {
    icon: BookOpen,
    title: "L&D & Skilling Model",
    bullets: [
      "Skill Gap Analysis",
      "Tailored Learning Programs",
      "Career Development Pathways",
    ],
  },
  {
    icon: Award,
    title: "Centre of Excellence (CoE)",
    bullets: [
      "Industry Benchmarking",
      "Best Practices Implementation",
      "Knowledge Sharing Culture",
    ],
  },
];

const focusAreas = [
  {
    icon: Target,
    title: "HR Strategy & Governance",
    desc: "Align HR with business goals, define HR priorities, establish clear decision-making structures.",
  },
  {
    icon: FileText,
    title: "Policies, Processes & Frameworks",
    desc: "Review, refine, and standardize HR policies, workflows, and frameworks.",
  },
  {
    icon: UserPlus,
    title: "Recruitment & Talent Management",
    desc: "Strengthen end-to-end recruitment, onboarding, KRA alignment, PMS, and retention strategies.",
  },
  {
    icon: Users,
    title: "Employee Relations & Engagement",
    desc: "Build trust, manage grievances effectively, and foster a high-performance workforce.",
  },
  {
    icon: Briefcase,
    title: "Organizational Design & Workforce Planning",
    desc: "Advise on optimal structure, span of control, and resource planning.",
  },
  {
    icon: CheckCircle,
    title: "Compliance & HR Audits",
    desc: "Ensure statutory compliance, perform HR audits, and embed industry best practices.",
  },
  {
    icon: Zap,
    title: "HR Digitalization & Automation",
    desc: "Identify automation opportunities across recruitment, PMS, analytics, and self-service portals.",
  },
];

export default function HROutsourcingPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema({
        name: 'HR & Payroll Outsourcing Services',
        description: 'Full-cycle HR operations — payroll, statutory compliance, recruitment, performance management and HRMS technology — managed end-to-end by certified HR professionals.',
        serviceType: 'HR Outsourcing',
        url: '/services/hro-outsourcing/hr-outsourcing',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'HRO & Business Functions', item: '/services/hro-outsourcing' },
        { name: 'HR & Payroll Outsourcing', item: '/services/hro-outsourcing/hr-outsourcing' },
      ])} />

      {/* SECTION 1 — PAGE HERO */}
      <PageHero
        eyebrow="HRO — Human Resources Operations"
        title="Deliverables-Based HR Transformation"
        subtitle="CHRO-level strategic leadership at a fraction of the cost — with measurable, time-bound outcomes."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "HR Operations", href: "/services/hro-outsourcing/hr-outsourcing" },
        ]}
      />

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-24 bg-[var(--primary)] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white">
                The HR Gaps Holding Your Business Back
              </h2>
              <p className="text-lg text-indigo-100 mt-4 max-w-2xl mx-auto">
                7 critical failure points we see across growing organisations.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <RevealSection key={idx} delay={idx * 0.05}>
                  <div className={`bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4 h-full ${
                    idx === problems.length - 1 ? "md:col-span-2" : ""
                  }`}>
                    <div className="p-3 bg-white/15 rounded-xl shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{prob.title}</h3>
                      <p className="text-sm text-indigo-100/90">{prob.desc}</p>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — GAP → SOLUTION TABLE */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
                How Karmic Konnexions Closes the Gap
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="overflow-hidden border border-[var(--border-color)] rounded-2xl bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-slate-100">
                      <th className="py-4 px-6 text-sm font-bold text-[var(--primary)] uppercase tracking-wider w-1/3">
                        Gap
                      </th>
                      <th className="py-4 px-6 text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider w-2/3">
                        Solution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {solutions.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[var(--border-color)] last:border-0 ${
                          idx % 2 === 1 ? "bg-[var(--primary-tint)]" : "bg-white"
                        }`}
                      >
                        <td className="py-4 px-6 text-sm font-bold text-[var(--text-primary)]">
                          {row.gap}
                        </td>
                        <td className="py-4 px-6 text-sm text-[var(--text-secondary)]">
                          {row.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 4 — 4 SERVICE PILLARS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
                Our Four-Pillar HR Delivery Model
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
                Every engagement is built around four interconnected outcomes.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealSection key={idx} delay={idx * 0.08}>
                  <div className="bg-[var(--primary-tint)] border-l-4 border-[var(--primary)] rounded-r-2xl p-8 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="p-3 bg-white border border-[var(--border-color)] rounded-xl inline-flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[var(--primary)]" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                        {pillar.title}
                      </h3>
                      <ul className="space-y-3">
                        {pillar.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — 4-QUARTER ROADMAP */}
      <HrRoadmap />

      {/* SECTION 6 — ADVISORY FOCUS AREAS */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
                7 Focus Areas — HR Strategy & Governance
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
                Expert advisory across every dimension of your people function.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {focusAreas.map((fa, idx) => {
              const Icon = fa.icon;
              return (
                <RevealSection key={idx} delay={idx * 0.05}>
                  <div className={`bg-white border border-[var(--border-color)] rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300 ${
                    idx === focusAreas.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}>
                    <div>
                      <div className="p-2.5 bg-[var(--primary-tint)] rounded-xl inline-flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                      <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                        {fa.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {fa.desc}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMMERCIAL MODEL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
                CHRO-Level Leadership. CFO-Friendly Cost.
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left pricing card */}
            <RevealSection delay={0.1}>
              <div className="bg-[var(--primary)] text-white rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-xl shadow-indigo-500/10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Engagement Model</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-lg font-medium">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                      ₹2,500 per hour + GST
                    </li>
                    <li className="flex items-center gap-3 text-lg font-medium">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                      ~15 hours per week (flexible)
                    </li>
                    <li className="flex items-center gap-3 text-lg font-medium">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                      ~₹1.5 Lakhs per month indicative
                    </li>
                    <li className="flex items-center gap-3 text-lg font-medium">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</span>
                      Outcomes-linked milestone reviews
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="inline-flex items-center bg-white/15 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-100">
                    Pricing on Request — tailored to engagement scope
                  </span>
                </div>
              </div>
            </RevealSection>

            {/* Right comparison callout */}
            <RevealSection delay={0.2}>
              <div className="bg-white border border-[var(--border-color)] rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-primary)] mb-6">
                    vs. Hiring a Full-Time CHRO
                  </h3>
                  <div className="space-y-6">
                    {/* Disadvantages */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm">✗</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Full-time CHRO:</strong> ₹60–70 Lakhs per annum
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm">✗</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          Long-term fixed liabilities & overheads
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm">✗</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          6–9 months to hire & onboard
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Advantages */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">✓</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Karmic HRO Model:</strong> Fraction of the cost
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">✓</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          CHRO-level depth, immediate start
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">✓</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          Clearly defined, time-bound outcomes
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">✓</span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          Flexible — scale up or down as needed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA BANNER */}
      <section className="py-24 bg-[var(--accent)] relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center leading-tight">
              Ready to Transform Your HR Function?
            </h2>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p className="text-white/80 text-xl text-center mt-4 max-w-2xl mx-auto">
              Start with a no-obligation HR diagnostic. We&apos;ll identify your top 3 gaps within 2 weeks.
            </p>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              <MagneticButton
                href="/get-proposal"
                className="px-10 py-5 text-lg font-bold rounded-xl bg-white text-[var(--accent)] hover:bg-slate-100 transition-colors shadow-lg"
              >
                Get a Proposal
              </MagneticButton>
              <a
                href="https://wa.me/919667759894"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-xl border-2 border-white/20
                  text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40
                  transition-all duration-200"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
