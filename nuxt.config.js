module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-v2ex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' }
    ]
  },
  css: [
    '~assets/css/main.scss',
    '~assets/font/material-icons.css',
    'muse-ui/dist/muse-ui.css',
    'muse-ui/dist/theme-light.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { 
    color: '#2983E8',
    failedColor: '#FF2D39',
    height: '3px',
    duration: 5000
  },
  plugins: [
    { src: '~plugins/muse-ui.js', ssr: true },
    '~plugins/filters.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    vendor: ['axios'],
    /* loaders: [
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      }
    ], */
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
