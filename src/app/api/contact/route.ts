import { NextResponse } from "next/server"
import { z } from "zod"

const TURBOOT_CORE_URL = process.env.TURBOOT_CORE_URL || "http://localhost:5229"

// Validation schema matching backend requirements
const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  phone: z.string().optional(),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON in request body" },
      { status: 400 }
    )
  }

  try {
    // Validate input
    const validatedData = contactSchema.parse(body)

    // Forward to TurbootCore backend
    const response = await fetch(`${TURBOOT_CORE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        subject: validatedData.subject,
        message: validatedData.message,
      }),
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error("Backend error:", response.status, responseText)
      try {
        const error = JSON.parse(responseText)
        return NextResponse.json(error, { status: response.status })
      } catch {
        return NextResponse.json(
          { success: false, message: "Backend error", status: response.status },
          { status: response.status }
        )
      }
    }

    let data: Record<string, unknown> = {}
    if (responseText) {
      try {
        data = JSON.parse(responseText)
      } catch {
        // Backend returned non-JSON success response, continue with empty data
      }
    }

    const id = typeof data.id === "string" || typeof data.id === "number" ? data.id : undefined

    return NextResponse.json({ success: true, ...(id !== undefined && { id }) })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 })
    }

    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden" },
      { status: 500 }
    )
  }
}
