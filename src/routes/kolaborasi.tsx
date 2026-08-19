import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/kolaborasi")({
  beforeLoad: () => {
    throw redirect({ to: "/layanan-kerjasama" });
  },
});
