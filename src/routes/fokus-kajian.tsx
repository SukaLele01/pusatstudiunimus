import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("fokus-kajian");

export const Route = createFileRoute("/fokus-kajian")({
  head: () => ({
    meta: [
      { title: "Fokus Kajian — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Fokus Kajian: Identitas, arah, dan sumber daya kelembagaan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Fokus Kajian — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Fokus Kajian: Identitas, arah, dan sumber daya kelembagaan. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
