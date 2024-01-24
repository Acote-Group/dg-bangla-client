/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#A8223B",
      },
      backgroundImage: {
        "banner-bg": "url('/src/assets/photos/ngif.gif')",
        serviceBg: "url('/src/assets/photos/service.png')",
        circleBg: "url('/src/assets/photos/banner-bg.jpg')",
        testoBg: "url('/src/assets/photos/testo.png')",
        whoBg: "url('/src/assets/photos/whoBg.png')",
        serviceBg2: "url('/src/assets/photos/serviceBg.png')",
        contactBg: "url('/src/assets/photos/contact.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("preline/plugin")],
};
