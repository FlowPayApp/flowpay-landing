import { Mail } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";
import { demoMailto } from "@/lib/contact";

export function Hero() {
  return (
    <header className="relative pt-20 pb-16 px-6 overflow-hidden">
      <div className="fp-hero-bg" aria-hidden>
        <div className="fp-hero-orb fp-hero-orb--1" />
        <div className="fp-hero-orb fp-hero-orb--2" />
        <div className="fp-hero-orb fp-hero-orb--3" />
        <div className="fp-hero-grid" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="fp-hero-in inline-block text-sm font-semibold text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 ring-1 ring-primary/15">
          Plataforma en desarrollo activo
        </p>
        <h1 className="fp-hero-in fp-hero-in-delay-1 text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6">
          Organiza tu cobranza y{" "}
          <span className="fp-text-gradient">cobra con Webpay</span>
        </h1>
        <p className="fp-hero-in fp-hero-in-delay-2 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Centraliza cobros pendientes, envía recordatorios automáticos por WhatsApp (con
          historial si el cliente responde) y comparte un enlace de pago con Webpay (Transbank).
          Herramientas concretas para tu operación diaria.
        </p>
        <div className="fp-hero-in fp-hero-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={demoMailto()}
            className="fp-btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg shadow-xl shadow-primary/25"
          >
            <Mail className="size-5" />
            Solicitar demo
          </a>
          <a
            href="#producto"
            className="w-full sm:w-auto px-8 py-4 bg-card/80 backdrop-blur-sm ring-1 ring-border font-bold rounded-xl text-lg hover:bg-secondary transition-colors duration-300"
          >
            Ver el panel
          </a>
        </div>
        <div className="fp-preview-float">
          <DashboardPreview />
        </div>
      </div>
    </header>
  );
}
