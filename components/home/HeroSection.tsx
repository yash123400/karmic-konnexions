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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]"
      onMouseMove={handleMouseMove}
    >
      {/* Immersive 3D Backdrop */}
      <div className="absolute inset-0 z-0">
        <NetworkScene />
      </div>

      {/* Atmospheric lighting layers */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
      
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full pointer-events-none z-[2] transition-transform duration-500 ease-out opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(245,158,11,0.05) 40%, transparent 80%)",
          transform: `translate(${mousePos.x - 600}px, ${mousePos.y - 600}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Global Consulting Excellence</span>
            </div>
          </RevealSection>

          {/* Title */}
          <RevealSection delay={0.1}>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-white mb-8">
              <span className="block opacity-90">Empowering</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">Growth Through</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 italic pr-2">
                Execution.
              </span>
            </h1>
          </RevealSection>

          {/* Subtitle */}
          <RevealSection delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 leading-relaxed max-w-2xl font-light tracking-wide">
              Strategic Outsourcing & Transformative Learning <br className="hidden md:block" /> 
              tailored for high-growth enterprises scaling globally.
            </p>
          </RevealSection>

          {/* Stats Bar - Premium Glassmorphism */}
          <RevealSection delay={0.3}>
            <div className="flex flex-wrap items-center gap-10 mt-16 pt-10 border-t border-white/10">
              <div className="group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">500<span className="text-amber-500 font-bold">+</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Global Clients</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">300k<span className="text-amber-500 font-bold">+</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Certified Learners</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">8</div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Core Regions</div>
              </div>
            </div>
          </RevealSection>

          {/* CTAs */}
          <RevealSection delay={0.4}>
            <div className="flex flex-wrap gap-5 mt-16">
              <MagneticButton href="/services" variant="primary" className="!bg-white !text-midnight hover:!bg-amber-500 transition-colors">
                Explore Solutions →
              </MagneticButton>
              <MagneticButton href="/get-proposal" variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                Get Expert Proposal
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
