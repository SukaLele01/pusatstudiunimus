import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/knowledge-hub")({
  beforeLoad: () => {
    throw redirect({ to: "/publikasi-dokumen" });
  },
});
