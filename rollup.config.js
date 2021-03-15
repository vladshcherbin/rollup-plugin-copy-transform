import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    copy({
      targets: [{
        src: 'assets/manifest.json',
        dest: 'dist',
        transform: (contents) => {
          const manifest = JSON.parse(contents)

          manifest.test = "ho"

          return Buffer.from(JSON.stringify(manifest, null, 2), 'utf8');
        }
      }]
    })
  ]
}
