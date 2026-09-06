import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  const url = process.env["SUPABASE_URL"]!;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export type PublicPost = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string | null;
  cover_url: string | null;
  published_at: string;
};

export type PublicEvent = {
  id: string;
  title: string;
  starts_at: string;
  location: string | null;
  description: string | null;
  register_url: string | null;
};

export type PublicPublication = {
  id: string;
  title: string;
  authors: string | null;
  year: number | null;
  kind: string;
  summary: string | null;
  file_url: string | null;
  link_url: string | null;
};

export type PublicGalleryItem = {
  id: string;
  title: string;
  caption: string | null;
  image_url: string;
  taken_at: string | null;
};

export const listPosts = createServerFn({ method: "GET" }).handler(async (): Promise<PublicPost[]> => {
  const { data } = await publicClient()
    .from("posts")
    .select("id, slug, title, summary, content, cover_url, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(60);
  return data ?? [];
});

export const getPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => ({ slug: String(data.slug).slice(0, 200) }))
  .handler(async ({ data }): Promise<PublicPost | null> => {
    const { data: row } = await publicClient()
      .from("posts")
      .select("id, slug, title, summary, content, cover_url, published_at")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    return row ?? null;
  });

export const listEvents = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicEvent[]> => {
    const { data } = await publicClient()
      .from("events")
      .select("id, title, starts_at, location, description, register_url")
      .eq("status", "published")
      .order("starts_at", { ascending: true })
      .limit(60);
    return data ?? [];
  },
);

export const listPublications = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicPublication[]> => {
    const { data } = await publicClient()
      .from("publications")
      .select("id, title, authors, year, kind, summary, file_url, link_url")
      .eq("status", "published")
      .order("year", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(120);
    return data ?? [];
  },
);

export const listGallery = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicGalleryItem[]> => {
    const { data } = await publicClient()
      .from("gallery_items")
      .select("id, title, caption, image_url, taken_at")
      .eq("status", "published")
      .order("taken_at", { ascending: false, nullsFirst: false })
      .limit(60);
    return data ?? [];
  },
);
