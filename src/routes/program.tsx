import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("program");

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Pengabdian dan pemberdayaan masyarakat, desa binaan, bidang kajian, penelitian berjalan, serta inovasi Pusat Studi Unimus.",
      },
      { property: "og:title", content: "Program — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Kegiatan riset dan pendampingan masyarakat yang kami jalankan bersama mitra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
