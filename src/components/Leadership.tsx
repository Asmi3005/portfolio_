import { leadership } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Leadership() {
  return (
    <section
      id="beyond-code"
      className="scroll-mt-24 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <FadeIn>
          <SectionHeading title="Beyond Code" eyebrow="Involvement" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <article className="rounded-2xl border border-border bg-surface/30 p-6 md:p-7">
            <p className="text-sm font-medium text-accent">{leadership.role}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-fg">
              {leadership.organization}
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {leadership.contributions.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
