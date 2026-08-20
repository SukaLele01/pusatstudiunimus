import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("profil");

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil — Pusat Studi Riset & Inovasi Unimus" },
      {
        name: "description",
        content:
          "Mengenal Pusat Studi Universitas Muhammadiyah Semarang: tugas, visi dan misi, struktur organisasi, tim peneliti, serta fasilitas yang tersedia.",
      },
      { property: "og:title", content: "Profil — Pusat Studi Riset & Inovasi Unimus" },
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
