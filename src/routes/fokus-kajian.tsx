import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fokus-kajian")({
  beforeLoad: () => {
    throw redirect({ to: "/riset-inovasi" });
  },
});
