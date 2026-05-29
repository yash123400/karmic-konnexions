"use client";

import { useCallback, useRef } from "react";
import { useState } from "react";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { motion } from "framer-motion";

// Fade-up variant used for hero text scroll reveals
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

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
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#0B0E14]"
      onMouseMove={handleMouseMove}
    >
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay — keeps text legible, min opacity 0.55 */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Atmospheric lighting fade — bottom vignette */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />

      {/* Header gradient guard — ensures nav is always readable */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Mouse-tracking radial glow */}
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full pointer-events-none z-[2] transition-transform duration-500 ease-out opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(245,158,11,0.05) 40%, transparent 80%)",
          transform: `translate(${mousePos.x - 600}px, ${mousePos.y - 600}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-24 lg:pt-[160px] lg:pb-0 relative z-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Global Consulting Excellence</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-white mb-8">
              <span className="block opacity-90">Empowering</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">Growth Through</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 italic pr-2">
                Execution.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl sm:text-2xl text-white/60 mt-6 leading-relaxed max-w-2xl font-light tracking-wide">
              Strategic Outsourcing &amp; Transformative Learning <br className="hidden md:block" />
              tailored for high-growth enterprises scaling globally.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-10 mt-16 pt-10 border-t border-white/10">
              <div className="group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">500<span className="text-amber-500 font-bold">+</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Global Clients</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">98<span className="text-amber-500 font-bold">%</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Client Retention</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">20<span className="text-amber-500 font-bold">+</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Industries Served</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block group">
                <div className="text-4xl font-light text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">15<span className="text-amber-500 font-bold">+</span></div>
                <div className="text-[10px] font-bold text-white/40 mt-1 uppercase tracking-[0.2em]">Years of Expertise</div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap gap-5 mt-16">
              <MagneticButton href="/services" variant="primary" className="!bg-white !text-midnight hover:!bg-amber-500 transition-colors">
                Explore Solutions →
              </MagneticButton>
              <MagneticButton href="/get-proposal" variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                Get Expert Proposal
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
