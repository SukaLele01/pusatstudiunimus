import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("kolaborasi");

export const Route = createFileRoute("/kolaborasi")({
  head: () => ({
    meta: [
      { title: "Kolaborasi — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Kolaborasi: Orang-orang di balik setiap temuan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Kolaborasi — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Kolaborasi: Orang-orang di balik setiap temuan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
