import { Container } from "@/components/layout/Container"
import { CTASection } from "@/components/sections/CTASection"
import { StatsSection } from "@/components/sections/StatsSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import {
  CheckCircle,
  Award,
  Users,
  Code,
  Lightbulb,
  Target,
  Heart,
  Server,
  Activity,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { SOCIAL_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Over Turboot - Thijs Herman",
  description:
    "Leer meer over Turboot, een eenmanszaak gerund door Thijs Herman. Gespecialiseerd in webontwikkeling, software ontwikkeling en custom PC builds.",
}

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS"] },
  { category: "Backend", items: ["Node.js", "Java", "PostgreSQL", "Go", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD"] },
  {
    category: "Hardware",
    items: ["PC Assembly", "Troubleshooting", "Overclocking"],
  },
]

const values = [
  {
    icon: Target,
    title: "Resultaatgericht",
    description:
      "Ik focus op het leveren van werkende oplossingen die echte waarde toevoegen aan uw bedrijf.",
  },
  {
    icon: Lightbulb,
    title: "Innovatief",
    description:
      "Altijd op zoek naar de beste en nieuwste technologieën om uw projecten mee te realiseren.",
  },
  {
    icon: Users,
    title: "Klantgericht",
    description: "Uw succes is mijn succes. Ik denk mee en adviseer waar nodig.",
  },
  {
    icon: Heart,
    title: "Passie",
    description:
      "Programmeren is niet alleen mijn werk, het is mijn passie. Dat ziet u terug in elk project.",
  },
]

export default function OverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-white py-16 md:py-24 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
                Over Turboot
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Hallo, ik ben{" "}
                <strong className="text-gray-950 dark:text-white">Thijs Herman</strong>, de persoon
                achter Turboot. Als ervaren developer en tech enthusiast help ik bedrijven met het
                realiseren van hun digitale ambities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Met ervaring in software ontwikkeling en een passie voor technologie, bied ik
                persoonlijke service en maatwerk oplossingen die perfect aansluiten bij uw
                behoeften.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Laten We Kennismaken
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border-2 border-gray-300 bg-transparent px-8 py-4 text-base font-medium text-gray-900 transition hover:border-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-blue-500 dark:hover:bg-blue-950/30"
                >
                  Bekijk Mijn Werk
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-2xl dark:from-blue-500 dark:to-indigo-500">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <Code className="mx-auto mb-4 h-24 w-24" />
                    <p className="text-2xl font-bold">Turboot</p>
                    <p className="mt-2 text-blue-100">Digital Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl bg-blue-100 dark:bg-blue-950/50" />
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-24 dark:bg-gray-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Mijn Verhaal
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Op vroege leeftijd was ik al zeer geïnteresseerd in computers. Het begon met gamen,
                wat al snel uitgroeide tot een passie voor techniek: van het zelf bouwen van
                PC&apos;s tot het opzetten en beheren van mijn eigen servers. Hier leerde ik werken
                met virtuele machines (VM&apos;s) en containers, wat de basis legde voor mijn
                technische kennis.
              </p>
              <p>
                Vanuit die infrastructuur-achtergrond verbreedde mijn interesse zich naar
                programmeren. Ik begon met het bouwen van mijn eigen applicaties en ontdekte de
                kracht van software ontwikkeling. Deze combinatie van systeemkennis en
                programmeervaardigheden stelt mij in staat om complete, robuuste oplossingen te
                bouwen.
              </p>
              <p>
                Inmiddels zet ik deze ervaring in om klanten te helpen met websites, software en
                technische vraagstukken. Voor een volledig overzicht van mijn professionele ervaring
                en vaardigheden kunt u ook terecht op mijn{" "}
                <Link
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  LinkedIn-profiel
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Expertise & Vaardigheden
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Een breed scala aan technologieën om uw project te realiseren
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600 dark:text-green-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-24 dark:bg-gray-950">
        <Container>
          <div className="mb-12 text-center">
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
          { icon: Code, label: "Projecten Afgerond", value: "15+" },
          { icon: Server, label: "Active Containers", value: "25+" },
          { icon: Award, label: "Tech Stack", value: "Modern" },
          { icon: Activity, label: "Uptime", value: "99.9%" },
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
