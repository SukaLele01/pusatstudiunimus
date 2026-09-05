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
  { icon: HandHeart, title: "Program", slug: "program", text: "Pengabdian, pemberdayaan, dan desa binaan, bersama penelitian dosen dan mahasiswa." },
  { icon: FlaskConical, title: "Kegiatan", slug: "kegiatan", text: "Berita, agenda acara terbuka, dan dokumentasi kegiatan kami." },
  { icon: BookOpen, title: "Publikasi", slug: "publikasi", text: "Artikel ilmiah, bacaan populer, dan laporan yang bisa diunduh." },
  { icon: Compass, title: "Mitra", slug: "mitra", text: "Layanan kajian untuk mitra serta peluang magang riset mahasiswa." },
];

const audiences = [
  { who: "Mahasiswa", need: "Magang riset, asisten peneliti, dan bantuan dana penelitian.", slug: "mitra" },
  { who: "Dosen & Peneliti", need: "Bidang kajian, penelitian berjalan, dan inovasi Pusat Studi.", slug: "program" },
  { who: "Mitra & Instansi", need: "Layanan kajian, pelatihan, dan cara mengajukan kerja sama.", slug: "mitra" },
  { who: "Masyarakat Umum", need: "Program pendampingan, agenda terbuka, dan bacaan hasil riset.", slug: "kegiatan" },
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
                {SITE.name} adalah unit riset Universitas Muhammadiyah Semarang. Kami menjalankan
                penelitian, inovasi, dan program bersama masyarakat — bersama mitra, dengan hasil
                yang terbuka untuk umum.
              </p>

            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/tentang-kami"
                  className="sheen inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-soft transition-all hover:-translate-y-0.5"
                >
                  Kenali Pusat Studi <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/mitra"
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
            {Array.from({ length: 4 }).map((_, r) => (
              <span key={r} className="flex gap-10">
                <span>Penelitian ·</span>
                <span>Inovasi ·</span>
                <span>Pengabdian ·</span>
                <span>Kemitraan ·</span>
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

      {/* Untuk Anda */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Untuk Anda</p>
          <h2 className="mt-4 text-3xl text-navy-deep sm:text-4xl">Mulai dari kebutuhan Anda</h2>
          <span className="mt-5 block rule-gold" />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.who} delay={i * 80}>
              <Link
                to={"/" + a.slug}
                className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <p className="font-display text-lg text-navy-deep">{a.who}</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.need}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Buka halaman
                  <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Menu utama */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <h2 className="text-3xl text-navy-deep sm:text-4xl">Menu utama</h2>
          <span className="mt-5 block rule-gold" />
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Lima halaman informasi, ditambah halaman Kontak. Setiap halaman berisi poin-poin
            singkat yang mudah dibaca.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link
                to={"/" + s.slug}
                className="card-lift sheen flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="font-display text-xl text-navy-deep">{s.label}</span>
                <p className="mt-3 text-sm text-muted-foreground">{s.tagline}.</p>
              </Link>
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
