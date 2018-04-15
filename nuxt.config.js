module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ryan Wang | Front-end Web Developer | Web Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ryan Wang is a front-end web developer from Miami, Florida. Front-end Web Specialist developing into a Full-Stack Engineer. Currently accepting freelance opportunities.' },
      { property: 'og:image', content: 'http://ryancommits.com/web-preview.png'},
      { property: 'og:title', content: 'Ryan is a Front-End Web Developer'},
      { property: 'og:description', content: 'Check out Ryan\'s full profile'}
    ],
    script: [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla'}
    ]
  },
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-117555265-1'
    }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
