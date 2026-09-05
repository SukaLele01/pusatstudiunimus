import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/riset-inovasi")({
  beforeLoad: () => {
    throw redirect({ to: "/program" });
  },
});
