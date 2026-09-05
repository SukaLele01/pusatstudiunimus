import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("mitra");

export const Route = createFileRoute("/mitra")({
  head: () => ({
    meta: [
      { title: "Mitra & Kerja Sama — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Layanan kajian, pelatihan dan narasumber, cara mengajukan kerja sama, peluang magang riset mahasiswa, serta informasi hibah.",
      },
      { property: "og:title", content: "Mitra & Kerja Sama — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Dukungan riset untuk instansi, dunia usaha, komunitas, dan mahasiswa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
