"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectImageProps {
  repoName: string
}

export function ProjectImage({ repoName }: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(`/images/projects/${repoName.toLowerCase()}.jpg`)
  const [useExternal, setUseExternal] = useState(false)
  const [attemptedExtensions, setAttemptedExtensions] = useState<string[]>([])

  const handleError = () => {
    const extensions = ["jpg", "jpeg", "png", "webp"]
    const nextExtension = extensions.find((ext) => !attemptedExtensions.includes(ext))

    if (nextExtension) {
      // Try next extension
      setAttemptedExtensions([...attemptedExtensions, nextExtension])
      setImgSrc(`/images/projects/${repoName.toLowerCase()}.${nextExtension}`)
    } else {
      // All extensions failed, use GitHub OpenGraph as final fallback
      setImgSrc(`https://opengraph.githubassets.com/1/Turbootzz/${repoName}`)
      setUseExternal(true)
    }
  }

  return (
    <div className="border-border bg-muted relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden border-b">
      <Image
        src={imgSrc}
        alt={repoName}
        fill
        unoptimized={useExternal}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={handleError}
      />
    </div>
  )
}
