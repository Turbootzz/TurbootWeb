"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

import { NAV_ITEMS } from "@/lib/constants"

const LINKS = NAV_ITEMS.filter((item) => item.href !== "/")

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Handle click outside and Escape key
  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  // Focus first link when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a")
      firstLink?.focus()
    }
  }, [open])

  // Focus trap
  useEffect(() => {
    if (!open || !menuRef.current) return

    function handleTab(event: KeyboardEvent) {
      if (event.key !== "Tab" || !menuRef.current) return

      const focusableElements = menuRef.current.querySelectorAll("a[href], button:not([disabled])")
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTab)
    return () => document.removeEventListener("keydown", handleTab)
  }, [open])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/60 dark:border-gray-800/50 dark:bg-gray-950/80 dark:supports-backdrop-filter:bg-gray-950/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
        >
          Turboot<span className="text-blue-600 dark:text-blue-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                pathname === link.href
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Toggle and Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            className="p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full border-b border-gray-200 bg-white p-6 shadow-lg md:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false)
                  toggleRef.current?.focus()
                }}
                className="text-lg font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
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
