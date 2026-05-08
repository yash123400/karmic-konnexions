"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <span className={className} aria-label={text} role="heading">
        {text}
      </span>
    );
  }

  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline-block", className)}
      aria-label={text}
      role="heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
