import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("researchers");

export const Route = createFileRoute("/researchers")({
  head: () => ({
    meta: [
      { title: "Researchers — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Researchers: Rekam jejak ilmiah yang terbuka dan tertelusur. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Researchers — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Researchers: Rekam jejak ilmiah yang terbuka dan tertelusur. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
