import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("profil");

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Pusat Studi — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Profil Pusat Studi: Riset berdampak, kebijakan berbasis bukti. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Profil Pusat Studi — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Profil Pusat Studi: Riset berdampak, kebijakan berbasis bukti. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
