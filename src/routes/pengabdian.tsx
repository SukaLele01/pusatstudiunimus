import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("pengabdian");

export const Route = createFileRoute("/pengabdian")({
  head: () => ({
    meta: [
      { title: "Pengabdian & Dampak — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Pengabdian & Dampak: Dari pertanyaan penelitian hingga produk yang dipakai. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Pengabdian & Dampak — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Pengabdian & Dampak: Dari pertanyaan penelitian hingga produk yang dipakai. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
