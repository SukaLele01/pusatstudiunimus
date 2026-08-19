import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("berita-agenda");

export const Route = createFileRoute("/berita-agenda")({
  head: () => ({
    meta: [
      { title: "Berita & Agenda — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Berita & Agenda: Ruang tumbuh untuk peneliti dan mahasiswa. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Berita & Agenda — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Berita & Agenda: Ruang tumbuh untuk peneliti dan mahasiswa. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
