// <reference types: string;"vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NODE_ENV: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_HOST: string;
  readonly VITE_APP_PROTOCOL: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_SECRET: string;
  readonly VITE_APP_DB_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
