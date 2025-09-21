"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const Dynamic3DViewer = dynamic(() => import("./3d-viewer").then((mod) => ({ default: mod.GuardianX3DViewer })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gradient-to-br from-muted/10 to-muted/30 rounded-2xl overflow-hidden border flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </div>
  ),
})

export function DeviceShowcaseSection() {
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
            <Dynamic3DViewer />

            <div className="absolute bottom-4 left-4 flex gap-2">
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
