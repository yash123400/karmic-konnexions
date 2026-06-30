import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import { sanityFetch } from "@/lib/sanity";
import { FEATURED_TESTIMONIALS_QUERY } from "@/lib/queries";
import { Quote } from "lucide-react";

export default async function Testimonials() {
  const testimonials = await sanityFetch<any[]>({ query: FEATURED_TESTIMONIALS_QUERY });

  // Fallback if no testimonials in Sanity yet
  const displayTestimonials = testimonials?.length > 0 ? testimonials : [
    {
      _id: 'default',
      quote: "Karmic Konnexions built our entire HR function from scratch in 180 days. Dashboards, compliance and a great team — without a single full-time HR hire.",
      attribution: "CFO, Logistics Company, 300 Employees",
      service: "HR & Payroll"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Client Success"
          title="Direct from our Partners"
          align="center"
          className="mb-20"
        />

        <div className="max-w-4xl mx-auto">
          {displayTestimonials.map((t, idx) => (
            <RevealSection key={t._id} delay={idx * 0.1}>
              <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-primary/5 border border-slate-100 relative group">
                <Quote className="absolute top-10 left-10 w-24 h-24 text-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative z-10">
                  <blockquote className="text-2xl md:text-3xl font-black text-slate-900 italic leading-relaxed mb-12">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-slate-50">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                        {t.attribution[0]}
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900 uppercase tracking-widest leading-tight">
                          {t.attribution}
                        </p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Strategic Partner</p>
                      </div>
                    </div>
                    
                    <div className="px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                      {t.service}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
