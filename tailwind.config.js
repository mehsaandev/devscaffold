/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  darkMode:  'class',
  theme: {
  
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,

      "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
 
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "sans": ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "980px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

