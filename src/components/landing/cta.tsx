import { ArrowRight, Mail } from "lucide-react";
import { demoMailto } from "@/lib/contact";

export function CtaBand() {
  return (
    <section id="demo" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto bg-primary rounded-[2rem] p-12 text-center text-primary-foreground relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-6 text-balance">
            Menos tiempo persiguiendo pagos
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 text-pretty max-w-xl mx-auto">
            Si cobras a varios clientes con plazos distintos, FlowPay te ayuda a ordenar
            la cartera y enviar recordatorios con enlace de pago.
          </p>
          <a
            href={demoMailto()}
            className="inline-flex items-center gap-2 px-10 py-5 bg-background text-primary font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-xl"
          >
            <Mail className="size-5" />
            Solicitar demo <ArrowRight className="size-5" />
          </a>
        </div>
        <div className="absolute top-0 right-0 size-64 bg-background/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 bg-background/10 rounded-full -ml-20 -mb-20 blur-3xl" />
      </div>
    </section>
  );
}
