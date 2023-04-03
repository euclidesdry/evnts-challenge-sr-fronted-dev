/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_OUTER_PORT: string;
	readonly VITE_PORT: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
