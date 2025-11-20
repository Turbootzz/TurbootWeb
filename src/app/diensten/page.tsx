import { Container } from "@/components/layout/Container"
import { SERVICES } from "@/lib/constants"
import { Code, Cpu, Globe } from "lucide-react"

const iconMap = {
  Globe,
  Code,
  Cpu,
}

export const metadata = {
  title: "Diensten - Turboot",
  description: "Overzicht van diensten: Web, Software, Hardware.",
}

export default function DienstenPage() {
  return (
    <main className="bg-white pt-24 pb-20 dark:bg-gray-950">
      <Container>
        <div className="mb-24 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl dark:text-white">
            Expertise.
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Ik help bedrijven en particulieren met technische vraagstukken. Mijn aanpak is
            pragmatisch: wat heb je écht nodig?
          </p>
        </div>

        <div className="grid gap-12 lg:gap-24">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div key={service.id} id={service.id} className="group">
                <div className="grid gap-8 border-t-2 border-gray-200 pt-12 md:grid-cols-3 md:gap-16 dark:border-gray-800">
                  <div className="md:col-span-1">
                    <span className="mb-4 block font-mono text-sm text-gray-500 dark:text-gray-400">
                      0{idx + 1}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-gray-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {service.title}
                    </h2>
                    <div className="w-fit rounded-xl bg-blue-50 p-3 dark:bg-blue-950/50">
                      <Icon className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900"
                        >
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </main>
  )
}
