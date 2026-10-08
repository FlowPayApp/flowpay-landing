import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQ_ITEMS = [
  {
    q: "¿Para quién es GeldFlus?",
    a: "Para un distribuidor que cobra a locales: almacenes, sucursales y puntos de venta. El deudor en el sistema es la sucursal, con su código, encargado, teléfono y correo.",
  },
  {
    q: "¿El local tiene que crear una cuenta?",
    a: "No. Recibe el enlace del cobro, ve el monto y la factura si la adjuntaste, y paga con Webpay. Tú sigues en el panel.",
  },
  {
    q: "¿Qué pasa si paga por transferencia o cheque?",
    a: "El cobrador lo marca como pagado y el cobro sale de la lista de pendientes. El enlace de Webpay es para cuando el local paga con tarjeta.",
  },
  {
    q: "¿El local puede responder por WhatsApp?",
    a: "Sí. El recordatorio sale solo y, si escribe de vuelta, la respuesta queda en el historial de ese cobro. Desde ahí puedes contestar mientras la conversación sigue abierta.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Esencial $39.000, Crecimiento $89.000 y Empresa $169.000 al mes. Los topes de sucursales y el equipo están en la sección de planes. Al registrarte eliges uno; activamos la cuenta y te enviamos la contraseña.",
  },
  {
    q: "¿Quién ve los cobros?",
    a: "El administrador ve toda la red. Cada cobrador ve las sucursales que tiene asignadas.",
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
