import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us to learn more about Guardian-X and how we can help protect your crops.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action="https://formsubmit.co/guardianx.agrar@gmail.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://guardian-x.vercel.app" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ad (First Name)</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyad (Last Name)</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (Phone)</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Şirkət/Təsərrüfat (Company/Farm)</Label>
                    <Input id="company" name="company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Sual/Mesaj (Question/Message)</Label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Mesaj Göndər (Send Message)
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Call us directly</p>
                  <a href="tel:+994553865584" className="text-primary hover:text-primary/80 font-medium">
                    +994 55 386 55 84
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Send us a message</p>
                  <a
                    href="mailto:guardianx.agrar@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium break-all"
                  >
                    guardianx.agrar@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Based in</p>
                  <p className="text-primary font-medium">Azerbaijan</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join the Agricultural Revolution</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Be part of the future of farming. Contact us today to learn how Guardian-X can help protect your crops
                  and increase your yields sustainably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="#contact">Schedule a Demo</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/guardian-x-brochure.pdf" download="Guardian-X-Brochure.pdf">
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
