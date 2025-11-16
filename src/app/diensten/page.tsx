import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/CTASection"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { PageHeader } from "@/components/sections/PageHeader"
import { SERVICES } from "@/lib/constants"
import { Globe, Code, Cpu, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diensten - Turboot",
  description: "Ontdek onze diensten: webontwikkeling, software ontwikkeling en custom PC builds. Professionele digitale oplossingen op maat.",
}

const iconMap = {
  Globe,
  Code,
  Cpu,
}

const extendedFeatures = {
  "web-development": [
    "Responsive design voor alle apparaten",
    "SEO optimalisatie voor betere vindbaarheid",
    "Snelle laadtijden en optimale performance",
    "Content Management Systeem (CMS)",
    "E-commerce oplossingen",
    "Progressive Web Apps (PWA)",
    "API integraties",
    "Website onderhoud en support",
  ],
  "software-development": [
    "Desktop applicaties voor Windows, Mac en Linux",
    "REST API en GraphQL ontwikkeling",
    "Database ontwerp en optimalisatie",
    "Proces automatisering",
    "Cloud applicaties",
    "Microservices architectuur",
    "Legacy systeem modernisering",
    "Continue integratie en deployment (CI/CD)",
  ],
  "pc-builds": [
    "High-end gaming PCs",
    "Professionele werkstations",
    "Video editing en rendering systems",
    "Silent office computers",
    "Hardware advies en consultancy",
    "Component selectie op budget",
    "Assemblage en cable management",
    "OS installatie en configuratie",
  ],
}

export default function DienstenPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Onze Diensten"
        description="Van concept tot realisatie, wij bieden complete digitale oplossingen voor uw bedrijf. Ontdek hoe wij u kunnen helpen groeien."
      />

      {/* Services Detail Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0
              const features = extendedFeatures[service.id as keyof typeof extendedFeatures]

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20"
                >
                  <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    <div className={isEven ? "" : "lg:col-start-2"}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            Vraag Offerte Aan
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className={`relative ${isEven ? "" : "lg:col-start-1"}`}>
                      <Card className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="h-24 w-24 text-white/20" />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">
                            {service.id === "web-development" && "Modern & Responsive"}
                            {service.id === "software-development" && "Op Maat Gemaakt"}
                            {service.id === "pc-builds" && "Premium Hardware"}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {service.id === "web-development" &&
                              "Wij bouwen websites die er niet alleen geweldig uitzien, maar ook perfect functioneren op elk apparaat."}
                            {service.id === "software-development" &&
                              "Elke business is uniek. Daarom ontwikkelen wij software die perfect aansluit bij uw specifieke behoeften."}
                            {service.id === "pc-builds" &&
                              "Van gaming tot professionele workstations, wij selecteren en assembleren de beste componenten voor uw budget."}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <ProcessSteps
        steps={[
          { step: "1", title: "Kennismaking", description: "We bespreken uw wensen en requirements" },
          { step: "2", title: "Offerte", description: "Transparante prijsopgave zonder verborgen kosten" },
          { step: "3", title: "Ontwikkeling", description: "Regelmatige updates over de voortgang" },
          { step: "4", title: "Oplevering", description: "Testing, feedback en nazorg" },
        ]}
      />

      <CTASection />
    </>
  )
}