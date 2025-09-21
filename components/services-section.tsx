import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Smartphone, Calendar, Sun } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Comprehensive Smart Crop Protection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by the sun, built to last in the field. Guardian-X delivers sustainable technology farmers can
              trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Pest Detection & Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solar-powered detectors with cameras monitor crops day and night. Built-in AI identifies pests such as
                  aphids, moths, and beetles, and instantly provides farmers with local treatment recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Multi-Channel Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time notifications are sent through a mobile app and SMS via local carriers. Farmers can easily
                  track pest activity and receive clear, timely instructions on what action to take.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Automated Treatment Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Crop-specific calendars provide the right pesticide, dosage, and timing. Farmers get reminders by app
                  and SMS, ensuring treatments are applied safely, efficiently, and on schedule.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Sun className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">Solar-Powered Technology</h3>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our sustainable approach ensures reliable operation in remote agricultural areas while minimizing
                  environmental impact and operational costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
