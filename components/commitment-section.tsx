import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Leaf, Lightbulb, Users } from "lucide-react"

export function CommitmentSection() {
  return (
    <section id="mission" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Why Guardian-X?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Our Commitment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordability</h3>
                <p className="text-muted-foreground">
                  Provide farmers with cost-effective technology that is accessible to small and medium farms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Promote eco-friendly practices by reducing pesticide overuse and protecting ecosystems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Leverage AI, robotics, and smart detectors to deliver cutting-edge crop protection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Ensure simple, multilingual tools that work online or offline for every farmer.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our mission is to make advanced crop protection accessible to every farmer by combining smart technology
                with eco-friendly practices. We aim to improve food security, reduce harmful pesticide use, and support
                sustainable farming across Azerbaijan and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
