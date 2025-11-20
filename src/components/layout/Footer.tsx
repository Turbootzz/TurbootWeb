import Link from "next/link"
import { COMPANY_INFO, SERVICES } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Turboot<span className="text-blue-600 dark:text-blue-500">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Professionele webontwikkeling, software op maat en high-end PC builds.
              Eenmanszaak gedreven door passie en precisie.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Diensten</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/diensten#${service.id}`} className="hover:text-black dark:hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/portfolio" className="hover:text-black dark:hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/homelab" className="hover:text-black dark:hover:text-white transition-colors">Homelab Hub</Link></li>
              <li><Link href="/over" className="hover:text-black dark:hover:text-white transition-colors">Over</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-8 text-center md:text-left">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}