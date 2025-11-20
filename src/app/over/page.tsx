import { Container } from "@/components/layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/CTASection"
import { StatsSection } from "@/components/sections/StatsSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { CheckCircle, Award, Users, Clock, Code, Lightbulb, Target, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Over Turboot - Thijs Herman",
  description: "Leer meer over Turboot, een eenmanszaak gerund door Thijs Herman. Gespecialiseerd in webontwikkeling, software ontwikkeling en custom PC builds.",
}

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"] },
  { category: "Hardware", items: ["PC Assembly", "Troubleshooting", "Overclocking", "Water Cooling"] },
]

const values = [
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "Ik focus op het leveren van werkende oplossingen die echte waarde toevoegen aan uw bedrijf.",
  },
  {
    icon: Lightbulb,
    title: "Innovatief",
    description: "Altijd op zoek naar de beste en nieuwste technologieën om uw projecten mee te realiseren.",
  },
  {
    icon: Users,
    title: "Klantgericht",
    description: "Uw succes is mijn succes. Ik denk mee en adviseer waar nodig.",
  },
  {
    icon: Heart,
    title: "Passie",
    description: "Programmeren is niet alleen mijn werk, het is mijn passie. Dat ziet u terug in elk project.",
  },
]

export default function OverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                Over Turboot
              </h1>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hallo, ik ben <strong className="text-gray-950 dark:text-white">Thijs Herman</strong>, de persoon achter Turboot.
                Als ervaren developer en tech enthusiast help ik bedrijven met het realiseren
                van hun digitale ambities.
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Met meer dan 10 jaar ervaring in software ontwikkeling en een passie voor
                technologie, bied ik persoonlijke service en maatwerk oplossingen die perfect
                aansluiten bij uw behoeften.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-600 dark:bg-blue-600 px-8 py-4 text-base font-medium text-white transition hover:bg-blue-700 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/30"
                >
                  Laten We Kennismaken
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-transparent px-8 py-4 text-base font-medium text-gray-900 dark:text-gray-100 transition hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                >
                  Bekijk Mijn Werk
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <Code className="mx-auto h-24 w-24 mb-4" />
                    <p className="text-2xl font-bold">Turboot</p>
                    <p className="mt-2 text-blue-100">Digital Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-blue-100 dark:bg-blue-950/50 -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              Mijn Verhaal
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Al van jongs af aan ben ik gefascineerd door technologie en computers.
                Wat begon als een hobby - het bouwen van mijn eerste PC op 12-jarige leeftijd -
                groeide uit tot een carrière in software ontwikkeling.
              </p>
              <p>
                Na jaren ervaring op te doen bij verschillende bedrijven, besloot ik in 2023
                Turboot op te richten. Als eenmanszaak kan ik de flexibiliteit en persoonlijke
                aanpak bieden die grote bureaus vaak missen.
              </p>
              <p>
                Naast mijn werk aan klantprojecten, run ik ook een homelab waar ik experimenteer
                met nieuwe technologieën en mijn eigen services host. Deze hands-on ervaring
                met infrastructuur en DevOps komt van pas bij het opzetten van robuuste en
                schaalbare oplossingen voor klanten.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Expertise & Vaardigheden
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Een breed scala aan technologieën om uw project te realiseren
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                <h3 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 shrink-0" />
                      <span className="text-sm text-gray-900 dark:text-gray-100 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Mijn Waarden
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              De principes die mij drijven in elk project
            </p>
          </div>
          <FeatureGrid features={values} columns={4} />
        </Container>
      </section>

      {/* Stats Section */}
      <StatsSection
        stats={[
          { icon: Award, label: "Jaar Ervaring", value: "10+" },
          { icon: Users, label: "Tevreden Klanten", value: "30+" },
          { icon: Code, label: "Regels Code", value: "500K+" },
          { icon: Clock, label: "Uren Geïnvesteerd", value: "15K+" },
        ]}
        variant="dark"
      />

      <CTASection
        title="Laten we samen iets moois bouwen"
        description="Bent u op zoek naar een betrouwbare partner voor uw digitale project? Ik help u graag verder."
        variant="secondary"
      />
    </>
  )
}