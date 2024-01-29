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
        "banner-bg": "url('/src/assets/gifs/gof2.gif')",
        serviceBg: "url('/src/assets/photos/service.png')",
        circleBg: "url('/src/assets/photos/banner-bg.jpg')",
        testoBg: "url('/src/assets/photos/testoBg.jpg')",
        whoBg: "url('/src/assets/photos/whoBg.png')",
        serviceBg2: "url('/src/assets/photos/serviceBg.png')",
        contactBg: "url('/src/assets/photos/contact.png')",
        aboutBg: "url('/src/assets/photos/aboutBg.png')",
        aboutBg2: "url('/src/assets/photos/aboutBg2.jpg')",
        whyBg: "url('/src/assets/photos/whyBg.jpg')",
        teamBg: "url('/src/assets/photos/teamBg.png')",
        teamBg2: "url('/src/assets/photos/teamBg2.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("preline/plugin")],
};
