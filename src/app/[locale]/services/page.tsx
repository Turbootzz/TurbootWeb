import { Container } from "@/components/layout/Container"
import { SERVICES } from "@/lib/constants"
import { Code, Cpu, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

const iconMap = {
  Globe,
  Code,
  Cpu,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Services.metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function ServicesPage() {
  const t = useTranslations("Services")

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <Container>
        <ScrollReveal>
          <div className="mb-24 max-w-3xl">
            <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">{t("hero.description")}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:gap-12">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={service.id} animation="reveal" delay={idx * 100}>
                <div
                  id={service.id}
                  className="group border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative z-10 grid gap-8 md:grid-cols-3 md:gap-16">
                    <div className="md:col-span-1">
                      <span className="text-muted-foreground mb-4 block font-mono text-sm">
                        0{idx + 1}
                      </span>
                      <h2 className="text-foreground group-hover:text-primary mb-4 text-3xl font-bold transition-colors">
                        {t(`items.${service.id}.title`)}
                      </h2>
                      <div className="bg-primary/10 text-primary w-fit rounded-xl p-3">
                        <Icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                        {t(`items.${service.id}.description`)}
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {service.features.map((feature, featureIdx) => (
                          <div
                            key={feature}
                            className="bg-background/50 border-border flex items-center gap-3 rounded-lg border p-3"
                          >
                            <div className="bg-primary h-2 w-2 rounded-full" />
                            <span className="text-foreground font-medium">
                              {t(`items.${service.id}.features.${featureIdx}`)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </main>
  )
}
