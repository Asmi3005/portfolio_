import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/types/portfolio";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

function ProjectVisual({
  visual,
  name,
}: {
  visual: ProjectItem["visual"];
  name: string;
}) {
  const labels = {
    typeform: {
      title: "Form Builder",
      subtitle: "One question at a time",
      chips: ["Builder", "Fill flow", "Responses"],
    },
    face: {
      title: "Face Anonymizer",
      subtitle: "Blur · Pixelate · Blackout · Emoji",
      chips: ["Webcam", "Image", "Video"],
    },
    medibot: {
      title: "Medibot",
      subtitle: "Intent routing + LLM fallback",
      chips: ["FastAPI", "Streamlit", "NLTK"],
    },
  } as const;

  const meta = labels[visual];

  return (
    <div
      className="group/visual relative overflow-hidden rounded-xl border border-border bg-bg"
      aria-hidden
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface/70 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] text-muted">{name}</span>
      </div>

      <div
        className={cn(
          "relative min-h-[200px] p-5 md:min-h-[240px]",
          visual === "typeform" && "bg-[radial-gradient(circle_at_20%_20%,rgba(107,138,254,0.18),transparent_45%),linear-gradient(160deg,#0f121a,#121826)]",
          visual === "face" && "bg-[radial-gradient(circle_at_80%_30%,rgba(107,138,254,0.14),transparent_40%),linear-gradient(160deg,#10141c,#151b28)]",
          visual === "medibot" && "bg-[radial-gradient(circle_at_50%_80%,rgba(107,138,254,0.16),transparent_45%),linear-gradient(160deg,#0f131b,#141a27)]",
        )}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-grid" />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">
              Project
            </p>
            <p className="mt-2 text-lg font-semibold text-fg">{meta.title}</p>
            <p className="mt-1 text-sm text-muted">{meta.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {meta.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-border/80 bg-surface/60 px-2.5 py-1 text-[11px] text-muted"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <FadeIn delay={index * 0.05}>
      <article
        className={cn(
          "group grid items-center gap-6 rounded-2xl border border-border bg-surface/30 p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_18px_50px_-30px_rgba(107,138,254,0.45)] md:grid-cols-2 md:gap-8 md:p-6",
        )}
      >
        <div className={cn(reversed && "md:order-2")}>
          <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.015]">
            <ProjectVisual visual={project.visual} name={project.name} />
          </div>
        </div>

        <div className={cn("px-1 md:px-2", reversed && "md:order-1")}>
          <h3 className="text-2xl font-semibold tracking-tight text-fg">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-bg/50 px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Live Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-bg/40 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Featured Projects"
            eyebrow="Selected work"
            description="A mix of full-stack product work, computer vision, and AI application development."
          />
        </FadeIn>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
