"use client"

import * as Sentry from "@sentry/nextjs"
import { StatusPage } from "@/components/sections/StatusPage"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { RotateCcw } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect } from "react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("Error")

  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <StatusPage code={500} title={t("title")} description={t("description")}>
      <Button size="lg" onClick={reset}>
        <RotateCcw className="mr-2 h-4 w-4" />
        {t("retry")}
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link href="/">{t("home")}</Link>
      </Button>
    </StatusPage>
  )
}
