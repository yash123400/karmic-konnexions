"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

interface MarkerData {
  lat: number;
  lng: number;
  label: string;
}

const locations: MarkerData[] = [
  { lat: 19.076, lng: 72.8777, label: "Mumbai" },
  { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: -26.2041, lng: 28.0473, label: "Johannesburg" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: -33.8688, lng: 151.2093, label: "Sydney" },
];

function latLngToXYZ(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Marker({ position, phase }: { position: THREE.Vector3; phase: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + 0.6 * Math.sin(clock.getElapsedTime() * 2 + phase);
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.025, 16, 16]} />
      <meshBasicMaterial color="#F97316" />
    </mesh>
  );
}

function Globe() {
  const earthRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  const markerPositions = useMemo(
    () => locations.map((loc) => latLngToXYZ(loc.lat, loc.lng, 1.01)),
    []
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color="#1a1a3e"
          emissive="#4F46E5"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[1.002, 64, 64]} />
        <meshBasicMaterial
          color="#4F46E5"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>

      {/* Location markers */}
      {markerPositions.map((pos, i) => (
        <Marker key={i} position={pos} phase={i * 0.8} />
      ))}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
        </div>
      }
    >
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </Suspense>
  );
}
