import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // TODO: When database is connected, save to database
    // const submission = await prisma.contactSubmission.create({
    //   data: validatedData,
    // })

    // TODO: Send email notification
    // await sendEmail({
    //   to: COMPANY_INFO.email,
    //   subject: `New contact form submission: ${validatedData.subject}`,
    //   ...
    // })

    console.log("Contact form submission:", validatedData)

    return NextResponse.json(
      { success: true, message: "Bericht succesvol verzonden" },
      { status: 200 }
    )
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
