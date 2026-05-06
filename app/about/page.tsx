import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Eye, 
  Target, 
  Globe2, 
  Lightbulb, 
  Leaf, 
  Heart, 
  Shield, 
  Users2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealSection from '@/components/shared/RevealSection'
import MagneticButton from '@/components/shared/MagneticButton'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import GlobeSceneDynamic from '@/components/3d/GlobeSceneDynamic'
import { cn } from '@/lib/utils'
import { sanityFetch, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'About Us | Karmic Konnexions Global Consulting LLP',
  description: 'Karmic Konnexions is a globally renowned HR consulting, HRO outsourcing, e-learning, and corporate apparel solutions company based in Gurgaon, India. Health, Wealth, Longevity.',
  keywords: ['about Karmic Konnexions', 'HR consulting Gurgaon', 'global consulting India', 'Karmic Konnexions LLP']
}

const coreValues = [
  {
    icon: Globe2,
    title: 'Global Perspective',
    description: 'Bridging global expertise with localized solutions to create value for diverse industries.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leading with cutting-edge solutions and continuously evolving to stay ahead of industry trends.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Driving long-term growth and societal impact through ethical and sustainable practices.'
  },
  {
    icon: Heart,
    title: 'People-Centricity',
    description: 'Ensuring talent and organizational culture remain at the heart of every solution.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding the highest standards of professionalism and transparency.'
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'Building enduring partnerships based on trust and mutual growth.'
  }
]

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
  { value: 20, suffix: '+', label: 'Industries Served' },
  { value: 15, suffix: '+', label: 'Years of Expertise' }
]

const serviceVerticals = [
  {
    id: '01',
    name: 'HRO & Business Functions',
    description: 'Execution-focused HR, Finance, CRM & Marketing outsourcing with fixed-cost retainer models',
    href: '/services/hro-outsourcing'
  },
  {
    id: '02',
    name: 'E-Learning & Training',
    description: 'AI-powered LMS, campus-to-corporate pipelines and structured corporate training programs',
    href: '/services/elearning'
  },
  {
    id: '03',
    name: 'Global Workforce Solutions',
    description: 'Talent acquisition, contract staffing and RPO across 6 global regions',
    href: '/services/global-workforce'
  },
  {
    id: '04',
    name: 'Corporate Apparel',
    description: 'Custom corporate uniforms and branded workwear with door-to-door delivery',
    href: '/services/corporate-apparel'
  },
  {
    id: '05',
    name: 'AI Automation',
    description: 'AI-enhanced workflow tools for HR, Finance, CRM and Marketing operations (coming soon)',
    href: '/services/ai-automation'
  }
]

