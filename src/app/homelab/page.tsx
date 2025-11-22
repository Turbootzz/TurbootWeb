import { Container } from "@/components/layout/Container"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Cloud, Gamepad, Server, ExternalLink } from "lucide-react"

const services = [
  {
    name: "Nimbus",
    url: "https://nimbus.turboot.com",
    description: "Personal Cloud Storage & Sync",
    status: "online",
    icon: Cloud,
  },
  {
    name: "PokePortal",
    url: "https://pokeportal.app",
    description: "Pokémon Management Tool",
    status: "online",
    icon: Gamepad,
  },
]

export const metadata = {
  title: "Hosted Services - Turboot",
  description: "Overview of publicly hosted services and applications.",
}

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <Container>
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-foreground text-4xl font-bold">Services</h1>
              <p className="text-muted-foreground text-xl">
                Publicly hosted applications and tools.
              </p>
            </div>
            <div className="border-border bg-card text-muted-foreground flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              All Systems Operational
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 100} animation="scale-up">
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-card hover:border-primary/50 hover:shadow-primary/5 block h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl p-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                    {service.status}
                  </div>
                </div>

                <h3 className="text-foreground group-hover:text-primary mb-2 flex items-center gap-2 text-2xl font-bold transition-colors">
                  {service.name}
                  <ExternalLink className="h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </main>
  )
}
