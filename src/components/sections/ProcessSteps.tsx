import { Container } from "@/components/layout/Container"

interface Step {
  step: string
  title: string
  description: string
}

interface ProcessStepsProps {
  title?: string
  description?: string
  steps: Step[]
  className?: string
}

export function ProcessSteps({
  title = "Ons Werkproces",
  description = "Van eerste contact tot oplevering, zo werken wij",
  steps,
  className = "",
}: ProcessStepsProps) {
  return (
    <section className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}