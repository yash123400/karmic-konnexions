"use client"
import { useRef } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import RevealSection from "./RevealSection";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accentColor?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accentColor = '#4F46E5',
  delay = 0,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotate = 6;
    const xPct = mouseX / (rect.width / 2);
    const yPct = mouseY / (rect.height / 2);

    rotateX.set(-yPct * maxRotate);
    rotateY.set(xPct * maxRotate);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <RevealSection delay={delay}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 800 }}
        className="group relative bg-white rounded-2xl border border-[#E0E7FF] p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#4F46E5]/40 hover:-translate-y-1 block border-l-[3px] border-l-transparent hover:border-l-[#4F46E5] h-full"
      >
        <Link href={href} className="absolute inset-0 z-10" aria-label={`Learn more about ${title}`} />
        
        <div className="relative z-20">
          <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
            <Icon size={28} color={accentColor} />
          </div>
          
          <h3 className="text-xl font-bold text-[#0F172A] mt-6">{title}</h3>
          
          <p className="text-[#6B7280] mt-3 leading-relaxed text-sm">
            {description}
          </p>
          
          <div className="mt-6 flex items-center gap-1 text-[#4F46E5] font-semibold text-sm">
            Learn more
            <motion.span
              className="inline-block"
              variants={{
                idle: { x: 0 },
                hover: { x: 4 }
              }}
              initial="idle"
              animate="idle"
              whileHover="hover"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </RevealSection>
  );
}
