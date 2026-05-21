import { getContactEmail, demoMailto } from "@/lib/contact";

export function Contact() {
  const email = getContactEmail();
  return (
    <section id="contacto" className="py-20 px-6 border-t border-border scroll-mt-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-4">Contacto</h2>
        <p className="text-muted-foreground mb-6 text-pretty">
          Dudas sobre implementación, piloto con tu empresa o tratamiento de datos:
          escríbenos y te respondemos.
        </p>
        <a
          href={demoMailto("Consulta FlowPay")}
          className="text-primary text-lg font-semibold hover:underline"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
