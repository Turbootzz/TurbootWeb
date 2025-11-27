import { Link } from "@/i18n/routing"
import { COMPANY_INFO, SERVICES, HOSTED_APPS } from "@/lib/constants"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="border-t border-gray-100 bg-white py-12 md:py-16 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
            >
              Turboot<span className="text-blue-600 dark:text-blue-500">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t("services")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {t(`items.services.${service.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t("applications")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              {HOSTED_APPS.map((app) => (
                <li key={app.name}>
                  <Link
                    href={app.url}
                    target="_blank"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {t(`items.applications.${app.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t("links")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  {t("items.links.portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  {t("items.links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  {t("items.links.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8 text-center md:text-left dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
