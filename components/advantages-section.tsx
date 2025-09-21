import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">Why Guardian-X is Unique</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The first system to combine AI, solar power, and SMS for Azerbaijan's agriculture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-primary">Key Advantages</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🌍</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Multilingual Support</h4>
                  <p className="text-muted-foreground">
                    Available in Azerbaijani, Russian, and English interfaces for maximum accessibility
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">📱</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Offline Ready</h4>
                  <p className="text-muted-foreground">
                    No internet needed—SMS notifications sent via cellular network (Bakcell, Nar, Azercell)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">☀️</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Eco-Friendly</h4>
                  <p className="text-muted-foreground">Fully solar-powered, reducing operational cost and emissions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">📱</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cross-Platform App</h4>
                  <p className="text-muted-foreground">Available on Android, iOS, Desktop, and Tablets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-4">10x</div>
                <h3 className="text-xl font-semibold mb-3">More Affordable</h3>
                <p className="text-muted-foreground">10x cheaper than foreign pest detection systems</p>
                <Badge className="mt-3">Cost Effective</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-4">#1</div>
                <h3 className="text-xl font-semibold mb-3">First in Azerbaijan</h3>
                <p className="text-muted-foreground">
                  1st system to combine AI, solar, and SMS for Azerbaijan's agriculture
                </p>
                <Badge variant="secondary" className="mt-3">
                  Innovation Leader
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Localized Treatment</h3>
                <p className="text-muted-foreground">Pesticide plans tailored to regional product availability</p>
                <Badge className="mt-3">Customized</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <blockquote className="text-2xl font-semibold text-primary mb-4">
            "Guardian-X: Empowering Azerbaijani Farmers with Smart, Sustainable, and Simple Crop Protection."
          </blockquote>
          <p className="text-muted-foreground">Our mission statement</p>
        </div>
      </div>
    </section>
  )
}
