import { Mail } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";
import { demoMailto } from "@/lib/contact";

export function Hero() {
  return (
    <header className="pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center fp-fade-in">
        <p className="inline-block text-sm font-semibold text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
          Plataforma en desarrollo activo
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6">
          Organiza tu cobranza y{" "}
          <span className="text-primary">cobra con Webpay</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Centraliza cobros pendientes, envía recordatorios automáticos por WhatsApp (con
          historial si el cliente responde) y comparte un enlace de pago con Webpay (Transbank).
          Herramientas concretas para tu operación diaria.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={demoMailto()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/25"
          >
            <Mail className="size-5" />
            Solicitar demo
          </a>
          <a
            href="#producto"
            className="w-full sm:w-auto px-8 py-4 bg-card ring-1 ring-border font-bold rounded-xl text-lg hover:bg-secondary transition-all"
          >
            Ver el panel
          </a>
        </div>
        <DashboardPreview />
      </div>
    </header>
  );
}
