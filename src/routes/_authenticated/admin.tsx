import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { LogOut, Plus, Pencil, Trash2, Newspaper, CalendarDays, BookOpen, Images } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  deleteRow,
  fetchEvents,
  fetchGallery,
  fetchPosts,
  fetchPublications,
  isStaffUser,
  saveRow,
  slugifyTitle,
  uploadMedia,
  type EventRow,
  type GalleryRow,
  type PostRow,
  type PublicationRow,
} from "@/lib/admin-content";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Dashboard Admin — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Kelola berita, agenda, publikasi, dan dokumentasi foto Pusat Studi Unimus dari satu tempat.",
      },
      { property: "og:title", content: "Dashboard Admin — Pusat Studi Unimus" },
      { property: "og:description", content: "Pengelolaan isi situs untuk staf." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

type Values = Record<string, unknown>;
const STATUS = ["published", "draft"];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function StatusSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
    >
      {STATUS.map((s) => (
        <option key={s} value={s}>
          {s === "published" ? "Terbit" : "Draf"}
        </option>
      ))}
    </select>
  );
}

function FileField({
  label,
  folder,
  accept,
  value,
  onChange,
}: {
  label: string;
  folder: string;
  accept: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <Field label={label}>
      <div className="flex flex-wrap items-center gap-3">
        <Input
          type="file"
          accept={accept}
          disabled={busy}
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setBusy(true);
            try {
              onChange(await uploadMedia(file, folder));
              toast.success("Berkas terunggah.");
            } catch (err) {
              toast.error(err instanceof Error ? err.message : "Unggahan gagal.");
            } finally {
              setBusy(false);
            }
          }}
        />
        {value ? (
          <a href={value} target="_blank" rel="noreferrer" className="text-xs text-primary underline">
            Lihat berkas
          </a>
        ) : null}
      </div>
    </Field>
  );
}

function useList<T>(loader: () => Promise<T[]>) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const reload = async () => {
    setLoading(true);
    try {
      setRows(await loader());
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal memuat data.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { rows, loading, reload };
}

function RowShell({
  title,
  meta,
  status,
  onEdit,
  onDelete,
}: {
  title: string;
  meta: string;
  status: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
      <div className="min-w-0">
        <p className="truncate font-medium text-navy-deep">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={
            "rounded-full px-3 py-1 text-[11px] font-semibold " +
            (status === "published"
              ? "bg-secondary text-primary"
              : "bg-muted text-muted-foreground")
          }
        >
          {status === "published" ? "Terbit" : "Draf"}
        </span>
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="size-3.5" />
        </Button>
        <Button size="sm" variant="outline" onClick={onDelete}>
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}

function Panel({
  heading,
  loading,
  editing,
  onNew,
  children,
  form,
}: {
  heading: string;
  loading: boolean;
  editing: boolean;
  onNew: () => void;
  children: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl text-navy-deep">{heading}</h2>
        {!editing && (
          <Button onClick={onNew} size="sm">
            <Plus className="mr-1 size-4" /> Tambah
          </Button>
        )}
      </div>
      {editing ? (
        <div className="rounded-2xl border border-border bg-secondary/40 p-6">{form}</div>
      ) : loading ? (
        <p className="text-sm text-muted-foreground">Memuat…</p>
      ) : (
        <div className="space-y-3">{children}</div>
      )}
    </div>
  );
}

/* ---------------- Berita ---------------- */

function BeritaPanel() {
  const { rows, loading, reload } = useList<PostRow>(fetchPosts);
  const [draft, setDraft] = useState<Partial<PostRow> | null>(null);
  const set = (patch: Partial<PostRow>) => setDraft((d) => ({ ...d, ...patch }));

  async function save() {
    if (!draft?.title) return toast.error("Judul wajib diisi.");
    const values: Values = {
      title: draft.title,
      slug: draft.slug?.trim() || slugifyTitle(draft.title),
      summary: draft.summary ?? null,
      content: draft.content ?? null,
      cover_url: draft.cover_url ?? null,
      published_at: draft.published_at ?? new Date().toISOString(),
      status: draft.status ?? "published",
    };
    try {
      await saveRow("posts", draft.id ?? null, values);
      toast.success("Berita disimpan.");
      setDraft(null);
      await reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menyimpan.");
    }
  }

  return (
    <Panel
      heading="Berita"
      loading={loading}
      editing={draft !== null}
      onNew={() => setDraft({ status: "published" })}
      form={
        <div className="grid gap-4">
          <Field label="Judul">
            <Input value={draft?.title ?? ""} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Ringkasan">
            <Textarea
              rows={2}
              value={draft?.summary ?? ""}
              onChange={(e) => set({ summary: e.target.value })}
            />
          </Field>
          <Field label="Isi berita">
            <Textarea
              rows={9}
              value={draft?.content ?? ""}
              onChange={(e) => set({ content: e.target.value })}
            />
          </Field>
          <FileField
            label="Foto utama"
            folder="berita"
            accept="image/*"
            value={draft?.cover_url ?? ""}
            onChange={(url) => set({ cover_url: url })}
          />
          <Field label="Tanggal terbit">
            <Input
              type="date"
              value={(draft?.published_at ?? new Date().toISOString()).slice(0, 10)}
              onChange={(e) => set({ published_at: new Date(e.target.value).toISOString() })}
            />
          </Field>
          <Field label="Status">
            <StatusSelect value={draft?.status ?? "published"} onChange={(v) => set({ status: v })} />
          </Field>
          <div className="flex gap-3">
            <Button onClick={save}>Simpan</Button>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Batal
            </Button>
          </div>
        </div>
      }
    >
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">Belum ada berita.</p>
      ) : (
        rows.map((r) => (
          <RowShell
            key={r.id}
            title={r.title}
            meta={new Date(r.published_at).toLocaleDateString("id-ID", { dateStyle: "long" })}
            status={r.status}
            onEdit={() => setDraft(r)}
            onDelete={async () => {
              if (!confirm("Hapus berita ini?")) return;
              await deleteRow("posts", r.id);
              await reload();
            }}
          />
        ))
      )}
    </Panel>
  );
}

