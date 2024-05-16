import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import typescript from "typescript";
import babel from "vite-plugin-babel";

const { ModuleKind } = typescript;

export default defineConfig({
	plugins: [
		babel({
      babelConfig: {
        plugins: [
					["@babel/plugin-proposal-decorators", { version: "2023-05" }],
				],
      }
		}),
		tsconfigPaths(),
		dts({
			outDir: "dist/esm",
			entryRoot: "src",
			include: "src",
			tsconfigPath: "./tsconfig.build.json",
			compilerOptions: {
				module: ModuleKind.ESNext,
			},
		}),
		dts({
			outDir: "dist/cjs",
			entryRoot: "src",
			include: "src",
			tsconfigPath: "./tsconfig.build.json",
			compilerOptions: {
				module: ModuleKind.CommonJS,
			},
		}),
	],
	build: {
		outDir: "dist",
		minify: false,
		sourcemap: true,
		lib: {
			entry: "src/index.ts",
			formats: ["es", "cjs"],
			fileName: (format) => {
				if (format === "cjs") return "cjs/[name].js";
				return "esm/[name].js";
			},
		},
		rollupOptions: {
			output: {
				preserveModules: true,
				preserveModulesRoot: "src",
			},
		},
	},
});
