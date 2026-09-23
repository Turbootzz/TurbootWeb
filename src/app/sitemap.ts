import type { MetadataRoute } from "next"
import { getPathname, routing } from "@/i18n/routing"
import { SITE_URL } from "@/lib/constants"

type Locale = (typeof routing.locales)[number]

// Pages translated into every locale. Keep in sync with src/app/[locale]/*/page.tsx
// (sitemap.test.ts fails when a page is missing).
const LOCALIZED_PAGES = ["/", "/services", "/portfolio", "/about", "/contact"]

// Pages whose content exists in one language only. Their other locale prefixes
// serve the same text, so listing them would only feed Google duplicates.
const SINGLE_LOCALE_PAGES: { href: string; locale: Locale }[] = [{ href: "/m365", locale: "nl" }]

function absoluteUrl(locale: Locale, href: string) {
  return SITE_URL + getPathname({ locale, href })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = LOCALIZED_PAGES.flatMap((href) => {
    const languages = {
      ...Object.fromEntries(routing.locales.map((locale) => [locale, absoluteUrl(locale, href)])),
      "x-default": absoluteUrl(routing.defaultLocale, href),
    }

    return routing.locales.map((locale) => ({
      url: absoluteUrl(locale, href),
      alternates: { languages },
    }))
  })

  const singleLocale = SINGLE_LOCALE_PAGES.map(({ href, locale }) => ({
    url: absoluteUrl(locale, href),
  }))

  return [...localized, ...singleLocale]
}
