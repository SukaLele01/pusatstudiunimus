import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("dokumen");

export const Route = createFileRoute("/dokumen")({
  head: () => ({
    meta: [
      { title: "Dokumen — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Dokumen: Pengetahuan dalam format yang mudah dicerna. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Dokumen — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Dokumen: Pengetahuan dalam format yang mudah dicerna. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
