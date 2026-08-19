import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/layanan")({
  beforeLoad: () => {
    throw redirect({ to: "/layanan-kerjasama" });
  },
});
