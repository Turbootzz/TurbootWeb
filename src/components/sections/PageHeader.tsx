import { Container } from "@/components/layout/Container"
import { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function PageHeader({ title, description, children, className = "" }: PageHeaderProps) {
  return (
    <section className={`bg-linear-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24 ${className}`}>
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  )
}