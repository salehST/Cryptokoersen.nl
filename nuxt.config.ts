// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: [    
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      // Specify the font and its styles you want to include
      'Montserrat': [400, 600, 700]
    },
    display: 'swap' // Optional, configures the font-display property
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["@/assets/css/style.css"],    
  app: {
      head: {
        charset: 'utf-16',
        viewport: 'device-width, initial-scale=1',
        title: 'Cryptokoersen.nl',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'My amazing Cryptokoersen.nl site.' },
        
        ],
        script: [
          {
            // src: "js/main.js",
          },
        ],
      }
    },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
