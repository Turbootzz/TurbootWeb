import { Container } from "@/components/layout/Container"
import { CTASection } from "@/components/sections/CTASection"
import { StatsSection } from "@/components/sections/StatsSection"
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
import Image from "next/image"
import type { Metadata } from "next"
import { SOCIAL_LINKS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

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

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="border-border border-b py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal animation="slide-in-left">
              <div>
                <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
                  Over Turboot
                </h1>
                <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                  Hallo, ik ben <strong className="text-foreground">Thijs Herman</strong>, de
                  persoon achter Turboot. Als ervaren developer en tech enthusiast help ik bedrijven
                  met het realiseren van hun digitale ambities.
                </p>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  Met ervaring in software ontwikkeling en een passie voor technologie, bied ik
                  persoonlijke service en maatwerk oplossingen die perfect aansluiten bij uw
                  behoeften.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-8 py-4 text-base font-medium shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
                  >
                    Laten We Kennismaken
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-border text-foreground hover:bg-accent/50 inline-flex items-center rounded-full border-2 bg-transparent px-8 py-4 text-base font-medium transition hover:-translate-y-0.5"
                  >
                    Bekijk Mijn Werk
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={200}>
              <div className="flex justify-center">
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  <div className="border-background ring-border relative h-full w-full overflow-hidden rounded-full border-4 shadow-2xl ring-1">
                    <Image
                      src="/images/thijs.png"
                      alt="Thijs Herman - Eigenaar Turboot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="bg-primary/20 absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
                  <div className="border-primary/20 absolute -inset-4 -z-20 rounded-full border border-dashed" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="bg-card/30 py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-foreground mb-8 text-3xl font-bold tracking-tight">
                Mijn Verhaal
              </h2>
              <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                <p>
                  Op vroege leeftijd was ik al zeer geïnteresseerd in computers. Het begon met
                  gamen, wat al snel uitgroeide tot een passie voor techniek: van het zelf bouwen
                  van PC&apos;s tot het opzetten en beheren van mijn eigen servers. Hier leerde ik
                  werken met virtuele machines (VM&apos;s) en containers, wat de basis legde voor
                  mijn technische kennis.
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
                  technische vraagstukken. Voor een volledig overzicht van mijn professionele
                  ervaring en vaardigheden kunt u ook terecht op mijn{" "}
                  <Link
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    LinkedIn-profiel
                  </Link>
                  .
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-foreground text-3xl font-bold tracking-tight">
                Expertise & Vaardigheden
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Een breed scala aan technologieën om uw project te realiseren
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, idx) => (
              <ScrollReveal key={skillGroup.category} delay={idx * 100} animation="scale-up">
                <div className="hover:border-primary/50 hover:shadow-primary/5 border-border bg-card/50 rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-xl">
                  <h3 className="text-primary mb-4 text-lg font-semibold">{skillGroup.category}</h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                        <span className="text-foreground text-sm font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-card/30 py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-foreground text-3xl font-bold tracking-tight">Mijn Waarden</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                De principes die mij drijven in elk project
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={value.title} delay={idx * 100} animation="reveal">
                  <div className="hover:border-primary/50 hover:bg-card rounded-2xl border border-transparent p-6 transition-colors">
                    <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-bold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
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
    </main>
  )
}
