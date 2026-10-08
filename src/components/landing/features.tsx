import {
  MessageCircle,
  CreditCard,
  LineChart,
  Store,
  FileSpreadsheet,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: LineChart,
    title: "Panel de cobranza",
    desc: "Por cobrar, vencido y cobrado, más la lista del día: lo que vence esta semana y lo que ya se pasó.",
  },
  {
    icon: Store,
    title: "Sucursales",
    desc: "Código, local, encargado, dirección, teléfono, correo y método de pago: contado, crédito, cheque o transferencia.",
  },
  {
    icon: FileSpreadsheet,
    title: "Carga desde Excel",
    desc: "La misma planilla de la red: CODIGO, SUCURSAL, NOMBRE, DIRECCION, TELEFONO, EMAIL y MPAGO.",
  },
  {
    icon: MessageCircle,
    title: "Avisos por correo y WhatsApp",
    desc: "Salen solos antes del vencimiento, el día y si hay mora. Si el local responde, el hilo queda en ese cobro y puedes contestar.",
  },
  {
    icon: CreditCard,
    title: "Pago con Webpay",
    desc: "Cada cobro tiene un enlace. El local paga con tarjeta vía Transbank, ve la factura si la adjuntaste, y no necesita cuenta.",
  },
  {
    icon: Users,
    title: "Equipo",
    desc: "El administrador ve toda la red. Cada cobrador ve sus locales. Transferencia o cheque se marcan a mano y salen de la lista.",
  },
];

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="fp-card-lift p-8 rounded-2xl bg-card ring-1 ring-border h-full group">
      <div className="size-12 bg-primary/10 rounded-xl mb-6 grid place-items-center text-primary transition-colors duration-300 group-hover:bg-primary/15">
        <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Producto</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance">
            Una sucursal, un monto, una fecha
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            El resto es seguimiento. Estas son las funciones que ya están en la app de geldflus.com.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 80}>
              <Feature icon={feature.icon} title={feature.title} desc={feature.desc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
