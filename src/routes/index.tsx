import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/page";
import { structuredData } from "@/lib/landing-content";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: structuredData().map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  }),
  component: LandingPage,
});
