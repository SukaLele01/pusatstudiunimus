import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("riset-inovasi");

export const Route = createFileRoute("/riset-inovasi")({
  head: () => ({
    meta: [
      { title: "Riset & Inovasi — Pusat Studi Unimus" },
      {
        name: "description",
        content:
          "Bidang kajian, penelitian yang sedang berjalan, hasil inovasi dan hak kekayaan intelektual, serta arah riset Pusat Studi Unimus.",
      },
      { property: "og:title", content: "Riset & Inovasi — Pusat Studi Unimus" },
      {
        property: "og:description",
        content: "Penelitian yang dimulai dari masalah nyata dan berujung pada solusi yang dipakai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
