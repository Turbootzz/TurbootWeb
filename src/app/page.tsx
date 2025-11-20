import Link from "next/link"
import { ArrowRight, Code, Cpu, Globe, Server } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-24 pb-16 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-900 dark:bg-blue-950/50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-500"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Beschikbaar voor nieuwe projecten
            </span>
          </div>
          <h1 className="mb-8 text-5xl leading-[1.1] font-bold tracking-tight text-gray-950 md:text-7xl dark:text-white">
            Digital crafts & <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-indigo-500">
              Custom silicon.
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
            Turboot bouwt moderne webapplicaties, robuuste software en custom high-end computers.
            Alles onder één dak, met persoonlijke aandacht.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Start een project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border-2 border-gray-300 bg-transparent px-8 py-4 text-base font-medium text-gray-900 transition hover:border-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-blue-500 dark:hover:bg-blue-950/30"
            >
              Bekijk werk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento Style) */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          {/* Web Development - Large Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-indigo-50 p-8 transition-all hover:shadow-xl md:col-span-2 dark:border-blue-900 dark:from-blue-950/50 dark:to-indigo-950/50">
            <div className="absolute top-8 right-8 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-white/10">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end">
              <h3 className="mb-2 text-2xl font-bold text-gray-950 dark:text-white">
                Web Development
              </h3>
              <p className="max-w-md font-medium text-gray-700 dark:text-gray-300">
                Moderne websites en applicaties met Next.js. Snel, veilig en schaalbaar.
              </p>
              <Link
                href="/diensten"
                className="mt-4 flex items-center text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Meer info <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            {/* Abstract Decoration */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl transition-colors group-hover:bg-blue-300/50 dark:bg-blue-800/30 dark:group-hover:bg-blue-700/40" />
          </div>

          {/* Software - Tall Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 p-8 text-white transition-all hover:shadow-xl md:row-span-2 dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute top-8 right-8 rounded-2xl bg-gray-800 p-3 shadow-lg ring-1 ring-white/10 dark:bg-gray-800">
              <Code className="h-6 w-6 text-blue-400" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-3 font-mono text-sm text-gray-400 opacity-60">
                <p>function build() {"{"}</p>
                <p className="pl-4">return &quot;Solution&quot;;</p>
                <p>{"}"}</p>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">Software</h3>
                <p className="font-medium text-gray-300">
                  Maatwerk software voor complexe bedrijfsprocessen. Automatisering en API&apos;s.
                </p>
              </div>
            </div>
          </div>

          {/* PC Builds - Standard Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-purple-100 bg-linear-to-br from-purple-50 to-pink-50 p-8 transition-all hover:shadow-xl dark:border-purple-900 dark:from-purple-950/50 dark:to-pink-950/50">
            <div className="absolute top-8 right-8 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-white/10">
              <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end">
              <h3 className="mb-2 text-2xl font-bold text-gray-950 dark:text-white">PC Builds</h3>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                High-end gaming rigs en workstations.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-purple-200/50 blur-2xl dark:bg-purple-800/30" />
          </div>

          {/* Homelab - Standard Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-cyan-50 p-8 transition-all hover:shadow-xl dark:border-emerald-900 dark:from-emerald-950/50 dark:to-cyan-950/50">
            <div className="absolute top-8 right-8 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-white/10">
              <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end">
              <h3 className="mb-2 text-2xl font-bold text-gray-950 dark:text-white">Homelab Hub</h3>
              <p className="font-medium text-gray-700 dark:text-gray-300">
                Toegang tot hosted services en status monitoring.
              </p>
              <Link
                href="/homelab"
                className="mt-4 flex items-center text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Open Hub <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop / Text Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl dark:text-white">
              Geen onzin. <br />
              Gewoon goede techniek.
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Ik geloof in directe communicatie en efficiënte oplossingen. Als eenmanszaak heb je
              altijd direct contact met de ontwikkelaar (ik dus).
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Of het nu gaat om een simpele website, een complex dashboard, of de computer waar je
              dagelijks op werkt: kwaliteit staat voorop.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-linear-to-br from-gray-50 to-blue-50 p-8 shadow-lg md:p-12 dark:border-gray-800 dark:from-gray-900 dark:to-blue-950/30">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-gray-100">
                  <strong className="font-semibold">Modern Stack:</strong> Next.js, TypeScript,
                  Tailwind.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-gray-100">
                  <strong className="font-semibold">Future Proof:</strong> Schaalbaar en
                  onderhoudbaar.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 dark:text-gray-100">
                  <strong className="font-semibold">Persoonlijk:</strong> Maatwerk advies voor jouw
                  situatie.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
