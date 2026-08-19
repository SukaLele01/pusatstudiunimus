import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("knowledge-hub");

export const Route = createFileRoute("/knowledge-hub")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Knowledge Hub: Kabar terbaru dan jadwal kegiatan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Knowledge Hub — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Knowledge Hub: Kabar terbaru dan jadwal kegiatan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
