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
            El cobro guarda monto, vencimiento y estado: pendiente, vencido o pagado. El aviso no
            depende de que alguien se acuerde.
          </p>
        </Reveal>
        <div className="hidden md:block fp-steps-line w-full max-w-4xl mx-auto mb-16" aria-hidden />
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          <Step n="01" title="Cargas la red" delay={0}>
            Das de alta cada sucursal en el panel o la importas desde Excel. Después creas el cobro:
            local, monto y fecha.
          </Step>
          <Step n="02" title="El aviso sale solo" delay={120}>
            Correo y WhatsApp antes del vencimiento, el día y si se pasa. El mensaje lleva el
            enlace de pago. Si el local responde, queda en la línea de tiempo de ese cobro.
          </Step>
          <Step n="03" title="El local paga" delay={240}>
            Abre el enlace y paga con Webpay, o el cobrador registra transferencia o cheque. El
            estado se actualiza en el panel el mismo día.
          </Step>
        </div>
      </div>
    </section>
  );
}
