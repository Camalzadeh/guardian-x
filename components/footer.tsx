import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Guardian-X</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Empowering Azerbaijani farmers with smart, affordable, and eco-friendly crop protection through AI,
                robotics, and sustainable technology.
              </p>
              <p className="text-sm text-primary-foreground/60">
              The startup has been selected to the International
              Acceleration Program by Startup
              School 3 Azerbaijan              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Smart Pest Detection</li>
                <li>Automated Scheduling</li>
                <li>Multi-Channel Alerts</li>
                <li>Solar-Powered Monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+994 55 386 55 84</li>
                <li>guardianx.agrar@gmail.com</li>
                <li>Azerbaijan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Guardian-X. All rights reserved. Building the future of sustainable agriculture.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
