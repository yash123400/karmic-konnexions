"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home, 
  Search, 
  ArrowRight, 
  PhoneCall, 
  LayoutGrid,
  ChevronRight
} from 'lucide-react'
import MagneticButton from '@/components/shared/MagneticButton'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4 py-24">
      {/* Background 404 text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <motion.h1 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-[25rem] md:text-[40rem] font-black text-primary/[0.03] leading-none select-none"
        >
          404
        </motion.h1>
      </motion.div>

      <div className="max-w-xl w-full text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Search className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Home", href: "/", icon: Home },
            { label: "Services", href: "/#services", icon: LayoutGrid },
            { label: "Contact", href: "/contact", icon: PhoneCall }
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group"
            >
              <link.icon className="w-6 h-6 text-slate-400 group-hover:text-primary mx-auto mb-3 transition-colors" />
              <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{link.label}</span>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton 
            href="/" 
            className="bg-primary text-white px-12 py-5 !rounded-2xl shadow-2xl shadow-primary/30 flex items-center gap-3 mx-auto"
          >
            Go Back Home
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
      
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -ml-40 -mb-40" />
    </main>
  )
}
