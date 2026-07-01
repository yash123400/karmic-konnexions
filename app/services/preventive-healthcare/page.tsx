import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import MagneticButton from "@/components/shared/MagneticButton";
import { 
  HeartPulse, 
  Video, 
  Languages, 
  Cloud, 
  Activity,
  Syringe,
  Microscope,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  BriefcaseMedical,
  Building2,
  MonitorSmartphone,
  FileText,
  Utensils,
  LineChart
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Karmic Preventive Healthcare | Health ATM Kiosk',
  description: 'AI-Powered Smart Healthcare Kiosk. Advanced Diagnostic & Telemedicine Solution for PHCs, Community Centres & Healthcare Facilities.',
};

export default function PreventiveHealthcarePage() {
  const capabilities = [
    {
      title: "65+ Approved Tests",
      desc: "Vitals, blood analytics, cardiac, pulmonary, infectious diseases & more. Results in under 10 minutes.",
      icon: <Activity className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Teleconsultation Built-in",
      desc: "Live video consultation with qualified doctors — 24/7 telemedicine platform integrated.",
      icon: <Video className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Multi-language & KYC",
      desc: "Aadhaar/ID auto-capture, QR Patient ID, digital consent forms. Multiple regional languages supported.",
      icon: <Languages className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Cloud & ABHA Integration",
      desc: "ISO 27001 cloud storage, ABHA & HMS connectors, HIPAA & ABDM compliant. 100% digital records.",
      icon: <Cloud className="w-8 h-8 text-emerald-500" />
    }
  ];

  const diagnosticCategories = [
    {
      title: "General Vitals & Body Composition",
      icon: <HeartPulse className="w-6 h-6 text-indigo-400" />,
      items: [
        "Blood Pressure",
        "Heart Rate & SpO2",
        "BMI & Body Fat",
        "Muscle Mass & Hydration",
        "Temperature",
        "Metabolism & Weight — 19 Parameters"
      ]
    },
    {
      title: "Cardiac & Blood Analytics",
      icon: <Syringe className="w-6 h-6 text-rose-400" />,
      items: [
        "ECG (12-lead)",
        "Lipid Profile",
        "HbA1c",
        "Random Blood Sugar",
        "Haemoglobin / Anaemia Check",
        "Uric Acid — 7+ Parameters"
      ]
    },
    {
      title: "Rapid & Infectious Disease Tests",
      icon: <Microscope className="w-6 h-6 text-amber-400" />,
      items: [
        "Malaria / Dengue / COVID-19",
        "Hepatitis B & C",
        "HIV / Typhoid",
        "Urine Analysis (10 Parameters)",
        "— 9+ Parameters"
      ]
    },
    {
      title: "Advanced Specialised Screenings",
      icon: <Stethoscope className="w-6 h-6 text-cyan-400" />,
      items: [
        "Pulmonary Function (Spirometry)",
        "Auscultation (Heart & Lungs)",
        "Ear Test",
        "Eye Test & Dermatology",
        "Mental Health & Maternal Health"
      ]
    }
  ];

  const deploymentModels = [
    {
      title: "Health ATM (Kiosk)",
      desc: "Comprehensive physical kiosk for community centers, clinics, and hospitals.",
      icon: <MonitorSmartphone className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Box Clinic",
      desc: "Portable, suitcase-sized unit. Ideal for health camps and door-to-door medical services.",
      icon: <BriefcaseMedical className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Health Lounge",
      desc: "Modern private wellness space. Perfect for corporate offices, malls, and airports.",
      icon: <Building2 className="w-8 h-8 text-emerald-500" />
    }
  ];

  const smartFeatures = [
    {
      title: "Smart Medical Reports",
      desc: "Instant 360-degree health assessment with color-coded indicators. Delivered via WhatsApp, Email & Print.",
      icon: <FileText className="w-8 h-8 text-indigo-400" />
    },
    {
      title: "AI Nutrition Plans",
      desc: "Personalized Indian meal plans (e.g., 7-day caloric diet) generated instantly based on patient vitals.",
      icon: <Utensils className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Population Analytics",
      desc: "Filter data by age, gender, location, and parameters to monitor public health trends and detect abnormalities.",
      icon: <LineChart className="w-8 h-8 text-cyan-400" />
    }
  ];

  const certifications = [
    { title: "ISO 13485", desc: "Medical Devices QMS" },
    { title: "ISO 27001", desc: "Information Security" },
    { title: "CE Mark", desc: "EU Certified" },
    { title: "US FDA", desc: "FDA-Approved" },
    { title: "ABDM", desc: "Ayushman Bharat" },
    { title: "HIPAA", desc: "Health Data Privacy" },
    { title: "CDSCO", desc: "India Regulatory" },
    { title: "IEC", desc: "Electrical Safety" },
  ];

  return (
    <>
      <JsonLd data={buildServiceSchema({
        name: 'Karmic Preventive Healthcare',
        description: 'AI-Powered Smart Healthcare Kiosk. Advanced Diagnostic & Telemedicine Solution.',
        serviceType: 'Preventive Healthcare',
        url: '/services/preventive-healthcare',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'Preventive Healthcare', item: '/services/preventive-healthcare' },
      ])} />

      <PageHero
        variant="gradient"
        gradient="indigo"
        badge="Health ATM"
        eyebrow="Karmic Preventive Healthcare"
        title={"AI-Powered Smart\nHealthcare Kiosk."}
        subtitle="Advanced Diagnostic & Telemedicine Solution for PHCs, Community Centres & Healthcare Facilities."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Preventive Healthcare', href: '/services/preventive-healthcare' }
        ]}
      />

      {/* Key Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader eyebrow="Capabilities" title="What is a Health ATM?" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((feature, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-[#0F172A] rounded-2xl p-8 h-full border border-emerald-500/20 shadow-xl hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
                  
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ring-1 ring-white/10">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-[#FAFBFF] border-t border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Form Factors" title="Flexible Deployment Models" align="center" />
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            From comprehensive hospital setups to portable door-to-door diagnostic clinics.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentModels.map((model, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full shadow-sm hover:shadow-lg hover:border-emerald-500/30 transition-all text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-emerald-100">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                  <p className="text-gray-600 text-sm">{model.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-24 bg-[#FAFBFF] border-y border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Diagnostic Tests" title="Comprehensive Diagnostic Capabilities" align="center" />
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            65+ approved tests | Results in under 10 minutes | Digital delivery to ABHA account
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticCategories.map((category, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-white rounded-2xl p-8 border border-[#E0E7FF] h-full shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="p-3 bg-slate-50 rounded-xl ring-1 ring-slate-100">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Reporting */}
      <section className="py-24 bg-white border-b border-[#E0E7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Digital Experience" title="Smart Reporting & AI Nutrition" align="center" />
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Every test generates actionable, easy-to-read insights delivered instantly to the patient's phone.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartFeatures.map((feature, i) => (
              <RevealSection key={i} delay={0.1 * i}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 hover:bg-slate-100 transition-colors">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3">Compliance</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Highest International Standards</h3>
            <p className="mt-4 text-gray-400">Every Health ATM unit is built to strict medical and data-security standards.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, i) => (
              <RevealSection key={i} delay={0.05 * i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors h-full flex flex-col justify-center items-center">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{cert.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Investment" title="Health ATM Configurations" align="center" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Model */}
            <RevealSection delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col h-full relative overflow-hidden">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Model</h3>
                  <p className="text-gray-500 text-sm mb-6">15 tests included</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gray-900">₹5,45,000</span>
                    <span className="text-sm text-gray-500 font-medium">base</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Health Kiosk Unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Vital parameter checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Basic rapid diagnostics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Printer included</span>
                  </li>
                </ul>
              </div>
            </RevealSection>

            {/* Advanced Model */}
            <RevealSection delay={0.2}>
              <div className="bg-[#0F172A] border border-emerald-500/30 rounded-3xl p-8 shadow-2xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
                <div className="absolute top-6 right-6">
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                    Recommended
                  </span>
                </div>
                
                <div className="mb-8 mt-2">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Model</h3>
                  <p className="text-gray-400 text-sm mb-6">44 tests included</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">₹6,75,000</span>
                    <span className="text-sm text-gray-400 font-medium">base</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">All Basic features included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">High-speed scanner & printer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">Advanced diagnostics (ECG, Lipids)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">Teleconsultation platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">ABHA / HMS integration</span>
                  </li>
                </ul>
              </div>
            </RevealSection>

            {/* Advanced Plus Model */}
            <RevealSection delay={0.3}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                    Most Used
                  </span>
                </div>

                <div className="mb-8 mt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Plus Model</h3>
                  <p className="text-gray-500 text-sm mb-6">65 tests included</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gray-900">₹8,80,000</span>
                    <span className="text-sm text-gray-500 font-medium">base</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">All Advanced features included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Rapid Infectious Disease Tests (Malaria, Dengue, COVID-19)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Mental & Maternal Health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">Comprehensive Diagnostics Suite</span>
                  </li>
                </ul>
              </div>
            </RevealSection>
          </div>

          <div className="mt-12 bg-[#FAFBFF] border border-[#E0E7FF] rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">Note:</span> Prices listed are for the base Machine Hardware & Diagnostic Unit software. 
              <br />
              Transport, installation, Training and AMC are available at minimal additional cost.
            </p>
          </div>

          <div className="mt-16 text-center">
            <MagneticButton
              href="/get-proposal?service=healthcare"
              className="bg-emerald-600 text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-emerald-700 transition-colors inline-block shadow-lg"
            >
              Request a Formal Proposal
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
