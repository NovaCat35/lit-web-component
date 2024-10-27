import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	plugins: [react()],

	// Set the base path if the site is hosted in a subdirectory
	base: "./",

	resolve: {
		alias: {
			// Alias for easier importing of assets
			"@assets": resolve(__dirname, "./src/assets"),
			"@components": resolve(__dirname, "./src/components"),
		},
	},

	build: {
		outDir: "dist", // Output folder for build
		assetsDir: "assets", // Specify assets directory inside dist
		sourcemap: false,
		minify: true,
		manifest: true,

		// Set up as a library for npm publishing
		lib: {
			entry: resolve(__dirname, "src/index.ts"), // Entry point for the library
			name: "LitWebComponents", // Global name for UMD builds
			fileName: (format) => `index.${format}.js`, // Ensure consistent filename in dist
		},

		rollupOptions: {
			// Specify input for the demo's HTML entry point
			input: {
				main: resolve(__dirname, "index.html"),
			},

			// Externalize dependencies for the library
			external: ["lit"],
			output: {
				globals: {
					lit: "Lit",
				},
			},
		},
	},

	server: {
		open: true, // Automatically open the browser on `vite` start
	},
});
