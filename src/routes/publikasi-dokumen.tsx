import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/publikasi-dokumen")({
  beforeLoad: () => {
    throw redirect({ to: "/publikasi" });
  },
});
