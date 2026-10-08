import { Reveal } from "./reveal";

export function Integrations() {
  return (
    <div className="border-y border-border py-10 bg-secondary/40">
      <Reveal className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Cómo se cobra
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          El aviso va por <strong className="text-foreground font-semibold">correo</strong> y{" "}
          <strong className="text-foreground font-semibold">WhatsApp</strong>. El pago en línea es{" "}
          <strong className="text-foreground font-semibold">Webpay (Transbank)</strong>. El abono
          sigue las condiciones de tu comercio con Transbank: GeldFlus no retiene el dinero.
        </p>
      </Reveal>
    </div>
  );
}
