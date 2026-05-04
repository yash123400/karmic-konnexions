"use client"
import { useRef, forwardRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const variantStyles = {
  primary: "bg-[#4F46E5] hover:bg-[#3730A3] text-white",
  accent: "bg-[#F97316] hover:bg-[#EA580C] text-white",
  outline: "border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#EEF2FF] bg-transparent",
  ghost: "text-[#4F46E5] hover:bg-[#EEF2FF] bg-transparent",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

const MotionLink = motion.create(Link);

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    x.set(Math.max(-8, Math.min(8, deltaX * 0.2)));
    y.set(Math.max(-8, Math.min(8, deltaY * 0.2)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-2",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <MotionLink
        ref={ref as any}
        href={href}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
