import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQ_ITEMS = [
  {
    q: "¿Ya tienen clientes usando FlowPay?",
    a: "Estamos en etapa inicial: el producto está en uso interno y con empresas piloto. En esta web no mostramos logos ni testimonios hasta tener casos reales que podamos citar.",
  },
  {
    q: "¿Cómo funciona el pago con Webpay?",
    a: "Cada cobro puede tener un enlace de portal de pago. Tu cliente paga con tarjeta a través de Webpay (Transbank). El abono sigue las reglas y plazos de tu contrato comercial con Transbank; FlowPay no retiene el dinero.",
  },
  {
    q: "¿Mi cliente puede responder por WhatsApp?",
    a: "Sí. FlowPay envía los recordatorios de forma automática y, cuando el cliente escribe de vuelta, guardamos esa respuesta en el historial del cobro (junto a los recordatorios enviados). No es un chat genérico para todo tu negocio: el registro va ligado a cada cobranza.",
  },
  {
    q: "¿Puedo cobrar solo por transferencia?",
    a: "Sí. Puedes registrar pagos manuales cuando el cliente transfiere. El portal Webpay es opcional por cobro, según cómo operes.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Aún no publicamos planes comerciales. Para conocer la plataforma, solicita una demo escribiendo a nuestro correo de contacto; cuando haya precios definidos, los comunicaremos con anticipación.",
  },
  {
    q: "¿Mis datos están en Chile?",
    a: "Operamos el producto para empresas chilenas. Para detalle de tratamiento de datos y proveedores (mensajería WhatsApp, pasarela de pago), escríbenos y te enviamos la información vigente.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3 text-center">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-balance">
            Respuestas directas
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
