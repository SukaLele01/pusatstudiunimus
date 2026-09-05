import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/berita-agenda")({
  beforeLoad: () => {
    throw redirect({ to: "/kegiatan" });
  },
});
