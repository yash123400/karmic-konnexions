import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-tint to-background relative overflow-hidden">
      <div className="text-center px-4 relative z-10">
        <h1 className="text-[150px] md:text-[200px] font-black text-primary-tint leading-none select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary -mt-8">
          Page not found
        </h2>
        <p className="text-text-secondary mt-4 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <MagneticButton href="/" variant="primary">
            Go Home
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Contact Us
          </MagneticButton>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
