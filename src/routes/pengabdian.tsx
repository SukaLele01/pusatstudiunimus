import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("pengabdian");

export const Route = createFileRoute("/pengabdian")({
  head: () => ({
    meta: [
      { title: "Pengabdian kepada Masyarakat — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Program pendampingan desa, sekolah, dan usaha kecil oleh Pusat Studi Unimus, beserta dampaknya dan cara warga ikut serta.",
      },
      { property: "og:title", content: "Pengabdian kepada Masyarakat — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Hasil riset yang langsung dirasakan warga melalui pendampingan berkelanjutan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
