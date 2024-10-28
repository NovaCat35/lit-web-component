import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	// Set the base path if the site is hosted in a subdirectory
	base: "./",

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
			formats: ['es', 'umd']
		},

		rollupOptions: {
			external: ["lit"],
			output: {
				globals: {
					lit: "Lit",
				},
			},
		}
	},

	resolve: {
		alias: {
			"@components": resolve(__dirname, "./src/components"),
		},
	},

	server: {
		open: true, // Automatically open the browser on `vite` start
	},
});
