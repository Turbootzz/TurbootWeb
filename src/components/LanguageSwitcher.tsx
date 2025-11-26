"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { useTransition, useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const languages = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function onSelectChange(nextLocale: string) {
    setIsOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const currentLanguage = languages.find((l) => l.code === locale)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "border-border bg-background hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          isOpen && "bg-accent text-accent-foreground"
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-lg leading-none">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline-block">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown
          className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="animate-in fade-in zoom-in-95 slide-in-from-top-2 border-border bg-popover text-popover-foreground absolute right-0 z-50 mt-2 w-48 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectChange(lang.code)}
              disabled={isPending}
              className={cn(
                "hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                locale === lang.code && "bg-accent/50"
              )}
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                {locale === lang.code && <Check className="h-4 w-4" />}
              </span>
              <span className="mr-2 text-lg leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
