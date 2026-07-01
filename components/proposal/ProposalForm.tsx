"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Loader2,
  Building2,
  Layers,
  PhoneCall,
  Briefcase,
  HelpCircle,
  MessageSquare,
  MapPin
} from 'lucide-react'
import Image from 'next/image'
import MagneticButton from '@/components/shared/MagneticButton'
import { cn } from '@/lib/utils'

const SERVICES = [
  { id: 'hr', name: 'HR & Payroll', desc: 'Compliant payroll & workforce management', icon: '/images/icons/bpo/icon-1.png' },
  { id: 'finance', name: 'Finance & Accounts', desc: 'Tax, bookkeeping & MIS reporting', icon: '/images/icons/bpo/icon-2.png' },
  { id: 'crm', name: 'CRM & Sales Ops', desc: 'Lead management & pipeline hygiene', icon: '/images/icons/bpo/icon-3.png' },
  { id: 'marketing', name: 'Marketing Services', desc: 'Strategic outreach & brand management', icon: '/images/icons/bpo/icon-4.png' },
  { id: 'training', name: 'E-Learning / Training', desc: 'Corporate L&D and skill development', icon: '/images/icons/bpo/icon-8.png' },
  { id: 'global', name: 'Global Workforce', desc: 'International hiring & cross-border trade', icon: '/images/icons/bpo/icon-13.png' },
  { id: 'healthcare', name: 'Preventive Healthcare', desc: 'Health ATM & Diagnostic Kiosks', icon: '/images/icons/bpo/icon-6.png' },
  { id: 'ai', name: 'AI Automation', desc: 'Intelligent process automation & AI bots', icon: '/images/icons/bpo/icon-11.png' },
  { id: 'apparel', name: 'Corporate Apparel', desc: 'Custom branding & corporate uniforms', icon: '/images/icons/bpo/icon-10.png' },
]

