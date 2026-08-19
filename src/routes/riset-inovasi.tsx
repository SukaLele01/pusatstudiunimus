import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("riset-inovasi");

export const Route = createFileRoute("/riset-inovasi")({
  head: () => ({
    meta: [
      { title: "Riset & Inovasi — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Riset & Inovasi: Peta tematik yang memandu seluruh aktivitas riset. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Riset & Inovasi — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Riset & Inovasi: Peta tematik yang memandu seluruh aktivitas riset. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
