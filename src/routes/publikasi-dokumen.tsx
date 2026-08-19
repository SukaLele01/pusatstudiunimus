import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("publikasi-dokumen");

export const Route = createFileRoute("/publikasi-dokumen")({
  head: () => ({
    meta: [
      { title: "Publikasi & Dokumen — Pusat Studi Riset & Inovasi" },
      {
        name: "description",
        content:
          "Baca dan unduh hasil penelitian kami: jurnal, buku, ringkasan kebijakan, infografis, panduan, dan laporan tahunan.",
      },
      { property: "og:title", content: "Publikasi & Dokumen — Pusat Studi Riset & Inovasi" },
      {
        property: "og:description",
        content: "Hasil penelitian dan dokumen resmi Pusat Studi, terbuka untuk siapa pun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
