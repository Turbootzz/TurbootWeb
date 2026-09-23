import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { routing } from "@/i18n/routing"
import robots from "./robots"
import sitemap from "./sitemap"

const BASE_URL = "https://turboot.com"

// Every static page under src/app/[locale], e.g. "/" and "/about".
function localePageRoutes(): string[] {
  const routes: string[] = []
  const walk = (dir: string, route: string) => {
    if (fs.existsSync(path.join(dir, "page.tsx"))) routes.push(route || "/")
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      // Dynamic segments such as [...rest] are catch-alls, not real pages
      if (!entry.isDirectory() || entry.name.startsWith("[")) continue
      walk(path.join(dir, entry.name), `${route}/${entry.name}`)
    }
  }
  walk(path.join(__dirname, "[locale]"), "")
  return routes
}

function localizedUrl(locale: string, route: string) {
  return `${BASE_URL}/${locale}${route === "/" ? "" : route}`
}

describe("sitemap", () => {
  const entries = sitemap()
  const urls = entries.map((entry) => entry.url)

  it("lists every page under [locale] in the default locale", () => {
    const routes = localePageRoutes()
    expect(routes).toContain("/about")

    for (const route of routes) {
      expect(urls).toContain(localizedUrl(routing.defaultLocale, route))
    }
  })

  it("lists translated pages in every locale with hreflang alternates", () => {
    for (const locale of routing.locales) {
      const entry = entries.find((e) => e.url === localizedUrl(locale, "/about"))
      expect(entry).toBeDefined()
      expect(entry?.alternates?.languages).toEqual({
        ...Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, "/about")])),
        "x-default": localizedUrl(routing.defaultLocale, "/about"),
      })
    }
  })

  it("only contains unique, absolute turboot.com URLs", () => {
    expect(new Set(urls).size).toBe(urls.length)
    for (const url of urls) {
      expect(url.startsWith(`${BASE_URL}/`)).toBe(true)
    }
  })
})

describe("robots", () => {
  it("points crawlers to the sitemap", () => {
    expect(robots().sitemap).toBe(`${BASE_URL}/sitemap.xml`)
  })
})
