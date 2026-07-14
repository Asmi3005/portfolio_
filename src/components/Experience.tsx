import { experiences } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading title="Experience" eyebrow="Work" />
        </FadeIn>

        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
          {experiences.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.06}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.91rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg md:-left-[2.41rem]"
                />

                <article className="rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/30 md:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-fg">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {job.company}
                        <span className="text-muted"> · {job.location}</span>
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-muted">{job.duration}</p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-sm leading-relaxed text-muted md:text-[0.95rem]"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-bg/50 px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
