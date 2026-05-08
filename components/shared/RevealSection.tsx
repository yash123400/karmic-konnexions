"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export default function RevealSection({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = 'up',
}: RevealSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
