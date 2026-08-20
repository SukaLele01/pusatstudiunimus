import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Compass, FlaskConical, HandHeart, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-research.jpg";
import { Reveal } from "@/components/Reveal";
import { sections, stats, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pusat Studi Riset & Inovasi — Riset Berdampak" },
      {
        name: "description",
        content:
          "Pusat Studi Riset & Inovasi: kajian multidisiplin, publikasi ilmiah, inovasi terapan, dan pengabdian masyarakat berbasis bukti.",
      },
      { property: "og:title", content: "Pusat Studi Riset & Inovasi — Riset Berdampak" },
      {
        property: "og:description",
        content:
          "Riset bermutu, kolaborasi terbuka, dan dampak nyata bagi masyarakat, industri, serta kebijakan publik.",
      },
    ],
  }),
  component: Beranda,
});

const pillars = [
  { icon: FlaskConical, title: "Riset & Inovasi", slug: "riset-inovasi", text: "Penelitian dosen dan mahasiswa yang berujung pada solusi yang bisa dipakai." },
  { icon: HandHeart, title: "Pengabdian", slug: "pengabdian", text: "Pendampingan desa, sekolah, dan usaha kecil bersama warga." },
  { icon: BookOpen, title: "Publikasi & Dokumen", slug: "publikasi-dokumen", text: "Jurnal, buku, ringkasan kebijakan, dan dokumen yang bisa diunduh." },
  { icon: Compass, title: "Layanan & Kerja Sama", slug: "layanan-kerjasama", text: "Layanan kajian untuk mitra serta peluang magang riset mahasiswa." },
];

const audiences = [
  { who: "Mahasiswa", need: "Magang riset, asisten peneliti, dan bantuan dana penelitian.", slug: "layanan-kerjasama" },
  { who: "Dosen & Peneliti", need: "Bidang kajian, penelitian berjalan, dan arah riset Pusat Studi.", slug: "riset-inovasi" },
  { who: "Mitra & Instansi", need: "Layanan kajian, pelatihan, dan cara mengajukan kerja sama.", slug: "layanan-kerjasama" },
  { who: "Masyarakat Umum", need: "Program pendampingan, agenda terbuka, dan bacaan hasil riset.", slug: "pengabdian" },
];


function Beranda() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden surface-hero">
        <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" />
        <div className="pointer-events-none absolute -right-32 top-10 size-[26rem] rounded-full bg-gold/15 blur-3xl float-slow" />
        <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-28">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-gold">
                {SITE.org}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-7 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                Riset yang <span className="text-gold-gradient">berdampak</span>, kebijakan yang
                berbasis bukti
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <span className="mt-7 block rule-gold" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                {SITE.name} mengelola kajian multidisiplin, inovasi terapan, dan pengabdian
                masyarakat — dijalankan bersama mitra, dievaluasi dengan indikator yang jelas.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/profil"
                  className="sheen inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-soft transition-all hover:-translate-y-0.5"
                >
                  Kenali Pusat Studi <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/kolaborasi"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  Ajukan kolaborasi
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <span className="absolute -inset-3 rounded-3xl border border-gold/30 spin-slow" style={{ borderRadius: "40% 60% 55% 45%" }} />
              <img
                src={heroImage}
                width={1600}
                height={1008}
                alt="Peneliti berdiskusi di ruang atrium pusat studi riset universitas"
                className="relative w-full rounded-3xl border border-primary-foreground/15 object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-5 shadow-lift sm:block">
                <p className="font-display text-3xl text-navy-deep">120+</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Penelitian aktif
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden border-t border-primary-foreground/10 py-4">
          <div className="flex w-max marquee-track gap-10 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-primary-foreground/45">
            {Array.from({ length: 2 }).map((_, r) => (
              <span key={r} className="flex gap-10">
                {sections.map((s) => (
                  <span key={s.slug}>{s.label} ·</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card-lift rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
                <p className="font-display text-4xl text-navy-deep">{s.value}</p>
                <span className="mx-auto mt-3 block rule-gold" />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Empat pilar kerja</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-navy-deep sm:text-4xl">
            Siklus lengkap dari pertanyaan riset menuju manfaat publik
          </h2>
          <span className="mt-5 block rule-gold" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                to={"/" + p.slug}
                className="card-lift sheen group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-xl surface-hero text-primary-foreground">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl text-navy-deep">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Selengkapnya
                  <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-hero p-10 lg:p-16">
            <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-15" />
            <Quote className="relative size-9 text-gold" />
            <p className="relative mt-6 max-w-3xl font-display text-2xl leading-snug text-primary-foreground sm:text-3xl">
              Pengetahuan hanya bermakna ketika ia sampai pada keputusan — di ruang kelas, di balai
              desa, dan di meja perumus kebijakan.
            </p>
            <p className="relative mt-6 text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
              Kepala Pusat Studi
            </p>
          </div>
        </Reveal>
      </section>

      {/* All sections directory */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <h2 className="text-3xl text-navy-deep sm:text-4xl">Peta situs</h2>
          <span className="mt-5 block rule-gold" />
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Seluruh kanal informasi pusat studi, tertata rapi dalam dua belas bagian utama.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <Link to={"/" + s.slug} className="link-underline font-display text-xl text-navy-deep">
                  {s.label}
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">{s.tagline}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-foreground/70">
                  {s.subs.slice(0, 4).map((sub) => (
                    <li key={sub.title} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      {sub.title}
                    </li>
                  ))}
                  {s.subs.length > 4 && (
                    <li className="pl-3.5 text-muted-foreground">
                      +{s.subs.length - 4} lainnya
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-gold/40 bg-gold-soft/50 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div>
              <h2 className="text-3xl text-navy-deep">Punya gagasan riset bersama?</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Ajukan kolaborasi, permintaan narasumber, atau layanan konsultasi. Kami balas
                maksimal 7 hari kerja.
              </p>
            </div>
            <Link
              to="/kontak"
              className="sheen inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Hubungi kami <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
