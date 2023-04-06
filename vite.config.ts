import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: Number(process.env.VITE_PORT) || 3000,
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	}
});
