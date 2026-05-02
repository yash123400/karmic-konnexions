"use client";

import { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "accent" | "outline";
}

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/40",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(Math.max(-8, Math.min(8, deltaX)));
    y.set(Math.max(-8, Math.min(8, deltaY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const transformX = useTransform(x, (v) => v);
  const transformY = useTransform(y, (v) => v);

  const content = (
    <motion.div
      ref={ref}
      style={{ x: transformX, y: transformY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-200 cursor-pointer",
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
