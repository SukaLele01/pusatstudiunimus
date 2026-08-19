import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Pusat Studi Riset & Inovasi" },
      {
        name: "description",
        content:
          "Hubungi Pusat Studi Riset & Inovasi untuk kolaborasi riset, layanan konsultasi, permintaan narasumber, dan informasi program.",
      },
      { property: "og:title", content: "Kontak — Pusat Studi Riset & Inovasi" },
      {
        property: "og:description",
        content: "Alamat, email, telepon, dan formulir pengajuan kerja sama Pusat Studi Riset & Inovasi.",
      },
    ],
  }),
  component: KontakPage,
});

function KontakPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <section className="relative overflow-hidden surface-hero">
        <div className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-gold/20 blur-3xl float-slow" />
        <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Kontak</p>
            <h1 className="mt-5 text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
              Mari bekerja bersama
            </h1>
            <span className="mt-6 block rule-gold" />
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
              Sampaikan kebutuhan riset, permintaan data, atau gagasan kolaborasi Anda. Tim kami
              menindaklanjuti setiap pesan maksimal 7 hari kerja.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-24">
        <Reveal>
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Alamat", value: SITE.address },
              { icon: Mail, label: "Email", value: SITE.email },
              { icon: Phone, label: "Telepon", value: SITE.phone },
              { icon: Clock, label: "Jam layanan", value: "Senin – Jumat, 08.00 – 16.00 WIB" },
            ].map((item) => (
              <div
                key={item.label}
                className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy-deep">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Pesan terkirim", {
                description: "Terima kasih, tim kami akan menghubungi Anda segera.",
              });
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-3xl border border-border bg-card p-7 shadow-lift lg:p-10"
          >
            <h2 className="text-2xl text-navy-deep">Formulir pengajuan</h2>
            <span className="mt-4 block rule-gold" />
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Nama lengkap" name="nama" />
              <Field label="Institusi" name="institusi" />
              <Field label="Email" name="email" type="email" />
              <Field label="Nomor telepon" name="telepon" />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-navy" htmlFor="topik">
                Topik
              </label>
              <select
                id="topik"
                name="topik"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              >
                <option>Kolaborasi riset</option>
                <option>Layanan konsultasi</option>
                <option>Permintaan narasumber</option>
                <option>Magang / research assistant</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-navy" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="sheen mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              {sent ? "Kirim pesan lagi" : "Kirim pesan"}
              <Send className="size-4" />
            </button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
