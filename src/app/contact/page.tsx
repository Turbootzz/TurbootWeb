"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/sections/PageHeader"
import { COMPANY_INFO } from "@/lib/constants"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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
    <>
      {/* Hero Section */}
      <PageHeader
        title="Contact"
        description="Heeft u een project in gedachten? Laten we het bespreken! Ik help u graag met het realiseren van uw digitale ambities."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">
                Neem Contact Op
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Ik reageer meestal binnen 24 uur op berichten.
                Voor dringende zaken kunt u mij telefonisch bereiken.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-950 dark:text-white">E-mail</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-950 dark:text-white">Telefoon</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-950 dark:text-white">Locatie</p>
                    <p className="text-gray-700 dark:text-gray-300">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-950 dark:text-white">Bereikbaar</p>
                    <p className="text-gray-700 dark:text-gray-300">Ma-Vr: 9:00 - 18:00</p>
                    <p className="text-gray-700 dark:text-gray-300">Weekend: Op afspraak</p>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="mt-8 bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-4">Bedrijfsgegevens</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-700 dark:text-gray-400">Bedrijfsnaam:</dt>
                    <dd className="font-semibold text-gray-950 dark:text-white">{COMPANY_INFO.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-700 dark:text-gray-400">KvK:</dt>
                    <dd className="font-semibold text-gray-950 dark:text-white">{COMPANY_INFO.kvk}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-700 dark:text-gray-400">BTW:</dt>
                    <dd className="font-semibold text-gray-950 dark:text-white">{COMPANY_INFO.btw}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-950 dark:text-white">Stuur een Bericht</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Vul het formulier in en ik neem zo snel mogelijk contact met u op.
                  </p>
                </div>
                <div className="p-6">
                  {isSubmitted && (
                    <div className="mb-6 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-4 flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0" />
                      <p className="text-green-800 dark:text-green-300 font-medium">
                        Bedankt voor uw bericht! Ik neem zo snel mogelijk contact met u op.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          placeholder="Jan Jansen"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jan@example.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp *</Label>
                      <Input
                        id="subject"
                        placeholder="Nieuwe website voor mijn bedrijf"
                        {...register("subject")}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        placeholder="Vertel me meer over uw project..."
                        rows={6}
                        {...register("message")}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
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
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-950 dark:text-white">Veelgestelde Vragen</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-950 dark:text-white mb-2">Wat zijn uw tarieven?</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mijn tarieven zijn afhankelijk van het type en de complexiteit van het project.
                      Na ons eerste gesprek ontvangt u een transparante offerte zonder verborgen kosten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-950 dark:text-white mb-2">Hoe lang duurt een gemiddeld project?</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Dit varieert sterk per project. Een eenvoudige website kan binnen 2-3 weken
                      klaar zijn, terwijl complexe software projecten meerdere maanden kunnen duren.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-950 dark:text-white mb-2">Biedt u ook onderhoud en support?</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ja, ik bied onderhoudscontracten aan voor alle projecten die ik ontwikkel.
                      Dit zorgt ervoor dat uw software up-to-date en veilig blijft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}