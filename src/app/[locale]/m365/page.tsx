import { Container } from "@/components/layout/Container"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Link } from "@/i18n/routing"
import { Globe, Laptop, LifeBuoy, Mail, ShieldCheck, Smartphone } from "lucide-react"

export async function generateMetadata() {
  return {
    title: "Aanmelden bij Microsoft 365 | Turboot",
    description:
      "Stap voor stap je Microsoft 365-account in gebruik nemen: inloggen, beveiliging instellen en vanaf elke computer werken.",
  }
}

function Chip({ children, href }: { children: React.ReactNode; href?: string }) {
  const className =
    "bg-muted text-foreground rounded-md px-1.5 py-0.5 font-mono text-[0.85em] break-words"
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:text-primary underline decoration-dotted underline-offset-2 transition-colors`}
      >
        {children}
      </a>
    )
  }
  return <code className={className}>{children}</code>
}

// This onboarding page is written for Dutch business clients (their office users),
// so the copy is intentionally Dutch-only while still using the site's design tokens.
const steps = [
  {
    title: "Ga naar de aanmeldpagina",
    body: (
      <>
        Open <Chip href="https://www.microsoft365.com">microsoft365.com</Chip> in je browser en klik
        op <strong>Aanmelden</strong>.
      </>
    ),
  },
  {
    title: "Vul je gegevens in",
    body: (
      <>
        Eerst je zakelijke e-mailadres, daarna het tijdelijke wachtwoord dat je van Turboot hebt
        gekregen.
      </>
    ),
  },
  {
    title: "Kies je eigen wachtwoord",
    body: (
      <>
        Je wordt gevraagd een nieuw wachtwoord te maken. Kies iets sterks van minimaal 8 tekens, met
        een hoofdletter, een cijfer en een symbool. Alleen jij kent het.
      </>
    ),
  },
  {
    title: "Stel de beveiliging in (MFA)",
    body: (
      <>
        Je ziet de melding &ldquo;Meer informatie vereist&rdquo;. Installeer de app{" "}
        <strong>Microsoft Authenticator</strong> op je telefoon, scan de QR-code op je scherm en
        bevestig. Voortaan meld je je aan met een tik op je telefoon.
      </>
    ),
  },
  {
    title: "Klaar, je bent binnen",
    body: <>Je komt in je Microsoft 365 met Outlook (mail), Word, Excel, Teams en meer.</>,
  },
]

const devices = [
  {
    icon: Globe,
    title: "Elke computer, via de browser",
    body: (
      <>
        Ga naar <Chip href="https://www.microsoft365.com">microsoft365.com</Chip>, meld je aan en
        werk direct in de browser. Geen installatie nodig.
      </>
    ),
  },
  {
    icon: Mail,
    title: "Direct naar je mail",
    body: (
      <>
        <Chip href="https://outlook.office.com">outlook.office.com</Chip> opent Outlook meteen,
        zonder omwegen.
      </>
    ),
  },
  {
    icon: Laptop,
    title: "Je eigen PC of Mac",
    body: (
      <>
        Installeer de volledige Office-apps via{" "}
        <Chip href="https://www.microsoft365.com">microsoft365.com</Chip> met de knop{" "}
        <strong>Apps installeren</strong>. Dit mag op meerdere eigen apparaten.
      </>
    ),
  },
  {
    icon: Smartphone,
    title: "Telefoon of tablet",
    body: (
      <>
        Installeer de <strong>Outlook</strong>-app en voeg je account toe. Je mail staat meteen op
        je toestel.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "De beveiliging reist mee",
    body: (
      <>
        Meld je je aan op een nieuwe computer, dan krijg je een goedkeuringsvraag op je telefoon. Zo
        blijft je account veilig, waar je ook werkt.
      </>
    ),
  },
]

export default function M365Page() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="border-border border-b py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
                Beheerd Microsoft 365
              </p>
              <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Zo meld je je aan bij Microsoft 365
              </h1>
              <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
                Een korte handleiding om je nieuwe zakelijke account in gebruik te nemen: inloggen,
                beveiliging instellen en overal werken.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Je account */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-foreground text-3xl font-bold tracking-tight">Je account</h2>
              <ul className="mt-6 space-y-4">
                {[
                  <>
                    Je inlognaam is je zakelijke e-mailadres, bijvoorbeeld{" "}
                    <Chip>naam@jouwbedrijf.nl</Chip>.
                  </>,
                  <>
                    Je hebt van Turboot een tijdelijk wachtwoord gekregen. Dit wijzig je bij de
                    eerste keer aanmelden.
                  </>,
                  <>Houd je telefoon bij de hand. Die heb je nodig voor de beveiliging (MFA).</>,
                ].map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3 text-lg leading-relaxed">
                    <span className="bg-primary mt-2.5 h-2 w-2 shrink-0 rotate-45 rounded-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Eerste keer aanmelden */}
      <section className="bg-card/30 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-foreground text-3xl font-bold tracking-tight">
                Eerste keer aanmelden
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Vijf stappen. Eenmalig, daarna log je gewoon in met je eigen wachtwoord.
              </p>
            </ScrollReveal>
            <ol className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 80} animation="slide-in-left">
                  <li className="border-border bg-card relative rounded-2xl border p-6 pl-16 shadow-sm">
                    <span className="bg-primary text-primary-foreground absolute top-6 left-5 grid h-8 w-8 place-items-center rounded-full text-sm font-bold tabular-nums">
                      {i + 1}
                    </span>
                    <h3 className="text-foreground font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{step.body}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal>
              <div className="border-primary/25 bg-primary/5 mt-6 flex gap-3 rounded-2xl border p-5">
                <ShieldCheck className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-foreground leading-relaxed">
                  <strong>Tip:</strong> de Microsoft Authenticator-app is de veiligste en snelste
                  manier. Een tik op je telefoon en je bent aangemeld.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Werken vanaf elke computer */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-foreground text-3xl font-bold tracking-tight">
                  Werken vanaf elke computer
                </h2>
                <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-bold tracking-wide uppercase">
                  Ja
                </span>
              </div>
              <p className="text-muted-foreground mt-4 text-lg">
                Microsoft 365 draait in de cloud. Je bent niet aan een computer gebonden.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {devices.map((d, i) => {
                const Icon = d.icon
                return (
                  <ScrollReveal key={i} delay={i * 80} animation="scale-up">
                    <div className="border-border bg-card/50 h-full rounded-2xl border p-6">
                      <div className="bg-primary/10 text-primary mb-4 w-fit rounded-xl p-2.5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-foreground font-semibold">{d.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{d.body}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
            <ScrollReveal>
              <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-5 dark:border-amber-500/30 dark:bg-amber-950/40">
                <span aria-hidden className="text-lg leading-6">
                  ⚠️
                </span>
                <p className="leading-relaxed text-amber-900 dark:text-amber-200">
                  <strong>Op een openbare of gedeelde computer:</strong> gebruik de browser, laat
                  &ldquo;aangemeld blijven&rdquo; uit, en meld je af als je klaar bent.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Gedeelde postvakken */}
      <section className="bg-card/30 py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-foreground text-3xl font-bold tracking-tight">
                Gedeelde postvakken
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                Naast je eigen mailbox heb je toegang tot gedeelde adressen zoals <Chip>info@</Chip>
                , <Chip>administratie@</Chip> of <Chip>hr@</Chip>, afhankelijk van je rol. In
                Outlook verschijnen die vanzelf in je mappenlijst. Zie je ze niet? Open ze via je
                profielfoto rechtsboven en kies &ldquo;Ander postvak openen&rdquo;.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Hulp nodig */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal animation="scale-up">
            <div className="border-border bg-card mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-3xl border p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-xl p-3">
                  <LifeBuoy className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-foreground text-xl font-bold">Hulp nodig?</h2>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Kom je er niet uit met aanmelden of de beveiliging? Neem contact op met Turboot,
                    we helpen je verder.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex shrink-0 items-center rounded-full px-6 py-3 text-base font-medium shadow-lg shadow-purple-600/30 transition hover:-translate-y-0.5"
              >
                Contact
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
