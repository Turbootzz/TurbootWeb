import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Container } from "@/components/layout/Container"
import Link from "next/link"
import { ArrowRight, Github, Star, GitFork, Shield, Gamepad, Globe, Zap, Box } from "lucide-react"
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

const ALLOWED_KEYWORDS = [
  "nimbus",
  "salvussecurity",
  "guessthecry",
  "turbootweb",
  "primal",
  "vaultwarden-api",
  "pokeportal",
  "rampup",
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

    // Filter for specific projects using flexible keyword matching
    return repos
      .filter((repo) => {
        const name = repo.name.toLowerCase()
        return ALLOWED_KEYWORDS.some((keyword) => name.includes(keyword))
      })
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}

function getProjectIcon(name: string) {
  const n = name.toLowerCase()
  if (n.includes("security") || n.includes("salvus")) return Shield
  if (n.includes("guess") || n.includes("game")) return Gamepad
  if (n.includes("turboot") || n.includes("web")) return Globe
  if (n.includes("primal") || n.includes("nimbus")) return Zap
  return Box
}

export default async function PortfolioPage() {
  const repos = await getGithubRepos()

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <Container>
        <ScrollReveal>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Projects.
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Een selectie van mijn open-source werk en persoonlijke projecten.
                <br />
                <span className="text-sm opacity-70">(Live data van GitHub: Turbootzz)</span>
              </p>
            </div>

            <Link
              href="https://github.com/Turbootzz"
              target="_blank"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              GitHub Profiel
            </Link>
          </div>
        </ScrollReveal>

        {repos.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => {
              const Icon = getProjectIcon(repo.name)
              return (
                <ScrollReveal key={repo.id} delay={index * 100} animation="scale-up">
                  <Link href={repo.html_url} target="_blank" className="group block h-full">
                    <div className="group border-border bg-card/50 hover:border-primary/50 hover:shadow-primary/5 relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                      {/* Project Screenshot Placeholder */}
                      <div className="border-border bg-muted relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden border-b">
                        {repo.name.toLowerCase().includes("guessthecry") ? (
                          <Image
                            src="/images/projects/guessthecry.jpg"
                            alt={repo.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <>
                            {/* 
                           In a real scenario, you would map repo names to image paths or fetch OG images.
                           For now, we use a gradient placeholder or you can add actual images to public/images/projects/
                         */}
                            <div className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent transition-transform duration-500 group-hover:scale-105" />
                            <div className="text-muted-foreground/20 absolute inset-0 flex items-center justify-center">
                              <Icon className="h-16 w-16 opacity-20" />
                            </div>
                          </>
                        )}
                      </div>

                      <div className="mb-4 flex items-start justify-between">
                        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl p-3 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-3 text-sm">
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-current text-yellow-500" />
                              {repo.stargazers_count}
                            </span>
                          )}
                          <span className="bg-secondary flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium">
                            <GitFork className="mr-1 h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-bold transition-colors">
                        {repo.name}
                      </h3>

                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                        {repo.description || "Geen beschrijving beschikbaar."}
                      </p>

                      <div className="border-border mt-auto flex items-center justify-between border-t pt-4">
                        <span className="text-muted-foreground text-xs font-medium">
                          {repo.language}
                        </span>
                        <span className="text-primary flex items-center text-sm font-medium opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                          Bekijk Code <ArrowRight className="ml-1 h-4 w-4" />
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
            <div className="border-border bg-card/50 flex flex-col items-center justify-center rounded-2xl border border-dashed p-12 text-center backdrop-blur-sm">
              <Github className="text-muted-foreground/50 mb-4 h-12 w-12" />
              <h3 className="text-foreground mb-2 text-xl font-bold">Geen projecten gevonden</h3>
              <p className="text-muted-foreground">
                Controleer of de repository namen overeenkomen met de filter.
              </p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </main>
  )
}
