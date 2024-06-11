/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)'
      },

      fontFamily: {
        sans: ['var(--quicksand-font)']
      },
      spacing: {
        7.5: '1.875rem'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1200px'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

