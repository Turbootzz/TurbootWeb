import type { ReactNode } from "react"

interface StatusPageProps {
  code: number
  title: string
  description: string
  // Action buttons (e.g. back home, retry)
  children?: ReactNode
}

// Shared body for the 404 and error pages, styled after the home hero.
export function StatusPage({ code, title, description, children }: StatusPageProps) {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-8">
      {/* Background Glow */}
      <div className="bg-primary/10 pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-50 blur-[120px] dark:opacity-30" />

      <div className="relative z-10 max-w-2xl text-center">
        <p className="animate-reveal from-primary bg-linear-to-r to-purple-400 bg-clip-text font-mono text-8xl font-bold tracking-tight text-transparent md:text-9xl">
          {code}
        </p>
        <h1
          className="text-foreground animate-reveal mt-6 text-3xl font-bold tracking-tight md:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>
        <p
          className="text-muted-foreground animate-reveal mt-6 text-lg leading-relaxed md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {description}
        </p>
        {children && (
          <div
            className="animate-reveal mt-10 flex flex-wrap justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
