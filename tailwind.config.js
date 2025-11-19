/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class", 

  theme: {
    extend: {
      colors: {
        dominante: {
          forte: "#EDECE5",
          fraca: "#FFFFFF",
        },
        secundaria: {
          forte: "#F55B2D",
          fraca: "#F68C42",
        },
        destaque: {
          forte: "#F4D641",
          fraca: "#F4C042",
        },
      },

      // Sombras
      boxShadow: {
        big: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      // Container centralizado automático
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },

      // Tipografia fluida 
      fontSize: {
        "fluid-lg": "clamp(1.25rem, 2vw + 0.5rem, 2rem)",
        "fluid-xl": "clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)",
      },
    },

    screens: {
      smallest: "320px",
      pc: "1024px",
      lg: "1280px",
      xl: "1440px",
    },
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
