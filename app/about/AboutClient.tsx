"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import MagneticButton from "@/components/shared/MagneticButton";
import GlobeSceneDynamic from "@/components/3d/GlobeSceneDynamic";
import { Eye, Target, Globe2, Lightbulb, Leaf, Heart, Shield, Users2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Globe2 className="w-6 h-6 text-[#4F46E5]" />,
      title: "Global Perspective",
      desc: "Bridging global expertise with localized solutions to create value for diverse industries."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#4F46E5]" />,
      title: "Innovation",
      desc: "Leading with cutting-edge solutions and continuously evolving to stay ahead of industry trends."
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#4F46E5]" />,
      title: "Sustainability",
      desc: "Driving long-term growth and societal impact through ethical and sustainable practices."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#4F46E5]" />,
      title: "People-Centricity",
      desc: "Ensuring talent and organizational culture remain at the heart of every solution."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4F46E5]" />,
      title: "Integrity",
      desc: "Upholding the highest standards of professionalism and transparency."
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#4F46E5]" />,
      title: "Collaboration",
      desc: "Building enduring partnerships based on trust and mutual growth."
    }
  ];

  const services = [
    {
      num: "01",
      name: "BPO Outsourcing",
      desc: "Execution-focused HR, Finance, CRM & Marketing outsourcing with fixed-cost retainer models",
      href: "/services/bpo-outsourcing"
    },
    {
      num: "02",
      name: "E-Learning & Training",
      desc: "AI-powered LMS, campus-to-corporate pipelines and structured corporate training programs",
      href: "/services/elearning"
    },
    {
      num: "03",
      name: "Global Workforce Solutions",
      desc: "Talent acquisition, contract staffing and RPO across 6 global regions",
      href: "/services/global-workforce"
    },
    {
      num: "04",
      name: "Corporate Apparel",
      desc: "Custom corporate uniforms and branded workwear with door-to-door delivery",
      href: "/services/corporate-apparel"
    },
    {
      num: "05",
      name: "AI Automation",
      desc: "AI-enhanced workflow tools for HR, Finance, CRM and Marketing operations (coming soon)",
      href: "/services/ai-automation"
    }
  ];

  return (
    <>
      {/* SECTION 1 — PageHero */}
      <PageHero
        variant="gradient"
        gradient="indigo"
        eyebrow="About Karmic Konnexions"
        title={"We Build the Systems\nThat Build Businesses."}
        subtitle="Karmic Konnexions Global Consulting LLP is a multi-vertical business services company — delivering execution-focused outsourcing, workforce solutions, e-learning, and corporate apparel to organisations across India and globally."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
        rightContent={
          <div className="relative w-full aspect-square flex items-center justify-center">
            <GlobeSceneDynamic size={400} interactive={false} />
          </div>
        }
      />

      {/* SECTION 2 — Vision & Mission */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white border-l-2 border-[#4F46E5] rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#4F46E5]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A]">Our Vision</h2>
              </div>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                To be the most trusted and innovative global partner for workforce transformation, enabling businesses to thrive in the era of digital and economic globalization.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white border-l-2 border-[#4F46E5] rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#4F46E5]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A]">Our Mission</h2>
              </div>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                To redefine the HR landscape by delivering tailored, technology-driven, and people-focused solutions that empower organizations to achieve sustainable growth and build a future-ready workforce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Core Values */}
      <section className="py-24 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title={"Six Values That Drive\nEverything We Do."}
            align="center"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {}
            }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="bg-white rounded-xl p-6 shadow-sm border border-transparent hover:shadow-md hover:border-[#4F46E5]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-full flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{val.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Key Numbers */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-white/10">
            {[
              { value: 500, suffix: "+", label: "Clients Served" },
              { value: 98, suffix: "%", label: "Client Retention Rate" },
              { value: 20, suffix: "+", label: "Industries Served" },
              { value: 15, suffix: "+", label: "Years of Expertise" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <div className="flex items-baseline text-4xl lg:text-6xl font-black text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-[#4F46E5]">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-[#94A3B8] font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
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
            align="center"
          />
          <RevealSection>
            <p className="text-center text-lg text-[#6B7280] max-w-3xl mx-auto mt-4 mb-16">
              Karmic Konnexions operates across India, the Middle East, Southeast Asia, Africa, and the United Kingdom — combining local expertise with international delivery.
            </p>

            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-video bg-[#F1F5F9] mb-12">
              <Image
                src="/images/capability/global-presence.png"
                alt="Global Presence Map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "🇮🇳 India (HQ — Gurgaon)",
                "🇦🇪 Middle East",
                "🌍 Africa",
                "🇬🇧 United Kingdom",
                "🌏 Southeast Asia",
                "🇪🇺 Europe"
              ].map((region, i) => (
                <div key={i} className="bg-[#EEF2FF] text-[#4F46E5] px-5 py-2.5 rounded-full text-sm font-semibold border border-[#E0E7FF] shadow-sm">
                  {region}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 6 — What We Do */}
      <section className="py-24 bg-[#FAFBFF] border-y border-[#E0E7FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={"Five Service Verticals.\nOne Trusted Partner."}
          />
          
          <div className="mt-16 flex flex-col gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white p-6 md:p-8 rounded-2xl border border-[#E0E7FF] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#4F46E5]/30"
              >
                <div className="text-4xl md:text-5xl font-black text-[#E2E8F0] shrink-0 w-16">
                  {svc.num}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#4F46E5] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <Link
                  href={svc.href}
                  className="shrink-0 inline-flex items-center gap-2 text-[#4F46E5] font-semibold mt-4 md:mt-0 hover:text-[#3730A3] transition-colors"
                >
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Leadership Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get in Touch"
            align="center"
          />
          
          <RevealSection delay={0.2}>
            <div className="mt-12 max-w-lg mx-auto bg-white rounded-3xl p-8 border border-[#E0E7FF] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF2FF] rounded-bl-full -mr-8 -mt-8 z-0"></div>
              
              <div className="relative z-10 text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-1">Jasleen Kaur / Harleen Kaur</h3>
                <p className="text-[#4F46E5] font-medium">Founders, Karmic Konnexions Global Consulting LLP</p>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#EEF2FF] rounded-full flex items-center justify-center text-[#4F46E5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-[#4B5563] text-sm pt-1">
                    #106D, J Block, Adani Samsara Vilasa 2.0, Sec 63, Maidawas Road, Gurgaon, Haryana – 122011
                  </p>
                </div>
                
                <a href="tel:+919667759894" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-[#EEF2FF] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors rounded-full flex items-center justify-center text-[#4F46E5]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="text-[#0F172A] font-medium group-hover:text-[#4F46E5] transition-colors">
                    +91-9667759894
                  </p>
                </a>
                
                <a href="mailto:karmickonnexions2309@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-[#EEF2FF] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors rounded-full flex items-center justify-center text-[#4F46E5]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="text-[#0F172A] font-medium group-hover:text-[#4F46E5] transition-colors break-all">
                    karmickonnexions2309@gmail.com
                  </p>
                </a>
              </div>

              <div className="relative z-10 mt-10 text-center">
                <a
                  href="https://wa.me/919667759894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1EBE5C] transition-colors w-full justify-center shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 8 — CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#3730A3] text-center px-4">
        <RevealSection>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Partner with Karmic?</h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call. We'll map your needs and show you exactly how we can help.
          </p>
          <MagneticButton
            href="/contact?type=discovery"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-white text-[#4F46E5] hover:bg-indigo-50 transition-all transform hover:scale-[1.02] shadow-xl"
          >
            Book a Discovery Call
          </MagneticButton>
        </RevealSection>
      </section>
    </>
  );
}
