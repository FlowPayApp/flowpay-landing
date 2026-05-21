"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { demoMailto } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV = [
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#demo", label: "Demo" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-lg transition-shadow duration-300",
        scrolled && "fp-nav-scrolled bg-background/90",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative hover:text-foreground transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={demoMailto()}
            className="fp-btn-glow hidden sm:inline text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-lg"
          >
            Solicitar demo
          </a>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 text-base font-medium">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <hr className="border-border my-2" />
                <a
                  href={demoMailto()}
                  className="fp-btn-glow inline-flex justify-center bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-lg"
                >
                  Solicitar demo
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
