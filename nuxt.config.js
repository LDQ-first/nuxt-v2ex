// const webpack = require('webpack')
// const path = require('path')
const os = require('os')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

/* const resolve = (dir) => {
  return path.join(__dirname, dir)
} */

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
    /* script: [
      '~assets/js/public'
    ] */
  },
  css: [
    '~assets/css/main.scss',
    '~assets/font/material-icons.css',
    'muse-ui/dist/muse-ui.css',
    'muse-ui/dist/theme-light.css'
  ],
  /* modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://www.v2ex.com/api',
    credentials: false,
    proxyHeaders: false
  }, */
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
    vendor: ['axios', 'muse-ui'],
    // dll: true,
    /* plugins: [
      // 这个plugin是用于引入dll里生成的json的。
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./assets/js/public/vendor-mainfest.json') // 指向这个json
      })
    ], */
    /* loaders: [
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      }
    ], */
    loaders: [
      {
        test: /\.js[x]?$/,
        // include: [resolve('./assets/js')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel'
      }
    ],
    plugins: [
      new HappyPack({
        id: 'happybabel',
        loaders: ['babel-loader'],
        threadPool: happyThreadPool,
        verbose: true
      })
    ],
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
