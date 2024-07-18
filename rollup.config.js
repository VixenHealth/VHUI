import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup'
import url from "postcss-url"
import postcss from 'rollup-plugin-postcss';
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			svgr(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			postcss({
				minimize: true,
				modules: true,
				extract: true,
				extensions: ['.css'],
				plugins: [
					url({
						url: "inline", // enable inline assets using base64 encoding
						maxSize: 10, // maximum file size to inline (in kilobytes)
						fallback: "copy", // fallback method to use if max size is exceeded
					})
				],
				inject: {
					insertAt: 'top',
				},
			}),
			terser(),
			image()
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
		external: [/\.s?css$/],
	},
];