import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { sections, SITE, type Section } from "@/lib/site-data";
import { cn } from "@/lib/utils";


function MenuItem({ section: s }: { section: Section }) {
  return (
    <div className="group relative">
      <Link
        to={"/" + s.slug}
        className="flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary"
        activeProps={{ className: "text-primary" }}
      >
        {s.label}
        <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full w-72 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-1 overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-lift">
          <span className="block h-0.5 w-full bg-gradient-to-r from-gold/80 to-transparent" />
          {s.subs.map((sub) => (
            <Link
              key={sub.title}
              to={"/" + s.slug}
              hash={slugify(sub.title)}
              className="block rounded-lg px-3 py-2 text-sm text-popover-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl shadow-soft"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="relative grid size-11 place-items-center rounded-xl surface-hero shadow-soft">
            <GraduationCap className="size-5 text-primary-foreground" />
            <span className="pointer-events-none absolute inset-0 rounded-xl border border-gold/60 transition-transform duration-500 group-hover:scale-110" />
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap font-display text-base font-semibold text-navy-deep">
              {SITE.short} <span className="text-gold-gradient">Riset</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Riset &amp; Inovasi Unimus
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center xl:flex">
          <Link
            to="/"
            className="rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Beranda
          </Link>
          {sections.map((s) => (
            <MenuItem key={s.slug} section={s} />
          ))}
          <Link
            to="/kontak"
            className="ml-2 rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Kontak
          </Link>
        </nav>


        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          className="ml-auto grid size-10 place-items-center rounded-lg border border-border bg-card text-primary xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-2 xl:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2.5 font-medium text-foreground"
          >
            Beranda
          </Link>
          {sections.map((s) => (
            <div key={s.slug} className="border-b border-border/70 last:border-0">
              <button
                onClick={() => setExpanded(expanded === s.slug ? null : s.slug)}
                className="flex w-full items-center justify-between px-3 py-2.5 text-left font-medium text-foreground"
              >
                {s.label}
                <ChevronDown
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-300",
                    expanded === s.slug && "rotate-180",
                  )}
                />
              </button>
              {expanded === s.slug && (
                <div className="pb-2 pl-3">
                  <Link
                    to={"/" + s.slug}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm font-semibold text-primary"
                  >
                    Lihat halaman {s.label}
                  </Link>
                  {s.subs.map((sub) => (
                    <Link
                      key={sub.title}
                      to={"/" + s.slug}
                      hash={slugify(sub.title)}
                      onClick={() => setOpen(false)}
                      className="block border-l border-border py-1.5 pl-3 text-sm text-muted-foreground"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/kontak"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-primary px-4 py-2.5 text-center font-semibold text-primary-foreground"
          >
            Kontak
          </Link>
        </div>
      )}
    </header>
  );
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