/* ---------------- Agenda ---------------- */

function AgendaPanel() {
  const { rows, loading, reload } = useList<EventRow>(fetchEvents);
  const [draft, setDraft] = useState<Partial<EventRow> | null>(null);
  const set = (patch: Partial<EventRow>) => setDraft((d) => ({ ...d, ...patch }));

  async function save() {
    if (!draft?.title || !draft.starts_at) return toast.error("Judul dan waktu wajib diisi.");
    try {
      await saveRow("events", draft.id ?? null, {
        title: draft.title,
        starts_at: draft.starts_at,
        location: draft.location ?? null,
        description: draft.description ?? null,
        register_url: draft.register_url ?? null,
        status: draft.status ?? "published",
      });
      toast.success("Agenda disimpan.");
      setDraft(null);
      await reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menyimpan.");
    }
  }

  return (
    <Panel
      heading="Agenda"
      loading={loading}
      editing={draft !== null}
      onNew={() => setDraft({ status: "published" })}
      form={
        <div className="grid gap-4">
          <Field label="Judul acara">
            <Input value={draft?.title ?? ""} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Tanggal & waktu">
            <Input
              type="datetime-local"
              value={draft?.starts_at ? toLocalInput(draft.starts_at) : ""}
              onChange={(e) => set({ starts_at: new Date(e.target.value).toISOString() })}
            />
          </Field>
          <Field label="Lokasi">
            <Input value={draft?.location ?? ""} onChange={(e) => set({ location: e.target.value })} />
          </Field>
          <Field label="Keterangan">
            <Textarea
              rows={4}
              value={draft?.description ?? ""}
              onChange={(e) => set({ description: e.target.value })}
            />
          </Field>
          <Field label="Tautan pendaftaran">
            <Input
              placeholder="https://…"
              value={draft?.register_url ?? ""}
              onChange={(e) => set({ register_url: e.target.value })}
            />
          </Field>
          <Field label="Status">
            <StatusSelect value={draft?.status ?? "published"} onChange={(v) => set({ status: v })} />
          </Field>
          <div className="flex gap-3">
            <Button onClick={save}>Simpan</Button>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Batal
            </Button>
          </div>
        </div>
      }
    >
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">Belum ada agenda.</p>
      ) : (
        rows.map((r) => (
          <RowShell
            key={r.id}
            title={r.title}
            meta={`${new Date(r.starts_at).toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" })}${r.location ? " · " + r.location : ""}`}
            status={r.status}
            onEdit={() => setDraft(r)}
            onDelete={async () => {
              if (!confirm("Hapus agenda ini?")) return;
              await deleteRow("events", r.id);
              await reload();
            }}
          />
        ))
      )}
    </Panel>
  );
}

