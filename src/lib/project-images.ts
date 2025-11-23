export const PROJECT_IMAGES: Record<string, string> = {
  guessthecry: "jpg",
  nimbus: "jpeg",
  pokeportal: "jpg",
}

export function getLocalImagePath(repoName: string): string | null {
  const extension = PROJECT_IMAGES[repoName.toLowerCase()]
  if (!extension) return null
  return `/images/projects/${repoName.toLowerCase()}.${extension}`
}
