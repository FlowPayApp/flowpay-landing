/** Correo para demo y contacto (configurable en .env). */
export function getContactEmail(): string {
  return import.meta.env.VITE_FLOWPAY_CONTACT_EMAIL?.trim() || "pablobarreraw@gmail.com";
}

export function demoMailto(subject = "Consulta GeldFlus"): string {
  const body =
    "Hola,\n\nQuiero conocer GeldFlus para cobrar a mis sucursales.\n\nEmpresa:\nCantidad aproximada de locales:\n\nGracias.";
  return `mailto:${getContactEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
