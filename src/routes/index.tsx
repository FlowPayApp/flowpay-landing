import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  CreditCard,
  LineChart,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowPay — Cobranza automática para Pymes en Chile" },
      {
        name: "description",
        content:
          "Plataforma de cobranza para Pymes en Chile. Recordatorios automáticos por Email y WhatsApp, portal de pago con Webpay y dashboard de cobranza en CLP.",
      },
      { property: "og:title", content: "FlowPay — Cobranza automática para Pymes" },
      {
        property: "og:description",
        content:
          "Cobra más rápido, automáticamente. Recordatorios por WhatsApp, portal de pago Webpay y control total de tu cartera.",
      },
    ],
  }),
  component: Landing,
});

function Logo() {
  return (
    <span className="text-xl font-extrabold tracking-tighter text-primary italic">
      FlowPay
    </span>
  );
}

const fontLinks = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </>
);

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {fontLinks}

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#producto" className="hover:text-foreground transition-colors">Producto</a>
              <a href="#como-funciona" className="hover:text-foreground transition-colors">Cómo funciona</a>
              <a href="#precios" className="hover:text-foreground transition-colors">Precios</a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/"
              className="text-sm font-semibold px-4 py-2 hover:bg-foreground/5 rounded-lg transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Empieza gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center fp-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6">
            Cobranza automática para{" "}
            <span className="text-primary">Pymes en Chile</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Gestiona tus cuentas por cobrar, envía recordatorios por WhatsApp y
            recibe pagos vía Webpay sin complicaciones. Todo en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/25"
            >
              Empieza gratis
            </Link>
            <a
              href="#producto"
              className="w-full sm:w-auto px-8 py-4 bg-card ring-1 ring-border font-bold rounded-xl text-lg hover:bg-secondary transition-all"
            >
              Ver demo en vivo
            </a>
          </div>

          {/* Dashboard Preview */}
          <div id="producto" className="relative fp-slide-up">
            <div className="bg-card rounded-2xl shadow-2xl ring-1 ring-foreground/5 p-4 md:p-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <KPI label="Por Cobrar" value="$14.250.000" />
                <KPI label="Vencido" value="$3.890.000" accent="overdue" />
                <KPI label="Cobrado (Mes)" value="$28.400.000" accent="paid" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[520px]">
                  <thead className="border-b border-border">
                    <tr className="text-muted-foreground text-xs uppercase font-bold tracking-wider">
                      <th className="pb-4 text-left">Cliente</th>
                      <th className="pb-4 text-left">Estado</th>
                      <th className="pb-4 text-right">Monto</th>
                      <th className="pb-4 text-right">Vencimiento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <ChargeRow
                      name="Constructora Andes S.A."
                      status="overdue"
                      amount="$1.250.000"
                      date="12 Mar 2024"
                    />
                    <ChargeRow
                      name="Servicios Digitales Ltda"
                      status="pending"
                      amount="$890.000"
                      date="28 Mar 2024"
                    />
                    <ChargeRow
                      name="Muebles Valparaíso"
                      status="paid"
                      amount="$2.100.000"
                      date="15 Mar 2024"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Line */}
      <div className="border-y border-border py-8 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-50">
          {["Webpay", "Transbank", "Twilio", "Banco de Chile", "Santander"].map((n) => (
            <span key={n} className="text-lg font-black italic text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Producto
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-balance">
              Todo lo que necesitas para cobrar a tiempo.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature
              icon={<MessageCircle className="size-5" />}
              title="Recordatorios WhatsApp"
              desc="Mensajes automáticos antes y después del vencimiento para asegurar tu pago."
            />
            <Feature
              icon={<CreditCard className="size-5" />}
              title="Portal de Pago"
              desc="Tus clientes pagan con un clic vía Webpay o transferencia. Sin registros."
            />
            <Feature
              icon={<LineChart className="size-5" />}
              title="Dashboard en tiempo real"
              desc="Visualiza tu caja y proyecciones con KPIs claros: por cobrar, vencido y cobrado."
            />
            <Feature
              icon={<Users className="size-5" />}
              title="Gestión de Clientes"
              desc="Base centralizada de deudores con historial de pagos y comunicaciones."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="como-funciona"
        className="py-24 bg-foreground text-background overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-20 text-center">
            Cómo funciona FlowPay
          </h2>
          <div className="grid md:grid-cols-3 gap-16 relative">
            <Step n="01" title="Carga tus cobros">
              Sube tus cargos desde Excel o créalos manualmente en segundos. Solo
              necesitas monto, cliente y vencimiento.
            </Step>
            <Step n="02" title="Automatizamos">
              Enviamos el portal de pago por Email y WhatsApp en las fechas
              clave. Cobramos por ti, de forma profesional.
            </Step>
            <Step n="03" title="Recibes tu dinero">
              Tus clientes pagan online y el dinero llega directo a tu cuenta
              bancaria. Marca o registra pagos manuales también.
            </Step>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="precios" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Precios
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-balance mb-6">
            Empieza gratis. Crece sin límites.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            Plan inicial sin costo para tus primeros cobros. Sin tarjeta de
            crédito.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 max-w-xl mx-auto text-sm font-medium text-left">
            {[
              "Cargos y clientes ilimitados",
              "Portal de pago con Webpay",
              "WhatsApp + Email automáticos",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 p-4 rounded-xl bg-card ring-1 ring-border"
              >
                <Check className="size-4 text-paid mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2rem] p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6 text-balance">
              ¿Listo para dejar de perseguir pagos?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 text-pretty">
              Únete a las Pymes chilenas que ya automatizaron su cobranza con
              FlowPay.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-10 py-5 bg-background text-primary font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Empieza hoy gratis <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 size-64 bg-background/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 size-64 bg-background/10 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Logo />
            <p className="text-xs text-muted-foreground">
              © 2024 FlowPay Chile. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Soporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function KPI({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "paid" | "overdue";
}) {
  const border =
    accent === "paid"
      ? "border-l-4 border-paid"
      : accent === "overdue"
      ? "border-l-4 border-overdue"
      : "";
  const valueColor =
    accent === "paid"
      ? "text-paid"
      : accent === "overdue"
      ? "text-overdue"
      : "text-foreground";
  return (
    <div
      className={`p-6 rounded-2xl bg-secondary/60 ring-1 ring-border ${border}`}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className={`text-2xl md:text-3xl font-bold font-mono ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}

function ChargeRow({
  name,
  status,
  amount,
  date,
}: {
  name: string;
  status: "overdue" | "pending" | "paid";
  amount: string;
  date: string;
}) {
  const cfg = {
    overdue: { label: "Vencido", cls: "bg-overdue/10 text-overdue" },
    pending: { label: "Pendiente", cls: "bg-pending/10 text-pending" },
    paid: { label: "Pagado", cls: "bg-paid/10 text-paid" },
  }[status];
  return (
    <tr>
      <td className="py-4 font-semibold">{name}</td>
      <td className="py-4">
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${cfg.cls}`}
        >
          {cfg.label}
        </span>
      </td>
      <td className="py-4 text-right font-mono">{amount}</td>
      <td className="py-4 text-right text-muted-foreground">{date}</td>
    </tr>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-2xl bg-card ring-1 ring-border hover:shadow-xl transition-all">
      <div className="size-12 bg-primary/10 rounded-xl mb-6 grid place-items-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

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
      <p className="text-background/60 relative">{children}</p>
    </div>
  );
}
