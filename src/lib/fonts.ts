import { Geist, Geist_Mono } from "next/font/google"

// Shared by the [locale] layout and the global error pages, which render outside it.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