function toLocalInput(iso: string) {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/* ---------------- Publikasi ---------------- */

function PublikasiPanel() {
  const { rows, loading, reload } = useList<PublicationRow>(fetchPublications);
  const [draft, setDraft] = useState<Partial<PublicationRow> | null>(null);
  const set = (patch: Partial<PublicationRow>) => setDraft((d) => ({ ...d, ...patch }));

  async function save() {
    if (!draft?.title) return toast.error("Judul wajib diisi.");
    try {
      await saveRow("publications", draft.id ?? null, {
        title: draft.title,
        authors: draft.authors ?? null,
        year: draft.year ?? null,
        kind: draft.kind ?? "artikel",
        summary: draft.summary ?? null,
        file_url: draft.file_url ?? null,
        link_url: draft.link_url ?? null,
        status: draft.status ?? "published",
      });
      toast.success("Publikasi disimpan.");
      setDraft(null);
      await reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menyimpan.");
    }
  }

  return (
    <Panel
      heading="Publikasi"
      loading={loading}
      editing={draft !== null}
      onNew={() => setDraft({ status: "published", kind: "artikel", year: new Date().getFullYear() })}
      form={
        <div className="grid gap-4">
          <Field label="Judul">
            <Input value={draft?.title ?? ""} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <Field label="Penulis">
            <Input value={draft?.authors ?? ""} onChange={(e) => set({ authors: e.target.value })} />
          </Field>
          <Field label="Tahun">
            <Input
              type="number"
              value={draft?.year ?? ""}
              onChange={(e) => set({ year: e.target.value ? Number(e.target.value) : null })}
            />
          </Field>
          <Field label="Jenis">
            <select
              value={draft?.kind ?? "artikel"}
              onChange={(e) => set({ kind: e.target.value })}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="artikel">Artikel</option>
              <option value="laporan">Laporan</option>
            </select>
          </Field>
          <Field label="Ringkasan">
            <Textarea
              rows={4}
              value={draft?.summary ?? ""}
              onChange={(e) => set({ summary: e.target.value })}
            />
          </Field>
          <FileField
            label="Berkas PDF"
            folder="publikasi"
            accept="application/pdf"
            value={draft?.file_url ?? ""}
            onChange={(url) => set({ file_url: url })}
          />
          <Field label="Tautan luar (opsional)">
            <Input
              placeholder="https://…"
              value={draft?.link_url ?? ""}
              onChange={(e) => set({ link_url: e.target.value })}
            />
          </Field>
          <Field label="Status">
            <StatusSelect value={draft?.status ?? "published"} onChange={(v) => set({ status: v })} />
          </Field>
          <div className="flex gap-3">
            <Button onClick={save}>Simpan</Button>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Batal
            </Button>
          </div>
        </div>
      }
    >
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">Belum ada publikasi.</p>
      ) : (
        rows.map((r) => (
          <RowShell
            key={r.id}
            title={r.title}
            meta={`${r.kind === "laporan" ? "Laporan" : "Artikel"}${r.year ? " · " + r.year : ""}${r.authors ? " · " + r.authors : ""}`}
            status={r.status}
            onEdit={() => setDraft(r)}
            onDelete={async () => {
              if (!confirm("Hapus publikasi ini?")) return;
              await deleteRow("publications", r.id);
              await reload();
            }}
          />
        ))
      )}
    </Panel>
  );
}

/* ---------------- Dokumentasi ---------------- */

