import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">Project Progress & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real-world testing and continuous development with Azerbaijani farmers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Current Development Status</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">Active Development</h4>
                  <p className="text-muted-foreground">
                    Guardian-X system is currently in active development with full team focus
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">Real-World Testing</h4>
                  <p className="text-muted-foreground">
                    Manual evaluation in rural areas of Khachmaz under actual field conditions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">Farmer Feedback Integration</h4>
                  <p className="text-muted-foreground">
                    Continuous refinement based on real feedback and environment-specific challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Development Priorities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">AI</Badge>
                  <span>Perfecting AI-based pest detection accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">SMS</Badge>
                  <span>Robust SMS communication via local mobile networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">UX</Badge>
                  <span>Optimizing usability for farmers with limited technical background</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">AI in Agriculture Bootcamp</h3>
              <p className="text-muted-foreground">
                Participated in Zangilan, connecting with experts and testing in new regions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Agricultural Seminars</h3>
              <p className="text-muted-foreground">
                Introduced Guardian-X at seminars and pilot sites, receiving valuable farmer feedback
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Strong Validation</h3>
              <p className="text-muted-foreground">
                Consistently positive reactions from the farming community through field trials
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
