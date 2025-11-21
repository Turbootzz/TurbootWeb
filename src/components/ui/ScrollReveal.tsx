"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "reveal" | "slide-in-right" | "scale-up"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  animation = "reveal",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const animationClass = {
    reveal: "animate-reveal",
    "slide-in-right": "animate-slide-in-right",
    "scale-up": "animate-scale-up",
  }[animation]

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? animationClass : "opacity-0")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
