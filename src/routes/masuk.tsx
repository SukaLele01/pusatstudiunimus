import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { claimFirstAdmin } from "@/lib/staff.functions";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/masuk")({
  head: () => ({
    meta: [
      { title: "Masuk Staf — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Halaman masuk khusus staf pengelola untuk memperbarui berita, agenda, publikasi, dan dokumentasi Pusat Studi Unimus.",
      },
      { property: "og:title", content: "Masuk Staf — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Akses pengelolaan isi situs untuk staf yang terdaftar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MasukPage,
});

function MasukPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"masuk" | "daftar">("masuk");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function afterSignIn() {
    try {
      await claimFirstAdmin();
    } catch {
      /* akun bukan yang pertama atau sudah punya peran */
    }
    navigate({ to: "/admin", replace: true });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "masuk") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await afterSignIn();
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/masuk" },
        });
        if (error) throw error;
        if (data.session) {
          await afterSignIn();
        } else {
          toast.success("Akun dibuat. Silakan cek email untuk konfirmasi, lalu masuk.");
          setMode("masuk");
        }
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Tidak berhasil. Coba lagi.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="relative overflow-hidden surface-hero">
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gold/20 blur-3xl float-slow" />
      <div className="relative mx-auto flex max-w-md flex-col justify-center px-4 py-24">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-lift">
            <span className="grid size-12 place-items-center rounded-xl surface-hero text-primary-foreground">
              <ShieldCheck className="size-5" />
            </span>
            <h1 className="mt-5 text-2xl text-navy-deep">
              {mode === "masuk" ? "Masuk staf" : "Daftar akun staf"}
            </h1>
            <span className="mt-4 block rule-gold" />
            <p className="mt-4 text-sm text-muted-foreground">
              Halaman ini hanya untuk staf pengelola isi situs.
            </p>

            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Kata sandi</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === "masuk" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={busy} className="w-full">
                {busy ? "Memproses…" : mode === "masuk" ? "Masuk" : "Buat akun"}
              </Button>
            </form>

            <button
              type="button"
              onClick={() => setMode(mode === "masuk" ? "daftar" : "masuk")}
              className="mt-5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {mode === "masuk"
                ? "Belum punya akun? Daftar akun staf"
                : "Sudah punya akun? Masuk di sini"}
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
