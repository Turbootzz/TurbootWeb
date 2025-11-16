import Link from "next/link"
import { Container } from "./Container"
import { NAV_ITEMS, COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Turboot</h3>
              <p className="mb-4 text-sm">
                Uw partner voor webontwikkeling, software ontwikkeling en custom PC builds.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {SOCIAL_LINKS.twitter && (
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Links</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Diensten</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/diensten#webontwikkeling"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Webontwikkeling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diensten#software-ontwikkeling"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Software Ontwikkeling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diensten#pc-builds"
                    className="text-sm hover:text-white transition-colors"
                  >
                    PC Builds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span className="text-sm">{COMPANY_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                © {currentYear} {COMPANY_INFO.name}. Alle rechten voorbehouden.
              </p>
              <p className="text-xs text-gray-400 mt-2 md:mt-0">
                KvK: {COMPANY_INFO.kvk} | BTW: {COMPANY_INFO.btw}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}