"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import type { Mesh } from "three"

// Guardian-X Detector 3D Model Component
function GuardianXDetector() {
  const meshRef = useRef<Mesh>(null)

  return (
    <group>
      {/* Main Enclosure Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[11, 7, 4.5]} />
        <meshStandardMaterial color="#2d5016" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Camera Face Plate */}
      <mesh position={[0, 3.8, 1]}>
        <boxGeometry args={[3, 0.5, 3]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.2} />
      </mesh>

      {/* Camera Lens */}
      <mesh position={[0, 4.1, 1]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Solar Panel */}
      <mesh position={[0, 0, 3]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[11, 7, 0.3]} />
        <meshStandardMaterial color="#1a237e" roughness={0.1} metalness={0.3} />
      </mesh>

      {/* Solar Panel Grid Lines */}
      <group position={[0, 0, 3.2]} rotation={[-0.3, 0, 0]}>
        {Array.from({ length: 4 }, (_, i) => (
          <mesh key={`h-${i}`} position={[-4 + i * 2.5, 0, 0]}>
            <boxGeometry args={[0.05, 7, 0.05]} />
            <meshStandardMaterial color="#0d47a1" />
          </mesh>
        ))}
        {Array.from({ length: 3 }, (_, i) => (
          <mesh key={`v-${i}`} position={[0, -2.5 + i * 2.5, 0]}>
            <boxGeometry args={[11, 0.05, 0.05]} />
            <meshStandardMaterial color="#0d47a1" />
          </mesh>
        ))}
      </group>

      {/* Mounting Brackets */}
      <mesh position={[-6, 0, 1]}>
        <boxGeometry args={[1, 3, 3]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.4} />
      </mesh>
      <mesh position={[6, 0, 1]}>
        <boxGeometry args={[1, 3, 3]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.4} />
      </mesh>

      {/* Status LED */}
      <mesh position={[4, 3.5, 2]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#00ff00" emissive="#004400" />
      </mesh>
    </group>
  )
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

export function GuardianX3DViewer() {
  const [isRotating, setIsRotating] = useState(true)

  return (
    <div className="relative">
      <div className="w-full h-[500px] bg-gradient-to-br from-muted/10 to-muted/30 rounded-2xl overflow-hidden border">
        <Canvas
          camera={{ position: [15, 10, 15], fov: 50 }}
          style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.3} />

            <GuardianXDetector />

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              autoRotate={isRotating}
              autoRotateSpeed={2}
              minDistance={10}
              maxDistance={30}
            />

            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-sm border hover:bg-background transition-colors"
        >
          {isRotating ? "Pause" : "Rotate"}
        </button>
      </div>
    </div>
  )
}
