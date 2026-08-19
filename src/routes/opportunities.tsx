import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("opportunities");

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Opportunities: Dukungan profesional berbasis kapasitas riset. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Opportunities — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Opportunities: Dukungan profesional berbasis kapasitas riset. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
