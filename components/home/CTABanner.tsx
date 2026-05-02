"use client";

import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";

export default function CTABanner() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-white/5" />
      <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] rounded-full bg-white/5" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center leading-tight">
            Ready to Transform Your Business Operations?
          </h2>
        </RevealSection>

        <RevealSection delay={0.1}>
          <p className="text-white/80 text-xl text-center mt-4 max-w-2xl mx-auto">
            A fixed-cost outsourcing partner that builds, runs and scales your
            HR, Finance, CRM and Marketing.
          </p>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex justify-center mt-10">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="px-10 py-5 text-lg font-bold rounded-xl"
            >
              Book a Discovery Call →
            </MagneticButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
