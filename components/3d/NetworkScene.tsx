"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, Line, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function IntelligenceNodes() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Create a complex field of intelligence "data points"
  const count = 250
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    const szs = new Float32Array(count)
    
    const colorIndigo = new THREE.Color('#6366F1')
    const colorAmber = new THREE.Color('#F59E0B')
    const colorWhite = new THREE.Color('#FFFFFF')
    
    for (let i = 0; i < count; i++) {
      // Distribute in a wide, flat-ish field for depth-of-field effect
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
      
      const rand = Math.random()
      const color = rand > 0.9 ? colorAmber : rand > 0.6 ? colorWhite : colorIndigo
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
      
      szs[i] = Math.random() * 0.12 + 0.02
    }
    return [pos, cols, szs]
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
      groupRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Points positions={positions} colors={colors} sizes={sizes} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

function ConnectivityField() {
  const linesRef = useRef<THREE.Group>(null)
  
  // 12 primary "hub" nodes that are interconnected
  const hubs = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      pos: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8] as [number, number, number],
      color: Math.random() > 0.8 ? '#F59E0B' : '#6366F1'
    }))
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={linesRef}>
      {hubs.map((hub, i) => (
        <group key={i}>
          {/* Hub Glow */}
          <mesh position={hub.pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={hub.color} />
          </mesh>
          <mesh position={hub.pos}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshBasicMaterial color={hub.color} transparent opacity={0.15} />
          </mesh>
          
          {/* Connections (only to near neighbors for cleaner look) */}
          {hubs.slice(i + 1).map((target, j) => {
            const dist = new THREE.Vector3(...hub.pos).distanceTo(new THREE.Vector3(...target.pos))
            if (dist > 6) return null
            return (
              <Line
                key={j}
                points={[hub.pos, target.pos]}
                color="#6366F1"
                lineWidth={0.5}
                transparent
                opacity={0.1 * (1 - dist/6)}
              />
            )
          })}
        </group>
      ))}
    </group>
  )
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F59E0B" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <IntelligenceNodes />
          <ConnectivityField />
          
          {/* Distant "Atmosphere" particles */}
          <Points 
            positions={new Float32Array(Array.from({ length: 600 }).map(() => (Math.random() - 0.5) * 40))} 
            stride={3}
          >
            <PointMaterial
              transparent
              color="#6366F1"
              size={0.02}
              sizeAttenuation={true}
              depthWrite={false}
              opacity={0.15}
            />
          </Points>
        </Float>
      </Canvas>
      
      {/* Cinematic vignette and lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_50%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(245,158,11,0.03)_0%,transparent_50%)]" />
    </div>
  )
}
