import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 mb-8">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Coming Soon - Smart Agriculture Revolution
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Guardian-X</h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in protecting crops the smart way — for healthier plants, safer food, and a greener future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Contact Us
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Protection</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered pest detection and automated treatment scheduling
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Solar Powered</h3>
              <p className="text-sm text-muted-foreground">Sustainable technology built to last in the field</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">Reducing pesticide overuse while protecting ecosystems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
