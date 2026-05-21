import { Mail } from "lucide-react";
import { getContactEmail, demoMailto } from "@/lib/contact";
import { Reveal } from "./reveal";

export function Contact() {
  const email = getContactEmail();
  return (
    <section id="contacto" className="py-20 px-6 border-t border-border scroll-mt-24">
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-4">Contacto</h2>
        <p className="text-muted-foreground mb-6 text-pretty">
          Dudas sobre implementación, piloto con tu empresa o tratamiento de datos:
          escríbenos y te respondemos.
        </p>
        <a
          href={demoMailto("Consulta FlowPay")}
          className="fp-btn-glow inline-flex items-center gap-2 text-primary text-lg font-semibold px-6 py-3 rounded-xl ring-1 ring-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
        >
          <Mail className="size-5" />
          {email}
        </a>
      </Reveal>
    </section>
  );
}
