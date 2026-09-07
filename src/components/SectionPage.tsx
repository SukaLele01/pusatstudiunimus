import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { slugify } from "@/components/SiteHeader";
import { sections, type Section } from "@/lib/site-data";

export function SectionPage({ section, children }: { section: Section; children?: ReactNode }) {
  const others = sections.filter((s) => s.slug !== section.slug).slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden surface-hero">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gold/20 blur-3xl float-slow" />
        <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
              <Sparkles className="size-3.5" /> {section.label}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
              {section.title}
            </h1>
            <span className="mt-6 block rule-gold" />
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">{section.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="max-w-3xl font-display text-xl leading-relaxed text-navy sm:text-2xl">
            {section.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.subs.map((sub, i) => (
            <Reveal key={sub.title} delay={i * 70}>
              <article
                id={slugify(sub.title)}
                className="card-lift sheen h-full scroll-mt-28 rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl text-navy-deep">{sub.title}</h2>
                <span className="mt-3 block h-px w-full bg-border" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sub.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {children}

      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 lg:p-12">
            <h2 className="text-2xl text-navy-deep">Jelajahi bagian lain</h2>
            <span className="mt-4 block rule-gold" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={"/" + o.slug}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-navy shadow-soft transition-all hover:-translate-y-1 hover:border-gold"
                >
                  {o.label}
                  <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
