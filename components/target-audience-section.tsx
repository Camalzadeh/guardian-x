import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Landmark, Shield } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: Users,
      title: "Small and Medium-sized Farmers",
      description:
        "Individual farmers managing crops across Azerbaijan who need affordable, smart technology solutions.",
    },
    {
      icon: Building2,
      title: "Orchard and Greenhouse Owners",
      description: "Specialized agricultural operations requiring precise pest detection and treatment scheduling.",
    },
    {
      icon: Landmark,
      title: "Agricultural Cooperatives",
      description: "Research institutions and cooperative organizations focused on advancing agricultural practices.",
    },
    {
      icon: Shield,
      title: "Government Agricultural Agencies",
      description: "Support agencies working to improve food security and sustainable farming practices.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Target Audience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Who We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our primary audience includes farmers and agricultural professionals who often lack access to advanced
              agri-tech due to language barriers, affordability, or complexity. Guardian-X addresses this gap with a
              localized, simple, and smart ecosystem tailored to their needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon
              return (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-balance">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
