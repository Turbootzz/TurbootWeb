import "./globals.css"
import Link from "next/link"
import { StatusPage } from "@/components/sections/StatusPage"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { geistMono, geistSans } from "@/lib/fonts"
import { THEME_SCRIPT } from "@/lib/theme-script"

// Fallback for URLs outside a valid locale, such as paths with a file extension
// (/wp-login.php) that the proxy skips. The locale is unknown here, so the copy is
// in the default language (Dutch).
export default function NotFound() {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <StatusPage
            code={404}
            title="Pagina niet gevonden"
            description="De pagina die je zoekt bestaat niet (meer) of is verplaatst."
          >
            <Button size="lg" asChild>
              <Link href="/">Naar de homepage</Link>
            </Button>
          </StatusPage>
        </ThemeProvider>
      </body>
    </html>
  )
}
