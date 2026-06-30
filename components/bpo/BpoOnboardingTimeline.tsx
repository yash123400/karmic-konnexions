"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/shared/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    day: "Days 1–15",
    title: "Discovery Call",
    description:
      "We map your current processes and identify quick wins immediately.",
  },
  {
    number: 2,
    day: "Days 16–45",
    title: "Process Audit",
    description:
      "Our team documents your workflows and spots inefficiencies in depth.",
  },
  {
    number: 3,
    day: "Days 46–90",
    title: "Team Setup",
    description:
      "We hire and assign trained HRO specialists dedicated to your account.",
  },
  {
    number: 4,
    day: "Days 91–150",
    title: "Parallel Run",
    description:
      "Your team and ours run the process together to ensure zero quality loss.",
  },
  {
    number: 5,
    day: "Day 180",
    title: "Full Handover",
    description:
      "You step back. We step up. Full SLA reporting begins from Day 180.",
  },
];

export default function BpoOnboardingTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate line draw
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // Stagger step circles
      gsap.fromTo(
        ".bpo-step-circle",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center 60%",
            scrub: false,
          },
        }
      );

      // Stagger step content
      gsap.fromTo(
        ".bpo-step-content",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Engagement Model"
          title="How We Onboard You in 180 Days"
          align="center"
        />

        {/* Desktop timeline */}
        <div className="relative mt-16">
          {/* SVG connecting line */}
          <svg
            className="absolute top-6 left-0 w-full hidden lg:block"
            height="12"
            viewBox="0 0 1000 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              ref={lineRef}
              x1="40"
              y1="6"
              x2="960"
              y2="6"
              stroke="url(#bpoLineGrad)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="bpoLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center lg:items-center text-center">
                {/* Circle */}
                <div
                  className="bpo-step-circle w-12 h-12 rounded-full bg-[#4F46E5] text-white flex items-center justify-center
                    text-lg font-black shadow-lg shadow-[#4F46E5]/30 relative z-10 mb-5"
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="bpo-step-content">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#F97316] text-xs font-semibold mb-2">
                    {step.day}
                  </span>
                  <h4 className="font-bold text-[#0F172A] text-base mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
