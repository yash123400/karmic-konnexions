"use client"

import { useState, useMemo, useEffect } from 'react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { Check, Info } from 'lucide-react'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { cn } from '@/lib/utils'

const FUNCTIONS = [
  { id: 'hr', label: 'HR & Payroll', inHouseCost: 2500000 },
  { id: 'finance', label: 'Finance & Accounts', inHouseCost: 2000000 },
  { id: 'crm', label: 'CRM & Sales Ops', inHouseCost: 1800000 },
  { id: 'marketing', label: 'Marketing Services', inHouseCost: 1800000 },
]

export default function ROICalculator() {
  const [isMounted, setIsMounted] = useState(false)
  const [headcount, setHeadcount] = useState(100)
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>(['hr'])

  useEffect(() => { setIsMounted(true) }, [])

  const toggleFunction = (id: string) => {
    setSelectedFunctions(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const calculations = useMemo(() => {
    const totalInHouseCost = FUNCTIONS
      .filter(f => selectedFunctions.includes(f.id))
      .reduce((acc, f) => acc + f.inHouseCost, 0)
    
    // Scale cost by headcount (simplified: 1 specialist per 100 employees)
    const headcountMultiplier = Math.max(1, headcount / 100)
    const adjustedInHouseCost = totalInHouseCost * headcountMultiplier
    
    const annualSavings = adjustedInHouseCost * 0.6
    const complianceSavings = selectedFunctions.length * 200000
    const totalBenefit = annualSavings + complianceSavings
    const roi = 3.5
    const monthsToROI = 4

    return {
      annualSavings,
      complianceSavings,
      totalBenefit,
      roi,
      monthsToROI,
      monthlySavings: annualSavings / 12
    }
  }, [headcount, selectedFunctions])

  const chartData = useMemo(() => {
    const data = []
    let cumulative = 0
    for (let i = 1; i <= 12; i++) {
      cumulative += calculations.monthlySavings
      data.push({
        month: `M${i}`,
        savings: Math.round(cumulative)
      })
    }
    return data
  }, [calculations.monthlySavings])

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
      <div className="grid lg:grid-cols-2">
        {/* Left: Inputs */}
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Customise Your Model</h3>
          
          <div className="space-y-10">
            {/* Headcount Slider */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Company Headcount</label>
                <span className="text-2xl font-black text-primary">{headcount}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10" 
                value={headcount}
                onChange={(e) => setHeadcount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
                <span>10</span>
                <span>500</span>
                <span>1000</span>
              </div>
            </div>

            {/* Functions Multi-select */}
            <div>
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-4">Functions to Outsource</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {FUNCTIONS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => toggleFunction(f.id)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left",
                      selectedFunctions.includes(f.id)
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-slate-100 hover:border-slate-200 text-slate-600"
                    )}
                  >
                    <div className={cn(
                      "w-5 h-5 rounded flex items-center justify-center border",
                      selectedFunctions.includes(f.id) ? "bg-primary border-primary text-white" : "border-slate-300"
                    )}>
                      {selectedFunctions.includes(f.id) && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="font-semibold text-sm">{f.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* In-house team estimation */}
            <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4">
              <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed">
                Based on your headcount, an in-house team would require approx. 
                <span className="font-bold text-slate-900 mx-1">{Math.max(1, Math.round(headcount / 100) * selectedFunctions.length)} specialists</span> 
                to maintain these functions effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Outputs */}
        <div className="p-8 md:p-12 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Your Projected ROI</h3>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Annual Cost Saving</div>
              <div className="text-3xl font-black text-slate-900 flex items-baseline">
                <span className="text-lg font-bold mr-1">₹</span>
                <AnimatedCounter value={calculations.annualSavings} className="text-3xl" />
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Projected ROI</div>
              <div className="text-4xl font-black text-accent">{calculations.roi}x</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Compliance Risk Avoided</div>
              <div className="text-xl font-bold text-slate-900 flex items-baseline">
                <span className="text-sm font-bold mr-1">₹</span>
                <AnimatedCounter value={calculations.complianceSavings} />
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Months to Full ROI</div>
              <div className="text-xl font-bold text-slate-900">{calculations.monthsToROI} Months</div>
            </div>
          </div>

          {/* Chart — only renders client-side to prevent Recharts SSR dimension warnings */}
          <div className="h-[200px] w-full mt-8">
            {isMounted && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }} 
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                  formatter={(value: any) => [typeof value === 'number' ? `₹${value.toLocaleString()}` : value, 'Cumulative Savings']}
                />
                <Area 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#4F46E5" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSavings)" 
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
            )}
          </div>
          <div className="text-center mt-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Cumulative 12-Month Savings Curve</span>
          </div>
        </div>
      </div>
    </div>
  )
}
