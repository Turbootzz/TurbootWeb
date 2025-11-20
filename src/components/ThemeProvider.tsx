"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system"

  const savedTheme = localStorage.getItem("theme") as Theme | null
  return savedTheme || "system"
}

function getResolvedTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  return theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system"
    setThemeState(savedTheme)
  }, [])

  // Apply theme changes to DOM
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const resolved = getResolvedTheme(theme)

    // Force remove both classes
    root.classList.remove("light", "dark")

    // Add the resolved theme class with a small delay to ensure removal completes
    requestAnimationFrame(() => {
      root.classList.add(resolved)
    })

    setResolvedTheme(resolved)

    console.log("Theme applied:", theme, "Resolved to:", resolved, "Classes:", root.classList.toString())
  }, [theme, mounted])

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (!mounted || theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      const systemTheme = mediaQuery.matches ? "dark" : "light"
      const root = document.documentElement
      root.classList.remove("light", "dark")
      requestAnimationFrame(() => {
        root.classList.add(systemTheme)
      })
      setResolvedTheme(systemTheme)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    console.log("Setting theme to:", newTheme)
    localStorage.setItem("theme", newTheme)
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
