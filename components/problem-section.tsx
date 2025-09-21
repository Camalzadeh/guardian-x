import { Card, CardContent } from "@/components/ui/card"

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">The Challenge We're Solving</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Plant health directly impacts food security and farmer livelihoods across Azerbaijan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-destructive mb-4">40%</div>
              <h3 className="text-xl font-semibold mb-3">Global Crop Loss</h3>
              <p className="text-muted-foreground">
                Plant pests and diseases destroy nearly 40% of global crops annually according to FAO
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-destructive mb-4">$290B</div>
              <h3 className="text-xl font-semibold mb-3">Economic Losses</h3>
              <p className="text-muted-foreground">
                Annual economic losses from pest damage exceed $290 billion globally
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-destructive mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-3">Manual Methods</h3>
              <p className="text-muted-foreground">
                Azerbaijani farmers still rely on traditional manual inspections and calendar spraying
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold mb-6">Current Problems</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-destructive">Pesticide Misuse</h4>
              <p className="text-muted-foreground mb-4">
                Improper pesticide use leads to water and soil contamination, plant intoxication, and insect resistance
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-destructive">Wrong Treatment</h4>
              <p className="text-muted-foreground mb-4">
                Wrong pesticide, timing, or dosage wastes time and money while reducing yields
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-destructive">Expensive Solutions</h4>
              <p className="text-muted-foreground mb-4">
                Advanced pest detection systems are expensive, complex, and often English-only
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-destructive">Limited Access</h4>
              <p className="text-muted-foreground mb-4">
                Language barriers and complexity make modern agri-tech inaccessible to local farmers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
