"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";
import SplitText from "@/components/shared/SplitText";
import BpoSubNav from "@/components/bpo/BpoSubNav";

export default function CrmHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pb-28">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#4F46E5]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <BpoSubNav />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-8">
          {/* Left Text */}
          <div className="lg:w-1/2">
            <div className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-4">
              CRM &amp; Sales Operations
            </div>

            <div className="mb-6">
              <SplitText
                text="Your Pipeline."
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight"
              />
              <SplitText
                text="Always Clean."
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4F46E5] leading-tight"
              />
              <SplitText
                text="Always Moving."
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight"
              />
            </div>

            <RevealSection delay={0.35}>
              <p className="text-lg text-[#374151] leading-relaxed mb-8">
                We manage your CRM so your sales team can sell. Karmic handles
                data hygiene, pipeline reporting, lead follow-up, and CRM
                administration — so your reps stay in the field.
              </p>
            </RevealSection>

            <RevealSection delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  href="/contact?service=crm-sales-ops"
                  variant="primary"
                  className="px-8 py-4 text-base font-bold rounded-xl"
                >
                  Audit My CRM Free
                </MagneticButton>
              </div>
            </RevealSection>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <RevealSection delay={0.2} direction="left">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-[#F97316]/20 scale-110" />
                <div className="absolute inset-0 rounded-full border border-[#F97316]/10 scale-125" />
                
                {/* Icon */}
                <Image
                  src="/images/icons/bpo/icon-3.png"
                  alt="CRM Handshake"
                  width={140}
                  height={140}
                  priority
                  className="object-contain"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
