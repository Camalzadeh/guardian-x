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

export function DeviceShowcaseSection() {
  const [isRotating, setIsRotating] = useState(true)
  const [showScadCode, setShowScadCode] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Guardian-X Detector Hardware</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our solar-powered, AI-enabled crop protection device designed for 24/7 field monitoring and
            automated pest detection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Viewer */}
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

            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-sm border hover:bg-background transition-colors"
              >
                {isRotating ? "Pause" : "Rotate"}
              </button>
              <button
                onClick={() => setShowScadCode(!showScadCode)}
                className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-sm border hover:bg-background transition-colors"
              >
                {showScadCode ? "Hide SCAD" : "View SCAD"}
              </button>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-6">
            {showScadCode ? (
              <div className="bg-muted/20 rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">OpenSCAD Model</h3>
                  <a href="/guardian_x_detector.scad" download className="text-sm text-primary hover:underline">
                    Download SCAD File
                  </a>
                </div>
                <div className="bg-background rounded border p-4 max-h-96 overflow-y-auto">
                  <iframe
                    src="/guardian_x_detector.scad"
                    className="w-full h-80 border-0"
                    title="Guardian-X Detector SCAD Code"
                  />
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium">Processor</span>
                      <span className="text-muted-foreground">Raspberry Pi Zero 2 W</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium">Camera</span>
                      <span className="text-muted-foreground">Module 3 Wide (12MP)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium">Power Source</span>
                      <span className="text-muted-foreground">Solar Panel + Battery</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium">Connectivity</span>
                      <span className="text-muted-foreground">Wi-Fi, Cellular (optional)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium">Weather Rating</span>
                      <span className="text-muted-foreground">IP65 (Dust & Water Resistant)</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Operating Temp</span>
                      <span className="text-muted-foreground">-20°C to +60°C</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>24/7 autonomous field monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>AI-powered pest identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Solar-powered with backup battery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Real-time alerts via SMS and app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Weather-resistant enclosure</span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
