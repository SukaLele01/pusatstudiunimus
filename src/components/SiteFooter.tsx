import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { sections, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 surface-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              {SITE.short} <span className="text-gold-gradient">Riset &amp; Inovasi</span>
            </p>
            <span className="mt-4 block rule-gold" />
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">{SITE.tagline}. {SITE.org}.</p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {SITE.address}
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                {SITE.email}
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                {SITE.phone}
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {chunk([...sections.map((s) => ({ slug: s.slug, label: s.label })), { slug: "kontak", label: "Kontak" }], 3).map(
              (group, i) => (
                <ul key={i} className="space-y-2.5 text-sm">
                  {group.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={"/" + s.slug}
                        className="link-underline inline-block text-primary-foreground/80 transition-colors hover:text-gold"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Seluruh hak cipta dilindungi.</p>
          <p>Riset bermutu · Kolaborasi terbuka · Dampak nyata</p>
        </div>
      </div>
    </footer>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
