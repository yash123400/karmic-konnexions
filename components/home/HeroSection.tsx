"use client";

import dynamic from "next/dynamic";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { Badge } from "@/components/ui/badge";

const NetworkScene = dynamic(() => import("@/components/3d/NetworkScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#0B0E14]" />
  ),
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#0B0E14]"
    >
      {/* 3D backdrop — dynamic, no SSR */}
      <div className="absolute inset-0 z-0">
        <NetworkScene />
      </div>

      {/* Single clean overlay — replaces the 3-layer atmospheric stack */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0B0E14]/95 via-[#0B0E14]/70 to-transparent pointer-events-none" />

      {/* Header gradient guard — keeps navbar readable over the dark hero */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-24 lg:pt-[160px] lg:pb-0">
        <div className="max-w-3xl">

          {/* Badge */}
          <RevealSection>
            <Badge
              variant="outline"
              className="mb-8 gap-2 px-4 py-1.5 rounded-full border-white/15 bg-white/5 backdrop-blur-md text-white/60 text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Global Consulting Excellence
            </Badge>
          </RevealSection>

          {/* Headline — two clean lines, single accent gradient */}
          <RevealSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              Empowering Growth
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">
                Through Execution.
              </span>
            </h1>
          </RevealSection>

          {/* Subtitle */}
          <RevealSection delay={0.2}>
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-light max-w-xl">
              Strategic outsourcing and transformative learning
              for high-growth enterprises scaling globally.
            </p>
          </RevealSection>

          {/* CTAs */}
          <RevealSection delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-10">
              <MagneticButton
                href="/services"
                variant="primary"
                className="!bg-white !text-[#0B0E14] hover:!bg-amber-400 hover:!text-white transition-colors font-semibold"
              >
                Explore Solutions →
              </MagneticButton>
              <MagneticButton
                href="/get-proposal"
                variant="outline"
                className="!border-white/20 !text-white/80 hover:!bg-white/8 hover:!text-white transition-colors"
              >
                Get a Proposal
              </MagneticButton>
            </div>
          </RevealSection>

          {/* Stats row — verified company data, unchanged values */}
          <RevealSection delay={0.4}>
            <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10">

              <div className="group">
                <p className="text-3xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">
                  500<span className="text-amber-500 font-bold">+</span>
                </p>
                <p className="text-[10px] font-bold text-white/35 mt-1 uppercase tracking-[0.2em]">
                  Global Clients
                </p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div className="group">
                <p className="text-3xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">
                  98<span className="text-amber-500 font-bold">%</span>
                </p>
                <p className="text-[10px] font-bold text-white/35 mt-1 uppercase tracking-[0.2em]">
                  Client Retention
                </p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div className="group">
                <p className="text-3xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">
                  20<span className="text-amber-500 font-bold">+</span>
                </p>
                <p className="text-[10px] font-bold text-white/35 mt-1 uppercase tracking-[0.2em]">
                  Industries Served
                </p>
              </div>

              <div className="w-px h-10 bg-white/10 hidden sm:block" />

              <div className="hidden sm:block group">
                <p className="text-3xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">
                  15<span className="text-amber-500 font-bold">+</span>
                </p>
                <p className="text-[10px] font-bold text-white/35 mt-1 uppercase tracking-[0.2em]">
                  Years of Expertise
                </p>
              </div>

            </div>
          </RevealSection>

        </div>
      </div>
    </section>
  );
}
