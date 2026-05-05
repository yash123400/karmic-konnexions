import RevealSection from "./RevealSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleSize?: 'default' | 'large';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleSize = 'default',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  return (
    <RevealSection className={cn("flex flex-col", align === 'center' ? 'text-center items-center' : 'text-left items-start', className)}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          theme === 'light' ? "text-[#0F172A]" : "text-white",
          titleSize === 'large'
            ? "text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]"
            : "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg mt-4 max-w-2xl leading-relaxed", theme === 'light' ? "text-[#6B7280]" : "text-white/70", align === 'center' && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </RevealSection>
  );
}
