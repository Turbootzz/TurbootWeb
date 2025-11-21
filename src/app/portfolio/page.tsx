import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Container } from "@/components/layout/Container"
import Link from "next/link"
import { ArrowRight, Github, Star, GitFork } from "lucide-react"

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

async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    // Note: The standard GitHub API does not provide a direct way to get "pinned" repos
    // without authentication or GraphQL.
    // For this implementation, we fetch public repos and sort by stars/updates as a proxy,
    // or we could filter by specific names if known.
    // For now, we will fetch the user's public repos.
    const res = await fetch(
      "https://api.github.com/users/Turbootzz/repos?sort=updated&per_page=100",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const repos: GithubRepo[] = await res.json()

    // Filter out forks or specific repos if needed.
    // Since we want "pinned" ones but can't get them easily via REST without auth,
    // we can prioritize ones with descriptions or stars.
    // Let's just return the non-forked ones sorted by update time for now.
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 6) // Take top 6
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
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
                GitHub Projects.
              </h1>
              <p className="text-muted-foreground text-xl">
                Een selectie van mijn open-source werk en persoonlijke projecten.
                <br />
                <span className="text-sm opacity-70">(Live data van GitHub: Turbootzz)</span>
              </p>
            </div>

            <Link
              href="https://github.com/Turbootzz"
              target="_blank"
              className="bg-card text-foreground hover:bg-accent hover:text-accent-foreground border-border inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-colors"
            >
              <Github className="h-5 w-5" />
              Bekijk volledig profiel
            </Link>
          </div>
        </ScrollReveal>

        {repos.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
              <ScrollReveal key={repo.id} delay={index * 100} animation="scale-up">
                <Link href={repo.html_url} target="_blank" className="group block h-full">
                  <div className="bg-card border-border hover:border-primary relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 group-hover:-translate-y-1 hover:shadow-lg">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                          <Github className="h-5 w-5" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-3 text-sm">
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-foreground mb-2 text-xl font-bold group-hover:text-blue-500">
                        {repo.name}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                        {repo.description || "Geen beschrijving beschikbaar."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex flex-wrap gap-2">
                        {repo.language && (
                          <span className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs font-medium">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <span className="text-primary flex items-center text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                        Code <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="bg-card border-border rounded-2xl border p-12 text-center">
              <Github className="text-muted-foreground mx-auto mb-4 h-12 w-12 opacity-50" />
              <h3 className="text-foreground mb-2 text-xl font-bold">Geen projecten gevonden</h3>
              <p className="text-muted-foreground">
                Kon geen publieke repositories laden van GitHub. Probeer het later opnieuw.
              </p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </main>
  )
}
