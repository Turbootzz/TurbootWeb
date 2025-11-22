import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Container } from "@/components/layout/Container"
import Link from "next/link"
import {
  ArrowRight,
  Github,
  Star,
  GitFork,
  Terminal,
  Shield,
  Cpu,
  Gamepad,
  Globe,
  Zap,
} from "lucide-react"
import Image from "next/image"

// Define the type for a GitHub repository
interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
  forks_count: number
  topics: string[]
  fork: boolean
}

const ALLOWED_REPOS = [
  "Nimbus",
  "Salvus Security",
  "Guess the Cry",
  "guess-the-cry", // Fallback if naming varies
  "TurbootWeb",
  "Primal",
]

async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/Turbootzz/repos?sort=updated&per_page=100",
      {
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const repos: GithubRepo[] = await res.json()

    // Filter for specific projects using case-insensitive matching partials
    return repos
      .filter((repo) => {
        const name = repo.name.toLowerCase()
        return ALLOWED_REPOS.some((allowed) => name.includes(allowed.toLowerCase()))
      })
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}

function getProjectIcon(name: string) {
  const n = name.toLowerCase()
  if (n.includes("security")) return Shield
  if (n.includes("guess")) return Gamepad
  if (n.includes("turboot")) return Globe
  if (n.includes("primal")) return Zap
  return Terminal
}

export default async function PortfolioPage() {
  const repos = await getGithubRepos()

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <Container>
        <ScrollReveal>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="text-foreground mb-6 font-mono text-4xl font-bold tracking-tight md:text-6xl">
                <span className="text-green-500">./</span>Projects
              </h1>
              <p className="text-muted-foreground font-mono text-xl">
                A curated list of open-source contributions and experiments.
                <br />
                <span className="text-sm text-green-500/80 opacity-70">{`> querying github api...`}</span>
              </p>
            </div>

            <Link
              href="https://github.com/Turbootzz"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-none border border-green-500/50 bg-gray-950 px-6 py-3 font-mono text-sm font-bold text-green-500 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.2)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-green-500 hover:text-black hover:shadow-none"
            >
              <Github className="h-5 w-5" />
              github_profile.exe
            </Link>
          </div>
        </ScrollReveal>

        {repos.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => {
              const Icon = getProjectIcon(repo.name)
              return (
                <ScrollReveal key={repo.id} delay={index * 100} animation="scale-up">
                  <Link href={repo.html_url} target="_blank" className="group block h-full">
                    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-md border-2 border-green-500/30 bg-gray-950 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:border-green-500">
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between border-b border-green-500/30 bg-green-500/5 px-4 py-2 transition-colors group-hover:bg-green-500/10">
                        <div className="flex gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/50" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                          <div className="h-3 w-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="font-mono text-xs text-green-500/50">bash</div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="rounded-sm border border-green-500/30 bg-green-500/5 p-2 text-green-500 group-hover:animate-pulse">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex items-center gap-3 font-mono text-xs text-green-500/70">
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3 w-3" />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>

                        <h3 className="mb-2 font-mono text-xl font-bold text-green-400 group-hover:text-green-300">
                          {repo.name}
                        </h3>

                        <p className="mb-4 line-clamp-3 font-mono text-sm leading-relaxed text-green-500/60">
                          <span className="mr-2 text-green-500/30">$</span>
                          {repo.description || "No description provided."}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-green-500/30 bg-gray-900/50 px-6 py-3">
                        <div className="flex flex-wrap gap-2">
                          {repo.language && (
                            <span className="rounded-sm border border-green-500/30 px-2 py-0.5 font-mono text-xs text-green-500/80">
                              {repo.language}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center font-mono text-xs font-bold text-green-400 opacity-0 transition-opacity group-hover:opacity-100">
                          EXECUTE <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        ) : (
          <ScrollReveal>
            <div className="rounded-lg border-2 border-dashed border-green-500/30 bg-gray-950 p-12 text-center font-mono">
              <Terminal className="mx-auto mb-4 h-12 w-12 animate-pulse text-green-500/50" />
              <h3 className="mb-2 text-xl font-bold text-green-500">ERROR: 404_REPOS_NOT_FOUND</h3>
              <p className="text-green-500/60">
                {`> System was unable to retrieve repositories from GitHub API.`}
              </p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </main>
  )
}