export default function ProposalForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    company_name: '',
    industry: '',
    company_size: '',
    location: '',
    services: [] as string[],
    engagement_model: '',
    name: '',
    designation: '',
    email: '',
    phone: '',
    preferred_call_time: '',
    referral_source: '',
    notes: ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const serviceParam = params.get('service')
      if (serviceParam && SERVICES.some(s => s.id === serviceParam)) {
        setFormData(prev => ({ ...prev, services: [serviceParam] }))
      }
    }
  }, [])

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id) 
        : [...prev.services, id]
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) setIsSuccess(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl border border-slate-100 max-w-3xl mx-auto">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-4xl font-black text-slate-900 mb-6">Proposal Request Received!</h3>
        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
          Our team will review your requirements and send you a tailored proposal within 48 hours. 
          We&apos;ll reach out to <span className="font-bold text-primary">{formData.email}</span> or call you on <span className="font-bold text-primary">{formData.phone}</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <MagneticButton href="/about" variant="outline" className="px-8 py-4">
            Learn More About Us
          </MagneticButton>
          <MagneticButton href="https://wa.me/919667759894" className="bg-[#25D366] text-white px-8 py-4 !rounded-xl flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </MagneticButton>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Step {step} of 3</p>
            <h4 className="text-xl font-bold text-slate-900">
              {step === 1 && "Company Details"}
              {step === 2 && "Services & Model"}
              {step === 3 && "Contact Details"}
            </h4>
          </div>
          <span className="text-xs font-bold text-slate-400">{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-primary"
          />
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-50 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" /> Company Name
                  </label>
                  <input 
                    value={formData.company_name}
                    onChange={e => setFormData({...formData, company_name: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" /> Industry
                  </label>
                  <select 
                    value={formData.industry}
                    onChange={e => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select Industry</option>
                    <option>Logistics & Supply Chain</option>
                    <option>Manufacturing & Industrial</option>
                    <option>Healthcare & Pharma</option>
                    <option>Education & EdTech</option>
                    <option>IT & Technology</option>
                    <option>BFSI & FinTech</option>
                    <option>Retail & D2C</option>
                    <option>Startups & SMEs</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" /> Company Size
                  </label>
                  <select 
                    value={formData.company_size}
                    onChange={e => setFormData({...formData, company_size: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select Size</option>
                    <option>1–50 employees</option>
                    <option>51–200 employees</option>
                    <option>201–500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Location / HQ
                  </label>
                  <input 
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="e.g. Gurgaon, India"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h5 className="text-sm font-bold text-slate-900">Which services are you interested in?</h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className="group perspective"
                    >
                      <div className={cn(
                        "relative w-full h-[180px] transition-all duration-500 preserve-3d",
                        formData.services.includes(s.id) ? "rotate-y-180" : ""
                      )}>
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center group-hover:border-primary/30 group-hover:bg-white transition-all">
                          <div className="w-12 h-12 mb-4 bg-white rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                            <Image src={s.icon} alt={s.name} width={24} height={24} className="opacity-80" />
                          </div>
                          <h6 className="font-bold text-slate-900 text-sm mb-2">{s.name}</h6>
                          <p className="text-[10px] text-slate-500 leading-relaxed">{s.desc}</p>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                            <Check className="w-6 h-6 text-white" />
                          </div>
                          <h6 className="font-bold text-sm mb-1">Selected</h6>
                          <p className="text-[10px] opacity-80">Click to remove</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-sm font-bold text-slate-900">Engagement Model Preference</h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'pod', label: 'Dedicated Pod', sub: 'Best for 100+ employees' },
                    { id: 'shared', label: 'Shared Services', sub: 'Best for SMEs & startups' },
                    { id: 'project', label: 'Project / Advisory', sub: 'Specific initiative' },
                    { id: 'unsure', label: 'Not sure', sub: 'Advise me' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setFormData({...formData, engagement_model: m.id})}
                      className={cn(
                        "p-5 rounded-2xl border-2 text-left transition-all",
                        formData.engagement_model === m.id 
                          ? "border-primary bg-primary/5" 
                          : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-900">{m.label}</span>
                        {formData.engagement_model === m.id && <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" /></div>}
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{m.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Designation / Role</label>
                  <input 
                    value={formData.designation}
                    onChange={e => setFormData({...formData, designation: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="e.g. CFO / Founder"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="rahul@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone / WhatsApp</label>
                  <input 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5" /> Preferred Call Time
                  </label>
                  <select 
                    value={formData.preferred_call_time}
                    onChange={e => setFormData({...formData, preferred_call_time: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select Time</option>
                    <option>Morning (9–12pm)</option>
                    <option>Afternoon (12–3pm)</option>
                    <option>Evening (3–6pm)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <HelpCircle className="w-3.5 h-3.5" /> How did you hear about us?
                  </label>
                  <select 
                    value={formData.referral_source}
                    onChange={e => setFormData({...formData, referral_source: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select Option</option>
                    <option>Google Search</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>WhatsApp</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Additional Notes</label>
                  <span className="text-[10px] font-bold text-slate-400">{formData.notes.length}/300</span>
                </div>
                <textarea 
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value.slice(0, 300)})}
                  rows={3}
                  className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about specific challenges or timelines..."
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-between gap-6 pt-12 border-t border-slate-50">
          <button 
            onClick={prevStep}
            disabled={step === 1 || isSubmitting}
            className={cn(
              "flex items-center gap-2 text-sm font-bold transition-all",
              step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-slate-900"
            )}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          {step < 3 ? (
            <MagneticButton 
              onClick={nextStep}
              className="bg-primary text-white px-10 py-5 !rounded-2xl flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          ) : (
            <MagneticButton 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary text-white px-12 py-5 !rounded-2xl flex items-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit My Request
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </MagneticButton>
          )}
        </div>
      </div>

      {/* Global CSS for 3D flip effect */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
