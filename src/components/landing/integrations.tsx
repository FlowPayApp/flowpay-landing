/** Integraciones reales que usa FlowPay hoy — sin logos de partners inventados. */
export function Integrations() {
  return (
    <div className="border-y border-border py-10 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Integraciones
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          Pagos en línea vía <strong className="text-foreground font-semibold">Webpay (Transbank)</strong> en
          el portal de pago. Cobranza por{" "}
          <strong className="text-foreground font-semibold">WhatsApp</strong>: recordatorios
          automáticos y registro de las respuestas de tus clientes en cada cobro. Los abonos de
          Webpay se acreditan según las
          condiciones de tu comercio con Transbank.
        </p>
      </div>
    </div>
  );
}
