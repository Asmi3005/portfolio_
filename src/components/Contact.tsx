import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contact, contactIntro } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Let's Connect"
            eyebrow="Contact"
            description={contactIntro}
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg/50 text-accent">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-medium text-fg">Email</span>
                <span className="mt-1 block text-sm text-muted break-all group-hover:text-fg">
                  {contact.email}
                </span>
              </span>
            </a>

            <a
              href={contact.phoneHref}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg/50 text-accent">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-medium text-fg">Phone</span>
                <span className="mt-1 block text-sm text-muted group-hover:text-fg">
                  {contact.phone}
                </span>
              </span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg/50 text-accent">
                <Linkedin className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-medium text-fg">
                  LinkedIn
                </span>
                <span className="mt-1 block text-sm text-muted group-hover:text-fg">
                  linkedin.com/in/asmi-goyal-448138243
                </span>
              </span>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg/50 text-accent">
                <Github className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-medium text-fg">GitHub</span>
                <span className="mt-1 block text-sm text-muted group-hover:text-fg">
                  github.com/Asmi3005
                </span>
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email Me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
