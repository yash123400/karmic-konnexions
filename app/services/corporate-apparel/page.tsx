import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'Corporate Apparel & Uniform Solutions | Karmic Konnexions',
  description: 'Custom corporate uniforms — traditional business attire, casual business, and industry-specific workwear. Vendor empanelment, bulk ordering, bio-washed fabrics, 6–12 month warranty.',
  keywords: ['corporate uniform India', 'corporate apparel vendor', 'office uniform supplier', 'workwear India', 'uniform vendor empanelment'],
};

export default function CorporateApparelPage() {
  const industries = [
    "Healthcare", "Hospitality", "Aviation", "Retail", "Security Services", "Manufacturing", "Construction", "FMCG & Education"
  ];

  const processSteps = [
    {
      title: "Vendor Empanelment Agreement",
      desc: "Sign the agreement; a dedicated SPOC is assigned to handle your entire account."
    },
    {
      title: "Order Collection",
      desc: "Sizing samples are shared with your team; precise measurements are collected."
    },
    {
      title: "Production",
      desc: "Minimum delivery timeline: 30–60 days depending on order size and specific garment type."
    },
    {
      title: "Quality & Warranty",
      desc: "Every garment is bio-washed (colour fading & shrink protection). Warranty: 6 months to 1 year for wear & tear, or FOC replacement."
    },
    {
      title: "Delivery",
      desc: "Door-to-door delivery with transparent logistics cost directly to your desired locations."
    },
    {
      title: "Payment Terms",
      desc: "50% advance on purchase order; remaining 50% + logistics before dispatch."
    }
  ];

  return (
    <>
      <JsonLd data={buildServiceSchema({
        name: 'Corporate Apparel & Uniform Solutions',
        description: 'Custom corporate uniforms — traditional business attire, casual business, and industry-specific workwear. Vendor empanelment, bulk ordering, bio-washed fabrics, 6–12 month warranty.',
        serviceType: 'Corporate Apparel',
        url: '/services/corporate-apparel',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'Corporate Apparel', item: '/services/corporate-apparel' },
      ])} />
      <PageHero
        variant="split"
        eyebrow="Corporate Apparel Solutions"
        title={"Dress Your Brand.\nUnify Your Team."}
        subtitle="Karmic Konnexions is a globally recognised corporate apparel solutions provider — delivering uniforms that project professionalism, reinforce brand identity, and build team pride."
        primaryCta={{ label: 'Request a Uniform Sample', href: '/contact?service=apparel&type=sample' }}
        secondaryCta={{ label: 'View Empanelment Process', href: '#process' }}
        rightContent={
          <Image 
            src="/images/apparel/hero-banner.png" 
            width={540} 
            height={380} 
            alt="Corporate uniform" 
            className="rounded-2xl object-cover shadow-2xl" 
            priority 
          />
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Corporate Apparel', href: '/services/corporate-apparel' }
        ]}
      />

      {/* The Business Case for Uniforms */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Why Corporate Uniforms Matter" 
            title={"More Than a Dress Code.\nIt's Your Brand on the Move."} 
            align="center" 
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] text-center shadow-sm h-full">
                <AnimatedCounter value={55} suffix="%" className="text-6xl font-black text-[#4F46E5] block mb-4" />
                <p className="text-[#374151] font-medium">of first impressions are based on body language and appearance.</p>
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] text-center shadow-sm h-full">
                <AnimatedCounter value={38} suffix="%" className="text-6xl font-black text-[#F97316] block mb-4" />
                <p className="text-[#374151] font-medium">are based on your vocal tone and how you sound.</p>
              </div>
            </RevealSection>
            <RevealSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-[#E0E7FF] text-center shadow-sm h-full">
                <AnimatedCounter value={7} suffix="%" className="text-6xl font-black text-[#10B981] block mb-4" />
                <p className="text-[#374151] font-medium">are based on the actual words you say.</p>
              </div>
            </RevealSection>
          </div>
          <RevealSection delay={0.4}>
            <p className="text-center text-[#4B5563] text-lg mt-10 max-w-2xl mx-auto font-medium">
              "In a corporate setting, your team's appearance communicates your brand before anyone says a word."
            </p>
          </RevealSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center bg-[#0F172A] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <RevealSection delay={0.5} className="relative z-10">
              <h4 className="text-4xl font-black text-[#4F46E5] mb-4">67%</h4>
              <p className="text-white/80">of the global corporate population wears some form of uniform or standardised dress code.</p>
            </RevealSection>
            <RevealSection delay={0.6} className="relative z-10">
              <h4 className="text-4xl font-black text-[#F97316] mb-4">30-40%</h4>
              <p className="text-white/80">is India's corporate uniform market share, compared to 50% in leading countries — the opportunity to stand out is clear.</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Industries That Use Uniforms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Industries We Serve" align="center" />
          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <RevealSection key={i} delay={i * 0.05}>
                <div className="bg-[#EEF2FF] text-[#4F46E5] px-6 py-3 rounded-full font-bold text-sm border border-[#E0E7FF] whitespace-nowrap">
                  {industry}
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={0.4}>
            <p className="text-[#6B7280] mt-8 max-w-2xl mx-auto">
              These are the leading industries that rely on standardised uniforms for safety, professionalism, and brand consistency — and where Karmic delivers.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Uniform Types */}
      <section className="py-24 bg-[#FAFBFF] border-y border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Range" title="Traditional & Casual Business Attire" align="center" />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <RevealSection direction="left">
              <div className="bg-white rounded-2xl p-8 border border-[#E0E7FF] shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-wide border-b border-[#E0E7FF] pb-4">Traditional Business Attire</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#4F46E5] mb-2 uppercase text-sm tracking-wider">Women</h4>
                    <p className="text-[#374151] leading-relaxed">Suits, Pantsuits, Dresses, Skirts, Dress pants, Blouses, Sweaters, Dress shoes</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4F46E5] mb-2 uppercase text-sm tracking-wider">Men</h4>
                    <p className="text-[#374151] leading-relaxed">Suits with long-sleeved dress shirts, Silk ties, Dress shoes (wingtips, oxfords, loafers)</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection direction="right">
              <div className="bg-white rounded-2xl p-8 border border-[#E0E7FF] shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-wide border-b border-[#E0E7FF] pb-4">Casual Business Attire</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#F97316] mb-2 uppercase text-sm tracking-wider">Women</h4>
                    <p className="text-[#374151] leading-relaxed">Jackets, Sweaters, Plain T-shirts, Blouses with slacks or skirts, Leather shoes</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F97316] mb-2 uppercase text-sm tracking-wider">Men</h4>
                    <p className="text-[#374151] leading-relaxed">Button-down shirts, V-neck sweaters, Blazers, Polo shirts with khaki pants, Leather shoes</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealSection delay={0.1}>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border border-[#E0E7FF]">
                <Image src="/images/apparel/uniform-1.png" alt="Corporate Uniform Example" fill className="object-cover" />
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border border-[#E0E7FF]">
                <Image src="/images/apparel/uniform-2.png" alt="Corporate Uniform Example" fill className="object-cover" />
              </div>
            </RevealSection>
            <RevealSection delay={0.3}>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border border-[#E0E7FF]">
                <Image src="/images/apparel/uniform-3.png" alt="Corporate Uniform Example" fill className="object-cover" />
              </div>
            </RevealSection>
          </div>

          <RevealSection delay={0.4}>
            <div className="mt-16 bg-white p-8 rounded-2xl border border-[#E0E7FF] max-w-4xl mx-auto">
              <h4 className="text-center font-bold text-[#0F172A] mb-6 text-xl">Full List of Available Garment Types</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h5 className="font-bold text-[#4F46E5] mb-3 uppercase tracking-wider">Men's Apparel</h5>
                  <p className="text-[#4B5563] leading-relaxed">Blazer, Shirt, Trouser, Polo/V-neck/Collar T-shirt, Belt, Socks, Shoes, Half-sleeve shirt, Trouser & Cargo, Jacket/Sweater, Apron, Quarter Zip Pullover</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#F97316] mb-3 uppercase tracking-wider">Women's Apparel</h5>
                  <p className="text-[#4B5563] leading-relaxed">Blazer, Shirt, Trouser, Polo/V-neck/Collar T-shirt, Belt, Peds/Socks/Stockings, Shoes, Pull-over/Sweater</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Brand Perception Visual */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <Image 
              src="/images/apparel/brand-chart.png" 
              alt="Brand Perception Chart" 
              width={800} 
              height={500} 
              className="max-w-2xl w-full mx-auto rounded-2xl shadow-xl border border-[#E0E7FF] mb-8" 
            />
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto font-medium">
              Choosing the right uniform design shapes how your brand is perceived by clients, partners, and the public.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Process & Terms */}
      <section id="process" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Ordering Process" theme="dark" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full relative group hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.6}>
            <div className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-[#F97316] font-semibold mb-2 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                Important Note
              </p>
              <p className="text-white/70 text-sm mb-4">
                For outstation/international clients, alterations are the client's responsibility locally.
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
                <span className="font-semibold">+91-9667759894</span>
                <span className="hidden sm:inline text-white/20">|</span>
                <a href="mailto:support@karmickonnexion.com" className="font-semibold text-[#4F46E5] hover:text-[#6366F1] transition-colors">support@karmickonnexion.com</a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">Ready to Dress Your Team?</h2>
          <p className="text-[#4B5563] text-lg mb-10 max-w-2xl mx-auto">
            Request a sample kit, get sizing charts, or initiate vendor empanelment. We'll assign a dedicated SPOC within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="/contact?service=apparel&type=sample"
              variant="primary"
              className="px-8 py-4 text-base font-bold rounded-xl bg-[#4F46E5] text-white w-full sm:w-auto"
            >
              Request Uniform Sample
            </MagneticButton>
            <MagneticButton
              href="/contact?service=apparel&type=empanelment"
              variant="outline"
              className="px-8 py-4 text-base font-bold rounded-xl border-2 border-[#E0E7FF] text-[#0F172A] hover:bg-[#FAFBFF] w-full sm:w-auto"
            >
              Download Empanelment Form
            </MagneticButton>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
