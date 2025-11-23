import Link from "next/link"
import { ArrowRight, Code, Cpu, Globe, Terminal, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        {/* Background Glow */}
        <div className="bg-primary/10 pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-50 blur-[120px] dark:opacity-30" />

        <div className="relative z-10 max-w-4xl">
          <div className="animate-reveal border-border bg-card/50 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-muted-foreground text-sm font-medium">
              Beschikbaar voor nieuwe projecten
            </span>
          </div>

          <h1
            className="text-foreground animate-reveal mb-8 text-6xl font-bold tracking-tight md:text-8xl"
            style={{ animationDelay: "0.1s" }}
          >
            Bouwen aan het <br />
            <span className="from-primary bg-linear-to-r to-purple-400 bg-clip-text text-transparent">
              Moderne Web.
            </span>
          </h1>

          <p
            className="text-muted-foreground animate-reveal mb-10 max-w-2xl text-xl leading-relaxed md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Ik creëer snelle websites, maatwerk software en schaalbare infrastructuur.
            Precisie-engineering voor het digitale tijdperk.
          </p>

          <div className="animate-reveal flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/contact"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex items-center rounded-xl px-8 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Laten we praten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="group border-border bg-card hover:bg-accent/50 text-foreground inline-flex items-center rounded-xl border px-8 py-4 text-base font-medium transition-all hover:-translate-y-0.5"
            >
              Bekijk Werk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Glass Cards */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Web Development */}
            <div className="group border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:shadow-2xl">
              <div className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-xl p-3">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">Web Development</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Next-level websites gebouwd met Next.js en Tailwind. Razendsnel,
                  SEO-geoptimaliseerd en pixel-perfect.
                </p>
                <Link
                  href="/services"
                  className="text-primary inline-flex items-center text-sm font-semibold hover:underline"
                >
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Software */}
            <div className="group border-border bg-card/50 relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-500">
                  <Terminal className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">Software</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Maatwerk applicaties afgestemd op uw bedrijfsprocessen. Van automatiseringsscripts
                  tot volledige SaaS-platformen.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-purple-500 hover:underline"
                >
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hardware */}
            <div className="group border-border bg-card/50 relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/5">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                  <Cpu className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">Infrastructuur</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Expert hardware advies en custom PC builds. Geoptimaliseerd voor gaming, rendering
                  of AI workloads.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-cyan-500 hover:underline"
                >
                  Meer info <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Value Prop */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="border-border bg-card/30 relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm md:p-12">
          <div className="bg-primary/10 absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full blur-3xl" />

          <ScrollReveal>
            <div className="relative z-10 grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="text-foreground mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Waarom Turboot?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Ik combineer diepgaande technische kennis met moderne ontwerpprincipes. U krijgt
                  direct contact met de ontwikkelaar, wat zorgt voor snelheid en heldere
                  communicatie.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full-Stack Expertise (Frontend + Backend)",
                    "Performance-First Aanpak",
                    "Transparante Communicatie",
                    "Lange-termijn Support & Onderhoud",
                  ].map((item, i) => (
                    <li key={i} className="text-foreground/80 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full">
                        <Zap className="h-3.5 w-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="from-primary absolute -inset-4 rounded-2xl bg-linear-to-r to-purple-500 opacity-20 blur-xl" />
                <div className="border-border bg-background/80 relative rounded-2xl border p-6 shadow-2xl backdrop-blur-xl">
                  <div className="space-y-4">
                    <div className="border-border flex items-center justify-between border-b pb-4">
                      <span className="font-semibold">Project Status</span>
                      <span className="flex items-center gap-2 text-sm text-green-500">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        Online
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground flex justify-between text-sm">
                        <span>Performance</span>
                        <span className="text-foreground font-mono">98/100</span>
                      </div>
                      <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                        <div className="h-full w-[98%] rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground flex justify-between text-sm">
                        <span>SEO Score</span>
                        <span className="text-foreground font-mono">100/100</span>
                      </div>
                      <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                        <div className="bg-primary h-full w-[100%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
