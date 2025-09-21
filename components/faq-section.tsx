import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How much crop loss do pests cause, and why is Guardian-X necessary?",
      answer:
        "According to the Food and Agriculture Organization, pests and diseases destroy nearly 40% of crops worldwide every year, causing over $290 billion in losses. In Azerbaijan, farmers usually depend on manual inspection or fixed spraying schedules, which waste time, misuse pesticides, and harm soil and water. Guardian-X was created to solve this exact problem by providing accurate detection and localized treatment guidance.",
    },
    {
      question: "What makes Guardian-X different from just spraying pesticides on a schedule?",
      answer:
        "Traditional spraying is calendar-based and does not account for the actual pest situation. Guardian-X detects pests in real time and only recommends treatment when needed. This avoids overuse of chemicals, prevents resistance in insects, saves farmers' money, and ensures crops are treated with the right pesticide at the right time.",
    },
    {
      question: "How does Guardian-X detect pests in a field?",
      answer:
        "Guardian-X uses modular detectors powered by solar panels, each equipped with a Raspberry Pi Zero 2W and a 15-megapixel wide-lens camera. These detectors are installed at different heights and angles across the field to maximize coverage. The cameras capture images continuously, which are then analyzed by AI models trained to recognize pests such as aphids, codling moths, and beetles.",
    },
    {
      question: "What kind of alerts do farmers receive from Guardian-X?",
      answer:
        'Farmers receive SMS messages through Bakcell, Nar, or Azercell and app notifications. A typical alert might say: "Detector #2 found 25% aphid infestation. Treat with Confidor Extra." In addition, the system provides reminders such as: "March 10 – Apply dormant oil; May 15 – Spray copper fungicide."',
    },
    {
      question: "Can Guardian-X work without internet access?",
      answer:
        "Yes. Guardian-X does not require internet connectivity to operate. All notifications and updates are sent via SMS, which ensures that farmers in rural areas can use the system even if they do not have stable internet access.",
    },
    {
      question: "Who is Guardian-X designed for specifically?",
      answer:
        "Guardian-X is targeted at small and medium-sized Azerbaijani farmers, orchard and greenhouse owners, agricultural cooperatives, research institutions, and government agencies. These groups are most affected by pest damage and often lack access to affordable modern technologies.",
    },
    {
      question: "How is Guardian-X more affordable compared to foreign systems?",
      answer:
        "Foreign pest detection systems are often expensive, complex, and designed for large-scale industrial farming. Guardian-X is designed locally, uses solar power for energy, and relies on SMS instead of internet-based infrastructure. These factors make it up to ten times cheaper while still being effective for Azerbaijani farmers.",
    },
    {
      question: "In which languages can Guardian-X be used?",
      answer:
        "Guardian-X offers multilingual support. The application and alerts are available in Azerbaijani, Russian, and English, making it accessible to all farmers across the country regardless of their language background.",
    },
    {
      question: "What progress has been made in testing Guardian-X?",
      answer:
        "Guardian-X has been field-tested in Khachmaz, where detectors were installed and performance evaluated under real conditions. The team also presented the project at agricultural seminars and participated in the AI in Agriculture Bootcamp in Zangilan. Feedback from farmers during these tests has been used to improve AI accuracy and treatment recommendations.",
    },
    {
      question: "Why is Guardian-X important for Azerbaijan's agricultural sector?",
      answer:
        "Guardian-X is the first system in Azerbaijan to combine solar power, AI-based pest recognition, and SMS alerts. It is specifically built for the needs of local farmers and provides eco-friendly, low-cost, and multilingual pest control support. This makes it a critical innovation for boosting food security and sustainability in Azerbaijan.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Guardian-X and how our smart crop protection system works.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
