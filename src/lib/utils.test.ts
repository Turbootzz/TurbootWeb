import { cn } from "./utils"
import { describe, it, expect } from "vitest"

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-500")
    expect(result).toBe("text-red-500 bg-blue-500")
  })

  it("handles conditional classes", () => {
    const result = cn("text-red-500", true && "bg-blue-500", false && "hidden")
    expect(result).toBe("text-red-500 bg-blue-500")
  })

  it("merges tailwind classes using tailwind-merge", () => {
    // p-4 should override p-2
    const result = cn("p-2", "p-4")
    expect(result).toBe("p-4")
  })

  it("handles arrays and objects", () => {
    const result = cn(["text-red-500", "bg-blue-500"], { "p-4": true, "m-4": false })
    expect(result).toBe("text-red-500 bg-blue-500 p-4")
  })
})
