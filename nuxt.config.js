// const webpack = require('webpack')
// const path = require('path')
const os = require('os')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

/* const resolve = (dir) => {
  return path.join(__dirname, dir)
} */

const createHappyPlugin = (id, loaders) => {
  return new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,
    // make happy more verbose with HAPPY_VERBOSE=1
    // verbose: process.env.HAPPY_VERBOSE === '1'
    verbose: true
  })
}

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
    /* loaders: [
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
    ], */
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // include: [resolve('src')],
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=happy-babel-js',
        exclude: /node_modules/
        // include: [resolve('src')]
      },
      {
        test: /\.svg$/,
        loaders: ['svg-sprite-loader', 'happypack/loader?id=happy-svg']
        // include: [resolve('src/assets/icons'), resolve('src/assets/images')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        // include: [resolve('src/assets/images')],
        query: {
          limit: 8192,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
    plugins: [
      createHappyPlugin('happy-babel-js', ['babel-loader?cacheDirectory=true']),
      createHappyPlugin('happy-babel-vue', ['babel-loader?cacheDirectory=true']),
      createHappyPlugin('happy-css', ['css-loader', 'vue-style-loader']),
      createHappyPlugin('happy-svg', ['svg-sprite-loader']),
      // https://github.com/amireh/happypack/pull/131
      new HappyPack({
        loaders: [{
          path: 'vue-loader',
          query: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
          }
        }]
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
