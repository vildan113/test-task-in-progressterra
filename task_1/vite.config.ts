import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				svgProps: { role: "img" },
				expandProps: "start",
				icon: "1em"
			}
		})
	],
	resolve: {
		alias: {
			src: "/src"
		}
	},
	css: {
		postcss: {
			plugins: [autoprefixer()]
		}
	}
})
