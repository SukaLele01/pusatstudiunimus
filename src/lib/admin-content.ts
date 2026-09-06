import { supabase } from "@/integrations/supabase/client";

export type Status = "draft" | "published";

export type PostRow = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string | null;
  cover_url: string | null;
  published_at: string;
  status: string;
};

export type EventRow = {
  id: string;
  title: string;
  starts_at: string;
  location: string | null;
  description: string | null;
  register_url: string | null;
  status: string;
};

export type PublicationRow = {
  id: string;
  title: string;
  authors: string | null;
  year: number | null;
  kind: string;
  summary: string | null;
  file_url: string | null;
  link_url: string | null;
  status: string;
};

export type GalleryRow = {
  id: string;
  title: string;
  caption: string | null;
  image_url: string;
  taken_at: string | null;
  status: string;
};

export function slugifyTitle(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 90);
}

/** Unggah berkas ke penyimpanan dan kembalikan alamat publiknya. */
export async function uploadMedia(file: File, folder: string) {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
  const safe = slugifyTitle(file.name.replace(/\.[^.]+$/, "")) || "berkas";
  const path = `${folder}/${Date.now()}-${safe}.${ext}`;
  const { error } = await supabase.storage.from("media").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) throw error;
  return `/api/public/media/${path}`;
}

export async function fetchPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, summary, content, cover_url, published_at, status")
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as PostRow[];
}

export async function fetchEvents() {
  const { data, error } = await supabase
    .from("events")
    .select("id, title, starts_at, location, description, register_url, status")
    .order("starts_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as EventRow[];
}

export async function fetchPublications() {
  const { data, error } = await supabase
    .from("publications")
    .select("id, title, authors, year, kind, summary, file_url, link_url, status")
    .order("year", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as PublicationRow[];
}

export async function fetchGallery() {
  const { data, error } = await supabase
    .from("gallery_items")
    .select("id, title, caption, image_url, taken_at, status")
    .order("taken_at", { ascending: false, nullsFirst: false });
  if (error) throw error;
  return (data ?? []) as GalleryRow[];
}

type TableName = "posts" | "events" | "publications" | "gallery_items";

export async function saveRow(table: TableName, id: string | null, values: Record<string, unknown>) {
  if (id) {
    const { error } = await supabase.from(table).update(values).eq("id", id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from(table).insert(values);
    if (error) throw error;
  }
}

export async function deleteRow(table: TableName, id: string) {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
}

export async function isStaffUser() {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return false;
  const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
  return (data ?? []).some((r) => r.role === "admin" || r.role === "editor");
}
