import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dokumen")({
  beforeLoad: () => {
    throw redirect({ to: "/publikasi" });
  },
});
