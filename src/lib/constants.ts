// Navigation items
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/homelab", label: "Homelab" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
] as const

// Services
export const SERVICES = [
  {
    id: "web-development",
    title: "Webontwikkeling",
    description: "Moderne, snelle websites die perfect werken op alle apparaten",
    icon: "Globe",
    features: [
      "Responsive design",
      "SEO geoptimaliseerd",
      "Snelle laadtijden",
      "Content Management Systeem",
    ],
  },
  {
    id: "software-development",
    title: "Software Ontwikkeling",
    description: "Op maat gemaakte software oplossingen voor uw bedrijf",
    icon: "Code",
    features: ["Desktop applicaties", "API ontwikkeling", "Database ontwerp", "Automatisering"],
  },
  {
    id: "pc-builds",
    title: "PC Builds",
    description: "Custom gaming en werkstations gebouwd volgens uw wensen",
    icon: "Cpu",
    features: ["Gaming PCs", "Werkstations", "Hardware advies", "Assemblage & installatie"],
  },
] as const

// Company info
export const COMPANY_INFO = {
  name: "Turboot",
  owner: "Thijs Herman",
  email: "info@turboot.nl", // Update with real email
  phone: "+31 6 12345678", // Update with real phone
  address: "Nederland", // Update with real address
  kvk: "12345678", // Update with real KvK number
  btw: "NL123456789B01", // Update with real BTW number
} as const

// Social media links (update with real URLs)
export const SOCIAL_LINKS = {
  github: "https://github.com/turboot",
  linkedin: "https://linkedin.com/company/turboot",
  twitter: "https://twitter.com/turboot",
} as const
