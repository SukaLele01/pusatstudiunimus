import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pengabdian")({
  beforeLoad: () => {
    throw redirect({ to: "/program" });
  },
});
