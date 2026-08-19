import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { getSection } from "@/lib/site-data";

const section = getSection("publikasi");

export const Route = createFileRoute("/publikasi")({
  head: () => ({
    meta: [
      { title: "Publikasi — Pusat Studi Riset & Inovasi" },
      { name: "description", content: "Publikasi: Pengetahuan yang bekerja di tengah masyarakat. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
      { property: "og:title", content: "Publikasi — Pusat Studi Riset & Inovasi" },
      { property: "og:description", content: "Publikasi: Pengetahuan yang bekerja di tengah masyarakat. Informasi resmi Pusat Studi Riset & Inovasi Unimus." },
    ],
  }),
  component: () => <SectionPage section={section} />,
});
