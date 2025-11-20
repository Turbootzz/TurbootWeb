"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

import { NAV_ITEMS } from "@/lib/constants"

const LINKS = NAV_ITEMS.filter(item => item.href !== "/")

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-gray-950/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Turboot<span className="text-blue-600 dark:text-blue-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                pathname === link.href ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-transform hover:scale-105 active:scale-95"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Toggle and Theme */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="absolute top-16 left-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:hidden shadow-lg">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}