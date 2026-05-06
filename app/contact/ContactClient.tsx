"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import MagneticButton from '@/components/shared/MagneticButton'
import RevealSection from '@/components/shared/RevealSection'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(1, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9+ ]{10,15}$/, { message: "Invalid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().max(500).optional(),
  agree: z.boolean().refine(val => val === true, { message: "You must agree to be contacted" })
})

type ContactFormData = z.infer<typeof contactSchema>

const SERVICES = [
  "HRO & Business Functions", "HR & Payroll", "Finance & Accounts",
  "CRM & Sales Ops", "Marketing Services", "E-Learning & Training",
  "Global Workforce Solutions", "Corporate Apparel", "AI Automation", "Other"
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      agree: false
    }
  })

  const messageText = watch('message') || ''

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        setError('Something went wrong. Please try again or WhatsApp us directly.')
      }
    } catch (err) {
      setError('Connection error. Please check your internet or contact us via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-16">
      <PageHero
        variant="minimal"
        eyebrow="Get in Touch"
        title="Let's Start a Conversation."
        subtitle="Whether you're ready to outsource a function or just exploring options — our team responds within 24 hours."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT: FORM */}
            <RevealSection delay={0.1}>
              {isSuccess ? (
                <div className="bg-primary/5 rounded-[2.5rem] p-12 text-center border border-primary/10">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent Successfully</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed">
                    We&apos;ll get back to you within 24 hours. In the meantime, feel free to WhatsApp us for a quicker response.
                  </p>
                  <MagneticButton
                    href="https://wa.me/919667759894"
                    className="bg-[#25D366] text-white px-10 py-5 !rounded-2xl"
                  >
                    Chat on WhatsApp
                  </MagneticButton>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="block mx-auto mt-8 text-sm font-bold text-slate-400 hover:text-primary transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="max-w-xl">
                  {error && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm font-semibold">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                        <input
                          {...register('name')}
                          className={cn(
                            "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none",
                            errors.name ? "border-red-500" : "border-slate-100"
                          )}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
                        <input
                          {...register('company')}
                          className={cn(
                            "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none",
                            errors.company ? "border-red-500" : "border-slate-100"
                          )}
                          placeholder="Acme Corp"
                        />
                        {errors.company && <p className="text-red-500 text-[10px] font-bold">{errors.company.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input
                          {...register('email')}
                          className={cn(
                            "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none",
                            errors.email ? "border-red-500" : "border-slate-100"
                          )}
                          placeholder="john@acme.com"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                        <input
                          {...register('phone')}
                          className={cn(
                            "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none",
                            errors.phone ? "border-red-500" : "border-slate-100"
                          )}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] font-bold">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Service of Interest</label>
                      <select
                        {...register('service')}
                        className={cn(
                          "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none",
                          errors.service ? "border-red-500" : "border-slate-100"
                        )}
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-500 text-[10px] font-bold">{errors.service.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message (Optional)</label>
                        <span className="text-[10px] font-bold text-slate-400">{messageText.length}/500</span>
                      </div>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={cn(
                          "w-full px-5 py-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none",
                          errors.message ? "border-red-500" : "border-slate-100"
                        )}
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-[10px] font-bold">{errors.message.message}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register('agree')}
                        id="agree"
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="agree" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                        I agree to be contacted by Karmic Konnexions regarding my enquiry and understand my data will be handled as per the privacy policy.
                      </label>
                    </div>
                    {errors.agree && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.agree.message}</p>}

                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-5 !rounded-2xl flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </MagneticButton>
                  </form>
                </div>
              )}
            </RevealSection>

            {/* RIGHT: CONTACT INFO */}
            <RevealSection delay={0.3} className="space-y-8">
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office Address</p>
                      <p className="text-slate-900 font-semibold leading-relaxed">
                        Karmic Konnexions Global Consulting LLP<br/>
                        #106D, J Block, Adani Samsara Vilasa 2.0,<br/>
                        Sec 63, Maidawas Road, Gurgaon,<br/>
                        Haryana – 122011
                      </p>
                    </div>
                  </div>

                  <a href="tel:+919667759894" className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                      <p className="text-slate-900 font-bold text-lg group-hover:text-primary transition-colors">+91-9667759894</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Jasleen Kaur / Harleen Kaur</p>
                    </div>
                  </a>

                  <a href="mailto:karmickonnexions2309@gmail.com" className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                      <p className="text-slate-900 font-bold text-lg group-hover:text-primary transition-colors">karmickonnexions2309@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-8 bg-accent/10 border border-accent/20 rounded-[2rem] flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Prefer WhatsApp?</h4>
                    <p className="text-xs text-slate-500">Message us directly for faster response.</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919667759894"
                  className="bg-white text-slate-900 px-6 py-3 rounded-xl text-sm font-bold border border-slate-100 hover:shadow-lg transition-all"
                >
                  Chat Now
                </a>
              </div>

              {/* Business Hours */}
              <div className="p-10 border border-slate-100 rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-sm font-semibold text-slate-600">Monday – Friday</span>
                    <span className="text-sm font-bold text-slate-900">9:00 AM – 6:30 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-sm font-semibold text-slate-600">Saturday</span>
                    <span className="text-sm font-bold text-slate-900">10:00 AM – 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-semibold text-slate-600">Sunday</span>
                    <span className="text-sm font-bold text-slate-400">Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                  * Typical response time: &lt; 24 Hours
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </main>
  )
}
