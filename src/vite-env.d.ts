/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_URL_MERCADO_PAGO: string,
    VITE_CHAVE_FRONT_MERCADO_PAGO: string
    VITE_URL_INSCRICAO_BOOTCAMP_AWS: string
}

interface ImportMeta {
    env: ImportMetaEnv
}