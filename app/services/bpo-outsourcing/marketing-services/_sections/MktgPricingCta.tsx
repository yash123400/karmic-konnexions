"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import RevealSection from "@/components/shared/RevealSection";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    highlighted: false,
    features: [
      "8 social posts per month",
      "1 blog article",
      "1 email newsletter",
      "Monthly analytics report",
    ],
  },
  {
    name: "Growth",
    price: "₹45,000",
    period: "/month",
    highlighted: true,
    features: [
      "16 social posts per month",
      "4 blog articles",
      "4 email newsletters",
      "SEO & Keyword tracking",
      "Ads management (Google/Meta)",
      "Bi-weekly analytics report",
    ],
  },
];

export default function MktgPricingCta() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple Monthly Plans"
            align="center"
          />

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-[#F97316] text-white shadow-2xl shadow-[#F97316]/30 scale-[1.02]"
                    : "bg-[#F8FAFC] border border-[#E0E7FF] shadow-sm hover:shadow-md transition-shadow"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-xl font-bold mb-4 ${
                    plan.highlighted ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-8 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black ${
                      plan.highlighted ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.highlighted ? "text-orange-200" : "text-[#6B7280]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "text-orange-200"
                            : "text-[#16A34A]"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-white/90" : "text-[#374151]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact?service=marketing-services&type=pricing"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-[#F97316] hover:bg-orange-50"
                      : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          <RevealSection delay={0.3}>
            <p className="text-center text-[#6B7280] text-sm mt-8">
              Custom enterprise plans available for multi-channel, multi-market campaigns.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#F97316]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#4F46E5]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Start Your Marketing Engine
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Ready to stop worrying about what to post next? Let Karmic&apos;s team 
              build and execute your marketing calendar while you focus on growth.
            </p>
            <MagneticButton
              href="/contact?service=marketing-services"
              variant="primary"
              className="px-10 py-4 text-base font-bold rounded-xl bg-[#F97316] text-white hover:bg-[#EA580C]"
            >
              Start My Marketing Engine
            </MagneticButton>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
