import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
      vueRouterMode: 'hash', // 'hash' => se despliega en cualquier hosting estatico sin configurar rewrites
      // publicPath: '/',   // si lo subes a GitHub Pages en un subdirectorio, pon '/nombre-repo/'
    },

    devServer: {
      open: false,
      port: 9000
    },

    framework: {
      config: {},
      plugins: ['Notify', 'Loading']
    },

    animations: [],

    ssr: { pwa: false },

    pwa: {},

    cordova: {},
    capacitor: {},
    electron: {},
    bex: {}
  }
})
