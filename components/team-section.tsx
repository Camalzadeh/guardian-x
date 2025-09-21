import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Farida Orucova",
      role: "Leader, Frontend Developer",
      specialty: "UI/UX Design & Web Development",
    },
    {
      name: "Humbat Jamalov",
      role: "Robotics Engineer, Mobile Developer",
      specialty: "Hardware Design & Mobile App Development",
    },
    {
      name: "Ismayil Yusifli",
      role: "Backend Developer",
      specialty: "Server Architecture & APIs",
    },
    {
      name: "Huseyn Pashayev",
      role: "AI and ML Engineer",
      specialty: "Computer Vision & Pest Detection",
    },
    {
      name: "Azerin Salahova",
      role: "Data Scientist",
      specialty: "Agricultural Data Analysis",
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A dedicated team of engineers and scientists from Khachmaz, bringing firsthand agricultural experience to
            innovative technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-muted-foreground text-sm">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Growing up in the farming communities of Khachmaz has given our team firsthand experience with agricultural
            hardships."
          </p>
        </div>
      </div>
    </section>
  )
}
