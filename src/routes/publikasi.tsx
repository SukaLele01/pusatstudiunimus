import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/publikasi")({
  beforeLoad: () => {
    throw redirect({ to: "/publikasi-dokumen" });
  },
});
