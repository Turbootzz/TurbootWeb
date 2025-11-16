import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { ArrowRight, Code, Globe, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
      <Container>
        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Digitale Oplossingen voor{" "}
              <span className="text-blue-600">Uw Succes</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Turboot is uw partner voor professionele webontwikkeling,
              software ontwikkeling en custom PC builds. Van concept tot
              realisatie, wij maken uw digitale ambities waar.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Uw Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">Bekijk Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="relative rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Webontwikkeling
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Moderne, responsive websites die perfect werken op alle apparaten.
              </p>
            </div>

            <div className="relative rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Software Ontwikkeling
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Op maat gemaakte software oplossingen voor uw specifieke behoeften.
              </p>
            </div>

            <div className="relative rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                PC Builds
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Custom gaming PCs en werkstations, gebouwd volgens uw wensen.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl" />
      </div>
    </section>
  )
}