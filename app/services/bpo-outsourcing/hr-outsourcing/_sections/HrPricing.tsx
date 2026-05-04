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
    employees: "Up to 50 employees",
    price: "₹15,000",
    period: "/month",
    idealFor: "Early-stage companies",
    highlighted: false,
    features: [
      "Monthly payroll processing",
      "PF & ESIC filings",
      "HR helpdesk (email)",
      "Monthly analytics report",
      "Onboarding kit (digital)",
    ],
  },
  {
    name: "Growth",
    employees: "51–200 employees",
    price: "₹35,000",
    period: "/month",
    idealFor: "Scaling startups & SMEs",
    highlighted: true,
    features: [
      "Everything in Starter",
      "PT, TDS & gratuity handling",
      "HR helpdesk (email + WhatsApp)",
      "Recruitment support (2 roles/mo)",
      "HRIS management",
      "Weekly HR dashboard",
    ],
  },
  {
    name: "Enterprise",
    employees: "200+ employees",
    price: "Custom",
    period: "",
    idealFor: "Multi-city large businesses",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Dedicated HR business partner",
      "Multi-state compliance",
      "Performance management setup",
      "Custom reporting & SLA",
      "Priority escalation support",
    ],
  },
];

export default function HrPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={"Simple, Transparent Pricing.\nNo Hidden Fees."}
          align="center"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#4F46E5] text-white shadow-2xl shadow-[#4F46E5]/30 scale-[1.02]"
                  : "bg-white border border-[#E0E7FF] shadow-md hover:shadow-lg transition-shadow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-[#6B7280]"
                  }`}
                >
                  {plan.employees}
                </p>
              </div>

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-black ${
                    plan.highlighted ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlighted ? "text-white/60" : "text-[#6B7280]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-xs mb-6 ${
                  plan.highlighted ? "text-white/60" : "text-[#94A3B8]"
                }`}
              >
                Ideal for {plan.idealFor}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        plan.highlighted
                          ? "text-white/80"
                          : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/85" : "text-[#374151]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact?service=hr-outsourcing&type=pricing"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-white text-[#4F46E5] hover:bg-[#EEF2FF]"
                    : "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                }`}
              >
                {plan.price === "Custom" ? "Talk to Sales" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Included note */}
        <RevealSection delay={0.4}>
          <div className="mt-10 bg-white border border-[#E0E7FF] rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-[#6B7280] text-sm leading-relaxed">
              <span className="font-semibold text-[#0F172A]">All plans include:</span>{" "}
              payroll processing, PF/ESIC filing, HR helpdesk (email + WhatsApp), monthly analytics report.{" "}
              <span className="font-semibold text-[#F97316]">Setup fee: ₹10,000 one-time.</span>
            </p>
            <div className="mt-5">
              <MagneticButton
                href="/contact?service=hr-outsourcing&type=pricing"
                variant="outline"
                className="px-8 py-3 text-sm font-bold rounded-xl"
              >
                Get a Custom Quote
              </MagneticButton>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
