/** Correo para demo y contacto (configurable en .env). */
export function getContactEmail(): string {
  return import.meta.env.VITE_FLOWPAY_CONTACT_EMAIL?.trim() || "pablobarreraw@gmail.com";
}

export function demoMailto(subject = "Solicitud de demo FlowPay"): string {
  const body =
    "Hola,\n\nMe interesa conocer FlowPay y agendar una demo.\n\nEmpresa:\nRubro:\n\nGracias.";
  return `mailto:${getContactEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