const regions = [
  { name: 'India (HQ — Gurgaon)', flag: '🇮🇳' },
  { name: 'Middle East', flag: '🇦🇪' },
  { name: 'Africa', flag: '🌍' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Southeast Asia', flag: '🌏' },
  { name: 'Europe', flag: '🇪🇺' }
]

type TeamMember = {
  _id: string
  name: string
  role: string
  photo?: { asset: { _ref: string } }
  bio?: string
  linkedin?: string
  email?: string
}

export default async function AboutPage() {
  let team: TeamMember[] = []
  try {
    team = await sanityFetch<TeamMember[]>({
      query: `*[_type == "teamMember"] | order(order asc) {
        _id, name, role, photo, bio, linkedin, email
      }`,
      revalidate: 300,
    })
  } catch {
    // Sanity unavailable — show hardcoded founders section
  }

  return (
    <main className="pt-16">
      {/* SECTION 1 — PageHero */}
      <PageHero
        eyebrow="About Karmic Konnexions"
        title={"We Build the Systems\nThat Build Businesses."}
        subtitle="Karmic Konnexions Global Consulting LLP is a multi-vertical business services company — delivering execution-focused outsourcing, workforce solutions, e-learning, and corporate apparel to organisations across India and globally."
        variant="split"
        rightContent={<GlobeSceneDynamic size={400} interactive={false} />}
      />

      {/* SECTION 2 — Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <RevealSection direction="left" delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  &ldquo;To be the most trusted and innovative global partner for workforce transformation, enabling businesses to thrive in the era of digital and economic globalization.&rdquo;
                </p>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={0.2}>
              <div className="h-full p-8 rounded-2xl bg-white border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  &ldquo;To redefine the HR landscape by delivering tailored, technology-driven, and people-focused solutions that empower organizations to achieve sustainable growth and build a future-ready workforce.&rdquo;
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Core Values */}
      <section className="py-24 bg-primary-tint/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title={"Six Values That Drive\nEverything We Do."}
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {coreValues.map((value, idx) => (
              <RevealSection key={value.title} delay={idx * 0.08}>
                <div className="bg-white rounded-xl p-8 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Key Numbers */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <RevealSection key={stat.label} delay={idx * 0.1}>
                <div className="flex flex-col items-center">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl md:text-5xl font-black text-white mb-2" 
                  />
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Global Presence Map */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Global Reach"
            title="From Gurgaon to the World."
            subtitle="Karmic Konnexions operates across India, the Middle East, Southeast Asia, Africa, and the United Kingdom — combining local expertise with international delivery."
          />

          <RevealSection delay={0.2} className="mt-16">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <Image 
                src="/images/capability/global-presence.png" 
                alt="Karmic Konnexions Global Presence Map" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              {regions.map((region) => (
                <div 
                  key={region.name} 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-semibold text-sm"
                >
                  <span>{region.flag}</span>
                  <span>{region.name}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 6 — What We Do (5-vertical overview) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={"Five Service Verticals.\nOne Trusted Partner."}
          />

          <div className="mt-16 flex flex-col">
            {serviceVerticals.map((vertical, idx) => (
              <RevealSection key={vertical.id} direction="left" delay={idx * 0.1}>
                <Link 
                  href={vertical.href}
                  className="group flex flex-col md:flex-row md:items-center py-10 border-b border-slate-200 hover:bg-white hover:px-6 transition-all duration-300"
                >
                  <span className="text-4xl md:text-5xl font-black text-slate-200 group-hover:text-primary/20 transition-colors mr-12 mb-4 md:mb-0">
                    {vertical.id}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                      {vertical.name}
                    </h4>
                    <p className="text-slate-600 max-w-2xl">
                      {vertical.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                    Explore <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Team (Sanity) or Leadership Contact (fallback) */}
      {team.length > 0 ? (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our People"
              title="Meet the Team"
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {team.map((member, idx) => (
                <RevealSection key={member._id} delay={idx * 0.08}>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all p-8 text-center">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(120).height(120).url()}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Users2 className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                    <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>
                    {member.bio && (
                      <p className="text-slate-500 text-sm mt-3 leading-relaxed">{member.bio}</p>
                    )}
                    <div className="flex justify-center gap-3 mt-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-400 hover:text-primary transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      ) : (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get in Touch"
            align="center"
          />

          <RevealSection delay={0.2} className="mt-16 flex justify-center">
            <div className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center mb-8">
                <h4 className="text-2xl font-black text-slate-900">Jasleen Kaur / Harleen Kaur</h4>
                <p className="text-primary font-bold mt-1">Founders, Karmic Konnexions Global Consulting LLP</p>
              </div>

              <div className="space-y-6">
                <a href="tel:+919667759894" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</div>
                    <div className="text-lg font-bold text-slate-900">+91-9667759894</div>
                  </div>
                </a>

                <a href="mailto:karmickonnexions2309@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</div>
                    <div className="text-lg font-bold text-slate-900">karmickonnexions2309@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</div>
                    <div className="text-slate-900 leading-relaxed">
                      #106D, J Block, Adani Samsara Vilasa 2.0, Sec 63,<br />
                      Maidawas Road, Gurgaon, Haryana – 122011
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex justify-center">
                  <MagneticButton 
                    href="https://wa.me/919667759894"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white !rounded-full px-8 py-4 flex items-center gap-3"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat on WhatsApp
                  </MagneticButton>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
      )}

      {/* SECTION 8 — CTA Banner */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-950 p-12 md:p-20 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
              <RevealSection>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                  Ready to Partner with Karmic?
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                  Book a 30-minute discovery call. We'll map your needs and show you exactly how we can help.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <MagneticButton 
                    href="/contact?type=discovery" 
                    variant="primary"
                    className="bg-white text-primary hover:bg-amber-500 hover:text-white px-10 py-5 text-lg"
                  >
                    Book a Discovery Call
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
