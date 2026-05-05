"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { motion } from "framer-motion";
import SplitText from "@/components/shared/SplitText";

const NetworkScene = dynamic(() => import("@/components/3d/NetworkScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-primary/10 animate-pulse" />
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
        className="absolute w-[1000px] h-[1000px] rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.1) 0%, rgba(245,158,11,0.03) 30%, transparent 70%)",
          transform: `translate(${mousePos.x - 500}px, ${mousePos.y - 500}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-primary/10 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Karmic Konnexions Global</span>
              </div>
            </RevealSection>

            <RevealSection delay={0.1}>
              <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-text-primary">
                <SplitText text="Empowering Growth Through" /> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-amber-500 italic pr-2">
                  <SplitText text="Execution." />
                </span>
              </h1>
            </RevealSection>

            <RevealSection delay={0.2}>
              <p className="text-lg sm:text-xl text-text-secondary mt-6 leading-relaxed max-w-xl">
                Strategic Outsourcing & Transformative Learning tailored for enterprises scaling globally.
              </p>
            </RevealSection>

            <RevealSection delay={0.3}>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border/60">
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-primary tracking-tight">500+</div>
                  <div className="text-xs font-semibold text-text-muted mt-1 uppercase tracking-wider">Clients</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-amber-600 tracking-tight">300k+</div>
                  <div className="text-xs font-semibold text-text-muted mt-1 uppercase tracking-wider">Learners</div>
                </div>
                <div className="w-px h-10 bg-border hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="text-3xl lg:text-4xl font-black text-primary tracking-tight">8</div>
                  <div className="text-xs font-semibold text-text-muted mt-1 uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.4}>
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

          {/* Right Column — Network Constellation */}
          <RevealSection delay={0.3}>
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <NetworkScene />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
