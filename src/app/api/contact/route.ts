import { NextResponse } from "next/server"
import { z } from "zod"

// Validation schema
// const contactSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   subject: z.string().min(5),
//   message: z.string().min(20),
// })

export async function POST() {
  try {
    // const body = await request.json()

    // Validate input
    //const validatedData = contactSchema.parse(body)

    // TODO: When database is connected, save to database
    // TODO: Implement database storage for contact submissions
    // const submission = await ...
    //   data: validatedData,
    // })

    // TODO: Send email notification
    // await sendEmail({
    //   to: COMPANY_INFO.email,
    //   subject: `New contact form submission: ${validatedData.subject}`,
    //   ...
    // })

    // Placeholder: Return 501 Not Implemented until email service is set up
    return NextResponse.json({ success: false, error: "NOT_IMPLEMENTED" }, { status: 501 })
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
