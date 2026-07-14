import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Technical Skills"
            eyebrow="Toolkit"
            description="Organized by the areas I work in most — languages, AI/ML systems, backend infrastructure, data tooling, and web fundamentals."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/35 p-5 transition-colors hover:border-accent/30">
                <h3 className="text-sm font-semibold tracking-tight text-fg">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-bg/45 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
