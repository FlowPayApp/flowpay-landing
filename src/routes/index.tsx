import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Integrations } from "@/components/landing/integrations";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Faq } from "@/components/landing/faq";
import { CtaBand } from "@/components/landing/cta";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

const SITE_TITLE = "FlowPay — Cobranza para Pymes en Chile";
const SITE_DESCRIPTION =
  "Organiza cuentas por cobrar, recordatorios por WhatsApp con historial de respuestas y portal de pago con Webpay (Transbank).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <HowItWorks />
      <CtaBand />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
