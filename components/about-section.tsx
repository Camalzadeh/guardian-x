import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Guardian-X: Complete Crop Protection System
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              An affordable, multilingual, and eco-friendly remote pest monitoring and crop protection system that
              combines smart detectors, AI-powered pest recognition, real-time alerts, and automated pesticide
              scheduling.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Pest Detection & Identification</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modular, solar-powered detectors at varying altitudes</li>
                  <li>• 24/7 real-time monitoring using Raspberry Pi cameras</li>
                  <li>• AI detects aphids, codling moths, and beetles</li>
                  <li>• Local pesticide recommendations based on severity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Multi-Channel Alerts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• App-based data visualization and pest tracking</li>
                  <li>• SMS via Bakcell, Nar, and Azercell</li>
                  <li>• Example: "Detector #2 found 25% aphid infestation. Treat with Confidor Extra."</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Automated Treatment Scheduling</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Localized treatment calendars for each crop type</li>
                  <li>• Example: March 10 – Apply dormant oil; May 15 – Spray copper fungicide</li>
                  <li>• Push/SMS reminders with treatment confirmation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    The system uses modular detectors equipped with <strong>Raspberry Pi Zero 2 W</strong> and
                    high-resolution wide-lens cameras installed at multiple heights and directions throughout the field.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Powered by solar panels, they work autonomously day and night. Captured images are analyzed using
                    onboard AI models to detect pest presence and severity.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border">
                  <h4 className="font-semibold mb-3">Instant Farmer Alerts Include:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Suggested treatment</li>
                    <li>✓ Pesticide quantity</li>
                    <li>✓ Optimal timing</li>
                    <li>✓ Crop lifecycle adaptation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
