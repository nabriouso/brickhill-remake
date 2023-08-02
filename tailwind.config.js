/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "rgb(0, 169, 254)",
          600: "rgb(0, 124, 220)"
        },
        warning: {
          500: "rgb(255, 194, 0)",
          600: "rgb(243, 155, 0)"
        },
        success: {
          500: "rgb(58, 222, 85)",
          600: "rgb(48, 183, 71)"
        },
        danger: {
          500: "rgb(255, 51, 68)",
          600: "rgb(221, 0, 17)"
        },
        blend: {
          500: "rgb(201, 201, 210)",
          600: "rgb(179, 179, 191)",
          700: "rgb(156, 156, 173)"
        },
        surface: {
          50: "rgb(237, 237, 237)",
          950: "rgb(25, 25, 28)"
        },
        'typography': "rgb(45, 45, 49)"
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      }
    },
  },
  plugins: [],
}

