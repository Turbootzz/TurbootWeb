import { StatusPage } from "@/components/sections/StatusPage"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("NotFound")

  return (
    <StatusPage code={404} title={t("title")} description={t("description")}>
      <Button size="lg" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("home")}
        </Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link href="/contact">{t("contact")}</Link>
      </Button>
    </StatusPage>
  )
}
