import { Reveal } from "./reveal";

function Step({
  n,
  title,
  children,
  delay,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="relative z-10 h-full">
        <div className="text-8xl font-black text-background/5 absolute -top-12 -left-4 select-none pointer-events-none">
          {n}
        </div>
        <h4 className="text-2xl font-bold mb-4 relative">{title}</h4>
        <p className="text-background/70 relative leading-relaxed">{children}</p>
      </div>
    </Reveal>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-foreground text-background overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold mb-4 text-center">Cómo funciona</h2>
          <p className="text-center text-background/60 max-w-2xl mx-auto mb-12 text-pretty">
            Flujo real del producto: tú cargas la información, FlowPay envía recordatorios y
            el cliente paga por el enlace.
          </p>
        </Reveal>
        <div className="hidden md:block fp-steps-line w-full max-w-4xl mx-auto mb-16" aria-hidden />
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          <Step n="01" title="Cargas cobros y clientes" delay={0}>
            Creas cargos en el panel o importas clientes desde Excel con la plantilla
            incluida. Defines montos, vencimientos y a quién cobrar.
          </Step>
          <Step n="02" title="Se envían recordatorios" delay={120}>
            En las fechas configuradas salen recordatorios por WhatsApp con el enlace al portal de
            pago. Si el cliente responde, el mensaje queda registrado en la línea de tiempo del cobro.
          </Step>
          <Step n="03" title="El cliente paga" delay={240}>
            Abre el enlace, paga con Webpay si corresponde, o tú registras un pago manual
            (por ejemplo transferencia). El estado del cobro se actualiza en tu panel.
          </Step>
        </div>
      </div>
    </section>
  );
}
