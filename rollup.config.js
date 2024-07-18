import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup'
import ignore from "rollup-plugin-ignore";
import postcss from 'rollup-plugin-postcss';

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
				inject: {
					insertAt: 'top',
				},
			}),
			terser(),
			ignore(["*.stories.tsx"])
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
		external: [/\.s?css$/],
	},
];