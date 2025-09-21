"use client"

import dynamic from "next/dynamic"
import { Suspense, useState } from "react"
import Image from "next/image"

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })), { ssr: false })
const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })), {
  ssr: false,
})
const Environment = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Environment })), {
  ssr: false,
})
const Html = dynamic(() => import("@react-three/drei").then((mod) => ({ default: mod.Html })), { ssr: false })

// Guardian-X Detector 3D Model Component
function GuardianXDetector() {
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

function ThreeDViewer({ isRotating, setIsRotating }: { isRotating: boolean; setIsRotating: (value: boolean) => void }) {
  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-muted/10 to-muted/30 rounded-2xl overflow-hidden border">
      <Canvas
        camera={{ position: [15, 10, 15], fov: 50 }}
        style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}
      >
        <Suspense fallback={null}>
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
  )
}

export function DeviceShowcaseSection() {
  const [isRotating, setIsRotating] = useState(true)
  const [is3DLoaded, setIs3DLoaded] = useState(false)

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
            {typeof window !== "undefined" ? (
              <>
                <ThreeDViewer isRotating={isRotating} setIsRotating={setIsRotating} />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-sm border hover:bg-background transition-colors"
                  >
                    {isRotating ? "Pause" : "Rotate"}
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full h-[500px] bg-gradient-to-br from-muted/10 to-muted/30 rounded-2xl overflow-hidden border flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
                </div>
              </div>
            )}
          </div>

          {/* Technical Specifications */}
          <div className="space-y-6">
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
          </div>
        </div>

        {/* Core Hardware Components */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-balance mb-4">Core Hardware Components</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Built with industry-standard components for reliability and performance in agricultural environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Controller Section */}
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Controller</h4>
                <p className="text-2xl font-bold text-primary mb-1">Raspberry Pi Zero 2W</p>
                <p className="text-sm text-muted-foreground">Your tiny, tiny $15 computer</p>
              </div>

              <div className="relative mb-6 bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-6">
                <Image
                  src="/images/raspberry-pi-zero-2w.jpg"
                  alt="Raspberry Pi Zero 2W"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Processor</span>
                  <span className="text-sm text-muted-foreground">Quad-core ARM Cortex-A53</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">RAM</span>
                  <span className="text-sm text-muted-foreground">512MB LPDDR2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Connectivity</span>
                  <span className="text-sm text-muted-foreground">Wi-Fi 802.11n, Bluetooth 4.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Power</span>
                  <span className="text-sm text-muted-foreground">Ultra-low power consumption</span>
                </div>
              </div>
            </div>

            {/* Camera Section */}
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Camera</h4>
                <p className="text-2xl font-bold text-primary mb-1">Raspberry Pi Camera Module 3</p>
                <p className="text-sm text-muted-foreground">Wide-angle lens with 12MP resolution (15MP capable)</p>
              </div>

              <div className="relative mb-6 bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-6">
                <Image
                  src="/images/raspberry-pi-camera-modules.jpg"
                  alt="Raspberry Pi Camera Module 3 variants"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Resolution</span>
                  <span className="text-sm text-muted-foreground">12MP (4608×2592)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Lens Type</span>
                  <span className="text-sm text-muted-foreground">Wide-angle for field coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Features</span>
                  <span className="text-sm text-muted-foreground">Autofocus, HDR support</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Night Vision</span>
                  <span className="text-sm text-muted-foreground">Low-light performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
