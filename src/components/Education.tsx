import { education } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading title="Education" eyebrow="Academic" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <article className="rounded-2xl border border-border bg-surface/35 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
                  {education.institution}
                </h3>
                <p className="mt-2 text-sm text-muted">{education.location}</p>
                <p className="mt-4 text-base font-medium text-fg">
                  {education.degree}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="text-sm text-muted">{education.duration}</p>
                <p className="mt-2 text-sm font-medium text-accent">
                  GPA: {education.gpa}
                </p>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
