import { Container } from "@/components/layout/Container"
import { Server, Shield, Database, Activity, ExternalLink, Lock } from "lucide-react"

const services = [
  { name: "Nextcloud", url: "https://cloud.turboot.nl", status: "online", type: "Storage", icon: Database },
  { name: "Gitea", url: "https://git.turboot.nl", status: "online", type: "Dev", icon: CodeIcon },
  { name: "Portainer", url: "https://docker.turboot.nl", status: "maintenance", type: "Infra", icon: Server },
  { name: "Grafana", url: "https://monitor.turboot.nl", status: "online", type: "Monitor", icon: Activity },
  { name: "Vaultwarden", url: "https://pass.turboot.nl", status: "online", type: "Security", icon: Shield },
]

function CodeIcon(props: any) {
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
    <main className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Homelab Status</h1>
            <p className="text-gray-500 dark:text-gray-400">Real-time service monitoring.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
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
              className="block group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <service.icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium border ${
                  service.status === 'online'
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-100 dark:border-green-800'
                    : 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800'
                }`}>
                  {service.status}
                </div>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
                {service.name}
                {service.status === 'online' && <ExternalLink className="h-3 w-3 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{service.type} Service</p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">System Resources</h3>
            <div className="grid gap-6 md:grid-cols-3">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 dark:text-gray-400">CPU Usage</span>
                        <span className="font-mono text-gray-900 dark:text-gray-100">12%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 dark:bg-blue-500 w-[12%]" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 dark:text-gray-400">Memory</span>
                        <span className="font-mono text-gray-900 dark:text-gray-100">24.5 / 64 GB</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 dark:bg-purple-500 w-[38%]" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 dark:text-gray-400">Storage (NAS)</span>
                        <span className="font-mono text-gray-900 dark:text-gray-100">14.2 TB Used</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 dark:bg-orange-400 w-[65%]" />
                    </div>
                </div>
            </div>
        </div>

      </Container>
    </main>
  )
}