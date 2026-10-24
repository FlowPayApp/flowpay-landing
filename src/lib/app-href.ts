import { APP_URL } from "@/lib/site";

/** Arma una dirección de la aplicación y conserva la consulta, si venía una. */
export function appHref(path: string, search = "") {
  const url = new URL(path, APP_URL.endsWith("/") ? APP_URL : `${APP_URL}/`);
  if (search) url.search = search.startsWith("?") ? search.slice(1) : search;
  return url.toString();
}
