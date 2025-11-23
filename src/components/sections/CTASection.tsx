import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: "primary" | "secondary"
}

export function CTASection({
  title = "Klaar om te beginnen?",
  description = "Neem vandaag nog contact op en ontdek hoe wij uw project tot een succes kunnen maken.",
  buttonText = "Neem Contact Op",
  buttonHref = "/contact",
  variant = "primary",
}: CTASectionProps) {
  const bgClass =
    variant === "primary"
      ? "bg-linear-to-r from-primary to-purple-600"
      : "bg-linear-to-r from-gray-800 to-gray-900"

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-100">{description}</p>
          <div className="mt-8">
            <Button size="lg" variant={variant === "primary" ? "secondary" : "default"} asChild>
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
