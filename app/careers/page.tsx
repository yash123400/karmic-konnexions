import { Metadata } from 'next'
import {
  ArrowRight,
  MapPin,
  Clock,
  Target,
  Globe,
  Users,
  HeartHandshake,
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'
import { sanityFetch } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Careers at Karmic Konnexions | Join Our Team',
  description: "Join Karmic Konnexions Global Consulting LLP. We're hiring HR professionals, finance specialists, CRM operators, and marketing experts across India."
}

type Job = {
  _id: string
  title: string
  type?: string
  location?: string
  department?: string
  salary?: string
  applyEmail?: string
}

const FALLBACK_ROLES = [
  { title: 'HR Outsourcing Specialist', location: 'Gurgaon, India', type: 'Hybrid / On-site', dept: 'HR Operations' },
  { title: 'Finance & Accounts Associate', location: 'Gurgaon, India', type: 'On-site', dept: 'Finance' },
  { title: 'CRM & Sales Ops Executive', location: 'Remote / Hybrid', type: 'Remote Available', dept: 'Sales Operations' },
]

export default async function CareersPage() {
  const values = [
    { icon: Target, title: 'Purpose-Driven Work', desc: 'Every engagement creates real business impact for our clients and their employees, ensuring tangible growth.' },
    { icon: Users, title: 'Specialist Growth', desc: 'Work alongside domain experts with 10–15 years of experience across HR, Finance, CRM and Marketing.' },
    { icon: Globe, title: 'Global Exposure', desc: 'Serve a diverse portfolio of clients across India, Middle East, Africa, and Southeast Asia.' },
    { icon: HeartHandshake, title: 'People-Centric Culture', desc: 'People-centricity is one of our six core values — and we apply it to our own team first.' },
  ]

  let jobs: Job[] = []
  try {
    jobs = await sanityFetch<Job[]>({
      query: `*[_type == "jobPosting" && active == true] | order(postedAt desc) {
        _id, title, type, location, department, salary, applyEmail, postedAt
      }`,
      revalidate: 60,
    })
  } catch {
    // Sanity unavailable — fall back to static list below
  }

  const hasLiveJobs = jobs.length > 0

  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Join Our Team"
        title={"Build Your Career at\nKarmic Konnexions."}
        subtitle="We're a team of specialists who believe in execution, accountability, and making businesses better. If that sounds like you, we'd love to hear from you."
      />

      {/* Why Work Here */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Why Join Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl">We don&apos;t just fill roles; we build careers through mentorship, ownership, and complex problem-solving.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <RevealSection key={val.title} delay={idx * 0.1}>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                    <val.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Current Openings</h2>
              <p className="text-lg text-slate-600">Help us redefine the future of business operations.</p>
            </div>
            {hasLiveJobs && (
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                  {jobs.length} Active Role{jobs.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {hasLiveJobs
              ? jobs.map((job, idx) => (
                  <RevealSection key={job._id} delay={idx * 0.1}>
                    <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap gap-3">
                          {job.department && (
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                              {job.department}
                            </span>
                          )}
                          {job.type && (
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                              {job.type}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                          {job.location && (
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</div>
                          )}
                          {job.salary && (
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{job.salary}</div>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 w-full md:w-auto">
                        <MagneticButton
                          href={`mailto:${job.applyEmail ?? 'karmickonnexions2309@gmail.com'}?subject=Application: ${job.title}`}
                          className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 !rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-colors"
                        >
                          Apply Now <ArrowRight className="w-5 h-5" />
                        </MagneticButton>
                      </div>
                    </div>
                  </RevealSection>
                ))
              : FALLBACK_ROLES.map((role, idx) => (
                  <RevealSection key={role.title} delay={idx * 0.1}>
                    <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap gap-3">
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                            {role.dept}
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                            We&apos;re Hiring
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{role.title}</h3>
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{role.location}</div>
                          <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{role.type}</div>
                        </div>
                      </div>
                      <div className="shrink-0 w-full md:w-auto">
                        <MagneticButton
                          href="/contact?type=job-application"
                          className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 !rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-colors"
                        >
                          Apply Now <ArrowRight className="w-5 h-5" />
                        </MagneticButton>
                      </div>
                    </div>
                  </RevealSection>
                ))}
          </div>
        </div>
      </section>

      {/* Open Application */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="rounded-[3rem] bg-[#0B0E14] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-8">Not seeing the right fit?</h3>
                <p className="text-slate-400 text-lg mb-12">
                  We are always looking for exceptional talent in HR, Finance, Sales, and Marketing. Send us your CV and a brief note on how you can contribute to the Karmic vision.
                </p>
                <MagneticButton
                  href="mailto:karmickonnexions2309@gmail.com?subject=Open Application — [Your Name]"
                  className="bg-primary text-white px-12 py-6 !rounded-2xl text-lg shadow-2xl shadow-primary/30"
                >
                  Send Open Application
                </MagneticButton>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
