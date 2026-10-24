import { createFileRoute, redirect } from "@tanstack/react-router";
import { appHref } from "@/lib/app-href";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: appHref("/login", location.searchStr) });
  },
});
