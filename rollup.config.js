import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import preprocess from 'svelte-preprocess';
import sass from 'rollup-plugin-sass';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/main.ts',
    output: {
      sourcemap: true,
      name: 'app',
      file: 'public/bundle.js',
      format: 'iife'
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
		typescript({ sourceMap: !production, inlineSources: !production }),
    sass(),
    css({ output: 'bundle.css' }),
    svelte({ preprocess: preprocess(), emitCss: true })],
};