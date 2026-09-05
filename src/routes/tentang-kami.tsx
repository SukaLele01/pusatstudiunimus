import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("tentang-kami");

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Profil, visi dan misi, serta struktur organisasi Pusat Studi Universitas Muhammadiyah Semarang.",
      },
      { property: "og:title", content: "Tentang Kami — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Siapa kami dan apa yang kami kerjakan sebagai unit riset Unimus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
