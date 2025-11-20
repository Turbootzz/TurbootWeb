"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"

// Mock data until DB is connected
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    image: "/images/projects/momd.png", // Using the existing file path structure, assuming image exists or placeholder
    description: "Full-stack webshop met real-time inventory.",
    year: "2024",
  },
  {
    id: 2,
    title: "Inventory System",
    category: "software",
    image: "/images/projects/inventory.jpg",
    description: "Desktop applicatie voor magazijnbeheer.",
    year: "2023",
  },
  {
    id: 3,
    title: "Gaming Beast 3000",
    category: "hardware",
    image: "/images/pc-builds/pc-1.jpg",
    description: "Custom water-cooled RTX 4090 build.",
    year: "2024",
  },
  {
    id: 4,
    title: "Restaurant Booking",
    category: "web",
    image: "/images/projects/restaurant.jpg",
    description: "Reserveringssysteem met SMS notificaties.",
    year: "2023",
  },
  {
    id: 5,
    title: "Homelab Dashboard",
    category: "software",
    image: "/images/projects/dashboard.jpg",
    description: "Centraal beheer voor Docker containers.",
    year: "2024",
  },
  {
    id: 6,
    title: "Video Workstation",
    category: "hardware",
    image: "/images/pc-builds/pc-2.jpg",
    description: "Threadripper build voor 8K editing.",
    year: "2022",
  },
]

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "software", label: "Software" },
  { id: "hardware", label: "Hardware" },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <main className="bg-white pt-24 pb-20 dark:bg-gray-950">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl dark:text-white">
              Selected Work.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Een collectie van projecten waar ik trots op ben.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 dark:bg-blue-600"
                    : "border border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-br from-gray-100 to-gray-200 shadow-lg dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
                {/* Placeholder for actual image - using a colored div if image fails to load usually, but here just gray bg */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 transition-transform duration-500 group-hover:scale-105 dark:from-blue-950/30 dark:to-indigo-950/30" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-gray-600 dark:text-gray-400">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">🖼️</div>
                    <div className="text-xs">{item.title}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
