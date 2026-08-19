import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/researchers")({
  beforeLoad: () => {
    throw redirect({ to: "/profil" });
  },
});
