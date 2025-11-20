import { PrismaClient, Category } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.contactSubmission.deleteMany()
  await prisma.project.deleteMany()
  await prisma.service.deleteMany()
  await prisma.homelabService.deleteMany()

  // Seed Services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: "Webontwikkeling",
        slug: "webontwikkeling",
        description: "Moderne, responsive websites die perfect werken op alle apparaten",
        features: [
          "Responsive design voor alle apparaten",
          "SEO optimalisatie voor betere vindbaarheid",
          "Snelle laadtijden en optimale performance",
          "Content Management Systeem (CMS)",
          "E-commerce oplossingen",
          "Progressive Web Apps (PWA)",
        ],
        icon: "Globe",
        order: 1,
      },
    }),
    prisma.service.create({
      data: {
        name: "Software Ontwikkeling",
        slug: "software-ontwikkeling",
        description: "Op maat gemaakte software oplossingen voor uw bedrijf",
        features: [
          "Desktop applicaties voor Windows, Mac en Linux",
          "REST API en GraphQL ontwikkeling",
          "Database ontwerp en optimalisatie",
          "Proces automatisering",
          "Cloud applicaties",
          "Microservices architectuur",
        ],
        icon: "Code",
        order: 2,
      },
    }),
    prisma.service.create({
      data: {
        name: "PC Builds",
        slug: "pc-builds",
        description: "Custom gaming en werkstations gebouwd volgens uw wensen",
        features: [
          "High-end gaming PCs",
          "Professionele werkstations",
          "Video editing en rendering systems",
          "Silent office computers",
          "Hardware advies en consultancy",
          "Assemblage en cable management",
        ],
        icon: "Cpu",
        order: 3,
      },
    }),
  ])

  // Seed Projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "E-commerce Platform",
        slug: "ecommerce-platform",
        category: Category.WEB,
        description: "Moderne webshop met real-time inventory management",
        longDescription:
          "Een volledig responsive e-commerce platform gebouwd met Next.js en Stripe integratie. Features include real-time voorraad management, multi-language support en een admin dashboard.",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
        liveUrl: "https://example-shop.com",
        featured: true,
        order: 1,
      },
    }),
    prisma.project.create({
      data: {
        title: "Voorraad Management Systeem",
        slug: "voorraad-management",
        category: Category.SOFTWARE,
        description: "Desktop applicatie voor voorraad- en orderbeheer",
        longDescription:
          "Custom software oplossing voor een groothandel om hun voorraad, orders en klanten te beheren. Inclusief barcode scanning en rapportage functionaliteit.",
        techStack: ["Electron", "React", "SQLite", "Node.js", "Chart.js"],
        featured: true,
        order: 2,
      },
    }),
    prisma.project.create({
      data: {
        title: "Gaming Beast 3000",
        slug: "gaming-beast-3000",
        category: Category.PC_BUILD,
        description: "High-end gaming PC met RTX 4090",
        longDescription:
          "Custom gaming PC gebouwd voor 4K gaming op ultra settings. Water cooling, RGB lighting en silent operation waren key requirements.",
        techStack: ["RTX 4090", "Intel i9-13900K", "32GB DDR5", "2TB NVMe", "Custom Loop"],
        featured: true,
        order: 3,
      },
    }),
    prisma.project.create({
      data: {
        title: "Restaurant Website",
        slug: "restaurant-website",
        category: Category.WEB,
        description: "Website met online reserveringssysteem",
        longDescription:
          "Moderne restaurant website met menu presentatie, online reserveringen en takeaway bestellingen. Geïntegreerd met hun POS systeem.",
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
        liveUrl: "https://example-restaurant.com",
        order: 4,
      },
    }),
    prisma.project.create({
      data: {
        title: "API Platform",
        slug: "api-platform",
        category: Category.SOFTWARE,
        description: "RESTful API voor mobile app backend",
        longDescription:
          "Schaalbare API backend voor een mobile applicatie met 10.000+ gebruikers. Inclusief authentication, real-time notifications en data synchronisatie.",
        techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
        githubUrl: "https://github.com/example/api",
        order: 5,
      },
    }),
    prisma.project.create({
      data: {
        title: "Content Creator Workstation",
        slug: "creator-workstation",
        category: Category.PC_BUILD,
        description: "Professionele video editing workstation",
        longDescription:
          "Krachtige workstation voor 4K/8K video editing en 3D rendering. Geoptimaliseerd voor Adobe Creative Suite en DaVinci Resolve.",
        techStack: ["RTX 4080", "AMD Threadripper", "128GB RAM", "8TB Storage", "10Gbit Network"],
        order: 6,
      },
    }),
  ])

  // Seed Homelab Services (examples)
  const homelabServices = await Promise.all([
    prisma.homelabService.create({
      data: {
        name: "Nextcloud",
        slug: "nextcloud",
        description: "Persoonlijke cloud storage",
        url: "https://cloud.turboot.nl",
        icon: "Cloud",
        category: "Storage",
        status: "online",
        requiresAuth: true,
        order: 1,
      },
    }),
    prisma.homelabService.create({
      data: {
        name: "Gitea",
        slug: "gitea",
        description: "Private Git repository hosting",
        url: "https://git.turboot.nl",
        icon: "Github",
        category: "Development",
        status: "online",
        requiresAuth: true,
        order: 2,
      },
    }),
    prisma.homelabService.create({
      data: {
        name: "Portainer",
        slug: "portainer",
        description: "Docker container management",
        url: "https://docker.turboot.nl",
        icon: "Package",
        category: "Infrastructure",
        status: "online",
        requiresAuth: true,
        order: 3,
      },
    }),
  ])

  console.log("Database has been seeded! 🌱")
  console.log(`Created ${services.length} services`)
  console.log(`Created ${projects.length} projects`)
  console.log(`Created ${homelabServices.length} homelab services`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
