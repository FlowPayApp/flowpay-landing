import { Check } from "lucide-react";
import { REGISTER_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const PLANS = [
  {
    name: "Esencial",
    detail: "Para una operación chica que hoy cobra a mano.",
    price: "$39.000",
    features: [
      "Hasta 25 sucursales",
      "Recordatorios por correo y WhatsApp",
      "Enlace de pago con Webpay",
      "1 administrador",
    ],
    highlight: false,
  },
  {
    name: "Crecimiento",
    detail: "Para quien ya recorre varias sucursales y necesita equipo.",
    price: "$89.000",
    features: [
      "Hasta 120 sucursales",
      "Todo lo de Esencial",
      "Cobradores en el equipo",
      "Carga de sucursales desde Excel",
    ],
    highlight: true,
  },
  {
    name: "Empresa",
    detail: "Para una red grande, con puesta en marcha acompañada.",
    price: "$169.000",
    features: [
      "Sucursales sin tope",
      "Todo lo de Crecimiento",
      "Varios administradores",
      "Acompañamiento en la carga inicial",
    ],
    highlight: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="planes" className="py-24 px-6 scroll-mt-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Planes</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance">
            El mismo producto. Cambia el tamaño de la red.
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Son los planes del registro en geldflus.com. La cuenta queda activa cuando confirmamos
            la solicitud y te entregamos la contraseña.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <article
                className={cn(
                  "fp-card-lift h-full rounded-2xl bg-card p-8 ring-1 ring-border flex flex-col",
                  plan.highlight && "ring-2 ring-primary bg-primary/5",
                )}
              >
                {plan.highlight && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                    Para una red con cobradores
                  </p>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{plan.detail}</p>
                <p className="mt-6 text-4xl font-extrabold tracking-tight">
                  {plan.price}
                  <span className="ml-1 text-base font-semibold text-muted-foreground">/ mes</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="size-4 mt-0.5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={REGISTER_URL}
                  className={cn(
                    "mt-8 inline-flex justify-center rounded-xl px-5 py-3 text-sm font-bold",
                    plan.highlight
                      ? "fp-btn-glow bg-primary text-primary-foreground"
                      : "ring-1 ring-border hover:bg-secondary transition-colors",
                  )}
                >
                  Pedir este plan
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
