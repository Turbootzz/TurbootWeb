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
    <main className="pt-24 pb-20 bg-white dark:bg-gray-950">
      <Container>
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
            Expertise.
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Ik help bedrijven en particulieren met technische vraagstukken.
            Mijn aanpak is pragmatisch: wat heb je écht nodig?
          </p>
        </div>

        <div className="grid gap-12 lg:gap-24">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div key={service.id} id={service.id} className="group">
                <div className="grid md:grid-cols-3 gap-8 md:gap-16 border-t-2 border-gray-200 dark:border-gray-800 pt-12">
                  <div className="md:col-span-1">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block">0{idx + 1}</span>
                    <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl w-fit">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                          <span className="text-gray-900 dark:text-gray-100 font-medium">{feature}</span>
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