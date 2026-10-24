import { createFileRoute, redirect } from "@tanstack/react-router";
import { appHref } from "@/lib/app-href";

export const Route = createFileRoute("/pay/$token")({
  beforeLoad: ({ params, location }) => {
    throw redirect({ href: appHref(`/pay/${encodeURIComponent(params.token)}`, location.searchStr) });
  },
});
