"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/sections/PageHeader"
import { COMPANY_INFO } from "@/lib/constants"
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { useTranslations } from "next-intl"

// Form validation schema creator
const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t("form.errors.name")),
    email: z.string().email(t("form.errors.email")),
    subject: z.string().min(5, t("form.errors.subject")),
    message: z.string().min(20, t("form.errors.message")),
  })

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export default function ContactPage() {
  const t = useTranslations("Contact")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const contactSchema = createContactSchema(t)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        setErrorMessage(null)
        reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        console.error("Form submission error:", result)
        if (result.error === "NOT_IMPLEMENTED") {
          setErrorMessage(t("form.errors.not_implemented"))
        } else {
          setErrorMessage(t("form.errors.generic"))
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setErrorMessage(t("form.errors.generic"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <PageHeader title={t("hero.title")} description={t("hero.description")} />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ScrollReveal animation="slide-in-left">
                <h2 className="text-foreground mb-6 text-2xl font-bold">{t("info.title")}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("info.description")}
                </p>

                <div className="space-y-6">
                  <div className="bg-card/50 border-border flex items-start space-x-4 rounded-xl border p-4">
                    <Mail className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">{t("info.email")}</p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="bg-card/50 border-border flex items-start space-x-4 rounded-xl border p-4">
                    <MapPin className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">{t("info.location")}</p>
                      <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="bg-card/50 border-border flex items-start space-x-4 rounded-xl border p-4">
                    <Clock className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">{t("info.availability")}</p>
                      <p className="text-muted-foreground">{t("info.weekdays")}</p>
                      <p className="text-muted-foreground">{t("info.weekend")}</p>
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                <div className="border-border bg-card/30 mt-8 rounded-2xl border p-6 backdrop-blur-sm">
                  <h3 className="text-foreground mb-4 text-lg font-semibold">
                    {t("info.business.title")}
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t("info.business.name")}</dt>
                      <dd className="text-foreground font-semibold">{COMPANY_INFO.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t("info.business.kvk")}</dt>
                      <dd className="text-foreground font-semibold">{COMPANY_INFO.kvk}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t("info.business.btw")}</dt>
                      <dd className="text-foreground font-semibold">{COMPANY_INFO.btw}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="slide-in-right" delay={200}>
                <div className="border-border bg-card/50 rounded-2xl border shadow-xl backdrop-blur-sm">
                  <div className="border-border border-b p-6">
                    <h3 className="text-foreground text-2xl font-bold">{t("form.title")}</h3>
                    <p className="text-muted-foreground mt-2">{t("form.description")}</p>
                  </div>
                  <div className="p-6">
                    {isSubmitted && (
                      <div className="mb-6 flex items-center space-x-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <p className="font-medium">{t("form.success")}</p>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="mb-6 flex items-center space-x-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                        <p className="font-medium">{errorMessage}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">
                            {t("form.name")}
                          </Label>
                          <Input
                            id="name"
                            placeholder={t("form.name_placeholder")}
                            {...register("name")}
                            className={`bg-background/50 ${errors.name ? "border-red-500" : "border-border"}`}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">
                            {t("form.email")}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("form.email_placeholder")}
                            {...register("email")}
                            className={`bg-background/50 ${errors.email ? "border-red-500" : "border-border"}`}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground">
                          {t("form.subject")}
                        </Label>
                        <Input
                          id="subject"
                          placeholder={t("form.subject_placeholder")}
                          {...register("subject")}
                          className={`bg-background/50 ${errors.subject ? "border-red-500" : "border-border"}`}
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">
                          {t("form.message")}
                        </Label>
                        <Textarea
                          id="message"
                          placeholder={t("form.message_placeholder")}
                          rows={6}
                          {...register("message")}
                          className={`bg-background/50 ${errors.message ? "border-red-500" : "border-border"}`}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            {t("form.submitting")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("form.submit")}
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="border-border bg-card/50 mt-8 rounded-2xl border shadow-lg backdrop-blur-sm">
                  <div className="border-border border-b p-6">
                    <h3 className="text-foreground text-2xl font-bold">{t("faq.title")}</h3>
                  </div>
                  <div className="space-y-6 p-6">
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">{t("faq.q1.question")}</h4>
                      <p className="text-muted-foreground">{t("faq.q1.answer")}</p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">{t("faq.q2.question")}</h4>
                      <p className="text-muted-foreground">{t("faq.q2.answer")}</p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">{t("faq.q3.question")}</h4>
                      <p className="text-muted-foreground">{t("faq.q3.answer")}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
