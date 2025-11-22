export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/homelab", label: "Services" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
] as const

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
      "Maatwerk functionaliteit",
    ],
  },
  {
    id: "software-development",
    title: "Software Ontwikkeling",
    description: "Op maat gemaakte software oplossingen voor uw bedrijf",
    icon: "Code",
    features: [
      "Desktop/Mobile applicaties",
      "API ontwikkeling",
      "Database ontwerp",
      "Automatisering",
    ],
  },
  {
    id: "pc-builds",
    title: "PC Builds",
    description: "Custom gaming en werkstations gebouwd volgens uw wensen",
    icon: "Cpu",
    features: ["Gaming PCs", "Werkstations", "Hardware advies", "Assemblage & installatie"],
  },
] as const

export const COMPANY_INFO = {
  name: "Turboot",
  owner: "Thijs Herman",
  email: "info@turboot.com",
  address: "Nederland",
  kvk: "12345678",
  btw: "NL123456789B01",
} as const

export const SOCIAL_LINKS = {
  github: "https://github.com/turbootzz",
  linkedin: "https://linkedin.com/in/thijsherman",
} as const
