"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, Line } from '@react-three/drei'
import * as THREE from 'three'

function NetworkPoints() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const count = 150
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    const szs = new Float32Array(count)
    
    const colorIndigo = new THREE.Color('#4F46E5')
    const colorAmber = new THREE.Color('#F59E0B')
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + Math.random() * 0.8
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      
      // Mix colors: 80% Indigo, 20% Amber
      const color = Math.random() > 0.8 ? colorAmber : colorIndigo
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
      
      szs[i] = Math.random() * 0.15 + 0.05
    }
    return [pos, cols, szs]
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} sizes={sizes} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  )
}

function Connections() {
  const groupRef = useRef<THREE.Group>(null)
  
  const nodes = useMemo(() => [
    { pos: [2, 0.5, 0], color: '#F59E0B', size: 0.12 },
    { pos: [-1.8, -1, 1], color: '#4F46E5', size: 0.1 },
    { pos: [0.5, 2.2, -1], color: '#4F46E5', size: 0.08 },
    { pos: [-0.5, -2, -1.5], color: '#F59E0B', size: 0.09 },
    { pos: [1.5, -1.5, 1.5], color: '#4F46E5', size: 0.11 },
    { pos: [-1.5, 1.5, -0.5], color: '#4F46E5', size: 0.1 },
  ] as { pos: [number, number, number], color: string, size: number }[], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          <mesh position={node.pos}>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial 
              color={node.color} 
              emissive={node.color}
              emissiveIntensity={2}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {nodes.slice(i + 1).map((target, j) => (
            <Line
              key={j}
              points={[node.pos, target.pos]}
              color="#4F46E5"
              lineWidth={0.8}
              transparent
              opacity={0.15}
            />
          ))}
        </group>
      ))}
    </group>
  )
}

export default function NetworkScene() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#4F46E5" />
        <pointLight position={[-10, -10, 5]} intensity={1} color="#F59E0B" />
        
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <NetworkPoints />
          <Connections />
          
          {/* Internal core sphere for volume */}
          <mesh>
            <sphereGeometry args={[1.8, 32, 32]} />
            <meshPhongMaterial 
              color="#4F46E5" 
              transparent 
              opacity={0.03} 
              shininess={100}
            />
          </mesh>
        </Float>
      </Canvas>
      
      {/* Visual background enhancement: Multi-stop gradient for better mixing */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12)_0%,rgba(245,158,11,0.02)_40%,transparent_70%)]" />
    </div>
  )
}
