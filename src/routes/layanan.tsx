import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("layanan");

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Layanan: Riset tumbuh lebih cepat bersama mitra. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Layanan — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Layanan: Riset tumbuh lebih cepat bersama mitra. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
