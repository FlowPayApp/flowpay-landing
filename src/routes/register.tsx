import { createFileRoute, redirect } from "@tanstack/react-router";
import { appHref } from "@/lib/app-href";

export const Route = createFileRoute("/register")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: appHref("/register", location.searchStr) });
  },
});
