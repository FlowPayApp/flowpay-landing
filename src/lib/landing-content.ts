export const SITE_URL = "https://www.geldflus.com";
export const CONTACT = "contacto@geldflus.com";

export const SEO_TITLE = "GeldFlus · Cobranza a plazo";
export const SEO_DESCRIPTION =
  "Cobranza a plazo de sus clientes, mes a mes. Aviso por WhatsApp y correo. Pago con tarjeta en Webpay y transferencia con Khipu.";

export const PLANS = [
  {
    name: "Esencial",
    detail: "Operaciones que cobran de forma directa.",
    price: "$89.000",
    features: [
      "Hasta 25 clientes",
      "Recordatorios por WhatsApp y correo",
      "Pago con Webpay y Khipu",
      "2 administradores",
    ],
    highlight: false,
  },
  {
    name: "Crecimiento",
    detail: "Redes con equipo de cobranza.",
    price: "$189.000",
    features: [
      "Hasta 120 clientes",
      "Todo lo del plan Esencial",
      "Equipo de cobradores",
      "Importación desde planilla",
    ],
    highlight: true,
  },
  {
    name: "Empresa",
    detail: "Redes de gran escala.",
    price: "$349.000",
    features: [
      "Clientes sin límite",
      "Todo lo del plan Crecimiento",
      "Varios administradores",
      "Implementación acompañada",
    ],
    highlight: false,
  },
] as const;

export const FAQ = [
  {
    q: "¿Para quién es GeldFlus?",
    a: "Para quien cobra a locales o personas. El vencimiento puede ser hoy o a plazo. Cada uno se registra con un teléfono y una fecha.",
  },
  {
    q: "¿Su cliente necesita una cuenta?",
    a: "No. Su cliente abre el enlace y revisa los cobros ya pagados y los por pagar. Desde ahí paga. El seguimiento permanece en su panel.",
  },
  {
    q: "¿Su cliente puede responder?",
    a: "Sí. Por WhatsApp o por correo, al aviso. La respuesta queda en ese cobro y se ve en el panel.",
  },
  {
    q: "¿Cómo paga su cliente?",
    a: "Con tarjeta, por Webpay, o por transferencia, con Khipu. El cobro queda pagado y los recordatorios se detienen.",
  },
  {
    q: "¿Cómo se cargan los clientes?",
    a: "Según el plan. En Crecimiento y Empresa, los clientes se cargan desde una planilla. En Esencial, se cargan manualmente, en el panel.",
  },
] as const;

export function structuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GeldFlus",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/brand/logo.png`,
      email: CONTACT,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "GeldFlus",
      url: `${SITE_URL}/`,
      description: SEO_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "es-CL",
      offers: PLANS.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price.replace(/\D/g, ""),
        priceCurrency: "CLP",
        description: plan.features.join(". "),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
}
