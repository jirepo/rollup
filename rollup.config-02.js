
export default [
    {
      input: 'src/main.js',
      output: {
        file: 'dist/bundle-cjs.js',
        format: 'cjs'
      }
    },
    {
      input: 'src/main2.js',
      output: [
        {
          file: 'dist/bundle-cjs2.js',
          format: 'cjs'
        },
        {
          file: 'dist/bundle-b2.js',
          format: 'es'
        }
      ]
    }
  ];