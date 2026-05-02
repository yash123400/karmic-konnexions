"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import SplitText from "@/components/shared/SplitText";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";

const GlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
    </div>
  ),
});

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-tint to-background"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-transform duration-150"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <RevealSection>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Karmic Konnexions Global Consulting LLP
              </p>
            </RevealSection>

            <div className="mt-6">
              <SplitText
                text="Empowering Businesses Through Execution-Focused"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-text-primary"
              />
              <SplitText
                text="Outsourcing & Learning"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary mt-2"
                delay={0.4}
              />
            </div>

            <RevealSection delay={0.3}>
              <p className="text-xl text-text-secondary mt-6">
                HR · Finance · CRM · Marketing · E-Learning · AI Automation ·
                Global Staffing
              </p>
            </RevealSection>

            <RevealSection delay={0.4}>
              <p className="text-sm text-text-muted mt-4 font-medium">
                500+ Clients &nbsp;|&nbsp; 300,000+ Learners &nbsp;|&nbsp; 8
                Countries
              </p>
            </RevealSection>

            <RevealSection delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-10">
                <MagneticButton href="/services" variant="primary">
                  Explore Services →
                </MagneticButton>
                <MagneticButton href="/get-proposal" variant="outline">
                  Get a Proposal
                </MagneticButton>
              </div>
            </RevealSection>
          </div>

          {/* Right Column — Globe */}
          <RevealSection delay={0.2}>
            <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden">
              <GlobeScene />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
