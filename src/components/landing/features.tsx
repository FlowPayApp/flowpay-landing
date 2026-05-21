import {
  MessageCircle,
  CreditCard,
  LineChart,
  Users,
  FileSpreadsheet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** En lg+: 2 = fila de 3; 3 = fila de 2 centrada */
  lgSpan: 2 | 3;
}[] = [
  {
    icon: LineChart,
    title: "Panel de cobranza",
    desc: "KPIs de por cobrar, vencido y cobrado, más listado de cargos con estados claros.",
    lgSpan: 2,
  },
  {
    icon: Users,
    title: "Clientes y cargos",
    desc: "Alta manual de clientes y cobros, con seguimiento por deudor.",
    lgSpan: 2,
  },
  {
    icon: FileSpreadsheet,
    title: "Importación Excel",
    desc: "Plantilla descargable para cargar clientes o distribuidores desde planilla.",
    lgSpan: 2,
  },
  {
    icon: MessageCircle,
    title: "Recordatorios por WhatsApp",
    desc: "Enviamos recordatorios automáticos según fechas y plantillas. Si el cliente responde, guardamos el hilo en el historial del cobro.",
    lgSpan: 3,
  },
  {
    icon: CreditCard,
    title: "Portal de pago Webpay",
    desc: "Enlace único por cobro para que tu cliente pague con tarjeta vía Transbank.",
    lgSpan: 3,
  },
];

function Feature({
  icon: Icon,
  title,
  desc,
  className,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-8 rounded-2xl bg-card ring-1 ring-border hover:shadow-lg transition-shadow h-full",
        className,
      )}
    >
      <div className="size-12 bg-primary/10 rounded-xl mb-6 grid place-items-center text-primary">
        <Icon className="size-5" />
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
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Qué incluye hoy
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance">
            Lo que la plataforma hace por ti
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Funciones disponibles en el producto actual. Si algo no está listado aquí,
            aún no está publicado.
          </p>
        </div>

        {/* 3 + 2 en desktop (grid de 6 cols); en tablet 2 cols; móvil 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {FEATURES.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              className={cn(
                feature.lgSpan === 2 ? "lg:col-span-2" : "lg:col-span-3",
                index === FEATURES.length - 1 && "sm:col-span-2 lg:col-span-3",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
