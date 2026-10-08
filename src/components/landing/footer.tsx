import { Logo } from "./logo";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <Logo />
          <p className="text-xs text-muted-foreground text-center md:text-left max-w-xs">
            © {year} GeldFlus. Cobranza para distribuidores.{" "}
            <a href={SITE_URL} className="hover:text-foreground transition-colors">
              {SITE_DOMAIN}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
          <a href="#producto" className="hover:text-foreground transition-colors">
            Producto
          </a>
          <a href="#planes" className="hover:text-foreground transition-colors">
            Planes
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            Preguntas
          </a>
          <a href="#contacto" className="hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
