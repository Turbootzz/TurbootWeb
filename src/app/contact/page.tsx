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

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters zijn"),
  email: z.string().email("Ongeldig e-mailadres"),
  subject: z.string().min(5, "Onderwerp moet minimaal 5 karakters zijn"),
  message: z.string().min(20, "Bericht moet minimaal 20 karakters zijn"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

      if (result.success) {
        setIsSubmitted(true)
        reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        console.error("Form submission error:", result)
        // You could set an error state here to show an error message
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // You could set an error state here to show an error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Contact"
        description="Heeft u een project in gedachten? Laten we het bespreken! Ik help u graag met het realiseren van uw digitale ambities."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ScrollReveal animation="slide-in-left">
                <h2 className="text-foreground mb-6 text-2xl font-bold">Neem Contact Op</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ik reageer meestal binnen 24 uur op berichten. Voor dringende zaken kunt u mij
                  telefonisch bereiken.
                </p>

                <div className="space-y-6">
                  <div className="bg-card/50 border-border flex items-start space-x-4 rounded-xl border p-4">
                    <Mail className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">E-mail</p>
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
                      <p className="text-foreground font-semibold">Locatie</p>
                      <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="bg-card/50 border-border flex items-start space-x-4 rounded-xl border p-4">
                    <Clock className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">Bereikbaar</p>
                      <p className="text-muted-foreground">Ma-Vr: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Weekend: 9:00 - 20:00</p>
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                <div className="border-border bg-card/30 mt-8 rounded-2xl border p-6 backdrop-blur-sm">
                  <h3 className="text-foreground mb-4 text-lg font-semibold">Bedrijfsgegevens</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Bedrijfsnaam:</dt>
                      <dd className="text-foreground font-semibold">{COMPANY_INFO.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">KvK:</dt>
                      <dd className="text-foreground font-semibold">{COMPANY_INFO.kvk}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">BTW:</dt>
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
                    <h3 className="text-foreground text-2xl font-bold">Stuur een Bericht</h3>
                    <p className="text-muted-foreground mt-2">
                      Vul het formulier in en ik neem zo snel mogelijk contact met u op.
                    </p>
                  </div>
                  <div className="p-6">
                    {isSubmitted && (
                      <div className="mb-6 flex items-center space-x-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <p className="font-medium">
                          Bedankt voor uw bericht! Ik neem zo snel mogelijk contact met u op.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">
                            Naam *
                          </Label>
                          <Input
                            id="name"
                            placeholder="Jan Jansen"
                            {...register("name")}
                            className={`bg-background/50 ${errors.name ? "border-red-500" : "border-border"}`}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">
                            E-mail *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jan@example.com"
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
                          Onderwerp *
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Nieuwe website voor mijn bedrijf"
                          {...register("subject")}
                          className={`bg-background/50 ${errors.subject ? "border-red-500" : "border-border"}`}
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">
                          Bericht *
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Vertel me meer over uw project..."
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
                            Verzenden...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Verstuur Bericht
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="border-border bg-card/50 mt-8 rounded-2xl border shadow-lg backdrop-blur-sm">
                  <div className="border-border border-b p-6">
                    <h3 className="text-foreground text-2xl font-bold">Veelgestelde Vragen</h3>
                  </div>
                  <div className="space-y-6 p-6">
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">Wat zijn uw tarieven?</h4>
                      <p className="text-muted-foreground">
                        Mijn tarieven zijn afhankelijk van het type en de complexiteit van het
                        project. Na ons eerste gesprek ontvangt u een transparante offerte zonder
                        verborgen kosten.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">
                        Hoe lang duurt een gemiddeld project?
                      </h4>
                      <p className="text-muted-foreground">
                        Dit varieert sterk per project. Een eenvoudige website kan binnen 2-3 weken
                        klaar zijn, terwijl complexe software projecten meerdere maanden kunnen
                        duren.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">
                        Biedt u ook onderhoud en support?
                      </h4>
                      <p className="text-muted-foreground">
                        Ja, ik bied onderhoudscontracten aan voor alle projecten die ik ontwikkel.
                        Dit zorgt ervoor dat uw software up-to-date en veilig blijft.
                      </p>
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
