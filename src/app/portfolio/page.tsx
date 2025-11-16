"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/CTASection"
import { PageHeader } from "@/components/sections/PageHeader"
import { ExternalLink, Github, Monitor, Code, Cpu } from "lucide-react"
import Link from "next/link"

// Example portfolio items - these would come from database later
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    description: "Moderne webshop met real-time inventory management",
    longDescription: "Een volledig responsive e-commerce platform gebouwd met Next.js en Stripe integratie. Features include real-time voorraad management, multi-language support en een admin dashboard.",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Voorraad Management Systeem",
    category: "software",
    description: "Desktop applicatie voor voorraad- en orderbeheer",
    longDescription: "Custom software oplossing voor een groothandel om hun voorraad, orders en klanten te beheren. Inclusief barcode scanning en rapportage functionaliteit.",
    image: "/images/projects/inventory.jpg",
    techStack: ["Electron", "React", "SQLite", "Node.js", "Chart.js"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 3,
    title: "Gaming Beast 3000",
    category: "pc-build",
    description: "High-end gaming PC met RTX 4090",
    longDescription: "Custom gaming PC gebouwd voor 4K gaming op ultra settings. Water cooling, RGB lighting en silent operation waren key requirements.",
    image: "/images/pc-builds/gaming-beast.jpg",
    techStack: ["RTX 4090", "Intel i9-13900K", "32GB DDR5", "2TB NVMe", "Custom Loop"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "web",
    description: "Website met online reserveringssysteem",
    longDescription: "Moderne restaurant website met menu presentatie, online reserveringen en takeaway bestellingen. Geïntegreerd met hun POS systeem.",
    image: "/images/projects/restaurant.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
    liveUrl: "https://example-restaurant.com",
    githubUrl: null,
  },
  {
    id: 5,
    title: "API Platform",
    category: "software",
    description: "RESTful API voor mobile app backend",
    longDescription: "Schaalbare API backend voor een mobile applicatie met 10.000+ gebruikers. Inclusief authentication, real-time notifications en data synchronisatie.",
    image: "/images/projects/api.jpg",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    liveUrl: null,
    githubUrl: "https://github.com/example/api",
  },
  {
    id: 6,
    title: "Content Creator Workstation",
    category: "pc-build",
    description: "Professionele video editing workstation",
    longDescription: "Krachtige workstation voor 4K/8K video editing en 3D rendering. Geoptimaliseerd voor Adobe Creative Suite en DaVinci Resolve.",
    image: "/images/pc-builds/workstation.jpg",
    techStack: ["RTX 4080", "AMD Threadripper", "128GB RAM", "8TB Storage", "10Gbit Network"],
    liveUrl: null,
    githubUrl: null,
  },
]

const categories = [
  { id: "all", label: "Alle Projecten", icon: Monitor },
  { id: "web", label: "Webontwikkeling", icon: Monitor },
  { id: "software", label: "Software", icon: Code },
  { id: "pc-build", label: "PC Builds", icon: Cpu },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Portfolio"
        description="Ontdek een selectie van onze recente projecten en realisaties. Van websites tot custom PC builds, elk project is uniek."
      />

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                  <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                    {category.id === "all"
                      ? portfolioItems.length
                      : portfolioItems.filter(item => item.category === category.id).length}
                  </span>
                </Button>
              )
            })}
          </div>

          {/* Portfolio Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.category === "web" && <Monitor className="h-16 w-16 text-gray-400" />}
                    {item.category === "software" && <Code className="h-16 w-16 text-gray-400" />}
                    {item.category === "pc-build" && <Cpu className="h-16 w-16 text-gray-400" />}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {item.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {!item.liveUrl && !item.githubUrl && (
                      <Button size="sm" variant="ghost" asChild>
                        <Link href="/contact">
                          Meer Info →
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Geen projecten gevonden in deze categorie.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { label: "Projecten Voltooid", value: "50+" },
              { label: "Tevreden Klanten", value: "30+" },
              { label: "Jaar Ervaring", value: "10+" },
              { label: "Technologieën", value: "25+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Heeft u een project in gedachten?"
        description="Laten we samen uw ideeën tot leven brengen. Neem contact op voor een vrijblijvend gesprek."
      />
    </>
  )
}