import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except API routes, Next.js internals and files with an
  // extension (sitemap.xml, robots.txt, images), so unprefixed paths like /contact
  // redirect to a locale instead of 404ing
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
}
