"use client"

import { useTheme } from "./ThemeProvider"
import { Moon, Sun, Monitor } from "lucide-react"
import { useState, useEffect, useRef, useSyncExternalStore, useMemo } from "react"

// Subscribe to a dummy store that just tracks if we're on the client
function subscribe() {
  return () => {}
}

function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true, // Client
    () => false // Server
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])
  const hydrated = useHydrated()

  const themes = useMemo(
    () => [
      { value: "light" as const, label: "Licht", icon: Sun },
      { value: "dark" as const, label: "Donker", icon: Moon },
      { value: "system" as const, label: "Systeem", icon: Monitor },
    ],
    []
  )

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          event.preventDefault()
          setIsOpen(false)
          buttonRef.current?.focus()
          break

        case "ArrowDown":
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev + 1 >= themes.length ? 0 : prev + 1
            optionRefs.current[next]?.focus()
            return next
          })
          break

        case "ArrowUp":
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev - 1 < 0 ? themes.length - 1 : prev - 1
            optionRefs.current[next]?.focus()
            return next
          })
          break

        case "Home":
          event.preventDefault()
          setFocusedIndex(0)
          optionRefs.current[0]?.focus()
          break

        case "End":
          event.preventDefault()
          const lastIndex = themes.length - 1
          setFocusedIndex(lastIndex)
          optionRefs.current[lastIndex]?.focus()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, themes.length])

  // Focus current theme option when menu opens
  useEffect(() => {
    if (!isOpen) return

    const currentIndex = themes.findIndex((t) => t.value === theme)
    const targetIndex = currentIndex >= 0 ? currentIndex : 0

    // Use requestAnimationFrame to avoid setState in effect
    requestAnimationFrame(() => {
      setFocusedIndex(targetIndex)
      optionRefs.current[targetIndex]?.focus()
    })

    return () => {
      setFocusedIndex(-1)
    }
  }, [isOpen, theme, themes])

  // Show placeholder during SSR to avoid hydration mismatch
  if (!hydrated) {
    return <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800" />
  }

  const currentTheme = themes.find((t) => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label={`Current theme: ${currentTheme.label}. Click to change`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <CurrentIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800"
          role="menu"
          aria-label="Theme options"
        >
          {themes.map((themeOption, index) => {
            const Icon = themeOption.icon
            const isSelected = theme === themeOption.value
            return (
              <button
                key={themeOption.value}
                ref={(el) => {
                  optionRefs.current[index] = el
                }}
                onClick={() => {
                  setTheme(themeOption.value)
                  setIsOpen(false)
                  buttonRef.current?.focus()
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  isSelected
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                role="menuitemradio"
                aria-checked={isSelected}
                tabIndex={focusedIndex === index ? 0 : -1}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{themeOption.label}</span>
                {isSelected && (
                  <span className="ml-auto text-blue-600 dark:text-blue-400" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
