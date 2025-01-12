/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_REDIRECT_URL_RESET_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
