"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, Line } from '@react-three/drei'
import * as THREE from 'three'

function NetworkPoints() {
  const pointsRef = useRef<THREE.Points>(null)
  
  // Create random points in a sphere-like cluster
  const count = 120
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 0.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4F46E5"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function Connections() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Define 8 main nodes (representing global offices)
  const nodes = useMemo(() => [
    [2, 0, 0], [-2, 0, 0], [0, 2, 0], [0, -2, 0],
    [1.4, 1.4, 1.4], [-1.4, -1.4, -1.4], [1.4, -1.4, 1.4], [-1.4, 1.4, -1.4]
  ] as [number, number, number][], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          {/* Node Point */}
          <mesh position={node}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>
          {/* Connections to other nodes */}
          {nodes.slice(i + 1).map((target, j) => (
            <Line
              key={j}
              points={[node, target]}
              color="#4F46E5"
              lineWidth={0.5}
              transparent
              opacity={0.2}
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
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4F46E5" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NetworkPoints />
          <Connections />
          
          {/* Core glow */}
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshBasicMaterial 
              color="#4F46E5" 
              transparent 
              opacity={0.05} 
              wireframe
            />
          </mesh>
        </Float>
      </Canvas>
      
      {/* Visual background enhancement */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.08)_0%,transparent_70%)]" />
    </div>
  )
}
