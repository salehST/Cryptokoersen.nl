/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B313B",
        secondary: "#6C7A93",
        lgray: "#D3D7DE",
        cblue: "#0052FE",
        lblue: "#F5F8FF",
      },
      backgroundColor: {
          cblue: "#0052FE",
          lblue: "#F5F8FF",     
      },
    },
  },
  plugins: [],
}

