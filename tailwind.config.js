/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
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

        primaryDark:'bg-slate-900',
        secondaryDark: 'bg-gray-800',

        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

