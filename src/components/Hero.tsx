"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { hero, site, socialLinks } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 pt-24 md:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl md:h-96 md:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pb-24 md:pt-12 lg:px-8">
        <div>
          <motion.p
            className="mb-3 text-sm font-medium text-muted"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {hero.intro}
          </motion.p>

          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {hero.name}
          </motion.h1>

          <motion.p
            className="mt-3 text-base font-medium text-accent sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {site.headline}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-pretty text-xl font-medium leading-snug text-fg/90 sm:text-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {hero.statement}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-[1.05rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {hero.primaryCta.label}
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Download className="h-4 w-4" aria-hidden />
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/50 text-muted transition-colors hover:border-accent/40 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[280px] sm:max-w-[320px] md:mx-0 md:max-w-none md:justify-self-end"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-[0_0_0_1px_rgba(107,138,254,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
              <Image
                src={site.profileImage}
                alt="Portrait of Asmi"
                fill
                priority
                sizes="(max-width: 768px) 280px, 360px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
