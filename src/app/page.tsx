import { Hero } from "@/components/sections/Hero"
import { CTASection } from "@/components/sections/CTASection"
import { Container } from "@/components/layout/Container"
import { SERVICES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Code, Cpu, CheckCircle } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Globe,
  Code,
  Cpu,
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Onze Diensten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Van webontwikkeling tot hardware oplossingen, wij hebben de expertise
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/diensten#${service.id}`}
                      className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Meer informatie →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Turboot Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Waarom Kiezen voor Turboot?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Als eenmanszaak bied ik persoonlijke aandacht, flexibiliteit en
                directe communicatie voor elk project.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Persoonlijke Aanpak</h3>
                    <p className="text-sm text-gray-600">
                      Direct contact, geen tussenpersonen. Uw project krijgt mijn volledige aandacht.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Flexibele Oplossingen</h3>
                    <p className="text-sm text-gray-600">
                      Maatwerk zonder de overhead van grote bureaus. Snel schakelen bij veranderingen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Transparante Prijzen</h3>
                    <p className="text-sm text-gray-600">
                      Eerlijke tarieven zonder verborgen kosten. U weet precies waar u aan toe bent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <Code className="mx-auto h-16 w-16 mb-4" />
                    <p className="text-xl font-semibold">10+ Jaar Ervaring</p>
                    <p className="mt-2 text-sm">in Software Ontwikkeling</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-xl bg-blue-100 -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}