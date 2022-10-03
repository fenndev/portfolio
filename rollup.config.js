import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import preprocess from 'svelte-preprocess';
import sass from 'rollup-plugin-sass';
import css from 'rollup-plugin-css-only';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy-assets';

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/main.ts',
    output: {
      sourcemap: true,
      name: 'app',
      file: 'dist/bundle.js',
      format: 'iife'
  },
  plugins: [
    resolve({ browser: true }),
    
    commonjs(),
		typescript({ sourceMap: !production, inlineSources: !production }),
    sass(),
    css({ output: 'bundle.css' }),
    html({ html: 
      { lang : 'en'}, 
      link: './bundle.css', 
      meta: [ 
        {charset: "UTF-8"}, 
        {'http-equiv' : 'X-UA-Compatible', content: 'IE=edge'}, 
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}], 
        
        script: './bundle.js', title: `fenndev's portfolio` }),
    copy({ assets: ['assets/'] }),
    svelte({ preprocess: preprocess(), emitCss: true })],
};