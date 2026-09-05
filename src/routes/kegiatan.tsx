import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("kegiatan");

export const Route = createFileRoute("/kegiatan")({
  head: () => ({
    meta: [
      { title: "Kegiatan — Berita, Agenda, Dokumentasi" },
      {
        name: "description",
        content:
          "Berita terbaru, agenda seminar dan pelatihan terbuka, serta dokumentasi kegiatan Pusat Studi Unimus.",
      },
      { property: "og:title", content: "Kegiatan — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Kabar terbaru, jadwal acara terbuka, dan dokumentasi kegiatan kami.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
