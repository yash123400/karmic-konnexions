"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Html } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

// Convert lat/lng to 3D sphere position (radius 2)
function latLngTo3D(lat: number, lng: number, r = 2.02): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ]
}

// 8 city markers — Karmic's real global presence regions
const CITIES = [
  { name: 'Gurgaon', lat: 28.4595, lng: 77.0266, label: 'HQ — India' },
  { name: 'Mumbai', lat: 19.076, lng: 72.877, label: 'India Operations' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, label: 'Middle East' },
  { name: 'London', lat: 51.5074, lng: -0.1278, label: 'United Kingdom' },
  { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, label: 'South Africa' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, label: 'Southeast Asia' },
  { name: 'Nairobi', lat: -1.2921, lng: 36.8219, label: 'East Africa' },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, label: 'North America' },
]

function CityMarker({ lat, lng, name, label }: typeof CITIES[0]) {
  const [hovered, setHovered] = useState(false)
  const pos = latLngTo3D(lat, lng)

  return (
    <group position={pos}>
      {/* Pulsing dot */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={hovered ? '#F97316' : '#4F46E5'} />
      </mesh>
      {/* Outer pulse ring */}
      <mesh>
        <ringGeometry args={[0.05, 0.08, 16]} />
        <meshBasicMaterial color="#4F46E5" opacity={0.4} transparent side={THREE.DoubleSide} />
      </mesh>
      {/* Tooltip on hover */}
      {hovered && (
        <Html distanceFactor={8} center>
          <div className="bg-white rounded-lg px-3 py-1.5 shadow-lg text-xs font-medium text-gray-800 whitespace-nowrap pointer-events-none">
            <div className="font-bold text-[#4F46E5]">{name}</div>
            <div className="text-gray-500">{label}</div>
          </div>
        </Html>
      )}
    </group>
  )
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.08
  })

  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1e1b4b"
          roughness={0.8}
          metalness={0.1}
          wireframe={false}
        />
      </Sphere>
      {/* Wireframe overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial color="#4F46E5" wireframe opacity={0.08} transparent />
      </Sphere>
      {/* City markers */}
      {CITIES.map((city) => (
        <CityMarker key={city.name} {...city} />
      ))}
    </group>
  )
}

interface GlobeSceneProps {
  size?: number // px, default 480
  interactive?: boolean // enables OrbitControls, default true
}

export default function GlobeScene({ size = 480, interactive = true }: GlobeSceneProps) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        frameloop="always"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} color="#6366f1" />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#F97316" />
        <Globe />
        {interactive && <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />}
      </Canvas>
    </div>
  )
}
