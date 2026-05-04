"use client"
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function SplitText({
  text,
  className,
  delay = 0,
  wordDelay = 0.06,
}: SplitTextProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={className} aria-label={text} role="heading">
        {text}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={text}
      role="heading"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: wordDelay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden whitespace-nowrap">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * wordDelay + delay },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