function DokumentasiPanel() {
  const { rows, loading, reload } = useList<GalleryRow>(fetchGallery);
  const [draft, setDraft] = useState<Partial<GalleryRow> | null>(null);
  const set = (patch: Partial<GalleryRow>) => setDraft((d) => ({ ...d, ...patch }));

  async function save() {
    if (!draft?.title || !draft.image_url) return toast.error("Judul dan foto wajib diisi.");
    try {
      await saveRow("gallery_items", draft.id ?? null, {
        title: draft.title,
        caption: draft.caption ?? null,
        image_url: draft.image_url,
        taken_at: draft.taken_at ?? null,
        status: draft.status ?? "published",
      });
      toast.success("Dokumentasi disimpan.");
      setDraft(null);
      await reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menyimpan.");
    }
  }

  return (
    <Panel
      heading="Dokumentasi foto"
      loading={loading}
      editing={draft !== null}
      onNew={() => setDraft({ status: "published" })}
      form={
        <div className="grid gap-4">
          <Field label="Judul">
            <Input value={draft?.title ?? ""} onChange={(e) => set({ title: e.target.value })} />
          </Field>
          <FileField
            label="Foto"
            folder="dokumentasi"
            accept="image/*"
            value={draft?.image_url ?? ""}
            onChange={(url) => set({ image_url: url })}
          />
          <Field label="Keterangan singkat">
            <Textarea
              rows={3}
              value={draft?.caption ?? ""}
              onChange={(e) => set({ caption: e.target.value })}
            />
          </Field>
          <Field label="Tanggal kegiatan">
            <Input
              type="date"
              value={draft?.taken_at ?? ""}
              onChange={(e) => set({ taken_at: e.target.value || null })}
            />
          </Field>
          <Field label="Status">
            <StatusSelect value={draft?.status ?? "published"} onChange={(v) => set({ status: v })} />
          </Field>
          <div className="flex gap-3">
            <Button onClick={save}>Simpan</Button>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Batal
            </Button>
          </div>
        </div>
      }
    >
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">Belum ada dokumentasi.</p>
      ) : (
        rows.map((r) => (
          <RowShell
            key={r.id}
            title={r.title}
            meta={r.taken_at ? new Date(r.taken_at).toLocaleDateString("id-ID", { dateStyle: "long" }) : "Tanpa tanggal"}
            status={r.status}
            onEdit={() => setDraft(r)}
            onDelete={async () => {
              if (!confirm("Hapus foto ini?")) return;
              await deleteRow("gallery_items", r.id);
              await reload();
            }}
          />
        ))
      )}
    </Panel>
  );
}

/* ---------------- Halaman ---------------- */

function AdminPage() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState<boolean | null>(null);

  useEffect(() => {
    void isStaffUser().then(setStaff);
  }, []);

  const tabs = useMemo(
    () => [
      { key: "berita", label: "Berita", icon: Newspaper },
      { key: "agenda", label: "Agenda", icon: CalendarDays },
      { key: "publikasi", label: "Publikasi", icon: BookOpen },
      { key: "dokumentasi", label: "Dokumentasi", icon: Images },
    ],
    [],
  );

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/masuk", replace: true });
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Dashboard staf</p>
          <h1 className="mt-3 text-3xl text-navy-deep">Kelola isi situs</h1>
          <span className="mt-4 block rule-gold" />
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-sm font-medium text-primary hover:underline">
            Lihat situs
          </Link>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="mr-1 size-4" /> Keluar
          </Button>
        </div>
      </div>

      {staff === false && (
        <p className="mt-8 rounded-xl border border-border bg-secondary/50 p-5 text-sm text-muted-foreground">
          Akun Anda belum diberi izin mengelola isi. Minta admin menambahkan peran untuk akun ini.
        </p>
      )}

      <Tabs defaultValue="berita" className="mt-10">
        <TabsList className="flex-wrap">
          {tabs.map((t) => (
            <TabsTrigger key={t.key} value={t.key} className="gap-2">
              <t.icon className="size-4" /> {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="berita" className="mt-8">
          <BeritaPanel />
        </TabsContent>
        <TabsContent value="agenda" className="mt-8">
          <AgendaPanel />
        </TabsContent>
        <TabsContent value="publikasi" className="mt-8">
          <PublikasiPanel />
        </TabsContent>
        <TabsContent value="dokumentasi" className="mt-8">
          <DokumentasiPanel />
        </TabsContent>
      </Tabs>
    </main>
  );
}
