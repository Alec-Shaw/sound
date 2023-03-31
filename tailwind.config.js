/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "1024px",
      md: "768px",
      xs: "410px",
      xl: "1280px",
      xxs: "375px",
    },
    content: {
      img1: "url('./assets/Maskgroup.png')",
      img2: "url('./assets/Maskgroup2.png')",
      img3: "url('./assets/Maskgroup3.png')",
    },
    extend: {},
  },

  plugins: [],
};
