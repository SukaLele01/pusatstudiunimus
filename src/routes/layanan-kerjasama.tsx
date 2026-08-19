import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("layanan-kerjasama");

export const Route = createFileRoute("/layanan-kerjasama")({
  head: () => ({
    meta: [
      { title: "Layanan & Kerja Sama — Pusat Studi Riset & Inovasi" },
      {
        name: "description",
        content:
          "Layanan kajian, pelatihan, dan narasumber untuk instansi maupun dunia usaha, serta peluang magang riset bagi mahasiswa.",
      },
      { property: "og:title", content: "Layanan & Kerja Sama — Pusat Studi Riset & Inovasi" },
      {
        property: "og:description",
        content: "Ajukan kerja sama riset, pelatihan, atau permintaan narasumber kepada Pusat Studi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
