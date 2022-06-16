
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/util.js',
  output: [
    {
    file: './dist/bundle-cjs.js',
    format: 'cjs'
   },
   {
    file: './dist/bundle-iife.js',
    format: 'umd',
    name: 'myutil'
   },   
   {
    file: './dist/bundle-es.js',
    format: 'es'
   }   
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}