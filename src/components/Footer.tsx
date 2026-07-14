import { Github, Linkedin, Mail } from "lucide-react";
import { site, socialLinks } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-tight text-fg">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {site.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
