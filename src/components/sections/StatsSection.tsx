import { Container } from "@/components/layout/Container"
import { LucideIcon } from "lucide-react"

interface Stat {
  icon: LucideIcon
  label: string
  value: string
}

interface StatsSectionProps {
  stats: Stat[]
  className?: string
  variant?: "light" | "dark"
}

export function StatsSection({ stats, className = "", variant = "dark" }: StatsSectionProps) {
  const bgClass = variant === "dark"
    ? "bg-gradient-to-r from-blue-600 to-blue-700"
    : "bg-gray-50"

  const textColorClass = variant === "dark" ? "text-white" : "text-gray-900"

  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <Container>
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className={textColorClass}>
                <Icon className={`mx-auto h-8 w-8 mb-2 ${variant === "dark" ? "opacity-80" : ""}`} />
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className={`mt-2 text-sm ${variant === "dark" ? "opacity-90" : "text-gray-600"}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}