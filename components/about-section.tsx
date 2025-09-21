import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              About Guardian-X
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Empowering Azerbaijani Farmers with Smart Technology
            </h2>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Guardian-X empowers Azerbaijani farmers with smart, affordable, and eco-friendly crop protection. Our
                team blends AI, robotics, and agriculture expertise to deliver practical solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The startup has been selected to the International Acceleration Program by Startup School 3 Azerbaijan,
                proving its innovation and global potential.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <h3 className="text-xl font-semibold mb-3">Smart Detection</h3>
                <p className="text-muted-foreground">
                  Solar-powered detectors with cameras monitor crops day and night, using built-in AI to identify pests
                  and provide treatment recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
                <p className="text-muted-foreground">
                  Crop-specific calendars provide the right pesticide, dosage, and timing. Farmers get reminders by app
                  and SMS for safe, efficient treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
