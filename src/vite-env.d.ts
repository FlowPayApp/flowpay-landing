/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLOWPAY_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
