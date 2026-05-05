"use client"
import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number // Default: 0.4
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export default function MagneticButton({ children, href, onClick, className = '', strength = 0.4, variant }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 300, damping: 30 })
  const y = useSpring(0, { stiffness: 300, damping: 30 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="hover"
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) return <Link href={href}>{inner}</Link>
  return <button onClick={onClick} className="appearance-none bg-transparent border-0 p-0">{inner}</button>
}
