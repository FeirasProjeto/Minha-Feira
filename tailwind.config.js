/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      boxShadow: {
        big: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    screens: {
      pc: "600px",
      smallest: "450px",
    },
  },
  plugins: [],
};
