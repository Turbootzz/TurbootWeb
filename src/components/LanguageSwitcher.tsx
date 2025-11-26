"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { ChangeEvent, useTransition } from "react"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label className="border-border bg-background text-foreground relative inline-flex items-center rounded-md border px-2 py-1">
      <span className="sr-only">Change language</span>
      <select
        defaultValue={locale}
        className="bg-transparent py-1 text-sm font-medium outline-none"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="nl">🇳🇱 NL</option>
        <option value="en">🇬🇧 EN</option>
        <option value="de">🇩🇪 DE</option>
        <option value="fr">🇫🇷 FR</option>
        <option value="zh">🇨🇳 ZH</option>
      </select>
    </label>
  )
}
