"use client"

import { useState } from "react"

export function DeviceShowcaseSection() {
  const [showScadCode, setShowScadCode] = useState(false)

  return (
    <section id="device-showcase" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Guardian-X Detector Hardware</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our solar-powered, AI-enabled crop protection device designed for 24/7 field monitoring and
            automated pest detection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Device Image/Placeholder */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-muted/10 to-muted/30 rounded-2xl overflow-hidden border flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Guardian-X Detector</h3>
                <p className="text-sm text-muted-foreground">Solar-powered AI crop protection device</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 flex gap-2">
              <a
                href="/guardian_x_detector.scad"
                download
                className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-lg text-sm border hover:bg-background transition-colors"
              >
                Download SCAD
              </a>
            </div>
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

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Hardware Components</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality components powering the Guardian-X detector system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Controller Section */}
            <div className="bg-muted/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-lg">Controller: Raspberry Pi Zero 2W</span>
              </div>
              <img
                src="/images/raspberry-pi-zero-2w.jpg"
                alt="Raspberry Pi Zero 2W"
                className="w-full rounded-lg border mb-4"
              />
              <p className="text-muted-foreground">
                Compact $15 computer powering the Guardian-X detector with efficient processing capabilities
              </p>
            </div>

            {/* Camera Section */}
            <div className="bg-muted/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-lg">Camera: Raspberry Pi with wide 12M lens (15MP)</span>
              </div>
              <img
                src="/images/raspberry-pi-camera-modules.jpg"
                alt="Raspberry Pi Camera Module 3 variants"
                className="w-full rounded-lg border mb-4"
              />
              <p className="text-muted-foreground">
                High-resolution camera modules with wide-angle lens and autofocus capabilities for precise monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
