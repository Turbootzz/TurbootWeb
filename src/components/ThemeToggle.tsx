"use client"

import { useTheme } from "./ThemeProvider"
import { Moon, Sun, Monitor } from "lucide-react"
import { useState, useEffect, useRef, useSyncExternalStore } from "react"

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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hydrated = useHydrated()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const themes = [
    { value: "light" as const, label: "Licht", icon: Sun },
    { value: "dark" as const, label: "Donker", icon: Moon },
    { value: "system" as const, label: "Systeem", icon: Monitor },
  ]

  // Server and first client render must match
  // Only show interactive button after hydrated
  if (!hydrated) {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800" />
    )
  }

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl z-50 overflow-hidden">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon
            return (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  theme === themeOption.value
                    ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{themeOption.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
