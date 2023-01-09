/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        putar: "putar 20s infinite linear",
        geser: "geser 1s infinite linear",
      },
      keyframes: {
        putar: {
          "100%": { transform: "rotate(360deg)" },
        },
        geser: {
          "0%, 100%": { transform: "translate(0px)" },
          "50%": { transform: "translate(5px)" },
        },
      },
    },
    fontFamily: {
      laila: "Laila",
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
