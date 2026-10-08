import { SITE_NAME } from "@/lib/site";

export function Logo() {
  return (
    <a href="/" className="inline-flex items-center" aria-label={SITE_NAME}>
      <img src="/brand/logo.png" alt="GeldFlus" className="h-8 w-auto" />
    </a>
  );
}
