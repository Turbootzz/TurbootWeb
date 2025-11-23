"use client"

import Image from "next/image"
import { getLocalImagePath } from "@/lib/project-images"

interface ProjectImageProps {
  repoName: string
}

export function ProjectImage({ repoName }: ProjectImageProps) {
  // Check manifest to see if we have a local image
  const localImagePath = getLocalImagePath(repoName)
  const imgSrc = localImagePath || `https://opengraph.githubassets.com/1/Turbootzz/${repoName}`

  return (
    <div className="border-border bg-muted relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden border-b">
      <Image
        src={imgSrc}
        alt={repoName}
        fill
        unoptimized={!localImagePath}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}
