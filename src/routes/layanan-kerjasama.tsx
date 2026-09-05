import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/layanan-kerjasama")({
  beforeLoad: () => {
    throw redirect({ to: "/mitra" });
  },
});
