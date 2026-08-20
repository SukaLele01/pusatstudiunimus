import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("berita-agenda");

export const Route = createFileRoute("/berita-agenda")({
  head: () => ({
    meta: [
      { title: "Berita & Agenda — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Kabar terbaru Pusat Studi Unimus dan jadwal kegiatan terbuka untuk umum: seminar, pelatihan, dan diskusi publik.",
      },
      { property: "og:title", content: "Berita & Agenda — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Kabar kegiatan dan jadwal acara yang bisa diikuti masyarakat umum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
