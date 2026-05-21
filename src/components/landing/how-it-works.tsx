function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10">
      <div className="text-8xl font-black text-background/5 absolute -top-12 -left-4 select-none">
        {n}
      </div>
      <h4 className="text-2xl font-bold mb-4 relative">{title}</h4>
      <p className="text-background/70 relative leading-relaxed">{children}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-foreground text-background overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Cómo funciona</h2>
        <p className="text-center text-background/60 max-w-2xl mx-auto mb-20 text-pretty">
          Flujo real del producto: tú cargas la información, FlowPay envía recordatorios y
          el cliente paga por el enlace.
        </p>
        <div className="grid md:grid-cols-3 gap-16">
          <Step n="01" title="Cargas cobros y clientes">
            Creas cargos en el panel o importas clientes desde Excel con la plantilla
            incluida. Defines montos, vencimientos y a quién cobrar.
          </Step>
          <Step n="02" title="Se envían recordatorios">
            En las fechas configuradas salen recordatorios por WhatsApp con el enlace al portal de
            pago. Si el cliente responde, el mensaje queda registrado en la línea de tiempo del cobro.
          </Step>
          <Step n="03" title="El cliente paga">
            Abre el enlace, paga con Webpay si corresponde, o tú registras un pago manual
            (por ejemplo transferencia). El estado del cobro se actualiza en tu panel.
          </Step>
        </div>
      </div>
    </section>
  );
}
