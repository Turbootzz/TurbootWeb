import Link from "next/link"
import { ArrowRight, Code, Cpu, Globe, Server } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 mb-6">
            <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Beschikbaar voor nieuwe projecten</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-950 dark:text-white mb-8 leading-[1.1]">
            Digital crafts & <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent">
              Custom silicon.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-10">
            Turboot bouwt moderne webapplicaties, robuuste software en custom high-end computers.
            Alles onder één dak, met persoonlijke aandacht.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-blue-600 dark:bg-blue-600 px-8 py-4 text-base font-medium text-white transition hover:bg-blue-700 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/30"
            >
              Start een project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-transparent px-8 py-4 text-base font-medium text-gray-900 dark:text-gray-100 transition hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              Bekijk werk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento Style) */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Web Development - Large Card */}
          <div className="md:col-span-2 rounded-3xl bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-8 relative overflow-hidden group hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900">
            <div className="absolute top-8 right-8 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">Web Development</h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-md font-medium">
                Moderne websites en applicaties met Next.js. Snel, veilig en schaalbaar.
              </p>
              <Link href="/diensten" className="mt-4 text-sm font-semibold text-blue-700 dark:text-blue-400 flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                Meer info <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            {/* Abstract Decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/50 dark:bg-blue-800/30 rounded-full blur-3xl group-hover:bg-blue-300/50 dark:group-hover:bg-blue-700/40 transition-colors" />
          </div>

          {/* Software - Tall Card */}
          <div className="md:row-span-2 rounded-3xl bg-gray-950 dark:bg-gray-900 p-8 relative overflow-hidden text-white group border border-gray-800 dark:border-gray-800 hover:shadow-xl transition-all">
            <div className="absolute top-8 right-8 bg-gray-800 dark:bg-gray-800 p-3 rounded-2xl shadow-lg ring-1 ring-white/10">
              <Code className="h-6 w-6 text-blue-400" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="space-y-3 opacity-60 font-mono text-sm text-gray-400">
                <p>function build() {"{"}</p>
                <p className="pl-4">return &quot;Solution&quot;;</p>
                <p>{"}"}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Software</h3>
                <p className="text-gray-300 font-medium">
                  Maatwerk software voor complexe bedrijfsprocessen. Automatisering en API&apos;s.
                </p>
              </div>
            </div>
          </div>

          {/* PC Builds - Standard Card */}
          <div className="rounded-3xl bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-8 relative overflow-hidden group hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900">
            <div className="absolute top-8 right-8 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">PC Builds</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                High-end gaming rigs en workstations.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-2xl" />
          </div>

          {/* Homelab - Standard Card */}
          <div className="rounded-3xl bg-linear-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/50 dark:to-cyan-950/50 p-8 relative overflow-hidden group hover:shadow-xl transition-all border border-emerald-100 dark:border-emerald-900">
             <div className="absolute top-8 right-8 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">Homelab Hub</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Toegang tot hosted services en status monitoring.
              </p>
              <Link href="/homelab" className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-400 flex items-center hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors">
                Open Hub <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Value Prop / Text Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-6">
              Geen onzin. <br/>Gewoon goede techniek.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Ik geloof in directe communicatie en efficiënte oplossingen. Als eenmanszaak heb je altijd direct contact met de ontwikkelaar (ik dus).
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Of het nu gaat om een simpele website, een complex dashboard, of de computer waar je dagelijks op werkt: kwaliteit staat voorop.
            </p>
          </div>
          <div className="bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <div className="shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                   <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-gray-900 dark:text-gray-100"><strong className="font-semibold">Modern Stack:</strong> Next.js, TypeScript, Tailwind.</p>
               </li>
               <li className="flex items-start gap-4">
                 <div className="shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                   <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-gray-900 dark:text-gray-100"><strong className="font-semibold">Future Proof:</strong> Schaalbaar en onderhoudbaar.</p>
               </li>
               <li className="flex items-start gap-4">
                 <div className="shrink-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                   <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-gray-900 dark:text-gray-100"><strong className="font-semibold">Persoonlijk:</strong> Maatwerk advies voor jouw situatie.</p>
               </li>
             </ul>
          </div>
        </div>
      </section>
    </main>
  )
}