import { about, highlights } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading title="About Me" eyebrow="Introduction" />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14">
          <FadeIn delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <FadeIn key={item.label} delay={0.08 + index * 0.05}>
                <div className="rounded-xl border border-border bg-surface/40 px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-fg">
                    {item.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
