import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { ArrowRight, BookOpen, BarChart3, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: 'Learning & Development Programs | Karmic Konnexions',
  description: 'Business leadership, data & analytics, and generative AI programs designed for corporate professionals and emerging leaders. Powered by Karmic Konnexions NextGen Learning.',
};

export default function ProgramsHubPage() {
  const programs = [
    {
      id: "business-stack",
      title: "Business-Stack Leadership",
      href: "/programs/business-stack",
      description: "A comprehensive leadership development program for mid-to-senior managers. Covers strategic thinking, stakeholder management, P&L ownership, and change leadership.",
      icon: <BookOpen className="w-8 h-8 text-[#4F46E5]" />,
      color: "bg-[#4F46E5]",
      lightColor: "bg-[#EEF2FF]"
    },
    {
      id: "data-zenmaster",
      title: "Data & Analytics (DataZenmaster)",
      href: "/programs/data-zenmaster",
      description: "A practical data literacy and analytics program for business and technical professionals. Covers data storytelling, business intelligence, and decision-making with data.",
      icon: <BarChart3 className="w-8 h-8 text-[#F97316]" />,
      color: "bg-[#F97316]",
      lightColor: "bg-[#FFF7ED]"
    },
    {
      id: "gen-ai",
      title: "Generative AI Suites",
      href: "/programs/gen-ai",
      description: "A hands-on AI program for professionals who want to harness generative AI tools in their daily work — from prompt engineering to building AI-assisted workflows.",
      icon: <Bot className="w-8 h-8 text-[#22C55E]" />,
      color: "bg-[#22C55E]",
      lightColor: "bg-[#DCFCE7]"
    }
  ];

  return (
    <>
      <PageHero
        variant="split"
        badge="NextGen Learning"
        eyebrow="Karmic Konnexions Programs"
        title={"Programs That Build\nFuture Leaders."}
        subtitle="Our structured corporate programs combine domain expertise, AI-powered learning, and real-world application — delivered in partnership with global academic institutions."
        rightContent={
          <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/capability/capability-hero-slide1.png"
              alt="Karmic Konnexions Programs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        }
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' }
        ]}
      />

      <section className="py-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Accelerate Professional Growth
            </h2>
            <p className="text-lg text-[#6B7280]">
              Choose from our flagship programs designed for high-impact roles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <RevealSection key={program.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E0E7FF] h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${program.lightColor}`}>
                    {program.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-[#4B5563] leading-relaxed mb-8 flex-grow">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <Link
                      href={program.href}
                      className="text-[#4F46E5] font-semibold hover:text-[#3730A3] transition-colors flex items-center gap-2 group-hover:underline"
                    >
                      View Details
                    </Link>
                    <MagneticButton
                      href={`/contact?service=programs&program=${encodeURIComponent(program.title)}`}
                      className={`ml-auto px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-colors ${program.color} hover:opacity-90`}
                    >
                      Enroll Now
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
