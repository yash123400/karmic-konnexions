"use client"

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true) // Default true to prevent flash on mobile
  const [isHovering, setIsHovering] = useState(false)
  const [isTextHover, setIsTextHover] = useState(false)
  
  // Outer ring delayed lerp
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 })
  const [innerPos, setInnerPos] = useState({ x: -100, y: -100 })
  
  // Framer motion springs for scale and opacity
  const outerScaleX = useSpring(1, { stiffness: 300, damping: 28 })
  const outerScaleY = useSpring(1, { stiffness: 300, damping: 28 })
  const outerBorderRadius = useSpring(50, { stiffness: 300, damping: 28 })
  const innerScale = useSpring(1, { stiffness: 300, damping: 28 })

  useEffect(() => {
    // Detect touch
    const matchMedia = window.matchMedia('(hover: none)')
    setIsTouch(matchMedia.matches)
    
    const handleMediaChange = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    matchMedia.addEventListener('change', handleMediaChange)

    return () => matchMedia.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    if (isTouch) return

    let rafId: number
    let targetX = -100
    let targetY = -100
    let currentX = -100
    let currentY = -100

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setInnerPos({ x: targetX, y: targetY })
      
      // Interactive elements detection
      const target = e.target as HTMLElement
      
      const isHoverable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]')

      const isText = target.closest('[data-cursor="text"]')

      setIsHovering(!!isHoverable)
      setIsTextHover(!!isText)
    }

    const animate = () => {
      // Lerp for outer ring
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      
      setOuterPos({ x: currentX, y: currentY })
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [isTouch])

  // Update springs based on state
  useEffect(() => {
    if (isTextHover) {
      outerScaleX.set(2.6) // approx 80px / 30px
      outerScaleY.set(0.8) // approx 24px / 30px
      outerBorderRadius.set(4)
      innerScale.set(1)
    } else if (isHovering) {
      outerScaleX.set(2.5)
      outerScaleY.set(2.5)
      outerBorderRadius.set(50)
      innerScale.set(0)
    } else {
      outerScaleX.set(1)
      outerScaleY.set(1)
      outerBorderRadius.set(50)
      innerScale.set(1)
    }
  }, [isHovering, isTextHover, outerScaleX, outerScaleY, innerScale, outerBorderRadius])

  if (isTouch) return null

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: outerPos.x - 15,
          y: outerPos.y - 15,
          scaleX: outerScaleX,
          scaleY: outerScaleY,
          borderRadius: outerBorderRadius
        }}
        className={`fixed top-0 left-0 w-[30px] h-[30px] border-2 border-[#4F46E5]/50 pointer-events-none z-[9997] transition-colors duration-200 ${
          isHovering ? 'bg-[#4F46E5]/20 border-transparent' : 'bg-transparent'
        }`}
      />

      {/* Inner Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: innerPos.x - 3,
          y: innerPos.y - 3,
          scale: innerScale
        }}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#4F46E5] rounded-full pointer-events-none z-[9998]"
      />
    </>
  )
}
