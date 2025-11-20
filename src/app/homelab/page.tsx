import { Container } from "@/components/layout/Container"
import { Server, Shield, Database, Activity, ExternalLink } from "lucide-react"
import type { SVGProps } from "react"

const services = [
  {
    name: "Nextcloud",
    url: "https://cloud.turboot.nl",
    status: "online",
    type: "Storage",
    icon: Database,
  },
  { name: "Gitea", url: "https://git.turboot.nl", status: "online", type: "Dev", icon: CodeIcon },
  {
    name: "Portainer",
    url: "https://docker.turboot.nl",
    status: "maintenance",
    type: "Infra",
    icon: Server,
  },
  {
    name: "Grafana",
    url: "https://monitor.turboot.nl",
    status: "online",
    type: "Monitor",
    icon: Activity,
  },
  {
    name: "Vaultwarden",
    url: "https://pass.turboot.nl",
    status: "online",
    type: "Security",
    icon: Shield,
  },
]

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export const metadata = {
  title: "Homelab Hub - Turboot",
  description: "Private service status dashboard.",
}

export default function HomelabPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 dark:bg-gray-900">
      <Container>
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Homelab Status</h1>
            <p className="text-gray-500 dark:text-gray-400">Real-time service monitoring.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            System Operational
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-lg bg-gray-50 p-2 transition-colors group-hover:bg-blue-50 dark:bg-gray-700 dark:group-hover:bg-blue-900/30">
                  <service.icon className="h-6 w-6 text-gray-700 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400" />
                </div>
                <div
                  className={`rounded border px-2 py-1 text-xs font-medium ${
                    service.status === "online"
                      ? "border-green-100 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "border-yellow-100 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {service.status}
                </div>
              </div>

              <h3 className="mb-1 flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100">
                {service.name}
                {service.status === "online" && (
                  <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-500" />
                )}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{service.type} Service</p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 font-bold text-gray-900 dark:text-gray-100">System Resources</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">CPU Usage</span>
                <span className="font-mono text-gray-900 dark:text-gray-100">12%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div className="h-full w-[12%] bg-blue-600 dark:bg-blue-500" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Memory</span>
                <span className="font-mono text-gray-900 dark:text-gray-100">24.5 / 64 GB</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div className="h-full w-[38%] bg-purple-600 dark:bg-purple-500" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Storage (NAS)</span>
                <span className="font-mono text-gray-900 dark:text-gray-100">14.2 TB Used</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <div className="h-full w-[65%] bg-orange-500 dark:bg-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
